import React from 'react';

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
    if (element.tagName === 'BUTTON' || (element.tagName === 'A' && element.hasAttribute('href'))) {
      elements.push({
        type: 'button',
        content: element.textContent?.trim() || 'Button',
        classes: element.className,
        href: element.getAttribute('href'),
        path: path + '/button'
      });
      
      properties.push({
        name: `button_text_${elements.length}`,
        type: 'text',
        defaultValue: element.textContent?.trim() || 'Button'
      });
    }

    // Check for images
    if (element.tagName === 'IMG') {
      elements.push({
        type: 'image',
        src: element.getAttribute('src'),
        alt: element.getAttribute('alt'),
        classes: element.className,
        path: path + '/image'
      });
      
      properties.push({
        name: `image_src_${elements.length}`,
        type: 'text',
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
    let useNode: any = null;
    
    try {
      const craftCore = require('@craftjs/core');
      useNode = craftCore.useNode;
      // Try to use useNode hook to detect Editor context
      const {
        connectors: { connect, drag },
        selected,
        hovered,
      } = useNode((state: any) => ({
        selected: state.events.selected,
        hovered: state.events.hovered,
      }));
      isInEditor = true;
      
      // In Editor context, render with CraftJS integration
      return React.createElement('div', {
        ref: (ref: any) => {
          if (ref) {
            connect(drag(ref));
          }
        },
        className: `relative group p-2 rounded ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`,
        ...props
      }, [
        React.createElement('div', {
          key: 'content',
          dangerouslySetInnerHTML: { __html: html },
          className: 'w-full'
        }),
        // Show component label when selected/hovered
        (selected || hovered) && React.createElement('div', {
          key: 'label',
          className: 'absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10'
        }, componentName)
      ]);
      
    } catch (error) {
      // Not in Editor context, render as regular HTML for preview
      isInEditor = false;
    }

    if (!isInEditor) {
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
  };

  // Set the display name for better debugging
  CraftComponent.displayName = componentName;

  // Add craft-specific properties
  CraftComponent.craft = {
    displayName: componentName,
    props: {
      className: 'w-full',
    },
    rules: {
      canDrag: () => true,
      canDrop: () => false,
      canMoveIn: () => false,
      canMoveOut: () => true,
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
