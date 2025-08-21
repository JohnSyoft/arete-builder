"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { TemplatePreview } from "@/components/template-preview"
import { db, type Template } from "@/lib/db"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const router = useRouter()

  useEffect(() => {
    setTemplates(db.templates.getAll())
  }, [])

  const handleUseTemplate = (template: Template) => {
    // Create a new project from template
    const newProject = db.projects.create({
      name: `${template.name} Project`,
      pages: [
        {
          id: Date.now().toString(),
          projectId: "", // Will be set after creation
          name: "Home",
          slug: "home",
          layout: template.layout,
          isHomePage: true,
        },
      ],
    })

    // Update the page's projectId
    newProject.pages[0].projectId = newProject.id

    router.push(`/editor/${newProject.id}/home`)
  }

  const categories = [
    { key: "all", label: "All Templates", count: templates.length },
    { key: "landing", label: "Landing Pages", count: templates.filter((t) => t.category === "landing").length },
    { key: "blog", label: "Blog", count: templates.filter((t) => t.category === "blog").length },
    { key: "ecommerce", label: "E-commerce", count: templates.filter((t) => t.category === "ecommerce").length },
  ]

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredTemplates = templates.filter((t) => ["1", "4", "8"].includes(t.id))

  return (
    <DashboardLayout activeTab="templates">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">Templates</h1>
            <p className="text-lg text-muted-foreground">Professional templates to jumpstart your projects</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 w-80 bg-background border-border text-foreground placeholder:text-muted-foreground h-11"
              />
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div
              key={category.key}
              className={cn(
                "p-4 rounded-xl border transition-all cursor-pointer",
                selectedCategory === category.key
                  ? "bg-primary text-primary-foreground border-primary shadow-lg"
                  : "bg-card border-border hover:border-muted-foreground hover:bg-muted/50",
              )}
              onClick={() => setSelectedCategory(category.key)}
            >
              <div className="text-center">
                <div
                  className={cn(
                    "text-2xl font-bold mb-1",
                    selectedCategory === category.key ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {category.count}
                </div>
                <div
                  className={cn(
                    "text-sm font-medium",
                    selectedCategory === category.key ? "text-primary-foreground/80" : "text-muted-foreground",
                  )}
                >
                  {category.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Templates */}
        {searchTerm === "" && selectedCategory === "all" && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-semibold text-foreground">Featured Templates</h2>
              <Badge className="bg-muted text-muted-foreground border-border">Most Popular</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTemplates.map((template) => (
                <TemplatePreview key={template.id} template={template} onUseTemplate={handleUseTemplate} />
              ))}
            </div>
          </div>
        )}

        {/* All Templates */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">
              {selectedCategory === "all" ? "All Templates" : categories.find((c) => c.key === selectedCategory)?.label}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredTemplates.length} template{filteredTemplates.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTemplates.map((template) => (
              <TemplatePreview key={template.id} template={template} onUseTemplate={handleUseTemplate} />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredTemplates.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No templates found</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Try adjusting your search terms or browse different categories to find the perfect template.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-muted/50 via-muted to-muted/50 rounded-2xl p-8 border border-border">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Ready to build something amazing?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our collection of professionally designed templates and customize them to match your brand.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">{templates.length}+</div>
                <div className="text-muted-foreground">Professional Templates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">50K+</div>
                <div className="text-muted-foreground">Websites Created</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">4.9★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
