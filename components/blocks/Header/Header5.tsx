import { Button } from "@/components/ui/button"

export function Header5() {
  return (
    <header className="bg-green-50 border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-300 rounded-full"></div>
            </div>
            <span className="text-xl font-bold text-gray-900 ml-2">EcoBuilder</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Build
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Explore
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Learn
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">
              Community
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              Sign In
            </Button>
            <Button className="bg-green-600 hover:bg-green-700">Start Building</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
