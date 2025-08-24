"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { themesApi, type Theme, type ThemeQuery } from '../lib/api/themes';

export const useThemes = (query: ThemeQuery = {}) => {
  return useQuery({
    queryKey: ['themes', query],
    queryFn: () => themesApi.getThemes(query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useTheme = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['theme', id],
    queryFn: () => themesApi.getTheme(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFeaturedThemes = () => {
  return useQuery({
    queryKey: ['themes', 'featured'],
    queryFn: () => themesApi.getFeaturedThemes(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const usePopularThemes = () => {
  return useQuery({
    queryKey: ['themes', 'popular'],
    queryFn: () => themesApi.getPopularThemes(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useThemesByCategory = (category: string, query: ThemeQuery = {}) => {
  return useQuery({
    queryKey: ['themes', 'category', category, query],
    queryFn: () => themesApi.getThemesByCategory(category, query),
    enabled: !!category,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useSearchThemes = (searchTerm: string, query: ThemeQuery = {}) => {
  return useQuery({
    queryKey: ['themes', 'search', searchTerm, query],
    queryFn: () => themesApi.searchThemes(searchTerm, query),
    enabled: !!searchTerm && searchTerm.length > 2,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export const useCreateTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (themeData: Partial<Theme>) => themesApi.createTheme(themeData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
    },
  });
};

export const useUpdateTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, themeData }: { id: string; themeData: Partial<Theme> }) =>
      themesApi.updateTheme(id, themeData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
      queryClient.invalidateQueries({ queryKey: ['theme', variables.id] });
    },
  });
};

export const useDeleteTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => themesApi.deleteTheme(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['themes'] });
      queryClient.removeQueries({ queryKey: ['theme', variables] });
    },
  });
};

export const useDownloadTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => themesApi.downloadTheme(id),
    onSuccess: (data, variables) => {
      // Update the theme's download count
      queryClient.invalidateQueries({ queryKey: ['theme', variables] });
      queryClient.invalidateQueries({ queryKey: ['themes', 'popular'] });
    },
  });
};

export const useRateTheme = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, rating, review }: { id: string; rating: number; review?: string }) =>
      themesApi.rateTheme(id, rating, review),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['theme', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['themes'] });
    },
  });
};
