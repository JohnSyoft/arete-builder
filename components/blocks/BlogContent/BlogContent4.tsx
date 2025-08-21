export const BlogContent4 = () => {
  return (
    <article className="py-16 px-4 bg-gradient-to-br from-indigo-50/50 to-background">
      <div className="max-w-5xl mx-auto">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            Featured Article
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            The Complete Guide to Modern JavaScript Development
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about JavaScript in 2024, from ES6+ features to modern development workflows and
            best practices.
          </p>

          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Author"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-medium text-foreground">Alex Rodriguez</div>
                <div className="text-muted-foreground">Senior JavaScript Engineer</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>Dec 22, 2024</span>
              <span>•</span>
              <span>20 min read</span>
              <span>•</span>
              <span>4.2k views</span>
            </div>
          </div>
        </header>

        <div className="mb-12">
          <img
            src="/placeholder.svg?height=400&width=900"
            alt="JavaScript development"
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <aside className="lg:col-span-3">
            <div className="sticky top-8 space-y-6">
              <div className="bg-card rounded-xl p-6 border shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">Quick Navigation</h3>
                <nav className="space-y-3 text-sm">
                  <a href="#modern-features" className="flex items-center gap-2 text-primary hover:underline">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Modern ES6+ Features
                  </a>
                  <a
                    href="#async-programming"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                    Async Programming
                  </a>
                  <a href="#tooling" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                    Modern Tooling
                  </a>
                  <a
                    href="#performance"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full"></span>
                    Performance Tips
                  </a>
                </nav>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border">
                <h3 className="font-semibold text-foreground mb-3">💡 Pro Tips</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the most out of this guide by following along with the code examples in your own development
                  environment.
                </p>
                <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors text-sm">
                  Download Code Examples
                </button>
              </div>
            </div>
          </aside>

          <main className="lg:col-span-9">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-8 mb-10 border border-indigo-200/50">
                <h2 className="text-2xl font-semibold text-foreground mb-4">What You'll Learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      Modern JavaScript syntax and features
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      Asynchronous programming patterns
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                      Module systems and bundling
                    </li>
                  </ul>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Testing strategies and tools
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Performance optimization techniques
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                      Modern development workflows
                    </li>
                  </ul>
                </div>
              </div>

              <section id="modern-features" className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-6">Modern ES6+ Features</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  JavaScript has evolved significantly over the past few years. Let's explore the most important
                  features that every modern developer should know and use in their daily work.
                </p>

                <div className="bg-gray-900 rounded-xl p-6 mb-8 overflow-x-auto">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 text-sm ml-2">modern-javascript.js</span>
                  </div>
                  <pre className="text-gray-100 text-sm">
                    <code>{`// Destructuring and spread operator
const { name, age, ...rest } = user;
const newUser = { ...user, isActive: true };

// Arrow functions and template literals
const greetUser = (name) => \`Hello, \${name}!\`;

// Async/await for cleaner asynchronous code
const fetchUserData = async (id) => {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    return await response.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
  }
};`}</code>
                  </pre>
                </div>
              </section>

              <section id="async-programming" className="mb-12">
                <h2 className="text-3xl font-semibold text-foreground mb-6">Mastering Async Programming</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Understanding asynchronous programming is crucial for building responsive web applications. We'll
                  cover promises, async/await, and modern patterns for handling concurrent operations.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-card rounded-lg p-6 border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      Best Practices
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Always handle promise rejections</li>
                      <li>• Use Promise.all() for concurrent operations</li>
                      <li>• Implement proper error boundaries</li>
                      <li>• Consider using AbortController for cancellation</li>
                    </ul>
                  </div>
                  <div className="bg-card rounded-lg p-6 border">
                    <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      Common Pitfalls
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Forgetting to await async functions</li>
                      <li>• Creating unnecessary promise chains</li>
                      <li>• Not handling network failures</li>
                      <li>• Blocking the main thread with heavy operations</li>
                    </ul>
                  </div>
                </div>
              </section>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-10 border border-blue-200">
                <h3 className="text-xl font-semibold text-foreground mb-4">🚀 Ready to Level Up?</h3>
                <p className="text-muted-foreground mb-4">
                  This is just the beginning. Modern JavaScript development involves many more concepts and tools that
                  can significantly improve your productivity and code quality.
                </p>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Continue Reading →
                </button>
              </div>
            </div>
          </main>
        </div>

        <footer className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-foreground">Alex Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Senior JavaScript Engineer at TechCorp</div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded hover:bg-indigo-200 transition-colors">
                  Follow
                </button>
                <button className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded hover:bg-muted/80 transition-colors">
                  Message
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Share this article:</span>
              <div className="flex gap-2">
                <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                  <span className="sr-only">Share on Twitter</span>📱
                </button>
                <button className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors">
                  <span className="sr-only">Share on LinkedIn</span>💼
                </button>
                <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                  <span className="sr-only">Copy link</span>🔗
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </article>
  )
}
