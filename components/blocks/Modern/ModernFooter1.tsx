import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernFooter1Props extends SectionProps {
  // Company info
  companyName?: string;
  companyDescription?: string;
  logo?: string;
  
  // Footer links
  footerSections?: Array<{
    id: string;
    title: string;
    links: Array<{
      id: string;
      text: string;
      url: string;
    }>;
  }>;
  
  // Newsletter
  newsletterTitle?: string;
  newsletterDescription?: string;
  emailPlaceholder?: string;
  subscribeButtonText?: string;
  
  // Social media
  socialLinks?: Array<{
    id: string;
    platform: string;
    url: string;
    icon: string;
  }>;
  
  // Legal
  copyrightText?: string;
  legalLinks?: Array<{
    id: string;
    text: string;
    url: string;
  }>;
  
  // Styling
  primaryColor?: string;
  backgroundColor?: string;
  textColor?: string;
}

export function ModernFooter1({
  companyName = "YourBrand",
  companyDescription = "Building the future of digital experiences with cutting-edge technology and innovative solutions.",
  logo = "https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=YourBrand",
  footerSections = [
    {
      id: "product",
      title: "Product",
      links: [
        { id: "features", text: "Features", url: "/features" },
        { id: "pricing", text: "Pricing", url: "/pricing" },
        { id: "integrations", text: "Integrations", url: "/integrations" },
        { id: "api", text: "API", url: "/api" },
        { id: "changelog", text: "Changelog", url: "/changelog" }
      ]
    },
    {
      id: "company",
      title: "Company",
      links: [
        { id: "about", text: "About Us", url: "/about" },
        { id: "careers", text: "Careers", url: "/careers" },
        { id: "press", text: "Press", url: "/press" },
        { id: "contact", text: "Contact", url: "/contact" },
        { id: "blog", text: "Blog", url: "/blog" }
      ]
    },
    {
      id: "resources",
      title: "Resources",
      links: [
        { id: "documentation", text: "Documentation", url: "/docs" },
        { id: "help-center", text: "Help Center", url: "/help" },
        { id: "community", text: "Community", url: "/community" },
        { id: "status", text: "Status", url: "/status" },
        { id: "security", text: "Security", url: "/security" }
      ]
    },
    {
      id: "legal",
      title: "Legal",
      links: [
        { id: "privacy", text: "Privacy Policy", url: "/privacy" },
        { id: "terms", text: "Terms of Service", url: "/terms" },
        { id: "cookies", text: "Cookie Policy", url: "/cookies" },
        { id: "gdpr", text: "GDPR", url: "/gdpr" }
      ]
    }
  ],
  newsletterTitle = "Stay Updated",
  newsletterDescription = "Get the latest updates, tips, and exclusive content delivered straight to your inbox.",
  emailPlaceholder = "Enter your email",
  subscribeButtonText = "Subscribe",
  socialLinks = [
    { id: "twitter", platform: "Twitter", url: "https://twitter.com", icon: "𝕏" },
    { id: "linkedin", platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { id: "github", platform: "GitHub", url: "https://github.com", icon: "🐙" },
    { id: "discord", platform: "Discord", url: "https://discord.com", icon: "💬" }
  ],
  copyrightText = "2024 YourBrand. All rights reserved.",
  legalLinks = [
    { id: "privacy-footer", text: "Privacy", url: "/privacy" },
    { id: "terms-footer", text: "Terms", url: "/terms" },
    { id: "cookies-footer", text: "Cookies", url: "/cookies" }
  ],
  primaryColor = "#4F46E5",
  backgroundColor = "#1f2937",
  textColor = "#ffffff",
  ...props
}: ModernFooter1Props) {
  
  // Set section defaults
  const footerProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...footerProps}>
      <Element
        id="modernFooterContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Footer Content */}
        <Element
          is={Grid}
          canvas
          columns={5}
          autoFit={false}
          minColumnWidth="200px"
          gap="48px"
          autoRows="auto"
          margin="0 0 64px 0"
        >
          {/* Company Info Column */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            gridColumn="span 2"
            canvas
          >
            {/* Logo */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              width="140px"
              height="45px"
              canvas
            >
              <CraftImage
                src={logo}
                alt={companyName}
                width="w-full"
                height="h-full"
                objectFit="object-contain"
                borderRadius=""
                margin=""
                padding=""
              />
            </Element>

            {/* Company Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 32px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={companyDescription}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-300"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </Element>

            {/* Social Links */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-4"
              margin="0"
              wrap="wrap"
            >
              {socialLinks.map((social) => (
                <Element
                  key={social.id}
                  is={Box}
                  backgroundColor="rgba(255, 255, 255, 0.1)"
                  padding="12px"
                  margin="0"
                  borderRadius="12px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  width="44px"
                  height="44px"
                  hoverable={true}
                  canvas={false}
                >
                  <div className="text-lg">{social.icon}</div>
                </Element>
              ))}
            </Element>
          </Element>

          {/* Footer Links Columns */}
          {footerSections.map((section) => (
            <Element
              key={section.id}
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              canvas
            >
              {/* Section Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 20px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={section.title}
                  tagName="h3"
                  fontSize="text-lg"
                  fontWeight="font-bold"
                  color={textColor}
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {/* Section Links */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="flex"
                flexDirection="column"
                gap="gap-3"
                canvas
              >
                {section.links.map((link) => (
                  <Element
                    key={link.id}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={link.text}
                      tagName="a"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-300"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>
                ))}
              </Element>
            </Element>
          ))}
        </Element>

        {/* Newsletter Section */}
        <Element
          is={Box}
          backgroundColor="rgba(255, 255, 255, 0.05)"
          padding="48px"
          margin="0 0 64px 0"
          borderRadius="20px"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={2}
            autoFit={false}
            minColumnWidth="300px"
            gap="48px"
            autoRows="auto"
          >
            {/* Newsletter Info */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              canvas
            >
              {/* Newsletter Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={newsletterTitle}
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color={textColor}
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {/* Newsletter Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={newsletterDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-300"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>
            </Element>

            {/* Newsletter Form */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-3"
                margin="0"
                wrap="nowrap"
              >
                {/* Email Input */}
                <Element
                  is={Box}
                  backgroundColor="rgba(255, 255, 255, 0.1)"
                  padding="16px 20px"
                  margin="0"
                  borderRadius="12px"
                  display="flex"
                  alignItems="center"
                  flexGrow="1"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  canvas={false}
                >
                  <input
                    type="email"
                    placeholder={emailPlaceholder}
                    className="bg-transparent text-white placeholder-gray-400 outline-none w-full"
                  />
                </Element>

                {/* Subscribe Button */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text={subscribeButtonText}
                    size="lg"
                    backgroundColor={primaryColor}
                    textColor="#ffffff"
                    borderRadius="12px"
                    padding="px-6 py-4"
                    width="w-auto"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Bottom Bar */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="32px 0 0 0"
          margin="0"
          borderTop="1px solid rgba(255, 255, 255, 0.1)"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="between"
            alignItems="center"
            gap="gap-6"
            margin="0"
            wrap="wrap"
          >
            {/* Copyright */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={copyrightText}
                tagName="p"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-400"
                textAlign="text-left"
                margin="0"
              />
            </Element>

            {/* Legal Links */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-6"
              margin="0"
              wrap="wrap"
            >
              {legalLinks.map((link) => (
                <Element
                  key={link.id}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={link.text}
                    tagName="a"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-400"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>
              ))}
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernFooter1.craft = {
  displayName: "Modern Footer 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Footer specific props
    companyName: "YourBrand",
    companyDescription: "Building the future of digital experiences with cutting-edge technology and innovative solutions.",
    logo: "https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=YourBrand",
    footerSections: [
      {
        id: "product",
        title: "Product",
        links: [
          { id: "features", text: "Features", url: "/features" },
          { id: "pricing", text: "Pricing", url: "/pricing" },
          { id: "integrations", text: "Integrations", url: "/integrations" },
          { id: "api", text: "API", url: "/api" }
        ]
      },
      {
        id: "company",
        title: "Company",
        links: [
          { id: "about", text: "About Us", url: "/about" },
          { id: "careers", text: "Careers", url: "/careers" },
          { id: "contact", text: "Contact", url: "/contact" },
          { id: "blog", text: "Blog", url: "/blog" }
        ]
      },
      {
        id: "resources",
        title: "Resources",
        links: [
          { id: "documentation", text: "Documentation", url: "/docs" },
          { id: "help-center", text: "Help Center", url: "/help" },
          { id: "community", text: "Community", url: "/community" },
          { id: "security", text: "Security", url: "/security" }
        ]
      }
    ],
    newsletterTitle: "Stay Updated",
    newsletterDescription: "Get the latest updates, tips, and exclusive content delivered straight to your inbox.",
    emailPlaceholder: "Enter your email",
    subscribeButtonText: "Subscribe",
    socialLinks: [
      { id: "twitter", platform: "Twitter", url: "https://twitter.com", icon: "𝕏" },
      { id: "linkedin", platform: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
      { id: "github", platform: "GitHub", url: "https://github.com", icon: "🐙" },
      { id: "discord", platform: "Discord", url: "https://discord.com", icon: "💬" }
    ],
    copyrightText: "2024 YourBrand. All rights reserved.",
    legalLinks: [
      { id: "privacy-footer", text: "Privacy", url: "/privacy" },
      { id: "terms-footer", text: "Terms", url: "/terms" },
      { id: "cookies-footer", text: "Cookies", url: "/cookies" }
    ],
    primaryColor: "#4F46E5",
    backgroundColor: "#1f2937",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};