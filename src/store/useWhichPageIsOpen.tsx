import { create } from 'zustand';

interface WhichPageIsOpen {
  view: number;
  setView: (newView: number) => void;
}

const useWhichPageIsOpen = create<WhichPageIsOpen>((set) => ({
  view: 0,
  setView: (newView) => set({ view: newView }),
}));

export default useWhichPageIsOpen;