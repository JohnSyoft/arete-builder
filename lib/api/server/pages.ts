// Server-side pages API functions
import { getApiUrl, defaultFetchOptions, handleApiError, handleNetworkError } from './config'

interface PageApiResponse {
  success: boolean;
  message: string;
  data: {
    page: any;
  };
}

interface PagesApiResponse {
  success: boolean;
  message: string;
  data: {
    pages: any[];
  };
}

/**
 * Fetch a page by project ID and slug from the server-side
 * @param projectId - The project ID
 * @param slug - The page slug
 * @returns Page data or null if not found
 */
export async function getPageBySlug(projectId: string, slug: string) {
  const apiUrl = getApiUrl()
  const endpoint = `${apiUrl}/api/v1/pages/project/${projectId}/slug/${slug}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return null
    }
    
    const data: PageApiResponse = await response.json()
    return data.data?.page
  } catch (error) {
    handleNetworkError(endpoint, error)
    return null
  }
}

/**
 * Fetch all pages for a project from the server-side
 * @param projectId - The project ID
 * @returns Array of pages or empty array if error
 */
export async function getProjectPages(projectId: string) {
  const apiUrl = getApiUrl()
  const endpoint = `${apiUrl}/api/v1/pages/project/${projectId}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return []
    }
    
    const data: PagesApiResponse = await response.json()
    return data.data?.pages || []
  } catch (error) {
    handleNetworkError(endpoint, error)
    return []
  }
}

/**
 * Fetch a single page by ID from the server-side
 * @param pageId - The page ID
 * @returns Page data or null if not found
 */
export async function getPage(pageId: string) {
  const apiUrl = getApiUrl()
  const endpoint = `${apiUrl}/api/v1/pages/${pageId}`
  
  try {
    const response = await fetch(endpoint, defaultFetchOptions)
    
    if (!response.ok) {
      handleApiError(endpoint, response)
      return null
    }
    
    const data: PageApiResponse = await response.json()
    return data.data?.page
  } catch (error) {
    handleNetworkError(endpoint, error)
    return null
  }
}
