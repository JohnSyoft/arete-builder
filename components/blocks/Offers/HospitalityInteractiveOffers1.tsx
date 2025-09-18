import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface InteractiveOffer {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  discount: string;
  category: "romance" | "entertainment" | "wellness" | "family" | "business";
  featured: boolean;
  link: string;
}

interface HospitalityInteractiveOffers1Props extends SectionProps {
  // Offers specific props
  title?: string;
  subtitle?: string;
  description?: string;
  offers?: InteractiveOffer[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showDiscount?: boolean;
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  hoverEffect?: boolean;
}

export function HospitalityInteractiveOffers1({
  title = "Exclusive offers",
  subtitle = "Enjoy in resorts and awesome facilities.",
  description = "Discover our limited-time offers and packages designed to make your stay even more memorable.",
  offers = [
    {
      id: "honeymoon-package",
      title: "Honeymoon",
      subtitle: "Exclusive",
      description: "Romantic getaway with champagne, roses, and spa treatments",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=700&fit=crop",
      discount: "40% off",
      category: "romance",
      featured: true,
      link: "/honeymoon-package"
    },
    {
      id: "cocktail-package",
      title: "Cocktail",
      subtitle: "Unbundled",
      description: "Premium cocktail experience with mixology classes",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&h=700&fit=crop",
      discount: "30% off",
      category: "entertainment",
      featured: false,
      link: "/cocktail-package"
    },
    {
      id: "massage-package",
      title: "Massage",
      subtitle: "Wellness",
      description: "Complete wellness retreat with spa treatments",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=700&fit=crop",
      discount: "20% off",
      category: "wellness",
      featured: false,
      link: "/massage-package"
    }
  ],
  primaryButtonText = "View All Offers",
  secondaryButtonText = "Book Now",
  showDiscount = true,
  showCategories = true,
  categories = ["All", "Romance", "Entertainment", "Wellness", "Family", "Business"],
  selectedCategory = "All",
  hoverEffect = true,
  ...props
}: HospitalityInteractiveOffers1Props) {
  // Set section defaults for offers
  const offersProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter offers by category
  const filteredOffers = selectedCategory === "All" 
    ? offers 
    : offers.filter(offer => offer.category === selectedCategory.toLowerCase());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "romance": return "bg-pink-100 text-pink-700";
      case "entertainment": return "bg-purple-100 text-purple-700";
      case "wellness": return "bg-green-100 text-green-700";
      case "family": return "bg-blue-100 text-blue-700";
      case "business": return "bg-gray-100 text-gray-700";
      default: return "bg-amber-100 text-amber-700";
    }
  };

  return (
    <Section {...offersProps}>
      <Element
        id="interactiveOffersContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-4"
            margin="text-center"
          >
            {/* Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-2"
              display="block"
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h2"
                fontSize="text-3xl sm:text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-2xl mx-auto"
              />
            </Element>

            {/* Category Filter */}
            {showCategories && (
              <Element
                is={Box}
                backgroundColor="bg-gray-50"
                padding="py-6 px-8"
                margin="mb-12"
                display="block"
                borderRadius="rounded-2xl"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-2"
                  margin=""
                  wrap="wrap"
                >
                  {categories.map((category, index) => (
                    <Element
                      key={category}
                      is={Box}
                      backgroundColor={category === selectedCategory ? "bg-amber-100" : "bg-transparent"}
                      padding="px-6 py-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      className={`hover:bg-amber-50 transition-colors duration-200 cursor-pointer ${
                        category === selectedCategory ? "ring-2 ring-amber-500" : ""
                      }`}
                      canvas={false}
                    >
                      <CraftText
                        text={category}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight={category === selectedCategory ? "font-semibold" : "font-medium"}
                        color={category === selectedCategory ? "text-amber-700" : "text-gray-600"}
                        textAlign="text-center"
                        className="hover:text-amber-600 transition-colors duration-200"
                      />
                    </Element>
                  ))}
                </Element>
              </Element>
            )}
          </Element>
        </Element>

        {/* Interactive Offers Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="350px"
            gap="gap-8"
            autoRows="auto"
          >
            {filteredOffers.map((offer, index) => (
              <Element
                key={offer.id}
                is={Card}
                variant="flat"
                shadow="2xl"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                className={`group hover:shadow-3xl transition-all duration-500 ${
                  hoverEffect ? "hover:-translate-y-2" : ""
                }`}
                canvas
              >
                {/* Image Container */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                    width="w-full"
                    height="h-96"
                    position="relative"
                    canvas={false}
                >
                  <CraftImage
                    src={offer.image}
                    alt={offer.title}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-2xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Dark Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="bg-gray-900"
                    padding="0"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    right="right-0"
                    bottom="bottom-0"
                    borderRadius="rounded-t-2xl"
                    className="opacity-60 group-hover:opacity-70 transition-opacity duration-300"
                    canvas={false}
                  />

                  {/* Content Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="p-12"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    right="right-0"
                    bottom="bottom-0"
                    borderRadius="rounded-t-2xl"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-6"
                      margin="text-center h-full"
                    >
                      {/* Subtitle */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={offer.subtitle}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-white"
                          textAlign="text-center"
                          className="uppercase tracking-wider"
                        />
                      </Element>

                      {/* Divider */}
                      <Element
                        is={Box}
                        backgroundColor="bg-white/30"
                        padding="0"
                        margin=""
                        display="block"
                        width="w-16"
                        height="h-px"
                        canvas={false}
                      />

                      {/* Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={offer.title}
                          tagName="h3"
                          fontSize="text-2xl sm:text-3xl"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-center"
                          lineHeight="leading-tight"
                        />
                      </Element>

                      {/* Hover Content */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          gap="gap-4"
                          margin="text-center"
                        >
                          {/* Description */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={offer.description}
                              tagName="p"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color="text-white"
                              textAlign="text-center"
                              lineHeight="leading-relaxed"
                              className="opacity-90"
                            />
                          </Element>

                          {/* Action Button */}
                          <Element
                            is={Box}
                            backgroundColor="bg-amber-600"
                            padding="p-4"
                            margin=""
                            display="block"
                            borderRadius="rounded-full"
                            width="w-14"
                            height="h-14"
                            className="group-hover:bg-amber-500 transition-colors duration-300"
                            canvas={false}
                          >
                            <CraftText
                              text="→"
                              tagName="span"
                              fontSize="text-xl"
                              fontWeight="font-bold"
                              color="text-white"
                              textAlign="text-center"
                            />
                          </Element>
                        </Element>
                      </Element>

                      {/* Discount Badge */}
                      {showDiscount && (
                        <Element
                          is={Box}
                          backgroundColor="bg-white"
                          padding="px-4 py-2"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          position="absolute"
                          top="top-4"
                          right="right-4"
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          canvas={false}
                        >
                          <CraftText
                            text={offer.discount}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-center"
                            className="uppercase"
                          />
                        </Element>
                      )}
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* CTA Section */}
        <Element
          is={Box}
          backgroundColor="bg-gray-900"
          padding="py-16 px-8"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-6"
            margin="text-center"
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text="Don't Miss These Exclusive Offers!"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text="Book now and save on luxury experiences. Limited time offers available."
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-300"
                textAlign="text-center"
              />
            </Element>

            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-4"
              margin=""
              wrap="wrap"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={primaryButtonText}
                  size="lg"
                  backgroundColor="#d97706"
                  textColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-600 transition-colors duration-300"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={secondaryButtonText}
                  variant="outline"
                  size="lg"
                  backgroundColor="transparent"
                  textColor="#ffffff"
                  borderColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-white hover:text-gray-900 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityInteractiveOffers1.craft = {
  displayName: "Hospitality Interactive Offers 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Offers specific props
    title: "Exclusive offers",
    subtitle: "Enjoy in resorts and awesome facilities.",
    description: "Discover our limited-time offers and packages designed to make your stay even more memorable.",
    primaryButtonText: "View All Offers",
    secondaryButtonText: "Book Now",
    showDiscount: true,
    showCategories: true,
    categories: ["All", "Romance", "Entertainment", "Wellness", "Family", "Business"],
    selectedCategory: "All",
    hoverEffect: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

