# PRODUCT_BACKLOG.md

## 🧪 VALIDATION PHASE (CURRENT)

- Product wordt getest met familie/vrienden (manual distribution)
- Geen echte marketing of schaalverkeer
- Focus: begrip, usability, clarity en friction detection
- Succes = users kunnen zonder uitleg: scan → result → plan doorlopen

Geen harde conversiepercentages in deze fase.

## 📊 LATER (AFTER VALIDATION)

> Worden pas relevant bij echte traffic. Gebruikt voor optimalisatie na eerste gebruikersvalidatie.

- Homepage → scan start: doel 40%+
- Scan → result: doel 80%+
- Result → checkout click: doel 5–10%
- Checkout → betaling voltooid: doel 50%+
- Overall homepage → betaling: doel 1–3%

---

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

- [x] Fix CTA event tracking: PostHog captures on checkout + upgrade buttons
- [ ] Switch LemonSqueezy from test → live mode (user action, zodra goedgekeurd)
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

## 🔒 POST-LAUNCH: SERVER-SIDE ENTITLEMENT VALIDATION (P1 — AFTER LAUNCH)

> Current MVP uses client-side state (localStorage) for premium access. Acceptable for launch. Must be fixed after first sales to protect revenue at scale.

- [ ] **Add server-side entitlement validation for premium access (Lemon Squeezy)**
  - Use Lemon Squeezy webhook to detect successful purchases
  - Generate or store a purchase token / entitlement flag (e.g. database or KV store)
  - Validate access to /plan on page load via server-side check or API route
  - Prevent direct URL access to premium content without valid entitlement
  - Ensure backward compatibility with existing localStorage fallback (if applicable)
  - **Rationale:** current system is client-side only and allows potential bypass of premium content. MVP metrics show strong conversion and product-market fit. Security layer required to protect revenue after initial launch and scaling.

## 🔮 POST-LAUNCH: PLAN PERSISTENCE (HIGH PRIORITY — NA EERSTE SALES)

> Bewust uitgesteld. Eerst valideren dat users willen betalen, dan pas bouwen.

- [ ] **Magic link plan access** — NIET geïmplementeerd
  - Na LemonSqueezy betaling ontvangt de user een persistente link naar hun plan
  - Link formaat: `/plan?token=xxxxx`
  - Vereist: database (bijv. Supabase), token-gebaseerde toegang, email delivery
  - Doel: plan toegankelijk vanuit elk apparaat / elke browser
  - Huidige situatie: plan leeft alleen in de browser waarmee betaald is (localStorage)

## 📧 EMAIL INFRA (NA LIVE LAUNCH)

> Na eerste sales opzetten. Niet eerder.

- [x] @financios.nl emailadressen aanmaken (hallo@, support@, privacy@, noreply@) — forwarding via ImprovMX → joshuapole@live.nl
- [ ] Transactionele emails via Resend of Postmark (betalingsbevestiging + plan-link)
- [ ] Klantenupdates / nieuwsbrief sturen vanuit @financios.nl

## 📄 FUTURE (ONLY AFTER TRACTION)

- [ ] PDF export van /plan pagina
- [ ] Save results (database)
- [ ] User authentication / accounts
- [ ] Dashboard

## ⚠️ DECISIONS

- [ ] Payment provider: LemonSqueezy (current) vs Stripe (later)
- [ ] Introduce accounts ONLY after returning users exist
