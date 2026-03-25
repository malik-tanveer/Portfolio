import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Cpu, Rocket, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { icon: TrendingUp, text: "1+ year of hands-on experience across internships and real projects." },
  { icon: ShieldCheck, text: "Strong grasp of responsive design, UI/UX principles, and accessibility." },
  { icon: Cpu,         text: "Expertise in building reusable, scalable component architecture." },
  { icon: Rocket,      text: "Focused on performance — fast load times, clean output, smooth UX." },
  { icon: Users,       text: "Collaborative, communicative, and reliable from kickoff to delivery." },
];

export default function HireMe() {
  const secRef   = useRef(null);
  const imgRef   = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" } }
      );
      gsap.fromTo(".hm-pt",
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.4,
          scrollTrigger: { trigger: rightRef.current, start: "top 82%", toggleActions: "play none none none" } }
      );
      gsap.to(imgRef.current, { y: -7, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
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

      <div className="flex items-center gap-12 max-lg:flex-col">

        {/* ── Left: Photo ── */}
        <div ref={imgRef} className="flex-shrink-0 max-lg:w-full flex justify-center" 
  
  style={{ width: "min(400px, 40vw)", height: "min(400px, 40vh)", opacity: 0 }}>
          <img
            src="/unnamed.jpg"
            alt="Malik Tanveer"
            className="w-full block object-contain select-none"
            draggable={false}
          />
        </div>

        {/* ── Right: Content ── */}
        <div ref={rightRef} className="flex-1" style={{ opacity: 0 }}>


          <h2 className="text-[#0a0f2c] font-black leading-tight mb-4"
            style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)", letterSpacing: "-.025em" }}>
            Code with Purpose.<br />
            <span className="text-[#001f5c]">
            Built for Impact.
            </span>
          </h2>

          <p className="text-[#0a0f2c]/52 text-[13.5px] leading-relaxed mb-7 max-w-[430px]">
            I'm <strong className="text-[#0a0f2c]">Malik Tanveer</strong> — a frontend developer
            who thinks like a full-stack engineer. I work with{" "}
            <strong className="text-[#001f5c]">React, Next.js, Node.js, and Tailwind</strong> to
            build products that look sharp and actually work. Every line I write is
            intentional — no fluff, just results.
          </p>

          {/* Points */}
          <div className="flex flex-col gap-3 mb-8">
            {POINTS.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.text} className="hm-pt flex items-start gap-3">
                  <Icon size={15} strokeWidth={2} className="text-[#001f5c] flex-shrink-0 mt-0.5" />
                  <p className="text-[13px] text-[#0a0f2c]/55 leading-relaxed">{p.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap">
            <a href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-[13px] font-semibold bg-[#0a0f2c] text-white hover:bg-[#001f5c] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 no-underline">
              Contact Me <ArrowRight size={13} />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[13px] font-medium text-[#001f5c] border-2 border-[#001f5c]/20 hover:bg-[#001f5c]/5 hover:-translate-y-0.5 transition-all duration-200 no-underline">
              View Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}