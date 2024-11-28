import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ResourceStore {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useResourceStore = create<ResourceStore>()(
  persist(
    (set, get) => ({
      selectedCategory: null,
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      favorites: [],
      addFavorite: (id) => set((state) => ({
        favorites: [...state.favorites, id]
      })),
      removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter(fav => fav !== id)
      })),
      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: 'resource-storage'
    }
  )
);