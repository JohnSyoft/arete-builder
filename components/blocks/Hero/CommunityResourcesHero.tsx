import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface CommunityResourcesHeroProps extends SectionProps {
  // Hero specific props
  tagline?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  heroImage?: string;
  logoImage?: string;
}

export function CommunityResourcesHero({
  tagline = "Made by Developers, for Developers",
  mainTitle = "Quality resources shared by the community",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
  primaryButtonText = "Get access to 4,958 resources",
  primaryButtonLink = "#",
  heroImage = "https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png",
  logoImage = "https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg",
  ...props
}: CommunityResourcesHeroProps) {
  // Set section defaults for community resources hero
  const heroProps = {
    backgroundColor: "#F9FAFB",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-8 pb-8 sm:px-6 sm:pt-8 sm:pb-12 md:px-8 md:pt-12 md:pb-16 lg:px-8 lg:pt-16 lg:pb-20",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="communityResourcesHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Navigation */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="16px 0"
          margin="0"
          display="block"
          canvas
        >
          {/* Navigation Flex Container */}
          <Element
            is={Flex}
            flexDirection="row"
            justifyContent="between"
            alignItems="center"
            gap="16px"
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
                alt="Logo"
                width="w-auto"
                height="h-8"
                objectFit="object-contain"
                margin=""
                padding=""
              />
            </Element>

            {/* Mobile Menu Button */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="8px"
              margin="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              canvas={false}
            >
              <div className="w-7 h-7 text-gray-900 lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </Element>

            {/* Desktop Navigation Links */}
            <Element
              is={Flex}
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="48px"
              canvas
            >
              <div className="hidden lg:flex lg:items-center lg:space-x-12">
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text="Experts"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-900"
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
                    text="Community Groups"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-900"
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
                    text="Support"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-900"
                    textAlign="text-left"
                  />
                </Element>
              </div>
            </Element>

            {/* Login and Join Buttons */}
            <Element
              is={Flex}
              flexDirection="row"
              justifyContent="end"
              alignItems="center"
              gap="40px"
              canvas
            >
              <div className="hidden lg:flex lg:items-center lg:space-x-10">
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text="Login"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-900"
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
                    text="Join community"
                    backgroundColor="transparent"
                    textColor="#111827"
                    borderRadius="12px"
                    padding="px-5 py-2"
                    width="w-auto"
                  />
                </Element>
              </div>
            </Element>
          </Element>
        </Element>

        {/* Main Hero Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="48px 0 64px 0"
          margin="0"
          display="block"
          canvas
        >
          {/* Content Container - Centered */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            canvas
          >
            {/* Tagline Badge */}
            <Element
              is={Box}
              backgroundColor="#F3F4F6"
              padding="8px 16px"
              margin="0 0 20px 0"
              borderRadius="9999px"
              border="1px solid #E5E7EB"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              canvas={false}
            >
              <Text
                text={tagline}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-900"
                textAlign="text-center"
              />
            </Element>

            {/* Main Heading */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              width="100%"
              canvas={false}
            >
              <Text
                text={mainTitle}
                tagName="h1"
                fontSize="text-4xl sm:text-5xl lg:text-6xl"
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
              margin="0 0 40px 0"
              display="block"
              width="100%"
              canvas={false}
            >
              <Text
                text={description}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
              />
            </Element>

            {/* Gradient Button Container */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 64px 0"
              display="block"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="#111827"
                padding="1px"
                margin="0"
                borderRadius="12px"
                display="inline-block"
                canvas={false}
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <Button
                    text={primaryButtonText}
                    backgroundColor="#111827"
                    textColor="#FFFFFF"
                    borderRadius="12px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Hero Image Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="64px 0 0 0"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            canvas
          >
            <Image
              src={heroImage}
              alt="Hero Illustration"
              width="w-full"
              height="h-auto"
              objectFit="object-cover"
              margin=""
              padding=""
            />
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

CommunityResourcesHero.craft = {
  displayName: "Community Resources Hero",
  props: {
    tagline: "Made by Developers, for Developers",
    mainTitle: "Quality resources shared by the community",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vehicula massa in enim luctus. Rutrum arcu.",
    primaryButtonText: "Get access to 4,958 resources",
    primaryButtonLink: "#",
    heroImage:
      "https://d33wubrfki0l68.cloudfront.net/54780decfb9574945bc873b582cdc6156144a2ba/d9fa1/images/hero/4/illustration.png",
    logoImage:
      "https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
