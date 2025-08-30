import {
    Type,
    Image,
    Calendar,
    Hash,
    ToggleLeft,
    FileText,
    Palette,
    File,
    ExternalLink,
    List,
    Database,
} from "lucide-react";

export const fieldTypes = [
  {
    value: "plainText",
    label: "Plain Text",
    icon: Type,
    description: "Simple text input",
  },
  {
    value: "formattedText",
    label: "Formatted Text",
    icon: FileText,
    description: "HTML editor with formatting",
  },
  {
    value: "date",
    label: "Date",
    icon: Calendar,
    description: "Date picker",
  },
  {
    value: "datetime",
    label: "Date & Time",
    icon: Calendar,
    description: "Date and time picker",
  },
  {
    value: "link",
    label: "URL",
    icon: ExternalLink,
    description: "Link or URL input",
  },
  {
    value: "image",
    label: "Image",
    icon: Image,
    description: "Single image upload",
  },
  {
    value: "gallery",
    label: "Image Gallery",
    icon: Image,
    description: "Multiple image uploads",
  },
  {
    value: "color",
    label: "Color",
    icon: Palette,
    description: "Color picker",
  },
  {
    value: "toggle",
    label: "Toggle",
    icon: ToggleLeft,
    description: "True/false switch",
  },
  {
    value: "number",
    label: "Number",
    icon: Hash,
    description: "Numeric input",
  },
  {
    value: "option",
    label: "Select Option",
    icon: List,
    description: "Dropdown selection",
  },
  {
    value: "file",
    label: "File",
    icon: File,
    description: "File upload",
  },
  {
    value: "reference",
    label: "Reference",
    icon: Database,
    description: "Link to another collection item",
  },
  {
    value: "multiReference",
    label: "Multi Reference",
    icon: Database,
    description: "Link to multiple collection items",
  },
] as const;

export type FieldType = typeof fieldTypes[number];
