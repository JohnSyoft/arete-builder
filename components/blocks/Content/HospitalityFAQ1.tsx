import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "booking" | "amenities" | "dining" | "spa" | "events";
  popular: boolean;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
}

interface HospitalityFAQ1Props extends SectionProps {
  // FAQ specific props
  title?: string;
  subtitle?: string;
  description?: string;
  faqItems?: FAQItem[];
  categories?: FAQCategory[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showCategories?: boolean;
  selectedCategory?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  showContact?: boolean;
  contactInfo?: {
    phone: string;
    email: string;
  };
}

export function HospitalityFAQ1({
  title = "Frequently Asked Questions",
  subtitle = "Get Answers",
  description = "Find answers to the most common questions about our hotel, services, and policies. Can't find what you're looking for? Contact our team directly.",
  faqItems = [
    {
      id: "check-in-time",
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability and additional charges.",
      category: "general",
      popular: true
    },
    {
      id: "cancellation-policy",
      question: "What is your cancellation policy?",
      answer: "Reservations can be cancelled free of charge up to 24 hours before arrival. Cancellations made within 24 hours of arrival will be charged one night's room rate.",
      category: "booking",
      popular: true
    },
    {
      id: "pet-policy",
      question: "Do you allow pets?",
      answer: "Yes, we welcome pets up to 50 lbs. A pet fee of $75 per stay applies. Please inform us in advance if you plan to bring a pet.",
      category: "general",
      popular: false
    },
    {
      id: "wifi-internet",
      question: "Is WiFi available throughout the hotel?",
      answer: "Yes, complimentary high-speed WiFi is available throughout the hotel, including all guest rooms, public areas, and meeting spaces.",
      category: "amenities",
      popular: true
    },
    {
      id: "parking-available",
      question: "Is parking available?",
      answer: "Valet parking is available for $45 per night. Self-parking is not available. Electric vehicle charging stations are provided at no additional cost.",
      category: "amenities",
      popular: false
    },
    {
      id: "dining-options",
      question: "What dining options are available?",
      answer: "We offer three restaurants: fine dining, casual bistro, and rooftop bar. Room service is available 24/7. All restaurants accommodate dietary restrictions with advance notice.",
      category: "dining",
      popular: true
    },
    {
      id: "spa-appointments",
      question: "How do I book spa appointments?",
      answer: "Spa appointments can be made through our concierge, online booking system, or by calling the spa directly. We recommend booking in advance, especially for weekends and holidays.",
      category: "spa",
      popular: false
    },
    {
      id: "event-planning",
      question: "Do you offer event planning services?",
      answer: "Yes, our dedicated event planning team can assist with weddings, corporate events, and special celebrations. We offer full-service planning from concept to execution.",
      category: "events",
      popular: false
    },
    {
      id: "age-restrictions",
      question: "Are there any age restrictions?",
      answer: "Guests must be 21 or older to check in. Children under 16 stay free when sharing a room with parents. The spa and some dining areas have age restrictions.",
      category: "general",
      popular: false
    },
    {
      id: "accessibility",
      question: "Is the hotel accessible for guests with disabilities?",
      answer: "Yes, we are fully ADA compliant with accessible rooms, public areas, and facilities. Accessible rooms feature roll-in showers, visual alarms, and other accessibility features.",
      category: "amenities",
      popular: false
    },
    {
      id: "dress-code",
      question: "Is there a dress code for restaurants?",
      answer: "Our fine dining restaurant requires smart casual attire. The bistro and rooftop bar have a relaxed dress code. Pool and spa areas have specific attire requirements.",
      category: "dining",
      popular: false
    },
    {
      id: "group-bookings",
      question: "Do you offer group booking discounts?",
      answer: "Yes, we offer special rates for groups of 10 or more rooms. Group bookings include complimentary meeting space, welcome amenities, and dedicated group coordinator.",
      category: "booking",
      popular: false
    }
  ],
  categories = [
    { id: "all", name: "All Questions", icon: "❓", count: 12 },
    { id: "general", name: "General", icon: "🏨", count: 4 },
    { id: "booking", name: "Booking", icon: "📅", count: 2 },
    { id: "amenities", name: "Amenities", icon: "✨", count: 3 },
    { id: "dining", name: "Dining", icon: "🍽️", count: 2 },
    { id: "spa", name: "Spa", icon: "🧘‍♀️", count: 1 },
    { id: "events", name: "Events", icon: "🎉", count: 1 }
  ],
  primaryButtonText = "Contact Us",
  secondaryButtonText = "Book Now",
  showCategories = true,
  selectedCategory = "all",
  showSearch = true,
  searchPlaceholder = "Search frequently asked questions...",
  showContact = true,
  contactInfo = {
    phone: "+1 (555) 123-4567",
    email: "info@luxuryhotel.com"
  },
  ...props
}: HospitalityFAQ1Props) {
  // Set section defaults for FAQ
  const faqProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter FAQ items by category
  const filteredFAQItems = selectedCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  // Separate popular and regular FAQ items
  const popularFAQItems = filteredFAQItems.filter(item => item.popular);
  const regularFAQItems = filteredFAQItems.filter(item => !item.popular);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "general": return "bg-blue-100 text-blue-700";
      case "booking": return "bg-green-100 text-green-700";
      case "amenities": return "bg-purple-100 text-purple-700";
      case "dining": return "bg-red-100 text-red-700";
      case "spa": return "bg-pink-100 text-pink-700";
      case "events": return "bg-yellow-100 text-yellow-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Section {...faqProps}>
      <Element
        id="faqContent"
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

            {/* Search Bar */}
            {showSearch && (
              <Element
                is={Box}
                backgroundColor="bg-white"
                padding="py-4 px-6"
                margin="mb-8"
                display="block"
                borderRadius="rounded-2xl"
                shadow="lg"
                width="w-full max-w-2xl"
                canvas
              >
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
                      text="🔍"
                      tagName="span"
                      fontSize="text-lg"
                      textAlign="text-center"
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
                      text={searchPlaceholder}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-500"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>
            )}

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
                      key={category.id}
                      is={Box}
                      backgroundColor={category.id === selectedCategory ? "bg-amber-100" : "bg-transparent"}
                      padding="px-6 py-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      className={`hover:bg-amber-50 transition-colors duration-200 cursor-pointer ${
                        category.id === selectedCategory ? "ring-2 ring-amber-500" : ""
                      }`}
                      canvas={false}
                    >
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="gap-2"
                        margin=""
                      >
                        <CraftText
                          text={category.icon}
                          tagName="span"
                          fontSize="text-sm"
                          textAlign="text-center"
                        />
                        <CraftText
                          text={category.name}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight={category.id === selectedCategory ? "font-semibold" : "font-medium"}
                          color={category.id === selectedCategory ? "text-amber-700" : "text-gray-600"}
                          textAlign="text-center"
                          className="hover:text-amber-600 transition-colors duration-200"
                        />
                        <Element
                          is={Box}
                          backgroundColor="bg-gray-200"
                          padding="px-2 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={category.count.toString()}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-medium"
                            color="text-gray-600"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>
                    </Element>
                  ))}
                </Element>
              </Element>
            )}
          </Element>
        </Element>

        {/* Popular Questions Section */}
        {popularFAQItems.length > 0 && (
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
                text="Popular Questions"
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
              gap="gap-6"
              autoRows="auto"
            >
              {popularFAQItems.map((item, index) => (
                <Element
                  key={item.id}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-6"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="group hover:shadow-xl transition-all duration-300"
                  canvas
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
                    {/* Question Header */}
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="start"
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
                          text={item.question}
                          tagName="h4"
                          fontSize="text-lg"
                          fontWeight="font-semibold"
                          color="text-gray-900"
                          textAlign="text-left"
                        />
                      </Element>

                      <Element
                        is={Box}
                        backgroundColor="bg-amber-100"
                        padding="px-2 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <CraftText
                          text="Popular"
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-semibold"
                          color="text-amber-700"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>

                    {/* Answer */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={item.answer}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Category Badge */}
                    <Element
                      is={Box}
                      backgroundColor={getCategoryColor(item.category)}
                      padding="px-3 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-semibold"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* All Questions Section */}
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
            className={popularFAQItems.length > 0 ? "" : "hidden"}
          >
            <CraftText
              text="All Questions"
              tagName="h3"
              fontSize="text-2xl sm:text-3xl"
              fontWeight="font-bold"
              color="text-gray-900"
              textAlign="text-center"
            />
          </Element>

          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="start"
            alignItems="stretch"
            gap="gap-4"
            margin=""
          >
            {regularFAQItems.map((item, index) => (
              <Element
                key={item.id}
                is={Card}
                variant="flat"
                shadow="sm"
                borderRadius="rounded-lg"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-6"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="visible"
                border={false}
                className="group hover:shadow-md transition-all duration-200"
                canvas
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
                  {/* Question */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={item.question}
                      tagName="h5"
                      fontSize="text-base"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                    />
                  </Element>

                  {/* Answer */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={item.answer}
                      tagName="p"
                      fontSize="text-sm"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                    />
                  </Element>

                  {/* Category Badge */}
                  <Element
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
                      <Element
                        is={Box}
                        backgroundColor={getCategoryColor(item.category)}
                        padding="px-2 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <CraftText
                          text={item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-semibold"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Contact Section */}
        {showContact && (
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
                  text="Still Have Questions?"
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
                  text="Our team is here to help! Contact us directly for personalized assistance."
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
                gap="gap-8"
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
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text="📞"
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
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
                        text={contactInfo.phone}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                </Element>

                <Element
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
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text="✉️"
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
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
                        text={contactInfo.email}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                </Element>
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
          </Element>)}
      </Element>
    </Section>
  );
}

HospitalityFAQ1.craft = {
  displayName: "Hospitality FAQ 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // FAQ specific props
    title: "Frequently Asked Questions",
    subtitle: "Get Answers",
    description: "Find answers to the most common questions about our hotel, services, and policies. Can't find what you're looking for? Contact our team directly.",
    primaryButtonText: "Contact Us",
    secondaryButtonText: "Book Now",
    showCategories: true,
    selectedCategory: "all",
    showSearch: true,
    searchPlaceholder: "Search frequently asked questions...",
    showContact: true,
    contactInfo: {
      phone: "+1 (555) 123-4567",
      email: "info@luxuryhotel.com"
    },
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

