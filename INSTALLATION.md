# Installation Guide

Complete step-by-step guide to set up and run the Fitra Mustofa Portfolio Website.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16.0.0 or higher)
  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm** (comes with Node.js) or **yarn**
  - Verify npm: `npm --version`
  - Or install yarn: `npm install -g yarn`

- **Git** (optional, for version control)
  - Download from: https://git-scm.com/

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd portfolio
```

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

Or with yarn:

```bash
yarn install
```

This will install:
- React
- React DOM
- Vite
- Tailwind CSS
- PostCSS
- Autoprefixer
- Framer Motion
- Lucide React

### 3. Start Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The development server will start at `http://localhost:5173`

### 4. Open in Browser

Navigate to:
```
http://localhost:5173
```

You should see the portfolio website running!

## 🎨 Customization Steps

### Update Personal Information

1. Open `src/data/portfolio.js`
2. Update the following sections:

```javascript
// Personal Information
export const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  email: "your.email@example.com",
  phone: "+62 xxx xxxx xxxx",
  // ... update other fields
};

// Education
export const education = {
  degree: "Your Degree",
  university: "Your University",
  // ... update other fields
};

// Add/modify skills, experiences, projects, etc.
```

### Update Images

Replace placeholder images with your own:

1. **Profile Image**: Update `avatar` URL in `personalInfo`
2. **Project Images**: Update `image` URLs in `projects` array
3. **Certificate Images**: Update `image` URLs in `certificates` array

### Update Social Links

In `src/data/portfolio.js`, update:

```javascript
social: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  email: "mailto:your.email@example.com",
  whatsapp: "https://wa.me/62xxxxxxxxxx"
}
```

### Update GitHub Stats

In `src/data/portfolio.js`, update:

```javascript
export const githubStats = {
  username: "yourusername", // Your GitHub username
  repositories: 24,
  followers: 156,
  following: 89,
  // ... update languages
};
```

### Change Colors (Optional)

1. Open `tailwind.config.js`
2. Modify colors in the `extend.colors` section:

```javascript
colors: {
  primary: '#3B82F6',    // Your primary color
  accent: '#06B6D4',     // Your accent color
  background: '#050816', // Background color
  card: '#0F172A',       // Card background
  secondary: '#94A3B8',  // Secondary text
}
```

## 🚀 Production Build

### Build the Project

```bash
npm run build
```

Or with yarn:

```bash
yarn build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

Or with yarn:

```bash
yarn preview
```

## 🌐 Deployment Options

### Option 1: Deploy to Vercel (Recommended)

1. Create an account on [Vercel](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts

Or use Vercel Dashboard:
1. Push code to GitHub
2. Import project on Vercel
3. Deploy automatically

### Option 2: Deploy to Netlify

1. Create an account on [Netlify](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Deploy:
   ```bash
   netlify deploy --prod
   ```

Or use Netlify Dashboard:
1. Push code to GitHub
2. Import project on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 3: Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Troubleshooting

### Port Already in Use

If port 5173 is already in use:

1. Kill the process using the port
2. Or change the port in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change to your preferred port
  }
})
```

### Module Not Found Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Tailwind Styles Not Loading

1. Ensure `tailwind.config.js` and `postcss.config.js` exist
2. Verify `@tailwind` directives in `src/index.css`
3. Restart development server

### Build Errors

```bash
# Clean build and try again
rm -rf dist
npm run build
```

## 📦 Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint (if configured)

## 🔄 Updates and Maintenance

### Update Dependencies

```bash
# Check for updates
npm outdated

# Update all packages
npm update

# Update specific package
npm update package-name
```

### Keep Node.js Updated

Regularly update Node.js to the latest LTS version for security and performance improvements.

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

## 💡 Tips for Best Results

1. **Optimize Images**: Compress images before adding them
2. **Test Responsiveness**: Check on multiple devices
3. **Update Content**: Keep projects and skills current
4. **Add Analytics**: Consider adding Google Analytics
5. **SEO**: Update meta tags in `index.html`
6. **Performance**: Run Lighthouse audits regularly

## 🆘 Need Help?

If you encounter issues:

1. Check the error message carefully
2. Search for the error on Google or Stack Overflow
3. Review the documentation for the specific tool
4. Check GitHub issues for similar problems

## ✅ Verification Checklist

After installation, verify:

- [ ] Development server runs without errors
- [ ] All sections display correctly
- [ ] Navigation works smoothly
- [ ] Animations are working
- [ ] Responsive design works on mobile
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Contact form submits
- [ ] Build process completes successfully

---

Happy coding! 🚀
