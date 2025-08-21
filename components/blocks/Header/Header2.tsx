import { Button } from "@/components/ui/button"

export function Header2() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <div className="text-xl font-bold">WebBuilder</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Product
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-gray-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Start Free</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
