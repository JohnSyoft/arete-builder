import { Star } from "lucide-react"

export interface RatingBarRuntimeProps {
  rating?: number
  maxRating?: number
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  color?: string
  className?: string
}

export function RatingBarRuntime({
  rating = 0,
  maxRating = 5,
  disabled = false,
  size = "md",
  color = "#fbbf24",
  className = ""
}: RatingBarRuntimeProps) {
  const getSizeClass = () => {
    switch (size) {
      case "sm": return "w-4 h-4"
      case "lg": return "w-8 h-8"
      default: return "w-6 h-6"
    }
  }

  return (
    <div className={`inline-flex items-center space-x-1 ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => (
        <Star
          key={index}
          className={`${getSizeClass()} ${
            index < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
          style={{ color: index < rating ? color : undefined }}
        />
      ))}
    </div>
  )
}
