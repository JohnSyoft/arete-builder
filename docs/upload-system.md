# File Upload System

This document describes the new file upload system that separates file selection from the actual upload process.

## Overview

The upload system consists of three main components:

- **FileUpload Component**: Handles file selection and display (no upload functionality)
- **Upload API**: Handles the actual file upload to the server
- **useUpload Hook**: Provides easy integration for upload functionality

## Components

### FileUpload Component

The `FileUpload` component now only handles file selection and display. It no longer includes upload functionality.

**Props:**

- `accept`: File types to accept (default: "image/_,video/_")
- `multiple`: Allow multiple file selection
- `maxFiles`: Maximum number of files
- `maxSize`: Maximum file size in MB
- `onFilesSelected`: Callback when files are selected
- `onUploadError`: Callback for validation errors
- `value`: Uploaded file URLs to display
- `onChange`: Callback when uploaded files change
- `variant`: Display variant ("default" | "compact" | "grid")

**Example:**

```tsx
<FileUpload
  accept="image/*,video/*"
  multiple={true}
  maxFiles={5}
  maxSize={50}
  onFilesSelected={handleFilesSelected}
  onUploadError={handleError}
  value={uploadedUrls}
  onChange={setUploadedUrls}
  variant="grid"
/>
```

### Upload API

Located in `/lib/api/upload.ts`, provides functions for uploading files.

**Functions:**

- `uploadFiles(files, options)`: Upload multiple files
- `uploadFile(file, options)`: Upload a single file
- `uploadImages(files, options)`: Upload images to images folder
- `uploadVideos(files, options)`: Upload videos to videos folder
- `uploadGeneralFiles(files, options)`: Upload general files
- `uploadWithXHR(files, options)`: Upload with XMLHttpRequest for more control

**Options:**

- `folder`: Target folder for uploads
- `projectId`: Project ID for organization
- `saveToDatabase`: Whether to save file info to database
- `onProgress`: Progress callback

**Example:**

```tsx
import { uploadFiles } from "@/lib/api/upload";

const uploadedFiles = await uploadFiles(selectedFiles, {
  folder: "projects/my-project/images",
  projectId: "project-123",
  saveToDatabase: true,
  onProgress: (progress) => {
    console.log(`Upload progress: ${progress.percentage}%`);
  },
});
```

### useUpload Hook

Located in `/hooks/useUpload.ts`, provides a React hook for easy upload integration.

**Features:**

- Upload state management
- Progress tracking
- Error handling
- Success callbacks

**Example:**

```tsx
import { useUpload } from "@/hooks/useUpload";

const { upload, isUploading, progress, error, uploadedFiles } = useUpload({
  folder: "demo",
  projectId: "my-project",
  saveToDatabase: true,
  onSuccess: (files) => {
    console.log("Upload successful:", files);
  },
  onError: (error) => {
    console.error("Upload failed:", error);
  },
});

// Upload files
await upload(selectedFiles);
```

## Implementation Example

See `/components/demo/UploadDemo.tsx` for a complete implementation example that shows:

1. File selection with FileUpload component
2. Upload progress tracking
3. Error handling
4. Success feedback
5. Display of uploaded files

## Migration from Old System

If you're migrating from the old upload system:

1. **Remove upload-related props** from FileUpload components:

   - `onFilesUploaded`
   - `folder`
   - `projectId`
   - `saveToDatabase`

2. **Add upload logic** to your implementation:

   - Use the `useUpload` hook or upload API functions
   - Handle upload triggers (buttons, form submissions, etc.)
   - Manage upload state and feedback

3. **Update file display**:
   - Use `value` and `onChange` props to display uploaded files
   - Handle file removal through the `onChange` callback

## Benefits

- **Separation of Concerns**: File selection is separate from upload logic
- **Flexibility**: Upload can be triggered from anywhere in your component
- **Better UX**: More control over upload timing and user feedback
- **Reusability**: Upload logic can be reused across different components
- **Performance**: Files are only uploaded when explicitly triggered

## API Endpoints

The upload system expects the following API endpoints:

- `POST /api/v1/upload?folder={folder}`: Upload files
  - Body: FormData with files and metadata
  - Headers: Authorization Bearer token
  - Response: `{ success: boolean, message: string, data: { files: UploadedFile[] } }`

## Security Notes

- Files are validated on both client and server side
- Authentication tokens are automatically included in requests
- Upload folders can be restricted based on user permissions
- File types and sizes are enforced
