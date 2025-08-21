export const BlogList3 = () => {
  const posts = [
    {
      title: "The Art of Minimalist Design",
      excerpt: "How less can be more when it comes to creating impactful user interfaces.",
      author: "Sophie Turner",
      date: "Dec 20, 2024",
      readTime: "6 min read",
      tags: ["Design", "UI/UX", "Minimalism"],
    },
    {
      title: "JavaScript Performance Optimization",
      excerpt: "Techniques and tools to make your JavaScript applications faster and more efficient.",
      author: "Ryan Cooper",
      date: "Dec 17, 2024",
      readTime: "10 min read",
      tags: ["JavaScript", "Performance", "Optimization"],
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "A complete guide to making your web applications usable by everyone.",
      author: "Maria Garcia",
      date: "Dec 13, 2024",
      readTime: "8 min read",
      tags: ["Accessibility", "Web Standards", "Inclusive Design"],
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Recent Posts</h2>
          <div className="w-20 h-1 bg-primary rounded"></div>
        </div>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="sm:w-24 flex-shrink-0">
                  <div className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary cursor-pointer transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="font-medium">{post.author}</span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <button className="text-primary font-medium hover:underline">Read Article</button>
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
