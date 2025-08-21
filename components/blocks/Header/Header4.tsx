import { Button } from "@/components/ui/button"

export function Header4() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">BuildSite</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Templates
              </a>
              <a href="#" className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                Pricing
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600">
              Try Free
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
