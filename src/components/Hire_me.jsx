import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, Cpu, Rocket, Users, ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const POINTS = [
  { icon: TrendingUp, text: "Hands-on experience building real projects and solving practical challenges." },
  { icon: ShieldCheck, text: "Strong understanding of responsive design, UI/UX best practices, and accessibility." },
  { icon: Rocket, text: "Focused on performance with fast load times and smooth interactions." },
  { icon: Users, text: "Collaborative, communicative, and reliable in team and client projects." },
  { icon: Cpu, text: "Passionate about clean, maintainable code and well-structured applications." },
  { icon: ShieldCheck, text: "Able to handle both frontend and backend challenges for full-stack solutions." },
];
export default function HireMe() {
  const secRef = useRef(null);
  const imgRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(imgRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(rightRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.15,
          scrollTrigger: { trigger: secRef.current, start: "top 78%", toggleActions: "play none none none" }
        }
      );
      gsap.fromTo(".hm-pt",
        { y: 16, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power3.out", delay: 0.4,
          scrollTrigger: { trigger: rightRef.current, start: "top 82%", toggleActions: "play none none none" }
        }
      );
      gsap.to(imgRef.current, { y: -7, duration: 3, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 1 });
    }, secRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={secRef} className="w-full px-5 py-10 md:py-14 max-w-[1100px] mx-auto">

  {/* Flex container */}
  <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-12">

    {/* ── Left: Content ── */}
    <div ref={rightRef} className="flex-1 flex flex-col justify-center">

      {/* Pill */}
      <div
          className="inline-flex items-center gap-2 mb-20 px-3 py-1.5 rounded-full border border-[#001f5c]/13 bg-[#001f5c]/3 font-mono"
          style={{ opacity: 0 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#001f5c] animate-pulse" />
          <span className="text-[10.5px] text-[#001f5c]/55 tracking-[0.2em] uppercase">
            Hire Me
          </span>
        </div>

      <h2 className="text-[#0a0f2c] font-black leading-tight mb-4"
        style={{ fontFamily: "'Syne',sans-serif", fontSize: "clamp(1.8rem,3.5vw,2.7rem)" }}>
        Build Smart. <br />
        <span className="text-[#001f5c]">Ship Real Results.</span>
      </h2>

      <p className="text-[#0a0f2c]/52 text-[13.5px] leading-relaxed mb-6 max-w-[430px]">
        I'm <strong>Malik Tanveer</strong>, a developer building modern web applications with clean design and solid functionality.
      </p>

      {/* Points */}
      <div className="flex flex-col gap-3 mb-8">
        {POINTS.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.text} className="flex items-start gap-3">
              <Icon size={15} className="text-[#001f5c] mt-0.5" />
              <p className="text-[13px] text-[#0a0f2c]/55">{p.text}</p>
            </div>
          );
        })}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <a href="#contact"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-7 py-3 rounded-xl bg-[#0a0f2c] text-white">
          Contact Me
        </a>

        <a href="/resume.pdf"
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-6 py-3 rounded-xl border-2 border-[#001f5c]/20 text-[#001f5c]">
          View Resume
        </a>
      </div>
    </div>

    {/* ── Right: Image ── */}
<div
  ref={imgRef}
  className="w-full lg:w-[40%] flex"
>
  <img
    src="/unnamed.jpg"
    alt="Malik Tanveer"
    className="
      w-full 
      object-cover 
      rounded-2xl 
      shadow-xl 
      
      h-[260px] 
      sm:h-[320px] 
      md:h-[380px] 
      lg:h-full
    "
    draggable={false}
  />
</div>

  </div>
</section>
  );
}