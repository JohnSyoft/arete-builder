export function Features3() {
  return (
    <section className="bg-gray-900 text-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features for Every Need</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From simple landing pages to complex e-commerce sites, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Drag & Drop Builder</h3>
            <p className="text-gray-300 mb-6">
              Create stunning layouts with our intuitive visual editor. No coding required.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Visual page builder</li>
              <li>• Pre-built components</li>
              <li>• Real-time preview</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Analytics & Insights</h3>
            <p className="text-gray-300 mb-6">
              Track your website performance with detailed analytics and conversion tracking.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Real-time analytics</li>
              <li>• Conversion tracking</li>
              <li>• Performance metrics</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">E-commerce Ready</h3>
            <p className="text-gray-300 mb-6">
              Sell products online with built-in payment processing and inventory management.
            </p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Payment integration</li>
              <li>• Inventory management</li>
              <li>• Order tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
