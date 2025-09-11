export interface Page {
  id: string;
  name: string;
  slug: string;
  pageType?: "normal" | "cms" | "404";
  collection?: string;
  cmsPageType?: "index" | "detail";
}

export interface EditorToolbarProps {
  onSave: () => void;
  onPreview: () => void;
  projectName: string;
  pageName: string;
  projectId: string;
  currentPageId: string;
  pages?: Page[];
  currentPageSlug?: string;
  onPageChange?: (pageSlug: string) => void;
  mode?: "design" | "cms";
  onModeChange?: (mode: "design" | "cms") => void;
  onItemChange?: (item: any) => void;
  selectedItem?: any;
}

export interface ToolbarState {
  currentMode: "design" | "cms";
  collections: any[];
  currentPage?: Page;
  isCurrentPageCMSDetail: boolean;
  allCollectionItems: any[];
}
