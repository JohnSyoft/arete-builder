import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuSeparator,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Database } from "@/components/icons";
import type { Page } from "./types";

interface CollectionsDropdownProps {
  currentPage?: Page;
  collections: any[];
  onEditInCMS: () => void;
  onSwapCollection: (collectionId: string, collectionName: string) => void;
}

export function CollectionsDropdown({
  currentPage,
  collections,
  onEditInCMS,
  onSwapCollection,
}: CollectionsDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-gray-500 hover:text-gray-700"
        >
          {collections.find((c) => c._id === currentPage?.collection)?.name ||
            "Collections"}
          <ChevronDown className="w-3 h-3 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-48">
        <DropdownMenuItem onClick={onEditInCMS} className="flex items-center">
          <Database className="w-4 h-4 mr-2" />
          Edit in CMS
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Swap Collection...</DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              {collections
                .filter((c) => c._id !== currentPage?.collection)
                .map((collection) => (
                  <DropdownMenuItem
                    key={collection._id}
                    onClick={() =>
                      onSwapCollection(collection._id, collection.name)
                    }
                  >
                    <Database className="w-4 h-4 mr-2" />
                    {collection.name}
                    <span className="ml-auto text-xs text-muted-foreground">
                      {collection.itemCount || 0} items
                    </span>
                  </DropdownMenuItem>
                ))}
              {collections.filter((c) => c._id !== currentPage?.collection)
                .length === 0 && (
                <DropdownMenuItem disabled>
                  No other collections available
                </DropdownMenuItem>
              )}
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
