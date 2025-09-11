import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { useState, useEffect } from "react";

interface MiniMaxHero1Props extends SectionProps {
  // Main content
  brandTitle?: string;
  mainHeading?: string;
  subHeading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // AI Models showcase
  models?: Array<{
    id: string;
    name: string;
    description: string;
    image: string;
    badge?: string;
  }>;

  // Stats
  stats?: Array<{
    id: string;
    number: string;
    label: string;
  }>;

  // Styling
  primaryColor?: string;
  accentColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function MiniMaxHero1({
  brandTitle = "MiniMax",
  mainHeading = "Next-Generation AI",
  subHeading = "Video & Image Generation",
  description = "Experience the future of AI-powered content creation with our cutting-edge models that transform your ideas into stunning visuals and videos.",
  primaryButtonText = "Experience MiniMax",
  secondaryButtonText = "Watch Demo",
  models = [
    {
      id: "video-01",
      name: "Video-01",
      description:
        "High-quality video generation from text prompts with cinematic quality",
      image:
        "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=500&h=400&fit=crop",
      badge: "Latest",
    },
    {
      id: "hailuo",
      name: "Hailuo",
      description:
        "Advanced image synthesis and editing with pixel-perfect precision",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop",
      badge: "Popular",
    },
    {
      id: "music-01",
      name: "Music-01",
      description: "AI-powered music composition with emotional intelligence",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop",
      badge: "New",
    },
  ],
  stats = [
    { id: "users", number: "10M+", label: "Active Users" },
    { id: "generations", number: "500M+", label: "AI Generations" },
    { id: "models", number: "15+", label: "AI Models" },
    { id: "satisfaction", number: "99%", label: "Satisfaction Rate" },
  ],
  primaryColor = "#6366f1",
  accentColor = "#f59e0b",
  gradientFrom = "#6366f1",
  gradientTo = "#8b5cf6",
  ...props
}: MiniMaxHero1Props) {
  const [currentModel, setCurrentModel] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentModel((prev) => (prev + 1) % models.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [models.length]);

  // Set section defaults
  const heroProps = {
    backgroundColor: "#000000",
    padding: "0",
    minHeight: "100vh",
    hasContentWrapper: true,
    contentMaxWidth: "none",
    contentPadding: "px-0 py-0",
    ...props,
  };

  const animationDelay = (index: number) => `${index * 150}ms`;

  return (
    <Section {...heroProps}>
      {/* Clean professional background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-black" />

      {/* Subtle geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Minimal accent elements */}
      <div className="absolute top-20 right-20 w-1 h-1 bg-blue-500 rounded-full opacity-60" />
      <div className="absolute bottom-32 left-16 w-1 h-1 bg-white rounded-full opacity-40" />

      <Element
        id="minimaxHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Layout - Split Screen */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="100%"
          gap="0px"
          autoRows="auto"
        >
          {/* Left Side - Hero Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="80px 60px"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100vh"
            canvas
          >
            {/* Brand Badge - Clean minimal design */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.08)"
              padding="8px 16px"
              margin="0 0 24px 0"
              display="inline-flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="6px"
              border="1px solid rgba(255, 255, 255, 0.12)"
              width="fit-content"
              canvas={false}
            >
              <CraftText
                text={brandTitle}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-medium"
                color="text-gray-300"
                textAlign="text-left"
                margin="0"
                letterSpacing="tracking-wide"
              />
            </Element>

            {/* Main Heading - Clean typography */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainHeading}
                tagName="h1"
                fontSize="text-6xl lg:text-7xl xl:text-8xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-left"
                margin="0"
                lineHeight="leading-[0.9]"
              />
            </Element>

            {/* Sub Heading */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subHeading}
                tagName="h2"
                fontSize="text-xl lg:text-2xl"
                fontWeight="font-normal"
                color="text-gray-400"
                textAlign="text-left"
                margin="0"
                lineHeight="leading-relaxed"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 40px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-base lg:text-lg"
                fontWeight="font-normal"
                color="text-gray-500"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </Element>

            {/* Clean Action Buttons */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-4"
              margin="mb-16"
              wrap="wrap"
            >
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
                  backgroundColor="#000000"
                  textColor="#ffffff"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
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
                <CraftButton
                  text={secondaryButtonText}
                  variant="outline"
                  size="lg"
                  backgroundColor="transparent"
                  textColor="#ffffff"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>

            {/* Clean stats layout */}
            <Element
              is={Grid}
              canvas
              columns={4}
              autoFit={true}
              minColumnWidth="100px"
              gap="24px"
              autoRows="auto"
            >
              {stats.map((stat, index) => (
                <Element
                  key={stat.id}
                  id={`stat-${stat.id}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="flex"
                  flexDirection="column"
                  alignItems="start"
                  justifyContent="center"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 2px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={stat.number}
                      tagName="span"
                      fontSize="text-2xl lg:text-3xl"
                      fontWeight="font-bold"
                      color="text-white"
                      textAlign="text-left"
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
                      text={stat.label}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      margin="0"
                      letterSpacing="tracking-wide"
                    />
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>

          {/* Right Side - Clean AI Models Showcase */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="80px 60px"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100vh"
            canvas
          >
            {/* Simple Featured Model Display */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 32px 0"
              display="block"
              canvas
            >
              <div className="relative">
                {/* Clean Featured Model */}
                <Element
                  id={`featuredModel-${models[currentModel]?.id}`}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="12px"
                  backgroundColor="rgba(255, 255, 255, 0.04)"
                  borderColor="rgba(255, 255, 255, 0.08)"
                  padding="0"
                  margin="0"
                  hoverable={false}
                  clickable={false}
                  overflow="hidden"
                  canvas
                >
                  {/* Model Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="100%"
                    height="320px"
                    canvas
                  >
                    <CraftImage
                      src={models[currentModel]?.image}
                      alt={`${models[currentModel]?.name} AI Model`}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-t-12"
                      margin=""
                      padding=""
                    />

                    {/* Simple Badge */}
                    <div className="absolute top-4 right-4">
                      <div className="px-3 py-1 rounded-md text-xs font-medium text-white bg-black/60 backdrop-blur-sm">
                        {models[currentModel]?.badge}
                      </div>
                    </div>
                  </Element>

                  {/* Model Info */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="24px"
                    margin="0"
                    display="block"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 8px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={models[currentModel]?.name}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-semibold"
                        color="text-white"
                        textAlign="text-left"
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
                        text={models[currentModel]?.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Simple Navigation Dots */}
                <div className="flex justify-center mt-6 gap-2">
                  {models.map((_, index) => (
                    <button
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentModel
                          ? "bg-white"
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}
                      onClick={() => setCurrentModel(index)}
                    />
                  ))}
                </div>
              </div>
            </Element>

            {/* Clean Mini Model Grid */}
            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={false}
              minColumnWidth="100px"
              gap="12px"
              autoRows="auto"
            >
              {models.map((model, index) => (
                <Element
                  key={`mini-${model.id}`}
                  id={`miniModel-${model.id}`}
                  is={Box}
                  backgroundColor={
                    index === currentModel
                      ? "rgba(255, 255, 255, 0.08)"
                      : "rgba(255, 255, 255, 0.02)"
                  }
                  padding="12px"
                  margin="0"
                  display="block"
                  borderRadius="8px"
                  border={
                    index === currentModel
                      ? "1px solid rgba(255, 255, 255, 0.2)"
                      : "1px solid rgba(255, 255, 255, 0.06)"
                  }
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 6px 0"
                    display="block"
                    width="100%"
                    height="40px"
                    canvas={false}
                  >
                    <CraftImage
                      src={model.image}
                      alt={model.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-md"
                      margin=""
                      padding=""
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
                      text={model.name}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-medium"
                      color={
                        index === currentModel ? "text-white" : "text-gray-500"
                      }
                      textAlign="text-center"
                      margin="0"
                    />
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MiniMaxHero1.craft = {
  displayName: "MiniMax Hero 1",
  props: {
    // Section props
    backgroundColor: "#000000",
    padding: "0",
    minHeight: "100vh",
    hasContentWrapper: true,
    contentMaxWidth: "none",
    contentPadding: "px-0 py-0",

    // MiniMax Hero specific props
    brandTitle: "MiniMax",
    mainHeading: "Next-Generation AI",
    subHeading: "Video & Image Generation",
    description:
      "Experience the future of AI-powered content creation with our cutting-edge models that transform your ideas into stunning visuals and videos.",
    primaryButtonText: "Experience MiniMax",
    secondaryButtonText: "Watch Demo",
    models: [
      {
        id: "video-01",
        name: "Video-01",
        description:
          "High-quality video generation from text prompts with cinematic quality",
        image:
          "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=500&h=400&fit=crop",
        badge: "Latest",
      },
      {
        id: "hailuo",
        name: "Hailuo",
        description:
          "Advanced image synthesis and editing with pixel-perfect precision",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=400&fit=crop",
        badge: "Popular",
      },
      {
        id: "music-01",
        name: "Music-01",
        description: "AI-powered music composition with emotional intelligence",
        image:
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=500&h=400&fit=crop",
        badge: "New",
      },
    ],
    stats: [
      { id: "users", number: "10M+", label: "Active Users" },
      { id: "generations", number: "500M+", label: "AI Generations" },
      { id: "models", number: "15+", label: "AI Models" },
      { id: "satisfaction", number: "99%", label: "Satisfaction Rate" },
    ],
    primaryColor: "#6366f1",
    accentColor: "#f59e0b",
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
