import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Hoe Financios omgaat met jouw gegevens. We slaan niets op — alles blijft op jouw apparaat.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Home
      </Link>
      <h1 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">Privacybeleid</h1>
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4 text-sm text-muted leading-[1.75] shadow-[var(--shadow-card)]">
        <p>
          Financios hecht veel waarde aan jouw privacy. We verzamelen zo min mogelijk
          gegevens.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Welke gegevens gebruiken we?</h2>
        <p>
          De financiële gegevens die je invult worden uitsluitend gebruikt voor de
          berekening op jouw apparaat. Wij slaan deze gegevens niet op in een
          database en delen ze niet met derden.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Analytics</h2>
        <p>
          We kunnen gebruik maken van minimale, privacyvriendelijke analytics
          (zonder cookies) om te zien hoeveel bezoekers de site heeft. Er worden
          geen persoonlijke gegevens bijgehouden.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Cookies</h2>
        <p>
          Financios gebruikt geen tracking cookies. Alleen functionele cookies
          die strikt noodzakelijk zijn voor het werken van de website kunnen
          worden gebruikt.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Contact</h2>
        <p>
          Heb je vragen over dit privacybeleid? Stuur een e-mail naar
          privacy@financios.nl.
        </p>
      </div>
    </main>
  );
}
