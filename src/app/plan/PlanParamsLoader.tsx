"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Rendered when /plan receives no URL params (e.g. LemonSqueezy modal button goes to /plan without query string).
// Shows a spinner while checking localStorage for params saved before checkout redirect.
// Redirects silently if found; shows error only if localStorage is also empty.
export default function PlanParamsLoader() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("financios_scan_params");
    if (stored) {
      localStorage.removeItem("financios_scan_params");
      router.replace(`/plan?${stored}`);
    } else {
      setChecked(true);
    }
  }, [router]);

  if (!checked) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center px-4">
        <div className="w-8 h-8 rounded-full border-2 border-border border-t-accent animate-spin mb-4" />
        <p className="text-sm text-muted">Plan laden…</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center max-w-sm mx-auto">
      <div className="w-12 h-12 rounded-full bg-warning/20 flex items-center justify-center mb-5">
        <span className="text-warning text-xl">⚠</span>
      </div>
      <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-3">
        Je plan is niet meer beschikbaar
      </h1>
      <p className="text-muted leading-relaxed mb-2">
        Je spaarplan is opgeslagen in de browser waarmee je hebt betaald.
        Open financios.nl in die browser om je plan te bekijken.
      </p>
      <p className="text-sm text-muted mb-8">
        Op een ander apparaat of nieuwe browser? Doe een nieuwe scan — het duurt 60 seconden.
      </p>
      <Link
        href="/scan"
        className="bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-accent/20 tracking-wide"
      >
        Nieuwe scan starten
      </Link>
    </main>
  );
}
