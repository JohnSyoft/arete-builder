import { create } from 'zustand'

interface PropertiesPanelState {
  isOpen: boolean
  elementType: 'text' | 'button' | 'image' | 'spacer' | 'divider' | 'container' | 'columns' | 'link' | 'video' | 'map' | 'badge' | 'input' | null
  elementProps: any
  elementId: string | null
  onPropsChange: ((props: any) => void) | null
  
  openPanel: (
    elementType: 'text' | 'button' | 'image' | 'spacer' | 'divider' | 'container' | 'columns' | 'link' | 'video' | 'map' | 'badge' | 'input',
    elementProps: any,
    elementId: string,
    onPropsChange: (props: any) => void
  ) => void
  closePanel: () => void
  updateProps: (props: any) => void
}

export const usePropertiesPanelStore = create<PropertiesPanelState>((set, get) => ({
  isOpen: false,
  elementType: null,
  elementProps: {},
  elementId: null,
  onPropsChange: null,
  
  openPanel: (elementType, elementProps, elementId, onPropsChange) => {
    console.log('openPanel called', { elementType, elementProps, elementId })
    set({
      isOpen: true,
      elementType,
      elementProps,
      elementId,
      onPropsChange
    })
  },
  
  closePanel: () => {
    set({
      isOpen: false,
      elementType: null,
      elementProps: {},
      elementId: null,
      onPropsChange: null
    })
  },
  
  updateProps: (props) => {
    const { onPropsChange } = get()
    if (onPropsChange) {
      onPropsChange(props)
    }
    set({ elementProps: props })
  }
}))
