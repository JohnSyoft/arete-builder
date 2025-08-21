import Head from "next/head"
import type { Project, Page } from "@/lib/db"

interface SEOHeadProps {
  project: Project
  page: Page
}

export function SEOHead({ project, page }: SEOHeadProps) {
  const title = `${page.name} - ${project.name}`
  const description = `${page.name} page of ${project.name}`
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${project.id}/${page.slug}`

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={project.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={project.name} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description: description,
            url: url,
            isPartOf: {
              "@type": "WebSite",
              name: project.name,
              url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/${project.id}`,
            },
          }),
        }}
      />
    </Head>
  )
}
