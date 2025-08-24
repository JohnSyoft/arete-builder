"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import React, { useState, useEffect } from "react"
import { type Project } from "@/lib/api/projects"

export interface CreateEditProjectDialogProps {
  open: boolean;
  onClose: () => void;
  project?: Project | null;
  onSave: (data: {
    name: string;
    description?: string;
    status?: 'draft' | 'published' | 'archived';
    isPublic?: boolean;
  }) => void;
  isLoading?: boolean;
}

export function CreateEditProjectDialog({ 
  open, 
  onClose, 
  project, 
  onSave, 
  isLoading = false 
}: CreateEditProjectDialogProps) {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [status, setStatus] = useState<'draft' | 'published' | 'archived'>('draft')
  const [isPublic, setIsPublic] = useState(false)

  const isEditing = !!project

  useEffect(() => {
    if (project) {
      setName(project.name)
      setDescription(project.description || "")
      setStatus(project.deployment.status)
      setIsPublic(project.settings.isPublic || false)
    } else {
      setName("")
      setDescription("")
      setStatus('draft')
      setIsPublic(false)
    }
  }, [project, open])

  const handleSave = () => {
    if (name.trim()) {
      onSave({
        name: name.trim(),
        description: description.trim() || undefined,
        ...(isEditing && { status, isPublic })
      })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      handleSave()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md" onKeyDown={handleKeyDown}>
        <DialogHeader>
          <DialogTitle className="text-foreground">
            {isEditing ? 'Edit Project' : 'Create New Project'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {isEditing 
              ? 'Update your project details.' 
              : 'Give your new website project a name to get started.'
            }
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Project Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="My Awesome Website"
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-foreground">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description of your project..."
              className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
              rows={3}
            />
          </div>

          {isEditing && (
            <>
              <div className="space-y-2">
                <Label htmlFor="status" className="text-foreground">
                  Status
                </Label>
                <Select value={status} onValueChange={(value: 'draft' | 'published' | 'archived') => setStatus(value)}>
                  <SelectTrigger className="bg-background border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="isPublic" className="text-foreground">
                  Public Project
                </Label>
                <Switch
                  id="isPublic"
                  checked={isPublic}
                  onCheckedChange={setIsPublic}
                />
              </div>
            </>
          )}
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isLoading}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!name.trim() || isLoading}>
            {isLoading ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Project')}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
