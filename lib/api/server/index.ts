// Server-side API exports - centralized imports for server components

export { getProject, getProjects } from './projects'
export { getPageBySlug, getProjectPages, getPage } from './pages'
export { getApiUrl, defaultHeaders, defaultFetchOptions, handleApiError, handleNetworkError } from './config'

// Re-export commonly used types
export type { } from './projects'
export type { } from './pages'
