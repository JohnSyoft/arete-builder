import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Input } from "@/components/blocks/Basic/Input";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  link: string;
  image?: string;
}

interface SearchModal1Props extends SectionProps {
  // Search modal specific props
  title?: string;
  placeholder?: string;
  buttonText?: string;
  results?: SearchResult[];
  // Settings
  showTitle?: boolean;
  showButton?: boolean;
  showResults?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  isOpen?: boolean;
}

export function SearchModal1({
  title = "What are you looking for?",
  placeholder = "Enter your keywords...",
  buttonText = "Search",
  results = [
    {
      id: "result-1",
      title: "Luxury Hotel Rooms",
      description: "Discover our premium accommodation options",
      category: "Rooms",
      link: "/rooms",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=100&h=100&fit=crop"
    },
    {
      id: "result-2",
      title: "Fine Dining Restaurant",
      description: "Experience our world-class culinary offerings",
      category: "Dining",
      link: "/dining",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=100&h=100&fit=crop"
    },
    {
      id: "result-3",
      title: "Spa & Wellness",
      description: "Relax and rejuvenate with our spa services",
      category: "Services",
      link: "/spa",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=100&h=100&fit=crop"
    }
  ],
  showTitle = true,
  showButton = true,
  showResults = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#d97706",
  isOpen = false,
  ...props
}: SearchModal1Props) {
  // Set section defaults for search modal
  const searchModalProps = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "py-0 px-0",
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...searchModalProps}>
      <Element
        id="searchModalContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        position="fixed"
        top="top-0"
        left="left-0"
        right="right-0"
        bottom="bottom-0"
        zIndex="z-50"
        className={`${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-300`}
        canvas
      >
        {/* Backdrop */}
        <Element
          is={Box}
          backgroundColor="bg-black/80"
          padding="0"
          margin=""
          display="block"
          position="absolute"
          top="top-0"
          left="left-0"
          right="right-0"
          bottom="bottom-0"
          canvas={false}
        />

        {/* Modal Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          position="relative"
          width="w-full"
          height="h-full"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-8"
            margin="h-full px-8 py-16"
          >
            {/* Search Form */}
            <Element
              is={Card}
              variant="flat"
              shadow="2xl"
              borderRadius="rounded-2xl"
              backgroundColor={backgroundColor}
              borderColor=""
              padding="p-8 sm:p-12"
              margin=""
              hoverable={false}
              clickable={false}
              overflow="visible"
              border={false}
              className="w-full max-w-2xl"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="center"
                gap="gap-6"
                margin=""
              >
                {/* Title */}
                {showTitle && (
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
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-semibold"
                      color={textColor}
                      textAlign="text-center"
                      lineHeight="leading-tight"
                    />
                  </Element>
                )}

                {/* Search Input */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-full"
                      canvas={false}
                    >
                      <Input
                        placeholder={placeholder}
                        type="text"
                        size="lg"
                        backgroundColor="bg-gray-50"
                        textColor={textColor}
                        borderColor="border-gray-200"
                        borderRadius="rounded-xl"
                        padding="px-6 py-4"
                        width="w-full"
                        className="focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                      />
                    </Element>

                    {showButton && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text={buttonText}
                          size="lg"
                          backgroundColor={accentColor}
                          textColor="#ffffff"
                          borderRadius="rounded-xl"
                          padding="px-8 py-4"
                          width="w-auto"
                          className="hover:scale-105 transition-all duration-300"
                        />
                      </Element>
                    )}
                  </Element>
                </Element>

                {/* Search Results */}
                {showResults && results.length > 0 && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="stretch"
                      gap="gap-3"
                      margin=""
                    >
                      {results.map((result) => (
                        <Element
                          key={result.id}
                          is={Card}
                          variant="flat"
                          shadow="sm"
                          borderRadius="rounded-lg"
                          backgroundColor="bg-gray-50"
                          borderColor=""
                          padding="p-4"
                          margin=""
                          hoverable={true}
                          clickable={true}
                          overflow="visible"
                          border={false}
                          className="group hover:bg-gray-100 transition-all duration-200"
                          canvas
                        >
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="start"
                            alignItems="center"
                            gap="gap-4"
                            margin=""
                          >
                            {/* Result Image */}
                            {result.image && (
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-12"
                                height="h-12"
                                canvas={false}
                              >
                                <CraftImage
                                  src={result.image}
                                  alt={result.title}
                                  width="w-full"
                                  height="h-full"
                                  objectFit="object-cover"
                                  borderRadius="rounded-lg"
                                  margin=""
                                  padding=""
                                />
                              </Element>
                            )}

                            {/* Result Content */}
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
                                alignItems="start"
                                gap="gap-1"
                                margin=""
                              >
                                {/* Result Title */}
                                <Element
                                  is={Box}
                                  backgroundColor="transparent"
                                  padding="0"
                                  margin=""
                                  display="block"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={result.title}
                                    tagName="h4"
                                    fontSize="text-base"
                                    fontWeight="font-semibold"
                                    color={textColor}
                                    textAlign="text-left"
                                    className="group-hover:text-amber-600 transition-colors duration-200"
                                  />
                                </Element>

                                {/* Result Description */}
                                <Element
                                  is={Box}
                                  backgroundColor="transparent"
                                  padding="0"
                                  margin=""
                                  display="block"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={result.description}
                                    tagName="p"
                                    fontSize="text-sm"
                                    fontWeight="font-normal"
                                    color="text-gray-600"
                                    textAlign="text-left"
                                  />
                                </Element>

                                {/* Result Category */}
                                <Element
                                  is={Box}
                                  backgroundColor="transparent"
                                  padding="0"
                                  margin=""
                                  display="block"
                                  canvas={false}
                                >
                                  <Element
                                    is={Box}
                                    backgroundColor="bg-amber-100"
                                    padding="px-2 py-1"
                                    margin=""
                                    display="block"
                                    borderRadius="rounded-full"
                                    canvas={false}
                                  >
                                    <CraftText
                                      text={result.category}
                                      tagName="span"
                                      fontSize="text-xs"
                                      fontWeight="font-medium"
                                      color="text-amber-700"
                                      textAlign="text-center"
                                      className="uppercase tracking-wider"
                                    />
                                  </Element>
                                </Element>
                              </Element>
                            </Element>
                          </Element>
                        </Element>
                      ))}
                    </Element>
                  </Element>
                )}
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

SearchModal1.craft = {
  displayName: "Search Modal 1",
  props: {
    // Section props
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: "py-0 px-0",
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Search modal specific props
    title: "What are you looking for?",
    placeholder: "Enter your keywords...",
    buttonText: "Search",
    showTitle: true,
    showButton: true,
    showResults: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#d97706",
    isOpen: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
