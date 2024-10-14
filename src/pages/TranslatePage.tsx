import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const TranslatePage: React.FC = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('French');

  const handleTranslate = () => {
    // TODO: Implement translation logic using OpenAI API
    console.log(`Translating "${text}" to ${language}`);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Translate</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Enter text to translate"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <ToggleGroup type="single" value={language} onValueChange={(value) => setLanguage(value)}>
          <ToggleGroupItem value="French">French</ToggleGroupItem>
          <ToggleGroupItem value="Norwegian">Norwegian</ToggleGroupItem>
          <ToggleGroupItem value="Japanese">Japanese</ToggleGroupItem>
        </ToggleGroup>
        <Button className="w-full" onClick={handleTranslate}>Translate</Button>
      </CardContent>
    </Card>
  );
};

export default TranslatePage;