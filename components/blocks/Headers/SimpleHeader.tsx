import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { NavigationItem } from "@/components/blocks/Navigation/NavigationItem";

interface NavigationItemData {
  id: string;
  label: string;
  href: string;
  children?: NavigationItemData[];
}

interface SimpleHeaderProps extends SectionProps {
  // Logo
  logoSrc?: string;
  logoAlt?: string;

  // Navigation
  navigationItems?: NavigationItemData[];

  // CTA Button
  ctaText?: string;

  // Styling
  headerHeight?: string;
}

export function SimpleHeader({
  logoSrc = "https://via.placeholder.com/150x50?text=LOGO",
  logoAlt = "Company Logo",
  navigationItems = [
    { id: "1", label: "Home", href: "/", children: [] },
    { id: "2", label: "About", href: "/about", children: [] },
    {
      id: "3",
      label: "Services",
      href: "/services",
      children: [
        {
          id: "3-1",
          label: "Web Design",
          href: "/services/web-design",
          children: [],
        },
        {
          id: "3-2",
          label: "Development",
          href: "/services/development",
          children: [],
        },
        { id: "3-3", label: "SEO", href: "/services/seo", children: [] },
      ],
    },
    { id: "4", label: "Contact", href: "/contact", children: [] },
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
    currentNavigationItems,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
    currentNavigationItems: state.data.props.navigationItems,
  }));

  const [hoveredNavId, setHoveredNavId] = useState<string | null>(null);

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
                width="100px"
                height="100px"
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
              gap="gap-2"
              margin="0"
              wrap="nowrap"
            >
              {currentNavigationItems?.map((item) => (
                <div
                  key={`navigationItem-${item.id}`}
                  className="relative"
                  style={{ position: "relative" }}
                  onMouseEnter={() => setHoveredNavId(item.id)}
                  onMouseLeave={() => setHoveredNavId(null)}
                >
                  <Element
                    is={NavigationItem}
                    id={item.id}
                    label={item.label}
                    href={item.href}
                    childItems={item.children || []}
                    isParent={item.children && item.children.length > 0}
                    canvas
                  />
                
                </div>
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
      { id: "1", label: "Home", href: "/", children: [] },
      { id: "2", label: "About", href: "/about", children: [] },
      {
        id: "3",
        label: "Services",
        href: "/services",
        children: [
          {
            id: "3-1",
            label: "Web Design",
            href: "/services/web-design",
            children: [],
          },
          {
            id: "3-2",
            label: "Development",
            href: "/services/development",
            children: [],
          },
          { id: "3-3", label: "SEO", href: "/services/seo", children: [] },
        ],
      },
      { id: "4", label: "Contact", href: "/contact", children: [] },
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
