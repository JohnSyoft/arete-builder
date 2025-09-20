/**
 * HeaderWrapper synchronization utilities
 * Handles syncing HeaderWrapper component across all pages
 */

export interface HeaderWrapperData {
  type: { resolvedName: string };
  isCanvas: boolean;
  props: any;
  displayName: string;
  custom: any;
  hidden: boolean;
  nodes: string[];
  linkedNodes: any;
}

/**
 * Extracts HeaderWrapper component from a layout
 */
export function extractHeaderWrapper(layout: any): HeaderWrapperData | null {
  // Handle string layout (parse if needed)
  let parsedLayout = layout;
  if (typeof layout === 'string') {
    try {
      parsedLayout = JSON.parse(layout);
    } catch (error) {
      console.error('Failed to parse layout string:', error);
      return null;
    }
  }
  
  if (!parsedLayout || typeof parsedLayout !== 'object') return null;
  
  // Look for HeaderWrapper in the ROOT node's children
  const rootNode = parsedLayout.ROOT;
  if (!rootNode || !rootNode.nodes) return null;

  // Find HeaderWrapper in the nodes
  for (const nodeId of rootNode.nodes) {
    const node = parsedLayout[nodeId];
    if (node && node.type?.resolvedName === 'HeaderWrapper') {
      return {
        type: node.type,
        isCanvas: node.isCanvas,
        props: { ...node.props },
        displayName: node.displayName,
        custom: { ...node.custom },
        hidden: node.hidden,
        nodes: [...(node.nodes || [])],
        linkedNodes: { ...node.linkedNodes }
      };
    }
  }

  return null;
}

/**
 * Injects HeaderWrapper into a layout at the top
 */
export function injectHeaderWrapper(layout: any, headerData: HeaderWrapperData): any {
  // Handle string layout (parse if needed)
  let parsedLayout = layout;
  if (typeof layout === 'string') {
    try {
      parsedLayout = JSON.parse(layout);
    } catch (error) {
      console.error('Failed to parse layout string:', error);
      return layout;
    }
  }
  
  if (!parsedLayout || typeof parsedLayout !== 'object') return layout;

  const newLayout = { ...parsedLayout };
  const rootNode = { ...newLayout.ROOT };
  
  // Generate a unique ID for the HeaderWrapper
  const headerId = `header-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Create the HeaderWrapper node
  const headerNode = {
    type: headerData.type,
    isCanvas: headerData.isCanvas,
    props: { ...headerData.props },
    displayName: headerData.displayName,
    custom: { ...headerData.custom },
    hidden: headerData.hidden,
    nodes: [...headerData.nodes],
    linkedNodes: { ...headerData.linkedNodes }
  };

  // Add HeaderWrapper to the layout
  newLayout[headerId] = headerNode;
  
  // Add HeaderWrapper as the first child of ROOT
  rootNode.nodes = [headerId, ...(rootNode.nodes || [])];
  newLayout.ROOT = rootNode;

  return newLayout;
}

/**
 * Removes HeaderWrapper from a layout
 */
export function removeHeaderWrapper(layout: any): any {
  // Handle string layout (parse if needed)
  let parsedLayout = layout;
  if (typeof layout === 'string') {
    try {
      parsedLayout = JSON.parse(layout);
    } catch (error) {
      console.error('Failed to parse layout string:', error);
      return layout;
    }
  }
  
  if (!parsedLayout || typeof parsedLayout !== 'object') return layout;

  const newLayout = { ...parsedLayout };
  const rootNode = { ...newLayout.ROOT };
  
  if (!rootNode.nodes) return newLayout;

  // Find and remove HeaderWrapper nodes
  const filteredNodes = rootNode.nodes.filter((nodeId: string) => {
    const node = newLayout[nodeId];
    if (node && node.type?.resolvedName === 'HeaderWrapper') {
      // Remove the node from the layout
      delete newLayout[nodeId];
      return false;
    }
    return true;
  });

  rootNode.nodes = filteredNodes;
  newLayout.ROOT = rootNode;

  return newLayout;
}

/**
 * Updates HeaderWrapper in a layout (replaces existing or adds new)
 */
export function updateHeaderWrapper(layout: any, headerData: HeaderWrapperData): any {
  // First remove any existing HeaderWrapper
  const layoutWithoutHeader = removeHeaderWrapper(layout);
  
  // Then inject the new HeaderWrapper
  return injectHeaderWrapper(layoutWithoutHeader, headerData);
}

/**
 * Checks if a layout has a HeaderWrapper
 */
export function hasHeaderWrapper(layout: any): boolean {
  // Handle string layout (parse if needed)
  let parsedLayout = layout;
  if (typeof layout === 'string') {
    try {
      parsedLayout = JSON.parse(layout);
    } catch (error) {
      console.error('Failed to parse layout string:', error);
      return false;
    }
  }
  
  if (!parsedLayout || typeof parsedLayout !== 'object') return false;
  
  // Look for HeaderWrapper in the ROOT node's children
  const rootNode = parsedLayout.ROOT;
  if (!rootNode || !rootNode.nodes) return false;

  // Find HeaderWrapper in the nodes
  for (const nodeId of rootNode.nodes) {
    const node = parsedLayout[nodeId];
    if (node && node.type?.resolvedName === 'HeaderWrapper') {
      return true;
    }
  }

  return false;
}
