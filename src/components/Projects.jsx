import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1, title: "EventFlow",
    desc: "Manage and share events with authentication, RSVP, and real-time updates.",
    tags: ["React", "TypeScript", "Supabase", "Tailwind"],
    img: "/event-project.png",
    github: "https://github.com/malik-tanveer/event-spark-80",
    live: "https://event-spark-80.lovable.app",
  },
  {
    id: 2, title: "Expense Tracker",
    desc: "Track expenses, manage budgets, and visualize spending with a clean interface.",
    tags: ["React", "TypeScript", "Firebase", "Chart.js"],
    img: "/expense-project.png",
    github: "https://github.com/malik-tanveer/Expense-tracker-app",
    live: "https://expense-tracker-b28ca.web.app/",
  },
  {
    id: 3, title: "Freelance Manager",
    desc: "Manage projects, clients, and payments with a clean dashboard interface.",
    tags: ["React", "TypeScript", "Firebase", "Firestore"],
    img: "/freelance-project.png",
    github: "https://github.com/malik-tanveer/Freelance_Project_Manager/",
    live: "https://freelance-project-manage-c1.web.app/",
  },
  {
    id: 4, title: "VidSnap",
    desc: "Full-stack video downloader paste a URL and download from YouTube, Instagram, Facebook.",
    tags: ["Vue.js", "Vuetify", "Express.js", "yt-dlp"],
    img: "/yt-project.png",
    github: "https://github.com/malik-tanveer/yt-downloader",
    live: "",
  },
  {
    id: 5, title: "MT Quran",
    desc: "Read Surahs, explore Paras, and check daily prayer times with a clean Quran API.",
    tags: ["React", "TypeScript", "Tailwind", "Quran API"],
    img: "/mt-quran.png",
    github: "https://github.com/malik-tanveer/Web-Ramdan",
    live: "https://web-ramdan.vercel.app/",
  },
  {
    id: 6, title: "Movie App",
    desc: "Discover and search movies and dramas using the TMDB API.",
    tags: ["React", "TypeScript", "Tailwind", "TMDB API"],
    img: "/movie-project.png",
    github: "https://github.com/malik-tanveer/Movie",
    live: "https://movie-six-sand.vercel.app/",
  },
  {
    id: 7, title: "Apartment Website",
    desc: "Luxury apartment website with floor plans, amenities, and booking features.",
    tags: ["React", "Tailwind", "AOS", "EmailJS"],
    img: "",
    github: "https://github.com/malik-tanveer/Apartment-Website",
    live: "",
  },
  {
    id: 8, title: "MT-Mart",
    desc: "Full-stack ecommerce with product listings, cart, and Supabase backend.",
    tags: ["React", "Tailwind", "Node.js", "Supabase"],
    img: "",
    github: "https://github.com/malik-tanveer/mt-mart",
    live: "",
  },
  {
    id: 9, title: "Portfolio",
    desc: "This portfolio Three.js 3D background, GSAP scroll animations, clean minimal design.",
    tags: ["React", "Three.js", "GSAP", "Tailwind"],
    img: "",
    github: "https://github.com/malik-tanveer/Portfolio",
    live: "https://tanveer-49ddc.web.app/",
  },
  {
    id: 10, title: "Weather App",
    desc: "Live weather dashboard with 7-day forecast and location search.",
    tags: ["React", "TypeScript", "Tailwind", "OpenWeather API"],
    img: "/weather-project.png",
    github: "https://github.com/malik-tanveer/weather-app",
    live: "https://weather-app-aykays.vercel.app/",
  },
  {
    id: 11, title: "Trading Coins",
    desc: "Crypto dashboard to track coin prices and market trends via CoinGecko API.",
    tags: ["React", "TypeScript", "Tailwind", "CoinGecko API"],
    img: "",
    github: "https://github.com/malik-tanveer/CryptoView",
    live: "https://crypto-view-ruddy.vercel.app/",
  },
  {
    id: 12, title: "FutureStack",
    desc: "Free project-based learning platform for full-stack, DSA, and Python automation.",
    tags: ["React", "TypeScript", "Tailwind", "Express.js"],
    img: "",
    github: "https://github.com/malik-tanveer/MERN_Stack_Project",
    live: "https://mern-stack-project-mu-three.vercel.app/",
  },
];

const INITIAL = 6;

function Card({ p, i }) {
  const ref      = useRef(null);
  const overlayR = useRef(null);
  const imgR     = useRef(null);
  const [hov, setHov] = useState(false);

  useEffect(() => {
    gsap.fromTo(ref.current,
      { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", toggleActions: "play none none none" } }
    );
  }, []);

  const enter = () => {
    setHov(true);
    gsap.to(overlayR.current, { opacity: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(imgR.current,     { scale: 1.06, duration: 0.45, ease: "power2.out" });
    gsap.to(ref.current,      { y: -4, duration: 0.25 });
  };
  const leave = () => {
    setHov(false);
    gsap.to(overlayR.current, { opacity: 0, duration: 0.25 });
    gsap.to(imgR.current,     { scale: 1, duration: 0.35 });
    gsap.to(ref.current,      { y: 0, duration: 0.25 });
  };

  const hasImg = p.img && p.img !== "#";

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-[#001f5c]/8 bg-white overflow-hidden cursor-pointer transition-all duration-200 hover:border-[#001f5c]/20 hover:shadow-xl"
      style={{ opacity: 0 }}
      onMouseEnter={enter}
      onMouseLeave={leave}
    >
      {/* Image area */}
      <div className="relative w-full overflow-hidden bg-[#001f5c]/4" style={{ aspectRatio: "16/10" }}>
        {hasImg ? (
          <img
            ref={imgR}
            src={p.img}
            alt={p.title}
            className="w-full h-full object-cover block"
            loading="eager"
          />
        ) : (
          <div ref={imgR} className="w-full h-full flex items-center justify-center">
            <span className="text-3xl font-black text-[#001f5c]/10 tracking-tighter select-none">
              {p.title}
            </span>
          </div>
        )}

        {/* Overlay */}
        <div
          ref={overlayR}
          className="absolute inset-0 flex flex-col justify-end p-4 gap-2"
          style={{ opacity: 0, background: "rgba(6,10,30,0.86)" }}
        >
          <p className="text-white text-[12.5px] leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map(t => (
              <span key={t} className="text-[10px] px-2.5 py-0.5 rounded-full border border-white/20 text-white">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 flex items-center justify-between gap-2">
        <h3 className="text-[0.95rem] font-bold text-[#0a0f2c] tracking-tight">{p.title}</h3>
        <div className="flex gap-1.5 flex-shrink-0">
          {p.github && (
            <a href={p.github} target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: hov ? "#001f5c" : "rgba(0,31,92,0.06)", color: hov ? "#fff" : "#001f5c" }}
              onClick={e => e.stopPropagation()}>
              <Github size={13} />
            </a>
          )}
          {p.live && p.live !== "#" && (
            <a href={p.live} target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: hov ? "#001f5c" : "rgba(0,31,92,0.06)", color: hov ? "#fff" : "#001f5c" }}
              onClick={e => e.stopPropagation()}>
              <ExternalLink size={13} />
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
  const btnRef   = useRef(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(pillRef.current, { y: -16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out",
          scrollTrigger: { trigger: pillRef.current, start: "top 88%", toggleActions: "play none none none" } });
      gsap.fromTo(titleRef.current, { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%", toggleActions: "play none none none" } });
    }, secRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => { ScrollTrigger.refresh(); }, [showAll]);

  const toggle = () => {
    if (showAll) {
      setShowAll(false);
      setTimeout(() => secRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } else {
      setShowAll(true);
      gsap.fromTo(btnRef.current, { scale: 0.92 }, { scale: 1, duration: 0.4, ease: "back.out(2)" });
    }
  };

  return (
    <section ref={secRef} className="w-full px-5 py-4 max-w-[1100px] mx-auto">

      {/* Heading */}
      <div className="mb-10">
        <div ref={pillRef} className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono" style={{ opacity: 0 }}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
          <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">my work</span>
        </div>
        <h2 ref={titleRef} className="text-[#0a0f2c] font-black leading-none"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", letterSpacing: "-.025em", opacity: 0 }}>
          Projects
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1 max-lg:grid-cols-2">
        {visible.map((p, i) => <Card key={p.id} p={p} i={i} />)}
      </div>

      {/* Show more btn */}
      <div className="flex justify-center mt-10">
        <button
          ref={btnRef}
          onClick={toggle}
          className="group flex items-center gap-2 px-8 py-3 rounded-2xl border-2 border-[#001f5c]/15 bg-white text-[#001f5c] text-[13px] font-semibold transition-all duration-300 hover:bg-[#001f5c] hover:text-white hover:border-[#001f5c] hover:shadow-2xl hover:-translate-y-1 active:scale-95"
        >
          {showAll ? (
            <><ChevronUp size={15} className="transition-transform group-hover:-translate-y-0.5" /> Show Less</>
          ) : (
            <><span>Show {PROJECTS.length - INITIAL} More</span><ChevronDown size={15} className="transition-transform group-hover:translate-y-0.5" /></>
          )}
        </button>
      </div>

    </section>
  );
}