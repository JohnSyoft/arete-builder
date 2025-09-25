import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionSection } from "./accordion-section";
import { NoResults } from "./no-results";
import { componentsByType } from "./component-categories";

interface ComponentsAccordionProps {
  filteredComponentsByType: typeof componentsByType;
  searchQuery: string;
  totalComponents: number;
  onClearSearch: () => void;
}

export const ComponentsAccordion = ({
  filteredComponentsByType,
  searchQuery,
  totalComponents,
  onClearSearch,
}: ComponentsAccordionProps) => {
  if (searchQuery.trim() && totalComponents === 0) {
    return (
      <NoResults
        searchQuery={searchQuery}
        onClearSearch={onClearSearch}
      />
    );
  }

  return (
    <Accordion
      type="multiple"
      defaultValue={searchQuery.trim() ? [] : ["hero", "services"]}
      className="space-y-2"
    >
      <AccordionSection
        title="Hero Sections"
        items={filteredComponentsByType.hero}
        count={filteredComponentsByType.hero.length}
        value="hero"
      />

      <AccordionSection
        title="Services & Features"
        items={filteredComponentsByType.services}
        count={filteredComponentsByType.services.length}
        value="services"
      />

      <AccordionSection
        title="About & Values"
        items={filteredComponentsByType.about}
        count={filteredComponentsByType.about.length}
        value="about"
      />

      <AccordionSection
        title="Team & Staff"
        items={filteredComponentsByType.team}
        count={filteredComponentsByType.team.length}
        value="team"
      />

      <AccordionSection
        title="Testimonials & Reviews"
        items={filteredComponentsByType.testimonials}
        count={filteredComponentsByType.testimonials.length}
        value="testimonials"
      />

      <AccordionSection
        title="Content & Gallery"
        items={filteredComponentsByType.content}
        count={filteredComponentsByType.content.length}
        value="content"
      />

      <AccordionSection
        title="Call to Action"
        items={filteredComponentsByType.cta}
        count={filteredComponentsByType.cta.length}
        value="cta"
      />

      <AccordionSection
        title="Pricing & Plans"
        items={filteredComponentsByType.pricing}
        count={filteredComponentsByType.pricing.length}
        value="pricing"
      />

      <AccordionSection
        title="Contact & Forms"
        items={filteredComponentsByType.contact}
        count={filteredComponentsByType.contact.length}
        value="contact"
      />

      <AccordionSection
        title="Headers & Navigation"
        items={filteredComponentsByType.headers}
        count={filteredComponentsByType.headers.length}
        value="headers"
      />

      <AccordionSection
        title="Footers"
        items={filteredComponentsByType.footers}
        count={filteredComponentsByType.footers.length}
        value="footers"
      />

      <AccordionSection
        title="Dynamic Cards"
        items={filteredComponentsByType.cards}
        count={filteredComponentsByType.cards.length}
        value="cards"
      />
    </Accordion>
  );
};
