export const BlogList4 = () => {
  const posts = [
    {
      title: "Mastering TypeScript for React Development",
      excerpt: "Learn how to leverage TypeScript's powerful type system to build more robust React applications.",
      author: "James Wilson",
      date: "Dec 22, 2024",
      readTime: "12 min read",
      category: "Development",
      featured: true,
    },
    {
      title: "Modern CSS Techniques You Should Know",
      excerpt: "Explore the latest CSS features and techniques that will improve your styling workflow.",
      author: "Anna Lee",
      date: "Dec 19, 2024",
      readTime: "7 min read",
      category: "CSS",
    },
    {
      title: "State Management in React: A Complete Guide",
      excerpt: "Compare different state management solutions and learn when to use each approach.",
      author: "Tom Anderson",
      date: "Dec 15, 2024",
      readTime: "15 min read",
      category: "React",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Latest Updates
          </span>
          <h2 className="text-3xl font-bold text-foreground mb-4">Developer Blog</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with our latest articles on web development, design, and technology trends
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className={`relative p-6 rounded-xl border transition-all hover:shadow-lg ${
                post.featured
                  ? "bg-primary/5 border-primary/20 hover:border-primary/30"
                  : "bg-card border-border hover:border-border/60"
              }`}
            >
              {post.featured && (
                <div className="absolute -top-3 left-6">
                  <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    Featured
                  </span>
                </div>
              )}

              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground font-medium">{post.readTime}</span>
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
