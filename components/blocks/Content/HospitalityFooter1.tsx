import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface FooterLink {
  id: string;
  text: string;
  href: string;
}

interface FooterSection {
  id: string;
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  id: string;
  name: string;
  icon: string;
  href: string;
}

interface HospitalityFooter1Props extends SectionProps {
  // Footer specific props
  logo?: string;
  logoText?: string;
  description?: string;
  sections?: FooterSection[];
  socialLinks?: SocialLink[];
  contactInfo?: {
    address: string;
    phone: string;
    email: string;
  };
  copyright?: string;
  // Settings
  showNewsletter?: boolean;
  showSocial?: boolean;
  showContact?: boolean;
}

export function HospitalityFooter1({
  logo = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=60&fit=crop",
  logoText = "Luxury Hotel",
  description = "Experience unparalleled luxury and hospitality at our world-class destination. Your perfect getaway awaits.",
  sections = [
    {
      id: "accommodations",
      title: "Accommodations",
      links: [
        { id: "rooms", text: "Rooms & Suites", href: "/rooms" },
        { id: "suites", text: "Luxury Suites", href: "/suites" },
        { id: "villas", text: "Private Villas", href: "/villas" },
        { id: "amenities", text: "Hotel Amenities", href: "/amenities" },
        { id: "gallery", text: "Photo Gallery", href: "/gallery" }
      ]
    },
    {
      id: "dining",
      title: "Dining",
      links: [
        { id: "restaurants", text: "Restaurants", href: "/dining" },
        { id: "bars", text: "Bars & Lounges", href: "/bars" },
        { id: "room-service", text: "Room Service", href: "/room-service" },
        { id: "private-dining", text: "Private Dining", href: "/private-dining" },
        { id: "chef", text: "Meet the Chef", href: "/chef" }
      ]
    },
    {
      id: "experiences",
      title: "Experiences",
      links: [
        { id: "spa", text: "Spa & Wellness", href: "/spa" },
        { id: "fitness", text: "Fitness Center", href: "/fitness" },
        { id: "pool", text: "Pool & Beach", href: "/pool" },
        { id: "activities", text: "Activities", href: "/activities" },
        { id: "concierge", text: "Concierge", href: "/concierge" }
      ]
    },
    {
      id: "events",
      title: "Events",
      links: [
        { id: "weddings", text: "Weddings", href: "/weddings" },
        { id: "meetings", text: "Meetings", href: "/meetings" },
        { id: "conferences", text: "Conferences", href: "/conferences" },
        { id: "celebrations", text: "Celebrations", href: "/celebrations" },
        { id: "venues", text: "Event Venues", href: "/venues" }
      ]
    }
  ],
  socialLinks = [
    { id: "facebook", name: "Facebook", icon: "📘", href: "https://facebook.com" },
    { id: "instagram", name: "Instagram", icon: "📷", href: "https://instagram.com" },
    { id: "twitter", name: "Twitter", icon: "🐦", href: "https://twitter.com" },
    { id: "linkedin", name: "LinkedIn", icon: "💼", href: "https://linkedin.com" },
    { id: "youtube", name: "YouTube", icon: "📺", href: "https://youtube.com" }
  ],
  contactInfo = {
    address: "123 Luxury Boulevard, Suite 100, Miami, FL 33101",
    phone: "+1 (555) 123-4567",
    email: "info@luxuryhotel.com"
  },
  copyright = "© 2024 Luxury Hotel. All rights reserved.",
  showNewsletter = true,
  showSocial = true,
  showContact = true,
  ...props
}: HospitalityFooter1Props) {
  // Set section defaults for footer
  const footerProps = {
    backgroundColor: "#1f2937", // bg-gray-800
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...footerProps}>
      <Element
        id="footerContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Newsletter Section */}
        {showNewsletter && (
          <Element
            is={Box}
            backgroundColor="bg-amber-600"
            padding="py-12 px-8"
            margin="mb-16"
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
                  text="Stay Updated"
                  tagName="h3"
                  fontSize="text-2xl sm:text-3xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin="mb-2"
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
                  text="Subscribe to our newsletter for exclusive offers and updates"
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-amber-100"
                  textAlign="text-center"
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
                  backgroundColor="bg-white"
                  padding="p-4"
                  margin=""
                  display="block"
                  borderRadius="rounded-lg"
                  width="w-80"
                  canvas={false}
                >
                  <CraftText
                    text="Enter your email address"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
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
                  <CraftButton
                    text="Subscribe"
                    size="lg"
                    backgroundColor="#1f2937"
                    textColor="#ffffff"
                    borderRadius="rounded-lg"
                    padding="px-8 py-4"
                    width="w-auto"
                    className="hover:bg-gray-700 transition-colors duration-300"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        )}

        {/* Main Footer Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-12"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={5}
            autoFit={false}
            minColumnWidth="200px"
            gap="gap-8"
            autoRows="auto"
            alignItems="start"
          >
            {/* Logo and Description */}
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
                alignItems="start"
                gap="gap-6"
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
                    flexDirection="row"
                    justifyContent="start"
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
                      width="w-12"
                      height="h-12"
                      canvas={false}
                    >
                      <CraftImage
                        src={logo}
                        alt={logoText}
                        width="w-full"
                        height="h-full"
                        objectFit="object-contain"
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
                      <CraftText
                        text={logoText}
                        tagName="h4"
                        fontSize="text-xl"
                        fontWeight="font-bold"
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
                  <CraftText
                    text={description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-300"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>

                {/* Social Links */}
                {showSocial && (
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
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-3"
                      margin=""
                    >
                      {socialLinks.map((social, index) => (
                        <Element
                          key={social.id}
                          is={Box}
                          backgroundColor="bg-gray-700"
                          padding="p-3"
                          margin=""
                          display="block"
                          borderRadius="rounded-lg"
                          width="w-12"
                          height="h-12"
                          className="hover:bg-amber-600 transition-colors duration-300 cursor-pointer"
                          canvas={false}
                        >
                          <CraftText
                            text={social.icon}
                            tagName="span"
                            fontSize="text-lg"
                            textAlign="text-center"
                          />
                        </Element>
                      ))}
                    </Element>
                  </Element>
                )}
              </Element>
            </Element>

            {/* Footer Sections */}
            {sections.map((section, index) => (
              <Element
                key={section.id}
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
                      text={section.title}
                      tagName="h5"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign="text-left"
                    />
                  </Element>

                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-3"
                    margin=""
                  >
                    {section.links.map((link, linkIndex) => (
                      <Element
                        key={link.id}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        className="hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                        canvas={false}
                      >
                        <CraftText
                          text={link.text}
                          tagName="a"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-300"
                          textAlign="text-left"
                          className="hover:text-amber-400 transition-colors duration-200"
                        />
                      </Element>
                    ))}
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Contact Information */}
        {showContact && (
          <Element
            is={Box}
            backgroundColor="bg-gray-700"
            padding="py-8 px-6"
            margin="mb-8"
            display="block"
            borderRadius="rounded-xl"
            canvas
          >
            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={true}
              minColumnWidth="200px"
              gap="gap-6"
              autoRows="auto"
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
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-600"
                    padding="p-2"
                    margin=""
                    display="block"
                    borderRadius="rounded-lg"
                    canvas={false}
                  >
                    <CraftText
                      text="📍"
                      tagName="span"
                      fontSize="text-lg"
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
                      text={contactInfo.address}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-gray-300"
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
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-600"
                    padding="p-2"
                    margin=""
                    display="block"
                    borderRadius="rounded-lg"
                    canvas={false}
                  >
                    <CraftText
                      text="📞"
                      tagName="span"
                      fontSize="text-lg"
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
                      text={contactInfo.phone}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-gray-300"
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
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-600"
                    padding="p-2"
                    margin=""
                    display="block"
                    borderRadius="rounded-lg"
                    canvas={false}
                  >
                    <CraftText
                      text="✉️"
                      tagName="span"
                      fontSize="text-lg"
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
                      text={contactInfo.email}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-gray-300"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          </Element>
        )}

        {/* Copyright */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="py-6"
          margin=""
          display="block"
          borderColor="border-gray-700"
          borderWidth="border-t"
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
                text={copyright}
                tagName="p"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-400"
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
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                gap="gap-6"
                margin=""
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  className="hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                  canvas={false}
                >
                  <CraftText
                    text="Privacy Policy"
                    tagName="a"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-400"
                    textAlign="text-right"
                    className="hover:text-amber-400 transition-colors duration-200"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  className="hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                  canvas={false}
                >
                  <CraftText
                    text="Terms of Service"
                    tagName="a"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-400"
                    textAlign="text-right"
                    className="hover:text-amber-400 transition-colors duration-200"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityFooter1.craft = {
  displayName: "Hospitality Footer 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Footer specific props
    logoText: "Luxury Hotel",
    description: "Experience unparalleled luxury and hospitality at our world-class destination. Your perfect getaway awaits.",
    copyright: "© 2024 Luxury Hotel. All rights reserved.",
    showNewsletter: true,
    showSocial: true,
    showContact: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
