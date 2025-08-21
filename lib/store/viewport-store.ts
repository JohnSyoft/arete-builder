import { create } from 'zustand'

export type ViewportType = 'mobile' | 'tablet' | 'desktop'

interface ViewportState {
  currentViewport: ViewportType
  setViewport: (viewport: ViewportType) => void
  getViewportStyles: () => {
    width: string
    maxWidth: string
    margin: string
    transition: string
  }
}

export const useViewportStore = create<ViewportState>((set, get) => ({
  currentViewport: 'desktop',
  
  setViewport: (viewport: ViewportType) => {
    set({ currentViewport: viewport })
  },
  
  getViewportStyles: () => {
    const viewport = get().currentViewport
    
    switch (viewport) {
      case 'mobile':
        return {
          width: '375px',
          maxWidth: '375px',
          margin: '0 auto',
          transition: 'all 0.3s ease',
        }
      case 'tablet':
        return {
          width: '768px',
          maxWidth: '768px',
          margin: '0 auto',
          transition: 'all 0.3s ease',
        }
      case 'desktop':
      default:
        return {
          width: '100%',
          maxWidth: 'none',
          margin: '0',
          transition: 'all 0.3s ease',
        }
    }
  },
}))
