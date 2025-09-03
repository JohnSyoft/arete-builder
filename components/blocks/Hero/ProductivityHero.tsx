import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface ProductivityHeroProps extends SectionProps {
  // Hero specific props
  mainTitle?: string;
  description?: string;
  emailPlaceholder?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  disclaimerText?: string;
  heroImage?: string;
  logoImage?: string;
  statsNumber?: string;
  statsText?: string;
  circularImageUrl?: string;
}

export function ProductivityHero({
  mainTitle = "Get it done. Fast, Easy.",
  description = "We help you to make your remote work life easier. Build a distruction free working experience.",
  emailPlaceholder = "Enter email to get started",
  primaryButtonText = "Try 14 days free",
  primaryButtonLink = "#",
  disclaimerText = "Instant access . No credit card required",
  heroImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg",
  logoImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg",
  statsNumber = "395",
  statsText = "Professionals have organized their desk via PostCra",
  circularImageUrl = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png",
  ...props
}: ProductivityHeroProps) {
  // Set section defaults for productivity hero
  const heroProps = {
    backgroundColor: "#FFFEF7", // bg-yellow-50 equivalent
    padding: "0",
    minHeight: "800px",
    hasContentWrapper: false,
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="productivityHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        canvas
      >
        {/* Main Section - Flex Layout */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          width="100%"
          canvas
        >
          <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
            {/* Right Column - Content (order-2 on lg, w-7/12) */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              canvas
            >
              <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
                {/* Curved Lines Decoration */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div className="absolute bottom-0 right-0 hidden lg:block">
                    <Image
                      src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                      alt=""
                      width="w-auto"
                      height="h-48"
                      objectFit="object-contain"
                      margin=""
                      padding=""
                    />
                  </div>
                </Element>

                {/* Main Content */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="100%"
                  canvas
                >
                  <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
                    {/* Main Heading */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 32px 0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={mainTitle}
                        tagName="h1"
                        fontSize="text-4xl sm:text-6xl xl:text-8xl"
                        fontWeight="font-bold"
                        color="text-black"
                        textAlign="text-center lg:text-left"
                        lineHeight="leading-tight"
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
                        fontSize="text-xl"
                        fontWeight="font-normal"
                        color="text-black"
                        textAlign="text-center lg:text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Email Form */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 20px 0"
                      display="block"
                      width="100%"
                      canvas
                    >
                      <div className="max-w-xl mx-auto mt-8 bg-white lg:mx-0 sm:bg-transparent lg:mt-12 rounded-xl">
                        <div className="p-4 sm:p-2 sm:bg-white sm:border-2 sm:border-transparent sm:rounded-full sm:focus-within:border-orange-500 sm:focus-within:ring-1 sm:focus-within:ring-orange-500">
                          <div className="flex flex-col items-start sm:flex-row">
                            {/* Email Input */}
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="flex"
                              width="100%"
                              canvas={false}
                            >
                              <div className="flex-1 w-full min-w-0">
                                <div className="relative text-gray-400 focus-within:text-gray-600">
                                  <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder={emailPlaceholder}
                                    className="block w-full px-4 py-4 text-base text-center text-black placeholder-gray-500 transition-all duration-200 border-transparent rounded-full sm:text-left focus:border-transparent focus:ring-0 caret-orange-500"
                                    required
                                  />
                                </div>
                              </div>
                            </Element>

                            {/* Submit Button */}
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
                                backgroundColor="#F97316"
                                textColor="#FFFFFF"
                                borderRadius="9999px"
                                padding="px-4 py-4"
                                width="w-full sm:w-auto"
                              />
                            </Element>
                          </div>
                        </div>
                      </div>
                    </Element>

                    {/* Disclaimer */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <Text
                        text={disclaimerText}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-black"
                        textAlign="text-center lg:text-left"
                      />
                    </Element>
                  </div>
                </Element>

                {/* Circular Text Image - Absolutely Positioned */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
                    <Image
                      src={circularImageUrl}
                      alt=""
                      width="w-32 md:w-40"
                      height="h-32 md:h-40"
                      objectFit="object-contain"
                      margin=""
                      padding=""
                    />
                  </div>
                </Element>
              </div>
            </Element>

            {/* Left Column - Image Section (order-1 on lg, w-5/12) */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              canvas
            >
              <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
                {/* Main Hero Image with Scale */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div className="absolute inset-0">
                    <Image
                      src={heroImage}
                      alt="Hero Image"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      margin=""
                      padding=""
                    />
                  </div>
                </Element>

                {/* Gradient Overlay */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </Element>

                {/* Stats Section - Bottom Left */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <div className="absolute bottom-0 left-0">
                    <div className="p-4 sm:p-6 lg:p-8">
                      <Element
                        is={Flex}
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gap="10px"
                        canvas
                      >
                        {/* Lightning Icon */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          canvas={false}
                        >
                          <svg
                            className="w-10 h-10 text-orange-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </Element>

                        {/* Stats Number */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <Text
                            text={statsNumber}
                            tagName="h2"
                            fontSize="text-7xl"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>

                      {/* Stats Text */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="6px 0 0 0"
                        display="block"
                        canvas={false}
                      >
                        <Text
                          text={statsText}
                          tagName="p"
                          fontSize="text-xl"
                          fontWeight="font-normal"
                          color="text-white"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                        />
                      </Element>
                    </div>
                  </div>
                </Element>
              </div>
            </Element>
          </div>
        </Element>
      </Element>
    </Section>
  );
}

ProductivityHero.craft = {
  displayName: "Productivity Hero",
  props: {
    mainTitle: "Get it done. Fast, Easy.",
    description:
      "We help you to make your remote work life easier. Build a distruction free working experience.",
    emailPlaceholder: "Enter email to get started",
    primaryButtonText: "Try 14 days free",
    primaryButtonLink: "#",
    disclaimerText: "Instant access . No credit card required",
    heroImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/man-working-on-laptop.jpg",
    logoImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/logo.svg",
    statsNumber: "395",
    statsText: "Professionals have organized their desk via PostCra",
    circularImageUrl:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
