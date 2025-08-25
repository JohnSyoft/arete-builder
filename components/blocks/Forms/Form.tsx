import React, { useState, useRef } from "react"
import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, Send, CheckCircle, XCircle } from "lucide-react"

export interface FormProps {
  title?: string
  description?: string
  submitButtonText?: string
  submitUrl?: string
  method?: "POST" | "PUT" | "PATCH"
  headers?: Record<string, string>
  successMessage?: string
  errorMessage?: string
  redirectUrl?: string
  showSuccessMessage?: boolean
  resetAfterSubmit?: boolean
  validateOnSubmit?: boolean
  width?: string
  backgroundColor?: string
  borderStyle?: string
  borderRadius?: string
  padding?: string
  shadow?: string
  className?: string
}

interface FormState {
  isSubmitting: boolean
  isSuccess: boolean
  error: string | null
  formData: Record<string, any>
}

export function Form({
  title = "Contact Form",
  description = "",
  submitButtonText = "Submit",
  submitUrl = "",
  method = "POST",
  headers = {},
  successMessage = "Form submitted successfully!",
  errorMessage = "Failed to submit form. Please try again.",
  redirectUrl = "",
  showSuccessMessage = true,
  resetAfterSubmit = true,
  validateOnSubmit = true,
  width = "100%",
  backgroundColor = "bg-white",
  borderStyle = "border-gray-300",
  borderRadius = "rounded-lg",
  padding = "p-6",
  shadow = "shadow-md",
  className = ""
}: FormProps) {
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
  const formRef = useRef<HTMLFormElement>(null)

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
    formData: {}
  })

  const handleShowProperties = () => {
    openPanel('form', {
      title,
      description,
      submitButtonText,
      submitUrl,
      method,
      headers,
      successMessage,
      errorMessage,
      redirectUrl,
      showSuccessMessage,
      resetAfterSubmit,
      validateOnSubmit,
      width,
      backgroundColor,
      borderStyle,
      borderRadius,
      padding,
      shadow
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: FormProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const collectFormData = () => {
    if (!formRef.current) return {}
    
    const formData = new FormData(formRef.current)
    const data: Record<string, any> = {}
    
    // Collect all form inputs
    formData.forEach((value, key) => {
      if (data[key]) {
        // Handle multiple values (checkboxes, etc.)
        if (Array.isArray(data[key])) {
          data[key].push(value)
        } else {
          data[key] = [data[key], value]
        }
      } else {
        data[key] = value
      }
    })
    
    return data
  }

  const validateForm = (): boolean => {
    if (!validateOnSubmit || !formRef.current) return true
    
    const requiredFields = formRef.current.querySelectorAll('[required]')
    let isValid = true
    
    requiredFields.forEach((field) => {
      const input = field as HTMLInputElement
      if (!input.value.trim()) {
        input.setCustomValidity('This field is required')
        input.reportValidity()
        isValid = false
      } else {
        input.setCustomValidity('')
      }
    })
    
    return isValid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }
    
    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }))
    
    try {
      const data = collectFormData()
      setFormState(prev => ({ ...prev, formData: data }))
      
      if (submitUrl) {
        const response = await fetch(submitUrl, {
          method,
          headers: {
            'Content-Type': 'application/json',
            ...headers
          },
          body: JSON.stringify(data)
        })
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const result = await response.json()
        console.log('Form submitted successfully:', result)
      }
      
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        isSuccess: true 
      }))
      
      if (resetAfterSubmit && formRef.current) {
        formRef.current.reset()
      }
      
      if (redirectUrl) {
        setTimeout(() => {
          window.location.href = redirectUrl
        }, 2000)
      }
      
    } catch (error) {
      console.error('Form submission error:', error)
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        error: errorMessage 
      }))
    }
  }

  const resetForm = () => {
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
      formData: {}
    })
    if (formRef.current) {
      formRef.current.reset()
    }
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
      style={{ width }}
    >
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className={`${backgroundColor} ${borderStyle} border ${borderRadius} ${padding} ${shadow} space-y-4`}
      >
        {title && (
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm text-gray-600 mt-1">{description}</p>
            )}
          </div>
        )}

        {/* Form fields will be rendered as children */}
        <div className="space-y-4">
          {/* This is where form field components will be dropped */}
          <div className="min-h-[100px] border-2 border-dashed border-gray-200 rounded-md p-4 text-center text-gray-500">
            Drop form elements here
          </div>
        </div>

        {/* Status Messages */}
        {formState.error && (
          <Alert className="border-red-200 bg-red-50">
            <XCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {formState.error}
            </AlertDescription>
          </Alert>
        )}

        {formState.isSuccess && showSuccessMessage && (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              {successMessage}
            </AlertDescription>
          </Alert>
        )}

        {/* Submit Button */}
        <div className="flex justify-between items-center pt-4">
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="flex items-center space-x-2"
          >
            {formState.isSubmitting ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
            <span>
              {formState.isSubmitting ? "Submitting..." : submitButtonText}
            </span>
          </Button>

          {(formState.isSuccess || formState.error) && (
            <Button
              type="button"
              variant="outline"
              onClick={resetForm}
              className="ml-2"
            >
              Reset
            </Button>
          )}
        </div>
      </form>

      {/* Floating Toolbar */}
      {(selected || hovered) && (
        <div className="absolute top-2 right-2">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onHelp={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {/* Component Label */}
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Form Container
        </div>
      )}
    </div>
  )
}

Form.craft = {
  displayName: "Form",
  props: {
    title: "Contact Form",
    description: "",
    submitButtonText: "Submit",
    submitUrl: "",
    method: "POST",
    headers: {},
    successMessage: "Form submitted successfully!",
    errorMessage: "Failed to submit form. Please try again.",
    redirectUrl: "",
    showSuccessMessage: true,
    resetAfterSubmit: true,
    validateOnSubmit: true,
    width: "100%",
    backgroundColor: "bg-white",
    borderStyle: "border-gray-300",
    borderRadius: "rounded-lg",
    padding: "p-6",
    shadow: "shadow-md",
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  }
}
