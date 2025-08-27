import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalFooter1Props extends SectionProps {
  // Footer specific props
  logoText?: string;
  companyDescription?: string;
  contactTitle?: string;
  phoneNumber?: string;
  emailTitle?: string;
  emailAddress?: string;
  servicesTitle?: string;
  services?: string[];
  quickLinksTitle?: string;
  quickLinks?: string[];
  socialsTitle?: string;
  socialLinks?: string[];
  copyrightText?: string;
  templateCredit?: string;
}

export function MedicalFooter1({
  logoText = "Romedic",
  companyDescription = "Donec rhoncus sapien sed dui pulvinar, sed dignissim ex tempus. Integer porttitor euismod dolor, ut tempor nisl ultrices ac. Donec consequat sapien est.",
  contactTitle = "Need more help?",
  phoneNumber = "+123 456 789",
  emailTitle = "Email support",
  emailAddress = "hello@romedic.com",
  servicesTitle = "Services",
  services = [
    "General Health Checkups",
    "Emergency & Urgent Care",
    "Cardiology & Heart Health",
    "Pediatrics & Family Medicine",
    "Orthopedic & Physiotherapy",
    "Diagnostic Imaging & Lab Tests",
  ],
  quickLinksTitle = "Quick Links",
  quickLinks = ["Home", "About Us", "Appointment", "Services"],
  socialsTitle = "Socials",
  socialLinks = ["Facebook", "Twitter", "LinkedIn", "Instagram", "Youtube"],
  copyrightText = "Copyright © 2025. All rights reserved",
  templateCredit = "Hospital & Medical Clinic Template Kit by FoxCreation Studio",
  ...props
}: MedicalFooter1Props) {
  // Set section defaults for footer
  const footerProps = {
    backgroundColor: "#14b8a6", // teal background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 md:px-8 md:pt-24 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20",
    ...props,
  };

  return (
    <Section {...footerProps}>
      <Element
        id="medicalFooterContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Footer Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 48px 0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="250px"
            gap="48px"
            autoRows="auto"
          >
            {/* Company Info Column */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Logo */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-3"
                margin="mb-6"
                wrap="nowrap"
              >
                {/* Logo Icon */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text="+"
                    tagName="span"
                    fontSize="text-3xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                    padding="8px 12px"
                    backgroundColor="#065f46"
                    borderRadius="8px"
                  />
                </Element>

                {/* Logo Text */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={logoText}
                    tagName="h3"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-left"
                  />
                </Element>
              </Element>

              {/* Company Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={companyDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-white"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="mb-6"
                />
              </Element>

              {/* Contact Info */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={contactTitle}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign="text-left"
                  margin="mb-2"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={phoneNumber}
                  tagName="p"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                  margin="mb-4"
                />
              </Element>

              {/* Email Support */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 8px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={emailTitle}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign="text-left"
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
                  text={emailAddress}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-semibold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Services Column */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Services Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={servicesTitle}
                  tagName="h4"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                  margin="mb-6"
                />
              </Element>

              {/* Services List */}
              {services.map((service, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={service}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              ))}
            </Element>

            {/* Quick Links Column */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Quick Links Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={quickLinksTitle}
                  tagName="h4"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                  margin="mb-6"
                />
              </Element>

              {/* Quick Links List */}
              {quickLinks.map((link, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={link}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              ))}
            </Element>

            {/* Socials Column */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Socials Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={socialsTitle}
                  tagName="h4"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                  margin="mb-6"
                />
              </Element>

              {/* Social Links List */}
              {socialLinks.map((social, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={social}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              ))}
            </Element>
          </Element>
        </Element>

        {/* Footer Bottom Section */}
        <Element
          is={Box}
          backgroundColor="rgba(255, 255, 255, 0.1)"
          padding="24px 0"
          margin="0"
          display="block"
          borderRadius="0"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="between"
            alignItems="center"
            gap="gap-4"
            margin="0"
            wrap="wrap"
          >
            {/* Template Credit */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={templateCredit}
                tagName="p"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-white"
                textAlign="text-left"
                opacity="0.8"
              />
            </Element>

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
                color="text-white"
                textAlign="text-right"
                opacity="0.8"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalFooter1.craft = {
  displayName: "Medical Footer 1",
  props: {
    // Section props
    backgroundColor: "#14b8a6", // teal background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 md:px-8 md:pt-24 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20",
    // Footer specific props
    logoText: "Romedic",
    companyDescription:
      "Donec rhoncus sapien sed dui pulvinar, sed dignissim ex tempus. Integer porttitor euismod dolor, ut tempor nisl ultrices ac. Donec consequat sapien est.",
    contactTitle: "Need more help?",
    phoneNumber: "+123 456 789",
    emailTitle: "Email support",
    emailAddress: "hello@romedic.com",
    servicesTitle: "Services",
    services: [
      "General Health Checkups",
      "Emergency & Urgent Care",
      "Cardiology & Heart Health",
      "Pediatrics & Family Medicine",
      "Orthopedic & Physiotherapy",
      "Diagnostic Imaging & Lab Tests",
    ],
    quickLinksTitle: "Quick Links",
    quickLinks: ["Home", "About Us", "Appointment", "Services"],
    socialsTitle: "Socials",
    socialLinks: ["Facebook", "Twitter", "LinkedIn", "Instagram", "Youtube"],
    copyrightText: "Copyright © 2025. All rights reserved",
    templateCredit:
      "Hospital & Medical Clinic Template Kit by FoxCreation Studio",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
