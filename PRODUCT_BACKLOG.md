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

## ✅ LAUNCH READINESS (DONE)

- [x] Per-page SEO metadata (title, description, OG)
- [x] metadataBase set to https://financios.nl
- [x] robots.txt (generated via robots.ts)
- [x] sitemap.xml (generated via sitemap.ts)
- [x] Custom 404 page (design-matched)
- [x] Security headers (X-Frame-Options, CSP, Referrer-Policy, etc.)
- [x] Production build passing — 15 routes (13 static, 2 dynamic)

## ✅ SEO (IN PROGRESS)

- [x] /vakantie-sparen — example table, tips, FAQ, CTA
- [ ] /5000-euro-sparen
- [ ] /10000-euro-sparen
- [ ] /auto-sparen

## 🚀 NEXT PRIORITIES (POST-LAUNCH)

### Payments
- [ ] Stripe or LemonSqueezy integration (€4.99)
- [ ] Decision: validate conversion rate first, then wire up
- [ ] KvK registration required before enabling real payments

### Analytics
- [ ] Add Plausible or Umami (privacy-friendly, no cookies)
- [ ] Track: scan completions, result page views, premium CTA clicks
- [ ] A/B test CTA copy

### Product
- [ ] PDF export of /plan page
- [ ] AI-generated personalization text (Claude API)
- [ ] Email capture on /upgrade for waitlist

### SEO
- [ ] /5000-euro-sparen
- [ ] /10000-euro-sparen
- [ ] /auto-sparen
- [ ] Submit sitemap to Google Search Console after launch
