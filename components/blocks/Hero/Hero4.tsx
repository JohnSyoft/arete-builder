import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero4() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 bg-orange-100 text-orange-800">
            🚀 Launch Week Special
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Create. Launch.
            <span className="text-orange-600"> Succeed.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills
            needed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Try Free for 14 Days
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
          >
            See Live Examples
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">Build and deploy in minutes, not hours</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Beautiful Designs</h3>
            <p className="text-gray-600">Professional templates that convert</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Mobile Ready</h3>
            <p className="text-gray-600">Responsive on every device</p>
          </div>
        </div>
      </div>
    </section>
  )
}
