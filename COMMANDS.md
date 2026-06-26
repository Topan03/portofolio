# 🎮 Quick Commands Reference

Essential commands for working with your portfolio.

---

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```

Open browser at: `http://localhost:5173`

---

## 🔨 Development Commands

### Start Dev Server
```bash
npm run dev
```
- Starts Vite development server
- Hot Module Replacement enabled
- Opens at http://localhost:5173

### Start on Different Port
```bash
npm run dev -- --port 3000
```

### Start with Host Exposed
```bash
npm run dev -- --host
```
Access from other devices on network

---

## 📦 Build Commands

### Build for Production
```bash
npm run build
```
- Creates optimized build in `dist/`
- Minifies code
- Optimizes assets

### Preview Production Build
```bash
npm run preview
```
- Serves production build locally
- Test before deployment

---

## 🧹 Maintenance Commands

### Clear Cache & Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
```

Windows:
```cmd
rmdir /s /q node_modules
del package-lock.json
npm install
```

### Clear Build Output
```bash
rm -rf dist
```

Windows:
```cmd
rmdir /s /q dist
```

---

## 🚀 Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod
```

### Deploy to GitHub Pages
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "gh-pages -d dist"

# Deploy
npm run deploy
```

---

## 🔧 Useful Commands

### Check Package Versions
```bash
npm list --depth=0
```

### Update Dependencies
```bash
npm update
```

### Check for Outdated Packages
```bash
npm outdated
```

### Install Specific Package
```bash
npm install package-name
```

### Install Dev Dependency
```bash
npm install -D package-name
```

### Uninstall Package
```bash
npm uninstall package-name
```

---

## 🐛 Debugging Commands

### Check for Errors
```bash
npm run build
```
Look for any errors in output

### Check Node Version
```bash
node --version
```

### Check npm Version
```bash
npm --version
```

### Clear npm Cache
```bash
npm cache clean --force
```

---

## 📂 File Commands

### View Project Structure
```bash
tree -L 2
```

Linux/Mac:
```bash
ls -la
```

Windows:
```cmd
dir
```

### Find Files
```bash
find . -name "*.jsx"
```

Windows:
```cmd
dir /s /b *.jsx
```

---

## 🔍 Search Commands

### Search in Files (Linux/Mac)
```bash
grep -r "search-term" src/
```

### Search in Files (Windows)
```cmd
findstr /s /i "search-term" src\*
```

---

## 📊 Performance Commands

### Analyze Bundle Size
```bash
npm run build

# Then check dist folder size
du -sh dist/
```

Windows:
```cmd
npm run build
dir dist
```

---

## 🧪 Testing Commands

### Run Linter (if configured)
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint -- --fix
```

---

## 🌐 Git Commands

### Initialize Git
```bash
git init
```

### Add All Files
```bash
git add .
```

### Commit Changes
```bash
git commit -m "Initial commit"
```

### Add Remote Repository
```bash
git remote add origin https://github.com/username/portfolio.git
```

### Push to GitHub
```bash
git push -u origin main
```

### Check Status
```bash
git status
```

### View Changes
```bash
git diff
```

### Create New Branch
```bash
git checkout -b feature-name
```

### Switch Branch
```bash
git checkout main
```

---

## 🎨 Customization Workflows

### Quick Content Update
1. Edit `src/data/portfolio.js`
2. Save file
3. Check browser (auto-reloads)

### Update Colors
1. Edit `tailwind.config.js`
2. Save file
3. Check browser

### Add New Component
1. Create file in `src/components/`
2. Import in `src/App.jsx`
3. Use in JSX

---

## 🔄 Common Workflows

### Development Workflow
```bash
# 1. Start dev server
npm run dev

# 2. Make changes
# (Edit files)

# 3. Check browser
# (Auto-reloads)

# 4. Stop server
# Ctrl+C
```

### Build & Deploy Workflow
```bash
# 1. Build
npm run build

# 2. Preview
npm run preview

# 3. Test production build

# 4. Deploy
vercel --prod
# or
netlify deploy --prod
```

### Update Content Workflow
```bash
# 1. Edit portfolio.js
# src/data/portfolio.js

# 2. Save file

# 3. Check browser
# (Auto-reloads)

# 4. Commit changes
git add .
git commit -m "Update content"
git push
```

---

## 🆘 Emergency Commands

### Fix Port Conflict
```bash
# Kill process on port 5173
# Linux/Mac:
lsof -ti:5173 | xargs kill -9

# Windows:
netstat -ano | findstr :5173
taskkill /PID [PID] /F
```

### Fix Module Errors
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Reset to Clean State
```bash
git stash
git checkout main
git pull origin main
rm -rf node_modules dist
npm install
npm run dev
```

---

## 📝 Custom Scripts

Add these to `package.json` scripts section:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "clean": "rm -rf dist node_modules",
    "fresh": "npm run clean && npm install",
    "deploy:vercel": "vercel --prod",
    "deploy:netlify": "netlify deploy --prod"
  }
}
```

---

## 🎯 One-Liners

### Complete Fresh Start
```bash
rm -rf node_modules package-lock.json dist && npm install && npm run dev
```

### Quick Deploy (after build)
```bash
npm run build && vercel --prod
```

### Update & Restart
```bash
npm update && npm run dev
```

---

## 📱 Device Testing

### Test on Mobile (Local Network)
```bash
# 1. Start with host exposed
npm run dev -- --host

# 2. Find your local IP
# Windows:
ipconfig
# Look for IPv4 Address

# Mac/Linux:
ifconfig
# Look for inet address

# 3. Access from mobile
# http://YOUR_IP:5173
```

---

## 🔥 Hot Tips

### Fast Rebuild
```bash
# Ctrl+C to stop
# Up arrow to get last command
# Enter to restart
npm run dev
```

### Multiple Terminals
```bash
# Terminal 1: Dev server
npm run dev

# Terminal 2: Git commands
git status

# Terminal 3: File operations
# Edit files here
```

---

## 📚 Reference Links

- Vite Docs: https://vitejs.dev/
- React Docs: https://react.dev/
- Tailwind Docs: https://tailwindcss.com/
- Framer Motion: https://www.framer.com/motion/

---

## 💡 Pro Tips

1. **Use npm instead of npx** for faster commands
2. **Keep terminal open** for hot reload
3. **Use Ctrl+C** to stop server
4. **Use Up Arrow** to repeat commands
5. **Check browser console** for errors

---

## ⌨️ Keyboard Shortcuts

### In Terminal
- `Ctrl+C` - Stop current process
- `Up Arrow` - Previous command
- `Tab` - Auto-complete
- `Ctrl+L` - Clear terminal

### In Browser
- `Ctrl+Shift+R` - Hard refresh
- `F12` - Open DevTools
- `Ctrl+R` - Refresh page

---

## 🎓 Learning Commands

### See Package Info
```bash
npm info package-name
```

### View Package Documentation
```bash
npm docs package-name
```

### View Package Repository
```bash
npm repo package-name
```

---

**Keep this file handy for quick reference!** 📌

Save these commands for easy copy-paste access.

---

Happy coding! 🚀
