"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Plus, Home, FileText } from "@/components/icons"
import { db, type Project } from "@/lib/db"

interface PageManagerProps {
  project: Project
  currentPageId: string
  onPageChange: (pageSlug: string) => void
}

export function PageManager({ project, currentPageId, onPageChange }: PageManagerProps) {
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const [newPageName, setNewPageName] = useState("")

  const handleCreatePage = () => {
    if (newPageName.trim()) {
      const slug = newPageName
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")

      const newPage = db.pages.create({
        projectId: project.id,
        name: newPageName.trim(),
        slug,
        layout: null,
        isHomePage: false,
      })

      setNewPageName("")
      setIsCreateDialogOpen(false)
      onPageChange(newPage.slug)
    }
  }

  const handleDeletePage = (pageId: string) => {
    const page = project.pages.find((p) => p.id === pageId)
    if (page && !page.isHomePage && project.pages.length > 1) {
      // Delete page logic would go here
      // For now, we'll just show an alert
      alert("Page deletion not implemented in this demo")
    }
  }

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center space-x-4">
          <h3 className="font-medium text-gray-900">Pages</h3>
          <div className="flex items-center space-x-2">
            {project.pages.map((page) => (
              <Button
                key={page.id}
                variant={page.id === currentPageId ? "default" : "ghost"}
                size="sm"
                onClick={() => onPageChange(page.slug)}
                className="flex items-center space-x-2"
              >
                {page.isHomePage ? <Home className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                <span>{page.name}</span>
                {page.isHomePage && (
                  <Badge variant="secondary" className="text-xs">
                    Home
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </div>

        <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-1" />
              Add Page
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Page</DialogTitle>
              <DialogDescription>Add a new page to your website project.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="pageName" className="text-sm font-medium">
                  Page Name
                </label>
                <Input
                  id="pageName"
                  value={newPageName}
                  onChange={(e) => setNewPageName(e.target.value)}
                  placeholder="About Us"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleCreatePage}>Create Page</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
