import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api/apiClient'

export interface CollectionItem {
  _id: string
  collection: string
  project: string
  user: {
    _id: string
    name: string
    email: string
  }
  data: Record<string, any>
  status: 'draft' | 'published' | 'archived'
  slug?: string
  order: number
  publishedAt?: string
  createdAt: string
  updatedAt: string
}

export interface CreateCollectionItemData {
  data: Record<string, any>
  status?: 'draft' | 'published' | 'archived'
  slug?: string
}

export interface UpdateCollectionItemData extends Partial<CreateCollectionItemData> {
  _id: string
}

// Get collection items for a collection
export const useCollectionItems = (collectionId: string, options?: {
  page?: number
  limit?: number
  search?: string
  status?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}) => {
  const queryParams = new URLSearchParams()
  if (options?.page) queryParams.append('page', options.page.toString())
  if (options?.limit) queryParams.append('limit', options.limit.toString())
  if (options?.search) queryParams.append('search', options.search)
  if (options?.status) queryParams.append('status', options.status)
  if (options?.sortBy) queryParams.append('sortBy', options.sortBy)
  if (options?.sortOrder) queryParams.append('sortOrder', options.sortOrder)

  return useQuery({
    queryKey: ['collection-items', collectionId, options],
    queryFn: async () => {
      const response = await apiClient.get(`/collection-items/${collectionId}?${queryParams}`)
      return response.data
    },
    enabled: !!collectionId,
  })
}

// Get single collection item
export const useCollectionItem = (itemId: string) => {
  return useQuery({
    queryKey: ['collection-item', itemId],
    queryFn: async () => {
      const response = await apiClient.get(`/collection-items/single/${itemId}`)
      return response.data
    },
    enabled: !!itemId,
  })
}

// Create collection item
export const useCreateCollectionItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, data }: { collectionId: string; data: CreateCollectionItemData }) => {
      const response = await apiClient.post(`/collection-items/${collectionId}`, data)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection-items', variables.collectionId] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Update collection item
export const useUpdateCollectionItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateCollectionItemData) => {
      const response = await apiClient.put(`/collection-items/single/${data._id}`, data)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection-item', variables._id] })
      queryClient.invalidateQueries({ queryKey: ['collection-items'] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Delete collection item
export const useDeleteCollectionItem = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (itemId: string) => {
      const response = await apiClient.delete(`/collection-items/single/${itemId}`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collection-items'] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Bulk delete collection items
export const useBulkDeleteCollectionItems = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, itemIds }: { collectionId: string; itemIds: string[] }) => {
      const response = await apiClient.delete(`/collection-items/${collectionId}/bulk`, {
        data: { itemIds }
      })
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection-items', variables.collectionId] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Reorder collection items
export const useReorderCollectionItems = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, itemIds }: { collectionId: string; itemIds: string[] }) => {
      const response = await apiClient.put(`/collection-items/${collectionId}/reorder`, {
        itemIds
      })
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection-items', variables.collectionId] })
    },
  })
}
