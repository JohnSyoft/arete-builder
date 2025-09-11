import type { Field, Collection } from '@/hooks/useCollections'
import type { CollectionItem } from '@/hooks/useCollectionItems'

// CraftJS layout generator for CMS detail pages
export interface CraftNode {
  type: { resolvedName: string }
  isCanvas?: boolean
  props: Record<string, any>
  displayName: string
  custom: Record<string, any>
  hidden: boolean
  nodes: string[]
  linkedNodes: Record<string, any>
  parent?: string
}

export interface CraftLayout {
  ROOT: CraftNode
  [nodeId: string]: CraftNode
}

// Generate unique node IDs
let nodeCounter = 0
const generateNodeId = () => `node_${++nodeCounter}_${Date.now()}`


// Helper function to create CMS field props
const createCMSFieldProps = (field: Field, collection: Collection) => ({
  cmsField: field.name,
  cmsFieldType: field.type,
  cmsFieldId: field.id,
  cmsCollectionId: collection._id,
  cmsFieldLabel: field.name.charAt(0).toUpperCase() + field.name.slice(1),
})

// Helper function to identify title-like fields by name
const isTitleField = (field: Field): boolean => {
  const titlePatterns = ['title', 'name', 'heading', 'subject', 'headline']
  return titlePatterns.some(pattern => 
    field.name.toLowerCase().includes(pattern.toLowerCase())
  )
}

// Generate CMS layouts - returns both index page layout and populated card component layout
export const generateCMSLayouts = (
  collection: Collection,
  sampleItems?: CollectionItem[],
  cardComponent?: string,
  projectId?: string,
  componentSlug?: string
): { indexLayout: CraftLayout; cardLayout: CraftLayout } => {
  // Generate the populated card layout with CMS fields
  const cardLayout = generateCMSCardWithFieldsLayout(collection, sampleItems?.[0], projectId, componentSlug)
  
  // Generate the index page layout that has populated cards (not empty ones)
  const indexLayout = generateCMSIndexLayoutWithPopulatedCards(collection, sampleItems, projectId, componentSlug, cardLayout)
  
  return { indexLayout, cardLayout }
}

// Generate populated card layout with CMS fields (like detail page but simplified)
export const generateCMSCardWithFieldsLayout = (
  collection: Collection,
  firstItem?: CollectionItem,
  projectId?: string,
  componentSlug?: string
): CraftLayout => {
  const cardWrapperId = generateNodeId()
  
  const layout: CraftLayout = {
    ROOT: {
      type: { resolvedName: "Container" },
      isCanvas: true,
      props: {
        padding: "p-4",
        backgroundColor: "#ffffff",
      },
      displayName: "Card Container",
      custom: {},
      hidden: false,
      nodes: [cardWrapperId],
      linkedNodes: {},
    },
    [cardWrapperId]: {
      type: { resolvedName: "Card" },
      isCanvas: true,
      props: {
        className: "w-full",
        nonEditable: true,
        collectionId: collection._id,
        projectId: projectId,
        collectionName: collection.name,
        componentSlug: componentSlug,
        padding: "24px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        shadow: "md",
      },
      displayName: "Item Card",
      custom: {
        description: "Card wrapper for item content - Double-click to edit component",
      },
      hidden: false,
      nodes: [],
      linkedNodes: {},
      parent: "ROOT",
    }
  }

  // Get sample data from first item
  const sampleData = firstItem?.data || {}
  
  // Generate content based on field order (same logic as detail page)
  const orderedFields = [...collection.fields].sort((a, b) => {
    const getFieldPriority = (field: Field) => {
      if (isTitleField(field)) return 1
      if (field.type === 'image' || field.type === 'gallery') return 2
      if (field.type === 'formattedText') return 3
      if (field.type === 'plainText') return 4
      if (field.type === 'date') return 5
      if (field.type === 'link') return 6
      if (field.type === 'number') return 7
      if (field.type === 'toggle' || field.type === 'option') return 8
      return 9
    }
    return getFieldPriority(a) - getFieldPriority(b)
  })

  // Add components for ALL fields in the collection
  orderedFields.forEach((field) => {
    const fieldNodeId = generateNodeId()
    const sampleValue = sampleData[field.name]
    
    // Handle title-like fields
    if (isTitleField(field)) {
      layout[fieldNodeId] = {
        type: { resolvedName: "Heading" },
        isCanvas: false,
        props: {
          text: sampleValue || field.placeholder || `Sample ${field.name}`,
          level: "h3",
          textAlign: "text-left",
          margin: "mb-4",
          color: "#111827",
          fontWeight: "font-semibold",
          fontSize: "text-lg",
          nonEditable: true,
          ...createCMSFieldProps(field, collection),
        },
        displayName: `${field.name} (Title)`,
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {},
        parent: cardWrapperId,
      }
      layout[cardWrapperId].nodes.push(fieldNodeId)
    }
    // Handle other field types
    else {
      switch (field.type) {
        case 'image':
          if (sampleValue || field.placeholder) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Image" },
              isCanvas: false,
              props: {
                src: sampleValue || field.placeholder || "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
                alt: `${field.name} image`,
                width: "100%",
                height: "200px",
                objectFit: "object-cover",
                borderRadius: "rounded-lg",
                margin: "mb-4",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Image)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'formattedText':
        case 'plainText':
          if (sampleValue || field.placeholder) {
            const truncatedText = (sampleValue || field.placeholder || `Sample ${field.name}`)
              .substring(0, 120) + (sampleValue?.length > 120 ? '...' : '')
            
            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: truncatedText,
                textAlign: "text-left",
                margin: "mb-3",
                color: "#6b7280",
                fontSize: "text-sm",
                lineHeight: "leading-relaxed",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Text)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'date':
        case 'datetime':
          if (sampleValue || field.defaultValue) {
            const dateValue = sampleValue 
              ? new Date(sampleValue).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })
              : new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })

            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: dateValue,
                textAlign: "text-left",
                margin: "mb-2",
                color: "#9ca3af",
                fontSize: "text-xs",
                fontWeight: "font-medium",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Date)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'link':
          if (sampleValue || field.placeholder) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Link" },
              isCanvas: false,
              props: {
                href: sampleValue || field.placeholder || "#",
                text: "Read more →",
                target: "_self",
                color: "text-blue-600",
                margin: "mt-2",
                fontSize: "text-sm",
                fontWeight: "font-medium",
                textDecoration: "underline",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Link)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'number':
          if (sampleValue !== undefined || field.defaultValue !== undefined) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: (sampleValue ?? field.defaultValue ?? 0).toString(),
                textAlign: "text-left",
                margin: "mb-3",
                color: "text-gray-900",
                fontSize: "text-sm",
                fontWeight: "font-semibold",
                padding: "px-3 py-1",
                backgroundColor: "bg-gray-100",
                borderRadius: "rounded-md",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Number)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'toggle':
          if (sampleValue !== undefined) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Badge" },
              isCanvas: false,
              props: {
                text: sampleValue ? "✓ Yes" : "✗ No",
                variant: sampleValue ? "default" : "secondary",
                margin: "mb-3",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Toggle)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'option':
          if (sampleValue || field.defaultValue) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Badge" },
              isCanvas: false,
              props: {
                text: sampleValue || field.defaultValue || "Option",
                variant: "outline",
                margin: "mb-3",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Option)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'color':
          if (sampleValue || field.defaultValue) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: `Color: ${sampleValue || field.defaultValue || '#000000'}`,
                textAlign: "text-left",
                margin: "mb-3",
                color: "text-gray-700",
                fontSize: "text-sm",
                padding: "px-3 py-1",
                backgroundColor: "bg-gray-50",
                borderRadius: "rounded-md",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Color)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'file':
          if (sampleValue || field.placeholder) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Link" },
              isCanvas: false,
              props: {
                href: sampleValue || field.placeholder || "#",
                text: `📁 ${field.name}`,
                target: "_blank",
                color: "text-blue-600",
                margin: "mb-3",
                fontSize: "text-sm",
                textDecoration: "underline",
                fontWeight: "font-medium",
                padding: "px-3 py-1",
                backgroundColor: "bg-blue-50",
                borderRadius: "rounded-md",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (File)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        case 'gallery':
          if (sampleValue && Array.isArray(sampleValue) && sampleValue.length > 0) {
            // Create a flex container for gallery (compact for card)
            const galleryContainerId = generateNodeId()
            layout[galleryContainerId] = {
              type: { resolvedName: "Flex" },
              isCanvas: true,
              props: {
                flexDirection: "row",
                gap: "gap-2",
                wrap: "wrap",
                margin: "mb-3",
                nonEditable: true,
              },
              displayName: `${field.name} (Gallery)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }

            // Add first 2 images for card display
            sampleValue.slice(0, 2).forEach((imageUrl: string, index: number) => {
              const imageNodeId = generateNodeId()
              layout[imageNodeId] = {
                type: { resolvedName: "Image" },
                isCanvas: false,
                props: {
                  src: imageUrl,
                  alt: `${field.name} image ${index + 1}`,
                  width: "60px",
                  height: "60px",
                  objectFit: "object-cover",
                  borderRadius: "rounded-md",
                  nonEditable: true,
                },
                displayName: `Gallery Image ${index + 1}`,
                custom: {},
                hidden: false,
                nodes: [],
                linkedNodes: {},
                parent: galleryContainerId,
              }
              layout[galleryContainerId].nodes.push(imageNodeId)
            })

            layout[cardWrapperId].nodes.push(galleryContainerId)
            return // Skip adding fieldNodeId since we created a container
          }
          break

        case 'reference':
        case 'multiReference':
          if (sampleValue) {
            // Simplified reference display for card
            const refText = Array.isArray(sampleValue) 
              ? `${sampleValue.length} references`
              : (sampleValue.slug || sampleValue._id || 'Reference')
            
            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: refText,
                textAlign: "text-left",
                margin: "mb-3",
                color: "text-blue-600",
                fontSize: "text-sm",
                fontWeight: "font-medium",
                padding: "px-3 py-1",
                backgroundColor: "bg-blue-50",
                borderRadius: "rounded-md",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (Reference)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break

        default:
          // For any other field types, create a generic text display
          if (sampleValue !== undefined && sampleValue !== null && sampleValue !== '') {
            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: String(sampleValue),
                textAlign: "text-left",
                margin: "mb-3",
                color: "text-gray-600",
                fontSize: "text-sm",
                lineHeight: "leading-relaxed",
                nonEditable: true,
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (${field.type})`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: cardWrapperId,
            }
            layout[cardWrapperId].nodes.push(fieldNodeId)
          }
          break
      }
    }
  })

  return layout
}

// Generate simplified index layout that reuses the populated card component
export const generateCMSIndexLayoutWithCardComponent = (
  collection: Collection,
  sampleItems?: CollectionItem[],
  projectId?: string,
  componentSlug?: string
): CraftLayout => {
  const layout: CraftLayout = {
    ROOT: {
      type: { resolvedName: "Container" },
      isCanvas: true,
      props: {
        padding: "p-10",
        backgroundColor: "#ffffff",
      },
      displayName: "Container",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  }

  const rootNodeId = "ROOT"
  const sectionNodeId = generateNodeId()

  // Create main section container
  layout[sectionNodeId] = {
    type: { resolvedName: "Section" },
    isCanvas: true,
    props: {
      padding: "py-16 px-5",
      backgroundColor: "#ffffff",
      width: "100%",
      margin: "mx-auto",
      hasContentWrapper: true,
      contentMaxWidth: "7xl",
      nonEditable: true,
    },
    displayName: "Section",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: rootNodeId,
  }

  layout.ROOT.nodes.push(sectionNodeId)

  // Add collection title
  const titleNodeId = generateNodeId()
  layout[titleNodeId] = {
    type: { resolvedName: "Heading" },
    isCanvas: false,
    props: {
      text: collection.name,
      level: "h1",
      textAlign: "text-center",
      margin: "mb-12",
      color: "#1a1a1a",
      fontWeight: "font-bold",
      fontSize: "text-5xl",
      nonEditable: true,
    },
    displayName: "Collection Title",
    custom: {
      description: `Title for ${collection.name} collection`,
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: sectionNodeId,
  }

  // Create a simple flex container for all items
  const itemsContainerId = generateNodeId()
  layout[itemsContainerId] = {
    type: { resolvedName: "Flex" },
    isCanvas: true,
    props: {
      flexDirection: "column",
      gap: "gap-8",
      width: "100%",
      margin: "mt-8",
      nonEditable: true,
    },
    displayName: `${collection.name} Items Container`,
    custom: {
      description: `Container for ${collection.name} collection items`,
      cmsCollectionId: collection._id,
      isDynamicCMSCollection: true,
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: sectionNodeId,
  }

  // Generate items using the populated card layout
  const itemsToShow = Math.min(sampleItems?.length || 6, 9)
  const itemsToRender = sampleItems?.slice(0, itemsToShow) || []

  itemsToRender.forEach((item, index) => {
    // Create a simple Card wrapper that references the component
    const cardWrapperId = generateNodeId()
    
    layout[cardWrapperId] = {
      type: { resolvedName: "Card" },
      isCanvas: true,
      props: {
        className: "w-full",
        nonEditable: false, // Allow double-click navigation and allow content editing
        collectionId: collection._id,
        projectId: projectId,
        collectionName: collection.name,
        componentSlug: componentSlug,
        padding: "24px",
        margin: "mb-6",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        shadow: "md",
      },
      displayName: `${collection.name} Item ${index + 1}`,
      custom: {
        description: `Collection item ${index + 1} - Double-click to edit component`,
        cmsCollectionId: collection._id,
        cmsItemId: item._id,
        isDynamicCMSItem: true,
      },
      hidden: false,
      nodes: [], // Empty - will be populated by the component at runtime
      linkedNodes: {},
      parent: itemsContainerId,
    }

    layout[itemsContainerId].nodes.push(cardWrapperId)
  })

  // If no sample items, show a placeholder
  if (itemsToRender.length === 0) {
    const placeholderNodeId = generateNodeId()
    layout[placeholderNodeId] = {
      type: { resolvedName: "Text" },
      isCanvas: false,
      props: {
        text: `No ${collection.name.toLowerCase()} items found. Add some items to see them here.`,
        textAlign: "text-center",
        margin: "py-12",
        color: "#6b7280",
        fontSize: "text-lg",
        fontStyle: "italic",
        nonEditable: true,
      },
      displayName: "No Items Placeholder",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
      parent: itemsContainerId,
    }
    layout[itemsContainerId].nodes.push(placeholderNodeId)
  }

  layout[sectionNodeId].nodes.push(titleNodeId)
  layout[sectionNodeId].nodes.push(itemsContainerId)

  return layout
}

// Generate index layout with populated cards (takes cards from component layout)
export const generateCMSIndexLayoutWithPopulatedCards = (
  collection: Collection,
  sampleItems?: CollectionItem[],
  projectId?: string,
  componentSlug?: string,
  cardLayout?: CraftLayout
): CraftLayout => {
  const layout: CraftLayout = {
    ROOT: {
      type: { resolvedName: "Container" },
      isCanvas: true,
      props: {
        padding: "p-10",
        backgroundColor: "#ffffff",
      },
      displayName: "Container",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  }

  const rootNodeId = "ROOT"
  const sectionNodeId = generateNodeId()

  // Create main section container
  layout[sectionNodeId] = {
    type: { resolvedName: "Section" },
    isCanvas: true,
    props: {
      padding: "py-16 px-5",
      backgroundColor: "#ffffff",
      width: "100%",
      margin: "mx-auto",
      hasContentWrapper: true,
      contentMaxWidth: "7xl",
      // nonEditable: true,
    },
    displayName: "Section",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: rootNodeId,
  }

  layout.ROOT.nodes.push(sectionNodeId)

  // Add collection title
  const titleNodeId = generateNodeId()
  layout[titleNodeId] = {
    type: { resolvedName: "Heading" },
    isCanvas: false,
    props: {
      text: collection.name,
      level: "h1",
      textAlign: "text-center",
      margin: "mb-12",
      color: "#1a1a1a",
      fontWeight: "font-bold",
      fontSize: "text-5xl",
      // nonEditable: true,
    },
    displayName: "Collection Title",
    custom: {
      description: `Title for ${collection.name} collection`,
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: sectionNodeId,
  }

  // Create a simple flex container for all items
  const itemsContainerId = generateNodeId()
  layout[itemsContainerId] = {
    type: { resolvedName: "Flex" },
    isCanvas: true,
    props: {
      flexDirection: "column",
      gap: "gap-8",
      width: "100%",
      margin: "mt-8",
      // nonEditable: true,
    },
    displayName: `${collection.name} Items Container`,
    custom: {
      description: `Container for ${collection.name} collection items`,
      cmsCollectionId: collection._id,
      isDynamicCMSCollection: true,
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: sectionNodeId,
  }

  // Generate items using the populated card from the component layout
  const itemsToShow = Math.min(sampleItems?.length || 6, 9)
  const itemsToRender = sampleItems?.slice(0, itemsToShow) || []

  if (cardLayout && cardLayout.ROOT && cardLayout.ROOT.nodes.length > 0) {
    // Get the populated card from the component layout
    const originalCardId = cardLayout.ROOT.nodes[0]
    const originalCard = cardLayout[originalCardId]

    itemsToRender.forEach((item, index) => {
      // Clone the populated card for each item
      const newCardId = generateNodeId()
      
      // Copy the populated card structure
      layout[newCardId] = {
        ...originalCard,
        parent: itemsContainerId,
        custom: {
          ...originalCard.custom,
          description: `Collection item ${index + 1} - Double-click to edit component`,
          cmsItemId: item._id,
          isDynamicCMSItem: true,
        },
        displayName: `${collection.name} Item ${index + 1}`,
        props: {
          ...originalCard.props,
          componentSlug: componentSlug, // Ensure componentSlug is set
        }
      }

      // Copy all child nodes from the original card
      const childNodeIds: string[] = []
      originalCard.nodes.forEach((originalChildId: string) => {
        const newChildId = generateNodeId()
        childNodeIds.push(newChildId)
        
        // Clone the child node
        layout[newChildId] = {
          ...cardLayout[originalChildId],
          parent: newCardId,
        }
      })
      
      layout[newCardId].nodes = childNodeIds
      layout[itemsContainerId].nodes.push(newCardId)
    })
  } else {
    // Fallback: create empty cards if no component layout provided
    itemsToRender.forEach((item, index) => {
      const cardWrapperId = generateNodeId()
      
      layout[cardWrapperId] = {
        type: { resolvedName: "Card" },
        isCanvas: true,
        props: {
          className: "w-full",
          nonEditable: false,
          collectionId: collection._id,
          projectId: projectId,
          collectionName: collection.name,
          componentSlug: componentSlug,
          padding: "24px",
          margin: "mb-6",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          shadow: "md",
        },
        displayName: `${collection.name} Item ${index + 1}`,
        custom: {
          description: `Collection item ${index + 1} - Double-click to edit component`,
          cmsCollectionId: collection._id,
          cmsItemId: item._id,
          isDynamicCMSItem: true,
        },
        hidden: false,
        nodes: [],
        linkedNodes: {},
        parent: itemsContainerId,
      }

      layout[itemsContainerId].nodes.push(cardWrapperId)
    })
  }

  // If no sample items, show a placeholder
  if (itemsToRender.length === 0) {
    const placeholderNodeId = generateNodeId()
    layout[placeholderNodeId] = {
      type: { resolvedName: "Text" },
      isCanvas: false,
      props: {
        text: `No ${collection.name.toLowerCase()} items found. Add some items to see them here.`,
        textAlign: "text-center",
        margin: "py-12",
        color: "#6b7280",
        fontSize: "text-lg",
        fontStyle: "italic",
        nonEditable: true,
      },
      displayName: "No Items Placeholder",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
      parent: itemsContainerId,
    }
    layout[itemsContainerId].nodes.push(placeholderNodeId)
  }

  layout[sectionNodeId].nodes.push(titleNodeId)
  layout[sectionNodeId].nodes.push(itemsContainerId)

  return layout
}
