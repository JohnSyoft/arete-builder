import React, { useEffect, useState, useMemo } from 'react';
import { useCollectionItems } from '@/hooks/useCollectionItems';
import { useCollection } from '@/hooks/useCollections';
import { cardComponents, getFieldValue, type CardDesignType } from './CollectionCards';
import { getCardLayoutClasses, useResponsiveGrid, getLoadingSkeletonClasses } from './CardLayoutUtils';

interface CollectionWrapperRuntimeProps {
  // Flex properties
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  gap?: string;
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly' | 'space-between';
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  minHeight?: string;
  padding?: string;
  margin?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  order?: string;
  overflowX?: 'visible' | 'hidden' | 'scroll' | 'auto';
  width?: string;
  height?: string;
  // Collection properties
  collectionId?: string;
  projectId?: string;
  collectionName?: string;
  maxItems?: number;
  cardDesign?: CardDesignType;
  // Field mapping
  titleField?: string;
  descriptionField?: string;
  imageField?: string;
  dateField?: string;
  linkField?: string;
  categoryField?: string;
  authorField?: string;
  priceField?: string;
  ratingField?: string;
  tagsField?: string;
}

export function CollectionWrapperRuntime({
  flexDirection = 'row',
  gap = 'gap-4',
  justifyContent = 'start',
  alignItems = 'start',
  wrap = 'wrap',
  minHeight = 'min-h-[200px]',
  padding = 'p-4',
  margin = 'my-4',
  flexGrow = '',
  flexShrink = '',
  flexBasis = '',
  order = '',
  overflowX = 'visible',
  width = 'auto',
  height = 'auto',
  collectionId = '',
  projectId = '',
  collectionName = 'Collection',
  maxItems = 3,
  cardDesign = 'default',
  titleField = 'title',
  descriptionField = 'description',
  imageField = 'image',
  dateField = 'date',
  linkField = 'link',
  categoryField = 'category',
  authorField = 'author',
  priceField = 'price',
  ratingField = 'rating',
  tagsField = 'tags',
}: CollectionWrapperRuntimeProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get collection details
  const { data: collectionData } = useCollection(collectionId);
  const collection = collectionData?.data?.collection;
  
  // Get collection items
  const { 
    data: itemsData, 
    isLoading: itemsLoading, 
    error: itemsError 
  } = useCollectionItems(collectionId, { limit: maxItems });
  
  const items = itemsData?.items || [];
  
  useEffect(() => {
    setIsLoading(itemsLoading);
    setError(itemsError ? 'Failed to load collection items' : null);
  }, [itemsLoading, itemsError]);
  
  const getFlexDirectionClass = (direction: string) => {
    switch (direction) {
      case 'row': return 'flex-row';
      case 'column': return 'flex-col';
      case 'row-reverse': return 'flex-row-reverse';
      case 'column-reverse': return 'flex-col-reverse';
      default: return 'flex-row';
    }
  };

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case 'start': return 'justify-start';
      case 'center': return 'justify-center';
      case 'end': return 'justify-end';
      case 'between': return 'justify-between';
      case 'space-between': return 'justify-between';
      case 'around': return 'justify-around';
      case 'evenly': return 'justify-evenly';
      default: return 'justify-start';
    }
  };

  const getAlignClass = (align: string) => {
    switch (align) {
      case 'start': return 'items-start';
      case 'center': return 'items-center';
      case 'end': return 'items-end';
      case 'stretch': return 'items-stretch';
      case 'baseline': return 'items-baseline';
      default: return 'items-start';
    }
  };

  const getWrapClass = (wrapValue: string) => {
    switch (wrapValue) {
      case 'wrap': return 'flex-wrap';
      case 'wrap-reverse': return 'flex-wrap-reverse';
      case 'nowrap': return 'flex-nowrap';
      default: return 'flex-wrap';
    }
  };

  const getAdvancedFlexClasses = () => {
    let classes = [];
    if (flexGrow) classes.push(flexGrow);
    if (flexShrink) classes.push(flexShrink);
    if (flexBasis) classes.push(flexBasis);
    if (order) classes.push(order);
    return classes.join(' ');
  };

  const getOverflowXClass = (overflow: string) => {
    switch (overflow) {
      case 'hidden': return 'overflow-x-hidden';
      case 'scroll': return 'overflow-x-scroll';
      case 'auto': return 'overflow-x-auto';
      case 'visible':
      default: return 'overflow-x-visible';
    }
  };

  // Memoize card data preparation for better performance
  const preparedItems = useMemo(() => {
    return items.map((item: any) => {
      const itemData = item.data || {};
      
      // Parse tags if it's a string
      let tags: string[] = [];
      const tagsValue = getFieldValue(itemData, tagsField);
      if (tagsValue) {
        if (Array.isArray(tagsValue)) {
          tags = tagsValue;
        } else if (typeof tagsValue === 'string') {
          tags = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean);
        }
      }
      
      // Parse rating if it's a string
      let rating: number | undefined;
      const ratingValue = getFieldValue(itemData, ratingField);
      if (ratingValue) {
        const numRating = parseFloat(ratingValue);
        if (!isNaN(numRating)) {
          rating = Math.min(Math.max(numRating, 0), 5); // Clamp between 0-5
        }
      }
      
      return {
        item,
        data: {
          title: getFieldValue(itemData, titleField),
          description: getFieldValue(itemData, descriptionField),
          image: getFieldValue(itemData, imageField),
          date: getFieldValue(itemData, dateField),
          link: getFieldValue(itemData, linkField),
          category: getFieldValue(itemData, categoryField),
          author: getFieldValue(itemData, authorField),
          price: getFieldValue(itemData, priceField),
          rating,
          tags,
        }
      };
    });
  }, [items, titleField, descriptionField, imageField, dateField, linkField, categoryField, authorField, priceField, ratingField, tagsField]);

  // Get the card component for the selected design
  const CardComponent = cardComponents[cardDesign] || cardComponents.default;

  const layoutClasses = getCardLayoutClasses(cardDesign, flexDirection);
  const shouldUseResponsiveGrid = useResponsiveGrid(cardDesign);

  if (isLoading) {
    return (
      <div className={`${padding} ${margin}`}>
        <div className="flex items-center justify-center py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading {collectionName}...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${padding} ${margin}`}>
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className={`${padding} ${margin}`}>
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No {collectionName.toLowerCase()} items found.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`${padding} ${margin}`}
      style={{
        width: width === 'auto' ? '100%' : width,
        height: height === 'auto' ? 'auto' : height,
      }}
    >
      <div 
        className={
          shouldUseResponsiveGrid 
            ? layoutClasses.responsiveClasses
            : `
                flex 
                ${getFlexDirectionClass(flexDirection)}
                ${gap} 
                ${getJustifyClass(justifyContent)} 
                ${getAlignClass(alignItems)} 
                ${getWrapClass(wrap)}
                ${minHeight}
                ${getAdvancedFlexClasses()}
                ${getOverflowXClass(overflowX)}
              `
        }
      >
        {preparedItems.map(({ item, data }, index) => (
          <CardComponent 
            key={item._id || index}
            item={item}
            index={index}
            data={data}
            className={shouldUseResponsiveGrid ? '' : layoutClasses.cardClasses}
          />
        ))}
      </div>
    </div>
  );
}
