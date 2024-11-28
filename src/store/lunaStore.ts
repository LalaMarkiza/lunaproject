import { create } from 'zustand';
import { Message } from '../types/chat';
import { LunaCore } from '../utils/chat/core/LunaCore';

interface LunaState {
  messages: Message[];
  isTyping: boolean;
  lunaCore: LunaCore;
  addMessage: (message: Message) => void;
  setTyping: (isTyping: boolean) => void;
  resetConversation: () => void;
}

export const useLunaStore = create<LunaState>((set, get) => ({
  messages: [{
    id: '1',
    type: 'bot',
    content: "Bonjour, je suis Luna 🌙 Comment puis-je vous accompagner aujourd'hui ?",
    timestamp: new Date(),
    suggestions: [
      'j\'ai des douleurs physiques',
      'j\'ai le moral dans les chaussettes',
      'je me sens stressée',
      'j\'ai des questions sur mon cycle',
      'je veux prendre soin de moi'
    ]
  }],
  isTyping: false,
  lunaCore: new LunaCore(),

  addMessage: (message) => set((state) => ({
    messages: [...state.messages, message]
  })),

  setTyping: (isTyping) => set({ isTyping }),

  resetConversation: () => {
    const lunaCore = get().lunaCore;
    lunaCore.resetConversation();
    set({
      messages: [{
        id: '1',
        type: 'bot',
        content: "Bonjour, je suis Luna 🌙 Comment puis-je vous accompagner aujourd'hui ?",
        timestamp: new Date(),
        suggestions: [
          'j\'ai des douleurs physiques',
          'j\'ai le moral dans les chaussettes',
          'je me sens stressée',
          'j\'ai des questions sur mon cycle',
          'je veux prendre soin de moi'
        ]
      }],
      isTyping: false
    });
  }
}));