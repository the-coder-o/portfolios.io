import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  const baseUrl = 'https://portfoliosio.vercel.app'

  const sitemap = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/portfolios`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/timeline`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemap
    .map(
      ({ url, lastModified, changeFrequency, priority }) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>${changeFrequency}</changefreq>
      <priority>${priority}</priority>
    </url>
  `,
    )
    .join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
