"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import React, { useEffect } from "react"
import { type Project } from "@/lib/api/projects"
import { useCreateProject, useUpdateProject } from "@/hooks/useProjects"

const projectSchema = yup.object({
  name: yup
    .string()
    .required("Project name is required")
    .min(2, "Project name must be at least 2 characters")
    .max(100, "Project name must be less than 100 characters")
    .trim(),
  description: yup
    .string()
    .max(500, "Description must be less than 500 characters")
    .optional()
    .default(""),
  status: yup
    .string()
    .oneOf(['draft', 'published', 'archived'])
    .optional()
    .default('draft'),
  isPublic: yup
    .boolean()
    .optional()
    .default(false),
})

type ProjectFormData = yup.InferType<typeof projectSchema>

export interface CreateEditProjectDialogProps {
  open: boolean;
  onClose: () => void;
  project?: Project | null;
  onSuccess?: () => void;
}

export function CreateEditProjectDialog({ 
  open, 
  onClose, 
  project,
  onSuccess
}: CreateEditProjectDialogProps) {
  const isEditing = !!project

  const createProjectMutation = useCreateProject()
  const updateProjectMutation = useUpdateProject()

  const form = useForm<ProjectFormData>({
    resolver: yupResolver(projectSchema),
    defaultValues: {
      name: "",
      description: "",
      status: 'draft',
      isPublic: false,
    },
  })

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = form

  const isLoading = createProjectMutation.isPending || updateProjectMutation.isPending

  useEffect(() => {
    if (open) {
      if (project) {
        reset({
          name: project.name || "",
          description: project.description || "",
          status: project.deployment?.status || 'draft',
          isPublic: project.settings?.isPublic || false,
        })
      } else {
        reset({
          name: "",
          description: "",
          status: 'draft',
          isPublic: false,
        })
      }
    }
  }, [project, open, reset])

  const onSubmit = async (data: ProjectFormData) => {
    try {
      if (isEditing && project) {
        await updateProjectMutation.mutateAsync({
          id: project._id,
          projectData: {
            name: data.name.trim(),
            description: data.description?.trim() || undefined,
            settings: {
              ...project.settings,
              isPublic: data.isPublic
            },
            deployment: {
              ...project.deployment,
              status: data.status || project.deployment.status
            }
          }
        })
        console.log('Project updated successfully')
      } else {
        await createProjectMutation.mutateAsync({
          name: data.name.trim(),
          description: data.description?.trim() || undefined,
        })
        console.log('Project created successfully')
      }
      
      onClose()
      if (onSuccess) {
        onSuccess()
      }
    } catch (error) {
      console.error(`Failed to ${isEditing ? 'update' : 'create'} project:`, error)
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-card border-border max-w-md">
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
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-foreground">
              Project Name
            </Label>
            <Input
              id="name"
              placeholder="My Awesome Website"
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
            <Label htmlFor="description" className="text-foreground">
              Description (Optional)
            </Label>
            <Textarea
              id="description"
              placeholder="Brief description of your project..."
              className="bg-background border-border text-foreground placeholder:text-muted-foreground resize-none"
              rows={3}
              {...register("description")}
              aria-invalid={errors.description ? "true" : "false"}
            />
            {errors.description && (
              <p className="text-sm text-destructive">{errors.description.message}</p>
            )}
          </div>

          {isEditing && (
            <>
              <div className="space-y-2">
                <Label htmlFor="status" className="text-foreground">
                  Status
                </Label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger className="bg-background border-border">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="published">Published</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.status && (
                  <p className="text-sm text-destructive">{errors.status.message}</p>
                )}
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="isPublic" className="text-foreground">
                  Public Project
                </Label>
                <Controller
                  name="isPublic"
                  control={control}
                  render={({ field }) => (
                    <Switch
                      id="isPublic"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
              </div>
            </>
          )}
          
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoading || isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={!isValid || isLoading || isSubmitting}>
              {isLoading || isSubmitting ? 'Saving...' : (isEditing ? 'Save Changes' : 'Create Project')}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
