// Server-side API configuration and utilities

/**
 * Get the API base URL for server-side requests
 * @returns The API base URL
 */
export function getApiUrl(): string {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/v1` || 'http://localhost:5001/api/v1'
}

/**
 * Default headers for server-side API requests
 */
export const defaultHeaders = {
  'Content-Type': 'application/json',
} as const

/**
 * Common fetch options for server-side requests
 */
export const defaultFetchOptions = {
  cache: 'no-store' as const, // Ensure fresh data for server-side rendering
  headers: defaultHeaders,
}

/**
 * Generic error handler for API responses
 * @param endpoint - The API endpoint that failed
 * @param response - The failed response object
 */
export function handleApiError(endpoint: string, response: Response): void {
  console.error(`API Error: ${endpoint} - ${response.status} ${response.statusText}`)
}

/**
 * Generic error handler for network/fetch errors
 * @param endpoint - The API endpoint that failed
 * @param error - The error object
 */
export function handleNetworkError(endpoint: string, error: unknown): void {
  console.error(`Network Error: ${endpoint}`, error)
}
