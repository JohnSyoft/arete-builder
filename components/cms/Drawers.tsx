"use client";

import { useDrawerStore } from "@/lib/store/drawerStore";
import { CollectionItemDrawer } from "@/components/cms/CollectionItemDrawer";

export function Drawers() {
  const { isOpen, type, props, closeDrawer } = useDrawerStore();

  if (!isOpen || !type) return null;

  switch (type) {
    case "collectionItem":
      return (
        <CollectionItemDrawer
          isOpen={isOpen}
          onClose={closeDrawer}
          {...props}
        />
      );
    default:
      return null;
  }
}
