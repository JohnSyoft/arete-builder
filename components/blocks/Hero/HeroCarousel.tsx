import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Carousel } from "@/components/blocks/Basic/Carousel";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Box } from "@/components/blocks/Basic/Box";

interface HeroCarouselProps extends SectionProps {
  // Hero carousel specific props
  slides?: Array<{
    id: string;
    title: string;
    description: string;
    primaryButtonText: string;
    secondaryButtonText: string;
    gradientFrom: string;
    gradientTo: string;
  }>;
}

export function HeroCarousel({
  slides = [
    {
      id: "slide1",
      title: "MiniMax M1",
      description:
        "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
      primaryButtonText: "Learn more",
      secondaryButtonText: "Try Now",
      gradientFrom: "#ff6b6b",
      gradientTo: "#ee5a24",
    },
    {
      id: "slide2",
      title: "MiniMax Speech 2.5",
      description:
        "Enhanced multilingual expressiveness with exceptional voice cloning fidelity.",
      primaryButtonText: "Learn more",
      secondaryButtonText: "Try Now",
      gradientFrom: "#ffa726",
      gradientTo: "#ff9800",
    },
    {
      id: "slide3",
      title: "MiniMax Video 01",
      description:
        "Revolutionary video generation with unprecedented quality and control.",
      primaryButtonText: "Learn more",
      secondaryButtonText: "Try Now",
      gradientFrom: "#42a5f5",
      gradientTo: "#1976d2",
    },
  ],
  ...props
}: HeroCarouselProps) {
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

  // Transform slides for Carousel component
  const carouselSlides = slides.map((slide) => ({
    id: slide.id,
    content: slide.title,
    title: slide.title,
    description: slide.description,
    image: "",
  }));

  return (
    <Section {...heroProps}>
      <Element
        id="heroCarouselContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        width="100%"
        height="100vh"
        canvas
      >
        {/* Custom Carousel for Hero */}
        <Element
          is={Carousel}
          variant="content"
          slides={carouselSlides}
          autoplay={true}
          autoplayDelay={5000}
          infinite={true}
          showDots={true}
          showArrows={true}
          showThumbnails={false}
          pauseOnHover={true}
          transition="slide"
          transitionDuration={500}
          slidesToShow={1}
          slidesToScroll={1}
          height="100vh"
          backgroundColor="transparent"
          borderRadius="0px"
          margin="0"
          padding="0"
          dotColor="#ffffff40"
          activeDotColor="#ffffff"
          arrowColor="#ffffff"
          arrowBackgroundColor="rgba(255, 255, 255, 0.2)"
          canvas
        />

        {/* Slide Content Overlay */}
        <Element is="div" className="absolute inset-0 z-10" canvas>
          {slides.map((slide, index) => (
            <Element
              key={slide.id}
              is="div"
              className={`absolute inset-0 flex items-center justify-center px-8 py-16 ${
                index === 0 ? "block" : "hidden"
              }`}
              style={{
                background: `linear-gradient(135deg, ${slide.gradientFrom}, ${slide.gradientTo})`,
              }}
              canvas
            >
              {/* Decorative Background Pattern */}
              <Element
                is="div"
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 800'><circle cx='200' cy='150' r='80' fill='rgba(255,255,255,0.3)'/><circle cx='1000' cy='200' r='120' fill='rgba(255,255,255,0.2)'/><circle cx='800' cy='600' r='100' fill='rgba(255,255,255,0.15)'/><path d='M100,300 Q200,200 300,300 T500,300' stroke='rgba(255,255,255,0.4)' stroke-width='2' fill='none'/><path d='M700,100 Q800,50 900,100 T1100,100' stroke='rgba(255,255,255,0.3)' stroke-width='3' fill='none'/></svg>")`,
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
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                width="100%"
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
                    text={slide.title}
                    tagName="h1"
                    fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                    margin="0"
                    lineHeight="leading-tight"
                    letterSpacing="tracking-tight"
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
                    text={slide.description}
                    tagName="p"
                    fontSize="text-lg sm:text-xl md:text-2xl"
                    fontWeight="font-normal"
                    color="text-white"
                    textAlign="text-center"
                    margin="0"
                    lineHeight="leading-relaxed"
                    opacity="0.9"
                  />
                </Element>

                {/* CTA Buttons Container */}
                <Element
                  is="div"
                  className="flex flex-row items-center justify-center gap-6 w-full flex-wrap"
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
                      text={slide.primaryButtonText}
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
                      text={slide.secondaryButtonText}
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
            </Element>
          ))}
        </Element>

        {/* Navigation Dots - Positioned at bottom */}
        <Element
          is="div"
          className="absolute bottom-10 left-0 right-0 flex items-center justify-center gap-3 z-20"
          canvas
        >
          {slides.map((_, index) => (
            <Element
              key={`dot-${index}`}
              is="div"
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:bg-white ${
                index === 0 ? "bg-white" : "bg-white bg-opacity-40"
              }`}
              canvas={false}
            />
          ))}
        </Element>

        {/* Navigation Arrows */}
        <Element
          is="div"
          className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20"
          canvas={false}
        >
          {/* Left Arrow SVG */}
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
          {/* Right Arrow SVG */}
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
  );
}

HeroCarousel.craft = {
  displayName: "Hero Carousel",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "100vh",
    overflow: "hidden",
    className: "relative",
    hasContentWrapper: false,
    // Hero carousel specific props
    slides: [
      {
        id: "slide1",
        title: "MiniMax M1",
        description:
          "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
        primaryButtonText: "Learn more",
        secondaryButtonText: "Try Now",
        gradientFrom: "#ff6b6b",
        gradientTo: "#ee5a24",
      },
      {
        id: "slide2",
        title: "MiniMax Speech 2.5",
        description:
          "Enhanced multilingual expressiveness with exceptional voice cloning fidelity.",
        primaryButtonText: "Learn more",
        secondaryButtonText: "Try Now",
        gradientFrom: "#ffa726",
        gradientTo: "#ff9800",
      },
      {
        id: "slide3",
        title: "MiniMax Video 01",
        description:
          "Revolutionary video generation with unprecedented quality and control.",
        primaryButtonText: "Learn more",
        secondaryButtonText: "Try Now",
        gradientFrom: "#42a5f5",
        gradientTo: "#1976d2",
      },
    ],
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
