import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Cpu, Rocket, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  {
    icon: TrendingUp,
    title: "Growth-focused work",
    desc: "Every project I build is meant to grow — scalable code, clean architecture, room to expand.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable from day one",
    desc: "Two internships, real deadlines, real teams. I know how to work professionally and deliver.",
  },
  {
    icon: Cpu,
    title: "Frontend is my strength",
    desc: "React, Next.js, animations, responsive UI — this is where I spend most of my time and it shows.",
  },
  {
    icon: Rocket,
    title: "Fast and efficient",
    desc: "I don't overthink. I plan, build, and ship. Clean output, on time, every time.",
  },
  {
    icon: Users,
    title: "Easy to work with",
    desc: "Clear communication, regular updates, open to feedback. No headaches, just results.",
  },
];

export default function HireMe() {
  const secRef   = useRef(null);
  const imgRef   = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.12,
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".hm-pt",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.4,
          scrollTrigger: { trigger: rightRef.current, start: "top 82%", toggleActions: "play none none none" } }
      );
      gsap.to(imgRef.current, { y: -7, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} className="w-full px-5 py-4 max-w-[1100px] mx-auto">

      {/* Pill */}
      <div className="inline-flex items-center gap-2 mb-10 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono">
        <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
        <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">why hire me</span>
      </div>

      <div className="flex items-stretch gap-16 max-lg:flex-col">

        {/* ── Left: Image ── */}
        <div ref={imgRef} className="flex-shrink-0 flex flex-col gap-6 max-lg:items-center"
          style={{ width: "min(300px, 36vw)", opacity: 0 }}>

          {/* Photo — no border, just shadow + clip */}
          <div className="relative w-full overflow-hidden rounded-3xl shadow-2xl"
            style={{ aspectRatio: "3/4" }}>
            <img
              src="/cc1.png"
              alt="Malik Tanveer"
              className="w-full h-full object-cover object-top block"
            />
            {/* subtle bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-28"
              style={{ background: "linear-gradient(to top, rgba(250,250,252,0.5), transparent)" }} />
          </div>

          {/* Quote below image */}
          <div className="relative overflow-hidden">
            <span className="absolute -top-4 -left-1 text-[6rem] leading-none font-serif text-[#001f5c]/8 select-none">"</span>
            <p className="relative text-[13px] text-[#0a0f2c]/52 leading-[1.75] italic pl-1">
              Great design isn't just how it looks — it's how it feels and performs.
              I build digital experiences that leave a lasting impression.
            </p>
            <div className="flex items-center gap-2 mt-3 pl-1">
              <div className="w-8 h-px bg-[#001f5c]/20" />
              <span className="text-[10.5px] font-mono text-[#0a0f2c]/40">Malik Tanveer</span>
            </div>
          </div>

        </div>

        {/* ── Right: Content ── */}
        <div ref={rightRef} className="flex-1 flex flex-col justify-center" style={{ opacity: 0 }}>

          <h2 className="text-[#0a0f2c] font-black leading-[1.05] mb-4"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-.03em" }}>
            The developer<br />
            <span style={{ color: "#001f5c" }}>you actually need.</span>
          </h2>

          <p className="text-[#0a0f2c]/46 text-[13.5px] leading-relaxed mb-8 max-w-[400px]">
            Not just someone who writes code — someone who thinks about your product,
            cares about the output, and knows how to get things done end-to-end.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-2.5">
            {POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title}
                  className="hm-pt flex items-start gap-4 p-4 rounded-xl bg-white border border-[#001f5c]/7 hover:border-[#001f5c]/18 hover:shadow-md transition-all duration-200">
                  <div className="w-9 h-9 rounded-lg bg-[#001f5c]/6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon size={16} strokeWidth={1.9} className="text-[#001f5c]" />
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold text-[#0a0f2c] mb-0.5">{p.title}</p>
                    <p className="text-[12px] text-[#0a0f2c]/43 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap mt-8">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 no-underline">
              Hire Me <ArrowRight size={14} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[13px] font-medium text-[#001f5c] border border-[#001f5c]/15 hover:bg-[#001f5c]/5 hover:-translate-y-0.5 transition-all duration-200 no-underline">
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}