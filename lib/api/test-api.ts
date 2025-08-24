// Simple test file to verify API connectivity
// This file can be deleted after testing

import { projectsApi } from './projects';

export const testApiConnection = async () => {
  try {
    console.log('Testing API connection...');
    const response = await projectsApi.getProjects({ page: 1, limit: 5 });
    console.log('API test successful:', response);
    return true;
  } catch (error) {
    console.error('API test failed:', error);
    return false;
  }
};

// You can call this function in the browser console to test:
// import { testApiConnection } from '@/lib/api/test-api'
// testApiConnection()
