"use client";

import { motion } from "framer-motion";
import { type LucideIcon, Wine, Film, Mic, ArrowUpRight } from "lucide-react";

type Case = {
  id: string;
  title: string;
  category: string;
  outcome: string;
  icon: LucideIcon;
};

// Casos conceptuales aprobados para mostrar rango de servicios sin revelar clientes.
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
    <section id="casos" className="dark-section relative py-16 md:py-32">
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
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-xl border border-line-strong bg-[#111114] shadow-card md:rounded-2xl"
    >
      {/* Fondo oscuro y brillo rojo mantienen continuidad con la identidad audiovisual. */}
      <div className="absolute inset-0 bg-gradient-to-br from-muce-deep/40 via-[#050507] to-[#050507]" />
      <div className="absolute inset-0 bg-grid opacity-20 md:opacity-30" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(70%_50%_at_50%_50%,rgba(219,25,25,0.28),transparent_70%)]" />

      {/* Icono central usado como visual principal; sustituir por imagen real requiere revisar arte. */}
      <motion.div
        whileHover={{ scale: 1.05, rotate: -3 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-muce/40 group-hover:text-muce/70 transition-colors"
      >
        <Icon className="size-28 md:size-40" />
      </motion.div>

      <div className="absolute top-4 md:top-5 inset-x-4 md:inset-x-5 flex items-center justify-between text-xs">
        <span className="text-white/45 font-mono">Caso · {id}</span>
        <span className="rounded-full border border-white/15 bg-black/40 backdrop-blur px-2 py-0.5 text-white/70">
          {category}
        </span>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-4 md:p-5 bg-gradient-to-t from-black via-black/70 to-transparent">
        <h3 className="font-display font-semibold text-xl md:text-2xl tracking-tight text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-white/68 leading-relaxed">
          {outcome}
        </p>

        <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
          <span className="text-xs text-white/45 uppercase tracking-wider">
            Ver detalle
          </span>
          <ArrowUpRight className="size-4 text-muce transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </motion.article>
  );
}
