"use client"

import React from "react"
import { Element, useEditor } from "@craftjs/core"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useViewportStore } from "@/lib/store/viewport-store"
import {
  // Basic blocks
  CraftText,
  CraftImage,
  CraftButton,
  CraftSpacer,
  CraftDivider,
  CraftColumns,
  CraftLink,
  CraftVideo,
  CraftMap,
  // Hero blocks
  CraftHero1,
  CraftHero2,
  CraftHero3,
  CraftHero4,
  CraftHero5,
  // Header blocks
  CraftHeader1,
  CraftHeader2,
  CraftHeader3,
  CraftHeader4,
  CraftHeader5,
  // Footer blocks
  CraftFooter1,
  CraftFooter2,
  CraftFooter3,
  CraftFooter4,
  CraftFooter5,
  // CTA blocks
  CraftCTA1,
  CraftCTA2,
  CraftCTA3,
  CraftCTA4,
  CraftCTA5,
  // Features blocks
  CraftFeatures1,
  CraftFeatures2,
  CraftFeatures3,
  CraftFeatures4,
  CraftFeatures5,
  // FAQ blocks
  CraftFAQ1,
  CraftFAQ2,
  CraftFAQ3,
  CraftFAQ4,
  CraftFAQ5,
  // Page Header blocks
  CraftPageHeader1,
  CraftPageHeader2,
  CraftPageHeader3,
  CraftPageHeader4,
  CraftPageHeader5,
  // Blog blocks
  CraftBlog1,
  CraftBlog2,
  CraftBlog3,
  CraftBlog4,
  CraftBlog5,
  // Products blocks
  CraftProducts1,
  CraftProducts2,
  CraftProducts3,
  CraftProducts4,
  CraftProducts5,
  // Pricing blocks
  CraftPricing1,
  CraftPricing2,
  CraftPricing3,
  CraftPricing4,
  CraftPricing5,
  // Contact blocks
  CraftContact1,
  CraftContact2,
  CraftContact3,
  CraftContact4,
  CraftContact5,
  // Team blocks
  CraftTeam1,
  CraftTeam2,
  CraftTeam3,
  CraftTeam4,
  CraftTeam5,
  // Blog Grid blocks
  CraftBlogGrid1,
  CraftBlogGrid2,
  CraftBlogGrid3,
  CraftBlogGrid4,
  CraftBlogGrid5,
  // Product Details blocks
  CraftProductDetails1,
  CraftProductDetails2,
  CraftProductDetails3,
  CraftProductDetails4,
  CraftProductDetails5,
  // Gallery blocks
  CraftGallery1,
  CraftGallery2,
  CraftGallery3,
  CraftGallery4,
  CraftGallery5,
  // Testimonial blocks
  CraftTestimonial1,
  CraftTestimonial2,
  CraftTestimonial3,
  CraftTestimonial4,
  CraftTestimonial5,
  // Other blocks
  CraftAccount1,
  CraftNewsletter1,
  CraftNewsletter2,
  CraftNewsletter3,
  CraftNewsletter4,
  CraftNewsletter5,
} from "@/components/editor/craft-components"

interface BlockItemProps {
  component: React.ComponentType
  name: string
  description: string
}

const BlockItem = ({ component: Component, name, description }: { component: any, name: string, description?: string }) => {
  const {
    connectors: { create },
  } = useEditor()

  return (
    <div
      ref={(ref) => {
        if (ref) {
          create(ref, React.createElement(Component))
        }
      }}
      className="p-3 bg-gray-50 rounded-lg border border-gray-200 cursor-grab hover:bg-gray-100 transition-colors"
      draggable={false}
    >
      <h4 className="font-medium text-sm">{name}</h4>
      {description && <p className="text-xs text-gray-600 mt-1">{description}</p>}
    </div>
  )
}

export function EditorSidebar() {
  const { currentViewport } = useViewportStore()
  
  const getViewportInfo = () => {
    switch (currentViewport) {
      case 'mobile':
        return { name: 'Mobile', size: '375px' }
      case 'tablet':
        return { name: 'Tablet', size: '768px' }
      case 'desktop':
      default:
        return { name: 'Desktop', size: '100%' }
    }
  }

  const viewportInfo = getViewportInfo()

  // Essential basic building blocks
  const basicBlocks = [
    { component: CraftText, name: "Text", description: "Editable text element" },
    { component: CraftImage, name: "Image", description: "Responsive image block" },
    { component: CraftButton, name: "Button", description: "Interactive button element" },
    { component: CraftSpacer, name: "Spacer", description: "Vertical spacing element" },
    { component: CraftDivider, name: "Divider", description: "Horizontal line separator" },
    { component: CraftColumns, name: "Columns", description: "Responsive column layout" },
    { component: CraftLink, name: "Link", description: "Clickable link element" },
    { component: CraftVideo, name: "Video", description: "Embedded video player" },
    { component: CraftMap, name: "Map", description: "Interactive map display" },
  ]

  // Layout and structural blocks
  const layoutBlocks = [
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
    { component: CraftBlogGrid1, name: "Blog Grid 1", description: "Grid layout for blog posts" },
    { component: CraftBlogGrid2, name: "Blog Grid 2", description: "Masonry blog grid" },
    { component: CraftBlogGrid3, name: "Blog Grid 3", description: "Dark theme blog grid" },
    { component: CraftBlogGrid4, name: "Blog Grid 4", description: "Minimal blog grid" },
    { component: CraftBlogGrid5, name: "Blog Grid 5", description: "Eco-friendly blog grid" },
    { component: CraftTeam1, name: "Team 1", description: "Team member showcase" },
    { component: CraftTeam2, name: "Team 2", description: "Team grid layout" },
    { component: CraftTeam3, name: "Team 3", description: "Dark theme team" },
    { component: CraftTeam4, name: "Team 4", description: "Minimal team layout" },
    { component: CraftTeam5, name: "Team 5", description: "Eco-friendly team" },
    { component: CraftTestimonial1, name: "Testimonial 1", description: "Customer testimonials" },
    { component: CraftTestimonial2, name: "Testimonial 2", description: "Review carousel" },
    { component: CraftTestimonial3, name: "Testimonial 3", description: "Dark theme testimonials" },
    { component: CraftTestimonial4, name: "Testimonial 4", description: "Minimal testimonials" },
    { component: CraftTestimonial5, name: "Testimonial 5", description: "Eco-friendly testimonials" },
    { component: CraftGallery1, name: "Gallery 1", description: "Image gallery" },
    { component: CraftGallery2, name: "Gallery 2", description: "Portfolio showcase" },
    { component: CraftGallery3, name: "Gallery 3", description: "Dark theme gallery" },
    { component: CraftGallery4, name: "Gallery 4", description: "Minimal gallery" },
    { component: CraftGallery5, name: "Gallery 5", description: "Eco-friendly gallery" },
    { component: CraftNewsletter1, name: "Newsletter 1", description: "Email signup form" },
    { component: CraftNewsletter2, name: "Newsletter 2", description: "Newsletter subscription" },
    { component: CraftNewsletter3, name: "Newsletter 3", description: "Dark theme newsletter" },
    { component: CraftNewsletter4, name: "Newsletter 4", description: "Minimal newsletter" },
    { component: CraftNewsletter5, name: "Newsletter 5", description: "Eco-friendly newsletter" },
  ]

  const ecommerceBlocks = [
    { component: CraftProducts1, name: "Products 1", description: "Product grid layout" },
    { component: CraftProducts2, name: "Products 2", description: "Featured products" },
    { component: CraftProducts3, name: "Products 3", description: "Product showcase" },
    { component: CraftProducts4, name: "Products 4", description: "Minimal products" },
    { component: CraftProducts5, name: "Products 5", description: "Eco-friendly products" },
    { component: CraftProductDetails1, name: "Product Details 1", description: "Detailed product view" },
    { component: CraftProductDetails2, name: "Product Details 2", description: "Product with gallery" },
    { component: CraftProductDetails3, name: "Product Details 3", description: "Dark theme product details" },
    { component: CraftProductDetails4, name: "Product Details 4", description: "Minimal product details" },
    { component: CraftProductDetails5, name: "Product Details 5", description: "Eco-friendly product details" },
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
    { component: CraftAccount1, name: "Account 1", description: "User account dashboard" },
  ]

  return (
    <div className="w-80 bg-card border-r border-border flex flex-col h-full">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">Components</h2>
        <p className="text-sm text-muted-foreground">Drag components to add them to your page</p>
        <div className="mt-2 flex items-center space-x-2">
          <Badge variant="outline" className="text-xs">
            {viewportInfo.name}
          </Badge>
          <span className="text-xs text-muted-foreground">{viewportInfo.size}</span>
        </div>
      </div>

      <ScrollArea className="flex-1">
        <Accordion type="multiple" defaultValue={["basic", "layout", "content", "ecommerce", "other"]} className="p-4">
          <AccordionItem value="basic">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Basic Elements
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

          <AccordionItem value="layout">
            <AccordionTrigger className="text-sm font-medium">
              <div className="flex items-center">
                Layout & Structure
                <Badge variant="secondary" className="ml-2 text-xs">
                  {layoutBlocks.length}
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="space-y-3 pt-3">
              {layoutBlocks.map((block, index) => (
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
