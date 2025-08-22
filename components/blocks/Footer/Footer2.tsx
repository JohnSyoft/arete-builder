import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Link as CraftLink } from "@/components/blocks/Basic/Link"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Footer2Props extends SectionProps {
  // Footer2 can inherit all Section properties and add any specific ones if needed
}

export function Footer2(props: Footer2Props) {
  // Set Footer-specific defaults
  const footerProps = {
    backgroundColor: "#ffffff",
    padding: "py-12",
    className: "border-t border-gray-200",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...footerProps}>
      <Element id="footerContent" is="div" canvas className="space-y-12">
        {/* Main Footer Content */}
        <Element is="div" className="grid grid-cols-2 md:grid-cols-6 gap-8" canvas>
          {/* Brand Section */}
          <Element is="div" className="col-span-2 space-y-4" canvas>
            {/* Logo and Brand */}
            <Element is="div" className="flex items-center space-x-2" canvas={false}>
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <CraftText
                text="WebBuilder"
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin=""
                padding=""
              />
            </Element>
            
            {/* Brand Description */}
            <Element is="div" className="p-2 rounded" canvas={false}>
              <CraftText
                text="The easiest way to create professional websites without any coding knowledge."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Platform Links */}
          <Element is="div" className="space-y-4" canvas>
            <CraftText
              text="Platform"
              tagName="h3"
              fontSize="text-base"
              fontWeight="font-semibold"
              color="text-gray-900"
              margin="mb-4"
              padding=""
            />
            <Element is="ul" className="space-y-2" canvas>
              <li>
                <CraftLink
                  text="Editor"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Templates"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Hosting"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>

          {/* Resources Links */}
          <Element is="div" className="space-y-4" canvas>
            <CraftText
              text="Resources"
              tagName="h3"
              fontSize="text-base"
              fontWeight="font-semibold"
              color="text-gray-900"
              margin="mb-4"
              padding=""
            />
            <Element is="ul" className="space-y-2" canvas>
              <li>
                <CraftLink
                  text="Blog"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Guides"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Help"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>

          {/* Company Links */}
          <Element is="div" className="space-y-4" canvas>
            <CraftText
              text="Company"
              tagName="h3"
              fontSize="text-base"
              fontWeight="font-semibold"
              color="text-gray-900"
              margin="mb-4"
              padding=""
            />
            <Element is="ul" className="space-y-2" canvas>
              <li>
                <CraftLink
                  text="About"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Careers"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Contact"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>

          {/* Legal Links */}
          <Element is="div" className="space-y-4" canvas>
            <CraftText
              text="Legal"
              tagName="h3"
              fontSize="text-base"
              fontWeight="font-semibold"
              color="text-gray-900"
              margin="mb-4"
              padding=""
            />
            <Element is="ul" className="space-y-2" canvas>
              <li>
                <CraftLink
                  text="Privacy"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Terms"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Security"
                  href="#"
                  color="text-gray-600 hover:text-gray-900"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>
        </Element>

        {/* Footer Bottom */}
        <Element is="div" className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center" canvas>
          {/* Copyright */}
          <Element is="div" className="p-2 rounded" canvas={false}>
            <CraftText
              text="© 2024 WebBuilder Inc. All rights reserved."
              tagName="p"
              fontSize="text-sm"
              fontWeight="font-normal"
              color="text-gray-500"
              margin=""
              padding=""
            />
          </Element>

          {/* Social Links */}
          <Element is="div" className="flex space-x-6 mt-4 sm:mt-0" canvas>
            <CraftLink
              text="Facebook"
              href="#"
              color="text-gray-400 hover:text-gray-500"
              textDecoration="no-underline"
              margin=""
              padding=""
            />
            <CraftLink
              text="Twitter"
              href="#"
              color="text-gray-400 hover:text-gray-500"
              textDecoration="no-underline"
              margin=""
              padding=""
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Footer2.craft = {
  displayName: "Footer 2",
  props: {
    backgroundColor: "#ffffff",
    padding: "py-12",
    className: "border-t border-gray-200",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}
