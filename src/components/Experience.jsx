import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DATA = [
  {
    side: "left",
    company: "Skytech",
    role: "Frontend Developer Intern",
    period: "Jan 2025 – Feb 2025",
    para: "Worked at Skytech as a Frontend Developer Intern. Built an apartment website and an e-commerce platform. Collaborated with a team and focused on creating clean, responsive, and user-friendly interfaces. Gained hands-on experience and improved real-world development skills.",
  },
  {
    side: "right",
    company: "Aykays Digital Agency",
    role: "Frontend Developer Intern",
    period: "Aug 2025 – Oct 2025",
    para: "Worked at Aykays Digital Agency as a Frontend Developer Intern. Built modern web interfaces using React, TypeScript, Firebase, and Tailwind CSS. Focused on responsive design, smooth user experience, and performance. Collaborated with the team, followed real-world workflows, and deployed projects on Vercel.",
  },
  {
    side: "left",
    company: "Self Projects",
    role: "Full Stack & Frontend Developer",
    period: "Mar 2025 – Present",
    para: "Working on personal projects across MERN stack and modern frontend technologies. Built apps like MT-Mart using React, Express.js, and Tailwind CSS. Also worked with Next.js, Vue.js, Three.js, and Chart.js — focusing on responsive UI and real-world applications.",
  },
];

function Card({ item }) {
  const cardRef = useRef(null);
  const dotRef  = useRef(null);

  useEffect(() => {
    const st = { trigger: cardRef.current, start: "top 88%", toggleActions: "play none none none" };
    gsap.fromTo(dotRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(2.5)", scrollTrigger: st }
    );
    gsap.fromTo(cardRef.current,
      { x: item.side === "left" ? -55 : 55, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.75, ease: "power3.out", scrollTrigger: st }
    );
  }, []);

  const isRight = item.side === "right";

  return (
    <div className={`flex items-start py-5 ${isRight ? "flex-row-reverse" : ""}`}>
      {/* spacer */}
      <div className="flex-1 px-6" />

      {/* dot */}
      <div className="flex justify-center pt-5 w-0 z-10">
        <div
          ref={dotRef}
          className="w-3 h-3 rounded-full bg-[#001f5c] flex-shrink-0"
          style={{ transform: "translateX(-50%)", boxShadow: "0 0 0 3px #fff, 0 0 0 5px rgba(0,31,92,0.2)", opacity: 0 }}
        />
      </div>

      {/* card */}
      <div className="flex-1 px-6">
        <div
          ref={cardRef}
          className="rounded-2xl border border-[#001f5c]/10 bg-white/90 p-5 hover:border-[#001f5c]/25 hover:shadow-lg transition-all duration-200"
          style={{ opacity: 0 }}
        >
          <h3 className="text-[1.05rem] font-extrabold text-[#0a0f2c] tracking-tight">
            {item.company}
          </h3>

          <div className="flex items-center gap-1.5 mt-1 text-[10.5px] text-[#0a0f2c]/40 font-mono">
            <Calendar size={11} strokeWidth={1.8} />
            {item.period}
          </div>

          <div className="flex items-center gap-1.5 mt-1 text-[11.5px] text-[#0a0f2c]/42">
            <Briefcase size={11} strokeWidth={1.8} />
            {item.role}
          </div>

          <div className="h-px bg-[#001f5c]/7 my-3" />

          <p className="text-[13px] text-[#0a0f2c]/52 leading-relaxed">
            {item.para}
          </p>
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      const anim = (el, y = 0) => gsap.fromTo(el,
        { y, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", toggleActions: "play none none none" } }
      );
      anim(pillRef.current, -16);
      anim(titleRef.current, 28);
      gsap.fromTo(lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, ease: "none",
          scrollTrigger: { trigger: lineRef.current, start: "top 75%", end: "bottom 25%", scrub: 1 } }
      );
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} className="w-full px-5 py-4 max-w-[1050px] mx-auto">

      {/* Heading */}
      <div className="mb-12">
        <div
          ref={pillRef}
          className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
          <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">my journey</span>
        </div>

        <h2
          ref={titleRef}
          className="text-[#0a0f2c] font-black leading-none"
          style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.9rem,4vw,2.8rem)", letterSpacing: "-.025em", opacity: 0 }}
        >
          Experience
        </h2>
        <p className="text-[#0a0f2c]/42 text-[13px] mt-2.5">
          My professional journey and key learning milestones.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative flex flex-col">

        {/* vertical line */}
        <div
          ref={lineRef}
          className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
          style={{ background: "linear-gradient(to bottom, #001f5c, rgba(0,31,92,0.05))" }}
        />

        {DATA.map(item => <Card key={item.company} item={item} />)}
      </div>

    </section>
  );
}