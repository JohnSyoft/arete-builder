import { apiClient } from "./apiClient";

export interface UploadedFile {
  url: string;
  originalname: string;
  mimetype: string;
  size: number;
  fileName: string;
  folder: string;
}

export interface UploadResponse {
  success: boolean;
  message: string;
  data: {
    files: UploadedFile[];
  };
}

export interface UploadProgress {
  loaded: number;
  total: number;
  percentage: number;
}

/**
 * Upload single or multiple files
 */
export const uploadFiles = async (
  files: File[],
  options: {
    folder?: string;
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
  } = {}
): Promise<UploadedFile[]> => {
  const {
    folder = "general",
    projectId,
    saveToDatabase = false,
    onProgress,
  } = options;

  const formData = new FormData();

  // Append files
  files.forEach((file) => {
    formData.append("files", file);
  });

  // Append additional data
  if (projectId) {
    formData.append("projectId", projectId);
  }
  formData.append("saveToDatabase", saveToDatabase.toString());

  try {
    const response = await apiClient.post<UploadResponse>(
      `/upload?folder=${encodeURIComponent(folder)}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: onProgress
          ? (progressEvent) => {
              if (progressEvent.total) {
                const percentage = Math.round(
                  (progressEvent.loaded * 100) / progressEvent.total
                );
                onProgress({
                  loaded: progressEvent.loaded,
                  total: progressEvent.total,
                  percentage,
                });
              }
            }
          : undefined,
      }
    );
    return response?.data?.files || [];
    // if (response.data.success && response.data.data.files) {
    //   return response.data.data.files;
    // } else {
    //   throw new Error(response.data.message || "Upload failed");
    // }
  } catch (error: any) {
    console.error("Upload error:", error);
    throw new Error(
      error.response?.data?.message || error.message || "Upload failed"
    );
  }
};

/**
 * Upload a single file
 */
export const uploadFile = async (
  file: File,
  options: {
    folder?: string;
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
  } = {}
): Promise<UploadedFile> => {
  const uploadedFiles = await uploadFiles([file], options);
  return uploadedFiles[0];
};

/**
 * Upload images specifically
 */
export const uploadImages = async (
  files: File[],
  options: {
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
  } = {}
): Promise<UploadedFile[]> => {
  return uploadFiles(files, {
    ...options,
    folder: `projects/${options.projectId || "general"}/images`,
  });
};

/**
 * Upload videos specifically
 */
export const uploadVideos = async (
  files: File[],
  options: {
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
  } = {}
): Promise<UploadedFile[]> => {
  return uploadFiles(files, {
    ...options,
    folder: `projects/${options.projectId || "general"}/videos`,
  });
};

/**
 * Upload general files
 */
export const uploadGeneralFiles = async (
  files: File[],
  options: {
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
  } = {}
): Promise<UploadedFile[]> => {
  return uploadFiles(files, {
    ...options,
    folder: `projects/${options.projectId || "general"}/files`,
  });
};

/**
 * Upload with XMLHttpRequest for more control over progress
 * This is useful when you need more detailed progress tracking
 */
export const uploadWithXHR = (
  files: File[],
  options: {
    folder?: string;
    projectId?: string;
    saveToDatabase?: boolean;
    onProgress?: (progress: UploadProgress) => void;
    onSuccess?: (uploadedFiles: UploadedFile[]) => void;
    onError?: (error: string) => void;
  } = {}
): XMLHttpRequest => {
  const {
    folder = "general",
    projectId,
    saveToDatabase = false,
    onProgress,
    onSuccess,
    onError,
  } = options;

  const formData = new FormData();

  // Append files
  files.forEach((file) => {
    formData.append("files", file);
  });

  // Append additional data
  if (projectId) {
    formData.append("projectId", projectId);
  }
  formData.append("saveToDatabase", saveToDatabase.toString());

  const xhr = new XMLHttpRequest();

  // Progress tracking
  if (onProgress) {
    xhr.upload.addEventListener("progress", (event) => {
      if (event.lengthComputable) {
        const percentage = Math.round((event.loaded * 100) / event.total);
        onProgress({
          loaded: event.loaded,
          total: event.total,
          percentage,
        });
      }
    });
  }

  // Success handling
  xhr.addEventListener("load", () => {
    if (xhr.status === 200) {
      try {
        const response: UploadResponse = JSON.parse(xhr.responseText);
        if (response.success && response.data.files) {
          onSuccess?.(response.data.files);
        } else {
          onError?.(response.message || "Upload failed");
        }
      } catch (error) {
        onError?.("Failed to parse response");
      }
    } else {
      onError?.(`Upload failed with status ${xhr.status}`);
    }
  });

  // Error handling
  xhr.addEventListener("error", () => {
    onError?.("Network error during upload");
  });

  // Set authorization header
  const token = localStorage.getItem("areteToken");
  if (token) {
    xhr.setRequestHeader("Authorization", `Bearer ${token}`);
  }

  // Start upload
  xhr.open("POST", `/api/v1/upload?folder=${encodeURIComponent(folder)}`);
  xhr.send(formData);

  return xhr;
};

export default {
  uploadFiles,
  uploadFile,
  uploadImages,
  uploadVideos,
  uploadGeneralFiles,
  uploadWithXHR,
};
