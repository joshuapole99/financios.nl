"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setState("loading");
    try {
      const res = await fetch("/api/capture-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setState(res.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="bg-success/10 border border-success/20 rounded-2xl p-5 mb-6 text-center">
        <p className="text-sm font-medium text-success">We houden je op de hoogte!</p>
        <p className="text-xs text-muted mt-1">Je ontvangt tips zodra we iets nieuws hebben.</p>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-5 mb-6 shadow-[var(--shadow-card)]">
      <p className="text-sm font-medium text-foreground mb-1">Wil je gratis spaartips ontvangen?</p>
      <p className="text-xs text-muted mb-4">Geen spam. Alleen nuttige tips voor jouw situatie.</p>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          required
          className="flex-1 bg-background border border-border rounded-xl px-4 py-2.5 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-accent/60 transition-colors"
        />
        <button
          type="submit"
          disabled={state === "loading"}
          className="bg-accent hover:bg-accent-hover text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-all disabled:opacity-60 shrink-0"
        >
          {state === "loading" ? "…" : "Aanmelden"}
        </button>
      </form>
      {state === "error" && (
        <p className="text-xs text-danger mt-2">Er ging iets mis. Probeer het opnieuw.</p>
      )}
    </div>
  );
}
