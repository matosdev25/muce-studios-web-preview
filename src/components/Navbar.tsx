"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { MuceLogo } from "./MuceLogo";

export function Navbar() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(5, 5, 7, 0)", "rgba(5, 5, 7, 0.85)"]
  );
  const blur = useTransform(scrollY, [0, 80], ["blur(0px)", "blur(14px)"]);
  const border = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "rgba(255,255,255,0.08)"]
  );

  return (
    <motion.header
      style={{ background: bg, backdropFilter: blur, borderColor: border }}
      className="fixed top-0 inset-x-0 z-50 border-b transition-colors"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <MuceLogo />
        </a>

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
          className="group relative inline-flex items-center gap-2 rounded-full bg-muce px-4 py-2 text-sm font-medium text-white shadow-glow hover:bg-muce-bright transition-colors"
        >
          <span>Agenda tu reunión</span>
          <CalendarCheck className="size-4" />
          <span className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/30 transition" />
        </a>
      </div>
    </motion.header>
  );
}
