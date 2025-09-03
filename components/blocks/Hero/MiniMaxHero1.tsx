import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

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
  primaryButtonText = "Try MiniMax Now",
  secondaryButtonText = "View Gallery",
  models = [
    {
      id: "video-01",
      name: "Video-01",
      description: "High-quality video generation from text prompts",
      image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=400&h=300&fit=crop",
      badge: "Latest"
    },
    {
      id: "hailuo",
      name: "Hailuo",
      description: "Advanced image synthesis and editing",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      badge: "Popular"
    },
    {
      id: "music-01",
      name: "Music-01", 
      description: "AI-powered music composition and generation",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      badge: "New"
    }
  ],
  stats = [
    { id: "users", number: "10M+", label: "Active Users" },
    { id: "generations", number: "500M+", label: "AI Generations" },
    { id: "models", number: "15+", label: "AI Models" },
    { id: "satisfaction", number: "99%", label: "Satisfaction Rate" }
  ],
  primaryColor = "#6366f1",
  accentColor = "#f59e0b",
  gradientFrom = "#6366f1",
  gradientTo = "#8b5cf6",
  ...props
}: MiniMaxHero1Props) {
  
  // Set section defaults
  const heroProps = {
    backgroundColor: "#0f0f23",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...heroProps}>
      {/* Background gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br opacity-80"
        style={{
          background: `linear-gradient(135deg, ${gradientFrom}20, ${gradientTo}20, #0f0f2320)`
        }}
      />
      
      {/* Floating particles/elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-70" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-pulse opacity-50" />
      </div>

      <Element
        id="minimaxHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Content */}
        <Element
          is={Grid}
          canvas
          columns={1}
          autoFit={false}
          minColumnWidth="100%"
          gap="48px"
          autoRows="auto"
        >
          {/* Header Section */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Brand Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="flex"
              justifyContent="center"
              canvas={false}
            >
              <CraftText
                text={brandTitle}
                tagName="div"
                fontSize="text-xl sm:text-2xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                letterSpacing="tracking-[0.2em]"
                margin="0"
              />
            </Element>

            {/* Main Heading */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 8px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainHeading}
                tagName="h1"
                fontSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                fontWeight="font-black"
                color="text-white"
                textAlign="text-center"
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
                fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
                fontWeight="font-light"
                color="text-gray-300"
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
              margin="0 0 40px 0"
              display="flex"
              justifyContent="center"
              canvas={false}
            >
              <div className="max-w-3xl">
                <CraftText
                  text={description}
                  tagName="p"
                  fontSize="text-lg sm:text-xl"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </div>
            </Element>

            {/* Action Buttons */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-6"
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
                  backgroundColor={primaryColor}
                  textColor="#ffffff"
                  borderRadius="12px"
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
                  borderRadius="12px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>

          {/* AI Models Carousel */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="32px 0"
            margin="0"
            display="block"
            canvas
          >
            {/* Models Grid */}
            <Element
              is={Grid}
              canvas
              columns={3}
              autoFit={true}
              minColumnWidth="320px"
              gap="24px"
              autoRows="auto"
            >
              {models.map((model, index) => (
                <Element
                  key={model.id}
                  id={`modelCard-${model.id}`}
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="20px"
                  backgroundColor="rgba(255, 255, 255, 0.05)"
                  borderColor="rgba(255, 255, 255, 0.1)"
                  padding="0"
                  margin="0"
                  hoverable={true}
                  clickable={false}
                  overflow="hidden"
                  canvas
                >
                  {/* Model Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    width="100%"
                    height="200px"
                    canvas
                  >
                    <CraftImage
                      src={model.image}
                      alt={`${model.name} AI Model`}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-t-20"
                      margin=""
                      padding=""
                    />
                    
                    {/* Badge Overlay */}
                    {model.badge && (
                      <div className="absolute top-3 right-3">
                        <div 
                          className="px-3 py-1 rounded-full text-xs font-semibold text-white"
                          style={{ backgroundColor: accentColor }}
                        >
                          {model.badge}
                        </div>
                      </div>
                    )}
                  </Element>

                  {/* Model Content */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="20px"
                    margin="0"
                    display="block"
                    canvas
                  >
                    {/* Model Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 8px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={model.name}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>

                    {/* Model Description */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={model.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-400"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>
              ))}
            </Element>
          </Element>

          {/* Stats Section */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="32px 0 0 0"
            margin="0"
            display="block"
            canvas
          >
            <Element
              is={Grid}
              canvas
              columns={4}
              autoFit={true}
              minColumnWidth="200px"
              gap="32px"
              autoRows="auto"
            >
              {stats.map((stat) => (
                <Element
                  key={stat.id}
                  id={`stat-${stat.id}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="24px"
                  margin="0"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  borderRadius="16px"
                  border="1px solid rgba(255, 255, 255, 0.1)"
                  canvas
                >
                  {/* Stat Number */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 8px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={stat.number}
                      tagName="div"
                      fontSize="text-3xl sm:text-4xl"
                      fontWeight="font-black"
                      color="text-white"
                      textAlign="text-center"
                      margin="0"
                    />
                  </Element>

                  {/* Stat Label */}
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
                      tagName="div"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="text-gray-400"
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
    backgroundColor: "#0f0f23",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // MiniMax Hero specific props
    brandTitle: "MiniMax",
    mainHeading: "Next-Generation AI",
    subHeading: "Video & Image Generation",
    description: "Experience the future of AI-powered content creation with our cutting-edge models that transform your ideas into stunning visuals and videos.",
    primaryButtonText: "Try MiniMax Now",
    secondaryButtonText: "View Gallery",
    models: [
      {
        id: "video-01",
        name: "Video-01",
        description: "High-quality video generation from text prompts",
        image: "https://images.unsplash.com/photo-1614851099175-e5b30eb6f696?w=400&h=300&fit=crop",
        badge: "Latest"
      },
      {
        id: "hailuo",
        name: "Hailuo",
        description: "Advanced image synthesis and editing",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
        badge: "Popular"
      },
      {
        id: "music-01",
        name: "Music-01", 
        description: "AI-powered music composition and generation",
        image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
        badge: "New"
      }
    ],
    stats: [
      { id: "users", number: "10M+", label: "Active Users" },
      { id: "generations", number: "500M+", label: "AI Generations" },
      { id: "models", number: "15+", label: "AI Models" },
      { id: "satisfaction", number: "99%", label: "Satisfaction Rate" }
    ],
    primaryColor: "#6366f1",
    accentColor: "#f59e0b",
    gradientFrom: "#6366f1",
    gradientTo: "#8b5cf6",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};