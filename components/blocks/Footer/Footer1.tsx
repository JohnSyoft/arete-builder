import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Link as CraftLink } from "@/components/blocks/Basic/Link"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Footer1Props extends SectionProps {
  // Footer1 can inherit all Section properties and add any specific ones if needed
}

export function Footer1(props: Footer1Props) {
  // Set Footer-specific defaults
  const footerProps = {
    backgroundColor: "#111827", // gray-900
    padding: "py-12",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...footerProps}>
      <Element id="footerContent" is="div" canvas className="space-y-12">
        {/* Main Footer Content */}
        <Element is="div" className="grid grid-cols-1 md:grid-cols-4 gap-8" canvas>
          {/* Brand Section */}
          <Element is="div" className="col-span-1 md:col-span-2 space-y-4" canvas>
            {/* Brand Name */}
            <Element is="div" className="mb-4" canvas={false}>
              <CraftText
                text="WebBuilder"
                tagName="h2"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-white"
                margin=""
                padding=""
              />
            </Element>
            
            {/* Brand Description */}
            <Element is="div" className="p-2 rounded max-w-md" canvas={false}>
              <CraftText
                text="Create stunning websites with our intuitive drag-and-drop builder. No coding required."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-400"
                margin="mb-6"
                padding=""
              />
            </Element>

            {/* Social Links */}
            <Element is="div" className="flex space-x-4" canvas>
              <Element is="a" href="#" className="text-gray-400 hover:text-white" canvas={false}>
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Element>
              <Element is="a" href="#" className="text-gray-400 hover:text-white" canvas={false}>
                <span className="sr-only">GitHub</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Element>
            </Element>
          </Element>

          {/* Product Links */}
          <Element is="div" className="space-y-4" canvas>
            <Element is="div" className="tracking-wider uppercase" canvas={false}>
              <CraftText
                text="Product"
                tagName="h3"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-gray-400"
                margin="mb-4"
                padding=""
              />
            </Element>
            <Element is="ul" className="space-y-3" canvas>
              <li>
                <CraftLink
                  text="Features"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Templates"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Integrations"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Pricing"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>

          {/* Support Links */}
          <Element is="div" className="space-y-4" canvas>
            <Element is="div" className="tracking-wider uppercase" canvas={false}>
              <CraftText
                text="Support"
                tagName="h3"
                fontSize="text-sm"
                fontWeight="font-semibold"
                color="text-gray-400"
                margin="mb-4"
                padding=""
              />
            </Element>
            <Element is="ul" className="space-y-3" canvas>
              <li>
                <CraftLink
                  text="Help Center"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Contact Us"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Status"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
              <li>
                <CraftLink
                  text="Community"
                  href="#"
                  color="text-gray-300 hover:text-white"
                  textDecoration="no-underline"
                  margin=""
                  padding=""
                />
              </li>
            </Element>
          </Element>
        </Element>

        {/* Footer Bottom */}
        <Element is="div" className="border-t border-gray-800 mt-12 pt-8" canvas>
          <Element is="div" className="text-center" canvas={false}>
            <CraftText
              text="© 2024 WebBuilder. All rights reserved."
              tagName="p"
              fontSize="text-sm"
              fontWeight="font-normal"
              color="text-gray-400"
              margin=""
              padding=""
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Footer1.craft = {
  props: {},
  related: {}
}