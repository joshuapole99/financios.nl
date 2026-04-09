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

const steps = [
  {
    n: "1",
    title: "Vul je inkomen in",
    body: "Voer je netto maandinkomen en vaste lasten in. Duurt minder dan 60 seconden.",
  },
  {
    n: "2",
    title: "Analyseer je uitgaven",
    body: "Wij berekenen direct je spaarruimte en laten zien waar je geld naartoe gaat.",
  },
  {
    n: "3",
    title: "Ontvang je spaarplan",
    body: "Zie of je doel haalbaar is en krijg concrete scenario's om het sneller te bereiken.",
  },
];

const examples = [
  {
    href: "/5000-euro-sparen",
    label: "Spaardoel",
    title: "€5.000 sparen",
    body: "Bereken hoeveel je per maand opzij moet zetten en wanneer je er bent.",
  },
  {
    href: "/vakantie-sparen",
    label: "Vakantie",
    title: "Vakantie sparen",
    body: "Van citytrip tot verre reis — wij berekenen het maandbedrag dat bij jou past.",
  },
  {
    href: "/auto-sparen",
    label: "Auto",
    title: "Auto sparen",
    body: "Tweedehands of nieuw — zie hoe lang het duurt en wat je kunt versnellen.",
  },
];

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
      <section className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-20 max-w-3xl mx-auto w-full">
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
          Start spaar scan →
        </Link>

        <p className="text-sm text-muted mt-4">
          Geen registratie. Geen creditcard. 100% gratis.
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
            Hoe het werkt
          </p>
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">
            In 3 stappen naar jouw spaarplan
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {steps.map((step) => (
            <div
              key={step.n}
              className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] flex gap-4 items-start"
            >
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent text-sm font-bold flex items-center justify-center shrink-0">
                {step.n}
              </span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Voorbeelden */}
      <section className="px-6 pb-20 max-w-5xl mx-auto w-full">
        <div className="text-center mb-10">
          <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
            Voorbeelden
          </p>
          <h2 className="text-2xl font-semibold text-foreground tracking-tight">
            Wat wil jij sparen?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {examples.map((ex) => (
            <Link
              key={ex.href}
              href={ex.href}
              className="bg-card border border-border rounded-2xl p-6 shadow-[var(--shadow-card)] hover:border-accent/30 hover:bg-card-hover transition-all duration-200 group"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-accent mb-2">
                {ex.label}
              </p>
              <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {ex.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed mb-4">{ex.body}</p>
              <span className="text-xs text-accent font-medium">
                Bereken jouw plan →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefit cards */}
      <section className="px-6 pb-20 max-w-5xl mx-auto w-full">
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

      {/* Trust + final CTA */}
      <section className="px-6 pb-28 max-w-2xl mx-auto w-full text-center">
        <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <h2 className="text-2xl font-semibold text-foreground tracking-tight mb-3">
            Klaar om te starten?
          </h2>
          <p className="text-muted mb-6 leading-relaxed">
            Duurt 60 seconden. Geen account. Geen creditcard. Je gegevens
            verlaten je browser niet — alles wordt lokaal berekend.
          </p>
          <Link
            href="/scan"
            className="inline-block bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-xl text-base transition-all shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide"
          >
            Start spaar scan gratis →
          </Link>
          <div className="flex items-center justify-center gap-6 mt-5 flex-wrap">
            {["✓ Geen registratie", "✓ Geen creditcard", "✓ Privacy-first"].map((t) => (
              <span key={t} className="text-xs text-muted">{t}</span>
            ))}
          </div>
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
