import { Template } from "../db";

const elderCareTemplate:Template = {
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
          },
          "elder-care-services-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Our Services",
              title: "Comprehensive care solutions for every need.",
              description: "We offer a wide range of specialized services designed to meet the unique needs of our senior residents and their families.",
              features: [
                {
                  title: "24/7 Care",
                  description: "Round-the-clock professional care and support for peace of mind."
                },
                {
                  title: "Specialized Programs", 
                  description: "Customized care programs tailored to individual needs and preferences."
                }
              ],
              buttonText: "View All Services",
              buttonLink: "#services-grid",
              phoneText: "Call for Info",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Services Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-services-grid": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Comprehensive Care",
              title: "Our specialized services",
              description: "From medical care to daily assistance, we provide comprehensive services to ensure the comfort and well-being of our residents.",
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
            displayName: "Services Grid",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-testimonials": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "What Families Say",
              subtitle: "Trusted by families nationwide",
              description: "Hear from the families who have entrusted their loved ones to our care.",
              buttonText: "Read More Stories",
              buttonLink: "#testimonials"
            },
            displayName: "Testimonials Section",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-cta": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Get Started",
              title: "Ready to learn more about our services?",
              description: "Contact us today to schedule a tour or speak with our care team about how we can help your family.",
              features: [
                {
                  title: "Free Consultation",
                  description: "Schedule a complimentary consultation to discuss your needs."
                },
                {
                  title: "Facility Tour", 
                  description: "Visit our facilities and meet our caring staff."
                }
              ],
              buttonText: "Schedule Tour",
              buttonLink: "#contact",
              phoneText: "Call Now",
              phoneNumber: "1 800 222 000"
            },
            displayName: "CTA Section",
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
          },
          "elder-care-service-detail-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Service Details",
              title: "Comprehensive health facilities and care.",
              description: "Our state-of-the-art health facilities provide comprehensive medical care and support services designed specifically for our senior residents.",
              features: [
                {
                  title: "24/7 Medical Support",
                  description: "Round-the-clock medical care and emergency response services."
                },
                {
                  title: "Specialized Equipment", 
                  description: "Modern medical equipment and technology for optimal care."
                }
              ],
              buttonText: "Schedule Visit",
              buttonLink: "#contact",
              phoneText: "Call for Details",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Service Detail Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-service-detail-content": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# What We Offer",
              title: "Detailed service information",
              description: "Learn more about our comprehensive health facilities and the specialized care we provide to our residents.",
              services: [
                {
                  title: "Emergency Care",
                  description: "Immediate medical response and emergency care services available 24/7.",
                  image: "https://placehold.co/600x400/ef4444/ffffff?text=Emergency+Care",
                  link: "#emergency-care"
                },
                {
                  title: "Rehabilitation Services",
                  description: "Physical therapy and rehabilitation programs to help residents maintain independence.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Rehabilitation",
                  link: "#rehabilitation"
                },
                {
                  title: "Medication Management",
                  description: "Professional medication management and administration by licensed nurses.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=Medication+Management",
                  link: "#medication-management"
                },
                {
                  title: "Health Monitoring",
                  description: "Regular health checkups and monitoring to ensure optimal wellness.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Health+Monitoring",
                  link: "#health-monitoring"
                }
              ]
            },
            displayName: "Service Detail Content",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-related-services": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Related Services",
              subtitle: "Explore our other care options",
              description: "Discover additional services and care options that complement our health facilities.",
              buttonText: "View All Services",
              buttonLink: "#services"
            },
            displayName: "Related Services",
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
          },
          "elder-care-moments-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Moments of Care",
              title: "Celebrating life's precious moments together.",
              description: "Every day brings new opportunities for joy, connection, and meaningful experiences. Discover the heartwarming moments that make our community special.",
              features: [
                {
                  title: "Daily Activities",
                  description: "Engaging activities and programs designed to enrich daily life."
                },
                {
                  title: "Community Events", 
                  description: "Regular social gatherings and celebrations that bring residents together."
                }
              ],
              buttonText: "View Gallery",
              buttonLink: "#moments-gallery",
              phoneText: "Share Your Story",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Moments Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-moments-gallery": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Life in Pictures",
              title: "Capturing precious moments",
              description: "From daily activities to special celebrations, these photos showcase the joy and community spirit that defines our elder care experience.",
              services: [
                {
                  title: "Birthday Celebrations",
                  description: "Special birthday parties and celebrations that make each resident feel cherished.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Birthday+Party",
                  link: "#birthday-celebrations"
                },
                {
                  title: "Art & Crafts",
                  description: "Creative activities and art therapy sessions that inspire and engage.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=Art+Therapy",
                  link: "#art-crafts"
                },
                {
                  title: "Music & Entertainment",
                  description: "Live music performances and entertainment that bring joy to our community.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Music+Performance",
                  link: "#music-entertainment"
                },
                {
                  title: "Garden Activities",
                  description: "Outdoor gardening and nature activities that promote wellness and connection.",
                  image: "https://placehold.co/600x400/22c55e/ffffff?text=Garden+Activities",
                  link: "#garden-activities"
                }
              ]
            },
            displayName: "Moments Gallery",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-moments-stories": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Stories of Joy",
              subtitle: "Heartwarming testimonials from families",
              description: "Read the touching stories and testimonials from families who have experienced the love and care we provide.",
              buttonText: "Read More Stories",
              buttonLink: "#testimonials"
            },
            displayName: "Moments Stories",
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
          },
          "elder-care-blog-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Latest News",
              title: "Top care articles and insights.",
              description: "Stay informed with the latest news, insights, and expert advice on elder care, health, and wellness from our team of professionals.",
              features: [
                {
                  title: "Expert Insights",
                  description: "Professional advice and tips from our experienced care team."
                },
                {
                  title: "Health & Wellness", 
                  description: "Articles on maintaining health and wellness in senior years."
                }
              ],
              buttonText: "Read Articles",
              buttonLink: "#blog-grid",
              phoneText: "Subscribe",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Blog Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-blog-grid": {
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
            displayName: "Blog Grid",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-blog-sidebar": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Stay Updated",
              subtitle: "Subscribe to our newsletter",
              description: "Get the latest elder care news, tips, and insights delivered directly to your inbox.",
              buttonText: "Subscribe Now",
              buttonLink: "#newsletter"
            },
            displayName: "Blog Sidebar",
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
          },
          "elder-care-blog-single-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Blog Article",
              title: "Beautiful with senior person - A heartwarming story.",
              description: "Discover the inspiring journey of how our care team creates beautiful moments and meaningful connections with our senior residents every day.",
              features: [
                {
                  title: "Published",
                  description: "August 30, 2024 by Den Williamson"
                },
                {
                  title: "Category", 
                  description: "Health & Wellness"
                }
              ],
              buttonText: "Share Article",
              buttonLink: "#share",
              phoneText: "Read More",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Blog Single Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-blog-single-content": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Article Content",
              title: "The full story",
              description: "Read the complete article about creating beautiful moments with senior residents and the impact of compassionate care.",
              services: [
                {
                  title: "Introduction",
                  description: "Every day brings new opportunities to create meaningful connections and beautiful moments with our senior residents.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Introduction",
                  link: "#introduction"
                },
                {
                  title: "The Journey",
                  description: "Follow the inspiring journey of how our care team makes a difference in the lives of seniors.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=The+Journey",
                  link: "#journey"
                },
                {
                  title: "Key Insights",
                  description: "Learn about the key principles and practices that guide our approach to elder care.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Key+Insights",
                  link: "#insights"
                },
                {
                  title: "Conclusion",
                  description: "Discover how these beautiful moments create lasting memories and meaningful relationships.",
                  image: "https://placehold.co/600x400/8b5cf6/ffffff?text=Conclusion",
                  link: "#conclusion"
                }
              ]
            },
            displayName: "Blog Single Content",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-blog-single-sidebar": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Related Articles",
              subtitle: "More stories you might enjoy",
              description: "Explore more inspiring stories and expert insights about elder care and senior wellness.",
              buttonText: "View All Articles",
              buttonLink: "#blog"
            },
            displayName: "Blog Single Sidebar",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-related-posts": {
            type: { resolvedName: "ElderCareBlog1" },
            isCanvas: false,
            props: {
              subtitle: "# You might also like",
              title: "Related articles",
              buttonText: "Read more",
              buttonLink: "#blog",
              posts: [
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
            displayName: "Related Posts",
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
          },
          "elder-care-contact-hero": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Get in Touch",
              title: "We're here to help and answer your questions.",
              description: "Contact our caring team today to learn more about our services, schedule a tour, or discuss how we can help your family.",
              features: [
                {
                  title: "24/7 Support",
                  description: "Our team is available around the clock to assist you."
                },
                {
                  title: "Free Consultation", 
                  description: "Schedule a complimentary consultation to discuss your needs."
                }
              ],
              buttonText: "Schedule Tour",
              buttonLink: "#contact-form",
              phoneText: "Call Now",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Contact Hero",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-contact-info": {
            type: { resolvedName: "ElderCareServices1" },
            isCanvas: false,
            props: {
              subtitle: "# Contact Information",
              title: "Multiple ways to reach us",
              description: "Choose the most convenient way to get in touch with our team. We're here to help with any questions or concerns.",
              services: [
                {
                  title: "Phone Support",
                  description: "Call us directly for immediate assistance and support.",
                  image: "https://placehold.co/600x400/10b981/ffffff?text=Phone+Support",
                  link: "tel:1-800-222-000"
                },
                {
                  title: "Email Contact",
                  description: "Send us an email and we'll respond within 24 hours.",
                  image: "https://placehold.co/600x400/3b82f6/ffffff?text=Email+Contact",
                  link: "mailto:info@domain.com"
                },
                {
                  title: "Visit Us",
                  description: "Schedule a visit to tour our facilities and meet our team.",
                  image: "https://placehold.co/600x400/f59e0b/ffffff?text=Visit+Us",
                  link: "#visit"
                },
                {
                  title: "Emergency Contact",
                  description: "24/7 emergency contact for urgent care needs.",
                  image: "https://placehold.co/600x400/ef4444/ffffff?text=Emergency+Contact",
                  link: "tel:1-800-222-000"
                }
              ]
            },
            displayName: "Contact Info",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-contact-form": {
            type: { resolvedName: "ElderCareFeatures1" },
            isCanvas: false,
            props: {
              backgroundColor: "#f8fafc",
              title: "Send us a Message",
              subtitle: "We'd love to hear from you",
              description: "Fill out the form below and our team will get back to you as soon as possible.",
              buttonText: "Send Message",
              buttonLink: "#submit-form"
            },
            displayName: "Contact Form",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "elder-care-contact-map": {
            type: { resolvedName: "ElderCareAbout1" },
            isCanvas: false,
            props: {
              subtitle: "# Find Us",
              title: "Visit our beautiful facility",
              description: "Located in a peaceful setting, our facility provides a comfortable and safe environment for our residents.",
              features: [
                {
                  title: "Address",
                  description: "123 Elder Care Lane, Wellness City, WC 12345"
                },
                {
                  title: "Hours", 
                  description: "Open 24/7 for tours and consultations"
                }
              ],
              buttonText: "Get Directions",
              buttonLink: "#directions",
              phoneText: "Call for Directions",
              phoneNumber: "1 800 222 000"
            },
            displayName: "Contact Map",
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
      }
    ]
  }
  export default elderCareTemplate;