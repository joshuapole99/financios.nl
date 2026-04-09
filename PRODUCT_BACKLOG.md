# PRODUCT_BACKLOG.md

## ✅ MVP (DONE)

- [x] Landing page (/)
- [x] Scan page UI (/scan) with URL pre-fill support
- [x] Input validation
- [x] Financial calculation logic (lib/calculate.ts)
- [x] Result page (/result) with conversion optimization
- [x] Status badge: achievable / warning / not-achievable
- [x] Gap visualization + savings gap numbers
- [x] Biggest expense leak card
- [x] Fix scenarios (free tier teaser)
- [x] Premium section with conversion-focused CTA
- [x] Upgrade page (/upgrade)

## ✅ UI / DESIGN (DONE)

- [x] Inter font + Tailwind v4 dark design system
- [x] Shadow tokens, Stripe-style labels, glow buttons, focus rings
- [x] Sticky nav with backdrop blur
- [x] Consistent spacing (max-w-xl, mb-6, shadow-card)
- [x] Mobile-first layout
- [x] Animated ambient gradient background (homepage)

## ✅ CONVERSION (DONE)

- [x] Stronger copy on /result (urgency, total gap, loss aversion)
- [x] Stronger copy on /upgrade (outcome-first, price anchoring)
- [x] PremiumCard with checklist + trust line + value anchor
- [x] Warning status gets premium CTA (was missing)
- [x] Homepage redesign: How it works + Voorbeelden + Trust CTA

## ✅ MONETIZATION (DONE)

- [x] Full premium plan output page (/plan)
- [x] lib/generatePlan.ts (deterministic, no external deps)
- [x] LemonSqueezy checkout wired (test mode → live in ~3 days)
- [x] Redirect after payment → /plan (localStorage + checkout[success_url])
- [x] End-to-end payment flow validated with test payment

## ✅ ANALYTICS & VALIDATION (DONE)

- [x] PostHog EU installed (posthog-js, provider, SPA page view tracking)
- [x] NEXT_PUBLIC_POSTHOG_KEY + NEXT_PUBLIC_POSTHOG_HOST deployed to Vercel
- [x] Email capture on /upgrade (console placeholder)
- [x] Google Search Console verified + sitemap submitted (8 pages indexed)

## ✅ SEO (DONE)

- [x] /vakantie-sparen
- [x] /5000-euro-sparen
- [x] /10000-euro-sparen
- [x] /auto-sparen
- [x] Per-page metadata (title, description, OG)
- [x] sitemap.xml + robots.txt
- [x] SEO pages linked from homepage

## 🔥 NEXT — TRACK & CONVERT (CRITICAL)

- [ ] Fix CTA event tracking: replace old Plausible attributes with PostHog captures
      → checkout/page.tsx and upgrade/page.tsx buttons
- [ ] Switch LemonSqueezy from test → live mode (user action, ~3 days)
- [ ] Wire email capture to real service (Resend or Brevo free tier)
- [ ] First real sale — validate willingness to pay

## 📊 AFTER FIRST DATA (1–2 weeks)

- [ ] Check PostHog funnel: homepage → scan → result → checkout → plan
- [ ] Identify biggest drop-off in funnel and fix it
- [ ] A/B test CTA copy if conversion < 2%

## 🧠 PRODUCT (AFTER FIRST SALES)

- [ ] AI-generated personalization text (Claude API)
- [ ] Improve premium plan depth (more tailored advice)
- [ ] More SEO pages (/huis-sparen, /bruiloft-sparen, etc.)

## 📄 FUTURE (ONLY AFTER TRACTION)

- [ ] PDF export of /plan page
- [ ] Save results (database)
- [ ] User authentication
- [ ] Dashboard

## ⚠️ DECISIONS

- [ ] Payment provider: LemonSqueezy (current) vs Stripe (later)
- [ ] Introduce accounts ONLY after returning users exist
