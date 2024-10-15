import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput('');
      // TODO: Implement chat logic using OpenAI API
      setTimeout(() => {
        setMessages(prev => [...prev, { text: "This is a placeholder response.", isUser: false }]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col-reverse h-full overflow-y-auto ">
      <div className="flex-grow p-2 space-y-reverse4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-2 rounded-lg ${
              message.isUser
                ? 'bg-blue-500 text-white ml-auto'
                : 'bg-green-500 text-white mr-auto'
            } max-w-[80%]`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex-none">
        <div className="flex space-x-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
