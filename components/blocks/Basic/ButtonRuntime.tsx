import { Button as UIButton } from "@/components/ui/button";
import Link from "next/link";

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
  href = "#",
  target = "_self",
  backgroundColor = "",
  textColor = "",
  borderRadius = "",
  margin = "my-2",
  padding = "",
  width = "w-auto",
}: ButtonProps) {
  const customStyles = {
    backgroundColor: backgroundColor || undefined,
    color: textColor || undefined,
    borderRadius: borderRadius || undefined,
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
        <Link href={href} target={target}>
          {text}
        </Link>
      </UIButton>
    </div>
  );
}
