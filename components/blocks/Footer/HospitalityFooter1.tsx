import { useNode, Element } from "@craftjs/core";
import { Box } from "../Basic/Box";
import { Text as CraftText } from "../Basic/Text";
import { Section } from "../Basic/Section";

interface HospitalityFooter1Props {
  backgroundColor?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  accentColor?: string;
  brandText?: string;
  taglineText?: string;
  contactTitle?: string;
  address?: string;
  city?: string;
  phone?: string;
  email?: string;
  copyrightText?: string;
  yearText?: string;
}

export const HospitalityFooter1 = ({
  backgroundColor = "#1a1a1a",
  primaryTextColor = "text-white",
  secondaryTextColor = "rgba(255, 255, 255, 0.6)",
  accentColor = "text-white",
  brandText = "LUXURY",
  taglineText = "Experience hospitality redefined through contemporary elegance and uncompromising service excellence.",
  contactTitle = "Contact",
  address = "123 Elite Avenue",
  city = "New York, NY 10001",
  phone = "+1 (555) 123-4567",
  email = "reservations@luxury.com",
  copyrightText = "© 2024 Luxury. All rights reserved.",
  yearText = "MMXXIV",
}: HospitalityFooter1Props) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

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
      <Section backgroundColor={backgroundColor} padding="80px 24px 40px 24px">
        <Element
          id="hospitalityFooter1-content"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          <div className="max-w-7xl mx-auto">
            {/* Clean footer layout */}
            <Element
              id="hospitalityFooter1-main"
              is={Box}
              display="flex"
              justifyContent="between"
              alignItems="start"
              gap="80px"
              margin="0 0 60px 0"
              backgroundColor={backgroundColor}
            >
              {/* Left - Brand */}
              <Element
                id="hospitalityFooter1-brand"
                is={Box}
                display="block"
                width="40%"
                backgroundColor={backgroundColor}
              >
                <Element
                  id="hospitalityFooter1-logo"
                  is={CraftText}
                  text={brandText}
                  fontSize="text-3xl"
                  fontWeight="font-thin"
                  color={primaryTextColor}
                  margin="0 0 24px 0"
                  letterSpacing="tracking-widest"
                />

                <Element
                  id="hospitalityFooter1-tagline"
                  is={CraftText}
                  text={taglineText}
                  fontSize="text-base"
                  color={primaryTextColor}
                  margin="0"
                  lineHeight="leading-relaxed"
                  fontWeight="font-light"
                  letterSpacing="tracking-wide"
                />
              </Element>

              {/* Right - Contact */}
              <Element
                id="hospitalityFooter1-contact"
                is={Box}
                display="block"
                width="30%"
                backgroundColor={backgroundColor}
              >
                <Element
                  id="hospitalityFooter1-contactTitle"
                  is={CraftText}
                  text={contactTitle}
                  fontSize="text-lg"
                  fontWeight="font-light"
                  color={primaryTextColor}
                  margin="0 0 24px 0"
                  letterSpacing="tracking-wide"
                />

                <Element
                  id="hospitalityFooter1-address"
                  is={CraftText}
                  text={address}
                  fontSize="text-base"
                  color={primaryTextColor}
                  margin="0 0 8px 0"
                  fontWeight="font-light"
                  letterSpacing="tracking-wide"
                />

                <Element
                  id="hospitalityFooter1-city"
                  is={CraftText}
                  text={city}
                  fontSize="text-base"
                  color={primaryTextColor}
                  margin="0 0 16px 0"
                  fontWeight="font-light"
                  letterSpacing="tracking-wide"
                />

                <Element
                  id="hospitalityFooter1-phone"
                  is={CraftText}
                  text={phone}
                  fontSize="text-base"
                  color={primaryTextColor}
                  margin="0 0 8px 0"
                  fontWeight="font-light"
                  letterSpacing="tracking-wide"
                />

                <Element
                  id="hospitalityFooter1-email"
                  is={CraftText}
                  text={email}
                  fontSize="text-base"
                  color={primaryTextColor}
                  margin="0"
                  fontWeight="font-light"
                  letterSpacing="tracking-wide"
                />
              </Element>
            </Element>

            {/* Clean bottom bar */}
            <Element
              id="hospitalityFooter1-bottom"
              is={Box}
              display="flex"
              justifyContent="between"
              alignItems="center"
              padding="24px 0"
              backgroundColor={backgroundColor}
            >
              <Element
                id="hospitalityFooter1-copyright"
                is={CraftText}
                text={copyrightText}
                fontSize="text-sm"
                color={accentColor}
                margin="0"
                fontWeight="font-light"
                letterSpacing="tracking-wide"
              />

              <Element
                id="hospitalityFooter1-year"
                is={CraftText}
                text={yearText}
                fontSize="text-sm"
                color={accentColor}
                margin="0"
                fontWeight="font-light"
                letterSpacing="tracking-widest"
              />
            </Element>
          </div>
        </Element>
      </Section>
    </div>
  );
};

HospitalityFooter1.craft = {
  displayName: "Hospitality Footer 1",
  props: {
    backgroundColor: "#1a1a1a",
    primaryTextColor: "text-white",
    secondaryTextColor: "rgba(255, 255, 255, 0.6)",
    accentColor: "text-white",
    brandText: "LUXURY",
    taglineText:
      "Experience hospitality redefined through contemporary elegance and uncompromising service excellence.",
    contactTitle: "Contact",
    address: "123 Elite Avenue",
    city: "New York, NY 10001",
    phone: "+1 (555) 123-4567",
    email: "reservations@luxury.com",
    copyrightText: "© 2024 Luxury. All rights reserved.",
    yearText: "MMXXIV",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
