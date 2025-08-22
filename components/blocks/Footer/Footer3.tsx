import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Link as CraftLink } from "@/components/blocks/Basic/Link"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Input as CraftInput } from "@/components/blocks/Basic/Input"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Footer3Props extends SectionProps {
  // Footer3 can inherit all Section properties and add any specific ones if needed
}

export function Footer3(props: Footer3Props) {
  // Set Footer-specific defaults with gradient background
  const footerProps = {
    backgroundColor: "from-purple-900 to-blue-900",
    padding: "py-16",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    className: "bg-gradient-to-r",
    ...props
  }

  return (
    <Section {...footerProps}>
      <Element id="footerContent" is="div" canvas className="space-y-12">
        {/* Main Footer Content */}
        <Element is="div" className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12" canvas>
          {/* Newsletter Section */}
          <Element is="div" className="space-y-6" canvas>
            {/* Newsletter Title */}
            <Element is="div" className="mb-4" canvas={false}>
              <CraftText
                text="Stay Updated"
                tagName="h2"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-white"
                margin=""
                padding=""
              />
            </Element>
            
            {/* Newsletter Description */}
            <Element is="div" className="mb-6" canvas={false}>
              <CraftText
                text="Get the latest updates, tips, and exclusive offers delivered to your inbox."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-purple-200"
                margin=""
                padding=""
              />
            </Element>

            {/* Newsletter Form */}
            <Element is="div" className="flex space-x-2" canvas>
              <CraftInput
                placeholder="Enter your email"
                type="email"
                backgroundColor="bg-white/10"
                borderColor="border-white/20"
                textColor="text-white"
                className="placeholder:text-purple-200"
              />
              <CraftButton
                text="Subscribe"
                backgroundColor="bg-white"
                textColor="text-purple-900"
                padding="px-6 py-2"
                borderRadius="rounded-md"
              />
            </Element>
          </Element>

          {/* Links Section */}
          <Element is="div" className="grid grid-cols-2 gap-8" canvas>
            {/* Quick Links */}
            <Element is="div" className="space-y-4" canvas>
              <Element is="div" className="mb-4" canvas={false}>
                <CraftText
                  text="Quick Links"
                  tagName="h3"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-white"
                  margin=""
                  padding=""
                />
              </Element>
              <Element is="ul" className="space-y-2" canvas>
                <li>
                  <CraftLink
                    text="Home"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="Features"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="Pricing"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="Support"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
              </Element>
            </Element>

            {/* Connect Links */}
            <Element is="div" className="space-y-4" canvas>
              <Element is="div" className="mb-4" canvas={false}>
                <CraftText
                  text="Connect"
                  tagName="h3"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-white"
                  margin=""
                  padding=""
                />
              </Element>
              <Element is="ul" className="space-y-2" canvas>
                <li>
                  <CraftLink
                    text="Twitter"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="LinkedIn"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="GitHub"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
                <li>
                  <CraftLink
                    text="Discord"
                    href="#"
                    color="text-purple-200 hover:text-white"
                    textDecoration="no-underline"
                    margin=""
                    padding=""
                  />
                </li>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Footer Bottom */}
        <Element is="div" className="border-t border-white/20 pt-8 text-center" canvas>
          {/* Logo and Brand */}
          <Element is="div" className="flex items-center justify-center space-x-2 mb-4" canvas>
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <CraftText
                text="W"
                tagName="span"
                fontSize="text-base"
                fontWeight="font-bold"
                color="text-white"
                margin=""
                padding=""
              />
            </div>
            <CraftText
              text="WebBuilder"
              tagName="span"
              fontSize="text-xl"
              fontWeight="font-bold"
              color="text-white"
              margin=""
              padding=""
            />
          </Element>
          
          {/* Copyright */}
          <Element is="div" canvas={false}>
            <CraftText
              text="© 2024 WebBuilder. Crafted with ❤️ for creators worldwide."
              tagName="p"
              fontSize="text-base"
              fontWeight="font-normal"
              color="text-purple-200"
              margin=""
              padding=""
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Footer3.craft = {
  props: {},
  related: {}
}
