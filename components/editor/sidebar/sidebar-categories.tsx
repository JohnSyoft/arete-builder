import {
  CraftAlert,
  CraftBadge,
  CraftBox,
  CraftButton,
  CraftCard,
  CraftCheckbox,
  CraftCheckboxGroup,
  CraftCheckboxListTile,
  CraftChoiceChips,
  CraftColumns,
  CraftCounterButton,
  CraftCreditCardForm,
  CraftDivider,
  CraftFlex,
  CraftForm,
  CraftDropDown,
  CraftGrid,
  CraftHeading,
  CraftIcon,
  CraftImage,
  CraftInput,
  CraftLineBreak,
  CraftLink,
  CraftList,
  CraftMap,
  CraftNavigation,
  CraftNavigationItem,
  CraftPinCode,
  CraftRadioButton,
  CraftRatingBar,
  CraftRow,
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
  CraftBlogCard,
  CraftBlogGrid,
  CraftProductCard,
  CraftText,
  CraftTextarea,
  CraftVideo,
  CraftFormattedText,
  CraftCollectionWrapper,
  CraftHeaderWrapper,
} from "@/components/editor/craft-components";
import { CollectionCard } from "./CollectionCard";
import { useCollections } from "@/hooks/useCollections";
import { useProjects } from "@/hooks/useProjects";

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
  collections: (
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
      component: CraftFormattedText,
      name: "Formatted Text",
      description: "Rich text with formatting",
    },
    {
      component: CraftCollectionWrapper,
      name: "Collection Wrapper",
      description: "Display CMS collection items with customizable card designs",
    },
    {
      component: CraftHeaderWrapper,
      name: "Header",
      description: "Website header with logo and navigation menu",
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
      component: CraftBox,
      name: "Box",
      description: "Flexible container element",
    },
    {
      component: CraftSection,
      name: "Section",
      description: "Page section container",
    },
    {
      component: CraftRow,
      name: "Row",
      description: "Horizontal layout container",
    },
    {
      component: CraftColumns,
      name: "Columns",
      description: "Multi-column layout",
    },
    {
      component: CraftGrid,
      name: "Grid",
      description: "CSS Grid layout container",
    },
    {
      component: CraftFlex,
      name: "Flex",
      description: "Flexbox layout container",
    },
    {
      component: CraftSpacer,
      name: "Spacer",
      description: "Add spacing between elements",
    },
    {
      component: CraftDivider,
      name: "Divider",
      description: "Visual separator line",
    },
    {
      component: CraftLineBreak,
      name: "Line Break",
      description: "Force line break",
    },
    {
      component: CraftVideo,
      name: "Video",
      description: "Embedded video player",
    },
    {
      component: CraftMap,
      name: "Map",
      description: "Interactive map component",
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
      component: CraftBlogGrid,
      name: "Blog Grid",
      description: "Grid layout for blog posts",
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

// Collections category - shows available collections for drag and drop
export const createCollectionsCategory = (projectId?: string) => {
  // This will be a function that returns the category with dynamic collections
  return {
    name: "Collections",
    icon: categoryIcons.collections,
    items: () => {
      // We'll use the hooks inside the component that renders this
      return [];
    },
  };
};

// Dynamic CMS fields category - will be populated based on current page's collection
export const createFieldsCategory = (collectionFields: any[] = [], collectionId?: string) => ({
  name: "CMS Fields",
  icon: categoryIcons.fields,
  items: () => {
    const items = [];
    
    // Add each field from the collection as a draggable component
    collectionFields.forEach((field) => {
      const { component, props } = createCMSFieldComponent(field, collectionId);
      items.push({
        component: component,
        props: props, // Pass CMS field props
        name: field.name,
        description: `${field.type} field - ${field.description || 'CMS field'}`,
        fieldType: field.type, // Keep for display purposes in sidebar
      });
    });

    // Add navigation components for CMS detail pages
    items.push(
      {
        component: CraftText, // Placeholder - will be replaced with actual CMS nav components
        name: "Previous/Next Navigation",
        description: "Navigate between CMS items",
      },
      {
        component: CraftButton, // Placeholder - will be replaced with actual CMS nav components  
        name: "Previous Button",
        description: "Navigate to previous CMS item",
      },
      {
        component: CraftButton, // Placeholder - will be replaced with actual CMS nav components
        name: "Next Button", 
        description: "Navigate to next CMS item",
      }
    );

    return items;
  },
});

// Helper function to create CMS field components dynamically
const createCMSFieldComponent = (field: any, collectionId?: string) => {
  // Create CMS field props
  const cmsProps = {
    cmsField: field.name,
    cmsFieldType: field.type,
    cmsFieldId: field.id,
    cmsCollectionId: collectionId,
    cmsFieldLabel: field.name.charAt(0).toUpperCase() + field.name.slice(1),
  };

  // Based on field type, return appropriate component with CMS props
  switch (field.type) {
    case 'plainText':
    case 'richText':
      return { component: CraftText, props: cmsProps };
    case 'formattedText':
      return { component: CraftFormattedText, props: cmsProps };
    case 'image':
      return { component: CraftImage, props: cmsProps };
    case 'number':
      return { component: CraftInput, props: cmsProps };
    case 'date':
      return { component: CraftInput, props: cmsProps };
    case 'boolean':
      return { component: CraftCheckbox, props: cmsProps };
    case 'select':
      return { component: CraftSelect, props: cmsProps };
    case 'multiSelect':
      return { component: CraftCheckboxGroup, props: cmsProps };
    case 'reference':
    case 'multiReference':
      return { component: CraftCard, props: cmsProps }; // Display referenced content in cards
    default:
      return { component: CraftText, props: cmsProps };
  }
};
