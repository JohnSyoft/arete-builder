# Vercel Subdomain Setup Guide

This guide will help you configure subdomain routing on Vercel for your Arete Website Builder.

## 🚀 Quick Setup Checklist

### 1. DNS Configuration (Required)

Since you have `webuilder.hhola.app` as your main domain, add these DNS records to `hhola.app`:

```
Type: A
Name: *
Value: 76.76.19.61

Type: A
Name: webuilder
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**Alternative CNAME approach:**
```
Type: CNAME
Name: *
Value: cname.vercel-dns.com

Type: CNAME
Name: webuilder
Value: cname.vercel-dns.com
```

### 2. Vercel Domain Configuration

1. **Go to Vercel Dashboard** → Your Project → Settings → Domains
2. **Add your domains:**
   - `webuilder.hhola.app` (your main app)
   - `hhola.app` (redirects to main app)
   - `www.hhola.app` (redirects to main app)
3. **Verify the domains** (follow Vercel's instructions)

### 3. Environment Variables

Set these in Vercel Dashboard → Project Settings → Environment Variables:

```bash
NEXT_PUBLIC_API_URL=https://your-backend-url.com
NEXT_PUBLIC_APP_URL=https://webuilder.hhola.app
```

### 4. Deploy Updated Code

Make sure you've deployed the latest code with:
- Updated `middleware.ts`
- `vercel.json` configuration
- Subdomain route handlers

## 🧪 Testing Your Setup

### Test URLs (after DNS propagation):

**Main App (should work normally):**
- `https://webuilder.hhola.app/dashboard`
- `https://webuilder.hhola.app/editor`
- `https://hhola.app` (redirects to webuilder.hhola.app)
- `https://www.hhola.app` (redirects to webuilder.hhola.app)

**Client Subdomains (should show client sites):**
- `https://arete.hhola.app`
- `https://mycompany.hhola.app`
- `https://test.hhola.app`

## 🔧 Troubleshooting

### Common Issues:

1. **"Site not found" errors:**
   - Check DNS propagation (can take up to 24 hours)
   - Verify wildcard DNS record is set correctly
   - Check Vercel domain configuration

2. **Subdomains not working:**
   - Ensure wildcard DNS record is active
   - Check middleware logs in Vercel function logs
   - Verify project slug exists in your database

3. **Main app not working:**
   - Check if `webbuilder.hhola.app` is properly configured
   - Verify middleware logic isn't catching main app

### Debug Steps:

1. **Check DNS:**
   ```bash
   nslookup *.hhola.app
   # Should return Vercel's IP
   ```

2. **Check Vercel Logs:**
   - Go to Vercel Dashboard → Functions
   - Look for middleware execution logs

3. **Test with curl:**
   ```bash
   curl -H "Host: test.hhola.app" https://your-vercel-url.com
   ```

## 📋 Expected Behavior

### URL Structure:
- `webbuilder.hhola.app` → Main application (editor, dashboard)
- `{slug}.hhola.app` → Client website (rendered from project with that slug)
- `hhola.app` → Can redirect to main app or show landing page

### How It Works:
1. User visits `arete.hhola.app`
2. DNS resolves to Vercel
3. Vercel serves your Next.js app
4. Middleware detects subdomain "arete"
5. Rewrites to `/subdomain/arete`
6. App fetches project with slug "arete"
7. Renders the client's website

## 🚨 Important Notes

1. **DNS Propagation:** Can take 1-24 hours
2. **SSL Certificates:** Vercel automatically handles SSL for all subdomains
3. **Rate Limits:** Vercel has function execution limits
4. **Cold Starts:** First request to a subdomain might be slower

## 🔄 Next Steps After Setup

1. **Test thoroughly** with different subdomains
2. **Monitor Vercel logs** for any errors
3. **Set up monitoring** for subdomain functionality
4. **Consider caching** for better performance
5. **Remove debug logs** from middleware once confirmed working

## 📞 Support

If you encounter issues:
1. Check Vercel function logs
2. Verify DNS configuration
3. Test with different subdomains
4. Check project slug exists in database
