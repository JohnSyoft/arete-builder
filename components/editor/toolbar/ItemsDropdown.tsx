import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Database } from "@/components/icons";
import { RefreshCw } from "lucide-react";

interface ItemsDropdownProps {
  selectedItem?: any;
  allCollectionItems: any[];
  onItemAction: (item: any) => void;
  onRegenerateLayout?: () => void;
}

export function ItemsDropdown({
  selectedItem,
  allCollectionItems,
  onItemAction,
  onRegenerateLayout,
}: ItemsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          {selectedItem
            ? selectedItem.data?.title ||
              selectedItem.data?.name ||
              selectedItem.slug ||
              `Item ${selectedItem._id.slice(-6)}`
            : "Items"}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-64">
        {allCollectionItems.length > 0 ? (
          <>
            {allCollectionItems.map((item, index) => {
              const displayTitle =
                item.data?.title ||
                item.data?.name ||
                item.slug ||
                `Item ${item._id.slice(-6)}`;

              return (
                <DropdownMenuItem
                  key={item._id}
                  onClick={() => onItemAction(item)}
                  className="flex flex-col items-start p-3"
                >
                  <div className="flex items-center w-full">
                    <Database className="w-4 h-4 mr-2 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-sm truncate">
                        {displayTitle}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {item.collectionName}
                      </div>
                    </div>
                    {selectedItem?._id === item._id && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Current
                      </Badge>
                    )}
                  </div>
                </DropdownMenuItem>
              );
            })}
            {onRegenerateLayout && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={onRegenerateLayout}
                  className="flex items-center"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Regenerate Layout
                </DropdownMenuItem>
              </>
            )}
          </>
        ) : (
          <DropdownMenuItem disabled>
            <Database className="w-4 h-4 mr-2" />
            No items found
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
