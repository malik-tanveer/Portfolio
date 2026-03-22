import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: "Apartment Website",
    desc: "A modern luxury apartment website showcasing floor plans, amenities, and booking features with smooth animations.",
    tags: ["React", "Tailwind", "AOS", "EmailJS"],
    img: "/apartment-project.png",
    color: "#0ea5e9",
    github: "https://github.com/malik-tanveer/Apartment-Website",
    live: "#", // placeholder
  },
  {
    title: "EventFlow",
    desc: "Manage and share your events with authentication, RSVP, and real-time updates. Built with React, TypeScript, Supabase, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Authentication"],
    img: "/event-project.png",
    color: "#f43f5e",
    github: "https://github.com/malik-tanveer/event-spark-80",
    live: "https://event-spark-80.lovable.app",
  },
  {
    title: "Expense Tracker",
    desc: "Track expenses, manage budgets, and visualize spending with a clean and modern interface.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Firestore", "Chart.js"],
    img: "/expense-project.png",
    color: "#14b8a6",
    github: "https://github.com/malik-tanveer/Expense-tracker-app",
    live: "https://expense-tracker-b28ca.web.app/",
  },
  {
    title: "Freelance Manager",
    desc: "Manage your projects, clients, and payments efficiently with a clean dashboard interface.",
    tags: ["React", "TypeScript", "Tailwind", "Firebase", "Firestore"],
    img: "/freelance-project.png",
    color: "#f59e0b",
    github: "https://github.com/malik-tanveer/Freelance_Project_Manager/",
    live: "https://freelance-project-manage-c1.web.app/",
  },
  {
    title: "MT Quran",
    desc: "A modern Quran web app to read Surahs, explore Paras, and check daily prayer times using a reliable Quran API. Built with React, TypeScript, and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind", "Quran API"],
    img: "/mt-quran.png",
    color: "#6366f1",
    github: "https://github.com/malik-tanveer/Web-Ramdan",
    live: "https://web-ramdan.vercel.app/",
  },
  {
    title: "Movie App",
    desc: "A modern movie discovery app to search and explore movies and dramas using the TMDB API. Built with React, TypeScript, and Tailwind CSS for a smooth experience.",
    tags: ["React", "TypeScript", "Tailwind", "TMDB API"],
    img: "/movie-project.png",
    color: "#ef4444",
    github: "https://github.com/malik-tanveer/Movie",
    live: "https://movie-six-sand.vercel.app/",
  },
  {
    title: "VidSnap",
    desc: "A full-stack video downloader that lets users download videos from YouTube, Instagram, and Facebook by pasting a URL, built with Vue.js, Vuetify, and Express.js using yt-dlp.",
    tags: ["Vue.js", "Vuetify", "Express.js", "yt-dlp"],
    img: "/yt-project.png",
    color: "#3b82f6",
    github: "https://github.com/malik-tanveer/yt-downloader",
    live: "#",
  },
  {
    title: "MT-Mart",
    desc: "Full-stack ecommerce platform with product listings, cart, and Supabase backend. Clean React frontend with Tailwind CSS.",
    tags: ["React", "Tailwind", "Node.js", "Supabase"],
    img: "#",
    color: "#10b981",
    github: "https://github.com/malik-tanveer/mt-mart",
    live: "#",
  },
  {
    title: "Portfolio",
    desc: "This portfolio React, Three.js, and GSAP. Interactive 3D background, smooth scroll animations, and a clean minimal design.",
    tags: ["React", "Three.js", "GSAP", "Tailwind", "Firebase"],
    img: "#",
    color: "#8b5cf6",
    github: "https://github.com/malik-tanveer/Portfolio",
    live: "#",
  },
  {
    title: "Weather App",
    desc: "Weather dashboard with live data, 7-day forecast, and location search. OpenWeather API + React with clean card UI.",
    tags: ["React", "Tailwind","AOS","TypeScript", "OpenWeather API"],
    img: "/weather-project.png",
    color: "#06b6d4",
    github: "https://github.com/malik-tanveer/weather-app",
    live: "https://weather-app-aykays.vercel.app/",
  },
  {
    title: "Trading Coins App",
    desc: "A crypto dashboard to track coin prices, market trends, and real-time data using the CoinGecko API.",
    tags: ["React", "TypeScript", "Tailwind", "CoinGecko API"],
    img: "#",
    color: "#22c55e",
    github: "https://github.com/malik-tanveer/CryptoView",
    live: "https://crypto-view-ruddy.vercel.app/",
  },
  {
    title: "FutureStack",
    desc: "A free project-based learning platform for full-stack development, DSA, and Python automation. Learn through hands-on projects with React, TypeScript, Tailwind, and Express.js.",
    tags: ["React", "TypeScript", "Tailwind", "Express.js", "YouTube API"],
    img: "#",
    color: "#facc15",
    github: "https://github.com/malik-tanveer/MERN_Stack_Project",
    live: "https://mern-stack-project-mu-three.vercel.app/",
  }
];

const INITIAL_SHOW = 6;

function ProjectCard({ project, index, visible }) {
  const cardRef    = useRef(null);
  const overlayRef = useRef(null);
  const imgRef     = useRef(null);
  const [hovered, setHovered] = useState(false);

  // scroll entrance — alternates left/right
  useEffect(() => {
    if (!visible) return;
    const fromX = index % 2 === 0 ? -60 : 60;
    gsap.fromTo(cardRef.current,
      { x: fromX, opacity: 0, scale: 0.95 },
      {
        x: 0, opacity: 1, scale: 1,
        duration: 0.75,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [visible]);

  const onEnter = () => {
    setHovered(true);
    gsap.to(overlayRef.current, { opacity: 1, duration: 0.32, ease: "power2.out" });
    gsap.to(imgRef.current,     { scale: 1.07, duration: 0.5, ease: "power2.out" });
    gsap.to(cardRef.current,    { y: -5, duration: 0.3, ease: "power2.out" });
  };
  const onLeave = () => {
    setHovered(false);
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.28, ease: "power2.in" });
    gsap.to(imgRef.current,     { scale: 1, duration: 0.4, ease: "power2.out" });
    gsap.to(cardRef.current,    { y: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <div
      ref={cardRef}
      className="pj-card"
      style={{ "--pc": project.color, opacity: 0 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="pj-img-wrap">
        <img
          ref={imgRef}
          src={project.img}
          alt={project.title}
          className="pj-img"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.style.background =
              `linear-gradient(135deg, ${project.color}14, ${project.color}28)`;
          }}
        />

        {/* Hover overlay */}
        <div ref={overlayRef} className="pj-overlay" style={{ opacity: 0 }}>
          <p className="pj-desc">{project.desc}</p>
          <div className="pj-tags">
            {project.tags.map(t => (
              <span key={t} className="pj-tag" style={{ borderColor: `${project.color}60`, color: project.color }}>
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="pj-footer">
        <div className="pj-info">
          {/* <span className="pj-num" style={{ color: `${project.color}70` }}>0{project.id}</span> */}
          <h3 className="pj-title">{project.title}</h3>
        </div>

        {/* Links */}
        <div className="pj-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="pj-link-btn"
              style={{ background: hovered ? project.color : "rgba(0,31,92,0.06)", color: hovered ? "#fff" : "#001f5c" }}
              title="GitHub"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="pj-link-btn"
              style={{ background: hovered ? project.color : "rgba(0,31,92,0.06)", color: hovered ? "#fff" : "#001f5c" }}
              title="Live"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const secRef   = useRef(null);
  const pillRef  = useRef(null);
  const titleRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visible   = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_SHOW);
  const remaining = PROJECTS.length - INITIAL_SHOW;

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
    }, secRef);
    return () => ctx.revert();
  }, []);

  // refresh ScrollTrigger when more cards shown
  useEffect(() => {
    ScrollTrigger.refresh();
  }, [showAll]);

  return (
    <>
      <style>{`
        .pj-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .pj-card {
          border-radius: 20px;
          border: 1.5px solid rgba(0,31,92,0.07);
          background: rgba(255,255,255,0.80);
          backdrop-filter: blur(10px);
          overflow: hidden;
          cursor: pointer;
          transition: border-color 0.25s, box-shadow 0.25s;
        }
        .pj-card:hover { border-color: var(--pc); box-shadow: 0 16px 48px rgba(0,0,0,0.08); }

        .pj-img-wrap {
          position: relative; width: 100%;
          aspect-ratio: 16/10; overflow: hidden;
          background: rgba(0,31,92,0.04);
        }
        .pj-img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .pj-overlay {
          position: absolute; inset: 0;
          background: rgba(6, 10, 30, 0.84);
          backdrop-filter: blur(4px);
          display: flex; flex-direction: column;
          justify-content: flex-end;
          padding: 18px;
          gap: 10px;
        }
        .pj-desc {
          color: rgba(255,255,255,0.80);
          font-size: 12px; line-height: 1.65;
        }
        .pj-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .pj-tag {
          font-size: 10px; padding: 3px 9px;
          border-radius: 999px; border: 1px solid;
          background: rgba(255,255,255,0.05);
          letter-spacing: 0.02em;
        }
        .pj-year {
          position: absolute; top: 10px; right: 10px;
          font-family: monospace; font-size: 10px;
          color: rgba(255,255,255,0.65);
          background: rgba(0,0,0,0.32);
          backdrop-filter: blur(6px);
          padding: 3px 8px; border-radius: 6px;
          letter-spacing: 0.08em;
        }
        .pj-footer {
          padding: 14px 16px;
          display: flex; align-items: center; justify-content: space-between; gap: 8px;
        }
        .pj-num {
          font-family: monospace; font-size: 10px;
          letter-spacing: 0.1em; margin-bottom: 2px;
        }
        .pj-title {
          font-size: 0.95rem; font-weight: 700;
          color: #0a0f2c; letter-spacing: -0.01em;
        }
        .pj-links { display: flex; gap: 6px; flex-shrink: 0; }
        .pj-link-btn {
          width: 30px; height: 30px; border-radius: 9px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.22s, color 0.22s, transform 0.18s;
          text-decoration: none;
        }
        .pj-link-btn:hover { transform: translateY(-2px); }

        .pj-more-btn {
          display: flex; align-items: center; gap: 8px;
          margin: 36px auto 0;
          padding: 11px 28px; border-radius: 12px;
          border: 1.5px solid rgba(0,31,92,0.14);
          background: transparent; color: #001f5c;
          font-size: 13px; font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        .pj-more-btn:hover {
          background: rgba(0,31,92,0.05);
          border-color: rgba(0,31,92,0.28);
          transform: translateY(-2px);
        }

        @media (max-width: 768px)  { .pj-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 769px) and (max-width: 1024px) { .pj-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>

      <section ref={secRef} className="w-full px-5 py-4" style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Heading */}
        <div className="mb-10">
          <div
            ref={pillRef}
            className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full"
            style={{ fontFamily: "monospace", border: "1px solid rgba(0,31,92,0.13)", background: "rgba(0,31,92,0.03)", opacity: 0 }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
            <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em]">MY WORK</span>
          </div>

          <h2
            ref={titleRef}
            style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", fontWeight: 900, color: "#0a0f2c", letterSpacing: "-0.025em", lineHeight: 1, opacity: 0 }}
          >
            Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="pj-grid">
          {visible.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} visible={true} />
          ))}
        </div>

        {/* Show more / less */}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="pj-more-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? (
              <>
                Show Less
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15"/>
                </svg>
              </>
            ) : (
              <>
                Show {remaining} More
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </>
            )}
          </button>
        </div>

      </section>
    </>
  );
}