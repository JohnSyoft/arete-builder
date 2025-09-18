import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface NavigationLink {
  text: string;
  href: string;
  external?: boolean;
  dropdown?: NavigationLink[];
}

interface HospitalityHeader1Props extends SectionProps {
  // Header specific props
  logo?: string;
  logoAlt?: string;
  phoneNumber?: string;
  bookingText?: string;
  bookingLink?: string;
  navigationLinks?: NavigationLink[];
  // Settings
  showPhone?: boolean;
  showBooking?: boolean;
  showDropdown?: boolean;
  backgroundColor?: string;
  sticky?: boolean;
}

export function HospitalityHeader1({
  logo = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=60&fit=crop",
  logoAlt = "Luxury Resort Logo",
  phoneNumber = "1 800 222 000",
  bookingText = "Book your stay",
  bookingLink = "/booking",
  navigationLinks = [
    { text: "Home", href: "/" },
    { 
      text: "About us", 
      href: "/about",
      dropdown: [
        { text: "Our Story", href: "/about/story" },
        { text: "Team", href: "/about/team" },
        { text: "Awards", href: "/about/awards" }
      ]
    },
    { 
      text: "Rooms", 
      href: "/rooms",
      dropdown: [
        { text: "Superior room", href: "/rooms/superior" },
        { text: "Deluxe room", href: "/rooms/deluxe" },
        { text: "Signature room", href: "/rooms/signature" },
        { text: "Luxury suite", href: "/rooms/suite" }
      ]
    },
    { text: "Amenities", href: "/amenities" },
    { text: "Bistro", href: "/bistro" },
    { text: "Contact", href: "/contact" }
  ],
  showPhone = true,
  showBooking = true,
  showDropdown = true,
  backgroundColor = "#ffffff",
  sticky = true,
  ...props
}: HospitalityHeader1Props) {
  // Set section defaults for header
  const headerProps = {
    backgroundColor,
    padding: "py-4 px-4 sm:py-6 sm:px-6",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...headerProps}>
      <Element
        id="headerContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Box}
          backgroundColor="bg-white"
          padding="py-4 px-6"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          shadow="lg"
          className={`${sticky ? "sticky top-0 z-50" : ""}`}
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin=""
          >
            {/* Phone Number (Desktop) */}
            {showPhone && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="hidden lg:block"
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
                  <CraftText
                    text="📞"
                    tagName="span"
                    fontSize="text-lg"
                    textAlign="text-center"
                  />
                  <CraftText
                    text={phoneNumber}
                    tagName="a"
                    href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                    fontSize="text-base"
                    fontWeight="font-semibold"
                    color="text-gray-700"
                    textAlign="text-left"
                    className="hover:text-amber-600 transition-colors duration-200"
                  />
                </Element>
              </Element>
            )}

            {/* Logo */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftImage
                src={logo}
                alt={logoAlt}
                width="w-32 h-12"
                height="h-12"
                objectFit="object-contain"
                margin=""
                padding=""
              />
            </Element>

            {/* Navigation */}
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
                gap="gap-8"
                margin=""
                wrap="wrap"
              >
                {navigationLinks.map((link, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    position="relative"
                    canvas={false}
                  >
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
                        text={link.text}
                        tagName="a"
                        href={link.href}
                        fontSize="text-base"
                        fontWeight="font-semibold"
                        color="text-gray-700"
                        textAlign="text-center"
                        className="hover:text-amber-600 transition-colors duration-200"
                      />
                      
                      {/* Dropdown Arrow */}
                      {showDropdown && link.dropdown && (
                        <CraftText
                          text="▼"
                          tagName="span"
                          fontSize="text-xs"
                          color="text-gray-500"
                          textAlign="text-center"
                          className="ml-1"
                        />
                      )}
                    </Element>

                    {/* Dropdown Menu */}
                    {showDropdown && link.dropdown && (
                      <Element
                        is={Box}
                        backgroundColor="bg-white"
                        padding="py-4 px-6"
                        margin=""
                        display="block"
                        position="absolute"
                        top="top-full"
                        left="left-0"
                        borderRadius="rounded-xl"
                        shadow="2xl"
                        className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-48"
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
                          {link.dropdown.map((dropdownLink, dropdownIndex) => (
                            <Element
                              key={dropdownIndex}
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin=""
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={dropdownLink.text}
                                tagName="a"
                                href={dropdownLink.href}
                                fontSize="text-sm"
                                fontWeight="font-medium"
                                color="text-gray-600"
                                textAlign="text-left"
                                className="hover:text-amber-600 transition-colors duration-200"
                              />
                            </Element>
                          ))}
                        </Element>
                      </Element>
                    )}
                  </Element>
                ))}
              </Element>
            </Element>

            {/* Booking Button */}
            {showBooking && (
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
                  justifyContent="end"
                  alignItems="center"
                  gap="gap-2"
                  margin=""
                >
                  <CraftText
                    text="📅"
                    tagName="span"
                    fontSize="text-lg"
                    textAlign="text-center"
                  />
                  <CraftButton
                    text={bookingText}
                    size="md"
                    backgroundColor="#d97706"
                    textColor="#ffffff"
                    borderRadius="rounded-full"
                    padding="px-6 py-3"
                    width="w-auto"
                    className="hover:bg-amber-600 transition-colors duration-300"
                  />
                </Element>
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityHeader1.craft = {
  displayName: "Hospitality Header 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-4 px-4 sm:py-6 sm:px-6",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Header specific props
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=200&h=60&fit=crop",
    logoAlt: "Luxury Resort Logo",
    phoneNumber: "1 800 222 000",
    bookingText: "Book your stay",
    bookingLink: "/booking",
    showPhone: true,
    showBooking: true,
    showDropdown: true,
    backgroundColor: "#ffffff",
    sticky: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
