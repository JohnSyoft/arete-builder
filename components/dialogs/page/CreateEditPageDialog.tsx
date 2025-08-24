"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useCreatePage, useUpdatePage } from "@/hooks/usePages"
import { type Page } from "@/lib/api/pages"
import React from "react"

export interface CreateEditPageDialogProps {
  open: boolean
  onClose: () => void
  page?: Page | null
  projectId: string
  pages?: Page[]
  onSave: (page: Page) => void
  isLoading?: boolean
}

export function CreateEditPageDialog({
  open,
  onClose,
  page,
  projectId,
  pages = [],
  onSave,
  isLoading = false,
}: CreateEditPageDialogProps) {
  const [name, setName] = useState("")
  const [slug, setSlug] = useState("")
  const [isHomePage, setIsHomePage] = useState(false)

  const createPageMutation = useCreatePage()
  const updatePageMutation = useUpdatePage()

  const isEditing = !!page
  const isMutationLoading = createPageMutation.isPending || updatePageMutation.isPending

  // Reset form when dialog opens/closes or page changes
  useEffect(() => {
    if (open) {
      if (isEditing && page) {
        setName(page.name || "")
        setSlug(page.slug || "")
        setIsHomePage(page.isHomePage || false)
      } else {
        setName("")
        setSlug("")
        setIsHomePage(false)
      }
    }
  }, [open, isEditing, page])

  // Auto-generate slug from name (only for new pages)
  const handleNameChange = (newName: string) => {
    setName(newName)
    
    if (!isEditing) {
      const autoSlug = newName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
      setSlug(autoSlug)
    }
  }

  const handleSlugChange = (newSlug: string) => {
    const cleanSlug = newSlug
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "")
    setSlug(cleanSlug)
  }

  const validateForm = () => {
    if (!name.trim()) return false
    if (!slug.trim()) return false
    if (slug.length < 2) return false
    
    // Check for duplicate slugs (excluding current page when editing)
    const existingPage = pages.find(p => 
      p.slug === slug && 
      (!isEditing || p._id !== page?._id)
    )
    if (existingPage) return false
    
    return true
  }

  const handleSave = async () => {
    if (!validateForm()) return

    try {
      if (isEditing && page) {
        const updatedPage = await updatePageMutation.mutateAsync({
          id: page._id,
          pageData: {
            name: name.trim(),
            slug: slug.trim(),
            isHomePage,
          },
        })
        onSave(updatedPage.data.page)
      } else {
        const newPage = await createPageMutation.mutateAsync({
          project: projectId,
          name: name.trim(),
          slug: slug.trim(),
          isHomePage,
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSave()
    }
  }

  const isFormValid = validateForm()
  const isDuplicateSlug = pages.some(p => 
    p.slug === slug && 
    (!isEditing || p._id !== page?._id)
  )

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md" onKeyDown={handleKeyDown}>
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
        
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Page Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="About Us"
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            {!name.trim() && name.length > 0 && (
              <p className="text-sm text-destructive">Page name is required</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="slug" className="text-foreground">
              Page Slug
            </Label>
            <Input
              id="slug"
              value={slug}
              onChange={(e) => handleSlugChange(e.target.value)}
              placeholder="about-us"
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            <p className="text-xs text-muted-foreground">
              Used in the URL: /site/project/{slug || "page-slug"}
            </p>
            {!slug.trim() && slug.length > 0 && (
              <p className="text-sm text-destructive">Page slug is required</p>
            )}
            {slug.length > 0 && slug.length < 2 && (
              <p className="text-sm text-destructive">Slug must be at least 2 characters</p>
            )}
            {isDuplicateSlug && (
              <p className="text-sm text-destructive">A page with this slug already exists</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="isHomePage" className="text-foreground">
              Set as Home Page
            </Label>
            <Switch
              id="isHomePage"
              checked={isHomePage}
              onCheckedChange={setIsHomePage}
            />
          </div>
          {isHomePage && (
            <p className="text-xs text-amber-600">
              This will replace the current home page if one exists.
            </p>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isMutationLoading}>
            Cancel
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={!isFormValid || isMutationLoading}
          >
            {isMutationLoading ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Page')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
