# A2Z Solution Point – Deployment Guide

This folder is the complete website. It is a static site: plain HTML, CSS and JavaScript.
There is no database, no server code and no build step, so any host can serve it as-is.

```
a2z-website/
├── index.html            Home page (the whole website)
├── 404.html              "Page not found" page
├── css/style.css         All styles
├── js/main.js            Content + booking form   ← EDIT business details here
├── js/scene3d.js         3D showroom
├── vendor/three.min.js   3D library (self-hosted, no CDN needed)
├── fonts/                Poppins (English + Hindi), self-hosted
├── images/               Logo, catalogue posters, icons, link-preview image
├── favicon.ico, site.webmanifest, robots.txt, sitemap.xml
├── vercel.json           Settings for Vercel
├── netlify.toml, _headers  Settings for Netlify / Cloudflare Pages
└── .htaccess             Settings for Hostinger / cPanel (hidden file)
```

---

## Step 0 — before uploading (2 minutes)

Once you know your domain (e.g. `a2zsolutionpoint.in`), replace `YOUR-DOMAIN.com`
with it in these 3 files (open in Notepad → Ctrl+H → Replace all):

1. `index.html`
2. `robots.txt`
3. `sitemap.xml`

This makes the WhatsApp link preview (logo + poster image) and Google listing work.
The site works without this step; only the preview image needs it.

---

## Option A — Vercel (recommended, free)

Fastest, free HTTPS, servers in Mumbai, nothing to maintain.

**Without coding tools:**
1. Create a free account at github.com → New repository → name it `a2z-website`.
2. Click **"uploading an existing file"** and drag in everything *inside* the
   `a2z-website` folder (including `.htaccess`, `vercel.json`). Commit.
3. Go to vercel.com → sign in with GitHub → **Add New → Project** → Import `a2z-website`.
4. Framework preset: **Other**. Leave build settings empty. Click **Deploy**.
5. You get a live link like `a2z-website.vercel.app`.

**With the command line (if Node.js is installed):**
```bash
cd a2z-website
npx vercel --prod
```

**Connect your domain:** Project → Settings → Domains → add `a2zsolutionpoint.in`.
Vercel shows two DNS records; add them at your domain registrar. HTTPS is automatic.

**Updating later:** edit the file on GitHub (pencil icon) → Commit. Vercel redeploys in ~30 seconds.

---

## Option B — Hostinger (or any cPanel hosting)

Good if you want domain + business email (info@yourdomain) + hosting on one bill,
with phone/chat support.

1. hPanel → **Websites → Manage → File Manager** → open `public_html`.
2. Delete the default `default.php` / `index.php` if present.
3. Upload `a2z-website.zip` → right-click → **Extract**.
4. Move everything from the extracted `a2z-website` folder up into `public_html`
   (so `public_html/index.html` exists). Make sure `.htaccess` came along
   (File Manager → Settings → show hidden files).
5. hPanel → **Security → SSL** → install the free SSL certificate.

`.htaccess` already handles HTTPS redirect, compression, caching and the 404 page.

**Updating later:** File Manager → open `js/main.js` → Edit → Save.

---

## Option C — AWS

Only worth it if you already use AWS.

**Easiest — AWS Amplify Hosting:**
1. AWS Console → Amplify → **Deploy an app → Deploy without Git**.
2. Drag in `a2z-website.zip` → Save and deploy.
3. Domain management → add your domain (HTTPS automatic).

**Advanced — S3 + CloudFront:**
```bash
aws s3 mb s3://a2zsolutionpoint-site
aws s3 sync . s3://a2zsolutionpoint-site --exclude ".htaccess" --exclude "*.md" \
  --exclude "vercel.json" --exclude "netlify.toml" --exclude "_headers" --delete
aws s3 cp s3://a2zsolutionpoint-site/fonts  s3://a2zsolutionpoint-site/fonts  --recursive \
  --metadata-directive REPLACE --cache-control "public,max-age=31536000,immutable" --content-type font/woff2
```
Then create a CloudFront distribution with the bucket as origin (Origin Access Control),
default root object `index.html`, custom error response 404 → `/404.html`,
and an ACM certificate (us-east-1) for your domain.

---

## Option D — Netlify or Cloudflare Pages (free, drag-and-drop)

- **Netlify:** app.netlify.com/drop → drag the `a2z-website` folder. Done.
- **Cloudflare Pages:** dash.cloudflare.com → Workers & Pages → Create → Pages →
  **Upload assets** → drag the folder.

Both read `netlify.toml` / `_headers` automatically.

---

## After going live (do these once)

1. **Google Business Profile** (business.google.com): same name, phone and address,
   add the website link. This brings the most local calls.
2. **Google Search Console** (search.google.com/search-console): add your domain,
   then submit `https://yourdomain/sitemap.xml`.
3. Send your site link to yourself on WhatsApp to check the preview image appears.
4. Put the link in your WhatsApp Business profile and on your posters (QR code).

## Editing content

| What | File | Where |
|---|---|---|
| Phone, WhatsApp, address, brands | `js/main.js` | `const BIZ = {` at the top |
| Appliance details (EN + HI) | `js/main.js` | `const SERVICES = [` |
| Care tips, FAQ | `js/main.js` | `const TIPS`, `const FAQ` |
| Hindi text for headings/buttons | `js/main.js` | `const HI = {` |
| Headings / English text | `index.html` | search for the text |
| Colours, spacing | `css/style.css` | `:root {` at the top |
| Catalogue posters | `images/catalogue/` | replace `01.webp`… keep the same names |

The phone number also appears in `index.html` (search `8860010603`) – change it there too if it ever changes.

After editing CSS or JS, change `?v=1` to `?v=2` in `index.html` so visitors get the new version immediately.
