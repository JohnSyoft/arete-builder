import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import {
  AlertCircle,
  CheckCircle,
  Info,
  XCircle,
  AlertTriangle,
  X,
} from "lucide-react";
import { Resizer } from "../Resizer";

interface AlertProps {
  title?: string;
  content?: string;
  message?: string;
  variant?: "default" | "success" | "warning" | "error" | "info" | "destructive";
  size?: "sm" | "default" | "lg";
  showIcon?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: string;
  dismissible?: boolean;
  dismissText?: string;
  dismissColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  backgroundColor?: string;
  color?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  animation?: string;
  animationDuration?: string;
  ariaLabel?: string;
  role?: string;
  ariaLive?: "off" | "polite" | "assertive";
  className?: string;
}

export function Alert({
  title = "Alert Title",
  content = "This is an alert message.",
  message = "This is an alert message.",
  variant = "default",
  size = "default",
  showIcon = true,
  icon = "info",
  iconColor = "currentColor",
  iconSize = "1rem",
  dismissible = false,
  dismissText = "×",
  dismissColor = "#6b7280",
  borderRadius = "",
  boxShadow = "",
  backgroundColor = "#f3f4f6",
  color = "#111827",
  textColor = "#111827",
  borderColor = "#d1d5db",
  borderWidth = "",
  padding = "",
  margin = "",
  width = "100%",
  height = "",
  fontSize = "",
  fontWeight = "400",
  lineHeight = "",
  animation = "",
  animationDuration = "300ms",
  ariaLabel = "",
  role = "alert",
  ariaLive = "polite",
  className = "",
}: AlertProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { actions } = useEditor();
  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    openPanel(
      "alert",
      {
        title,
        message,
        variant,
        size,
        showIcon,
        dismissible,
        borderRadius,
        shadow,
        backgroundColor,
        textColor,
        borderColor,
        padding,
        margin,
        width,
        height,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: AlertProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getIconComponent = (alertVariant: string) => {
    switch (alertVariant) {
      case "info":
        return Info;
      case "success":
        return CheckCircle;
      case "warning":
        return AlertTriangle;
      case "error":
        return XCircle;
      default:
        return AlertCircle;
    }
  };

  const getVariantColors = (alertVariant: string) => {
    switch (alertVariant) {
      case "info":
        return {
          bg: "#dbeafe",
          text: "#1e40af",
          border: "#3b82f6",
          icon: "#3b82f6",
        };
      case "success":
        return {
          bg: "#dcfce7",
          text: "#166534",
          border: "#22c55e",
          icon: "#22c55e",
        };
      case "warning":
        return {
          bg: "#fef3c7",
          text: "#92400e",
          border: "#f59e0b",
          icon: "#f59e0b",
        };
      case "error":
        return {
          bg: "#fee2e2",
          text: "#991b1b",
          border: "#ef4444",
          icon: "#ef4444",
        };
      default:
        return {
          bg: backgroundColor,
          text: textColor,
          border: borderColor,
          icon: textColor,
        };
    }
  };

  const getShadowClass = (shadowSize: string) => {
    switch (shadowSize) {
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      default:
        return "";
    }
  };

  const getSizeStyles = (alertSize: string) => {
    switch (alertSize) {
      case "sm":
        return { padding: "0.5rem", fontSize: "0.875rem", iconSize: "1rem" };
      case "lg":
        return { padding: "1.25rem", fontSize: "1.125rem", iconSize: "1.5rem" };
      default:
        return { padding: "1rem", fontSize: "1rem", iconSize: "1.25rem" };
    }
  };

  const IconComponent = getIconComponent(variant);
  const variantColors = getVariantColors(variant);
  const sizeStyles = getSizeStyles(size);

  const alertStyles = {
    backgroundColor: variant === "default" ? backgroundColor : variantColors.bg,
    color: variant === "default" ? (color || textColor) : variantColors.text,
    borderColor: variant === "default" ? borderColor : variantColors.border,
    borderRadius: borderRadius || "0.375rem",
    padding: padding || sizeStyles.padding,
    margin,
    width,
    height,
    border: borderWidth ? `${borderWidth} solid` : "1px solid",
    fontSize: fontSize || sizeStyles.fontSize,
    fontWeight,
    lineHeight,
    boxShadow,
    ...(animation && {
      animation: `${animation} ${animationDuration}`,
    }),
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      } ${className}`}
    >
      <div
        className={`flex items-start gap-3 ${getShadowClass(shadow)}`}
        style={alertStyles}
        onClick={handleShowProperties}
        role={role}
        aria-label={ariaLabel}
        aria-live={ariaLive}
      >
        {showIcon && (
          <div className="flex-shrink-0 mt-0.5">
            <IconComponent
              size={parseInt(iconSize) || sizeStyles.iconSize}
              style={{
                color: variant === "default" ? iconColor : variantColors.icon,
              }}
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          {title && (
            <h4 className="font-medium" style={{ margin: "0 0 4px 0" }}>
              {title}
            </h4>
          )}
          <p className="opacity-90" style={{ margin: 0, lineHeight: "1.4" }}>
            {content || message}
          </p>
        </div>

        {dismissible && (
          <button 
            className="flex-shrink-0 ml-2 opacity-70 hover:opacity-100 transition-opacity"
            style={{ color: dismissColor }}
            aria-label="Dismiss alert"
          >
            {dismissText}
          </button>
        )}
      </div>

      {/* Floating toolbar */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="alert"
            onEdit={() => {}}
            onGenerateAI={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {/* Label */}
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Alert ({variant})
        </div>
      )}
    </Resizer>
  );
}

Alert.craft = {
  displayName: "Alert",
  props: {
    title: "Alert Title",
    content: "This is an alert message.",
    message: "This is an alert message.",
    variant: "default",
    size: "default",
    showIcon: true,
    icon: "info",
    iconColor: "currentColor",
    iconSize: "1rem",
    dismissible: false,
    dismissText: "×",
    dismissColor: "#6b7280",
    borderRadius: "",
    boxShadow: "",
    backgroundColor: "#f3f4f6",
    color: "#111827",
    textColor: "#111827",
    borderColor: "#d1d5db",
    borderWidth: "",
    padding: "",
    margin: "",
    width: "100%",
    height: "",
    fontSize: "",
    fontWeight: "400",
    lineHeight: "",
    animation: "",
    animationDuration: "300ms",
    ariaLabel: "",
    role: "alert",
    ariaLive: "polite",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
