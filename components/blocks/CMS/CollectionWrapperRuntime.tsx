import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'next/navigation';
import { useCollectionItems } from '@/hooks/useCollectionItems';
import { useCollection } from '@/hooks/useCollections';
import { cardComponents, getFieldValue, type CardDesignType } from './CollectionCards';
import { getCardLayoutClasses, useResponsiveGrid, getLoadingSkeletonClasses } from './CardLayoutUtils';
import { type CollectionWrapperBaseProps, mergeWithDefaults } from './CollectionWrapperConfig';

// Runtime component uses same props as base (excluding children and nonEditable)
interface CollectionWrapperRuntimeProps extends Omit<CollectionWrapperBaseProps, 'children' | 'nonEditable'> {}

export function CollectionWrapperRuntime(props: CollectionWrapperRuntimeProps) {
  // Merge props with defaults using shared utility
  const mergedProps = mergeWithDefaults(props);
  const {
    flexDirection,
    gap,
    justifyContent,
    alignItems,
    wrap,
    minHeight,
    padding,
    margin,
    flexGrow,
    flexShrink,
    flexBasis,
    order,
    overflowX,
    width,
    height,
    collectionId,
    projectId,
    collectionName,
    maxItems,
    cardDesign,
    titleField,
    descriptionField,
    imageField,
    dateField,
    linkField,
    categoryField,
    authorField,
    priceField,
    ratingField,
    tagsField,
  } = mergedProps;
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Get current route params for navigation
  const params = useParams();
  const currentProjectId = params?.projectId as string || projectId;
  
  // Get collection details
  const { data: collectionData } = useCollection(collectionId);
  const collection = collectionData?.collection;
  console.log({collection})
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
      
      // Generate navigation link for item detail page
      // Format: /site/{projectId}/{collectionSlug}/{itemSlug}
      let navigationLink = '';
      if (currentProjectId && collection?.slug && item.slug) {
        navigationLink = `/site/${currentProjectId}/${collection.slug}/${item.slug}`;
      }
      
      // Get external link from linkField or use navigation link
      const externalLink = getFieldValue(itemData, linkField);
      const finalLink = externalLink || navigationLink;
      
      return {
        item,
        data: {
          title: getFieldValue(itemData, titleField),
          description: getFieldValue(itemData, descriptionField),
          image: getFieldValue(itemData, imageField),
          date: getFieldValue(itemData, dateField),
          link: finalLink,
          category: getFieldValue(itemData, categoryField),
          author: getFieldValue(itemData, authorField),
          price: getFieldValue(itemData, priceField),
          rating,
          tags,
        },
        // Store both links for different use cases
        navigationLink,
        externalLink,
      };
    });
  }, [items, titleField, descriptionField, imageField, dateField, linkField, categoryField, authorField, priceField, ratingField, tagsField, currentProjectId, collection?.slug]);

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
        {console.log({preparedItems})}
        {preparedItems.map(({ item, data, navigationLink, externalLink }, index) => (
          <CardComponent 
            key={item._id || index}
            item={item}
            index={index}
            data={{
              ...data,
              // Pass both link types for card to decide
              isExternal: !!externalLink,
            }}
            className={shouldUseResponsiveGrid ? '' : layoutClasses.cardClasses}
          />
        ))}
      </div>
    </div>
  );
}
