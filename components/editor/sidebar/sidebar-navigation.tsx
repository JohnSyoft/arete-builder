import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebarStore } from "@/lib/store/sidebar-store";

interface SidebarNavigationProps {
  allCategories: Record<string, any>;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export const SidebarNavigation = ({
  allCategories,
  activeCategory,
  setActiveCategory,
}: SidebarNavigationProps) => {
  const { isOpen, toggleSidebar } = useSidebarStore();

  return (
    <div className="w-16 bg-card border-r border-border flex flex-col">
      <div className="p-3 border-b border-border">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-sm">B</span>
        </div>
      </div>

      <div className="flex flex-col p-2 space-y-2">
        {Object.entries(allCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`w-12 h-12 rounded-lg flex items-center justify-center group transition-colors ${
              activeCategory === key
                ? "bg-primary text-primary-foreground"
                : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
            }`}
            title={category.name}
          >
            {category.icon}
          </button>
        ))}
      </div>

      {/* Collapse button at bottom */}
      <div className="mt-auto p-2 border-t border-border space-y-2">
        <Button
          onClick={toggleSidebar}
          variant="outline"
          size="sm"
          className="w-12 h-8 p-0"
          title={`${isOpen ? "Hide" : "Show"} components panel (Ctrl/Cmd + B)`}
        >
          {isOpen ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
};
