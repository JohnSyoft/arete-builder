"use client";

import React, { useMemo } from "react";
import { useViewportStore } from "@/lib/store/viewport-store";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import { usePageBySlug } from "@/hooks/usePages";
import { useCollection } from "@/hooks/useCollections";
import { useParams } from "next/navigation";
import {
  elementsCategory,
  formsCategory,
  createFieldsCategory,
  useUserBlocksCategory,
  SidebarNavigation,
  SidebarContent,
} from "./sidebar/";

export function EditorSidebar() {
  const { currentViewport } = useViewportStore();
  const { isOpen } = useSidebarStore();
  const { addBlock } = useUserBlocksStore();
  const [activeCategory, setActiveCategory] = React.useState("components");
  const params = useParams();
  const pageSlugSegments = params.pageSlug as string[];

  const pageSlug = useMemo(() => {
    if (pageSlugSegments?.length === 1) {
      // Regular page: ['about'] -> 'about'
      return pageSlugSegments[0];
    } else if (pageSlugSegments?.length === 2) {
      // CMS detail page: ['blog', 'item-id'] -> 'blog/:id'
      return `${pageSlugSegments[0]}/:id`;
    }
    // Fallback for other patterns
    return pageSlugSegments?.join('/');
  }, [pageSlugSegments]);
  // Get current page info to determine if it's CMS page
  const { data: pageResponse } = usePageBySlug(
    params.projectId as string,
    pageSlug as string
  );
  const currentPage = pageResponse?.data?.page;
  const isCMSPage = currentPage?.pageType === "cms";
  
  // Get collection data if it's a CMS page
  const { data: collectionResponse } = useCollection(
    currentPage?.collection || ""
  );
  const collection = collectionResponse?.collection;
  const collectionFields = collection?.fields || [];
  
  const userBlocksCategory = useUserBlocksCategory();
  
  // Create dynamic fields category with current collection's fields
  const fieldsCategory = React.useMemo(() => 
    createFieldsCategory(collectionFields, collection?._id), 
    [collectionFields, collection?._id]
  );

  const handleCreateBlock = (blockData: {
    name: string;
    description: string;
    component: React.ComponentType;
    htmlSource: string;
  }) => {
    addBlock({
      ...blockData,
      tags: [],
    });
  };

  // All component categories - conditionally include Fields category for CMS pages
  const allCategories = {
    components: {
      name: "Components",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 01-1-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      items: [
        {
          name: "Navigation",
          description: "Navigation bar for site menus",
          component: require("@/components/blocks/Basic/Navigation").Navigation,
        },
        {
          name: "Navigation Item",
          description: "Single navigation menu item",
          component: require("@/components/blocks/Navigation/NavigationItem")
            .NavigationItem,
        },
      ],
    },
    elements: elementsCategory,
    forms: formsCategory,
    ...(isCMSPage && collectionFields.length > 0 ? { fields: fieldsCategory } : {}),
  };

  const currentCategory =
    allCategories[activeCategory as keyof typeof allCategories];

  return (
    <div className="flex border-r border-border h-full">
      <SidebarNavigation
        allCategories={allCategories}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Content Area - Only this part collapses */}
      {isOpen && (
        <SidebarContent
          currentCategory={currentCategory}
          activeCategory={activeCategory}
        />
      )}
    </div>
  );
}

// Export both components for backward compatibility
export { EditorSidebar as ComponentSidebar };
