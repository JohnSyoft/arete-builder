"use client"

import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation" // Currently unused
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Palette, CheckCircle } from "lucide-react"
import { DashboardLayout } from "@/components/dashboard-layout"
import { ThemePreview } from "@/components/theme-preview"
import { db, type Theme } from "@/lib/db"
import { cn } from "@/lib/utils"

interface ThemeCardProps {
  theme: Theme
  onApplyTheme: (theme: Theme) => void
  isSelected?: boolean
}

function ThemeCard({ theme, onApplyTheme, isSelected = false }: ThemeCardProps) {
  const getCategoryColor = (category: Theme["category"]) => {
    switch (category) {
      case "minimal":
        return "bg-gray-500/10 text-gray-400 border border-gray-500/20"
      case "modern":
        return "bg-blue-500/10 text-blue-400 border border-blue-500/20"
      case "creative":
        return "bg-orange-500/10 text-orange-400 border border-orange-500/20"
      case "professional":
        return "bg-slate-500/10 text-slate-400 border border-slate-500/20"
      case "eco-friendly":
        return "bg-green-500/10 text-green-400 border border-green-500/20"
      default:
        return "bg-muted text-muted-foreground border border-border"
    }
  }

  return (
    <Card className={cn(
      "group cursor-pointer transition-all duration-200 hover:shadow-md",
      isSelected && "ring-2 ring-primary"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{theme.name}</CardTitle>
            <Badge variant="outline" className={getCategoryColor(theme.category)}>
              {theme.category.charAt(0).toUpperCase() + theme.category.slice(1)}
            </Badge>
          </div>
          {isSelected && (
            <CheckCircle className="w-5 h-5 text-primary" />
          )}
        </div>
        <CardDescription className="text-sm">
          {theme.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Color Preview */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">Colors</p>
          <div className="flex space-x-2">
            <div 
              className="w-6 h-6 rounded-full border border-border"
              style={{ backgroundColor: theme.colors.primary }}
              title="Primary"
            />
            <div 
              className="w-6 h-6 rounded-full border border-border"
              style={{ backgroundColor: theme.colors.secondary }}
              title="Secondary"
            />
            <div 
              className="w-6 h-6 rounded-full border border-border"
              style={{ backgroundColor: theme.colors.accent }}
              title="Accent"
            />
            <div 
              className="w-6 h-6 rounded-full border border-border"
              style={{ backgroundColor: theme.colors.muted }}
              title="Muted"
            />
          </div>
        </div>

        {/* Typography Preview */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Typography</p>
          <p className="text-sm text-foreground" style={{ fontFamily: theme.typography.fontFamily }}>
            {theme.typography.fontFamily} • {theme.typography.headingWeight}
          </p>
        </div>

        {/* Style Features */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground">Features</p>
          <div className="flex flex-wrap gap-1">
            <Badge variant="secondary" className="text-xs">
              {theme.borderRadius}
            </Badge>
            {theme.shadows && (
              <Badge variant="secondary" className="text-xs">
                Shadows
              </Badge>
            )}
          </div>
        </div>

        <Button 
          onClick={() => onApplyTheme(theme)}
          className="w-full"
          variant={isSelected ? "secondary" : "default"}
        >
          {isSelected ? "Applied" : "Apply Theme"}
        </Button>
        
        <div className="flex justify-center">
          <ThemePreview theme={theme} />
        </div>
      </CardContent>
    </Card>
  )
}

export default function ThemesPage() {
  const [themes, setThemes] = useState<Theme[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentTheme, setCurrentTheme] = useState<string | null>(null)
  // const router = useRouter() // Currently unused

  useEffect(() => {
    setThemes(db.themes.getAll())
    // Load current theme from localStorage or set default
    const savedTheme = localStorage.getItem("arete-current-theme")
    setCurrentTheme(savedTheme || "modern")
  }, [])

  const handleApplyTheme = (theme: Theme) => {
    setCurrentTheme(theme.id)
    localStorage.setItem("arete-current-theme", theme.id)
    
    // Apply theme CSS variables to the document
    const root = document.documentElement
    root.style.setProperty("--color-primary", theme.colors.primary)
    root.style.setProperty("--color-secondary", theme.colors.secondary)
    root.style.setProperty("--color-accent", theme.colors.accent)
    root.style.setProperty("--color-background", theme.colors.background)
    root.style.setProperty("--color-foreground", theme.colors.foreground)
    root.style.setProperty("--color-muted", theme.colors.muted)

    console.log(`Applied theme: ${theme.name}`)
  }

  const categories = [
    { key: "all", label: "All Themes", count: themes.length },
    { key: "minimal", label: "Minimal", count: themes.filter((t) => t.category === "minimal").length },
    { key: "modern", label: "Modern", count: themes.filter((t) => t.category === "modern").length },
    { key: "creative", label: "Creative", count: themes.filter((t) => t.category === "creative").length },
    { key: "professional", label: "Professional", count: themes.filter((t) => t.category === "professional").length },
    { key: "eco-friendly", label: "Eco-Friendly", count: themes.filter((t) => t.category === "eco-friendly").length },
  ]

  const filteredThemes = themes.filter((theme) => {
    const matchesSearch =
      theme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      theme.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || theme.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const popularThemes = themes.filter((t) => ["modern", "minimal", "professional"].includes(t.id))

  return (
    <DashboardLayout activeTab="themes">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">Themes</h1>
            <p className="text-muted-foreground">
              Customize the look and feel of your website with beautiful themes
            </p>
          </div>
          
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              <Palette className="w-3 h-3 mr-1" />
              {themes.length} Themes Available
            </Badge>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-y-0 md:space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search themes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex space-x-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.key)}
                className="whitespace-nowrap"
              >
                {category.label}
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>

        {/* Popular Themes */}
        {searchTerm === "" && selectedCategory === "all" && (
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <h2 className="text-2xl font-semibold text-foreground">Popular Themes</h2>
              <Badge className="bg-muted text-muted-foreground border-border">Most Used</Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularThemes.map((theme) => (
                <ThemeCard 
                  key={theme.id} 
                  theme={theme} 
                  onApplyTheme={handleApplyTheme}
                  isSelected={currentTheme === theme.id}
                />
              ))}
            </div>
          </div>
        )}

        {/* All Themes */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-foreground">
              {selectedCategory === "all" ? "All Themes" : categories.find((c) => c.key === selectedCategory)?.label}
            </h2>
            <p className="text-sm text-muted-foreground">
              {filteredThemes.length} theme{filteredThemes.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredThemes.map((theme) => (
              <ThemeCard 
                key={theme.id} 
                theme={theme} 
                onApplyTheme={handleApplyTheme}
                isSelected={currentTheme === theme.id}
              />
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredThemes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Filter className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">No themes found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search criteria or browse all themes.
            </p>
            <Button onClick={() => { setSearchTerm(""); setSelectedCategory("all"); }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
