import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Projects",   href: "#projects"   },
  { label: "Experience", href: "#experience" },
  { label: "Services",   href: "#services"   },
  { label: "Hire Me",    href: "#whyhireme"  },
  { label: "Contact",    href: "#contact"    },
];

const SERVICES = [
  "Full Stack Web Apps",
  "MERN Development",
  "REST API & Backend",
  "React / Next.js UI",
  "Firebase Integration",
  "UI/UX & Logo Design",
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/923001234567",
    icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  },
];

// ─── Footer ───────────────────────────────────────────────────────────────────
export default function Footer() {
  const footerRef  = useRef(null);
  const topBarRef  = useRef(null);
  const col1Ref    = useRef(null);
  const col2Ref    = useRef(null);
  const col3Ref    = useRef(null);
  const dividerRef = useRef(null);
  const bottomRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        defaults: { ease: "power3.out" },
      })
      .fromTo(topBarRef.current,  { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.8 })
      .fromTo(col1Ref.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.3")
      .fromTo(col2Ref.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.5")
      .fromTo(col3Ref.current,    { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, "-=0.5")
      .fromTo(dividerRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.55 }, "-=0.2")
      .fromTo(bottomRef.current,  { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.2");
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const year = new Date().getFullYear();

  return (
    <>
      <style>{`

        .ft-link {
          color: rgba(10,15,44,0.45);
          text-decoration: none;
          font-size: 13px;
          transition: color 0.18s;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-link:hover { color: #001f5c; }
        .ft-link .ft-slash {
          font-size: 10px;
          color: rgba(0,31,92,0.25);
          transition: color 0.18s;
        }
        .ft-link:hover .ft-slash { color: #001f5c; }

        .ft-social {
          width: 34px; height: 34px; border-radius: 9px;
          border: 1.5px solid rgba(0,31,92,0.10);
          background: rgba(0,31,92,0.03);
          display: flex; align-items: center; justify-content: center;
          color: rgba(0,31,92,0.40);
          text-decoration: none;
          transition: all 0.18s;
        }
        .ft-social:hover {
          background: rgba(0,31,92,0.07);
          border-color: rgba(0,31,92,0.22);
          color: #001f5c;
        }

        .ft-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 6px;
          border: 1.5px solid rgba(0,31,92,0.09);
          background: rgba(0,31,92,0.03);
          color: rgba(10,15,44,0.45);
          transition: all 0.18s;
        }
        .ft-tag:hover {
          background: rgba(0,31,92,0.07);
          border-color: rgba(0,31,92,0.20);
          color: #001f5c;
        }

        .ft-pulse {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22c55e; flex-shrink: 0;
          animation: ft-blink 2s ease-in-out infinite;
        }
        @keyframes ft-blink {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
      `}</style>

      <footer
        ref={footerRef}
        className="ft-dm relative"
        style={{ zIndex: 10, background: "transparent" }}
      >
        {/* Top accent line */}
        <div
          ref={topBarRef}
          style={{ height: 2, background: "linear-gradient(to right, #3b82f6, #001f5c)", transformOrigin: "left" }}
        />

        <div className="px-6 pt-12 pb-8 max-w-6xl mx-auto">
          <div className="grid gap-10" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}>

            {/* ── Col 1 — Brand ── */}
            <div ref={col1Ref} style={{ opacity: 0 }}>
              <div className="mb-4">
                <img
                  src="/logo1.png"
                  alt="MT"
                  className="h-10 w-auto object-contain"
                  onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "block"; }}
                />
                <span
                  className="ft-syne text-[#0a0f2c] font-black text-2xl tracking-[0.12em]"
                  style={{ display: "none" }}
                >
                  &lt;MT/&gt;
                </span>
              </div>

              <p className="ft-mono text-[10px] text-[#001f5c]/50 tracking-[0.2em] uppercase mb-3">
                // full-stack developer
              </p>
              <p className="ft-dm text-[#0a0f2c]/45 text-[13px] leading-relaxed mb-5 max-w-[210px]">
                Building fast, scalable web apps — from clean React UIs to solid Node.js backends.
              </p>

              {/* Available badge */}
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5"
                style={{ border: "1.5px solid rgba(34,197,94,0.22)", background: "rgba(34,197,94,0.05)" }}
              >
                <div className="ft-pulse" />
                <span className="ft-mono text-[10px] text-green-600/70 tracking-widest uppercase">
                  Available for work
                </span>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-2">
                {SOCIALS.map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="ft-social" title={s.label}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Col 2 — Navigate ── */}
            <div ref={col2Ref} style={{ opacity: 0 }}>
              <h4 className="ft-syne text-[#0a0f2c] font-bold text-[11px] tracking-[0.18em] uppercase mb-5">
                Navigate
              </h4>
              <ul className="flex flex-col gap-3">
                {NAV_LINKS.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="ft-link">
                      <span className="ft-slash">//</span>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Col 3 — Services + CTA ── */}
            <div ref={col3Ref} style={{ opacity: 0 }}>
              <h4 className="ft-syne text-[#0a0f2c] font-bold text-[11px] tracking-[0.18em] uppercase mb-5">
                Services
              </h4>
              <div className="flex flex-wrap gap-2 mb-8">
                {SERVICES.map(s => (
                  <span key={s} className="ft-tag">{s}</span>
                ))}
              </div>

              <p className="ft-mono text-[10px] text-[#0a0f2c]/25 tracking-widest uppercase mb-3">
                // get in touch
              </p>
              <a
                href="#contact"
                className="ft-dm inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px] font-medium"
                style={{
                  background: "rgba(0,31,92,0.06)",
                  border: "1.5px solid rgba(0,31,92,0.14)",
                  color: "#001f5c",
                  transition: "all 0.18s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(0,31,92,0.11)";
                  e.currentTarget.style.borderColor = "rgba(0,31,92,0.28)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "rgba(0,31,92,0.06)";
                  e.currentTarget.style.borderColor = "rgba(0,31,92,0.14)";
                }}
              >
                Let's Work Together
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

          </div>

          {/* Divider */}
          <div
            ref={dividerRef}
            className="my-8"
            style={{ height: 1, background: "rgba(0,31,92,0.08)", transformOrigin: "left" }}
          />

          {/* Bottom */}
          <div ref={bottomRef} className="flex flex-wrap items-center justify-between gap-3" style={{ opacity: 0 }}>
            <p className="ft-mono text-[10px] text-[#0a0f2c]/22 tracking-widest">
              tanveer.dev © {year} — all rights reserved
            </p>
            <p className="ft-mono text-[10px] text-[#0a0f2c]/16 tracking-widest">
              built with React · Three.js · GSAP · Tailwind
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}