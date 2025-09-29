import React from "react";
import { Element } from "@craftjs/core";
import { Section } from "../Basic/Section";
import { Box } from "../Basic/Box";
import { Text } from "../Basic/Text";
import { Image } from "../Basic/Image";
import { Button } from "../Basic/Button";
import { Icon } from "../Basic/Icon";

export const BeautySalonFooter1 = () => {
  return (
    <Element id="beauty-salon-footer-container" is={Section} canvas>
      <footer className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white">
        {/* CTA Section */}
        <Element id="beauty-salon-footer-cta" is={Box} className="border-b border-white/20 py-10">
          <div className="container mx-auto px-4 text-center">
            <Element
              id="beauty-salon-footer-cta-text"
              is={Text}
              text="Everyone can discover their hidden beauty. Book an appointment"
              className="text-lg"
            />
          </div>
        </Element>

        {/* Main Footer */}
        <Element id="beauty-salon-footer-main" is={Box} className="container mx-auto px-4 py-14">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Logo */}
            <Element id="beauty-salon-footer-logo" is={Box} className="text-center md:text-left">
              <Element
                id="beauty-salon-footer-logo-image"
                is={Image}
                src="/images/demo-beauty-salon-logo-white.png"
                alt="Beauty Salon Logo"
                className="h-8 w-auto mx-auto md:mx-0"
              />
            </Element>

            {/* Contact Info */}
            <Element id="beauty-salon-footer-contact" is={Box} className="text-center md:text-left">
              <Element
                id="beauty-salon-footer-contact-title"
                is={Text}
                text="Get in touch"
                className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2"
              />
              <Element
                id="beauty-salon-footer-contact-address"
                is={Text}
                text="401 Broadway, 24th Floor New York, NY 10013"
                className="text-white/80 text-sm leading-relaxed"
              />
            </Element>

            {/* Support */}
            <Element id="beauty-salon-footer-support" is={Box} className="text-center md:text-left">
              <Element
                id="beauty-salon-footer-support-title"
                is={Text}
                text="Need support?"
                className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2"
              />
              <Element id="beauty-salon-footer-support-links" is={Box} className="space-y-1">
                <Element
                  id="beauty-salon-footer-support-phone"
                  is={Text}
                  text="1-800-222-000"
                  className="text-white/80 hover:text-white transition-colors duration-300 block"
                />
                <Element
                  id="beauty-salon-footer-support-email"
                  is={Text}
                  text="info@yourdomain.com"
                  className="text-white/80 hover:text-white transition-colors duration-300 block"
                />
              </Element>
            </Element>

            {/* Social Links */}
            <Element id="beauty-salon-footer-social" is={Box} className="text-center md:text-left">
              <Element
                id="beauty-salon-footer-social-title"
                is={Text}
                text="Connect with us"
                className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-4"
              />
              <Element id="beauty-salon-footer-social-links" is={Box} className="flex justify-center md:justify-start gap-4">
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Element
                    id="beauty-salon-footer-social-facebook"
                    is={Icon}
                    icon="facebook"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Element
                    id="beauty-salon-footer-social-instagram"
                    is={Icon}
                    icon="instagram"
                    className="w-4 h-4"
                  />
                </a>
                <a
                  href="https://www.twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                >
                  <Element
                    id="beauty-salon-footer-social-twitter"
                    is={Icon}
                    icon="twitter"
                    className="w-4 h-4"
                  />
                </a>
              </Element>
            </Element>
          </div>
        </Element>

        {/* Bottom Footer */}
        <Element id="beauty-salon-footer-bottom" is={Box} className="border-t border-white/20 py-5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <Element id="beauty-salon-footer-navigation" is={Box} className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <Element
                  id="beauty-salon-footer-nav-home"
                  is={Text}
                  text="Home"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
                <Element
                  id="beauty-salon-footer-nav-story"
                  is={Text}
                  text="Story"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
                <Element
                  id="beauty-salon-footer-nav-services"
                  is={Text}
                  text="Services"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
                <Element
                  id="beauty-salon-footer-nav-wedding"
                  is={Text}
                  text="Wedding"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
                <Element
                  id="beauty-salon-footer-nav-review"
                  is={Text}
                  text="Review"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
                <Element
                  id="beauty-salon-footer-nav-contact"
                  is={Text}
                  text="Contact"
                  className="text-white/80 hover:text-white transition-colors duration-300"
                />
              </Element>
              <Element
                id="beauty-salon-footer-copyright"
                is={Text}
                text="© 2025 Crafto is Proudly Powered by ThemeZaa"
                className="text-white/60 text-sm text-center lg:text-left"
              />
            </div>
          </div>
        </Element>
      </footer>
    </Element>
  );
};

BeautySalonFooter1.craft = {
  displayName: "Beauty Salon Footer 1",
  props: {},
  isCanvas: true,
  related: {
    settings: () => null,
  },
};
