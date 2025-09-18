# Subdomain Setup Guide

This guide explains how to set up subdomain routing for your Arete website builder.

## Overview

The system supports two types of domains:

1. **Main App Domain**: `webbuilder.hhola.app` - Contains the editor, dashboard, and admin functionality
2. **Client Subdomains**: `{slug}.hhola.app` - Preview sites created by users

## How It Works

### URL Structure

- **Main App**: `https://webbuilder.hhola.app/dashboard`
- **Client Site**: `https://arete.hhola.app` → Renders the site with slug "arete"

### Routing Logic

1. **Subdomain Detection**: Middleware detects the subdomain from the hostname
2. **Route Rewriting**: Client subdomains are rewritten to `/subdomain/[slug]`
3. **Project Resolution**: The slug is used as the projectId to fetch project data
4. **Page Rendering**: The site is rendered using the existing `/site/[projectId]` logic

## File Structure

```
app/
├── subdomain/
│   └── [slug]/
│       ├── page.tsx              # Main subdomain handler
│       ├── not-found.tsx         # 404 page for subdomains
│       ├── sitemap.xml/
│       │   └── route.ts          # Dynamic sitemap generation
│       └── robots.txt/
│           └── route.ts          # Dynamic robots.txt generation
├── site/
│   └── [projectId]/
│       ├── page.tsx              # Existing site preview
│       └── [...slug]/
│           └── page.tsx          # Dynamic page routing
└── middleware.ts                 # Subdomain routing logic
```

## Configuration

### Environment Variables

Add these to your `.env.local`:

```env
# Main app subdomain
NEXT_PUBLIC_MAIN_APP_SUBDOMAIN=webbuilder

# Base domain for client sites
NEXT_PUBLIC_BASE_DOMAIN=hhola.app
```

### DNS Configuration

You need to configure your DNS to support wildcard subdomains:

```
# Add a wildcard A record
*.hhola.app → Your server IP

# Or CNAME record
*.hhola.app → your-server.com
```

### Vercel Configuration

If using Vercel, add this to your `vercel.json`:

```json
{
  "functions": {
    "app/subdomain/[slug]/page.tsx": {
      "maxDuration": 30
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        }
      ]
    }
  ]
}
```

## Usage Examples

### Creating a New Site

1. User creates a project with slug "mycompany"
2. User builds their site in the editor
3. Site becomes available at `https://mycompany.hhola.app`

### Reserved Subdomains

These subdomains are reserved and will show 404:

- `webbuilder` (main app)
- `login`, `dashboard`, `editor`, `api`, `admin`
- `404`, `favicon.ico`, `robots.txt`, `sitemap.xml`
- `_next`, `static`

### SEO Features

Each subdomain automatically gets:

- **Sitemap**: `https://arete.hhola.app/sitemap.xml`
- **Robots.txt**: `https://arete.hhola.app/robots.txt`
- **Proper meta tags** and SEO optimization

## Troubleshooting

### Common Issues

1. **Subdomain not working**: Check DNS configuration
2. **404 errors**: Verify project slug exists in database
3. **Slow loading**: Check server performance and caching

### Debug Mode

Add this to your middleware for debugging:

```typescript
console.log('Hostname:', hostname)
console.log('Subdomain:', subdomain)
console.log('Pathname:', pathname)
```

## Security Considerations

1. **Input Validation**: All slugs are validated against reserved paths
2. **Rate Limiting**: Consider adding rate limiting for subdomain requests
3. **Caching**: Implement proper caching for better performance
4. **Monitoring**: Monitor subdomain usage and performance

## Performance Optimization

1. **CDN**: Use a CDN for static assets
2. **Caching**: Implement Redis or similar for project data caching
3. **Database**: Optimize database queries for project fetching
4. **Images**: Use optimized image delivery

## Future Enhancements

- Custom domain support (CNAME records)
- SSL certificate automation
- Analytics integration per subdomain
- Custom error pages per project
- A/B testing capabilities
