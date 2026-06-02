"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "1",
    title: "Entender",
    desc: "Tu marca, tu objetivo y el contexto en el que se mueve.",
  },
  {
    n: "2",
    title: "Identificar",
    desc: "Cuál de nuestros servicios encaja con lo que necesitas.",
  },
  {
    n: "3",
    title: "Proponer",
    desc: "Un siguiente paso concreto, sin compromiso y con criterio.",
  },
];

export function MeetingSteps() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative py-20 md:py-24">
      <div ref={ref} className="mx-auto max-w-6xl px-6">
        <div className="rounded-2xl border border-line bg-surface/60 backdrop-blur p-8 md:p-10">
          <div className="grid lg:grid-cols-4 gap-8 items-start">
            <div>
              <h3 className="font-display font-bold text-3xl tracking-tight">
                ¿Qué pasa<br />en la reunión<span className="text-muce">?</span>
              </h3>
              <p className="mt-3 text-sm text-text-muted">
                Una conversación clara y enfocada. En 30 minutos vamos a:
              </p>
            </div>

            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  delay: 0.15 + i * 0.15,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span className="font-display font-bold text-5xl text-muce leading-none">
                  {s.n}
                </span>
                <h4 className="mt-3 font-display font-semibold text-lg">
                  {s.title}
                </h4>
                <p className="mt-1 text-sm text-text-muted">{s.desc}</p>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden lg:block absolute top-6 -right-4 w-8 border-t border-dashed border-line"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
