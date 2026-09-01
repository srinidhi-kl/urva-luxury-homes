import { useInView } from "./reveal";

/** Decorative animated skyline elevation line-art. */
export function SkylineLineArt({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.05);
  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1200 420"
        fill="none"
        className={`h-full w-full draw ${inView ? "is-drawing" : ""}`}
        preserveAspectRatio="xMidYMax meet"
      >
        <g stroke="url(#urvaGold)" strokeWidth="1.1" strokeLinejoin="round">
          <path d="M0 400 H1200" />
          <path d="M80 400 V250 h90 V180 h70 V400" />
          <path d="M110 250 v150 M140 250 v150 M170 180 v220 M205 180 v220" />
          <path d="M300 400 V120 l60 -50 l60 50 V400" />
          <path d="M330 400 V210 h60 v190" />
          <path d="M360 70 V20" />
          <path d="M500 400 V160 h130 V400" />
          <path d="M530 190 h70 M530 240 h70 M530 290 h70 M530 340 h70" />
          <path d="M700 400 V60 h50 V400" />
          <path d="M770 400 V140 h40 V400 M830 400 V200 h40 V400" />
          <path d="M930 400 V230 q0 -70 70 -70 h60 V400" />
          <path d="M1090 400 V300 h70 V400" />
        </g>
        <defs>
          <linearGradient id="urvaGold" x1="0" y1="0" x2="1200" y2="0">
            <stop stopColor="#8A6521" />
            <stop offset="0.5" stopColor="#B08B3F" />
            <stop offset="1" stopColor="#8A6521" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/** Decorative floor-plan grid used in negative space. */
export function FloorPlanLineArt({ className = "" }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.05);
  return (
    <div ref={ref} className={className} aria-hidden="true">
      <svg
        viewBox="0 0 400 400"
        fill="none"
        className={`h-full w-full draw ${inView ? "is-drawing" : ""}`}
      >
        <g stroke="url(#urvaGold2)" strokeWidth="1">
          <rect x="20" y="20" width="360" height="360" />
          <path d="M20 160 h150 M170 20 v140 M170 250 h210 M250 250 v130" />
          <path d="M60 200 h70 v60 h-70z M300 60 h60 v70 h-60z" />
          <path d="M20 300 h100 M120 300 a40 40 0 0 0 40 -40" />
        </g>
        <defs>
          <linearGradient id="urvaGold2" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="#8A6521" />
            <stop offset="1" stopColor="#B08B3F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
