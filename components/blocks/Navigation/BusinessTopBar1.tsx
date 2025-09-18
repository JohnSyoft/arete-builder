import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TopBarInfo {
  id: string;
  icon: string;
  text: string;
  link?: string;
  type: "text" | "email" | "phone" | "address";
}

interface BusinessTopBar1Props extends SectionProps {
  // Top bar specific props
  announcement?: string;
  leftInfo?: TopBarInfo[];
  rightInfo?: TopBarInfo[];
  // Settings
  showAnnouncement?: boolean;
  showLeftInfo?: boolean;
  showRightInfo?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  height?: string;
}

export function BusinessTopBar1({
  announcement = "Subscribe and receive 20% bonus discount.",
  leftInfo = [
    {
      id: "announcement",
      icon: "👋",
      text: "Subscribe and receive 20% bonus discount.",
      type: "text"
    }
  ],
  rightInfo = [
    {
      id: "email",
      icon: "📧",
      text: "info@domin.com",
      link: "mailto:info@domin.com",
      type: "email"
    },
    {
      id: "address",
      icon: "📍",
      text: "Broadway, 24th Floor, San Francisco",
      type: "address"
    }
  ],
  showAnnouncement = true,
  showLeftInfo = true,
  showRightInfo = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#d97706",
  height = "h-12",
  ...props
}: BusinessTopBar1Props) {
  // Set section defaults for top bar
  const topBarProps = {
    backgroundColor,
    padding: "py-0 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...topBarProps}>
      <Element
        id="topBarContent"
        is={Box}
        backgroundColor={backgroundColor}
        padding="py-3 px-6"
        margin=""
        display="block"
        height={height}
        borderColor="border-gray-200"
        className="border-b"
        canvas
      >
        <Element
          is={Flex}
          canvas
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          gap="gap-8"
          margin=""
        >
          {/* Left Side - Announcement */}
          {showLeftInfo && (
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
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-4"
                margin=""
              >
                {leftInfo.map((info) => (
                  <Element
                    key={info.id}
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
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-2"
                      margin=""
                    >
                      <CraftText
                        text={info.icon}
                        tagName="span"
                        fontSize="text-sm"
                        textAlign="text-center"
                      />
                      
                      <CraftText
                        text={info.text}
                        tagName={info.link ? "a" : "span"}
                        href={info.link}
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color={textColor}
                        textAlign="text-left"
                        className={info.link ? "hover:text-amber-600 transition-colors duration-200" : ""}
                      />
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          )}

          {/* Right Side - Contact Info */}
          {showRightInfo && (
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
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                gap="gap-6"
                margin=""
                wrap="wrap"
              >
                {rightInfo.map((info) => (
                  <Element
                    key={info.id}
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
                      flexDirection="row"
                      justifyContent="end"
                      alignItems="center"
                      gap="gap-2"
                      margin=""
                    >
                      <CraftText
                        text={info.icon}
                        tagName="span"
                        fontSize="text-sm"
                        textAlign="text-center"
                      />
                      
                      <CraftText
                        text={info.text}
                        tagName={info.link ? "a" : "span"}
                        href={info.link}
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color={textColor}
                        textAlign="text-right"
                        className={info.link ? "hover:text-amber-600 transition-colors duration-200" : ""}
                      />
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          )}
        </Element>
      </Element>
    </Section>
  );
}

BusinessTopBar1.craft = {
  displayName: "Business Top Bar 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-0 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Top bar specific props
    announcement: "Subscribe and receive 20% bonus discount.",
    showAnnouncement: true,
    showLeftInfo: true,
    showRightInfo: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#d97706",
    height: "h-12",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
