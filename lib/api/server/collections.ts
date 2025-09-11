import { getApiUrl, defaultHeaders, handleApiError, handleNetworkError } from './config'

export async function getCollectionItem(itemId: string) {
  try {
    const url = `${getApiUrl()}/collection-items/single/${itemId}?populate=true&populateAll=true`
    const response = await fetch(url, {
      headers: defaultHeaders,
      next: { revalidate: 60 }, // Cache for 1 minute
    })

    if (!response.ok) {
      handleApiError(`Failed to fetch collection item ${itemId}`, response)
    }

    const data = await response.json()
    return data?.item || null
  } catch (error) {
    handleNetworkError(`getCollectionItem(${itemId})`, error)
    return null
  }
}

export async function getCollectionItemBySlug(projectId: string, collectionSlug: string, itemSlug: string) {
  try {
    const url = `${getApiUrl()}/collection-items/by-slug/${projectId}/${collectionSlug}/${itemSlug}?populate=true&populateAll=true`
    console.log({url})
    const response = await fetch(url, {
      headers: defaultHeaders,
      next: { revalidate: 60 }, // Cache for 1 minute
    })

    if (!response.ok) {
      handleApiError(`Failed to fetch collection item ${projectId}/${collectionSlug}/${itemSlug}`, response)
    }

    const data = await response.json()
    console.log({data})
    return data?.data?.item || null
  } catch (error) {
    handleNetworkError(`getCollectionItemBySlug(${projectId}, ${collectionSlug}, ${itemSlug})`, error)
    return null
  }
}

export async function getCollectionItems(collectionId: string, options?: { limit?: number; status?: string; populate?: boolean }) {
  try {
    const params = new URLSearchParams()
    if (options?.limit) params.append('limit', options.limit.toString())
    if (options?.status) params.append('status', options.status)
    if (options?.populate) params.append('populate', 'true')
    
    const url = `${getApiUrl()}/collection-items/${collectionId}?${params.toString()}`
    const response = await fetch(url, {
      headers: defaultHeaders,
      next: { revalidate: 60 }, // Cache for 1 minute
    })

    if (!response.ok) {
      handleApiError(`Failed to fetch collection items for ${collectionId}`, response)
    }

    const data = await response.json()
    return data?.items || []
  } catch (error) {
    handleNetworkError(`getCollectionItems(${collectionId})`, error)
    return []
  }
}
