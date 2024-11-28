import React, { useEffect, useRef } from 'react';
import { ChatHeader } from '../components/chat/ChatHeader';
import { ChatMessage } from '../components/chat/ChatMessage';
import { ChatInput } from '../components/chat/ChatInput';
import { useLunaStore } from '../store/lunaStore';
import { Message } from '../types/chat';

export function ChatWithLuna() {
  const { 
    messages, 
    isTyping,
    lunaCore,
    addMessage, 
    setTyping
  } = useLunaStore();
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleExerciseComplete = () => {
    const postExerciseMessage: Message = {
      id: Date.now().toString(),
      type: 'bot',
      content: "Comment vous sentez-vous après cet exercice ?",
      timestamp: new Date(),
      suggestions: [
        'je me sens mieux',
        'ça ne va pas mieux',
        'je ne sais pas trop'
      ]
    };
    
    setTimeout(() => {
      addMessage(postExerciseMessage);
    }, 500);
  };

  const handleSend = async (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date()
    };
    addMessage(userMessage);

    // Show typing indicator
    setTyping(true);

    // Get Luna's response
    const response = lunaCore.processMessage(content);
    
    // Add delay for natural conversation flow
    await new Promise(resolve => setTimeout(resolve, response.delay || 1000));
    
    // Hide typing indicator and add Luna's response
    setTyping(false);
    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'bot',
      content: response.content,
      timestamp: new Date(),
      isExercise: response.type === 'exercise',
      exercise: response.exercise,
      suggestions: response.suggestions,
      onExerciseComplete: response.type === 'exercise' ? handleExerciseComplete : undefined
    };
    addMessage(botMessage);
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFF5F5]">
      <ChatHeader />
      
      <div className="flex-1 overflow-y-auto px-4">
        <div className="max-w-3xl mx-auto py-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              {...message}
            />
          ))}
          {isTyping && (
            <div className="flex gap-2 items-center text-gray-500 text-sm ml-12 mb-4">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      <ChatInput 
        onSend={handleSend}
        suggestions={messages[messages.length - 1]?.suggestions}
        disabled={isTyping}
      />
    </div>
  );
}