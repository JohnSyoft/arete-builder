import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface HospitalityFeatures2Props extends SectionProps {
  // Features specific props
  features?: Feature[];
  // Settings
  showIcons?: boolean;
  showDescriptions?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  iconSize?: "sm" | "md" | "lg";
  iconStyle?: "circle" | "square" | "rounded";
}

export function HospitalityFeatures2({
  features = [
    {
      id: "feature-1",
      icon: "🏆",
      title: "Five stars luxury resort",
      description: "Experience a unique stay.",
      color: "#d97706"
    },
    {
      id: "feature-2",
      icon: "👨‍💼",
      title: "Well trained manpower",
      description: "Dedicated meal courses.",
      color: "#d97706"
    },
    {
      id: "feature-3",
      icon: "🍽️",
      title: "Fine dining restaurants",
      description: "Discover a medley of flavours.",
      color: "#d97706"
    },
    {
      id: "feature-4",
      icon: "🏊‍♂️",
      title: "Large swimming pool",
      description: "Unwind and discover joy.",
      color: "#d97706"
    }
  ],
  showIcons = true,
  showDescriptions = true,
  layout = "grid",
  columns = 4,
  iconSize = "lg",
  iconStyle = "circle",
  ...props
}: HospitalityFeatures2Props) {
  // Set section defaults for features
  const featuresProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const getIconSizeClass = () => {
    switch (iconSize) {
      case "sm": return "w-16 h-16";
      case "md": return "w-20 h-20";
      case "lg": return "w-24 h-24";
      default: return "w-24 h-24";
    }
  };

  const getIconStyleClass = () => {
    switch (iconStyle) {
      case "square": return "rounded-lg";
      case "rounded": return "rounded-2xl";
      case "circle": return "rounded-full";
      default: return "rounded-full";
    }
  };

  return (
    <Section {...featuresProps}>
      <Element
        id="featuresContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Grid}
          canvas
          columns={columns}
          autoFit={false}
          minColumnWidth="250px"
          gap="gap-0"
          autoRows="auto"
        >
          {features.map((feature, index) => (
            <Element
              key={feature.id}
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-none"
              backgroundColor="bg-transparent"
              borderColor="border-amber-200"
              padding="p-8 xl:p-6"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={index < features.length - 1 ? true : false}
              className="group hover:bg-white/50 transition-all duration-300"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="center"
                gap="gap-6"
                margin="text-center"
              >
                {/* Icon */}
                {showIcons && (
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-100"
                    padding="p-6"
                    margin=""
                    display="block"
                    width={getIconSizeClass()}
                    height={getIconSizeClass()}
                    borderRadius={getIconStyleClass()}
                    className="group-hover:bg-amber-200 transition-colors duration-300"
                    canvas={false}
                  >
                    <CraftText
                      text={feature.icon}
                      tagName="span"
                      fontSize="text-3xl"
                      textAlign="text-center"
                    />
                  </Element>
                )}

                {/* Content */}
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
                    flexDirection="column"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    {/* Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={feature.title}
                        tagName="h3"
                        fontSize="text-xl sm:text-2xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-center"
                        lineHeight="leading-tight"
                      />
                    </Element>

                    {/* Description */}
                    {showDescriptions && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={feature.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-center"
                          lineHeight="leading-relaxed"
                        />
                      </Element>
                    )}
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  );
}

HospitalityFeatures2.craft = {
  displayName: "Hospitality Features 2",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Features specific props
    showIcons: true,
    showDescriptions: true,
    layout: "grid",
    columns: 4,
    iconSize: "lg",
    iconStyle: "circle",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
