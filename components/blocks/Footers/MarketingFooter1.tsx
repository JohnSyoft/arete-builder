import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FooterLink {
  text: string;
  link: string;
}

interface ContactInfo {
  location: string;
  address: string;
  phone: string;
  phoneLink: string;
  badge?: string;
}

interface MarketingFooter1Props {
  logoImage?: string;
  logoAlt?: string;
  socialLinks?: Array<{
    platform: string;
    link: string;
    text: string;
  }>;
  contactInfo?: ContactInfo[];
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  privacyText?: string;
  copyrightText?: string;
  poweredByText?: string;
  poweredByLink?: string;
  footerLinks?: FooterLink[];
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function MarketingFooter1({
  logoImage = "https://placehold.co/200x60/FFFFFF/333333?text=LOGO",
  logoAlt = "Marketing Logo",
  socialLinks = [
    { platform: "facebook", link: "https://www.facebook.com/", text: "Fb." },
    { platform: "instagram", link: "http://www.instagram.com", text: "Ig." },
    { platform: "twitter", link: "http://www.twitter.com", text: "Tw." },
    { platform: "behance", link: "http://www.behance.com/", text: "Be." },
  ],
  contactInfo = [
    {
      location: "Marketo - London",
      address: "401 Broadway, 24th Floor, Orchard View, London, UK",
      phone: "123 456 7890",
      phoneLink: "tel:1234567890",
      badge: "Free",
    },
    {
      location: "Marketo - France",
      address: "27 Eden Walk Eden Centre, Orchard View, Paris, France",
      phone: "123 456 7890",
      phoneLink: "tel:1234567890",
    },
  ],
  newsletterTitle = "Subscribe our newsletter",
  newsletterPlaceholder = "Enter your email...",
  privacyText = "Protecting your privacy",
  copyrightText = "© 2025 Crafto is Powered by ThemeZaa",
  poweredByText = "ThemeZaa",
  poweredByLink = "https://www.themezaa.com/",
  footerLinks = [
    { text: "Home", link: "#" },
    { text: "About", link: "#" },
    { text: "Services", link: "#" },
    { text: "Case studies", link: "#" },
    { text: "Pricing", link: "#" },
    { text: "Team", link: "#" },
    { text: "Contact", link: "#" },
  ],
  backgroundImage = "https://placehold.co/1920x400/1a1a1a/FFFFFF?text=Footer+Background",
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  nonEditable = true,
}: MarketingFooter1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: backgroundColor,
        color: textColor,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      minWidth={300}
      minHeight={400}
    >
      <footer
        ref={(ref) => connect(drag(ref))}
        className="w-full"
      >
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Social */}
            <div className="space-y-6">
              <a href="#" className="inline-block">
                <img
                  src={logoImage}
                  alt={logoAlt}
                  className="h-12 w-auto"
                />
              </a>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-300 transition-colors font-medium"
                  >
                    {social.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            {contactInfo.map((contact, index) => (
              <div key={index} className="space-y-4">
                <h6 className="text-white font-medium text-lg">
                  {contact.location}
                </h6>
                <p className="text-white/80 text-sm leading-relaxed">
                  {contact.address}
                </p>
                <div className="flex items-center gap-2">
                  <i className="bi bi-telephone-outbound text-white"></i>
                  <a
                    href={contact.phoneLink}
                    className="text-white hover:text-blue-300 transition-colors"
                  >
                    {contact.phone}
                  </a>
                  {contact.badge && (
                    <span className="bg-white/20 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {contact.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}

            {/* Newsletter */}
            <div className="space-y-4">
              <h6 className="text-white font-medium text-lg">
                {newsletterTitle}
              </h6>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder={newsletterPlaceholder}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-gray-800 font-medium rounded hover:bg-gray-100 transition-colors"
                >
                  Submit <i className="feather icon-feather-arrow-right ml-1"></i>
                </button>
              </form>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <i className="line-icon-Handshake text-lg"></i>
                <span>{privacyText}</span>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              {/* Footer Links */}
              <div className="flex flex-wrap gap-6">
                {footerLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.link}
                    className="text-white hover:text-blue-300 transition-colors text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center lg:text-right">
                <p className="text-white/80 text-sm">
                  {copyrightText.split("ThemeZaa").map((part, index) => (
                    <span key={index}>
                      {part}
                      {index === 0 && (
                        <a
                          href={poweredByLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-blue-300 underline"
                        >
                          {poweredByText}
                        </a>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Resizer>
  );
}

MarketingFooter1.craft = {
  displayName: "Marketing Footer 1",
  props: {
    logoImage: "https://placehold.co/200x60/FFFFFF/333333?text=LOGO",
    logoAlt: "Marketing Logo",
    socialLinks: [
      { platform: "facebook", link: "https://www.facebook.com/", text: "Fb." },
      { platform: "instagram", link: "http://www.instagram.com", text: "Ig." },
      { platform: "twitter", link: "http://www.twitter.com", text: "Tw." },
      { platform: "behance", link: "http://www.behance.com/", text: "Be." },
    ],
    contactInfo: [
      {
        location: "Marketo - London",
        address: "401 Broadway, 24th Floor, Orchard View, London, UK",
        phone: "123 456 7890",
        phoneLink: "tel:1234567890",
        badge: "Free",
      },
      {
        location: "Marketo - France",
        address: "27 Eden Walk Eden Centre, Orchard View, Paris, France",
        phone: "123 456 7890",
        phoneLink: "tel:1234567890",
      },
    ],
    newsletterTitle: "Subscribe our newsletter",
    newsletterPlaceholder: "Enter your email...",
    privacyText: "Protecting your privacy",
    copyrightText: "© 2025 Crafto is Powered by ThemeZaa",
    poweredByText: "ThemeZaa",
    poweredByLink: "https://www.themezaa.com/",
    footerLinks: [
      { text: "Home", link: "#" },
      { text: "About", link: "#" },
      { text: "Services", link: "#" },
      { text: "Case studies", link: "#" },
      { text: "Pricing", link: "#" },
      { text: "Team", link: "#" },
      { text: "Contact", link: "#" },
    ],
    backgroundImage: "https://placehold.co/1920x400/1a1a1a/FFFFFF?text=Footer+Background",
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};

