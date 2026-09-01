import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  Compass,
  PencilRuler,
  Layers,
  Building2,
  Sofa,
  Hammer,
  Ruler,
  Quote,
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Linkedin,
} from "lucide-react";
import { Reveal, useInView } from "./reveal";
import { SkylineLineArt, FloorPlanLineArt } from "./line-art";
import logo from "@/assets/urva-logo.png.asset.json";
import founder from "@/assets/founder.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const TAGLINE = "Architecture and interiors designed with clarity, warmth, and timeless intention.";

/* 2. Hero */
export function Hero() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-background pt-28 pb-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[62%] opacity-40"
        style={{ transform: `translateY(${offset * 0.12}px)` }}
      >
        <SkylineLineArt className="h-full w-full" />
      </div>
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #B08B3F 0%, transparent 70%)",
          transform: `translateY(${offset * -0.05}px)`,
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Bengaluru · Est. Boutique Studio</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="mt-8 max-w-4xl text-[clamp(2.6rem,7vw,5.6rem)] leading-[1.02] text-offwhite">
            Thoughtfully Designed Homes.
            <span className="block text-gold-gradient italic">Timeless Living.</span>
          </h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-8 max-w-xl text-base leading-relaxed font-light text-greige sm:text-lg">
            {TAGLINE}
          </p>
        </Reveal>
        <Reveal delay={360}>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <MagneticLink
              href="#projects"
              className="bg-gold-gradient px-9 py-4 text-center text-[0.72rem] tracking-[0.24em] text-ink uppercase"
            >
              View Our Projects
            </MagneticLink>
            <MagneticLink
              href="#contact"
              className="border border-gold px-9 py-4 text-center text-[0.72rem] tracking-[0.24em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-ink"
            >
              Book a Consultation
            </MagneticLink>
          </div>
        </Reveal>
      </div>

      <a
        href="#philosophy"
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold"
      >
        <ArrowDown className="scroll-cue" size={22} />
      </a>
    </section>
  );
}

function MagneticLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.12}px, ${
          (e.clientY - r.top - r.height / 2) * 0.18
        }px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
      }}
      className={`inline-block transition-transform duration-500 ease-out ${className}`}
    >
      {children}
    </a>
  );
}

/* 3. Philosophy */
export function Philosophy() {
  return (
    <section id="philosophy" className="relative border-t border-border py-28 sm:py-36">
      <FloorPlanLineArt className="pointer-events-none absolute -left-16 top-10 hidden h-64 w-64 opacity-15 lg:block" />
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="label-caps">Our Philosophy</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-8 font-serif text-[clamp(1.5rem,3.4vw,2.5rem)] leading-[1.35] font-light text-offwhite">
            Good design is not about trends — it is about clarity, warmth, and intention. Every home
            we shape is rooted in how our clients live, the light they wake to, and the details they
            return to for years.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 4. Core principles */
const principles = [
  {
    icon: Compass,
    title: "Purposeful Planning",
    copy: "Spaces planned around real life — movement, light, privacy and proportion considered before form.",
  },
  {
    icon: Layers,
    title: "Material Warmth",
    copy: "Honest, tactile materials chosen for how they age, feel underfoot and soften a home over time.",
  },
  {
    icon: PencilRuler,
    title: "Enduring Detail",
    copy: "Detailing resolved at drawing stage, so the finished home reads calm, precise and quietly considered.",
  },
];

export function Principles() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-px overflow-hidden border border-border bg-border md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 140}>
              <article className="group h-full bg-background p-9 transition-all duration-700 hover:-translate-y-1 hover:bg-card sm:p-12">
                <p.icon
                  size={30}
                  strokeWidth={1}
                  className="text-gold transition-all duration-700 group-hover:drop-shadow-[0_0_18px_rgba(201,162,75,0.55)]"
                />
                <h3 className="mt-8 text-2xl text-offwhite">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed font-light text-muted-foreground">
                  {p.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 5. About */
export function About() {
  return (
    <section id="about" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
        <div>
          <Reveal>
            <p className="label-caps">About URVA</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-7 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.1] text-offwhite">
              A boutique studio for luxury residential architecture and interiors.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 text-base leading-relaxed font-light text-greige">
              URVA Architects is a Bengaluru-based studio working across residential architecture
              and interior design. We keep our practice deliberately small so every project receives
              the attention of the principal architect — from the first conversation to the final
              handover.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p className="mt-5 text-base leading-relaxed font-light text-greige">
              Our work is quiet and considered: warm materials, generous daylight, and planning that
              respects how a family actually lives.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mt-9 text-[0.72rem] tracking-[0.28em] text-gold uppercase">
              Founded by Ar. Varshika Machve
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted-foreground">
              Founder &amp; Principal Architect
            </p>
          </Reveal>
        </div>

        <FramedImage />
      </div>
    </section>
  );
}

function FramedImage() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <div ref={ref} className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div
        className={`absolute -inset-4 border border-gold transition-all duration-[1400ms] ease-out sm:-inset-6 ${
          inView ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-6 translate-y-6 opacity-0"
        }`}
      />
      <img
        src={founder}
        alt="Ar. Varshika Machve, Founder and Principal Architect of URVA Architects"
        loading="lazy"
        width={912}
        height={1200}
        className="relative w-full object-cover"
      />
    </div>
  );
}

/* 6. Services */
const services = [
  {
    icon: Building2,
    title: "Residential Architecture",
    items: ["Independent homes & villas", "Site & massing studies", "Municipal drawing sets"],
  },
  {
    icon: Sofa,
    title: "Interior Design",
    items: ["Layouts & furniture planning", "Material & finish palettes", "Lighting and joinery detail"],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    items: ["Apartment transformations", "Space re-planning", "Phased upgrades"],
  },
  {
    icon: Ruler,
    title: "Design + Build",
    items: ["Single point of contact", "Execution drawings", "On-site coordination"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Services</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.1] text-offwhite">
            What we do, end to end.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <article className="group relative h-full overflow-hidden bg-background p-9 transition-colors duration-700 hover:bg-card sm:p-12">
                <div className="pointer-events-none absolute -right-6 -bottom-6 opacity-0 transition-all duration-700 group-hover:opacity-100">
                  <s.icon size={150} strokeWidth={0.4} className="text-gold/25" />
                </div>
                <div className="relative">
                  <span className="text-[0.7rem] tracking-[0.3em] text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="mt-5 text-2xl text-offwhite sm:text-3xl">{s.title}</h3>
                  <ul className="mt-5 max-h-0 space-y-2 overflow-hidden opacity-0 transition-all duration-700 group-hover:max-h-48 group-hover:opacity-100 max-md:max-h-48 max-md:opacity-100">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="text-sm font-light text-muted-foreground before:mr-3 before:text-gold before:content-['—']"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href="#contact"
            className="link-underline mt-12 inline-block text-[0.74rem] tracking-[0.26em] text-gold uppercase"
          >
            Explore All Services
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* 7. Materials marquee */
const materials = [
  "Natural Stone",
  "Wood Veneers",
  "Textured Plaster",
  "Fluted Glass",
  "Warm Palettes",
  "Sustainable Materials",
];

export function Materials() {
  return (
    <section className="marquee overflow-hidden border-y border-border bg-card py-8">
      <div className="marquee-track flex w-max gap-14 whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex gap-14">
            {materials.map((m) => (
              <span
                key={m + dup}
                className="flex items-center gap-4 text-[0.78rem] tracking-[0.3em] text-greige uppercase"
              >
                <Layers size={16} strokeWidth={1} className="text-gold" />
                {m}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

/* 8. Process */
const steps = [
  { n: "01", t: "Discover", d: "Understanding your site, brief, and the way you live." },
  { n: "02", t: "Define", d: "Framing the scope, budget and design intent together." },
  { n: "03", t: "Design", d: "Plans, volumes and material direction take shape." },
  { n: "04", t: "Detail", d: "Drawings resolved down to joinery and lighting." },
  { n: "05", t: "Realise", d: "On-site coordination through to a finished home." },
];

export function Process() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <section id="process" className="border-t border-border py-24 sm:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Our Process</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] text-offwhite">Five deliberate steps.</h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-6 left-6 h-[calc(100%-3rem)] w-px bg-border md:top-6 md:left-0 md:h-px md:w-full">
            <div
              className="bg-gold-gradient h-full w-full origin-top transition-transform duration-[2600ms] ease-out md:origin-left"
              style={{
                transform: inView
                  ? "scale(1)"
                  : "scaleY(0)",
                transformOrigin: "top left",
              }}
            />
          </div>

          <ol className="relative grid gap-12 md:grid-cols-5 md:gap-6">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 160} className="flex gap-6 md:block">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold bg-background text-[0.72rem] tracking-widest text-gold">
                  {s.n}
                </span>
                <div className="md:mt-7">
                  <h3 className="text-xl text-offwhite">{s.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* 9. Projects */
const projects = [
  { img: project1, name: "Hillside Villa", cat: "Residential Architecture" },
  { img: project2, name: "Fluted Light Residence", cat: "Interior Design" },
  { img: project3, name: "Stone & Linen Retreat", cat: "Interior Design" },
  { img: project4, name: "Oak Stair House", cat: "Renovation & Remodeling" },
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Featured Projects</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] text-offwhite">Selected work.</h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <figure className="group relative overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.cat} by URVA Architects`}
                  loading="lazy"
                  width={1200}
                  height={912}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
<figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-espresso via-espresso/85 to-transparent px-7 py-6 transition-transform duration-700 ease-out group-hover:translate-y-0 max-sm:translate-y-0">
                  <h3 className="text-2xl text-gold-gradient">{p.name}</h3>
                  <p className="mt-1 text-[0.68rem] tracking-[0.28em] text-primary-foreground/75 uppercase">
                    {p.cat}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <a
            href="#contact"
            className="mt-14 inline-block border border-gold px-9 py-4 text-[0.72rem] tracking-[0.24em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-ink"
          >
            View Full Portfolio
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* 10. Why choose */
const reasons = [
  ["Personalized Design", "Every home begins from your brief, not a template."],
  ["Thoughtful Planning", "Layouts resolved for light, flow and privacy."],
  ["Timeless Aesthetics", "Restrained palettes designed to age gracefully."],
  ["End-to-End Guidance", "From first sketch to final site walkthrough."],
  ["Detail-Oriented Approach", "Precision in drawings, finishes and execution."],
];

export function WhyUrva() {
  return (
    <section className="relative border-t border-border py-24 sm:py-32">
      <FloorPlanLineArt className="pointer-events-none absolute -right-20 bottom-6 hidden h-72 w-72 opacity-10 lg:block" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <p className="label-caps">Why Choose URVA</p>
        </Reveal>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([t, d], i) => (
            <Reveal key={t} delay={i * 120}>
              <div className="border-l border-gold/40 pl-6">
                <h3 className="text-xl text-offwhite">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed font-light text-muted-foreground">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 11. Testimonials */
const quotes = [
  {
    q: "They listened before they drew. Our home feels like it was planned around the way we actually live.",
    a: "Homeowner, Whitefield",
  },
  {
    q: "Calm, warm and beautifully detailed — the material choices still look considered years later.",
    a: "Homeowner, Sarjapur",
  },
  {
    q: "Clear communication through every stage, and the site work matched the drawings exactly.",
    a: "Homeowner, KR Puram",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % quotes.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="border-t border-border bg-card py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Quote size={28} strokeWidth={1} className="mx-auto text-gold" />
        <div className="relative mt-10 min-h-[220px] sm:min-h-[190px]">
          {quotes.map((t, idx) => (
            <blockquote
              key={t.a}
              className={`absolute inset-0 transition-all duration-1000 ease-out ${
                idx === i ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
              }`}
            >
              <p className="font-serif text-[clamp(1.35rem,3vw,2.1rem)] leading-[1.4] font-light text-offwhite italic">
                “{t.q}”
              </p>
              <footer className="mt-7 text-[0.7rem] tracking-[0.28em] text-gold uppercase">
                {t.a}
              </footer>
            </blockquote>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-3">
          {quotes.map((t, idx) => (
            <button
              key={t.a}
              aria-label={`Show testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-2 w-2 rounded-full transition-colors duration-500 ${
                idx === i ? "bg-gold" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 12. Areas */
const areas = [
  "Bangalore",
  "Whitefield",
  "Kadugodi",
  "Channasandra",
  "KR Puram",
  "Brookefield",
  "Varthur",
  "Sarjapur",
  "Electronic City",
  "North & South Bangalore",
];

export function Areas() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="label-caps">Areas We Served</p>
        </Reveal>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((a, i) => (
            <Reveal as="li" key={a} delay={i * 60}>
              <span className="inline-block border border-border px-5 py-3 text-[0.72rem] tracking-[0.2em] text-greige uppercase transition-colors duration-500 hover:border-gold hover:text-gold-light">
                {a}
              </span>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <p className="mt-9 text-sm font-light text-muted-foreground">
            We also undertake select projects across India.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* 13. CTA band */
export function CtaBand() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{ background: "radial-gradient(60% 120% at 50% 100%, #B08B3F1f, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="text-[clamp(2rem,5vw,3.8rem)] leading-[1.1] text-offwhite">
            Let&apos;s Create Something{" "}
            <span className="text-gold-gradient italic">Meaningful Together</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+917869981146"
              className="bg-gold-gradient px-9 py-4 text-[0.72rem] tracking-[0.24em] text-ink uppercase"
            >
              Book a Consultation
            </a>
            <div className="flex flex-col gap-3 text-sm font-light text-greige sm:flex-row sm:gap-7">
              <a href="tel:+917869981146" className="link-underline inline-flex items-center gap-2">
                <Phone size={15} className="text-gold" /> +91 78699 81146
              </a>
              <a
                href="mailto:urvaarchitects@gmail.com"
                className="link-underline inline-flex items-center gap-2"
              >
                <Mail size={15} className="text-gold" /> urvaarchitects@gmail.com
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* 14. Footer */
export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <img
            src={logo.url}
            alt="URVA Architects"
            loading="lazy"
            width={96}
            height={96}
            className="h-20 w-20 rounded-sm object-cover"
          />
          <p className="mt-6 max-w-sm text-sm leading-relaxed font-light text-muted-foreground">
            {TAGLINE}
          </p>
          <div className="mt-6 flex gap-4">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#home"
                aria-label="URVA Architects social profile"
                className="grid h-10 w-10 place-items-center border border-border text-gold transition-colors duration-500 hover:border-gold"
              >
                <Icon size={16} strokeWidth={1.2} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="label-caps">Studio</p>
          <ul className="mt-6 space-y-4 text-sm font-light text-greige">
            <li className="flex gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold" /> Bengaluru, Karnataka, India
            </li>
            <li className="flex gap-3">
              <Phone size={15} className="mt-0.5 shrink-0 text-gold" />
              <a href="tel:+917869981146" className="link-underline">
                +91 7869981146
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={15} className="mt-0.5 shrink-0 text-gold" />
              <a href="mailto:urvaarchitects@gmail.com" className="link-underline break-all">
                urvaarchitects@gmail.com
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={15} className="mt-0.5 shrink-0 text-gold" /> Mon–Sat, 10 AM–7 PM, by
              appointment
            </li>
          </ul>
        </div>

        <div>
          <p className="label-caps">Navigate</p>
          <ul className="mt-6 space-y-3 text-sm font-light text-greige">
            {["Home", "About", "Services", "Projects", "Process", "Contact"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="link-underline">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-border px-5 pt-7 sm:px-8">
        <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} URVA Architects. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
