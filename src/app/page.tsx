import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PremiumBanner } from "@/components/PremiumBanner";
import { Credibility } from "@/components/Credibility";
import { Services } from "@/components/Services";
import { CaseStudies } from "@/components/CaseStudies";
import { Schedule } from "@/components/Schedule";
import { MeetingSteps } from "@/components/MeetingSteps";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full min-w-0 overflow-x-clip bg-white">
        <Hero />

        <PremiumBanner
          primary="Contenido que se ve premium y se ejecuta con propósito."
          secondary="Estrategia, ejecución y criterio en cada pieza."
        />

        <Credibility />

        <Services />

        <CaseStudies />

        <Schedule />

        <MeetingSteps />
      </main>
      <Footer />
    </>
  );
}
