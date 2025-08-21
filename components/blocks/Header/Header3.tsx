import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Header3() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
              <span className="text-white font-bold text-lg">⚡</span>
            </div>
            <div>
              <div className="text-xl font-bold">WebBuilder Pro</div>
              <Badge variant="secondary" className="text-xs bg-white/20 text-white border-white/30">
                v2.0
              </Badge>
            </div>
          </div>
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Templates
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Integrations
            </a>
            <a href="#" className="text-white/90 hover:text-white transition-colors">
              Help
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Sign In
            </Button>
            <Button className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
