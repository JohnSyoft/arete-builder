import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ConciergeService {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: "dining" | "entertainment" | "transportation" | "shopping" | "wellness" | "business";
  available: boolean;
  responseTime: string;
  price?: string;
}

interface ConciergeRequest {
  id: string;
  title: string;
  description: string;
  icon: string;
  popular: boolean;
}

interface HospitalityConcierge1Props extends SectionProps {
  // Concierge specific props
  title?: string;
  subtitle?: string;
  description?: string;
  services?: ConciergeService[];
  requests?: ConciergeRequest[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Contact info
  phoneNumber?: string;
  email?: string;
  // Settings
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  showRequestForm?: boolean;
}

export function HospitalityConcierge1({
  title = "Concierge Services",
  subtitle = "Your Personal Assistant",
  description = "Our dedicated concierge team is here to make your stay extraordinary. From restaurant reservations to exclusive experiences, we're at your service 24/7.",
  services = [
    {
      id: "restaurant-reservations",
      name: "Restaurant Reservations",
      description: "Secure tables at the city's most exclusive restaurants and hidden gems",
      icon: "🍽️",
      category: "dining",
      available: true,
      responseTime: "Within 2 hours",
      price: "Complimentary"
    },
    {
      id: "theater-tickets",
      name: "Theater & Show Tickets",
      description: "Premium seats for Broadway shows, concerts, and cultural events",
      icon: "🎭",
      category: "entertainment",
      available: true,
      responseTime: "Within 4 hours",
      price: "Face value + service fee"
    },
    {
      id: "airport-transport",
      name: "Airport Transportation",
      description: "Private car service to and from the airport with meet & greet",
      icon: "✈️",
      category: "transportation",
      available: true,
      responseTime: "Immediate",
      price: "From $75"
    },
    {
      id: "shopping-assistance",
      name: "Personal Shopping",
      description: "Personal shopper service for luxury boutiques and designer stores",
      icon: "🛍️",
      category: "shopping",
      available: true,
      responseTime: "Within 24 hours",
      price: "From $150/hour"
    },
    {
      id: "spa-appointments",
      name: "Spa & Wellness",
      description: "Book treatments at our spa or arrange off-site wellness experiences",
      icon: "🧘‍♀️",
      category: "wellness",
      available: true,
      responseTime: "Within 1 hour",
      price: "Complimentary booking"
    },
    {
      id: "business-services",
      name: "Business Services",
      description: "Meeting room setup, secretarial services, and corporate arrangements",
      icon: "💼",
      category: "business",
      available: true,
      responseTime: "Within 2 hours",
      price: "From $50/hour"
    },
    {
      id: "private-tours",
      name: "Private Tours",
      description: "Exclusive city tours with expert guides and luxury transportation",
      icon: "🗺️",
      category: "entertainment",
      available: true,
      responseTime: "Within 24 hours",
      price: "From $200"
    },
    {
      id: "event-planning",
      name: "Event Planning",
      description: "Coordinate special celebrations, anniversaries, and private parties",
      icon: "🎉",
      category: "entertainment",
      available: true,
      responseTime: "Within 48 hours",
      price: "From $500"
    }
  ],
  requests = [
    {
      id: "dinner-reservation",
      title: "Dinner Reservation",
      description: "Book a table at a fine dining restaurant",
      icon: "🍽️",
      popular: true
    },
    {
      id: "show-tickets",
      title: "Show Tickets",
      description: "Get tickets for tonight's performance",
      icon: "🎭",
      popular: true
    },
    {
      id: "airport-pickup",
      title: "Airport Pickup",
      description: "Arrange transportation from the airport",
      icon: "✈️",
      popular: false
    },
    {
      id: "spa-treatment",
      title: "Spa Treatment",
      description: "Book a relaxing spa appointment",
      icon: "🧘‍♀️",
      popular: true
    },
    {
      id: "city-tour",
      title: "City Tour",
      description: "Plan a private city sightseeing tour",
      icon: "🗺️",
      popular: false
    },
    {
      id: "shopping-service",
      title: "Shopping Service",
      description: "Arrange personal shopping assistance",
      icon: "🛍️",
      popular: false
    }
  ],
  primaryButtonText = "Request Service",
  secondaryButtonText = "Call Concierge",
  phoneNumber = "+1 (555) 123-4567",
  email = "concierge@luxuryhotel.com",
  showCategories = true,
  categories = ["All", "Dining", "Entertainment", "Transportation", "Shopping", "Wellness", "Business"],
  selectedCategory = "All",
  showRequestForm = true,
  ...props
}: HospitalityConcierge1Props) {
  // Set section defaults for concierge
  const conciergeProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter services by category
  const filteredServices = selectedCategory === "All" 
    ? services 
    : services.filter(service => service.category === selectedCategory.toLowerCase());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "dining": return "bg-red-100 text-red-700";
      case "entertainment": return "bg-purple-100 text-purple-700";
      case "transportation": return "bg-blue-100 text-blue-700";
      case "shopping": return "bg-pink-100 text-pink-700";
      case "wellness": return "bg-green-100 text-green-700";
      case "business": return "bg-gray-100 text-gray-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Section {...conciergeProps}>
      <Element
        id="conciergeContent"
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

        {/* Quick Request Buttons */}
        <Element
          is={Box}
          backgroundColor="bg-amber-50"
          padding="py-12 px-8"
          margin="mb-16"
          display="block"
          borderRadius="rounded-2xl"
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
              text="Quick Requests"
              tagName="h3"
              fontSize="text-2xl"
              fontWeight="font-bold"
              color="text-gray-900"
              textAlign="text-center"
            />
          </Element>

          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="200px"
            gap="gap-4"
            autoRows="auto"
          >
            {requests.map((request, index) => (
              <Element
                key={request.id}
                is={Card}
                variant="flat"
                shadow="sm"
                borderRadius="rounded-xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-4"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="visible"
                border={false}
                className="group hover:shadow-lg transition-all duration-200 cursor-pointer"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-3"
                  margin="text-center"
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-100"
                    padding="p-3"
                    margin=""
                    display="block"
                    borderRadius="rounded-full"
                    width="w-12"
                    height="h-12"
                    canvas={false}
                  >
                    <CraftText
                      text={request.icon}
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
                      text={request.title}
                      tagName="h4"
                      fontSize="text-sm"
                      fontWeight="font-semibold"
                      color="text-gray-900"
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
                      text={request.description}
                      tagName="p"
                      fontSize="text-xs"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-center"
                    />
                  </Element>

                  {request.popular && (
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-500"
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
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign="text-center"
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Services Grid */}
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
            columns={2}
            autoFit={true}
            minColumnWidth="400px"
            gap="gap-8"
            autoRows="auto"
          >
            {filteredServices.map((service, index) => (
              <Element
                key={service.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-8"
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
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="start"
                  gap="gap-6"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-100"
                    padding="p-4"
                    margin=""
                    display="block"
                    borderRadius="rounded-xl"
                    width="w-16"
                    height="h-16"
                    canvas={false}
                  >
                    <CraftText
                      text={service.icon}
                      tagName="span"
                      fontSize="text-2xl"
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
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="stretch"
                      gap="gap-3"
                      margin=""
                    >
                      {/* Service Title and Category */}
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
                            text={service.name}
                            tagName="h4"
                            fontSize="text-xl"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
                          />
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor={getCategoryColor(service.category)}
                          padding="px-3 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={service.category.charAt(0).toUpperCase() + service.category.slice(1)}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-semibold"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

                      {/* Service Description */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={service.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Service Details */}
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
                          flexDirection="row"
                          justifyContent="space-between"
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
                              text={`Response: ${service.responseTime}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-700"
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
                              text={service.price || "Complimentary"}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-amber-600"
                              textAlign="text-right"
                            />
                          </Element>
                        </Element>
                      </Element>

                      {/* Request Button */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text="Request Service"
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
              </Element>
            ))}
          </Element>
        </Element>

        {/* Contact Information */}
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
            gap="gap-8"
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
                text="24/7 Concierge Service"
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
                text="Available around the clock to assist with all your needs"
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
                    backgroundColor="bg-amber-600"
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
                      text={phoneNumber}
                      tagName="span"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-white"
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
                    backgroundColor="bg-amber-600"
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
                      text={email}
                      tagName="span"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-white"
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

HospitalityConcierge1.craft = {
  displayName: "Hospitality Concierge 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Concierge specific props
    title: "Concierge Services",
    subtitle: "Your Personal Assistant",
    description: "Our dedicated concierge team is here to make your stay extraordinary. From restaurant reservations to exclusive experiences, we're at your service 24/7.",
    primaryButtonText: "Request Service",
    secondaryButtonText: "Call Concierge",
    phoneNumber: "+1 (555) 123-4567",
    email: "concierge@luxuryhotel.com",
    showCategories: true,
    categories: ["All", "Dining", "Entertainment", "Transportation", "Shopping", "Wellness", "Business"],
    selectedCategory: "All",
    showRequestForm: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

