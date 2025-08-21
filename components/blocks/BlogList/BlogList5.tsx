export const BlogList5 = () => {
  const posts = [
    {
      title: "Sustainable Web Development Practices",
      excerpt: "Learn how to build environmentally conscious websites that perform well and reduce carbon footprint.",
      author: "Green Dev Team",
      date: "Dec 25, 2024",
      readTime: "8 min read",
      category: "Sustainability",
      views: "2.1k",
    },
    {
      title: "The Future of Web Frameworks",
      excerpt: "Exploring upcoming trends and innovations in web development frameworks and tools.",
      author: "Tech Insights",
      date: "Dec 23, 2024",
      readTime: "11 min read",
      category: "Technology",
      views: "3.5k",
    },
    {
      title: "Building Carbon-Neutral Digital Products",
      excerpt: "A comprehensive guide to creating digital products with minimal environmental impact.",
      author: "Eco Design Lab",
      date: "Dec 21, 2024",
      readTime: "9 min read",
      category: "Green Tech",
      views: "1.8k",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-green-50/50 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Eco-Friendly Development
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-4">Sustainable Tech Blog</h2>
          <p className="text-muted-foreground">Discover how technology can contribute to a more sustainable future</p>
        </div>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-card rounded-xl p-6 border border-green-200/50 hover:border-green-300/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">{post.category}</span>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{post.views} views</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">{post.date}</span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-green-600 cursor-pointer transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-medium">{post.author}</span>
                </div>

                <button className="inline-flex items-center gap-2 px-4 py-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                  Read Article
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
