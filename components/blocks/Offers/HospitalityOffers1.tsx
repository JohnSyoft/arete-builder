import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Offer {
  id: string;
  title: string;
  description: string;
  originalPrice: string;
  discountedPrice: string;
  discount: string;
  image: string;
  category: "stay" | "dining" | "spa" | "experience" | "romance" | "family";
  validUntil: string;
  featured: boolean;
  includes: string[];
  terms: string;
}

interface HospitalityOffers1Props extends SectionProps {
  // Offers specific props
  title?: string;
  subtitle?: string;
  description?: string;
  offers?: Offer[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  showCountdown?: boolean;
  showTerms?: boolean;
}

export function HospitalityOffers1({
  title = "Special Offers",
  subtitle = "Exclusive Deals",
  description = "Discover our limited-time offers and packages designed to make your stay even more memorable. Book now and save on luxury experiences.",
  offers = [
    {
      id: "romantic-getaway",
      title: "Romantic Getaway Package",
      description: "Perfect for couples seeking a luxurious escape with champagne, roses, and spa treatments",
      originalPrice: "$1,200",
      discountedPrice: "$899",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      category: "romance",
      validUntil: "2024-12-31",
      featured: true,
      includes: ["Luxury Suite", "Champagne & Roses", "Couples Spa Treatment", "Romantic Dinner", "Late Checkout"],
      terms: "Valid for stays of 2+ nights. Subject to availability."
    },
    {
      id: "family-vacation",
      title: "Family Fun Package",
      description: "Everything you need for an unforgettable family vacation with activities for all ages",
      originalPrice: "$1,500",
      discountedPrice: "$1,199",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=400&fit=crop",
      category: "family",
      validUntil: "2024-12-31",
      featured: true,
      includes: ["Family Suite", "Kids Activities", "Pool Access", "Breakfast for 4", "Welcome Amenities"],
      terms: "Valid for families with children under 16. Minimum 3-night stay."
    },
    {
      id: "spa-retreat",
      title: "Ultimate Spa Retreat",
      description: "Complete wellness experience with multiple treatments, healthy meals, and relaxation",
      originalPrice: "$800",
      discountedPrice: "$599",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      category: "spa",
      validUntil: "2024-12-31",
      featured: false,
      includes: ["3 Spa Treatments", "Healthy Lunch", "Meditation Session", "Spa Amenities", "Wellness Consultation"],
      terms: "Valid for single occupancy. Treatments must be used during stay."
    },
    {
      id: "dining-experience",
      title: "Culinary Delights Package",
      description: "Gourmet dining experience with wine pairings and chef's table access",
      originalPrice: "$400",
      discountedPrice: "$299",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=400&fit=crop",
      category: "dining",
      validUntil: "2024-12-31",
      featured: false,
      includes: ["3-Course Dinner", "Wine Pairing", "Chef's Table", "Cooking Class", "Take-home Recipe"],
      terms: "Valid for dinner reservations. Wine pairing for guests 21+."
    },
    {
      id: "city-explorer",
      title: "City Explorer Package",
      description: "Discover the city with guided tours, transportation, and exclusive access",
      originalPrice: "$600",
      discountedPrice: "$449",
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1507525428034-b69928b1d9587?w=600&h=400&fit=crop",
      category: "experience",
      validUntil: "2024-12-31",
      featured: false,
      includes: ["Private City Tour", "Museum Tickets", "Lunch Voucher", "Transportation", "Concierge Service"],
      terms: "Valid for 2 adults. Tour duration: 6 hours. Weather dependent."
    },
    {
      id: "extended-stay",
      title: "Extended Stay Special",
      description: "Perfect for business travelers and long-term guests with additional amenities",
      originalPrice: "$2,000",
      discountedPrice: "$1,599",
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=400&fit=crop",
      category: "stay",
      validUntil: "2024-12-31",
      featured: false,
      includes: ["Executive Suite", "Daily Breakfast", "Laundry Service", "Business Center Access", "Airport Shuttle"],
      terms: "Valid for stays of 7+ nights. Non-refundable booking."
    }
  ],
  primaryButtonText = "Book Now",
  secondaryButtonText = "View All Offers",
  showCategories = true,
  categories = ["All", "Stay", "Dining", "Spa", "Experience", "Romance", "Family"],
  selectedCategory = "All",
  showCountdown = true,
  showTerms = true,
  ...props
}: HospitalityOffers1Props) {
  // Set section defaults for offers
  const offersProps = {
    backgroundColor: "#f8fafc",
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

  // Separate featured and regular offers
  const featuredOffers = filteredOffers.filter(offer => offer.featured);
  const regularOffers = filteredOffers.filter(offer => !offer.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "stay": return "bg-blue-100 text-blue-700";
      case "dining": return "bg-red-100 text-red-700";
      case "spa": return "bg-green-100 text-green-700";
      case "experience": return "bg-purple-100 text-purple-700";
      case "romance": return "bg-pink-100 text-pink-700";
      case "family": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "stay": return "🏨";
      case "dining": return "🍽️";
      case "spa": return "🧘‍♀️";
      case "experience": return "🗺️";
      case "romance": return "💕";
      case "family": return "👨‍👩‍👧‍👦";
      default: return "🎁";
    }
  };

  return (
    <Section {...offersProps}>
      <Element
        id="offersContent"
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
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-2"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-amber-600"
                textAlign="text-center"
              />
            </Element>

            {/* Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-4"
              display="block"
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h2"
                fontSize="text-4xl sm:text-5xl md:text-6xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-3xl mx-auto"
              />
            </Element>

            {/* Category Filter */}
            {showCategories && (
              <Element
                is={Box}
                backgroundColor="bg-white"
                padding="py-6 px-8"
                margin="mb-12"
                display="block"
                borderRadius="rounded-2xl"
                shadow="lg"
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

        {/* Featured Offers Section */}
        {featuredOffers.length > 0 && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-16"
            display="block"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Featured Offers"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="500px"
              gap="gap-8"
              autoRows="auto"
            >
              {featuredOffers.map((offer, index) => (
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
                  className="group hover:shadow-3xl transition-all duration-300"
                  canvas
                >
                  {/* Discount Badge */}
                  <Element
                    is={Box}
                    backgroundColor="bg-red-500"
                    padding="py-2 px-4"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-4"
                    right="right-4"
                    borderRadius="rounded-full"
                    canvas={false}
                  >
                    <CraftText
                      text={offer.discount}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-bold"
                      color="text-white"
                      textAlign="text-center"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    height="h-64"
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
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-8"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="stretch"
                      gap="gap-4"
                      margin=""
                    >
                      {/* Category Badge */}
                      <Element
                        is={Box}
                        backgroundColor={getCategoryColor(offer.category)}
                        padding="px-3 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-fit"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-2"
                          margin=""
                        >
                          <CraftText
                            text={getCategoryIcon(offer.category)}
                            tagName="span"
                            fontSize="text-sm"
                            textAlign="text-center"
                          />
                          <CraftText
                            text={offer.category.charAt(0).toUpperCase() + offer.category.slice(1)}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-semibold"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

                      {/* Offer Title */}
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
                          tagName="h4"
                          fontSize="text-2xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                        />
                      </Element>

                      {/* Offer Description */}
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
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Price */}
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gap="gap-4"
                        margin=""
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
                            text={offer.discountedPrice}
                            tagName="span"
                            fontSize="text-3xl"
                            fontWeight="font-bold"
                            color="text-amber-600"
                            textAlign="text-left"
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
                            text={offer.originalPrice}
                            tagName="span"
                            fontSize="text-xl"
                            fontWeight="font-normal"
                            color="text-gray-400"
                            textAlign="text-left"
                            className="line-through"
                          />
                        </Element>
                      </Element>

                      {/* Includes List */}
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="stretch"
                          gap="gap-2"
                          margin=""
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
                              text="Package Includes:"
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>

                          {offer.includes.map((item, itemIndex) => (
                            <Element
                              key={itemIndex}
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin=""
                              display="block"
                              canvas={false}
                            >
                              <Element
                                is={Flex}
                                canvas
                                flexDirection="row"
                                justifyContent="start"
                                alignItems="center"
                                gap="gap-2"
                                margin=""
                              >
                                <CraftText
                                  text="✓"
                                  tagName="span"
                                  fontSize="text-sm"
                                  color="text-green-600"
                                  textAlign="text-center"
                                />
                                <CraftText
                                  text={item}
                                  tagName="span"
                                  fontSize="text-sm"
                                  fontWeight="font-normal"
                                  color="text-gray-600"
                                  textAlign="text-left"
                                />
                              </Element>
                            </Element>
                          ))}
                        </Element>
                      </Element>

                      {/* Valid Until */}
                      <Element
                        is={Box}
                        backgroundColor="bg-amber-50"
                        padding="p-3"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-2"
                          margin=""
                        >
                          <CraftText
                            text="⏰"
                            tagName="span"
                            fontSize="text-sm"
                            textAlign="text-center"
                          />
                          <CraftText
                            text={`Valid until ${offer.validUntil}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-amber-700"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>

                      {/* Book Button */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text="Book Now"
                          size="lg"
                          backgroundColor="#d97706"
                          textColor="#ffffff"
                          borderRadius="rounded-full"
                          padding="px-8 py-3"
                          width="w-full"
                          className="hover:bg-amber-600 transition-colors duration-300"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Regular Offers Grid */}
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
            gap="gap-6"
            autoRows="auto"
          >
            {regularOffers.map((offer, index) => (
              <Element
                key={offer.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                className="group hover:shadow-xl transition-all duration-300"
                canvas
              >
                {/* Discount Badge */}
                <Element
                  is={Box}
                  backgroundColor="bg-red-500"
                  padding="py-1 px-3"
                  margin=""
                  display="block"
                  position="absolute"
                  top="top-3"
                  right="right-3"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={offer.discount}
                    tagName="span"
                    fontSize="text-xs"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-48"
                  canvas={false}
                >
                  <CraftImage
                    src={offer.image}
                    alt={offer.title}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="stretch"
                    gap="gap-3"
                    margin=""
                  >
                    {/* Category Badge */}
                    <Element
                      is={Box}
                      backgroundColor={getCategoryColor(offer.category)}
                      padding="px-2 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={offer.category.charAt(0).toUpperCase() + offer.category.slice(1)}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-semibold"
                        textAlign="text-center"
                      />
                    </Element>

                    {/* Offer Title */}
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
                        tagName="h5"
                        fontSize="text-lg"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Offer Description */}
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
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Price */}
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-2"
                      margin=""
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
                          text={offer.discountedPrice}
                          tagName="span"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-amber-600"
                          textAlign="text-left"
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
                          text={offer.originalPrice}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-400"
                          textAlign="text-left"
                          className="line-through"
                        />
                      </Element>
                    </Element>

                    {/* Book Button */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftButton
                        text="Book Now"
                        size="sm"
                        backgroundColor="#d97706"
                        textColor="#ffffff"
                        borderRadius="rounded-full"
                        padding="px-6 py-2"
                        width="w-full"
                        className="hover:bg-amber-600 transition-colors duration-300"
                      />
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
          backgroundColor="bg-amber-50"
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
                text="Don't Miss Out!"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
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
                text="These offers are limited time only. Book now to secure your savings!"
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
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
                  textColor="#d97706"
                  borderColor="#d97706"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-100 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityOffers1.craft = {
  displayName: "Hospitality Offers 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Offers specific props
    title: "Special Offers",
    subtitle: "Exclusive Deals",
    description: "Discover our limited-time offers and packages designed to make your stay even more memorable. Book now and save on luxury experiences.",
    primaryButtonText: "Book Now",
    secondaryButtonText: "View All Offers",
    showCategories: true,
    categories: ["All", "Stay", "Dining", "Spa", "Experience", "Romance", "Family"],
    selectedCategory: "All",
    showCountdown: true,
    showTerms: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

