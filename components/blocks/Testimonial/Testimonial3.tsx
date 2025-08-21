export const Testimonial3 = () => {
  const testimonials = [
    {
      quote: "The best website builder I've ever used. Intuitive, powerful, and the results speak for themselves.",
      author: "Jennifer Liu",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote: "Incredible flexibility and ease of use. Our team was up and running in no time.",
      author: "Robert Kim",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote: "Outstanding customer support and a product that delivers on its promises.",
      author: "Amanda Foster",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
    {
      quote: "This platform has streamlined our entire web development process.",
      author: "Carlos Martinez",
      role: "Agency Owner",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-primary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Trusted by Thousands</h2>
          <p className="text-muted-foreground">Join the community of satisfied customers</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
