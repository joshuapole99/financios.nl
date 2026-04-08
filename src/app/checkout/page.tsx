"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function CheckoutContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, setState] = useState<"idle" | "processing" | "done">("idle");

  const doelNaam = searchParams.get("doelNaam") || "Spaardoel";

  async function handlePay() {
    setState("processing");
    await delay(1400);
    setState("done");
    await delay(900);
    router.push(`/plan?${searchParams.toString()}`);
  }

  if (state === "processing") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4">
          <Spinner />
          <p className="text-foreground font-medium">Betaling verwerken…</p>
          <p className="text-sm text-muted">Even geduld</p>
        </div>
      </main>
    );
  }

  if (state === "done") {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-14 h-14 rounded-full bg-success/20 flex items-center justify-center">
            <span className="text-success text-2xl font-bold">✓</span>
          </div>
          <p className="text-foreground font-semibold text-lg">Betaling geslaagd</p>
          <p className="text-sm text-muted">Jouw plan wordt geladen…</p>
        </div>
      </main>
    );
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

      {/* Simulation notice */}
      <div className="bg-warning/10 border border-warning/20 rounded-xl px-4 py-2.5 mb-6 flex items-center gap-2">
        <span className="text-warning text-sm">⚠</span>
        <p className="text-xs text-muted">
          <span className="text-warning font-semibold">Testomgeving</span> — geen echte betaling. Je gegevens worden niet verwerkt.
        </p>
      </div>

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

      {/* CTA */}
      <button
        onClick={handlePay}
        className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-xl text-base transition-all shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide mb-3"
      >
        Betaal €4,99 en bekijk mijn plan →
      </button>

      <p className="text-xs text-muted text-center">
        Eenmalig · Geen abonnement · Direct beschikbaar
      </p>
    </main>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen flex items-center justify-center">
          <Spinner />
        </main>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}

function Spinner() {
  return (
    <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin" />
  );
}

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
