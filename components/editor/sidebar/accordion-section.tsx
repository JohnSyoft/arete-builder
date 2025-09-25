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

interface AccordionSectionProps {
  title: string;
  items: ComponentItem[];
  count: number;
  value: string;
}

export const AccordionSection = ({ title, items, count, value }: AccordionSectionProps) => {
  if (items.length === 0) return null;

  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-sm font-medium">
        {title} ({count})
      </AccordionTrigger>
      <AccordionContent>
        <div className="space-y-3 pt-2">
          {items.map((item, index) => (
            <BlockItem
              key={index}
              component={item.component}
              name={item.name}
              description={item.description}
              image={item.image}
              props={item.props}
            />
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};
