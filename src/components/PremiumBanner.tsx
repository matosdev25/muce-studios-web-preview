"use client";

import { motion } from "framer-motion";
import { MuceMark } from "./MuceLogo";

type Props = {
  primary: string;
  secondary?: string;
  accent?: string;
};

export function PremiumBanner({ primary, secondary, accent }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-xl md:rounded-2xl border border-muce/40"
      >
        {/* Banda roja de marca: conservar gradiente, shimmer y mark como firma visual. */}
        <div className="absolute inset-0 bg-gradient-to-r from-muce-deep via-muce to-muce-deep" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_100%_50%,rgba(255,255,255,0.25),transparent_60%)]" />
        <div className="absolute inset-0 shimmer-sweep" />

        <div className="relative px-5 md:px-10 py-6 md:py-10 flex items-start md:items-center gap-4 md:gap-6">
          <div className="text-white">
            <MuceMark className="size-10 md:size-14" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="max-w-full break-words font-display font-bold text-white text-xl md:text-3xl lg:text-4xl leading-tight">
              {primary}{" "}
              {accent && <span className="text-black/80">{accent}</span>}
            </p>
            {secondary && (
              <p className="mt-2 text-white/80 text-sm md:text-base">
                {secondary}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
