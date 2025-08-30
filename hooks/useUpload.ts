import { useState, useCallback } from "react";
import { uploadFiles, UploadedFile, UploadProgress } from "@/lib/api/upload";

interface UseUploadOptions {
  folder?: string;
  projectId?: string;
  saveToDatabase?: boolean;
  multiple?: boolean;
  onSuccess?: (files: UploadedFile[]) => void;
  onError?: (error: string) => void;
}

interface UseUploadState {
  isUploading: boolean;
  progress: UploadProgress | null;
  error: string | null;
  uploadedFiles: UploadedFile[];
}

export function useUpload(options: UseUploadOptions = {}) {
  const [state, setState] = useState<UseUploadState>({
    isUploading: false,
    progress: null,
    error: null,
    uploadedFiles: [],
  });

  const upload = useCallback(
    async (files: File[]) => {
      if (!files.length) return;

      setState((prev) => ({
        ...prev,
        isUploading: true,
        error: null,
        progress: null,
      }));

      try {
        const uploadedFiles = await uploadFiles(files, {
          folder: options.folder,
          projectId: options.projectId,
          saveToDatabase: options.saveToDatabase,
          onProgress: (progress) => {
            setState((prev) => ({
              ...prev,
              progress,
            }));
          },
        });

        setState((prev) => ({
          ...prev,
          isUploading: false,
          uploadedFiles,
          progress: { loaded: 100, total: 100, percentage: 100 },
        }));

        options.onSuccess?.(uploadedFiles);
        return uploadedFiles;
      } catch (error: any) {
        const errorMessage = error.message || "Upload failed";
        setState((prev) => ({
          ...prev,
          isUploading: false,
          error: errorMessage,
          progress: null,
        }));

        options.onError?.(errorMessage);
        throw error;
      }
    },
    [options.folder, options.projectId, options.saveToDatabase, options.onSuccess, options.onError]
  );

  const uploadSingle = useCallback(
    async (file: File) => {
      const result = await upload([file]);
      return result?.[0];
    },
    [upload]
  );

  const reset = useCallback(() => {
    setState({
      isUploading: false,
      progress: null,
      error: null,
      uploadedFiles: [],
    });
  }, []);

  return {
    ...state,
    upload,
    uploadSingle,
    reset,
  };
}

export default useUpload;
