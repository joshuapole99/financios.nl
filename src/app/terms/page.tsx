import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description: "De algemene voorwaarden van Financios.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Home
      </Link>
      <h1 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">Algemene voorwaarden</h1>
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4 text-sm text-muted leading-[1.75] shadow-[var(--shadow-card)]">
        <p>
          Door gebruik te maken van Financios ga je akkoord met de volgende
          voorwaarden.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Gebruik op eigen risico</h2>
        <p>
          Financios is een informatieve tool. Het gebruik geschiedt volledig op
          eigen risico. Wij zijn niet aansprakelijk voor enige schade die
          voortvloeit uit het gebruik van de service.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Geen financieel advies</h2>
        <p>
          De resultaten van Financios zijn geen financieel advies. Zie ook onze
          <Link href="/disclaimer" className="text-accent underline ml-1">disclaimer</Link>.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Wijzigingen</h2>
        <p>
          Financios behoudt het recht om de service, prijzen of voorwaarden op
          elk moment te wijzigen. Wij informeren gebruikers zo mogelijk van
          tevoren over ingrijpende wijzigingen.
        </p>
        <h2 className="text-foreground font-semibold text-sm uppercase tracking-wider">Toepasselijk recht</h2>
        <p>
          Op deze voorwaarden is Nederlands recht van toepassing.
        </p>
      </div>
    </main>
  );
}
