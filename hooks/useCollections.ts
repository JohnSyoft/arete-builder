import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { apiClient } from '@/lib/api/apiClient'

export interface Field {
  id: string
  name: string
  type: 'plainText' | 'formattedText' | 'date' | 'datetime' | 'link' | 'image' | 'gallery' | 'color' | 'toggle' | 'number' | 'option' | 'file' | 'reference' | 'multiReference'
  description?: string
  required?: boolean
  maxLength?: number
  defaultValue?: any
  placeholder?: string
  textArea?: boolean
  localization?: boolean
  options?: { label: string; value: string }[]
  referenceCollection?: string
  settings?: Record<string, any>
}

export interface Collection {
  _id: string
  name: string
  slug: string
  description?: string
  fields: Field[]
  project: string
  user: string
  itemCount?: number
  settings?: {
    singularName?: string
    pluralName?: string
    icon?: string
    color?: string
    sortBy?: string
    sortOrder?: 'asc' | 'desc'
  }
  createdAt: string
  updatedAt: string
}

export interface CreateCollectionData {
  name: string
  description?: string
  slug?: string
  fields?: Field[]
  settings?: {
    singularName?: string
    pluralName?: string
    icon?: string
    color?: string
  }
}

export interface UpdateCollectionData extends Partial<CreateCollectionData> {
  _id: string
}

// Get collections for a project
export const useCollections = (projectId: string) => {
  return useQuery({
    queryKey: ['collections', projectId],
    queryFn: async () => {
      const response = await apiClient.get(`/collections/${projectId}`)
      return response.data
    },
    enabled: !!projectId,
  })
}

// Get single collection
export const useCollection = (collectionId: string) => {
  return useQuery({
    queryKey: ['collection', collectionId],
    queryFn: async () => {
      const response = await apiClient.get(`/collections/single/${collectionId}`)
      return response.data
    },
    enabled: !!collectionId,
  })
}

// Create collection
export const useCreateCollection = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ projectId, data }: { projectId: string; data: CreateCollectionData }) => {
      const response = await apiClient.post(`/collections/${projectId}`, data)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collections', variables.projectId] })
    },
  })
}

// Update collection
export const useUpdateCollection = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: UpdateCollectionData) => {
      const response = await apiClient.put(`/collections/single/${data._id}`, data)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection', variables._id] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Delete collection
export const useDeleteCollection = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (collectionId: string) => {
      const response = await apiClient.delete(`/collections/single/${collectionId}`)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Add field to collection
export const useAddField = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, field }: { collectionId: string; field: Omit<Field, 'id'> }) => {
      const response = await apiClient.post(`/collections/single/${collectionId}/fields`, field)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection', variables.collectionId] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Update field in collection
export const useUpdateField = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, fieldId, field }: { collectionId: string; fieldId: string; field: Partial<Field> }) => {
      const response = await apiClient.put(`/collections/single/${collectionId}/fields/${fieldId}`, field)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection', variables.collectionId] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}

// Remove field from collection
export const useRemoveField = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ collectionId, fieldId }: { collectionId: string; fieldId: string }) => {
      const response = await apiClient.delete(`/collections/single/${collectionId}/fields/${fieldId}`)
      return response.data
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['collection', variables.collectionId] })
      queryClient.invalidateQueries({ queryKey: ['collections'] })
    },
  })
}
