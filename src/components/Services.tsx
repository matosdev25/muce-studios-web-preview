"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  Camera,
  Megaphone,
  CalendarDays,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useEffect, useState } from "react";

type Service = {
  icon: LucideIcon;
  name: string;
  price: string;
  priceNote?: string;
  promise: string;
  includes: string[];
  forWhom: string;
  highlight?: boolean;
};

// Oferta comercial aprobada: cambiar nombres, precios o inclusiones afecta copy y posicionamiento.
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
  const [isDesktop, setIsDesktop] = useState(false);
  const raised = Boolean(highlight && isDesktop);

  useEffect(() => {
    // La tarjeta destacada solo se eleva en desktop para no romper el flujo vertical en mobile.
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: raised ? 22 : 30 }}
      whileInView={{ opacity: 1, y: raised ? -8 : 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-xl md:rounded-2xl border-[1.5px] p-5 md:p-7 transition-colors
        w-full ${
        highlight
          ? "border-muce/45 bg-[#FFF8F7] shadow-[0_24px_62px_rgba(0,0,0,0.11),0_0_0_1px_rgba(219,25,25,0.12),0_0_42px_rgba(219,25,25,0.12)]"
          : "border-black/15 bg-[#F7F7F5] shadow-[0_18px_45px_rgba(0,0,0,0.06)] hover:border-black/25"
      }`}
    >
      {/* Brillos de hover y destacado: parte del sistema premium de Muce. */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-muce/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(80%_60%_at_50%_0%,rgba(231,0,11,0.12),transparent_70%)]" />
      {highlight && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_44%_at_50%_0%,rgba(219,25,25,0.12),transparent_72%)]"
        />
      )}

      {/* Espacio reservado para que las tres tarjetas conserven la misma alineacion. */}
      <div className="relative flex h-6 justify-end mb-2 md:mb-3">
        {highlight && (
          <span className="inline-flex items-center rounded-full bg-muce px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-[0_10px_24px_rgba(219,25,25,0.22)]">
            Más recomendado
          </span>
        )}
      </div>

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

      <p className="relative mt-4 md:mt-5 text-sm md:text-[0.95rem] leading-relaxed text-text">
        {promise}
      </p>

      {/* Lista de entregables visibles para comparar servicios sin abrir otra ruta. */}
      <ul className="relative mt-4 md:mt-5 space-y-2">
        {includes.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-text-muted">
            <Check className="size-4 text-muce shrink-0 mt-0.5" strokeWidth={2.5} />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Nota de fit: orienta al usuario sin cambiar la promesa comercial. */}
      <p className="relative mt-4 md:mt-5 pt-4 md:pt-5 border-t border-line text-xs leading-relaxed text-text-dim flex-1">
        {forWhom}
      </p>

      {/* CTA compartido con agenda; mantener el hash para no romper el flujo de conversion. */}
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
