
export interface TextFieldRuntimeProps {
  placeholder?: string
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search"
  value?: string
  disabled?: boolean
  className?: string
}

export function TextFieldRuntime({
  placeholder = "Enter text...",
  type = "text",
  value = "",
  disabled = false,
  className = ""
}: TextFieldRuntimeProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      disabled={disabled}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 ${className}`}
    />
  )
}
