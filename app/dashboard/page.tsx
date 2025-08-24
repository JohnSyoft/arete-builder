"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, FolderOpen, Loader2, Edit } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { useModalStore } from "@/lib/store/modalStore"
import { useProjects, useCreateProject, useUpdateProject, useDeleteProject } from "@/hooks/useProjects"
import { type Project } from "@/lib/api/projects"
import { ProjectCard } from "@/components/projects/ProjectCard"

export default function DashboardPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const modalStore = useModalStore()
  const router = useRouter()

  // API hooks
  const { data: projectsResponse, isLoading, error } = useProjects()
  const createProjectMutation = useCreateProject()
  const updateProjectMutation = useUpdateProject()
  const deleteProjectMutation = useDeleteProject()
  
  const projects = projectsResponse?.data?.projects || []

  const handleCreateProject = async (data: {
    name: string;
    description?: string;
  }) => {
    try {
      await createProjectMutation.mutateAsync(data)
      modalStore.closeModal()
      // Note: No toast notification since sonner is not available
      console.log('Project created successfully')
    } catch (error) {
      console.error('Failed to create project:', error)
    }
  }

  const handleUpdateProject = async (data: {
    name: string;
    description?: string;
    status?: 'draft' | 'published' | 'archived';
    isPublic?: boolean;
  }) => {
    if (!selectedProject) return
    
    try {
      await updateProjectMutation.mutateAsync({
        id: selectedProject._id,
        projectData: {
          name: data.name,
          description: data.description,
          settings: {
            ...selectedProject.settings,
            isPublic: data.isPublic
          },
          deployment: {
            ...selectedProject.deployment,
            status: data.status || selectedProject.deployment.status
          }
        }
      })
      modalStore.closeModal()
      setSelectedProject(null)
      console.log('Project updated successfully')
    } catch (error) {
      console.error('Failed to update project:', error)
    }
  }

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProjectMutation.mutateAsync(id)
      console.log('Project deleted successfully')
    } catch (error) {
      console.error('Failed to delete project:', error)
    }
  }

  const openEditor = (projectId: string) => {
    router.push(`/editor/${projectId}/home`)
  }

  const openCreateDialog = () => {
    setSelectedProject(null)
    modalStore.openModal("createProject", {
      project: null,
      onSave: handleCreateProject,
      isLoading: createProjectMutation.isPending,
    })
  }

  const openEditDialog = (project: Project) => {
    setSelectedProject(project)
    modalStore.openModal("editProject", {
      project,
      onSave: handleUpdateProject,
      isLoading: updateProjectMutation.isPending,
    })
  }

  if (error) {
    return (
      <DashboardLayout activeTab="projects">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">Error loading projects</h3>
            <p className="text-muted-foreground">Please try refreshing the page</p>
          </div>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout activeTab="projects">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Projects</h1>
            <p className="text-lg text-muted-foreground">Build and manage your websites</p>
          </div>
          <Button
            className="font-medium px-6 h-11"
            onClick={openCreateDialog}
          >
            <Plus className="mr-2 h-5 w-5" />
            New Project
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Projects</p>
                  <p className="text-3xl font-bold text-foreground">{projects.length}</p>
                </div>
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                  <FolderOpen className="w-6 h-6 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Published Projects</p>
                  <p className="text-3xl font-bold text-foreground">
                    {projects.filter(p => p.deployment.status === 'published').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                  <Edit className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Views</p>
                  <p className="text-3xl font-bold text-foreground">
                    {projects.reduce((acc, p) => acc + p.stats.views, 0)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950 rounded-lg flex items-center justify-center">
                  <Edit className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">Your Projects</h2>
            {projects.length > 0 && (
              <p className="text-sm text-muted-foreground">
                {projects.length} project{projects.length !== 1 ? "s" : ""}
              </p>
            )}
          </div>

          {isLoading && (
            <div className="flex items-center justify-center h-32">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}

          {!isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  onOpenEditor={openEditor}
                  onEditProject={openEditDialog}
                  onDeleteProject={handleDeleteProject}
                  isDeleting={deleteProjectMutation.isPending}
                />
              ))}
            </div>
          )}
        </div>

        {/* Empty State */}
        {!isLoading && projects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FolderOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create your first website project to get started building amazing websites with our drag-and-drop editor.
            </p>
            <Button
              onClick={openCreateDialog}
              className="font-medium px-8 h-11"
              disabled={createProjectMutation.isPending}
            >
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Project
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
