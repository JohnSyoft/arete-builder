export const Testimonial5 = () => {
  const testimonials = [
    {
      quote:
        "This platform has exceeded all our expectations. The ease of use combined with powerful features makes it perfect for our agency.",
      author: "Sophie Williams",
      role: "Agency Founder",
      company: "Digital Craft Co.",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "We've built over 50 websites using this platform. The consistency and quality are unmatched in the industry.",
      author: "Marcus Johnson",
      role: "Lead Developer",
      company: "WebFlow Studios",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote: "The ROI has been incredible. We're delivering projects faster and our clients are happier than ever.",
      author: "Isabella Chen",
      role: "Project Manager",
      company: "TechSolutions Inc.",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-foreground mb-6">Customer Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how leading companies are transforming their web presence with our platform
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                <div className="mb-6">
                  <div className="text-primary text-5xl mb-4 opacity-50">"</div>
                  <p className="text-foreground text-lg leading-relaxed flex-grow">{testimonial.quote}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-foreground">{testimonial.author}</h4>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <img
                      src={testimonial.logo || "/placeholder.svg"}
                      alt={testimonial.company}
                      className="h-8 opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
