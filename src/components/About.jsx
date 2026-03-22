import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { num: "10+", label: "Projects"    },
  { num: "2+",  label: "Internships" },
  { num: "1",   label: "Years Exp"   },
];

const TAGS = ["React", "Next.js",  "Node.js", "MongoDB",  "Tailwind", "GSAP", "Three.js"];

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

      gsap.to(imgRef.current, {
        yPercent: -8,
        scrollTrigger: { trigger: secRef.current, start: "top bottom", end: "bottom top", scrub: 1.2 },
      });

      // main entrance timeline
      const tl = gsap.timeline({
        scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" },
        defaults: { ease: "power3.out" },
      });

      tl
        .fromTo(imgRef.current,
          { x: -50, opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, duration: 1 }
        )
        .fromTo(lineRef.current,
          { scaleY: 0, transformOrigin: "top" },
          { scaleY: 1, duration: 0.8 }, "-=0.6"
        )
        .fromTo(t1Ref.current,
          { y: -16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }, "-=0.5"
        )
        .fromTo(t2Ref.current?.children ?? [],
          { y: 40, opacity: 0, skewY: 3 },
          { y: 0, opacity: 1, skewY: 0, stagger: 0.1, duration: 0.75 }, "-=0.35"
        )
        .fromTo(bioRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 }, "-=0.4"
        )
        .fromTo(tagsRef.current?.children ?? [],
          { y: 14, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.05, duration: 0.38, ease: "back.out(1.6)" }, "-=0.35"
        )
        .fromTo(stRef.current?.children ?? [],
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.45 }, "-=0.3"
        )
        .fromTo(btnRef.current?.children ?? [],
          { y: 14, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, stagger: 0.08, duration: 0.45, ease: "back.out(1.4)" }, "-=0.25"
        );

      // subtle hover float on photo
      gsap.to(imgRef.current, {
        y: -6, duration: 2.8, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1.2,
      });

    }, secRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ab-img-wrap {
          position: relative;
          flex-shrink: 0;
          width: min(320px, 40vw);
        }
        .ab-img-wrap img {
          width: 100%;
          aspect-ratio: 3/4;
          object-fit: cover;
          object-position: center top;
          border-radius: 20px;
          display: block;
        }
        .ab-corner {
          position: absolute;
          width: 26px; height: 26px;
          border-color: #001f5c;
          border-style: solid;
          pointer-events: none;
        }
        .ab-corner-tl { top: -6px; left: -6px; border-width: 2px 0 0 2px; border-radius: 4px 0 0 0; }
        .ab-corner-br { bottom: -6px; right: -6px; border-width: 0 2px 2px 0; border-radius: 0 0 4px 0; }

        .ab-name-line { overflow: hidden; display: block; }

        .ab-chip {
          font-size: 10.5px;
          padding: 4px 11px;
          border-radius: 999px;
          border: 1.5px solid rgba(0,31,92,0.10);
          background: rgba(0,31,92,0.03);
          color: rgba(10,15,44,0.48);
          transition: all 0.18s;
          cursor: default;
          letter-spacing: 0.01em;
        }
        .ab-chip:hover {
          background: rgba(0,31,92,0.07);
          border-color: rgba(0,31,92,0.22);
          color: #001f5c;
        }

        .ab-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 22px; border-radius: 12px;
          font-size: 13px; font-weight: 600;
          background: #0a0f2c;
          border: 1.5px solid #0a0f2c;
          color: #fff;
          text-decoration: none;
          transition: background 0.2s, transform 0.18s, box-shadow 0.2s;
        }
        .ab-btn:hover {
          background: #001f5c;
          transform: translateY(-2px);        }
        .ab-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 11px 20px; border-radius: 12px;
          font-size: 13px; font-weight: 500;
          background: transparent;
          border: 1.5px solid rgba(0,31,92,0.14);
          color: #001f5c;
          text-decoration: none;
          transition: all 0.18s;
        }
        .ab-btn-ghost:hover {
          background: rgba(0,31,92,0.05);
          border-color: rgba(0,31,92,0.28);
          transform: translateY(-2px);
        }
        .ab-stat-sep { width:1px; height:30px; background: rgba(0,31,92,0.09); flex-shrink:0; }

        @media (max-width: 700px) {
          .ab-layout  { flex-direction: column !important; align-items: center !important; }
          .ab-img-wrap { width: min(240px, 68vw) !important; }
          .ab-divline  { display: none !important; }
          .ab-right    { align-items: center !important; text-align: center !important; }
          .ab-chips    { justify-content: center !important; }
          .ab-stats    { justify-content: center !important; }
          .ab-btns     { justify-content: center !important; }
          .ab-stat-sep { display: none !important; }
        }

        @keyframes abpulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); }
          50%      { box-shadow: 0 0 0 5px rgba(34,197,94,0); }
        }
      `}</style>

      <section ref={secRef} className="w-full px-5 py-14" style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="ab-layout flex items-start gap-12">

          {/* ── Photo ── */}
          <div ref={imgRef} className="ab-img-wrap" style={{ opacity: 0 }}>
            <div className="ab-corner ab-corner-tl" />
            <div className="ab-corner ab-corner-br" />
            <img src="/cc1.png" alt="Malik Tanveer" />
            <div
              className="absolute left-3 bottom-3 flex items-center gap-2 px-3 py-1.5 rounded-full"
              style={{
                fontFamily: "monospace",
                background: "rgba(255,255,255,0.90)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(34,197,94,0.22)",
                fontSize: 10,
              }}
            >
              <span style={{
                width: 7, height: 7, borderRadius: "50%", background: "#22c55e",
                flexShrink: 0, display: "inline-block", animation: "abpulse 2s ease-in-out infinite"
              }} />
              <span style={{ color: "#15803d", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Available
              </span>
            </div>
          </div>

          {/* ── Divider ── */}
          <div
            ref={lineRef}
            className="ab-divline flex-shrink-0"
            style={{ width: 1, alignSelf: "stretch", background: "rgba(0,31,92,0.08)", scaleY: 0 }}
          />

          {/* ── Content ── */}
          <div className="ab-right flex flex-col items-start flex-1" style={{ paddingTop: 4, gap: 0 }}>

            {/* pill tag */}
            <div
              ref={t1Ref}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
              style={{
                fontFamily: "monospace",
                border: "1px solid rgba(0,31,92,0.13)",
                background: "rgba(0,31,92,0.03)",
                opacity: 0,
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
              <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em]">
                ABOUT ME
              </span>
            </div>

            {/* Name — each word wraps for per-word animation */}
            <h2
              ref={t2Ref}
              className="text-[#0a0f2c] font-black leading-[0.92] mb-5 select-none"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2rem, 4.5vw, 3.4rem)",
                letterSpacing: "-0.022em",
              }}
            >
              <span className="ab-name-line" style={{ opacity: 0 }}>Malik Tanveer</span>
            </h2>

            {/* Bio */}
            <p
              ref={bioRef}
              className="leading-relaxed mb-6"
              style={{
                color: "rgba(10,15,44,0.52)",
                fontSize: "clamp(0.82rem, 1.4vw, 0.92rem)",
                maxWidth: 460,
                opacity: 0,
              }}
            >
              I'm a full-stack developer from Karachi — I build things for the web.
              Frontend is where I live: React, Next.js, animations, clean UI. But I
              can take a product end-to-end — backend, database, deployment. I've
              shipped real projects, worked two internships, and I'm always building
              something new.
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
                    <div
                      className="font-bold leading-none"
                      style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.25rem", color: "#0a0f2c" }}
                    >
                      {s.num}
                    </div>
                    <div
                      className="text-[9px] tracking-[0.16em] uppercase mt-1"
                      style={{ fontFamily: "monospace", color: "rgba(10,15,44,0.32)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                  {i < STATS.length - 1 && <div className="ab-stat-sep" />}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div ref={btnRef} className="ab-btns flex items-center gap-3">
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
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}