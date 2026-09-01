import { Reveal } from "./reveal";
import founder from "@/assets/founder.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

/* ---------- shared primitives ---------- */

function SectionHead({
  index,
  label,
  title,
  intro,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-16 grid grid-cols-1 gap-8 border-b border-border pb-8 md:grid-cols-12 md:items-end">
      <div className="md:col-span-1">
        <span className="font-mono text-2xl font-extrabold text-clay">{index}</span>
      </div>
      <div className="md:col-span-6">
        <span className="tech-label">{label}</span>
        <h2 className="mt-4 text-[clamp(1.9rem,4vw,3.2rem)] leading-[0.9]">{title}</h2>
      </div>
      {intro ? (
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-5">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function Shell({
  id,
  children,
  tone = "ivory",
}: {
  id?: string;
  children: React.ReactNode;
  tone?: "ivory" | "sand";
}) {
  return (
    <section
      id={id}
      className={`px-6 py-24 md:px-10 md:py-32 ${tone === "sand" ? "bg-sand" : "bg-background"}`}
    >
      <div className="mx-auto max-w-[1400px]">{children}</div>
    </section>
  );
}

/* ---------- 01 hero ---------- */

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-10 lg:grid-cols-12">
        {/* technical sidebar */}
        <div className="hidden h-full flex-col justify-between border-r border-border pr-6 lg:col-span-1 lg:flex">
          <div className="vertical-rl rotate-180 font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            Urva Architects / Studio Practice
          </div>
          <div className="flex flex-col gap-2 font-mono text-[9px] uppercase tracking-tight text-foreground/40">
            <span>12.9716 N</span>
            <span>77.5946 E</span>
          </div>
        </div>

        {/* headline block */}
        <div className="relative z-10 lg:col-span-6 lg:pt-16">
          <Reveal>
            <div className="mb-8 flex items-center gap-3">
              <span className="rule-line w-10" />
              <span className="tech-label">Volume III / Bengaluru</span>
            </div>
            <h1 className="mb-10 text-[clamp(3rem,9vw,7rem)] font-extrabold leading-[0.85]">
              Urva
              <br />
              <span className="text-clay">Archi</span>
              <br />
              tects
            </h1>
          </Reveal>

          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-2">
            <Reveal delay={120} className="space-y-6">
              <p className="max-w-xs text-lg font-light leading-snug">
                Luxury residential architecture and interiors — raw materiality met with precise
                contemporary geometry.
              </p>
              <a
                href="#works"
                className="inline-flex items-center bg-espresso px-6 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-clay"
              >
                Explore Portfolio
              </a>
            </Reveal>
            <Reveal delay={220} className="border-t border-clay pt-4">
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Current Feature
              </span>
              <span className="text-sm font-medium leading-tight">
                Courtyard House, Sadashivanagar — a study in monolithic stone and filtered light.
              </span>
            </Reveal>
          </div>
        </div>

        {/* visual spread */}
        <Reveal delay={160} className="relative mt-10 lg:col-span-5 lg:mt-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand shadow-[var(--shadow-spread)]">
            <img
              src={project1}
              alt="Minimal luxury residence facade with deep shadow lines"
              className="absolute inset-0 h-full w-full object-cover grayscale brightness-110 contrast-95 transition-all duration-[1200ms] hover:grayscale-0"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/25 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -right-4 w-48 border border-border bg-background p-6 shadow-xl md:w-64 lg:-right-10">
            <div className="mb-4 flex items-start justify-between">
              <span className="font-mono text-2xl font-extrabold text-clay">03</span>
              <div className="flex gap-[2px]">
                <div className="h-4 w-1 bg-clay" />
                <div className="h-4 w-1 bg-clay/30" />
                <div className="h-4 w-1 bg-clay/30" />
              </div>
            </div>
            <p className="text-[10px] uppercase leading-relaxed tracking-[0.15em] text-muted-foreground">
              Material study: hand-poured concrete, kota stone, oxidised bronze fittings.
            </p>
          </div>

          <div className="absolute -left-12 top-1/4 hidden h-48 w-32 overflow-hidden border-4 border-background bg-sand shadow-lg xl:block">
            <img
              src={project2}
              alt="Macro detail of stone and bronze joinery"
              className="h-full w-full object-cover grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-24 flex max-w-[1400px] items-center justify-between border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="scroll-cue">Scroll ↓</span>
        <span>Est. 2018 — Residential / Interior</span>
      </div>
    </section>
  );
}

/* ---------- 02 philosophy ---------- */

export function Philosophy() {
  return (
    <Shell tone="sand">
      <Reveal className="mx-auto max-w-4xl text-center">
        <span className="tech-label">Philosophy</span>
        <p className="mt-8 text-[clamp(1.4rem,3.2vw,2.4rem)] font-light leading-tight">
          “A home should be quiet enough to hear the light move through it — precise in structure,
          generous in feeling.”
        </p>
        <span className="mt-8 block font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Ar. Varshika Machve / Principal Architect
        </span>
      </Reveal>
    </Shell>
  );
}

/* ---------- 03 principles ---------- */

const principles = [
  { n: "01", t: "Proportion", d: "Every volume set to the human body, not the floor plate." },
  { n: "02", t: "Materiality", d: "Stone, lime, teak and bronze left honest and unpainted." },
  { n: "03", t: "Light", d: "Openings drafted against the Bengaluru sun path, hour by hour." },
  { n: "04", t: "Longevity", d: "Detailing that ages into character rather than out of fashion." },
];

export function Principles() {
  return (
    <Shell>
      <SectionHead
        index="01"
        label="Core Principles"
        title="Four rules we never draft without."
        intro="A compact charter that governs every plan, section and joinery drawing that leaves the studio."
      />
      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 90} className="group bg-background p-8">
            <span className="font-mono text-xs font-extrabold tracking-[0.2em] text-clay">
              {p.n}
            </span>
            <h3 className="mt-6 text-xl">{p.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
            <span className="mt-8 block h-px w-8 bg-clay transition-all duration-500 group-hover:w-full" />
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 04 about / studio ---------- */

export function About() {
  return (
    <Shell id="studio" tone="sand">
      <SectionHead
        index="02"
        label="The Studio"
        title="A boutique practice, deliberately small."
        intro="Founded in Bengaluru, URVA takes on a limited number of residences each year so that every drawing carries the principal's hand."
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden bg-background">
            <img
              src={founder}
              alt="Ar. Varshika Machve, founder of URVA Architects"
              className="h-full w-full object-cover grayscale transition-all duration-[1200ms] hover:grayscale-0"
              loading="lazy"
            />
          </div>
          <div className="mt-4 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
            <span>Ar. Varshika Machve</span>
            <span className="text-clay">Founder</span>
          </div>
        </Reveal>
        <Reveal delay={140} className="space-y-8 lg:col-span-6 lg:col-start-7">
          <p className="text-lg font-light leading-relaxed">
            URVA was founded on the belief that a residence is a slow document — written in
            proportion, refined in material, and finished only when the family moves through it.
          </p>
          <p className="text-sm leading-relaxed text-muted-foreground">
            We work end to end: site study, concept, architectural drawings, interiors, bespoke
            furniture and execution supervision. The studio remains intentionally boutique, which
            keeps decisions fast, detailing obsessive and communication direct.
          </p>
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              { k: "45+", v: "Residences" },
              { k: "8", v: "Years of practice" },
              { k: "100%", v: "In-house detailing" },
            ].map((s) => (
              <div key={s.v} className="bg-sand py-6">
                <div className="font-mono text-2xl font-extrabold text-clay">{s.k}</div>
                <div className="mt-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

/* ---------- 05 services ---------- */

const services = [
  { n: "01", t: "Architectural Design", d: "Concept through construction drawings for private residences and villas." },
  { n: "02", t: "Interior Design", d: "Spatial planning, material palettes, lighting and bespoke joinery." },
  { n: "03", t: "Turnkey Execution", d: "Vendor curation, site supervision and handover of a finished home." },
  { n: "04", t: "Renovation & Retrofit", d: "Reworking existing homes for light, flow and contemporary use." },
  { n: "05", t: "Furniture & Detailing", d: "Custom pieces drawn to the room and fabricated with local craftspeople." },
  { n: "06", t: "Landscape & Courtyards", d: "Green edges, courtyards and terraces integrated from day one." },
];

export function Services() {
  return (
    <Shell id="services">
      <SectionHead
        index="03"
        label="Services"
        title="What the studio delivers."
        intro="Engage a single discipline or the full arc from first sketch to the day the door opens."
      />
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal
            key={s.n}
            delay={i * 70}
            className="group bg-background p-10 transition-colors duration-500 hover:bg-sand"
          >
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs font-extrabold tracking-[0.2em] text-clay">
                {s.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                →
              </span>
            </div>
            <h3 className="mt-8 text-lg leading-tight">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 06 materials marquee ---------- */

const materials = [
  "Kota Stone",
  "Lime Plaster",
  "Burnished Concrete",
  "Teak",
  "Oxidised Bronze",
  "Terrazzo",
  "Rattan",
  "Raw Linen",
  "Jaisalmer Marble",
];

export function Materials() {
  return (
    <section className="marquee overflow-hidden border-y border-border bg-sand py-10">
      <div className="marquee-track flex w-max gap-16 pr-16">
        {[...materials, ...materials].map((m, i) => (
          <span
            key={`${m}-${i}`}
            className="flex items-center gap-16 whitespace-nowrap font-mono text-sm uppercase tracking-[0.3em]"
          >
            {m}
            <span className="h-1 w-1 bg-clay" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- 07 process ---------- */

const steps = [
  { n: "01", t: "Enquiry & Site Read", d: "We walk the plot, study orientation, wind and neighbours." },
  { n: "02", t: "Concept Volume", d: "Massing, plans and a material direction presented as one story." },
  { n: "03", t: "Design Development", d: "Drawings, 3D studies and interior detailing resolved together." },
  { n: "04", t: "Documentation", d: "Working drawings, BOQ and vendor packages issued." },
  { n: "05", t: "Execution", d: "Site visits, quality checks and mock-ups until handover." },
];

export function Process() {
  return (
    <Shell id="process" tone="sand">
      <SectionHead
        index="04"
        label="Process"
        title="Five stages, one continuous drawing."
        intro="A transparent sequence with defined deliverables, so you always know which sheet is on the table."
      />
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-5">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 80} className="bg-sand p-8 md:p-6">
            <span className="font-mono text-3xl font-extrabold text-clay/40">{s.n}</span>
            <h3 className="mt-6 text-sm leading-tight">{s.t}</h3>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{s.d}</p>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 08 projects ---------- */

const works = [
  { img: project1, ref: "Ref. 102", t: "Courtyard House", loc: "Sadashivanagar, Bengaluru", span: "lg:col-span-7", ratio: "aspect-[4/3]" },
  { img: project2, ref: "Ref. 108", t: "The Stone Villa", loc: "Devanahalli", span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { img: project3, ref: "Ref. 114", t: "Terrace Apartment", loc: "Indiranagar", span: "lg:col-span-5", ratio: "aspect-[4/5]" },
  { img: project4, ref: "Ref. 121", t: "Lime & Teak Home", loc: "Whitefield", span: "lg:col-span-7", ratio: "aspect-[4/3]" },
];

export function Projects() {
  return (
    <Shell id="works">
      <SectionHead
        index="05"
        label="Selected Works"
        title="An index of recent residences."
        intro="Each project is documented as a spread — plan, material board and the rooms that resulted."
      />
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {works.map((w, i) => (
          <Reveal key={w.ref} delay={i * 100} className={`group ${w.span}`}>
            <div className={`relative w-full overflow-hidden bg-sand ${w.ratio}`}>
              <img
                src={w.img}
                alt={`${w.t} — ${w.loc}`}
                className="h-full w-full object-cover grayscale transition-all duration-[1200ms] group-hover:scale-[1.03] group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between border-t border-border pt-4">
              <div>
                <h3 className="text-base">{w.t}</h3>
                <span className="mt-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {w.loc}
                </span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-clay">
                {w.ref}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 09 why urva ---------- */

const reasons = [
  { t: "Principal-led", d: "Your project is drawn and reviewed by the founder, not delegated." },
  { t: "Detail obsessed", d: "Joinery, reveals and shadow gaps drawn at 1:5 before site." },
  { t: "Budget honest", d: "Material costs mapped early; no surprises at execution." },
  { t: "Timeline held", d: "Stage-gated delivery with a published calendar you can track." },
];

export function WhyUrva() {
  return (
    <Shell tone="sand">
      <SectionHead index="06" label="Why URVA" title="How working with us feels." />
      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        {reasons.map((r, i) => (
          <Reveal key={r.t} delay={i * 80} className="bg-sand p-10">
            <div className="flex items-start gap-6">
              <span className="mt-3 h-px w-8 shrink-0 bg-clay" />
              <div>
                <h3 className="text-lg">{r.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 10 testimonials ---------- */

const quotes = [
  {
    q: "They drew our life first and the house second. Eight months in and every corner still makes sense.",
    a: "R. & M. Iyer",
    p: "Courtyard House",
  },
  {
    q: "The material board became the whole home. Nothing was decorative, everything was intentional.",
    a: "Aditi Rao",
    p: "Terrace Apartment",
  },
  {
    q: "Site supervision was relentless in the best way. Details matched the drawings exactly.",
    a: "S. Krishnan",
    p: "The Stone Villa",
  },
];

export function Testimonials() {
  return (
    <Shell>
      <SectionHead index="07" label="Client Voices" title="Words from the homes." />
      <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
        {quotes.map((t, i) => (
          <Reveal key={t.a} delay={i * 90} className="bg-background p-10">
            <span className="font-mono text-3xl font-extrabold leading-none text-clay/40">“</span>
            <p className="mt-6 text-base font-light leading-relaxed">{t.q}</p>
            <div className="mt-8 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.25em]">
              <span>{t.a}</span>
              <span className="mt-1 block text-muted-foreground">{t.p}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 11 areas ---------- */

const areas = [
  "Sadashivanagar",
  "Indiranagar",
  "Koramangala",
  "Whitefield",
  "Jayanagar",
  "Devanahalli",
  "HSR Layout",
  "Yelahanka",
];

export function Areas() {
  return (
    <Shell tone="sand">
      <SectionHead
        index="08"
        label="Coverage"
        title="Where we build."
        intro="Bengaluru and the surrounding belt, with select projects across Karnataka on request."
      />
      <div className="flex flex-wrap gap-3">
        {areas.map((a, i) => (
          <Reveal key={a} delay={i * 40}>
            <span className="inline-block border border-border px-5 py-3 font-mono text-[10px] uppercase tracking-[0.25em] transition-colors hover:border-clay hover:text-clay">
              {a}
            </span>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

/* ---------- 12 contact band ---------- */

export function CtaBand() {
  return (
    <section id="contact" className="bg-espresso px-6 py-24 text-ivory md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.35em] text-clay">
            Start a Project
          </span>
          <h2 className="mt-6 text-[clamp(2rem,5vw,4rem)] leading-[0.9]">
            Let&apos;s draw
            <br />
            <span className="text-clay">your home.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-ivory/70">
            Share your plot, timeline and how you want to live. We respond within two working days
            with a first read and a fee structure.
          </p>
        </Reveal>
        <Reveal delay={140} className="space-y-8 lg:col-span-5">
          <div className="space-y-6 border-t border-ivory/20 pt-6">
            {[
              { k: "Email", v: "studio@urvaarchitects.in" },
              { k: "Phone", v: "+91 98450 00000" },
              { k: "Studio", v: "Sadashivanagar, Bengaluru 560080" },
            ].map((c) => (
              <div key={c.k} className="flex items-baseline justify-between gap-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ivory/50">
                  {c.k}
                </span>
                <span className="text-sm">{c.v}</span>
              </div>
            ))}
          </div>
          <a
            href="mailto:studio@urvaarchitects.in"
            className="inline-flex items-center bg-clay px-8 py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-espresso transition-colors hover:bg-ivory"
          >
            Book a Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">
          URVA Architects — Bengaluru
        </span>
        <div className="flex gap-8 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#works" className="hover:text-clay">
            Works
          </a>
          <a href="#studio" className="hover:text-clay">
            Studio
          </a>
          <a href="#contact" className="hover:text-clay">
            Contact
          </a>
        </div>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
          © {new Date().getFullYear()} — All rights reserved
        </span>
      </div>
    </footer>
  );
}
