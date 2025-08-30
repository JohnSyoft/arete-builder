import * as yup from "yup";

export const collectionSchema = yup.object({
  name: yup
    .string()
    .required("Collection name is required")
    .min(2, "Collection name must be at least 2 characters")
    .max(50, "Collection name must be less than 50 characters"),
  description: yup
    .string()
    .optional()
    .default("")
    .max(200, "Description must be less than 200 characters"),
  slug: yup
    .string()
    .required("Slug is required")
    .matches(
      /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
      "Slug must contain only lowercase letters, numbers, and hyphens"
    )
    .min(2, "Slug must be at least 2 characters")
    .max(50, "Slug must be less than 50 characters"),
  singularName: yup
    .string()
    .required("Singular name is required")
    .min(2, "Singular name must be at least 2 characters")
    .max(30, "Singular name must be less than 30 characters"),
  pluralName: yup
    .string()
    .required("Plural name is required")
    .min(2, "Plural name must be at least 2 characters")
    .max(30, "Plural name must be less than 30 characters"),
  icon: yup
    .string()
    .required("Icon is required"),
  color: yup
    .string()
    .required("Color is required")
    .matches(/^#[0-9A-F]{6}$/i, "Color must be a valid hex color"),
});

export type CollectionFormData = yup.InferType<typeof collectionSchema>;
