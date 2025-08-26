import { create } from 'zustand';
import { componentResolver } from '@/components/editor/craft-components';
import { convertHtmlToCraftComponent } from '@/lib/utils/html-to-craft-converter';

interface DynamicResolverState {
  dynamicComponents: Record<string, React.ComponentType>;
  registerComponent: (id: string, htmlSource: string, name: string) => void;
  unregisterComponent: (id: string) => void;
  getFullResolver: () => Record<string, React.ComponentType>;
  clearAll: () => void;
}

export const useDynamicResolverStore = create<DynamicResolverState>((set, get) => ({
  dynamicComponents: {},
  
  registerComponent: (id: string, htmlSource: string, name: string) => {
    try {
      const result = convertHtmlToCraftComponent(htmlSource, name);
      
      set((state) => ({
        dynamicComponents: {
          ...state.dynamicComponents,
          [id]: result.component,
        },
      }));
    } catch (error) {
      console.error('Failed to register component:', error);
    }
  },
  
  unregisterComponent: (id: string) => {
    set((state) => {
      const newComponents = { ...state.dynamicComponents };
      delete newComponents[id];
      return { dynamicComponents: newComponents };
    });
  },
  
  getFullResolver: () => {
    const state = get();
    return {
      ...componentResolver,
      ...state.dynamicComponents,
    };
  },
  
  clearAll: () => {
    set({ dynamicComponents: {} });
  },
}));
