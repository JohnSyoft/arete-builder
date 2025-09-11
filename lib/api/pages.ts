import { apiClient } from "./apiClient";

export interface Page {
  _id: string;
  project: string; // Project ID
  name: string;
  slug: string;
  layout: any; // JSON layout structure
  isHomePage: boolean;
  // CMS-specific fields
  pageType?: "normal" | "cms" | "404";
  collection?: string; // Collection ID for CMS pages
  cmsPageType?: "index" | "detail";
  settings?: {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
  };
  customCSS?: string;
  customJS?: string;
  isPublished?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PagesResponse {
  success: boolean;
  message: string;
  data: {
    pages: Page[];
  };
}

export interface PageResponse {
  success: boolean;
  message: string;
  data: {
    page: Page;
  };
}

export interface CreatePageRequest {
  project: string;
  name: string;
  slug?: string;
  layout?: any;
  isHomePage?: boolean;
  // CMS-specific fields
  pageType?: "normal" | "cms" | "404";
  collection?: string; // Changed from collectionId to match backend
  cmsPageType?: "index" | "detail";
}

export interface UpdatePageRequest {
  name?: string;
  slug?: string;
  layout?: any;
  customCSS?: string;
  customJS?: string;
  isHomePage?: boolean;
  isPublished?: boolean;
  settings?: Partial<Page['settings']>;
  // CMS-specific fields
  pageType?: "normal" | "cms" | "404";
  collection?: string;
  cmsPageType?: "index" | "detail";
}

export const pagesApi = {
  getProjectPages: async (projectId: string): Promise<PagesResponse> => {
    return await apiClient.get(`/pages/project/${projectId}`);
  },

  getPage: async (id: string): Promise<PageResponse> => {
    return await apiClient.get(`/pages/${id}`);
  },

  getPageBySlug: async (projectId: string, slug: string): Promise<PageResponse> => {
    return await apiClient.get(`/pages/project/${projectId}/slug/${slug}`);
  },

  // Editor-specific version that handles complex CMS detail page slugs
  getPageBySlugEditor: async (projectId: string, slug: string): Promise<PageResponse> => {
    return await apiClient.post(`/pages/project/${projectId}/editor-slug`, { slug });
  },

  createPage: async (pageData: CreatePageRequest): Promise<PageResponse> => {
    return await apiClient.post("/pages", pageData);
  },

  updatePage: async (id: string, pageData: UpdatePageRequest): Promise<PageResponse> => {
    return await apiClient.put(`/pages/${id}`, pageData);
  },

  deletePage: async (id: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.delete(`/pages/${id}`);
  }
};
