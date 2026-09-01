import { useEffect, useState } from "react";
import logoAsset from "@/assets/urva-logo.png.asset.json";

const logo = (logoAsset as { url: string }).url;

const links = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled ? "border-border bg-background/90 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="URVA Architects monogram" className="h-9 w-9 object-contain" />
          <span className="font-mono text-sm font-extrabold uppercase tracking-[0.35em]">
            Urva
          </span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-clay">
            Bengaluru / IN
          </span>
          <a
            href="#contact"
            className="bg-espresso px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-clay"
          >
            Enquire
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] border border-border lg:hidden"
        >
          <span
            className={`h-px w-4 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-4 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-background transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-96" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-4 font-mono text-xs uppercase tracking-[0.3em]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 bg-espresso px-6 py-4 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ivory"
          >
            Enquire
          </a>
        </nav>
      </div>
    </header>
  );
}
