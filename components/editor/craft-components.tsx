import type React from "react";
import { useNode } from "@craftjs/core";
// Basic blocks
import { Text } from "@/components/blocks/Basic/Text";
import { Image } from "@/components/blocks/Basic/Image";
import { Button } from "@/components/blocks/Basic/Button";
import { Spacer } from "@/components/blocks/Basic/Spacer";
import { Divider } from "@/components/blocks/Basic/Divider";
import { Columns } from "@/components/blocks/Basic/Columns";
import { Link } from "@/components/blocks/Basic/Link";
import { Video } from "@/components/blocks/Basic/Video";
import { Map } from "@/components/blocks/Basic/Map";
import { Section } from "@/components/blocks/Basic/Section";
import { Badge } from "@/components/blocks/Basic/Badge";
import { Input } from "@/components/blocks/Basic/Input";
import { Textarea } from "../blocks/Basic/Textarea";
import { LineBreak } from "../blocks/Basic/LineBreak";
import { Row } from "../blocks/Basic/Row";
import { Card } from "../blocks/Basic/Card";
import { Heading } from "../blocks/Basic/Heading";
import { Select } from "../blocks/Basic/Select";
import { Icon } from "../blocks/Basic/Icon";
import { Grid } from "../blocks/Basic/Grid";
import { Navigation } from "../blocks/Basic/Navigation";
import { Checkbox } from "../blocks/Basic/Checkbox";
import { List } from "../blocks/Basic/List";
import { Alert } from "../blocks/Basic/Alert";
import { Flex } from "../blocks/Basic/Flex";
import { Tab } from "../blocks/Basic/Tab";
import { TabPanel } from "../blocks/Basic/TabPanel";
import { Carousel } from "../blocks/Basic/Carousel";
import { BlogGrid } from "../blocks/Basic/BlogGrid";
import { BlogCard } from "../blocks/Basic/BlogCard";
import { ProductCard } from "../blocks/Basic/ProductCard";
// Form blocks
import { DropDown } from "@/components/blocks/Forms/DropDown";
import { Switch } from "@/components/blocks/Forms/Switch";
import { RadioButton } from "@/components/blocks/Forms/RadioButton";
import { Slider } from "@/components/blocks/Forms/Slider";
import { RatingBar } from "@/components/blocks/Forms/RatingBar";
import { CounterButton } from "@/components/blocks/Forms/CounterButton";
import { PinCode } from "@/components/blocks/Forms/PinCode";
import { ChoiceChips } from "@/components/blocks/Forms/ChoiceChips";
import { CheckboxListTile } from "@/components/blocks/Forms/CheckboxListTile";
import { SwitchListTile } from "@/components/blocks/Forms/SwitchListTile";
import { CheckboxGroup } from "@/components/blocks/Forms/CheckboxGroup";
import { CreditCardForm } from "@/components/blocks/Forms/CreditCardForm";
import { Signature } from "@/components/blocks/Forms/Signature";
import { Form } from "@/components/blocks/Forms/Form";
// import { HeroCarouselSimple } from "@/components/blocks/Hero/HeroCarouselSimple";
import { MedicalServices1 } from "@/components/blocks/Services/MedicalServices1";
import { WhyChooseUs1 } from "@/components/blocks/Services/WhyChooseUs1";
import { Box } from "../blocks/Basic/Box";
import { MedicalDoctors1 } from "../blocks/Services/MedicalDoctors1";
import { MedicalTestimonials1 } from "../blocks/Services/MedicalTestimonials1";
import { MedicalHowItWorks1 } from "../blocks/HowItWorks/MedicalHowItWorks1";
import { MedicalFooter1 } from "../blocks/Footer/MedicalFooter1";
// Elder care blocks
import { ElderCareServices1 } from "../blocks/Services/ElderCareServices1";
import { ElderCareValues1 } from "../blocks/About/ElderCareValues1";
import { ElderCareTeam1 } from "../blocks/Team/ElderCareTeam1";
import { ElderCareCTA1 } from "../blocks/CTA/ElderCareCTA1";
import { ElderCareTestimonials1 } from "../blocks/Testimonials/ElderCareTestimonials1";
import { MedicalHero1 } from "../blocks/Hero/MedicalHero1";
import { CosmeticHero1 } from "../blocks/Hero/CosmeticHero1";
import { CosmeticAbout1 } from "../blocks/About/CosmeticAbout1";
import { CosmeticServices1 } from "../blocks/Services/CosmeticServices1";
import { SimpleHeader } from "../blocks/Headers/SimpleHeader";
import { MegaMenuHeader } from "../blocks/Headers/MegaMenuHeader";
// import { MiniMaxCarousel1 } from "../blocks/Hero/MiniMaxCarousel1";
import { ResearchCards } from "../blocks/Cards/ResearchCards";
import { PhotoGallery } from "../blocks/Cards/PhotoGallery";
// Business components
// import {
//   CraftBlogCard,
//   CraftProductCard,
//   CraftDoctorCard,
//   CraftTestimonialCard,
// } from "./craft-components/business";

// Container component for wrapping other components
export const Container = ({
  children,
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${className}`}
      style={{
        minHeight: children ? "auto" : "200px",
        border: selected
          ? "2px solid #3b82f6"
          : hovered
          ? "2px solid #93c5fd"
          : "2px dashed #e5e7eb",
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
  );
};

Container.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};

// Canvas component for drop zones
export const Canvas = ({
  children,
  className = "",
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`min-h-[200px] w-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

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
};

// Wrapper function to make components draggable and selectable
function createCraftComponent(
  Component: React.ComponentType,
  displayName: string
) {
  const CraftComponent = (props: any) => {
    const {
      connectors: { connect, drag },
      selected,
      hovered,
    } = useNode((state) => ({
      selected: state.events.selected,
      hovered: state.events.hovered,
    }));

    return (
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
          hovered ? "ring-1 ring-blue-300" : ""
        }`}
      >
        <Component {...props} />
        {(selected || hovered) && (
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
            {displayName}
          </div>
        )}
      </div>
    );
  };

  CraftComponent.craft = {
    displayName,
    props: {},
    rules: {
      canDrag: () => true,
      canDrop: () => false,
      canMoveIn: () => false,
      canMoveOut: () => true,
    },
  };

  return CraftComponent;
}

// Basic blocks (with full CraftJS integration)
export const CraftText = Text;
export const CraftImage = Image;
export const CraftButton = Button;
export const CraftSpacer = Spacer;
export const CraftDivider = Divider;
export const CraftColumns = Columns;
export const CraftLink = Link;
export const CraftVideo = Video;
export const CraftMap = Map;
export const CraftSection = Section;
export const CraftBadge = Badge;
export const CraftInput = Input;
export const CraftTextarea = Textarea;
export const CraftLineBreak = LineBreak;
export const CraftRow = Row;
export const CraftCard = Card;
export const CraftHeading = Heading;
export const CraftSelect = Select;
export const CraftIcon = Icon;
export const CraftGrid = Grid;
export const CraftNavigation = Navigation;
export const CraftCheckbox = Checkbox;
export const CraftList = List;
export const CraftAlert = Alert;
export const CraftBox = Box;

// export const CraftFlexRow = FlexRow
export const CraftFlex = Flex;
export const CraftTab = Tab;
export const CraftTabPanel = TabPanel;
export const CraftCarousel = Carousel;
export const CraftBlogGrid = BlogGrid;
export const CraftBlogCard = BlogCard;
export const CraftProductCard = ProductCard;

// Form blocks
export const CraftDropDown = DropDown;
export const CraftSwitch = Switch;
export const CraftRadioButton = RadioButton;
export const CraftSlider = Slider;
export const CraftRatingBar = RatingBar;
export const CraftCounterButton = CounterButton;
export const CraftPinCode = PinCode;
export const CraftChoiceChips = ChoiceChips;
export const CraftCheckboxListTile = CheckboxListTile;
export const CraftSwitchListTile = SwitchListTile;
export const CraftCheckboxGroup = CheckboxGroup;
export const CraftCreditCardForm = CreditCardForm;
export const CraftSignature = Signature;
export const CraftForm = Form;
export const CraftMedicalHero1 = MedicalHero1;
export const CraftCosmeticHero1 = CosmeticHero1;
export const CraftCosmeticAbout1 = CosmeticAbout1;
export const CraftCosmeticServices1 = CosmeticServices1;
export const CraftSimpleHeader = SimpleHeader;
export const CraftMegaMenuHeader = MegaMenuHeader;
// export const CraftMiniMaxCarousel1 = MiniMaxCarousel1;
export const CraftResearchCards = ResearchCards;
export const CraftPhotoGallery = PhotoGallery;

// export const CraftHeroCarouselSimple = HeroCarouselSimple;
export const CraftMedicalServices1 = MedicalServices1;
export const CraftWhyChooseUs1 = WhyChooseUs1;
export const CraftMedicalDoctors1 = MedicalDoctors1;
export const CraftMedicalTestimonials1 = MedicalTestimonials1;
export const CraftMedicalHowItWorks1 = MedicalHowItWorks1;
export const CraftMedicalFooter1 = MedicalFooter1;

// Elder care blocks
export const CraftElderCareServices1 = ElderCareServices1;
export const CraftElderCareValues1 = ElderCareValues1;
export const CraftElderCareTeam1 = ElderCareTeam1;
export const CraftElderCareCTA1 = ElderCareCTA1;
export const CraftElderCareTestimonials1 = ElderCareTestimonials1;
// Mutable resolver that can be extended with user-created components
const baseComponentResolver = {
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
  Box: CraftBox,
  // FlexRow: CraftFlexRow,
  Flex: CraftFlex,
  Tab: CraftTab,
  TabPanel: CraftTabPanel,
  Carousel: CraftCarousel,
  BlogGrid: CraftBlogGrid,
  BlogCard: CraftBlogCard,
  ProductCard: CraftProductCard,
  // Form blocks
  DropDown: CraftDropDown,
  Switch: CraftSwitch,
  RadioButton: CraftRadioButton,
  Slider: CraftSlider,
  RatingBar: CraftRatingBar,
  CounterButton: CraftCounterButton,
  PinCode: CraftPinCode,
  ChoiceChips: CraftChoiceChips,
  CheckboxListTile: CraftCheckboxListTile,
  SwitchListTile: CraftSwitchListTile,
  CheckboxGroup: CraftCheckboxGroup,
  CreditCardForm: CraftCreditCardForm,
  Signature: CraftSignature,
  Form: CraftForm,
  // Hero blocks
  MedicalHero1: CraftMedicalHero1,
  CosmeticHero1: CraftCosmeticHero1,
  // About blocks
  CosmeticAbout1: CraftCosmeticAbout1,
  // Services blocks
  CosmeticServices1: CraftCosmeticServices1,
  // Header blocks
  SimpleHeader: CraftSimpleHeader,
  MegaMenuHeader: CraftMegaMenuHeader,
  // MiniMaxCarousel1: CraftMiniMaxCarousel1,
  ResearchCards: CraftResearchCards,
  PhotoGallery: CraftPhotoGallery,
  MedicalHowItWorks1: CraftMedicalHowItWorks1,
  MedicalFooter1: CraftMedicalFooter1,
  // HeroCarouselSimple: CraftHeroCarouselSimple,
  MedicalServices1: CraftMedicalServices1,
  WhyChooseUs1: CraftWhyChooseUs1,
  MedicalDoctors1: CraftMedicalDoctors1,
  MedicalTestimonials1: CraftMedicalTestimonials1,
  // Elder care blocks
  ElderCareServices1: CraftElderCareServices1,
  ElderCareValues1: CraftElderCareValues1,
  ElderCareTeam1: CraftElderCareTeam1,
  ElderCareCTA1: CraftElderCareCTA1,
  ElderCareTestimonials1: CraftElderCareTestimonials1,
  // Business components
  // BlogCard: CraftBlogCard,
  // ProductCard: CraftProductCard,
  // DoctorCard: CraftDoctorCard,
  // TestimonialCard: CraftTestimonialCard,
};

// Store for dynamic user components
const userComponents: Record<string, React.ComponentType> = {};

// Create a combined resolver that merges base and user components
function createCombinedResolver() {
  return { ...baseComponentResolver, ...userComponents };
}

// Create the initial resolver
export let componentResolver = createCombinedResolver();

// Helper function to get the current resolver (always up-to-date)
export function getCurrentResolver() {
  return createCombinedResolver();
}

// Helper function to register a user-created component
export function registerUserComponent(
  id: string,
  component: React.ComponentType
) {
  console.log("Registering user component:", id);
  userComponents[id] = component;
  // Update the exported resolver
  componentResolver = createCombinedResolver();
  console.log("User components now contains:", Object.keys(userComponents));
}

// Helper function to unregister a user-created component
export function unregisterUserComponent(id: string) {
  console.log("Unregistering user component:", id);
  delete userComponents[id];
  // Update the exported resolver
  componentResolver = createCombinedResolver();
}
