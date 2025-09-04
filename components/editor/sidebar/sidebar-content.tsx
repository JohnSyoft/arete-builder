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
  CraftHealthcareHero1,
  CraftHealthcareGridHero1,
  CraftEmpowermentHero1,
  CraftCollaborationHero1,
  CraftLearningPlatformHero,
  CraftProductivityHero,
  CraftExpenseTrackingHero,
  CraftCommunityResourcesHero,
  CraftHospitalityHero1,
  CraftMiniMaxHero1,
  CraftModernSaaSHero1,
  CraftEnvironmentalHero1,

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

  // New Hospitality Components
  CraftResortBookingHero,
  CraftLuxurySuites,
  CraftSpaWellness,
  CraftFineDining,
  CraftWeddingEvents,
  CraftHotelAmenities,
  CraftPropertyGallery,

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
      image: "/MedicalHero.png",
    },
    {
      component: CraftCosmeticHero1,
      name: "Beauty Hero",
      description: "Cosmetic treatment hero with brand imagery",
      image: "/cosmeticHero.png",
    },
    {
      component: CraftHealthcareHero1,
      name: "Healthcare Hero",
      description: "Clean healthcare hero with patient focus and stats",
      image: "/placeholder.svg",
    },
    {
      component: CraftHealthcareGridHero1,
      name: "Healthcare Grid Hero",
      description: "Healthcare grid layout hero with multiple images",
      image: "/placeholder.svg",
    },
    {
      component: CraftEmpowermentHero1,
      name: "Empowerment Hero",
      description: "Eco-friendly retreat hero with badge and dual buttons",
      image: "/placeholder.svg",
    },
    {
      component: CraftCollaborationHero1,
      name: "Collaboration Hero",
      description: "Remote work productivity hero with green gradient",
      image: "/collaborationHero.png",
    },
    {
      component: CraftLearningPlatformHero,
      name: "Learning Platform Hero",
      description: "Social learning platform with blue accent tagline",
      image: "/learningHero.png",
    },
    {
      component: CraftProductivityHero,
      name: "Productivity Hero",
      description: "Split-screen productivity app with form and stats",
      image: "/placeholder.svg",
    },
    {
      component: CraftExpenseTrackingHero,
      name: "Expense Tracking Hero",
      description: "Financial app hero with phone mockup and app store buttons",
      image: "/placeholder.svg",
    },
    {
      component: CraftCommunityResourcesHero,
      name: "Community Resources Hero",
      description: "Developer community platform with gradient button",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityHero1,
      name: "Hospitality Hero",
      description: "Luxury hotel hero section with elegant design",
      image: "/HospitalityHero.png",
    },
    {
      component: CraftMiniMaxHero1,
      name: "AI Model Hero",
      description:
        "Multi-slide carousel hero for AI models with automatic transitions",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernSaaSHero1,
      name: "SaaS Hero",
      description: "Modern SaaS hero with features and trust indicators",
      image: "/placeholder.svg",
    },
    {
      component: CraftEnvironmentalHero1,
      name: "Environmental Hero",
      description:
        "Environmental conservation hero with grid layout and wavy background",
      image: "/placeholder.svg",
    },
    {
      component: CraftResortBookingHero,
      name: "Resort Booking Hero",
      description: "Luxury resort hero with integrated booking widget",
      image: "/placeholder.svg",
    },
  ],
  services: [
    {
      component: CraftMedicalServices1,
      name: "Medical Services",
      description: "Comprehensive medical services grid",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticServices1,
      name: "Beauty Services",
      description: "Cosmetic treatment services showcase",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityAmenities1,
      name: "Amenities",
      description: "Hotel amenities and facilities grid",
      image: "/placeholder.svg",
    },
    {
      component: CraftElderCareServices1,
      name: "Care Services",
      description: "Elder care services and support options",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernFeatures1,
      name: "Modern Features",
      description: "Feature showcase with icons and descriptions",
      image: "/placeholder.svg",
    },
    {
      component: CraftSpaWellness,
      name: "Spa & Wellness",
      description: "Spa services and wellness treatments showcase",
      image: "/placeholder.svg",
    },
    {
      component: CraftHotelAmenities,
      name: "Hotel Amenities",
      description: "Comprehensive hotel facilities and amenities",
      image: "/placeholder.svg",
    },
  ],
  about: [
    {
      component: CraftCosmeticAbout1,
      name: "About Section",
      description: "Professional about section with expertise focus",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhyChooseUs1,
      name: "Why Choose Us v1",
      description: "Simple why choose us section with features",
      image: "/placeholder.svg",
    },
    {
      component: CraftElderCareValues1,
      name: "Values Section",
      description: "Core values and mission statement",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhatWeDo1,
      name: "What We Do",
      description: "Service offerings and specializations",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhyChoose2,
      name: "Why Choose Us v2",
      description: "Competitive advantages and benefits",
      image: "/placeholder.svg",
    },
    {
      component: CraftWhyChooseUs1,
      name: "Trust Indicators",
      description: "Trust building elements and credentials",
      image: "/placeholder.svg",
    },
  ],
  team: [
    {
      component: CraftMedicalDoctors1,
      name: "Medical Team",
      description: "Doctor profiles and medical staff",
      image: "/placeholder.svg",
    },
    {
      component: CraftElderCareTeam1,
      name: "Care Team",
      description: "Caregiving team member profiles",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernTeam1,
      name: "Modern Team",
      description: "Modern team section with social links",
      image: "/placeholder.svg",
    },
  ],
  testimonials: [
    {
      component: CraftMedicalTestimonials1,
      name: "Patient Reviews",
      description: "Medical patient testimonials and reviews",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityTestimonials1,
      name: "Guest Reviews",
      description: "Hotel guest testimonials and ratings",
      image: "/placeholder.svg",
    },
    {
      component: CraftElderCareTestimonials1,
      name: "Family Reviews",
      description: "Elder care family testimonials",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticTestimonials2,
      name: "Client Reviews",
      description: "Beauty treatment client testimonials",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernTestimonials1,
      name: "Modern Reviews",
      description: "Modern testimonials with avatars and ratings",
      image: "/placeholder.svg",
    },
  ],
  content: [
    {
      component: CraftHospitalityRooms1,
      name: "Rooms Showcase",
      description: "Hotel rooms and suites display",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityDining1,
      name: "Dining Options",
      description: "Restaurant and dining experiences",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticCaseStudies1,
      name: "Case Studies",
      description: "Treatment case studies and results",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticCaseStudy1,
      name: "Single Case Study",
      description: "Individual case study showcase",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticBeforeAfter1,
      name: "Before & After",
      description: "Transformation showcases",
      image: "/placeholder.svg",
    },
    {
      component: CraftMedicalHowItWorks1,
      name: "Process Steps",
      description: "Step-by-step process explanation",
      image: "/placeholder.svg",
    },
    {
      component: CraftResearchCards,
      name: "Research Cards",
      description: "Research and study showcase cards",
      image: "/placeholder.svg",
    },
    {
      component: CraftPhotoGallery,
      name: "Photo Gallery",
      description: "Image gallery with lightbox",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernBlog1,
      name: "Blog Section",
      description: "Modern blog showcase with grid layout",
      image: "/placeholder.svg",
    },
    {
      component: CraftLuxurySuites,
      name: "Luxury Suites",
      description: "Premium accommodations showcase with pricing",
      image: "/placeholder.svg",
    },
    {
      component: CraftFineDining,
      name: "Fine Dining",
      description: "Restaurant showcase with chef spotlight",
      image: "/placeholder.svg",
    },
    {
      component: CraftWeddingEvents,
      name: "Wedding & Events",
      description: "Wedding venue showcase with packages",
      image: "/placeholder.svg",
    },
    {
      component: CraftPropertyGallery,
      name: "Property Gallery",
      description: "Interactive property photo gallery with virtual tour",
      image: "/placeholder.svg",
    },
  ],
  pricing: [
    {
      component: CraftModernPricing1,
      name: "Pricing Plans",
      description: "Modern pricing table with feature comparison",
      image: "/placeholder.svg",
    },
  ],
  cta: [
    {
      component: CraftElderCareCTA1,
      name: "Call to Action",
      description: "Compelling action section with contact",
      image: "/placeholder.svg",
    },
  ],
  contact: [
    {
      component: CraftModernContact1,
      name: "Contact Section",
      description: "Modern contact form with information",
      image: "/placeholder.svg",
    },
  ],
  headers: [
    {
      component: CraftSimpleHeader,
      name: "Simple Header",
      description: "Clean navigation header",
      image: "/placeholder.svg",
    },
    {
      component: CraftMegaMenuHeader,
      name: "Mega Menu Header",
      description: "Advanced navigation with mega menu",
      image: "/placeholder.svg",
    },
  ],
  footers: [
    {
      component: CraftMedicalFooter1,
      name: "Medical Footer",
      description: "Professional medical practice footer",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticFooter1,
      name: "Beauty Footer",
      description: "Cosmetic clinic footer with contact",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityFooter1,
      name: "Hospitality Footer",
      description: "Luxury hotel footer with amenities",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernFooter1,
      name: "Modern Footer",
      description: "Modern footer with newsletter and social links",
      image: "/placeholder.svg",
    },
  ],
  cards: [
    {
      component: CraftCosmeticCard1,
      name: "Beauty Cards",
      description: "Elegant cards for beauty and wellness content",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityCard1,
      name: "Hospitality Cards",
      description: "Clean cards for hotels and luxury services",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernCard1,
      name: "Modern Cards",
      description: "Horizontal layout cards for articles and blogs",
      image: "/placeholder.svg",
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                        image={item.image}
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
                image={item.image}
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
