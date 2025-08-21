"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Plus, MoreHorizontal, Edit, Trash2, ExternalLink, FolderOpen } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { db, type Project } from "@/lib/db"
import { cn } from "@/lib/utils"

export default function DashboardPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [newProjectName, setNewProjectName] = useState("")
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setProjects(db.projects.getAll())
  }, [])

  const handleCreateProject = () => {
    if (newProjectName.trim()) {
      const newProject = db.projects.create({
        name: newProjectName.trim(),
        pages: [
          {
            id: Date.now().toString(),
            projectId: "", // Will be set after creation
            name: "Home",
            slug: "home",
            layout: null,
            isHomePage: true,
          },
        ],
        published: false,
      })

      // Update the page's projectId
      newProject.pages[0].projectId = newProject.id

      setProjects(db.projects.getAll())
      setNewProjectName("")
      setIsCreateDialogOpen(false)
    }
  }

  const handleDeleteProject = (id: string) => {
    db.projects.delete(id)
    setProjects(db.projects.getAll())
  }

  const openEditor = (projectId: string) => {
    router.push(`/editor/${projectId}/home`)
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
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button className="font-medium px-6 h-11">
                <Plus className="mr-2 h-5 w-5" />
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-card border-border">
              <DialogHeader>
                <DialogTitle className="text-foreground">Create New Project</DialogTitle>
                <DialogDescription className="text-muted-foreground">
                  Give your new website project a name to get started.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Project Name
                  </Label>
                  <Input
                    id="name"
                    value={newProjectName}
                    onChange={(e) => setNewProjectName(e.target.value)}
                    placeholder="My Awesome Website"
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateDialogOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateProject}>Create Project</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                  <p className="text-sm font-medium text-muted-foreground">Published</p>
                  <p className="text-3xl font-bold text-foreground">{projects.filter((p) => p.published).length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Pages</p>
                  <p className="text-3xl font-bold text-foreground">
                    {projects.reduce((acc, p) => acc + p.pages.length, 0)}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border hover:border-muted-foreground transition-all duration-200 group"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold text-foreground group-hover:text-foreground/80">
                      {project.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {project.pages.length} page{project.pages.length !== 1 ? "s" : ""}
                    </p>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground hover:bg-muted"
                      >
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border-border">
                      <DropdownMenuItem
                        onClick={() => openEditor(project.id)}
                        className="text-foreground hover:bg-muted"
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => window.open(`/site/${project.id}`, "_blank")}
                        className="text-foreground hover:bg-muted"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Preview
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDeleteProject(project.id)}
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div
                      className={cn("w-2 h-2 rounded-full", project.published ? "bg-green-500" : "bg-muted-foreground")}
                    />
                    <span className="text-sm text-muted-foreground">{project.published ? "Published" : "Draft"}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button onClick={() => openEditor(project.id)} className="flex-1 font-medium">
                      Open Editor
                    </Button>
                    <Button variant="outline" onClick={() => window.open(`/site/${project.id}`, "_blank")}>
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FolderOpen className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No projects yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Create your first website project to get started building amazing websites with our drag-and-drop editor.
            </p>
            <Button onClick={() => setIsCreateDialogOpen(true)} className="font-medium px-8 h-11">
              <Plus className="mr-2 h-5 w-5" />
              Create Your First Project
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
