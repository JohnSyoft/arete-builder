import type React from "react"
import { useNode } from "@craftjs/core"
// Basic blocks
import { Text } from "@/components/blocks/Basic/Text"
import { Image } from "@/components/blocks/Basic/Image"
import { Button } from "@/components/blocks/Basic/Button"
import { Spacer } from "@/components/blocks/Basic/Spacer"
import { Divider } from "@/components/blocks/Basic/Divider"
import { Columns } from "@/components/blocks/Basic/Columns"
import { Link } from "@/components/blocks/Basic/Link"
import { Video } from "@/components/blocks/Basic/Video"
import { Map } from "@/components/blocks/Basic/Map"
import { Section } from "@/components/blocks/Basic/Section"
import { Badge } from "@/components/blocks/Basic/Badge"
import { Input } from "@/components/blocks/Basic/Input"
import { Textarea } from "../blocks/Basic/Textarea"
import { LineBreak } from "../blocks/Basic/LineBreak"
import { Row } from "../blocks/Basic/Row"
import { Card } from "../blocks/Basic/Card"
import { Heading } from "../blocks/Basic/Heading"
import { Select } from "../blocks/Basic/Select"
import { Icon } from "../blocks/Basic/Icon"
import { Grid } from "../blocks/Basic/Grid"
import { Navigation } from "../blocks/Basic/Navigation"
import { Checkbox } from "../blocks/Basic/Checkbox"
import { List } from "../blocks/Basic/List"
import { Alert } from "../blocks/Basic/Alert"
import { FlexRow } from "../blocks/Basic/FlexRow"
import { Flex } from "../blocks/Basic/Flex"
// Hero blocks
import { Hero1 } from "@/components/blocks/Hero/Hero1"
import { Hero2 } from "@/components/blocks/Hero/Hero2"
// Header blocks
import { Header1 } from "@/components/blocks/Header/Header1"
import { Header2 } from "@/components/blocks/Header/Header2"
// Footer blocks
import { Footer1 } from "@/components/blocks/Footer/Footer1"
import { Footer2 } from "@/components/blocks/Footer/Footer2"
// CTA blocks
import { CTA1 } from "@/components/blocks/CTA/CTA1"
import { CTA2 } from "@/components/blocks/CTA/CTA2"
// Features blocks
import { Features1 } from "@/components/blocks/Features/Features1"
import { Features2 } from "@/components/blocks/Features/Features2"
// Contact blocks  
import { Contact1 } from "@/components/blocks/Contact/Contact1"

// Container component for wrapping other components
export const Container = ({ children, className = "", ...props }: { children?: React.ReactNode, className?: string, [key: string]: any }) => {
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
      className={`relative ${className}`}
      style={{
        minHeight: children ? 'auto' : '200px',
        border: selected ? '2px solid #3b82f6' : hovered ? '2px solid #93c5fd' : '2px dashed #e5e7eb',
      }}
      {...props}
    >
      {children}
      {selected && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Container
        </div>
      )}
    </div>
  )
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
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
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

// Basic blocks (with full CraftJS integration)
export const CraftText = Text
export const CraftImage = Image
export const CraftButton = Button
export const CraftSpacer = Spacer
export const CraftDivider = Divider
export const CraftColumns = Columns
export const CraftLink = Link
export const CraftVideo = Video
export const CraftMap = Map
export const CraftSection = Section
export const CraftBadge = Badge
export const CraftInput = Input
export const CraftTextarea = Textarea
export const CraftLineBreak = LineBreak
export const CraftRow = Row
export const CraftCard = Card
export const CraftHeading = Heading
export const CraftSelect = Select
export const CraftIcon = Icon
export const CraftGrid = Grid
export const CraftNavigation = Navigation
export const CraftCheckbox = Checkbox
export const CraftList = List
export const CraftAlert = Alert
export const CraftFlexRow = FlexRow
export const CraftFlex = Flex

// Hero blocks
export const CraftHero1 = Hero1
export const CraftHero2 = Hero2

export const CraftHeader1 = Header1
export const CraftHeader2 = Header2

export const CraftFooter1 = Footer1
export const CraftFooter2 = Footer2

export const CraftCTA1 = CTA1
export const CraftCTA2 = CTA2

export const CraftFeatures1 = Features1
export const CraftFeatures2 = Features2

export const CraftContact1 = Contact1

export const componentResolver = {
  Container,
  Canvas,
  // Basic blocks
  Text: CraftText,
  Image: CraftImage,
  Button: CraftButton,
  Spacer: CraftSpacer,
  Divider: CraftDivider,
  Columns: CraftColumns,
  Link: CraftLink,
  Video: CraftVideo,
  Map: CraftMap,
  Section: CraftSection,
  Badge: CraftBadge,
  Input: CraftInput,
  Textarea: CraftTextarea,
  LineBreak: CraftLineBreak,
  Row: CraftRow,
  Card: CraftCard,
  Heading: CraftHeading,
  Select: CraftSelect,
  Icon: CraftIcon,
  Grid: CraftGrid,
  Navigation: CraftNavigation,
  Checkbox: CraftCheckbox,
  List: CraftList,
  Alert: CraftAlert,
  FlexRow: CraftFlexRow,
  Flex: CraftFlex,
  // Hero blocks
  Hero1: CraftHero1,
  Hero2: CraftHero2,
  // Header blocks
  Header1: CraftHeader1,
  Header2: CraftHeader2,
  // Footer blocks
  Footer1: CraftFooter1,
  Footer2: CraftFooter2,
  // CTA blocks
  CTA1: CraftCTA1,
  CTA2: CraftCTA2,
  // Features blocks
  Features1: CraftFeatures1,
  Features2: CraftFeatures2,
  // Contact blocks
  Contact1: CraftContact1,
}
