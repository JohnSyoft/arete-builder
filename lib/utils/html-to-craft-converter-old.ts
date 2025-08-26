import React from 'react';
import {
  CraftText,
  CraftButton,
  CraftImage
} from '@/components/editor/craft-components';

// HTML parser to extract elements and convert them to CraftJS structure
export function parseHtmlElements(html: string) {
  // For server-side safety, return basic structure if document is not available
  if (typeof document === 'undefined') {
    return {
      elements: [],
      properties: []
    };
  }

  // Create a temporary DOM element to parse HTML
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = html;

  const elements: any[] = [];
  const properties: any[] = [];

  // Recursively traverse and identify elements
  function traverseElement(element: HTMLElement, path: string = '') {
    // Check for text nodes
    if (element.tagName === 'H1' || element.tagName === 'H2' || element.tagName === 'H3' || 
        element.tagName === 'H4' || element.tagName === 'H5' || element.tagName === 'H6' ||
        element.tagName === 'P' || element.tagName === 'SPAN' || element.tagName === 'DIV') {
      
      const textContent = element.textContent?.trim();
      if (textContent && element.children.length === 0) {
        elements.push({
          type: 'text',
          content: textContent,
          tag: element.tagName.toLowerCase(),
          classes: element.className,
          path: path + '/' + element.tagName.toLowerCase()
        });
        
        properties.push({
          name: `${element.tagName.toLowerCase()}_text_${elements.length}`,
          type: 'text',
          defaultValue: textContent
        });
      }
    }

    // Check for buttons
    if (element.tagName === 'BUTTON' || (element.tagName === 'A' && element.textContent?.trim())) {
      elements.push({
        type: 'button',
        content: element.textContent?.trim(),
        classes: element.className,
        href: element.getAttribute('href'),
        path: path + '/' + element.tagName.toLowerCase()
      });
      
      properties.push({
        name: `button_text_${elements.length}`,
        type: 'text',
        defaultValue: element.textContent?.trim()
      });
    }

    // Check for images
    if (element.tagName === 'IMG') {
      elements.push({
        type: 'image',
        src: element.getAttribute('src'),
        alt: element.getAttribute('alt'),
        classes: element.className,
        path: path + '/img'
      });
      
      properties.push({
        name: `image_src_${elements.length}`,
        type: 'image',
        defaultValue: element.getAttribute('src')
      });
    }

    // Recursively process children
    Array.from(element.children).forEach((child, index) => {
      traverseElement(child as HTMLElement, path + '/' + child.tagName.toLowerCase() + `[${index}]`);
    });
  }

  traverseElement(tempDiv);
  return { elements, properties };
}

// Convert HTML to a React component that works with CraftJS
export function convertHtmlToCraftComponent(html: string, componentName: string = 'CustomBlock') {
  const { elements, properties } = parseHtmlElements(html);

  // Generate a React component that can work both inside and outside Editor
  const CraftComponent = (props: any) => {
    // For preview outside Editor context, just render the HTML
    const isClient = typeof window !== 'undefined';
    
    if (!isClient) {
      return React.createElement('div', {
        className: 'w-full',
        ...props
      }, 'Loading...');
    }

    // Try to detect if we're in Editor context
    let isInEditor = false;
    let Element: any = null;
    
    try {
      const craftCore = require('@craftjs/core');
      Element = craftCore.Element;
      // Try to use useEditor hook to detect Editor context
      const { enabled } = craftCore.useEditor((state: any) => ({
        enabled: state.options.enabled
      }));
      isInEditor = true;
    } catch (error) {
      // Not in Editor context, render as regular HTML for preview
      isInEditor = false;
    }

    if (!isInEditor || !Element) {
      // Render as regular HTML for preview outside Editor
      return React.createElement('div', {
        dangerouslySetInnerHTML: { __html: html },
        className: 'w-full preview-block',
        style: { 
          border: '1px dashed #e5e7eb',
          borderRadius: '8px',
          padding: '16px',
          background: '#fafafa'
        },
        ...props
      });
    }

    // In Editor context, convert to CraftJS components
    const processElement = (htmlString: string): React.ReactNode => {
      // Create a temporary div to parse the HTML
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = htmlString;

      const convertNode = (node: ChildNode, key: number = 0): React.ReactNode => {
        if (node.nodeType === Node.TEXT_NODE) {
          const textContent = node.textContent?.trim();
          if (textContent) {
            return React.createElement(Element, {
              key,
              is: CraftText,
              canvas: false,
              text: textContent
            });
          }
          return null;
        }

        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          const tagName = element.tagName.toLowerCase();
          const className = element.className;
          const children = Array.from(element.childNodes);

          // Handle buttons
          if (tagName === 'button' || (tagName === 'a' && element.textContent?.trim())) {
            return React.createElement(Element, {
              key,
              is: CraftButton,
              canvas: false,
              text: element.textContent?.trim() || 'Button',
              className,
              href: element.getAttribute('href') || undefined
            });
          }

          // Handle images
          if (tagName === 'img') {
            return React.createElement(Element, {
              key,
              is: CraftImage,
              canvas: false,
              src: element.getAttribute('src') || '',
              alt: element.getAttribute('alt') || '',
              className
            });
          }

          // Handle text elements (h1-h6, p, span, etc.)
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'].includes(tagName) && 
              children.length === 1 && children[0].nodeType === Node.TEXT_NODE) {
            return React.createElement(Element, {
              key,
              is: CraftText,
              canvas: false,
              text: element.textContent?.trim() || '',
              tag: tagName,
              className
            });
          }

          // Handle container elements (div, section, etc.)
          if (['div', 'section', 'article', 'header', 'footer', 'main', 'nav'].includes(tagName)) {
            const processedChildren = children
              .map((child, index) => convertNode(child, index))
              .filter(Boolean);

            if (processedChildren.length === 0) {
              return React.createElement('div', {
                key,
                className
              }, React.createElement(Element, {
                is: CraftText,
                canvas: false,
                text: element.textContent?.trim() || 'Empty container'
              }));
            }

            return React.createElement(
              tagName,
              { key, className },
              processedChildren
            );
          }

          // For other elements, recursively process children
          const processedChildren = children
            .map((child, index) => convertNode(child, index))
            .filter(Boolean);

          return React.createElement(
            tagName,
            { key, className },
            processedChildren.length > 0 ? processedChildren : element.textContent?.trim() || ''
          );
        }

        return null;
      };

      return Array.from(tempDiv.childNodes)
        .map((node, index) => convertNode(node, index))
        .filter(Boolean);
    };

    return React.createElement('div', props, processElement(html));
  };

  // Set the display name for better debugging
  CraftComponent.displayName = componentName;

  // Add craft-specific properties
  CraftComponent.craft = {
    displayName: componentName,
    props: {
      className: 'w-full',
    },
    related: {
      settings: () => React.createElement('div', {
        className: 'p-4'
      }, [
        React.createElement('h3', {
          key: 'title',
          className: 'text-sm font-medium mb-2'
        }, 'Custom Block Settings'),
        React.createElement('p', {
          key: 'description',
          className: 'text-xs text-gray-500'
        }, 'This is a custom block created from HTML. Individual elements can be edited by clicking on them.')
      ]),
    },
  };

  return {
    component: CraftComponent,
    properties,
    elements
  };
}
