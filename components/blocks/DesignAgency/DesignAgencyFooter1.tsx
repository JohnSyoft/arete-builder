import React from "react";
import { Node, useNode } from "@craftjs/core";

export const DesignAgencyFooter1 = () => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  const locations = ["LDN", "NYC", "SYD", "DXB", "SGP", "AHM"];

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`py-16 bg-blue-600 ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-2 ring-blue-300" : ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-end mb-16">
          {/* Logo */}
          <div className="text-center md:text-left lg:mb-4">
            <a href="#" className="inline-block">
              <img
                src="/images/demo-design-agency-footer-logo-black.png"
                alt="Design Agency Logo"
                className="h-8"
              />
            </a>
          </div>

          {/* Description */}
          <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 text-center md:text-left sm:mb-6">
            <span className="text-xl font-semibold text-gray-800 w-11/12 xl:w-11/12 sm:w-full leading-tight block mb-1">
              Crafto is a global design studio.
            </span>
            <span className="text-xl text-gray-800 w-11/12 xl:w-11/12 sm:w-full leading-tight block">
              We create design and brands that help companies grow.
            </span>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 text-center md:text-left">
            <ul className="text-xl font-semibold space-y-2 sm:mb-2">
              <li>
                <a href="#" className="text-gray-800 hover:text-white transition-colors">
                  Agency
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-white transition-colors">
                  Expertise
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 text-center md:text-left">
            <ul className="text-xl font-semibold space-y-2">
              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="text-gray-800 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="http://www.dribbble.com"
                  target="_blank"
                  className="text-gray-800 hover:text-white transition-colors"
                >
                  Dribbble
                </a>
              </li>
              <li>
                <a
                  href="http://www.behance.com/"
                  target="_blank"
                  className="text-gray-800 hover:text-white transition-colors"
                >
                  Behance
                </a>
              </li>
              <li>
                <a
                  href="http://www.linkedin.com"
                  target="_blank"
                  className="text-gray-800 hover:text-white transition-colors"
                >
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Locations */}
          <div className="text-center lg:text-left md:mb-4">
            <ul className="flex flex-wrap justify-center lg:justify-start gap-4 text-lg font-semibold text-gray-800">
              {locations.map((location, index) => (
                <li key={index}>{location}</li>
              ))}
            </ul>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-left">
            <span className="text-gray-800">
              &copy; 2025 Crafto.{" "}
              <span className="font-semibold">The design agency</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
