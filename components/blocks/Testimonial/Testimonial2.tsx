export const Testimonial2 = () => {
  const testimonial = {
    quote:
      "This website builder has revolutionized our workflow. What used to take weeks now takes days, and the results are consistently professional and polished.",
    author: "David Park",
    role: "CTO",
    company: "InnovateTech Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="flex justify-center mb-6">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-2xl">
                ★
              </span>
            ))}
          </div>

          <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8">
            "{testimonial.quote}"
          </blockquote>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.author}
            className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-primary/20"
          />
          <h4 className="text-xl font-semibold text-foreground">{testimonial.author}</h4>
          <p className="text-muted-foreground">{testimonial.role}</p>
          <p className="text-primary font-medium">{testimonial.company}</p>
        </div>
      </div>
    </section>
  )
}
