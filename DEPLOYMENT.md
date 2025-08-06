# Deployment Guide

## 🚀 Quick Deployment Options

### 1. Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Connect your repository**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Next.js project

2. **Configure environment variables** (optional):
   ```
   NEXT_PUBLIC_GA_ID=your-google-analytics-id
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Deploy**:
   - Click "Deploy"
   - Your site will be live in minutes!

### 2. Netlify

1. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

2. **Deploy**:
   - Connect your repository
   - Configure build settings
   - Deploy

### 3. Traditional Hosting

For VPS or shared hosting:

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm run start
   ```

3. **Use PM2 for process management** (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "bhakti-sanskriti" -- start
   pm2 save
   pm2 startup
   ```

## 🔧 Environment Variables

Create a `.env.local` file with:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_EMAIL=support@bhaktisanskriti.org
NEXT_PUBLIC_WHATSAPP=919650863999
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **DNS Configuration**:
   - Add A record pointing to your hosting IP
   - Or add CNAME record for subdomain

2. **SSL Certificate**:
   - Most hosting providers offer free SSL
   - For manual setup, use Let's Encrypt

### Vercel Custom Domain

1. Go to your project settings
2. Add your custom domain
3. Configure DNS as instructed
4. SSL is automatic!

## 📊 Performance Optimization

### Image Optimization

- Images are automatically optimized by Next.js
- Use `next/image` component for best performance
- Configure image domains in `next.config.js`

### Caching

- Static pages are cached automatically
- API routes can be cached with headers
- Use CDN for additional performance

## 🔍 SEO Setup

### Google Analytics

1. Get your GA4 tracking ID
2. Add to environment variables
3. The analytics code is ready in `lib/analytics.ts`

### Search Console

1. Verify your domain in Google Search Console
2. Submit your sitemap: `https://your-domain.com/sitemap.xml`
3. Monitor indexing and performance

### Meta Tags

- Each page has optimized meta tags
- Update `app/layout.tsx` for global meta tags
- Customize per page as needed

## 🛡️ Security

### Headers

Security headers are configured in `vercel.json`:
- X-Content-Type-Options
- X-Frame-Options  
- X-XSS-Protection

### Environment Variables

- Never commit `.env.local` to version control
- Use platform-specific environment variable settings
- Prefix public variables with `NEXT_PUBLIC_`

## 📱 Mobile Optimization

- Responsive design is built-in
- Touch-friendly navigation
- Optimized images for mobile
- Fast loading on slow connections

## 🔄 Updates & Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Content Updates

- Update translations in `contexts/LanguageContext.tsx`
- Add new pages in `app/` directory
- Update navigation in `components/Layout.tsx`

## 📞 Support

For deployment issues:
- Check the build logs
- Verify environment variables
- Test locally first with `npm run build && npm run start`

---

**May your deployment be as smooth as divine grace!** 🙏