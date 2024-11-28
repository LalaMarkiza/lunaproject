import React from 'react';
import { User, Bot } from 'lucide-react';
import { Message } from '../../types/chat';
import { BreathingExercise } from '../exercises/BreathingExercise';

interface ChatMessageProps extends Message {
  onExerciseComplete?: () => void;
}

export function ChatMessage({ type, content, timestamp, isExercise, exercise, onExerciseComplete }: ChatMessageProps) {
  const isBot = type === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? '' : 'flex-row-reverse'} mb-4`}>
      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isBot ? 'bg-[#F8B3D1]' : 'bg-[#E6E6FA]'}`}>
        {isBot ? <Bot size={18} className="text-white" /> : <User size={18} className="text-white" />}
      </div>
      <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} max-w-[80%]`}>
        <div className={`rounded-2xl px-4 py-2.5 
          ${isBot ? 'bg-white shadow-sm' : 'bg-[#E6E6FA]'}`}>
          <p className="text-[#2C3E50] text-sm">{content}</p>
          {isExercise && exercise && (
            <div className="mt-4">
              <BreathingExercise 
                exercise={exercise}
                onComplete={onExerciseComplete!}
              />
            </div>
          )}
        </div>
        <span className="text-xs text-gray-400 mt-1">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
}