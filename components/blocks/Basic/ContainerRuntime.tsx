import React from "react"

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

export function ContainerRuntime({ children, className = "" }: ContainerProps) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
