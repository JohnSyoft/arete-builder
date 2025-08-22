import { Button } from "@/components/ui/button"

export function CTA5() {
  return (
    <section className="bg-green-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-green-700/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
            <span className="text-green-100 text-sm font-medium">🌱 Eco-Friendly Hosting</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Websites That
            <br />
            <span className="text-green-200">Care for the Planet</span>
          </h2>

          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Create beautiful, fast websites while reducing your carbon footprint. Our platform runs on 100% renewable
            energy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Start Building Green
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Learn About Our Impact
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">100%</div>
              <div className="text-green-100">Renewable Energy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">Carbon</div>
              <div className="text-green-100">Neutral Hosting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-200 mb-2">2.5M kg</div>
              <div className="text-green-100">CO₂ Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}