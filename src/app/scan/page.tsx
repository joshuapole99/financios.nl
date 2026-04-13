"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FormValues {
  inkomen: string;
  huur: string;
  abonnementen: string;
  verzekeringen: string;
  boodschappen: string;
  vervoer: string;
  horeca: string;
  overig: string;
  doel: string;
  spaargeld: string;
  maanden: string;
  doelNaam: string;
}

const defaultValues: FormValues = {
  inkomen: "",
  huur: "",
  abonnementen: "",
  verzekeringen: "",
  boodschappen: "",
  vervoer: "",
  horeca: "",
  overig: "",
  doel: "",
  spaargeld: "",
  maanden: "12",
  doelNaam: "",
};

function ScanForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token") ?? "";

  const [values, setValues] = useState<FormValues>({
    ...defaultValues,
    inkomen: searchParams.get("inkomen") ?? defaultValues.inkomen,
    huur: searchParams.get("huur") ?? defaultValues.huur,
    abonnementen: searchParams.get("abonnementen") ?? defaultValues.abonnementen,
    verzekeringen: searchParams.get("verzekeringen") ?? defaultValues.verzekeringen,
    boodschappen: searchParams.get("boodschappen") ?? defaultValues.boodschappen,
    vervoer: searchParams.get("vervoer") ?? defaultValues.vervoer,
    horeca: searchParams.get("horeca") ?? defaultValues.horeca,
    overig: searchParams.get("overig") ?? defaultValues.overig,
    doel: searchParams.get("doel") ?? defaultValues.doel,
    spaargeld: searchParams.get("spaargeld") ?? defaultValues.spaargeld,
    maanden: searchParams.get("maanden") ?? defaultValues.maanden,
    doelNaam: searchParams.get("doelNaam") ?? defaultValues.doelNaam,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function set(field: keyof FormValues) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setError("");
    };
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!values.inkomen || parseFloat(values.inkomen) <= 0) {
      setError("Vul je maandelijks inkomen in om door te gaan.");
      return;
    }
    if (!values.doel || parseFloat(values.doel) <= 0) {
      setError("Vul een spaardoel in om door te gaan.");
      return;
    }
    const params = new URLSearchParams(values as unknown as Record<string, string>);
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    if (token) {
      router.push(`/plan?token=${token}&${params.toString()}`);
    } else {
      router.push(`/result?${params.toString()}`);
    }
  }

  // Live totals
  const totalFixed =
    (parseFloat(values.huur) || 0) +
    (parseFloat(values.abonnementen) || 0) +
    (parseFloat(values.verzekeringen) || 0);

  const totalVariable =
    (parseFloat(values.boodschappen) || 0) +
    (parseFloat(values.vervoer) || 0) +
    (parseFloat(values.horeca) || 0) +
    (parseFloat(values.overig) || 0);

  const totalExpenses = totalFixed + totalVariable;
  const inkomen = parseFloat(values.inkomen) || 0;
  const spaarruimte = inkomen - totalExpenses;

  const steps = [
    { label: "Inkomen", done: !!values.inkomen },
    { label: "Vaste lasten", done: !!(values.huur || values.abonnementen || values.verzekeringen) },
    { label: "Variabele kosten", done: !!(values.boodschappen || values.vervoer || values.horeca || values.overig) },
    { label: "Spaardoel", done: !!values.doel },
  ];
  const doneCount = steps.filter((s) => s.done).length;

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border px-6 py-4 flex items-center justify-between max-w-xl mx-auto w-full backdrop-blur-md bg-background/80">
        <Link href="/">
          <Image src="/logo.png" alt="Financios" width={120} height={30} priority />
        </Link>
        <Link href="/" className="text-sm text-muted hover:text-foreground transition-colors">
          ← Terug
        </Link>
      </nav>

      <div className="px-4 py-10 max-w-xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-foreground tracking-tight">Jouw financiële scan</h1>
        <p className="text-muted mt-2">
          Vul je cijfers in. Wij berekenen direct je spaarruimte en of je doel haalbaar is.
        </p>
      </div>

      {/* Progress indicator */}
      <div className="mb-8 bg-card border border-border rounded-2xl p-4 shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-medium text-muted uppercase tracking-wider">Voortgang</span>
          <span className="text-xs text-muted">{doneCount} van 4 stappen</span>
        </div>
        <div className="flex items-center gap-1.5">
          {steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-1.5 flex-1 min-w-0">
              <div className="flex flex-col items-center gap-1 flex-1 min-w-0">
                <div
                  className={`w-full h-1.5 rounded-full transition-all duration-300 ${
                    step.done ? "bg-accent" : "bg-border"
                  }`}
                />
                <span className={`text-[10px] font-medium truncate w-full text-center transition-colors ${
                  step.done ? "text-accent" : "text-muted/50"
                }`}>
                  {step.done ? "✓ " : ""}{step.label}
                </span>
              </div>
              {i < steps.length - 1 && <div className="w-1.5 shrink-0" />}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Inkomen */}
        <FormSection title="Inkomen" subtitle="Wat komt er maandelijks binnen?">
          <EuroInput
            label="Maandelijks netto inkomen"
            value={values.inkomen}
            onChange={set("inkomen")}
            placeholder="2000"
            required
          />
        </FormSection>

        {/* Vaste lasten */}
        <FormSection title="Vaste lasten" subtitle="Huur, abonnementen, verzekeringen — kosten die elke maand terugkomen.">
          <EuroInput label="Huur of hypotheek" value={values.huur} onChange={set("huur")} placeholder="900" />
          <EuroInput label="Abonnementen (telefoon, internet, Netflix, Spotify...)" value={values.abonnementen} onChange={set("abonnementen")} placeholder="50" />
          <EuroInput label="Verzekeringen (zorg, auto, inboedel...)" value={values.verzekeringen} onChange={set("verzekeringen")} placeholder="150" />
          <div className="flex justify-between text-sm border-t border-border mt-1 pt-3">
            <span className="text-muted">Totaal vaste lasten</span>
            <span className="text-foreground font-medium">€ {fmt(totalFixed)}</span>
          </div>
        </FormSection>

        {/* Variabele kosten */}
        <FormSection title="Variabele kosten" subtitle="Boodschappen, vervoer, uit eten — wat geef je gemiddeld per maand uit?">
          <EuroInput label="Boodschappen & huishouden" value={values.boodschappen} onChange={set("boodschappen")} placeholder="300" />
          <EuroInput label="Vervoer (benzine, OV, wegenbelasting...)" value={values.vervoer} onChange={set("vervoer")} placeholder="100" />
          <EuroInput label="Uit eten & entertainment" value={values.horeca} onChange={set("horeca")} placeholder="150" />
          <EuroInput label="Overig (kleding, cadeaus, beauty...)" value={values.overig} onChange={set("overig")} placeholder="100" />
          <div className="flex justify-between text-sm border-t border-border mt-1 pt-3">
            <span className="text-muted">Totaal variabel</span>
            <span className="text-foreground font-medium">€ {fmt(totalVariable)}</span>
          </div>
        </FormSection>

        {/* Live spaarruimte preview */}
        {inkomen > 0 && (
          <div
            className={`rounded-xl p-5 mb-6 border shadow-[var(--shadow-card)] ${
              spaarruimte >= 0
                ? "bg-success/10 border-success/20"
                : "bg-danger/10 border-danger/20"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium uppercase tracking-wider text-muted">
                Jouw spaarruimte per maand
              </span>
              <span
                className={`text-xl font-bold ${
                  spaarruimte >= 0 ? "text-success" : "text-danger"
                }`}
              >
                € {fmt(spaarruimte)}
              </span>
            </div>
            <p className="text-xs text-muted mt-1">
              {spaarruimte >= 0
                ? "Dit is wat je maximaal kunt sparen."
                : "Je geeft meer uit dan je verdient."}
            </p>
          </div>
        )}

        {/* Spaardoel */}
        <FormSection title="Jouw spaardoel" subtitle="Waar spaar je voor en wat is je deadline?">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-muted">
              Waarvoor spaar je? (optioneel)
            </label>
            <input
              type="text"
              value={values.doelNaam}
              onChange={set("doelNaam")}
              placeholder="bijv. Vakantie, auto, laptop..."
              className="bg-card border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
            />
          </div>
          <EuroInput label="Doelbedrag" value={values.doel} onChange={set("doel")} placeholder="5000" required />
          <EuroInput label="Huidig spaargeld" value={values.spaargeld} onChange={set("spaargeld")} placeholder="500" />
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium uppercase tracking-wider text-muted">
              Tijdsdoel
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                value={values.maanden}
                onChange={set("maanden")}
                min="1"
                max="120"
                className="bg-card border border-border rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all w-28"
              />
              <span className="text-muted">maanden</span>
            </div>
          </div>
        </FormSection>

        {error && (
          <p className="text-danger text-sm mb-4 bg-danger/10 border border-danger/20 rounded-xl px-4 py-3">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-accent hover:bg-accent-hover text-white font-semibold py-4 rounded-xl text-base transition-all mt-2 shadow-lg shadow-accent/20 active:scale-[0.98] tracking-wide disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {loading ? (token ? "Plan herberekenen…" : "Berekenen…") : (token ? "Herbereken mijn plan →" : "Bereken mijn spaarplan →")}
        </button>

        <p className="text-xs text-muted text-center mt-4">
          Je gegevens worden niet opgeslagen. Alles blijft op jouw apparaat.
        </p>
      </form>

      {/* Loading overlay */}
      {loading && (
        <div className="fixed inset-0 bg-background/90 backdrop-blur-md flex flex-col items-center justify-center z-50">
          <div className="w-16 h-16 rounded-full border-4 border-border border-t-accent animate-spin mb-6" />
          <p className="text-xl font-semibold text-foreground mb-2">Jouw situatie berekenen…</p>
          <p className="text-sm text-muted">Even geduld, dit duurt maar een seconde</p>
        </div>
      )}
      </div>
    </main>
  );
}

export default function ScanPage() {
  return (
    <Suspense fallback={<main className="min-h-screen" />}>
      <ScanForm />
    </Suspense>
  );
}

function FormSection({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mb-6 shadow-[var(--shadow-card)]">
      <h2 className="font-semibold text-foreground mb-2 tracking-tight">{title}</h2>
      <p className="text-xs font-medium uppercase tracking-wider text-muted mb-5">{subtitle}</p>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function EuroInput({
  label,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-medium uppercase tracking-wider text-muted">{label}</label>
      <div className="relative">
        <span className="absolute left-0 top-0 bottom-0 flex items-center px-3.5 text-muted font-medium pointer-events-none bg-white/[0.03] rounded-l-xl border-r border-border">
          €
        </span>
        <input
          type="number"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          min="0"
          step="any"
          className="w-full bg-card border border-border rounded-xl pl-12 pr-4 py-3.5 text-foreground placeholder:text-muted/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 transition-all"
        />
      </div>
    </div>
  );
}

function fmt(n: number): string {
  return Math.round(n).toLocaleString("nl-NL");
}
