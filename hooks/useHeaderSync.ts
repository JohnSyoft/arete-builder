"use client";

import { useCallback } from 'react';
import { useProjectPages, useUpdatePage } from './usePages';
import { 
  extractHeaderWrapper, 
  updateHeaderWrapper, 
  hasHeaderWrapper,
  type HeaderWrapperData 
} from '@/lib/utils/headerSync';

/**
 * Hook to manage HeaderWrapper synchronization across all pages
 */
export function useHeaderSync(projectId: string) {
  const { data: pagesResponse } = useProjectPages(projectId);
  const updatePageMutation = useUpdatePage();

  const pages = pagesResponse?.data?.pages || [];

  /**
   * Sync HeaderWrapper across all pages
   */
  const syncHeaderWrapper = useCallback(async (headerData: HeaderWrapperData) => {
    if (!pages.length) return;

    console.log('Syncing HeaderWrapper across all pages:', pages.length);

    // Only update pages that don't already have the same HeaderWrapper
    const pagesToUpdate = pages.filter(page => {
      const currentHeader = extractHeaderWrapper(page.layout);
      if (!currentHeader) return true; // Page doesn't have HeaderWrapper
      
      // Check if the HeaderWrapper is different (compare props)
      return JSON.stringify(currentHeader.props) !== JSON.stringify(headerData.props);
    });

    if (pagesToUpdate.length === 0) {
      console.log('All pages already have the same HeaderWrapper');
      return;
    }

    console.log(`Updating ${pagesToUpdate.length} pages with new HeaderWrapper`);

    // Update only the pages that need updating
    const updatePromises = pagesToUpdate.map(async (page) => {
      try {
        const currentLayout = page.layout;
        const updatedLayout = updateHeaderWrapper(currentLayout, headerData);
        
        await updatePageMutation.mutateAsync({
          id: page._id,
          pageData: { layout: updatedLayout }
        });
        
        console.log(`Updated HeaderWrapper for page: ${page.name}`);
      } catch (error) {
        console.error(`Failed to update HeaderWrapper for page ${page.name}:`, error);
      }
    });

    await Promise.all(updatePromises);
    console.log('HeaderWrapper sync completed');
  }, [pages, updatePageMutation]);

  /**
   * Remove HeaderWrapper from all pages
   */
  const removeHeaderWrapperFromAllPages = useCallback(async () => {
    if (!pages.length) return;

    console.log('Removing HeaderWrapper from all pages:', pages.length);

    const updatePromises = pages.map(async (page) => {
      try {
        const currentLayout = page.layout;
        const updatedLayout = removeHeaderWrapper(currentLayout);
        
        await updatePageMutation.mutateAsync({
          id: page._id,
          pageData: { layout: updatedLayout }
        });
        
        console.log(`Removed HeaderWrapper from page: ${page.name}`);
      } catch (error) {
        console.error(`Failed to remove HeaderWrapper from page ${page.name}:`, error);
      }
    });

    await Promise.all(updatePromises);
    console.log('HeaderWrapper removal completed');
  }, [pages, updatePageMutation]);

  /**
   * Get the current HeaderWrapper data from any page that has it
   */
  const getCurrentHeaderWrapper = useCallback((): HeaderWrapperData | null => {
    for (const page of pages) {
      const headerData = extractHeaderWrapper(page.layout);
      if (headerData) {
        return headerData;
      }
    }
    return null;
  }, [pages]);

  /**
   * Check if any page has a HeaderWrapper
   */
  const hasAnyHeaderWrapper = useCallback((): boolean => {
    return pages.some(page => hasHeaderWrapper(page.layout));
  }, [pages]);

  return {
    syncHeaderWrapper,
    removeHeaderWrapperFromAllPages,
    getCurrentHeaderWrapper,
    hasAnyHeaderWrapper,
    pages
  };
}

// Import the removeHeaderWrapper function
import { removeHeaderWrapper } from '@/lib/utils/headerSync';
