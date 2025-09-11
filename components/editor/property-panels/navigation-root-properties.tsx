import { useState } from "react";
import { Button } from "@/components/ui/button";

export interface NavigationItemData {
  id: string;
  label: string;
  href: string;
  children?: NavigationItemData[];
}

interface NavigationRootPropertiesProps {
  navigationItems: NavigationItemData[];
  onAddRoot: () => void;
  onAddChild: (parentId: string) => void;
  onUpdate: (itemId: string, updates: Partial<NavigationItemData>) => void;
  onDelete: (itemId: string) => void;
}

export function NavigationRootProperties({
  navigationItems,
  onAddRoot,
  onAddChild,
  onUpdate,
  onDelete,
}: NavigationRootPropertiesProps) {
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  return (
    <div>
      <h4 className="font-semibold mb-2">Root Navigation Items</h4>
      <Button size="sm" className="mb-2" onClick={onAddRoot}>
        + Add Root Item
      </Button>
      <ul className="space-y-2">
        {navigationItems.map((item) => (
          <li key={item.id} className="flex items-center gap-2">
            {editingId === item.id ? (
              <input
                type="text"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                onBlur={() => {
                  onUpdate(item.id, { label: editValue });
                  setEditingId(null);
                }}
                className="border px-2 py-1 rounded text-sm"
                autoFocus
              />
            ) : (
              <span
                className="cursor-pointer hover:underline"
                onClick={() => {
                  setEditingId(item.id);
                  setEditValue(item.label);
                }}
              >
                {item.label}
              </span>
            )}
            <Button
              size="sm"
              variant="outline"
              onClick={() => onAddChild(item.id)}
            >
              + Child
            </Button>
            <Button
              size="sm"
              variant="destructive"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
