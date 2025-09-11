import { create } from 'zustand';

interface CMSContextState {
  currentCollectionId: string | null;
  currentItemId: string | null;
  currentItemData: any | null; // Store full item data
  setCollectionContext: (collectionId: string | null, itemData?: any | null) => void;
  clearContext: () => void;
}

export const useCMSContextStore = create<CMSContextState>((set) => ({
  currentCollectionId: null,
  currentItemId: null,
  currentItemData: null,
  setCollectionContext: (collectionId, itemData = null) => 
    set({ 
      currentCollectionId: collectionId, 
      currentItemId: itemData?._id || null,
      currentItemData: itemData 
    }),
  clearContext: () => 
    set({ 
      currentCollectionId: null, 
      currentItemId: null,
      currentItemData: null 
    }),
}));
