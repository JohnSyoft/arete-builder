"use client"

export const BlogContent3 = () => {
  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-card rounded-lg p-6 border mb-6">
                <h3 className="font-semibold text-foreground mb-4">Table of Contents</h3>
                <nav className="space-y-2 text-sm">
                  <a href="#introduction" className="block text-primary hover:underline">
                    Introduction
                  </a>
                  <a href="#fundamentals" className="block text-muted-foreground hover:text-foreground">
                    The Fundamentals
                  </a>
                  <a href="#implementation" className="block text-muted-foreground hover:text-foreground">
                    Implementation
                  </a>
                  <a href="#best-practices" className="block text-muted-foreground hover:text-foreground">
                    Best Practices
                  </a>
                  <a href="#conclusion" className="block text-muted-foreground hover:text-foreground">
                    Conclusion
                  </a>
                </nav>
              </div>

              <div className="bg-card rounded-lg p-6 border">
                <h3 className="font-semibold text-foreground mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt="Author"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium text-foreground text-sm">Emma Davis</div>
                    <div className="text-xs text-muted-foreground">Full Stack Developer</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Emma has 8+ years of experience building scalable web applications and leading development teams.
                </p>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-3">
            <header className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">Advanced Tutorial</span>
                <span className="text-muted-foreground text-sm">Dec 20, 2024</span>
                <span className="text-muted-foreground text-sm">•</span>
                <span className="text-muted-foreground text-sm">15 min read</span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
                Advanced React Patterns: Building Reusable Components
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Learn advanced React patterns and techniques to create flexible, reusable components that scale with
                your application.
              </p>
            </header>

            <div className="mb-8">
              <img
                src="/placeholder.svg?height=300&width=700"
                alt="React components"
                className="w-full h-48 md:h-64 object-cover rounded-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <section id="introduction" className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As React applications grow in complexity, the need for well-designed, reusable components becomes
                  increasingly important. This article explores advanced patterns that will help you build components
                  that are both flexible and maintainable.
                </p>
              </section>

              <section id="fundamentals" className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">The Fundamentals</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Before diving into advanced patterns, it's essential to understand the core principles that make
                  components reusable and maintainable.
                </p>

                <div className="bg-gray-50 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Code Example: Compound Components</h4>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded text-sm overflow-x-auto">
                    <code>{`const Modal = ({ children, isOpen, onClose }) => {
  return isOpen ? (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
};

Modal.Header = ({ children }) => (
  <div className="modal-header">{children}</div>
);

Modal.Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);`}</code>
                  </pre>
                </div>
              </section>

              <section id="implementation" className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Implementation Details</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Let's explore how to implement these patterns in real-world scenarios, focusing on performance and
                  developer experience.
                </p>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">ℹ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Important Note</h4>
                      <p className="text-blue-800 text-sm">
                        Always consider the performance implications of your component patterns, especially when dealing
                        with large lists or frequent re-renders.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="best-practices" className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card rounded-lg p-6 border">
                    <h4 className="font-semibold text-foreground mb-3">Do's</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✓ Keep components focused and single-purpose</li>
                      <li>✓ Use TypeScript for better developer experience</li>
                      <li>✓ Implement proper error boundaries</li>
                      <li>✓ Write comprehensive tests</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-lg p-6 border">
                    <h4 className="font-semibold text-foreground mb-3">Don'ts</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✗ Create overly complex component hierarchies</li>
                      <li>✗ Ignore performance implications</li>
                      <li>✗ Skip documentation and examples</li>
                      <li>✗ Forget about accessibility</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="conclusion" className="mb-10">
                <h2 className="text-2xl font-semibold text-foreground mb-4">Conclusion</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mastering advanced React patterns takes time and practice, but the investment pays off in more
                  maintainable and scalable applications. Start with simple patterns and gradually incorporate more
                  advanced techniques as your understanding grows.
                </p>
              </section>
            </div>

            <footer className="mt-12 pt-8 border-t border-border">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Was this helpful?</h4>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded hover:bg-green-200 transition-colors">
                      👍 Yes
                    </button>
                    <button className="px-3 py-1 bg-red-100 text-red-700 text-sm rounded hover:bg-red-200 transition-colors">
                      👎 No
                    </button>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Follow Author
                  </button>
                  <button className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors">
                    Bookmark
                  </button>
                </div>
              </div>
            </footer>
          </main>
        </div>
      </div>
    </article>
  )
}
