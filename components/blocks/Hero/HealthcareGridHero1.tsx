"use client";

import { useNode, Element } from "@craftjs/core";
import {
  CraftSection as Section,
  CraftBox as Box,
  CraftText,
  CraftImage,
  CraftFlex as Flex,
} from "@/components/editor/craft-components";
import { SectionProps } from "@/components/blocks/Basic/Section";

interface HealthcareGridHero1Props extends SectionProps {
  // Main content
  title?: string;
  description?: string;

  // Images
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  // Colors and styling
  textColor?: string;
  overlayColor?: string;
}

export function HealthcareGridHero1({
  title = "Protect patient health for future generations",
  description = "Every patient we treat is a step towards a healthier community, ensuring quality care for all.",
  image1 = "/healthcare-grid-1.jpg",
  image2 = "/healthcare-grid-2.jpg",
  image3 = "/healthcare-grid-3.jpg",
  image4 = "/healthcare-grid-4.jpg",
  textColor = "#000000",
  overlayColor = "#e3f2fd",
  ...props
}: HealthcareGridHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const heroProps = {
    backgroundColor: "#f8f9fa",
    padding: "56px 0",
    minHeight: "600px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
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
          id="healthcareGridHeroContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Layout Container */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="between"
            alignItems="start"
            gap="gap-8"
            margin="0"
            padding="0"
            wrap="wrap"
          >
            {/* Left Side - Images Section */}
            <Element
              is={Box}
              canvas
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="50%"
            >
              {/* Top Row Images */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                gap="gap-6"
                margin="0 0 24px 0"
                padding="0"
                wrap="nowrap"
              >
                {/* Image 1 */}
                <Element
                  is={Box}
                  canvas
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="48%"
                >
                  <CraftImage
                    src={image1}
                    alt="Healthcare professional"
                    width="w-full"
                    height="h-48"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Image 2 */}
                <Element
                  is={Box}
                  canvas
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="48%"
                >
                  <CraftImage
                    src={image2}
                    alt="Medical consultation"
                    width="w-full"
                    height="h-64"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>

              {/* Bottom Row Images */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                gap="gap-6"
                margin="0"
                padding="0"
                wrap="nowrap"
              >
                {/* Image 3 */}
                <Element
                  is={Box}
                  canvas
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="48%"
                >
                  <CraftImage
                    src={image4}
                    alt="Healthcare team"
                    width="w-full"
                    height="h-64"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Image 4 */}
                <Element
                  is={Box}
                  canvas
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="48%"
                >
                  <CraftImage
                    src={image3}
                    alt="Modern medical facility"
                    width="w-full"
                    height="h-48"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>
            </Element>

            {/* Right Side - Content Section */}
            <Element
              is={Box}
              canvas
              backgroundColor="transparent"
              padding="32px"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="45%"
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
                  text={title}
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
                margin="0"
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
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Healthcare Grid Hero
        </div>
      )}
    </div>
  );
}

HealthcareGridHero1.craft = {
  displayName: "Healthcare Grid Hero 1",
  props: {
    // Section props
    backgroundColor: "#f8f9fa",
    padding: "56px 0",
    minHeight: "600px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",

    // Healthcare Grid Hero specific props
    title: "Protect patient health for future generations",
    description:
      "Every patient we treat is a step towards a healthier community, ensuring quality care for all.",
    image1: "/healthcare-grid-1.jpg",
    image2: "/healthcare-grid-2.jpg",
    image3: "/healthcare-grid-3.jpg",
    image4: "/healthcare-grid-4.jpg",
    textColor: "#000000",
    overlayColor: "#e3f2fd",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
