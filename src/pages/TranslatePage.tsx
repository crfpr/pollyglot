import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getTranslation } from '@/services/openai';

const TranslatePage: React.FC = () => {
  console.log("Rendering TranslatePage");
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('French');
  const [translation, setTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      setError("OpenAI API key is missing. Please check your environment variables.");
    }
  }, []);

  const handleTranslate = async () => {
    if (text.trim() && !isLoading && !error) {
      setIsLoading(true);
      setError(null);
      try {
        const result = await getTranslation(text, language);
        setTranslation(result);
      } catch (error) {
        console.error('Translation error:', error);
        setError("An error occurred during translation. Please try again later.");
        setTranslation('');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (error) {
    return (
      <Card className="w-full max-w-md mx-auto mt-10">
        <CardContent className="space-y-4">
          <div className="text-red-500 text-sm mt-2">{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardContent className="space-y-4 p-4">
        <Input
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ToggleGroup type="single" value={language} onValueChange={setLanguage}>
          <ToggleGroupItem value="French" className="flex-grow">French</ToggleGroupItem>
          <ToggleGroupItem value="Norwegian" className="flex-grow">Norwegian</ToggleGroupItem>
          <ToggleGroupItem value="Japanese" className="flex-grow">Japanese</ToggleGroupItem>
        </ToggleGroup>
        <Button className="w-full" onClick={handleTranslate} disabled={isLoading || !!error}>
          {isLoading ? 'Translating...' : 'Translate'}
        </Button>
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