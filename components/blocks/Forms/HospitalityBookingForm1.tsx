import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface RoomType {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  maxGuests: number;
  amenities: string[];
  available: boolean;
}

interface HospitalityBookingForm1Props extends SectionProps {
  // Form specific props
  title?: string;
  subtitle?: string;
  description?: string;
  roomTypes?: RoomType[];
  // Form settings
  showRoomSelection?: boolean;
  showSpecialRequests?: boolean;
  showPromoCode?: boolean;
  // Contact info
  phoneNumber?: string;
  email?: string;
  // CTA
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export function HospitalityBookingForm1({
  title = "Book Your Stay",
  subtitle = "Reservation",
  description = "Secure your perfect getaway with our easy online booking system. Choose your dates, room type, and special preferences.",
  roomTypes = [
    {
      id: "deluxe-room",
      name: "Deluxe Room",
      description: "Spacious room with city view and modern amenities",
      price: 299,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      maxGuests: 2,
      amenities: ["WiFi", "TV", "Mini Bar", "City View"],
      available: true
    },
    {
      id: "executive-suite",
      name: "Executive Suite",
      description: "Luxurious suite with separate living area and premium amenities",
      price: 499,
      image: "https://images.unsplash.com/photo-1611892440501-80c6e516f8d8?w=400&h=300&fit=crop",
      maxGuests: 4,
      amenities: ["WiFi", "TV", "Mini Bar", "Ocean View", "Balcony", "Room Service"],
      available: true
    },
    {
      id: "presidential-suite",
      name: "Presidential Suite",
      description: "Ultimate luxury with panoramic views and butler service",
      price: 899,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      maxGuests: 6,
      amenities: ["WiFi", "TV", "Mini Bar", "Ocean View", "Balcony", "Room Service", "Butler Service", "Jacuzzi"],
      available: true
    }
  ],
  showRoomSelection = true,
  showSpecialRequests = true,
  showPromoCode = true,
  phoneNumber = "+1 (555) 123-4567",
  email = "reservations@luxuryhotel.com",
  primaryButtonText = "Book Now",
  secondaryButtonText = "Check Availability",
  ...props
}: HospitalityBookingForm1Props) {
  // Set section defaults for booking form
  const bookingProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...bookingProps}>
      <Element
        id="bookingContent"
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

        {/* Booking Form */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Card}
            variant="flat"
            shadow="2xl"
            borderRadius="rounded-3xl"
            backgroundColor="bg-white"
            borderColor=""
            padding="p-8 md:p-12"
            margin=""
            hoverable={false}
            clickable={false}
            overflow="visible"
            border={false}
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
              {/* Left Column - Form Fields */}
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
                  justifyContent="start"
                  alignItems="stretch"
                  gap="gap-6"
                  margin=""
                >
                  {/* Check-in/Check-out Dates */}
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
                      justifyContent="space-between"
                      alignItems="stretch"
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
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-2"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text="Check-in Date"
                            tagName="label"
                            fontSize="text-sm"
                            fontWeight="font-semibold"
                            color="text-gray-700"
                            textAlign="text-left"
                          />
                        </Element>
                        <Element
                          is={Box}
                          backgroundColor="bg-gray-50"
                          padding="p-4"
                          margin=""
                          display="block"
                          borderRadius="rounded-lg"
                          borderColor="border-gray-200"
                          borderWidth="border"
                          canvas={false}
                        >
                          <CraftText
                            text="Select Date"
                            tagName="span"
                            fontSize="text-base"
                            fontWeight="font-normal"
                            color="text-gray-500"
                            textAlign="text-left"
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
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mb-2"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text="Check-out Date"
                            tagName="label"
                            fontSize="text-sm"
                            fontWeight="font-semibold"
                            color="text-gray-700"
                            textAlign="text-left"
                          />
                        </Element>
                        <Element
                          is={Box}
                          backgroundColor="bg-gray-50"
                          padding="p-4"
                          margin=""
                          display="block"
                          borderRadius="rounded-lg"
                          borderColor="border-gray-200"
                          borderWidth="border"
                          canvas={false}
                        >
                          <CraftText
                            text="Select Date"
                            tagName="span"
                            fontSize="text-base"
                            fontWeight="font-normal"
                            color="text-gray-500"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>

                  {/* Guests */}
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
                        text="Number of Guests"
                        tagName="label"
                        fontSize="text-sm"
                        fontWeight="font-semibold"
                        color="text-gray-700"
                        textAlign="text-left"
                      />
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="bg-gray-50"
                      padding="p-4"
                      margin=""
                      display="block"
                      borderRadius="rounded-lg"
                      borderColor="border-gray-200"
                      borderWidth="border"
                      canvas={false}
                    >
                      <CraftText
                        text="2 Adults"
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>

                  {/* Promo Code */}
                  {showPromoCode && (
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
                          text="Promo Code (Optional)"
                          tagName="label"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        borderColor="border-gray-200"
                        borderWidth="border"
                        canvas={false}
                      >
                        <CraftText
                          text="Enter promo code"
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    </Element>
                  )}

                  {/* Special Requests */}
                  {showSpecialRequests && (
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
                          text="Special Requests"
                          tagName="label"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                      <Element
                        is={Box}
                        backgroundColor="bg-gray-50"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-lg"
                        borderColor="border-gray-200"
                        borderWidth="border"
                        height="h-24"
                        canvas={false}
                      >
                        <CraftText
                          text="Any special requests or preferences?"
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    </Element>
                  )}
                </Element>
              </Element>

              {/* Right Column - Room Selection */}
              {showRoomSelection && (
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
                    justifyContent="start"
                    alignItems="stretch"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="mb-4"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Select Room Type"
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-left"
                      />
                    </Element>

                    {roomTypes.map((room, index) => (
                      <Element
                        key={room.id}
                        is={Card}
                        variant="flat"
                        shadow="sm"
                        borderRadius="rounded-xl"
                        backgroundColor={room.available ? "bg-white" : "bg-gray-100"}
                        borderColor={room.available ? "border-gray-200" : "border-gray-300"}
                        padding="p-4"
                        margin=""
                        hoverable={room.available}
                        clickable={room.available}
                        overflow="visible"
                        border={true}
                        className={`transition-all duration-200 ${
                          room.available 
                            ? "hover:shadow-md hover:border-amber-300 cursor-pointer" 
                            : "opacity-60 cursor-not-allowed"
                        }`}
                        canvas
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
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-20"
                            height="h-20"
                            canvas={false}
                          >
                            <CraftImage
                              src={room.image}
                              alt={room.name}
                              width="w-full"
                              height="h-full"
                              objectFit="object-cover"
                              borderRadius="rounded-lg"
                              margin=""
                              padding=""
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
                                  text={room.name}
                                  tagName="h4"
                                  fontSize="text-lg"
                                  fontWeight="font-semibold"
                                  color={room.available ? "text-gray-900" : "text-gray-500"}
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
                                  text={room.description}
                                  tagName="p"
                                  fontSize="text-sm"
                                  fontWeight="font-normal"
                                  color={room.available ? "text-gray-600" : "text-gray-400"}
                                  textAlign="text-left"
                                />
                              </Element>

                              <Element
                                is={Flex}
                                canvas
                                flexDirection="row"
                                justifyContent="space-between"
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
                                    text={`$${room.price}/night`}
                                    tagName="span"
                                    fontSize="text-lg"
                                    fontWeight="font-bold"
                                    color={room.available ? "text-amber-600" : "text-gray-400"}
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
                                    text={`Max ${room.maxGuests} guests`}
                                    tagName="span"
                                    fontSize="text-xs"
                                    fontWeight="font-medium"
                                    color={room.available ? "text-gray-500" : "text-gray-400"}
                                    textAlign="text-right"
                                  />
                                </Element>
                              </Element>
                            </Element>
                          </Element>
                        </Element>
                      </Element>
                    ))}
                  </Element>
                </Element>
              )}
            </Element>

            {/* Action Buttons */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mt-8"
              display="block"
              canvas
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
                    padding="px-12 py-4"
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
                    padding="px-12 py-4"
                    width="w-auto"
                    className="hover:bg-amber-100 transition-colors duration-300"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Contact Information */}
        <Element
          is={Box}
          backgroundColor="bg-amber-50"
          padding="py-12 px-8"
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
                text="Need Help with Your Booking?"
                tagName="h3"
                fontSize="text-2xl"
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
                      text={phoneNumber}
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
                      text={email}
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
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityBookingForm1.craft = {
  displayName: "Hospitality Booking Form 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Form specific props
    title: "Book Your Stay",
    subtitle: "Reservation",
    description: "Secure your perfect getaway with our easy online booking system. Choose your dates, room type, and special preferences.",
    primaryButtonText: "Book Now",
    secondaryButtonText: "Check Availability",
    showRoomSelection: true,
    showSpecialRequests: true,
    showPromoCode: true,
    phoneNumber: "+1 (555) 123-4567",
    email: "reservations@luxuryhotel.com",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
