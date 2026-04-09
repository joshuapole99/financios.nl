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

## ✅ CONVERSION (DONE)

- [x] Stronger copy on /result (urgency, total gap, loss aversion)
- [x] Stronger copy on /upgrade (outcome-first, price anchoring)
- [x] PremiumCard with checklist + trust line + value anchor
- [x] Warning status gets premium CTA (was missing)

## ✅ MONETIZATION VALIDATION (DONE)

- [x] Full premium plan output page (/plan)
- [x] Fake payment flow: /result → /checkout → /plan
- [x] Personalized plan: weekplan, breakdown, reductions, 3 scenarios, target date, conclusion
- [x] lib/generatePlan.ts (deterministic, no external deps)

## 🔥 MONETIZATION (NEXT - CRITICAL)

- [x] Integrate LemonSqueezy checkout (€4.99) — placeholder URL in place
- [x] Replace fake checkout with real payment link (redirect to LemonSqueezy)
- [x] Redirect after payment → /plan (preserve query params via custom param)
- [ ] Swap placeholder URL with real LemonSqueezy product URL
- [ ] Validate: do users actually complete payment?

## 📊 VALIDATION (CRITICAL)

- [x] Add basic analytics (Plausible — script.tagged-events.js)
- [x] Track:
  - page views (automatic via Plausible)
  - CTA clicks ("Fix mijn spaardoel") via plausible-event-name attribute
  - /plan visits (automatic via Plausible)
- [x] Add simple email capture on /upgrade (console placeholder)
- [ ] Measure conversion rate (visitor → click → payment)

## ✅ LAUNCH READINESS (DONE)

- [x] Per-page SEO metadata (title, description, OG)
- [x] metadataBase set to https://financios.nl
- [x] robots.txt (generated via robots.ts)
- [x] sitemap.xml (generated via sitemap.ts)
- [x] Custom 404 page (design-matched)
- [x] Security headers (X-Frame-Options, CSP, Referrer-Policy, etc.)
- [x] Production build passing — 15 routes (13 static, 2 dynamic)

## 🔍 SEO (TRAFFIC - NEXT)

- [x] /vakantie-sparen
- [x] /5000-euro-sparen
- [ ] /10000-euro-sparen
- [ ] /auto-sparen
- [ ] Submit sitemap to Google Search Console

## 🧠 PRODUCT (AFTER FIRST SALES)

- [ ] AI-generated personalization text (Claude API)
- [ ] Improve premium plan depth (more tailored advice)
- [ ] A/B test CTA copy variations

## 📄 FUTURE FEATURES (ONLY AFTER TRACTION)

- [ ] PDF export of /plan page
- [ ] Save results (database)
- [ ] User authentication
- [ ] Dashboard

## ⚠️ DECISIONS

- [ ] Payment provider: LemonSqueezy (current choice) vs Stripe (later)
- [ ] Introduce accounts ONLY after returning users exist