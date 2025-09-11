import { useModalStore } from "@/lib/store/modalStore";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import type { Page } from "./types";

interface UsePageHandlersProps {
  projectId: string;
  pages: Page[];
  currentPageSlug?: string;
  onPageChange?: (pageSlug: string) => void;
  deletePageMutation: any;
}

export function usePageHandlers({
  projectId,
  pages,
  currentPageSlug,
  onPageChange,
  deletePageMutation,
}: UsePageHandlersProps) {
  const { openModal } = useModalStore();
  const { clearContext } = useCMSContextStore();

  const handleAddPage = () => {
    openModal("createPage", {
      projectId,
      pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })),
      onSave: (page: any) => {
        // Clear CMS context when navigating to a new regular page
        clearContext();
        if (onPageChange) {
          onPageChange(page.slug);
        }
      },
    });
  };

  const handleAdd404Page = () => {
    openModal("createPage", {
      projectId,
      pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })),
      pageType: "404",
      onSave: (page: any) => {
        // Clear CMS context when navigating to a 404 page
        clearContext();
        if (onPageChange) {
          onPageChange(page.slug);
        }
      },
    });
  };

  const handleEditPage = () => {
    const currentPage = pages.find((page) => page.slug === currentPageSlug);
    if (currentPage) {
      openModal("editPage", {
        projectId,
        pages: pages.map((p) => ({ _id: p.id, name: p.name, slug: p.slug })),
        page: {
          _id: currentPage.id,
          name: currentPage.name,
          slug: currentPage.slug,
        },
        onSave: (page: any) => {
          if (onPageChange && page.slug !== currentPageSlug) {
            onPageChange(page.slug);
          }
        },
      });
    }
  };

  const handleDeletePage = async () => {
    const currentPage = pages.find((page) => page.slug === currentPageSlug);
    if (!currentPage) return;

    if (pages.length <= 1) {
      alert(
        "Cannot delete the last page. A project must have at least one page."
      );
      return;
    }

    const isHomePage = currentPage.slug === "home" || currentPage.slug === "";
    const title = isHomePage ? "Delete Home Page?" : "Delete Page?";
    const message = isHomePage
      ? `You are about to delete the home page "${currentPage.name}". This will make your website inaccessible to visitors. Are you sure you want to continue?`
      : `Are you sure you want to delete the page "${currentPage.name}"? This action cannot be undone.`;

    openModal("confirmation", {
      title,
      message,
      confirmText: "Delete",
      cancelText: "Cancel",
      variant: "destructive",
      onConfirm: async () => {
        try {
          await deletePageMutation.mutateAsync(currentPage.id);
          const remainingPages = pages.filter((p) => p.id !== currentPage.id);
          if (remainingPages.length > 0 && onPageChange) {
            onPageChange(remainingPages[0].slug);
          }
        } catch (error) {
          console.error("Error deleting page:", error);
          alert("Failed to delete page. Please try again.");
        }
      },
    });
  };

  return {
    handleAddPage,
    handleAdd404Page,
    handleEditPage,
    handleDeletePage,
  };
}
