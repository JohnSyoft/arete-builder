import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface RoomFeature {
  icon: string;
  name: string;
}

interface RoomType {
  id: string;
  name: string;
  description: string;
  view: string;
  price: string;
  image: string;
  features: RoomFeature[];
  popular: boolean;
}

interface HospitalityRoomTabs1Props extends SectionProps {
  // Room tabs specific props
  roomTypes?: RoomType[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showFeatures?: boolean;
  showPricing?: boolean;
  showViewType?: boolean;
  activeTab?: number;
}

export function HospitalityRoomTabs1({
  roomTypes = [
    {
      id: "premium-cottage",
      name: "Premium cottage",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      view: "Phenomenal view",
      price: "$50.00",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=752&h=577&fit=crop",
      features: [
        { icon: "🍽️", name: "Breakfast included" },
        { icon: "🧺", name: "Laundry facilities" },
        { icon: "🚗", name: "Pickup and drop" }
      ],
      popular: true
    },
    {
      id: "studios-terrace",
      name: "Studios with terrace",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      view: "Garden view",
      price: "$75.00",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=752&h=577&fit=crop",
      features: [
        { icon: "🧺", name: "Laundry facilities" },
        { icon: "🍽️", name: "Breakfast included" },
        { icon: "🚗", name: "Pickup and drop" }
      ],
      popular: false
    },
    {
      id: "premium-pavilions",
      name: "Premium pavilions",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      view: "Phenomenal view",
      price: "$100.00",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=752&h=577&fit=crop",
      features: [
        { icon: "🍽️", name: "Breakfast included" },
        { icon: "🧺", name: "Laundry facilities" },
        { icon: "🚗", name: "Pickup and drop" }
      ],
      popular: false
    },
    {
      id: "luxury-villa",
      name: "The luxury villa",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      view: "Garden view",
      price: "$150.00",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=752&h=577&fit=crop",
      features: [
        { icon: "🧺", name: "Laundry facilities" },
        { icon: "🍽️", name: "Breakfast included" },
        { icon: "🚗", name: "Pickup and drop" }
      ],
      popular: false
    },
    {
      id: "grand-deluxe",
      name: "Grand deluxe room",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      view: "Mountain view",
      price: "$200.00",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=752&h=577&fit=crop",
      features: [
        { icon: "🍽️", name: "Breakfast included" },
        { icon: "🧺", name: "Laundry facilities" },
        { icon: "🚗", name: "Pickup and drop" }
      ],
      popular: false
    }
  ],
  primaryButtonText = "Book Now",
  secondaryButtonText = "View Details",
  showFeatures = true,
  showPricing = true,
  showViewType = true,
  activeTab = 0,
  ...props
}: HospitalityRoomTabs1Props) {
  // Set section defaults for room tabs
  const roomTabsProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...roomTabsProps}>
      <Element
        id="roomTabsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Box}
          backgroundColor="bg-gray-50"
          padding="0"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          overflow="hidden"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="stretch"
            gap="gap-0"
            margin=""
          >
            {/* Tab Navigation */}
            <Element
              is={Box}
              backgroundColor="bg-white"
              padding="p-8"
              margin=""
              display="block"
              width="w-80"
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
                {roomTypes.map((room, index) => (
                  <Element
                    key={room.id}
                    is={Card}
                    variant="flat"
                    shadow="none"
                    borderRadius="rounded-xl"
                    backgroundColor={index === activeTab ? "bg-amber-50" : "bg-transparent"}
                    borderColor={index === activeTab ? "border-amber-200" : "border-transparent"}
                    padding="p-6"
                    margin=""
                    hoverable={true}
                    clickable={false}
                    overflow="visible"
                    border={true}
                    className={`group hover:bg-amber-50 transition-all duration-300 cursor-pointer ${
                      index === activeTab ? "ring-2 ring-amber-500" : ""
                    }`}
                    canvas
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
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="start"
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
                              text={`${String(index + 1).padStart(2, '0')}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
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
                              text={room.name}
                              tagName="h4"
                              fontSize="text-lg"
                              fontWeight="font-semibold"
                              color="text-gray-900"
                              textAlign="text-left"
                              lineHeight="leading-tight"
                            />
                          </Element>
                        </Element>
                      </Element>

                      <Element
                        is={Box}
                        backgroundColor={index === activeTab ? "bg-amber-600" : "bg-gray-200"}
                        padding="p-3"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-12"
                        height="h-12"
                        className="group-hover:bg-amber-600 transition-colors duration-300"
                        canvas={false}
                      >
                        <CraftText
                          text="→"
                          tagName="span"
                          fontSize="text-lg"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>

            {/* Tab Content */}
            <Element
              is={Box}
              backgroundColor="bg-gray-50"
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
                alignItems="stretch"
                gap="gap-0"
                margin=""
              >
                {/* Room Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-1/2"
                  height="h-96"
                  position="relative"
                  canvas={false}
                >
                  <CraftImage
                    src={roomTypes[activeTab]?.image || roomTypes[0].image}
                    alt={roomTypes[activeTab]?.name || roomTypes[0].name}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    margin=""
                    padding=""
                  />

                  {/* Price and Book Now Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    position="absolute"
                    bottom="bottom-0"
                    right="right-0"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="stretch"
                      gap="gap-0"
                      margin=""
                    >
                      {/* Price */}
                      <Element
                        is={Box}
                        backgroundColor="bg-white"
                        padding="px-10 py-8"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="start"
                          gap="gap-1"
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
                              text="Starting from"
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-500"
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
                              text={roomTypes[activeTab]?.price || roomTypes[0].price}
                              tagName="span"
                              fontSize="text-3xl"
                              fontWeight="font-bold"
                              color="text-gray-900"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>
                      </Element>

                      {/* Book Now Button */}
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-900"
                        padding="px-10 py-8"
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
                              text="Book now"
                              tagName="span"
                              fontSize="text-lg"
                              fontWeight="font-semibold"
                              color="text-white"
                              textAlign="text-left"
                            />
                          </Element>

                          <Element
                            is={Box}
                            backgroundColor="bg-white/20"
                            padding="p-3"
                            margin=""
                            display="block"
                            borderRadius="rounded-full"
                            width="w-12"
                            height="h-12"
                            canvas={false}
                          >
                            <CraftText
                              text="→"
                              tagName="span"
                              fontSize="text-lg"
                              fontWeight="font-bold"
                              color="text-white"
                              textAlign="text-center"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>

                {/* Room Details */}
                <Element
                  is={Box}
                  backgroundColor="bg-gray-50"
                  padding="p-12"
                  margin=""
                  display="block"
                  width="w-1/2"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-6"
                    margin="h-full"
                  >
                    {/* View Type */}
                    {showViewType && (
                      <Element
                        is={Box}
                        backgroundColor="bg-amber-100"
                        padding="px-4 py-2"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-fit"
                        canvas={false}
                      >
                        <CraftText
                          text={roomTypes[activeTab]?.view || roomTypes[0].view}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-amber-700"
                          textAlign="text-center"
                        />
                      </Element>
                    )}

                    {/* Room Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={roomTypes[activeTab]?.name || roomTypes[0].name}
                        tagName="h3"
                        fontSize="text-2xl sm:text-3xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                        lineHeight="leading-tight"
                      />
                    </Element>

                    {/* Room Description */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={roomTypes[activeTab]?.description || roomTypes[0].description}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Room Features */}
                    {showFeatures && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <Element
                          is={Grid}
                          canvas
                          columns={3}
                          autoFit={true}
                          minColumnWidth="120px"
                          gap="gap-4"
                          autoRows="auto"
                        >
                          {(roomTypes[activeTab]?.features || roomTypes[0].features).map((feature, featureIndex) => (
                            <Element
                              key={featureIndex}
                              is={Card}
                              variant="flat"
                              shadow="sm"
                              borderRadius="rounded-lg"
                              backgroundColor="bg-white"
                              borderColor=""
                              padding="p-4"
                              margin=""
                              hoverable={false}
                              clickable={false}
                              overflow="visible"
                              border={false}
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
                                <Element
                                  is={Box}
                                  backgroundColor="bg-amber-100"
                                  padding="p-2"
                                  margin=""
                                  display="block"
                                  borderRadius="rounded-full"
                                  width="w-8"
                                  height="h-8"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={feature.icon}
                                    tagName="span"
                                    fontSize="text-sm"
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
                                    text={feature.name}
                                    tagName="span"
                                    fontSize="text-xs"
                                    fontWeight="font-semibold"
                                    color="text-gray-700"
                                    textAlign="text-center"
                                    className="uppercase"
                                  />
                                </Element>
                              </Element>
                            </Element>
                          ))}
                        </Element>
                      </Element>
                    )}

                    {/* Action Buttons */}
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-4"
                      margin="mt-auto"
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
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityRoomTabs1.craft = {
  displayName: "Hospitality Room Tabs 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Room tabs specific props
    primaryButtonText: "Book Now",
    secondaryButtonText: "View Details",
    showFeatures: true,
    showPricing: true,
    showViewType: true,
    activeTab: 0,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

