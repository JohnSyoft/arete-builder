export function Features5() {
  return (
    <section className="bg-green-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-green-800 text-sm font-medium">🌱 Eco-Friendly Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Build Sustainably</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create beautiful websites while minimizing your environmental impact with our green hosting solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌿</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Renewable Energy</h3>
            <p className="text-gray-600">All our servers run on clean, renewable energy sources.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">♻️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Carbon Neutral</h3>
            <p className="text-gray-600">We offset 100% of our carbon emissions through verified projects.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimized Performance</h3>
            <p className="text-gray-600">Faster websites use less energy and provide better user experience.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Impact</h3>
            <p className="text-gray-600">Join our mission to create a more sustainable internet.</p>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2.5M kg</div>
              <div className="text-gray-600">CO₂ Emissions Saved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
              <div className="text-gray-600">Green Websites Hosted</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Renewable Energy Usage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
