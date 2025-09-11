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
}: ButtonProps) {
  const router = useRouter();

  const customStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
    borderRadius: borderRadius || undefined,
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
      }
      return `#`; // Fallback if no project context
    }
    return href || "#";
  };

  const navigationUrl = getNavigationUrl();
  console.log({navigationUrl})
  const isExternalUrl = navigationType === "url" && href && (href.startsWith("http") || href.startsWith("//"));

  const handleClick = (e: React.MouseEvent) => {
    if (navigationType === "page" && pageSlug) {
      e.preventDefault();
      router.push(navigationUrl);
    }
  };

  return (
    <div className={`${margin} ${padding} ${width}`}>
      <UIButton
        variant={variant}
        size={size}
        asChild
        style={customStyles}
        className={`${width} ${borderRadius}`}
      >
        <Link 
          href={navigationUrl} 
          target={isExternalUrl ? target : "_self"}
          onClick={handleClick}
        >
          {text}
        </Link>
      </UIButton>
    </div>
  );
}
