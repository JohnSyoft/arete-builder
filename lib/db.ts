export interface Project {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  pages: Page[]
}

export interface Page {
  id: string
  projectId: string
  name: string
  slug: string
  layout: any // Craft.js serialized state
  isHomePage: boolean
}

export interface Template {
  id: string
  name: string
  description: string
  category: "landing" | "blog" | "ecommerce" | "healthcare" | "business" | "portfolio"
  thumbnail: string
  layout: any // Craft.js serialized state
  featured?: boolean
  pages: {
    name: string
    slug: string
    layout: any
    isHomePage: boolean
  }[]
}

export interface Theme {
  id: string
  name: string
  description: string
  category: "minimal" | "modern" | "creative" | "professional" | "eco-friendly"
  thumbnail: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
  }
  typography: {
    fontFamily: string
    headingWeight: string
    bodyWeight: string
  }
  spacing: {
    sectionPadding: string
    elementSpacing: string
  }
  borderRadius: string
  shadows: boolean
}


const templates: Template[] = [
  {
    id: "elder-care",
    name: "Elder Care Website",
    description: "Complete elder care website template with multiple pages including home, about, services, blog, and contact",
    category: "healthcare",
    thumbnail: "/placeholder.svg?height=200&width=300",
    featured: true,
    layout: JSON.stringify({
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["home-page"],
        linkedNodes: {},
      },
      "home-page": {
        type: { resolvedName: "Page" },
        isCanvas: false,
        props: {
          pageSlug: "home",
          isHomePage: true
        },
        displayName: "Home Page",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      }
    }),
    pages: [
      {
        name: "Home",
        slug: "home",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-header",
              "elder-care-hero",
              "elder-care-features", 
              "elder-care-about",
              "elder-care-timeline",
              "elder-care-services",
              "elder-care-video",
              "elder-care-faq",
              "elder-care-blog",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-hero": {
            type: { resolvedName: "ElderCareHero1" },
            isCanvas: false,
            props: {
              backgroundImage: "https://placehold.co/1920x1080/4f46e5/ffffff?text=Elder+Care+Hero",
              title: "Welcome to our home.",
              subtitle: "#1 Care for your loved ones",
              description: "Our elder care services go beyond the traditional scope of nursing offering personalized support.",
              primaryButtonText: "Get a free care",
              primaryButtonLink: "#services",
              secondaryButtonText: "Ask questions?",
              secondaryButtonLink: "#contact",
              statsText: "500+ Volunteers - Register as volunteers?",
              statsLink: "#volunteer"
            },
            displayName: "Elder Care Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-features": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#1f2937",
              title: "Need some help?",
              subtitle: "Call now: 1 800 222 000",
              description: "Your generosity in whatever form it takes is deeply appreciated. Each act of kindness from you has a profound impact.",
              buttonText: "Support us",
              buttonLink: "#support"
            },
            displayName: "Elder Care Features",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-about": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Happy elder care",
              title: "Provides the best services for you.",
              description: "The place we call home is the place that feels most comfortable. A sense of home can especially.",
              features: [
                {
                  title: "Professional care",
                  description: "The place we call home is the place that feels most comfortable. A sense of home can especially."
                },
                {
                  title: "Affordable price", 
                  description: "There is no higher praise for us than the smile of happy patient, the thanks of engaged resident."
                }
              ],
              buttonText: "Discover more",
              buttonLink: "#about",
              phoneText: "Call Anytime",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Elder Care About",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-timeline": {
            type: { resolvedName: "ElderCareTimeline1" },
            isCanvas: false,
            props: {
              backgroundImage: "https://placehold.co/1920x700/3b82f6/ffffff?text=Timeline+Background",
              title: "Donated money counts.",
              subtitle: "Lorem ipsum dolor sit amet consectetur adipiscing.",
              totalAmount: "$175,990",
              totalDescription: "Collected in the many years",
              timelineItems: [
                { year: "1998", amount: "10k", description: "Total collected this year" },
                { year: "2008", amount: "18k", description: "Total collected this year" },
                { year: "2014", amount: "23k", description: "Total collected this year" },
                { year: "2017", amount: "32k", description: "Total collected this year" },
                { year: "2022", amount: "39k", description: "Total collected this year" },
                { year: "2024", amount: "42k", description: "Total collected this year" }
              ]
            },
            displayName: "Elder Care Timeline",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-services": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Rise your hand",
              title: "Our hospitality",
              description: "Lorem ipsum is simply dummy text of the printing and typesetting industry lorem ipsum has been the industry's standard dummy text.",
              services: [
                {
                  title: "Health facilities",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Health+Facilities",
                  link: "#health-facilities"
                },
                {
                  title: "Personal care",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=Personal+Care",
                  link: "#personal-care"
                },
                {
                  title: "Medical checkup",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Medical+Checkup",
                  link: "#medical-checkup"
                },
                {
                  title: "Health consultation",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/ef4444/ffffff?text=Health+Consultation",
                  link: "#health-consultation"
                },
                {
                  title: "Skilled nursing",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Skilled+Nursing",
                  link: "#skilled-nursing"
                },
                {
                  title: "Eldery nutrition",
                  description: "If you are going to use a passage lorem ipsum you need anything consectetur eiusm is tempor.",
                  image: "https://placehold.co/600x400/06b6d4/ffffff?text=Eldery+Nutrition",
                  link: "#elderly-nutrition"
                }
              ]
            },
            displayName: "Elder Care Services",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-video": {
            type: { resolvedName: "ElderCareVideo1" },
            isCanvas: false,
            props: {
              backgroundImage: "https://placehold.co/1920x700/1f2937/ffffff?text=Video+Background",
              videoUrl: "https://www.youtube.com/watch?v=cfXHhfNy7tU",
              playButtonText: "Play"
            },
            displayName: "Elder Care Video",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-faq": {
            type: { resolvedName: "ElderCareFAQ1" },
            isCanvas: false,
            props: {
              subtitle: "# Frequently asked questions",
              title: "A short brief of with our senior citizens.",
              supportText: "Expert support available 24/7.",
              faqs: [
                {
                  question: "What is senior living?",
                  answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable."
                },
                {
                  question: "How much does senior living cost?",
                  answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable."
                },
                {
                  question: "Is transportation available?",
                  answer: "There are many variations of passages lorem ipsum available, but the majority have suffered alteration some form, injected humour, words which don't look even slightly believable."
                }
              ]
            },
            displayName: "Elder Care FAQ",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-blog": {
            type: { resolvedName: "ElderCareBlog1" },
            isCanvas: false,
            props: {
              subtitle: "# Latest news",
              title: "Top care articles",
              buttonText: "Read articles",
              buttonLink: "#blog",
              posts: [
                {
                  title: "Beautiful with senior person",
                  description: "Lorem ipsum is simply dummy text printing typesetting industry.",
                  image: "https://placehold.co/600x430/10b981/ffffff?text=Senior+Person",
                  category: "Health",
                  date: "30 August 2024",
                  author: "Den viliamson",
                  likes: 25,
                  link: "#blog-post-1"
                },
                {
                  title: "Always happy and satisfied",
                  description: "Lorem ipsum is simply dummy text printing typesetting industry.",
                  image: "https://placehold.co/600x430/3b82f6/ffffff?text=Happy+Senior",
                  category: "Care",
                  date: "28 August 2024",
                  author: "Hugh macleod",
                  likes: 54,
                  link: "#blog-post-2"
                },
                {
                  title: "Good to talk & feel creative",
                  description: "Lorem ipsum is simply dummy text printing typesetting industry.",
                  image: "https://placehold.co/600x430/f59e0b/ffffff?text=Creative+Senior",
                  category: "Bliss",
                  date: "26 August 2024",
                  author: "Walton smith",
                  likes: 42,
                  link: "#blog-post-3"
                }
              ]
            },
            displayName: "Elder Care Blog",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-footer": {
            type: { resolvedName: "ElderCareFooter1" },
            isCanvas: false,
            props: {
              backgroundImage: "https://placehold.co/1920x400/1f2937/ffffff?text=Footer+Background",
              title: "Need any consultations for senior caring please contact us.",
              phoneButtonText: "Call us - 1 800 222 000",
              contactButtonText: "Contact us",
              phoneNumber: "1 800 222 000",
              email: "info@domain.com",
              logo: "https://placehold.co/150x50/ffffff/000000?text=Elder+Care",
              risingMoney: "$90,320",
              careTypes: [
                "Senior citizen",
                "Residential care", 
                "Skilled nursing",
                "Personal care"
              ],
              donationText: "Your donation supports mission cause. Every contribution matters, enabling us to goal.",
              newsletterTitle: "Subscribe our newsletter",
              newsletterDescription: "Subscribe our newsletter to get the latest news and updates.",
              copyright: "© 2025 Crafto is Proudly Powered by ThemeZaa"
            },
            displayName: "Elder Care Footer",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: true
      },
      {
        name: "About",
        slug: "about",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-about-header",
              "elder-care-about-hero",
              "elder-care-about-content",
              "elder-care-team",
              "elder-care-values",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-about-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-about-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# About Us",
              title: "Dedicated to providing exceptional elder care services.",
              description: "We are committed to ensuring the comfort, dignity, and well-being of our senior residents through compassionate care and professional services.",
              features: [
                {
                  title: "Experienced Team",
                  description: "Our staff consists of highly trained professionals with years of experience in elder care."
                },
                {
                  title: "24/7 Support", 
                  description: "Round-the-clock care and support to ensure the safety and comfort of our residents."
                }
              ],
              buttonText: "Learn More",
              buttonLink: "#about-content",
              phoneText: "Call Us",
              phoneNumber: "1 800 222 000"
            },
            displayName: "About Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-about-content": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Our Story",
              title: "A legacy of compassionate care.",
              description: "For over two decades, we have been providing exceptional elder care services, building a reputation for excellence and compassion in our community.",
              features: [
                {
                  title: "Mission",
                  description: "To provide compassionate, professional care that enhances the quality of life for our senior residents."
                },
                {
                  title: "Vision", 
                  description: "To be the leading provider of elder care services, setting the standard for excellence and innovation."
                }
              ],
              buttonText: "Our Services",
              buttonLink: "#services",
              phoneText: "Contact Us",
              phoneNumber: "1 800 222 000"
            },
            displayName: "About Content",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-team": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Meet Our Team",
              title: "Dedicated professionals",
              description: "Our team of experienced caregivers and medical professionals work together to provide the highest quality of care.",
              services: [
                {
                  title: "Medical Staff",
                  description: "Licensed nurses and medical professionals available 24/7.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Medical+Staff",
                  link: "#medical-staff"
                },
                {
                  title: "Caregivers",
                  description: "Compassionate caregivers trained in elder care best practices.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=Caregivers",
                  link: "#caregivers"
                },
                {
                  title: "Support Staff",
                  description: "Administrative and support staff ensuring smooth operations.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Support+Staff",
                  link: "#support-staff"
                }
              ]
            },
            displayName: "Team Section",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-values": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Our Values",
              subtitle: "Compassion, Respect, Excellence",
              description: "These core values guide everything we do and shape the culture of our organization.",
              buttonText: "Join Our Team",
              buttonLink: "#careers"
            },
            displayName: "Values Section",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-footer": {
            type: { resolvedName: "ElderCareFooter1" },
            isCanvas: false,
            props: {
              backgroundImage: "https://placehold.co/1920x400/1f2937/ffffff?text=Footer+Background",
              title: "Need any consultations for senior caring please contact us.",
              phoneButtonText: "Call us - 1 800 222 000",
              contactButtonText: "Contact us",
              phoneNumber: "1 800 222 000",
              email: "info@domain.com",
              logo: "https://placehold.co/150x50/ffffff/000000?text=Elder+Care",
              risingMoney: "$90,320",
              careTypes: [
                "Senior citizen",
                "Residential care", 
                "Skilled nursing",
                "Personal care"
              ],
              donationText: "Your donation supports mission cause. Every contribution matters, enabling us to goal.",
              newsletterTitle: "Subscribe our newsletter",
              newsletterDescription: "Subscribe our newsletter to get the latest news and updates.",
              copyright: "© 2025 Crafto is Proudly Powered by ThemeZaa"
            },
            displayName: "Elder Care Footer",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Services",
        slug: "services",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-services-header",
              "elder-care-services-hero",
              "elder-care-services-grid",
              "elder-care-testimonials",
              "elder-care-cta",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-services-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Services Details",
        slug: "services-details",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-service-detail-header",
              "elder-care-service-detail-hero",
              "elder-care-service-detail-content",
              "elder-care-related-services",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-service-detail-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Moments of Care",
        slug: "moments-of-care",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-moments-header",
              "elder-care-moments-hero",
              "elder-care-moments-gallery",
              "elder-care-moments-stories",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-moments-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Blog",
        slug: "blog",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-blog-header",
              "elder-care-blog-hero",
              "elder-care-blog-grid",
              "elder-care-blog-sidebar",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-blog-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Blog Single",
        slug: "blog-single",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-blog-single-header",
              "elder-care-blog-single-hero",
              "elder-care-blog-single-content",
              "elder-care-blog-single-sidebar",
              "elder-care-related-posts",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-blog-single-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      },
      {
        name: "Contact",
        slug: "contact",
        layout: JSON.stringify({
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [
              "elder-care-contact-header",
              "elder-care-contact-hero",
              "elder-care-contact-info",
              "elder-care-contact-form",
              "elder-care-contact-map",
              "elder-care-footer"
            ],
            linkedNodes: {},
          },
          "elder-care-contact-header": {
            type: { resolvedName: "HeaderWrapper" },
            isCanvas: false,
            props: {
              logoText: "Elder Care",
              logoUrl: "https://placehold.co/150x50/4f46e5/ffffff?text=Elder+Care",
              backgroundColor: "#ffffff",
              textColor: "#1f2937",
              logoSize: "medium",
              navigationItems: [
                { id: "home", label: "Home", href: "/" },
                { id: "about", label: "About", href: "/about" },
                { id: "services", label: "Services", href: "/services" },
                { id: "moments", label: "Moments", href: "/moments-of-care" },
                { id: "blog", label: "Blog", href: "/blog" },
                { id: "contact", label: "Contact", href: "/contact" }
              ],
              flexDirection: "row",
              gap: "gap-8",
              justifyContent: "between",
              alignItems: "center",
              padding: "px-6 py-4",
              margin: "mb-0"
            },
            displayName: "Elder Care Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          }
        }),
        isHomePage: false
      }
    ]
  }
]

// Project CRUD operations
export const db = {
  projects: {
    getAll: () => projects,
    getById: (id: string) => projects.find((p) => p.id === id),
    create: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
      const newProject: Project = {
        ...project,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      projects.push(newProject)
      return newProject
    },
    update: (id: string, updates: Partial<Project>) => {
      const index = projects.findIndex((p) => p.id === id)
      if (index !== -1) {
        projects[index] = { ...projects[index], ...updates, updatedAt: new Date() }
        return projects[index]
      }
      return null
    },
    delete: (id: string) => {
      projects = projects.filter((p) => p.id !== id)
    },
  },
  templates: {
    getAll: () => templates,
    getById: (id: string) => templates.find((t) => t.id === id),
    getByCategory: (category: Template["category"]) => templates.filter((t) => t.category === category),
  },
  themes: {
    getAll: () => themes,
    getById: (id: string) => themes.find((t) => t.id === id),
    getByCategory: (category: Theme["category"]) => themes.filter((t) => t.category === category),
  },
  pages: {
    getByProjectId: (projectId: string) => {
      const project = projects.find((p) => p.id === projectId)
      return project?.pages || []
    },
    create: (page: Omit<Page, "id">) => {
      const newPage: Page = {
        ...page,
        id: Date.now().toString(),
      }
      const project = projects.find((p) => p.id === page.projectId)
      if (project) {
        project.pages.push(newPage)
        project.updatedAt = new Date()
      }
      return newPage
    },
    update: (id: string, updates: Partial<Page>) => {
      for (const project of projects) {
        const pageIndex = project.pages.findIndex((p) => p.id === id)
        if (pageIndex !== -1) {
          project.pages[pageIndex] = { ...project.pages[pageIndex], ...updates }
          project.updatedAt = new Date()
          return project.pages[pageIndex]
        }
      }
      return null
    },
  },
}
