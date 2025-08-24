import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Header5Props extends SectionProps {
  brandName?: string
  navItems?: Array<{ label: string; href: string }>
  signInText?: string
  signInHref?: string
  ctaText?: string
  ctaHref?: string
  statusText?: string
}

export function Header5({
  brandName = "EcoBuilder",
  navItems = [
    { label: "Build", href: "#build" },
    { label: "Explore", href: "#explore" },
    { label: "Learn", href: "#learn" },
    { label: "Community", href: "#community" }
  ],
  signInText = "Sign In",
  signInHref = "/signin",
  ctaText = "Start Building",
  ctaHref = "/signup",
  statusText = "Online",
  backgroundColor = "#f0fdf4",
  ...props
}: Header5Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const headerProps = {
    backgroundColor,
    color: "#111827",
    borderBottom: "1px solid #bbf7d0",
    ...props
  }

  return (
    <Section {...headerProps}>
      <Element id="header5Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Brand */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900 ml-2">
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
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a key={index} href={item.href} className="text-gray-700 hover:text-green-600 transition-colors">
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
              <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>
                  <CraftText
                    text={statusText}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </div>
              <CraftButton
                text={signInText}
                href={signInHref}
                variant="outline"
                size="default"
                backgroundColor="transparent"
                textColor="#16a34a"
                borderRadius=""
                margin=""
                padding=""
              />
              <CraftButton
                text={ctaText}
                href={ctaHref}
                variant="default"
                size="default"
                backgroundColor="#16a34a"
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

Header5.craft = {
  displayName: "Header 5",
  props: {
    brandName: "EcoBuilder",
    navItems: [
      { label: "Build", href: "#build" },
      { label: "Explore", href: "#explore" },
      { label: "Learn", href: "#learn" },
      { label: "Community", href: "#community" }
    ],
    signInText: "Sign In",
    signInHref: "/signin",
    ctaText: "Start Building",
    ctaHref: "/signup",
    statusText: "Online",
    backgroundColor: "#f0fdf4"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
