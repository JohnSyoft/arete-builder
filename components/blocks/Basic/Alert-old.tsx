import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"
import { AlertCircle, CheckCircle, Info, XCircle, AlertTriangle, X } from "lucide-react"

interface AlertProps {
  title?: string
  message?: string
  variant?: 'info' | 'success' | 'warning' | 'error' | 'default'
  size?: 'small' | 'medium' | 'large'
  showIcon?: boolean
  dismissible?: boolean
  borderRadius?: string
  shadow?: 'none' | 'sm' | 'md' | 'lg'
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  padding?: string
  margin?: string
}

export function Alert({
  title = "Alert Title",
  message = "This is an alert message.",
  variant = 'info',
  size = 'medium',
  showIcon = true,
  dismissible = false,
  borderRadius = '8px',
  shadow = 'none',
  backgroundColor = '#f3f4f6',
  textColor = '#374151',
  borderColor = '#d1d5db',
  padding = '16px',
  margin = '8px'
}: AlertProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id
  }))

  const { actions } = useEditor()
  const { openPanel } = usePropertiesPanelStore()

  const handleShowProperties = () => {
    openPanel('alert', {
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
      margin
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: AlertProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getIconComponent = (alertType: string) => {
    switch (alertType) {
      case 'info': return Info
      case 'success': return CheckCircle
      case 'warning': return AlertTriangle
      case 'error': return XCircle
      default: return AlertCircle
    }
  }

  const getTypeStyles = (alertType: string, alertVariant: string) => {
    const styles = {
      info: {
        filled: 'bg-blue-100 border-blue-200 text-blue-800',
        outlined: 'bg-white border-blue-200 text-blue-800',
        subtle: 'bg-blue-50 border-blue-100 text-blue-700'
      },
      success: {
        filled: 'bg-green-100 border-green-200 text-green-800',
        outlined: 'bg-white border-green-200 text-green-800',
        subtle: 'bg-green-50 border-green-100 text-green-700'
      },
      warning: {
        filled: 'bg-yellow-100 border-yellow-200 text-yellow-800',
        outlined: 'bg-white border-yellow-200 text-yellow-800',
        subtle: 'bg-yellow-50 border-yellow-100 text-yellow-700'
      },
      error: {
        filled: 'bg-red-100 border-red-200 text-red-800',
        outlined: 'bg-white border-red-200 text-red-800',
        subtle: 'bg-red-50 border-red-100 text-red-700'
      }
    }
    return styles[alertType as keyof typeof styles]?.[alertVariant as keyof typeof styles.info] || styles.info.filled
  }

  const getSizeClasses = (alertSize: string) => {
    const paddingOverride = padding || (() => {
      switch (alertSize) {
        case 'sm': return 'p-3'
        case 'md': return 'p-4'
        case 'lg': return 'p-6'
        default: return 'p-4'
      }
    })()

    const textSizes = {
      sm: { title: 'text-sm font-medium', message: 'text-xs' },
      md: { title: 'text-base font-medium', message: 'text-sm' },
      lg: { title: 'text-lg font-medium', message: 'text-base' }
    }

    return {
      padding: paddingOverride,
      title: textSizes[alertSize as keyof typeof textSizes]?.title || textSizes.md.title,
      message: textSizes[alertSize as keyof typeof textSizes]?.message || textSizes.md.message
    }
  }

  const IconComponent = getIconComponent(type)
  const typeStyles = getTypeStyles(type, variant)
  const sizeClasses = getSizeClasses(size)

  const alertClasses = `
    ${typeStyles}
    ${sizeClasses.padding}
    ${margin}
    ${borderRadius}
    border
    flex
    items-start
    gap-3
  `.trim()

  const iconColor = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500',
    error: 'text-red-500'
  }[type] || 'text-blue-500'

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500 ring-opacity-50" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className={alertClasses}>
        {showIcon && (
          <IconComponent 
            size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} 
            className={`${iconColor} flex-shrink-0 mt-0.5`}
          />
        )}
        
        <div className="flex-1 min-w-0">
          {title && (
            <h4 
              className={`${sizeClasses.title} mb-1`}
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => {
                setProp((props: AlertProps) => {
                  props.title = e.target.textContent || ""
                })
              }}
            >
              {title}
            </h4>
          )}
          <p 
            className={sizeClasses.message}
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) => {
              setProp((props: AlertProps) => {
                props.message = e.target.textContent || ""
              })
            }}
          >
            {message}
          </p>
        </div>

        {dismissible && (
          <button className={`${iconColor} hover:opacity-70 flex-shrink-0`}>
            <X size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} />
          </button>
        )}
      </div>
      
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
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
          Alert ({type})
        </div>
      )}
    </div>
  )
}

Alert.craft = {
  displayName: "Alert",
  props: {
    title: "Alert Title",
    message: "This is an alert message. You can customize this text to display any important information.",
    type: 'info',
    variant: 'filled',
    showIcon: true,
    dismissible: false,
    size: 'md',
    margin: 'my-4',
    padding: '',
    borderRadius: 'rounded-lg'
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
