export function Features4() {
  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Our Platform?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've built the most comprehensive website builder with features that actually matter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Choose Your Template</h3>
                <p className="text-gray-600">
                  Start with one of our professionally designed templates or create from scratch.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Customize Everything</h3>
                <p className="text-gray-600">
                  Use our drag-and-drop editor to customize colors, fonts, layouts, and content.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Launch & Grow</h3>
                <p className="text-gray-600">
                  Publish your site with one click and use our marketing tools to grow your audience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Setup Time</span>
                <span className="font-semibold text-orange-600">5 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Templates Available</span>
                <span className="font-semibold text-orange-600">500+</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Uptime Guarantee</span>
                <span className="font-semibold text-orange-600">99.9%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Support Response</span>
                <span className="font-semibold text-orange-600">&lt; 1 hour</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Free SSL Certificate</span>
                <span className="font-semibold text-green-600">✓ Included</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Mobile Optimization</span>
                <span className="font-semibold text-green-600">✓ Automatic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
