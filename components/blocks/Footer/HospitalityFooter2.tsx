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
  text: string;
  href: string;
  external?: boolean;
}

interface SocialLink {
  platform: string;
  href: string;
  icon: string;
  label: string;
}

interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  link: string;
}

interface HospitalityFooter2Props extends SectionProps {
  // Footer specific props
  logo?: string;
  logoAlt?: string;
  description?: string;
  navigationLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  instagramPosts?: InstagramPost[];
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  privacyText?: string;
  privacyLink?: string;
  copyrightText?: string;
  copyrightYear?: number;
  // Settings
  showNewsletter?: boolean;
  showInstagram?: boolean;
  showSocial?: boolean;
  showNavigation?: boolean;
  backgroundColor?: string;
}

export function HospitalityFooter2({
  logo = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=171&h=171&fit=crop",
  logoAlt = "Luxury Resort Logo",
  description = "Experience unparalleled luxury and exceptional service at our world-class resort.",
  navigationLinks = [
    { text: "Home", href: "/" },
    { text: "About us", href: "/about" },
    { text: "Rooms", href: "/rooms" },
    { text: "Amenities", href: "/amenities" },
    { text: "Bistro", href: "/bistro" },
    { text: "Contact", href: "/contact" }
  ],
  socialLinks = [
    { platform: "Facebook", href: "https://facebook.com", icon: "📘", label: "Fb." },
    { platform: "Dribbble", href: "https://dribbble.com", icon: "🏀", label: "Dr." },
    { platform: "Twitter", href: "https://twitter.com", icon: "🐦", label: "Tw." },
    { platform: "Behance", href: "https://behance.com", icon: "🎨", label: "Be." }
  ],
  instagramPosts = [
    {
      id: "insta-1",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=600&fit=crop",
      alt: "Resort pool",
      link: "https://instagram.com/p/1"
    },
    {
      id: "insta-2",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop",
      alt: "Fine dining",
      link: "https://instagram.com/p/2"
    },
    {
      id: "insta-3",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=600&fit=crop",
      alt: "Spa relaxation",
      link: "https://instagram.com/p/3"
    },
    {
      id: "insta-4",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=600&fit=crop",
      alt: "Sunset view",
      link: "https://instagram.com/p/4"
    },
    {
      id: "insta-5",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=600&fit=crop",
      alt: "Gourmet breakfast",
      link: "https://instagram.com/p/5"
    }
  ],
  newsletterTitle = "Get the amazing offers into your inbox!",
  newsletterPlaceholder = "Enter your email address",
  newsletterButtonText = "Subscribe",
  privacyText = "We are committed to protecting your privacy policy.",
  privacyLink = "#privacy",
  copyrightText = "Crafto",
  copyrightYear = 2025,
  showNewsletter = true,
  showInstagram = true,
  showSocial = true,
  showNavigation = true,
  backgroundColor = "#f8fafc",
  ...props
}: HospitalityFooter2Props) {
  // Set section defaults for footer
  const footerProps = {
    backgroundColor,
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
        {/* Logo Section */}
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
                width="w-20 h-20"
                height="h-20"
                objectFit="object-cover"
                borderRadius="rounded-full"
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

        {/* Newsletter Section */}
        {showNewsletter && (
          <Element
            is={Box}
            backgroundColor="bg-white"
            padding="py-12 px-8"
            margin="mb-16"
            display="block"
            borderRadius="rounded-2xl"
            shadow="lg"
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
                  text={newsletterTitle}
                  tagName="h3"
                  fontSize="text-2xl sm:text-3xl"
                  fontWeight="font-normal"
                  color="text-gray-900"
                  textAlign="text-center"
                  lineHeight="leading-tight"
                  className="max-w-4xl mx-auto"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-full max-w-2xl"
                canvas
              >
                <Element
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-full"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="p-2"
                  margin=""
                  hoverable={false}
                  clickable={false}
                  overflow="visible"
                  border={false}
                  className="group hover:shadow-xl transition-all duration-300"
                  canvas
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    gap="gap-0"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="px-6 py-4"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={newsletterPlaceholder}
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
                        text={newsletterButtonText}
                        size="lg"
                        backgroundColor="#d97706"
                        textColor="#ffffff"
                        borderRadius="rounded-full"
                        padding="px-8 py-4"
                        width="w-auto"
                        className="hover:bg-amber-600 transition-colors duration-300"
                      />
                    </Element>
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
                  text={privacyText}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-500"
                  textAlign="text-center"
                >
                  <CraftText
                    text="privacy policy"
                    tagName="a"
                    href={privacyLink}
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-center"
                    className="underline hover:text-amber-600 transition-colors duration-200"
                  />
                </CraftText>
              </Element>
            </Element>
          </Element>
        )}

        {/* Instagram Section */}
        {showInstagram && (
          <Element
            is={Box}
            backgroundColor="bg-white"
            padding="py-12 px-8"
            margin="mb-16"
            display="block"
            borderRadius="rounded-2xl"
            shadow="lg"
            canvas
          >
            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="gap-8"
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
                  text="Follow Our Journey"
                  tagName="h3"
                  fontSize="text-2xl sm:text-3xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-center"
                  margin="mb-2"
                />
              </Element>

              <Element
                is={Grid}
                canvas
                columns={5}
                autoFit={true}
                minColumnWidth="120px"
                gap="gap-4"
                autoRows="auto"
              >
                {instagramPosts.map((post, index) => (
                  <Element
                    key={post.id}
                    is={Card}
                    variant="flat"
                    shadow="sm"
                    borderRadius="rounded-lg"
                    backgroundColor="bg-white"
                    borderColor=""
                    padding="p-0"
                    margin=""
                    hoverable={true}
                    clickable={false}
                    overflow="hidden"
                    border={false}
                    className="group hover:shadow-lg transition-all duration-300"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-full"
                      height="h-24"
                      position="relative"
                      canvas={false}
                    >
                      <CraftImage
                        src={post.image}
                        alt={post.alt}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-lg"
                        margin=""
                        padding=""
                        className="group-hover:scale-110 transition-transform duration-300"
                      />

                      <Element
                        is={Box}
                        backgroundColor="bg-black/50"
                        padding="0"
                        margin=""
                        display="block"
                        position="absolute"
                        top="top-0"
                        left="left-0"
                        right="right-0"
                        bottom="bottom-0"
                        borderRadius="rounded-lg"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="center"
                          alignItems="center"
                          gap="gap-1"
                          margin="text-center h-full"
                        >
                          <CraftText
                            text="📷"
                            tagName="span"
                            fontSize="text-lg"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                ))}
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
                  text="Follow crafto"
                  size="lg"
                  backgroundColor="#d97706"
                  textColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-600 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        )}

        {/* Footer Bottom */}
        <Element
          is={Box}
          backgroundColor="bg-white"
          padding="py-8 px-8"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          shadow="lg"
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
            wrap="wrap"
          >
            {/* Copyright */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text={`© Copyright ${copyrightYear} `}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
              >
                <CraftText
                  text={copyrightText}
                  tagName="a"
                  href="/"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-gray-700"
                  textAlign="text-left"
                  className="underline hover:text-amber-600 transition-colors duration-200"
                />
              </CraftText>
            </Element>

            {/* Navigation */}
            {showNavigation && (
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
                      canvas={false}
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
                    </Element>
                  ))}
                </Element>
              </Element>
            )}

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
                  justifyContent="end"
                  alignItems="center"
                  gap="gap-6"
                  margin=""
                  wrap="wrap"
                >
                  {socialLinks.map((social, index) => (
                    <Element
                      key={index}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={social.label}
                        tagName="a"
                        href={social.href}
                        fontSize="text-base"
                        fontWeight="font-semibold"
                        color="text-gray-700"
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
      </Element>
    </Section>
  );
}

HospitalityFooter2.craft = {
  displayName: "Hospitality Footer 2",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Footer specific props
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=171&h=171&fit=crop",
    logoAlt: "Luxury Resort Logo",
    description: "Experience unparalleled luxury and exceptional service at our world-class resort.",
    showNewsletter: true,
    showInstagram: true,
    showSocial: true,
    showNavigation: true,
    backgroundColor: "#f8fafc",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
