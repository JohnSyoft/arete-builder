export function Footer5() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-300 rounded-full"></div>
                <div className="w-3 h-3 bg-green-200 rounded-full"></div>
              </div>
              <span className="text-xl font-bold ml-2">EcoBuilder</span>
            </div>
            <p className="text-green-200 mb-6">
              Building sustainable websites for a better tomorrow. Carbon-neutral hosting and eco-friendly design
              practices.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-green-200">Carbon Neutral Since 2024</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-green-100 mb-4">Eco Features</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-green-200">Green Hosting</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-green-200">Optimized Performance</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-green-200">Minimal Carbon Footprint</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                <span className="text-green-200">Renewable Energy</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-green-100 mb-4">Impact Stats</h3>
            <div className="space-y-4">
              <div>
                <div className="text-2xl font-bold text-green-300">2.5M kg</div>
                <div className="text-sm text-green-200">CO₂ Saved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-300">100%</div>
                <div className="text-sm text-green-200">Renewable Energy</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-300">10K+</div>
                <div className="text-sm text-green-200">Green Websites</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-green-200 text-sm mb-4 sm:mb-0">
            © 2024 EcoBuilder. Building a greener web, one site at a time.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-green-300 hover:text-green-100">
              <span className="sr-only">Twitter</span>🌱
            </a>
            <a href="#" className="text-green-300 hover:text-green-100">
              <span className="sr-only">LinkedIn</span>🌿
            </a>
            <a href="#" className="text-green-300 hover:text-green-100">
              <span className="sr-only">GitHub</span>🌳
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
