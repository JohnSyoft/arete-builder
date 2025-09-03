"use client";

import React from "react";
import { useViewportStore } from "@/lib/store/viewport-store";
import { useSidebarStore } from "@/lib/store/sidebar-store";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import {
  elementsCategory,
  formsCategory,
  useUserBlocksCategory,
  SidebarNavigation,
  SidebarContent,
} from "./sidebar/";

export function EditorSidebar() {
  const { currentViewport } = useViewportStore();
  const { isOpen } = useSidebarStore();
  const { addBlock } = useUserBlocksStore();
  const [activeCategory, setActiveCategory] = React.useState("components");

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
    components: {
      name: "Components",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      items: [], // Will be handled differently with accordions
    },
    elements: elementsCategory,
    forms: formsCategory,
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
