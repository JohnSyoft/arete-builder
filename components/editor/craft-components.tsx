import type React from "react";
import { useNode } from "@craftjs/core";
// Basic blocks
import { Text } from "@/components/blocks/Basic/Text";
import { FormattedText } from "@/components/blocks/Basic/FormattedText";
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
import { NavigationItem } from "../blocks/Navigation/NavigationItem";
import { Checkbox } from "../blocks/Basic/Checkbox";
import { List } from "../blocks/Basic/List";
import { Alert } from "../blocks/Basic/Alert";
import { Flex } from "../blocks/Basic/Flex";
import { Tab, TabContentContainer } from "../blocks/Basic/Tab";
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
// Elder care blocks (old - to be removed)
// import { ElderCareServices1 } from "../blocks/Services/ElderCareServices1";
// import { ElderCareValues1 } from "../blocks/About/ElderCareValues1";
// import { ElderCareTeam1 } from "../blocks/Team/ElderCareTeam1";
// import { ElderCareCTA1 } from "../blocks/CTA/ElderCareCTA1";
// import { ElderCareTestimonials1 } from "../blocks/Testimonials/ElderCareTestimonials1";
import { MedicalHero1 } from "../blocks/Hero/MedicalHero1";
import { CosmeticHero1 } from "../blocks/Hero/CosmeticHero1";
import { HealthcareGridHero1 } from "../blocks/Hero/HealthcareGridHero1";
import { CollaborationHero1 } from "../blocks/Hero/CollaborationHero1";
import { LearningPlatformHero } from "../blocks/Hero/LearningPlatformHero";
import { ProductivityHero } from "../blocks/Hero/ProductivityHero";
import { ExpenseTrackingHero } from "../blocks/Hero/ExpenseTrackingHero";
import { CommunityResourcesHero } from "../blocks/Hero/CommunityResourcesHero";
import { CosmeticAbout1 } from "../blocks/About/CosmeticAbout1";
import { CosmeticWhyChooseUs1 } from "../blocks/About/CosmeticWhyChooseUs1";
import { CosmeticWhyChoose2 } from "../blocks/About/CosmeticWhyChoose2";
import { CosmeticWhatWeDo1 } from "../blocks/WhatWeDo/CosmeticWhatWeDo1";
import { CosmeticServices1 } from "../blocks/Services/CosmeticServices1";
import { CosmeticCaseStudies1 } from "../blocks/CaseStudies/CosmeticCaseStudies1";
import { CosmeticCaseStudy1 } from "../blocks/CaseStudy/CosmeticCaseStudy1";
import { CosmeticTestimonials2 } from "../blocks/Testimonials/CosmeticTestimonials2";
import { CosmeticBeforeAfter1 } from "../blocks/Results/CosmeticBeforeAfter1";
import { CosmeticFooter1 } from "../blocks/Footer/CosmeticFooter1";
// import { CosmeticFooter2 } from "../blocks/Footer/CosmeticFooter2";
import { SimpleHeader } from "../blocks/Headers/SimpleHeader";
import { MegaMenuHeader } from "../blocks/Headers/MegaMenuHeader";
// import { MiniMaxCarousel1 } from "../blocks/Hero/MiniMaxCarousel1";
import { ResearchCards } from "../blocks/Cards/ResearchCards";
// Hospitality blocks
import { HospitalityHero1 } from "../blocks/Hero/HospitalityHero1";
import { HospitalityAmenities1 as OriginalHospitalityAmenities1 } from "../blocks/Services/HospitalityAmenities1";
import { HospitalityRooms1 } from "../blocks/Rooms/HospitalityRooms1";
import { HospitalityTestimonials1 } from "../blocks/Testimonials/HospitalityTestimonials1";
import { HospitalityFooter1 } from "../blocks/Footer/HospitalityFooter1";
import { HospitalityDining1 } from "../blocks/Dining/HospitalityDining1";
import { PhotoGallery } from "../blocks/Cards/PhotoGallery";
// New Hospitality Components
import { ResortBookingHero } from "../blocks/Hero/ResortBookingHero";
import { LuxurySuites } from "../blocks/Content/LuxurySuites";
import { SpaWellness } from "../blocks/Services/SpaWellness";
import { FineDining } from "../blocks/Content/FineDining";
import { WeddingEvents } from "../blocks/Content/WeddingEvents";
import { HotelAmenities } from "../blocks/Content/HotelAmenities";
import { PropertyGallery } from "../blocks/Content/PropertyGallery";
// Additional Hospitality Components
// import { HotelHero1 } from "../blocks/Hero/HotelHero1";
import { RoomShowcase1 } from "../blocks/Rooms/RoomShowcase1";
import { HospitalityDining2 } from "../blocks/Dining/HospitalityDining2";
import { HospitalityAmenities1 } from "../blocks/Content/HospitalityAmenities1";
import { HospitalityLocation1 } from "../blocks/Content/HospitalityLocation1";
import { HospitalityTestimonials2 } from "../blocks/Testimonials/HospitalityTestimonials2";
import { HospitalityGallery1 } from "../blocks/Content/HospitalityGallery1";
import { HospitalityBookingForm1 } from "../blocks/Forms/HospitalityBookingForm1";
import { HospitalityEvents1 } from "../blocks/Events/HospitalityEvents1";
import { HospitalityAbout1 } from "../blocks/Content/HospitalityAbout1";
import { HospitalityContact1 } from "../blocks/Content/HospitalityContact1";
import { HospitalityFooter1 as NewHospitalityFooter1 } from "../blocks/Content/HospitalityFooter1";
import { HospitalitySpaWellness1 } from "../blocks/Services/HospitalitySpaWellness1";
import { HospitalityConcierge1 } from "../blocks/Services/HospitalityConcierge1";
import { HospitalityOffers1 } from "../blocks/Offers/HospitalityOffers1";
import { HospitalityFAQ1 } from "../blocks/Content/HospitalityFAQ1";
import { HospitalityFeatures1 } from "../blocks/Features/HospitalityFeatures1";
import { HospitalityFacilities1 } from "../blocks/Facilities/HospitalityFacilities1";
import { HospitalityInteractiveOffers1 } from "../blocks/Offers/HospitalityInteractiveOffers1";
import { HospitalityRoomTabs1 } from "../blocks/Rooms/HospitalityRoomTabs1";
import { HospitalityNewsletter1 } from "../blocks/Forms/HospitalityNewsletter1";
import { HospitalityInstagram1 } from "../blocks/Social/HospitalityInstagram1";
import { HospitalityTestimonials3 } from "../blocks/Testimonials/HospitalityTestimonials3";
import { HospitalityFooter2 } from "../blocks/Footer/HospitalityFooter2";
import { HospitalityMarquee1 } from "../blocks/Content/HospitalityMarquee1";
import { HospitalityAbout2 } from "../blocks/Content/HospitalityAbout2";
import { HospitalityHeader1 } from "../blocks/Navigation/HospitalityHeader1";
import { HospitalityHero2 } from "../blocks/Hero/HospitalityHero2";
import { HospitalityFeatures2 } from "../blocks/Features/HospitalityFeatures2";
import { HospitalityFacilities2 } from "../blocks/Facilities/HospitalityFacilities2";
import { HospitalityTestimonials4 } from "../blocks/Testimonials/HospitalityTestimonials4";
import { HospitalityClients1 } from "../blocks/Content/HospitalityClients1";
import { HospitalityRoomTabs2 } from "../blocks/Rooms/HospitalityRoomTabs2";
import { HospitalityPricing1 } from "../blocks/Offers/HospitalityPricing1";
import { HospitalityCTA1 } from "../blocks/Content/HospitalityCTA1";
import { HospitalityStats1 } from "../blocks/Content/HospitalityStats1";
// New multi-industry components
import { HospitalityDropdown1 } from "../blocks/Navigation/HospitalityDropdown1";
import { BusinessTopBar1 } from "../blocks/Navigation/BusinessTopBar1";
import { RestaurantFeatures1 } from "../blocks/Features/RestaurantFeatures1";
import { SearchModal1 } from "../blocks/Forms/SearchModal1";
// Accounting components
import { AccountingHero1 } from "../blocks/Hero/AccountingHero1";
import { AccountingServices1 } from "../blocks/Services/AccountingServices1";
import { AccountingCompany1 } from "../blocks/Content/AccountingCompany1";
import { AccountingContact1 } from "../blocks/Content/AccountingContact1";
import { AccountingNews1 } from "../blocks/Content/AccountingNews1";
import { AccountingProcess1 } from "../blocks/Content/AccountingProcess1";
import { AccountingServicesDetails1 } from "../blocks/Services/AccountingServicesDetails1";
import { AccountingBlogSingle1 } from "../blocks/Content/AccountingBlogSingle1";

// Elder Care components
import { ElderCareHero1 } from "../blocks/Hero/ElderCareHero1";
import { ElderCareCTA1 } from "../blocks/Content/ElderCareCTA1";
import { ElderCareAbout1 } from "../blocks/About/ElderCareAbout1";
import { ElderCareTimeline1 } from "../blocks/Content/ElderCareTimeline1";
import { ElderCareServices1 } from "../blocks/Services/ElderCareServices1";
import { ElderCareVideo1 } from "../blocks/Content/ElderCareVideo1";
import { ElderCareFAQ1 } from "../blocks/Content/ElderCareFAQ1";
import { ElderCareFeatures1 } from "../blocks/Features/ElderCareFeatures1";
import { ElderCareBlog1 } from "../blocks/Content/ElderCareBlog1";
import { ElderCareFooter1 } from "../blocks/Footers/ElderCareFooter1";
// Marketing components
import { MarketingHero1 } from "../blocks/Hero/MarketingHero1";
import { MarketingClients1 } from "../blocks/Content/MarketingClients1";
import { MarketingAbout1 } from "../blocks/About/MarketingAbout1";
import { MarketingMarquee1 } from "../blocks/Content/MarketingMarquee1";
import { MarketingPortfolio1 } from "../blocks/Content/MarketingPortfolio1";
import { MarketingStrategy1 } from "../blocks/Content/MarketingStrategy1";
import { MarketingPricing1 } from "../blocks/Pricing/MarketingPricing1";
import { MarketingTestimonials1 } from "../blocks/Testimonials/MarketingTestimonials1";
import { MarketingCTA1 } from "../blocks/Content/MarketingCTA1";
import { MarketingFooter1 } from "../blocks/Footers/MarketingFooter1";
// Restaurant components
import { RestaurantHero1 } from "../blocks/Hero/RestaurantHero1";
import { RestaurantAbout1 } from "../blocks/About/RestaurantAbout1";
import { RestaurantMenu1 } from "../blocks/Content/RestaurantMenu1";
import { RestaurantDishes1 } from "../blocks/Content/RestaurantDishes1";
import { RestaurantMarquee1 } from "../blocks/Content/RestaurantMarquee1";
import { RestaurantTestimonials1 } from "../blocks/Testimonials/RestaurantTestimonials1";
import { RestaurantStats1 } from "../blocks/Content/RestaurantStats1";
import { RestaurantBlog1 } from "../blocks/Content/RestaurantBlog1";
import { RestaurantFooter1 } from "../blocks/Footers/RestaurantFooter1";
// Restaurant Contact components
import { RestaurantContactMap1 } from "../blocks/Contact/RestaurantContactMap1";
import { RestaurantContactForm1 } from "../blocks/Contact/RestaurantContactForm1";
import { RestaurantContactInfo1 } from "../blocks/Contact/RestaurantContactInfo1";
// Restaurant Gallery components
import { RestaurantGalleryFilter1 } from "../blocks/Gallery/RestaurantGalleryFilter1";
// Restaurant Menu components
import { RestaurantMenuTabs1 } from "../blocks/Menu/RestaurantMenuTabs1";
import { RestaurantSpecialOffers1 } from "../blocks/Menu/RestaurantSpecialOffers1";
// Restaurant Story components
import { RestaurantVideoHero1 } from "../blocks/Story/RestaurantVideoHero1";
import { RestaurantAchievements1 } from "../blocks/Story/RestaurantAchievements1";
import { RestaurantImageCarousel1 } from "../blocks/Story/RestaurantImageCarousel1";
// Restaurant Blog components
import { RestaurantBlogListing1 } from "../blocks/Blog/RestaurantBlogListing1";
import { RestaurantBlogSingle1 } from "../blocks/Blog/RestaurantBlogSingle1";
// Restaurant Team components
import { RestaurantChefs1 } from "../blocks/Team/RestaurantChefs1";
// Beauty Salon Components
import {
  BeautySalonHero1,
  BeautySalonAbout1,
  BeautySalonProcess1,
  BeautySalonServices1,
  BeautySalonOffers1,
  BeautySalonTeam1,
  BeautySalonTestimonials1,
  BeautySalonContact1,
  BeautySalonFooter1,
} from "../blocks/Beauty";
// Architecture Components
import {
  ArchitectureHero1,
  ArchitectureAbout1,
  ArchitectureServices1,
  ArchitectureAwards1,
  ArchitectureProjects1,
  ArchitectureTestimonials1,
  ArchitectureBlog1,
  ArchitectureFooter1,
  ArchitectureAboutPage1,
  ArchitectureServicesPage1,
  ArchitectureProjectsPage1,
  ArchitectureBlogPage1,
  ArchitectureContactPage1,
} from "../blocks/Architecture";

// Ebook Components
import {
  EbookHero1,
  EbookAbout1,
  EbookChapters1,
  EbookAuthor1,
  EbookReviews1,
  EbookSubscribe1,
  EbookPricing1,
  EbookContact1,
  EbookFooter1,
} from "../blocks/Ebook";

// SEO Components
import {
  SEOHero1,
  SEOServices1,
  SEOStats1,
  SEOProcess1,
  SEOAnalysis1,
  SEOTabs1,
  SEOTestimonials1,
  SEOClients1,
  SEOContact1,
  SEOFooter1,
} from "../blocks/SEO";

// Business Components
import {
  BusinessHero1,
  BusinessAbout1,
  BusinessServices1,
  BusinessPricing1,
  BusinessVideo1,
  BusinessTestimonials1,
  BusinessBlog1,
  BusinessCTA1,
  BusinessFooter1,
} from "../blocks/Business";

// Design Agency Components
import {
  DesignAgencyHero1,
  DesignAgencyCreative1,
  DesignAgencyProcess1,
  DesignAgencyProjects1,
  DesignAgencyExpertise1,
  DesignAgencyStats1,
  DesignAgencyTestimonials1,
  DesignAgencyFooter1,
} from "../blocks/DesignAgency";

// BrandingAgency Components
import {
  BrandingAgencyHero1,
  BrandingAgencyClients1,
  BrandingAgencyAbout1,
  BrandingAgencyStats1,
  BrandingAgencyMarquee1,
  BrandingAgencyProjects1,
  BrandingAgencyServices1,
  BrandingAgencyTeam1,
  BrandingAgencyTestimonials1,
  BrandingAgencyFooter1,
} from "../blocks/BrandingAgency";

// BrandingStudio Components
import {
  BrandingStudioHero1,
  BrandingStudioStats1,
  BrandingStudioAbout1,
  BrandingStudioMarquee1,
  BrandingStudioServices1,
  BrandingStudioProjects1,
  BrandingStudioFeatures1,
  BrandingStudioAwards1,
  BrandingStudioTestimonials1,
  BrandingStudioSocial1,
  BrandingStudioFooter1,
} from "../blocks/BrandingStudio";

// ELearning Components
import {
  ELearningHero1,
  ELearningFeatures1,
  ELearningCourses1,
  ELearningAbout1,
  ELearningMarquee1,
  ELearningTestimonials1,
  ELearningClients1,
  ELearningBlog1,
  ELearningCTA1,
  ELearningFooter1,
} from "../blocks/ELearning";

// ITBusiness Components
import {
  ITBusinessHero1,
  ITBusinessFeatures1,
  ITBusinessAbout1,
  ITBusinessClients1,
  ITBusinessServices1,
  ITBusinessIndustries1,
  ITBusinessCTA1,
  ITBusinessPortfolio1,
  ITBusinessTestimonials1,
  ITBusinessFinalCTA1,
  ITBusinessFooter1,
} from "../blocks/ITBusiness";

// Barber Components
import {
  BarberHero1,
  BarberAbout1,
  BarberServices1,
  BarberGallery1,
  BarberPricing1,
  BarberVideo1,
  BarberTeam1,
  BarberTestimonials1,
  BarberContact1,
  BarberAppointment1,
  BarberFooter1,
} from "../blocks/Barber";

// Hotel Components
import {
  HotelHero1,
  HotelFeatures1,
  HotelAbout1,
  HotelMarquee1,
  HotelFacilities1,
  HotelTestimonials1,
  HotelOffers1,
  HotelRooms1,
  HotelRatings1,
  HotelNewsletter1,
  HotelInstagram1,
  HotelFooter1,
} from "../blocks/Hotel";

// RealEstate Components
import {
  RealEstateHero1,
  RealEstateFeatures1,
  RealEstateAbout1,
  RealEstateServices1,
  RealEstateProperties1,
  RealEstateWhyChooseUs1,
  RealEstateFindDreamHouse1,
  RealEstateAwards1,
  RealEstateTestimonials1,
  RealEstateBlog1,
  RealEstateFooter1,
} from "../blocks/RealEstate";

// Spa Salon Components
import {
  SpaSalonHero1,
  SpaSalonFeatures1,
  SpaSalonAbout1,
  SpaSalonServices1,
  SpaSalonPricing1,
  SpaSalonBenefits1,
  SpaSalonTestimonials1,
  SpaSalonFooter1,
} from "../blocks/SpaSalon";

// Modern Hero Components
// CMS Cards
import { CosmeticCard1 } from "../blocks/CMS/CosmeticCard1";
import { HospitalityCard1 } from "../blocks/CMS/HospitalityCard1";
import { ModernCard1 } from "../blocks/CMS/ModernCard1";
import { CMSCollectionWrapper } from "../blocks/CMS/CMSCollectionWrapper";
import { CollectionWrapper } from "../blocks/CMS/CollectionWrapper";
import { HeaderWrapper } from "../blocks/UI/HeaderWrapper";
// Modern Components
import { MiniMaxHero1 } from "../blocks/Hero/MiniMaxHero1";
import { ModernSaaSHero1 } from "../blocks/Hero/ModernSaaSHero1";
import { EnvironmentalHero1 } from "../blocks/Hero/EnvironmentalHero1";
import { ModernPricing1 } from "../blocks/Pricing/ModernPricing1";
import { ModernFeatures1 } from "../blocks/Features/ModernFeatures1";
import { ModernTestimonials1 } from "../blocks/Modern/ModernTestimonials1";
import { ModernFooter1 } from "../blocks/Modern/ModernFooter1";
import { ModernContact1 } from "../blocks/Modern/ModernContact1";
import { ModernTeam1 } from "../blocks/Team/ModernTeam1";
import { ModernBlog1 } from "../blocks/Blog/ModernBlog1";
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
      canDrop: () => true,
      canMoveIn: () => true,
      canMoveOut: () => true,
    },
  };

  return CraftComponent;
}

// Basic blocks (with full CraftJS integration)
export const CraftText = Text;
export const CraftFormattedText = FormattedText;
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
export const CraftNavigationItem = NavigationItem;

// Export for sidebar and dynamic import
export { Navigation };
export { NavigationItem };
export const CraftCheckbox = Checkbox;
export const CraftList = List;
export const CraftAlert = Alert;
export const CraftBox = Box;

// export const CraftFlexRow = FlexRow
export const CraftFlex = Flex;
export const CraftTab = Tab;
export const CraftTabContentContainer = TabContentContainer;
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
export const CraftHealthcareGridHero1 = HealthcareGridHero1;
// export const CraftEmpowermentHero1 = EmpowermentHero1;
export const CraftCollaborationHero1 = CollaborationHero1;
export const CraftLearningPlatformHero = LearningPlatformHero;
export const CraftProductivityHero = ProductivityHero;
export const CraftExpenseTrackingHero = ExpenseTrackingHero;
export const CraftCommunityResourcesHero = CommunityResourcesHero;
export const CraftCosmeticAbout1 = CosmeticAbout1;
export const CraftCosmeticWhyChooseUs1 = CosmeticWhyChooseUs1;
export const CraftCosmeticWhyChoose2 = CosmeticWhyChoose2;
export const CraftCosmeticWhatWeDo1 = CosmeticWhatWeDo1;
export const CraftCosmeticServices1 = CosmeticServices1;
export const CraftCosmeticCaseStudies1 = CosmeticCaseStudies1;
export const CraftCosmeticCaseStudy1 = CosmeticCaseStudy1;
export const CraftCosmeticTestimonials2 = CosmeticTestimonials2;
export const CraftCosmeticBeforeAfter1 = CosmeticBeforeAfter1;
export const CraftCosmeticFooter1 = CosmeticFooter1;
// export const CraftCosmeticFooter2 = CosmeticFooter2;
export const CraftSimpleHeader = SimpleHeader;
export const CraftMegaMenuHeader = MegaMenuHeader;
// export const CraftMiniMaxCarousel1 = MiniMaxCarousel1;
export const CraftResearchCards = ResearchCards;
export const CraftPhotoGallery = PhotoGallery;

// New Hospitality Components
export const CraftResortBookingHero = ResortBookingHero;
export const CraftLuxurySuites = LuxurySuites;
export const CraftSpaWellness = SpaWellness;
export const CraftFineDining = FineDining;
export const CraftWeddingEvents = WeddingEvents;
export const CraftHotelAmenities = HotelAmenities;
export const CraftPropertyGallery = PropertyGallery;

// export const CraftHeroCarouselSimple = HeroCarouselSimple;
export const CraftMedicalServices1 = MedicalServices1;
export const CraftWhyChooseUs1 = WhyChooseUs1;
export const CraftMedicalDoctors1 = MedicalDoctors1;
export const CraftMedicalTestimonials1 = MedicalTestimonials1;
export const CraftMedicalHowItWorks1 = MedicalHowItWorks1;
export const CraftMedicalFooter1 = MedicalFooter1;

// Elder care blocks (old - removed)
// export const CraftElderCareServices1 = ElderCareServices1;
// export const CraftElderCareValues1 = ElderCareValues1;
// export const CraftElderCareTeam1 = ElderCareTeam1;
// export const CraftElderCareCTA1 = ElderCareCTA1;
// export const CraftElderCareTestimonials1 = ElderCareTestimonials1;

// Hospitality blocks
export const CraftHospitalityHero1 = HospitalityHero1;
export const CraftHospitalityAmenities1 = OriginalHospitalityAmenities1;
export const CraftHospitalityRooms1 = HospitalityRooms1;
export const CraftHospitalityTestimonials1 = HospitalityTestimonials1;
export const CraftHospitalityFooter1 = HospitalityFooter1;
export const CraftHospitalityDining1 = HospitalityDining1;

// CMS Cards
export const CraftCosmeticCard1 = CosmeticCard1;
export const CraftHospitalityCard1 = HospitalityCard1;
export const CraftModernCard1 = ModernCard1;
export const CraftCMSCollectionWrapper = CMSCollectionWrapper;
export const CraftCollectionWrapper = CollectionWrapper;
export const CraftHeaderWrapper = HeaderWrapper;

// Modern Components
export const CraftMiniMaxHero1 = MiniMaxHero1;
export const CraftModernSaaSHero1 = ModernSaaSHero1;
export const CraftEnvironmentalHero1 = EnvironmentalHero1;
export const CraftModernPricing1 = ModernPricing1;
export const CraftModernFeatures1 = ModernFeatures1;
export const CraftModernTestimonials1 = ModernTestimonials1;
export const CraftModernFooter1 = ModernFooter1;
export const CraftModernContact1 = ModernContact1;
export const CraftModernTeam1 = ModernTeam1;
export const CraftModernBlog1 = ModernBlog1;

// Additional Hospitality Components
// export { HotelHero1 };
export { RoomShowcase1 };
export { HospitalityDining2 };
export { HospitalityAmenities1 };
export { HospitalityLocation1 };
export { HospitalityTestimonials2 };
export { HospitalityGallery1 };
export { HospitalityBookingForm1 };
export { HospitalityEvents1 };
export { HospitalityAbout1 };
export { HospitalityContact1 };
export { NewHospitalityFooter1 as HospitalityFooter1 };
export { HospitalitySpaWellness1 };
export { HospitalityConcierge1 };
export { HospitalityOffers1 };
export { HospitalityFAQ1 };
export { HospitalityFeatures1 };
export { HospitalityFacilities1 };
export { HospitalityInteractiveOffers1 };
export { HospitalityRoomTabs1 };
export { HospitalityNewsletter1 };
export { HospitalityInstagram1 };
export { HospitalityTestimonials3 };
export { HospitalityFooter2 };
export { HospitalityMarquee1 };
export { HospitalityAbout2 };
export { HospitalityHeader1 };
export { HospitalityHero2 };
export { HospitalityFeatures2 };
export { HospitalityFacilities2 };
export { HospitalityTestimonials4 };
export { HospitalityClients1 };
export { HospitalityRoomTabs2 };
export { HospitalityPricing1 };
export { HospitalityCTA1 };
export { HospitalityStats1 };
// New multi-industry components
export { HospitalityDropdown1 };
export { BusinessTopBar1 };
export { RestaurantFeatures1 };
export { SearchModal1 };
// Accounting components
export { AccountingHero1 };
export { AccountingServices1 };
export { AccountingCompany1 };
export { AccountingContact1 };
export { AccountingNews1 };
export { AccountingProcess1 };
export { AccountingServicesDetails1 };
export { AccountingBlogSingle1 };

// Elder Care components
export { ElderCareHero1 };
export { ElderCareCTA1 };
export { ElderCareAbout1 };
export { ElderCareTimeline1 };
export { ElderCareServices1 };
export { ElderCareVideo1 };
export { ElderCareFAQ1 };
export { ElderCareFeatures1 };
export { ElderCareBlog1 };
export { ElderCareFooter1 };

// Marketing components
export { MarketingHero1 };
export { MarketingClients1 };
export { MarketingAbout1 };
export { MarketingMarquee1 };
export { MarketingPortfolio1 };
export { MarketingStrategy1 };
export { MarketingPricing1 };
export { MarketingTestimonials1 };
export { MarketingCTA1 };
export { MarketingFooter1 };

// Restaurant components
export { RestaurantHero1 };
export { RestaurantAbout1 };
export { RestaurantMenu1 };
export { RestaurantDishes1 };
export { RestaurantMarquee1 };
export { RestaurantTestimonials1 };
export { RestaurantStats1 };
export { RestaurantBlog1 };
export { RestaurantFooter1 };
// Restaurant Contact components
export { RestaurantContactMap1 };
export { RestaurantContactForm1 };
export { RestaurantContactInfo1 };
// Restaurant Gallery components
export { RestaurantGalleryFilter1 };
// Restaurant Menu components
export { RestaurantMenuTabs1 };
export { RestaurantSpecialOffers1 };
// Restaurant Story components
export { RestaurantVideoHero1 };
export { RestaurantAchievements1 };
export { RestaurantImageCarousel1 };
// Restaurant Blog components
export { RestaurantBlogListing1 };
export { RestaurantBlogSingle1 };
// Restaurant Team components
export { RestaurantChefs1 };

// Beauty Salon components
export { BeautySalonHero1 };
export { BeautySalonAbout1 };
export { BeautySalonProcess1 };
export { BeautySalonServices1 };
export { BeautySalonOffers1 };
export { BeautySalonTeam1 };
export { BeautySalonTestimonials1 };
export { BeautySalonContact1 };
export { BeautySalonFooter1 };

// Architecture components
export { ArchitectureHero1 };
export { ArchitectureAbout1 };
export { ArchitectureServices1 };
export { ArchitectureAwards1 };
export { ArchitectureProjects1 };
export { ArchitectureTestimonials1 };
export { ArchitectureBlog1 };
export { ArchitectureFooter1 };
export { ArchitectureAboutPage1 };
export { ArchitectureServicesPage1 };
export { ArchitectureProjectsPage1 };
export { ArchitectureBlogPage1 };
export { ArchitectureContactPage1 };

// Ebook components
export { EbookHero1 };
export { EbookAbout1 };
export { EbookChapters1 };
export { EbookAuthor1 };
export { EbookReviews1 };
export { EbookSubscribe1 };
export { EbookPricing1 };
export { EbookContact1 };
export { EbookFooter1 };

// SEO components
export { SEOHero1 };
export { SEOServices1 };
export { SEOStats1 };
export { SEOProcess1 };
export { SEOAnalysis1 };
export { SEOTabs1 };
export { SEOTestimonials1 };
export { SEOClients1 };
export { SEOContact1 };
export { SEOFooter1 };

// Business components
export { BusinessHero1 };
export { BusinessAbout1 };
export { BusinessServices1 };
export { BusinessPricing1 };
export { BusinessVideo1 };
export { BusinessTestimonials1 };
export { BusinessBlog1 };
export { BusinessCTA1 };
export { BusinessFooter1 };

// Design Agency components
export { DesignAgencyHero1 };
export { DesignAgencyCreative1 };
export { DesignAgencyProcess1 };
export { DesignAgencyProjects1 };
export { DesignAgencyExpertise1 };
export { DesignAgencyStats1 };
export { DesignAgencyTestimonials1 };
export { DesignAgencyFooter1 };

// Spa Salon components
export { SpaSalonHero1 };
export { SpaSalonFeatures1 };
export { SpaSalonAbout1 };
export { SpaSalonServices1 };
export { SpaSalonPricing1 };
export { SpaSalonBenefits1 };
export { SpaSalonTestimonials1 };
export { SpaSalonFooter1 };


// BrandingAgency components
export { BrandingAgencyHero1 };
export { BrandingAgencyClients1 };
export { BrandingAgencyAbout1 };
export { BrandingAgencyStats1 };
export { BrandingAgencyMarquee1 };
export { BrandingAgencyProjects1 };
export { BrandingAgencyServices1 };
export { BrandingAgencyTeam1 };
export { BrandingAgencyTestimonials1 };
export { BrandingAgencyFooter1 };

// BrandingStudio components
export { BrandingStudioHero1 };
export { BrandingStudioStats1 };
export { BrandingStudioAbout1 };
export { BrandingStudioMarquee1 };
export { BrandingStudioServices1 };
export { BrandingStudioProjects1 };
export { BrandingStudioFeatures1 };
export { BrandingStudioAwards1 };
export { BrandingStudioTestimonials1 };
export { BrandingStudioSocial1 };
export { BrandingStudioFooter1 };

// ELearning components
export { ELearningHero1 };
export { ELearningFeatures1 };
export { ELearningCourses1 };
export { ELearningAbout1 };
export { ELearningMarquee1 };
export { ELearningTestimonials1 };
export { ELearningClients1 };
export { ELearningBlog1 };
export { ELearningCTA1 };
export { ELearningFooter1 };

// ITBusiness components
export { ITBusinessHero1 };
export { ITBusinessFeatures1 };
export { ITBusinessAbout1 };
export { ITBusinessClients1 };
export { ITBusinessServices1 };
export { ITBusinessIndustries1 };
export { ITBusinessCTA1 };
export { ITBusinessPortfolio1 };
export { ITBusinessTestimonials1 };
export { ITBusinessFinalCTA1 };
export { ITBusinessFooter1 };

// Barber components
export { BarberHero1 };
export { BarberAbout1 };
export { BarberServices1 };
export { BarberGallery1 };
export { BarberPricing1 };
export { BarberVideo1 };
export { BarberTeam1 };
export { BarberTestimonials1 };
export { BarberContact1 };
export { BarberAppointment1 };
export { BarberFooter1 };

// Hotel components
export { HotelHero1 };
export { HotelFeatures1 };
export { HotelAbout1 };
export { HotelMarquee1 };
export { HotelFacilities1 };
export { HotelTestimonials1 };
export { HotelOffers1 };
export { HotelRooms1 };
export { HotelRatings1 };
export { HotelNewsletter1 };
export { HotelInstagram1 };
export { HotelFooter1 };

// RealEstate components
export { RealEstateHero1 };
export { RealEstateFeatures1 };
export { RealEstateAbout1 };
export { RealEstateServices1 };
export { RealEstateProperties1 };
export { RealEstateWhyChooseUs1 };
export { RealEstateFindDreamHouse1 };
export { RealEstateAwards1 };
export { RealEstateTestimonials1 };
export { RealEstateBlog1 };
export { RealEstateFooter1 };

// / Mutable resolver that can be extended with user-created components
const baseComponentResolver = {
  Container,
  Canvas,
  // Basic blocks
  Text: CraftText,
  FormattedText: FormattedText,
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
  NavigationItem: CraftNavigationItem,
  Checkbox: CraftCheckbox,
  List: CraftList,
  Alert: CraftAlert,
  Box: CraftBox,
  // FlexRow: CraftFlexRow,
  Flex: CraftFlex,
  Tab: CraftTab,
  TabContentContainer: CraftTabContentContainer,
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
  HealthcareGridHero1: CraftHealthcareGridHero1,
  // EmpowermentHero1: CraftEmpowermentHero1,
  CollaborationHero1: CraftCollaborationHero1,
  LearningPlatformHero: CraftLearningPlatformHero,
  ProductivityHero: CraftProductivityHero,
  ExpenseTrackingHero: CraftExpenseTrackingHero,
  CommunityResourcesHero: CraftCommunityResourcesHero,
  // About blocks
  CosmeticAbout1: CraftCosmeticAbout1,
  CosmeticWhyChooseUs1: CraftCosmeticWhyChooseUs1,
  CosmeticWhyChoose2: CraftCosmeticWhyChoose2,
  // What We Do blocks
  CosmeticWhatWeDo1: CraftCosmeticWhatWeDo1,
  // Services blocks
  CosmeticServices1: CraftCosmeticServices1,
  // Case Studies blocks
  CosmeticCaseStudies1: CraftCosmeticCaseStudies1,
  CosmeticCaseStudy1: CraftCosmeticCaseStudy1,
  // Results blocks
  CosmeticBeforeAfter1: CraftCosmeticBeforeAfter1,
  // Testimonials blocks
  CosmeticTestimonials2: CraftCosmeticTestimonials2,
  // Footer blocks
  CosmeticFooter1: CraftCosmeticFooter1,
  // CosmeticFooter2: CraftCosmeticFooter2,
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
  // Elder care blocks (old - removed)
  // ElderCareServices1: CraftElderCareServices1,
  // ElderCareValues1: CraftElderCareValues1,
  // ElderCareTeam1: CraftElderCareTeam1,
  // ElderCareCTA1: CraftElderCareCTA1,
  // ElderCareTestimonials1: CraftElderCareTestimonials1,
  // Hospitality blocks
  HospitalityHero1: CraftHospitalityHero1,
  HospitalityAmenities1: CraftHospitalityAmenities1,
  HospitalityRooms1: CraftHospitalityRooms1,
  HospitalityTestimonials1: CraftHospitalityTestimonials1,
  HospitalityFooter1: CraftHospitalityFooter1,
  HospitalityDining1: CraftHospitalityDining1,
  // New Hospitality Components
  ResortBookingHero: CraftResortBookingHero,
  LuxurySuites: CraftLuxurySuites,
  SpaWellness: CraftSpaWellness,
  FineDining: CraftFineDining,
  WeddingEvents: CraftWeddingEvents,
  HotelAmenities: CraftHotelAmenities,
  PropertyGallery: CraftPropertyGallery,
  // Additional Hospitality Components
  // HotelHero1: HotelHero1,
  RoomShowcase1: RoomShowcase1,
  HospitalityDining2: HospitalityDining2,
  HospitalityAmenities1New: HospitalityAmenities1,
  HospitalityLocation1: HospitalityLocation1,
  HospitalityTestimonials2: HospitalityTestimonials2,
  HospitalityGallery1: HospitalityGallery1,
  HospitalityBookingForm1: HospitalityBookingForm1,
  HospitalityEvents1: HospitalityEvents1,
  HospitalityAbout1: HospitalityAbout1,
  HospitalityContact1: HospitalityContact1,
  HospitalityFooter1New: NewHospitalityFooter1,
  HospitalitySpaWellness1: HospitalitySpaWellness1,
  HospitalityConcierge1: HospitalityConcierge1,
  HospitalityOffers1: HospitalityOffers1,
  HospitalityFAQ1: HospitalityFAQ1,
  HospitalityFeatures1: HospitalityFeatures1,
  HospitalityFacilities1: HospitalityFacilities1,
  HospitalityInteractiveOffers1: HospitalityInteractiveOffers1,
  HospitalityRoomTabs1: HospitalityRoomTabs1,
  HospitalityNewsletter1: HospitalityNewsletter1,
  HospitalityInstagram1: HospitalityInstagram1,
  HospitalityTestimonials3: HospitalityTestimonials3,
  HospitalityFooter2: HospitalityFooter2,
  HospitalityMarquee1: HospitalityMarquee1,
  HospitalityAbout2: HospitalityAbout2,
  HospitalityHeader1: HospitalityHeader1,
  HospitalityHero2: HospitalityHero2,
  HospitalityFeatures2: HospitalityFeatures2,
  HospitalityFacilities2: HospitalityFacilities2,
  HospitalityTestimonials4: HospitalityTestimonials4,
  HospitalityClients1: HospitalityClients1,
  HospitalityRoomTabs2: HospitalityRoomTabs2,
  HospitalityPricing1: HospitalityPricing1,
  HospitalityCTA1: HospitalityCTA1,
  HospitalityStats1: HospitalityStats1,
  // New multi-industry components
  HospitalityDropdown1: HospitalityDropdown1,
  RestaurantHero1: RestaurantHero1,
  BusinessTopBar1: BusinessTopBar1,
  RestaurantFeatures1: RestaurantFeatures1,
  SearchModal1: SearchModal1,
  // Accounting components
  AccountingHero1: AccountingHero1,
  AccountingServices1: AccountingServices1,
  AccountingCompany1: AccountingCompany1,
  AccountingContact1: AccountingContact1,
  AccountingNews1: AccountingNews1,
  AccountingProcess1: AccountingProcess1,
  AccountingServicesDetails1: AccountingServicesDetails1,
  AccountingBlogSingle1: AccountingBlogSingle1,
  // Elder Care components
  ElderCareHero1: ElderCareHero1,
  ElderCareCTA1: ElderCareCTA1,
  ElderCareAbout1: ElderCareAbout1,
  ElderCareTimeline1: ElderCareTimeline1,
  ElderCareServices1: ElderCareServices1,
  ElderCareVideo1: ElderCareVideo1,
  ElderCareFAQ1: ElderCareFAQ1,
  ElderCareFeatures1: ElderCareFeatures1,
  ElderCareBlog1: ElderCareBlog1,
  ElderCareFooter1: ElderCareFooter1,
  // Marketing components
  MarketingHero1: MarketingHero1,
  MarketingClients1: MarketingClients1,
  MarketingAbout1: MarketingAbout1,
  MarketingMarquee1: MarketingMarquee1,
  MarketingPortfolio1: MarketingPortfolio1,
  MarketingStrategy1: MarketingStrategy1,
  MarketingPricing1: MarketingPricing1,
  MarketingTestimonials1: MarketingTestimonials1,
  MarketingCTA1: MarketingCTA1,
  MarketingFooter1: MarketingFooter1,
  // Restaurant components
  // RestaurantHero1: RestaurantHero1,
  RestaurantAbout1: RestaurantAbout1,
  RestaurantMenu1: RestaurantMenu1,
  RestaurantDishes1: RestaurantDishes1,
  RestaurantMarquee1: RestaurantMarquee1,
  RestaurantTestimonials1: RestaurantTestimonials1,
  RestaurantStats1: RestaurantStats1,
  RestaurantBlog1: RestaurantBlog1,
  RestaurantFooter1: RestaurantFooter1,
  // Restaurant Contact components
  RestaurantContactMap1: RestaurantContactMap1,
  RestaurantContactForm1: RestaurantContactForm1,
  RestaurantContactInfo1: RestaurantContactInfo1,
  // Restaurant Gallery components
  RestaurantGalleryFilter1: RestaurantGalleryFilter1,
  // Restaurant Menu components
  RestaurantMenuTabs1: RestaurantMenuTabs1,
  RestaurantSpecialOffers1: RestaurantSpecialOffers1,
  // Restaurant Story components
  RestaurantVideoHero1: RestaurantVideoHero1,
  RestaurantAchievements1: RestaurantAchievements1,
  RestaurantImageCarousel1: RestaurantImageCarousel1,
  // Restaurant Blog components
  RestaurantBlogListing1: RestaurantBlogListing1,
  RestaurantBlogSingle1: RestaurantBlogSingle1,
  // Restaurant Team components
  RestaurantChefs1: RestaurantChefs1,
  // Beauty Salon components
  BeautySalonHero1: BeautySalonHero1,
  BeautySalonAbout1: BeautySalonAbout1,
  BeautySalonProcess1: BeautySalonProcess1,
  BeautySalonServices1: BeautySalonServices1,
  BeautySalonOffers1: BeautySalonOffers1,
  BeautySalonTeam1: BeautySalonTeam1,
  BeautySalonTestimonials1: BeautySalonTestimonials1,
  BeautySalonContact1: BeautySalonContact1,
  BeautySalonFooter1: BeautySalonFooter1,
  // Architecture components
  ArchitectureHero1: ArchitectureHero1,
  ArchitectureAbout1: ArchitectureAbout1,
  ArchitectureServices1: ArchitectureServices1,
  ArchitectureAwards1: ArchitectureAwards1,
  ArchitectureProjects1: ArchitectureProjects1,
  ArchitectureTestimonials1: ArchitectureTestimonials1,
  ArchitectureBlog1: ArchitectureBlog1,
  ArchitectureFooter1: ArchitectureFooter1,
  ArchitectureAboutPage1: ArchitectureAboutPage1,
  ArchitectureServicesPage1: ArchitectureServicesPage1,
  ArchitectureProjectsPage1: ArchitectureProjectsPage1,
  ArchitectureBlogPage1: ArchitectureBlogPage1,
  ArchitectureContactPage1: ArchitectureContactPage1,
  // Ebook components
  EbookHero1: EbookHero1,
  EbookAbout1: EbookAbout1,
  EbookChapters1: EbookChapters1,
  EbookAuthor1: EbookAuthor1,
  EbookReviews1: EbookReviews1,
  EbookSubscribe1: EbookSubscribe1,
  EbookPricing1: EbookPricing1,
  EbookContact1: EbookContact1,
  EbookFooter1: EbookFooter1,
  // SEO components
  SEOHero1: SEOHero1,
  SEOServices1: SEOServices1,
  SEOStats1: SEOStats1,
  SEOProcess1: SEOProcess1,
  SEOAnalysis1: SEOAnalysis1,
  SEOTabs1: SEOTabs1,
  SEOTestimonials1: SEOTestimonials1,
  SEOClients1: SEOClients1,
  SEOContact1: SEOContact1,
  SEOFooter1: SEOFooter1,
  // Business components
  BusinessHero1: BusinessHero1,
  BusinessAbout1: BusinessAbout1,
  BusinessServices1: BusinessServices1,
  BusinessPricing1: BusinessPricing1,
  BusinessVideo1: BusinessVideo1,
  BusinessTestimonials1: BusinessTestimonials1,
  BusinessBlog1: BusinessBlog1,
  BusinessCTA1: BusinessCTA1,
  BusinessFooter1: BusinessFooter1,
  // Design Agency components
  DesignAgencyHero1: DesignAgencyHero1,
  DesignAgencyCreative1: DesignAgencyCreative1,
  DesignAgencyProcess1: DesignAgencyProcess1,
  DesignAgencyProjects1: DesignAgencyProjects1,
  DesignAgencyExpertise1: DesignAgencyExpertise1,
  DesignAgencyStats1: DesignAgencyStats1,
  DesignAgencyTestimonials1: DesignAgencyTestimonials1,
  DesignAgencyFooter1: DesignAgencyFooter1,
  // Spa Salon components
  SpaSalonHero1: SpaSalonHero1,
  SpaSalonFeatures1: SpaSalonFeatures1,
  SpaSalonAbout1: SpaSalonAbout1,
  SpaSalonServices1: SpaSalonServices1,
  SpaSalonPricing1: SpaSalonPricing1,
  SpaSalonBenefits1: SpaSalonBenefits1,
  SpaSalonTestimonials1: SpaSalonTestimonials1,
  SpaSalonFooter1: SpaSalonFooter1,
 
  // BrandingAgency components
  BrandingAgencyHero1: BrandingAgencyHero1,
  BrandingAgencyClients1: BrandingAgencyClients1,
  BrandingAgencyAbout1: BrandingAgencyAbout1,
  BrandingAgencyStats1: BrandingAgencyStats1,
  BrandingAgencyMarquee1: BrandingAgencyMarquee1,
  BrandingAgencyProjects1: BrandingAgencyProjects1,
  BrandingAgencyServices1: BrandingAgencyServices1,
  BrandingAgencyTeam1: BrandingAgencyTeam1,
  BrandingAgencyTestimonials1: BrandingAgencyTestimonials1,
  BrandingAgencyFooter1: BrandingAgencyFooter1,

  // BrandingStudio components
  BrandingStudioHero1: BrandingStudioHero1,
  BrandingStudioStats1: BrandingStudioStats1,
  BrandingStudioAbout1: BrandingStudioAbout1,
  BrandingStudioMarquee1: BrandingStudioMarquee1,
  BrandingStudioServices1: BrandingStudioServices1,
  BrandingStudioProjects1: BrandingStudioProjects1,
  BrandingStudioFeatures1: BrandingStudioFeatures1,
  BrandingStudioAwards1: BrandingStudioAwards1,
  BrandingStudioTestimonials1: BrandingStudioTestimonials1,
  BrandingStudioSocial1: BrandingStudioSocial1,
  BrandingStudioFooter1: BrandingStudioFooter1,

  // ELearning components
  ELearningHero1: ELearningHero1,
  ELearningFeatures1: ELearningFeatures1,
  ELearningCourses1: ELearningCourses1,
  ELearningAbout1: ELearningAbout1,
  ELearningMarquee1: ELearningMarquee1,
  ELearningTestimonials1: ELearningTestimonials1,
  ELearningClients1: ELearningClients1,
  ELearningBlog1: ELearningBlog1,
  ELearningCTA1: ELearningCTA1,
  ELearningFooter1: ELearningFooter1,

  // ITBusiness components
  ITBusinessHero1: ITBusinessHero1,
  ITBusinessFeatures1: ITBusinessFeatures1,
  ITBusinessAbout1: ITBusinessAbout1,
  ITBusinessClients1: ITBusinessClients1,
  ITBusinessServices1: ITBusinessServices1,
  ITBusinessIndustries1: ITBusinessIndustries1,
  ITBusinessCTA1: ITBusinessCTA1,
  ITBusinessPortfolio1: ITBusinessPortfolio1,
  ITBusinessTestimonials1: ITBusinessTestimonials1,
  ITBusinessFinalCTA1: ITBusinessFinalCTA1,
  ITBusinessFooter1: ITBusinessFooter1,

  // Barber components
  BarberHero1: BarberHero1,
  BarberAbout1: BarberAbout1,
  BarberServices1: BarberServices1,
  BarberGallery1: BarberGallery1,
  BarberPricing1: BarberPricing1,
  BarberVideo1: BarberVideo1,
  BarberTeam1: BarberTeam1,
  BarberTestimonials1: BarberTestimonials1,
  BarberContact1: BarberContact1,
  BarberAppointment1: BarberAppointment1,
  BarberFooter1: BarberFooter1,

  // Hotel components
  HotelHero1: HotelHero1,
  HotelFeatures1: HotelFeatures1,
  HotelAbout1: HotelAbout1,
  HotelMarquee1: HotelMarquee1,
  HotelFacilities1: HotelFacilities1,
  HotelTestimonials1: HotelTestimonials1,
  HotelOffers1: HotelOffers1,
  HotelRooms1: HotelRooms1,
  HotelRatings1: HotelRatings1,
  HotelNewsletter1: HotelNewsletter1,
  HotelInstagram1: HotelInstagram1,
  HotelFooter1: HotelFooter1,

  // RealEstate components
  RealEstateHero1: RealEstateHero1,
  RealEstateFeatures1: RealEstateFeatures1,
  RealEstateAbout1: RealEstateAbout1,
  RealEstateServices1: RealEstateServices1,
  RealEstateProperties1: RealEstateProperties1,
  RealEstateWhyChooseUs1: RealEstateWhyChooseUs1,
  RealEstateFindDreamHouse1: RealEstateFindDreamHouse1,
  RealEstateAwards1: RealEstateAwards1,
  RealEstateTestimonials1: RealEstateTestimonials1,
  RealEstateBlog1: RealEstateBlog1,
  RealEstateFooter1: RealEstateFooter1,

 // CMS Cards
  CosmeticCard1: CraftCosmeticCard1,
  HospitalityCard1: CraftHospitalityCard1,
  ModernCard1: CraftModernCard1,
  CMSCollectionWrapper: CraftCMSCollectionWrapper,
  CollectionWrapper: CraftCollectionWrapper,
  HeaderWrapper: CraftHeaderWrapper,
  // Modern Components
  MiniMaxHero1: CraftMiniMaxHero1,
  ModernSaaSHero1: CraftModernSaaSHero1,
  ModernPricing1: CraftModernPricing1,
  ModernFeatures1: CraftModernFeatures1,
  ModernTestimonials1: CraftModernTestimonials1,
  ModernFooter1: CraftModernFooter1,
  ModernContact1: CraftModernContact1,
  ModernTeam1: CraftModernTeam1,
  ModernBlog1: CraftModernBlog1,
  EnvironmentalHero1: CraftEnvironmentalHero1,
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

// Export components for direct import
export { FormattedText };
