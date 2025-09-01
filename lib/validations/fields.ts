import * as yup from "yup";

export const fieldSchema = yup.object({
  id: yup.string().required(),
  name: yup
    .string()
    .required("Field name is required")
    .min(2, "Field name must be at least 2 characters")
    .max(50, "Field name must be less than 50 characters"),
  type: yup
    .string()
    .required("Field type is required")
    .oneOf([
      "plainText",
      "formattedText", 
      "number",
      "date",
      "boolean",
      "email",
      "url",
      "image",
      "video",
      "file",
      "reference",
      "multiReference",
      "select",
      "multiSelect",
      "json",
      "gallery"
    ], "Invalid field type"),
  description: yup
    .string()
    .optional()
    .default("")
    .max(200, "Description must be less than 200 characters"),
  required: yup.boolean().optional().default(false),
  textArea: yup.boolean().optional().default(false),
  localization: yup.boolean().optional().default(false),
  placeholder: yup
    .string()
    .optional()
    .default("")
    .max(100, "Placeholder must be less than 100 characters"),
  maxLength: yup
    .string()
    .optional()
    .default("")
    .test("is-number", "Must be a valid number", (value) => {
      if (!value || value === "") return true;
      const num = parseInt(value);
      return !isNaN(num) && num > 0;
    }),
  defaultValue: yup
    .string()
    .optional()
    .default(""),
  referenceCollection: yup
    .string()
    .optional()
    .default("")
    .when("type", {
      is: (type: string) => type === "reference" || type === "multiReference",
      then: (schema) => schema.required("Reference collection is required for reference fields"),
      otherwise: (schema) => schema,
    }),
  options: yup
    .array()
    .of(yup.string())
    .optional()
    .default([])
    .when("type", {
      is: (type: string) => type === "select" || type === "multiSelect",
      then: (schema) => schema.min(1, "At least one option is required for select fields"),
      otherwise: (schema) => schema,
    }),
});

export interface FieldFormData {
  id: string;
  name: string;
  type: "plainText" | "formattedText" | "number" | "date" | "boolean" | "email" | "url" | "image" | "video" | "file" | "reference" | "multiReference" | "select" | "multiSelect" | "json" | "gallery";
  description: string;
  required: boolean;
  textArea: boolean;
  localization: boolean;
  placeholder: string;
  maxLength: string;
  defaultValue: string;
  referenceCollection: string;
  options: string[];
}
