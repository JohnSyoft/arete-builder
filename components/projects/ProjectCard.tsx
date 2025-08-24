"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreHorizontal, Edit, Trash2, ExternalLink } from "lucide-react"
import { type Project } from "@/lib/api/projects"

interface ProjectCardProps {
  project: Project;
  onOpenEditor: (projectId: string) => void;
  onEditProject: (project: Project) => void;
  onDeleteProject: (projectId: string) => void;
  isDeleting?: boolean;
}

export function ProjectCard({ 
  project, 
  onOpenEditor, 
  onEditProject, 
  onDeleteProject, 
  isDeleting = false 
}: ProjectCardProps) {
  return (
    <Card className="bg-card border-border hover:border-muted-foreground transition-all duration-200 group">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <div className="space-y-1">
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/80">
            {project.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            {project.collaborators.length} collaborator{project.collaborators.length !== 1 ? "s" : ""}
          </p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted"
              disabled={isDeleting}
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card border-border">
            <DropdownMenuItem
              onClick={() => onOpenEditor(project._id)}
              className="text-foreground hover:bg-muted"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onEditProject(project)}
              className="text-foreground hover:bg-muted"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit Details
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => window.open(`/site/${project._id}`, "_blank")}
              className="text-foreground hover:bg-muted"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Preview
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDeleteProject(project._id)}
              className="text-destructive hover:bg-destructive/10"
              disabled={isDeleting}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status indicator */}
        <div className="flex items-center justify-between">
          <span className={`px-2 py-1 rounded text-xs font-medium ${
            project.deployment.status === 'published' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
              : project.deployment.status === 'archived'
              ? 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
          }`}>
            {project.deployment.status.charAt(0).toUpperCase() + project.deployment.status.slice(1)}
          </span>
          {project.settings.isPublic && (
            <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              Public
            </span>
          )}
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => onOpenEditor(project._id)} 
            className="flex-1 font-medium"
            disabled={isDeleting}
          >
            Open Editor
          </Button>
          <Button 
            variant="outline" 
            onClick={() => window.open(`/site/${project._id}`, "_blank")}
            disabled={isDeleting}
          >
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
