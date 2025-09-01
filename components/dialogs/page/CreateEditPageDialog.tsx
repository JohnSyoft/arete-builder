"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { useCreatePage, useUpdatePage } from "@/hooks/usePages";
import { useCollections } from "@/hooks/useCollections";
import { type Page } from "@/lib/api/pages";

const pageSchema = yup.object({
  name: yup
    .string()
    .required("Page name is required")
    .min(1, "Page name is required")
    .max(100, "Page name must be less than 100 characters")
    .trim(),
  slug: yup
    .string()
    .required("Page slug is required")
    .min(2, "Slug must be at least 2 characters")
    .max(50, "Slug must be less than 50 characters")
    .matches(
      /^[a-z0-9-]+$/,
      "Slug can only contain lowercase letters, numbers, and hyphens"
    )
    .trim(),
  isHomePage: yup.boolean().default(false),
  collectionId: yup.string().nullable().optional(),
});

interface PageFormData {
  name: string;
  slug: string;
  isHomePage: boolean;
  collectionId?: string;
}

export interface CreateEditPageDialogProps {
  isOpen: boolean;
  onClose: () => void;
  page?: Page | null;
  projectId: string;
  pages?: Page[];
  onSave: (page: Page) => void;
  isLoading?: boolean;
  pageType?: "normal" | "cms" | "404";
  cmsPageType?: "index" | "detail";
  collectionId?: string;
  collectionName?: string;
}

export function CreateEditPageDialog({
  isOpen,
  onClose,
  page,
  projectId,
  pages = [],
  onSave,
  isLoading = false,
  pageType = "normal",
  cmsPageType,
  collectionId,
  collectionName,
}: CreateEditPageDialogProps) {
  const createPageMutation = useCreatePage();
  const updatePageMutation = useUpdatePage();
  const { data: collectionsResponse } = useCollections(projectId);
  const [selectedCollectionId, setSelectedCollectionId] = useState<string>(
    collectionId || ""
  );
  const [selectedPageType, setSelectedPageType] = useState<"index" | "detail">(
    "index"
  );

  const collections = collectionsResponse?.collections || [];
  const isCMSPage = pageType === "cms";
  const isEditing = !!page;
  const isMutationLoading =
    createPageMutation.isPending || updatePageMutation.isPending;

  const form = useForm({
    defaultValues: {
      name: "",
      slug: "",
      isHomePage: false,
      collectionId: "",
    },
  });

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = form;
  const watchedName = watch("name");
  const watchedSlug = watch("slug");
  const watchedIsHomePage = watch("isHomePage");

  // Custom validation for duplicate slugs
  const isDuplicateSlug = pages.some(
    (p) => p.slug === watchedSlug && (!isEditing || p._id !== page?._id)
  );

  // Reset form when dialog opens/closes or page changes
  useEffect(() => {
    if (isOpen) {
      if (isEditing && page) {
        reset({
          name: page.name || "",
          slug: page.slug || "",
          isHomePage: page.isHomePage || false,
          collectionId: (page as any).collectionId || "",
        });
      } else {
        reset({
          name: "",
          slug: "",
          isHomePage: false,
          collectionId: "",
        });
      }
    }
  }, [isOpen, isEditing, page, reset]);

  // Auto-generate slug from name (only for new pages)
  useEffect(() => {
    if (!isEditing && watchedName && !isCMSPage) {
      const autoSlug = watchedName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "");
      setValue("slug", autoSlug);
    }
  }, [watchedName, isEditing, setValue, isCMSPage]);

  // Auto-generate slug for CMS pages based on collection and page type
  useEffect(() => {
    if (!isEditing && isCMSPage && selectedCollectionId && selectedPageType) {
      const selectedCollection = collections.find(
        (c) => c._id === selectedCollectionId
      );
      if (selectedCollection) {
        const collectionSlug =
          selectedCollection.slug ||
          selectedCollection.name.toLowerCase().replace(/\s+/g, "-");
        const pageSlug =
          selectedPageType === "index"
            ? collectionSlug
            : `${collectionSlug}-detail`;
        setValue("slug", pageSlug);
        setValue(
          "name",
          selectedPageType === "index"
            ? selectedCollection.name
            : `${selectedCollection.name} Detail`
        );
      }
    }
  }, [
    selectedCollectionId,
    selectedPageType,
    isEditing,
    isCMSPage,
    collections,
    setValue,
  ]);

  // Set initial values for CMS pages when collection is pre-selected
  useEffect(() => {
    if (!isEditing && isCMSPage && collectionId && collectionName && isOpen) {
      setValue("collectionId", collectionId);
      setSelectedCollectionId(collectionId);
      // Auto-generate name and slug based on page type
      const collectionSlug = collectionName.toLowerCase().replace(/\s+/g, "-");
      setValue(
        "name",
        selectedPageType === "index"
          ? collectionName
          : `${collectionName} Detail`
      );
      setValue(
        "slug",
        selectedPageType === "index"
          ? collectionSlug
          : `${collectionSlug}-detail`
      );
    }
  }, [
    isOpen,
    isCMSPage,
    collectionId,
    collectionName,
    isEditing,
    setValue,
    selectedPageType,
  ]);

  const onSubmit = async (data: any) => {
    if (isDuplicateSlug) return;

    // Custom validation for CMS pages
    if (isCMSPage && (!selectedCollectionId || !selectedPageType)) {
      alert("Please select a page type for the CMS page");
      return;
    }

    try {
      if (isEditing && page) {
        const updatedPage = await updatePageMutation.mutateAsync({
          id: page._id,
          pageData: {
            name: data.name.trim(),
            slug: data.slug.trim(),
            isHomePage: data.isHomePage,
            ...(isCMSPage && { collectionId: data.collectionId }),
          },
        });
        onSave(updatedPage.data.page);
      } else {
        const newPage = await createPageMutation.mutateAsync({
          project: projectId,
          name: data.name.trim(),
          slug: data.slug.trim(),
          isHomePage: data.isHomePage,
          ...(isCMSPage && {
            collectionId: selectedCollectionId,
            pageType: "cms",
            cmsPageType: selectedPageType,
          }),
          layout: JSON.stringify({
            ROOT: {
              type: { resolvedName: "Container" },
              isCanvas: true,
              props: {},
              displayName: "Container",
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
            },
          }),
        });
        onSave(newPage.data.page);
      }
      onClose();
    } catch (error) {
      console.error(
        `Error ${isEditing ? "updating" : "creating"} page:`,
        error
      );
    }
  };

  const isFormValid =
    isValid &&
    !isDuplicateSlug &&
    (!isCMSPage || (selectedCollectionId && selectedPageType));

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {isEditing
              ? "Edit Page"
              : isCMSPage
              ? `Create CMS Page - ${collectionName || "Collection"}`
              : pageType === "404"
              ? "Create 404 Page"
              : "Create New Page"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isEditing
              ? "Update your page details."
              : isCMSPage
              ? `Create a page connected to the ${
                  collectionName || "selected"
                } collection.`
              : pageType === "404"
              ? "Create a custom 404 error page."
              : "Create a new page for your project."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Page Name
            </Label>
            <Input
              id="name"
              placeholder="About Us"
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              autoFocus
              {...register("name")}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          {/* Page Type Selection for CMS Pages */}
          {isCMSPage && (
            <div className="space-y-2">
              <Label htmlFor="pageType" className="text-foreground">
                Page Type <span className="text-red-500">*</span>
              </Label>
              <Select
                value={selectedPageType}
                onValueChange={(value: "index" | "detail") => {
                  setSelectedPageType(value);
                  // Update name and slug when page type changes
                  if (collectionName) {
                    const collectionSlug = collectionName
                      .toLowerCase()
                      .replace(/\s+/g, "-");
                    setValue(
                      "name",
                      value === "index"
                        ? collectionName
                        : `${collectionName} Detail`
                    );
                    setValue(
                      "slug",
                      value === "index"
                        ? collectionSlug
                        : `${collectionSlug}-detail`
                    );
                  }
                }}
              >
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Select page type..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="index">
                    <div className="flex flex-col">
                      <span>Index Page</span>
                      <span className="text-xs text-muted-foreground">
                        Lists all items from the collection
                      </span>
                    </div>
                  </SelectItem>
                  <SelectItem value="detail">
                    <div className="flex flex-col">
                      <span>Detail Page</span>
                      <span className="text-xs text-muted-foreground">
                        Shows individual item details
                      </span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Collection: {collectionName}
              </p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="slug" className="text-foreground">
              Page Slug{" "}
              {isCMSPage && (
                <span className="text-xs text-muted-foreground">
                  (auto-generated)
                </span>
              )}
            </Label>
            <Controller
              name="slug"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  id="slug"
                  placeholder="about-us"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  readOnly={isCMSPage}
                  onChange={(e) => {
                    if (!isCMSPage) {
                      const cleanSlug = e.target.value
                        .toLowerCase()
                        .replace(/[^a-z0-9-]/g, "")
                        .replace(/-+/g, "-")
                        .replace(/^-|-$/g, "");
                      field.onChange(cleanSlug);
                    }
                  }}
                />
              )}
            />
            <p className="text-xs text-muted-foreground">
              Used in the URL: /site/project/{watchedSlug || "page-slug"}
            </p>
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug.message}</p>
            )}
            {isDuplicateSlug && (
              <p className="text-sm text-destructive">
                A page with this slug already exists
              </p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="isHomePage" className="text-foreground">
              Set as Home Page
            </Label>
            <Controller
              name="isHomePage"
              control={control}
              render={({ field }) => (
                <Switch
                  id="isHomePage"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              )}
            />
          </div>
          {watchedIsHomePage && (
            <p className="text-xs text-amber-600">
              This will replace the current home page if one exists.
            </p>
          )}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isMutationLoading || isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={!isFormValid || isMutationLoading || isSubmitting}
            >
              {isMutationLoading || isSubmitting
                ? "Saving..."
                : isEditing
                ? "Save Changes"
                : "Create Page"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
