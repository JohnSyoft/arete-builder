import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface ResortBookingHeroProps extends SectionProps {
  mainTitle?: string;
  subtitle?: string;
  description?: string;
  heroImage?: string;
  logoImage?: string;
  bookingButtonText?: string;
  checkInLabel?: string;
  checkOutLabel?: string;
  guestsLabel?: string;
  roomsLabel?: string;
  searchButtonText?: string;
  trustBadge1?: string;
  trustBadge2?: string;
  ratingText?: string;
  reviewsText?: string;
}

export function ResortBookingHero({
  mainTitle = "Escape to Paradise",
  subtitle = "Luxury Resort & Spa",
  description = "Experience unparalleled luxury at our world-class resort with pristine beaches, award-winning spa, and exceptional dining.",
  heroImage = "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
  logoImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
  bookingButtonText = "Book Your Stay",
  checkInLabel = "Check In",
  checkOutLabel = "Check Out",
  guestsLabel = "Guests",
  roomsLabel = "Rooms",
  searchButtonText = "Search Availability",
  trustBadge1 = "5-Star Luxury",
  trustBadge2 = "Award Winning",
  ratingText = "4.9/5",
  reviewsText = "2,847 reviews",
  ...props
}: ResortBookingHeroProps) {
  const heroProps = {
    backgroundColor: "transparent",
    padding: "0",
    minHeight: "100vh",
    hasContentWrapper: false,
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="resortBookingHero"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        height="100vh"
        canvas
      >
        {/* Background Image */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          width="100%"
          height="100%"
          canvas={false}
        >
          <div className="absolute inset-0">
            <Image
              src={heroImage}
              alt="Luxury Resort"
              width="w-full"
              height="h-full"
              objectFit="object-cover"
              margin=""
              padding=""
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </Element>

        {/* Header Navigation */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          width="100%"
          canvas
        >
          <div className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto px-6 py-6">
              <Element
                is={Flex}
                flexDirection="row"
                justifyContent="between"
                alignItems="center"
                gap="0"
                canvas
              >
                {/* Logo */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <Image
                    src={logoImage}
                    alt="Resort Logo"
                    width="w-12"
                    height="h-12"
                    objectFit="object-cover"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Navigation Links */}
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="end"
                  alignItems="center"
                  gap="32px"
                  canvas
                >
                  <div className="hidden md:flex items-center space-x-8">
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text="Rooms"
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-medium"
                        color="text-white"
                        textAlign="text-left"
                      />
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text="Dining"
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-medium"
                        color="text-white"
                        textAlign="text-left"
                      />
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text="Spa"
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-medium"
                        color="text-white"
                        textAlign="text-left"
                      />
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Button
                        text={bookingButtonText}
                        backgroundColor="#D4AF37"
                        textColor="#FFFFFF"
                        borderRadius="8px"
                        padding="px-6 py-3"
                        width="w-auto"
                      />
                    </Element>
                  </div>
                </Element>
              </Element>
            </div>
          </div>
        </Element>

        {/* Main Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          height="100%"
          canvas
        >
          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                canvas
              >
                {/* Trust Badges */}
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="16px"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="rgba(255, 255, 255, 0.15)"
                    padding="px-3 py-1"
                    margin="0 0 24px 0"
                    borderRadius="20px"
                    display="inline-block"
                    canvas={false}
                  >
                    <Text
                      text={trustBadge1}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-white"
                      textAlign="text-center"
                    />
                  </Element>
                  <Element
                    is={Box}
                    backgroundColor="rgba(255, 255, 255, 0.15)"
                    padding="px-3 py-1"
                    margin="0 0 24px 0"
                    borderRadius="20px"
                    display="inline-block"
                    canvas={false}
                  >
                    <Text
                      text={trustBadge2}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-white"
                      textAlign="text-center"
                    />
                  </Element>
                </Element>

                {/* Main Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={mainTitle}
                    tagName="h1"
                    fontSize="text-5xl lg:text-7xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Subtitle */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={subtitle}
                    tagName="h2"
                    fontSize="text-xl lg:text-2xl"
                    fontWeight="font-light"
                    color="text-yellow-300"
                    textAlign="text-left"
                  />
                </Element>

                {/* Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 32px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={description}
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-normal"
                    color="text-gray-200"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>

                {/* Rating */}
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="16px"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    canvas={false}
                  >
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <Text
                      text={ratingText}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign="text-left"
                    />
                    <Text
                      text={reviewsText}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-normal"
                      color="text-gray-300"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>

              {/* Right Content - Booking Widget */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.95)"
                padding="32px"
                margin="0"
                borderRadius="16px"
                display="block"
                width="100%"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text="Book Your Perfect Stay"
                    tagName="h3"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                  />
                </Element>

                {/* Date Inputs */}
                <Element
                  is={Flex}
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="stretch"
                  gap="16px"
                  canvas
                >
                  <div className="grid grid-cols-2 gap-4">
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {checkInLabel}
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {checkOutLabel}
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                    </Element>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {guestsLabel}
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                      </select>
                    </Element>
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {roomsLabel}
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                        <option value="1">1 Room</option>
                        <option value="2">2 Rooms</option>
                        <option value="3">3 Rooms</option>
                      </select>
                    </Element>
                  </div>

                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="16px 0 0 0"
                    display="block"
                    canvas={false}
                  >
                    <Button
                      text={searchButtonText}
                      backgroundColor="#D4AF37"
                      textColor="#FFFFFF"
                      borderRadius="8px"
                      padding="px-8 py-4"
                      width="w-full"
                    />
                  </Element>
                </Element>
              </Element>
            </div>
          </div>
        </Element>
      </Element>
    </Section>
  );
}

ResortBookingHero.craft = {
  displayName: "Resort Booking Hero",
  props: {
    mainTitle: "Escape to Paradise",
    subtitle: "Luxury Resort & Spa",
    description:
      "Experience unparalleled luxury at our world-class resort with pristine beaches, award-winning spa, and exceptional dining.",
    heroImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2160&q=80",
    logoImage:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    bookingButtonText: "Book Your Stay",
    checkInLabel: "Check In",
    checkOutLabel: "Check Out",
    guestsLabel: "Guests",
    roomsLabel: "Rooms",
    searchButtonText: "Search Availability",
    trustBadge1: "5-Star Luxury",
    trustBadge2: "Award Winning",
    ratingText: "4.9/5",
    reviewsText: "2,847 reviews",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
