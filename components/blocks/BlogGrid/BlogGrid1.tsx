export const BlogGrid1 = () => {
  const posts = [
    {
      title: "Getting Started with Web Development",
      excerpt: "Learn the fundamentals of modern web development with this comprehensive guide.",
      author: "John Doe",
      date: "Mar 15, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Advanced React Patterns",
      excerpt: "Explore advanced React patterns and best practices for scalable applications.",
      author: "Jane Smith",
      date: "Mar 12, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "CSS Grid Layout Guide",
      excerpt: "Master CSS Grid with practical examples and real-world use cases.",
      author: "Mike Johnson",
      date: "Mar 10, 2024",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in web development
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
