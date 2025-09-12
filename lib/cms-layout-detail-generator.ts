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

// Generate default CMS detail page layout based on collection fields and first item
export const generateCMSDetailLayout = (
  collection: Collection,
  firstItem?: CollectionItem
): CraftLayout => {
  const layout: CraftLayout = {
    ROOT: {
      type: { resolvedName: "Container" },
      isCanvas: true,
      props: {
        padding: "0px",
        backgroundColor: "#ffffffff",
        minHeight: "100vh",
        width: "100%",
      },
      displayName: "Container",
      custom: {},
      hidden: false,
      nodes: [],
      linkedNodes: {},
    },
  }

  const rootNodeId = "ROOT"
  const outerSectionNodeId = generateNodeId()
  const contentSectionNodeId = generateNodeId()

  // Create outer section for full-width background
  layout[outerSectionNodeId] = {
    type: { resolvedName: "Section" },
    isCanvas: true,
    props: {
      backgroundColor: "#ffffffff",
      padding: "32px",
      width: "100%",
      minHeight: "100vh",
      hasContentWrapper: true,
      contentMaxWidth: "7xl",
      contentPadding: "px-4 sm:px-6 lg:px-8 py-24 lg:py-32",
    },
    displayName: "Outer Section",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: rootNodeId,
  }

  // Create inner content section container
  layout[contentSectionNodeId] = {
    type: { resolvedName: "Section" },
    isCanvas: true,
    props: {
      backgroundColor: "#ffffff",
      padding: "48px",
      width: "100%",
      margin: "0px",
      hasContentWrapper: false,
    },
    displayName: "Content Section",
    custom: {},
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: outerSectionNodeId,
  }

  layout.ROOT.nodes.push(outerSectionNodeId)
  layout[outerSectionNodeId].nodes.push(contentSectionNodeId)

  // Get sample data from first item
  const sampleData = firstItem?.data || {}
  // Helper function to identify title-like fields by name
  const isTitleField = (field: Field): boolean => {
    const titlePatterns = ['title', 'name', 'heading', 'subject', 'headline']
    return titlePatterns.some(pattern => 
      field.name.toLowerCase().includes(pattern.toLowerCase())
    )
  }

  // Helper function to identify slug fields by name
  const isSlugField = (field: Field): boolean => {
    const slugPatterns = ['slug', 'url', 'permalink']
    return slugPatterns.some(pattern => 
      field.name.toLowerCase().includes(pattern.toLowerCase())
    )
  }

  // Generate content based on field order
  const orderedFields = [...collection.fields].sort((a, b) => {
    // Title-like fields first, then content, then others
    const getFieldPriority = (field: Field) => {
      // Check for title patterns in field names
      if (isTitleField(field)) return 1
      // Check for slug patterns (usually hidden)
      if (isSlugField(field)) return 10
      // Field type priorities
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

  // Add components for each field
  orderedFields.forEach((field) => {
    console.log({field})
    if (isSlugField(field)) return // Skip slug fields in detail view
    
    const fieldNodeId = generateNodeId()
    const sampleValue = sampleData[field.name]
    
    // Handle title-like fields (regardless of actual type)
    if (isTitleField(field)) {
      layout[fieldNodeId] = {
        type: { resolvedName: "Heading" },
        isCanvas: false,
        props: {
          text: sampleValue || field.placeholder || `Sample ${field.name}`,
          level: "h1",
          textAlign: "text-left",
          margin: "mb-10",
          textColor: "#111827",
          fontWeight: "font-extrabold",
          fontSize: "text-5xl",
          lineHeight: "leading-tight",
          fontFamily: "font-sans",
          ...createCMSFieldProps(field, collection),
        },
        displayName: `${field.name} (Title)`,
        custom: {},
        hidden: false,
        nodes: [],
        linkedNodes: {},
        parent: contentSectionNodeId,
      }
    }
    // Handle other field types
    else {
      switch (field.type) {
        case 'image':
          // Always create image component for image fields, regardless of sample data
          layout[fieldNodeId] = {
            type: { resolvedName: "Image" },
            isCanvas: false,
            props: {
              src: sampleValue || field.placeholder || "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              alt: `${field.name} image`,
              width: "100%",
              height: "500px",
              objectFit: "object-cover",
              borderRadius: "rounded-2xl",
              margin: "mb-10",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Image)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
          layout[contentSectionNodeId].nodes.push(fieldNodeId)
          break

        case 'date':
        case 'datetime':
          if (sampleValue || field.defaultValue) {
            const dateValue = sampleValue 
              ? new Date(sampleValue).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  ...(field.type === 'datetime' && { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })
                })
              : new Date().toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  ...(field.type === 'datetime' && { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })
                })

            layout[fieldNodeId] = {
              type: { resolvedName: "Text" },
              isCanvas: false,
              props: {
                text: dateValue,
                textAlign: "text-left",
                margin: "mb-8",
                color: "text-gray-500",
                fontSize: "text-base",
                fontWeight: "font-medium",
                letterSpacing: "tracking-wide",
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (${field.type === 'datetime' ? 'Date & Time' : 'Date'})`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: contentSectionNodeId,
            }
          }
          break

        case 'formattedText':
          layout[fieldNodeId] = {
            type: { resolvedName: "FormattedText" },
            isCanvas: false,
            props: {
              text: sampleValue || field.placeholder || `This is sample content for the ${field.name} field. In a real CMS detail page, this would display the actual content from your collection item. You can style this text and add more components as needed.`,
              textAlign: "text-left",
              margin: "mb-10",
              color: "text-gray-700",
              fontSize: "text-lg",
              lineHeight: "leading-7",
              fontFamily: "font-sans",
              ...createCMSFieldProps(field, collection),
            },
          displayName: `${field.name} (Content)`,
          custom: {},
          hidden: false,
          nodes: [],
          linkedNodes: {},
          parent: contentSectionNodeId,
        }
        break

      case 'plainText':
        if (sampleValue || field.placeholder) {
          layout[fieldNodeId] = {
            type: { resolvedName: "Text" },
            isCanvas: false,
            props: {
              text: sampleValue || field.placeholder || `Sample ${field.name}`,
              textAlign: "text-left",
              margin: "mb-7",
              color: "text-gray-600",
              fontSize: "text-base",
              lineHeight: "leading-relaxed",
              fontFamily: "font-sans",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Text)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
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
              margin: "mb-7",
              color: "text-gray-900",
              fontSize: "text-lg",
              fontWeight: "font-semibold",
              padding: "px-4 py-2",
              backgroundColor: "bg-gray-100",
              borderRadius: "rounded-lg",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Number)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
        }
        break

      case 'link':
        if (sampleValue || field.placeholder) {
          layout[fieldNodeId] = {
            type: { resolvedName: "Link" },
            isCanvas: false,
            props: {
              href: sampleValue || field.placeholder || "#",
              text: `Visit ${field.name}`,
              target: "_blank",
              color: "text-blue-600",
              margin: "mb-7",
              fontSize: "text-base",
              textDecoration: "underline",
              fontWeight: "font-medium",
              padding: "px-4 py-2",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Link)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
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
              margin: "mb-7",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Toggle)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
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
              margin: "mb-7",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (Option)`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
        }
        break

        case 'gallery':
          if (sampleValue && Array.isArray(sampleValue) && sampleValue.length > 0) {
            // Create a flex container for gallery
            const galleryContainerId = generateNodeId()
            layout[galleryContainerId] = {
              type: { resolvedName: "Flex" },
              isCanvas: true,
              props: {
                flexDirection: "row",
                gap: "gap-5",
                wrap: "wrap",
                margin: "mb-10",
                padding: "p-4",
              },
              displayName: `${field.name} (Gallery)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: contentSectionNodeId,
            }

            // Add images to gallery (max 3 for layout)
            sampleValue.slice(0, 3).forEach((imageUrl: string, index: number) => {
              const imageNodeId = generateNodeId()
              layout[imageNodeId] = {
                type: { resolvedName: "Image" },
                isCanvas: false,
                props: {
                  src: imageUrl,
                  alt: `${field.name} image ${index + 1}`,
                  width: "250px",
                  height: "200px",
                  objectFit: "object-cover",
                  borderRadius: "rounded-lg",
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

            layout[contentSectionNodeId].nodes.push(galleryContainerId)
            return // Skip adding fieldNodeId since we created a container
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
                margin: "mb-7",
                color: "text-gray-700",
                fontSize: "text-base",
                padding: "px-4 py-2",
                backgroundColor: "bg-gray-50",
                borderRadius: "rounded-lg",
                ...createCMSFieldProps(field, collection),
              },
        displayName: `${field.name} (Color)`,
        custom: {},
        hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: contentSectionNodeId,
            }
          }
          break

        case 'file':
          if (sampleValue || field.placeholder) {
            layout[fieldNodeId] = {
              type: { resolvedName: "Link" },
              isCanvas: false,
              props: {
                href: sampleValue || field.placeholder || "#",
                text: `📁 Download ${field.name}`,
                target: "_blank",
                color: "text-blue-600",
                margin: "mb-7",
                fontSize: "text-base",
                textDecoration: "underline",
                fontWeight: "font-medium",
                padding: "px-4 py-2",
                backgroundColor: "bg-blue-50",
                borderRadius: "rounded-lg",
                ...createCMSFieldProps(field, collection),
              },
              displayName: `${field.name} (File)`,
              custom: {},
              hidden: false,
              nodes: [],
              linkedNodes: {},
              parent: contentSectionNodeId,
            }
          }
          break

        case 'reference':
        case 'multiReference':
          if (sampleValue) {
            // Helper function to extract display data from reference object
            const getRefDisplayData = (refObj: any) => {
              if (!refObj || typeof refObj !== 'object') return { title: String(refObj), subtitle: '', image: '' }
              
              let title = ''
              let subtitle = ''
              let image = ''
              let date = ''
              
              // Check for title-like fields in the reference data
              if (refObj.data && typeof refObj.data === 'object') {
                const titlePatterns = ['title', 'name', 'heading', 'subject', 'headline']
                const subtitlePatterns = ['description', 'excerpt', 'summary', 'subtitle']
                const imagePatterns = ['image', 'photo', 'picture', 'thumbnail']
                const datePatterns = ['date', 'created', 'published', 'updated']
                
                // Find title
                for (const pattern of titlePatterns) {
                  for (const key in refObj.data) {
                    if (key.toLowerCase().includes(pattern.toLowerCase()) && refObj.data[key]) {
                      title = refObj.data[key]
                      break
                    }
                  }
                  if (title) break
                }
                
                // Find subtitle/description
                for (const pattern of subtitlePatterns) {
                  for (const key in refObj.data) {
                    if (key.toLowerCase().includes(pattern.toLowerCase()) && refObj.data[key]) {
                      subtitle = refObj.data[key]
                      break
                    }
                  }
                  if (subtitle) break
                }
                
                // Find image
                for (const pattern of imagePatterns) {
                  for (const key in refObj.data) {
                    if (key.toLowerCase().includes(pattern.toLowerCase()) && refObj.data[key]) {
                      image = refObj.data[key]
                      break
                    }
                  }
                  if (image) break
                }
                
                // Find date
                for (const pattern of datePatterns) {
                  for (const key in refObj.data) {
                    if (key.toLowerCase().includes(pattern.toLowerCase()) && refObj.data[key]) {
                      date = refObj.data[key]
                      break
                    }
                  }
                  if (date) break
                }
              }
              
              // Fall back to slug if no title found
              if (!title && refObj.slug) title = refObj.slug
              
              // Last resort: use _id
              if (!title) title = refObj._id || 'Reference'
              
              return { title, subtitle, image, date }
            }

            if (Array.isArray(sampleValue)) {
              // For multiple references, create a flex container with cards
              const referencesContainerId = generateNodeId()
              layout[referencesContainerId] = {
                type: { resolvedName: "Flex" },
                isCanvas: true,
                props: {
                  flexDirection: "row",
                  gap: "gap-4",
                  wrap: "wrap",
                  margin: "mb-10",
                },
                displayName: `${field.name} (References)`,
                custom: { 
                  cmsField: field.name,
                  fieldType: field.type,
                  fieldLabel: field.name.charAt(0).toUpperCase() + field.name.slice(1),
                },
                hidden: false,
                nodes: [],
                linkedNodes: {},
                parent: contentSectionNodeId,
              }

              // Add cards for each reference (max 3 for layout)
              sampleValue.slice(0, 3).forEach((refObj: any, index: number) => {
                const refData = getRefDisplayData(refObj)
                const refCardId = generateNodeId()
                
                layout[refCardId] = {
                  type: { resolvedName: "Card" },
                  isCanvas: true,
                  props: {
                    padding: "p-4",
                    borderRadius: "rounded-lg",
                    backgroundColor: "bg-white",
                    border: "border border-gray-200",
                    shadow: "shadow-sm",
                    width: "w-72",
                    margin: "mb-0",
                  },
                  displayName: `Reference Card ${index + 1}`,
                  custom: {},
                  hidden: false,
                  nodes: [],
                  linkedNodes: {},
                  parent: referencesContainerId,
                }
                
                let cardContentNodes = []
                
                // Add image if available
                if (refData.image) {
                  const imageNodeId = generateNodeId()
                  layout[imageNodeId] = {
                    type: { resolvedName: "Image" },
                    isCanvas: false,
                    props: {
                      src: refData.image,
                      alt: refData.title,
                      width: "100%",
                      height: "120px",
                      objectFit: "object-cover",
                      borderRadius: "rounded-md",
                      margin: "mb-3",
                    },
                    displayName: "Reference Image",
                    custom: {},
                    hidden: false,
                    nodes: [],
                    linkedNodes: {},
                    parent: refCardId,
                  }
                  cardContentNodes.push(imageNodeId)
                }
                
                // Add title
                const titleNodeId = generateNodeId()
                layout[titleNodeId] = {
                  type: { resolvedName: "Text" },
                  isCanvas: false,
                  props: {
                    text: refData.title,
                    fontSize: "text-sm",
                    fontWeight: "font-semibold",
                    color: "text-gray-900",
                    margin: "mb-2",
                    lineHeight: "leading-tight",
                  },
                  displayName: "Reference Title",
                  custom: {},
                  hidden: false,
                  nodes: [],
                  linkedNodes: {},
                  parent: refCardId,
                }
                cardContentNodes.push(titleNodeId)
                
                // Add subtitle if available
                if (refData.subtitle) {
                  const subtitleNodeId = generateNodeId()
                  layout[subtitleNodeId] = {
                    type: { resolvedName: "Text" },
                    isCanvas: false,
                    props: {
                      text: refData.subtitle.length > 60 ? refData.subtitle.substring(0, 60) + '...' : refData.subtitle,
                      fontSize: "text-xs",
                      color: "text-gray-600",
                      margin: "mb-2",
                      lineHeight: "leading-relaxed",
                    },
                    displayName: "Reference Subtitle",
                    custom: {},
                    hidden: false,
                    nodes: [],
                    linkedNodes: {},
                    parent: refCardId,
                  }
                  cardContentNodes.push(subtitleNodeId)
                }
                
                // Add date if available
                if (refData.date) {
                  const dateNodeId = generateNodeId()
                  const formattedDate = new Date(refData.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })
                  layout[dateNodeId] = {
                    type: { resolvedName: "Text" },
                    isCanvas: false,
                    props: {
                      text: formattedDate,
                      fontSize: "text-xs",
                      color: "text-gray-500",
                      margin: "mb-0",
                      fontWeight: "font-medium",
                    },
                    displayName: "Reference Date",
                    custom: {},
                    hidden: false,
                    nodes: [],
                    linkedNodes: {},
                    parent: refCardId,
                  }
                  cardContentNodes.push(dateNodeId)
                }
                
                layout[refCardId].nodes = cardContentNodes
                layout[referencesContainerId].nodes.push(refCardId)
              })

              layout[contentSectionNodeId].nodes.push(referencesContainerId)
              return // Skip adding fieldNodeId since we created a container
            } else {
              // For single reference, create a single card
              const refData = getRefDisplayData(sampleValue)
              
              layout[fieldNodeId] = {
                type: { resolvedName: "Card" },
                isCanvas: true,
                props: {
                  padding: "p-6",
                  borderRadius: "rounded-lg",
                  backgroundColor: "bg-white",
                  border: "border border-gray-200",
                  shadow: "shadow-sm",
                  margin: "mb-7",
                  maxWidth: "max-w-md",
                },
                displayName: `${field.name} (Reference)`,
                custom: { 
                  cmsField: field.name,
                  fieldType: field.type,
                  fieldLabel: field.name.charAt(0).toUpperCase() + field.name.slice(1),
                },
                hidden: false,
                nodes: [],
                linkedNodes: {},
                parent: contentSectionNodeId,
              }
              
              let cardContentNodes = []
              
              // Add image if available
              if (refData.image) {
                const imageNodeId = generateNodeId()
                layout[imageNodeId] = {
                  type: { resolvedName: "Image" },
                  isCanvas: false,
                  props: {
                    src: refData.image,
                    alt: refData.title,
                    width: "100%",
                    height: "160px",
                    objectFit: "object-cover",
                    borderRadius: "rounded-md",
                    margin: "mb-4",
                  },
                  displayName: "Reference Image",
                  custom: {},
                  hidden: false,
                  nodes: [],
                  linkedNodes: {},
                  parent: fieldNodeId,
                }
                cardContentNodes.push(imageNodeId)
              }
              
              // Add title
              const titleNodeId = generateNodeId()
              layout[titleNodeId] = {
                type: { resolvedName: "Text" },
                isCanvas: false,
                props: {
                  text: refData.title,
                  fontSize: "text-lg",
                  fontWeight: "font-semibold",
                  color: "text-gray-900",
                  margin: "mb-3",
                  lineHeight: "leading-tight",
                },
                displayName: "Reference Title",
                custom: {},
                hidden: false,
                nodes: [],
                linkedNodes: {},
                parent: fieldNodeId,
              }
              cardContentNodes.push(titleNodeId)
              
              // Add subtitle if available
              if (refData.subtitle) {
                const subtitleNodeId = generateNodeId()
                layout[subtitleNodeId] = {
                  type: { resolvedName: "Text" },
                  isCanvas: false,
                  props: {
                    text: refData.subtitle,
                    fontSize: "text-sm",
                    color: "text-gray-600",
                    margin: "mb-3",
                    lineHeight: "leading-relaxed",
                  },
                  displayName: "Reference Subtitle",
                  custom: {},
                  hidden: false,
                  nodes: [],
                  linkedNodes: {},
                  parent: fieldNodeId,
                }
                cardContentNodes.push(subtitleNodeId)
              }
              
              // Add date if available
              if (refData.date) {
                const dateNodeId = generateNodeId()
                const formattedDate = new Date(refData.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })
                layout[dateNodeId] = {
                  type: { resolvedName: "Text" },
                  isCanvas: false,
                  props: {
                    text: formattedDate,
                    fontSize: "text-sm",
                    color: "text-gray-500",
                    margin: "mb-0",
                    fontWeight: "font-medium",
                  },
                  displayName: "Reference Date",
                  custom: {},
                  hidden: false,
                  nodes: [],
                  linkedNodes: {},
                  parent: fieldNodeId,
                }
                cardContentNodes.push(dateNodeId)
              }
              
              layout[fieldNodeId].nodes = cardContentNodes
            }
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
              margin: "mb-7",
              color: "text-gray-600",
              fontSize: "text-base",
              lineHeight: "leading-relaxed",
              fontFamily: "font-sans",
              ...createCMSFieldProps(field, collection),
            },
            displayName: `${field.name} (${field.type})`,
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
            parent: contentSectionNodeId,
          }
        }
      }
    }

    // Add the field node to the section (if it was created)
    if (layout[fieldNodeId]) {
      layout[contentSectionNodeId].nodes.push(fieldNodeId)
    }
  })

  // Add a back navigation button at the top
  const backButtonId = generateNodeId()
  layout[backButtonId] = {
    type: { resolvedName: "Button" },
    isCanvas: false,
    props: {
      text: `← Back to ${collection.name}`,
      variant: "outline",
      size: "sm",
      margin: "mb-12",
      width: "w-auto",
    },
    displayName: "Back Button",
    custom: {
      description: "Navigation back to collection index",
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: contentSectionNodeId,
  }

  // Insert back button at the beginning
  layout[contentSectionNodeId].nodes.unshift(backButtonId)
  return layout
}

