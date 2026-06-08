import { MuceLogo } from "./MuceLogo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-10 text-white md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <MuceLogo className="[&_.text-text-muted]:text-white/65" />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Contenido audiovisual con intención, criterio y ejecución profesional.
            Panamá → Región.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#servicios" className="text-white/70 hover:text-white">Servicios</a></li>
            <li><a href="#casos" className="text-white/70 hover:text-white">Casos</a></li>
            <li><a href="#agenda" className="text-white/70 hover:text-white">Agenda</a></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <p className="text-xs uppercase tracking-[0.2em] text-white/55">
            Contacto
          </p>
          <a
            href="#agenda"
            className="mt-3 inline-block text-sm text-white hover:text-muce transition-colors"
          >
            hola@mucestudios.com
          </a>
          <p className="mt-2 text-xs text-white/55">
            © {new Date().getFullYear()} Muce Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
