"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { templatesApi, type Template, type TemplateQuery } from '../lib/api/templates';

export const useTemplates = (query: TemplateQuery = {}) => {
  return useQuery({
    queryKey: ['templates', query],
    queryFn: () => templatesApi.getTemplates(query),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useTemplate = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['template', id],
    queryFn: () => templatesApi.getTemplate(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFeaturedTemplates = () => {
  return useQuery({
    queryKey: ['templates', 'featured'],
    queryFn: () => templatesApi.getFeaturedTemplates(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const usePopularTemplates = () => {
  return useQuery({
    queryKey: ['templates', 'popular'],
    queryFn: () => templatesApi.getPopularTemplates(),
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

export const useTemplatesByCategory = (category: string, query: TemplateQuery = {}) => {
  return useQuery({
    queryKey: ['templates', 'category', category, query],
    queryFn: () => templatesApi.getTemplatesByCategory(category, query),
    enabled: !!category,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useSearchTemplates = (searchTerm: string, query: TemplateQuery = {}) => {
  return useQuery({
    queryKey: ['templates', 'search', searchTerm, query],
    queryFn: () => templatesApi.searchTemplates(searchTerm, query),
    enabled: !!searchTerm && searchTerm.length > 2,
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export const useCreateTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (templateData: Partial<Template>) => templatesApi.createTemplate(templateData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
  });
};

export const useUpdateTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, templateData }: { id: string; templateData: Partial<Template> }) =>
      templatesApi.updateTemplate(id, templateData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      queryClient.invalidateQueries({ queryKey: ['template', variables.id] });
    },
  });
};

export const useDeleteTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => templatesApi.deleteTemplate(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      queryClient.removeQueries({ queryKey: ['template', variables] });
    },
  });
};

export const useDownloadTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => templatesApi.downloadTemplate(id),
    onSuccess: (data, variables) => {
      // Update the template's download count
      queryClient.invalidateQueries({ queryKey: ['template', variables] });
      queryClient.invalidateQueries({ queryKey: ['templates', 'popular'] });
    },
  });
};

export const useRateTemplate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, rating, review }: { id: string; rating: number; review?: string }) =>
      templatesApi.rateTemplate(id, rating, review),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['template', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['templates'] });
    },
  });
};
