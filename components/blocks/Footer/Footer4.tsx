export function Footer4() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl"></div>
            <span className="text-2xl font-bold text-gray-900">BuildSite</span>
          </div>
          <p className="text-gray-600 max-w-md mx-auto">
            Empowering creators to build beautiful websites without limits.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">50K+</div>
            <div className="text-sm text-gray-600">Websites Created</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
            <div className="text-sm text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">24/7</div>
            <div className="text-sm text-gray-600">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">150+</div>
            <div className="text-sm text-gray-600">Templates</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            Terms of Service
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            Cookie Policy
          </a>
          <a href="#" className="text-gray-600 hover:text-orange-600 transition-colors">
            Contact
          </a>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2024 BuildSite Inc. All rights reserved. Made with ❤️ in San Francisco.
          </p>
        </div>
      </div>
    </footer>
  )
}
