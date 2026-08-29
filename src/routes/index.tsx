import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/urva/navbar";
import {
  Hero,
  Philosophy,
  Principles,
  About,
  Services,
  Materials,
  Process,
  Projects,
  WhyUrva,
  Testimonials,
  Areas,
  CtaBand,
  Footer,
} from "@/components/urva/sections";

const title = "URVA Architects | Luxury Residential Architecture, Bengaluru";
const description =
  "Boutique Bengaluru studio for luxury residential architecture and interior design — clarity, warmth, and timeless intention. Founded by Ar. Varshika Machve.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Principles />
        <About />
        <Services />
        <Materials />
        <Process />
        <Projects />
        <WhyUrva />
        <Testimonials />
        <Areas />
        <CtaBand />
      </main>
      <Footer />
    </div>
  );
}
