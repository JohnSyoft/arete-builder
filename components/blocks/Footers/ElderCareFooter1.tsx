import React from "react";
import { useNode } from "@craftjs/core";
import { Resizer } from "../Resizer";

interface FooterLink {
  text: string;
  link: string;
}

interface ElderCareFooter1Props {
  // Top Section
  topTitle?: string;
  topIcon?: string;
  callButtonText?: string;
  callButtonLink?: string;
  contactButtonText?: string;
  contactButtonLink?: string;
  topBackgroundImage?: string;
  
  // Footer Content
  logoImage?: string;
  logoAlt?: string;
  donationAmount?: string;
  donationText?: string;
  
  // Links
  careTypesTitle?: string;
  careTypesLinks?: FooterLink[];
  donationTitle?: string;
  donationDescription?: string;
  donationLinkText?: string;
  donationLink?: string;
  
  // Newsletter
  newsletterTitle?: string;
  newsletterDescription?: string;
  newsletterPlaceholder?: string;
  
  // Contact Info
  supportPhone?: string;
  supportPhoneLink?: string;
  customerEmail?: string;
  customerEmailLink?: string;
  
  // Copyright
  copyrightText?: string;
  poweredByText?: string;
  poweredByLink?: string;
  privacyText?: string;
  privacyLink?: string;
  
  backgroundColor?: string;
  textColor?: string;
  nonEditable?: boolean;
}

export function ElderCareFooter1({
  // Top Section
  topTitle = "Need any consultations for senior caring please contact us.",
  topIcon = "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
  callButtonText = "Call us - 1 800 222 000",
  callButtonLink = "tel:1800222000",
  contactButtonText = "Contact us",
  contactButtonLink = "#",
  topBackgroundImage = "https://placehold.co/1920x200/4A90E2/FFFFFF?text=Footer+Top",
  
  // Footer Content
  logoImage = "https://placehold.co/200x60/FFFFFF/333333?text=LOGO",
  logoAlt = "Elder Care Logo",
  donationAmount = "$90,320",
  donationText = "Rising money",
  
  // Links
  careTypesTitle = "Types of cares",
  careTypesLinks = [
    { text: "Senior citizen", link: "#" },
    { text: "Residential care", link: "#" },
    { text: "Skilled nursing", link: "#" },
    { text: "Personal care", link: "#" },
  ],
  donationTitle = "Donation us",
  donationDescription = "Your donation supports mission cause. Every contribution matters, enabling us to goal.",
  donationLinkText = "Donate now",
  donationLink = "#",
  
  // Newsletter
  newsletterTitle = "Subscribe our newsletter",
  newsletterDescription = "Subscribe our newsletter to get the latest news and updates.",
  newsletterPlaceholder = "Enter your email",
  
  // Contact Info
  supportPhone = "1 800 222 000",
  supportPhoneLink = "tel:1800222000",
  customerEmail = "info@domain.com",
  customerEmailLink = "mailto:info@domain.com",
  
  // Copyright
  copyrightText = "© 2025 Crafto is Proudly Powered by ThemeZaa",
  poweredByText = "ThemeZaa",
  poweredByLink = "https://www.themezaa.com/",
  privacyText = "This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply.",
  privacyLink = "#",
  
  backgroundColor = "#1a1a1a",
  textColor = "#ffffff",
  nonEditable = true,
}: ElderCareFooter1Props) {
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
      }}
      minWidth={300}
      minHeight={400}
    >
      <footer
        ref={(ref) => connect(drag(ref))}
        className="w-full"
      >
        {/* Top Section */}
        <div
          className="py-8"
          style={{
            backgroundImage: `url(${topBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              {/* Left - Title with Icon */}
              <div className="flex items-center gap-6">
                <img
                  src={topIcon}
                  alt="Support Icon"
                  className="w-16 h-14 object-contain"
                />
                <h5 className="text-xl font-bold text-white">
                  {topTitle}
                </h5>
              </div>

              {/* Right - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={callButtonLink}
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors group"
                >
                  <i className="bi bi-telephone mr-2"></i>
                  <span>{callButtonText}</span>
                </a>
                <a
                  href={contactButtonLink}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
                >
                  <span className="mr-2">{contactButtonText}</span>
                  <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer */}
        <div
          className="py-12"
          style={{
            backgroundImage: `url(${topBackgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Logo and Donation */}
              <div className="space-y-4">
                <a href="#" className="inline-block">
                  <img
                    src={logoImage}
                    alt={logoAlt}
                    className="h-12 w-auto"
                  />
                </a>
                <div>
                  <span className="text-white text-sm">{donationText}</span>
                  <h4 className="text-white text-2xl font-bold">{donationAmount}</h4>
                </div>
              </div>

              {/* Care Types */}
              <div>
                <h6 className="font-semibold text-white mb-4">{careTypesTitle}</h6>
                <ul className="space-y-2">
                  {careTypesLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.link}
                        className="text-white/80 hover:text-white transition-colors"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donation Info */}
              <div>
                <h6 className="font-semibold text-white mb-4">{donationTitle}</h6>
                <p className="text-white/80 mb-4 text-sm leading-relaxed">
                  {donationDescription}
                </p>
                <a
                  href={donationLink}
                  className="text-white hover:text-blue-300 font-semibold underline"
                >
                  {donationLinkText}
                </a>
              </div>

              {/* Newsletter */}
              <div>
                <h6 className="font-semibold text-white mb-4">{newsletterTitle}</h6>
                <p className="text-white/80 mb-4 text-sm">
                  {newsletterDescription}
                </p>
                <form className="space-y-2">
                  <input
                    type="email"
                    placeholder={newsletterPlaceholder}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded transition-colors"
                  >
                    <i className="feather icon-feather-mail mr-2"></i>
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                {/* Copyright */}
                <div className="text-center lg:text-left">
                  <p className="text-white/80 text-sm mb-2">
                    {privacyText}
                  </p>
                  <p className="text-white/80 text-sm">
                    {copyrightText.split("ThemeZaa").map((part, index) => (
                      <span key={index}>
                        {part}
                        {index === 0 && (
                          <a
                            href={poweredByLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-300"
                          >
                            {poweredByText}
                          </a>
                        )}
                      </span>
                    ))}
                  </p>
                </div>

                {/* Support */}
                <div className="text-center">
                  <span className="block text-white/80 text-sm">Need support?</span>
                  <a
                    href={supportPhoneLink}
                    className="text-white font-medium hover:text-blue-300"
                  >
                    {supportPhone}
                  </a>
                </div>

                {/* Customer Care */}
                <div className="text-center lg:text-right">
                  <span className="block text-white/80 text-sm">Customer care</span>
                  <a
                    href={customerEmailLink}
                    className="text-white font-medium hover:text-blue-300"
                  >
                    {customerEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Resizer>
  );
}

ElderCareFooter1.craft = {
  displayName: "Elder Care Footer 1",
  props: {
    // Top Section
    topTitle: "Need any consultations for senior caring please contact us.",
    topIcon: "https://placehold.co/72x64/FFB6C1/FFFFFF?text=Icon",
    callButtonText: "Call us - 1 800 222 000",
    callButtonLink: "tel:1800222000",
    contactButtonText: "Contact us",
    contactButtonLink: "#",
    topBackgroundImage: "https://placehold.co/1920x200/4A90E2/FFFFFF?text=Footer+Top",
    
    // Footer Content
    logoImage: "https://placehold.co/200x60/FFFFFF/333333?text=LOGO",
    logoAlt: "Elder Care Logo",
    donationAmount: "$90,320",
    donationText: "Rising money",
    
    // Links
    careTypesTitle: "Types of cares",
    careTypesLinks: [
      { text: "Senior citizen", link: "#" },
      { text: "Residential care", link: "#" },
      { text: "Skilled nursing", link: "#" },
      { text: "Personal care", link: "#" },
    ],
    donationTitle: "Donation us",
    donationDescription: "Your donation supports mission cause. Every contribution matters, enabling us to goal.",
    donationLinkText: "Donate now",
    donationLink: "#",
    
    // Newsletter
    newsletterTitle: "Subscribe our newsletter",
    newsletterDescription: "Subscribe our newsletter to get the latest news and updates.",
    newsletterPlaceholder: "Enter your email",
    
    // Contact Info
    supportPhone: "1 800 222 000",
    supportPhoneLink: "tel:1800222000",
    customerEmail: "info@domain.com",
    customerEmailLink: "mailto:info@domain.com",
    
    // Copyright
    copyrightText: "© 2025 Crafto is Proudly Powered by ThemeZaa",
    poweredByText: "ThemeZaa",
    poweredByLink: "https://www.themezaa.com/",
    privacyText: "This site is protected by reCAPTCHA and the Google privacy policy and terms of service apply.",
    privacyLink: "#",
    
    backgroundColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
