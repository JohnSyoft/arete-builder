import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Tab, TabContentContainer } from "@/components/blocks/Basic/Tab";
import { TabPanel } from "@/components/blocks/Basic/TabPanel";

interface RoomFeature {
  id: string;
  icon: string;
  title: string;
}

interface RoomTab {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  price: string;
  priceLabel: string;
  features: RoomFeature[];
  bookingLink: string;
}

interface HospitalityRoomTabs2Props extends SectionProps {
  // Room tabs specific props
  tabs?: RoomTab[];
  activeTab?: number;
  // Settings
  showImages?: boolean;
  showFeatures?: boolean;
  showPricing?: boolean;
  showBooking?: boolean;
  layout?: "left" | "right";
  backgroundColor?: string;
}

export function HospitalityRoomTabs2({
  tabs = [
    {
      id: "tab-1",
      number: "01",
      title: "Premium cottage",
      subtitle: "Phenomenal view",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=752&h=577&fit=crop",
      price: "$50.00",
      priceLabel: "Starting from",
      features: [
        { id: "feature-1", icon: "🍽️", title: "Breakfast included" },
        { id: "feature-2", icon: "🧺", title: "Laundry facilities" },
        { id: "feature-3", icon: "🚗", title: "Pickup and drop" }
      ],
      bookingLink: "/booking"
    },
    {
      id: "tab-2",
      number: "02",
      title: "Studios with terrace",
      subtitle: "Garden view",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=752&h=577&fit=crop",
      price: "$75.00",
      priceLabel: "Starting from",
      features: [
        { id: "feature-1", icon: "🧺", title: "Laundry facilities" },
        { id: "feature-2", icon: "🍽️", title: "Breakfast included" },
        { id: "feature-3", icon: "🚗", title: "Pickup and drop" }
      ],
      bookingLink: "/booking"
    },
    {
      id: "tab-3",
      number: "03",
      title: "Premium pavilions",
      subtitle: "Ocean view",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=752&h=577&fit=crop",
      price: "$100.00",
      priceLabel: "Starting from",
      features: [
        { id: "feature-1", icon: "🏊‍♂️", title: "Private pool" },
        { id: "feature-2", icon: "🍽️", title: "Breakfast included" },
        { id: "feature-3", icon: "🚗", title: "Pickup and drop" }
      ],
      bookingLink: "/booking"
    },
    {
      id: "tab-4",
      number: "04",
      title: "The luxury villa",
      subtitle: "Mountain view",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=752&h=577&fit=crop",
      price: "$150.00",
      priceLabel: "Starting from",
      features: [
        { id: "feature-1", icon: "🏊‍♂️", title: "Private pool" },
        { id: "feature-2", icon: "🧺", title: "Laundry facilities" },
        { id: "feature-3", icon: "🍽️", title: "Breakfast included" }
      ],
      bookingLink: "/booking"
    },
    {
      id: "tab-5",
      number: "05",
      title: "Grand deluxe room",
      subtitle: "City view",
      description: "Discover a private home in the orchard three bedrooms and baths with a private plunge pool and service and a three sided view from the king size bed.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=752&h=577&fit=crop",
      price: "$200.00",
      priceLabel: "Starting from",
      features: [
        { id: "feature-1", icon: "🍽️", title: "Breakfast included" },
        { id: "feature-2", icon: "🚗", title: "Pickup and drop" },
        { id: "feature-3", icon: "🧺", title: "Laundry facilities" }
      ],
      bookingLink: "/booking"
    }
  ],
  activeTab = 0,
  showImages = true,
  showFeatures = true,
  showPricing = true,
  showBooking = true,
  layout = "left",
  backgroundColor = "#f8fafc",
  ...props
}: HospitalityRoomTabs2Props) {
  // Set section defaults for room tabs
  const roomTabsProps = {
    backgroundColor,
    padding: "py-0",
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
              width="w-1/3 lg:w-1/4"
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
                {tabs.map((tab, index) => (
                  <Element
                    key={tab.id}
                    is={Card}
                    variant="flat"
                    shadow="sm"
                    borderRadius="rounded-xl"
                    backgroundColor={index === activeTab ? "bg-amber-50" : "bg-white"}
                    borderColor={index === activeTab ? "border-amber-200" : "border-gray-200"}
                    padding="p-6"
                    margin=""
                    hoverable={true}
                    clickable={true}
                    overflow="visible"
                    border={true}
                    className={`group hover:shadow-lg transition-all duration-300 ${index === activeTab ? 'ring-2 ring-amber-200' : ''}`}
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
                      {/* Tab Content */}
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
                          {/* Tab Number and Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={`${tab.number} ${tab.title}`}
                              tagName="span"
                              fontSize="text-lg"
                              fontWeight="font-semibold"
                              color={index === activeTab ? "text-amber-800" : "text-gray-900"}
                              textAlign="text-left"
                            />
                          </Element>

                          {/* Tab Subtitle */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={tab.subtitle}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color={index === activeTab ? "text-amber-600" : "text-gray-600"}
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>
                      </Element>

                      {/* Arrow Icon */}
                      <Element
                        is={Box}
                        backgroundColor={index === activeTab ? "bg-amber-600" : "bg-gray-300"}
                        padding="p-3"
                        margin=""
                        display="block"
                        width="w-12"
                        height="h-12"
                        borderRadius="rounded-full"
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
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-2/3 lg:w-3/4"
              canvas={false}
            >
              <Element
                is={Tab}
                canvas
                activeTab={activeTab}
                className="h-full"
              >
                {tabs.map((tab, index) => (
                  <Element
                    key={tab.id}
                    is={TabPanel}
                    canvas
                    tabId={index}
                    className="h-full"
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      height="h-full"
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
                        {showImages && (
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-1/2"
                            height="h-96 lg:h-full"
                            position="relative"
                            canvas={false}
                          >
                            <CraftImage
                              src={tab.image}
                              alt={tab.title}
                              width="w-full"
                              height="h-full"
                              objectFit="object-cover"
                              margin=""
                              padding=""
                            />

                            {/* Pricing Overlay */}
                            {showPricing && (
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
                                  justifyContent="end"
                                  alignItems="end"
                                  gap="gap-0"
                                  margin=""
                                >
                                  {/* Price Display */}
                                  <Element
                                    is={Box}
                                    backgroundColor="bg-white"
                                    padding="px-8 py-6"
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
                                      <CraftText
                                        text={tab.priceLabel}
                                        tagName="span"
                                        fontSize="text-sm"
                                        fontWeight="font-medium"
                                        color="text-gray-600"
                                        textAlign="text-left"
                                      />
                                      <CraftText
                                        text={tab.price}
                                        tagName="span"
                                        fontSize="text-2xl"
                                        fontWeight="font-bold"
                                        color="text-gray-900"
                                        textAlign="text-left"
                                      />
                                    </Element>
                                  </Element>

                                  {/* Booking Button */}
                                  {showBooking && (
                                    <Element
                                      is={Box}
                                      backgroundColor="bg-gray-900"
                                      padding="px-8 py-6"
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
                                          backgroundColor="transparent"
                                          padding="0"
                                          margin=""
                                          display="block"
                                          canvas={false}
                                        >
                                          <CraftText
                                            text="Book now"
                                            tagName="span"
                                            fontSize="text-sm"
                                            fontWeight="font-semibold"
                                            color="text-white"
                                            textAlign="text-center"
                                            className="uppercase leading-tight"
                                          />
                                        </Element>

                                        <Element
                                          is={Box}
                                          backgroundColor="bg-white/20"
                                          padding="p-3"
                                          margin=""
                                          display="block"
                                          width="w-12"
                                          height="h-12"
                                          borderRadius="rounded-full"
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
                                  )}
                                </Element>
                              </Element>
                            )}
                          </Element>
                        )}

                        {/* Room Details */}
                        <Element
                          is={Box}
                          backgroundColor="bg-gray-50"
                          padding="p-8 lg:p-12"
                          margin=""
                          display="block"
                          width={showImages ? "w-1/2" : "w-full"}
                          canvas={false}
                        >
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="start"
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
                                is={Flex}
                                canvas
                                flexDirection="column"
                                justifyContent="start"
                                alignItems="start"
                                gap="gap-4"
                                margin=""
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
                                    text={tab.subtitle}
                                    tagName="span"
                                    fontSize="text-base"
                                    fontWeight="font-medium"
                                    color="text-amber-600"
                                    textAlign="text-left"
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
                                    text={tab.title}
                                    tagName="h3"
                                    fontSize="text-2xl sm:text-3xl"
                                    fontWeight="font-bold"
                                    color="text-gray-900"
                                    textAlign="text-left"
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
                                    text={tab.description}
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
                                  autoFit={false}
                                  minColumnWidth="120px"
                                  gap="gap-0"
                                  autoRows="auto"
                                >
                                  {tab.features.map((feature, featureIndex) => (
                                    <Element
                                      key={feature.id}
                                      is={Card}
                                      variant="flat"
                                      shadow="none"
                                      borderRadius="rounded-none"
                                      backgroundColor="bg-transparent"
                                      borderColor="border-amber-200"
                                      padding="p-4"
                                      margin=""
                                      hoverable={false}
                                      clickable={false}
                                      overflow="visible"
                                      border={featureIndex < tab.features.length - 1 ? true : false}
                                      className="group hover:bg-white/50 transition-all duration-300"
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
                                        {/* Feature Icon */}
                                        <Element
                                          is={Box}
                                          backgroundColor="bg-amber-100"
                                          padding="p-2"
                                          margin=""
                                          display="block"
                                          width="w-8"
                                          height="h-8"
                                          borderRadius="rounded-full"
                                          className="group-hover:bg-amber-200 transition-colors duration-300"
                                          canvas={false}
                                        >
                                          <CraftText
                                            text={feature.icon}
                                            tagName="span"
                                            fontSize="text-sm"
                                            textAlign="text-center"
                                          />
                                        </Element>

                                        {/* Feature Title */}
                                        <Element
                                          is={Box}
                                          backgroundColor="transparent"
                                          padding="0"
                                          margin=""
                                          display="block"
                                          canvas={false}
                                        >
                                          <CraftText
                                            text={feature.title}
                                            tagName="span"
                                            fontSize="text-xs"
                                            fontWeight="font-semibold"
                                            color="text-gray-700"
                                            textAlign="text-center"
                                            className="uppercase tracking-wide"
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
                      </Element>
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityRoomTabs2.craft = {
  displayName: "Hospitality Room Tabs 2",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Room tabs specific props
    activeTab: 0,
    showImages: true,
    showFeatures: true,
    showPricing: true,
    showBooking: true,
    layout: "left",
    backgroundColor: "#f8fafc",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
