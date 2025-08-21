import { Button } from "@/components/ui/button"

interface Header1Props {
  brandName?: string
  navItems?: string[]
  signInText?: string
  ctaText?: string
}

export function Header1Runtime({
  brandName = "WebBuilder",
  navItems = ["Features", "Templates", "Pricing", "About"],
  signInText = "Sign In",
  ctaText = "Get Started"
}: Header1Props) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-gray-900">{brandName}</div>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a key={index} href="#" className="text-gray-700 hover:text-gray-900">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">{signInText}</Button>
            <Button>{ctaText}</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
