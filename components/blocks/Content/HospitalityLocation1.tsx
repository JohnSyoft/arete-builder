import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Map } from "@/components/blocks/Basic/Map";

interface NearbyAttraction {
  id: string;
  name: string;
  description: string;
  distance: string;
  category: string;
  image: string;
  rating: number;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  website: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

interface HospitalityLocation1Props extends SectionProps {
  // Location specific props
  title?: string;
  subtitle?: string;
  description?: string;
  contactInfo?: ContactInfo;
  nearbyAttractions?: NearbyAttraction[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Map settings
  mapHeight?: string;
  mapZoom?: number;
  showDirections?: boolean;
}

export function HospitalityLocation1({
  title = "Prime Location",
  subtitle = "Hotel Location",
  description = "Strategically located in the heart of the city, our hotel offers easy access to major attractions, business districts, and transportation hubs.",
  contactInfo = {
    address: "123 Luxury Avenue, Downtown District, City 12345",
    phone: "+1 (555) 123-4567",
    email: "info@luxuryhotel.com",
    website: "www.luxuryhotel.com",
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  nearbyAttractions = [
    {
      id: "central-park",
      name: "Central Park",
      description: "Famous urban park with walking trails, lakes, and recreational activities.",
      distance: "0.5 miles",
      category: "Parks & Recreation",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=200&fit=crop",
      rating: 4.8
    },
    {
      id: "business-district",
      name: "Financial District",
      description: "Major business center with corporate offices and shopping centers.",
      distance: "0.3 miles",
      category: "Business",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      rating: 4.6
    },
    {
      id: "shopping-mall",
      name: "Grand Shopping Mall",
      description: "Premium shopping destination with luxury brands and dining options.",
      distance: "0.8 miles",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=300&h=200&fit=crop",
      rating: 4.7
    },
    {
      id: "museum",
      name: "Art Museum",
      description: "World-renowned art museum featuring contemporary and classical collections.",
      distance: "1.2 miles",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=300&h=200&fit=crop",
      rating: 4.9
    },
    {
      id: "airport",
      name: "International Airport",
      description: "Major international airport with direct flights to destinations worldwide.",
      distance: "12 miles",
      category: "Transportation",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=300&h=200&fit=crop",
      rating: 4.5
    },
    {
      id: "beach",
      name: "Oceanfront Beach",
      description: "Beautiful sandy beach perfect for relaxation and water activities.",
      distance: "2.5 miles",
      category: "Recreation",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=200&fit=crop",
      rating: 4.8
    }
  ],
  primaryButtonText = "Get Directions",
  secondaryButtonText = "Contact Us",
  mapHeight = "h-96",
  mapZoom = 15,
  showDirections = true,
  ...props
}: HospitalityLocation1Props) {
  // Set section defaults for location
  const locationProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...locationProps}>
      <Element
        id="locationContent"
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
          </Element>
        </Element>

        {/* Map and Contact Info Section */}
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
            autoFit={false}
            minColumnWidth="300px"
            gap="gap-8"
            autoRows="auto"
          >
            {/* Map */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas
            >
              <Element
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={false}
                clickable={false}
                overflow="hidden"
                border={false}
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height={mapHeight}
                  canvas={false}
                >
                  <Map
                    lat={contactInfo.coordinates.lat}
                    lng={contactInfo.coordinates.lng}
                    zoom={mapZoom}
                    width="w-full"
                    height="h-full"
                    className="rounded-2xl"
                  />
                </Element>
              </Element>
            </Element>

            {/* Contact Information */}
            <Element
              is={Box}
              backgroundColor="bg-gray-50"
              padding="p-8 sm:p-12"
              margin=""
              display="block"
              borderRadius="rounded-2xl"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="stretch"
                gap="gap-8"
                margin=""
              >
                {/* Contact Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text="Contact Information"
                    tagName="h3"
                    fontSize="text-2xl sm:text-3xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Address */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
                  margin=""
                  display="block"
                  borderRadius="rounded-xl"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      width="w-12"
                      height="h-12"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text="📍"
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
                        className="flex items-center justify-center h-full"
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
                        text="Address"
                        tagName="h4"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                        margin="mb-2"
                      />
                      <CraftText
                        text={contactInfo.address}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Phone */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
                  margin=""
                  display="block"
                  borderRadius="rounded-xl"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-green-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      width="w-12"
                      height="h-12"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text="📞"
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
                        className="flex items-center justify-center h-full"
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
                        text="Phone"
                        tagName="h4"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                        margin="mb-2"
                      />
                      <CraftText
                        text={contactInfo.phone}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Email */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
                  margin=""
                  display="block"
                  borderRadius="rounded-xl"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-blue-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      width="w-12"
                      height="h-12"
                      borderRadius="rounded-full"
                      canvas={false}
                    >
                      <CraftText
                        text="✉️"
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
                        className="flex items-center justify-center h-full"
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
                        text="Email"
                        tagName="h4"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-900"
                        textAlign="text-left"
                        margin="mb-2"
                      />
                      <CraftText
                        text={contactInfo.email}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* CTA Buttons */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
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
                      padding="px-6 py-3"
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
                      padding="px-6 py-3"
                      width="w-auto"
                      className="hover:bg-amber-50 transition-colors duration-300"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Nearby Attractions */}
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
            margin="mb-12"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Nearby Attractions"
                tagName="h3"
                fontSize="text-3xl sm:text-4xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={true}
              minColumnWidth="300px"
              gap="gap-6"
              autoRows="auto"
            >
              {nearbyAttractions.map((attraction, index) => (
                <Element
                  key={attraction.id}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-2xl"
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
                  {/* Attraction Image */}
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
                      src={attraction.image}
                      alt={attraction.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-t-2xl"
                      margin=""
                      padding=""
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                  </Element>

                  {/* Attraction Content */}
                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-6"
                    margin=""
                    display="block"
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
                      {/* Name and Distance */}
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
                            text={attraction.name}
                            tagName="h4"
                            fontSize="text-lg"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
                            lineHeight="leading-tight"
                          />
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor="bg-amber-100"
                          padding="px-3 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={attraction.distance}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-amber-700"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

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
                          text={attraction.description}
                          tagName="p"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>

                      {/* Category and Rating */}
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
                          backgroundColor="bg-gray-100"
                          padding="px-3 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={attraction.category}
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-medium"
                            color="text-gray-700"
                            textAlign="text-center"
                          />
                        </Element>

                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-1"
                          margin=""
                        >
                          <CraftText
                            text="⭐"
                            tagName="span"
                            fontSize="text-sm"
                            textAlign="text-center"
                          />
                          <CraftText
                            text={attraction.rating.toString()}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-gray-700"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        </Element>
      {/* </Element> */}
    </Section>
  );
}

HospitalityLocation1.craft = {
  displayName: "Hospitality Location 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Location specific props
    title: "Prime Location",
    subtitle: "Hotel Location",
    description: "Strategically located in the heart of the city, our hotel offers easy access to major attractions, business districts, and transportation hubs.",
    primaryButtonText: "Get Directions",
    secondaryButtonText: "Contact Us",
    mapHeight: "h-96",
    mapZoom: 15,
    showDirections: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
