# NSPIRE Academy v2 — Deployment Guide

## You need: GitHub + Vercel + Supabase (you already have all three)

---

## Step 1 — Supabase setup (5 min)
1. Open your Supabase project → SQL Editor
2. Paste and run the entire `supabase_setup.sql` file
3. Go to Project Settings → API → copy your Project URL and anon public key

---

## Step 2 — Push to GitHub
```bash
git add .
git commit -m "v2 supabase auth + scoring + regulatory updates"
git push
```

---

## Step 3 — Add env variables in Vercel
Settings → Environment Variables → add both:
- VITE_SUPABASE_URL = your Supabase project URL
- VITE_SUPABASE_ANON_KEY = your Supabase anon key

Save, then redeploy.

---

## Step 4 — Set domain in Supabase
Authentication → URL Configuration:
- Site URL = your Vercel domain
- Redirect URLs = same Vercel domain

---

## Run locally
```bash
cp .env.example .env   # then fill in your keys
npm install
npm run dev
```

---

## What's new in v2
- Login / signup — progress saved to Supabase, syncs across devices
- Regulatory update chapter — 3 major 2025 NSPIRE changes covered
- Unit 6 Scoring Deep Dive — Defect Impact Weight table, scoring calculator, REAC report reading, 5 practice scenarios
- All chapter quizzes expanded to 15 questions
