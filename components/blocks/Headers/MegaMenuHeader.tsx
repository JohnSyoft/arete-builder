import { useNode, Element } from "@craftjs/core";
import { useState } from "react";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Icon as CraftIcon } from "@/components/blocks/Basic/Icon";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MegaMenuHeaderProps extends SectionProps {
  // Logo
  logoSrc?: string;
  logoAlt?: string;
  logoWidth?: string;
  logoHeight?: string;

  // Navigation items
  navItems?: Array<{
    label: string;
    hasMegaMenu: boolean;
    isActive?: boolean;
  }>;

  // CTA Button
  ctaText?: string;
  ctaVariant?: "default" | "outline";

  // Styling
  headerHeight?: string;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;

  // Megamenu settings
  megaMenuColumns?: number;
  megaMenuHeight?: string;
}

export function MegaMenuHeader({
  logoSrc = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
  logoAlt = "Company Logo",
  logoWidth = "120px",
  logoHeight = "40px",
  navItems = [
    { label: "Home", hasMegaMenu: false },
    { label: "Services", hasMegaMenu: true },
    { label: "Products", hasMegaMenu: true },
    { label: "Resources", hasMegaMenu: true },
    { label: "Solutions", hasMegaMenu: true },
    { label: "About", hasMegaMenu: false },
    { label: "Contact", hasMegaMenu: false },
  ],
  ctaText = "Get Started",
  ctaVariant = "default",
  headerHeight = "80px",
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  borderColor = "#e5e7eb",
  megaMenuColumns = 4,
  megaMenuHeight = "400px",
  ...props
}: MegaMenuHeaderProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);

  // Set section defaults for header
  const headerProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: headerHeight,
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    borderBottom: `1px solid ${borderColor}`,
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
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <Section {...headerProps}>
        <Element
          id="megaMenuHeaderContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Header Bar */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin="0"
            wrap="nowrap"
            minHeight={headerHeight}
          >
            {/* Logo Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="auto"
              canvas={false}
            >
              <CraftImage
                src={logoSrc}
                alt={logoAlt}
                width={logoWidth}
                height={logoHeight}
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
              {navItems.map((item, index) => (
                <Element
                  key={`nav-item-${index}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div
                    className="relative cursor-pointer group"
                    onMouseEnter={() =>
                      item.hasMegaMenu && setActiveMegaMenu(item.label)
                    }
                  >
                    <CraftText
                      text={item.label}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color={`text-[${textColor}]`}
                      textAlign="text-left"
                    />
                    {item.hasMegaMenu && (
                      <CraftIcon
                        iconName="chevronDown"
                        size={16}
                        color={textColor}
                      />
                    )}
                  </div>
                </Element>
              ))}
            </Element>

            {/* CTA Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="auto"
              canvas={false}
            >
              <CraftButton
                text={ctaText}
                variant={ctaVariant}
                size="default"
                backgroundColor={
                  ctaVariant === "default" ? "#3b82f6" : "transparent"
                }
                textColor={ctaVariant === "default" ? "#ffffff" : "#3b82f6"}
                borderRadius="6px"
                padding="px-4 py-2"
                width="w-auto"
              />
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Mega Menu Overlay */}
      {activeMegaMenu && (
        <div
          className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-lg z-50"
          style={{ height: megaMenuHeight }}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Services Mega Menu */}
            {activeMegaMenu === "Services" && (
              <Element
                id="servicesMegaMenu"
                is={Grid}
                canvas
                columns={megaMenuColumns}
                autoFit={false}
                minColumnWidth="250px"
                gap="32px"
                autoRows="auto"
              >
                {/* Medical Services Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Medical Services"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  {/* Droppable area for medical services content */}
                  <Element
                    id="medicalServicesContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop components here for medical services content"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Wellness Programs Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Wellness Programs"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="wellnessProgramsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop components here for wellness programs content"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Specialties Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Specialties"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="specialtiesContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop components here for specialties content"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Featured Content Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Featured"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="featuredContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop components here for featured content (images, cards, etc.)"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}

            {/* Products Mega Menu */}
            {activeMegaMenu === "Products" && (
              <Element
                id="productsMegaMenu"
                is={Grid}
                canvas
                columns={megaMenuColumns}
                autoFit={false}
                minColumnWidth="250px"
                gap="32px"
                autoRows="auto"
              >
                {/* Product Categories */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Product Categories"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="productCategoriesContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop product category components here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* New Arrivals */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="New Arrivals"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="newArrivalsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop new arrivals content here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Best Sellers */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Best Sellers"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="bestSellersContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop best sellers content here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Product Showcase */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Product Showcase"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="productShowcaseContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop product showcase content here (images, videos, etc.)"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}

            {/* Resources Mega Menu */}
            {activeMegaMenu === "Resources" && (
              <Element
                id="resourcesMegaMenu"
                is={Grid}
                canvas
                columns={megaMenuColumns}
                autoFit={false}
                minColumnWidth="250px"
                gap="32px"
                autoRows="auto"
              >
                {/* Documentation Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Documentation"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="documentationContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop documentation content here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Downloads Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Downloads"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="downloadsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop download links and resources here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Tutorials Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Tutorials"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="tutorialsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop tutorial content here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Support Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Support"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="supportContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop support resources here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}

            {/* Solutions Mega Menu */}
            {activeMegaMenu === "Solutions" && (
              <Element
                id="solutionsMegaMenu"
                is={Grid}
                canvas
                columns={megaMenuColumns}
                autoFit={false}
                minColumnWidth="250px"
                gap="32px"
                autoRows="auto"
              >
                {/* Enterprise Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Enterprise"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="enterpriseContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop enterprise solutions here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Small Business Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Small Business"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="smallBusinessContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop small business solutions here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Industry Solutions Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Industry Solutions"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="industrySolutionsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop industry-specific solutions here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Custom Solutions Column */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Custom Solutions"
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="mb-4"
                    />
                  </Element>

                  <Element
                    id="customSolutionsContent"
                    is={Box}
                    backgroundColor="#f9fafb"
                    padding="16px"
                    margin="0"
                    borderRadius="8px"
                    display="block"
                    minHeight="200px"
                    border="2px dashed #d1d5db"
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text="Drop custom solution content here"
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-center"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}
          </div>
        </div>
      )}

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Mega Menu Header
        </div>
      )}
    </div>
  );
}

MegaMenuHeader.craft = {
  displayName: "Mega Menu Header",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "80px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",

    // Header specific props
    logoSrc:
      "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop",
    logoAlt: "Company Logo",
    logoWidth: "120px",
    logoHeight: "40px",
    navItems: [
      { label: "Home", hasMegaMenu: false },
      { label: "Services", hasMegaMenu: true },
      { label: "Products", hasMegaMenu: true },
      { label: "Resources", hasMegaMenu: true },
      { label: "Solutions", hasMegaMenu: true },
      { label: "About", hasMegaMenu: false },
      { label: "Contact", hasMegaMenu: false },
    ],
    ctaText: "Get Started",
    ctaVariant: "default",
    headerHeight: "80px",
    textColor: "#1f2937",
    borderColor: "#e5e7eb",
    megaMenuColumns: 4,
    megaMenuHeight: "400px",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
