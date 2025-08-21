export const Testimonial1 = () => {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we build and deploy websites. The drag-and-drop interface is intuitive and powerful.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "The component library is extensive and the customization options are endless. We've reduced our development time by 70%.",
      author: "Michael Chen",
      role: "Lead Developer",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote:
        "Outstanding support and documentation. The team is responsive and the platform keeps getting better with each update.",
      author: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-sm">
              <div className="mb-6">
                <div className="text-primary text-4xl mb-4">"</div>
                <p className="text-foreground leading-relaxed">{testimonial.quote}</p>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
