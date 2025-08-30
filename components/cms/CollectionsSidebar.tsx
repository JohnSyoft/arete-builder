"use client";

import { Button } from "@/components/ui/button";
import { Plus, Database } from "lucide-react";
import { useRouter, usePathname, useParams } from "next/navigation";

interface Collection {
  _id: string;
  name: string;
  description: string;
  fields: any[];
  itemCount: number;
}

interface CollectionsSidebarProps {
  collections: Collection[];
  onCreateCollection: () => void;
}

export function CollectionsSidebar({
  collections,
  onCreateCollection,
}: CollectionsSidebarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const { projectId, collectionId } = useParams();
  //   console.log({ params });
  // Extract current collection ID from pathname

  const handleCollectionClick = (collectionId: string) => {
    router.push(`/cms/${projectId}/collections/${collectionId}`);
  };
  return (
    <div className="w-64 border-r bg-muted/10 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between pb-5">
        <h2 className="text-lg font-semibold ">Collections</h2>
        <Button onClick={onCreateCollection} size="sm" variant="default">
          <Plus className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 p-2">
        {collections.length === 0 ? (
          <div className="text-center text-sm text-muted-foreground mt-8">
            No collections yet
          </div>
        ) : (
          <div className="space-y-1">
            {collections.map((collection: Collection) => (
              <button
                key={collection._id}
                onClick={() => handleCollectionClick(collection._id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg text-sm hover:bg-muted transition-colors ${
                  collectionId === collection._id ||
                  (!collectionId && collection === collections[0])
                    ? "bg-muted"
                    : ""
                }`}
              >
                <div className="flex items-center min-w-0">
                  <Database className="mr-3 h-4 w-4 text-muted-foreground shrink-0" />
                  <div className="min-w-0 flex-1 text-left">
                    <div className="font-medium truncate">
                      {collection.name}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {collection.itemCount || 0} items
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
