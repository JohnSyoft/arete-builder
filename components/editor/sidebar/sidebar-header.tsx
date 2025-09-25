import { SearchInput } from "./search-input";

interface SidebarHeaderProps {
  categoryName: string;
  totalComponents: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

export const SidebarHeader = ({
  categoryName,
  totalComponents,
  searchQuery,
  onSearchChange,
  placeholder,
}: SidebarHeaderProps) => {
  return (
    <div className="p-4 border-b border-border">
      <h2 className="font-semibold text-foreground mb-1">
        {categoryName}
      </h2>
      <p className="text-sm text-muted-foreground">
        {totalComponents} components available
      </p>
      
      <SearchInput
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
        placeholder={placeholder}
      />
    </div>
  );
};
