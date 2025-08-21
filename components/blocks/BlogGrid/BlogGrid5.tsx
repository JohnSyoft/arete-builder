export const BlogGrid5 = () => {
  const posts = [
    {
      title: "Mastering TypeScript for React Development",
      excerpt: "Learn advanced TypeScript patterns and techniques for building robust React applications.",
      category: "Tutorial",
      author: "Lisa Wang",
      date: "Mar 22, 2024",
      likes: 124,
      comments: 18,
      image: "/placeholder.svg?height=220&width=350",
    },
    {
      title: "The Art of Code Reviews",
      excerpt: "Best practices for conducting effective code reviews that improve code quality.",
      category: "Best Practices",
      author: "Tom Wilson",
      date: "Mar 20, 2024",
      likes: 89,
      comments: 12,
      image: "/placeholder.svg?height=220&width=350",
    },
    {
      title: "Building Scalable Node.js Applications",
      excerpt: "Architecture patterns and strategies for building enterprise-grade Node.js applications.",
      category: "Backend",
      author: "Maria Garcia",
      date: "Mar 18, 2024",
      likes: 156,
      comments: 24,
      image: "/placeholder.svg?height=220&width=350",
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features and how to use them in production applications.",
      category: "Frontend",
      author: "James Brown",
      date: "Mar 16, 2024",
      likes: 98,
      comments: 15,
      image: "/placeholder.svg?height=220&width=350",
    },
    {
      title: "Database Design Fundamentals",
      excerpt: "Essential principles for designing efficient and scalable database schemas.",
      category: "Database",
      author: "Anna Lee",
      date: "Mar 14, 2024",
      likes: 142,
      comments: 21,
      image: "/placeholder.svg?height=220&width=350",
    },
    {
      title: "DevOps for Frontend Developers",
      excerpt: "Understanding CI/CD, deployment strategies, and infrastructure for frontend teams.",
      category: "DevOps",
      author: "Chris Taylor",
      date: "Mar 12, 2024",
      likes: 167,
      comments: 28,
      image: "/placeholder.svg?height=220&width=350",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Engineering Blog</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Deep dives into technology, best practices, and lessons learned from our engineering team
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-medium text-sm">
                        {post.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{post.author}</p>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <span>♥</span> {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <span>💬</span> {post.comments}
                    </span>
                  </div>
                  <button className="text-primary font-medium text-sm hover:underline">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
