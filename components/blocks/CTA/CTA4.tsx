import { Button } from "@/components/ui/button"

export function CTA4() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stop Losing Customers to Bad Design</h2>
              <p className="text-lg text-gray-600 mb-6">
                Your website is your first impression. Make it count with our conversion-optimized templates and
                professional design tools.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Increase conversions by up to 300%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Mobile-first responsive design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Built-in SEO optimization</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  View Examples
                </Button>
              </div>
            </div>
            <div className="bg-gradient-to-br from-orange-100 to-pink-100 p-8 lg:p-12 flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Conversion Chart"
                className="w-full h-auto max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}