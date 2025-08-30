import { create } from 'zustand';

interface DrawerState {
  isOpen: boolean;
  type: 'collectionItem' | null;
  props: any;
  openDrawer: (type: 'collectionItem', props: any) => void;
  closeDrawer: () => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  type: null,
  props: {},
  openDrawer: (type, props) => set({ isOpen: true, type, props }),
  closeDrawer: () => set({ isOpen: false, type: null, props: {} }),
}));
