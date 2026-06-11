"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { MuceLogo } from "./MuceLogo";

export function Navbar() {
  const { scrollY } = useScroll();

  // La barra se vuelve mas solida al hacer scroll para conservar legibilidad sobre fondos claros.
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255, 255, 255, 0.72)", "rgba(255, 255, 255, 0.9)"]
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(8px)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(20,20,20,0.08)", "rgba(20,20,20,0.12)"]
  );

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur, borderColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b transition-colors"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-3 md:px-6 md:py-4 flex items-center justify-between gap-3">
        <a href="#top" className="flex shrink-0 items-center">
          <MuceLogo />
        </a>

        {/* Anclas aprobadas de la landing; mantener sincronizadas con los ids de seccion. */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          <a href="#servicios" className="hover:text-text transition-colors">
            Servicios
          </a>
          <a href="#casos" className="hover:text-text transition-colors">
            Casos
          </a>
          <a href="#agenda" className="hover:text-text transition-colors">
            Agenda
          </a>
        </nav>

        <a
          href="#agenda"
          className="group relative inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-muce px-4 text-sm font-medium text-white shadow-glow hover:bg-muce-bright transition-colors md:gap-2 md:rounded-full"
        >
          <span className="md:hidden">Agendar</span>
          <span className="hidden md:inline">Agenda tu reunión</span>
          <CalendarCheck className="size-4" />
          <span className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/30 transition" />
        </a>
      </div>
    </motion.header>
  );
}
