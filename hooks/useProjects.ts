"use client";

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { projectsApi, type Project, type ProjectQuery, type CreateProjectRequest, type UpdateProjectRequest } from '../lib/api/projects';

export const useProjects = (query: ProjectQuery = {}) => {
  return useQuery({
    queryKey: ['projects', query],
    queryFn: () => projectsApi.getProjects(query),
    staleTime: 1000 * 60 * 2, // 2 minutes
  });
};

export const useProject = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: () => projectsApi.getProject(id),
    enabled: enabled && !!id,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (projectData: CreateProjectRequest) => projectsApi.createProject(projectData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, projectData }: { id: string; projectData: UpdateProjectRequest }) =>
      projectsApi.updateProject(id, projectData),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => projectsApi.deleteProject(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.removeQueries({ queryKey: ['project', variables] });
    },
  });
};

export const useDuplicateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, name }: { id: string; name?: string }) => projectsApi.duplicateProject(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
    },
  });
};

export const usePublishProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => projectsApi.publishProject(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', variables] });
    },
  });
};

export const useUnpublishProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => projectsApi.unpublishProject(id),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project', variables] });
    },
  });
};

export const useAddCollaborator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, email, role }: { id: string; email: string; role?: 'editor' | 'viewer' }) =>
      projectsApi.addCollaborator(id, email, role),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
    },
  });
};

export const useRemoveCollaborator = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, userId }: { id: string; userId: string }) =>
      projectsApi.removeCollaborator(id, userId),
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['project', variables.id] });
    },
  });
};

export const useExportProject = () => {
  return useMutation({
    mutationFn: ({ id, format }: { id: string; format?: 'html' | 'react' | 'wordpress' }) =>
      projectsApi.exportProject(id, format),
  });
};
