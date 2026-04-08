import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spaarfix plan",
  description:
    "Weekplan, bezuinigingstips op maat en exacte afrondingsdatum — eenmalig €4,99. Geen abonnement.",
};

export default function UpgradePage() {
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

      {/* Pricing */}
      <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-6 text-center shadow-[var(--shadow-card)]">
        <p className="text-muted text-sm mb-1">Eenmalige investering</p>
        <p className="text-4xl font-bold text-foreground mb-1">€4,99</p>
        <p className="text-sm text-muted mb-6">Geen abonnement. Geen gedoe. Minder dan twee koppen koffie.</p>
        <button
          disabled
          className="w-full bg-accent text-white font-semibold py-4 rounded-xl text-base tracking-wide opacity-60 cursor-not-allowed"
        >
          Beschikbaar binnenkort
        </button>
        <p className="text-xs text-muted mt-3">
          Betaling via Stripe · Veilig & versleuteld · Direct beschikbaar
        </p>
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
