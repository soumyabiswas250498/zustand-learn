import { create } from "zustand";

interface IBook {
  title: string;
  amount: number;
  author: string;
  qty: number;
  updateQty: (newQty: number) => void;
  updateAmount: (newAmount: number) => void;
}

export const useBookStore = create<IBook>((set, get) => ({
  title: "Gitanjali",
  amount: 40,
  author: "R. N. Tagore",
  qty: 4,
  updateQty: (newQty: number) => {
    const qtyState = get().qty;
    set({ qty: newQty + qtyState });
  },
  updateAmount: (newAmount: number) => set({ amount: newAmount }),
}));
