import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cielo Largo | Cocina asiática",
  description: "Descubre Cielo Largo: cocina asiática, un ambiente acogedor y una experiencia para compartir.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  openGraph: { title: "Cielo Largo | Cocina asiática", description: "Un viaje de sabores. Un lugar para sentirse en casa.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}