import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BlockItem } from "./block-item";

interface ComponentItem {
  component: any;
  name: string;
  description: string;
  image: string;
  props?: any;
}

interface PageElementsAccordionProps {
  items: ComponentItem[];
  searchQuery: string;
}

export const PageElementsAccordion = ({ items, searchQuery }: PageElementsAccordionProps) => {
  const filterComponents = (components: ComponentItem[]) => {
    if (!searchQuery.trim()) return components;
    
    const query = searchQuery.toLowerCase();
    return components.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  };

  const filteredItems = filterComponents(items);

  const medicalItems = filteredItems.filter(
    (item) =>
      item.name.toLowerCase().includes("medical") ||
      item.name.toLowerCase().includes("elder care") ||
      item.name === "Why Choose Us" ||
      item.name === "Research Cards" ||
      item.name === "Photo Gallery"
  );

  const generalItems = filteredItems.filter(
    (item) =>
      !item.name.toLowerCase().includes("medical") &&
      !item.name.toLowerCase().includes("elder care") &&
      item.name !== "Why Choose Us" &&
      item.name !== "Research Cards" &&
      item.name !== "Photo Gallery"
  );

  return (
    <Accordion type="single" collapsible defaultValue="medical">
      <AccordionItem value="medical">
        <AccordionTrigger className="text-sm font-medium">
          Medical Components
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-3 pt-2">
            {medicalItems.map((item, index) => (
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
            {generalItems.map((item, index) => (
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
  );
};
