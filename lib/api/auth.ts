import { apiClient, auth } from "./apiClient";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      _id: string;
      name: string;
      email: string;
      role: string;
      subscription: string;
    };
    token: string;
  };
}

export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  subscription: string;
}

export const authApi = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await apiClient.post("/auth/login", credentials) as AuthResponse;
    if (response.success && response.data?.token) {
      auth.setToken(response.data.token);
    }
    return response;
  },

  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await apiClient.post("/auth/register", userData) as AuthResponse;
    if (response.success && response.data?.token) {
      auth.setToken(response.data.token);
    }
    return response;
  },

  logout: async (): Promise<void> => {
    try {
      await apiClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      auth.clearToken();
    }
  },

  getCurrentUser: async (): Promise<{ success: boolean; data: { user: User } }> => {
    return await apiClient.get("/auth/me");
  },

  refreshToken: async (): Promise<AuthResponse> => {
    const response = await apiClient.post("/auth/refresh") as AuthResponse;
    if (response.success && response.data?.token) {
      auth.setToken(response.data.token);
    }
    return response;
  },

  forgotPassword: async (email: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post("/auth/forgot-password", { email });
  },

  resetPassword: async (token: string, password: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post("/auth/reset-password", { token, password });
  },

  changePassword: async (currentPassword: string, newPassword: string): Promise<{ success: boolean; message: string }> => {
    return await apiClient.post("/auth/change-password", { currentPassword, newPassword });
  }
};
