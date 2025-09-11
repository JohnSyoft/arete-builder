import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface EnvironmentalHero1Props extends SectionProps {
  // Content
  mainTitle?: string;
  description?: string;

  // Images
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;

  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  shapeColor?: string;
}

export function EnvironmentalHero1({
  mainTitle = "Protect the planet for future generations",
  description = "Every step we take towards sustainability is a commitment to preserving nature's beauty and resources, for today and tomorrow.",
  image1 = "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
  image2 = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=600&fit=crop&q=80",
  image3 = "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=300&fit=crop&q=80",
  image4 = "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&q=80",
  backgroundColor = "#F5F5DC",
  textColor = "#2D4A3A",
  shapeColor = "#E8F5E8",
  ...props
}: EnvironmentalHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const heroProps = {
    backgroundColor: backgroundColor,
    padding: "56px 0",
    minHeight: "800px",
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
        {/* Wavy Background Shape */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z' fill='%23${shapeColor.replace(
              "#",
              ""
            )}'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />

        {/* Main Content Container */}
        <Element
          id="environmentalHeroContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* CSS Grid Layout using custom div */}
          <div
            className="relative z-10"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "repeat(13, 40px)",
              gap: "24px",
              minHeight: "600px",
            }}
          >
            {/* Title and Text Section */}
            <div
              style={{ gridArea: "1 / 8 / 10 / 13" }}
              className="flex flex-col justify-center p-6 z-10"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
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
                  lineHeight="leading-tight"
                  margin="0"
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
            </div>

            {/* Image 1 - Top Left */}
            <div style={{ gridArea: "1 / 1 / 5 / 5" }} className="z-20">
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="100%"
                canvas
              >
                <CraftImage
                  src={image1}
                  alt="Forest landscape with misty mountains"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </div>

            {/* Image 2 - Center Tall */}
            <div
              style={{ gridArea: "1 / 5 / 10 / 8" }}
              className="z-30 hidden lg:block"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="100%"
                canvas
              >
                <CraftImage
                  src={image2}
                  alt="Lush green tropical forest canopy"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </div>

            {/* Image 3 - Bottom Left */}
            <div
              style={{ gridArea: "5 / 1 / 14 / 5" }}
              className="z-40 hidden lg:block"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="100%"
                canvas
              >
                <CraftImage
                  src={image4}
                  alt="Mountain landscape with pristine nature"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </div>

            {/* Image 4 - Bottom Wide */}
            <div
              style={{ gridArea: "10 / 5 / 14 / 13" }}
              className="z-50 hidden lg:block"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="100%"
                canvas
              >
                <CraftImage
                  src={image3}
                  alt="Wind energy and renewable power"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </div>
          </div>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Environmental Hero
        </div>
      )}
    </div>
  );
}

EnvironmentalHero1.craft = {
  displayName: "Environmental Hero 1",
  props: {
    // Section props
    padding: "56px 0",
    minHeight: "800px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",

    // Environmental Hero specific props
    mainTitle: "Protect the planet for future generations",
    description:
      "Every step we take towards sustainability is a commitment to preserving nature's beauty and resources, for today and tomorrow.",
    image1:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&q=80",
    image2:
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=600&fit=crop&q=80",
    image3:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=300&fit=crop&q=80",
    image4:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&q=80",
    backgroundColor: "#F5F5DC",
    textColor: "#2D4A3A",
    shapeColor: "#E8F5E8",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
