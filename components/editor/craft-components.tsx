import type React from "react"
import { useNode } from "@craftjs/core"
import { Hero1 } from "@/components/blocks/Hero/Hero1"
import { Hero2 } from "@/components/blocks/Hero/Hero2"
import { Hero3 } from "@/components/blocks/Hero/Hero3"
import { Hero4 } from "@/components/blocks/Hero/Hero4"
import { Hero5 } from "@/components/blocks/Hero/Hero5"
import { Header1 } from "@/components/blocks/Header/Header1"
import { Header2 } from "@/components/blocks/Header/Header2"
import { Header3 } from "@/components/blocks/Header/Header3"
import { Header4 } from "@/components/blocks/Header/Header4"
import { Header5 } from "@/components/blocks/Header/Header5"
import { Footer1 } from "@/components/blocks/Footer/Footer1"
import { Footer2 } from "@/components/blocks/Footer/Footer2"
import { Footer3 } from "@/components/blocks/Footer/Footer3"
import { Footer4 } from "@/components/blocks/Footer/Footer4"
import { Footer5 } from "@/components/blocks/Footer/Footer5"
import { CTA1 } from "@/components/blocks/CTA/CTA1"
import { CTA2 } from "@/components/blocks/CTA/CTA2"
import { CTA3 } from "@/components/blocks/CTA/CTA3"
import { CTA4 } from "@/components/blocks/CTA/CTA4"
import { CTA5 } from "@/components/blocks/CTA/CTA5"
import { Features1 } from "@/components/blocks/Features/Features1"
import { Features2 } from "@/components/blocks/Features/Features2"
import { Features3 } from "@/components/blocks/Features/Features3"
import { Features4 } from "@/components/blocks/Features/Features4"
import { Features5 } from "@/components/blocks/Features/Features5"
import { FAQ1 } from "@/components/blocks/FAQ/FAQ1"
import { FAQ2 } from "@/components/blocks/FAQ/FAQ2"
import { FAQ3 } from "@/components/blocks/FAQ/FAQ3"
import { FAQ4 } from "@/components/blocks/FAQ/FAQ4"
import { FAQ5 } from "@/components/blocks/FAQ/FAQ5"
import { PageHeader1 } from "@/components/blocks/PageHeader/PageHeader1"
import { PageHeader2 } from "@/components/blocks/PageHeader/PageHeader2"
import { PageHeader3 } from "@/components/blocks/PageHeader/PageHeader3"
import { PageHeader4 } from "@/components/blocks/PageHeader/PageHeader4"
import { PageHeader5 } from "@/components/blocks/PageHeader/PageHeader5"
import { Blog1 } from "@/components/blocks/Blog/Blog1"
import { Blog2 } from "@/components/blocks/Blog/Blog2"
import { Blog3 } from "@/components/blocks/Blog/Blog3"
import { Blog4 } from "@/components/blocks/Blog/Blog4"
import { Blog5 } from "@/components/blocks/Blog/Blog5"
import { Products1 } from "@/components/blocks/Products/Products1"
import { Products2 } from "@/components/blocks/Products/Products2"
import { Products3 } from "@/components/blocks/Products/Products3"
import { Products4 } from "@/components/blocks/Products/Products4"
import { Products5 } from "@/components/blocks/Products/Products5"
import { Pricing1 } from "@/components/blocks/Pricing/Pricing1"
import { Pricing2 } from "@/components/blocks/Pricing/Pricing2"
import { Pricing3 } from "@/components/blocks/Pricing/Pricing3"
import { Pricing4 } from "@/components/blocks/Pricing/Pricing4"
import { Pricing5 } from "@/components/blocks/Pricing/Pricing5"
import { Contact1 } from "@/components/blocks/Contact/Contact1"
import { Contact2 } from "@/components/blocks/Contact/Contact2"
import { Contact3 } from "@/components/blocks/Contact/Contact3"
import { Contact4 } from "@/components/blocks/Contact/Contact4"
import { Contact5 } from "@/components/blocks/Contact/Contact5"

// Container component for the root
export const Container = ({ children }: { children: React.ReactNode }) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className="min-h-screen w-full"
    >
      {children}
    </div>
  )
}

Container.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => false,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
}

// Canvas component for drop zones
export const Canvas = ({ children, className = "", ...props }: { children?: React.ReactNode, className?: string, [key: string]: any }) => {
  const {
    connectors: { connect, drag },
  } = useNode()

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`min-h-[200px] w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

Canvas.craft = {
  displayName: "Canvas",
  props: {},
  rules: {
    canDrag: () => false,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
}

// Wrapper function to make components draggable and selectable
function createCraftComponent(Component: React.ComponentType, displayName: string) {
  const CraftComponent = (props: any) => {
    const {
      connectors: { connect, drag },
      selected,
      hovered,
    } = useNode((state) => ({
      selected: state.events.selected,
      hovered: state.events.hovered,
    }))

    return (
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref))
          }
        }}
        className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
        style={{ minHeight: '50px' }}
      >
        <Component {...props} />
        {(selected || hovered) && (
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
            {displayName}
          </div>
        )}
      </div>
    )
  }

  CraftComponent.craft = {
    displayName,
    props: {},
    rules: {
      canDrag: () => true,
      canDrop: () => false,
      canMoveIn: () => false,
      canMoveOut: () => true,
    },
  }

  return CraftComponent
}

export const CraftHero1 = createCraftComponent(Hero1, "Hero 1")
export const CraftHero2 = createCraftComponent(Hero2, "Hero 2")
export const CraftHero3 = createCraftComponent(Hero3, "Hero 3")
export const CraftHero4 = createCraftComponent(Hero4, "Hero 4")
export const CraftHero5 = createCraftComponent(Hero5, "Hero 5")

export const CraftHeader1 = createCraftComponent(Header1, "Header 1")
export const CraftHeader2 = createCraftComponent(Header2, "Header 2")
export const CraftHeader3 = createCraftComponent(Header3, "Header 3")
export const CraftHeader4 = createCraftComponent(Header4, "Header 4")
export const CraftHeader5 = createCraftComponent(Header5, "Header 5")

export const CraftFooter1 = createCraftComponent(Footer1, "Footer 1")
export const CraftFooter2 = createCraftComponent(Footer2, "Footer 2")
export const CraftFooter3 = createCraftComponent(Footer3, "Footer 3")
export const CraftFooter4 = createCraftComponent(Footer4, "Footer 4")
export const CraftFooter5 = createCraftComponent(Footer5, "Footer 5")

export const CraftCTA1 = createCraftComponent(CTA1, "CTA 1")
export const CraftCTA2 = createCraftComponent(CTA2, "CTA 2")
export const CraftCTA3 = createCraftComponent(CTA3, "CTA 3")
export const CraftCTA4 = createCraftComponent(CTA4, "CTA 4")
export const CraftCTA5 = createCraftComponent(CTA5, "CTA 5")

export const CraftFeatures1 = createCraftComponent(Features1, "Features 1")
export const CraftFeatures2 = createCraftComponent(Features2, "Features 2")
export const CraftFeatures3 = createCraftComponent(Features3, "Features 3")
export const CraftFeatures4 = createCraftComponent(Features4, "Features 4")
export const CraftFeatures5 = createCraftComponent(Features5, "Features 5")

export const CraftFAQ1 = createCraftComponent(FAQ1, "FAQ 1")
export const CraftFAQ2 = createCraftComponent(FAQ2, "FAQ 2")
export const CraftFAQ3 = createCraftComponent(FAQ3, "FAQ 3")
export const CraftFAQ4 = createCraftComponent(FAQ4, "FAQ 4")
export const CraftFAQ5 = createCraftComponent(FAQ5, "FAQ 5")

export const CraftPageHeader1 = createCraftComponent(PageHeader1, "Page Header 1")
export const CraftPageHeader2 = createCraftComponent(PageHeader2, "Page Header 2")
export const CraftPageHeader3 = createCraftComponent(PageHeader3, "Page Header 3")
export const CraftPageHeader4 = createCraftComponent(PageHeader4, "Page Header 4")
export const CraftPageHeader5 = createCraftComponent(PageHeader5, "Page Header 5")

export const CraftBlog1 = createCraftComponent(Blog1, "Blog 1")
export const CraftBlog2 = createCraftComponent(Blog2, "Blog 2")
export const CraftBlog3 = createCraftComponent(Blog3, "Blog 3")
export const CraftBlog4 = createCraftComponent(Blog4, "Blog 4")
export const CraftBlog5 = createCraftComponent(Blog5, "Blog 5")

export const CraftProducts1 = createCraftComponent(Products1, "Products 1")
export const CraftProducts2 = createCraftComponent(Products2, "Products 2")
export const CraftProducts3 = createCraftComponent(Products3, "Products 3")
export const CraftProducts4 = createCraftComponent(Products4, "Products 4")
export const CraftProducts5 = createCraftComponent(Products5, "Products 5")

export const CraftPricing1 = createCraftComponent(Pricing1, "Pricing 1")
export const CraftPricing2 = createCraftComponent(Pricing2, "Pricing 2")
export const CraftPricing3 = createCraftComponent(Pricing3, "Pricing 3")
export const CraftPricing4 = createCraftComponent(Pricing4, "Pricing 4")
export const CraftPricing5 = createCraftComponent(Pricing5, "Pricing 5")

export const CraftContact1 = createCraftComponent(Contact1, "Contact 1")
export const CraftContact2 = createCraftComponent(Contact2, "Contact 2")
export const CraftContact3 = createCraftComponent(Contact3, "Contact 3")
export const CraftContact4 = createCraftComponent(Contact4, "Contact 4")
export const CraftContact5 = createCraftComponent(Contact5, "Contact 5")

export const componentResolver = {
  Container,
  Canvas,
  Hero1: CraftHero1,
  Hero2: CraftHero2,
  Hero3: CraftHero3,
  Hero4: CraftHero4,
  Hero5: CraftHero5,
  Header1: CraftHeader1,
  Header2: CraftHeader2,
  Header3: CraftHeader3,
  Header4: CraftHeader4,
  Header5: CraftHeader5,
  Footer1: CraftFooter1,
  Footer2: CraftFooter2,
  Footer3: CraftFooter3,
  Footer4: CraftFooter4,
  Footer5: CraftFooter5,
  CTA1: CraftCTA1,
  CTA2: CraftCTA2,
  CTA3: CraftCTA3,
  CTA4: CraftCTA4,
  CTA5: CraftCTA5,
  Features1: CraftFeatures1,
  Features2: CraftFeatures2,
  Features3: CraftFeatures3,
  Features4: CraftFeatures4,
  Features5: CraftFeatures5,
  FAQ1: CraftFAQ1,
  FAQ2: CraftFAQ2,
  FAQ3: CraftFAQ3,
  FAQ4: CraftFAQ4,
  FAQ5: CraftFAQ5,
  PageHeader1: CraftPageHeader1,
  PageHeader2: CraftPageHeader2,
  PageHeader3: CraftPageHeader3,
  PageHeader4: CraftPageHeader4,
  PageHeader5: CraftPageHeader5,
  Blog1: CraftBlog1,
  Blog2: CraftBlog2,
  Blog3: CraftBlog3,
  Blog4: CraftBlog4,
  Blog5: CraftBlog5,
  Products1: CraftProducts1,
  Products2: CraftProducts2,
  Products3: CraftProducts3,
  Products4: CraftProducts4,
  Products5: CraftProducts5,
  Pricing1: CraftPricing1,
  Pricing2: CraftPricing2,
  Pricing3: CraftPricing3,
  Pricing4: CraftPricing4,
  Pricing5: CraftPricing5,
  Contact1: CraftContact1,
  Contact2: CraftContact2,
  Contact3: CraftContact3,
  Contact4: CraftContact4,
  Contact5: CraftContact5,
}
