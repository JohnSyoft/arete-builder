import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface SimpleHeaderProps extends SectionProps {
  // Logo
  logoSrc?: string;
  logoAlt?: string;

  // Navigation
  navigationItems?: Array<{
    id: string;
    label: string;
    href: string;
  }>;

  // CTA Button
  ctaText?: string;

  // Styling
  headerHeight?: string;
}

export function SimpleHeader({
  logoSrc = "https://via.placeholder.com/150x50?text=LOGO",
  logoAlt = "Company Logo",
  navigationItems = [
    { id: "1", label: "Home", href: "/" },
    { id: "2", label: "About", href: "/about" },
    { id: "3", label: "Services", href: "/services" },
    { id: "4", label: "Contact", href: "/contact" },
  ],
  ctaText = "Get Started",
  headerHeight = "80px",
  ...props
}: SimpleHeaderProps) {
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

  const [editingNavigation, setEditingNavigation] = useState(false);

  const addNavigationItem = () => {
    setProp((props: SimpleHeaderProps) => {
      const newItem = {
        id: Date.now().toString(),
        label: "New Item",
        href: "/new-item",
      };
      props.navigationItems = [...(props.navigationItems || []), newItem];
    });
  };

  const removeNavigationItem = (itemId: string) => {
    setProp((props: SimpleHeaderProps) => {
      props.navigationItems =
        props.navigationItems?.filter((item) => item.id !== itemId) || [];
    });
  };

  const updateNavigationItem = (
    itemId: string,
    updates: Partial<(typeof navigationItems)[0]>
  ) => {
    setProp((props: SimpleHeaderProps) => {
      props.navigationItems =
        props.navigationItems?.map((item) =>
          item.id === itemId ? { ...item, ...updates } : item
        ) || [];
    });
  };

  // Set header defaults
  const headerProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: headerHeight,
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    borderBottom: "1px solid #e5e7eb",
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
      <Section {...headerProps}>
        <Element
          id="simpleHeaderContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin="0"
            wrap="nowrap"
          >
            {/* Logo Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              alignItems="center"
              canvas
            >
              <CraftImage
                src={logoSrc}
                alt={logoAlt}
                width="w-32"
                height="h-12"
                objectFit="object-contain"
                borderRadius=""
                margin=""
                padding=""
              />
            </Element>

            {/* Navigation Section */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-8"
              margin="0"
              wrap="nowrap"
            >
              {navigationItems?.map((item) => (
                <Element
                  key={item.id}
                  is={Box}
                  backgroundColor="transparent"
                  padding="8px 12px"
                  margin="0"
                  display="flex"
                  alignItems="center"
                  canvas
                >
                  {editingNavigation ? (
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          updateNavigationItem(item.id, {
                            label: e.target.value,
                          })
                        }
                        className="text-sm border rounded px-2 py-1"
                        onBlur={() => setEditingNavigation(false)}
                        autoFocus
                      />
                      <button
                        onClick={() => removeNavigationItem(item.id)}
                        className="text-red-500 hover:text-red-700 text-xs"
                      >
                        ×
                      </button>
                    </div>
                  ) : (
                    <CraftText
                      text={item.label}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color="text-gray-700"
                      textAlign="text-center"
                    />
                  )}
                </Element>
              ))}
            </Element>

            {/* CTA Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              alignItems="center"
              canvas
            >
              <CraftButton
                text={ctaText}
                variant="default"
                size="default"
                backgroundColor="#3b82f6"
                textColor="#ffffff"
                borderRadius="6px"
                padding="px-6 py-2"
                width="w-auto"
              />
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Header Controls */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 flex gap-2 z-50">
          <button
            onClick={() => setEditingNavigation(!editingNavigation)}
            className="bg-green-500 text-white text-xs px-2 py-1 rounded hover:bg-green-600"
          >
            {editingNavigation ? "Done" : "Edit Nav"}
          </button>
          <button
            onClick={addNavigationItem}
            className="bg-purple-500 text-white text-xs px-2 py-1 rounded hover:bg-purple-600"
          >
            + Nav Item
          </button>
        </div>
      )}

      {/* Header Label */}
      {(selected || hovered) && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Simple Header
        </div>
      )}
    </div>
  );
}

SimpleHeader.craft = {
  displayName: "Simple Header",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "80px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",

    // Header specific props
    logoSrc: "https://via.placeholder.com/150x50?text=LOGO",
    logoAlt: "Company Logo",
    navigationItems: [
      { id: "1", label: "Home", href: "/" },
      { id: "2", label: "About", href: "/about" },
      { id: "3", label: "Services", href: "/services" },
      { id: "4", label: "Contact", href: "/contact" },
    ],
    ctaText: "Get Started",
    headerHeight: "80px",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
