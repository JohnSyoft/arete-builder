import { create } from 'zustand'

type ElementType = 
  | 'text' | 'button' | 'image' | 'spacer' | 'divider' | 'container' | 'columns' | 'link' | 'video' | 'map' | 'badge' | 'input' 
  | 'row' | 'card' | 'heading' | 'select' | 'checkbox' | 'textarea' | 'linebreak' | 'icon' | 'grid' | 'navigation' | 'list' | 'alert' | 'flexrow' | 'flex'
  | 'dropdown' | 'switch' | 'radiobutton' | 'slider' | 'ratingbar' | 'counterbutton' | 'pincode' | 'choicechips' | 'checkboxlisttile' | 'switchlisttile' | 'checkboxgroup' | 'creditcardform' | 'signature'
  | 'form' | 'tab' | 'tabpanel' | 'carousel' | 'herocarouselsimple'
  | 'BlogCard' | 'ProductCard' | 'DoctorCard' | 'TestimonialCard'
  | null

interface PropertiesPanelState {
  isOpen: boolean
  elementType: ElementType
  elementProps: any
  elementId: string | null
  onPropsChange: ((props: any) => void) | null
  
  openPanel: (
    elementType: Exclude<ElementType, null>,
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
