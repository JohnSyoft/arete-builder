import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Header1Props {
  brandName?: string
  navItems?: Array<{ text: string; href: string }>
  signInText?: string
  signInHref?: string
  ctaText?: string
  ctaHref?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
}

export function Header1({
  brandName = "WebBuilder",
  navItems = [
    { text: "Features", href: "#features" },
    { text: "Templates", href: "#templates" },
    { text: "Pricing", href: "#pricing" },
    { text: "About", href: "#about" }
  ],
  signInText = "Sign In",
  signInHref = "/login",
  ctaText = "Get Started", 
  ctaHref = "/signup",
  backgroundColor = "#ffffff",
  textColor = "#111827",
  borderColor = "#e5e7eb"
}: Header1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const headerProps = {
    backgroundColor,
    color: textColor,
    borderBottomColor: borderColor,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid"
  }

  return (
    <Section {...headerProps}>
      <Element id="headerContent" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center">
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
                <a key={index} href={item.href} className="text-gray-700 hover:text-gray-900">
                  <CraftText
                    text={item.text}
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
                backgroundColor=""
                textColor=""
                borderRadius=""
                margin=""
                padding=""
              />
              <CraftButton
                text={ctaText}
                href={ctaHref}
                variant="default"
                size="default"
                backgroundColor=""
                textColor=""
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

Header1.craft = {
  displayName: "Header 1",
  props: {
    brandName: "WebBuilder",
    navItems: [
      { text: "Features", href: "#features" },
      { text: "Templates", href: "#templates" },
      { text: "Pricing", href: "#pricing" },
      { text: "About", href: "#about" }
    ],
    signInText: "Sign In",
    signInHref: "/login",
    ctaText: "Get Started",
    ctaHref: "/signup",
    backgroundColor: "#ffffff",
    textColor: "#111827",
    borderColor: "#e5e7eb"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
