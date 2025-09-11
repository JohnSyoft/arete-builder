import React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface LinkProps {
  text?: string
  navigationType?: "page" | "url"
  pageSlug?: string
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  color?: string
  fontSize?: string
  fontWeight?: string
  textDecoration?: string
  margin?: string
  padding?: string
}

export function LinkRuntime({
  text = "Click here",
  navigationType = "url",
  pageSlug = "",
  href = "#",
  target = "_self",
  color = "text-blue-600",
  fontSize = "text-base",
  fontWeight = "font-normal",
  textDecoration = "hover:underline",
  margin = "my-1",
  padding = "p-0"
}: LinkProps) {
  const router = useRouter()

  // Determine the navigation URL
  const getNavigationUrl = () => {
    if (navigationType === "page" && pageSlug) {
      // For internal pages, we need to get the current project context
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname
        const projectIdMatch = currentPath.match(/\/site\/([^\/]+)/)
        if (projectIdMatch) {
          const projectId = projectIdMatch[1]
          return `/site/${projectId}/${pageSlug}`
        }
      }
      return "#" // Fallback if no project context
    }
    return href || "#"
  }

  const navigationUrl = getNavigationUrl()
  const isExternalUrl = navigationType === "url" && href && (href.startsWith("http") || href.startsWith("//"))

  const handleClick = (e: React.MouseEvent) => {
    if (navigationType === "page" && pageSlug) {
      e.preventDefault()
      router.push(navigationUrl)
    }
  }

  return (
    <div className={`${margin} ${padding}`}>
      <Link
        href={navigationUrl}
        target={isExternalUrl ? target : "_self"}
        onClick={handleClick}
        className={`${color} ${fontSize} ${fontWeight} ${textDecoration}`}
      >
        {text}
      </Link>
    </div>
  )
}
