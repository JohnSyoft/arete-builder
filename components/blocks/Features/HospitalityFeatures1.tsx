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
  color: string;
}

interface HospitalityFeatures1Props extends SectionProps {
  // Features specific props
  features?: Feature[];
  backgroundColor?: string;
  showBorders?: boolean;
  borderColor?: string;
  iconSize?: "small" | "medium" | "large";
  layout?: "horizontal" | "vertical";
}

export function HospitalityFeatures1({
  features = [
    {
      id: "luxury-resort",
      icon: "🏆",
      title: "Five stars luxury resort",
      description: "Experience a unique stay.",
      color: "amber"
    },
    {
      id: "trained-staff",
      icon: "👨‍💼",
      title: "Well trained manpower",
      description: "Dedicated meal courses.",
      color: "blue"
    },
    {
      id: "fine-dining",
      icon: "🍽️",
      title: "Fine dining restaurants",
      description: "Discover a medley of flavours.",
      color: "red"
    },
    {
      id: "swimming-pool",
      icon: "🏊‍♀️",
      title: "Large swimming pool",
      description: "Unwind and discover joy.",
      color: "green"
    }
  ],
  backgroundColor = "#f8fafc",
  showBorders = true,
  borderColor = "border-amber-200",
  iconSize = "large",
  layout = "horizontal",
  ...props
}: HospitalityFeatures1Props) {
  // Set section defaults for features
  const featuresProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const getIconSize = () => {
    switch (iconSize) {
      case "small": return "w-16 h-16";
      case "medium": return "w-20 h-20";
      case "large": return "w-24 h-24";
      default: return "w-24 h-24";
    }
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case "amber": return "bg-amber-100 text-amber-600";
      case "blue": return "bg-blue-100 text-blue-600";
      case "red": return "bg-red-100 text-red-600";
      case "green": return "bg-green-100 text-green-600";
      case "purple": return "bg-purple-100 text-purple-600";
      case "pink": return "bg-pink-100 text-pink-600";
      default: return "bg-amber-100 text-amber-600";
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
          columns={4}
          autoFit={true}
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
              backgroundColor="transparent"
              borderColor={showBorders && index < features.length - 1 ? borderColor : ""}
              padding="p-8 xl:p-6"
              margin=""
              hoverable={false}
              clickable={false}
              overflow="visible"
              border={showBorders && index < features.length - 1}
              className="group hover:bg-white/50 transition-all duration-300"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection={layout === "horizontal" ? "row" : "column"}
                justifyContent="center"
                alignItems="center"
                gap="gap-6"
                margin="text-center"
              >
                {/* Icon */}
                <Element
                  is={Box}
                  backgroundColor={getColorClasses(feature.color)}
                  padding="p-4"
                  margin=""
                  display="block"
                  borderRadius="rounded-full"
                  width={getIconSize()}
                  height={getIconSize()}
                  canvas={false}
                >
                  <CraftText
                    text={feature.icon}
                    tagName="span"
                    fontSize="text-2xl"
                    textAlign="text-center"
                  />
                </Element>

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
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-2"
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
                        fontSize="text-xl"
                        fontWeight="font-semibold"
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

HospitalityFeatures1.craft = {
  displayName: "Hospitality Features 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Features specific props
    features: [
      {
        id: "luxury-resort",
        icon: "🏆",
        title: "Five stars luxury resort",
        description: "Experience a unique stay.",
        color: "amber"
      },
      {
        id: "trained-staff",
        icon: "👨‍💼",
        title: "Well trained manpower",
        description: "Dedicated meal courses.",
        color: "blue"
      },
      {
        id: "fine-dining",
        icon: "🍽️",
        title: "Fine dining restaurants",
        description: "Discover a medley of flavours.",
        color: "red"
      },
      {
        id: "swimming-pool",
        icon: "🏊‍♀️",
        title: "Large swimming pool",
        description: "Unwind and discover joy.",
        color: "green"
      }
    ],
    showBorders: true,
    borderColor: "border-amber-200",
    iconSize: "large",
    layout: "horizontal",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

