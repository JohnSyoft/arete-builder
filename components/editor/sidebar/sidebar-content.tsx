import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useModalStore } from "@/lib/store/modalStore";
import { SidebarHeader } from "./sidebar-header";
import { ComponentsAccordion } from "./components-accordion";
import { FieldsSection } from "./fields-section";
import { PageElementsAccordion } from "./page-elements-accordion";
import { RegularCategorySection } from "./regular-category-section";
import { useSidebarFiltering } from "./use-sidebar-filtering";

interface SidebarContentProps {
  currentCategory: any;
  activeCategory: string;
  isComponentEditor?: boolean;
}

export const SidebarContent = ({
  currentCategory,
  activeCategory,
  isComponentEditor = false,
}: SidebarContentProps) => {
  const { openModal } = useModalStore();
  const [searchQuery, setSearchQuery] = useState("");

  const {
    categoryItems,
    filteredComponentsByType,
    totalComponents,
    filterComponents,
  } = useSidebarFiltering({
    currentCategory,
    activeCategory,
    searchQuery,
  });

  const handleClearSearch = () => setSearchQuery("");

  return (
    <div className="w-80 bg-card flex flex-col h-full transition-all duration-300">
      <SidebarHeader
        categoryName={currentCategory?.name}
        totalComponents={totalComponents}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {/* New unified components category with accordions - hide in component editor */}
          {activeCategory === "components" && !isComponentEditor && (
            <ComponentsAccordion
              filteredComponentsByType={filteredComponentsByType}
              searchQuery={searchQuery}
              totalComponents={totalComponents}
              onClearSearch={handleClearSearch}
            />
          )}

          {/* CMS Fields category with special handling */}
          {activeCategory === "fields" && (
            <FieldsSection
              items={categoryItems}
              searchQuery={searchQuery}
              onClearSearch={handleClearSearch}
            />
          )}

          {/* Regular category items for other categories */}
          {activeCategory !== "userBlocks" &&
            activeCategory !== "page" &&
            activeCategory !== "components" &&
            activeCategory !== "fields" && (
            <RegularCategorySection
              items={categoryItems}
              searchQuery={searchQuery}
              onClearSearch={handleClearSearch}
            />
          )}

          {/* Special accordion handling for page elements - hide in component editor */}
          {activeCategory === "page" && !isComponentEditor && (
            <PageElementsAccordion
              items={categoryItems}
              searchQuery={searchQuery}
            />
          )}
        </div>
      </ScrollArea>
    </div>
  );
};