export const BlogGrid2 = () => {
  const posts = [
    {
      title: "Design Systems at Scale",
      excerpt: "Building and maintaining design systems for large organizations.",
      category: "Design",
      readTime: "5 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      title: "Performance Optimization",
      excerpt: "Techniques to improve web application performance and user experience.",
      category: "Development",
      readTime: "8 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      title: "User Experience Research",
      excerpt: "Methods and tools for conducting effective UX research.",
      category: "UX Research",
      readTime: "6 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
    {
      title: "Mobile-First Development",
      excerpt: "Best practices for developing mobile-first responsive applications.",
      category: "Mobile",
      readTime: "7 min read",
      image: "/placeholder.svg?height=250&width=400",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">Featured Stories</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover insights, tutorials, and best practices from industry experts
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  <button className="text-primary font-medium hover:underline">Read More</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
