import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSend: (message: string) => void;
  suggestions?: string[];
  disabled?: boolean;
}

export function ChatInput({ onSend, suggestions = [], disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="border-t border-gray-100 p-4 bg-white">
      {suggestions.length > 0 && (
        <div className="flex gap-2 mb-3 overflow-x-auto pb-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => onSend(suggestion)}
              className="px-3 py-1.5 text-sm bg-[#E6E6FA] text-[#2C3E50] rounded-full 
                hover:bg-[#d8d8f7] transition-colors whitespace-nowrap flex-shrink-0"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message Luna..."
          disabled={disabled}
          className="flex-1 px-4 py-2 rounded-full bg-gray-50 focus:outline-none focus:ring-2 
            focus:ring-[#F8B3D1] focus:ring-opacity-50 transition-all
            disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        <button
          type="submit"
          disabled={!message.trim() || disabled}
          className="p-2 rounded-full bg-[#F8B3D1] hover:bg-[#f7a1c7] transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <Send className="w-5 h-5 text-white" />
        </button>
      </form>
    </div>
  );
}