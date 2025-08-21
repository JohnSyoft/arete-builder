export const Team1 = () => {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "/placeholder.svg?height=300&width=300" },
    { name: "Michael Chen", role: "CTO", image: "/placeholder.svg?height=300&width=300" },
    { name: "Emily Davis", role: "Head of Design", image: "/placeholder.svg?height=300&width=300" },
    { name: "David Wilson", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300" },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The talented individuals behind our success, dedicated to delivering excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
