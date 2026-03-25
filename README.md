# Link Magnet — Website

A modern, high-converting homepage for Link Magnet built with React + Vite.

## Quick Start (Local Dev)

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`

## Deploy to Vercel (Recommended — Free)

### Option A: One-click via GitHub

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click "Import Project" → select your repo
4. Vercel auto-detects Vite — just click Deploy
5. Done! You'll get a URL like `linkmagnet-site.vercel.app`

### Option B: Deploy via CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Takes 30 seconds.

## Connect Your Domain

1. In Vercel dashboard → your project → Settings → Domains
2. Add `www.link-magnet.com`
3. Vercel gives you DNS records to update
4. Go to your domain registrar (GoDaddy, Namecheap, etc.)
5. Update the DNS records:
   - **A Record**: `@` → `76.76.21.21`
   - **CNAME**: `www` → `cname.vercel-dns.com`
6. Wait 5–10 minutes for DNS propagation
7. Vercel auto-provisions SSL (HTTPS)

## Deploy to Netlify (Alternative — Also Free)

```bash
npm run build
```

Then drag-drop the `dist/` folder to [app.netlify.com/drop](https://app.netlify.com/drop)

Or via CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## Project Structure

```
linkmagnet-site/
├── index.html          # Entry point with SEO meta tags
├── package.json        # Dependencies
├── vite.config.js      # Build config
├── public/
│   └── favicon.svg     # Site icon
└── src/
    ├── main.jsx        # React mount
    ├── index.css       # Global styles + responsive breakpoints
    └── App.jsx         # Full homepage component
```

## Customising

- **Brand color**: Change `const B = "#E8552D"` in `App.jsx`
- **Client logos**: Update the `logos` array — images are from your Wix CDN
- **Case studies**: Update the `cases` array with new dashboard screenshots
- **Services**: Edit the `svcs` array
- **Book a Call URL**: Search for `book-online` and update the links
- **Contact info**: Update in the footer section

## Tech Stack

- React 18
- Vite 5 (build tool)
- Plus Jakarta Sans + Playfair Display (Google Fonts)
- No external UI libraries — pure CSS-in-JS
- Fully responsive (mobile, tablet, desktop)
