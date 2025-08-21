import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer3() {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold mb-4">Stay Updated</div>
            <p className="text-purple-200 mb-6">
              Get the latest updates, tips, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-200"
              />
              <Button className="bg-white text-purple-900 hover:bg-purple-50">Subscribe</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-purple-200 hover:text-white">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="font-bold">W</span>
            </div>
            <span className="text-xl font-bold">WebBuilder</span>
          </div>
          <p className="text-purple-200">© 2024 WebBuilder. Crafted with ❤️ for creators worldwide.</p>
        </div>
      </div>
    </footer>
  )
}
