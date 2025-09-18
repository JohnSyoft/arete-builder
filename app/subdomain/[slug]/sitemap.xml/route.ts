import { NextRequest, NextResponse } from 'next/server'
import { getProject, getProjectPages } from '@/lib/api/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const project = await getProject(params.slug)
    if (!project) {
      return new NextResponse('Project not found', { status: 404 })
    }

    const pages = await getProjectPages(params.slug)
    const hostname = request.headers.get('host') || ''
    const protocol = request.headers.get('x-forwarded-proto') || 'https'
    const baseUrl = `${protocol}://${hostname}`

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map((page: any) => `
    <url>
      <loc>${baseUrl}/${page.slug}</loc>
      <lastmod>${new Date(page.updatedAt || page.createdAt).toISOString()}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${page.isHomePage ? '1.0' : '0.8'}</priority>
    </url>
  `).join('')}
</urlset>`

    return new NextResponse(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    return new NextResponse('Error generating sitemap', { status: 500 })
  }
}
