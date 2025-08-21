"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "@/components/icons"
import type { Project } from "@/lib/db"

interface RuntimeNavigationProps {
  project: Project
  currentSlug: string
}

export function RuntimeNavigation({ project, currentSlug }: RuntimeNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const pages = project.pages.filter((page) => page.slug !== "home")
  const homePage = project.pages.find((page) => page.isHomePage)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <Link href={`/site/${project.id}/${homePage?.slug || "home"}`} className="text-xl font-bold text-gray-900">
              {project.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href={`/site/${project.id}/${homePage?.slug || "home"}`}
              className={`text-gray-700 hover:text-gray-900 transition-colors ${
                currentSlug === (homePage?.slug || "home") ? "font-medium text-gray-900" : ""
              }`}
            >
              Home
            </Link>
            {pages.map((page) => (
              <Link
                key={page.id}
                href={`/site/${project.id}/${page.slug}`}
                className={`text-gray-700 hover:text-gray-900 transition-colors ${
                  currentSlug === page.slug ? "font-medium text-gray-900" : ""
                }`}
              >
                {page.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-2">
              <Link
                href={`/site/${project.id}/${homePage?.slug || "home"}`}
                className={`block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors ${
                  currentSlug === (homePage?.slug || "home") ? "font-medium text-gray-900 bg-gray-50" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {pages.map((page) => (
                <Link
                  key={page.id}
                  href={`/site/${project.id}/${page.slug}`}
                  className={`block px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors ${
                    currentSlug === page.slug ? "font-medium text-gray-900 bg-gray-50" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
