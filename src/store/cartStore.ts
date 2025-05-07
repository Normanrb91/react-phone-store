import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  items: number;
  addItem: (numItems: number) => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: 0,
      addItem: (numItems) => set(() => ({ items: numItems })),
    }),
    {
      name: 'cart-storage',
    }
  )
);