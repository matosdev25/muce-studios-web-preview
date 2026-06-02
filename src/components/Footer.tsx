import { MuceLogo } from "./MuceLogo";

export function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <MuceLogo />
          <p className="mt-4 text-sm text-text-muted max-w-xs">
            Contenido audiovisual con intención, criterio y ejecución profesional.
            Panamá → Región.
          </p>
        </div>

        <div className="md:justify-self-center">
          <p className="text-xs uppercase tracking-[0.2em] text-text-dim">
            Navegación
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#servicios" className="text-text-muted hover:text-text">Servicios</a></li>
            <li><a href="#casos" className="text-text-muted hover:text-text">Casos</a></li>
            <li><a href="#agenda" className="text-text-muted hover:text-text">Agenda</a></li>
          </ul>
        </div>

        <div className="md:justify-self-end">
          <p className="text-xs uppercase tracking-[0.2em] text-text-dim">
            Contacto
          </p>
          <a
            href="#agenda"
            className="mt-3 inline-block text-sm text-text hover:text-muce transition-colors"
          >
            hola@mucestudios.com
          </a>
          <p className="mt-2 text-xs text-text-dim">
            © {new Date().getFullYear()} Muce Studios
          </p>
        </div>
      </div>
    </footer>
  );
}
