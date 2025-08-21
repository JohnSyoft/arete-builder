export const Testimonial4 = () => {
  const testimonials = [
    {
      quote: "Game-changing platform that has transformed our digital presence.",
      author: "Alex Thompson",
      role: "E-commerce Manager",
      company: "RetailPro",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Exceptional quality and performance. Highly recommended!",
      author: "Maria Santos",
      role: "Creative Director",
      company: "BrandStudio",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Success Stories</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-3xl p-8 border border-border shadow-lg relative z-10">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">"</span>
                </div>

                <p className="text-lg text-foreground mb-8 leading-relaxed">{testimonial.quote}</p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{testimonial.author}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                    <p className="text-primary font-medium">{testimonial.company}</p>
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
