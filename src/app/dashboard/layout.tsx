import Link from "next/link";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession();
  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dashboard nav */}
      <nav className="sticky top-0 z-50 border-b border-border backdrop-blur-md bg-background/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-2">
          <Link href="/" className="text-base font-bold text-foreground tracking-tight shrink-0">
            Financios
          </Link>
          <div className="flex items-center gap-0.5 sm:gap-1 overflow-x-auto">
            <Link
              href="/dashboard"
              className="text-sm text-muted hover:text-foreground transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-card whitespace-nowrap"
            >
              Overzicht
            </Link>
            <Link
              href="/dashboard/spaardoelen"
              className="text-sm text-muted hover:text-foreground transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-card whitespace-nowrap"
            >
              Doelen
            </Link>
            <Link
              href="/dashboard/assets"
              className="text-sm text-muted hover:text-foreground transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-card whitespace-nowrap"
            >
              Vermogen
            </Link>
            <Link
              href="/dashboard/account"
              className="text-sm text-muted hover:text-foreground transition-colors px-2 sm:px-3 py-1.5 rounded-lg hover:bg-card whitespace-nowrap"
            >
              Account
            </Link>
            <Link
              href="/scan"
              className="text-sm font-semibold bg-accent hover:bg-accent-hover text-white px-3 sm:px-4 py-2 rounded-xl transition-all shadow-lg shadow-accent/20 ml-1 whitespace-nowrap shrink-0"
            >
              Scan
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
        {children}
      </main>
    </div>
  );
}
