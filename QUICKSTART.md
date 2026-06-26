# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## Installation (3 Steps)

### 1. Install Dependencies

```bash
cd portfolio
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open Browser

Navigate to: `http://localhost:5173`

✅ Done! Your portfolio is running!

---

## Customization (5 Minutes)

### Update Your Information

Open `src/data/portfolio.js` and update:

#### 1. Personal Info (Line 1-15)

```javascript
export const personalInfo = {
  name: "YOUR NAME",
  role: "YOUR ROLE",
  email: "your.email@example.com",
  phone: "+62 xxx xxxx xxxx",
  location: "YOUR LOCATION",
  bio: "YOUR BIO",
  // Update social links
  social: {
    github: "https://github.com/YOURUSERNAME",
    linkedin: "https://linkedin.com/in/YOURUSERNAME",
    // ...
  }
};
```

#### 2. Education (Line 17-30)

```javascript
export const education = {
  degree: "YOUR DEGREE",
  university: "YOUR UNIVERSITY",
  period: "YEAR - YEAR",
  gpa: "YOUR GPA",
  // ...
};
```

#### 3. Skills (Line 32-90)

Update or add skills:

```javascript
{
  name: "React",
  icon: "⚛️",
  level: 90,  // Your proficiency 0-100
  category: "Frontend"
}
```

#### 4. Experience (Line 92-140)

Add your work experience:

```javascript
{
  title: "YOUR POSITION",
  company: "COMPANY NAME",
  period: "START - END",
  description: "WHAT YOU DID",
  technologies: ["Tech1", "Tech2"],
  type: "internship" // or "project", "freelance"
}
```

#### 5. Projects (Line 142-250)

Showcase your projects:

```javascript
{
  title: "PROJECT NAME",
  description: "PROJECT DESCRIPTION",
  image: "IMAGE_URL",
  technologies: ["Tech1", "Tech2"],
  github: "GITHUB_URL",
  demo: "DEMO_URL",
  featured: true  // Show featured badge
}
```

#### 6. GitHub Stats (Line 252-270)

```javascript
export const githubStats = {
  username: "YOURUSERNAME",
  repositories: 24,
  followers: 156,
  // ...
};
```

#### 7. Certificates (Line 272-310)

Add your certifications:

```javascript
{
  title: "CERTIFICATE NAME",
  issuer: "ISSUER",
  date: "YEAR",
  image: "IMAGE_URL"
}
```

---

## Build for Production

```bash
npm run build
```

Output: `dist/` folder

---

## Deploy to Vercel (1 Minute)

### Option 1: Vercel CLI

```bash
npm install -g vercel
vercel
```

### Option 2: Vercel Dashboard

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

✅ Live in seconds!

---

## Deploy to Netlify

### Option 1: Netlify CLI

```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Option 2: Drag & Drop

1. Build: `npm run build`
2. Go to [netlify.com/drop](https://app.netlify.com/drop)
3. Drag `dist` folder
4. Done!

---

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## Folder Structure

```
portfolio/
├── src/
│   ├── components/     👈 React components
│   ├── data/
│   │   └── portfolio.js 👈 UPDATE THIS FILE
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
└── package.json
```

---

## Tips

### 1. Use High-Quality Images

```javascript
// Use optimized images (WebP, compressed)
image: "https://images.unsplash.com/photo-xxx?w=800"
```

### 2. Update Social Links

```javascript
social: {
  github: "https://github.com/YOURUSERNAME",  // Replace
  linkedin: "https://linkedin.com/in/YOURUSERNAME",  // Replace
  email: "mailto:your.email@example.com",  // Replace
  whatsapp: "https://wa.me/62XXXXXXXXXX"  // Replace (no + or spaces)
}
```

### 3. Download CV Link

```javascript
cvUrl: "/path/to/your/cv.pdf"  // Put CV in public folder
```

Or use external link:

```javascript
cvUrl: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
```

### 4. Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#3B82F6',    // Main color
  accent: '#06B6D4',     // Secondary color
  background: '#050816', // Background
  // ...
}
```

---

## Troubleshooting

### Port Already in Use

```bash
# Use different port
npm run dev -- --port 3000
```

### Module Not Found

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Loading

```bash
# Restart dev server
# Ctrl+C to stop
npm run dev
```

---

## Next Steps

1. ✅ Customize content in `src/data/portfolio.js`
2. ✅ Add your profile picture
3. ✅ Update project images
4. ✅ Test on mobile devices
5. ✅ Build and deploy
6. ✅ Share your portfolio!

---

## Need More Help?

- 📖 Read `README.md` for full documentation
- 📝 See `INSTALLATION.md` for detailed setup
- 🎨 Check `FEATURES.md` for all features
- 🐛 Check browser console for errors

---

## Support

Found this helpful? Star the repository! ⭐

---

Happy building! 🎉
