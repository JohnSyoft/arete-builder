"use client"

import type React from "react"
import { Element, useEditor } from "@craftjs/core"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import {
  CraftHero1,
  CraftHero2,
  CraftHero3,
  CraftHero4,
  CraftHero5,
  CraftHeader1,
  CraftHeader2,
  CraftHeader3,
  CraftHeader4,
  CraftHeader5,
  CraftFooter1,
  CraftFooter2,
  CraftFooter3,
  CraftFooter4,
  CraftFooter5,
  CraftCTA1,
  CraftCTA2,
  CraftCTA3,
  CraftCTA4,
  CraftCTA5,
  CraftFeatures1,
  CraftFeatures2,
  CraftFeatures3,
  CraftFeatures4,
  CraftFeatures5,
  CraftFAQ1,
  CraftFAQ2,
  CraftFAQ3,
  CraftFAQ4,
  CraftFAQ5,
  CraftPageHeader1,
  CraftPageHeader2,
  CraftPageHeader3,
  CraftPageHeader4,
  CraftPageHeader5,
  CraftBlog1,
  CraftBlog2,
  CraftBlog3,
  CraftBlog4,
  CraftBlog5,
  CraftProducts1,
  CraftProducts2,
  CraftProducts3,
  CraftProducts4,
  CraftProducts5,
  CraftPricing1,
  CraftPricing2,
  CraftPricing3,
  CraftPricing4,
  CraftPricing5,
  CraftContact1,
  CraftContact2,
  CraftContact3,
  CraftContact4,
  CraftContact5,
} from "./craft-components"

interface BlockItemProps {
  component: React.ComponentType
  name: string
  description: string
}

function BlockItem({ component, name, description }: BlockItemProps) {
  const { connectors } = useEditor()

  return (
    <div
      ref={(ref) => {
        if (ref) {
          console.log(`Setting up drag for ${name}`)
          connectors.create(ref, <Element is={component} />)
        }
      }}
      className="group cursor-move border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:shadow-md transition-all"
      draggable
      onDragStart={(e) => {
        console.log(`Starting drag for ${name}`)
      }}
    >
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-medium text-sm text-gray-900 group-hover:text-blue-600">{name}</h4>
        <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center group-hover:bg-blue-100">
          <svg
            className="w-3 h-3 text-gray-500 group-hover:text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
      </div>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  )
}

export function EditorSidebar() {
  const basicBlocks = [
    { component: CraftHeader1, name: "Header 1", description: "Clean navigation header" },
    { component: CraftHeader2, name: "Header 2", description: "Dark theme header" },
    { component: CraftHeader3, name: "Header 3", description: "Gradient header with logo" },
    { component: CraftHeader4, name: "Header 4", description: "Colorful brand header" },
    { component: CraftHeader5, name: "Header 5", description: "Eco-friendly header" },
    { component: CraftHero1, name: "Hero 1", description: "Gradient hero with CTA" },
    { component: CraftHero2, name: "Hero 2", description: "Split layout hero" },
    { component: CraftHero3, name: "Hero 3", description: "Full-screen dark hero" },
    { component: CraftHero4, name: "Hero 4", description: "Feature-focused hero" },
    { component: CraftHero5, name: "Hero 5", description: "Conversion-optimized hero" },
    { component: CraftFooter1, name: "Footer 1", description: "Comprehensive footer" },
    { component: CraftFooter2, name: "Footer 2", description: "Clean business footer" },
    { component: CraftFooter3, name: "Footer 3", description: "Newsletter footer" },
    { component: CraftFooter4, name: "Footer 4", description: "Stats-focused footer" },
    { component: CraftFooter5, name: "Footer 5", description: "Eco-impact footer" },
    { component: CraftCTA1, name: "CTA 1", description: "Simple call-to-action" },
    { component: CraftCTA2, name: "CTA 2", description: "Feature-rich CTA" },
    { component: CraftCTA3, name: "CTA 3", description: "Email capture CTA" },
    { component: CraftCTA4, name: "CTA 4", description: "Conversion-focused CTA" },
    { component: CraftCTA5, name: "CTA 5", description: "Eco-friendly CTA" },
    { component: CraftPageHeader1, name: "Page Header 1", description: "Hero-style page header" },
    { component: CraftPageHeader2, name: "Page Header 2", description: "Breadcrumb page header" },
    { component: CraftPageHeader3, name: "Page Header 3", description: "Dark theme page header" },
    { component: CraftPageHeader4, name: "Page Header 4", description: "Stats page header" },
    { component: CraftPageHeader5, name: "Page Header 5", description: "Eco-friendly page header" },
  ]

  const contentBlocks = [
    { component: CraftFeatures1, name: "Features 1", description: "Icon grid features" },
    { component: CraftFeatures2, name: "Features 2", description: "Step-by-step features" },
    { component: CraftFeatures3, name: "Features 3", description: "Dark theme features" },
    { component: CraftFeatures4, name: "Features 4", description: "Comparison features" },
    { component: CraftFeatures5, name: "Features 5", description: "Eco-friendly features" },
    { component: CraftFAQ1, name: "FAQ 1", description: "Simple FAQ accordion" },
    { component: CraftFAQ2, name: "FAQ 2", description: "Categorized FAQ" },
    { component: CraftFAQ3, name: "FAQ 3", description: "Dark theme FAQ" },
    { component: CraftFAQ4, name: "FAQ 4", description: "Searchable FAQ" },
    { component: CraftFAQ5, name: "FAQ 5", description: "Eco-friendly FAQ" },
    { component: CraftBlog1, name: "Blog 1", description: "Featured blog posts" },
    { component: CraftBlog2, name: "Blog 2", description: "Blog grid layout" },
    { component: CraftBlog3, name: "Blog 3", description: "Dark theme blog" },
    { component: CraftBlog4, name: "Blog 4", description: "Minimal blog layout" },
    { component: CraftBlog5, name: "Blog 5", description: "Eco-friendly blog" },
  ]

  const ecommerceBlocks = [
    { component: CraftProducts1, name: "Products 1", description: "Product grid layout" },
    { component: CraftProducts2, name: "Products 2", description: "Featured products" },
    { component: CraftProducts3, name: "Products 3", description: "Product showcase" },
    { component: CraftProducts4, name: "Products 4", description: "Minimal products" },
    { component: CraftProducts5, name: "Products 5", description: "Eco-friendly products" },
    { component: CraftPricing1, name: "Pricing 1", description: "Simple pricing table" },
    { component: CraftPricing2, name: "Pricing 2", description: "Feature comparison" },
    { component: CraftPricing3, name: "Pricing 3", description: "Toggle pricing" },
    { component: CraftPricing4, name: "Pricing 4", description: "Enterprise pricing" },
    { component: CraftPricing5, name: "Pricing 5", description: "Eco-friendly pricing" },
  ]

  const otherBlocks = [
    { component: CraftContact1, name: "Contact 1", description: "Simple contact form" },
    { component: CraftContact2, name: "Contact 2", description: "Contact with map" },
    { component: CraftContact3, name: "Contact 3", description: "Business contact" },
    { component: CraftContact4, name: "Contact 4", description: "Support contact" },
    { component: CraftContact5, name: "Contact 5", description: "Eco-friendly contact" },
  ]

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">Components</h2>
        <p className="text-sm text-muted-foreground">Drag components to add them to your page</p>
      </div>

      <ScrollArea className="flex-1">
        <Accordion type="multiple" defaultValue={["basic", "content", "ecommerce", "other"]} className="p-4">
          <AccordionItem value="basic">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Basic
                <Badge variant="secondary" className="ml-2 text-xs">
                  {basicBlocks.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {basicBlocks.map((block, index) => (
                <BlockItem key={index} component={block.component} name={block.name} description={block.description} />
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="content">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Content
                <Badge variant="secondary" className="ml-2 text-xs">
                  {contentBlocks.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {contentBlocks.map((block, index) => (
                <BlockItem key={index} component={block.component} name={block.name} description={block.description} />
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="ecommerce">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Ecommerce
                <Badge variant="secondary" className="ml-2 text-xs">
                  {ecommerceBlocks.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {ecommerceBlocks.map((block, index) => (
                <BlockItem key={index} component={block.component} name={block.name} description={block.description} />
              ))}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="other">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Other
                <Badge variant="secondary" className="ml-2 text-xs">
                  {otherBlocks.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {otherBlocks.map((block, index) => (
                <BlockItem key={index} component={block.component} name={block.name} description={block.description} />
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  )
}
