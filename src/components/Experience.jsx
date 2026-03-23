import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const C = { navy: "#001f5c", dim: "rgba(0,31,92,0.08)", text: "#0a0f2c", muted: "rgba(10,15,44,0.45)" };

const INTERNSHIPS = [
  {
    side: "left",
    company: "Skytech",
    role: "Frontend Developer Intern",
    period: "Dec 2024 – Feb 2025",
    desc: "Worked on real client projects using React, Tailwind, and Bootstrap. Learned team workflows, component architecture, and responsive design.",
    projects: [
      { name: "SkyMart", desc: "E-commerce UI with cart, filters, and search." },
      { name: "Apartment Management System", desc: "Portal for managing tenant and rental data." },
      { name: "Skytech Company Website", desc: "Responsive landing page for company services." },
    ],
  },
  {
    side: "right",
    company: "Aykays Digital Agency",
    role: "Frontend Developer Intern",
    period: "Aug 2025 – Oct 2025",
    desc: "3-month internship building real products with React, Firebase, and Firestore. Structured workflow, clean code, and mentorship from the founder.",
    projects: [
      { name: "Smart Study Planner", desc: "Task scheduling and analytics — Firebase, Chart.js." },
      { name: "ExpenseInsight", desc: "Finance dashboard with category tracking and reports." },
      { name: "ProjectFlow", desc: "Freelance project manager with Firestore persistence." },
      { name: "EventSphere", desc: "Event planning with reminders and participant tracking." },
      { name: "Study Planner & Focus Tracker", desc: "Student productivity with calendar and focus tracking." },
    ],
  },
  {
    side: "left",
    company: "Personal Projects",
    role: "MERN Stack & Full Stack Developer",
    period: "Oct 2025 – Present",
    desc: "Building full-stack products with React, Next.js, Node.js, and Supabase. Focused on shipping real, complete things.",
    projects: [
      { name: "LMS Platform", desc: "Full-stack LMS with auth, course modules, and dashboard." },
      { name: "VidSnap", desc: "Video downloader — Vue.js + Express + yt-dlp." },
      { name: "MT-Mart", desc: "Ecommerce platform — React, Tailwind, Supabase." },
      { name: "Portfolio", desc: "This site — React, Three.js, GSAP." },
    ],
  }
];
function ICard({ item }) {
  const cardRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const st = { trigger: cardRef.current, start: "top 88%", toggleActions: "play none none none" };
    gsap.fromTo(dotRef.current, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2.5)", scrollTrigger: st });
    gsap.fromTo(cardRef.current, { x: item.side === "left" ? -55 : 55, opacity: 0 }, { x: 0, opacity: 1, duration: 0.75, ease: "power3.out", scrollTrigger: st });
  }, []);

  return (
    <div className={`ex-row ex-${item.side}`}>
      <div className="ex-half" />
      <div className="ex-dot-col">
        <div ref={dotRef} className="ex-dot" style={{ opacity: 0 }} />
      </div>
      <div className="ex-half">
        <div ref={cardRef} className="ex-card" style={{ opacity: 0 }}>
          <div className="ex-top">
            <span className="ex-period">{item.period}</span>
          </div>
          <h3 className="ex-company">{item.company}</h3>
          <p className="ex-role">{item.role}</p>
          <div className="ex-hr" />
          <p className="ex-desc">{item.desc}</p>
          <ul className="ex-list">
            {item.projects.map(p => (
              <li key={p.name} className="ex-item">
                <span className="ex-bull" />
                <span><b className="ex-pn">{p.name}</b><span className="ex-pd"> — {p.desc}</span></span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const secRef = useRef(null);
  const pillRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = (el, y = 0, x = 0) => gsap.fromTo(el,
        { y, x, opacity: 0 },
        {
          y: 0, x: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" }
        }
      );
      st(pillRef.current, -16);
      st(titleRef.current, 28);
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1, ease: "none",
          scrollTrigger: { trigger: lineRef.current, start: "top 75%", end: "80% 25%", scrub: 1 }
        }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        .ex-timeline { position: relative; display: flex; flex-direction: column; }
        .ex-line {
          position: absolute; left: 50%; transform: translateX(-50%);
          top: 0; width: 1.5px; height: 66%;
          background: linear-gradient(to bottom, #001f5c, rgba(0,31,92,0.1));
          border-radius: 2px; z-index: 0;
        }
        .ex-row { display: flex; align-items: flex-start; padding: 20px 0; position: relative; }
        .ex-right { flex-direction: row-reverse; }
        .ex-half { flex: 1; padding: 0 26px; }
        .ex-dot-col { position: relative; z-index: 2; display: flex; justify-content: center; padding-top: 20px; width: 0; }
        .ex-dot {
          width: 13px; height: 13px; border-radius: 50%;
          background: #001f5c; transform: translateX(-50%);
          box-shadow: 0 0 0 4px #fff, 0 0 0 5.5px rgba(0,31,92,0.3);
          flex-shrink: 0;
        }
        .ex-card {
          border-radius: 16px;
          border: 1.5px solid rgba(0,31,92,0.08);
          background: rgba(255,255,255,0.82);
          backdrop-filter: blur(12px);
          padding: 20px 22px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .ex-card:hover {
          border-color: rgba(0,31,92,0.25);
          box-shadow: 0 8px 32px rgba(0,31,92,0.08);
        }
        .ex-top { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
        .ex-period { font-family: monospace; font-size: 10.5px; color: rgba(10,15,44,0.35); }
        .ex-company { font-size: 1.05rem; font-weight: 800; color: #0a0f2c; letter-spacing: -0.015em; }
        .ex-role { font-size: 11.5px; color: rgba(10,15,44,0.42); margin-top: 2px; }
        .ex-hr { height: 1px; margin: 12px 0; background: rgba(0,31,92,0.07); }
        .ex-desc { font-size: 12.5px; color: rgba(10,15,44,0.50); line-height: 1.65; margin-bottom: 12px; }
        .ex-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 7px; }
        .ex-item { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; line-height: 1.55; }
        .ex-bull { width: 4px; height: 4px; border-radius: 50%; background: #001f5c; flex-shrink: 0; margin-top: 6px; opacity: 0.5; }
        .ex-pn { font-weight: 600; color: #0a0f2c; }
        .ex-pd { color: rgba(10,15,44,0.45); }
        .ex-cert {
          display: inline-flex; align-items: center; gap: 5px; margin-top: 13px;
          padding: 5px 11px; border-radius: 7px; font-family: monospace; font-size: 9.5px;
          color: #001f5c; background: rgba(0,31,92,0.05); border: 1px solid rgba(0,31,92,0.15);
          text-decoration: none; transition: background 0.18s;
        }
        .ex-cert:hover { background: rgba(0,31,92,0.10); }
        .ex-cert-id { color: rgba(0,31,92,0.35); font-size: 8.5px; }
        .ex-pitem {
          padding: 10px 12px; border-radius: 10px;
          border: 1px solid rgba(0,31,92,0.08); background: rgba(0,31,92,0.03);
        }

        @media (max-width: 700px) {
          .ex-row, .ex-right { flex-direction: column !important; align-items: center !important; }
          .ex-half { padding: 0 !important; width: 100% !important; }
          .ex-dot-col { width: auto !important; padding-top: 0 !important; margin-bottom: 10px; }
          .ex-dot { transform: none !important; }
          .ex-line { left: 16px; transform: none; }
          .ex-pgrid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <section ref={secRef} className="w-full px-5 py-4" style={{ maxWidth: 1050, margin: "0 auto" }}>
        <div className="mb-12">
          <div ref={pillRef} className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ fontFamily: "monospace", border: "1px solid rgba(0,31,92,0.13)", background: "rgba(0,31,92,0.03)", opacity: 0 }}>
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">journey</span>
          </div>
          <h2 ref={titleRef} style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, color: "#0a0f2c", letterSpacing: "-0.025em", lineHeight: 1, opacity: 0 }}>
            Experience
          </h2>
          <p style={{ color: "rgba(10,15,44,0.42)", fontSize: "13px", marginTop: 10 }}>
            My professional journey and key learning milestones.
          </p>
        </div>

        <div className="ex-timeline">
          <div ref={lineRef} className="ex-line" />
          {INTERNSHIPS.map(item => <ICard key={item.company} item={item} />)}
        </div>
      </section>
    </>
  );
}