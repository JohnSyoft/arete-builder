import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Trash2, ChevronDown, ChevronRight } from "lucide-react";

interface NavigationItemData {
  id: string;
  label: string;
  href: string;
  children?: NavigationItemData[];
}

interface NavigationPropertiesProps {
  elementProps: {
    id: string;
    label: string;
    href: string;
    childItems: NavigationItemData[];
    isParent: boolean;
  };
  onPropChange: (key: string, value: any) => void;
}

export function NavigationProperties({
  elementProps,
  onPropChange,
}: NavigationPropertiesProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const addChild = (parentId?: string) => {
    const newChild: NavigationItemData = {
      id: `nav-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      label: "New Item",
      href: "#",
      children: [],
    };

    if (!parentId) {
      // Add as top level child
      const newChildren = [...(elementProps.childItems || []), newChild];
      // Batch update both properties at once
      onPropChange("_batch", {
        ...elementProps,
        childItems: newChildren,
        isParent: true
      });
    }
     else {
      // Add as nested child
      const updateChildren = (
        items: NavigationItemData[]
      ): NavigationItemData[] => {
        return items.map((item) => {
          if (item.id === parentId) {
            // Defensive: ensure children is an array
            const childrenArr = Array.isArray(item.children)
              ? item.children
              : [];
            return {
              ...item,
              children: [...childrenArr, newChild],
            };
          }
          if (item.children && item.children.length > 0) {
            return {
              ...item,
              children: updateChildren(item.children),
            };
          }
          return item;
        });
      };

      const newChildren = updateChildren(elementProps.childItems || []);
      onPropChange("childItems", newChildren);
    }
  };

  const removeChild = (childId: string) => {
    const removeFromChildren = (
      items: NavigationItemData[]
    ): NavigationItemData[] => {
      return items
        .filter((item) => item.id !== childId)
        .map((item) => ({
          ...item,
          children: item.children ? removeFromChildren(item.children) : [],
        }));
    };

    const newChildren = removeFromChildren(elementProps.childItems || []);
    // Batch update both properties at once
    onPropChange("_batch", {
      ...elementProps,
      childItems: newChildren,
      isParent: newChildren.length > 0
    });
  };

  const updateChild = (
    childId: string,
    updates: Partial<NavigationItemData>
  ) => {
    const updateInChildren = (
      items: NavigationItemData[]
    ): NavigationItemData[] => {
      return items.map((item) => {
        if (item.id === childId) {
          return { ...item, ...updates };
        }
        if (item.children) {
          return {
            ...item,
            children: updateInChildren(item.children),
          };
        }
        return item;
      });
    };

    const newChildren = updateInChildren(elementProps.childItems || []);
    onPropChange("childItems", newChildren);
  };

  const toggleExpanded = (itemId: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };

  const renderNavigationItem = (item: NavigationItemData, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.id);

    return (
      <div
        key={item.id}
        className="border rounded-lg p-3 mb-2"
        style={{ marginLeft: depth * 16 }}
      >
        <div className="flex items-center gap-2 mb-2">
          {hasChildren && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => toggleExpanded(item.id)}
              className="p-1 h-6 w-6"
            >
              {isExpanded ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
            </Button>
          )}
          <div className="flex-1 grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs">Label</Label>
              <Input
                value={item.label}
                onChange={(e) =>
                  updateChild(item.id, { label: e.target.value })
                }
                className="h-8"
                placeholder="Menu item label"
              />
            </div>
            <div>
              <Label className="text-xs">URL</Label>
              <Input
                value={item.href}
                onChange={(e) => updateChild(item.id, { href: e.target.value })}
                className="h-8"
                placeholder="#"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => addChild(item.id)}
              className="h-6 w-6 p-0"
              data-parentid={item.id}
            >
              <Plus className="h-3 w-3" />
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => removeChild(item.id)}
              className="h-6 w-6 p-0"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        </div>

        {/* Children */}
        {hasChildren && isExpanded && (
          <div className="ml-4 border-l pl-2">
            {item.children!.map((child) =>
              renderNavigationItem(child, depth + 1)
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="nav-label">Label</Label>
        <Input
          id="nav-label"
          value={elementProps.label || ""}
          onChange={(e) => onPropChange("label", e.target.value)}
          placeholder="Navigation item label"
        />
      </div>

      <div>
        <Label htmlFor="nav-href">URL</Label>
        <Input
          id="nav-href"
          value={elementProps.href || ""}
          onChange={(e) => onPropChange("href", e.target.value)}
          placeholder="#"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <Label>Child Items</Label>
          <Button
            variant="outline"
            size="sm"
            onClick={() => addChild()}
            className="h-8"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Child
          </Button>
        </div>

        {elementProps.childItems && elementProps.childItems.length > 0 ? (
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {elementProps.childItems.map((child) =>
              renderNavigationItem(child)
            )}
          </div>
        ) : (
          <div className="text-sm text-gray-500 text-center py-4 border border-dashed rounded">
            No child items. Click "Add Child" to create nested navigation.
          </div>
        )}
      </div>

      <div className="pt-4 border-t">
        <div className="text-sm text-gray-600">
          <p>
            <strong>Tips:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Edit label and URL for this navigation item</li>
            <li>Add child items to create dropdown menus</li>
            <li>Children can have their own children for multi-level navigation</li>
            <li>Drag new NavigationItem components from the sidebar to create separate menu items</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
