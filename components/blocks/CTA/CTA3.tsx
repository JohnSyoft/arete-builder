import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA3() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            🚀 Limited Time Offer
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Launch Your Website in
          <span className="text-blue-400"> 24 Hours</span>
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Get your professional website live in just one day. Our experts will help you every step of the way.
        </p>

        <div className="bg-gray-800 rounded-2xl p-8 mb-8">
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Get Started</Button>
          </div>
          <p className="text-sm text-gray-400 mt-4">Join 50,000+ users who trust us with their websites</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">24hrs</div>
            <div className="text-gray-400">Launch Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime SLA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
            <div className="text-gray-400">Expert Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}
