import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Client {
  id: string;
  name: string;
  logo: string;
  link?: string;
  alt?: string;
}

interface HospitalityClients1Props extends SectionProps {
  // Clients specific props
  title?: string;
  subtitle?: string;
  description?: string;
  clients?: Client[];
  discountText?: string;
  discountAmount?: string;
  discountDescription?: string;
  // Settings
  showTitle?: boolean;
  showDiscount?: boolean;
  showLogos?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  logoHeight?: string;
}

export function HospitalityClients1({
  title = "Our Partners",
  subtitle = "Trusted By",
  description = "We work with the best brands in the hospitality industry.",
  clients = [
    {
      id: "client-1",
      name: "Booking.com",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
      link: "https://booking.com",
      alt: "Booking.com Logo"
    },
    {
      id: "client-2",
      name: "Expedia",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
      link: "https://expedia.com",
      alt: "Expedia Logo"
    },
    {
      id: "client-3",
      name: "TripAdvisor",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
      link: "https://tripadvisor.com",
      alt: "TripAdvisor Logo"
    },
    {
      id: "client-4",
      name: "Airbnb",
      logo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
      link: "https://airbnb.com",
      alt: "Airbnb Logo"
    }
  ],
  discountText = "Awesome",
  discountAmount = "20%",
  discountDescription = "Get 20% discount on hotels booking with above websites.",
  showTitle = true,
  showDiscount = true,
  showLogos = true,
  layout = "grid",
  columns = 4,
  logoHeight = "h-14",
  ...props
}: HospitalityClients1Props) {
  // Set section defaults for clients
  const clientsProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...clientsProps}>
      <Element
        id="clientsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        {showTitle && (
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
                margin=""
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
                margin=""
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
                  text={description}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  className="max-w-2xl mx-auto"
                />
              </Element>
            </Element>
          </Element>
        )}

        {/* Client Logos */}
        {showLogos && (
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
              columns={columns}
              autoFit={false}
              minColumnWidth="200px"
              gap="gap-8"
              autoRows="auto"
            >
              {clients.map((client, index) => (
                <Element
                  key={client.id}
                  is={Card}
                  variant="flat"
                  shadow="none"
                  borderRadius="rounded-lg"
                  backgroundColor="bg-transparent"
                  borderColor=""
                  padding="p-4"
                  margin=""
                  hoverable={true}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="group hover:bg-gray-50 transition-all duration-300"
                  canvas
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-2"
                    margin="text-center"
                  >
                    {/* Client Logo */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftImage
                        src={client.logo}
                        alt={client.alt || client.name}
                        width="w-auto"
                        height={logoHeight}
                        objectFit="object-contain"
                        margin=""
                        padding=""
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </Element>

                    {/* Client Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={client.name}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color="text-gray-600"
                        textAlign="text-center"
                        className="group-hover:text-gray-900 transition-colors duration-300"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        )}

        {/* Discount Banner */}
        {showDiscount && (
          <Element
            is={Box}
            backgroundColor="bg-gray-50"
            padding="py-8 px-8"
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
              gap="gap-4"
              margin="text-center"
            >
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
                {/* Discount Badge */}
                <Element
                  is={Box}
                  backgroundColor="bg-gray-900"
                  padding="px-4 py-2"
                  margin=""
                  display="block"
                  borderRadius="rounded-lg"
                  canvas={false}
                >
                  <CraftText
                    text={discountText}
                    tagName="span"
                    fontSize="text-xs"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                    className="uppercase tracking-wider"
                  />
                </Element>

                {/* Discount Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={discountDescription}
                    tagName="p"
                    fontSize="text-lg sm:text-xl"
                    fontWeight="font-medium"
                    color="text-gray-900"
                    textAlign="text-center"
                  >
                    <CraftText
                      text={`${discountAmount} discount`}
                      tagName="span"
                      fontSize="text-lg sm:text-xl"
                      fontWeight="font-bold"
                      color="text-amber-600"
                      textAlign="text-center"
                      className="underline decoration-2 underline-offset-4"
                    />
                  </CraftText>
                </Element>
              </Element>
            </Element>
          </Element>
        )}
      </Element>
    </Section>
  );
}

HospitalityClients1.craft = {
  displayName: "Hospitality Clients 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Clients specific props
    title: "Our Partners",
    subtitle: "Trusted By",
    description: "We work with the best brands in the hospitality industry.",
    discountText: "Awesome",
    discountAmount: "20%",
    discountDescription: "Get 20% discount on hotels booking with above websites.",
    showTitle: true,
    showDiscount: true,
    showLogos: true,
    layout: "grid",
    columns: 4,
    logoHeight: "h-14",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
