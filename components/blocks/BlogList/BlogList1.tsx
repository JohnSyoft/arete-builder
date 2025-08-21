export const BlogList1 = () => {
  const posts = [
    {
      title: "Getting Started with Modern Web Development",
      excerpt:
        "Learn the fundamentals of building modern web applications with the latest technologies and best practices.",
      author: "Sarah Johnson",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      category: "Development",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to build and maintain design systems that grow with your product and team over time.",
      author: "Mike Chen",
      date: "Dec 12, 2024",
      readTime: "8 min read",
      category: "Design",
    },
    {
      title: "The Future of User Experience",
      excerpt: "Exploring emerging trends and technologies that will shape the future of digital experiences.",
      author: "Emma Davis",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      category: "UX",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Latest Articles</h2>
          <p className="text-muted-foreground">Stay updated with our latest insights and tutorials</p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="border-b border-border pb-8 last:border-b-0">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 hover:text-primary cursor-pointer transition-colors">
                {post.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

              <button className="text-primary font-medium hover:underline">Read More →</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
