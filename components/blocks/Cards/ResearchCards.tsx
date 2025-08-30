import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Card } from "@/components/blocks/Basic/Card";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ResearchCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  backgroundColor: string;
  gradientTo: string;
  isNew?: boolean;
  category?: string;
  icon?: string;
}

interface ResearchCardsProps extends SectionProps {
  title?: string;
  subtitle?: string;
  cards?: ResearchCard[];
  showNavigation?: boolean;
  cardsPerRow?: number;
  cardHeight?: string;
  gap?: string;
}

export function ResearchCards({
  title = "Research",
  subtitle = "The new generation full-stack self-developed model family",
  cards = [
    {
      id: "speech-25",
      title: "Speech",
      subtitle: "2.5",
      description:
        "Enhanced multilingual expressiveness with exceptional voice cloning fidelity",
      backgroundColor: "#ff9500",
      gradientTo: "#ffb347",
      isNew: true,
      category: "Audio Model",
    },
    {
      id: "hailuo-02",
      title: "MiniMax Hailuo O2",
      subtitle: "",
      description:
        "Native 1080p | SOTA Instruction Following | Extreme Physics Mastery",
      backgroundColor: "#6b7280",
      gradientTo: "#9ca3af",
      isNew: true,
      category: "Video Model",
    },
    {
      id: "minimax-m1",
      title: "MiniMax",
      subtitle: "M1",
      description:
        "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
      backgroundColor: "#ef4444",
      gradientTo: "#f87171",
      isNew: true,
      category: "Text Model",
    },
    {
      id: "mcp-server",
      title: "MiniMax",
      subtitle: "MCP Server",
      description:
        "Video, Image, Speech generation and Cloning Tools Now Available for Developers",
      backgroundColor: "#d1d5db",
      gradientTo: "#e5e7eb",
      isNew: false,
      category: "MCP",
    },
  ],
  showNavigation = true,
  cardsPerRow = 4,
  cardHeight = "400px",
  gap = "24px",
  ...props
}: ResearchCardsProps) {
  const sectionProps = {
    backgroundColor: "#ffffff",
    padding: "80px 0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props,
  };

  return (
    <Section {...sectionProps}>
      <Element
        id="researchCardsContainer"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          id="researchCardsHeader"
          is={Flex}
          canvas
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          margin="mb-12"
          wrap="wrap"
          gap="gap-4"
          overflowX="scroll"
        >
          {/* Title and Subtitle */}
          <Element
            id="researchCardsTitleBox"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={title}
              tagName="h2"
              fontSize="text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-gray-900"
              textAlign="text-left"
              margin="mb-2"
              lineHeight="leading-tight"
            />
            <CraftText
              text={subtitle}
              tagName="p"
              fontSize="text-lg"
              fontWeight="font-normal"
              color="text-gray-600"
              textAlign="text-left"
              lineHeight="leading-relaxed"
            />
          </Element>

          {/* Navigation Buttons */}
        </Element>

        {/* Cards Row - Single Horizontal Row */}
        <Element
          id="researchCardsRow"
          is={Flex}
          canvas
          flexDirection="row"
          gap="gap-6"
          justifyContent="start"
          alignItems="start"
          wrap="nowrap"
          padding="p-0"
          margin="m-0"
          minHeight="min-h-0"
        >
          {cards.map((card, index) => (
            <Element
              key={card.id}
              id={`researchCard-${card.id}`}
              is={Card}
              variant="default"
              shadow="lg"
              borderRadius="16px"
              backgroundColor="transparent"
              padding="0"
              margin="0"
              height={cardHeight}
              hoverable={true}
              clickable={true}
              overflow="hidden"
              canvas
            >
              {/* Card Background with Gradient */}
              <div
                className="p-6 flex flex-col justify-between rounded-2xl relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${card.backgroundColor}, ${card.gradientTo})`,
                  height: cardHeight,
                  minWidth: "320px",
                  width: "320px",
                }}
              >
                <Element
                  id={`researchCardContent-${card.id}`}
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
                  <div className="relative">
                    {/* NEW Badge */}

                    {/* Main Content */}
                    <Element
                      id={`researchCardMainContent-${card.id}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas
                    >
                      {/* Title */}
                      <Element
                        id={`researchCardTitle-${card.id}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 8px 0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={card.title}
                          tagName="h3"
                          fontSize="text-2xl md:text-3xl"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-left"
                          lineHeight="leading-tight"
                        />
                      </Element>

                      {/* Subtitle */}
                      {card.subtitle && (
                        <Element
                          id={`researchCardSubtitle-${card.id}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0 0 16px 0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={card.subtitle}
                            tagName="h4"
                            fontSize="text-4xl md:text-5xl"
                            fontWeight="font-black"
                            color="text-white"
                            textAlign="text-left"
                            lineHeight="leading-none"
                          />
                        </Element>
                      )}
                    </Element>
                  </div>

                  {/* Bottom Section */}
                  <Element
                    id={`researchCardBottom-${card.id}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="flex"
                    flexDirection="column"
                    gap="gap-4"
                    canvas
                  >
                    {/* Category Badge */}
                    {card.category && (
                      <div className="self-start">
                        <Element
                          id={`researchCardCategory-${card.id}`}
                          is={Box}
                          backgroundColor="rgba(255, 255, 255, 0.2)"
                          padding="6px 12px"
                          margin="0"
                          display="inline-block"
                          borderRadius="20px"
                          canvas={false}
                        >
                          <CraftText
                            text={card.category}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-white"
                            textAlign="center"
                          />
                        </Element>
                      </div>
                    )}

                    {/* Description */}
                    <Element
                      id={`researchCardDescription-${card.id}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={card.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color="text-white"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                        opacity="0.9"
                      />
                    </Element>
                  </Element>
                </Element>
              </div>
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  );
}

ResearchCards.craft = {
  displayName: "Research Cards",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "80px 0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    // Research Cards specific props
    title: "Research",
    subtitle: "The new generation full-stack self-developed model family",
    cards: [
      {
        id: "speech-25",
        title: "Speech",
        subtitle: "2.5",
        description:
          "Enhanced multilingual expressiveness with exceptional voice cloning fidelity",
        backgroundColor: "#ff9500",
        gradientTo: "#ffb347",
        isNew: true,
        category: "Audio Model",
      },
      {
        id: "hailuo-02",
        title: "MiniMax Hailuo O2",
        subtitle: "",
        description:
          "Native 1080p | SOTA Instruction Following | Extreme Physics Mastery",
        backgroundColor: "#6b7280",
        gradientTo: "#9ca3af",
        isNew: true,
        category: "Video Model",
      },
      {
        id: "minimax-m1",
        title: "MiniMax",
        subtitle: "M1",
        description:
          "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
        backgroundColor: "#ef4444",
        gradientTo: "#f87171",
        isNew: true,
        category: "Text Model",
      },
      {
        id: "mcp-server",
        title: "MiniMax",
        subtitle: "MCP Server",
        description:
          "Video, Image, Speech generation and Cloning Tools Now Available for Developers",
        backgroundColor: "#d1d5db",
        gradientTo: "#e5e7eb",
        isNew: false,
        category: "MCP",
      },
    ],
    showNavigation: true,
    cardsPerRow: 4,
    cardHeight: "400px",
    gap: "24px",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
