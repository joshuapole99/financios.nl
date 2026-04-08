import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financios – Waarom ben jij altijd blut?",
  description:
    "Ontdek in 60 seconden waar je geld verdwijnt. Gratis spaaranalyse + persoonlijk fix plan voor jouw spaardoel.",
  openGraph: {
    title: "Financios – Waarom ben jij altijd blut?",
    description:
      "Ontdek in 60 seconden waar je geld verdwijnt. Gratis spaaranalyse + persoonlijk fix plan.",
    url: "https://financios.nl",
  },
};

export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border px-6 py-4 flex items-center justify-between max-w-5xl mx-auto w-full backdrop-blur-md bg-background/80">
        <span className="font-semibold text-foreground tracking-tight">
          Financios
        </span>
        <Link
          href="/scan"
          className="text-sm text-muted hover:text-foreground transition-colors"
        >
          Start scan →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 text-center px-6 py-28 max-w-3xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 bg-card-hover border border-border rounded-full px-4 py-1.5 text-sm text-muted mb-8 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-success inline-block" />
          Gratis spaaranalyse — geen account nodig
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
          Waarom ben jij{" "}
          <span className="text-accent">altijd blut?</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted max-w-xl mb-10 leading-[1.7]">
          Ontdek in 60 seconden waar je geld verdwijnt en krijg een concreet
          plan om je spaardoel wél te halen.
        </p>

        <Link
          href="/scan"
          className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide"
        >
          Start mijn scan →
        </Link>

        <p className="text-sm text-muted mt-4">
          Geen registratie. Geen creditcard. 100% gratis.
        </p>
      </section>

      {/* Benefit cards */}
      <section className="px-6 pb-24 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <BenefitCard
            icon="📊"
            title="Inzicht in 60 seconden"
            description="Vul je inkomsten en uitgaven in. Wij berekenen direct je spaarruimte."
          />
          <BenefitCard
            icon="🎯"
            title="Spaardoel analyse"
            description="Is jouw doel haalbaar? We laten je precies zien wat er nodig is."
          />
          <BenefitCard
            icon="🔧"
            title="Concreet fix plan"
            description="Niet bereikbaar? Wij geven je scenario's om je doel alsnog te halen."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-8 text-center text-sm text-muted">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <Link href="/disclaimer" className="hover:text-foreground transition-colors">
            Disclaimer
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Voorwaarden
          </Link>
        </div>
        <p className="mt-3 text-xs">
          Financios geeft geen financieel advies. Resultaten zijn schattingen
          voor informatieve doeleinden.
        </p>
      </footer>
    </main>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:border-accent/20 transition-colors duration-200">
      <div className="text-2xl mb-3">{icon}</div>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted leading-relaxed">{description}</p>
    </div>
  );
}
