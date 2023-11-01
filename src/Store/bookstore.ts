import {create} from 'zustand';

interface IBook {
    title: string,
    amount: number,
    author: string,
    updateAmount: (newAmount: number) => void
}

export const useBookStore = create<IBook>( (set) => ({
    title: 'Gitanjali',
    amount: 40,
    author: 'R. N. Tagore',
    updateAmount: (newAmount: number ) => set({ amount: newAmount }),
}));