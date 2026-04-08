# CHANGELOG.md

## v0.7 - Launch Preparation (2026-04-09)
- **SEO metadata**: `metadataBase` set to `https://financios.nl` in root layout; `title` template (`%s – Financios`) applied to all pages; per-page `description` and `openGraph` on every route
- **robots.ts**: generated `/robots.txt` — allows landing, scan, upgrade, SEO pages; blocks /result, /plan, /checkout (personalized/payment pages)
- **sitemap.ts**: generated `/sitemap.xml` with all 7 indexable routes + priorities
- **Custom 404** (`not-found.tsx`): design-matched dark page with home + scan CTA
- **Security headers** in `next.config.ts`: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-XSS-Protection
- **Scan pre-fill from URL**: `/scan?doelNaam=Vakantie&doel=1500&maanden=12` pre-fills the form — enables SEO pages to link into a populated scan
- **SEO page `/vakantie-sparen`**: full Dutch content page targeting "vakantie sparen" keyword — example calculation table, 3 tips, FAQ section, CTA to scan; linked from sitemap
- **15 routes** building cleanly (13 static, 2 dynamic)

## v0.6 - Fake Payment Flow + Full Premium Plan (2026-04-09)
- **New page `/checkout`** — simulated payment confirmation screen with order summary, "Betaal €4,99" CTA, processing state, and success animation before redirecting to `/plan`
- **New page `/plan`** — full post-payment premium output (server component):
  - Payment success banner
  - Prominent recommended target date
  - Personalized 4-week weekly plan with specific actionable tips
  - Full monthly income breakdown with per-category % bars
  - Up to 4 personalized expense reduction suggestions with savings potential
  - 3 progression scenarios (Rustig / Slim / Maximaal) with dates and "Aanbevolen" badge
  - Written conclusion with feasibility verdict
- **New lib `/lib/generatePlan.ts`** — deterministic premium plan generator; derives weekly tasks, breakdown, reductions, scenarios, and conclusion from existing ScanInput + ScanResult (no calculation logic changed)
- **Result page CTA updated**: "Fix mijn spaardoel voor €4,99" now links to `/checkout?[all scan params]` instead of `/upgrade`
- **Checkout page**: clearly marked as test environment (⚠ Testomgeving notice) so it's transparent

## v0.5 - Copy Optimization: /result + /upgrade (2026-04-08)
- **Status badge copy** (not-achievable): "Op dit tempo haal jij [doel] nooit op tijd" + "Dat is geld dat je nu al verliest" — concrete, emotional
- **Status badge copy** (no capacity): "Je geeft meer uit dan je verdient. Zonder concrete aanpassingen is dit doel onhaalbaar."
- **Warning copy**: "Bijna is niet genoeg. Doe je niets, dan mis je [X] in totaal — en haal je je doel niet."
- **Free scenarios subtitle**: reframed to create urgency — "zonder concreet weekplan weet je morgen nog steeds niet hoe"
- **PremiumCard intro**: "Zonder plan gaat er maand na maand voorbij" — loss-aversion framing
- **PremiumCard features**: rewritten to outcome-first ("weet elke week hoeveel je mag uitgeven", "exacte datum", "persoonlijke bezuinigingstips gericht op jóuw kostenpost")
- **Value anchor**: "Dit plan betaalt zichzelf al terug in maand één" — tighter ROI framing
- **/upgrade H1**: "Stop met hopen. Begin met een plan." — direct, no fluff
- **/upgrade subtitle**: "Geen vage tips. Een concreet weekplan gebaseerd op jóuw eigen cijfers."
- **/upgrade section title**: "Wat zit er in het plan?" → "Wat je direct krijgt"
- **/upgrade feature descriptions**: all rewritten to outcome-focused language
- **/upgrade pricing label**: "Eenmalig" → "Eenmalige investering"
- **/upgrade pricing subtext**: added "Minder dan twee koppen koffie" price anchor
- **/upgrade trust line**: added "Direct beschikbaar" to remove hesitation

## v0.4 - Result Page Conversion Optimization (2026-04-08)
- **Page reordered for not-achievable/warning**: gap visualization → premium CTA → free scenarios (was buried last)
- **Stronger status copy**: "Op dit tempo haal je je doel X maanden te laat" — concrete, emotional
- **Total gap impact line**: shows total money missed over the full period (gap × months), not just monthly
- **New GapBar component**: visual split bar showing % covered vs % short — makes the gap visceral
- **3-column gap card**: "Jij spaart / Nodig / Tekort" side by side for instant comprehension
- **PremiumCard redesign**: replaces blur-mystery overlay with a clean, credible checklist card
  - 5 specific features listed with checkmarks
  - CTA: "Fix mijn spaardoel voor €4,99 →" (was "Unlock jouw fix plan")
  - Trust line: "Eenmalig · Direct beschikbaar · Geen abonnement"
  - Value anchor: "Je mist nu €X/maand. Dit plan betaalt zichzelf terug in de eerste maand."
  - Accent header strip for premium feel
- **Warning status now gets premium CTA** (previously had no conversion path)
- **Free scenarios labeled "Gratis inzicht"** to frame them as a teaser, not the full solution
- **Achievable path cleaned up**: only 2 metric cards, scenarios reframed as "hoe je het sneller haalt"

## v0.1 - Project Setup
- Initialized Financios project
- Defined AI-assisted workflow
- Added core documentation files:
  - AI_CONTEXT.md
  - PRODUCT_BACKLOG.md
  - README.md

## v0.2 - MVP Build (2026-04-08)
- Built full MVP in one pass
- Design system: dark theme (#0B0F14 bg, #111827 cards, #6366F1 accent) via Tailwind v4 `@theme inline`
- Landing page (/) with hook, 3 benefit cards, footer with legal links
- Scan page (/scan) — client component with 4 sections: inkomen, vaste lasten, variabele kosten, spaardoel
  - Live spaarruimte preview updates as user types
  - Form validation before submit
  - Passes all values as URL query params to /result
- Calculation engine (lib/calculate.ts)
  - Computes: monthly capacity, required monthly savings, savings gap
  - Status: achievable / warning / not-achievable
  - Biggest expense leak detection
  - 3 fix scenarios (extend timeline, reduce expense, adjust goal)
- Result page (/result) — server component reading searchParams (Next.js 16 async pattern)
  - Status badge with color coding
  - 4 key metric cards
  - Biggest expense leak with progress bar
  - Fix scenarios
  - Locked premium section (blur overlay) for not-achievable goals with CTA
- Upgrade page (/upgrade) — plan preview, €4.99 pricing, Stripe coming soon
- Legal pages: /disclaimer, /privacy, /terms

## v0.3 - UI Polish (2026-04-08)
- Switched font from Geist to **Inter** for sharper SaaS readability
- Added `--shadow-card` design token: subtle depth without heavy gradients
- Added `::selection` with accent color + `scroll-behavior: smooth` globally
- **Cards**: all cards now have `shadow-[var(--shadow-card)]`, consistent `mb-6` spacing
- **Buttons**: primary buttons get `shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide` glow + micro-interaction
- **Inputs**: taller inputs (`py-3.5`), ring-based focus state (`focus:ring-2 focus:ring-accent/30`), styled `€` prefix with separator border
- **Labels**: Stripe-style `text-xs font-medium uppercase tracking-wider` throughout scan form
- **Headings**: `font-semibold tracking-tight` on sub-headings (not hero h1)
- **Nav**: sticky + `backdrop-blur-md bg-background/80` for scroll depth effect
- **BenefitCards**: hover border accent glow on landing page cards
- **MetricCard**: labels upgraded to uppercase style, values bumped to `text-2xl`
- **Section totals**: added `border-t border-border` separator for visual clarity
- **Secondary button**: added `hover:bg-card-hover` for clearer interactive state
- **Legal pages**: `leading-[1.75]` body text, uppercase section headings
- Container width: `max-w-2xl` → `max-w-xl` on scan and result pages for better column readability
