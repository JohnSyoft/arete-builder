import { NextRequest, NextResponse } from 'next/server'
import { getProject } from '@/lib/api/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const project = await getProject(params.slug)
    if (!project) {
      return new NextResponse('Project not found', { status: 404 })
    }

    const hostname = request.headers.get('host') || ''
    const protocol = request.headers.get('x-forwarded-proto') || 'https'
    const baseUrl = `${protocol}://${hostname}`

    const robots = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`

    return new NextResponse(robots, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
  } catch (error) {
    console.error('Error generating robots.txt:', error)
    return new NextResponse('Error generating robots.txt', { status: 500 })
  }
}
