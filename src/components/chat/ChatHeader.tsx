import React from 'react';
import { Moon, Settings } from 'lucide-react';

export function ChatHeader() {
  return (
    <div className="border-b border-gray-100 bg-white p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#F8B3D1] flex items-center justify-center">
          <Moon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-semibold text-lg text-[#2C3E50]">Luna</h1>
          <p className="text-sm text-gray-500">Votre compagne bien-être</p>
        </div>
      </div>
      
      <button
        className="p-2 rounded-full hover:bg-gray-50 transition-colors"
        aria-label="Settings"
      >
        <Settings className="w-5 h-5 text-gray-400" />
      </button>
    </div>
  );
}