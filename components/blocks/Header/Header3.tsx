import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Header3Props extends SectionProps {
  brandName?: string
  brandSubtext?: string
  navItems?: Array<{ label: string; href: string }>
  signInText?: string
  signInHref?: string
  ctaText?: string
  ctaHref?: string
}

export function Header3({
  brandName = "WebBuilder Pro",
  brandSubtext = "v2.0",
  navItems = [
    { label: "Dashboard", href: "#dashboard" },
    { label: "Templates", href: "#templates" },
    { label: "Integrations", href: "#integrations" },
    { label: "Help", href: "#help" }
  ],
  signInText = "Sign In",
  signInHref = "/signin",
  ctaText = "Get Started",
  ctaHref = "/signup",
  backgroundColor = "linear-gradient(to right, #9333ea, #2563eb)",
  ...props
}: Header3Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const headerProps = {
    backgroundColor,
    color: "#ffffff",
    ...props
  }

  return (
    <Section {...headerProps}>
      <Element id="header3Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <span className="text-white font-bold text-lg">⚡</span>
              </div>
              <div>
                <div className="text-xl font-bold">
                  <CraftText
                    text={brandName}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </div>
                <div className="text-xs bg-white/20 text-white border border-white/30 rounded px-2 py-1 inline-block">
                  <CraftText
                    text={brandSubtext}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </div>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="text-white/90 hover:text-white transition-colors">
                  <CraftText
                    text={item.label}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <CraftButton
                text={signInText}
                href={signInHref}
                variant="ghost"
                size="default"
                backgroundColor="rgba(255, 255, 255, 0.1)"
                textColor="#ffffff"
                borderRadius=""
                margin=""
                padding=""
              />
              <CraftButton
                text={ctaText}
                href={ctaHref}
                variant="default"
                size="default"
                backgroundColor="#ffffff"
                textColor="#9333ea"
                borderRadius=""
                margin=""
                padding=""
              />
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Header3.craft = {
  displayName: "Header 3",
  props: {
    brandName: "WebBuilder Pro",
    brandSubtext: "v2.0",
    navItems: [
      { label: "Dashboard", href: "#dashboard" },
      { label: "Templates", href: "#templates" },
      { label: "Integrations", href: "#integrations" },
      { label: "Help", href: "#help" }
    ],
    signInText: "Sign In",
    signInHref: "/signin",
    ctaText: "Get Started",
    ctaHref: "/signup",
    backgroundColor: "linear-gradient(to right, #9333ea, #2563eb)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
