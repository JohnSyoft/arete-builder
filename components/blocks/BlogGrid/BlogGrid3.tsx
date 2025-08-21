export const BlogGrid3 = () => {
  const posts = [
    {
      title: "The Future of AI in Web Development",
      excerpt: "Exploring how artificial intelligence is transforming the way we build websites.",
      author: "Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 days ago",
      tags: ["AI", "Development"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Sustainable Web Design Practices",
      excerpt: "Creating environmentally conscious websites that perform well and reduce carbon footprint.",
      author: "David Green",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "1 week ago",
      tags: ["Sustainability", "Design"],
      image: "/placeholder.svg?height=200&width=350",
    },
    {
      title: "Microservices Architecture Guide",
      excerpt: "A comprehensive guide to building scalable applications with microservices.",
      author: "Alex Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      date: "2 weeks ago",
      tags: ["Architecture", "Backend"],
      image: "/placeholder.svg?height=200&width=350",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Recent Posts</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 flex gap-2">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-background/90 text-foreground px-2 py-1 rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img src={post.avatar || "/placeholder.svg"} alt={post.author} className="w-8 h-8 rounded-full" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{post.author}</p>
                    <p className="text-xs text-muted-foreground">{post.date}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
