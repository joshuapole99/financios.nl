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
- [x] Switch LemonSqueezy from test → live mode
- [x] Wire email capture to real service (Brevo, gratis)
- [x] Rate limiting op /api/capture-email (3 req/hr per IP, Upstash)
- [x] First real sale — validate willingness to pay (test betaling gedaan, flow werkt)

## 📊 AFTER FIRST DATA (1–2 weeks)

- [ ] Check PostHog funnel: homepage → scan → result → checkout → plan
- [ ] Identify biggest drop-off in funnel and fix it
- [ ] A/B test CTA copy if conversion < 2%

## 🧠 PRODUCT (AFTER FIRST SALES)

- [ ] AI-generated personalization text (Claude API)
- [ ] Improve premium plan depth (more tailored advice)
  - Fix scenario inconsistency (fast < medium when expenses are low)
  - Smarter bezuinigingstips (skip categories with €0 spend)
  - Motivational element: week checklist / progress tracking
- [x] More SEO pages (/huis-sparen, /bruiloft-sparen, /studie-sparen live)
- [ ] Abonnement model — pas bouwen als accounts bestaan (gebruiker wil terugkeren voor voortgang)
- [x] Re-scan zonder opnieuw betalen — token pass-through via /scan?token=X

## 🔒 POST-LAUNCH: SERVER-SIDE ENTITLEMENT VALIDATION (P1 — AFTER LAUNCH)

> Current MVP uses client-side state (localStorage) for premium access. Acceptable for launch. Must be fixed after first sales to protect revenue at scale.

- [x] **Server-side entitlement validation geïmplementeerd**
  - Lemon Squeezy webhook (`order_created`) verifieert handtekening en genereert UUID token
  - Token + scan params opgeslagen in Upstash Redis (TTL 1 jaar)
  - `/plan?token=xxx` valideert server-side via Redis lookup
  - localStorage fallback (PlanParamsLoader) blijft werken voor bestaande users

## 🔮 POST-LAUNCH: PLAN PERSISTENCE (HIGH PRIORITY — NA EERSTE SALES)

> Bewust uitgesteld. Eerst valideren dat users willen betalen, dan pas bouwen.

- [x] **Magic link plan access** — geïmplementeerd
  - Na betaling ontvangt de user een magic link via Brevo email
  - Link formaat: `/plan?token=xxxxx` — werkt op elk apparaat / elke browser
  - Token opgeslagen in Upstash Redis met scan params

## 📧 EMAIL INFRA (NA LIVE LAUNCH)

> Na eerste sales opzetten. Niet eerder.

- [x] @financios.nl emailadressen aanmaken (hallo@, support@, privacy@, noreply@) — forwarding via ImprovMX → joshuapole@live.nl
- [x] Transactionele emails via Brevo (betalingsbevestiging + magic link na aankoop)
- [ ] Klantenupdates / nieuwsbrief sturen vanuit @financios.nl

## 📄 FUTURE (ONLY AFTER TRACTION)

- [ ] PDF export van /plan pagina
- [ ] Save results (database)
- [ ] User authentication / accounts
- [ ] Dashboard

## ⚠️ DECISIONS

- [ ] Payment provider: LemonSqueezy (current) vs Stripe (later)
- [ ] Introduce accounts ONLY after returning users exist
