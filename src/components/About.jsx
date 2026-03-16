import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: "10+", label: "Projects"    },
  { num: "2+",  label: "Internships" },
  { num: "2",   label: "Years Exp"   },
];

const TAGS = ["React", "Node.js", "MongoDB", "Firebase", "Next.js", "Tailwind", "TypeScript", "Express"];

export default function About() {
  const secRef  = useRef(null);
  const imgRef  = useRef(null);
  const lineRef = useRef(null);
  const t1Ref   = useRef(null);
  const t2Ref   = useRef(null);
  const bioRef  = useRef(null);
  const tagsRef = useRef(null);
  const stRef   = useRef(null);
  const btnRef  = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: secRef.current, start: "top 80%", toggleActions: "play none none none" },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(imgRef.current,
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.9 }
        )
        .fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 0.7 }, "-=0.5"
        )
        .fromTo(t1Ref.current,
          { y: -14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }, "-=0.4"
        )
        .fromTo(t2Ref.current,
          { y: 28, opacity: 0, skewY: 1 },
          { y: 0, opacity: 1, skewY: 0, duration: 0.8 }, "-=0.35"
        )
        .fromTo(bioRef.current,
          { y: 18, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }, "-=0.4"
        )
        .fromTo(tagsRef.current?.children ?? [],
          { y: 12, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.4 }, "-=0.35"
        )
        .fromTo(stRef.current?.children ?? [],
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.09, duration: 0.45 }, "-=0.3"
        )
        .fromTo(btnRef.current,
          { y: 14, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.45 }, "-=0.25"
        );
    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        .ab-syne { font-family: 'Syne', sans-serif; }
        .ab-dm   { font-family: 'DM Sans', sans-serif; }
        .ab-mono { font-family: 'JetBrains Mono', monospace; }

        .ab-img-wrap {
          position: relative;
          flex-shrink: 0;
          width: min(340px, 42vw);
        }
        .ab-img-wrap img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: center top;
          border-radius: 20px;
          display: block;
        }
        /* Decorative corner accents on photo */
        .ab-corner {
          position: absolute;
          width: 28px; height: 28px;
          border-color: #001f5c;
          border-style: solid;
        }
        .ab-corner-tl { top: -6px; left: -6px; border-width: 2.5px 0 0 2.5px; border-radius: 4px 0 0 0; }
        .ab-corner-br { bottom: -6px; right: -6px; border-width: 0 2.5px 2.5px 0; border-radius: 0 0 4px 0; }

        /* Tag chips */
        .ab-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 10.5px;
          padding: 3px 10px;
          border-radius: 6px;
          border: 1.5px solid rgba(0,31,92,0.10);
          background: rgba(0,31,92,0.03);
          color: rgba(10,15,44,0.50);
          transition: all 0.18s;
          cursor: default;
        }
        .ab-chip:hover {
          background: rgba(0,31,92,0.07);
          border-color: rgba(0,31,92,0.22);
          color: #001f5c;
        }

        /* CV button */
        .ab-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 24px; border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600;
          background: #0a0f2c;
          border: 1.5px solid #0a0f2c;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .ab-btn:hover { background: #001f5c; transform: translateY(-2px); }

        .ab-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 20px; border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 500;
          background: transparent;
          border: 1.5px solid rgba(0,31,92,0.14);
          color: #001f5c;
          text-decoration: none;
          transition: all 0.2s;
        }
        .ab-btn-ghost:hover {
          background: rgba(0,31,92,0.05);
          border-color: rgba(0,31,92,0.28);
          transform: translateY(-2px);
        }

        .ab-stat-sep { width:1px; height:32px; background: rgba(0,31,92,0.10); flex-shrink:0; }

        /* Mobile */
        @media (max-width: 700px) {
          .ab-layout { flex-direction: column !important; align-items: center !important; }
          .ab-img-wrap { width: min(260px, 72vw) !important; }
          .ab-divline { display: none !important; }
          .ab-right { align-items: center !important; text-align: center !important; }
          .ab-chips { justify-content: center !important; }
          .ab-stats { justify-content: center !important; }
          .ab-btns  { justify-content: center !important; }
          .ab-stat-sep { display: none !important; }
        }
      `}</style>

      <section ref={secRef} className="ab-dm w-full px-5 py-4" style={{ maxWidth: 1100, margin: "0 auto" }}>

        <div className="ab-layout flex items-start gap-12">

          {/* ── Left: Photo ── */}
          <div ref={imgRef} className="ab-img-wrap" style={{ opacity: 0 }}>
            <div className="ab-corner ab-corner-tl" />
            <div className="ab-corner ab-corner-br" />
            <img src="/cc1.png" alt="Tanveer" />

            {/* Floating available badge on photo */}
            <div
              className="ab-mono absolute left-3 bottom-3 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(34,197,94,0.25)",
                fontSize: 10,
              }}
            >
              <span style={{ width:7, height:7, borderRadius:"50%", background:"#22c55e", flexShrink:0, animation:"abpulse 2s ease-in-out infinite", display:"inline-block" }} />
              <span style={{ color:"#15803d", letterSpacing:"0.15em", textTransform:"uppercase" }}>Available</span>
            </div>
          </div>

          {/* ── Vertical divider line ── */}
          <div
            ref={lineRef}
            className="ab-divline flex-shrink-0"
            style={{ width: 1, alignSelf: "stretch", background: "rgba(0,31,92,0.08)", scaleY: 0 }}
          />

          {/* ── Right: Content ── */}
          <div className="ab-right flex flex-col items-start gap-0 flex-1" style={{ paddingTop: 4 }}>

            {/* Tag */}
            <div
              ref={t1Ref}
              className="ab-mono inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
              style={{
                border: "1px solid rgba(0,31,92,0.14)",
                background: "rgba(0,31,92,0.03)",
                opacity: 0,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
              <span className="text-[10.5px] text-[#001f5c]/60 tracking-[0.2em] uppercase">
                about me
              </span>
            </div>

            {/* Name */}
            <h2
              ref={t2Ref}
              className="ab-syne text-[#0a0f2c] font-black leading-[0.92] mb-5 select-none"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.4rem)", letterSpacing: "-0.022em", opacity: 0 }}
            >
              Malik<br />Tanveer
            </h2>

            {/* Bio */}
            <p
              ref={bioRef}
              className="ab-dm text-[#0a0f2c]/52 leading-relaxed mb-6"
              style={{ fontSize: "clamp(0.82rem, 1.4vw, 0.92rem)", maxWidth: 460, opacity: 0 }}
            >
              A MERN Stack Developer based in Karachi — passionate about building
              fast, scalable web apps with clean React frontends and solid Node.js
              backends. I've worked across freelance projects and internships,
              turning ideas into real digital products with modern tech and
              thoughtful UI/UX design.
            </p>

            {/* Tech chips */}
            <div ref={tagsRef} className="ab-chips flex flex-wrap gap-2 mb-7">
              {TAGS.map(t => <span key={t} className="ab-chip">{t}</span>)}
            </div>

            {/* Stats */}
            <div ref={stRef} className="ab-stats flex items-center gap-6 mb-8">
              {STATS.map((s, i) => (
                <div key={s.label} className="flex items-center gap-6">
                  <div>
                    <div className="ab-syne text-[#0a0f2c] font-bold leading-none" style={{ fontSize: "1.3rem" }}>{s.num}</div>
                    <div className="ab-mono text-[9px] text-[#0a0f2c]/32 tracking-[0.16em] uppercase mt-1">{s.label}</div>
                  </div>
                  {i < STATS.length - 1 && <div className="ab-stat-sep" />}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div ref={btnRef} className="ab-btns flex items-center gap-3" style={{ opacity: 0 }}>
              <a href="/resume.pdf" download className="ab-btn">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV
              </a>
              <a href="#contact" className="ab-btn-ghost">
                Hire Me
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

          </div>
        </div>

        <style>{`
          @keyframes abpulse {
            0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
            50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
          }
        `}</style>
      </section>
    </>
  );
}