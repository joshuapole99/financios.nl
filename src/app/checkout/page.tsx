"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const LEMONSQUEEZY_CHECKOUT_URL = "https://financios.lemonsqueezy.com/checkout/buy/63b7a3a4-db62-44bd-919a-5d12512dc8c4";

function CheckoutContent() {
  const searchParams = useSearchParams();
  const doelNaam = searchParams.get("doelNaam") || "Spaardoel";

  // Pass /plan?{params} as the success_url so LemonSqueezy modal button lands correctly
  const planUrl = `https://financios.nl/plan?${searchParams.toString()}`;
  const checkoutUrl = `${LEMONSQUEEZY_CHECKOUT_URL}?checkout[success_url]=${encodeURIComponent(planUrl)}`;

  // Save params to localStorage so /plan can recover them if user arrives without URL params
  function saveParamsToStorage() {
    localStorage.setItem("financios_scan_params", searchParams.toString());
  }

  return (
    <main className="min-h-screen px-4 py-10 max-w-md mx-auto">
      {/* Back link */}
      <Link
        href={`/result?${searchParams.toString()}`}
        className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Terug naar resultaat
      </Link>

      {/* Order summary */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-4 shadow-[var(--shadow-card)]">
        <h1 className="text-xl font-semibold text-foreground tracking-tight mb-4">
          Bevestig je aankoop
        </h1>

        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm font-medium text-foreground">
              Persoonlijk spaarfix plan
            </p>
            <p className="text-xs text-muted mt-0.5">{doelNaam}</p>
          </div>
          <span className="text-lg font-bold text-foreground">€4,99</span>
        </div>

        <div className="border-t border-border pt-4 space-y-1.5 mb-4">
          {[
            "Weekplan op maat",
            "Maandelijkse breakdown",
            "Persoonlijke bezuinigingstips",
            "3 progressiescenario's",
            "Exacte afrondingsdatum",
          ].map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-muted">
              <span className="text-success font-bold">✓</span>
              {f}
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-4 flex justify-between items-center">
          <span className="text-sm text-muted">Totaal (eenmalig)</span>
          <span className="text-foreground font-bold">€4,99</span>
        </div>
      </div>

      {/* CTA — redirects to LemonSqueezy */}
      <a
        href={checkoutUrl}
        onClick={saveParamsToStorage}
        className="plausible-event-name=Fix+mijn+spaardoel block w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-xl text-base transition-all shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide mb-3 text-center"
      >
        Betaal €4,99 en bekijk mijn plan →
      </a>

      <p className="text-xs text-muted text-center mb-6">
        Eenmalig · Geen abonnement · Direct beschikbaar
      </p>

      {/* Test fallback */}
      <div className="border-t border-border pt-6 text-center">
        <p className="text-xs text-muted mb-2">Testomgeving</p>
        <Link
          href={`/plan?${searchParams.toString()}`}
          className="text-xs text-muted underline hover:text-foreground transition-colors"
        >
          Plan bekijken zonder betaling (alleen voor testen)
        </Link>
      </div>
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
