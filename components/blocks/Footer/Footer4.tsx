import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Link as CraftLink } from "@/components/blocks/Basic/Link"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Footer4Props extends SectionProps {
  // Footer4 can inherit all Section properties and add any specific ones if needed
}

export function Footer4(props: Footer4Props) {
  // Set Footer-specific defaults
  const footerProps = {
    backgroundColor: "#f9fafb", // gray-50
    padding: "py-12",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    className: "border-t border-gray-200",
    ...props
  }

  return (
    <Section {...footerProps}>
      <Element id="footerContent" is="div" canvas className="space-y-8">
        {/* Brand Section */}
        <Element is="div" className="text-center mb-8" canvas>
          {/* Logo and Brand */}
          <Element is="div" className="flex items-center justify-center space-x-2 mb-4" canvas>
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl"></div>
            <CraftText
              text="BuildSite"
              tagName="span"
              fontSize="text-2xl"
              fontWeight="font-bold"
              color="text-gray-900"
              margin=""
              padding=""
            />
          </Element>
          
          {/* Brand Description */}
          <Element is="div" className="max-w-md mx-auto" canvas={false}>
            <CraftText
              text="Empowering creators to build beautiful websites without limits."
              tagName="p"
              fontSize="text-base"
              fontWeight="font-normal"
              color="text-gray-600"
              margin=""
              padding=""
            />
          </Element>
        </Element>

        {/* Stats Section */}
        <Element is="div" className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8" canvas>
          {/* Stat 1 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="mb-1" canvas={false}>
              <CraftText
                text="50K+"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" canvas={false}>
              <CraftText
                text="Websites Created"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Stat 2 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="mb-1" canvas={false}>
              <CraftText
                text="99.9%"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" canvas={false}>
              <CraftText
                text="Uptime"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Stat 3 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="mb-1" canvas={false}>
              <CraftText
                text="24/7"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" canvas={false}>
              <CraftText
                text="Support"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Stat 4 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="mb-1" canvas={false}>
              <CraftText
                text="150+"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" canvas={false}>
              <CraftText
                text="Templates"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </Element>
          </Element>
        </Element>

        {/* Links Section */}
        <Element is="div" className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8" canvas>
          <CraftLink
            text="Privacy Policy"
            href="#"
            color="text-gray-600 hover:text-orange-600"
            textDecoration="no-underline"
            margin=""
            padding=""
          />
          <CraftLink
            text="Terms of Service"
            href="#"
            color="text-gray-600 hover:text-orange-600"
            textDecoration="no-underline"
            margin=""
            padding=""
          />
          <CraftLink
            text="Cookie Policy"
            href="#"
            color="text-gray-600 hover:text-orange-600"
            textDecoration="no-underline"
            margin=""
            padding=""
          />
          <CraftLink
            text="Contact"
            href="#"
            color="text-gray-600 hover:text-orange-600"
            textDecoration="no-underline"
            margin=""
            padding=""
          />
        </Element>

        {/* Copyright */}
        <Element is="div" className="text-center" canvas>
          <Element is="div" canvas={false}>
            <CraftText
              text="© 2024 BuildSite Inc. All rights reserved. Made with ❤️ in San Francisco."
              tagName="p"
              fontSize="text-sm"
              fontWeight="font-normal"
              color="text-gray-500"
              margin=""
              padding=""
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Footer4.craft = {
  props: {},
  related: {}
}
