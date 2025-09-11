/**
 * Utility functions for generating unique slugs
 */

/**
 * Generate a base slug from a name
 */
export const generateBaseSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

/**
 * Generate a unique slug for a component
 */
export const generateComponentSlug = (
  name: string,
  type: string,
  config?: { collection?: string; collectionName?: string }
): string => {
  const baseSlug = generateBaseSlug(name);
  
  // Add type prefix for better organization
  if (type === 'cms-collection' && config?.collection) {
    const collectionName = config.collectionName || 'collection';
    const collectionSlug = generateBaseSlug(collectionName);
    return `cms-${collectionSlug}-${config.collection}`;
  }
  
  return `${type}-${baseSlug}`;
};

/**
 * Generate a unique slug with timestamp to ensure uniqueness
 */
export const generateUniqueSlug = (
  name: string,
  type: string,
  config?: { collection?: string; collectionName?: string }
): string => {
  const baseSlug = generateComponentSlug(name, type, config);
  const timestamp = Date.now().toString(36); // Base36 timestamp
  return `${baseSlug}-${timestamp}`;
};

/**
 * Generate a CMS collection component slug
 */
export const generateCMSCollectionSlug = (
  collectionId: string,
  collectionName: string
): string => {
  const collectionSlug = generateBaseSlug(collectionName);
  const timestamp = Date.now().toString(36); // Base36 timestamp for uniqueness
  return `cms-${collectionSlug}-${collectionId}-${timestamp}`;
};

/**
 * Generate a unique CMS collection component slug for a specific design
 */
export const generateCMSCollectionDesignSlug = (
  collectionId: string,
  collectionName: string,
  designType: string = 'default'
): string => {
  const collectionSlug = generateBaseSlug(collectionName);
  const designSlug = generateBaseSlug(designType);
  const timestamp = Date.now().toString(36);
  return `cms-${collectionSlug}-${designSlug}-${collectionId}-${timestamp}`;
};
