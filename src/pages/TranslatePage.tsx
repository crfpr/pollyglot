import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { getTranslation } from '@/services/openai';

const TranslatePage: React.FC = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('French');
  const [isLoading, setIsLoading] = useState(false);
  const [translation, setTranslation] = useState('');

  const handleTranslate = async () => {
    setIsLoading(true);
    try {
      const result = await getTranslation(text, language);
      setTranslatedText(result);
      setTranslation(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Translate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ToggleGroup type="single" value={language} onValueChange={(value) => setLanguage(value)} className="flex flex-wrap justify-center">
          <ToggleGroupItem value="French" className="flex-grow">French</ToggleGroupItem>
          <ToggleGroupItem value="Norwegian" className="flex-grow">Norwegian</ToggleGroupItem>
          <ToggleGroupItem value="Japanese" className="flex-grow">Japanese</ToggleGroupItem>
        </ToggleGroup>
        <Button className="w-full" onClick={handleTranslate} disabled={isLoading}>
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
};

export default TranslatePage;
