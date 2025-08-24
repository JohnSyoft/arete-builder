import { apiClient } from "./apiClient";

export interface Template {
  _id: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  previewImages: string[];
  layout: any; // Craft.js serialized state
  pages: {
    name: string;
    slug: string;
    layout: any;
    isHomePage: boolean;
  }[];
  tags: string[];
  featured: boolean;
  price: number;
  creator: string;
  downloadCount: number;
  rating: {
    average: number;
    count: number;
  };
  reviews: any[];
  createdAt: string;
  updatedAt: string;
}

export interface TemplateQuery {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
  featured?: boolean;
  tags?: string[];
  sort?: 'newest' | 'popular' | 'rating' | 'downloads';
}

export interface TemplatesResponse {
  success: boolean;
  message: string;
  data: {
    templates: Template[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalTemplates: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export interface TemplateResponse {
  success: boolean;
  message: string;
  data: {
    template: Template;
  };
}

export const templatesApi = {
  getTemplates: async (query: TemplateQuery = {}): Promise<TemplatesResponse> => {
    const params = new URLSearchParams();
    
    if (query.category) params.append('category', query.category);
    if (query.page) params.append('page', query.page.toString());
    if (query.limit) params.append('limit', query.limit.toString());
    if (query.search) params.append('search', query.search);
    if (query.featured) params.append('featured', query.featured.toString());
    if (query.tags) query.tags.forEach(tag => params.append('tags', tag));
    if (query.sort) params.append('sort', query.sort);

    return await apiClient.get(`/templates?${params.toString()}`);
  },

  getTemplate: async (id: string): Promise<TemplateResponse> => {
    return await apiClient.get(`/templates/${id}`);
  },

  getFeaturedTemplates: async (): Promise<TemplatesResponse> => {
    return await apiClient.get("/templates/featured");
  },

  getPopularTemplates: async (): Promise<TemplatesResponse> => {
    return await apiClient.get("/templates/popular");
  },

  getTemplatesByCategory: async (category: string, query: TemplateQuery = {}): Promise<TemplatesResponse> => {
    return await templatesApi.getTemplates({ ...query, category });
  },

  searchTemplates: async (searchTerm: string, query: TemplateQuery = {}): Promise<TemplatesResponse> => {
    return await templatesApi.getTemplates({ ...query, search: searchTerm });
  },

  createTemplate: async (templateData: Partial<Template>): Promise<TemplateResponse> => {
    return await apiClient.post("/templates", templateData);
  },

  updateTemplate: async (id: string, templateData: Partial<Template>): Promise<TemplateResponse> => {
    return await apiClient.put(`/templates/${id}`, templateData);
  },

  deleteTemplate: async (id: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.delete(`/templates/${id}`);
  },

  downloadTemplate: async (id: string): Promise<TemplateResponse> => {
    return await apiClient.post(`/templates/${id}/download`);
  },

  rateTemplate: async (id: string, rating: number, review?: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post(`/templates/${id}/rate`, { rating, review });
  }
};
