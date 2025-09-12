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
import { FormattedTextRuntime as FormattedText } from "@/components/blocks/Basic/FormattedTextRuntime";
import { CollectionWrapperRuntime as CollectionWrapper } from "@/components/blocks/CMS/CollectionWrapperRuntime";
import { HeaderWrapperRuntime as HeaderWrapper } from "@/components/blocks/UI/HeaderWrapperRuntime";

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
  FormattedText,
  CollectionWrapper,
  HeaderWrapper,
};

interface RendererProps {
  layout: any;
  cmsItem?: any;
  cmsContext?: {
    collectionId: string;
    itemId: string;
    itemSlug: string;
    collectionSlug: string;
  };
}

// Helper function to inject CMS data into component props
function injectCMSData(props: any, node: any, cmsItem?: any, cmsContext?: any) {
  if (!cmsItem || !props) return props;
  
  // Check if this is a CMS field component using the new props-based approach
  const isCMSField = !!(props.cmsField && props.cmsFieldId && props.cmsCollectionId);
  
  // Fallback: Check for old custom approach
  const isCMSFieldCustom = !!(node.custom?.isDynamicCMSField && node.custom?.cmsField);
  
  if ((isCMSField || isCMSFieldCustom) && cmsItem.data) {
    const cmsField = props.cmsField || node.custom?.cmsField;
    const cmsFieldType = props.cmsFieldType || node.custom?.cmsFieldType;
    const cmsFieldLabel = props.cmsFieldLabel || node.custom?.cmsFieldLabel;
    
    const fieldValue = cmsItem.data[cmsField];
    
    console.log('Injecting CMS data:', {
      cmsField,
      cmsFieldType,
      fieldValue,
      cmsItemData: cmsItem.data,
      isPropsBased: isCMSField,
      isCustomBased: isCMSFieldCustom
    });
    
    // Clone props to avoid mutation
    const newProps = { ...props };
    
    // Inject actual CMS data based on field type
    switch (cmsFieldType) {
      case 'plainText':
      case 'richText':
      case 'formattedText':
        if (fieldValue) {
          newProps.text = fieldValue;
        }
        break;
      case 'image':
        if (fieldValue) {
          newProps.src = fieldValue;
          newProps.alt = `${cmsFieldLabel} from ${cmsItem.slug || cmsItem._id}`;
        }
        break;
      case 'number':
        if (fieldValue !== undefined) {
          newProps.value = fieldValue;
          newProps.text = String(fieldValue);
        }
        break;
      case 'date':
      case 'datetime':
        if (fieldValue) {
          const date = new Date(fieldValue);
          const formattedDate = date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            ...(cmsFieldType === 'datetime' && { 
              hour: '2-digit', 
              minute: '2-digit' 
            })
          });
          newProps.text = formattedDate;
        }
        break;
      case 'boolean':
        if (fieldValue !== undefined) {
          newProps.checked = fieldValue;
          newProps.text = fieldValue ? "Yes" : "No";
        }
        break;
      case 'link':
        if (fieldValue) {
          newProps.href = fieldValue;
          newProps.text = newProps.text || `Visit ${cmsFieldLabel}`;
        }
        break;
      case 'file':
        if (fieldValue) {
          newProps.href = fieldValue;
          newProps.text = newProps.text || `Download ${cmsFieldLabel}`;
        }
        break;
      case 'toggle':
      case 'option':
        if (fieldValue !== undefined) {
          newProps.text = String(fieldValue);
        }
        break;
      case 'color':
        if (fieldValue) {
          newProps.text = fieldValue;
          newProps.style = { ...newProps.style, color: fieldValue };
        }
        break;
      default:
        if (fieldValue !== undefined && fieldValue !== null) {
          newProps.text = String(fieldValue);
        }
    }
    
    return newProps;
  }
  
  return props;
}

function renderNode(nodeId: string, nodes: any, cmsItem?: any, cmsContext?: any): React.ReactNode {
  const node = nodes[nodeId];
  if (!node) return null;

  const { type, props, nodes: childNodes, linkedNodes } = node;
  
  // Inject CMS data into props if this is a CMS field component
  const enhancedProps = injectCMSData(props, node, cmsItem, cmsContext);
  const componentName = type?.resolvedName;
  
  // Debug logging for CMS components
  if (props.cmsField) {
    console.log('Rendering CMS component:', {
      componentName,
      cmsField: props.cmsField,
      cmsFieldType: props.cmsFieldType,
      originalProps: props,
      enhancedProps
    });
  }
  // Handle Container (root element)
  if (componentName === "Container" || componentName === "Wrapper") {
    return (
      <div key={nodeId} className="min-h-screen">
        {childNodes?.map((childId: string) => renderNode(childId, nodes, cmsItem, cmsContext))}
        {linkedNodes &&
          Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes, cmsItem, cmsContext)
          )}
      </div>
    );
  }

  // Handle HTML elements (div, h1, p, etc.)
  if (typeof type === "string") {
    const Tag = type as keyof JSX.IntrinsicElements;
    return (
      <Tag key={nodeId} {...enhancedProps}>
        {childNodes?.map((childId: string) => renderNode(childId, nodes, cmsItem, cmsContext))}
        {linkedNodes &&
          Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes, cmsItem, cmsContext)
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
      ...(childNodes?.map((childId: string) => renderNode(childId, nodes, cmsItem, cmsContext)) ||
        []),
      ...(linkedNodes
        ? Object.values(linkedNodes).map((linkedId: unknown) =>
            renderNode(linkedId as string, nodes, cmsItem, cmsContext)
          )
        : []),
    ];

    return (
      <Section key={nodeId} {...enhancedProps}>
        {children.length > 0 ? children : null}
      </Section>
    );
  }

  // Render children if the component has them
  const children = [
    ...(childNodes?.map((childId: string) => renderNode(childId, nodes, cmsItem, cmsContext)) || []),
    ...(linkedNodes
      ? Object.values(linkedNodes).map((linkedId: unknown) =>
          renderNode(linkedId as string, nodes, cmsItem, cmsContext)
        )
      : []),
  ];

  return (
    <Component key={nodeId} {...enhancedProps}>
      {children.length > 0 ? children : null}
    </Component>
  );
}

export function RuntimeRenderer({ layout, cmsItem, cmsContext }: RendererProps) {
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
  
  // Add CMS context to the layout if available
  if (cmsItem && cmsContext) {
    // TODO: Inject CMS data into components that need it
    // This could be done by passing context through a React Context Provider
    // or by modifying the layout structure to include CMS data
    console.log("Rendering with CMS context:", { cmsItem, cmsContext });
  }
  return <div className="runtime-renderer">{renderNode("ROOT", layout, cmsItem, cmsContext)}</div>;
}
