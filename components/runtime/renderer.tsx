"use client";

import type React from "react";
// import { Header1Runtime as Header1 } from "@/components/blocks/Header/Header1Runtime";
// Import basic runtime components
import { TextRuntime as Text } from "@/components/blocks/Basic/TextRuntime";
import { ButtonRuntime as Button } from "@/components/blocks/Basic/ButtonRuntime";
import { BadgeRuntime as Badge } from "@/components/blocks/Basic/BadgeRuntime";
import { InputRuntime as Input } from "@/components/blocks/Basic/InputRuntime";
import { SectionRuntime as Section } from "@/components/blocks/Basic/SectionRuntime";
import { ContainerRuntime as Container } from "@/components/blocks/Basic/ContainerRuntime";
import { DividerRuntime as Divider } from "@/components/blocks/Basic/DividerRuntime";
import { ImageRuntime as Image } from "@/components/blocks/Basic/ImageRuntime";
import { LinkRuntime as Link } from "@/components/blocks/Basic/LinkRuntime";
import { MapRuntime as Map } from "@/components/blocks/Basic/MapRuntime";
import { SpacerRuntime as Spacer } from "@/components/blocks/Basic/SpacerRuntime";
import { VideoRuntime as Video } from "@/components/blocks/Basic/VideoRuntime";
import { CardRuntime as Card } from "@/components/blocks/Basic/CardRuntime";
import { HeadingRuntime as Heading } from "@/components/blocks/Basic/HeadingRuntime";
import { SelectRuntime as Select } from "@/components/blocks/Basic/SelectRuntime";
import { IconRuntime as Icon } from "@/components/blocks/Basic/IconRuntime";
import { GridRuntime as Grid } from "@/components/blocks/Basic/GridRuntime";
import { NavigationRuntime as Navigation } from "@/components/blocks/Basic/NavigationRuntime";
import { CheckboxRuntime as Checkbox } from "@/components/blocks/Basic/CheckboxRuntime";
import { ListRuntime as List } from "@/components/blocks/Basic/ListRuntime";
import { AlertRuntime as Alert } from "@/components/blocks/Basic/AlertRuntime";
import { TextareaRuntime as Textarea } from "@/components/blocks/Basic/TextareaRuntime";
import { LineBreakRuntime as LineBreak } from "@/components/blocks/Basic/LineBreakRuntime";
import { FlexRuntime as Flex } from "@/components/blocks/Basic/FlexRuntime";
import { TabRuntime as Tab } from "@/components/blocks/Basic/TabRuntime";
import { TabPanelRuntime as TabPanel } from "@/components/blocks/Basic/TabPanelRuntime";
import { CarouselRuntime as Carousel } from "@/components/blocks/Basic/CarouselRuntime";
import { BlogGridRuntime as BlogGrid } from "@/components/blocks/Basic/BlogGridRuntime";
import { ResizerRuntime as Resizer } from "@/components/blocks/Basic/ResizerRuntime";

// Hero runtime components

// Component mapping for runtime rendering
const componentMap: Record<string, React.ComponentType<any>> = {
  // Header components that have runtime versions
  // Header1,
  Text,
  Button,
  Badge,
  Input,
  Section,
  Container,
  Divider,
  Image,
  Link,
  Map,
  Spacer,
  Video,
  Card,
  Heading,
  Select,
  Icon,
  Grid,
  Navigation,
  Checkbox,
  List,
  Alert,
  Textarea,
  LineBreak,
  Flex,
  Tab,
  TabPanel,
  Carousel,
  BlogGrid,
  Resizer,
};

interface RendererProps {
  layout: any;
}

function renderNode(nodeId: string, nodes: any): React.ReactNode {
  const node = nodes[nodeId];
  if (!node) return null;

  const { type, props, nodes: childNodes, linkedNodes } = node;
  const componentName = type?.resolvedName;
  console.log({ componentName });
  // Handle Container (root element)
  if (componentName === "Container" || componentName === "Wrapper") {
    return (
      <div key={nodeId} className="min-h-screen">
        {childNodes?.map((childId: string) => renderNode(childId, nodes))}
        {linkedNodes &&
          Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes)
          )}
      </div>
    );
  }

  // Handle HTML elements (div, h1, p, etc.)
  if (typeof type === "string") {
    const Tag = type as keyof JSX.IntrinsicElements;
    return (
      <Tag key={nodeId} {...props}>
        {childNodes?.map((childId: string) => renderNode(childId, nodes))}
        {linkedNodes &&
          Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes)
          )}
      </Tag>
    );
  }

  // Handle regular components
  const Component = componentMap[componentName];
  if (!Component) {
    console.warn(
      `Component ${componentName} not found in component map, wrapping in Section`
    );
    // If component not found, wrap in SectionRuntime with the component's props
    const children = [
      ...(childNodes?.map((childId: string) => renderNode(childId, nodes)) ||
        []),
      ...(linkedNodes
        ? Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes)
          )
        : []),
    ];

    return (
      <Section key={nodeId} {...props}>
        {children.length > 0 ? children : null}
      </Section>
    );
  }

  // Render children if the component has them
  const children = [
    ...(childNodes?.map((childId: string) => renderNode(childId, nodes)) || []),
    ...(linkedNodes
      ? Object.values(linkedNodes).map((linkedId: unknown) =>
          renderNode(linkedId as string, nodes)
        )
      : []),
  ];

  return (
    <Component key={nodeId} {...props}>
      {children.length > 0 ? children : null}
    </Component>
  );
}

export function RuntimeRenderer({ layout }: RendererProps) {
  if (!layout || !layout.ROOT) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Page Not Found
          </h1>
          <p className="text-gray-600">This page hasn't been configured yet.</p>
        </div>
      </div>
    );
  }
  // console.log(renderNode("ROOT", layout),"ROOT Render")
  return <div className="runtime-renderer">{renderNode("ROOT", layout)}</div>;
}
