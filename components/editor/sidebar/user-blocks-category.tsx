import React from "react";
import { useUserBlocksStore } from "@/lib/store/user-blocks-store";
import { getCurrentResolver } from "@/components/editor/craft-components";
import { categoryIcons } from "./sidebar-categories";

export const useUserBlocksCategory = () => {
  const { blocks } = useUserBlocksStore();

  const getUserBlockItems = React.useMemo(() => {
    console.log("Getting user block items, blocks:", blocks);
    const currentResolver = getCurrentResolver();
    console.log("Current resolver keys:", Object.keys(currentResolver));

    return blocks.map((block) => {
      console.log("Processing block:", block.id, block.name);
      // Check if the component exists in the resolver
      const ComponentFromResolver =
        currentResolver[block.id as keyof typeof currentResolver];

      if (ComponentFromResolver) {
        console.log("Found component in resolver for", block.id);
        return {
          component: ComponentFromResolver,
          name: block.name,
          description: block.description,
        };
      }

      // Fallback if component not found in resolver
      console.log("Component not found in resolver for", block.id);
      return {
        component: () =>
          React.createElement(
            "div",
            {
              className:
                "p-4 bg-red-50 border border-red-200 rounded text-red-600 text-sm",
            },
            `Block not registered: ${block.name}`
          ),
        name: block.name,
        description: block.description,
      };
    });
  }, [blocks]);

  return {
    name: "My Custom Blocks",
    icon: categoryIcons.userBlocks,
    items: getUserBlockItems,
  };
};
