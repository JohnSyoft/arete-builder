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
  category: "landing" | "blog" | "ecommerce"
  thumbnail: string
  layout: any // Craft.js serialized state
}

// Mock data storage
let projects: Project[] = [
  {
    id: "1",
    name: "My First Website",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01"),
    pages: [
      {
        id: "1",
        projectId: "1",
        name: "Home",
        slug: "home",
        layout: {
          "ROOT": {
            "type": {
              "resolvedName": "Container"
            },
            "isCanvas": true,
            "props": {},
            "displayName": "Container",
            "custom": {},
            "hidden": false,
            "nodes": [
              "da5WS4wnl3"
            ],
            "linkedNodes": {}
          },
          "da5WS4wnl3": {
            "type": {
              "resolvedName": "Hero1"
            },
            "isCanvas": false,
            "props": {
              "gradient": "linear-gradient(to right, #2563eb, #9333ea)",
              "padding": "0",
              "minHeight": "auto",
              "overflow": "hidden",
              "className": "text-white relative",
              "hasOverlay": true,
              "overlayColor": "#000000",
              "overlayOpacity": "0.2",
              "hasContentWrapper": true,
              "contentMaxWidth": "7xl",
              "contentPadding": "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32"
            },
            "displayName": "Hero 1",
            "custom": {},
            "parent": "ROOT",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {
              "heroContent": "qoQ4-hYxwC"
            }
          },
          "qoQ4-hYxwC": {
            "type": "div",
            "isCanvas": true,
            "props": {
              "className": "text-center"
            },
            "displayName": "div",
            "custom": {},
            "parent": "da5WS4wnl3",
            "hidden": false,
            "nodes": [
              "TCuX2joQpr",
              "xnbL3gtCQm",
              "GTfAjykP9j",
              "N2PnUcvndO"
            ],
            "linkedNodes": {}
          },
          "TCuX2joQpr": {
            "type": "div",
            "isCanvas": false,
            "props": {
              "className": "p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded"
            },
            "displayName": "div",
            "custom": {},
            "parent": "qoQ4-hYxwC",
            "hidden": false,
            "nodes": [
              "-4EbEbeJUN"
            ],
            "linkedNodes": {}
          },
          "-4EbEbeJUN": {
            "type": "h1",
            "isCanvas": false,
            "props": {
              "className": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
            },
            "displayName": "h1",
            "custom": {},
            "parent": "TCuX2joQpr",
            "hidden": false,
            "nodes": [
              "D9S67ucRY4"
            ],
            "linkedNodes": {}
          },
          "D9S67ucRY4": {
            "type": {
              "resolvedName": "Text"
            },
            "isCanvas": false,
            "props": {
              "text": "Johns website",
              "fontSize": "",
              "fontWeight": "",
              "color": "",
              "textAlign": "text-left",
              "tagName": "span",
              "margin": "",
              "padding": "px-0 py-0"
            },
            "displayName": "Text",
            "custom": {},
            "parent": "-4EbEbeJUN",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
          },
          "GTfAjykP9j": {
            "type": "div",
            "isCanvas": false,
            "props": {
              "className": "p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded max-w-2xl sm:max-w-3xl mx-auto"
            },
            "displayName": "div",
            "custom": {},
            "parent": "qoQ4-hYxwC",
            "hidden": false,
            "nodes": [
              "DnGkrXXSpe"
            ],
            "linkedNodes": {}
          },
          "DnGkrXXSpe": {
            "type": "p",
            "isCanvas": false,
            "props": {
              "className": "text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-2"
            },
            "displayName": "p",
            "custom": {},
            "parent": "GTfAjykP9j",
            "hidden": false,
            "nodes": [
              "hDvAH2LSmn"
            ],
            "linkedNodes": {}
          },
          "hDvAH2LSmn": {
            "type": {
              "resolvedName": "Text"
            },
            "isCanvas": false,
            "props": {
              "text": "Johns website",
              "fontSize": "",
              "fontWeight": "",
              "color": "",
              "textAlign": "text-left",
              "tagName": "span",
              "margin": "",
              "padding": "px-0 py-0"
            },
            "displayName": "Text",
            "custom": {},
            "parent": "DnGkrXXSpe",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
          },
          "N2PnUcvndO": {
            "type": "div",
            "isCanvas": true,
            "props": {
              "className": "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
            },
            "displayName": "div",
            "custom": {},
            "parent": "qoQ4-hYxwC",
            "hidden": false,
            "nodes": [
              "B6JWRHhJUt",
              "uPCpuKr2nr"
            ],
            "linkedNodes": {}
          },
          "B6JWRHhJUt": {
            "type": {
              "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
              "text": "Get Started Free",
              "variant": "default",
              "size": "lg",
              "href": "#",
              "target": "_self",
              "backgroundColor": "#ffffff",
              "textColor": "#2563eb",
              "borderRadius": "8px",
              "margin": "",
              "padding": "px-6 py-3 sm:px-8 sm:py-3",
              "width": "w-full sm:w-auto"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "N2PnUcvndO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
          },
          "uPCpuKr2nr": {
            "type": {
              "resolvedName": "Button"
            },
            "isCanvas": false,
            "props": {
              "text": "Watch Demo",
              "variant": "outline",
              "size": "lg",
              "href": "#",
              "target": "_self",
              "backgroundColor": "transparent",
              "textColor": "#ffffff",
              "borderRadius": "8px",
              "margin": "",
              "padding": "px-6 py-3 sm:px-8 sm:py-3",
              "width": "w-full sm:w-auto"
            },
            "displayName": "Button",
            "custom": {},
            "parent": "N2PnUcvndO",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
          },
          "xnbL3gtCQm": {
            "type": {
              "resolvedName": "Text"
            },
            "isCanvas": false,
            "props": {
              "text": "This is a new text",
              "fontSize": "text-base",
              "fontWeight": "font-normal",
              "color": "text-gray-900",
              "textAlign": "text-left",
              "tagName": "p",
              "margin": "my-2",
              "padding": "px-0 py-0"
            },
            "displayName": "Text",
            "custom": {},
            "parent": "qoQ4-hYxwC",
            "hidden": false,
            "nodes": [],
            "linkedNodes": {}
          }
        },
        // layout:null,
        // layout: {
        //   ROOT: {
        //     type: { resolvedName: "Container" },
        //     isCanvas: true,
        //     props: {},
        //     displayName: "Container",
        //     custom: {},
        //     hidden: false,
        //     nodes: ["hero-sample", "features-sample"],
        //     linkedNodes: {},
        //   },
        //   "hero-sample": {
        //     type: { resolvedName: "Hero1" },
        //     isCanvas: false,
        //     props: {},
        //     displayName: "Hero",
        //     custom: {},
        //     parent: "ROOT",
        //     hidden: false,
        //     nodes: [],
        //     linkedNodes: {},
        //   },
        //   "features-sample": {
        //     type: { resolvedName: "Features1" },
        //     isCanvas: false,
        //     props: {},
        //     displayName: "Features",
        //     custom: {},
        //     parent: "ROOT",
        //     hidden: false,
        //     nodes: [],
        //     linkedNodes: {},
        //   },
        // },
        isHomePage: true,
      },
      {
        id: "2",
        projectId: "1",
        name: "About Us",
        slug: "about",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["about-hero", "about-team"],
            linkedNodes: {},
          },
          "about-hero": {
            type: { resolvedName: "PageHeader1" },
            isCanvas: false,
            props: {},
            displayName: "Page Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "about-team": {
            type: { resolvedName: "Team1" },
            isCanvas: false,
            props: {},
            displayName: "Team",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "3",
        projectId: "1",
        name: "Contact",
        slug: "contact",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["contact-header", "contact-form"],
            linkedNodes: {},
          },
          "contact-header": {
            type: { resolvedName: "PageHeader2" },
            isCanvas: false,
            props: {},
            displayName: "Page Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "contact-form": {
            type: { resolvedName: "Contact1" },
            isCanvas: false,
            props: {},
            displayName: "Contact Form",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "4",
        projectId: "1",
        name: "Blog",
        slug: "blog",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["blog-header", "blog-grid"],
            linkedNodes: {},
          },
          "blog-header": {
            type: { resolvedName: "PageHeader3" },
            isCanvas: false,
            props: {},
            displayName: "Page Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "blog-grid": {
            type: { resolvedName: "BlogGrid1" },
            isCanvas: false,
            props: {},
            displayName: "Blog Grid",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "5",
        projectId: "1",
        name: "Blog Post",
        slug: "blog-post",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["post-content"],
            linkedNodes: {},
          },
          "post-content": {
            type: { resolvedName: "BlogContent1" },
            isCanvas: false,
            props: {},
            displayName: "Blog Content",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "6",
        projectId: "1",
        name: "Products",
        slug: "products",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["products-header", "products-grid"],
            linkedNodes: {},
          },
          "products-header": {
            type: { resolvedName: "PageHeader4" },
            isCanvas: false,
            props: {},
            displayName: "Page Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "products-grid": {
            type: { resolvedName: "Products1" },
            isCanvas: false,
            props: {},
            displayName: "Products",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "7",
        projectId: "1",
        name: "Product Detail",
        slug: "product-detail",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["product-details"],
            linkedNodes: {},
          },
          "product-details": {
            type: { resolvedName: "ProductDetails1" },
            isCanvas: false,
            props: {},
            displayName: "Product Details",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
      {
        id: "8",
        projectId: "1",
        name: "Pricing",
        slug: "pricing",
        layout: {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: ["pricing-header", "pricing-table"],
            linkedNodes: {},
          },
          "pricing-header": {
            type: { resolvedName: "PageHeader5" },
            isCanvas: false,
            props: {},
            displayName: "Page Header",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
          "pricing-table": {
            type: { resolvedName: "Pricing1" },
            isCanvas: false,
            props: {},
            displayName: "Pricing",
            custom: {},
            parent: "ROOT",
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        },
        isHomePage: false,
      },
    ],
  },
]

const templates: Template[] = [
  {
    id: "1",
    name: "Modern Landing Page",
    description: "Clean and modern landing page template perfect for SaaS and tech companies",
    category: "landing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["hero-1", "features-1", "cta-1", "footer-1"],
        linkedNodes: {},
      },
      "hero-1": {
        type: { resolvedName: "Hero1" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-1": {
        type: { resolvedName: "Features1" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-1": {
        type: { resolvedName: "CTA1" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-1": {
        type: { resolvedName: "Footer1" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "2",
    name: "Creative Agency",
    description: "Bold and creative template for agencies and creative professionals",
    category: "landing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-3", "hero-3", "features-3", "cta-2", "footer-3"],
        linkedNodes: {},
      },
      "header-3": {
        type: { resolvedName: "Header3" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-3": {
        type: { resolvedName: "Hero3" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-3": {
        type: { resolvedName: "Features3" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-2": {
        type: { resolvedName: "CTA2" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-3": {
        type: { resolvedName: "Footer3" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "3",
    name: "Business Professional",
    description: "Professional template for corporate websites and business services",
    category: "landing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-1", "hero-2", "features-2", "faq-1", "cta-1", "footer-2"],
        linkedNodes: {},
      },
      "header-1": {
        type: { resolvedName: "Header1" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-2": {
        type: { resolvedName: "Hero2" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-2": {
        type: { resolvedName: "Features2" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "faq-1": {
        type: { resolvedName: "FAQ1" },
        isCanvas: false,
        props: {},
        displayName: "FAQ",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-1": {
        type: { resolvedName: "CTA1" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-2": {
        type: { resolvedName: "Footer2" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "4",
    name: "Startup Launch",
    description: "Perfect for startups and product launches with conversion-focused design",
    category: "landing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-4", "hero-4", "features-4", "cta-4", "footer-4"],
        linkedNodes: {},
      },
      "header-4": {
        type: { resolvedName: "Header4" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-4": {
        type: { resolvedName: "Hero4" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-4": {
        type: { resolvedName: "Features4" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-4": {
        type: { resolvedName: "CTA4" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-4": {
        type: { resolvedName: "Footer4" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "5",
    name: "Eco-Friendly Business",
    description: "Sustainable and eco-conscious template for green businesses",
    category: "landing",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-5", "hero-5", "features-5", "faq-5", "cta-5", "footer-5"],
        linkedNodes: {},
      },
      "header-5": {
        type: { resolvedName: "Header5" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-5": {
        type: { resolvedName: "Hero5" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-5": {
        type: { resolvedName: "Features5" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "faq-5": {
        type: { resolvedName: "FAQ5" },
        isCanvas: false,
        props: {},
        displayName: "FAQ",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-5": {
        type: { resolvedName: "CTA5" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-5": {
        type: { resolvedName: "Footer5" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "6",
    name: "Personal Blog",
    description: "Clean and minimal blog template for writers and content creators",
    category: "blog",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-2", "hero-2", "features-1", "faq-2", "footer-2"],
        linkedNodes: {},
      },
      "header-2": {
        type: { resolvedName: "Header2" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-2": {
        type: { resolvedName: "Hero2" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-1": {
        type: { resolvedName: "Features1" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "faq-2": {
        type: { resolvedName: "FAQ2" },
        isCanvas: false,
        props: {},
        displayName: "FAQ",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-2": {
        type: { resolvedName: "Footer2" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "7",
    name: "Tech Blog",
    description: "Modern blog template for technology and development content",
    category: "blog",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-3", "hero-3", "features-3", "faq-3", "footer-3"],
        linkedNodes: {},
      },
      "header-3": {
        type: { resolvedName: "Header3" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-3": {
        type: { resolvedName: "Hero3" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-3": {
        type: { resolvedName: "Features3" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "faq-3": {
        type: { resolvedName: "FAQ3" },
        isCanvas: false,
        props: {},
        displayName: "FAQ",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-3": {
        type: { resolvedName: "Footer3" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
  {
    id: "8",
    name: "Online Store",
    description: "Complete e-commerce template with product showcase and checkout",
    category: "ecommerce",
    thumbnail: "/placeholder.svg?height=200&width=300",
    layout: {
      ROOT: {
        type: { resolvedName: "Container" },
        isCanvas: true,
        props: {},
        displayName: "Container",
        custom: {},
        hidden: false,
        nodes: ["header-1", "hero-1", "features-2", "cta-1", "footer-1"],
        linkedNodes: {},
      },
      "header-1": {
        type: { resolvedName: "Header1" },
        isCanvas: false,
        props: {},
        displayName: "Header",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "hero-1": {
        type: { resolvedName: "Hero1" },
        isCanvas: false,
        props: {},
        displayName: "Hero",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "features-2": {
        type: { resolvedName: "Features2" },
        isCanvas: false,
        props: {},
        displayName: "Features",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "cta-1": {
        type: { resolvedName: "CTA1" },
        isCanvas: false,
        props: {},
        displayName: "CTA",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
      "footer-1": {
        type: { resolvedName: "Footer1" },
        isCanvas: false,
        props: {},
        displayName: "Footer",
        custom: {},
        parent: "ROOT",
        hidden: false,
        nodes: [],
        linkedNodes: {},
      },
    },
  },
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
