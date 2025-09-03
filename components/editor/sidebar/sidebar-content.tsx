import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useModalStore } from "@/lib/store/modalStore";
import { BlockItem } from "./block-item";
import {
  // Hero components
  CraftMedicalHero1,
  CraftCosmeticHero1,
  CraftHospitalityHero1,
  CraftMiniMaxHero1,
  CraftModernSaaSHero1,

  // Services components
  CraftMedicalServices1,
  CraftCosmeticServices1,
  CraftHospitalityAmenities1,
  CraftElderCareServices1,

  // About/Values components
  CraftCosmeticAbout1,
  CraftCosmeticWhyChooseUs1,
  CraftElderCareValues1,
  CraftCosmeticWhatWeDo1,
  CraftCosmeticWhyChoose2,

  // Team components
  CraftMedicalDoctors1,
  CraftElderCareTeam1,
  CraftModernTeam1,

  // Testimonials components
  CraftMedicalTestimonials1,
  CraftHospitalityTestimonials1,
  CraftElderCareTestimonials1,
  CraftCosmeticTestimonials2,
  CraftModernTestimonials1,

  // Content components
  CraftHospitalityRooms1,
  CraftHospitalityDining1,
  CraftCosmeticCaseStudies1,
  CraftCosmeticCaseStudy1,
  CraftCosmeticBeforeAfter1,
  CraftMedicalHowItWorks1,

  // Features components
  CraftModernFeatures1,

  // Pricing components
  CraftModernPricing1,

  // CTA components
  CraftElderCareCTA1,
  CraftWhyChooseUs1,

  // Footer components
  CraftMedicalFooter1,
  CraftCosmeticFooter1,
  CraftHospitalityFooter1,
  CraftModernFooter1,

  // Header components
  CraftSimpleHeader,
  CraftMegaMenuHeader,

  // Content blocks
  CraftResearchCards,
  CraftPhotoGallery,

  // Blog components
  CraftModernBlog1,

  // Contact components
  CraftModernContact1,

  // CMS Cards
  CraftCosmeticCard1,
  CraftHospitalityCard1,
  CraftModernCard1,
} from "@/components/editor/craft-components";

interface SidebarContentProps {
  currentCategory: any;
  activeCategory: string;
}

// Component categories organized by type
const componentsByType = {
  hero: [
    {
      component: CraftMedicalHero1,
      name: "Medical Hero",
      description: "Professional medical hero section with trust indicators",
    },
    {
      component: CraftCosmeticHero1,
      name: "Beauty Hero",
      description: "Cosmetic treatment hero with brand imagery",
    },
    {
      component: CraftHospitalityHero1,
      name: "Hospitality Hero",
      description: "Luxury hotel hero section with elegant design",
    },
    {
      component: CraftMiniMaxHero1,
      name: "AI Model Hero",
      description:
        "Multi-slide carousel hero for AI models with automatic transitions",
    },
    {
      component: CraftModernSaaSHero1,
      name: "SaaS Hero",
      description: "Modern SaaS hero with features and trust indicators",
    },
  ],
  services: [
    {
      component: CraftMedicalServices1,
      name: "Medical Services",
      description: "Comprehensive medical services grid",
    },
    {
      component: CraftCosmeticServices1,
      name: "Beauty Services",
      description: "Cosmetic treatment services showcase",
    },
    {
      component: CraftHospitalityAmenities1,
      name: "Amenities",
      description: "Hotel amenities and facilities grid",
    },
    {
      component: CraftElderCareServices1,
      name: "Care Services",
      description: "Elder care services and support options",
    },
    {
      component: CraftModernFeatures1,
      name: "Modern Features",
      description: "Feature showcase with icons and descriptions",
    },
  ],
  about: [
    {
      component: CraftCosmeticAbout1,
      name: "About Section",
      description: "Professional about section with expertise focus",
    },
    {
      component: CraftCosmeticWhyChooseUs1,
      name: "Why Choose Us v1",
      description: "Simple why choose us section with features",
    },
    {
      component: CraftElderCareValues1,
      name: "Values Section",
      description: "Core values and mission statement",
    },
    {
      component: CraftCosmeticWhatWeDo1,
      name: "What We Do",
      description: "Service offerings and specializations",
    },
    {
      component: CraftCosmeticWhyChoose2,
      name: "Why Choose Us v2",
      description: "Competitive advantages and benefits",
    },
    {
      component: CraftWhyChooseUs1,
      name: "Trust Indicators",
      description: "Trust building elements and credentials",
    },
  ],
  team: [
    {
      component: CraftMedicalDoctors1,
      name: "Medical Team",
      description: "Doctor profiles and medical staff",
    },
    {
      component: CraftElderCareTeam1,
      name: "Care Team",
      description: "Caregiving team member profiles",
    },
    {
      component: CraftModernTeam1,
      name: "Modern Team",
      description: "Modern team section with social links",
    },
  ],
  testimonials: [
    {
      component: CraftMedicalTestimonials1,
      name: "Patient Reviews",
      description: "Medical patient testimonials and reviews",
    },
    {
      component: CraftHospitalityTestimonials1,
      name: "Guest Reviews",
      description: "Hotel guest testimonials and ratings",
    },
    {
      component: CraftElderCareTestimonials1,
      name: "Family Reviews",
      description: "Elder care family testimonials",
    },
    {
      component: CraftCosmeticTestimonials2,
      name: "Client Reviews",
      description: "Beauty treatment client testimonials",
    },
    {
      component: CraftModernTestimonials1,
      name: "Modern Reviews",
      description: "Modern testimonials with avatars and ratings",
    },
  ],
  content: [
    {
      component: CraftHospitalityRooms1,
      name: "Rooms Showcase",
      description: "Hotel rooms and suites display",
    },
    {
      component: CraftHospitalityDining1,
      name: "Dining Options",
      description: "Restaurant and dining experiences",
    },
    {
      component: CraftCosmeticCaseStudies1,
      name: "Case Studies",
      description: "Treatment case studies and results",
    },
    {
      component: CraftCosmeticCaseStudy1,
      name: "Single Case Study",
      description: "Individual case study showcase",
    },
    {
      component: CraftCosmeticBeforeAfter1,
      name: "Before & After",
      description: "Transformation showcases",
    },
    {
      component: CraftMedicalHowItWorks1,
      name: "Process Steps",
      description: "Step-by-step process explanation",
    },
    {
      component: CraftResearchCards,
      name: "Research Cards",
      description: "Research and study showcase cards",
    },
    {
      component: CraftPhotoGallery,
      name: "Photo Gallery",
      description: "Image gallery with lightbox",
    },
    {
      component: CraftModernBlog1,
      name: "Blog Section",
      description: "Modern blog showcase with grid layout",
    },
  ],
  pricing: [
    {
      component: CraftModernPricing1,
      name: "Pricing Plans",
      description: "Modern pricing table with feature comparison",
    },
  ],
  cta: [
    {
      component: CraftElderCareCTA1,
      name: "Call to Action",
      description: "Compelling action section with contact",
    },
  ],
  contact: [
    {
      component: CraftModernContact1,
      name: "Contact Section",
      description: "Modern contact form with information",
    },
  ],
  headers: [
    {
      component: CraftSimpleHeader,
      name: "Simple Header",
      description: "Clean navigation header",
    },
    {
      component: CraftMegaMenuHeader,
      name: "Mega Menu Header",
      description: "Advanced navigation with mega menu",
    },
  ],
  footers: [
    {
      component: CraftMedicalFooter1,
      name: "Medical Footer",
      description: "Professional medical practice footer",
    },
    {
      component: CraftCosmeticFooter1,
      name: "Beauty Footer",
      description: "Cosmetic clinic footer with contact",
    },
    {
      component: CraftHospitalityFooter1,
      name: "Hospitality Footer",
      description: "Luxury hotel footer with amenities",
    },
    {
      component: CraftModernFooter1,
      name: "Modern Footer",
      description: "Modern footer with newsletter and social links",
    },
  ],
  cards: [
    {
      component: CraftCosmeticCard1,
      name: "Beauty Cards",
      description: "Elegant cards for beauty and wellness content",
    },
    {
      component: CraftHospitalityCard1,
      name: "Hospitality Cards",
      description: "Clean cards for hotels and luxury services",
    },
    {
      component: CraftModernCard1,
      name: "Modern Cards",
      description: "Horizontal layout cards for articles and blogs",
    },
  ],
};

export const SidebarContent = ({
  currentCategory,
  activeCategory,
}: SidebarContentProps) => {
  const { openModal } = useModalStore();

  const categoryItems =
    typeof currentCategory?.items === "function"
      ? currentCategory.items()
      : currentCategory?.items || [];

  // Calculate total components for the unified category
  const totalComponents =
    activeCategory === "components"
      ? Object.values(componentsByType).reduce(
          (total, items) => total + items.length,
          0
        )
      : categoryItems.length;

  return (
    <div className="w-80 bg-card flex flex-col h-full transition-all duration-300">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">
          {currentCategory?.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          {totalComponents} components available
        </p>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {/* New unified components category with accordions */}
          {activeCategory === "components" && (
            <Accordion
              type="multiple"
              defaultValue={["hero", "services"]}
              className="space-y-2"
            >
              <AccordionItem value="hero">
                <AccordionTrigger className="text-sm font-medium">
                  Hero Sections
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.hero.map((item, index) => (
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

              <AccordionItem value="services">
                <AccordionTrigger className="text-sm font-medium">
                  Services & Features
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.services.map((item, index) => (
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

              <AccordionItem value="about">
                <AccordionTrigger className="text-sm font-medium">
                  About & Values
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.about.map((item, index) => (
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

              <AccordionItem value="team">
                <AccordionTrigger className="text-sm font-medium">
                  Team & Staff
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.team.map((item, index) => (
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

              <AccordionItem value="testimonials">
                <AccordionTrigger className="text-sm font-medium">
                  Testimonials & Reviews
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.testimonials.map((item, index) => (
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

              <AccordionItem value="content">
                <AccordionTrigger className="text-sm font-medium">
                  Content & Gallery
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.content.map((item, index) => (
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

              <AccordionItem value="cta">
                <AccordionTrigger className="text-sm font-medium">
                  Call to Action
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.cta.map((item, index) => (
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

              <AccordionItem value="pricing">
                <AccordionTrigger className="text-sm font-medium">
                  Pricing & Plans
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.pricing.map((item, index) => (
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

              <AccordionItem value="contact">
                <AccordionTrigger className="text-sm font-medium">
                  Contact & Forms
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.contact.map((item, index) => (
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

              <AccordionItem value="headers">
                <AccordionTrigger className="text-sm font-medium">
                  Headers & Navigation
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.headers.map((item, index) => (
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

              <AccordionItem value="footers">
                <AccordionTrigger className="text-sm font-medium">
                  Footers
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.footers.map((item, index) => (
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

              <AccordionItem value="cards">
                <AccordionTrigger className="text-sm font-medium">
                  Dynamic Cards
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {componentsByType.cards.map((item, index) => (
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

          {/* Regular category items for other categories */}
          {activeCategory !== "userBlocks" &&
            activeCategory !== "page" &&
            activeCategory !== "components" &&
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
