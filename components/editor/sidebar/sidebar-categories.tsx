import {
  CraftAlert,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCheckboxGroup,
  CraftCheckboxListTile,
  CraftChoiceChips,
  CraftMedicalServices1,
  CraftWhyChooseUs1,
  CraftCounterButton,
  CraftCreditCardForm,
  CraftForm,
  CraftDivider,
  CraftDropDown,
  CraftFlex,
  CraftGrid,
  CraftHeading,
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
  CraftTab,
  CraftTabPanel,
  CraftCarousel,
  CraftBlogGrid,
  CraftBlogCard,
  CraftProductCard,
  CraftText,
  CraftTextarea,
  CraftVideo,
  CraftMedicalDoctors1,
  CraftMedicalTestimonials1,
  CraftMedicalHero1,
  CraftCosmeticHero1,
  CraftCosmeticAbout1,
  CraftSimpleHeader,
  CraftMegaMenuHeader,
  CraftResearchCards,
  CraftPhotoGallery,
  CraftMedicalHowItWorks1,
  CraftMedicalFooter1,
  CraftElderCareServices1,
  CraftElderCareValues1,
  CraftElderCareTeam1,
  CraftElderCareCTA1,
  CraftElderCareTestimonials1,
  CraftCosmeticServices1,
} from "@/components/editor/craft-components";

export interface CategoryConfig {
  name: string;
  icon: React.ReactNode;
  items:
    | Array<{
        component: React.ComponentType;
        name: string;
        description: string;
      }>
    | (() => Array<{
        component: React.ComponentType;
        name: string;
        description: string;
      }>);
}

export const categoryIcons = {
  userBlocks: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  headers: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 8a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V8z" />
    </svg>
  ),
  elements: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  ),
  layout: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 6.707 6.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l4-4z" />
    </svg>
  ),
  page: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
    </svg>
  ),
  forms: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  ),
};

export const elementsCategory = {
  name: "Commonly Used Elements",
  icon: categoryIcons.elements,
  items: [
    {
      component: CraftText,
      name: "Text",
      description: "Editable text element",
    },
    {
      component: CraftHeading,
      name: "Heading",
      description: "H1-H6 heading elements",
    },
    {
      component: CraftImage,
      name: "Image",
      description: "Responsive image block",
    },
    {
      component: CraftButton,
      name: "Button",
      description: "Interactive button element",
    },
    {
      component: CraftLink,
      name: "Link",
      description: "Clickable link element",
    },
    {
      component: CraftIcon,
      name: "Icon",
      description: "Scalable icon element",
    },
    {
      component: CraftBadge,
      name: "Badge",
      description: "Small label or tag element",
    },
    {
      component: CraftList,
      name: "List",
      description: "Ordered/unordered lists",
    },
    {
      component: CraftCard,
      name: "Card",
      description: "Content container with styling",
    },
    {
      component: CraftAlert,
      name: "Alert",
      description: "Alert messages and notifications",
    },
    {
      component: CraftTab,
      name: "Tab",
      description: "Tab navigation with panels",
    },
    {
      component: CraftTabPanel,
      name: "Tab Panel",
      description: "Individual tab content panel",
    },
    {
      component: CraftCarousel,
      name: "Carousel",
      description: "Interactive image/content slider",
    },
    {
      component: CraftBlogCard,
      name: "Blog Card",
      description: "Individual blog post card with API integration",
    },
    {
      component: CraftProductCard,
      name: "Product Card",
      description: "Individual product card with API integration",
    },
  ],
};

export const headersCategory: CategoryConfig = {
  name: "Headers & Navigation",
  icon: categoryIcons.headers,
  items: [
    {
      name: "Simple Header",
      component: CraftSimpleHeader,
      description: "A clean header with logo, navigation, and CTA button",
    },
    {
      name: "Mega Menu Header",
      component: CraftMegaMenuHeader,
      description:
        "Advanced header with hover-activated megamenu dropdowns and editable content sections",
    },
  ],
};

export const layoutCategory = {
  name: "Layout Elements",
  icon: categoryIcons.layout,
  items: [
    {
      component: CraftSection,
      name: "Container",
      description: "Flexible container element",
    },
    {
      component: CraftFlex,
      name: "Flex",
      description: "Flexible layout container (row/column)",
    },
    {
      component: CraftGrid,
      name: "Grid",
      description: "Advanced grid layout",
    },
    {
      component: CraftSpacer,
      name: "Spacer",
      description: "Vertical spacing element",
    },
    {
      component: CraftDivider,
      name: "Divider",
      description: "Horizontal line separator",
    },
    {
      component: CraftVideo,
      name: "Video",
      description: "Embedded video player",
    },
    {
      component: CraftMap,
      name: "Map",
      description: "Interactive map display",
    },
  ],
};

export const pageCategory = {
  name: "Page Elements",
  icon: categoryIcons.page,
  items: [
    {
      component: CraftMedicalHero1,
      name: "Medical Hero 1",
      description: "Medical hero with call-to-action",
    },
    {
      component: CraftCosmeticHero1,
      name: "Cosmetic Hero 1",
      description: "Cosmetic/wellness hero with brown theme",
    },
    {
      component: CraftCosmeticAbout1,
      name: "Cosmetic About 1",
      description: "Cosmetic/wellness about section with features and contact",
    },
    {
      component: CraftCosmeticServices1,
      name: "Cosmetic Services",
      description: "Cosmetic services grid with 6 service cards",
    },
    {
      component: CraftResearchCards,
      name: "Research Cards",
      description: "Grid of research model cards with gradients and badges",
    },
    {
      component: CraftPhotoGallery,
      name: "Photo Gallery",
      description: "Beautiful photo gallery with overlays and descriptions",
    },
    {
      component: CraftMedicalHowItWorks1,
      name: "How it Services",
      description: "How it works showcase",
    },
    {
      component: CraftMedicalFooter1,
      name: "Medical Footer 1",
      description: "Medical footer with contact information",
    },
    {
      component: CraftMedicalServices1,
      name: "Medical Services",
      description: "Healthcare services showcase",
    },
    {
      component: CraftWhyChooseUs1,
      name: "Why Choose Us",
      description: "Trust and credibility section with features",
    },
    {
      component: CraftMedicalTestimonials1,
      name: "Medical Testimonials",
      description: "Showcase of medical testimonials",
    },
    {
      component: CraftMedicalDoctors1,
      name: "Medical Doctors",
      description: "Showcase of medical doctors",
    },
    {
      component: CraftBlogGrid,
      name: "Blog Grid",
      description: "Display blog posts in a responsive grid layout",
    },
    {
      component: CraftElderCareServices1,
      name: "Elder Care Services",
      description: "Elder care services showcase",
    },
    {
      component: CraftElderCareValues1,
      name: "Elder Care Values",
      description: "About section with company values",
    },
    {
      component: CraftElderCareTeam1,
      name: "Elder Care Team",
      description: "Team members showcase",
    },
    {
      component: CraftElderCareCTA1,
      name: "Elder Care CTA",
      description: "Call-to-action section",
    },
    {
      component: CraftElderCareTestimonials1,
      name: "Elder Care Testimonials",
      description: "Family testimonials section",
    },
  ],
};

export const formsCategory = {
  name: "Form Elements",
  icon: categoryIcons.forms,
  items: [
    {
      component: CraftForm,
      name: "Form",
      description: "Form container with API submission",
    },
    {
      component: CraftInput,
      name: "Input",
      description: "Form input field",
    },
    {
      component: CraftTextarea,
      name: "Textarea",
      description: "Multi-line text input",
    },
    {
      component: CraftDropDown,
      name: "Drop Down",
      description: "Select dropdown with options",
    },
    {
      component: CraftSelect,
      name: "Select",
      description: "Dropdown selection input",
    },
    {
      component: CraftCheckbox,
      name: "Checkbox",
      description: "Checkbox input element",
    },
    {
      component: CraftCheckboxGroup,
      name: "Checkbox Group",
      description: "Group of checkboxes",
    },
    {
      component: CraftCheckboxListTile,
      name: "Checkbox List Tile",
      description: "Checkbox list with titles",
    },
    {
      component: CraftSwitch,
      name: "Switch",
      description: "Toggle switch component",
    },
    {
      component: CraftSwitchListTile,
      name: "Switch List Tile",
      description: "Switch list with titles",
    },
    {
      component: CraftRadioButton,
      name: "Radio Button",
      description: "Radio button group",
    },
    {
      component: CraftSlider,
      name: "Slider",
      description: "Range slider input",
    },
    {
      component: CraftRatingBar,
      name: "Rating Bar",
      description: "Star rating component",
    },
    {
      component: CraftCounterButton,
      name: "Counter Button",
      description: "Number counter with +/- buttons",
    },
    {
      component: CraftPinCode,
      name: "Pin Code",
      description: "PIN/OTP input fields",
    },
    {
      component: CraftChoiceChips,
      name: "Choice Chips",
      description: "Selectable chip buttons",
    },
    {
      component: CraftCreditCardForm,
      name: "Credit Card Form",
      description: "Complete credit card form",
    },
    {
      component: CraftSignature,
      name: "Signature",
      description: "Signature drawing pad",
    },
  ],
};
