import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useModalStore } from "@/lib/store/modalStore";
import { BlockItem } from "./block-item";

interface SidebarContentProps {
  currentCategory: any;
  activeCategory: string;
  onCreateBlock: (blockData: {
    name: string;
    description: string;
    component: React.ComponentType;
    htmlSource: string;
  }) => void;
}

export const SidebarContent = ({
  currentCategory,
  activeCategory,
  onCreateBlock,
}: SidebarContentProps) => {
  const { openModal } = useModalStore();

  const categoryItems =
    typeof currentCategory?.items === "function"
      ? currentCategory.items()
      : currentCategory?.items || [];

  return (
    <div className="w-80 bg-card flex flex-col h-full transition-all duration-300">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">
          {currentCategory?.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          {categoryItems.length} components available
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {/* Special handling for user blocks category */}
          {activeCategory === "userBlocks" && (
            <div className="space-y-3">
              <Button
                onClick={() =>
                  openModal("createBlock", {
                    onCreateBlock: onCreateBlock,
                  })
                }
                className="w-full h-auto p-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-none"
              >
                <div className="text-center">
                  <div className="text-lg font-semibold mb-1">
                    + Create New Block
                  </div>
                  <div className="text-sm opacity-90">
                    Paste your Tailwind HTML
                  </div>
                </div>
              </Button>

              {categoryItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-sm">No custom blocks yet</div>
                  <div className="text-xs mt-1">
                    Create your first block above
                  </div>
                </div>
              ) : (
                categoryItems.map((item: any, index: number) => (
                  <BlockItem
                    key={index}
                    component={item.component}
                    name={item.name}
                    description={item.description}
                  />
                ))
              )}
            </div>
          )}

          {/* Regular category items */}
          {activeCategory !== "userBlocks" &&
            activeCategory !== "page" &&
            categoryItems.map((item: any, index: number) => (
              <BlockItem
                key={index}
                component={item.component}
                name={item.name}
                description={item.description}
              />
            ))}

          {/* Special accordion handling for page elements */}
          {activeCategory === "page" && (
            <Accordion type="single" collapsible defaultValue="medical">
              <AccordionItem value="medical">
                <AccordionTrigger className="text-sm font-medium">
                  Medical Components
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {categoryItems
                      .filter(
                        (item: any) =>
                          item.name.toLowerCase().includes("medical") ||
                          item.name.toLowerCase().includes("elder care") ||
                          item.name === "Why Choose Us" ||
                          item.name === "Research Cards" ||
                          item.name === "Photo Gallery"
                      )
                      .map((item: any, index: number) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general">
                <AccordionTrigger className="text-sm font-medium">
                  General Components
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {categoryItems
                      .filter(
                        (item: any) =>
                          !item.name.toLowerCase().includes("medical") &&
                          !item.name.toLowerCase().includes("elder care") &&
                          item.name !== "Why Choose Us" &&
                          item.name !== "Research Cards" &&
                          item.name !== "Photo Gallery"
                      )
                      .map((item: any, index: number) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
