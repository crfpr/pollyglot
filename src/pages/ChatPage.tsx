import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getChatResponse } from '@/services/openai';

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'system', content: "You are a polyglot quiz host. Respond to the user's message in a random language (e.g. Korean, Spanish, French, Elvish, etc.). Keep the response short and concise. If the user guesses the language, respond in English and congratulate them before continuing in a new random language." }
  ]);
  const [input, setInput] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() && !isLoading) {
      setIsLoading(true);
      const userMessage = input.trim();
      const newUserMessage: Message = { role: 'user', content: userMessage };
      setMessages(prev => [...prev, newUserMessage]);
      setInput('');
      try {
        const updatedMessages = [...messages, newUserMessage];
        const response = await getChatResponse(updatedMessages);
        const assistantMessage: Message = { role: 'assistant', content: response };
        setMessages(prev => [...prev, assistantMessage]);
      } catch (error) {
        console.error('Chat error:', error);
        const errorMessage: Message = { role: 'assistant', content: "Sorry, an error occurred. Please try again." };
        setMessages(prev => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col h-full pt-16">
      <div className="flex-grow overflow-y-auto p-4 space-y-4 pt-10 pb-20">
        {messages.slice(1).map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-green-500 text-white mr-auto'
            } max-w-[80%]`}
          >
            {message.content}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="fixed bottom-16 left-0 right-0 bg-white border-t p-4">
        <div className="flex space-x-2 max-w-screen-lg mx-auto">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
