// Server-side projects API functions
import { getApiUrl, defaultFetchOptions, handleApiError, handleNetworkError } from './config'

interface ProjectApiResponse {
  success: boolean;
  message: string;
  data: {
    project: any;
  };
}

/**
 * Fetch a project by ID from the server-side
 * @param projectId - The project ID to fetch
 * @returns Project data or null if not found
 */
export async function getProject(projectId: string) {
  const apiUrl = getApiUrl()
  const endpoint = `${apiUrl}/projects/${projectId}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return null
    }
    
    const data: ProjectApiResponse = await response.json()
    return data.data?.project
  } catch (error) {
    handleNetworkError(endpoint, error)
    return null
  }
}

/**
 * Fetch a project by slug from the server-side
 * @param slug - The project slug to fetch
 * @returns Project data or null if not found
 */
export async function getProjectBySlug(slug: string) {
  const apiUrl = getApiUrl()
  const endpoint = `${apiUrl}/projects/by-slug/${slug}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return null
    }
    
    const data: ProjectApiResponse = await response.json()
    return data.data?.project
  } catch (error) {
    handleNetworkError(endpoint, error)
    return null
  }
}

/**
 * Fetch projects with optional query parameters
 * @param query - Optional query parameters
 * @returns Array of projects or empty array if error
 */
export async function getProjects(query: Record<string, any> = {}) {
  const apiUrl = getApiUrl()
  const queryString = new URLSearchParams(query).toString()
  const endpoint = `${apiUrl}/projects${queryString ? `?${queryString}` : ''}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return []
    }
    
    const data = await response.json()
    return data.data?.projects || []
  } catch (error) {
    handleNetworkError(endpoint, error)
    return []
  }
}
