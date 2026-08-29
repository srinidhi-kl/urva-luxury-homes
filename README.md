# URVA Luxury Homes

Build a premium, modern, single-page homepage for "URVA Architects," a boutique luxury residential architecture and interior design studio based in Bengaluru, India. The design should feel like a high-end architecture/interior design portfolio — editorial, spacious, and elegant — not a generic template.

BRAND
- Name: URVA Architects
- Tagline: "Architecture and interiors designed with clarity, warmth, and timeless intention."
- Founder: Ar. Varshika Machve, Founder & Principal Architect
- Logo: gold/bronze monogram of a "U" fused with an abstract skyline silhouette, on black — use the uploaded logo file directly in the navbar and footer.

COLOR PALETTE & TYPOGRAPHY
- Base: deep black / charcoal (#0B0B0B – #161616) backgrounds
- Accent: warm antique gold/bronze gradient (#C9A24B → #E8C97A), matching the logo exactly
- Supporting neutrals: warm off-white (#F5F1EA), soft greige (#D8D2C4) for text on dark sections
- Typography: pair an elegant serif (e.g., "Cormorant Garamond" or "Playfair Display") for headings with a clean modern sans-serif (e.g., "Inter" or "Manrope") for body text — wide letter-spacing on uppercase labels like the logo wordmark
- Generous whitespace, large type scale, minimal borders — luxury real-estate/architecture-studio aesthetic

LAYOUT / SECTIONS (single scrollable homepage)

1. Sticky Navbar
   - Logo (left), nav links (Home, About, Services, Projects, Process, Contact), a gold outlined "Book a Consultation" button (right)
   - Transparent over hero, transitions to solid black with blur on scroll

2. Hero Section
   - Full-viewport height, black background
   - Subtle animated architectural line-art in the background (thin gold outline sketch of a building elevation / skyline that slowly draws itself in on load using SVG stroke animation, or a slow-panning parallax image of a minimal modern villa)
   - Large serif headline: "Thoughtfully Designed Homes. Timeless Living."
   - Subtext: the tagline above
   - Two CTAs: "View Our Projects" (solid gold) and "Book a Consultation" (outlined)
   - Small scroll-down indicator animation (gold arrow gently bouncing)

3. Intro / Philosophy Strip
   - Centered short paragraph: "Good design is not about trends..." 
   - Fade-up on scroll animation

4. Core Principles (3-column, animated on scroll)
   - Purposeful Planning / Material Warmth / Enduring Detail
   - Each card has a minimal line-icon (compass, texture swatch, drafting pencil) that draws in on scroll, gold hover glow, subtle lift on hover

5. About URVA (split layout)
   - Left: short studio description text
   - Right: portrait-style placeholder image of the founder or a studio photo, with a soft gold frame/border animation on scroll-in
   - Small credit line: "Founded by Ar. Varshika Machve"

6. Services Overview (interactive grid, 4 items)
   - Residential Architecture / Interior Design / Renovation & Remodeling / Design + Build
   - Each as a hover-expand card: dark card that reveals a short service list and a subtle gold architectural line-drawing icon (blueprint, floor plan lines) when hovered
   - "Explore All Services" link at the end

7. Design Approach / Materials Strip
   - Horizontal auto-scrolling (marquee) row of material keywords with icons: Natural Stone, Wood Veneers, Textured Plaster, Fluted Glass, Warm Palettes, Sustainable Materials
   - Continuous slow horizontal scroll animation, pause on hover

8. Our Process (5-step horizontal timeline: Discover, Define, Design, Detail, Realise)
   - Animated connecting gold line that fills in as user scrolls through the steps
   - Numbered circular markers (01–05)

9. Featured Projects (image gallery/carousel)
   - 3–4 placeholder project cards with hover zoom-in on images, gold caption overlay sliding up on hover (project name + category)
   - "View Full Portfolio" button

10. Why Choose URVA (icon + text grid, 5 items)
    - Personalized Design, Thoughtful Planning, Timeless Aesthetics, End-to-End Guidance, Detail-Oriented Approach
    - Fade/stagger-in animation as the section enters viewport

11. Testimonials (auto-rotating carousel)
    - 3 client quotes with subtle fade/slide transition, minimal gold quotation-mark icon

12. Areas We Served
    - Simple elegant list/tag layout: Bangalore, Whitefield, Kadugodi, Channasandra, KR Puram, Brookefield, Varthur, Sarjapur, Electronic City, North & South Bangalore
    - "We also undertake select projects across India"

13. Call-to-Action / Contact Band
    - Full-width dark section with gold accent
    - Heading: "Let's Create Something Meaningful Together"
    - Consultation button + phone/email quick links

14. Footer
    - Logo, short tagline, studio address, phone (+91 7869981146), email (urvaarchitects@gmail.com), studio hours (Mon–Sat, 10 AM–7 PM, by appointment), social icons, quick nav links, copyright line

INTERACTIONS / ANIMATIONS
- Smooth scroll-triggered fade-up/stagger animations for all sections (use Framer Motion or CSS scroll-reveal)
- Subtle parallax on hero background elements
- Animated SVG line-drawing of architectural elements (blueprint lines, skyline silhouette, floor-plan grid) used decoratively in empty/negative space across sections — echoing the logo's building silhouette motif
- Smooth hover states: gold underline animations on links, image zoom on cards, button fill transitions
- Cursor-aware subtle magnetic hover effect on primary CTA buttons (optional, tasteful)
- Page transitions and section reveals should feel slow, smooth, and premium — not bouncy or playful

RESPONSIVENESS
- Fully responsive across desktop, tablet, and mobile
- On mobile: stack all multi-column sections, convert horizontal timeline to vertical, hamburger menu with full-screen dark overlay nav with staggered link fade-in animation
- Ensure touch-friendly tap targets and readable type scale on small screens
- Test that background architectural line-art scales/repositions gracefully instead of breaking layout

TECHNICAL NOTES
- Use the uploaded URVA logo image in navbar (small) and footer (medium), on transparent/dark backgrounds
- Keep the site content strictly matching the provided company copy — do not invent new services or claims
- Make it feel distinct from generic real-estate templates: emphasize dark luxury tones, gold detailing, serif typography, and architectural line-art motifs rather than generic stock photography and bright colors

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2fd23968-0861-4580-b1c8-32ceddd70a6a).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
