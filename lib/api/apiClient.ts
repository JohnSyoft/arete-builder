"use client";

import axios from "axios";
import { API_BASE_URL } from "../config";

const getToken = () => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("areteToken");
  }
  return null;
};

const setToken = (token: string) => {
  if (typeof window !== "undefined" && token) {
    localStorage.setItem("areteToken", token);
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

const clearToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("areteToken");
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to automatically add token
apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  async (error) => {
    console.log(error)
    // Only redirect on 401 for protected routes, not for auth endpoints
    if (error.response?.status === 401 && 
        !error.config?.url?.includes("/auth/login") && 
        !error.config?.url?.includes("/auth/register")) {
      clearToken();
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error.response?.data || error);
  }
);

// Export utility functions
export const auth = {
  setToken,
  getToken,
  clearToken,
};

export default apiClient;
