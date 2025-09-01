import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Input as CraftInput } from "@/components/blocks/Basic/Input";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticFooter1Props extends SectionProps {
  // Newsletter section
  newsletterTitle?: string;
  emailPlaceholder?: string;
  
  // Brand section
  logoImage?: string;
  brandDescription?: string;
  
  // Quick Links
  quickLinksTitle?: string;
  homeLink?: string;
  aboutUsLink?: string;
  servicesLink?: string;
  contactUsLink?: string;
  
  // Hours
  hoursTitle?: string;
  weekdayHours?: string;
  weekendHours?: string;
  
  // Contact
  contactTitle?: string;
  phoneNumber?: string;
  emailTitle?: string;
  emailAddress?: string;
  addressTitle?: string;
  address?: string;
  
  // Legal
  copyrightText?: string;
  privacyPolicyLink?: string;
  termsLink?: string;
  helpLink?: string;
  
  // Styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
  [key: string]: any;
}

export const CosmeticFooter1 = ({
  newsletterTitle = "Our latest insights on plastic surgery & skincare",
  emailPlaceholder = "Enter Your Email",
  
  logoImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/footer-logo.svg",
  brandDescription = "Transforming beauty with expert care and personalized treatments.",
  
  quickLinksTitle = "Quick Link",
  homeLink = "Home",
  aboutUsLink = "About Us",
  servicesLink = "Services",
  contactUsLink = "Contact Us",
  
  hoursTitle = "Open Hours:",
  weekdayHours = "Mon-Sat: 10:00 To 07:00",
  weekendHours = "Saturday-Closed",
  
  contactTitle = "Contact:",
  phoneNumber = "(+22) 123 456 789",
  emailTitle = "E-mail:",
  emailAddress = "domainname@Gmail.Com",
  addressTitle = "Address:",
  address = "123 High Street LN1 1AB Street UK",
  
  copyrightText = "Copyright © 2025 All Rights Reserved.",
  privacyPolicyLink = "Privacy Policy",
  termsLink = "Term's & Condition",
  helpLink = "Help",
  
  backgroundColor = "#481E0B",
  textColor = "#FFFFFF",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  ...props
}: CosmeticFooter1Props) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults
  const sectionProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    borderRadius: "20px",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8",
    ...props,
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`m-4 relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Section {...sectionProps}>
        <Element
          id="cosmeticFooterContainer"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Newsletter Section */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin="mb-16"
            wrap="wrap"
          >
            {/* Newsletter Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="60%"
              canvas={false}
            >
              <CraftText
                text={newsletterTitle}
                tagName="h2"
                fontSize="text-2xl md:text-3xl lg:text-4xl"
                fontWeight="font-bold"
                color={`text-white`}
                textAlign="text-left"
                margin="0"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Newsletter Form */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="40%"
              canvas
            >
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="end"
                alignItems="center"
                gap="gap-0"
                margin="0"
                wrap="nowrap"
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="70%"
                  canvas={false}
                >
                  <CraftInput
                    placeholder={emailPlaceholder}
                    type="email"
                    backgroundColor="rgba(255,255,255,0.1)"
                    textColor={textColor}
                    borderColor="transparent"
                    borderRadius="50px 0 0 50px"
                    padding="14px 20px"
                    fontSize="text-base"
                    width="w-full"
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
                  <div className={`w-12 h-12 bg-[${accentColor}] rounded-full flex items-center justify-center ml-2`}>
                    <svg viewBox="0 0 15 15" fill="white" className="w-4 h-4">
                      <path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" />
                    </svg>
                  </div>
                </Element>
              </Element>
            </Element>
          </Element>

          {/* Main Footer Content */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="start"
            gap="gap-8"
            margin="mb-12"
            wrap="wrap"
          >
            {/* Brand Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="25%"
              canvas
            >
              {/* Logo */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                width="160px"
                height="50px"
                canvas
              >
                <CraftImage
                  src={logoImage}
                  alt="Glowix Logo"
                  width="w-full"
                  height="h-full"
                  objectFit="object-contain"
                  borderRadius=""
                  margin=""
                  padding=""
                />
              </Element>

              {/* Brand Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={brandDescription}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color={`text-white`}
                  textAlign="text-left"
                  margin="0"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Social Media Icons */}
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
                {/* Pinterest */}
                <Element
                  is={Box}
                  backgroundColor="rgba(255,255,255,0.1)"
                  padding="10px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className={`w-5 h-5 text-white`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.024-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </div>
                </Element>

                {/* Twitter/X */}
                <Element
                  is={Box}
                  backgroundColor="rgba(255,255,255,0.1)"
                  padding="10px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className={`w-5 h-5 text-white`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </div>
                </Element>

                {/* Facebook */}
                <Element
                  is={Box}
                  backgroundColor="rgba(255,255,255,0.1)"
                  padding="10px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className={`w-5 h-5 text-white`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </Element>

                {/* Instagram */}
                <Element
                  is={Box}
                  backgroundColor="rgba(255,255,255,0.1)"
                  padding="10px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className={`w-5 h-5 text-white`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </Element>
              </Element>
            </Element>

            {/* Quick Links */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="15%"
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
                  text={quickLinksTitle}
                  tagName="h2"
                  fontSize="text-lg"
                  fontWeight="font-bold"
                  color={`text-white`}
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {[homeLink, aboutUsLink, servicesLink, contactUsLink].map((link, index) => (
                <Element
                  key={index}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={link}
                    tagName="a"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color={`text-white`}
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>
              ))}
            </Element>

            {/* Open Hours */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="20%"
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
                  text={hoursTitle}
                  tagName="h2"
                  fontSize="text-lg"
                  fontWeight="font-bold"
                  color={`text-white`}
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 8px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={weekdayHours}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color={`text-white`}
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
                  text={weekendHours}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color={`text-white`}
                  textAlign="text-left"
                  margin="0"
                />
              </Element>
            </Element>

            {/* Contact Information */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="40%"
              canvas
            >
              {/* Contact, Email, Address sections in a flex layout */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="space-between"
                alignItems="start"
                gap="gap-6"
                margin="0"
                wrap="wrap"
              >
                {/* Contact */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="32%"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 12px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={contactTitle}
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color={`text-white`}
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

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
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className={`w-5 h-5 text-white`}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                        </svg>
                      </div>
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
                        text={phoneNumber}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color={`text-white`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Email */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="32%"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 12px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={emailTitle}
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color={`text-white`}
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

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
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className={`w-5 h-5 text-white`}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                      </div>
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
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color={`text-white`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Address */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="32%"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 12px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={addressTitle}
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color={`text-white`}
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

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
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className={`w-5 h-5 text-white`}>
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                        </svg>
                      </div>
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
                        text={address}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color={`text-white`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Element>
          </Element>

          
        </Element>
      </Section>
    </div>
  );
};

CosmeticFooter1.craft = {
  displayName: "Cosmetic Footer 1",
  props: {
    newsletterTitle: "Our latest insights on plastic surgery & skincare",
    emailPlaceholder: "Enter Your Email",
    
    logoImage: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/footer-logo.svg",
    brandDescription: "Transforming beauty with expert care and personalized treatments.",
    
    quickLinksTitle: "Quick Link",
    homeLink: "Home",
    aboutUsLink: "About Us",
    servicesLink: "Services",
    contactUsLink: "Contact Us",
    
    hoursTitle: "Open Hours:",
    weekdayHours: "Mon-Sat: 10:00 To 07:00",
    weekendHours: "Saturday-Closed",
    
    contactTitle: "Contact:",
    phoneNumber: "(+22) 123 456 789",
    emailTitle: "E-mail:",
    emailAddress: "domainname@Gmail.Com",
    addressTitle: "Address:",
    address: "123 High Street LN1 1AB Street UK",
    
    copyrightText: "Copyright © 2025 All Rights Reserved.",
    privacyPolicyLink: "Privacy Policy",
    termsLink: "Term's & Condition",
    helpLink: "Help",
    
    backgroundColor: "#481E0B",
    textColor: "#FFFFFF",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
