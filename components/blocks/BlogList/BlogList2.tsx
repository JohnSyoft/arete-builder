export const BlogList2 = () => {
  const posts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Best practices for structuring and organizing large React applications for maintainability.",
      author: "Alex Rodriguez",
      date: "Dec 18, 2024",
      readTime: "7 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to choosing between CSS Grid and Flexbox for your layout needs.",
      author: "Lisa Wang",
      date: "Dec 16, 2024",
      readTime: "4 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "API Design Best Practices",
      excerpt: "Learn how to design RESTful APIs that are intuitive, scalable, and developer-friendly.",
      author: "David Kim",
      date: "Dec 14, 2024",
      readTime: "9 min read",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our most popular articles covering the latest trends in web development and design
          </p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="font-medium">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                    Continue Reading
                    <span>→</span>
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
