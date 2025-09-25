import React from "react";
import { Node, useNode } from "@craftjs/core";
import { ArrowRight, Facebook, Instagram, Twitter } from "lucide-react";

export const BeautySalonFooter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <footer
      ref={(ref) => connect(drag(ref))}
      className={`bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 text-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      {/* CTA Section */}
      <div className="border-b border-white/20 py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg">
            Everyone can discover their hidden beauty.{" "}
            <a
              href="#"
              className="text-white hover:text-pink-300 underline inline-flex items-center gap-2 transition-colors duration-300"
            >
              Book an appointment
              <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-14">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Logo */}
          <div className="text-center md:text-left">
            <img
              src="/images/demo-beauty-salon-logo-white.png"
              alt="Beauty Salon Logo"
              className="h-8 w-auto mx-auto md:mx-0"
            />
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Get in touch
            </h4>
            <p className="text-white/80 text-sm leading-relaxed">
              401 Broadway, 24th Floor New York, NY 10013
            </p>
          </div>

          {/* Support */}
          <div className="text-center md:text-left">
            <h4 className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-2">
              Need support?
            </h4>
            <div className="space-y-1">
              <a
                href="tel:1800222000"
                className="text-white/80 hover:text-white transition-colors duration-300 block"
              >
                1-800-222-000
              </a>
              <a
                href="mailto:info@yourdomain.com"
                className="text-white/80 hover:text-white transition-colors duration-300 block"
              >
                info@yourdomain.com
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h4 className="text-pink-400 text-sm font-semibold uppercase tracking-wider mb-4">
              Connect with us
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <nav className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Home
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Story
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Services
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Wedding
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Review
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors duration-300">
                Contact
              </a>
            </nav>
            <p className="text-white/60 text-sm text-center lg:text-left">
              © 2025 Crafto is Proudly Powered by{" "}
              <a
                href="https://www.themezaa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-300 underline transition-colors duration-300"
              >
                ThemeZaa
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

BeautySalonFooter1.craft = {
  displayName: "Beauty Salon Footer 1",
  props: {},
  related: {
    settings: () => null,
  },
};
