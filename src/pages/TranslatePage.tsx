import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TranslatePage: React.FC = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [language, setLanguage] = useState('French');

  const handleTranslate = () => {
    // TODO: Implement translation logic using OpenAI API
    console.log(`Translating "${text}" to ${language}`);
    // For now, we'll just set a placeholder translated text
    setTranslatedText(`This is a placeholder translation to ${language}`);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] p-4">
      <Textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow resize-none mb-4"
      />
      <ToggleGroup type="single" value={language} onValueChange={(value) => setLanguage(value)} className="justify-center mb-4">
        <ToggleGroupItem value="French">French</ToggleGroupItem>
        <ToggleGroupItem value="Norwegian">Norwegian</ToggleGroupItem>
        <ToggleGroupItem value="Japanese">Japanese</ToggleGroupItem>
      </ToggleGroup>
      <Button className="w-full mb-4" onClick={handleTranslate}>Translate</Button>
      <Textarea
        placeholder="Translated text will appear here"
        value={translatedText}
        readOnly
        className="flex-grow resize-none"
      />
    </div>
  );
};

export default TranslatePage;