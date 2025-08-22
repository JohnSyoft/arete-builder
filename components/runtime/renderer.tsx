"use client"

import type React from "react"
import {Hero1Runtime as Hero1} from "@/components/blocks/Hero/Hero1Runtime"
import {Hero2} from "@/components/blocks/Hero/Hero2"
import {Hero3} from "@/components/blocks/Hero/Hero3"
import {Hero4} from "@/components/blocks/Hero/Hero4"
import {Hero5} from "@/components/blocks/Hero/Hero5"
import {Header1Runtime as Header1} from "@/components/blocks/Header/Header1Runtime"
import {Header2} from "@/components/blocks/Header/Header2"
import {Header3} from "@/components/blocks/Header/Header3"
import {Header4} from "@/components/blocks/Header/Header4"
import {Header5} from "@/components/blocks/Header/Header5"
import {Footer1} from "@/components/blocks/Footer/Footer1"
import {Footer2} from "@/components/blocks/Footer/Footer2"
import {Footer3} from "@/components/blocks/Footer/Footer3"
import {Footer4} from "@/components/blocks/Footer/Footer4"
import {Footer5} from "@/components/blocks/Footer/Footer5"
import {CTA1} from "@/components/blocks/CTA/CTA1"
import {CTA2} from "@/components/blocks/CTA/CTA2"
import {CTA3} from "@/components/blocks/CTA/CTA3"
import {CTA4} from "@/components/blocks/CTA/CTA4"
import {CTA5} from "@/components/blocks/CTA/CTA5"
import {Features1} from "@/components/blocks/Features/Features1"
import {Features2} from "@/components/blocks/Features/Features2"
import {Features3} from "@/components/blocks/Features/Features3"
import {Features4} from "@/components/blocks/Features/Features4"
import {Features5} from "@/components/blocks/Features/Features5"
import {FAQ1} from "@/components/blocks/FAQ/FAQ1"
import {FAQ2} from "@/components/blocks/FAQ/FAQ2"
import {FAQ3} from "@/components/blocks/FAQ/FAQ3"
import {FAQ4} from "@/components/blocks/FAQ/FAQ4"
import {FAQ5} from "@/components/blocks/FAQ/FAQ5"

// Component mapping for runtime rendering
const componentMap: Record<string, React.ComponentType<any>> = {
  Hero1,
  Hero2,
  Hero3,
  Hero4,
  Hero5,
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Footer1,
  Footer2,
  Footer3,
  Footer4,
  Footer5,
  CTA1,
  CTA2,
  CTA3,
  CTA4,
  CTA5,
  Features1,
  Features2,
  Features3,
  Features4,
  Features5,
  FAQ1,
  FAQ2,
  FAQ3,
  FAQ4,
  FAQ5,
}

interface RendererProps {
  layout: any
}

function renderNode(nodeId: string, nodes: any): React.ReactNode {
  const node = nodes[nodeId]
  if (!node) return null

  const { type, props, nodes: childNodes } = node
  const componentName = type?.resolvedName

  // Handle Container (root element)
  if (componentName === "Wrapper") {
    return (
      <div key={nodeId} className="min-h-screen">
        {childNodes?.map((childId: string) => renderNode(childId, nodes))}
      </div>
    )
  }

  // Handle regular components
  const Component = componentMap[componentName]
  if (!Component) {
    console.warn(`Component ${componentName} not found in component map`)
    return null
  }

  return <Component key={nodeId} {...props} />
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

  return <div className="runtime-renderer">{renderNode("ROOT", layout)}</div>
}
