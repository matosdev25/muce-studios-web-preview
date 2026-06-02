"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Clock, CalendarCheck } from "lucide-react";
import { useRef } from "react";

// Titular Muce. Saca la tesis del ecosistema ("convertir visión en algo tangible")
// y la condensa en una promesa corta. La palabra final va en rojo.
//
// Alternativas listas si quieres probar otra dirección — sustituye headline por la que prefieras:
//
//   const headline = [
//     { text: "Contenido", accent: false },
//     { text: "con", accent: false },
//     { text: "criterio", accent: true },
//     { text: ".", accent: true },
//   ];
//
//   const headline = [
//     { text: "Contenido", accent: false },
//     { text: "que", accent: false },
//     { text: "mueve", accent: true },
//     { text: "marcas.", accent: false },
//   ];
const headline = [
  { text: "Convertimos", accent: false },
  { text: "visión", accent: false },
  { text: "en", accent: false },
  { text: "contenido.", accent: true },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative pt-32 md:pt-40 pb-24 overflow-hidden bg-spot"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-noise opacity-50" aria-hidden />

      <motion.div
        style={{ y, opacity }}
        className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Text column */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 backdrop-blur px-3 py-1 text-xs uppercase tracking-[0.2em] text-text-muted"
          >
            <span className="size-1.5 rounded-full bg-muce rec-dot" />
            Estudio de contenido audiovisual
          </motion.span>

          <h1 className="mt-6 font-display font-bold leading-[1.02] tracking-tight text-5xl md:text-6xl lg:text-[4.2rem]">
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
                className={`inline-block mr-[0.22em] ${w.accent ? "text-muce" : ""}`}
              >
                {w.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 max-w-md text-text-muted text-lg leading-relaxed"
          >
            Producción con dirección, estrategia con criterio. Cada pieza
            pensada para mover tu marca, no solo para llenar feed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#agenda"
              className="group relative inline-flex items-center gap-2 rounded-full bg-muce px-6 py-3.5 font-medium text-white shadow-glow hover:bg-muce-bright transition-colors"
            >
              Agenda tu reunión
              <CalendarCheck className="size-4" />
              <span className="absolute inset-0 rounded-full ring-1 ring-white/10 group-hover:ring-white/30 transition" />
            </a>
            <a
              href="#servicios"
              className="text-sm text-text-muted hover:text-text transition-colors underline-offset-4 hover:underline"
            >
              Ver los tres servicios →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.25 }}
            className="mt-6 flex items-center gap-2 text-xs text-text-dim"
          >
            <Clock className="size-3.5" />
            30 minutos · Sin compromiso
          </motion.div>
        </div>

        {/* Video card column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative aspect-[4/3] md:aspect-[5/4]"
        >
          {/* Drifting red glow behind card */}
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-muce/40 via-muce-deep/20 to-transparent blur-3xl glow-drift"
          />

          <div className="relative h-full rounded-2xl overflow-hidden border border-line-strong bg-surface float-soft">
            {/* "Recording" surface */}
            <div className="absolute inset-0 bg-gradient-to-br from-muce-deep/30 via-bg-soft to-black" />
            <div className="absolute inset-0 bg-grid opacity-20" />

            {/* Camera lens illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="size-44 md:size-56 rounded-full border border-line-strong bg-gradient-to-br from-black to-bg-soft shadow-card" />
                <div className="absolute inset-4 rounded-full border border-line-strong bg-gradient-to-br from-bg-soft to-black" />
                <div className="absolute inset-10 rounded-full bg-black" />
                <div className="absolute top-6 left-10 size-3 rounded-full bg-white/40 blur-[2px]" />
                {/* Second lens */}
                <div className="absolute -bottom-4 -right-4 size-24 rounded-full border border-line bg-gradient-to-br from-bg-soft to-black/70" />
              </div>
            </div>

            {/* REC badge */}
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[0.65rem] tracking-[0.2em] font-medium">
              <span className="size-1.5 rounded-full bg-muce rec-dot" />
              REC
            </div>

            {/* Timecode */}
            <div className="absolute top-4 right-4 rounded-md bg-black/60 backdrop-blur px-2 py-1 text-[0.65rem] font-mono text-text-muted">
              00:00:30:00
            </div>

            {/* Play button overlay */}
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

            {/* Bottom meta strip */}
            <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
              <span className="text-xs text-text-muted">Reel · 2026</span>
              <span className="text-xs text-text-dim font-mono">
                4K · 24fps
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
