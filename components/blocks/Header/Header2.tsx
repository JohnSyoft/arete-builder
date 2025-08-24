import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Header2Props extends SectionProps {
  brandName?: string
  navItems?: Array<{ label: string; href: string }>
  loginText?: string
  loginHref?: string
  ctaText?: string
  ctaHref?: string
}

export function Header2({
  brandName = "WebBuilder",
  navItems = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#resources" },
    { label: "Pricing", href: "#pricing" }
  ],
  loginText = "Login",
  loginHref = "/login",
  ctaText = "Start Free",
  ctaHref = "/signup",
  backgroundColor = "#111827",
  ...props
}: Header2Props) {
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
      <Element id="header2Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
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
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-300 hover:text-white transition-colors">
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
                text={loginText}
                href={loginHref}
                variant="ghost"
                size="default"
                backgroundColor="transparent"
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
                backgroundColor="#2563eb"
                textColor="#ffffff"
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

Header2.craft = {
  displayName: "Header 2",
  props: {
    brandName: "WebBuilder",
    navItems: [
      { label: "Product", href: "#product" },
      { label: "Solutions", href: "#solutions" },
      { label: "Resources", href: "#resources" },
      { label: "Pricing", href: "#pricing" }
    ],
    loginText: "Login",
    loginHref: "/login",
    ctaText: "Start Free",
    ctaHref: "/signup",
    backgroundColor: "#111827"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
