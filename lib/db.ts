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
            "zS1sxNJuth",
            "yR0IJIIqe_"
        ],
        "linkedNodes": {}
    },
    "zS1sxNJuth": {
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
            "heroContent": "x54PsjlJca"
        }
    },
    "x54PsjlJca": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "text-center"
        },
        "displayName": "div",
        "custom": {},
        "parent": "zS1sxNJuth",
        "hidden": false,
        "nodes": [
            "YYGuOy_Vb0",
            "nG02RlxPIt",
            "t0dStMJbuT"
        ],
        "linkedNodes": {}
    },
    "YYGuOy_Vb0": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "p-2 rounded"
        },
        "displayName": "div",
        "custom": {},
        "parent": "x54PsjlJca",
        "hidden": false,
        "nodes": [
            "3kNS_QZ1ew"
        ],
        "linkedNodes": {}
    },
    "3kNS_QZ1ew": {
        "type": "h1",
        "isCanvas": false,
        "props": {
            "className": "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white leading-tight"
        },
        "displayName": "h1",
        "custom": {},
        "parent": "YYGuOy_Vb0",
        "hidden": false,
        "nodes": [
            "Qes6S9scYf"
        ],
        "linkedNodes": {}
    },
    "Qes6S9scYf": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Build Amazing Websites",
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
        "parent": "3kNS_QZ1ew",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "nG02RlxPIt": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "p-2 rounded max-w-2xl sm:max-w-3xl mx-auto"
        },
        "displayName": "div",
        "custom": {},
        "parent": "x54PsjlJca",
        "hidden": false,
        "nodes": [
            "AbXXDTv4_C"
        ],
        "linkedNodes": {}
    },
    "AbXXDTv4_C": {
        "type": "p",
        "isCanvas": false,
        "props": {
            "className": "text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-blue-100 leading-relaxed px-2"
        },
        "displayName": "p",
        "custom": {},
        "parent": "nG02RlxPIt",
        "hidden": false,
        "nodes": [
            "3fdRfPUvhV"
        ],
        "linkedNodes": {}
    },
    "3fdRfPUvhV": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Create stunning, professional websites with our powerful drag-and-drop builder. No coding required.",
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
        "parent": "AbXXDTv4_C",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "t0dStMJbuT": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md sm:max-w-none mx-auto"
        },
        "displayName": "div",
        "custom": {},
        "parent": "x54PsjlJca",
        "hidden": false,
        "nodes": [
            "rlmdkeKgi4",
            "XBA0bvV1AR"
        ],
        "linkedNodes": {}
    },
    "rlmdkeKgi4": {
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
        "parent": "t0dStMJbuT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "XBA0bvV1AR": {
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
        "parent": "t0dStMJbuT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "yR0IJIIqe_": {
        "type": {
            "resolvedName": "Footer2"
        },
        "isCanvas": false,
        "props": {
            "backgroundColor": "#ffffff",
            "padding": "32px",
            "className": "border-t border-gray-200",
            "hasContentWrapper": true,
            "contentMaxWidth": "7xl",
            "contentPadding": "px-4 sm:px-6 lg:px-8",
            "backgroundImage": "",
            "backgroundSize": "cover",
            "backgroundPosition": "center",
            "backgroundRepeat": "no-repeat",
            "backgroundAttachment": "scroll",
            "gradient": "",
            "borderStyle": "solid",
            "borderWidth": "0px",
            "borderColor": "#e5e7eb",
            "borderRadius": "0px",
            "margin": "32px",
            "width": "100%",
            "height": "auto",
            "minHeight": "200px",
            "maxHeight": "none",
            "boxShadow": "none",
            "opacity": "1",
            "overflow": "visible",
            "hasOverlay": false,
            "overlayColor": "#000000",
            "overlayOpacity": "0.2"
        },
        "displayName": "Footer 2",
        "custom": {},
        "parent": "ROOT",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {
            "footerContent": "eW2c3AGo3B"
        }
    },
    "eW2c3AGo3B": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "space-y-12"
        },
        "displayName": "div",
        "custom": {},
        "parent": "yR0IJIIqe_",
        "hidden": false,
        "nodes": [
            "OOAKXCGYBM",
            "uSIe60g68E"
        ],
        "linkedNodes": {}
    },
    "OOAKXCGYBM": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "grid grid-cols-2 md:grid-cols-6 gap-8"
        },
        "displayName": "div",
        "custom": {},
        "parent": "eW2c3AGo3B",
        "hidden": false,
        "nodes": [
            "Ofb66NqnR2",
            "YM5lEm1xgD",
            "sWMizycDc-",
            "67dFmT4k2p",
            "WZk5N4oBLA",
            "2onDn_CHwP"
        ],
        "linkedNodes": {}
    },
    "Ofb66NqnR2": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "col-span-2 space-y-4"
        },
        "displayName": "div",
        "custom": {},
        "parent": "OOAKXCGYBM",
        "hidden": false,
        "nodes": [
            "of9C7ssAt5",
            "oHuwO_KdtN"
        ],
        "linkedNodes": {}
    },
    "of9C7ssAt5": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "flex items-center space-x-2"
        },
        "displayName": "div",
        "custom": {},
        "parent": "Ofb66NqnR2",
        "hidden": false,
        "nodes": [
            "dr0pGtsSsq",
            "VisAkB2GvR"
        ],
        "linkedNodes": {}
    },
    "dr0pGtsSsq": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "w-8 h-8 bg-blue-600 rounded-lg"
        },
        "displayName": "div",
        "custom": {},
        "parent": "of9C7ssAt5",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "VisAkB2GvR": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "WebBuilder",
            "fontSize": "text-xl",
            "fontWeight": "font-bold",
            "color": "text-gray-900",
            "textAlign": "text-left",
            "tagName": "span",
            "margin": "",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "of9C7ssAt5",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "oHuwO_KdtN": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "p-2 rounded"
        },
        "displayName": "div",
        "custom": {},
        "parent": "Ofb66NqnR2",
        "hidden": false,
        "nodes": [
            "N5CMoSyifh"
        ],
        "linkedNodes": {}
    },
    "N5CMoSyifh": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "The easiest way to create professional websites without any coding knowledge.",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "color": "text-gray-600",
            "textAlign": "text-left",
            "tagName": "p",
            "margin": "",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "oHuwO_KdtN",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "sWMizycDc-": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "space-y-4"
        },
        "displayName": "div",
        "custom": {},
        "parent": "OOAKXCGYBM",
        "hidden": false,
        "nodes": [
            "rbD8aeJk2K",
            "uP4IParl_x"
        ],
        "linkedNodes": {}
    },
    "rbD8aeJk2K": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Platform",
            "fontSize": "text-base",
            "fontWeight": "font-semibold",
            "color": "text-gray-900",
            "textAlign": "text-left",
            "tagName": "h3",
            "margin": "mb-4",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "sWMizycDc-",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uP4IParl_x": {
        "type": "ul",
        "isCanvas": true,
        "props": {
            "className": "space-y-2"
        },
        "displayName": "ul",
        "custom": {},
        "parent": "sWMizycDc-",
        "hidden": false,
        "nodes": [
            "s8OaJo_3lR",
            "K4AdiZ0CYr",
            "uRMcHphQ2p"
        ],
        "linkedNodes": {}
    },
    "s8OaJo_3lR": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uP4IParl_x",
        "hidden": false,
        "nodes": [
            "PUnNFnDccS"
        ],
        "linkedNodes": {}
    },
    "PUnNFnDccS": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Editor",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "s8OaJo_3lR",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "K4AdiZ0CYr": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uP4IParl_x",
        "hidden": false,
        "nodes": [
            "uNsm7D9EDj"
        ],
        "linkedNodes": {}
    },
    "uNsm7D9EDj": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Templates",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "K4AdiZ0CYr",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uRMcHphQ2p": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uP4IParl_x",
        "hidden": false,
        "nodes": [
            "ddCQuDtym6"
        ],
        "linkedNodes": {}
    },
    "ddCQuDtym6": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Hosting",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "uRMcHphQ2p",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "67dFmT4k2p": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "space-y-4"
        },
        "displayName": "div",
        "custom": {},
        "parent": "OOAKXCGYBM",
        "hidden": false,
        "nodes": [
            "_3UKHHNkaJ",
            "uPza_hXpY0"
        ],
        "linkedNodes": {}
    },
    "_3UKHHNkaJ": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Resources",
            "fontSize": "text-base",
            "fontWeight": "font-semibold",
            "color": "text-gray-900",
            "textAlign": "text-left",
            "tagName": "h3",
            "margin": "mb-4",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "67dFmT4k2p",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uPza_hXpY0": {
        "type": "ul",
        "isCanvas": true,
        "props": {
            "className": "space-y-2"
        },
        "displayName": "ul",
        "custom": {},
        "parent": "67dFmT4k2p",
        "hidden": false,
        "nodes": [
            "Skuc40MERv",
            "Wnr2TKkGWA",
            "RKQUdqC0lZ"
        ],
        "linkedNodes": {}
    },
    "Skuc40MERv": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uPza_hXpY0",
        "hidden": false,
        "nodes": [
            "sssHcIQTHG"
        ],
        "linkedNodes": {}
    },
    "sssHcIQTHG": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Blog",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "Skuc40MERv",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Wnr2TKkGWA": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uPza_hXpY0",
        "hidden": false,
        "nodes": [
            "N-xZBdrljz"
        ],
        "linkedNodes": {}
    },
    "N-xZBdrljz": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Guides",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "Wnr2TKkGWA",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "RKQUdqC0lZ": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "uPza_hXpY0",
        "hidden": false,
        "nodes": [
            "0FzGiAX2lx"
        ],
        "linkedNodes": {}
    },
    "0FzGiAX2lx": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Help",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "RKQUdqC0lZ",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "WZk5N4oBLA": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "space-y-4"
        },
        "displayName": "div",
        "custom": {},
        "parent": "OOAKXCGYBM",
        "hidden": false,
        "nodes": [
            "fgwWjhdJLf",
            "Iws89otNgy"
        ],
        "linkedNodes": {}
    },
    "fgwWjhdJLf": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Company",
            "fontSize": "text-base",
            "fontWeight": "font-semibold",
            "color": "text-gray-900",
            "textAlign": "text-left",
            "tagName": "h3",
            "margin": "mb-4",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "WZk5N4oBLA",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Iws89otNgy": {
        "type": "ul",
        "isCanvas": true,
        "props": {
            "className": "space-y-2"
        },
        "displayName": "ul",
        "custom": {},
        "parent": "WZk5N4oBLA",
        "hidden": false,
        "nodes": [
            "quOBoNVyqx",
            "lp15NaCDWm",
            "_JGUxwl9O8"
        ],
        "linkedNodes": {}
    },
    "quOBoNVyqx": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "Iws89otNgy",
        "hidden": false,
        "nodes": [
            "bkechsjCbJ"
        ],
        "linkedNodes": {}
    },
    "bkechsjCbJ": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "About",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "quOBoNVyqx",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "lp15NaCDWm": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "Iws89otNgy",
        "hidden": false,
        "nodes": [
            "Tge78SYo7v"
        ],
        "linkedNodes": {}
    },
    "Tge78SYo7v": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Careers",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "lp15NaCDWm",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "_JGUxwl9O8": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "Iws89otNgy",
        "hidden": false,
        "nodes": [
            "1tHhGnT145"
        ],
        "linkedNodes": {}
    },
    "1tHhGnT145": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Contact",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "_JGUxwl9O8",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "2onDn_CHwP": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "space-y-4"
        },
        "displayName": "div",
        "custom": {},
        "parent": "OOAKXCGYBM",
        "hidden": false,
        "nodes": [
            "tb5Zvc7W1e",
            "XbdsBlQ6wy"
        ],
        "linkedNodes": {}
    },
    "tb5Zvc7W1e": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "Legal",
            "fontSize": "text-base",
            "fontWeight": "font-semibold",
            "color": "text-gray-900",
            "textAlign": "text-left",
            "tagName": "h3",
            "margin": "mb-4",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "2onDn_CHwP",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "XbdsBlQ6wy": {
        "type": "ul",
        "isCanvas": true,
        "props": {
            "className": "space-y-2"
        },
        "displayName": "ul",
        "custom": {},
        "parent": "2onDn_CHwP",
        "hidden": false,
        "nodes": [
            "QL7Y_1nWzO",
            "pgSPQUHRGQ",
            "Atr3UDNdRH"
        ],
        "linkedNodes": {}
    },
    "QL7Y_1nWzO": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "XbdsBlQ6wy",
        "hidden": false,
        "nodes": [
            "4hchAAR4TD"
        ],
        "linkedNodes": {}
    },
    "4hchAAR4TD": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Privacy",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "QL7Y_1nWzO",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "pgSPQUHRGQ": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "XbdsBlQ6wy",
        "hidden": false,
        "nodes": [
            "zlh1w0BDHd"
        ],
        "linkedNodes": {}
    },
    "zlh1w0BDHd": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Terms",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "pgSPQUHRGQ",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "Atr3UDNdRH": {
        "type": "li",
        "isCanvas": false,
        "props": {},
        "displayName": "li",
        "custom": {},
        "parent": "XbdsBlQ6wy",
        "hidden": false,
        "nodes": [
            "tC6wG4hgyd"
        ],
        "linkedNodes": {}
    },
    "tC6wG4hgyd": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Security",
            "href": "#",
            "target": "_self",
            "color": "text-gray-600 hover:text-gray-900",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "Atr3UDNdRH",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "uSIe60g68E": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center"
        },
        "displayName": "div",
        "custom": {},
        "parent": "eW2c3AGo3B",
        "hidden": false,
        "nodes": [
            "c9ROkC3RUQ",
            "oUumGXaDXB"
        ],
        "linkedNodes": {}
    },
    "c9ROkC3RUQ": {
        "type": "div",
        "isCanvas": false,
        "props": {
            "className": "p-2 rounded"
        },
        "displayName": "div",
        "custom": {},
        "parent": "uSIe60g68E",
        "hidden": false,
        "nodes": [
            "qH0po5bnXE"
        ],
        "linkedNodes": {}
    },
    "qH0po5bnXE": {
        "type": {
            "resolvedName": "Text"
        },
        "isCanvas": false,
        "props": {
            "text": "© 2024 WebBuilder Inc. All rights reserved.",
            "fontSize": "text-sm",
            "fontWeight": "font-normal",
            "color": "text-gray-500",
            "textAlign": "text-left",
            "tagName": "p",
            "margin": "",
            "padding": ""
        },
        "displayName": "Text",
        "custom": {},
        "parent": "c9ROkC3RUQ",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "oUumGXaDXB": {
        "type": "div",
        "isCanvas": true,
        "props": {
            "className": "flex space-x-6 mt-4 sm:mt-0"
        },
        "displayName": "div",
        "custom": {},
        "parent": "uSIe60g68E",
        "hidden": false,
        "nodes": [
            "SvOyk4DBEs",
            "S2zWwCQ7Bx"
        ],
        "linkedNodes": {}
    },
    "SvOyk4DBEs": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Facebook",
            "href": "#",
            "target": "_self",
            "color": "text-gray-400 hover:text-gray-500",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "oUumGXaDXB",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "S2zWwCQ7Bx": {
        "type": {
            "resolvedName": "Link"
        },
        "isCanvas": false,
        "props": {
            "text": "Twitter",
            "href": "#",
            "target": "_self",
            "color": "text-gray-400 hover:text-gray-500",
            "fontSize": "text-base",
            "fontWeight": "font-normal",
            "textDecoration": "no-underline",
            "margin": "",
            "padding": ""
        },
        "displayName": "Link",
        "custom": {},
        "parent": "oUumGXaDXB",
        "hidden": false,
        "nodes": [],
        "linkedNodes": {}
    },
    "YM5lEm1xgD": {
        "type": {
            "resolvedName": "Spacer"
        },
        "isCanvas": false,
        "props": {
            "height": "h-8",
            "backgroundColor": "bg-transparent",
            "margin": "my-0"
        },
        "displayName": "Spacer",
        "custom": {},
        "parent": "OOAKXCGYBM",
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
