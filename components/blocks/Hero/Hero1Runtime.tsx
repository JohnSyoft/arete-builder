import React from "react"
import { SectionRuntime } from "@/components/blocks/Basic/SectionRuntime"

export function Hero1Runtime(props: any) {
  // Hero1 is essentially just a Section that wraps the content
  // Pass all props to SectionRuntime to handle gradient, overlay, etc.
  return <SectionRuntime {...props} />
}
