import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";
import {
  Star,
  Heart,
  Home,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Settings,
  Search,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Check,
  AlertCircle,
  Info,
  Zap,
  Shield,
  Globe,
  Camera,
  Play,
  Pause,
  Download,
  Upload,
  Share,
  Copy,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Lock,
  Unlock,
} from "lucide-react";

const iconMap = {
  star: Star,
  heart: Heart,
  home: Home,
  user: User,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  calendar: Calendar,
  clock: Clock,
  settings: Settings,
  search: Search,
  menu: Menu,
  x: X,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  plus: Plus,
  minus: Minus,
  check: Check,
  alertCircle: AlertCircle,
  info: Info,
  zap: Zap,
  shield: Shield,
  globe: Globe,
  camera: Camera,
  play: Play,
  pause: Pause,
  download: Download,
  upload: Upload,
  share: Share,
  copy: Copy,
  edit: Edit,
  trash: Trash2,
  eye: Eye,
  eyeOff: EyeOff,
  lock: Lock,
  unlock: Unlock,
};

interface IconProps {
  iconName?: keyof typeof iconMap;
  size?: number;
  color?: string;
  strokeWidth?: number;
  margin?: string;
  padding?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  hoverEffect?: boolean;
  onClick?: () => void;
  width?: string;
  height?: string;
}

export function Icon({
  iconName = "star",
  size = 24,
  color = "text-gray-700",
  strokeWidth = 2,
  margin = "my-2",
  padding = "p-0",
  backgroundColor = "",
  borderRadius = "",
  border = "",
  hoverEffect = false,
  width = "auto",
  height = "auto",
}: IconProps) {
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
      "icon",
      {
        iconName,
        size,
        color,
        strokeWidth,
        margin,
        padding,
        backgroundColor,
        borderRadius,
        border,
        hoverEffect,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: IconProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const IconComponent = iconMap[iconName] || Star;

  const containerClasses = `
    inline-flex items-center justify-center
    ${margin}
    ${padding}
    ${backgroundColor}
    ${borderRadius}
    ${border}
    ${color}
    ${
      hoverEffect
        ? "transition-all duration-200 hover:scale-110 cursor-pointer"
        : ""
    }
  `.trim();

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${
        selected ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        className={containerClasses}
      >
        <IconComponent size={size} strokeWidth={strokeWidth} />
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="button"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Icon ({iconName})
        </div>
      )}
    </Resizer>
  );
}

Icon.craft = {
  displayName: "Icon",
  props: {
    iconName: "star",
    size: 24,
    color: "text-gray-700",
    strokeWidth: 2,
    margin: "my-2",
    padding: "p-0",
    backgroundColor: "",
    borderRadius: "",
    border: "",
    hoverEffect: false,
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
