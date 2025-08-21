export const BlogContent1 = () => {
  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Development</span>
            <span className="text-muted-foreground text-sm">Dec 15, 2024</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Building Modern Web Applications with React and TypeScript
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive guide to creating scalable, maintainable web applications using the latest tools and best
            practices.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-primary font-medium">SJ</span>
              </div>
              <span>Sarah Johnson</span>
            </div>
            <span>•</span>
            <span>12 min read</span>
            <span>•</span>
            <span>2.5k views</span>
          </div>
        </header>

        <div className="mb-12">
          <img
            src="/placeholder.svg?height=400&width=800"
            alt="Modern web development"
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-6">
            In today's rapidly evolving web development landscape, choosing the right tools and frameworks is crucial
            for building applications that are not only functional but also maintainable and scalable. React and
            TypeScript have emerged as a powerful combination that addresses many of the challenges developers face.
          </p>

          <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">Why React and TypeScript?</h2>

          <p className="text-muted-foreground leading-relaxed mb-6">
            React's component-based architecture provides a solid foundation for building user interfaces, while
            TypeScript adds static type checking that helps catch errors early in the development process. Together,
            they create a development experience that is both productive and reliable.
          </p>

          <div className="bg-muted/50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-foreground mb-3">Key Benefits:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Enhanced developer experience with better tooling</li>
              <li>• Improved code quality through static type checking</li>
              <li>• Better refactoring capabilities</li>
              <li>• Excellent IDE support and autocomplete</li>
            </ul>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            As we continue to push the boundaries of what's possible on the web, having a solid foundation becomes
            increasingly important. The combination of React and TypeScript provides exactly that foundation, enabling
            developers to build complex applications with confidence.
          </p>
        </div>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground text-sm rounded transition-colors">
                  Twitter
                </button>
                <button className="px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground text-sm rounded transition-colors">
                  LinkedIn
                </button>
              </div>
            </div>
            <button className="text-primary hover:underline">Read Next Article →</button>
          </div>
        </footer>
      </div>
    </article>
  )
}
