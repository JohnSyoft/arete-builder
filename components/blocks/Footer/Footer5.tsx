import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Link as CraftLink } from "@/components/blocks/Basic/Link"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Footer5Props extends SectionProps {
  // Footer5 can inherit all Section properties and add any specific ones if needed
}

export function Footer5(props: Footer5Props) {
  // Set Footer-specific defaults with green theme
  const footerProps = {
    backgroundColor: "#14532d", // green-900
    padding: "py-16",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...footerProps}>
      <Element id="footerContent" is="div" canvas className="space-y-12">
        {/* Main Footer Content */}
        <Element is="div" className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12" canvas>
          {/* Brand Section */}
          <Element is="div" className="space-y-6" canvas>
            {/* Logo and Brand */}
            <Element is="div" className="flex items-center space-x-2 mb-6" canvas>
              <Element is="div" className="flex items-center space-x-1" canvas={false}>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <div className="w-3 h-3 bg-green-200 rounded-full"></div>
              </Element>
              <CraftText
                text="EcoBuilder"
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-bold"
                color="text-white"
                margin="ml-2"
                padding=""
              />
            </Element>
            
            {/* Brand Description */}
            <Element is="div" className="mb-6" canvas={false}>
              <CraftText
                text="Building sustainable websites for a better tomorrow. Carbon-neutral hosting and eco-friendly design practices."
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-green-200"
                margin=""
                padding=""
              />
            </Element>

            {/* Carbon Neutral Badge */}
            <Element is="div" className="flex items-center space-x-2 text-sm" canvas>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <CraftText
                text="Carbon Neutral Since 2024"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-green-200"
                margin=""
                padding=""
              />
            </Element>
          </Element>

          {/* Eco Features */}
          <Element is="div" className="space-y-4" canvas>
            <Element is="div" className="mb-4" canvas={false}>
              <CraftText
                text="Eco Features"
                tagName="h3"
                fontSize="text-base"
                fontWeight="font-semibold"
                color="text-green-100"
                margin=""
                padding=""
              />
            </Element>
            
            <Element is="ul" className="space-y-3" canvas>
              <Element is="li" className="flex items-center space-x-2" canvas>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <CraftText
                  text="Green Hosting"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-200"
                  margin=""
                  padding=""
                />
              </Element>
              <Element is="li" className="flex items-center space-x-2" canvas>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <CraftText
                  text="Optimized Performance"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-200"
                  margin=""
                  padding=""
                />
              </Element>
              <Element is="li" className="flex items-center space-x-2" canvas>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <CraftText
                  text="Minimal Carbon Footprint"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-200"
                  margin=""
                  padding=""
                />
              </Element>
              <Element is="li" className="flex items-center space-x-2" canvas>
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <CraftText
                  text="Renewable Energy"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-200"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>
          </Element>

          {/* Impact Stats */}
          <Element is="div" className="space-y-4" canvas>
            <Element is="div" className="mb-4" canvas={false}>
              <CraftText
                text="Impact Stats"
                tagName="h3"
                fontSize="text-base"
                fontWeight="font-semibold"
                color="text-green-100"
                margin=""
                padding=""
              />
            </Element>
            
            <Element is="div" className="space-y-4" canvas>
              {/* Stat 1 */}
              <Element is="div" canvas>
                <Element is="div" className="mb-1" canvas={false}>
                  <CraftText
                    text="2.5M kg"
                    tagName="span"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-green-300"
                    margin=""
                    padding=""
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text="CO₂ Saved"
                    tagName="span"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-green-200"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>

              {/* Stat 2 */}
              <Element is="div" canvas>
                <Element is="div" className="mb-1" canvas={false}>
                  <CraftText
                    text="100%"
                    tagName="span"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-green-300"
                    margin=""
                    padding=""
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text="Renewable Energy"
                    tagName="span"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-green-200"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>

              {/* Stat 3 */}
              <Element is="div" canvas>
                <Element is="div" className="mb-1" canvas={false}>
                  <CraftText
                    text="10K+"
                    tagName="span"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-green-300"
                    margin=""
                    padding=""
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text="Green Websites"
                    tagName="span"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-green-200"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Footer Bottom */}
        <Element is="div" className="border-t border-green-800 pt-8 flex flex-col sm:flex-row justify-between items-center" canvas>
          {/* Copyright */}
          <Element is="div" className="mb-4 sm:mb-0" canvas={false}>
            <CraftText
              text="© 2024 EcoBuilder. Building a greener web, one site at a time."
              tagName="p"
              fontSize="text-sm"
              fontWeight="font-normal"
              color="text-green-200"
              margin=""
              padding=""
            />
          </Element>
          
          {/* Social Links with Emojis */}
          <Element is="div" className="flex space-x-4" canvas>
            <Element is="a" href="#" className="text-green-300 hover:text-green-100" canvas={false}>
              <span className="sr-only">Twitter</span>
              <CraftText
                text="🌱"
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="inherit"
                margin=""
                padding=""
              />
            </Element>
            <Element is="a" href="#" className="text-green-300 hover:text-green-100" canvas={false}>
              <span className="sr-only">LinkedIn</span>
              <CraftText
                text="🌿"
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="inherit"
                margin=""
                padding=""
              />
            </Element>
            <Element is="a" href="#" className="text-green-300 hover:text-green-100" canvas={false}>
              <span className="sr-only">GitHub</span>
              <CraftText
                text="🌳"
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="inherit"
                margin=""
                padding=""
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Footer5.craft = {
  props: {},
  related: {}
}
