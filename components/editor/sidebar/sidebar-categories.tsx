import {
  CraftAlert,
  CraftBadge,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCheckboxGroup,
  CraftCheckboxListTile,
  CraftChoiceChips,
  CraftCounterButton,
  CraftCreditCardForm,
  CraftForm,
  CraftDropDown,
  CraftHeading,
  CraftIcon,
  CraftImage,
  CraftInput,
  CraftLink,
  CraftList,
  CraftPinCode,
  CraftRadioButton,
  CraftRatingBar,
  CraftSelect,
  CraftSignature,
  CraftSlider,
  CraftSwitch,
  CraftSwitchListTile,
  CraftTab,
  CraftTabPanel,
  CraftCarousel,
  CraftBlogCard,
  CraftProductCard,
  CraftText,
  CraftTextarea,
  CraftCMSField,
  CraftCMSPrevNext,
  CraftCMSPrevButton,
  CraftCMSNextButton,
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
  elements: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  ),
  forms: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
    </svg>
  ),
  fields: (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
      <path
        fillRule="evenodd"
        d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3a2 2 0 012-2h2a2 2 0 012 2v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 2a1 1 0 000 2h6a1 1 0 100-2H7zm0 4a1 1 0 100 2h6a1 1 0 100-2H7z"
        clipRule="evenodd"
      />
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

export const fieldsCategory = {
  name: "CMS Fields",
  icon: categoryIcons.fields,
  items: [
    {
      component: CraftCMSField,
      name: "CMS Field",
      description: "Dynamic CMS field component",
    },
    {
      component: CraftCMSPrevNext,
      name: "Previous/Next Navigation",
      description: "Navigation between CMS items",
    },
    {
      component: CraftCMSPrevButton,
      name: "Previous Button",
      description: "Navigate to previous CMS item",
    },
    {
      component: CraftCMSNextButton,
      name: "Next Button",
      description: "Navigate to next CMS item",
    },
  ],
};
