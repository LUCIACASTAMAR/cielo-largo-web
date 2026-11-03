import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cielo Largo | Cocina asiática",
  description: "Descubre Cielo Largo: cocina asiática, un ambiente acogedor y una experiencia para compartir.",
  openGraph: { title: "Cielo Largo | Cocina asiática", description: "Un viaje de sabores. Un lugar para sentirse en casa.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}