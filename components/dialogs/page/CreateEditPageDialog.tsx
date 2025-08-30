"use client"

import { useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useCreatePage, useUpdatePage } from "@/hooks/usePages"
import { type Page } from "@/lib/api/pages"
import React from "react"

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
    .matches(/^[a-z0-9-]+$/, "Slug can only contain lowercase letters, numbers, and hyphens")
    .trim(),
  isHomePage: yup
    .boolean()
    .default(false),
})

type PageFormData = yup.InferType<typeof pageSchema>

export interface CreateEditPageDialogProps {
  isOpen: boolean
  onClose: () => void
  page?: Page | null
  projectId: string
  pages?: Page[]
  onSave: (page: Page) => void
  isLoading?: boolean
}

export function CreateEditPageDialog({
  isOpen,
  onClose,
  page,
  projectId,
  pages = [],
  onSave,
  isLoading = false,
}: CreateEditPageDialogProps) {
  const createPageMutation = useCreatePage()
  const updatePageMutation = useUpdatePage()

  const isEditing = !!page
  const isMutationLoading = createPageMutation.isPending || updatePageMutation.isPending

  const form = useForm<PageFormData>({
    resolver: yupResolver(pageSchema),
    defaultValues: {
      name: "",
      slug: "",
      isHomePage: false,
    },
  })

  const {
    register,
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isValid, isSubmitting },
  } = form
  const watchedName = watch("name")
  const watchedSlug = watch("slug")
  const watchedIsHomePage = watch("isHomePage")

  // Custom validation for duplicate slugs
  const isDuplicateSlug = pages.some(p => 
    p.slug === watchedSlug && 
    (!isEditing || p._id !== page?._id)
  )

  // Reset form when dialog opens/closes or page changes
  useEffect(() => {
    if (isOpen) {
      if (isEditing && page) {
        reset({
          name: page.name || "",
          slug: page.slug || "",
          isHomePage: page.isHomePage || false,
        })
      } else {
        reset({
          name: "",
          slug: "",
          isHomePage: false,
        })
      }
    }
  }, [isOpen, isEditing, page, reset])

  // Auto-generate slug from name (only for new pages)
  useEffect(() => {
    if (!isEditing && watchedName) {
      const autoSlug = watchedName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
      setValue("slug", autoSlug)
    }
  }, [watchedName, isEditing, setValue])

  const onSubmit = async (data: PageFormData) => {
    if (isDuplicateSlug) return

    try {
      if (isEditing && page) {
        const updatedPage = await updatePageMutation.mutateAsync({
          id: page._id,
          pageData: {
            name: data.name.trim(),
            slug: data.slug.trim(),
            isHomePage: data.isHomePage,
          },
        })
        onSave(updatedPage.data.page)
      } else {
        const newPage = await createPageMutation.mutateAsync({
          project: projectId,
          name: data.name.trim(),
          slug: data.slug.trim(),
          isHomePage: data.isHomePage,
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
        })
        onSave(newPage.data.page)
      }
      onClose()
    } catch (error) {
      console.error(`Error ${isEditing ? "updating" : "creating"} page:`, error)
    }
  }

  const isFormValid = isValid && !isDuplicateSlug

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {isEditing ? 'Edit Page' : 'Create New Page'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isEditing 
              ? 'Update your page details.' 
              : 'Create a new page for your project.'
            }
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

          <div className="space-y-2">
            <Label htmlFor="slug" className="text-foreground">
              Page Slug
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
                  onChange={(e) => {
                    const cleanSlug = e.target.value
                      .toLowerCase()
                      .replace(/[^a-z0-9-]/g, "")
                      .replace(/-+/g, "-")
                      .replace(/^-|-$/g, "")
                    field.onChange(cleanSlug)
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
              <p className="text-sm text-destructive">A page with this slug already exists</p>
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
            <Button type="button" variant="outline" onClick={onClose} disabled={isMutationLoading || isSubmitting}>
              Cancel
            </Button>
            <Button 
              type="submit"
              disabled={!isFormValid || isMutationLoading || isSubmitting}
            >
              {isMutationLoading || isSubmitting ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Page')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
