import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Financios geeft geen financieel advies. Lees onze disclaimer.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen px-4 py-10 max-w-2xl mx-auto">
      <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors mb-8 inline-block">
        ← Home
      </Link>
      <h1 className="text-3xl font-semibold text-foreground mb-6 tracking-tight">Disclaimer</h1>
      <div className="bg-card border border-border rounded-2xl p-6 space-y-4 text-sm text-muted leading-[1.75] shadow-[var(--shadow-card)]">
        <p>
          Financios biedt geen financieel advies. Alle resultaten zijn schattingen
          voor informatieve en educatieve doeleinden.
        </p>
        <p>
          De berekeningen zijn gebaseerd op de door jou ingevoerde gegevens en
          zijn niet gecontroleerd door een financieel adviseur. Financios geeft
          geen garanties over de juistheid, volledigheid of bruikbaarheid van
          de gepresenteerde informatie.
        </p>
        <p>
          Neem voor persoonlijk financieel advies contact op met een gecertificeerd
          financieel adviseur. Financios is niet aansprakelijk voor beslissingen
          die je neemt op basis van de resultaten van deze tool.
        </p>
        <p>
          Het gebruik van Financios geschiedt volledig op eigen risico.
        </p>
      </div>
    </main>
  );
}
