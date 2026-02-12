# Horse Farm Manager (Mobile Web App)

This is a simple mobile-first app for managing horse farm **tasks**, **horses**, and **expenses**.

## What it includes
- Tasks (due date, priority, area, optional horse link, notes)
- Expenses (date, category, vendor, amount, memo, optional horse link)
- Horses (notes, active/inactive, quick stats)
- Reports (6-month spending trend)
- Backup (Export/Import JSON)

## Deploy (fastest): Vercel (recommended)
1. Create a free Vercel account.
2. Click **Add New → Project**.
3. Choose **Import** and upload this project (zip or folder).
4. Vercel should auto-detect **Vite**.
5. It will build and give you a URL.

### After deploy (on iPhone)
- Open the Vercel URL in **Safari**
- Tap **Share** → **Add to Home Screen**

## Alternative: Netlify
- Create a Netlify site from this folder
- Build command: `npm run build`
- Publish directory: `dist`

## Run locally (optional)
1. Install Node.js 18+
2. In this folder:
   - `npm install`
   - `npm run dev`

## Data storage
- Saved on-device via `localStorage`
- Export regularly if you want backups/sharing.
