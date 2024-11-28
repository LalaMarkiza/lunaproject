import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type Page = 'home' | 'calendar' | 'chat' | 'resources' | 'profile';

interface AppState {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isOnboarded: boolean;
  completeOnboarding: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      currentPage: 'home',
      setCurrentPage: (page) => set({ currentPage: page }),
      isOnboarded: false,
      completeOnboarding: () => set({ isOnboarded: true }),
    }),
    {
      name: 'luna-app-storage',
    }
  )
);