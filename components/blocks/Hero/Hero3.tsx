import { Button } from "@/components/ui/button"

export function Hero3() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            ✨ New: AI-Powered Design Assistant
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Design Without Limits
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Professional websites, zero code. Our AI helps you create pixel-perfect designs that convert.
        </p>
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
          Start Creating Now
        </Button>
        <div className="mt-12 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-400">10M+</div>
            <div className="text-gray-400">Websites Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-gray-400">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
