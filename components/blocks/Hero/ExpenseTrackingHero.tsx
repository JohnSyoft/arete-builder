import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface ExpenseTrackingHeroProps extends SectionProps {
  // Hero specific props
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  availableText?: string;
  appStoreImage?: string;
  playStoreImage?: string;
  phoneImage?: string;
  logoImage?: string;
}

export function ExpenseTrackingHero({
  mainTitle = "Take control on your daily expenses",
  description = "Our A.I helps you to predict your expenses based on your previous activity and shares how you should manage you money.",
  primaryButtonText = "Get started for free",
  primaryButtonLink = "#",
  availableText = "App available on",
  appStoreImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png",
  playStoreImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png",
  phoneImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png",
  logoImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg",
  ...props
}: ExpenseTrackingHeroProps) {
  // Set section defaults for expense tracking hero
  const heroProps = {
    backgroundColor: "linear-gradient(to bottom, #ECFDF5, #D1FAE5)",
    padding: "0",
    minHeight: "900px",
    hasContentWrapper: false,
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="expenseTrackingHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        canvas
      >
        {/* Header Navigation */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="16px 32px"
          margin="0"
          display="block"
          width="100%"
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
              backgroundColor="#000000"
              padding="8px 16px"
              margin="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              canvas={false}
            >
              <div className="lg:hidden flex items-center text-white text-sm uppercase">
                <div className="w-6 h-6 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                Menu
              </div>
            </Element>

            {/* Desktop Navigation */}
            <Element
              is={Flex}
              flexDirection="row"
              justifyContent="center"
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
                    text="Features"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-black"
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
                    text="Solutions"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-black"
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
                    text="Resources"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-black"
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
                    text="Pricing"
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-black"
                    textAlign="text-left"
                  />
                </Element>
              </div>
            </Element>

            {/* Try for free Button */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <div className="hidden lg:block">
                <Button
                  text="Try for free"
                  backgroundColor="transparent"
                  textColor="#000000"
                  borderRadius="0px"
                  padding="px-5 py-2.5"
                  width="w-auto"
                />
              </div>
            </Element>
          </Element>
        </Element>

        {/* Main Content - Two Column Layout */}
        <Element
          is={Flex}
          flexDirection="row"
          justifyContent="start"
          alignItems="stretch"
          gap="0"
          canvas
        >
          {/* Left Column - Phone Image */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            alignItems="end"
            justifyContent="center"
            width="40%"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              height="auto"
              canvas
            >
              <Image
                src={phoneImage}
                alt="Phone Mockup"
                width="w-full"
                height="h-auto"
                objectFit="object-contain"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Right Column - Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="96px 32px 64px 32px"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="60%"
            canvas
          >
            {/* Content Container */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="between"
              height="100%"
              canvas
            >
              {/* Main Content */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                {/* Main Heading */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={mainTitle}
                    tagName="h1"
                    fontSize="text-4xl sm:text-6xl xl:text-7xl"
                    fontWeight="font-bold"
                    color="text-black"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 36px 0"
                  display="block"
                  canvas={false}
                >
                  <Text
                    text={description}
                    tagName="p"
                    fontSize="text-base sm:text-xl"
                    fontWeight="font-normal"
                    color="text-black"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>

                {/* Primary Button */}
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
                    backgroundColor="#4ADE80"
                    textColor="#000000"
                    borderRadius="0px"
                    padding="px-6 py-5"
                    width="w-auto"
                  />
                </Element>
              </Element>

              {/* App Store Section */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="32px 0 0 0"
                margin="0"
                display="block"
                canvas
              >
                {/* Border Top */}
                <Element
                  is={Box}
                  backgroundColor="#000000"
                  padding="0"
                  margin="0 0 32px 0"
                  width="100%"
                  height="2px"
                  canvas={false}
                />

                {/* App Available Text and Buttons */}
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="between"
                  alignItems="start"
                  gap="20px"
                  canvas
                >
                  {/* Available Text */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <Text
                      text={availableText}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-semibold"
                      color="text-black"
                      textAlign="text-left"
                    />
                  </Element>

                  {/* App Store Buttons */}
                  <Element
                    is={Flex}
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="20px"
                    canvas
                  >
                    {/* App Store Button */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Image
                        src={appStoreImage}
                        alt="App Store"
                        width="w-auto"
                        height="h-14 sm:h-16"
                        objectFit="object-contain"
                        margin=""
                        padding=""
                      />
                    </Element>

                    {/* Play Store Button */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Image
                        src={playStoreImage}
                        alt="Play Store"
                        width="w-auto"
                        height="h-14 sm:h-16"
                        objectFit="object-contain"
                        margin=""
                        padding=""
                      />
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

ExpenseTrackingHero.craft = {
  displayName: "Expense Tracking Hero",
  props: {
    mainTitle: "Take control on your daily expenses",
    description:
      "Our A.I helps you to predict your expenses based on your previous activity and shares how you should manage you money.",
    primaryButtonText: "Get started for free",
    primaryButtonLink: "#",
    availableText: "App available on",
    appStoreImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/app-store-button.png",
    playStoreImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png",
    phoneImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/phone-mockup.png",
    logoImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/logo.svg",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
