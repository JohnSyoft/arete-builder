export const Team4 = () => {
  const team = [
    {
      name: "Dr. Amanda Foster",
      role: "Chief Medical Officer",
      credentials: "MD, PhD",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kevin Park",
      role: "Head of Operations",
      credentials: "MBA, PMP",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rachel Green",
      role: "Customer Success Lead",
      credentials: "BA, CSM",
      experience: "8+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">Our Team</span>
          <h2 className="text-3xl font-bold text-foreground mb-4">Expert Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our leadership team brings decades of combined experience and expertise to guide our mission.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6 mx-auto w-32 h-32">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-primary/10"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground mb-1">{member.credentials}</p>
              <p className="text-sm text-muted-foreground">{member.experience} experience</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
