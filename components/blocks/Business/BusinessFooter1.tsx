import React from "react";
import { Node, useNode } from "@craftjs/core";
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const BusinessFooter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const footerLinks = {
    company: [
      { name: "About us", href: "#" },
      { name: "Our services", href: "#" },
      { name: "Our clients", href: "#" },
      { name: "Contact", href: "#" }
    ],
    services: [
      { name: "Branding", href: "#" },
      { name: "eCommerce", href: "#" },
      { name: "Content", href: "#" },
      { name: "Marketing", href: "#" }
    ],
    social: [
      { name: "Facebook", href: "#", icon: Facebook },
      { name: "Dribbble", href: "#", icon: Facebook },
      { name: "Twitter", href: "#", icon: Twitter },
      { name: "Instagram", href: "#", icon: Instagram }
    ]
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`relative bg-slate-800 text-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/images/demo-business-logo-white.png" 
              alt="Business Logo" 
              className="h-8 mb-4"
            />
            <p className="text-gray-300 mb-4 max-w-sm">
              Lorem ipsum is consectetur adipiscing eiusmod tempor.
            </p>
            <p className="text-gray-400 text-sm">
              &copy; 2025 <a href="#" className="text-white hover:underline">Crafto.</a>
            </p>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Social connect</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-4 h-4" />
                <a href="tel:+12345678910" className="hover:text-white transition-colors duration-200">
                  +1 234 567 8910
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@domain.com" className="hover:text-white transition-colors duration-200">
                  info@domain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusinessFooter1.craft = {
  displayName: "Business Footer",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
