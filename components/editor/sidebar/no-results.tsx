import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NoResultsProps {
  searchQuery: string;
  onClearSearch: () => void;
  message?: string;
}

export const NoResults = ({ 
  searchQuery, 
  onClearSearch, 
  message 
}: NoResultsProps) => {
  const defaultMessage = message || `No components found for "${searchQuery}"`;
  
  return (
    <div className="text-center py-8 text-muted-foreground">
      <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
      <p className="text-sm">{defaultMessage}</p>
      <Button
        variant="ghost"
        size="sm"
        onClick={onClearSearch}
        className="mt-2"
      >
        Clear search
      </Button>
    </div>
  );
};
