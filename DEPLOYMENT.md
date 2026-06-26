# 🌐 Deployment Guide

Complete guide to deploying your portfolio website to various hosting platforms.

## Pre-Deployment Checklist

Before deploying, ensure:

- [ ] All personal information is updated
- [ ] All images are optimized and loading
- [ ] All links are working
- [ ] Contact form is configured
- [ ] Social media links are correct
- [ ] CV download link is set
- [ ] Site works on mobile devices
- [ ] Build command runs successfully: `npm run build`
- [ ] No console errors in production build

## Build the Project

Always test the production build before deploying:

```bash
npm run build
npm run preview
```

This creates an optimized build in the `dist` folder.

---

## 🚀 Deployment Options

### 1. Vercel (Recommended)

**Best for**: React/Vite projects, automatic deployments, custom domains

#### Method A: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
cd portfolio
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - Project name? portfolio (or your choice)
# - Directory? ./
# - Override settings? No

# Deploy to production
vercel --prod
```

#### Method B: Vercel Dashboard (GitHub)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Import your GitHub repository
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Click "Deploy"

3. **Automatic Deployments**:
   - Every push to `main` triggers deployment
   - Pull requests get preview URLs

#### Custom Domain on Vercel

1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Update DNS records at your domain provider:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`

---

### 2. Netlify

**Best for**: Static sites, drag & drop deployment

#### Method A: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build and deploy
npm run build
netlify deploy --prod

# Follow prompts:
# - Create new site? Yes
# - Team? Select your team
# - Site name? portfolio-yourname
# - Publish directory? dist
```

#### Method B: Netlify Dashboard (GitHub)

1. **Push to GitHub** (same as Vercel)

2. **Import to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

#### Method C: Drag & Drop

1. Build locally:
   ```bash
   npm run build
   ```

2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)

3. Drag the `dist` folder to the upload area

4. Site is live instantly!

#### Custom Domain on Netlify

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS:
   - Type: `CNAME`
   - Name: `www`
   - Value: `your-site.netlify.app`

---

### 3. GitHub Pages

**Best for**: Free hosting, GitHub users

#### Setup

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**:
   ```javascript
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/', // Your repo name
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**:
   - Go to repository settings
   - Scroll to "Pages"
   - Source: `gh-pages` branch
   - Click "Save"

Your site will be live at: `https://yourusername.github.io/portfolio`

---

### 4. Cloudflare Pages

**Best for**: Global CDN, fast performance

1. **Push to GitHub**

2. **Deploy on Cloudflare**:
   - Go to [pages.cloudflare.com](https://pages.cloudflare.com)
   - Click "Create a project"
   - Connect to GitHub
   - Select repository
   - Configure:
     - Build command: `npm run build`
     - Build output: `dist`
   - Click "Save and Deploy"

---

### 5. Firebase Hosting

**Best for**: Google Cloud integration

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting
# - Use existing project or create new
# - Public directory: dist
# - Single-page app: Yes
# - GitHub deploys: No (or Yes if you want)

# Build and deploy
npm run build
firebase deploy --only hosting
```

---

### 6. Render

**Best for**: Full-stack apps, but works great for static sites

1. **Push to GitHub**

2. **Deploy on Render**:
   - Go to [render.com](https://render.com)
   - Click "New Static Site"
   - Connect to GitHub
   - Select repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Create Static Site"

---

## Environment Variables

If you need environment variables:

### Create `.env` file

```env
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=G-XXXXXXXXXX
```

### Use in code

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Set in hosting platforms

**Vercel**:
- Project Settings → Environment Variables

**Netlify**:
- Site Settings → Build & Deploy → Environment

**Others**:
- Check platform documentation

---

## Custom Domain Setup

### Purchase Domain

Popular registrars:
- [Namecheap](https://namecheap.com)
- [Google Domains](https://domains.google)
- [GoDaddy](https://godaddy.com)
- [Cloudflare](https://cloudflare.com)

### DNS Configuration

#### For Vercel

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

#### For Netlify

```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

#### For GitHub Pages

```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153

Type: CNAME
Name: www
Value: yourusername.github.io
```

---

## SSL Certificate

All modern hosting platforms provide **free SSL certificates** automatically:
- ✅ Vercel: Automatic
- ✅ Netlify: Automatic
- ✅ Cloudflare: Automatic
- ✅ GitHub Pages: Automatic
- ✅ Firebase: Automatic

Your site will be `https://` by default!

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**:
   ```bash
   # Use tools like:
   # - TinyPNG
   # - ImageOptim
   # - Squoosh
   ```

2. **Compress Assets**:
   ```bash
   # Vite does this automatically in build
   npm run build
   ```

3. **Check Bundle Size**:
   ```bash
   npm run build
   # Check dist folder size
   ```

### After Deployment

1. **Run Lighthouse Audit**:
   - Open Chrome DevTools
   - Go to Lighthouse tab
   - Click "Generate report"

2. **Check Performance**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://webpagetest.org/)

---

## Continuous Deployment

### Automatic Deployments

Most platforms support automatic deployments from GitHub:

1. **Push to GitHub**
2. **Platform detects changes**
3. **Automatically builds and deploys**

### Deployment Branches

- `main` → Production
- `develop` → Staging (preview)
- Pull requests → Preview URLs

---

## Monitoring & Analytics

### Add Google Analytics

1. **Get tracking ID** from [analytics.google.com](https://analytics.google.com)

2. **Add to `index.html`** (before `</head>`):
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics

```bash
npm install @vercel/analytics

# Add to App.jsx
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <>
      <YourApp />
      <Analytics />
    </>
  );
}
```

---

## Troubleshooting

### Build Fails

```bash
# Check for errors
npm run build

# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### 404 on Routes

For SPAs, configure redirects:

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

### Slow Load Times

1. Optimize images
2. Enable CDN
3. Use lazy loading
4. Minimize bundle size

---

## Deployment Comparison

| Platform | Free Tier | Build Time | SSL | Custom Domain | Best For |
|----------|-----------|------------|-----|---------------|----------|
| Vercel | ✅ Generous | ⚡ Fast | ✅ Auto | ✅ Free | React/Next |
| Netlify | ✅ Good | ⚡ Fast | ✅ Auto | ✅ Free | Static sites |
| GitHub Pages | ✅ Unlimited | 🕐 Medium | ✅ Auto | ✅ Free | Open source |
| Cloudflare | ✅ Unlimited | ⚡ Very Fast | ✅ Auto | ✅ Free | Performance |
| Firebase | ✅ Limited | 🕐 Medium | ✅ Auto | ✅ Free | Google Cloud |

---

## Post-Deployment Checklist

After deployment:

- [ ] Site is accessible at the URL
- [ ] All pages load correctly
- [ ] Images are displaying
- [ ] Links work
- [ ] Forms function properly
- [ ] Mobile responsive
- [ ] SSL certificate active (https://)
- [ ] Custom domain configured (if applicable)
- [ ] Analytics tracking (if added)
- [ ] Performance score > 90
- [ ] No console errors

---

## Need Help?

- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **GitHub Pages**: [pages.github.com](https://pages.github.com)

---

Happy deploying! 🚀
