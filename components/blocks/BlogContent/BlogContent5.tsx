export const BlogContent5 = () => {
  return (
    <article className="py-16 px-4 bg-gradient-to-b from-green-50/30 to-background">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Sustainable Development
            </div>
            <span className="text-muted-foreground text-sm">Dec 25, 2024</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-center">
            Building Eco-Friendly Web Applications
          </h1>

          <p className="text-xl text-muted-foreground mb-8 text-center leading-relaxed max-w-3xl mx-auto">
            Learn how to reduce your website's carbon footprint while maintaining excellent performance and user
            experience.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-medium">🌱</span>
              </div>
              <div>
                <div className="font-medium text-foreground">Green Dev Team</div>
                <div className="text-muted-foreground">Sustainable Tech Advocates</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>12 min read</span>
              <span>•</span>
              <span>3.1k views</span>
            </div>
          </div>
        </header>

        <div className="mb-12">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Sustainable web development"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
          <p className="text-sm text-muted-foreground mt-3 text-center">
            Sustainable web development practices can significantly reduce environmental impact
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 mb-10 border border-green-200">
            <h2 className="text-2xl font-semibold text-foreground mb-4">🌍 Why It Matters</h2>
            <p className="text-muted-foreground mb-4">
              The internet accounts for approximately 4% of global carbon emissions - more than the aviation industry.
              As developers, we have the power and responsibility to build more sustainable digital products.
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">4%</div>
                <div className="text-sm text-muted-foreground">Global CO2 emissions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-muted-foreground">Reduction possible</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">$$$</div>
                <div className="text-sm text-muted-foreground">Cost savings</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-foreground mb-6">Sustainable Development Practices</h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            Creating environmentally conscious web applications doesn't mean compromising on functionality or user
            experience. In fact, many sustainable practices also improve performance and reduce costs.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-card rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">⚡</span>
                Performance Optimization
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Minimize bundle sizes with tree shaking
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Implement efficient caching strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Use modern image formats (WebP, AVIF)
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  Optimize critical rendering path
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">🌐</span>
                Green Hosting & Infrastructure
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Choose renewable energy-powered hosting
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Implement efficient CDN strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Use serverless for better resource utilization
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                  Monitor and optimize server efficiency
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-foreground mb-6">Measuring Your Impact</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            To build truly sustainable applications, you need to measure and monitor your environmental impact. Here are
            the key metrics and tools to track your progress.
          </p>

          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="font-semibold text-foreground mb-4">🔧 Recommended Tools</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h5 className="font-medium text-foreground mb-2">Carbon Footprint</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Website Carbon Calculator</li>
                  <li>• EcoPing</li>
                  <li>• CO2.js library</li>
                </ul>
              </div>
              <div>
                <h5 className="font-medium text-foreground mb-2">Performance</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Lighthouse</li>
                  <li>• WebPageTest</li>
                  <li>• Core Web Vitals</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl p-8 mb-10 border border-green-200">
            <h3 className="text-xl font-semibold text-foreground mb-4">💡 Quick Wins</h3>
            <p className="text-muted-foreground mb-4">
              Start your sustainability journey with these immediate actions that can reduce your website's carbon
              footprint by up to 50%.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">Immediate Actions</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Enable gzip compression</li>
                  <li>✓ Optimize images</li>
                  <li>✓ Remove unused CSS/JS</li>
                </ul>
              </div>
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-medium text-foreground mb-2">This Week</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Implement lazy loading</li>
                  <li>✓ Switch to green hosting</li>
                  <li>✓ Set up monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-foreground mb-6">The Future is Green</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Sustainable web development is not just a trend—it's becoming a necessity. As awareness grows and
            regulations tighten, companies that prioritize environmental responsibility will have a competitive
            advantage.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            By implementing these practices, you're not only reducing environmental impact but also creating faster,
            more efficient applications that provide better user experiences and lower operational costs.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-2">🌱 Join the Green Web Movement</h3>
                <p className="text-sm text-muted-foreground">
                  Get weekly tips on sustainable web development and connect with like-minded developers.
                </p>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
                <button className="px-4 py-2 border border-green-300 text-green-700 rounded-lg hover:bg-green-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Tags:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded">Sustainability</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">Performance</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded">Green Tech</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-muted-foreground">Carbon saved: ~2.3kg CO2</span>
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-sm">🌱</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
