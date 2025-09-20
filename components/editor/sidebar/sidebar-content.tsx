import { useState, useMemo } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useModalStore } from "@/lib/store/modalStore";
import { BlockItem } from "./block-item";
import {
  // Hero components
  CraftMedicalHero1,
  CraftCosmeticHero1,
  CraftHealthcareGridHero1,
  // CraftEmpowermentHero1,
  CraftCollaborationHero1,
  CraftLearningPlatformHero,
  CraftProductivityHero,
  CraftExpenseTrackingHero,
  CraftCommunityResourcesHero,
  CraftHospitalityHero1,
  CraftMiniMaxHero1,
  CraftModernSaaSHero1,
  CraftEnvironmentalHero1,

  // Services components
  CraftMedicalServices1,
  CraftCosmeticServices1,
  CraftHospitalityAmenities1,

  // About/Values components
  CraftCosmeticAbout1,
  CraftCosmeticWhyChooseUs1,
  CraftCosmeticWhatWeDo1,
  CraftCosmeticWhyChoose2,

  // Team components
  CraftMedicalDoctors1,
  CraftModernTeam1,

  // Testimonials components
  CraftMedicalTestimonials1,
  CraftHospitalityTestimonials1,
  CraftCosmeticTestimonials2,
  CraftModernTestimonials1,

  // Content components
  CraftHospitalityRooms1,
  CraftHospitalityDining1,
  CraftCosmeticCaseStudies1,
  CraftCosmeticCaseStudy1,
  CraftCosmeticBeforeAfter1,
  CraftMedicalHowItWorks1,

  // Features components
  CraftModernFeatures1,

  // Pricing components
  CraftModernPricing1,

  // CTA components
  CraftWhyChooseUs1,

  // Footer components
  CraftMedicalFooter1,
  CraftCosmeticFooter1,
  CraftHospitalityFooter1,
  CraftModernFooter1,

  // Header components
  CraftSimpleHeader,
  // Content blocks
  CraftResearchCards,
  CraftPhotoGallery,

  // New Hospitality Components
  CraftResortBookingHero,
  CraftLuxurySuites,
  CraftSpaWellness,
  CraftFineDining,
  CraftWeddingEvents,
  CraftHotelAmenities,
  CraftPropertyGallery,
  // Additional Hospitality Components
  HotelHero1,
  RoomShowcase1,
  HospitalityDining2,
  HospitalityAmenities1,
  HospitalityLocation1,
  HospitalityTestimonials2,
  HospitalityGallery1,
  HospitalityBookingForm1,
  HospitalityEvents1,
  HospitalityAbout1,
  HospitalityContact1,
  HospitalityFooter1,
  HospitalitySpaWellness1,
  HospitalityConcierge1,
  HospitalityOffers1,
  HospitalityFAQ1,
  HospitalityFeatures1,
  HospitalityFacilities1,
  HospitalityInteractiveOffers1,
  HospitalityRoomTabs1,
  HospitalityNewsletter1,
  HospitalityInstagram1,
  HospitalityTestimonials3,
  HospitalityFooter2,
  HospitalityMarquee1,
  HospitalityAbout2,
  HospitalityHeader1,
  HospitalityHero2,
  HospitalityFeatures2,
  HospitalityFacilities2,
  HospitalityTestimonials4,
  HospitalityClients1,
  HospitalityRoomTabs2,
  HospitalityPricing1,
  HospitalityCTA1,
  HospitalityStats1,
  // New multi-industry components
  HospitalityDropdown1,
  BusinessTopBar1,
  RestaurantFeatures1,
  SearchModal1,
  // Accounting components
  AccountingHero1,
  AccountingServices1,
  AccountingCompany1,
  AccountingContact1,
  AccountingNews1,
  AccountingProcess1,
  AccountingServicesDetails1,
  AccountingBlogSingle1,

  // Elder Care components
  ElderCareHero1,
  ElderCareCTA1,
  ElderCareAbout1,
  ElderCareTimeline1,
  ElderCareServices1,
  ElderCareVideo1,
  ElderCareFAQ1,
  ElderCareFeatures1,
  ElderCareBlog1,
  ElderCareFooter1,

  // Marketing components
  MarketingHero1,
  MarketingClients1,
  MarketingAbout1,
  MarketingMarquee1,
  MarketingPortfolio1,
  MarketingStrategy1,
  MarketingPricing1,
  MarketingTestimonials1,
  MarketingCTA1,
  MarketingFooter1,

  // Restaurant components
  RestaurantHero1,
  RestaurantAbout1,
  RestaurantMenu1,
  RestaurantDishes1,
  RestaurantMarquee1,
  RestaurantTestimonials1,
  RestaurantStats1,
  RestaurantBlog1,
  RestaurantFooter1,
  // Restaurant Contact components
  RestaurantContactMap1,
  RestaurantContactForm1,
  RestaurantContactInfo1,
  // Restaurant Gallery components
  RestaurantGalleryFilter1,
  // Restaurant Menu components
  RestaurantMenuTabs1,
  RestaurantSpecialOffers1,
  // Restaurant Story components
  RestaurantVideoHero1,
  RestaurantAchievements1,
  RestaurantImageCarousel1,
  // Restaurant Blog components
  RestaurantBlogListing1,
  RestaurantBlogSingle1,
  // Restaurant Team components
  RestaurantChefs1,

  // Blog components
  CraftModernBlog1,

  // Contact components
  CraftModernContact1,

  // CMS Cards
  CraftCosmeticCard1,
  CraftHospitalityCard1,
  CraftModernCard1,

  // Additional Cosmetic Components (using Craft prefixed names)
  // Note: These are already imported above as CraftCosmetic* components
} from "@/components/editor/craft-components";

interface SidebarContentProps {
  currentCategory: any;
  activeCategory: string;
  isComponentEditor?: boolean;
}

// Component categories organized by type
const componentsByType = {
  hero: [
    {
      component: CraftMedicalHero1,
      name: "Medical Hero",
      description: "Professional medical hero section with trust indicators",
      image: "/MedicalHero.png",
    },
    {
      component: CraftCosmeticHero1,
      name: "Beauty Hero",
      description: "Cosmetic treatment hero with brand imagery",
      image: "/cosmeticHero.png",
    },
    {
      component: CraftHealthcareGridHero1,
      name: "Healthcare Grid Hero",
      description: "Healthcare grid layout hero with multiple images",
      image: "/healthCareGridHero.png",
    },
    // {
    //   component: CraftEmpowermentHero1,
    //   name: "Empowerment Hero",
    //   description: "Eco-friendly retreat hero with badge and dual buttons",
    //   image: "/placeholder.svg",
    // },
    {
      component: CraftCollaborationHero1,
      name: "Collaboration Hero",
      description: "Remote work productivity hero with green gradient",
      image: "/collaborationHero.png",
    },
    {
      component: CraftLearningPlatformHero,
      name: "Learning Platform Hero",
      description: "Social learning platform with blue accent tagline",
      image: "/learningHero.png",
    },
    {
      component: CraftProductivityHero,
      name: "Productivity Hero",
      description: "Split-screen productivity app with form and stats",
      image: "/productivityHero.png",
    },
    {
      component: CraftExpenseTrackingHero,
      name: "Expense Tracking Hero",
      description: "Financial app hero with phone mockup and app store buttons",
      image: "/expenseTrackingHero.png",
    },
    {
      component: CraftCommunityResourcesHero,
      name: "Community Resources Hero",
      description: "Developer community platform with gradient button",
      image: "/communityResourcesHero.png",
    },
    {
      component: CraftHospitalityHero1,
      name: "Hospitality Hero",
      description: "Luxury hotel hero section with elegant design",
      image: "/HospitalityHero.png",
    },
    {
      component: HotelHero1,
      name: "Hotel Hero 1",
      description: "Modern hotel hero with features showcase",
      image: "/hotelHero1.png",
    },
    {
      component: CraftMiniMaxHero1,
      name: "AI Model Hero",
      description:
        "Multi-slide carousel hero for AI models with automatic transitions",
      image: "/AIHero.png",
    },
    {
      component: CraftModernSaaSHero1,
      name: "SaaS Hero",
      description: "Modern SaaS hero with features and trust indicators",
      image: "/sassHero.png",
    },
    {
      component: CraftEnvironmentalHero1,
      name: "Environmental Hero",
      description:
        "Environmental conservation hero with grid layout and wavy background",
      image: "/enviornmentHero.png",
    },
    {
      component: CraftResortBookingHero,
      name: "Resort Booking Hero",
      description: "Luxury resort hero with integrated booking widget",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticHero1,
      name: "Cosmetic Hero 1",
      description: "Modern cosmetic hero with elegant design and call-to-action",
      image: "/cosmeticHero1.png",
    },
  ],
  services: [
    {
      component: CraftMedicalServices1,
      name: "Medical Services",
      description: "Comprehensive medical services grid",
      image: "/medicalService.png",
    },
    {
      component: CraftCosmeticServices1,
      name: "Beauty Services",
      description: "Cosmetic treatment services showcase",
      image: "/beautyService.png",
    },
    {
      component: CraftHospitalityAmenities1,
      name: "Amenities",
      description: "Hotel amenities and facilities grid",
      image: "/amenityService.png",
    },
    {
      component: HospitalityAmenities1,
      name: "Amenities Grid 1",
      description: "Comprehensive amenities showcase with categories",
      image: "/amenitiesGrid1.png",
    },
    {
      component: CraftModernFeatures1,
      name: "Modern Features",
      description: "Feature showcase with icons and descriptions",
      image: "/placeholder.svg",
    },
    {
      component: CraftSpaWellness,
      name: "Spa & Wellness",
      description: "Spa services and wellness treatments showcase",
      image: "/placeholder.svg",
    },
    {
      component: CraftHotelAmenities,
      name: "Hotel Amenities",
      description: "Comprehensive hotel facilities and amenities",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticServices1,
      name: "Cosmetic Services 1",
      description: "Comprehensive cosmetic services showcase with treatments",
      image: "/cosmeticServices1.png",
    },
  ],
  about: [
    {
      component: CraftCosmeticAbout1,
      name: "About Section",
      description: "Professional about section with expertise focus",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhyChooseUs1,
      name: "Why Choose Us v1",
      description: "Simple why choose us section with features",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhatWeDo1,
      name: "What We Do",
      description: "Service offerings and specializations",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticWhyChoose2,
      name: "Why Choose Us v2",
      description: "Competitive advantages and benefits",
      image: "/placeholder.svg",
    },
    {
      component: CraftWhyChooseUs1,
      name: "Trust Indicators",
      description: "Trust building elements and credentials",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticAbout1,
      name: "Cosmetic About 1",
      description: "Professional cosmetic about section with expertise focus",
      image: "/cosmeticAbout1.png",
    },
    {
      component: CraftCosmeticWhyChooseUs1,
      name: "Cosmetic Why Choose Us 1",
      description: "Simple why choose us section with cosmetic features",
      image: "/cosmeticWhyChooseUs1.png",
    },
    {
      component: CraftCosmeticWhyChoose2,
      name: "Cosmetic Why Choose Us 2",
      description: "Advanced why choose us with competitive advantages",
      image: "/cosmeticWhyChoose2.png",
    },
    {
      component: CraftCosmeticWhatWeDo1,
      name: "Cosmetic What We Do 1",
      description: "Cosmetic service offerings and specializations",
      image: "/cosmeticWhatWeDo1.png",
    },
  ],
  team: [
    {
      component: CraftMedicalDoctors1,
      name: "Medical Team",
      description: "Doctor profiles and medical staff",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernTeam1,
      name: "Modern Team",
      description: "Modern team section with social links",
      image: "/placeholder.svg",
    },
  ],
  testimonials: [
    {
      component: CraftMedicalTestimonials1,
      name: "Patient Reviews",
      description: "Medical patient testimonials and reviews",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityTestimonials1,
      name: "Guest Reviews",
      description: "Hotel guest testimonials and ratings",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticTestimonials2,
      name: "Client Reviews",
      description: "Beauty treatment client testimonials",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernTestimonials1,
      name: "Modern Reviews",
      description: "Modern testimonials with avatars and ratings",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticTestimonials2,
      name: "Cosmetic Testimonials 2",
      description: "Beauty treatment client testimonials with ratings",
      image: "/cosmeticTestimonials2.png",
    },
  ],
  content: [
    {
      component: CraftHospitalityRooms1,
      name: "Rooms Showcase",
      description: "Hotel rooms and suites display",
      image: "/placeholder.svg",
    },
    {
      component: RoomShowcase1,
      name: "Room Showcase 1",
      description: "Modern room showcase with carousel and booking",
      image: "/roomShowcase1.png",
    },
    {
      component: CraftHospitalityDining1,
      name: "Dining Options",
      description: "Restaurant and dining experiences",
      image: "/placeholder.svg",
    },
    {
      component: HospitalityDining2,
      name: "Dining Experience 2",
      description: "Comprehensive dining showcase with multiple restaurants",
      image: "/diningExperience2.png",
    },
    {
      component: CraftCosmeticCaseStudies1,
      name: "Case Studies",
      description: "Treatment case studies and results",
      image: "/placeholder.svg",
    },
    {
      component: HospitalityLocation1,
      name: "Location & Map",
      description: "Hotel location with map and nearby attractions",
      image: "/locationMap1.png",
    },
    {
      component: HospitalityTestimonials2,
      name: "Guest Reviews 2",
      description: "Comprehensive guest testimonials with ratings and stats",
      image: "/testimonials2.png",
    },
    {
      component: HospitalityGallery1,
      name: "Property Gallery",
      description: "Interactive photo gallery with category filtering",
      image: "/gallery1.png",
    },
    {
      component: HospitalityBookingForm1,
      name: "Booking Form",
      description: "Complete hotel reservation form with room selection",
      image: "/bookingForm1.png",
    },
    {
      component: HospitalityEvents1,
      name: "Events & Weddings",
      description: "Event showcase with categories and pricing",
      image: "/events1.png",
    },
    {
      component: HospitalityAbout1,
      name: "About Us",
      description: "Hotel story, team, and company information",
      image: "/about1.png",
    },
    {
      component: HospitalityContact1,
      name: "Contact Page",
      description: "Complete contact form with departments and map",
      image: "/contact1.png",
    },
    {
      component: HospitalityFooter1,
      name: "Footer",
      description: "Comprehensive footer with links and contact info",
      image: "/footer1.png",
    },
    {
      component: HospitalitySpaWellness1,
      name: "Spa & Wellness",
      description: "Comprehensive spa services with treatments and packages",
      image: "/spaWellness1.png",
    },
    {
      component: HospitalityConcierge1,
      name: "Concierge Services",
      description: "Personal assistant services with quick requests",
      image: "/concierge1.png",
    },
    {
      component: HospitalityOffers1,
      name: "Special Offers",
      description: "Limited-time deals and packages with discounts",
      image: "/offers1.png",
    },
    {
      component: HospitalityFAQ1,
      name: "FAQ Section",
      description: "Frequently asked questions with search and categories",
      image: "/faq1.png",
    },
    {
      component: HospitalityFeatures1,
      name: "Features Highlight",
      description: "Key features showcase with icons and descriptions",
      image: "/features1.png",
    },
    {
      component: HospitalityFacilities1,
      name: "Facilities Showcase",
      description: "Interactive facilities with hover effects and categories",
      image: "/facilities1.png",
    },
    {
      component: HospitalityInteractiveOffers1,
      name: "Interactive Offers",
      description: "Hover-based offer banners with animations",
      image: "/interactiveOffers1.png",
    },
    {
      component: HospitalityRoomTabs1,
      name: "Room Types Tabs",
      description: "Tabbed room showcase with pricing and features",
      image: "/roomTabs1.png",
    },
    {
      component: HospitalityNewsletter1,
      name: "Newsletter Signup",
      description: "Email subscription form with privacy notice",
      image: "/newsletter1.png",
    },
    {
      component: HospitalityInstagram1,
      name: "Instagram Feed",
      description: "Social media gallery with follow button",
      image: "/instagram1.png",
    },
    {
      component: HospitalityTestimonials3,
      name: "Testimonials with Ratings",
      description: "Guest reviews with star ratings and platform integration",
      image: "/testimonials3.png",
    },
    {
      component: HospitalityFooter2,
      name: "Complete Footer",
      description: "Full footer with newsletter, Instagram, and navigation",
      image: "/footer2.png",
    },
    {
      component: HospitalityMarquee1,
      name: "Marquee Text",
      description: "Scrolling text banner with achievements",
      image: "/marquee1.png",
    },
    {
      component: HospitalityAbout2,
      name: "About Story",
      description: "Company story with timeline and achievements",
      image: "/about2.png",
    },
    {
      component: HospitalityHeader1,
      name: "Header Navigation",
      description: "Complete header with logo, navigation, and booking",
      image: "/header1.png",
    },
    {
      component: HospitalityHero2,
      name: "Hero Banner",
      description: "Full-screen hero with slider and call-to-action",
      image: "/hero2.png",
    },
    {
      component: HospitalityFeatures2,
      name: "Features Grid",
      description: "Icon-based features showcase with descriptions",
      image: "/features2.png",
    },
    {
      component: HospitalityFacilities2,
      name: "Rotating Facilities",
      description: "Interactive facilities with hover effects and rotation",
      image: "/facilities2.png",
    },
    {
      component: HospitalityTestimonials4,
      name: "Testimonial Banner",
      description: "Large testimonial with vertical label and company logo",
      image: "/testimonials4.png",
    },
    {
      component: HospitalityClients1,
      name: "Client Logos",
      description: "Partner logos with discount banner",
      image: "/clients1.png",
    },
    {
      component: HospitalityRoomTabs2,
      name: "Room Tabs Detailed",
      description: "Interactive room showcase with detailed content and pricing",
      image: "/roomTabs2.png",
    },
    {
      component: HospitalityPricing1,
      name: "Pricing Cards",
      description: "Package pricing with features and discounts",
      image: "/pricing1.png",
    },
    {
      component: HospitalityCTA1,
      name: "Call to Action",
      description: "Full-screen CTA banner with multiple actions",
      image: "/cta1.png",
    },
    {
      component: HospitalityStats1,
      name: "Statistics Counter",
      description: "Animated statistics with icons and descriptions",
      image: "/stats1.png",
    },
    // New multi-industry components
    {
      component: HospitalityDropdown1,
      name: "Dropdown Menu",
      description: "Interactive dropdown with room options and pricing",
      image: "/dropdown1.png",
    },
    {
      component: BusinessTopBar1,
      name: "Business Top Bar",
      description: "Top bar with announcement and contact information",
      image: "/topBar1.png",
    },
    {
      component: RestaurantFeatures1,
      name: "Restaurant Features",
      description: "Delivery and service features with circular icons",
      image: "/restaurantFeatures1.png",
    },
    {
      component: SearchModal1,
      name: "Search Modal",
      description: "Full-screen search modal with results",
      image: "/searchModal1.png",
    },
    // Accounting components
    {
      component: AccountingHero1,
      name: "Accounting Hero",
      description: "Hero section with stats and contact form for accounting",
      image: "/accountingHero1.png",
    },
    {
      component: AccountingServices1,
      name: "Accounting Services",
      description: "Services carousel with interactive cards and navigation",
      image: "/accountingServices1.png",
    },
    {
      component: AccountingCompany1,
      name: "Accounting Company",
      description: "Company about page with features and page title",
      image: "/accountingCompany1.png",
    },
    {
      component: AccountingContact1,
      name: "Accounting Contact",
      description: "Contact page with info cards and contact form",
      image: "/accountingContact1.png",
    },
    {
      component: AccountingNews1,
      name: "Accounting News",
      description: "News/blog listing with featured articles and categories",
      image: "/accountingNews1.png",
    },
    {
      component: AccountingProcess1,
      name: "Accounting Process",
      description: "Process steps with numbered cards and CTA section",
      image: "/accountingProcess1.png",
    },
    {
      component: AccountingServicesDetails1,
      name: "Accounting Services Details",
      description: "Service details page with features and pricing",
      image: "/accountingServicesDetails1.png",
    },
    {
      component: AccountingBlogSingle1,
      name: "Accounting Blog Single",
      description: "Single blog post with sidebar and related articles",
      image: "/accountingBlogSingle1.png",
    },
    // Elder Care components
    {
      component: ElderCareHero1,
      name: "Elder Care Hero",
      description: "Hero section with welcome message and call-to-action buttons",
      image: "/elderCareHero1.png",
    },
    {
      component: ElderCareCTA1,
      name: "Elder Care CTA",
      description: "Call-to-action section with help info and support button",
      image: "/elderCareCTA1.png",
    },
    {
      component: ElderCareAbout1,
      name: "Elder Care About",
      description: "About section with features and contact information",
      image: "/elderCareAbout1.png",
    },
    {
      component: ElderCareTimeline1,
      name: "Elder Care Timeline",
      description: "Donation timeline with progress indicators and statistics",
      image: "/elderCareTimeline1.png",
    },
    {
      component: ElderCareServices1,
      name: "Elder Care Services",
      description: "Services grid with cards and navigation controls",
      image: "/elderCareServices1.png",
    },
    {
      component: ElderCareVideo1,
      name: "Elder Care Video",
      description: "Video section with play button and background image",
      image: "/elderCareVideo1.png",
    },
    {
      component: ElderCareFAQ1,
      name: "Elder Care FAQ",
      description: "FAQ section with collapsible questions and answers",
      image: "/elderCareFAQ1.png",
    },
    {
      component: ElderCareFeatures1,
      name: "Elder Care Features",
      description: "Features section with benefits and appointment scheduling",
      image: "/elderCareFeatures1.png",
    },
    {
      component: ElderCareBlog1,
      name: "Elder Care Blog",
      description: "Blog grid with articles and social engagement",
      image: "/elderCareBlog1.png",
    },
    {
      component: ElderCareFooter1,
      name: "Elder Care Footer",
      description: "Footer with contact info, links, and newsletter signup",
      image: "/elderCareFooter1.png",
    },
    // Marketing components
    {
      component: MarketingHero1,
      name: "Marketing Hero",
      description: "Hero section with animated text and call-to-action buttons",
      image: "/marketingHero1.png",
    },
    {
      component: MarketingClients1,
      name: "Marketing Clients",
      description: "Client logos showcase with scroll animation",
      image: "/marketingClients1.png",
    },
    {
      component: MarketingAbout1,
      name: "Marketing About",
      description: "About section with statistics and team info",
      image: "/marketingAbout1.png",
    },
    {
      component: MarketingMarquee1,
      name: "Marketing Marquee",
      description: "Scrolling text marquee with animation",
      image: "/marketingMarquee1.png",
    },
    {
      component: MarketingPortfolio1,
      name: "Marketing Portfolio",
      description: "Portfolio grid with filtering and hover effects",
      image: "/marketingPortfolio1.png",
    },
    {
      component: MarketingStrategy1,
      name: "Marketing Strategy",
      description: "Strategy section with accordion and process steps",
      image: "/marketingStrategy1.png",
    },
    {
      component: MarketingPricing1,
      name: "Marketing Pricing",
      description: "Pricing plans with features and CTA buttons",
      image: "/marketingPricing1.png",
    },
    {
      component: MarketingTestimonials1,
      name: "Marketing Testimonials",
      description: "Client testimonials with slider and ratings",
      image: "/marketingTestimonials1.png",
    },
    {
      component: MarketingCTA1,
      name: "Marketing CTA",
      description: "Call-to-action section with contact form",
      image: "/marketingCTA1.png",
    },
    {
      component: MarketingFooter1,
      name: "Marketing Footer",
      description: "Footer with contact info, social links, and newsletter",
      image: "/marketingFooter1.png",
    },
    // Restaurant components
    {
      component: RestaurantHero1,
      name: "Restaurant Hero",
      description: "Hero section with circular background and floating food image",
      image: "/restaurantHero1.png",
    },
    {
      component: RestaurantAbout1,
      name: "Restaurant About",
      description: "About section with features and decorative elements",
      image: "/restaurantAbout1.png",
    },
    {
      component: RestaurantMenu1,
      name: "Restaurant Menu",
      description: "Menu section with tabbed categories and pricing",
      image: "/restaurantMenu1.png",
    },
    {
      component: RestaurantDishes1,
      name: "Restaurant Dishes",
      description: "Popular dishes grid with hover effects and pricing",
      image: "/restaurantDishes1.png",
    },
    {
      component: RestaurantMarquee1,
      name: "Restaurant Marquee",
      description: "Scrolling text marquee with decorative images",
      image: "/restaurantMarquee1.png",
    },
    {
      component: RestaurantTestimonials1,
      name: "Restaurant Testimonials",
      description: "Customer testimonials with slider navigation",
      image: "/restaurantTestimonials1.png",
    },
    {
      component: RestaurantStats1,
      name: "Restaurant Stats",
      description: "Statistics section with star rating and customer count",
      image: "/restaurantStats1.png",
    },
    {
      component: RestaurantBlog1,
      name: "Restaurant Blog",
      description: "Blog grid with featured articles and categories",
      image: "/restaurantBlog1.png",
    },
    {
      component: RestaurantFooter1,
      name: "Restaurant Footer",
      description: "Footer with contact info, features, and social links",
      image: "/restaurantFooter1.png",
    },
    // Restaurant Contact components
    {
      component: RestaurantContactMap1,
      name: "Restaurant Contact Map",
      description: "Contact page with map integration and page title",
      image: "/restaurantContactMap1.png",
    },
    {
      component: RestaurantContactForm1,
      name: "Restaurant Contact Form",
      description: "Contact form with decorative background and icons",
      image: "/restaurantContactForm1.png",
    },
    {
      component: RestaurantContactInfo1,
      name: "Restaurant Contact Info",
      description: "Contact information with multiple contact methods",
      image: "/restaurantContactInfo1.png",
    },
    // Restaurant Gallery components
    {
      component: RestaurantGalleryFilter1,
      name: "Restaurant Gallery Filter",
      description: "Filterable image gallery with categories and lightbox",
      image: "/restaurantGalleryFilter1.png",
    },
    // Restaurant Menu components
    {
      component: RestaurantMenuTabs1,
      name: "Restaurant Menu Tabs",
      description: "Tabbed menu interface with categories and pricing",
      image: "/restaurantMenuTabs1.png",
    },
    {
      component: RestaurantSpecialOffers1,
      name: "Restaurant Special Offers",
      description: "Special menu items with ratings and pricing",
      image: "/restaurantSpecialOffers1.png",
    },
    // Restaurant Story components
    {
      component: RestaurantVideoHero1,
      name: "Restaurant Video Hero",
      description: "Video hero section with play button and text overlay",
      image: "/restaurantVideoHero1.png",
    },
    {
      component: RestaurantAchievements1,
      name: "Restaurant Achievements",
      description: "Awards and achievements grid with statistics",
      image: "/restaurantAchievements1.png",
    },
    {
      component: RestaurantImageCarousel1,
      name: "Restaurant Image Carousel",
      description: "Image carousel with description and swiper navigation",
      image: "/restaurantImageCarousel1.png",
    },
    // Restaurant Blog components
    {
      component: RestaurantBlogListing1,
      name: "Restaurant Blog Listing",
      description: "Blog listing page with metro grid layout and featured posts",
      image: "/restaurantBlogListing1.png",
    },
    {
      component: RestaurantBlogSingle1,
      name: "Restaurant Blog Single",
      description: "Single blog post page with content, tags, and related posts",
      image: "/restaurantBlogSingle1.png",
    },
    // Restaurant Team components
    {
      component: RestaurantChefs1,
      name: "Restaurant Chefs",
      description: "Chefs and team page with main chef spotlight and team grid",
      image: "/restaurantChefs1.png",
    },
    {
      component: CraftCosmeticCaseStudy1,
      name: "Single Case Study",
      description: "Individual case study showcase",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticBeforeAfter1,
      name: "Before & After",
      description: "Transformation showcases",
      image: "/placeholder.svg",
    },
    {
      component: CraftMedicalHowItWorks1,
      name: "Process Steps",
      description: "Step-by-step process explanation",
      image: "/placeholder.svg",
    },
    {
      component: CraftResearchCards,
      name: "Research Cards",
      description: "Research and study showcase cards",
      image: "/placeholder.svg",
    },
    {
      component: CraftPhotoGallery,
      name: "Photo Gallery",
      description: "Image gallery with lightbox",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernBlog1,
      name: "Blog Section",
      description: "Modern blog showcase with grid layout",
      image: "/placeholder.svg",
    },
    {
      component: CraftLuxurySuites,
      name: "Luxury Suites",
      description: "Premium accommodations showcase with pricing",
      image: "/placeholder.svg",
    },
    {
      component: CraftFineDining,
      name: "Fine Dining",
      description: "Restaurant showcase with chef spotlight",
      image: "/placeholder.svg",
    },
    {
      component: CraftWeddingEvents,
      name: "Wedding & Events",
      description: "Wedding venue showcase with packages",
      image: "/placeholder.svg",
    },
    {
      component: CraftPropertyGallery,
      name: "Property Gallery",
      description: "Interactive property photo gallery with virtual tour",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticCaseStudies1,
      name: "Cosmetic Case Studies 1",
      description: "Treatment case studies and results showcase",
      image: "/cosmeticCaseStudies1.png",
    },
    {
      component: CraftCosmeticCaseStudy1,
      name: "Cosmetic Case Study 1",
      description: "Individual case study showcase with detailed results",
      image: "/cosmeticCaseStudy1.png",
    },
    {
      component: CraftCosmeticBeforeAfter1,
      name: "Cosmetic Before & After 1",
      description: "Transformation showcases with before and after images",
      image: "/cosmeticBeforeAfter1.png",
    },
  ],
  pricing: [
    {
      component: CraftModernPricing1,
      name: "Pricing Plans",
      description: "Modern pricing table with feature comparison",
      image: "/placeholder.svg",
    },
  ],
  cta: [],
  contact: [
    {
      component: CraftModernContact1,
      name: "Contact Section",
      description: "Modern contact form with information",
      image: "/placeholder.svg",
    },
  ],
  headers: [
    {
      component: CraftSimpleHeader,
      name: "Simple Header",
      description: "Clean navigation header",
      image: "/placeholder.svg",
    },
    // {
    //   component: CraftMegaMenuHeader,
    //   name: "Mega Menu Header",
    //   description: "Advanced navigation with mega menu",
    //   image: "/placeholder.svg",
    // },
  ],
  footers: [
    {
      component: CraftMedicalFooter1,
      name: "Medical Footer",
      description: "Professional medical practice footer",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticFooter1,
      name: "Beauty Footer",
      description: "Cosmetic clinic footer with contact",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityFooter1,
      name: "Hospitality Footer",
      description: "Luxury hotel footer with amenities",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernFooter1,
      name: "Modern Footer",
      description: "Modern footer with newsletter and social links",
      image: "/placeholder.svg",
    },
    {
      component: CraftCosmeticFooter1,
      name: "Cosmetic Footer 1",
      description: "Professional cosmetic clinic footer with contact info",
      image: "/cosmeticFooter1.png",
    },
  ],
  cards: [
    {
      component: CraftCosmeticCard1,
      name: "Beauty Cards",
      description: "Elegant cards for beauty and wellness content",
      image: "/placeholder.svg",
    },
    {
      component: CraftHospitalityCard1,
      name: "Hospitality Cards",
      description: "Clean cards for hotels and luxury services",
      image: "/placeholder.svg",
    },
    {
      component: CraftModernCard1,
      name: "Modern Cards",
      description: "Horizontal layout cards for articles and blogs",
      image: "/placeholder.svg",
    },
  ],
};

export const SidebarContent = ({
  currentCategory,
  activeCategory,
  isComponentEditor = false,
}: SidebarContentProps) => {
  const { openModal } = useModalStore();
  const [searchQuery, setSearchQuery] = useState("");

  const categoryItems =
    typeof currentCategory?.items === "function"
      ? currentCategory.items()
      : currentCategory?.items || [];

  // Filter components based on search query
  const filterComponents = (components: any[]) => {
    if (!searchQuery.trim()) return components;
    
    const query = searchQuery.toLowerCase();
    return components.filter((item) =>
      item.name.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    );
  };

  // Filter components by type for search
  const filteredComponentsByType = useMemo(() => {
    if (!searchQuery.trim()) return componentsByType;
    
    const filtered: any = {};
    Object.keys(componentsByType).forEach((key) => {
      filtered[key] = filterComponents(componentsByType[key as keyof typeof componentsByType]);
    });
    return filtered;
  }, [searchQuery]);

  // Calculate total components for the unified category
  const totalComponents = useMemo(() => {
    if (activeCategory === "components") {
      return searchQuery.trim()
        ? Object.values(filteredComponentsByType).reduce(
            (total, items: any) => total + items.length,
            0
          )
        : Object.values(componentsByType).reduce(
            (total, items: any) => total + items.length,
            0
          );
    }
    return searchQuery.trim() ? filterComponents(categoryItems).length : categoryItems.length;
  }, [activeCategory, searchQuery, categoryItems, filteredComponentsByType]);

  return (
    <div className="w-80 bg-card flex flex-col h-full transition-all duration-300">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">
          {currentCategory?.name}
        </h2>
        <p className="text-sm text-muted-foreground">
          {totalComponents} components available
        </p>
        
        {/* Search Input */}
        <div className="relative mt-3">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchQuery("")}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 hover:bg-muted"
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </div>

      <ScrollArea className="flex-1">
        <div className="p-4 space-y-3">
          {/* New unified components category with accordions - hide in component editor */}
          {activeCategory === "components" && !isComponentEditor && (
            <>
              {searchQuery.trim() && totalComponents === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No components found for "{searchQuery}"</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear search
                  </Button>
                </div>
              ) : (
                <Accordion
                  type="multiple"
                  defaultValue={searchQuery.trim() ? [] : ["hero", "services"]}
                  className="space-y-2"
                >
              {filteredComponentsByType.hero.length > 0 && (
                <AccordionItem value="hero">
                  <AccordionTrigger className="text-sm font-medium">
                    Hero Sections ({filteredComponentsByType.hero.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.hero.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.services.length > 0 && (
                <AccordionItem value="services">
                  <AccordionTrigger className="text-sm font-medium">
                    Services & Features ({filteredComponentsByType.services.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.services.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.about.length > 0 && (
                <AccordionItem value="about">
                  <AccordionTrigger className="text-sm font-medium">
                    About & Values ({filteredComponentsByType.about.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.about.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.team.length > 0 && (
                <AccordionItem value="team">
                  <AccordionTrigger className="text-sm font-medium">
                    Team & Staff ({filteredComponentsByType.team.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.team.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.testimonials.length > 0 && (
                <AccordionItem value="testimonials">
                  <AccordionTrigger className="text-sm font-medium">
                    Testimonials & Reviews ({filteredComponentsByType.testimonials.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.testimonials.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.content.length > 0 && (
                <AccordionItem value="content">
                  <AccordionTrigger className="text-sm font-medium">
                    Content & Gallery ({filteredComponentsByType.content.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.content.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.cta.length > 0 && (
                <AccordionItem value="cta">
                  <AccordionTrigger className="text-sm font-medium">
                    Call to Action ({filteredComponentsByType.cta.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.cta.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.pricing.length > 0 && (
                <AccordionItem value="pricing">
                  <AccordionTrigger className="text-sm font-medium">
                    Pricing & Plans ({filteredComponentsByType.pricing.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.pricing.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.contact.length > 0 && (
                <AccordionItem value="contact">
                  <AccordionTrigger className="text-sm font-medium">
                    Contact & Forms ({filteredComponentsByType.contact.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.contact.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.headers.length > 0 && (
                <AccordionItem value="headers">
                  <AccordionTrigger className="text-sm font-medium">
                    Headers & Navigation ({filteredComponentsByType.headers.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.headers.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.footers.length > 0 && (
                <AccordionItem value="footers">
                  <AccordionTrigger className="text-sm font-medium">
                    Footers ({filteredComponentsByType.footers.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.footers.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}

              {filteredComponentsByType.cards.length > 0 && (
                <AccordionItem value="cards">
                  <AccordionTrigger className="text-sm font-medium">
                    Dynamic Cards ({filteredComponentsByType.cards.length})
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 pt-2">
                      {filteredComponentsByType.cards.map((item, index) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                          image={item.image}
                        />
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
                </Accordion>
              )}
            </>
          )}

          {/* CMS Fields category with special handling */}
          {activeCategory === "fields" && (
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground px-2 mb-4">
                Drag these fields to display data from your collection
              </div>
              {searchQuery.trim() && filterComponents(categoryItems).length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No fields found for "{searchQuery}"</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear search
                  </Button>
                </div>
              ) : (
                filterComponents(categoryItems).map((item: any, index: number) => (
                  <div key={index} className="space-y-1">
                    {item.fieldType && (
                      <div className="text-xs text-muted-foreground px-2 capitalize">
                        {item.fieldType} Field
                      </div>
                    )}
                    <BlockItem
                      component={item.component}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      props={item.props}
                    />
                  </div>
                ))
              )}
            </div>
          )}

          {/* Regular category items for other categories */}
          {activeCategory !== "userBlocks" &&
            activeCategory !== "page" &&
            activeCategory !== "components" &&
            activeCategory !== "fields" && (
            <>
              {searchQuery.trim() && filterComponents(categoryItems).length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Search className="h-8 w-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">No items found for "{searchQuery}"</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSearchQuery("")}
                    className="mt-2"
                  >
                    Clear search
                  </Button>
                </div>
              ) : (
                filterComponents(categoryItems).map((item: any, index: number) => (
                  <BlockItem
                    key={index}
                    component={item.component}
                    name={item.name}
                    description={item.description}
                    image={item.image}
                    props={item.props}
                  />
                ))
              )}
            </>
          )}

          {/* Special accordion handling for page elements - hide in component editor */}
          {activeCategory === "page" && !isComponentEditor && (
            <Accordion type="single" collapsible defaultValue="medical">
              <AccordionItem value="medical">
                <AccordionTrigger className="text-sm font-medium">
                  Medical Components
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {filterComponents(categoryItems)
                      .filter(
                        (item: any) =>
                          item.name.toLowerCase().includes("medical") ||
                          item.name.toLowerCase().includes("elder care") ||
                          item.name === "Why Choose Us" ||
                          item.name === "Research Cards" ||
                          item.name === "Photo Gallery"
                      )
                      .map((item: any, index: number) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general">
                <AccordionTrigger className="text-sm font-medium">
                  General Components
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-3 pt-2">
                    {filterComponents(categoryItems)
                      .filter(
                        (item: any) =>
                          !item.name.toLowerCase().includes("medical") &&
                          !item.name.toLowerCase().includes("elder care") &&
                          item.name !== "Why Choose Us" &&
                          item.name !== "Research Cards" &&
                          item.name !== "Photo Gallery"
                      )
                      .map((item: any, index: number) => (
                        <BlockItem
                          key={index}
                          component={item.component}
                          name={item.name}
                          description={item.description}
                        />
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
        </div>
      </ScrollArea>
    </div>
  );
};
