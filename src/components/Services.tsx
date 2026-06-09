"use client";

import { motion } from "framer-motion";
import {
  Camera,
  Megaphone,
  CalendarDays,
  ArrowUpRight,
  Check,
} from "lucide-react";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  price: string;
  priceNote?: string;
  promise: string;
  includes: string[];
  forWhom: string;
  highlight?: boolean;
};

const services: Service[] = [
  {
    icon: Camera,
    name: "Studio Pack",
    price: "$450",
    priceNote: "pago único",
    promise: "4 piezas premium grabadas en estudio, listas para publicar.",
    includes: [
      "Guion e investigación por marca",
      "Grabación en estudio + dirección",
      "Edición y entrega lista para redes",
    ],
    forWhom: "Marcas personales y profesionales que necesitan piezas que vendan, no que solo decoren.",
  },
  {
    icon: Megaphone,
    name: "Campaña de Marketing",
    price: "Cotización",
    priceNote: "personalizada",
    promise: "Estrategia, producción y pauta integrada para tu próximo lanzamiento.",
    includes: [
      "Estrategia creativa con criterio de negocio",
      "Producción audiovisual end-to-end",
      "Pauta integrada y reporte de resultados",
    ],
    forWhom: "Marcas con lanzamiento o entrada a mercado que necesitan ejecución completa.",
    highlight: true,
  },
  {
    icon: CalendarDays,
    name: "Contenido Mensual",
    price: "$800",
    priceNote: "desde / mes",
    promise: "Producción recurrente que sostiene presencia mes a mes.",
    includes: [
      "Calendario editorial mensual",
      "Producción + edición consistente",
      "Tres niveles según necesidad",
    ],
    forWhom: "Negocios operando que necesitan consistencia visual y crecer con contenido.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="dark-section relative py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-muce text-xs uppercase tracking-[0.2em] md:tracking-[0.28em]">
            Servicios
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Tres formas de trabajar
            <span className="text-muce">.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted">
            Soluciones diseñadas para marcas que buscan contenido premium con
            intención. Elige por objetivo, no por catálogo.
          </p>
        </motion.div>

        <div
          className="
            mt-9 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch
          "
        >
          {services.map((s, i) => (
            <ServiceCard key={s.name} {...s} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 md:mt-8 text-center text-sm text-text-dim"
        >
          ¿No estás seguro cuál es el tuyo?{" "}
          <a href="#agenda" className="text-muce hover:text-muce-bright underline-offset-4 hover:underline">
            Lo resolvemos juntos en 30 minutos →
          </a>
        </motion.p>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  name,
  price,
  priceNote,
  promise,
  includes,
  forWhom,
  highlight,
  index,
}: Service & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl border-[1.5px] bg-[#F7F7F5] p-5 md:p-7 shadow-[0_18px_45px_rgba(0,0,0,0.06)] transition-colors
        w-full ${
        highlight
          ? "border-muce/35"
          : "border-black/15 hover:border-black/25"
      }`}
    >
      {/* Hover glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-muce/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(80%_60%_at_50%_0%,rgba(231,0,11,0.12),transparent_70%)]" />

      {/* Badge slot — always present so cards align */}
      <div className="relative h-5 md:h-6 mb-2 md:mb-3">
        {highlight && (
          <span className="inline-flex rounded-full bg-muce/15 text-muce text-[0.6rem] md:text-[0.65rem] uppercase tracking-[0.16em] md:tracking-[0.2em] px-2 py-1 border border-muce/30">
            Más solicitado
          </span>
        )}
      </div>

      {/* Icon + name */}
      <div className="relative flex items-start gap-3">
        <div className="size-10 md:size-11 rounded-xl bg-muce/15 border border-muce/30 flex items-center justify-center text-muce shrink-0">
          <Icon className="size-5" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-semibold text-lg md:text-xl tracking-tight">
            {name}
          </h3>
          <p className="text-sm">
            <span className="text-muce font-medium">{price}</span>
            {priceNote && (
              <span className="text-text-dim"> · {priceNote}</span>
            )}
          </p>
        </div>
      </div>

      {/* Promise */}
      <p className="relative mt-4 md:mt-5 text-sm md:text-[0.95rem] leading-relaxed text-text">
        {promise}
      </p>

      {/* Includes */}
      <ul className="relative mt-4 md:mt-5 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-text-muted">
            <Check className="size-4 text-muce shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* For whom — small footnote */}
      <p className="relative mt-4 md:mt-5 pt-4 md:pt-5 border-t border-line text-xs leading-relaxed text-text-dim flex-1">
        {forWhom}
      </p>

      {/* CTA */}
      <a
        href="#agenda"
        className="relative mt-4 md:mt-5 inline-flex min-h-12 items-center justify-between gap-2 rounded-lg border border-line hover:border-muce/50 hover:bg-muce/5 px-4 py-2.5 text-sm font-medium transition-all"
      >
        <span>Agendar reunión</span>
        <ArrowUpRight className="size-4 text-muce transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.div>
  );
}
