"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Play, Clock, CalendarCheck } from "lucide-react";
import { useRef } from "react";

// Titular aprobado de marca: mantener palabras, saltos y acento rojo alineados con diseño.
const headline = [
  { text: "Convertimos", accent: false },
  { text: "visión", accent: false },
  { text: "en", accent: false },
  { text: "contenido.", accent: true },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Parallax suave del hero; se desactiva visualmente para usuarios con reduced motion.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, shouldReduceMotion ? 0 : 40]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, shouldReduceMotion ? 1 : 0.85]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-24 md:pt-40 pb-14 md:pb-24 overflow-hidden bg-spot"
    >
      <div className="absolute inset-0 bg-grid opacity-35 md:opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-noise opacity-25 md:opacity-50" aria-hidden />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto w-full max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center"
      >
        {/* Columna editorial: copy, CTA principal y prueba de baja friccion. */}
        <div className="min-w-0">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 text-[0.68rem] uppercase tracking-[0.14em] text-text-muted backdrop-blur-sm md:text-xs md:tracking-[0.2em]"
          >
            <span className="size-1.5 rounded-full bg-muce rec-dot" />
            Estudio de contenido audiovisual
          </motion.span>

          <h1 className="mt-5 md:mt-6 max-w-full font-display font-bold leading-[1.03] tracking-tight text-[2.1rem] min-[390px]:text-[2.4rem] sm:text-5xl md:text-6xl lg:text-[4.2rem]">
            {headline.map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.15 + i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                  duration: 0.7,
                }}
                className={`block sm:inline-block sm:mr-[0.22em] ${w.accent ? "text-muce" : ""}`}
              >
                {w.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-5 md:mt-6 max-w-md text-text-muted text-base md:text-lg leading-relaxed"
          >
            Producción con dirección, estrategia con criterio. Cada pieza
            pensada para mover tu marca, no solo para llenar feed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 md:gap-4"
          >
            <a
              href="#agenda"
              className="group relative inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-muce px-6 py-3 font-medium text-white shadow-glow hover:bg-muce-bright transition-colors sm:w-auto"
            >
              Agenda tu reunión
              <CalendarCheck className="size-4" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/30 transition" />
            </a>
            <a
              href="#servicios"
              className="text-center sm:text-left text-sm text-text-muted hover:text-text transition-colors underline-offset-4 hover:underline"
            >
              Ver los tres servicios →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mt-5 md:mt-6 flex items-center gap-2 text-xs text-text-dim"
          >
            <Clock className="size-3.5" />
            30 minutos · Sin compromiso
          </motion.div>
        </div>

        {/* Tarjeta visual de reel: actua como pieza de identidad aunque no reproduzca video real. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[16/10] md:aspect-[5/4]"
        >
          {/* Halo rojo de marca; no cambiar sin validar identidad visual. */}
          <div
            aria-hidden
            className="absolute -inset-3 md:-inset-6 rounded-[2rem] bg-gradient-to-br from-muce/25 md:from-muce/40 via-muce-deep/15 md:via-muce-deep/20 to-transparent blur-2xl md:blur-3xl glow-drift"
          />

          <div className="relative h-full rounded-xl md:rounded-2xl overflow-hidden border border-white/15 bg-[#111114] float-soft">
            {/* Superficie de grabacion simulada para sostener el lenguaje audiovisual. */}
            <div className="absolute inset-0 bg-gradient-to-br from-muce-deep/30 via-[#0a0a0d] to-black" />
            <div className="absolute inset-0 bg-grid opacity-10" />

            {/* Ilustracion CSS del lente: evita depender de assets externos en el primer viewport. */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="size-32 sm:size-40 md:size-56 rounded-full border border-white/15 bg-gradient-to-br from-black to-[#0a0a0d] shadow-card" />
                <div className="absolute inset-4 rounded-full border border-white/15 bg-gradient-to-br from-[#0a0a0d] to-black" />
                <div className="absolute inset-10 rounded-full bg-black" />
                <div className="absolute top-6 left-10 size-3 rounded-full bg-white/40 blur-[2px]" />
                {/* Second lens */}
                <div className="absolute -bottom-3 -right-3 size-16 sm:size-20 md:-bottom-4 md:-right-4 md:size-24 rounded-full border border-white/10 bg-gradient-to-br from-[#0a0a0d] to-black/70" />
              </div>
            </div>

            {/* Detalles REC/timecode refuerzan la categoria audiovisual de Muce. */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[0.65rem] tracking-[0.2em] font-medium text-white">
              <span className="size-1.5 rounded-full bg-muce rec-dot" />
              REC
            </div>

            <div className="absolute top-4 right-4 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[0.65rem] font-mono text-white/60">
              00:00:30:00
            </div>

            {/* Overlay de play reservado para el reel aprobado; no enlaza nada por ahora. */}
            <button
              aria-label="Reproducir reel"
              className="group absolute inset-0 flex items-center justify-center"
            >
              <span className="relative flex items-center justify-center">
                <span className="absolute size-20 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors" />
                <span className="absolute size-20 rounded-full ring-1 ring-white/30 group-hover:ring-white/60 group-hover:scale-110 transition-all" />
                <span className="relative flex items-center justify-center size-14 rounded-full bg-white text-black shadow-glow">
                  <Play className="size-5 fill-current ml-1" />
                </span>
              </span>
            </button>

            {/* Franja tecnica decorativa: mantener tono premium sin prometer un archivo descargable. */}
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-xs text-white/60">Reel · 2026</span>
              <span className="text-xs text-white/45 font-mono">
                4K · 24fps
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
