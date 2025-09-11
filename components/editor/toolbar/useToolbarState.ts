import { useState, useEffect } from "react";
import { useCollections } from "@/hooks/useCollections";
import { useCreatePage, useDeletePage, useUpdatePage } from "@/hooks/usePages";
import { useCollectionItems } from "@/hooks/useCollectionItems";
import type { Page, ToolbarState } from "./types";

export function useToolbarState(
  projectId: string, 
  pages: Page[], 
  currentPageSlug?: string,
  mode: "design" | "cms" = "design",
  selectedItem?: any,
  onItemChange?: (item: any) => void
): ToolbarState & {
  createPageMutation: any;
  deletePageMutation: any;
  updatePageMutation: any;
  setCurrentMode: (mode: "design" | "cms") => void;
} {
  const [currentMode, setCurrentMode] = useState<"design" | "cms">(mode);
  const { data: collectionsResponse } = useCollections(projectId);
  const createPageMutation = useCreatePage();
  const deletePageMutation = useDeletePage();
  const updatePageMutation = useUpdatePage();

  const collections = collectionsResponse?.collections || [];
  const currentPage = pages.find((page) => page.slug === currentPageSlug);

  // Only show items dropdown when on a CMS detail page
  const isCurrentPageCMSDetail =
    currentPage?.pageType === "cms" && currentPage?.cmsPageType === "detail";

  // Fetch items for the current page's collection - always fetch if CMS detail page
  const collectionItemsQuery = useCollectionItems(
    currentPage?.collection || "",
    {
      limit: 50,
      status: "published",
    }
  );

  // Get all collection items for CMS detail pages
  const allCollectionItems =
    isCurrentPageCMSDetail && collectionItemsQuery.data?.items
      ? collectionItemsQuery.data.items.map((item: any) => {
          const collection = collections.find(
            (c) => c._id === currentPage?.collection
          );
          return {
            ...item,
            collectionName: collection?.name || "Unknown Collection",
            collectionId: collection?._id || "",
          };
        })
      : [];

  // Auto-select first item if no item is selected and items are available
  useEffect(() => {
    if (
      isCurrentPageCMSDetail &&
      allCollectionItems.length > 0 &&
      !selectedItem &&
      onItemChange
    ) {
      onItemChange(allCollectionItems[0]);
    }
  }, [isCurrentPageCMSDetail, allCollectionItems, selectedItem, onItemChange]);

  return {
    currentMode,
    setCurrentMode,
    collections,
    currentPage,
    isCurrentPageCMSDetail,
    allCollectionItems,
    createPageMutation,
    deletePageMutation,
    updatePageMutation,
  };
}
