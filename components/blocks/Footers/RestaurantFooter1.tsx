import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FooterFeature {
  icon: string;
  title: string;
  content: string | React.ReactNode;
}

interface SocialLink {
  platform: string;
  link: string;
  icon: string;
}

interface RestaurantFooter1Props {
  logoImage?: string;
  logoAlt?: string;
  features?: FooterFeature[];
  socialLinks?: SocialLink[];
  copyrightText?: string;
  poweredByText?: string;
  poweredByLink?: string;
  backgroundImage?: string;
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function RestaurantFooter1({
  logoImage = "https://placehold.co/200x60/FFFFFF/333333?text=Restaurant+Logo",
  logoAlt = "Restaurant Logo",
  features = [
    {
      icon: "💬",
      title: "About restaurant",
      content: "Enjoy a wonderful cafe dining experience"
    },
    {
      icon: "📞",
      title: "Let's talk",
      content: (
        <div>
          <div>Phone: <a href="tel:1800222000" className="hover:text-red-600 transition-colors">1-800-222-000</a></div>
          <div>Fax: 1-800-222-002</div>
        </div>
      )
    },
    {
      icon: "✉️",
      title: "Book a table",
      content: (
        <div>
          <a href="mailto:info@yourdomain.com" className="hover:text-red-600 transition-colors">info@yourdomain.com</a><br />
          <a href="mailto:hr@yourdomain.com" className="hover:text-red-600 transition-colors">hr@yourdomain.com</a>
        </div>
      )
    },
    {
      icon: "📍",
      title: "Contact us",
      content: "Lorem ipsum consectetur adipiscing onsectetur."
    }
  ],
  socialLinks = [
    { platform: "facebook", link: "https://www.facebook.com/", icon: "📘" },
    { platform: "dribbble", link: "http://www.dribbble.com", icon: "🏀" },
    { platform: "twitter", link: "http://www.twitter.com", icon: "🐦" },
    { platform: "instagram", link: "http://www.instagram.com", icon: "📷" }
  ],
  copyrightText = "© Copyright 2025",
  poweredByText = "Crafto",
  poweredByLink = "index.html",
  backgroundImage = "https://placehold.co/1920x678/FFFFFF/333333?text=Footer+Background",
  backgroundColor = "#f8f9fa",
  textColor = "#333333",
  nonEditable = true,
}: RestaurantFooter1Props) {
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
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
      minWidth={300}
      minHeight={400}
    >
      <footer
        ref={(ref) => connect(drag(ref))}
        className="pb-0"
      >
        <div className="container mx-auto px-4">
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-15 sm:mt-0 mb-12 sm:mb-12">
            {features.map((feature, index) => (
              <div key={index} className="text-center md:mb-8">
                <div className="p-8 lg:p-0 overflow-hidden">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <div className="text-gray-800">
                    <span className="font-bold text-sm uppercase block mb-2">
                      {feature.title}
                    </span>
                    <div className="text-sm text-gray-600 w-5/6 md:w-3/5 sm:w-4/5 xs:w-3/5 mx-auto">
                      {feature.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-6 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright */}
              <div className="text-sm text-center text-sm-start order-3 order-sm-2 order-md-1 mb-4 md:mb-0">
                <p>
                  {copyrightText}{" "}
                  <a
                    href={poweredByLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-600 transition-colors font-semibold"
                  >
                    {poweredByText}
                  </a>
                </p>
              </div>

              {/* Logo */}
              <div className="text-center order-1 order-md-2 mb-4 md:mb-0">
                <a href="#" className="inline-block">
                  <img
                    src={logoImage}
                    alt={logoAlt}
                    className="h-12 w-auto"
                  />
                </a>
              </div>

              {/* Social Links */}
              <div className="text-center text-sm-end order-2 order-sm-3 order-md-3 mb-4 md:mb-0">
                <ul className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl hover:text-red-600 transition-colors"
                        title={social.platform}
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Resizer>
  );
}

RestaurantFooter1.craft = {
  displayName: "Restaurant Footer 1",
  props: {
    logoImage: "https://placehold.co/200x60/FFFFFF/333333?text=Restaurant+Logo",
    logoAlt: "Restaurant Logo",
    features: [
      {
        icon: "💬",
        title: "About restaurant",
        content: "Enjoy a wonderful cafe dining experience"
      },
      {
        icon: "📞",
        title: "Let's talk",
        content: (
          <div>
            <div>Phone: <a href="tel:1800222000" className="hover:text-red-600 transition-colors">1-800-222-000</a></div>
            <div>Fax: 1-800-222-002</div>
          </div>
        )
      },
      {
        icon: "✉️",
        title: "Book a table",
        content: (
          <div>
            <a href="mailto:info@yourdomain.com" className="hover:text-red-600 transition-colors">info@yourdomain.com</a><br />
            <a href="mailto:hr@yourdomain.com" className="hover:text-red-600 transition-colors">hr@yourdomain.com</a>
          </div>
        )
      },
      {
        icon: "📍",
        title: "Contact us",
        content: "Lorem ipsum consectetur adipiscing onsectetur."
      }
    ],
    socialLinks: [
      { platform: "facebook", link: "https://www.facebook.com/", icon: "📘" },
      { platform: "dribbble", link: "http://www.dribbble.com", icon: "🏀" },
      { platform: "twitter", link: "http://www.twitter.com", icon: "🐦" },
      { platform: "instagram", link: "http://www.instagram.com", icon: "📷" }
    ],
    copyrightText: "© Copyright 2025",
    poweredByText: "Crafto",
    poweredByLink: "index.html",
    backgroundImage: "https://placehold.co/1920x678/FFFFFF/333333?text=Footer+Background",
    backgroundColor: "#f8f9fa",
    textColor: "#333333",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
