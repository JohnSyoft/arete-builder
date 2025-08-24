import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Header4Props extends SectionProps {
  brandName?: string
  navItems?: Array<{ label: string; href: string }>
  loginText?: string
  loginHref?: string
  ctaText?: string
  ctaHref?: string
}

export function Header4({
  brandName = "BuildSite",
  navItems = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Templates", href: "#templates" },
    { label: "Pricing", href: "#pricing" }
  ],
  loginText = "Login",
  loginHref = "/login",
  ctaText = "Try Free",
  ctaHref = "/signup",
  backgroundColor = "#ffffff",
  ...props
}: Header4Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const headerProps = {
    backgroundColor,
    color: "#111827",
    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    ...props
  }

  return (
    <Section {...headerProps}>
      <Element id="header4Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">
                  <CraftText
                    text={brandName}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </div>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-6">
                {navItems.map((item, index) => (
                  <a key={index} href={item.href} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
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
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3">
              <CraftButton
                text={loginText}
                href={loginHref}
                variant="outline"
                size="default"
                backgroundColor="transparent"
                textColor="#ea580c"
                borderRadius=""
                margin=""
                padding=""
              />
              <CraftButton
                text={ctaText}
                href={ctaHref}
                variant="default"
                size="default"
                backgroundColor="linear-gradient(to right, #f97316, #ec4899)"
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

Header4.craft = {
  displayName: "Header 4",
  props: {
    brandName: "BuildSite",
    navItems: [
      { label: "Home", href: "#home" },
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" }
    ],
    loginText: "Login",
    loginHref: "/login",
    ctaText: "Try Free",
    ctaHref: "/signup",
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
