import { Element, useNode, useEditor } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Box } from "@/components/blocks/Basic/Box";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

interface HeroCarouselSimpleProps extends SectionProps {
  // Hero carousel specific props
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function HeroCarouselSimple({
  title = "MiniMax M1",
  description = "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
  primaryButtonText = "Learn more",
  secondaryButtonText = "Try Now",
  gradientFrom = "#ff6b6b",
  gradientTo = "#ee5a24",
  ...props
}: HeroCarouselSimpleProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { actions } = useEditor();
  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    openPanel(
      "herocarouselsimple",
      {
        title,
        description,
        primaryButtonText,
        secondaryButtonText,
        gradientFrom,
        gradientTo,
        ...props,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: HeroCarouselSimpleProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };
  // Set Hero-specific defaults
  const heroProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "100vh",
    overflow: "hidden",
    className: "relative",
    hasContentWrapper: false,
    ...props,
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Section {...heroProps}>
        <Element
          id="heroCarouselSimpleContent"
          is="div"
          className="relative w-full h-screen overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
          }}
          canvas
        >
          {/* Decorative Background Pattern */}
          <Element
            is="div"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><circle cx='200' cy='150' r='80' fill='rgba(255,255,255,0.3)'/><circle cx='1000' cy='200' r='120' fill='rgba(255,255,255,0.2)'/><circle cx='800' cy='600' r='100' fill='rgba(255,255,255,0.15)'/><path d='M100,300 Q200,200 300,300 T500,300' stroke='rgba(255,255,255,0.4)' stroke-width='2' fill='none'/><path d='M700,100 Q800,50 900,100 T1100,100' stroke='rgba(255,255,255,0.3)' stroke-width='3' fill='none'/><rect x='50' y='50' width='200' height='100' rx='10' fill='rgba(255,255,255,0.1)'/><polygon points='900,500 950,450 1000,500 950,550' fill='rgba(255,255,255,0.2)'/></svg>")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            canvas={false}
          />

          {/* Content Container */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="64px 32px"
            margin="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100vh"
            canvas
          >
            {/* Main Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              width="100%"
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h1"
                fontSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                margin="0"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 48px 0"
              display="block"
              width="100%"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-lg sm:text-xl md:text-2xl"
                fontWeight="font-normal"
                color="text-white"
                textAlign="text-center"
                margin="0"
                lineHeight="leading-relaxed"
              />
            </Element>

            {/* CTA Buttons Container */}
            <Element
              is="div"
              className="flex flex-row items-center justify-center gap-6 w-full flex-wrap max-w-lg"
              canvas
            >
              {/* Primary Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={primaryButtonText}
                  size="lg"
                  backgroundColor="#ffffff"
                  textColor="#000000"
                  borderRadius="50px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>

              {/* Secondary Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={secondaryButtonText}
                  variant="outline"
                  size="lg"
                  backgroundColor="transparent"
                  textColor="#ffffff"
                  borderRadius="50px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>

          {/* Navigation Dots - Fixed positions */}
          <Element
            is="div"
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center gap-3 z-20"
            canvas
          >
            <Element
              is="div"
              className="w-3 h-3 bg-white rounded-full cursor-pointer"
              canvas={false}
            />
            <Element
              is="div"
              className="w-3 h-3 bg-white bg-opacity-40 rounded-full cursor-pointer hover:bg-white transition-all duration-300"
              canvas={false}
            />
            <Element
              is="div"
              className="w-3 h-3 bg-white bg-opacity-40 rounded-full cursor-pointer hover:bg-white transition-all duration-300"
              canvas={false}
            />
          </Element>

          {/* Navigation Arrows */}
          <Element
            is="div"
            className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20"
            canvas={false}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Element>

          <Element
            is="div"
            className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20"
            canvas={false}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Element>
        </Element>
      </Section>

      {/* Floating Toolbar */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Hero Carousel
        </div>
      )}
    </div>
  );
}

HeroCarouselSimple.craft = {
  displayName: "Hero Carousel Simple",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "100vh",
    overflow: "hidden",
    className: "relative",
    hasContentWrapper: false,
    // Hero carousel specific props
    title: "MiniMax M1",
    description:
      "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
    primaryButtonText: "Learn more",
    secondaryButtonText: "Try Now",
    gradientFrom: "#ff6b6b",
    gradientTo: "#ee5a24",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
