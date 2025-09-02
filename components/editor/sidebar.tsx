"use client";

import React from "react";
import { useViewportStore } from "@/lib/store/viewport-store";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import {
  elementsCategory,
  layoutCategory,
  pageCategory,
  formsCategory,
  hospitalityCategory,
  useUserBlocksCategory,
  SidebarNavigation,
  SidebarContent,
} from "./sidebar/";
import {
  headersCategory,
  cmsCardsCategory,
} from "./sidebar/sidebar-categories";

export function EditorSidebar() {
  const { currentViewport } = useViewportStore();
  const { isOpen } = useSidebarStore();
  const { addBlock } = useUserBlocksStore();
  const [activeCategory, setActiveCategory] = React.useState("elements");

  const userBlocksCategory = useUserBlocksCategory();

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

  // All component categories
  const allCategories = {
    userBlocks: userBlocksCategory,
    elements: elementsCategory,
    layout: layoutCategory,
    page: pageCategory,
    hospitality: hospitalityCategory,
    cmsCards: cmsCardsCategory,
    forms: formsCategory,
    headers: headersCategory,
    // layout: layoutCategory,
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
          onCreateBlock={handleCreateBlock}
        />
      )}
    </div>
  );
}

// Export both components for backward compatibility
export { EditorSidebar as ComponentSidebar };
