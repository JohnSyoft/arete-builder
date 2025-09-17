import { Button as UIButton } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ButtonProps {
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  navigationType?: "page" | "url";
  pageSlug?: string;
  href?: string;
  target?: "_self" | "_blank";
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  opacity?: string;
  nonEditable?: boolean;
  rel?: string;
  projectId?: string;
}

export function ButtonRuntime({
  text = "Click me",
  variant = "default",
  size = "default",
  navigationType = "url",
  pageSlug = "",
  href = "#",
  target = "_self",
  backgroundColor = "",
  textColor = "",
  borderRadius = "",
  margin = "my-2",
  padding = "",
  width = "w-auto",
  height = "h-auto",
  boxShadow = "",
  opacity = "",
  rel = "",
  projectId,
  nonEditable = false,
}: ButtonProps) {
  const router = useRouter();

  const customStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
    borderRadius: borderRadius || undefined,
    boxShadow: boxShadow || undefined,
    opacity: opacity || undefined,
  };

  // Determine the navigation URL
  const getNavigationUrl = () => {
    if (navigationType === "page" && pageSlug) {
      // For internal pages, we need to get the current project context
      // Since we're in runtime, we can get projectId from the URL
      if (typeof window !== "undefined") {
        const currentPath = window.location.pathname;
        const projectIdMatch = currentPath.match(/\/site\/([^\/]+)/);
        if (projectIdMatch) {
          const projectId = projectIdMatch[1];
          return `/site/${projectId}/${pageSlug}`;
        }
        
        // Alternative: try to get projectId from other URL patterns
        const editorMatch = currentPath.match(/\/editor\/([^\/]+)/);
        if (editorMatch) {
          const projectId = editorMatch[1];
          return `/site/${projectId}/${pageSlug}`;
        }
        
        // If we have projectId prop, use it
        if (projectId) {
          return `/site/${projectId}/${pageSlug}`;
        }
      }
      return `#`; // Fallback if no project context
    }
    return href || "#";
  };

  const navigationUrl = getNavigationUrl();
  const isExternalUrl = navigationType === "url" && href && (href.startsWith("http") || href.startsWith("//"));

  const handleClick = (e: React.MouseEvent) => {
    if (navigationType === "page" && pageSlug) {
      e.preventDefault();
      router.push(navigationUrl);
    }
  };

  return (
    <div className={`${margin || ""}`}>
      <UIButton
        variant={variant}
        size={size}
        asChild
        style={customStyles}
        className={`w-full h-full ${padding || ""}`}
      >
        <Link 
          href={navigationUrl} 
          target={isExternalUrl ? target : "_self"}
          rel={rel || undefined}
          onClick={handleClick}
        >
          {text}
        </Link>
      </UIButton>
    </div>
  );
}
