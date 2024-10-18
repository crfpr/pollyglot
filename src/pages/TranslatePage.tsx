import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getTranslation } from '@/services/openai';

const TranslatePage: React.FC = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('Klingon');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTranslate = async () => {
    if (text.trim() && !isLoading) {
      setIsLoading(true);
      setError(null);
      try {
        console.log(`Translating to ${language}: ${text}`); // Debug log
        const result = await getTranslation(text, language);
        console.log('Translation result:', result); // Debug log
        setTranslation(result);
      } catch (error) {
        console.error('Translation error:', error);
        setError(error instanceof Error ? error.message : 'An unknown error occurred');
        setTranslation('');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardContent className="space-y-4 p-4">
        <Input
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ToggleGroup type="single" value={language} onValueChange={setLanguage}>
          <ToggleGroupItem value="German" className="flex-grow">German</ToggleGroupItem>
          <ToggleGroupItem value="Norwegian" className="flex-grow">Norwegian</ToggleGroupItem>
          <ToggleGroupItem value="Japanese" className="flex-grow">Japanese</ToggleGroupItem>
        </ToggleGroup>
        <Button className="w-full" onClick={handleTranslate} disabled={isLoading}>
          {isLoading ? 'Translating...' : 'Translate'}
        </Button>
        {error && (
          <div className="text-red-500 text-sm mt-2">{error}</div>
        )}
        {translation && (
          <div className="mt-4">
            <h3 className="font-semibold">Translation:</h3>
            <p className="break-words">{translation}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default TranslatePage;
