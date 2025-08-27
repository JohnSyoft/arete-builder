import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ElderCareCTA1Props extends SectionProps {
  // CTA specific props
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonUrl?: string;
  secondaryButtonText?: string;
  secondaryButtonUrl?: string;
  phoneNumber?: string;
}

export function ElderCareCTA1({
  mainTitle = "Ready to provide the care your loved one deserves?",
  description = "Contact us today to schedule a tour and discover how we can provide compassionate, professional care for your family member.",
  primaryButtonText = "Schedule a Tour",
  primaryButtonUrl = "/contact",
  secondaryButtonText = "Call Now",
  secondaryButtonUrl = "tel:+1-555-123-4567",
  phoneNumber = "(555) 123-4567",
  ...props
}: ElderCareCTA1Props) {
  // Set section defaults for CTA
  const ctaProps = {
    backgroundColor: "#14b8a6",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...ctaProps}>
      <Element
        id="elderCareCTAContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 48px 0"
          display="block"
          canvas
        >
          {/* Main Title */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 24px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={mainTitle}
              tagName="h2"
              fontSize="text-3xl sm:text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-white"
              textAlign="text-center"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={description}
              tagName="p"
              fontSize="text-lg sm:text-xl"
              fontWeight="font-normal"
              color="text-teal-50"
              textAlign="text-center"
              lineHeight="leading-relaxed"
            />
          </Element>
        </Element>

        {/* Buttons Container */}
        <Element
          is={Flex}
          canvas
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="gap-4 sm:gap-6"
          margin="0"
          wrap="wrap"
        >
          {/* Primary Button */}
          <Element
            is={CraftButton}
            text={primaryButtonText}
            variant="secondary"
            size="lg"
            href={primaryButtonUrl}
            borderRadius="8px"
            padding="px-8 py-4"
            margin=""
            canvas={false}
          />

          {/* Secondary Button with Phone */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="gap-3"
            margin="0"
            wrap="nowrap"
          >
            <Element
              is={CraftButton}
              text={secondaryButtonText}
              variant="outline"
              size="lg"
              href={secondaryButtonUrl}
              borderRadius="8px"
              padding="px-8 py-4"
              margin=""
              canvas={false}
            />

            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={phoneNumber}
                tagName="span"
                fontSize="text-lg sm:text-xl"
                fontWeight="font-semibold"
                color="text-white"
                textAlign="text-center"
              />
            </Element>
          </Element>
        </Element>

        {/* Additional Info */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="32px 0 0 0"
          margin="0"
          display="block"
          canvas
        >
          {/* Available 24/7 */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 16px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text="Available 24/7 for emergency situations"
              tagName="p"
              fontSize="text-base sm:text-lg"
              fontWeight="font-medium"
              color="text-teal-100"
              textAlign="text-center"
            />
          </Element>

          {/* License Info */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text="Licensed and certified care facility"
              tagName="p"
              fontSize="text-sm sm:text-base"
              fontWeight="font-normal"
              color="text-teal-200"
              textAlign="text-center"
            />
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ElderCareCTA1.craft = {
  displayName: "Elder Care CTA 1",
  props: {
    // Section props
    backgroundColor: "#14b8a6",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // CTA specific props
    mainTitle: "Ready to provide the care your loved one deserves?",
    description:
      "Contact us today to schedule a tour and discover how we can provide compassionate, professional care for your family member.",
    primaryButtonText: "Schedule a Tour",
    primaryButtonUrl: "/contact",
    secondaryButtonText: "Call Now",
    secondaryButtonUrl: "tel:+1-555-123-4567",
    phoneNumber: "(555) 123-4567",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
