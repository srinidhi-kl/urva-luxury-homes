import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/urva-logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="URVA Architects"
            width={44}
            height={44}
            className="h-10 w-10 shrink-0 rounded-sm object-cover sm:h-11 sm:w-11"
          />
          <span className="hidden text-sm tracking-[0.35em] text-offwhite uppercase sm:inline">
            Urva
          </span>
        </a>

        <ul className="hidden items-center justify-center gap-9 lg:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="link-underline text-[0.78rem] tracking-[0.18em] text-greige uppercase transition-colors hover:text-gold-light"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <a
            href="#contact"
            className="hidden rounded-none border border-gold px-6 py-3 text-[0.7rem] tracking-[0.22em] text-gold uppercase transition-colors duration-500 hover:bg-gold hover:text-ink md:inline-block"
          >
            Book a Consultation
          </a>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center border border-border text-gold lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 top-0 z-40 flex flex-col justify-center bg-background transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <ul className="space-y-7 px-10">
          {links.map((l, i) => (
            <li
              key={l.label}
              className="reveal is-visible"
              style={{
                transitionDelay: `${i * 70}ms`,
                opacity: open ? 1 : 0,
                transform: open ? "none" : "translateY(20px)",
              }}
            >
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-serif text-4xl text-offwhite"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-block border border-gold px-7 py-4 text-[0.7rem] tracking-[0.22em] text-gold uppercase"
            >
              Book a Consultation
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
