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

// Generate CMS layouts - returns index page layout with CollectionWrapper
export const generateCMSLayouts = (
  collection: Collection,
  sampleItems?: CollectionItem[],
  cardComponent?: string,
  projectId?: string,
  componentSlug?: string
): { indexLayout: CraftLayout } => {
  // Generate the index page layout with CollectionWrapper
  const indexLayout = generateCMSIndexLayoutWithCollectionWrapper(collection, sampleItems, projectId, componentSlug)
  
  return { indexLayout }
}

// Generate index layout with CollectionWrapper (clean and simple)
export const generateCMSIndexLayoutWithCollectionWrapper = (
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

  // Create CollectionWrapper for the collection items
  const collectionWrapperId = generateNodeId()
  layout[collectionWrapperId] = {
    type: { resolvedName: "CollectionWrapper" },
    isCanvas: true,
    props: {
      collectionId: collection._id,
      projectId: projectId,
      collectionName: collection.name,
      flexDirection: "row",
      gap: "gap-6",
      justifyContent: "start",
      alignItems: "start",
      wrap: "wrap",
      maxItems: Math.min(sampleItems?.length || 6, 9),
      cardDesign: "default",
      titleField: collection.fields.find(f => isTitleField(f))?.name || "title",
      descriptionField: collection.fields.find(f => f.type === 'formattedText' || f.type === 'plainText')?.name || "description",
      imageField: collection.fields.find(f => f.type === 'image')?.name || "image",
      dateField: collection.fields.find(f => f.type === 'date' || f.type === 'datetime')?.name || "date",
      linkField: collection.fields.find(f => f.type === 'link')?.name || "link",
      nonEditable: true,
    },
    displayName: `${collection.name} Collection`,
    custom: {
      description: `Collection wrapper for ${collection.name} items`,
      cmsCollectionId: collection._id,
      isDynamicCMSCollection: true,
    },
    hidden: false,
    nodes: [],
    linkedNodes: {},
    parent: sectionNodeId,
  }

  layout[sectionNodeId].nodes.push(titleNodeId)
  layout[sectionNodeId].nodes.push(collectionWrapperId)

  return layout
}



