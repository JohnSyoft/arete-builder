export const BlogContent2 = () => {
  return (
    <article className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-3xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">Design Systems</span>
            <span className="text-muted-foreground text-sm">•</span>
            <span className="text-muted-foreground text-sm">Dec 18, 2024</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Creating Consistent User Experiences with Design Systems
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <img
              src="/placeholder.svg?height=48&width=48"
              alt="Author"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-medium text-foreground">Mike Chen</div>
              <div className="text-sm text-muted-foreground">Senior Design Engineer</div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border">
            <h3 className="font-semibold text-foreground mb-2">In this article:</h3>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• What are design systems and why they matter</li>
              <li>• Building your first component library</li>
              <li>• Maintaining consistency across teams</li>
              <li>• Tools and best practices</li>
            </ul>
          </div>
        </header>

        <div className="mb-10">
          <img
            src="/placeholder.svg?height=300&width=600"
            alt="Design system components"
            className="w-full h-48 md:h-72 object-cover rounded-lg"
          />
          <p className="text-sm text-muted-foreground mt-2 text-center">
            A well-organized design system helps teams build consistent interfaces
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
            Design systems have become essential for modern product development. They provide a shared language between
            designers and developers, ensuring consistency across all touchpoints of a digital product.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-10">The Foundation of Great Products</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            A design system is more than just a collection of UI components. It's a comprehensive guide that includes
            design principles, component libraries, documentation, and governance guidelines that help teams build
            cohesive user experiences.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm">💡</span>
              </div>
              <div>
                <h4 className="font-semibold text-blue-900 mb-2">Pro Tip</h4>
                <p className="text-blue-800 text-sm">
                  Start small with your design system. Focus on the most commonly used components first, then gradually
                  expand as your needs grow.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-10">Getting Started</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Building a design system requires careful planning and collaboration between design and development teams.
            The key is to start with a solid foundation and iterate based on real-world usage and feedback.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold text-foreground mb-3">Design Phase</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Define design principles</li>
                <li>• Create color palettes</li>
                <li>• Establish typography scales</li>
                <li>• Design core components</li>
              </ul>
            </div>
            <div className="bg-card rounded-lg p-6 border">
              <h4 className="font-semibold text-foreground mb-3">Development Phase</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Set up component library</li>
                <li>• Implement design tokens</li>
                <li>• Create documentation</li>
                <li>• Establish testing practices</li>
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Tags:</span>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">Design</span>
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">Systems</span>
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">UI/UX</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
              <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                Share
              </button>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
