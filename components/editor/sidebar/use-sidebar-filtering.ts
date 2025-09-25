import { useMemo } from "react";
import { componentsByType } from "./component-categories";

interface UseSidebarFilteringProps {
  currentCategory: any;
  activeCategory: string;
  searchQuery: string;
}

export const useSidebarFiltering = ({
  currentCategory,
  activeCategory,
  searchQuery,
}: UseSidebarFilteringProps) => {
  const categoryItems =
    typeof currentCategory?.items === "function"
      ? currentCategory.items()
      : currentCategory?.items || [];

  // Filter components based on search query
  const filterComponents = (components: any[]) => {
    if (!searchQuery.trim()) return components;
    
    const query = searchQuery.toLowerCase();
    return components.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  };

  // Filter components by type for search
  const filteredComponentsByType = useMemo(() => {
    if (!searchQuery.trim()) return componentsByType;
    
    const filtered: any = {};
    Object.keys(componentsByType).forEach((key) => {
      filtered[key] = filterComponents(componentsByType[key as keyof typeof componentsByType]);
    });
    return filtered;
  }, [searchQuery]);

  // Calculate total components for the unified category
  const totalComponents = useMemo(() => {
    if (activeCategory === "components") {
      return searchQuery.trim()
        ? Object.values(filteredComponentsByType).reduce(
            (total, items: any) => total + items.length,
            0
          )
        : Object.values(componentsByType).reduce(
            (total, items: any) => total + items.length,
            0
          );
    }
    return searchQuery.trim() ? filterComponents(categoryItems).length : categoryItems.length;
  }, [activeCategory, searchQuery, categoryItems, filteredComponentsByType]);

  return {
    categoryItems,
    filteredComponentsByType,
    totalComponents,
    filterComponents,
  };
};
