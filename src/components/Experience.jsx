import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCE = [
  {
    company: "Skytech",
    role: "Frontend Developer Intern",
    period: "Dec 2024 – Feb 2025",
    type: "internship",
    color: "#3b82f6",
    desc: "Worked on real client projects using React, Tailwind, and Bootstrap. Learned team workflows, component architecture, and responsive design from the ground up.",
    projects: [
      { name: "SkyMart",                     desc: "E-commerce UI with cart, filters, and search." },
      { name: "Apartment Management System", desc: "Portal for managing tenant and rental data." },
      { name: "Skytech Company Website",     desc: "Responsive landing page for company services." },
    ],
  },
  {
    company: "Personal Projects",
    role: "MERN Stack & Full Stack Developer",
    period: "Oct 2025 – Present",
    type: "personal",
    color: "#8b5cf6",
    desc: "Building full-stack products with React, Next.js, Node.js, and Supabase. Focused on shipping real, complete things.",
    projects: [
      { name: "LMS Platform",  desc: "Full-stack learning management system with auth, course modules, and dashboard." },
      { name: "VidSnap",       desc: "Video downloader with Vue.js frontend and Express + yt-dlp backend." },
      { name: "MT-Mart",       desc: "Ecommerce platform with React, Tailwind, and Supabase." },
      { name: "Portfolio",     desc: "This site — React, Three.js, GSAP." },
    ],
  },
  {
    company: "Aykays Digital Agency",
    role: "Frontend Developer Intern",
    period: "Aug 2025 – Oct 2025",
    type: "internship",
    color: "#10b981",
    cert: {
      id: "IBT2025-AD7334C7",
      mentor: "Arsal Khan",
      verify: "https://aykays.com/",
    },
    desc: "3-month internship building real products with React, Firebase, and Firestore. Worked in a structured workflow, wrote clean code, and got mentorship from the founder on performance and clarity.",
    projects: [
      { name: "Smart Study Planner",  desc: "Productivity app with task scheduling and real-time analytics — Firebase Auth, Firestore, Chart.js." },
      { name: "ExpenseInsight",       desc: "Finance dashboard with category tracking, monthly reports, and visual analytics." },
      { name: "ProjectFlow",          desc: "Freelance project manager with role-based access and Firestore persistence." },
      { name: "EventSphere",          desc: "Event planning app with schedule management, reminders, and participant tracking." },
      { name: "Study Planner & Focus Tracker", desc: "Student productivity platform with full calendar, focus tracking, and Firebase backend." },
    ],
  },
];

function InternshipCard({ item, side }) {
  const cardRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    gsap.fromTo(dotRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2.5)",
        scrollTrigger: { trigger: cardRef.current, start: "top 87%", toggleActions: "play none none none" } }
    );
    gsap.fromTo(cardRef.current,
      { x: side === "left" ? -60 : 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 87%", toggleActions: "play none none none" } }
    );
  }, []);

  return (
    <div className={`ex-internship-row ex-side-${side}`}>
      {/* spacer on opposite side */}
      <div className="ex-half" />

      {/* center dot */}
      <div className="ex-center-dot-wrap">
        <div ref={dotRef} className="ex-dot" style={{ background: item.color, boxShadow: `0 0 0 4px #fff, 0 0 0 6px ${item.color}45` }} />
      </div>

      {/* card */}
      <div className="ex-half">
        <div ref={cardRef} className="ex-card" style={{ "--ec": item.color, opacity: 0 }}>
          <div className="ex-card-top">
            <span className="ex-badge" style={{ color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}35` }}>
              Internship
            </span>
            <span className="ex-period">{item.period}</span>
          </div>

          <h3 className="ex-company">{item.company}</h3>
          <p className="ex-role">{item.role}</p>

          <div className="ex-divider" style={{ background: `linear-gradient(to right, ${item.color}40, transparent)` }} />

          <p className="ex-desc">{item.desc}</p>

          <ul className="ex-list">
            {item.projects.map(p => (
              <li key={p.name} className="ex-item">
                <span className="ex-bullet" style={{ background: item.color }} />
                <span><strong className="ex-pname">{p.name}</strong><span className="ex-pdesc"> — {p.desc}</span></span>
              </li>
            ))}
          </ul>

          
        </div>
      </div>
    </div>
  );
}

function PersonalCard({ item }) {
  const cardRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    gsap.fromTo(dotRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2.5)",
        scrollTrigger: { trigger: cardRef.current, start: "top 87%", toggleActions: "play none none none" } }
    );
    gsap.fromTo(cardRef.current,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.75, ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 87%", toggleActions: "play none none none" } }
    );
  }, []);

  return (
    <div className="ex-personal-row">
      <div className="ex-center-dot-wrap ex-center-dot-alone">
        <div ref={dotRef} className="ex-dot ex-dot-lg" style={{ background: item.color, boxShadow: `0 0 0 5px #fff, 0 0 0 7px ${item.color}45` }} />
      </div>
      <div ref={cardRef} className="ex-personal-card" style={{ "--ec": item.color, opacity: 0 }}>
        <div className="ex-card-top">
          <span className="ex-badge" style={{ color: item.color, background: `${item.color}12`, border: `1px solid ${item.color}35` }}>
            Self-built
          </span>
          <span className="ex-period">{item.period}</span>
        </div>
        <h3 className="ex-company">{item.company}</h3>
        <p className="ex-role">{item.role}</p>
        <div className="ex-divider" style={{ background: `linear-gradient(to right, transparent, ${item.color}40, transparent)` }} />
        <p className="ex-desc" style={{ textAlign: "center" }}>{item.desc}</p>
        <div className="ex-personal-projects">
          {item.projects.map(p => (
            <div key={p.name} className="ex-personal-item" style={{ borderColor: `${item.color}22`, background: `${item.color}06` }}>
              <span className="ex-pname" style={{ color: item.color }}>{p.name}</span>
              <span className="ex-pdesc">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const secRef   = useRef(null);
  const pillRef  = useRef(null);
  const titleRef = useRef(null);
  const lineRef  = useRef(null);

  // Build order: Skytech (left) → Aykays (right) → Personal (center last)
  const items = [
    { ...EXPERIENCE[0], side: "left"   },
    { ...EXPERIENCE[2], side: "right"  },
    { ...EXPERIENCE[1], side: "center" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(pillRef.current,
        { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out",
          scrollTrigger: { trigger: pillRef.current, start: "top 88%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(titleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, ease: "none",
          scrollTrigger: { trigger: lineRef.current, start: "top 75%", end: "bottom 25%", scrub: 1.2 } }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ex-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .ex-line {
          position: absolute;
          left: 50%; transform: translateX(-50%);
          top: 0; bottom: 0; width: 2px;
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #10b981);
          border-radius: 2px;
          z-index: 0;
        }

        /* internship row — left or right */
        .ex-internship-row {
          display: flex;
          align-items: flex-start;
          gap: 0;
          position: relative;
          padding: 20px 0;
        }
        .ex-side-right { flex-direction: row-reverse; }
        .ex-half { flex: 1; padding: 0 28px; }

        /* center dot */
        .ex-center-dot-wrap {
          position: relative; z-index: 2;
          display: flex; align-items: flex-start;
          justify-content: center;
          padding-top: 22px;
          width: 0;
        }
        .ex-dot {
          width: 14px; height: 14px; border-radius: 50%;
          flex-shrink: 0; position: relative; z-index: 2;
          transform: translateX(-50%);
        }
        .ex-dot-lg { width: 18px; height: 18px; }

        /* personal row — centered card */
        .ex-personal-row {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding: 20px 0;
          z-index: 1;
        }
        .ex-center-dot-alone {
          padding-top: 0;
          margin-bottom: 16px;
        }
        .ex-personal-card {
          width: min(520px, 90%);
          border-radius: 20px;
          border: 1.5px solid rgba(0,31,92,0.08);
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(12px);
          padding: 24px 28px;
          text-align: center;
          transition: border-color 0.22s, box-shadow 0.22s;
          position: relative; z-index: 1;
        }
        .ex-personal-card:hover {
          border-color: var(--ec);
          box-shadow: 0 12px 40px color-mix(in srgb, var(--ec) 12%, transparent);
        }
        .ex-personal-projects {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 14px;
          text-align: left;
        }
        .ex-personal-item {
          padding: 10px 12px;
          border-radius: 10px;
          border: 1px solid;
        }
        .ex-personal-item .ex-pname {
          display: block; font-weight: 700;
          font-size: 11.5px; margin-bottom: 3px;
        }
        .ex-personal-item .ex-pdesc {
          font-size: 11px; color: rgba(10,15,44,0.44); line-height: 1.5;
        }

        /* card shared */
        .ex-card {
          border-radius: 18px;
          border: 1.5px solid rgba(0,31,92,0.07);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(12px);
          padding: 20px 22px;
          transition: border-color 0.22s, box-shadow 0.22s;
        }
        .ex-card:hover {
          border-color: var(--ec);
          box-shadow: 0 8px 32px color-mix(in srgb, var(--ec) 10%, transparent);
        }
        .ex-card-top {
          display: flex; align-items: center; gap: 8px; margin-bottom: 7px;
        }
        .ex-badge {
          font-family: monospace; font-size: 9px;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 3px 9px; border-radius: 999px;
        }
        .ex-period {
          font-family: monospace; font-size: 10.5px;
          color: rgba(10,15,44,0.35);
        }
        .ex-company {
          font-size: 1.1rem; font-weight: 800;
          color: #0a0f2c; letter-spacing: -0.018em;
        }
        .ex-role {
          font-size: 11.5px; color: rgba(10,15,44,0.42); margin-top: 2px;
        }
        .ex-divider { height: 1px; margin: 13px 0; }
        .ex-desc {
          font-size: 12.5px; color: rgba(10,15,44,0.50);
          line-height: 1.65; margin-bottom: 13px;
        }
        .ex-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
        .ex-item { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; line-height: 1.55; }
        .ex-bullet { width: 5px; height: 5px; border-radius: 50%; flex-shrink: 0; margin-top: 5px; }
        .ex-pname { font-weight: 600; color: #0a0f2c; }
        .ex-pdesc { color: rgba(10,15,44,0.45); }

        /* certificate badge */
        .ex-cert {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: 14px; padding: 6px 12px;
          border-radius: 8px;
          background: rgba(16,185,129,0.07);
          border: 1px solid rgba(16,185,129,0.22);
          font-family: monospace; font-size: 10px;
          color: #10b981; text-decoration: none;
          transition: background 0.18s;
        }
        .ex-cert:hover { background: rgba(16,185,129,0.14); }
        .ex-cert-id { color: rgba(16,185,129,0.55); font-size: 9px; }

        @media (max-width: 700px) {
          .ex-internship-row,
          .ex-side-right { flex-direction: column !important; align-items: center !important; }
          .ex-half { padding: 0 !important; width: 100% !important; }
          .ex-center-dot-wrap { width: auto !important; padding-top: 0 !important; margin-bottom: 12px; }
          .ex-dot { transform: none !important; }
          .ex-line { left: 20px; transform: none; }
          .ex-personal-projects { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section ref={secRef} className="w-full px-5 py-4" style={{ maxWidth: 1050, margin: "0 auto" }}>

        {/* Heading */}
        <div className="mb-12">
          <div
            ref={pillRef}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ fontFamily: "monospace", border: "1px solid rgba(0,31,92,0.13)", background: "rgba(0,31,92,0.03)", opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">journey</span>
          </div>

          <h2
            ref={titleRef}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, color: "#0a0f2c", letterSpacing: "-0.025em", lineHeight: 1, opacity: 0 }}
          >
            Experience
          </h2>
          <p style={{ color: "rgba(10,15,44,0.42)", fontSize: "13px", marginTop: 10 }}>
            My professional journey and key learning milestones.
          </p>
        </div>

        {/* Timeline */}
        <div className="ex-timeline">
          <div ref={lineRef} className="ex-line" />

          {items.map(item =>
            item.side === "center"
              ? <PersonalCard key={item.id} item={item} />
              : <InternshipCard key={item.id} item={item} side={item.side} />
          )}
        </div>

      </section>
    </>
  );
}