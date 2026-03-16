// import { useState, useRef, useEffect } from "react";
// import gsap from "gsap";
// import { X, Menu } from "lucide-react";

// function Navbar () {
// const [open, setOpen] = useState(false);
// const sidebarRef = useRef(null);
// const closeRef = useRef(null);

// useEffect(() => {
//   if (open) {

//     // sidebar entry animation
//     gsap.fromTo(
//       sidebarRef.current,
//       { x: 300, scale: 0.9, rotate: 5, opacity: 0 },
//       {
//         x: 0,
//         scale: 1,
//         rotate: 0,
//         opacity: 1,
//         duration: 0.8,
//         ease: "power3.out"
//       }
//     );

//   } else {

//     // exit animation
//     gsap.to(sidebarRef.current, {
//       x: 300,
//       scale: 0.9,
//       rotate: -5,
//       opacity: 0,
//       duration: 0.6,
//       ease: "power3.in"
//     });

//   }
// }, [open]);

// const navLinksLeft = [
//   { name: "About", id: "about" },
//   { name: "Skills", id: "skills" },
//   { name: "Projects", id: "projects" },
//   { name: "Experience", id: "experience" },
// ];

// const navLinksRight = [
//   { name: "Services", id: "services" },
//   { name: "Hire Me", id: "whyhireme" },
//   { name: "Testimonials", id: "testimonials" },
//   { name: "Contact", id: "contact" },
// ];
// // const Navbar = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#e3e3e3]/20 backdrop-blur-lg w-[80%] max-w-6xl rounded-full shadow-xl z-50 border border-[#e3e3e3]/30">
//         <div className="flex items-center px-12  h-20 ">

//           {/* Left Links */}
//           <ul className="hidden md:flex items-center gap-10 text-[15px] font-bold text-[#0a0f2c]">
//             {navLinksLeft.map((link) => (
//               <li key={link.name} className="relative cursor-pointer group">
//                 <a
//                   href={`#${link.id}`}
//                   className="transition-colors duration-300 group-hover:text-[#001f5c]"
//                 >
//                   {link.name}
//                 </a>
//                 <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001f5c] transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>

//           {/* Logo */}
//           <div className="flex items-center justify-center mx-[80px] md:mx-[86px]">
//             <img
//               src="/logo2.png"
//               alt="Logo"
//               className="h-14 sm:h-16 md:h-18 w-auto object-contain"
//             />
//           </div>

//           {/* Right Links */}

//           <ul className="hidden md:flex items-center gap-10 ml-auto text-[15px] font-bold text-[#0a0f2c]">
//             {navLinksRight.map((link) => (
//               <li key={link.name} className="relative cursor-pointer group">
//                 <a
//                   href={`#${link.id}`}
//                   className="transition-colors duration-300 group-hover:text-[#001f5c]"
//                 >
//                   {link.name}
//                 </a>

//                 <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#001f5c] transition-all duration-300 group-hover:w-full"></span>
//               </li>
//             ))}
//           </ul>
//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setOpen(true)}
//             className="md:hidden ml-auto text-2xl"
//           >
//             <Menu />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         ref={sidebarRef}
//         className={`fixed top-0 right-0 h-full w-[50%] max-w-sm
//   shadow-2xl
//   transform transition-transform duration-500 z-50 rounded-tl-[120px] 
//   ${open ? "translate-x-0" : "translate-x-full"}`}
//         style={{
//           backgroundColor: "white",
//           backgroundImage: `
//       linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
//       linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
//     `,
//           backgroundSize: "35px 35px"
//         }}
//       >
//         <div className="flex flex-col justify-between h-full p-8 text-[#0a0f2c] font-bold relative">

//           {/* Close Button INSIDE Sidebar */}
//           <button
//             ref={closeRef}
//             onClick={() => {
//               gsap.to(closeRef.current, {
//                 rotate: 180,
//                 duration: 0.4
//               });
//               setOpen(false);
//             }}
//             className="absolute top-6 right-6 text-4xl font-bold"
//           >
//             <X />
//           </button>

//           {/* Links */}
//           <div className="space-y-6 text-lg mt-16">
//             {[...navLinksLeft, ...navLinksRight].map((link) => (
//               <a
//                 key={link.name}
//                 href={`#${link.id}`}
//                 className="block cursor-pointer hover:text-[#001f5c] transition"
//                 onClick={() => setOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>

//           {/* Bottom Social */}
//           <div className="flex flex-col space-y-3 text-sm">
//             <a href="#" className="hover:text-[#001f5c] transition">
//               LinkedIn
//             </a>
//             <a href="mailto:your@email.com" className="hover:text-[#001f5c] transition">
//               Email
//             </a>
//           </div>

//         </div>
//       </div>
//       {/* Overlay */}
//       {open && <div className="fixed inset-0 bg-black/30 z-30" onClick={() => setOpen(false)} />}
//     </>
//   );
// }


// export default Navbar;



import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { X, Menu } from "lucide-react";
import * as THREE from "three";

// ─── Data ─────────────────────────────────────────────────────────────────────
const LEFT_LINKS = [
  { name: "About",      id: "about"      },
  { name: "Skills",     id: "skills"     },
  { name: "Projects",   id: "projects"   },
  { name: "Experience", id: "experience" },
];
const RIGHT_LINKS = [
  { name: "Services",     id: "services"     },
  { name: "Hire Me",      id: "whyhireme"    },
  { name: "Testimonials", id: "testimonials" },
  { name: "Contact",      id: "contact"      },
];

// ─── Three.js particles ───────────────────────────────────────────────────────
function NavCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0xffffff, 0);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 50);
    camera.position.z = 4;

    const onResize = () => {
      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    onResize();
    window.addEventListener("resize", onResize);

    const COUNT = 90;
    const geo   = new THREE.BufferGeometry();
    const pos   = new Float32Array(COUNT * 3);
    const col   = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 3;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 2;
      const isNavy   = Math.random() > 0.5;
      col[i * 3]     = isNavy ? 0        : 0.07;
      col[i * 3 + 1] = isNavy ? 31 / 255 : 0.07;
      col[i * 3 + 2] = isNavy ? 92 / 255 : 0.07;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("color",    new THREE.BufferAttribute(col, 3));

    const mat    = new THREE.PointsMaterial({ size: 0.045, vertexColors: true, transparent: true, opacity: 0.2 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      points.rotation.y += 0.0007;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full rounded-full pointer-events-none z-0"
    />
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navRef     = useRef(null);
  const sidebarRef = useRef(null);
  const overlayRef = useRef(null);

  // entrance
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -56, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, ease: "power4.out", delay: 0.1 }
    );
    gsap.fromTo(".nl",
      { y: -8, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.05, duration: 0.45, ease: "power3.out", delay: 0.38 }
    );
  }, []);

  // sidebar
  useEffect(() => {
    const sb = sidebarRef.current;
    const ov = overlayRef.current;
    if (!sb || !ov) return;

    if (open) {
      gsap.set(ov, { display: "block" });
      gsap.set(sb, { display: "flex" });
      gsap.fromTo(ov, { opacity: 0 }, { opacity: 1, duration: 0.3 });
      gsap.fromTo(sb,
        { x: "100%", skewX: 4, opacity: 0.4 },
        { x: "0%",   skewX: 0, opacity: 1, duration: 0.52, ease: "power3.out" }
      );
      gsap.fromTo(".sl",
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.045, duration: 0.36, ease: "power3.out", delay: 0.2 }
      );
    } else {
      gsap.to(sb, {
        x: "100%", skewX: 3, opacity: 0, duration: 0.4, ease: "power3.in",
        onComplete: () => gsap.set(sb, { display: "none" }),
      });
      gsap.to(ov, {
        opacity: 0, duration: 0.28,
        onComplete: () => gsap.set(ov, { display: "none" }),
      });
    }
  }, [open]);

  const onEnter = (e) => gsap.to(e.currentTarget, { y: -2, duration: 0.16 });
  const onLeave = (e) => gsap.to(e.currentTarget, { y:  0, duration: 0.16 });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .font-syne  { font-family: 'Syne', sans-serif; }
        .font-dm    { font-family: 'DM Sans', sans-serif; }
        .font-mono  { font-family: 'JetBrains Mono', monospace; }

        /* nav link underline trick — Tailwind can't do width:0→100% on ::after */
        .nl::after {
          content: '';
          position: absolute;
          left: 0; bottom: -3px;
          width: 0; height: 1.5px;
          background: #001f5c;
          transition: width 0.26s ease;
        }
        .nl:hover::after { width: 100%; }

        /* sidebar link accent line */
        .sl-line { width: 12px; height: 1.5px; background: #001f5c; border-radius: 2px; flex-shrink: 0; }
      `}</style>

      {/* ── Navbar ─────────────────────────────────────────────────────── */}
      <nav
        ref={navRef}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[88%] max-w-[1120px]"
      >
        {/* Pill */}
        <div className="relative grid items-center rounded-full overflow-hidden h-[68px] border border-white/30 backdrop-blur-xl"
          style={{
            gridTemplateColumns: "1fr auto 1fr",
            background: "rgba(227,227,227,0.20)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,31,92,0.10)",
          }}
        >
          <NavCanvas />

          {/* ── Left links ──────────────────────────────────────────── */}
          <ul className="hidden lg:flex items-center justify-end gap-5 pr-8 list-none m-0 p-0 relative z-10">
            {LEFT_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  onMouseEnter={onEnter}
                  onMouseLeave={onLeave}
                  className="nl font-dm text-[13px] font-bold text-[#0a0f2c] hover:text-[#001f5c] relative inline-block transition-colors duration-200 tracking-wide"
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Logo ────────────────────────────────────────────────── */}
          <div className="flex items-center justify-center relative z-10 px-2">
            {/* Tech bracket decoration */}

            <img
              src="/logo2.png"
              alt="Logo"
              className="h-[44px] w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                e.currentTarget.nextSibling.style.display = "flex";
              }}
            />

            {/* Fallback monogram */}
            <div
              className="hidden items-center justify-center w-10 h-10 rounded-lg bg-[#0a0f2c]"
            >
              <span className="font-syne text-white text-base font-extrabold tracking-widest">MT</span>
            </div>

          </div>

          {/* ── Right links + burger ─────────────────────────────────── */}
          <div className="flex items-center justify-start relative z-10">
            <ul className="hidden lg:flex items-center justify-start gap-5 pl-8 list-none m-0 p-0">
              {RIGHT_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onMouseEnter={onEnter}
                    onMouseLeave={onLeave}
                    className="nl font-dm text-[13px] font-bold text-[#0a0f2c] hover:text-[#001f5c] relative inline-block transition-colors duration-200 tracking-wide"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden ml-auto mr-5 flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors rounded-lg p-[7px] text-[#0a0f2c] border-none cursor-pointer"
              aria-label="Open menu"
            >
              <Menu size={19} />
            </button>
          </div>
        </div>

        {/* ── Tech tag below pill — subtle dev flavour ─────────────── */}
        <div className="hidden lg:flex justify-center mt-1.5">
          <span className="font-mono text-[10px] text-[#001f5c]/30 tracking-widest select-none">
            // full-stack developer
          </span>
        </div>
      </nav>

      {/* ── Overlay ────────────────────────────────────────────────────── */}
      <div
        ref={overlayRef}
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-40 bg-black/30"
        style={{ display: "none", opacity: 0 }}
      />

      {/* ── Sidebar ────────────────────────────────────────────────────── */}
      <div
        ref={sidebarRef}
        className="fixed top-0 right-0 h-full z-50 bg-white flex-col"
        style={{
          width: "clamp(240px, 68vw, 275px)",
          borderLeft: "1px solid rgba(0,0,0,0.07)",
          borderRadius: "36px 0 0 0",
          boxShadow: "-6px 0 40px rgba(0,0,0,0.12)",
          display: "none",
          padding: "1.5rem 1.2rem",
        }}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="self-end flex items-center justify-center bg-black/5 hover:bg-black/10 transition-colors rounded-lg p-1.5 text-[#111] border-none cursor-pointer mb-5"
          aria-label="Close menu"
        >
          <X size={17} />
        </button>

        {/* Monogram + tech tag */}
        <div className="pl-2 mb-5">
          <span className="font-syne text-[#0a0f2c] text-2xl font-extrabold tracking-[0.16em]">MT</span>
          <div className="w-6 h-0.5 bg-[#001f5c] mt-1.5 rounded-full" />
          <span className="font-mono text-[10px] text-[#001f5c]/40 tracking-widest mt-1 block">
            // full-stack dev
          </span>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col gap-0.5 overflow-y-auto">
          {[...LEFT_LINKS, ...RIGHT_LINKS].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="sl font-dm text-[14px] font-semibold text-[#1a1a2e] flex items-center gap-2.5 px-3 py-2.5 rounded-lg hover:bg-[#001f5c]/[0.06] hover:text-[#001f5c] transition-all duration-150 no-underline"
            >
              <span className="sl-line" />
              {l.name}
            </a>
          ))}
        </div>

        {/* Social footer */}
        <div className="flex gap-4 pt-4 mt-3 border-t border-black/[0.06]">
          {["LinkedIn", "GitHub", "Email"].map((s) => (
            <a
              key={s}
              href="#"
              className="font-mono text-[10px] tracking-[0.1em] uppercase text-[#999] hover:text-[#001f5c] transition-colors duration-150 no-underline"
            >
              {s}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}