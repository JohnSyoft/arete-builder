"use client"

import {
  CraftAlert,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCheckboxGroup,
  CraftCheckboxListTile,
  CraftChoiceChips,
  // Contact blocks
  CraftContact1,
  CraftCounterButton,
  CraftCreditCardForm,
  CraftForm,
  // CTA blocks
  CraftCTA1,
  CraftCTA2,
  CraftDivider,
  CraftDropDown,
  // Features blocks
  CraftFeatures1,
  CraftFeatures2,
  CraftFlex,
  // Footer blocks
  CraftFooter1,
  CraftFooter2,
  CraftGrid,
  // Header blocks
  CraftHeader1,
  CraftHeader2,
  CraftHeading,
  // Hero blocks
  CraftHero1,
  CraftHero2,
  CraftIcon,
  CraftImage,
  CraftInput,
  CraftLink,
  CraftList,
  CraftMap,
  CraftPinCode,
  CraftRadioButton,
  CraftRatingBar,
  CraftSection,
  CraftSelect,
  CraftSignature,
  CraftSlider,
  CraftSpacer,
  CraftSwitch,
  CraftSwitchListTile,
  // Basic blocks
  CraftText,
  CraftTextarea,
  CraftVideo
} from "@/components/editor/craft-components"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { useViewportStore } from "@/lib/store/viewport-store"
import { useSidebarStore } from "@/lib/store/sidebar-store"
import { useEditor } from "@craftjs/core"
import { ChevronLeft, ChevronRight } from "lucide-react"
import React from "react"

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

// Simple block item for narrow sidebar
const SimpleBlockItem = ({ component: Component, name }: { component: any, name: string }) => {
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
      className="p-2 bg-gray-50 rounded border border-gray-200 cursor-grab hover:bg-gray-100 transition-colors"
      draggable={false}
    >
      <span className="text-xs font-medium">{name}</span>
    </div>
  )
}

export function EditorSidebar() {
  const { currentViewport } = useViewportStore()
  const { isOpen, toggleSidebar } = useSidebarStore()
  const [activeCategory, setActiveCategory] = React.useState("elements")

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

  // All component categories
  const allCategories = {
    elements: {
      name: "Commonly Used Elements",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      items: [
        { component: CraftText, name: "Text", description: "Editable text element" },
        { component: CraftHeading, name: "Heading", description: "H1-H6 heading elements" },
        { component: CraftImage, name: "Image", description: "Responsive image block" },
        { component: CraftButton, name: "Button", description: "Interactive button element" },
        { component: CraftLink, name: "Link", description: "Clickable link element" },
        { component: CraftIcon, name: "Icon", description: "Scalable icon element" },
        { component: CraftBadge, name: "Badge", description: "Small label or tag element" },
        { component: CraftList, name: "List", description: "Ordered/unordered lists" },
        { component: CraftCard, name: "Card", description: "Content container with styling" },
        { component: CraftAlert, name: "Alert", description: "Alert messages and notifications" },
      ]
    },
    layout: {
      name: "Layout Elements",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" />
        </svg>
      ),
      items: [
        { component: CraftSection, name: "Container", description: "Flexible container element" },
        { component: CraftFlex, name: "Flex", description: "Flexible layout container (row/column)" },
        { component: CraftGrid, name: "Grid", description: "Advanced grid layout" },
        { component: CraftSpacer, name: "Spacer", description: "Vertical spacing element" },
        { component: CraftDivider, name: "Divider", description: "Horizontal line separator" },
      ]
    },
    base: {
      name: "Base Elements",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      items: [
        { component: CraftVideo, name: "Video", description: "Embedded video player" },
        { component: CraftMap, name: "Map", description: "Interactive map display" },
      ]
    },
    page: {
      name: "Page Elements",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
        </svg>
      ),
      items: [
        { component: CraftHero1, name: "Hero 1", description: "Gradient hero with call-to-action" },
        { component: CraftHero2, name: "Hero 2", description: "Split layout hero section" },
        { component: CraftHeader1, name: "Header 1", description: "Clean navigation header" },
        { component: CraftHeader2, name: "Header 2", description: "Dark theme header" },
        { component: CraftFooter1, name: "Footer 1", description: "Comprehensive footer" },
        { component: CraftFooter2, name: "Footer 2", description: "Clean business footer" },
        { component: CraftFeatures1, name: "Features 1", description: "Icon grid features" },
        { component: CraftFeatures2, name: "Features 2", description: "Step-by-step features" },
        { component: CraftCTA1, name: "CTA 1", description: "Simple call-to-action" },
        { component: CraftCTA2, name: "CTA 2", description: "Feature-rich CTA" },
        { component: CraftContact1, name: "Contact 1", description: "Simple contact form" },
      ]
    },
    forms: {
      name: "Form Elements",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      items: [
        { component: CraftForm, name: "Form", description: "Form container with API submission" },
        { component: CraftInput, name: "Input", description: "Form input field" },
        { component: CraftTextarea, name: "Textarea", description: "Multi-line text input" },
        { component: CraftDropDown, name: "Drop Down", description: "Select dropdown with options" },
        { component: CraftSelect, name: "Select", description: "Dropdown selection input" },
        { component: CraftCheckbox, name: "Checkbox", description: "Checkbox input element" },
        { component: CraftCheckboxGroup, name: "Checkbox Group", description: "Group of checkboxes" },
        { component: CraftCheckboxListTile, name: "Checkbox List Tile", description: "Checkbox list with titles" },
        { component: CraftSwitch, name: "Switch", description: "Toggle switch component" },
        { component: CraftSwitchListTile, name: "Switch List Tile", description: "Switch list with titles" },
        { component: CraftRadioButton, name: "Radio Button", description: "Radio button group" },
        { component: CraftSlider, name: "Slider", description: "Range slider input" },
        { component: CraftRatingBar, name: "Rating Bar", description: "Star rating component" },
        { component: CraftCounterButton, name: "Counter Button", description: "Number counter with +/- buttons" },
        { component: CraftPinCode, name: "Pin Code", description: "PIN/OTP input fields" },
        { component: CraftChoiceChips, name: "Choice Chips", description: "Selectable chip buttons" },
        { component: CraftCreditCardForm, name: "Credit Card Form", description: "Complete credit card form" },
        { component: CraftSignature, name: "Signature", description: "Signature drawing pad" },
      ]
    }
  }

  const currentCategory = allCategories[activeCategory as keyof typeof allCategories]

  return (
    <>
      {/* Toggle Button - Always visible */}
      <Button
        onClick={toggleSidebar}
        variant="outline"
        size="sm"
        className={`fixed top-4 z-50 transition-all duration-300 ${
          isOpen ? 'left-[calc(24rem+0.5rem)]' : 'left-2'
        }`}
        title={`${isOpen ? 'Hide' : 'Show'} sidebar (Ctrl/Cmd + B)`}
      >
        {isOpen ? (
          <ChevronLeft className="h-4 w-4" />
        ) : (
          <ChevronRight className="h-4 w-4" />
        )}
      </Button>

      {/* Sidebar */}
      <div className={`flex border-r border-border h-full transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${!isOpen ? 'absolute -z-10' : 'relative z-0'}`}>
        {/* Narrow Icon Sidebar */}
        <div className="w-16 bg-card border-r border-border flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">B</span>
            </div>
          </div>
          
          <div className="flex flex-col p-2 space-y-2">
            {Object.entries(allCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`w-12 h-12 rounded-lg flex items-center justify-center group transition-colors ${
                  activeCategory === key 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
                title={category.name}
              >
                {category.icon}
              </button>
            ))}
          </div>
          
          {/* Viewport indicator at bottom */}
          <div className="mt-auto p-2 border-t border-border">
            <div className="text-center">
              <Badge variant="outline" className="text-xs rotate-90 origin-center transform">
                {viewportInfo.name}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content Area - Shows components based on selected category */}
        <div className="w-80 bg-card flex flex-col h-full">
          <div className="p-4 border-b border-border">
            <h2 className="font-semibold text-foreground mb-1">{currentCategory?.name}</h2>
            <p className="text-sm text-muted-foreground">
              {currentCategory?.items.length} components available
            </p>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-4 space-y-3">
              {currentCategory?.items.map((item, index) => (
                <BlockItem 
                  key={index} 
                  component={item.component} 
                  name={item.name} 
                  description={item.description} 
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  )
}
