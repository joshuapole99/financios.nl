import type { Metadata } from "next";
import { Inter } from "next/font/google";
import PostHogProvider from "./PostHogProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://financios.nl"),
  title: {
    default: "Financios – Waarom ben jij altijd blut?",
    template: "%s – Financios",
  },
  description:
    "Ontdek in 60 seconden waar jouw geld naartoe gaat en fix je spaardoel met een persoonlijk plan.",
  openGraph: {
    siteName: "Financios",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  verification: {
    google: "szoX8xp7lF1liB9uBRq4spT-Du1A3vaOzBgkDWnPNKA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
