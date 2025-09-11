import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getComponents,
  getComponent,
  getComponentBySlug,
  getComponentsByType,
  getCMSCollectionComponents,
  createComponent,
  updateComponent,
  deleteComponent,
  duplicateComponent,
  incrementUsage,
  getOrCreateCMSCollectionComponent,
  type Component,
  type CreateComponentData,
  type UpdateComponentData,
  type DuplicateComponentData,
  type GetComponentsParams,
} from "@/lib/api/components";

// Query keys
export const componentKeys = {
  all: ["components"] as const,
  lists: () => [...componentKeys.all, "list"] as const,
  list: (params: GetComponentsParams) => [...componentKeys.lists(), params] as const,
  details: () => [...componentKeys.all, "detail"] as const,
  detail: (id: string) => [...componentKeys.details(), id] as const,
  bySlug: (slug: string, projectId: string) => [...componentKeys.all, "bySlug", slug, projectId] as const,
  byType: (type: string, projectId: string) => [...componentKeys.all, "byType", type, projectId] as const,
  cmsCollections: (projectId: string, collectionId?: string) => [...componentKeys.all, "cmsCollections", projectId, collectionId] as const,
};

// Get all components for a project
export const useComponents = (params: GetComponentsParams) => {
  return useQuery({
    queryKey: componentKeys.list(params),
    queryFn: () => getComponents(params),
    enabled: !!params.projectId,
  });
};

// Get component by ID
export const useComponent = (id: string) => {
  return useQuery({
    queryKey: componentKeys.detail(id),
    queryFn: () => getComponent(id),
    enabled: !!id,
  });
};

// Get component by slug
export const useComponentBySlug = (slug: string, projectId: string) => {
  return useQuery({
    queryKey: componentKeys.bySlug(slug, projectId),
    queryFn: () => getComponentBySlug(slug, projectId),
    enabled: !!slug && !!projectId,
  });
};

// Get components by type
export const useComponentsByType = (type: string, projectId: string) => {
  return useQuery({
    queryKey: componentKeys.byType(type, projectId),
    queryFn: () => getComponentsByType(type, projectId),
    enabled: !!type && !!projectId,
  });
};

// Get CMS collection components
export const useCMSCollectionComponents = (projectId: string, collectionId?: string) => {
  return useQuery({
    queryKey: componentKeys.cmsCollections(projectId, collectionId),
    queryFn: () => getCMSCollectionComponents(projectId, collectionId),
    enabled: !!projectId,
  });
};

// Create component mutation
export const useCreateComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComponent,
    onSuccess: (data, variables) => {
      // Invalidate and refetch components list
      queryClient.invalidateQueries({
        queryKey: componentKeys.lists(),
      });
      
      // Invalidate specific project components
      queryClient.invalidateQueries({
        queryKey: componentKeys.list({ projectId: variables.projectId }),
      });
      
      // If it's a CMS collection component, invalidate those queries too
      if (variables.type === "cms-collection") {
        queryClient.invalidateQueries({
          queryKey: componentKeys.cmsCollections(variables.projectId, variables.config?.collection),
        });
      }
    },
  });
};

// Update component mutation
export const useUpdateComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateComponentData }) =>
      updateComponent(id, data),
    onSuccess: (data, variables) => {
      // Update the specific component in cache
      queryClient.setQueryData(componentKeys.detail(variables.id), data);
      
      // Invalidate components list
      queryClient.invalidateQueries({
        queryKey: componentKeys.lists(),
      });
      
      // Invalidate CMS collection components if applicable
      if (data.data.component.type === "cms-collection") {
        queryClient.invalidateQueries({
          queryKey: componentKeys.cmsCollections(
            data.data.component.project,
            data.data.component.config?.collection
          ),
        });
      }
    },
  });
};

// Delete component mutation
export const useDeleteComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteComponent,
    onSuccess: (data, variables) => {
      // Remove the component from cache
      queryClient.removeQueries({
        queryKey: componentKeys.detail(variables),
      });
      
      // Invalidate components list
      queryClient.invalidateQueries({
        queryKey: componentKeys.lists(),
      });
    },
  });
};

// Duplicate component mutation
export const useDuplicateComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: DuplicateComponentData }) =>
      duplicateComponent(id, data),
    onSuccess: (data, variables) => {
      // Invalidate components list
      queryClient.invalidateQueries({
        queryKey: componentKeys.lists(),
      });
      
      // If duplicating to a different project, invalidate that project's components too
      if (variables.data.newProjectId) {
        queryClient.invalidateQueries({
          queryKey: componentKeys.list({ projectId: variables.data.newProjectId }),
        });
      }
    },
  });
};

// Increment usage mutation
export const useIncrementUsage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: incrementUsage,
    onSuccess: (data, variables) => {
      // Update the component in cache with new usage count
      queryClient.setQueryData(componentKeys.detail(variables), (oldData: any) => {
        if (oldData) {
          return {
            ...oldData,
            data: {
              ...oldData.data,
              component: {
                ...oldData.data.component,
                usageCount: data.data.usageCount,
                lastUsed: new Date().toISOString(),
              },
            },
          };
        }
        return oldData;
      });
    },
  });
};

// Get or create CMS collection component
export const useGetOrCreateCMSCollectionComponent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      projectId,
      collectionId,
      collectionName,
      layout,
      config,
      slug,
    }: {
      projectId: string;
      collectionId: string;
      collectionName: string;
      layout: any;
      config?: Component["config"];
      slug?: string;
    }) => getOrCreateCMSCollectionComponent(projectId, collectionId, collectionName, layout, config, slug),
    onSuccess: (data, variables) => {
      // Invalidate CMS collection components
      queryClient.invalidateQueries({
        queryKey: componentKeys.cmsCollections(variables.projectId, variables.collectionId),
      });
      
      // Invalidate components list
      queryClient.invalidateQueries({
        queryKey: componentKeys.list({ projectId: variables.projectId }),
      });
    },
  });
};

