"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Runs when /plan is reached without URL params (e.g. via LemonSqueezy modal button).
// Reads scan params saved to localStorage before checkout redirect and navigates to /plan?{params}.
export default function PlanParamsLoader() {
  const router = useRouter();
  useEffect(() => {
    const stored = localStorage.getItem("financios_scan_params");
    if (stored) {
      localStorage.removeItem("financios_scan_params");
      router.replace(`/plan?${stored}`);
    }
  }, [router]);
  return null;
}
