export const BlogGrid4 = () => {
  const featuredPost = {
    title: "Building the Next Generation of Web Applications",
    excerpt: "Discover the latest technologies and frameworks that are shaping the future of web development.",
    author: "Emma Thompson",
    date: "March 20, 2024",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=600",
  }

  const posts = [
    {
      title: "GraphQL vs REST APIs",
      excerpt: "Comparing two popular API architectures for modern applications.",
      date: "Mar 18, 2024",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "CSS Container Queries",
      excerpt: "The new CSS feature that's changing responsive design.",
      date: "Mar 16, 2024",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "Web Accessibility Best Practices",
      excerpt: "Making your websites inclusive for all users.",
      date: "Mar 14, 2024",
      image: "/placeholder.svg?height=150&width=250",
    },
    {
      title: "Server-Side Rendering with Next.js",
      excerpt: "Improving performance with SSR and static generation.",
      date: "Mar 12, 2024",
      image: "/placeholder.svg?height=150&width=250",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Developer Blog</h2>
          <p className="text-muted-foreground text-lg">Stay ahead with the latest in web development</p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <article className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6 text-lg">{featuredPost.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span>{featuredPost.author}</span>
                  <span>•</span>
                  <span>{featuredPost.date}</span>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors w-fit">
                  Read Article
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group"
            >
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                <p className="text-xs text-muted-foreground">{post.date}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
