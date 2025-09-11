import { create } from 'zustand'

interface ComponentEditorState {
  isOpen: boolean
  componentId: string | null
  componentName: string | null
  componentLayout: any | null
  projectId: string | null
  
  openComponentEditor: (
    componentId: string,
    componentName: string,
    projectId: string,
    initialLayout?: any
  ) => void
  closeComponentEditor: () => void
  updateComponentLayout: (layout: any) => void
  saveComponent: (layout: any) => void
}

export const useComponentEditorStore = create<ComponentEditorState>((set, get) => ({
  isOpen: false,
  componentId: null,
  componentName: null,
  componentLayout: null,
  projectId: null,
  
  openComponentEditor: (componentId, componentName, projectId, initialLayout = null) => {
    set({
      isOpen: true,
      componentId,
      componentName,
      projectId,
      componentLayout: initialLayout
    })
  },
  
  closeComponentEditor: () => {
    set({
      isOpen: false,
      componentId: null,
      componentName: null,
      componentLayout: null,
      projectId: null
    })
  },
  
  updateComponentLayout: (layout) => {
    set({ componentLayout: layout })
  },
  
  saveComponent: (layout) => {
    const { componentId, projectId } = get()
    console.log("Saving component:", { componentId, projectId, layout })
    
    // Here you would implement the actual save logic
    // For now, just update the layout in the store
    set({ componentLayout: layout })
    
    // TODO: Implement API call to save component layout
    // await saveComponentLayout(projectId, componentId, layout)
  }
}))
