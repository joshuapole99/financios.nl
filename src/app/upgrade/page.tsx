"use client";

import { useState } from "react";
import Link from "next/link";
import posthog from "posthog-js";

const LEMONSQUEEZY_CHECKOUT_URL = "https://financios.lemonsqueezy.com/checkout/buy/63b7a3a4-db62-44bd-919a-5d12512dc8c4";

export default function UpgradePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // Placeholder: log to console until backend is wired
    console.log("[email-capture] upgrade page:", email);
    setSubmitted(true);
  }

  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Home
      </Link>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-semibold text-foreground mb-3 tracking-tight">
          Stop met hopen. Begin met een plan.
        </h1>
        <p className="text-muted">
          Geen vage tips. Een concreet weekplan gebaseerd op jóuw eigen cijfers.
        </p>
      </div>

      {/* Preview locked content */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-[var(--shadow-card)]">
        <h2 className="font-semibold text-foreground mb-4">Wat je direct krijgt</h2>
        <div className="flex flex-col gap-3">
          {[
            ["📅", "Weekplan", "Weet elke week hoeveel je mag uitgeven — geen giswerk meer."],
            ["📊", "Maandelijkse breakdown", "Zie in één oogopslag waar je geld naartoe gaat en wat je kunt schrappen."],
            ["🔄", "3 alternatieve scenario's", "Kies zelf wat haalbaar is — ook als je nu tekortkomt."],
            ["✂️", "Persoonlijke bezuinigingstips", "Op basis van jóuw uitgavepatroon, niet generieke adviezen."],
            ["🎯", "Exacte afrondingsdatum", "Weet precies wanneer jij je doel haalt — als je dit plan volgt."],
          ].map(([icon, title, desc]) => (
            <div key={title} className="flex gap-3 items-start">
              <span className="text-xl w-7">{icon}</span>
              <div>
                <span className="text-sm font-medium text-foreground block">{title}</span>
                <span className="text-xs text-muted">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing + CTA */}
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-6 text-center shadow-[var(--shadow-card)]">
        <p className="text-muted text-sm mb-1">Eenmalige investering</p>
        <p className="text-4xl font-bold text-foreground mb-1">€4,99</p>
        <p className="text-sm text-muted mb-6">Geen abonnement. Geen gedoe. Minder dan twee koppen koffie.</p>
        <a
          href={LEMONSQUEEZY_CHECKOUT_URL}
          onClick={() => posthog.capture("cta_clicked", { button: "fix_mijn_spaardoel", page: "upgrade" })}
          className="block w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-xl text-base tracking-wide transition-all shadow-lg shadow-accent/20 active:scale-[0.98] text-center"
        >
          Fix mijn spaardoel (€4,99) →
        </a>
        <p className="text-xs text-muted mt-3">
          Betaling via LemonSqueezy · Veilig &amp; versleuteld · Direct beschikbaar
        </p>
      </div>

      {/* Email capture */}
      <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-[var(--shadow-card)]">
        {submitted ? (
          <div className="text-center py-2">
            <p className="text-success font-semibold mb-1">Gelukt!</p>
            <p className="text-sm text-muted">We houden je op de hoogte van updates.</p>
          </div>
        ) : (
          <>
            <h2 className="font-semibold text-foreground mb-1">Nog niet klaar?</h2>
            <p className="text-sm text-muted mb-4">
              Laat je e-mail achter voor updates — we sturen je een bericht als er nieuwe functies beschikbaar zijn.
            </p>
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all active:scale-[0.98] shrink-0"
              >
                Houd me op de hoogte
              </button>
            </form>
          </>
        )}
      </div>

      <p className="text-xs text-muted text-center">
        Geen financieel advies.{" "}
        <Link href="/disclaimer" className="underline hover:text-foreground">
          Lees onze disclaimer
        </Link>
        .
      </p>
    </main>
  );
}
