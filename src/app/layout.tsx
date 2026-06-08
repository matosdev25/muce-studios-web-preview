import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muce Studios | Estudio de Creación de Contenido",
  description: "Estrategia, producción y ejecución audiovisual con criterio.",
  icons: {
    icon: "/assets/favicon-muce.png",
    shortcut: "/assets/favicon-muce.png",
    apple: "/assets/favicon-muce.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full min-w-0 flex flex-col bg-white text-text">
        {children}
      </body>
    </html>
  );
}
