import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

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
  return (
    <Element id="eldercare-footer-container" is={Section} canvas>
      <footer className="w-full">
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
                <Element
                  id="eldercare-footer-top-icon"
                  is={Image}
                  src={topIcon}
                  alt="Support Icon"
                  width="64px"
                  height="56px"
                  objectFit="object-contain"
                />
                <Element
                  id="eldercare-footer-top-title"
                  is={Text}
                  text={topTitle}
                  tagName="h5"
                  fontSize="text-xl"
                  fontWeight="font-bold"
                  color="text-white"
                />
              </div>

              {/* Right - Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Element
                  id="eldercare-footer-call-button"
                  is={Button}
                  text={callButtonText}
                  href={callButtonLink}
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-gray-800 transition-colors group"
                />
                <Element
                  id="eldercare-footer-contact-button"
                  is={Button}
                  text={contactButtonText}
                  href={contactButtonLink}
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-800 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
                />
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
                  <Element
                    id="eldercare-footer-logo"
                    is={Image}
                    src={logoImage}
                    alt={logoAlt}
                    height="48px"
                    className="w-auto"
                  />
                </a>
                <div>
                  <Element
                    id="eldercare-footer-donation-text"
                    is={Text}
                    text={donationText}
                    tagName="span"
                    fontSize="text-sm"
                    color="text-white"
                  />
                  <Element
                    id="eldercare-footer-donation-amount"
                    is={Text}
                    text={donationAmount}
                    tagName="h4"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-white"
                  />
                </div>
              </div>

              {/* Care Types */}
              <div>
                <Element
                  id="eldercare-footer-care-types-title"
                  is={Text}
                  text={careTypesTitle}
                  tagName="h6"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-white"
                  margin="mb-4"
                />
                <ul className="space-y-2">
                  {careTypesLinks.map((link, index) => (
                    <li key={index}>
                      <Element
                        id={`eldercare-footer-care-link-${index}`}
                        is={Text}
                        text={link.text}
                        tagName="a"
                        href={link.link}
                        color="text-white/80"
                        className="hover:text-white transition-colors"
                      />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Donation Info */}
              <div>
                <Element
                  id="eldercare-footer-donation-title"
                  is={Text}
                  text={donationTitle}
                  tagName="h6"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-white"
                  margin="mb-4"
                />
                <Element
                  id="eldercare-footer-donation-description"
                  is={Text}
                  text={donationDescription}
                  tagName="p"
                  fontSize="text-sm"
                  color="text-white/80"
                  margin="mb-4"
                  className="leading-relaxed"
                />
                <Element
                  id="eldercare-footer-donation-link"
                  is={Text}
                  text={donationLinkText}
                  tagName="a"
                  href={donationLink}
                  color="text-white"
                  className="hover:text-blue-300 font-semibold underline"
                />
              </div>

              {/* Newsletter */}
              <div>
                <Element
                  id="eldercare-footer-newsletter-title"
                  is={Text}
                  text={newsletterTitle}
                  tagName="h6"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-white"
                  margin="mb-4"
                />
                <Element
                  id="eldercare-footer-newsletter-description"
                  is={Text}
                  text={newsletterDescription}
                  tagName="p"
                  fontSize="text-sm"
                  color="text-white/80"
                  margin="mb-4"
                />
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
                    <Element
                      id="eldercare-footer-newsletter-icon"
                      is={Icon}
                      iconName="mail"
                      size={16}
                      color="text-white"
                      className="mr-2"
                    />
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
                  <Element
                    id="eldercare-footer-privacy-text"
                    is={Text}
                    text={privacyText}
                    tagName="p"
                    fontSize="text-sm"
                    color="text-white/80"
                    margin="mb-2"
                  />
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
                  <Element
                    id="eldercare-footer-support-label"
                    is={Text}
                    text="Need support?"
                    tagName="span"
                    fontSize="text-sm"
                    color="text-white/80"
                    className="block"
                  />
                  <Element
                    id="eldercare-footer-support-phone"
                    is={Text}
                    text={supportPhone}
                    tagName="a"
                    href={supportPhoneLink}
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-white"
                    className="hover:text-blue-300"
                  />
                </div>

                {/* Customer Care */}
                <div className="text-center lg:text-right">
                  <Element
                    id="eldercare-footer-customer-label"
                    is={Text}
                    text="Customer care"
                    tagName="span"
                    fontSize="text-sm"
                    color="text-white/80"
                    className="block"
                  />
                  <Element
                    id="eldercare-footer-customer-email"
                    is={Text}
                    text={customerEmail}
                    tagName="a"
                    href={customerEmailLink}
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-white"
                    className="hover:text-blue-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Element>
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
  isCanvas: true,
};
