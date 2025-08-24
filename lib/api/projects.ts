import { apiClient } from "./apiClient";

export interface Project {
  _id: string;
  name: string;
  description?: string;
  slug: string;
  thumbnail?: string;
  owner: {
    _id: string;
    name: string;
    email: string;
    avatar?: string | null;
    id: string;
  };
  template: any | null;
  theme: any | null;
  settings: {
    title?: string;
    description?: string;
    isPublic?: boolean;
    seo?: {
      keywords: string[];
      twitterCard?: string;
    };
  };
  deployment: {
    status: 'draft' | 'published' | 'archived';
    buildLogs: any[];
  };
  stats: {
    views: number;
    uniqueVisitors: number;
  };
  backup: {
    autoBackup: boolean;
    backupFrequency: string;
  };
  collaborators: any[];
  isActive: boolean;
  isTemplate: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
  id: string;
}

export interface ProjectQuery {
  page?: number;
  limit?: number;
  search?: string;
  status?: 'draft' | 'published' | 'archived';
  sort?: 'newest' | 'oldest' | 'updated' | 'name';
}

export interface ProjectsResponse {
  success: boolean;
  message: string;
  data: {
    projects: Project[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalCount: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export interface ProjectResponse {
  success: boolean;
  message: string;
  data: {
    project: Project;
  };
}

export interface CreateProjectRequest {
  name: string;
  description?: string;
  templateId?: string;
  themeId?: string;
}

export interface UpdateProjectRequest {
  name?: string;
  description?: string;
  thumbnail?: string;
  settings?: Partial<Project['settings']>;
  deployment?: Partial<Project['deployment']>;
}

export const projectsApi = {
  getProjects: async (query: ProjectQuery = {}): Promise<ProjectsResponse> => {
    const params = new URLSearchParams();
    
    if (query.page) params.append('page', query.page.toString());
    if (query.limit) params.append('limit', query.limit.toString());
    if (query.search) params.append('search', query.search);
    if (query.status) params.append('status', query.status);
    if (query.sort) params.append('sort', query.sort);

    return await apiClient.get(`/projects?${params.toString()}`);
  },

  getProject: async (id: string): Promise<ProjectResponse> => {
    return await apiClient.get(`/projects/${id}`);
  },

  createProject: async (projectData: CreateProjectRequest): Promise<ProjectResponse> => {
    return await apiClient.post("/projects", projectData);
  },

  updateProject: async (id: string, projectData: UpdateProjectRequest): Promise<ProjectResponse> => {
    return await apiClient.put(`/projects/${id}`, projectData);
  },

  deleteProject: async (id: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.delete(`/projects/${id}`);
  },

  duplicateProject: async (id: string, name?: string): Promise<ProjectResponse> => {
    return await apiClient.post(`/projects/${id}/duplicate`, { name });
  },

  publishProject: async (id: string): Promise<ProjectResponse> => {
    return await apiClient.post(`/projects/${id}/publish`);
  },

  unpublishProject: async (id: string): Promise<ProjectResponse> => {
    return await apiClient.post(`/projects/${id}/unpublish`);
  },

  addCollaborator: async (id: string, email: string, role: 'editor' | 'viewer' = 'editor'): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post(`/projects/${id}/collaborators`, { email, role });
  },

  removeCollaborator: async (id: string, userId: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.delete(`/projects/${id}/collaborators/${userId}`);
  },

  exportProject: async (id: string, format: 'html' | 'react' | 'wordpress' = 'html'): Promise<{ success: boolean; downloadUrl: string }> => {
    return await apiClient.post(`/projects/${id}/export`, { format });
  }
};
