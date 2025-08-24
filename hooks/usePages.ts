"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { pagesApi, type Page, type CreatePageRequest, type UpdatePageRequest } from '../lib/api/pages';

export const useProjectPages = (projectId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['pages', 'project', projectId],
    queryFn: () => pagesApi.getProjectPages(projectId),
    enabled: enabled && !!projectId,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePage = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['page', id],
    queryFn: () => pagesApi.getPage(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const usePageBySlug = (projectId: string, slug: string) => {
  return useQuery({
    queryKey: ['page', 'slug', projectId, slug],
    queryFn: () => pagesApi.getPageBySlug(projectId, slug),
    enabled: !!(projectId && slug),
  });
};

export const useCreatePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (pageData: CreatePageRequest) => pagesApi.createPage(pageData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['pages', 'project', variables.project] });
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useUpdatePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, pageData }: { id: string; pageData: UpdatePageRequest }) =>
      pagesApi.updatePage(id, pageData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['page', variables.id] });
      queryClient.invalidateQueries({ queryKey: ['pages'] });
    },
  });
};

export const useDeletePage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => pagesApi.deletePage(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      queryClient.removeQueries({ queryKey: ['page', variables] });
    },
  });
};
