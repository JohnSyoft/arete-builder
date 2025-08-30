import * as yup from "yup";

// Dynamic schema generator based on collection fields
export const createCollectionItemSchema = (fields: any[]) => {
  const schemaFields: Record<string, any> = {};

  fields.forEach((field) => {
    let fieldSchema: any;

    switch (field.type) {
      case "plainText":
      case "formattedText":
      case "link":
        fieldSchema = yup.string();
        if (field.maxLength) {
          fieldSchema = fieldSchema.max(field.maxLength, `${field.name} must be less than ${field.maxLength} characters`);
        }
        break;
      
      case "number":
        fieldSchema = yup.number().transform((value, originalValue) => {
          return originalValue === "" ? undefined : value;
        });
        break;
      
      case "email":
        fieldSchema = yup.string().email("Please enter a valid email address");
        break;
      
      case "url":
        fieldSchema = yup.string().url("Please enter a valid URL");
        break;
      
      case "date":
      case "datetime":
        fieldSchema = yup.string();
        break;
      
      case "boolean":
      case "toggle":
        fieldSchema = yup.boolean().default(false);
        break;
      
      case "color":
        fieldSchema = yup.string().matches(/^#[0-9A-F]{6}$/i, "Please enter a valid hex color");
        break;
      
      case "select":
      case "option":
        if (field.options && field.options.length > 0) {
          const validOptions = field.options.map((opt: any) => opt.value || opt);
          fieldSchema = yup.string().oneOf(validOptions, `Please select a valid ${field.name}`);
        } else {
          fieldSchema = yup.string();
        }
        break;
      
      case "multiSelect":
        fieldSchema = yup.array().of(yup.string());
        break;
      
      case "reference":
        fieldSchema = yup.string();
        break;
      
      case "multiReference":
        fieldSchema = yup.array().of(yup.string());
        break;
      
      case "image":
      case "video":
      case "file":
        fieldSchema = yup.mixed();
        break;
      
      case "gallery":
        fieldSchema = yup.array().of(yup.mixed());
        break;
      
      case "json":
        fieldSchema = yup.mixed();
        break;
      
      default:
        fieldSchema = yup.string();
    }

    // Apply required validation if needed
    if (field.required) {
      if (field.type === "boolean" || field.type === "toggle") {
        fieldSchema = fieldSchema.required(`${field.name} is required`);
      } else if (field.type === "multiReference" || field.type === "multiSelect" || field.type === "gallery") {
        fieldSchema = fieldSchema.min(1, `At least one ${field.name} is required`);
      } else {
        fieldSchema = fieldSchema.required(`${field.name} is required`);
      }
    } else {
      // Make optional fields nullable and set defaults
      if (field.type === "multiReference" || field.type === "multiSelect" || field.type === "gallery") {
        fieldSchema = fieldSchema.default([]);
      } else if (field.type === "boolean" || field.type === "toggle") {
        fieldSchema = fieldSchema.default(false);
      } else if (field.type === "number") {
        fieldSchema = fieldSchema.nullable().default(undefined);
      } else {
        fieldSchema = fieldSchema.default("");
      }
    }

    schemaFields[field.name] = fieldSchema;
  });

  // Add the base fields
  return yup.object({
    data: yup.object(schemaFields),
    status: yup.string().oneOf(["draft", "published", "archived"], "Invalid status").required("Status is required"),
    slug: yup.string()
      .required("Slug is required")
      .matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must contain only lowercase letters, numbers, and hyphens")
      .min(1, "Slug must be at least 1 character")
      .max(100, "Slug must be less than 100 characters"),
  });
};

export type CollectionItemFormData = {
  data: Record<string, any>;
  status: "draft" | "published" | "archived";
  slug: string;
};
