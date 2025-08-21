import { Button } from "@/components/ui/button"

interface Hero1Props {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundColor?: string
}

export function Hero1Runtime({ 
  title = "Build Amazing Websites",
  subtitle = "Create stunning, professional websites with our powerful drag-and-drop builder. No coding required.",
  primaryButtonText = "Get Started Free",
  secondaryButtonText = "Watch Demo",
  backgroundColor = "from-blue-600 to-purple-600"
}: Hero1Props) {
  return (
    <section className={`relative bg-gradient-to-r ${backgroundColor} text-white`}>
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              {primaryButtonText}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
