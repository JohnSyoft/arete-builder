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
// Hero blocks
import { Hero1 } from "@/components/blocks/Hero/Hero1"
import { Hero2 } from "@/components/blocks/Hero/Hero2"
import { Hero3 } from "@/components/blocks/Hero/Hero3"
import { Hero4 } from "@/components/blocks/Hero/Hero4"
import { Hero5 } from "@/components/blocks/Hero/Hero5"
// Header blocks
import { Header1 } from "@/components/blocks/Header/Header1"
import { Header2 } from "@/components/blocks/Header/Header2"
import { Header3 } from "@/components/blocks/Header/Header3"
import { Header4 } from "@/components/blocks/Header/Header4"
import { Header5 } from "@/components/blocks/Header/Header5"
// Footer blocks
import { Footer1 } from "@/components/blocks/Footer/Footer1"
import { Footer2 } from "@/components/blocks/Footer/Footer2"
import { Footer3 } from "@/components/blocks/Footer/Footer3"
import { Footer4 } from "@/components/blocks/Footer/Footer4"
import { Footer5 } from "@/components/blocks/Footer/Footer5"
// CTA blocks
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
import { BlogContent1 } from "@/components/blocks/BlogContent/BlogContent1"
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
import { Team1 } from "@/components/blocks/Team/Team1"
import { Team2 } from "@/components/blocks/Team/Team2"
// import { Team3 } from "@/components/blocks/Team/Team3"
import { Team4 } from "@/components/blocks/Team/Team4"
import { Team5 } from "@/components/blocks/Team/Team5"
import { BlogGrid1 } from "@/components/blocks/BlogGrid/BlogGrid1"
import { BlogGrid2 } from "@/components/blocks/BlogGrid/BlogGrid2"
import { BlogGrid3 } from "@/components/blocks/BlogGrid/BlogGrid3"
import { BlogGrid4 } from "@/components/blocks/BlogGrid/BlogGrid4"
import { BlogGrid5 } from "@/components/blocks/BlogGrid/BlogGrid5"
import { ProductDetails1 } from "@/components/blocks/ProductDetails/ProductDetails1"
import { ProductDetails2 } from "@/components/blocks/ProductDetails/ProductDetails2"
import { ProductDetails3 } from "@/components/blocks/ProductDetails/ProductDetails3"
import { ProductDetails4 } from "@/components/blocks/ProductDetails/ProductDetails4"
import { ProductDetails5 } from "@/components/blocks/ProductDetails/ProductDetails5"
import { Gallery1 } from "@/components/blocks/Gallery/Gallery1"
import { Gallery2 } from "@/components/blocks/Gallery/Gallery2"
import { Gallery3 } from "@/components/blocks/Gallery/Gallery3"
import { Gallery4 } from "@/components/blocks/Gallery/Gallery4"
import { Gallery5 } from "@/components/blocks/Gallery/Gallery5"
import { Testimonial1 } from "@/components/blocks/Testimonial/Testimonial1"
import { Testimonial2 } from "@/components/blocks/Testimonial/Testimonial2"
import { Testimonial3 } from "@/components/blocks/Testimonial/Testimonial3"
import { Testimonial4 } from "@/components/blocks/Testimonial/Testimonial4"
import { Testimonial5 } from "@/components/blocks/Testimonial/Testimonial5"
import { Account1 } from "@/components/blocks/Account/Account1"
import { Newsletter1 } from "@/components/blocks/Newsletter/Newsletter1"
// import { Newsletter2 } from "@/components/blocks/Newsletter/Newsletter2"
import { Newsletter3 } from "@/components/blocks/Newsletter/Newsletter3"
import { Newsletter4 } from "@/components/blocks/Newsletter/Newsletter4"
import { Newsletter5 } from "@/components/blocks/Newsletter/Newsletter5"

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

// Hero blocks
export const CraftHero1 = Hero1
export const CraftHero2 = Hero2
export const CraftHero3 = Hero3
export const CraftHero4 = Hero4
export const CraftHero5 = Hero5

export const CraftHeader1 = Header1
export const CraftHeader2 = Header2
export const CraftHeader3 = Header3
export const CraftHeader4 = Header4
export const CraftHeader5 = Header5

export const CraftFooter1 = Footer1
export const CraftFooter2 = Footer2
export const CraftFooter3 = Footer3
export const CraftFooter4 = Footer4
export const CraftFooter5 = Footer5

export const CraftCTA1 = CTA1
export const CraftCTA2 = CTA2
export const CraftCTA3 = CTA3
export const CraftCTA4 = CTA4
export const CraftCTA5 = CTA5

export const CraftFeatures1 = Features1
export const CraftFeatures2 = Features2
export const CraftFeatures3 = Features3
export const CraftFeatures4 = Features4
export const CraftFeatures5 = Features5

export const CraftFAQ1 = FAQ1
export const CraftFAQ2 = FAQ2
export const CraftFAQ3 = FAQ3
export const CraftFAQ4 = FAQ4
export const CraftFAQ5 = FAQ5

export const CraftPageHeader1 = PageHeader1 
export const CraftPageHeader2 = PageHeader2 
export const CraftPageHeader3 = PageHeader3 
export const CraftPageHeader4 = PageHeader4 
export const CraftPageHeader5 = PageHeader5 

export const CraftBlog1 = Blog1
export const CraftBlog2 = Blog2
export const CraftBlog3 = Blog3
export const CraftBlog4 = Blog4
export const CraftBlog5 = Blog5
export const CraftBlogContent1 = BlogContent1

export const CraftProducts1 = Products1
export const CraftProducts2 = Products2
export const CraftProducts3 = Products3
export const CraftProducts4 = Products4
export const CraftProducts5 = Products5

export const CraftPricing1 = Pricing1
export const CraftPricing2 = Pricing2
export const CraftPricing3 = Pricing3
export const CraftPricing4 = Pricing4
export const CraftPricing5 = Pricing5

export const CraftContact1 = Contact1
export const CraftContact2 = Contact2
export const CraftContact3 = Contact3
export const CraftContact4 = Contact4
export const CraftContact5 = Contact5

export const CraftTeam1 = Team1
export const CraftTeam2 = Team2
// export const CraftTeam3 = Team3
export const CraftTeam4 = Team4
export const CraftTeam5 = Team5

export const CraftBlogGrid1 = BlogGrid1 
export const CraftBlogGrid2 = BlogGrid2 
export const CraftBlogGrid3 = BlogGrid3 
export const CraftBlogGrid4 = BlogGrid4 
export const CraftBlogGrid5 = BlogGrid5 

export const CraftProductDetails1 = ProductDetails1 
export const CraftProductDetails2 = ProductDetails2 
export const CraftProductDetails3 = ProductDetails3 
export const CraftProductDetails4 = ProductDetails4 
export const CraftProductDetails5 = ProductDetails5 

export const CraftGallery1 = Gallery1
export const CraftGallery2 = Gallery2
export const CraftGallery3 = Gallery3
export const CraftGallery4 = Gallery4
export const CraftGallery5 = Gallery5

export const CraftTestimonial1 = Testimonial1
export const CraftTestimonial2 = Testimonial2
export const CraftTestimonial3 = Testimonial3
export const CraftTestimonial4 = Testimonial4
export const CraftTestimonial5 = Testimonial5

export const CraftAccount1 = Account1

export const CraftNewsletter1 = Newsletter1
// export const CraftNewsletter2 = Newsletter2
export const CraftNewsletter3 = Newsletter3
export const CraftNewsletter4 = Newsletter4
export const CraftNewsletter5 = Newsletter5

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
  // Hero blocks
  Hero1: CraftHero1,
  Hero2: CraftHero2,
  Hero3: CraftHero3,
  Hero4: CraftHero4,
  Hero5: CraftHero5,
  // Header blocks
  Header1: CraftHeader1,
  Header2: CraftHeader2,
  Header3: CraftHeader3,
  Header4: CraftHeader4,
  Header5: CraftHeader5,
  // Footer blocks
  Footer1: CraftFooter1,
  Footer2: CraftFooter2,
  Footer3: CraftFooter3,
  Footer4: CraftFooter4,
  Footer5: CraftFooter5,
  // CTA blocks
  CTA1: CraftCTA1,
  CTA2: CraftCTA2,
  CTA3: CraftCTA3,
  CTA4: CraftCTA4,
  CTA5: CraftCTA5,
  // Features blocks
  Features1: CraftFeatures1,
  Features2: CraftFeatures2,
  Features3: CraftFeatures3,
  Features4: CraftFeatures4,
  Features5: CraftFeatures5,
  // FAQ blocks
  FAQ1: CraftFAQ1,
  FAQ2: CraftFAQ2,
  FAQ3: CraftFAQ3,
  FAQ4: CraftFAQ4,
  FAQ5: CraftFAQ5,
  // Page Header blocks
  PageHeader1: CraftPageHeader1,
  PageHeader2: CraftPageHeader2,
  PageHeader3: CraftPageHeader3,
  PageHeader4: CraftPageHeader4,
  PageHeader5: CraftPageHeader5,
  // Blog blocks
  Blog1: CraftBlog1,
  Blog2: CraftBlog2,
  Blog3: CraftBlog3,
  Blog4: CraftBlog4,
  Blog5: CraftBlog5,
  //Blog content
  BlogContent1: CraftBlogContent1,
  // Products blocks
  Products1: CraftProducts1,
  Products2: CraftProducts2,
  Products3: CraftProducts3,
  Products4: CraftProducts4,
  Products5: CraftProducts5,
  // Pricing blocks
  Pricing1: CraftPricing1,
  Pricing2: CraftPricing2,
  Pricing3: CraftPricing3,
  Pricing4: CraftPricing4,
  Pricing5: CraftPricing5,
  // Contact blocks
  Contact1: CraftContact1,
  Contact2: CraftContact2,
  Contact3: CraftContact3,
  Contact4: CraftContact4,
  Contact5: CraftContact5,
  // Team blocks
  Team1: CraftTeam1,
  Team2: CraftTeam2,
  // Team3: CraftTeam3,
  Team4: CraftTeam4,
  Team5: CraftTeam5,
  // Blog Grid blocks
  BlogGrid1: CraftBlogGrid1,
  BlogGrid2: CraftBlogGrid2,
  BlogGrid3: CraftBlogGrid3,
  BlogGrid4: CraftBlogGrid4,
  BlogGrid5: CraftBlogGrid5,
  // Product Details blocks
  ProductDetails1: CraftProductDetails1,
  ProductDetails2: CraftProductDetails2,
  ProductDetails3: CraftProductDetails3,
  ProductDetails4: CraftProductDetails4,
  ProductDetails5: CraftProductDetails5,
  // Gallery blocks
  Gallery1: CraftGallery1,
  Gallery2: CraftGallery2,
  Gallery3: CraftGallery3,
  Gallery4: CraftGallery4,
  Gallery5: CraftGallery5,
  // Testimonial blocks
  Testimonial1: CraftTestimonial1,
  Testimonial2: CraftTestimonial2,
  Testimonial3: CraftTestimonial3,
  Testimonial4: CraftTestimonial4,
  Testimonial5: CraftTestimonial5,
  Account1: CraftAccount1,
  Newsletter1: CraftNewsletter1,
  // Newsletter2: CraftNewsletter2,
  Newsletter3: CraftNewsletter3,
  Newsletter4: CraftNewsletter4,
  Newsletter5: CraftNewsletter5,
}
