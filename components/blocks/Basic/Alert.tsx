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
  message?: string;
  variant?: "info" | "success" | "warning" | "error" | "default";
  size?: "small" | "medium" | "large";
  showIcon?: boolean;
  dismissible?: boolean;
  borderRadius?: string;
  shadow?: "none" | "sm" | "md" | "lg";
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
}

export function Alert({
  title = "Alert Title",
  message = "This is an alert message.",
  variant = "info",
  size = "medium",
  showIcon = true,
  dismissible = false,
  borderRadius = "8px",
  shadow = "none",
  backgroundColor = "#f3f4f6",
  textColor = "#374151",
  borderColor = "#d1d5db",
  padding = "16px",
  margin = "8px",
  width = "auto",
  height = "auto",
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
      case "small":
        return { padding: "8px 12px", fontSize: "14px", iconSize: 16 };
      case "large":
        return { padding: "20px 24px", fontSize: "18px", iconSize: 24 };
      default:
        return { padding: "16px 20px", fontSize: "16px", iconSize: 20 };
    }
  };

  const IconComponent = getIconComponent(variant);
  const variantColors = getVariantColors(variant);
  const sizeStyles = getSizeStyles(size);

  const alertStyles = {
    backgroundColor: variant === "default" ? backgroundColor : variantColors.bg,
    color: variant === "default" ? textColor : variantColors.text,
    borderColor: variant === "default" ? borderColor : variantColors.border,
    borderRadius,
    padding: variant === "default" ? padding : sizeStyles.padding,
    margin,
    border: "1px solid",
    fontSize: sizeStyles.fontSize,
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        margin: margin,
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <div
        className={`flex items-start gap-3 ${getShadowClass(shadow)}`}
        style={alertStyles}
        onClick={handleShowProperties}
      >
        {showIcon && (
          <div className="flex-shrink-0 mt-0.5">
            <IconComponent
              size={sizeStyles.iconSize}
              style={{
                color: variant === "default" ? textColor : variantColors.icon,
              }}
            />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <h4 className="font-medium" style={{ margin: "0 0 4px 0" }}>
            {title}
          </h4>
          <p className="opacity-90" style={{ margin: 0, lineHeight: "1.4" }}>
            {message}
          </p>
        </div>

        {dismissible && (
          <button className="flex-shrink-0 ml-2 opacity-70 hover:opacity-100 transition-opacity">
            <X size={16} />
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
    message: "This is an alert message.",
    variant: "info",
    size: "medium",
    showIcon: true,
    dismissible: false,
    borderRadius: "8px",
    shadow: "none",
    backgroundColor: "#f3f4f6",
    textColor: "#374151",
    borderColor: "#d1d5db",
    padding: "16px",
    margin: "8px",
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
