import React from "react"
import { Badge as UIBadge, type BadgeProps as UIBadgeProps } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface BadgeRuntimeProps extends Omit<UIBadgeProps, 'children'> {
  text?: string
  margin?: string
}

export function BadgeRuntime({
  text = "Badge",
  variant = "default",
  className = "",
  margin = "my-1",
  ...props
}: BadgeRuntimeProps) {
  return (
    <UIBadge
      variant={variant}
      className={cn(margin === "none" ? "" : margin, className)}
      dangerouslySetInnerHTML={{ __html: text }}
      {...props}
    />
  )
}
