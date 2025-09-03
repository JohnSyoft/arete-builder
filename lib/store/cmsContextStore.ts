import { create } from 'zustand';

interface CMSContextState {
  currentCollectionId: string | null;
  currentItemId: string | null;
  setCollectionContext: (collectionId: string | null, itemId?: string | null) => void;
  clearContext: () => void;
}

export const useCMSContextStore = create<CMSContextState>((set) => ({
  currentCollectionId: null,
  currentItemId: null,
  setCollectionContext: (collectionId, itemId = null) => 
    set({ currentCollectionId: collectionId, currentItemId: itemId }),
  clearContext: () => 
    set({ currentCollectionId: null, currentItemId: null }),
}));
