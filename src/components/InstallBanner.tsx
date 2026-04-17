"use client";

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export default function InstallBanner() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (localStorage.getItem("pwa-banner-dismissed")) return;

    const handler = (e: Event) => {
      e.preventDefault();
      setPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  async function handleInstall() {
    if (!prompt) return;
    await prompt.prompt();
    const { outcome } = await prompt.userChoice;
    if (outcome === "accepted") setPrompt(null);
  }

  function handleDismiss() {
    localStorage.setItem("pwa-banner-dismissed", "1");
    setDismissed(true);
  }

  if (!prompt || dismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 sm:left-auto sm:right-4 sm:max-w-sm">
      <div className="bg-card border border-border rounded-2xl p-4 shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0 text-xl">
          📱
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Installeer als app</p>
          <p className="text-xs text-muted">Voeg Financios toe aan je beginscherm</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={handleInstall}
            className="text-xs font-semibold bg-accent hover:bg-accent-hover text-white px-3 py-1.5 rounded-lg transition-all"
          >
            Installeer
          </button>
          <button
            onClick={handleDismiss}
            className="text-xs text-muted hover:text-foreground transition-colors px-1"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
