import { type CardDesignType } from './CollectionCards';

// Layout configuration for different card designs
export const getCardLayoutClasses = (
  cardDesign: CardDesignType,
  flexDirection: string = 'row'
): {
  containerClasses: string;
  cardClasses: string;
  responsiveClasses: string;
} => {
  const baseContainerClasses = 'flex flex-wrap';
  
  switch (cardDesign) {
    case 'grid':
      return {
        containerClasses: `${baseContainerClasses} gap-4`,
        cardClasses: 'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)] xl:w-[calc(25%-0.75rem)]',
        responsiveClasses: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
      };
      
    case 'compact':
      return {
        containerClasses: flexDirection === 'column' ? 'flex flex-col space-y-4' : `${baseContainerClasses} gap-4`,
        cardClasses: 'w-full max-w-2xl',
        responsiveClasses: 'space-y-4'
      };
      
    case 'timeline':
      return {
        containerClasses: 'flex flex-col space-y-6',
        cardClasses: 'w-full',
        responsiveClasses: 'space-y-6'
      };
      
    case 'image-focused':
      return {
        containerClasses: `${baseContainerClasses} gap-6`,
        cardClasses: 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]',
        responsiveClasses: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      };
      
    case 'text-focused':
      return {
        containerClasses: flexDirection === 'column' ? 'flex flex-col space-y-8' : `${baseContainerClasses} gap-8`,
        cardClasses: 'w-full max-w-lg',
        responsiveClasses: flexDirection === 'column' ? 'space-y-8' : 'grid grid-cols-1 lg:grid-cols-2 gap-8'
      };
      
    case 'detailed':
      return {
        containerClasses: `${baseContainerClasses} gap-6`,
        cardClasses: 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(50%-0.75rem)]',
        responsiveClasses: 'grid grid-cols-1 lg:grid-cols-2 gap-6'
      };
      
    case 'minimal':
      return {
        containerClasses: `${baseContainerClasses} gap-4`,
        cardClasses: 'w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.67rem)]',
        responsiveClasses: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'
      };
      
    default: // 'default'
      return {
        containerClasses: `${baseContainerClasses} gap-6`,
        cardClasses: 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]',
        responsiveClasses: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      };
  }
};

// Get optimal max items for viewport
export const getOptimalMaxItems = (cardDesign: CardDesignType): number => {
  switch (cardDesign) {
    case 'grid':
      return 8; // 2x4 grid on mobile, 4x2 on desktop
    case 'compact':
      return 5; // Vertical list works well with 5 items
    case 'timeline':
      return 6; // Timeline shouldn't be too long
    case 'image-focused':
      return 6; // 2x3 grid works well
    case 'text-focused':
      return 4; // Text-heavy content, fewer items
    case 'detailed':
      return 4; // Detailed cards need more space
    case 'minimal':
      return 9; // 3x3 grid works well for minimal
    default:
      return 6; // Good default for most layouts
  }
};

// Determine if card design benefits from responsive grid
export const useResponsiveGrid = (cardDesign: CardDesignType): boolean => {
  return ['grid', 'default', 'minimal', 'image-focused', 'detailed'].includes(cardDesign);
};

// Get loading skeleton configuration based on card design
export const getLoadingSkeletonClasses = (cardDesign: CardDesignType) => {
  const baseSkeletonClasses = 'animate-pulse bg-gray-200 rounded';
  
  switch (cardDesign) {
    case 'grid':
      return {
        container: 'aspect-square bg-gray-100 rounded-lg p-4',
        elements: [
          `${baseSkeletonClasses} h-32 w-full mb-3`,
          `${baseSkeletonClasses} h-4 w-3/4 mb-2`,
          `${baseSkeletonClasses} h-3 w-1/2`
        ]
      };
      
    case 'compact':
      return {
        container: 'flex items-center space-x-4 p-4 bg-gray-50 rounded-lg',
        elements: [
          `${baseSkeletonClasses} w-20 h-20 rounded-lg flex-shrink-0`,
          `${baseSkeletonClasses} h-4 w-3/4 mb-2`,
          `${baseSkeletonClasses} h-3 w-full mb-1`,
          `${baseSkeletonClasses} h-3 w-1/2`
        ]
      };
      
    case 'timeline':
      return {
        container: 'relative pl-8',
        elements: [
          'absolute left-0 top-0 w-4 h-4 bg-gray-300 rounded-full border-4 border-white',
          `ml-4 p-4 bg-gray-50 rounded-lg`,
          `${baseSkeletonClasses} h-3 w-24 mb-2`,
          `${baseSkeletonClasses} h-4 w-3/4 mb-2`,
          `${baseSkeletonClasses} h-3 w-full`
        ]
      };
      
    default:
      return {
        container: 'bg-gray-50 rounded-lg overflow-hidden',
        elements: [
          `${baseSkeletonClasses} h-48 w-full`,
          `${baseSkeletonClasses} h-4 w-3/4 mb-2`,
          `${baseSkeletonClasses} h-3 w-full mb-1`,
          `${baseSkeletonClasses} h-3 w-2/3`
        ]
      };
  }
};
