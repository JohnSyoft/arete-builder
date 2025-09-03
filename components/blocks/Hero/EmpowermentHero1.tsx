import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface EmpowermentHero1Props extends SectionProps {
  // Badge content
  badgeIcon?: string;
  badgeText?: string;
  badgeLink?: string;
  badgeLinkText?: string;

  // Main content
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Image
  heroImage?: string;

  // Colors and styling
  primaryColor?: string;
  badgeColor?: string;
  badgeBorderColor?: string;
  badgeTextColor?: string;
  textColor?: string;
  primaryButtonColor?: string;
  secondaryButtonColor?: string;
}

export function EmpowermentHero1({
  badgeIcon = "fa-info-circle",
  badgeText = "Eco-friendly retreats",
  badgeLink = "#",
  badgeLinkText = "Discover our natural escapes",
  mainTitle = "Experience nature with serene and sustainable stays",
  description = "Immerse yourself in peaceful environments that harmonize with nature.",
  primaryButtonText = "Our destinations",
  secondaryButtonText = "Book a stay",
  heroImage = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
  primaryColor = "#ffffff",
  badgeColor = "#f8f9fa",
  badgeBorderColor = "#dee2e6",
  badgeTextColor = "#495057",
  textColor = "#212529",
  primaryButtonColor = "#007bff",
  secondaryButtonColor = "#6c757d",
  ...props
}: EmpowermentHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults for empowerment hero
  const heroProps = {
    backgroundColor: primaryColor,
    padding: "24px 0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-6 sm:px-6 lg:px-8",
    ...props,
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Section {...heroProps}>
        <Element
          id="empowermentHeroContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Hero Layout */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="between"
            alignItems="start"
            gap="gap-8"
            margin="0"
            wrap="wrap"
          >
            {/* Left Column - Content (60% width on desktop) */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="24px"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="start"
              width="60%"
              canvas
            >
              {/* CTA Badge */}
              <Element
                is={Box}
                backgroundColor={badgeColor}
                padding="8px 12px"
                margin="12px 0"
                borderRadius="32px"
                border={`1px solid ${badgeBorderColor}`}
                display="inline-block"
                width="fit-content"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-2"
                  margin="0"
                  wrap="nowrap"
                >
                  {/* Info Icon */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-4 h-4 text-current">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,17C11.45,17 11,16.55 11,16V12C11,11.45 11.45,11 12,11C12.55,11 13,11.45 13,12V16C13,16.55 12.55,17 12,17M12,9A1,1 0 0,1 11,8A1,1 0 0,1 12,7A1,1 0 0,1 13,8A1,1 0 0,1 12,9Z" />
                      </svg>
                    </div>
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={badgeText}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color={badgeTextColor}
                      textAlign="text-left"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 0 8px"
                    display="block"
                    canvas={false}
                  >
                    <a
                      href={badgeLink}
                      className="text-sm font-medium underline"
                    >
                      {badgeLinkText}
                    </a>
                  </Element>

                  {/* Arrow Icon */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-4 h-4 text-current">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                      </svg>
                    </div>
                  </Element>
                </Element>
              </Element>

              {/* Main Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={mainTitle}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl lg:text-6xl"
                  fontWeight="font-bold"
                  color={textColor}
                  textAlign="text-left"
                  margin="0"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="16px 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={description}
                  tagName="p"
                  fontSize="text-lg md:text-xl"
                  fontWeight="font-normal"
                  color={textColor}
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>

              {/* Action Buttons */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-4"
                margin="0"
                wrap="wrap"
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text={primaryButtonText}
                    size="lg"
                    backgroundColor={primaryButtonColor}
                    textColor="#ffffff"
                    borderRadius="6px"
                    padding="px-6 py-3"
                    width="w-auto"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text={secondaryButtonText}
                    size="lg"
                    backgroundColor={secondaryButtonColor}
                    textColor="#ffffff"
                    borderRadius="6px"
                    padding="px-6 py-3"
                    width="w-auto"
                  />
                </Element>
              </Element>
            </Element>

            {/* Right Column - Hero Image (40% width on desktop) */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="40%"
              canvas
            >
              {/* Image Container - Hidden on mobile, visible on large screens */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="24px"
                margin="0"
                display="block"
                width="100%"
                height="400px"
                canvas
              >
                <CraftImage
                  src={heroImage}
                  alt="Eco-friendly retreat - Sustainable nature accommodations"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Empowerment Hero
        </div>
      )}
    </div>
  );
}

EmpowermentHero1.craft = {
  displayName: "Empowerment Hero 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "24px 0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-6 sm:px-6 lg:px-8",

    // Empowerment Hero specific props
    badgeIcon: "fa-info-circle",
    badgeText: "Eco-friendly retreats",
    badgeLink: "#",
    badgeLinkText: "Discover our natural escapes",
    mainTitle: "Experience nature with serene and sustainable stays",
    description:
      "Immerse yourself in peaceful environments that harmonize with nature.",
    primaryButtonText: "Our destinations",
    secondaryButtonText: "Book a stay",
    heroImage:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    primaryColor: "#ffffff",
    badgeColor: "#f8f9fa",
    badgeBorderColor: "#dee2e6",
    badgeTextColor: "#495057",
    textColor: "#212529",
    primaryButtonColor: "#007bff",
    secondaryButtonColor: "#6c757d",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
