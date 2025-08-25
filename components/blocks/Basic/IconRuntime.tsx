import React from "react"
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
  Unlock
} from "lucide-react"

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
}

interface IconRuntimeProps {
  iconName?: keyof typeof iconMap
  size?: number
  color?: string
  strokeWidth?: number
  margin?: string
  padding?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
  hoverEffect?: boolean
  onClick?: () => void
}

export function IconRuntime({
  iconName = 'star',
  size = 24,
  color = 'text-gray-700',
  strokeWidth = 2,
  margin = 'my-2',
  padding = 'p-0',
  backgroundColor = '',
  borderRadius = '',
  border = '',
  hoverEffect = false,
  onClick
}: IconRuntimeProps) {
  const IconComponent = iconMap[iconName] || Star

  const containerClasses = `
    inline-flex items-center justify-center
    ${margin}
    ${padding}
    ${backgroundColor}
    ${borderRadius}
    ${border}
    ${color}
    ${hoverEffect ? 'transition-all duration-200 hover:scale-110 cursor-pointer' : ''}
  `.trim()

  return (
    <div className={containerClasses} onClick={onClick}>
      <IconComponent
        size={size}
        strokeWidth={strokeWidth}
      />
    </div>
  )
}
