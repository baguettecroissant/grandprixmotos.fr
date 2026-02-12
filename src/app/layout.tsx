import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrandPrixMotos.fr - L'expertise Moto & Équipement",
  description: "Le guide de référence pour le motard exigeant. Essais BMW, Comparatifs équipements, et Conseils Assurance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${rajdhani.variable} ${inter.variable}`}>
      <body className="antialiased bg-background text-foreground font-sans selection:bg-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}
