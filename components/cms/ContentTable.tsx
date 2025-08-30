"use client";

import {
  FileText,
  GripVertical,
  MoreHorizontal,
  Plus,
  Edit,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  useCollectionItems,
  useBulkDeleteCollectionItems,
  useReorderCollectionItems,
  type CollectionItem,
} from "@/hooks/useCollectionItems";
import { useModalStore } from "@/lib/store/modalStore";
import { useDrawerStore } from "@/lib/store/drawerStore";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface Collection {
  _id: string;
  name: string;
  fields: any[];
}

interface ContentTableProps {
  collection: Collection;
  searchQuery?: string;
  onCreateItem: () => void;
  selectedItems: Set<string>;
  onSelectionChange: (selectedItems: Set<string>) => void;
}

interface SortableRowProps {
  item: CollectionItem;
  collection: Collection;
  isSelected: boolean;
  onSelect: (id: string, selected: boolean) => void;
  onEdit: (item: CollectionItem) => void;
  onDelete: (item: CollectionItem) => void;
}

function SortableRow({
  item,
  collection,
  isSelected,
  onSelect,
  onEdit,
  onDelete,
}: SortableRowProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  const getFieldValue = (fieldName: string) => {
    return item.data?.[fieldName] || "-";
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "-";
    return new Date(dateString).toLocaleDateString();
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      draft: "secondary",
      published: "default",
      archived: "outline",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "secondary"}>
        {status}
      </Badge>
    );
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`grid grid-cols-[auto_auto_1fr_1fr_1fr_1fr_1fr_1fr_auto] gap-4 px-4 py-3 hover:bg-muted/20 transition-colors text-sm border-b cursor-pointer ${
        isSelected ? "bg-muted" : ""
      }`}
      onClick={() => onEdit(item)}
    >
      <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
        <Checkbox
          checked={isSelected}
          onCheckedChange={(checked) => onSelect(item._id, !!checked)}
        />
      </div>

      <div
        className="flex items-center cursor-grab active:cursor-grabbing"
        onClick={(e) => e.stopPropagation()}
        {...attributes}
        {...listeners}
      >
        <GripVertical className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex items-center">
        <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
        {getFieldValue("title") || "Untitled"}
      </div>

      <div className="text-muted-foreground">{item.slug || "-"}</div>

      <div className="text-muted-foreground">
        {formatDate(getFieldValue("date"))}
      </div>

      <div>{getFieldValue("image") || "-"}</div>

      <div className="text-muted-foreground">
        {getFieldValue("categories") || "-"}
      </div>

      <div>{getStatusBadge(item.status)}</div>

      <div
        className="flex items-center justify-end"
        onClick={(e) => e.stopPropagation()}
      >
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit(item)}>
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(item)}
              className="text-red-600"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export function ContentTable({
  collection,
  searchQuery,
  onCreateItem,
  selectedItems,
  onSelectionChange,
}: ContentTableProps) {
  const { openModal } = useModalStore();
  const { openDrawer } = useDrawerStore();

  const { data: itemsResponse, isLoading } = useCollectionItems(
    collection._id,
    {
      search: searchQuery,
      sortBy: "order",
      sortOrder: "asc",
      limit: 100, // Load all items for drag and drop
    }
  );

  const bulkDeleteMutation = useBulkDeleteCollectionItems();
  const reorderMutation = useReorderCollectionItems();

  const items = (itemsResponse?.items || []) as CollectionItem[];

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = async (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = items.findIndex(
      (item: CollectionItem) => item._id === active.id
    );
    const newIndex = items.findIndex(
      (item: CollectionItem) => item._id === over.id
    );

    if (oldIndex !== -1 && newIndex !== -1) {
      const newItems = arrayMove(items, oldIndex, newIndex) as CollectionItem[];
      const reorderedIds = newItems.map((item: CollectionItem) => item._id);

      try {
        await reorderMutation.mutateAsync({
          collectionId: collection._id,
          itemIds: reorderedIds,
        });
      } catch (error) {
        console.error("Failed to reorder items:", error);
      }
    }
  };

  const handleSelectItem = (id: string, selected: boolean) => {
    const newSelected = new Set(selectedItems);
    if (selected) {
      newSelected.add(id);
    } else {
      newSelected.delete(id);
    }
    onSelectionChange(newSelected);
  };

  const handleSelectAll = (selected: boolean) => {
    if (selected) {
      onSelectionChange(new Set(items.map((item: CollectionItem) => item._id)));
    } else {
      onSelectionChange(new Set());
    }
  };

  const handleEditItem = (item: CollectionItem) => {
    openDrawer("collectionItem", {
      collection,
      item,
      onSave: () => {
        // Refresh handled by React Query
      },
    });
  };

  const handleDeleteItem = (item: CollectionItem) => {
    openModal("confirmation", {
      title: "Delete Item",
      description: `Are you sure you want to delete "${
        item.data?.title || "this item"
      }"? This action cannot be undone.`,
      onConfirm: async () => {
        try {
          await bulkDeleteMutation.mutateAsync({
            collectionId: collection._id,
            itemIds: [item._id],
          });
        } catch (error) {
          console.error("Failed to delete item:", error);
        }
      },
    });
  };

  if (isLoading) {
    return (
      <div className="border-t border-b px-4 py-8 text-center">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-muted rounded w-1/4 mx-auto"></div>
          <div className="space-y-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="h-8 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Table */}
      <div className="">
        {/* Header */}
        <div className="grid grid-cols-[auto_auto_1fr_1fr_1fr_1fr_1fr_1fr_auto] gap-4 px-4 py-3 bg-muted/5 border-b text-sm font-medium text-muted-foreground">
          <div>
            <Checkbox
              checked={selectedItems.size === items.length && items.length > 0}
              onCheckedChange={handleSelectAll}
            />
          </div>
          <div></div>
          <div>Title</div>
          <div>Slug</div>
          <div>Date</div>
          <div>Image</div>
          <div>Categories</div>
          <div>Status</div>
          <div className="text-right">Actions</div>
        </div>

        {/* Rows */}
        {items.length === 0 ? (
          <div className="px-4 py-8 text-center text-muted-foreground">
            <FileText className="mx-auto h-8 w-8 mb-2" />
            <p>No items found</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={onCreateItem}
            >
              <Plus className="mr-2 h-4 w-4" />
              Create your first item
            </Button>
          </div>
        ) : (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items.map((item: CollectionItem) => item._id)}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item: CollectionItem) => (
                <SortableRow
                  key={item._id}
                  item={item}
                  collection={collection}
                  isSelected={selectedItems.has(item._id)}
                  onSelect={handleSelectItem}
                  onEdit={handleEditItem}
                  onDelete={handleDeleteItem}
                />
              ))}
            </SortableContext>
          </DndContext>
        )}
      </div>
    </div>
  );
}
