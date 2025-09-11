import { apiClient } from "./apiClient";

export interface Component {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  type: "cms-collection" | "hero" | "card" | "section" | "custom";
  project: string;
  layout: any;
  config?: {
    collection?: string;
    collectionName?: string;
    fieldMappings?: Record<string, string>;
    displayOptions?: {
      showImage?: boolean;
      showDate?: boolean;
      showAuthor?: boolean;
      showCategory?: boolean;
      showExcerpt?: boolean;
      excerptLength?: number;
      imageHeight?: string;
    };
    itemsToShow?: number;
    columns?: number;
    gap?: string;
    backgroundColor?: string;
    cardBackground?: string;
    primaryColor?: string;
    accentColor?: string;
    textColor?: string;
  };
  tags?: string[];
  isPublic?: boolean;
  isTemplate?: boolean;
  usageCount?: number;
  lastUsed?: string;
  version?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateComponentData {
  name: string;
  slug?: string;
  description?: string;
  type: "cms-collection" | "hero" | "card" | "section" | "custom";
  projectId: string;
  layout: any;
  config?: Component["config"];
  tags?: string[];
  isPublic?: boolean;
  isTemplate?: boolean;
}

export interface UpdateComponentData {
  name?: string;
  description?: string;
  layout?: any;
  config?: Component["config"];
  tags?: string[];
  isPublic?: boolean;
  isTemplate?: boolean;
}

export interface DuplicateComponentData {
  newName: string;
  newProjectId?: string;
}

export interface GetComponentsParams {
  projectId: string;
  type?: string;
  isPublic?: boolean;
  isTemplate?: boolean;
  limit?: number;
  page?: number;
}

export interface GetComponentsResponse {
  success: boolean;
  message: string;
  data: {
    components: Component[];
    pagination: {
      page: number;
      limit: number;
      total: number;
      pages: number;
    };
  };
}

export interface GetComponentResponse {
  success: boolean;
  message: string;
  data: {
    component: Component;
  };
}

export interface CreateComponentResponse {
  success: boolean;
  message: string;
  data: {
    component: Component;
  };
}

export interface UpdateComponentResponse {
  success: boolean;
  message: string;
  data: {
    component: Component;
  };
}

export interface DuplicateComponentResponse {
  success: boolean;
  message: string;
  data: {
    component: Component;
  };
}

export interface IncrementUsageResponse {
  success: boolean;
  message: string;
  data: {
    usageCount: number;
  };
}

// Get all components for a project
export const getComponents = async (params: GetComponentsParams): Promise<GetComponentsResponse> => {
  return  await apiClient.get("/components", { params });
  
};

// Get component by ID
export const getComponent = async (id: string): Promise<GetComponentResponse> => {
  return await apiClient.get(`/components/${id}`);
};

// Get component by slug
export const getComponentBySlug = async (slug: string, projectId: string): Promise<GetComponentResponse> => {
  return  await apiClient.get(`/components/slug/${slug}`, {
    params: { projectId }
  });
};

// Get components by type
export const getComponentsByType = async (type: string, projectId: string): Promise<GetComponentsResponse> => {
  return  await apiClient.get(`/components/type/${type}`, {
    params: { projectId }
  });
  
};

// Get CMS collection components
export const getCMSCollectionComponents = async (projectId: string, collectionId?: string): Promise<GetComponentsResponse> => {
  return  await apiClient.get("/components/cms-collections", {
    params: { projectId, collectionId }
  });
  
};

// Create new component
export const createComponent = async (data: CreateComponentData): Promise<CreateComponentResponse> => {
  return  await apiClient.post("/components", data);
  
};

// Update component
export const updateComponent = async (id: string, data: UpdateComponentData): Promise<UpdateComponentResponse> => {
  return  await apiClient.put(`/components/${id}`, data);
  
};

// Delete component
export const deleteComponent = async (id: string): Promise<{ success: boolean; message: string }> => {
  return  await apiClient.delete(`/components/${id}`);
  
};

// Duplicate component
export const duplicateComponent = async (id: string, data: DuplicateComponentData): Promise<DuplicateComponentResponse> => {
  return  await apiClient.post(`/components/${id}/duplicate`, data);
  
};

// Increment usage count
export const incrementUsage = async (id: string): Promise<IncrementUsageResponse> => {
  return  await apiClient.post(`/components/${id}/increment-usage`);
  
};

// Helper function to create a CMS collection component
export const createCMSCollectionComponent = async (
  projectId: string,
  collectionId: string,
  collectionName: string,
  layout: any,
  config: Component["config"] = {},
  slug?: string
): Promise<CreateComponentResponse> => {
  const componentData: CreateComponentData = {
    name: `${collectionName} Collection`,
    description: `CMS collection component for ${collectionName}`,
    type: "cms-collection",
    projectId,
    layout,
    config: {
      collection: collectionId,
      collectionName,
      itemsToShow: 3,
      columns: 3,
      gap: "gap-8",
      backgroundColor: "#fdf7f3",
      cardBackground: "#ffffff",
      primaryColor: "#481E0B",
      accentColor: "#E67E22",
      textColor: "#333333",
      ...config,
    },
    tags: ["cms", "collection", collectionName.toLowerCase()],
    ...(slug && { slug }),
  };

  return createComponent(componentData);
};

// Helper function to get or create CMS collection component
export const getOrCreateCMSCollectionComponent = async (
  projectId: string,
  collectionId: string,
  collectionName: string,
  layout: any,
  config: Component["config"] = {},
  slug?: string
): Promise<Component> => {
  try {
    // Always create a new component with the provided slug
    // This ensures each design gets its own unique component
    if (!slug) {
      throw new Error("Slug is required for CMS collection component creation");
    }
    
    const newComponent = await createCMSCollectionComponent(
      projectId,
      collectionId,
      collectionName,
      layout,
      config,
      slug
    );
    return newComponent.data.component;
  } catch (error) {
    console.error("Error creating CMS collection component:", error);
    throw error;
  }
};

