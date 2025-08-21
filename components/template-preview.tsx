"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye, Zap } from "@/components/icons"
import type { Template } from "@/lib/db"

interface TemplatePreviewProps {
  template: Template
  onUseTemplate: (template: Template) => void
}

export function TemplatePreview({ template, onUseTemplate }: TemplatePreviewProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const getCategoryColor = (category: Template["category"]) => {
    switch (category) {
      case "landing":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20"
      case "blog":
        return "bg-green-500/10 text-green-400 border border-green-500/20 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20"
      case "ecommerce":
        return "bg-purple-500/10 text-purple-400 border border-purple-500/20 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20"
      default:
        return "bg-muted text-muted-foreground border border-border"
    }
  }

  const getCategoryIcon = (category: Template["category"]) => {
    switch (category) {
      case "landing":
        return "🚀"
      case "blog":
        return "📝"
      case "ecommerce":
        return "🛒"
      default:
        return "🌐"
    }
  }

  return (
    <>
      <Card className="group hover:shadow-xl hover:shadow-black/20 transition-all duration-300 overflow-hidden bg-card border border-border hover:border-muted-foreground backdrop-blur-sm">
        <CardContent className="p-0">
          <div className="relative">
            <div className="aspect-video bg-muted overflow-hidden">
              <img
                src={template.thumbnail || "/placeholder.svg?height=200&width=300&query=template preview"}
                alt={template.name}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            <div className="absolute top-4 left-4">
              <Badge className={getCategoryColor(template.category)}>
                <span className="mr-1">{getCategoryIcon(template.category)}</span>
                {template.category}
              </Badge>
            </div>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button
                size="sm"
                variant="secondary"
                className="bg-background/90 hover:bg-muted text-foreground border border-border hover:border-muted-foreground backdrop-blur-sm"
                onClick={() => setIsPreviewOpen(true)}
              >
                <Eye className="w-4 h-4 mr-1" />
                Preview
              </Button>
            </div>

            <div className="absolute bottom-4 right-4">
              <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-md border border-border">
                <span className="text-yellow-400 text-sm">⭐</span>
                <span className="text-sm font-medium text-foreground">4.8</span>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground group-hover:text-muted-foreground transition-colors mb-2">
                {template.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2">{template.description}</p>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4" />
                <span>Quick Setup</span>
              </div>
              <Button
                onClick={() => onUseTemplate(template)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6"
              >
                Use Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-hidden bg-background border border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-foreground">
              <span>{template.name}</span>
              <Badge className={getCategoryColor(template.category)}>
                <span className="mr-1">{getCategoryIcon(template.category)}</span>
                {template.category}
              </Badge>
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <div className="aspect-video bg-muted rounded-lg overflow-hidden border border-border">
              <img
                src={template.thumbnail || "/placeholder.svg?height=400&width=600&query=template preview"}
                alt={`${template.name} preview`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-muted-foreground mb-2">{template.description}</p>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>✓ Mobile Responsive</span>
                  <span>✓ SEO Optimized</span>
                  <span>✓ Fast Loading</span>
                </div>
              </div>
              <Button
                onClick={() => onUseTemplate(template)}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                Use This Template
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
