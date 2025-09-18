import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Carousel } from "@/components/blocks/Basic/Carousel";

interface Room {
  id: string;
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  view: string;
  images: string[];
  features: string[];
  size: string;
  capacity: string;
}

interface RoomShowcase1Props extends SectionProps {
  // Room Showcase specific props
  title?: string;
  subtitle?: string;
  description?: string;
  rooms?: Room[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function RoomShowcase1({
  title = "Hotel rooms",
  subtitle = "Luxury Accommodations",
  description = "We are happy to offer our guests a truly fabulous experience of a relaxing and memorable stay.",
  rooms = [
    {
      id: "superior",
      name: "Superior room",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      price: "199",
      priceUnit: "Per night",
      view: "Phenomenal view",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1611892440501-80c6e516f8d8?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=680&h=465&fit=crop"
      ],
      features: ["King Size Bed", "Private Bathroom", "City View", "Free WiFi"],
      size: "35 sq m",
      capacity: "2 Guests"
    },
    {
      id: "deluxe",
      name: "Deluxe room",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      price: "249",
      priceUnit: "Per night",
      view: "Phenomenal view",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=680&h=465&fit=crop"
      ],
      features: ["King Size Bed", "Private Bathroom", "Ocean View", "Free WiFi", "Mini Bar"],
      size: "45 sq m",
      capacity: "2 Guests"
    },
    {
      id: "signature",
      name: "Signature room",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      price: "300",
      priceUnit: "Per night",
      view: "Mountain view",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1611892440501-80c6e516f8d8?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=680&h=465&fit=crop"
      ],
      features: ["King Size Bed", "Private Bathroom", "Mountain View", "Free WiFi", "Mini Bar", "Balcony"],
      size: "55 sq m",
      capacity: "2 Guests"
    },
    {
      id: "luxury",
      name: "Luxury suite room",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      price: "350",
      priceUnit: "Per night",
      view: "Panoramic view",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=680&h=465&fit=crop",
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=680&h=465&fit=crop"
      ],
      features: ["King Size Bed", "Private Bathroom", "Panoramic View", "Free WiFi", "Mini Bar", "Balcony", "Living Area"],
      size: "75 sq m",
      capacity: "4 Guests"
    }
  ],
  primaryButtonText = "Book your stay",
  secondaryButtonText = "View all rooms",
  ...props
}: RoomShowcase1Props) {
  // Set section defaults for room showcase
  const showcaseProps = {
    backgroundColor: "#f8fafc", // bg-slate-50
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...showcaseProps}>
      <Element
        id="roomShowcaseContent"
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

        {/* Room Categories Navigation */}
        <Element
          is={Box}
          backgroundColor="bg-white"
          padding="py-8 px-6"
          margin="mb-12"
          display="block"
          borderRadius="rounded-lg"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="200px"
            gap="gap-4"
            autoRows="auto"
          >
            {rooms.map((room, index) => (
              <Element
                key={room.id}
                is={Box}
                backgroundColor="transparent"
                padding="p-4"
                margin=""
                display="block"
                borderRadius="rounded-lg"
                className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                canvas={false}
              >
                <CraftText
                  text={room.name}
                  tagName="a"
                  fontSize="text-lg"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  textAlign="text-center"
                  className="block w-full hover:text-amber-600 transition-colors duration-200"
                />
              </Element>
            ))}
          </Element>
        </Element>

        {/* Room Cards */}
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
            justifyContent="start"
            alignItems="stretch"
            gap="gap-12"
            margin=""
          >
            {rooms.map((room, index) => (
              <Element
                key={room.id}
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
                canvas
              >
                <Element
                  is={Grid}
                  canvas
                  columns={2}
                  autoFit={false}
                  minColumnWidth="300px"
                  gap="gap-0"
                  autoRows="auto"
                  className={index % 2 === 1 ? "flex-row-reverse" : ""}
                >
                  {/* Room Image Carousel */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="100%"
                    height="h-96 sm:h-[500px]"
                    canvas
                  >
                    <Element
                      is={Carousel}
                      canvas
                      slides={room.images.map((image, imgIndex) => (
                        <Element
                          key={imgIndex}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          height="h-full"
                          canvas={false}
                        >
                          <CraftImage
                            src={image}
                            alt={`${room.name} - Image ${imgIndex + 1}`}
                            width="w-full"
                            height="h-full"
                            objectFit="object-cover"
                            borderRadius="rounded-none"
                            margin=""
                            padding=""
                          />
                        </Element>
                      ))}
                      autoplay={true}
                      autoplayDelay={3000}
                      showArrows={true}
                      showDots={true}
                      className="h-full"
                    />
                  </Element>

                  {/* Room Details */}
                  <Element
                    is={Box}
                    backgroundColor="bg-gray-50"
                    padding="p-8 sm:p-12"
                    margin=""
                    display="block"
                    canvas
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="space-between"
                      alignItems="stretch"
                      gap="gap-6"
                      margin="h-full"
                    >
                      {/* Room Info */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-2"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={room.view}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-amber-600"
                            textAlign="text-left"
                          />
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-4"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={room.name}
                            tagName="h3"
                            fontSize="text-2xl sm:text-3xl"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
                            lineHeight="leading-tight"
                          />
                        </Element>

                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-6"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={room.description}
                            tagName="p"
                            fontSize="text-base sm:text-lg"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                          />
                        </Element>

                        {/* Room Features */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-6"
                          display="block"
                          canvas={false}
                        >
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
                            {room.features.map((feature, featureIndex) => (
                              <Element
                                key={featureIndex}
                                is={Box}
                                backgroundColor="bg-white"
                                padding="px-3 py-1"
                                margin=""
                                display="block"
                                borderRadius="rounded-full"
                                canvas={false}
                              >
                                <CraftText
                                  text={feature}
                                  tagName="span"
                                  fontSize="text-sm"
                                  fontWeight="font-medium"
                                  color="text-gray-700"
                                  textAlign="text-center"
                                />
                              </Element>
                            ))}
                          </Element>
                        </Element>

                        {/* Room Stats */}
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-6"
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
                            <CraftText
                              text={`📐 ${room.size}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
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
                              text={`👥 ${room.capacity}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>
                      </Element>

                      {/* Price and Booking */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="pt-6"
                        margin=""
                        display="block"
                        borderTop="border-t border-gray-200"
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
                            <CraftText
                              text={`$${room.price}`}
                              tagName="span"
                              fontSize="text-3xl sm:text-4xl"
                              fontWeight="font-bold"
                              color="text-gray-900"
                              textAlign="text-left"
                            />
                            <CraftText
                              text={` ${room.priceUnit}`}
                              tagName="span"
                              fontSize="text-base"
                              fontWeight="font-medium"
                              color="text-gray-600"
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
                        </Element>
                      </Element>
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
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
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
                text="Ready to book your perfect stay?"
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
                  className="hover:bg-amber-50 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

RoomShowcase1.craft = {
  displayName: "Room Showcase 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Room Showcase specific props
    title: "Hotel rooms",
    subtitle: "Luxury Accommodations",
    description: "We are happy to offer our guests a truly fabulous experience of a relaxing and memorable stay.",
    primaryButtonText: "Book your stay",
    secondaryButtonText: "View all rooms",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
