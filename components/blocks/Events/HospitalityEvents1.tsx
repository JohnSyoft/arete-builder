import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: "wedding" | "corporate" | "social" | "conference";
  capacity: number;
  price: string;
  featured: boolean;
  amenities: string[];
}

interface HospitalityEvents1Props extends SectionProps {
  // Events specific props
  title?: string;
  subtitle?: string;
  description?: string;
  events?: Event[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Event settings
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  showPricing?: boolean;
  showCapacity?: boolean;
}

export function HospitalityEvents1({
  title = "Events & Weddings",
  subtitle = "Celebrate in Style",
  description = "Create unforgettable memories with our world-class event spaces and dedicated wedding planning services. From intimate gatherings to grand celebrations.",
  events = [
    {
      id: "wedding-1",
      title: "Garden Wedding Package",
      description: "Romantic outdoor ceremony in our beautiful garden setting with reception in the grand ballroom",
      date: "2024-06-15",
      time: "4:00 PM - 11:00 PM",
      location: "Garden Pavilion & Grand Ballroom",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      category: "wedding",
      capacity: 150,
      price: "From $15,000",
      featured: true,
      amenities: ["Outdoor Ceremony", "Reception Hall", "Bridal Suite", "Catering", "Photography"]
    },
    {
      id: "corporate-1",
      title: "Executive Conference",
      description: "Professional business conference with state-of-the-art facilities and catering services",
      date: "2024-05-20",
      time: "9:00 AM - 5:00 PM",
      location: "Conference Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "corporate",
      capacity: 200,
      price: "From $8,000",
      featured: true,
      amenities: ["AV Equipment", "Catering", "WiFi", "Parking", "Reception"]
    },
    {
      id: "social-1",
      title: "Anniversary Celebration",
      description: "Elegant anniversary celebration with fine dining and live entertainment",
      date: "2024-07-10",
      time: "6:00 PM - 12:00 AM",
      location: "Crystal Ballroom",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop",
      category: "social",
      capacity: 100,
      price: "From $6,000",
      featured: false,
      amenities: ["Private Dining", "Live Music", "Dance Floor", "Bar Service", "Decorations"]
    },
    {
      id: "conference-1",
      title: "Medical Conference 2024",
      description: "Annual medical conference with keynote speakers and networking opportunities",
      date: "2024-08-25",
      time: "8:00 AM - 6:00 PM",
      location: "Convention Center",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "conference",
      capacity: 500,
      price: "From $25,000",
      featured: false,
      amenities: ["Multiple Rooms", "AV Equipment", "Catering", "Registration", "Exhibition Space"]
    },
    {
      id: "wedding-2",
      title: "Intimate Wedding",
      description: "Small, intimate wedding ceremony with close family and friends",
      date: "2024-09-05",
      time: "2:00 PM - 8:00 PM",
      location: "Rose Garden & Private Dining Room",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop",
      category: "wedding",
      capacity: 50,
      price: "From $8,000",
      featured: false,
      amenities: ["Garden Ceremony", "Private Dining", "Photography", "Flowers", "Music"]
    },
    {
      id: "corporate-2",
      title: "Product Launch Event",
      description: "Exclusive product launch with media coverage and VIP guests",
      date: "2024-10-12",
      time: "7:00 PM - 11:00 PM",
      location: "Grand Ballroom",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      category: "corporate",
      capacity: 300,
      price: "From $12,000",
      featured: false,
      amenities: ["Stage Setup", "AV Equipment", "Catering", "Security", "Media Support"]
    }
  ],
  primaryButtonText = "Plan Your Event",
  secondaryButtonText = "View Packages",
  showCategories = true,
  categories = ["All", "Wedding", "Corporate", "Social", "Conference"],
  selectedCategory = "All",
  showPricing = true,
  showCapacity = true,
  ...props
}: HospitalityEvents1Props) {
  // Set section defaults for events
  const eventsProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter events by category
  const filteredEvents = selectedCategory === "All" 
    ? events 
    : events.filter(event => event.category === selectedCategory.toLowerCase());

  // Separate featured and regular events
  const featuredEvents = filteredEvents.filter(event => event.featured);
  const regularEvents = filteredEvents.filter(event => !event.featured);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "wedding": return "bg-pink-100 text-pink-700";
      case "corporate": return "bg-blue-100 text-blue-700";
      case "social": return "bg-green-100 text-green-700";
      case "conference": return "bg-purple-100 text-purple-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "wedding": return "💍";
      case "corporate": return "🏢";
      case "social": return "🎉";
      case "conference": return "📊";
      default: return "🎯";
    }
  };

  return (
    <Section {...eventsProps}>
      <Element
        id="eventsContent"
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

        {/* Featured Events Section */}
        {featuredEvents.length > 0 && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-12"
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
                text="Featured Events"
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
              minColumnWidth="400px"
              gap="gap-8"
              autoRows="auto"
            >
              {featuredEvents.map((event, index) => (
                <Element
                  key={event.id}
                  is={Card}
                  variant="flat"
                  shadow="xl"
                  borderRadius="rounded-2xl"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-0"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="hidden"
                  border={false}
                  className="group hover:shadow-2xl transition-all duration-300"
                  canvas
                >
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
                      src={event.image}
                      alt={event.title}
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
                        backgroundColor={getCategoryColor(event.category)}
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
                            text={getCategoryIcon(event.category)}
                            tagName="span"
                            fontSize="text-sm"
                            textAlign="text-center"
                          />
                          <CraftText
                            text={event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-semibold"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

                      {/* Event Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={event.title}
                          tagName="h4"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                        />
                      </Element>

                      {/* Event Description */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={event.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Event Details */}
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
                                text={`📅 ${event.date}`}
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
                                text={`🕒 ${event.time}`}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-medium"
                                color="text-gray-700"
                                textAlign="text-right"
                              />
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
                            <CraftText
                              text={`📍 ${event.location}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-700"
                              textAlign="text-left"
                            />
                          </Element>

                          {showCapacity && (
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin=""
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={`👥 Up to ${event.capacity} guests`}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-medium"
                                color="text-gray-700"
                                textAlign="text-left"
                              />
                            </Element>
                          )}
                        </Element>
                      </Element>

                      {/* Pricing and CTA */}
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="gap-4"
                        margin=""
                      >
                        {showPricing && (
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={event.price}
                              tagName="span"
                              fontSize="text-lg"
                              fontWeight="font-bold"
                              color="text-amber-600"
                              textAlign="text-left"
                            />
                          </Element>
                        )}

                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftButton
                            text="Learn More"
                            size="sm"
                            backgroundColor="#d97706"
                            textColor="#ffffff"
                            borderRadius="rounded-full"
                            padding="px-6 py-2"
                            width="w-auto"
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
        )}

        {/* Regular Events Grid */}
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
            minColumnWidth="300px"
            gap="gap-6"
            autoRows="auto"
          >
            {regularEvents.map((event, index) => (
              <Element
                key={event.id}
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
                    src={event.image}
                    alt={event.title}
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
                      backgroundColor={getCategoryColor(event.category)}
                      padding="px-2 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-semibold"
                        textAlign="text-center"
                      />
                    </Element>

                    {/* Event Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={event.title}
                        tagName="h5"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Event Date & Time */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={`${event.date} • ${event.time}`}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Pricing */}
                    {showPricing && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={event.price}
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-bold"
                          color="text-amber-600"
                          textAlign="text-left"
                        />
                      </Element>
                    )}
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
                text="Ready to Plan Your Event?"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
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

HospitalityEvents1.craft = {
  displayName: "Hospitality Events 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Events specific props
    title: "Events & Weddings",
    subtitle: "Celebrate in Style",
    description: "Create unforgettable memories with our world-class event spaces and dedicated wedding planning services. From intimate gatherings to grand celebrations.",
    primaryButtonText: "Plan Your Event",
    secondaryButtonText: "View Packages",
    showCategories: true,
    categories: ["All", "Wedding", "Corporate", "Social", "Conference"],
    selectedCategory: "All",
    showPricing: true,
    showCapacity: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
