import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

// ─── Skills list ──────────────────────────────────────────────────────────────
// Icons auto-load from: https://cdn.simpleicons.org/{slug}/{hex}
const SKILLS = [
  // ── Frontend ──
  { name: "HTML5",       slug: "html5",             color: "#e34f26" },
  { name: "CSS3",        slug: "css3",               color: "#1572b6" },
  { name: "JavaScript",  slug: "javascript",         color: "#f7df1e" },
  { name: "TypeScript",  slug: "typescript",         color: "#3178c6" },
  { name: "React",       slug: "react",              color: "#61dafb" },
  { name: "Next.js",     slug: "nextdotjs",          color: "#000000" },
  { name: "Vue.js",      slug: "vuedotjs",           color: "#4FC08D" },
  { name: "Vite",        slug: "vite",               color: "#646cff" },
  { name: "Redux",       slug: "redux",              color: "#764abc" },
  { name: "Tailwind",    slug: "tailwindcss",        color: "#06b6d4" },
  { name: "Bootstrap",   slug: "bootstrap",          color: "#7952b3" },
  { name: "Chakra UI",   slug: "chakraui",           color: "#319795" },
  { name: "Sass",        slug: "sass",               color: "#cc6699" },
  { name: "GSAP",        slug: "greensock",          color: "#88ce02" },
  { name: "Three.js",    slug: "threedotjs",         color: "#049ef4" },
  { name: "Chart.js",    slug: "chartdotjs",         color: "#ff6384" },
  { name: "WebGL",       slug: "webgl",              color: "#990000" },
  // ── Backend ──
  { name: "Node.js",     slug: "nodedotjs",          color: "#339933" },
  { name: "Express.js",  slug: "express",            color: "#404040" },
  { name: "PHP",         slug: "php",                color: "#777bb4" },
  { name: "Java",        slug: "openjdk",            color: "#437291" },
  { name: "C",           slug: "c",                  color: "#a8b9cc" },
  { name: "C++",         slug: "cplusplus",          color: "#00599c" },
  { name: "Socket.io",   slug: "socketdotio",        color: "#010101" },
  { name: "JWT",         slug: "jsonwebtokens",      color: "#d63aff" },
  { name: "Nodemon",     slug: "nodemon",            color: "#76d04b" },
  { name: "Web3.js",     slug: "web3dotjs",          color: "#f16822" },
  // ── Database ──
  { name: "MongoDB",     slug: "mongodb",            color: "#47a248" },
  { name: "MySQL",       slug: "mysql",              color: "#4479a1" },
  { name: "Firebase",    slug: "firebase",           color: "#ffca28" },
  { name: "SQLite",      slug: "sqlite",             color: "#003b57" },
  { name: "Supabase",    slug: "supabase",           color: "#3ecf8e" },
  // ── DevOps / Tools ──
  { name: "Docker",      slug: "docker",             color: "#2496ed" },
  { name: "Git",         slug: "git",                color: "#f05032" },
  { name: "GitHub",      slug: "github",             color: "#181717" },
  { name: "Postman",     slug: "postman",            color: "#ff6c37" },
  { name: "Figma",       slug: "figma",              color: "#f24e1e" },
  { name: "Power BI",    slug: "powerbi",            color: "#f2c811" },
  { name: "Vercel",      slug: "vercel",             color: "#000000" },
  { name: "Netlify",     slug: "netlify",            color: "#00c7b7" },
];

// ─── Three.js floating brand-colored dots bg ─────────────────────────────────
function SkillsBg() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const W = el.offsetWidth, H = el.offsetHeight;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0, 0);
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, W, H, 0, -1, 1);

    const COUNT  = 38;
    const dots   = [];
    const colors = SKILLS.map(s => s.color);
    for (let i = 0; i < COUNT; i++) {
      const c    = new THREE.Color(colors[i % colors.length]);
      const geo  = new THREE.CircleGeometry(2 + Math.random() * 3, 8);
      const mat  = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.13 + Math.random() * 0.1 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(Math.random() * W, Math.random() * H, 0);
      mesh.userData = { vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35 };
      scene.add(mesh);
      dots.push(mesh);
    }

    const ro = new ResizeObserver(() => {
      const w = el.offsetWidth, h = el.offsetHeight;
      renderer.setSize(w, h);
      camera.right = w; camera.top = h;
      camera.updateProjectionMatrix();
    });
    ro.observe(el);

    let raf;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      dots.forEach(d => {
        d.position.x += d.userData.vx;
        d.position.y += d.userData.vy;
        if (d.position.x < -10 || d.position.x > el.offsetWidth  + 10) d.userData.vx *= -1;
        if (d.position.y < -10 || d.position.y > el.offsetHeight + 10) d.userData.vy *= -1;
      });
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);
  return <div ref={ref} className="absolute inset-0" style={{ zIndex: 0 }} />;
}

// ─── Main Skills Component ────────────────────────────────────────────────────
export default function Skills() {
  const secRef  = useRef(null);
  const headRef = useRef(null);
  const gridRef = useRef(null);
  const t1Ref   = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading fade in
      gsap.fromTo(headRef.current,
        { y: 28, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: headRef.current, start: "top 86%", toggleActions: "play none none none" },
        }
      );

      // Cards stagger in
      const cards = gridRef.current?.querySelectorAll(".sk-card");
      if (cards?.length) {
        gsap.fromTo(cards,
          { y: 40, opacity: 0, scale: 0.88 },
          {
            y: 0, opacity: 1, scale: 1,
            stagger: { each: 0.04, from: "random" },
            duration: 0.6,
            ease: "back.out(1.4)",
            scrollTrigger: { trigger: gridRef.current, start: "top 85%", toggleActions: "play none none none" },
          }
        );

        // Continuous idle float per card
        cards.forEach((card, i) => {
          gsap.to(card, {
            y: `+=${4 + (i % 3) * 2}`,
            duration: 1.8 + (i % 5) * 0.4,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: i * 0.12,
          });
        });
      }
    }, secRef);

    return () => ctx.revert();
  }, []);

  // 3D tilt on hover
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    gsap.to(card, {
      rotateY: x * 14, rotateX: -y * 14, scale: 1.08,
      duration: 0.3, ease: "power2.out", transformPerspective: 600,
    });
  };
  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateY: 0, rotateX: 0, scale: 1,
      duration: 0.5, ease: "elastic.out(1, 0.5)",
    });
  };

  return (
    <>
      <style>{`

        .sk-tag {
          font-size: 10.5px; letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(0,31,92,0.45); display: flex; align-items: center; gap: 6px; margin-bottom: 6px;
        }
        .sk-tag::before {
          content: ''; display: inline-block;
          width: 18px; height: 1.5px; background: #001f5c; opacity: 0.35;
        }
        .sk-title {
          font-size: clamp(1.9rem, 4vw, 2.8rem); font-weight: 900;
          color: #0a0f2c; letter-spacing: -0.025em; line-height: 1;
        }
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(82px, 1fr));
          gap: 12px;
        }
        .sk-card {
          display: flex; flex-direction: column; align-items: center; gap: 8px;
          padding: 16px 8px 12px; border-radius: 16px;
          border: 1.5px solid rgba(0,31,92,0.07);
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(8px);
          cursor: default; will-change: transform;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .sk-card:hover {
          border-color: var(--ic);
          box-shadow: 0 6px 24px color-mix(in srgb, var(--ic) 20%, transparent);
        }
        .sk-icon-wrap {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          background: color-mix(in srgb, var(--ic) 10%, transparent);
          transition: background 0.2s;
        }
        .sk-card:hover .sk-icon-wrap {
          background: color-mix(in srgb, var(--ic) 18%, transparent);
        }
        .sk-icon-wrap img {
          width: 26px; height: 26px;
          object-fit: contain;
          transition: transform 0.2s;
          display: block;
        }
        .sk-card:hover .sk-icon-wrap img { transform: scale(1.12); }
        .sk-name {
          font-size: 9.5px; color: rgba(10,15,44,0.45);
          text-align: center; line-height: 1.3; transition: color 0.2s;
        }
        .sk-card:hover .sk-name { color: rgba(10,15,44,0.75); }

        @media (max-width: 480px) {
          .sk-grid { grid-template-columns: repeat(auto-fill, minmax(70px, 1fr)) !important; gap: 8px !important; }
        }
      `}</style>

      <section
        ref={secRef}
        className="w-full px-5 py-4 relative"
        style={{ fontFamily: "'DM Sans', sans-serif", maxWidth: 1100, margin: "0 auto" }}
      >
        {/* Three.js floating dots */}
        <SkillsBg />

        <div style={{ position: "relative", zIndex: 1 }}>
          {/* Heading */}
          <div ref={headRef} className="mb-8" style={{ opacity: 0 }}>
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
                My Skills
              </span>
            </div>            <h2 className="sk-title">Skills &amp; Tech</h2>
          </div>

          {/* Skills grid — real icons from cdn.simpleicons.org */}
          <div ref={gridRef} className="sk-grid">
            {SKILLS.map((s) => {
              const hex     = s.color.replace("#", "");
              const iconUrl = `https://cdn.simpleicons.org/${s.slug}/${hex}`;
              return (
                <div
                  key={s.name}
                  className="sk-card"
                  style={{ "--ic": s.color }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="sk-icon-wrap">
                    <img
                      src={iconUrl}
                      alt={s.name}
                      width={26}
                      height={26}
                      loading="lazy"
                      onError={(e) => { e.currentTarget.style.opacity = "0.25"; }}
                    />
                  </div>
                  <span className="sk-name">{s.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}