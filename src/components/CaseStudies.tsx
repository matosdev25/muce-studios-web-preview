"use client";

import { motion } from "framer-motion";
import { Wine, Film, Mic, ArrowUpRight } from "lucide-react";

type Case = {
  id: string;
  title: string;
  category: string;
  outcome: string;
  icon: React.ComponentType<{ className?: string }>;
};

const cases: Case[] = [
  {
    id: "01",
    title: "Lanzamiento de producto",
    category: "Studio Pack",
    outcome: "Piezas con dirección que sostuvieron el go-to-market.",
    icon: Wine,
  },
  {
    id: "02",
    title: "Campaña integral",
    category: "Marketing 360°",
    outcome: "Producción + pauta dirigida que generó tracción medible.",
    icon: Film,
  },
  {
    id: "03",
    title: "Contenido mensual",
    category: "Suscripción",
    outcome: "Presencia consistente que construyó confianza con la audiencia.",
    icon: Mic,
  },
];

export function CaseStudies() {
  return (
    <section id="casos" className="relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between gap-4 md:gap-6 flex-wrap"
        >
          <div>
            <span className="text-muce text-xs uppercase tracking-[0.2em] md:tracking-[0.28em]">
              Casos
            </span>
            <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
              Trabajo que sostiene marca
              <span className="text-muce">.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-text-muted max-w-sm">
            Cada proyecto se construye con dirección y objetivo — no para
            llenar feed.
          </p>
        </motion.div>

        <div
          className="
            mt-9 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5
          "
        >
          {cases.map((c, i) => (
            <CaseCard key={c.id} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({
  id,
  title,
  category,
  outcome,
  icon: Icon,
  index,
}: Case & { index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative aspect-[4/5] rounded-xl md:rounded-2xl overflow-hidden border border-line bg-surface
        w-full"
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-muce-deep/40 via-bg to-bg" />
      <div className="absolute inset-0 bg-grid opacity-20 md:opacity-30" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(231,0,11,0.28),transparent_70%)]" />

      {/* Icon as visual */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: -3 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muce/40 group-hover:text-muce/70 transition-colors"
      >
        <Icon className="size-28 md:size-40" />
      </motion.div>

      {/* Top meta */}
      <div className="absolute top-4 md:top-5 inset-x-4 md:inset-x-5 flex items-center justify-between text-xs">
        <span className="text-text-dim font-mono">Caso · {id}</span>
        <span className="rounded-full border border-line bg-bg/60 backdrop-blur px-2 py-0.5 text-text-muted">
          {category}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight">
          {title}
        </h3>
        <p className="mt-2 text-sm text-text-muted leading-relaxed">
          {outcome}
        </p>

        <div className="mt-4 pt-4 border-t border-line flex items-center justify-between">
          <span className="text-xs text-text-dim uppercase tracking-wider">
            Ver detalle
          </span>
          <ArrowUpRight className="size-4 text-muce transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}
