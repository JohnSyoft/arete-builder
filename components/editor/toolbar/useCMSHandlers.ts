import { useRouter } from "next/navigation";
import { useModalStore } from "@/lib/store/modalStore";
import { apiClient } from "@/lib/api/apiClient";
import {
  generateCMSDetailLayout,
} from "@/lib/cms-layout-detail-generator";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { useGetOrCreateCMSCollectionComponent } from "@/hooks/useComponents";
import type { Page } from "./types";
import { generateCMSLayouts } from "@/lib/cms-index-layout-generator";
import { generateCMSCollectionDesignSlug } from "@/lib/utils/slugGenerator";

interface UseCMSHandlersProps {
  projectId: string;
  pages: Page[];
  currentPage?: Page;
  collections: any[];
  onPageChange?: (pageSlug: string) => void;
  onItemChange?: (item: any) => void;
  createPageMutation: any;
  updatePageMutation: any;
  onLayoutUpdate?: (layout: any) => void; // Add callback for layout updates
}

export function useCMSHandlers({
  projectId,
  pages,
  currentPage,
  collections,
  onPageChange,
  onItemChange,
  createPageMutation,
  updatePageMutation,
  onLayoutUpdate,
}: UseCMSHandlersProps) {
  const router = useRouter();
  const { openModal } = useModalStore();
  const { setCollectionContext } = useCMSContextStore();
  const getOrCreateCMSCollectionComponent = useGetOrCreateCMSCollectionComponent();

  // Function to regenerate layout when item changes
  const handleRegenerateLayout = async (selectedItem: any) => {
    if (!currentPage || !currentPage.collection || currentPage.pageType !== "cms" || currentPage.cmsPageType !== "detail") {
      return;
    }

    try {
      console.log("Regenerating layout for item:", selectedItem?._id);
      
      // Get collection data
      const collection = collections.find((c) => c._id === currentPage.collection);
      if (!collection) {
        console.warn("Collection not found for layout regeneration");
        return;
      }

      // Fetch the full item data with all references populated
      let fullItemData = selectedItem;
      if (selectedItem && selectedItem._id) {
        try {
          const itemResponse = await apiClient.get(
            `/collection-items/single/${selectedItem._id}?populate=true&populateAll=true`
          );
          fullItemData = itemResponse.data?.item || selectedItem;
        } catch (error) {
          console.warn("Could not fetch full item data for layout regeneration:", error);
        }
      }

      // Generate new layout with the selected item
      const newLayout = generateCMSDetailLayout(collection, fullItemData);
      
      // Update the layout through the callback
      if (onLayoutUpdate) {
        onLayoutUpdate(newLayout);
      }

      console.log("Layout regenerated successfully for item:", fullItemData?._id);
    } catch (error) {
      console.error("Error regenerating layout:", error);
    }
  };

  const handleAddCMSPage = async (
    collectionId: string,
    collectionName: string,
    pageType: "index" | "detail"
  ) => {
    // For both index and detail pages, proceed directly
    await createCMSPage(collectionId, collectionName, pageType);
  };

  const createCMSPage = async (
    collectionId: string,
    collectionName: string,
    pageType: "index" | "detail"
  ) => {
    try {
      const collectionSlug = collectionName.toLowerCase().replace(/\s+/g, "-");
      const pageSlug =
        pageType === "index" ? collectionSlug : `${collectionSlug}/:id`;
      const pageName =
        pageType === "index" ? collectionName : `${collectionName} Detail`;

      const existingPage = pages.find((p) => p.slug === pageSlug);
      if (existingPage) {
        alert(
          `A page with slug "${pageSlug}" already exists. Please choose a different page type or rename the existing page.`
        );
        return;
      }

      const collection = collections.find((c) => c._id === collectionId);
      if (!collection) {
        alert("Collection not found. Please try again.");
        return;
      }

      let firstItem = null;
      if (pageType === "detail") {
        try {
          const itemsResponse = await apiClient.get(
            `/collection-items/${collectionId}?limit=1&status=published&populate=true&populateAll=true`
          );
          firstItem = itemsResponse.data?.items?.[0] || null;
        } catch (error) {
          console.warn(
            "Could not fetch sample item for layout generation:",
            error
          );
        }
      }

      let generatedLayout;
      if (pageType === "detail") {
        generatedLayout = generateCMSDetailLayout(collection, firstItem);
      } else {
        let sampleItems = null;
        try {
          const itemsResponse = await apiClient.get(
            `/collection-items/${collectionId}?limit=6&status=published&populate=true`
          );
          sampleItems = itemsResponse.data?.items || null;
        } catch (error) {
        
        }
        
        // Generate a unique slug for this specific component design first
        const componentSlug = generateCMSCollectionDesignSlug(
          collectionId, 
          collection.name, 
          'index-layout'
        );
        
        // Generate layout using the simplified CollectionWrapper approach
        const { indexLayout } = generateCMSLayouts(
          collection, 
          sampleItems, 
          undefined, 
          projectId, 
          componentSlug
        );
        
        // Use the simplified layout directly
        generatedLayout = indexLayout;
      }

      const newPage = await createPageMutation.mutateAsync({
        project: projectId,
        name: pageName,
        slug: pageSlug,
        isHomePage: false,
        collection: collectionId,
        pageType: "cms",
        cmsPageType: pageType,
        layout: JSON.stringify(generatedLayout),
      });

      if (onPageChange && newPage.data.page) {
        // Set CMS context when creating and navigating to a new CMS page
        if (pageType === "detail") {
          setCollectionContext(collectionId, firstItem);
        } else {
          setCollectionContext(collectionId, null);
        }
        onPageChange(newPage.data.page.slug);
      }
    } catch (error) {
      console.error("Error creating CMS page:", error);
      alert("Failed to create CMS page. Please try again.");
    }
  };

  const handleCollectionAction = (collectionId: string) => {
    // Find the collection to get its name
    const collection = collections.find((c) => c._id === collectionId);
    const collectionName = collection?.name || 'Collection';
    
    // Generate a unique component slug for the collection design
    const componentSlug = generateCMSCollectionDesignSlug(
      collectionId, 
      collectionName, 
      'card-design'
    );
    router.push(`/${projectId}/components/${componentSlug}/editor`);
  };

  const handleItemAction = async (item: any) => {
    // Update the selected item to show its data in the page
    if (onItemChange) {
      onItemChange(item);
    }
    
    // Update CMS context with the new item
    if (currentPage?.collection) {
      setCollectionContext(currentPage.collection, item);
    }
    
    // Regenerate layout with the new item data
    await handleRegenerateLayout(item);
  };

  const handleEditInCMS = () => {
    if (currentPage?.collection) {
      router.push(`/cms/${projectId}/collections/${currentPage.collection}`);
    }
  };

  const handleSwapCollection = async (
    newCollectionId: string,
    newCollectionName: string
  ) => {
    if (!currentPage) return;

    const currentCollectionName = collections.find(
      (c) => c._id === currentPage.collection
    )?.name;

    openModal("confirmation", {
      title: "Change Collection?",
      message: `Are you sure you want to change this page from "${currentCollectionName}" collection to "${newCollectionName}" collection? This will update the page settings.`,
      confirmText: "Change Collection",
      cancelText: "Cancel",
      onConfirm: async () => {
        try {
          await updatePageMutation.mutateAsync({
            id: currentPage.id,
            pageData: {
              collection: newCollectionId,
            },
          });
          console.log("Collection swapped successfully!");
        } catch (error) {
          console.error("Error swapping collection:", error);
          alert("Failed to swap collection. Please try again.");
        }
      },
    });
  };

  return {
    handleAddCMSPage,
    handleCollectionAction,
    handleItemAction,
    handleEditInCMS,
    handleSwapCollection,
    handleRegenerateLayout,
  };
}
