export const Team2 = () => {
  const team = [
    {
      name: "Alex Rodriguez",
      role: "Product Manager",
      bio: "Passionate about creating user-centered products that make a difference.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jessica Kim",
      role: "Marketing Director",
      bio: "Expert in digital marketing strategies and brand development.",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Robert Taylor",
      role: "Sales Lead",
      bio: "Building relationships and driving growth through strategic partnerships.",
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground">Meet the visionaries driving our company forward</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
              <img
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
