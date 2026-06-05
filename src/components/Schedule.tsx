"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Clock, ArrowRight, Check } from "lucide-react";
import { useMemo, useState } from "react";

const months = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];
const weekDays = ["lun", "mar", "mié", "jue", "vie", "sáb", "dom"];
const slots = ["9:00 a.m.", "10:00 a.m.", "11:00 a.m.", "3:00 p.m.", "5:00 p.m.", "6:00 p.m."];

export function Schedule() {
  const [step, setStep] = useState<1 | 2>(1);
  const [form, setForm] = useState({
    name: "",
    brand: "",
    service: "",
    budget: "",
    context: "",
  });
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

  const calendar = useMemo(() => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const first = new Date(year, month, 1);
    const startWeekday = (first.getDay() + 6) % 7; // make Monday = 0
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < startWeekday; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    while (cells.length % 7 !== 0) cells.push(null);
    return { cells, label: `${months[month]} ${year}`, today: now.getDate() };
  }, []);

  const formComplete = Boolean(
    form.name && form.brand && form.service && form.budget && form.context,
  );

  return (
    <section id="agenda" className="relative py-16 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20 md:opacity-30" aria-hidden />
      <div className="absolute -left-40 top-1/3 size-80 bg-muce/10 md:bg-muce/20 blur-2xl md:blur-3xl rounded-full" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6 grid lg:grid-cols-[1fr_2fr] gap-8 md:gap-12">
        {/* Left intro */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

          <div className="mt-6 md:mt-8 rounded-xl border border-line bg-surface/60 backdrop-blur-sm md:backdrop-blur p-4 md:p-5">
            <div className="flex items-center gap-2 text-sm">
              <Clock className="size-4 text-muce" />
              <span>30 minutos · Sin compromiso</span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm">
              <CalendarCheck className="size-4 text-muce" />
              <span>Confirmación inmediata</span>
            </div>
          </div>

          {/* Decorative camera card */}
          <div className="relative mt-8 hidden lg:block aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-surface">
            <div className="absolute inset-0 bg-gradient-to-br from-muce-deep/40 via-bg to-bg" />
            <div className="absolute inset-0 bg-noise opacity-60" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-24 rounded-full border border-line-strong bg-black/70 shadow-card relative">
                <div className="absolute inset-4 rounded-full border border-line bg-black" />
                <div className="absolute top-3 left-5 size-2 rounded-full bg-white/30 blur-sm" />
              </div>
            </div>
            <div className="absolute top-3 left-3 flex items-center gap-1.5 rounded bg-black/60 px-2 py-0.5 text-[0.6rem] tracking-[0.2em]">
              <span className="size-1.5 rounded-full bg-muce rec-dot" />
              REC
            </div>
          </div>
        </motion.div>

        {/* Right scheduler */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-4 md:gap-5"
        >
          {/* Step 1 — Brand */}
          <div
            className={`rounded-xl md:rounded-2xl border bg-surface/60 backdrop-blur-sm md:backdrop-blur p-5 md:p-6 transition-colors ${
              step === 1 ? "border-muce/40" : "border-line"
            }`}
          >
            <StepHeader number={1} title="Cuéntanos sobre tu marca" active={step === 1} done={formComplete && step === 2} />

            <div className="mt-5 space-y-4">
              <Field label="Nombre completo">
                <input
                  type="text"
                  placeholder="Ej. Juan Pérez"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-text-dim focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                />
              </Field>

              <Field label="Marca o empresa">
                <input
                  type="text"
                  placeholder="Ej. Muce Studios"
                  value={form.brand}
                  onChange={(e) => setForm({ ...form, brand: e.target.value })}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-text-dim focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                />
              </Field>

              <Field label="Servicio de interés">
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="studio">Studio Pack</option>
                  <option value="campaign">Campaña de Marketing</option>
                  <option value="monthly">Contenido Mensual</option>
                  <option value="other">No estoy seguro</option>
                </select>
              </Field>

              <Field label="Presupuesto aproximado">
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="<500">Menos de $500</option>
                  <option value="500-1500">$500 – $1,500</option>
                  <option value="1500-5000">$1,500 – $5,000</option>
                  <option value=">5000">Más de $5,000</option>
                </select>
              </Field>

              <Field label="Objetivo / contexto">
                <textarea
                  rows={3}
                  placeholder="Cuéntanos brevemente qué buscas lograr con este proyecto."
                  value={form.context}
                  onChange={(e) => setForm({ ...form, context: e.target.value })}
                  className="w-full rounded-lg bg-bg/80 border border-line px-3 py-2.5 text-base md:text-sm placeholder:text-text-dim focus:border-muce focus:outline-none focus:ring-2 focus:ring-muce/30 transition resize-none"
                />
              </Field>

              <button
                disabled={!formComplete}
                onClick={() => setStep(2)}
                className="w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-muce hover:bg-muce-bright disabled:bg-surface-2 disabled:text-text-dim disabled:cursor-not-allowed text-white font-medium py-3 transition-colors shadow-glow disabled:shadow-none"
              >
                Continuar
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Step 2 — Date */}
          <div
            className={`rounded-xl md:rounded-2xl border bg-surface/60 backdrop-blur-sm md:backdrop-blur p-5 md:p-6 transition-colors ${
              step === 2 ? "border-muce/40" : "border-line opacity-70"
            } ${step === 1 ? "hidden md:block" : ""}`}
          >
            <StepHeader number={2} title="Elige fecha y horario" active={step === 2} done={!!selectedSlot} />

            <div className="mt-5">
              <p className="text-xs uppercase tracking-widest text-text-dim mb-3">
                {calendar.label}
              </p>
              <div className="grid grid-cols-7 gap-1 text-center text-[0.7rem] text-text-dim mb-2">
                {weekDays.map((d) => (
                  <span key={d} className="uppercase tracking-wider">
                    {d}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {calendar.cells.map((d, i) => {
                  const isPast = d !== null && d < calendar.today;
                  const isSelected = d === selectedDay;
                  return (
                    <button
                      key={i}
                      disabled={d === null || step === 1 || isPast}
                      onClick={() => d && setSelectedDay(d)}
                      className={`aspect-square rounded-md text-sm transition-all ${
                        d === null
                          ? "opacity-0"
                          : isPast || step === 1
                            ? "text-text-dim/50 cursor-not-allowed"
                            : isSelected
                              ? "bg-muce text-white shadow-glow"
                              : "hover:bg-surface-2 text-text-muted"
                      }`}
                    >
                      {d ?? ""}
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 text-xs uppercase tracking-widest text-text-dim mb-3">
                Horarios disponibles
              </p>
              <div className="grid grid-cols-2 gap-2">
                {slots.map((s) => {
                  const disabled = step === 1 || selectedDay === null;
                  const isSelected = selectedSlot === s;
                  return (
                    <button
                      key={s}
                      disabled={disabled}
                      onClick={() => setSelectedSlot(s)}
                      className={`min-h-12 rounded-lg border py-2.5 text-sm transition-all ${
                        disabled
                          ? "border-line text-text-dim/50 cursor-not-allowed"
                          : isSelected
                            ? "border-muce bg-muce/10 text-white"
                            : "border-line hover:border-line-strong text-text-muted hover:text-text"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>

              {step === 1 ? (
                <p className="mt-5 text-xs text-text-dim text-center">
                  Completa el paso 1 para habilitar la selección.
                </p>
              ) : selectedSlot ? (
                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-5 w-full inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-muce hover:bg-muce-bright text-white font-medium py-3 transition-colors shadow-glow"
                >
                  Confirmar reunión
                  <Check className="size-4" />
                </motion.button>
              ) : (
                <p className="mt-5 text-xs text-text-dim text-center">
                  Elige un día y horario disponible.
                </p>
              )}
            </div>
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
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-xs text-text-muted mb-1.5">{label}</span>
      {children}
    </label>
  );
}
