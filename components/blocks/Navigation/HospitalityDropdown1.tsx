import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface DropdownItem {
  id: string;
  title: string;
  description: string;
  price?: string;
  link: string;
  icon?: string;
}

interface HospitalityDropdown1Props extends SectionProps {
  // Dropdown specific props
  triggerText?: string;
  triggerIcon?: string;
  items?: DropdownItem[];
  // Settings
  showIcons?: boolean;
  showPrices?: boolean;
  showDescriptions?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function HospitalityDropdown1({
  triggerText = "Rooms",
  triggerIcon = "▼",
  items = [
    {
      id: "item-1",
      title: "Superior room",
      description: "Comfortable and elegant",
      price: "Just starting from $199",
      link: "/rooms/superior",
      icon: "🏨"
    },
    {
      id: "item-2",
      title: "Deluxe room",
      description: "Luxury amenities included",
      price: "Just starting from $249",
      link: "/rooms/deluxe",
      icon: "✨"
    },
    {
      id: "item-3",
      title: "Signature room",
      description: "Premium experience",
      price: "Just starting from $300",
      link: "/rooms/signature",
      icon: "👑"
    },
    {
      id: "item-4",
      title: "Luxury suite room",
      description: "Ultimate luxury stay",
      price: "Just starting from $350",
      link: "/rooms/suite",
      icon: "🏆"
    }
  ],
  showIcons = true,
  showPrices = true,
  showDescriptions = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#d97706",
  ...props
}: HospitalityDropdown1Props) {
  // Set section defaults for dropdown
  const dropdownProps = {
    backgroundColor: "transparent",
    padding: "py-0 px-0",
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...dropdownProps}>
      <Element
        id="dropdownContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        position="relative"
        canvas
      >
        {/* Dropdown Trigger */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          position="relative"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="gap-2"
            margin=""
          >
            <CraftText
              text={triggerText}
              tagName="a"
              href="#"
              fontSize="text-base"
              fontWeight="font-semibold"
              color={textColor}
              textAlign="text-left"
              className="hover:text-amber-600 transition-colors duration-200"
            />
            
            <CraftText
              text={triggerIcon}
              tagName="span"
              fontSize="text-xs"
              color={textColor}
              textAlign="text-center"
              className="ml-1"
            />
          </Element>
        </Element>

        {/* Dropdown Menu */}
        <Element
          is={Box}
          backgroundColor={backgroundColor}
          padding="py-4 px-0"
          margin=""
          display="block"
          position="absolute"
          top="top-full"
          left="left-0"
          borderRadius="rounded-xl"
          shadow="2xl"
          className="opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-80 z-50"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="start"
            alignItems="stretch"
            gap="gap-0"
            margin=""
          >
            {items.map((item, index) => (
              <Element
                key={item.id}
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="rounded-none"
                backgroundColor="bg-transparent"
                borderColor=""
                padding="px-6 py-4"
                margin=""
                hoverable={true}
                clickable={true}
                overflow="visible"
                border={index < items.length - 1 ? true : false}
                className="group hover:bg-gray-50 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl"
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
                  {/* Icon */}
                  {showIcons && item.icon && (
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-2"
                      margin=""
                      display="block"
                      width="w-8"
                      height="h-8"
                      borderRadius="rounded-full"
                      className="group-hover:bg-amber-200 transition-colors duration-200"
                      canvas={false}
                    >
                      <CraftText
                        text={item.icon}
                        tagName="span"
                        fontSize="text-sm"
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
                      alignItems="start"
                      gap="gap-1"
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
                          text={item.title}
                          tagName="span"
                          fontSize="text-base"
                          fontWeight="font-semibold"
                          color={textColor}
                          textAlign="text-left"
                          className="group-hover:text-amber-600 transition-colors duration-200"
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
                            text={item.description}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                          />
                        </Element>
                      )}

                      {/* Price */}
                      {showPrices && item.price && (
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={item.price}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color={accentColor}
                            textAlign="text-left"
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
      </Element>
    </Section>
  );
}

HospitalityDropdown1.craft = {
  displayName: "Hospitality Dropdown 1",
  props: {
    // Section props
    backgroundColor: "transparent",
    padding: "py-0 px-0",
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Dropdown specific props
    triggerText: "Rooms",
    triggerIcon: "▼",
    showIcons: true,
    showPrices: true,
    showDescriptions: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#d97706",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
