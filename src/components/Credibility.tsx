"use client";

import { motion } from "framer-motion";
import { Compass, Clapperboard, Sparkles, Target } from "lucide-react";

// Pilares de confianza que explican el criterio de Muce antes de mostrar servicios.
const items = [
  {
    icon: Compass,
    title: "Estrategia primero",
    desc: "Cada pieza nace de un objetivo claro de marca y negocio.",
  },
  {
    icon: Clapperboard,
    title: "Producción end-to-end",
    desc: "Dirección, grabación, edición y entrega en un mismo equipo.",
  },
  {
    icon: Sparkles,
    title: "Estándar premium",
    desc: "Calidad como método: lectura de marca, criterio y consistencia.",
  },
  {
    icon: Target,
    title: "Listo para usar",
    desc: "Te entregamos contenido alineado al canal y al consumidor.",
  },
];

export function Credibility() {
  return (
    <section className="dark-section relative py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative rounded-xl border border-line hover:border-line-strong bg-surface/30 backdrop-blur-sm md:backdrop-blur p-4 md:p-5 transition-colors"
            >
              <it.icon className="size-5 text-muce" />
              <h3 className="mt-3 font-display font-semibold text-sm md:text-base tracking-tight">
                {it.title}
              </h3>
              <p className="mt-1.5 text-xs text-text-muted leading-relaxed">
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
