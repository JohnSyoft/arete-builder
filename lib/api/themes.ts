import { apiClient } from "./apiClient";

export interface Theme {
  _id: string;
  name: string;
  description: string;
  category: string;
  thumbnail: string;
  previewImages: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  typography: {
    fontFamily: string;
    headingWeight: string;
    bodyWeight: string;
    fontSize: {
      base: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
    };
    lineHeight: {
      tight: string;
      normal: string;
      relaxed: string;
    };
  };
  spacing: {
    sectionPadding: string;
    elementSpacing: string;
    containerMaxWidth: string;
  };
  borderRadius: string;
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  animations: {
    duration: string;
    easing: string;
  };
  responsive: {
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  };
  customCSS?: string;
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

export interface ThemeQuery {
  category?: string;
  page?: number;
  limit?: number;
  search?: string;
  featured?: boolean;
  tags?: string[];
  sort?: 'newest' | 'popular' | 'rating' | 'downloads';
}

export interface ThemesResponse {
  success: boolean;
  message: string;
  data: {
    themes: Theme[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalThemes: number;
      hasNext: boolean;
      hasPrev: boolean;
    };
  };
}

export interface ThemeResponse {
  success: boolean;
  message: string;
  data: {
    theme: Theme;
  };
}

export const themesApi = {
  getThemes: async (query: ThemeQuery = {}): Promise<ThemesResponse> => {
    const params = new URLSearchParams();
    
    if (query.category) params.append('category', query.category);
    if (query.page) params.append('page', query.page.toString());
    if (query.limit) params.append('limit', query.limit.toString());
    if (query.search) params.append('search', query.search);
    if (query.featured) params.append('featured', query.featured.toString());
    if (query.tags) query.tags.forEach(tag => params.append('tags', tag));
    if (query.sort) params.append('sort', query.sort);

    return await apiClient.get(`/themes?${params.toString()}`);
  },

  getTheme: async (id: string): Promise<ThemeResponse> => {
    return await apiClient.get(`/themes/${id}`);
  },

  getFeaturedThemes: async (): Promise<ThemesResponse> => {
    return await apiClient.get("/themes/featured");
  },

  getPopularThemes: async (): Promise<ThemesResponse> => {
    return await apiClient.get("/themes/popular");
  },

  getThemesByCategory: async (category: string, query: ThemeQuery = {}): Promise<ThemesResponse> => {
    return await themesApi.getThemes({ ...query, category });
  },

  searchThemes: async (searchTerm: string, query: ThemeQuery = {}): Promise<ThemesResponse> => {
    return await themesApi.getThemes({ ...query, search: searchTerm });
  },

  createTheme: async (themeData: Partial<Theme>): Promise<ThemeResponse> => {
    return await apiClient.post("/themes", themeData);
  },

  updateTheme: async (id: string, themeData: Partial<Theme>): Promise<ThemeResponse> => {
    return await apiClient.put(`/themes/${id}`, themeData);
  },

  deleteTheme: async (id: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.delete(`/themes/${id}`);
  },

  downloadTheme: async (id: string): Promise<ThemeResponse> => {
    return await apiClient.post(`/themes/${id}/download`);
  },

  rateTheme: async (id: string, rating: number, review?: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post(`/themes/${id}/rate`, { rating, review });
  }
};
