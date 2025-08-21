import { Button } from "@/components/ui/button"

export function Hero2() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Future of
              <span className="text-blue-600"> Web Design</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Transform your ideas into beautiful, responsive websites. Our intuitive platform makes web design
              accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Building
              </Button>
              <Button size="lg" variant="outline">
                View Examples
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Forever Plan
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Website Builder Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
