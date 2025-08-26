import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { convertHtmlToCraftComponent } from '@/lib/utils/html-to-craft-converter';
import { registerUserComponent, unregisterUserComponent } from '@/components/editor/craft-components';

interface UserBlock {
  id: string;
  name: string;
  description: string;
  component?: React.ComponentType; // Made optional since it can't be persisted
  htmlSource: string;
  createdAt: Date;
  tags: string[];
}

interface UserBlocksState {
  blocks: UserBlock[];
  addBlock: (block: Omit<UserBlock, 'id' | 'createdAt'>) => void;
  removeBlock: (id: string) => void;
  updateBlock: (id: string, updates: Partial<UserBlock>) => void;
  getBlock: (id: string) => UserBlock | undefined;
  initializeComponents: () => void; // Initialize components on app load
  clearAllBlocks: () => void; // Debug function to clear all blocks
}

export const useUserBlocksStore = create<UserBlocksState>()(
  persist(
    (set, get) => ({
      blocks: [],
      
      addBlock: (blockData) => {
        const newBlock: UserBlock = {
          ...blockData,
          id: `user_block_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date(),
        };
        
        // Register the component in the main component resolver
        if (typeof window !== 'undefined') {
          try {
            const result = convertHtmlToCraftComponent(
              newBlock.htmlSource,
              newBlock.name
            );
            console.log(result.component,"COMPONENT")
            registerUserComponent(newBlock.id, result.component);
          } catch (error) {
            console.error('Failed to register user component:', error);
          }
        }
        
        set((state) => ({
          blocks: [...state.blocks, newBlock],
        }));
      },
      
      removeBlock: (id) => {
        // Unregister the component from the main resolver
        if (typeof window !== 'undefined') {
          unregisterUserComponent(id);
        }
        
        set((state) => ({
          blocks: state.blocks.filter((block) => block.id !== id),
        }));
      },
      
      updateBlock: (id, updates) => {
        set((state) => ({
          blocks: state.blocks.map((block) =>
            block.id === id ? { ...block, ...updates } : block
          ),
        }));
        
        // If htmlSource was updated, re-register the component
        if (updates.htmlSource && typeof window !== 'undefined') {
          const block = get().blocks.find(b => b.id === id);
          if (block) {
            try {
              const result = convertHtmlToCraftComponent(
                updates.htmlSource,
                updates.name || block.name
              );
              registerUserComponent(id, result.component);
            } catch (error) {
              console.error('Failed to re-register user component:', error);
            }
          }
        }
      },
      
      getBlock: (id) => {
        return get().blocks.find((block) => block.id === id);
      },
      
      initializeComponents: () => {
        // Re-register all components on app load
        const blocks = get().blocks;
        console.log('Initializing user components, found blocks:', blocks.length);
        
        blocks.forEach((block) => {
          try {
            console.log('Initializing component for block:', block.name, block.id);
            const result = convertHtmlToCraftComponent(
              block.htmlSource,
              block.name
            );
            registerUserComponent(block.id, result.component);
            console.log('Successfully registered component:', block.id);
          } catch (error) {
            console.error('Failed to initialize user component:', block.name, error);
          }
        });
      },
      
      // Debugging function to clear all blocks
      clearAllBlocks: () => {
        const blocks = get().blocks;
        blocks.forEach((block) => {
          unregisterUserComponent(block.id);
        });
        set({ blocks: [] });
        console.log('Cleared all user blocks');
      },
    }),
    {
      name: 'user-blocks-storage',
      // Don't persist the component functions as they can't be serialized
      partialize: (state) => ({
        blocks: state.blocks.map(({ component, ...block }) => ({
          ...block,
          createdAt: new Date(block.createdAt), // Ensure dates are properly restored
        })),
      }),
    }
  )
);
