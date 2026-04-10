"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import posthog from "posthog-js";

const LEMONSQUEEZY_CHECKOUT_URL = "https://financios.lemonsqueezy.com/checkout/buy/f636b083-cc9d-436f-a1ed-075c4096fa19";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const doelNaam = searchParams.get("doelNaam") || "Spaardoel";

  const checkoutUrl =
    `${LEMONSQUEEZY_CHECKOUT_URL}` +
    `?checkout[success_url]=${encodeURIComponent("https://financios.nl/plan")}` +
    `&checkout[custom][params]=${encodeURIComponent(searchParams.toString())}`;

  function trackClick() {
    posthog.capture("cta_clicked", { button: "betaal_499", page: "checkout" });
  }

  return (
    <main className="min-h-screen px-6 py-12 max-w-5xl mx-auto">
      {/* Back link */}
      <Link
        href={`/result?${searchParams.toString()}`}
        className="text-sm text-muted hover:text-foreground transition-colors mb-10 inline-block"
      >
        ← Terug naar resultaat
      </Link>

      {/* Order summary */}
      <div className="bg-card border border-border rounded-2xl p-10 mb-6 shadow-[var(--shadow-card)]">
        <h1 className="text-3xl font-semibold text-foreground tracking-tight mb-6">
          Bevestig je aankoop
        </h1>

        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-lg font-medium text-foreground">
              Persoonlijk spaarfix plan
            </p>
            <p className="text-sm text-muted mt-1">{doelNaam}</p>
          </div>
          <span className="text-3xl font-bold text-foreground">€4,99</span>
        </div>

        <div className="border-t border-border pt-6 space-y-3 mb-6">
          {[
            "Weekplan op maat",
            "Maandelijkse breakdown",
            "Persoonlijke bezuinigingstips",
            "3 progressiescenario's",
            "Exacte afrondingsdatum",
          ].map((f) => (
            <div key={f} className="flex items-center gap-3 text-sm text-muted">
              <span className="text-success font-bold text-base">✓</span>
              {f}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex justify-between items-center">
          <span className="text-base text-muted">Totaal (eenmalig)</span>
          <span className="text-foreground font-bold text-2xl">€4,99</span>
        </div>
      </div>

      {/* CTA — redirects to LemonSqueezy */}
      <a
        href={checkoutUrl}
        onClick={trackClick}
        className="block w-full bg-accent hover:bg-accent-hover text-white font-semibold py-5 rounded-xl text-lg transition-all shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide mb-3 text-center"
      >
        Betaal €4,99 en bekijk mijn plan →
      </a>

      <p className="text-sm text-muted text-center mb-1">
        Eenmalig · Geen abonnement · Direct beschikbaar
      </p>
      <p className="text-sm text-muted text-center">
        Betalen via creditcard of Apple Pay · iDEAL komt binnenkort
      </p>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin" />
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
