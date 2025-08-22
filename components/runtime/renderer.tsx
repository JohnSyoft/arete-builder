"use client"

import type React from "react"
import {Header1Runtime as Header1} from "@/components/blocks/Header/Header1Runtime"
import {Hero1Runtime as Hero1Component} from "@/components/blocks/Hero/Hero1Runtime"
// Import basic runtime components
import {TextRuntime as Text} from "@/components/blocks/Basic/TextRuntime"
import {ButtonRuntime as Button} from "@/components/blocks/Basic/ButtonRuntime"
import {SectionRuntime as Section} from "@/components/blocks/Basic/SectionRuntime"
import {ContainerRuntime as Container} from "@/components/blocks/Basic/ContainerRuntime"
import {ColumnsRuntime as Columns} from "@/components/blocks/Basic/ColumnsRuntime"
import {DividerRuntime as Divider} from "@/components/blocks/Basic/DividerRuntime"
import {ImageRuntime as Image} from "@/components/blocks/Basic/ImageRuntime"
import {LinkRuntime as Link} from "@/components/blocks/Basic/LinkRuntime"
import {MapRuntime as Map} from "@/components/blocks/Basic/MapRuntime"
import {SpacerRuntime as Spacer} from "@/components/blocks/Basic/SpacerRuntime"
import {VideoRuntime as Video} from "@/components/blocks/Basic/VideoRuntime"

// Component mapping for runtime rendering
const componentMap: Record<string, React.ComponentType<any>> = {
  // Header components that have runtime versions
  Header1,
  // Hero components
  Hero1: Hero1Component,
  // Basic components
  Text,
  Button,
  Section,
  Container,
  Columns,
  Divider,
  Image,
  Link,
  Map,
  Spacer,
  Video,
}

interface RendererProps {
  layout: any
}

function renderNode(nodeId: string, nodes: any): React.ReactNode {
  console.log({nodeId})
  const node = nodes[nodeId]
  console.log({node})
  if (!node) return null

  const { type, props, nodes: childNodes, linkedNodes } = node
  const componentName = type?.resolvedName

  // Handle Container (root element)
  if (componentName === "Container" || componentName === "Wrapper") {
    return (
      <div key={nodeId} className="min-h-screen">
        {childNodes?.map((childId: string) => renderNode(childId, nodes))}
        {linkedNodes && Object.values(linkedNodes).map((linkedId: unknown) => renderNode(linkedId as string, nodes))}
      </div>
    )
  }

  // Handle HTML elements (div, h1, p, etc.)
  if (typeof type === "string") {
    const Tag = type as keyof JSX.IntrinsicElements
    return (
      <Tag key={nodeId} {...props}>
        {childNodes?.map((childId: string) => renderNode(childId, nodes))}
        {linkedNodes && Object.values(linkedNodes).map((linkedId: unknown) => renderNode(linkedId as string, nodes))}
      </Tag>
    )
  }

  // Handle regular components
  const Component = componentMap[componentName]
  if (!Component) {
    console.warn(`Component ${componentName} not found in component map, rendering children only`)
    // If component not found, still render children as a div wrapper
    const children = [
      ...(childNodes?.map((childId: string) => renderNode(childId, nodes)) || []),
      ...(linkedNodes ? Object.values(linkedNodes).map((linkedId: unknown) => renderNode(linkedId as string, nodes)) : [])
    ]
    
    return (
      <div key={nodeId} {...props}>
        {children.length > 0 ? children : null}
      </div>
    )
  }

  // Render children if the component has them
  const children = [
    ...(childNodes?.map((childId: string) => renderNode(childId, nodes)) || []),
    ...(linkedNodes ? Object.values(linkedNodes).map((linkedId: unknown) => renderNode(linkedId as string, nodes)) : [])
  ]

  return (
    <Component key={nodeId} {...props}>
      {children.length > 0 ? children : null}
    </Component>
  )
}

export function RuntimeRenderer({ layout }: RendererProps) {

  if (!layout || !layout.ROOT) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Page Not Found</h1>
          <p className="text-gray-600">This page hasn't been configured yet.</p>
        </div>
      </div>
    )
  }
console.log(renderNode("ROOT", layout),"ROOT Render")
  return <div className="runtime-renderer">{renderNode("ROOT", layout)}</div>
}
