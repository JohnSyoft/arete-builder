import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Stat {
  id: string;
  value: string;
  label: string;
  description?: string;
  icon?: string;
  color?: string;
}

interface HospitalityStats1Props extends SectionProps {
  // Stats specific props
  title?: string;
  subtitle?: string;
  description?: string;
  stats?: Stat[];
  // Settings
  showTitle?: boolean;
  showIcons?: boolean;
  showDescriptions?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  animation?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function HospitalityStats1({
  title = "Our Achievements",
  subtitle = "By the Numbers",
  description = "Discover our impressive track record and commitment to excellence.",
  stats = [
    {
      id: "stat-1",
      value: "25+",
      label: "Years of Excellence",
      description: "Serving guests with luxury hospitality",
      icon: "🏆",
      color: "#d97706"
    },
    {
      id: "stat-2",
      value: "10,000+",
      label: "Happy Guests",
      description: "Satisfied customers worldwide",
      icon: "😊",
      color: "#d97706"
    },
    {
      id: "stat-3",
      value: "50+",
      label: "Awards Won",
      description: "International recognition and honors",
      icon: "🥇",
      color: "#d97706"
    },
    {
      id: "stat-4",
      value: "99%",
      label: "Guest Satisfaction",
      description: "Consistently high ratings",
      icon: "⭐",
      color: "#d97706"
    }
  ],
  showTitle = true,
  showIcons = true,
  showDescriptions = true,
  layout = "grid",
  columns = 4,
  animation = true,
  backgroundColor = "#1f2937",
  textColor = "#ffffff",
  accentColor = "#d97706",
  ...props
}: HospitalityStats1Props) {
  // Set section defaults for stats
  const statsProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...statsProps}>
      <Element
        id="statsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        {showTitle && (
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
              {/* Subtitle */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftText
                  text={subtitle}
                  tagName="span"
                  fontSize="text-lg"
                  fontWeight="font-medium"
                  color={accentColor}
                  textAlign="text-center"
                />
              </Element>

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
                  text={title}
                  tagName="h2"
                  fontSize="text-3xl sm:text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color={textColor}
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
                  text={description}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color={textColor}
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  className="max-w-2xl mx-auto opacity-80"
                />
              </Element>
            </Element>
          </Element>
        )}

        {/* Stats Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={columns}
            autoFit={false}
            minColumnWidth="200px"
            gap="gap-8"
            autoRows="auto"
          >
            {stats.map((stat, index) => (
              <Element
                key={stat.id}
                is={Card}
                variant="flat"
                shadow="2xl"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white/10"
                borderColor="border-white/20"
                padding="p-8"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="visible"
                border={true}
                className={`group hover:bg-white/20 transition-all duration-500 ${animation ? 'hover:scale-105' : ''}`}
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
                  {/* Icon */}
                  {showIcons && stat.icon && (
                    <Element
                      is={Box}
                      backgroundColor="bg-white/20"
                      padding="p-4"
                      margin=""
                      display="block"
                      width="w-16"
                      height="h-16"
                      borderRadius="rounded-full"
                      className="group-hover:bg-white/30 transition-colors duration-300"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.icon}
                        tagName="span"
                        fontSize="text-2xl"
                        textAlign="text-center"
                      />
                    </Element>
                  )}

                  {/* Stat Value */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={stat.value}
                      tagName="div"
                      fontSize="text-4xl sm:text-5xl md:text-6xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-center"
                      className={`${animation ? 'group-hover:scale-110' : ''} transition-transform duration-300`}
                    />
                  </Element>

                  {/* Stat Label */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={stat.label}
                      tagName="h3"
                      fontSize="text-lg sm:text-xl"
                      fontWeight="font-semibold"
                      color={textColor}
                      textAlign="text-center"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  {/* Stat Description */}
                  {showDescriptions && stat.description && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={stat.description}
                        tagName="p"
                        fontSize="text-sm sm:text-base"
                        fontWeight="font-normal"
                        color={textColor}
                        textAlign="text-center"
                        lineHeight="leading-relaxed"
                        className="opacity-80"
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Decorative Elements */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mt-16"
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
          >
            <Element
              is={Box}
              backgroundColor="bg-white/20"
              padding="p-2"
              margin=""
              display="block"
              width="w-2"
              height="h-2"
              borderRadius="rounded-full"
              canvas={false}
            />
            <Element
              is={Box}
              backgroundColor="bg-white/40"
              padding="p-2"
              margin=""
              display="block"
              width="w-3"
              height="h-3"
              borderRadius="rounded-full"
              canvas={false}
            />
            <Element
              is={Box}
              backgroundColor="bg-white/20"
              padding="p-2"
              margin=""
              display="block"
              width="w-2"
              height="h-2"
              borderRadius="rounded-full"
              canvas={false}
            />
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityStats1.craft = {
  displayName: "Hospitality Stats 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Stats specific props
    title: "Our Achievements",
    subtitle: "By the Numbers",
    description: "Discover our impressive track record and commitment to excellence.",
    showTitle: true,
    showIcons: true,
    showDescriptions: true,
    layout: "grid",
    columns: 4,
    animation: true,
    backgroundColor: "#1f2937",
    textColor: "#ffffff",
    accentColor: "#d97706",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
