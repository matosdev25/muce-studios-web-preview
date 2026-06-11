"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, ArrowRight, Check } from "lucide-react";
import { type ReactNode, useState } from "react";
import { CalInlineEmbed } from "@/components/CalInlineEmbed";

const CAL_EMBED_ID = "my-cal-inline-campanas-de-marketing";

const initialFormData = {
  name: "",
  brand: "",
  service: "",
  budget: "",
  context: "",
};

const serviceOptions = [
  { value: "studio", label: "Studio Pack" },
  { value: "campaign", label: "Campaña de Marketing" },
  { value: "monthly", label: "Contenido Mensual" },
  { value: "other", label: "No estoy seguro" },
];

const budgetOptions = [
  { value: "<500", label: "Menos de $500" },
  { value: "500-1500", label: "$500 – $1,500" },
  { value: "1500-5000", label: "$1,500 – $5,000" },
  { value: ">5000", label: "Más de $5,000" },
];

const meetingSteps = [
  "Entender tu marca, objetivo y contexto.",
  "Identificar cuál de nuestros servicios encaja con tu necesidad.",
  "Proponerte el siguiente paso concreto, sin compromisos",
];

export function Schedule() {
  const [formData, setFormData] = useState(initialFormData);
  const [calendarUnlocked, setCalendarUnlocked] = useState(false);

  // Validacion simple: el calendario solo se habilita cuando todos los campos tienen valor.
  const isFormComplete = Boolean(
    formData.name.trim() &&
      formData.brand.trim() &&
      formData.service &&
      formData.budget &&
      formData.context.trim(),
  );

  const updateField = (field: keyof typeof initialFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const unlockCalendar = () => {
    if (!isFormComplete) return;

    setCalendarUnlocked(true);
    document.getElementById(CAL_EMBED_ID)?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section id="agenda" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 md:opacity-30" aria-hidden />
      <div className="absolute -left-40 top-1/3 size-80 bg-muce/10 md:bg-muce/20 blur-2xl md:blur-3xl rounded-full" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-muce text-xs uppercase tracking-[0.2em] md:tracking-[0.28em]">
            Agenda
          </span>
          <h2 className="mt-3 font-display font-bold text-3xl md:text-5xl tracking-tight">
            Conversemos<span className="text-muce">.</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base text-text-muted">
            30 minutos para entender tu marca y proponerte el siguiente paso.
            Sin compromiso, con criterio.
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-muce" />
              <span>30 minutos · Sin compromiso</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarCheck className="size-4 text-muce" />
              <span>Confirmación inmediata</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="schedule-layout mt-9 md:mt-12"
        >
          <div className="schedule-form-card">
            <StepHeader number={1} title="Cuéntanos sobre tu marca" active done={isFormComplete} />

            {/* Formulario de pre-calificacion: no envia datos, solo protege la agenda antes de Calendly/Cal. */}
            <form className="mt-5 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <Field label="Nombre completo">
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={formData.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-black/50 focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                />
              </Field>

              <Field label="Marca o empresa">
                <input
                  type="text"
                  placeholder="Ej. Muce Studios"
                  value={formData.brand}
                  onChange={(e) => updateField("brand", e.target.value)}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-black/50 focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                />
              </Field>

              <Field label="Servicio de interés">
                <select
                  value={formData.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                >
                  <option value="">Selecciona una opción</option>
                  {serviceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Presupuesto aproximado">
                <select
                  value={formData.budget}
                  onChange={(e) => updateField("budget", e.target.value)}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                >
                  <option value="">Selecciona una opción</option>
                  {budgetOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Objetivo / contexto">
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente qué buscas lograr con este proyecto."
                  value={formData.context}
                  onChange={(e) => updateField("context", e.target.value)}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-black/50 focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition resize-none"
                />
              </Field>

              <div className="form-submit-wrapper">
                <button
                  type="button"
                  disabled={!isFormComplete}
                  onClick={unlockCalendar}
                  className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-muce hover:bg-muce-bright disabled:bg-surface-2 disabled:text-text-dim disabled:cursor-not-allowed text-white font-medium py-3 transition-colors shadow-glow disabled:shadow-none"
                >
                  Continuar
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </form>
          </div>

          <div
            className={`schedule-calendar-card ${!calendarUnlocked ? "is-locked" : ""}`}
          >
            <div className="schedule-card-header">
              <StepHeader number={2} title="Elige fecha y horario" active done={false} />
            </div>

            {/* El embed se monta siempre para precargar Cal; el overlay bloquea interaccion hasta validar. */}
            <div className="calendar-shell">
              <div className={`calendar-wrapper ${!calendarUnlocked ? "is-locked" : ""}`}>
                <div className="calendar-embed-layer">
                  <CalInlineEmbed />
                </div>

                {!calendarUnlocked && (
                  <div className="calendar-lock-overlay">
                    <p>Completa el formulario y presiona Continuar para habilitar la agenda.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="schedule-meeting-card mt-6 md:mt-8"
        >
          <div>
            <h3 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
              ¿Qué pasa en la reunión<span className="text-muce">?</span>
            </h3>
            <p className="mt-3 text-sm text-text-muted">
              Una conversación clara, enfocada y 100% personalizada donde en 30 minutos vamos a:
            </p>
          </div>

          <div className="schedule-meeting-steps">
            {meetingSteps.map((step, index) => (
              <div key={step} className="schedule-meeting-step">
                <span>{index + 1}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StepHeader({
  number,
  title,
  active,
  done,
}: {
  number: number;
  title: string;
  active: boolean;
  done: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={`size-7 rounded-full flex items-center justify-center text-xs font-medium border transition-colors ${
          done
            ? "bg-muce border-muce text-white"
            : active
              ? "bg-muce/15 border-muce text-muce"
              : "bg-surface border-line text-text-dim"
        }`}
      >
        {done ? <Check className="size-3.5" /> : number}
      </span>
      <h3 className="font-display font-semibold tracking-tight">{title}</h3>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-text-muted mb-1.5">{label}</span>
      {children}
    </label>
  );
}
