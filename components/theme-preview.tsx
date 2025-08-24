"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Eye } from "lucide-react"
import type { Theme } from "@/lib/db"

interface ThemePreviewProps {
  theme: Theme
}

export function ThemePreview({ theme }: ThemePreviewProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsPreviewOpen(true)}
        className="gap-2"
      >
        <Eye className="w-4 h-4" />
        Preview
      </Button>

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Theme Preview: {theme.name}</DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Theme preview with custom styles */}
            <div 
              className="border rounded-lg p-6 space-y-6"
              style={{
                backgroundColor: theme.colors.background,
                color: theme.colors.foreground,
                fontFamily: theme.typography.fontFamily,
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b"
                style={{ borderColor: theme.colors.muted }}>
                <h2 
                  className={`text-2xl ${theme.typography.headingWeight}`}
                  style={{ color: theme.colors.foreground }}
                >
                  Sample Website
                </h2>
                <div className="flex space-x-2">
                  <button
                    className={`px-4 py-2 text-sm ${theme.borderRadius} ${theme.typography.bodyWeight}`}
                    style={{
                      backgroundColor: theme.colors.primary,
                      color: theme.colors.background,
                      boxShadow: theme.shadows ? "0 2px 4px rgba(0,0,0,0.1)" : "none",
                    }}
                  >
                    Primary Button
                  </button>
                  <button
                    className={`px-4 py-2 text-sm border ${theme.borderRadius} ${theme.typography.bodyWeight}`}
                    style={{
                      backgroundColor: theme.colors.background,
                      color: theme.colors.foreground,
                      borderColor: theme.colors.secondary,
                    }}
                  >
                    Secondary
                  </button>
                </div>
              </div>

              {/* Hero Section */}
              <div className="text-center space-y-4" style={{ padding: theme.spacing.sectionPadding }}>
                <h1 
                  className={`text-4xl ${theme.typography.headingWeight}`}
                  style={{ color: theme.colors.foreground }}
                >
                  Welcome to Our Platform
                </h1>
                <p 
                  className={`text-lg ${theme.typography.bodyWeight}`}
                  style={{ color: theme.colors.secondary }}
                >
                  Experience the power of beautiful design with our customizable themes
                </p>
                <button
                  className={`px-6 py-3 text-lg ${theme.borderRadius} ${theme.typography.headingWeight}`}
                  style={{
                    backgroundColor: theme.colors.accent,
                    color: theme.colors.background,
                    boxShadow: theme.shadows ? "0 4px 6px rgba(0,0,0,0.1)" : "none",
                  }}
                >
                  Get Started
                </button>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`p-6 ${theme.borderRadius}`}
                    style={{
                      backgroundColor: theme.colors.muted,
                      boxShadow: theme.shadows ? "0 2px 4px rgba(0,0,0,0.05)" : "none",
                    }}
                  >
                    <div
                      className={`w-12 h-12 ${theme.borderRadius} mb-4 flex items-center justify-center`}
                      style={{ backgroundColor: theme.colors.accent }}
                    >
                      <span style={{ color: theme.colors.background }}>★</span>
                    </div>
                    <h3 
                      className={`text-xl mb-2 ${theme.typography.headingWeight}`}
                      style={{ color: theme.colors.foreground }}
                    >
                      Feature {i}
                    </h3>
                    <p 
                      className={theme.typography.bodyWeight}
                      style={{ color: theme.colors.secondary }}
                    >
                      This is a sample feature description showing how text looks with this theme.
                    </p>
                  </div>
                ))}
              </div>

              {/* Color Palette */}
              <div className="space-y-4">
                <h3 
                  className={`text-xl ${theme.typography.headingWeight}`}
                  style={{ color: theme.colors.foreground }}
                >
                  Color Palette
                </h3>
                <div className="flex flex-wrap gap-4">
                  {Object.entries(theme.colors).map(([name, color]) => (
                    <div key={name} className="flex items-center space-x-2">
                      <div
                        className={`w-8 h-8 ${theme.borderRadius} border`}
                        style={{ backgroundColor: color, borderColor: theme.colors.secondary }}
                      />
                      <div>
                        <p className={`text-sm ${theme.typography.bodyWeight} capitalize`}
                          style={{ color: theme.colors.foreground }}>
                          {name}
                        </p>
                        <p className={`text-xs ${theme.typography.bodyWeight}`}
                          style={{ color: theme.colors.secondary }}>
                          {color}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-4">
                <h3 
                  className={`text-xl ${theme.typography.headingWeight}`}
                  style={{ color: theme.colors.foreground }}
                >
                  Typography
                </h3>
                <div className="space-y-2">
                  <h1 
                    className={`text-3xl ${theme.typography.headingWeight}`}
                    style={{ color: theme.colors.foreground, fontFamily: theme.typography.fontFamily }}
                  >
                    Heading 1 - {theme.typography.fontFamily}
                  </h1>
                  <h2 
                    className={`text-2xl ${theme.typography.headingWeight}`}
                    style={{ color: theme.colors.foreground, fontFamily: theme.typography.fontFamily }}
                  >
                    Heading 2 - {theme.typography.headingWeight}
                  </h2>
                  <p 
                    className={`text-base ${theme.typography.bodyWeight}`}
                    style={{ color: theme.colors.secondary, fontFamily: theme.typography.fontFamily }}
                  >
                    Body text - This shows how regular paragraph text will appear using {theme.typography.bodyWeight} weight.
                  </p>
                </div>
              </div>
            </div>

            {/* Theme Details */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">Spacing</h4>
                <p className="text-muted-foreground">Section: {theme.spacing.sectionPadding}</p>
                <p className="text-muted-foreground">Elements: {theme.spacing.elementSpacing}</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Style</h4>
                <p className="text-muted-foreground">Radius: {theme.borderRadius}</p>
                <p className="text-muted-foreground">Shadows: {theme.shadows ? "Enabled" : "Disabled"}</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
