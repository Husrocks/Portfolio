# Simple GitHub Pages Deployment

## Quick Deploy Steps:

### 1. Build Your Project
```bash
npm run deploy
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Deploy portfolio"
git push origin main
```

### 3. Enable GitHub Pages
1. Go to your repository: https://github.com/Husrocks/Portfolio
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/(root)** folder
6. Click **Save**

### 4. Your Site Will Be Available At:
`https://husrocks.github.io/Portfolio/`

## Alternative: Manual Deployment

If you prefer manual control:

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Create gh-pages branch:**
   ```bash
   git checkout -b gh-pages
   git add out/
   git commit -m "Deploy portfolio"
   git push origin gh-pages
   ```

3. **Set GitHub Pages source to gh-pages branch**

## Notes:
- The site will automatically rebuild when you push to main
- Your portfolio will be accessible at the URL above
- No complex CI/CD needed - just simple GitHub Pages! 