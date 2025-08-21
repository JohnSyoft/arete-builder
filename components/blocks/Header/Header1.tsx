import { Button } from "@/components/ui/button"

export function Header1() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-900">WebBuilder</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Features
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Templates
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-900">
              About
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Sign In</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
