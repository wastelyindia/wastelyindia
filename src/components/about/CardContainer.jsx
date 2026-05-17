
import { useEffect, useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import slide1 from "../../assets/images/Wastely_hero_1.jpeg";
import slide2 from "../../assets/images/Wastely_hero_2.jpeg";
import slide3 from "../../assets/images/Wastely_hero_3.jpeg";
import slide4 from "../../assets/images/Wastely_hero_7.jpeg";
import slide5 from "../../assets/images/Wastely_hero_9.jpeg";
import slide6 from "../../assets/images/Wastely_hero_5.jpeg";
import slide7 from "../../assets/images/Wastely_hero_8.jpeg";

const AUTOPLAY_DELAY = 3800;

const values = [
  {
    letter: "W",
    title: "Worthiness",
    image: slide1,
    description:
      "Every drop we manage contributes toward a cleaner, more sustainable future for communities everywhere.",
  },
  {
    letter: "A",
    title: "Assurance",
    image: slide2,
    description:
      "Delivering reliable wastewater management systems with engineering excellence, trust, and accountability.",
  },
  {
    letter: "S",
    title: "Sustainability",
    image: slide3,
    description:
      "Creating environmentally responsible infrastructure designed for long-term ecological impact and regeneration.",
  },
  {
    letter: "T",
    title: "Technology",
    image: slide4,
    description:
      "Leveraging innovation and advanced treatment processes to redefine what water recovery can achieve at scale.",
  },
  {
    letter: "E",
    title: "Excellence",
    image: slide5,
    description:
      "Committed to world-class environmental engineering solutions that meet the highest quality standards globally.",
  },
  {
    letter: "L",
    title: "Liveliness",
    image: slide6,
    description:
      "Revitalizing ecosystems through sustainable and intelligent wastewater practices that restore natural balance.",
  },
  {
    letter: "Y",
    title: "Yield",
    image: slide7,
    description:
      "Transforming wastewater into valuable reusable resources, creating circular systems for future generations.",
  },
];

const CardContainer = () => {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(null);

  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const progressTimerRef = useRef(null);
  const autoplayRef = useRef(null);

  const totalSlides = values.length;

  /* ─── Navigation helpers ─── */
  const goTo = useCallback((idx) => {
    const next = ((idx % totalSlides) + totalSlides) % totalSlides;
    setCurrent(next);
  }, [totalSlides]);

  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  /* ─── Progress bar ─── */
  const startProgress = useCallback(() => {
    clearInterval(progressTimerRef.current);
    setProgress(0);
    const step = 100 / (AUTOPLAY_DELAY / 80);
    progressTimerRef.current = setInterval(() => {
      setProgress((p) => {
        if (p + step >= 100) {
          clearInterval(progressTimerRef.current);
          return 100;
        }
        return p + step;
      });
    }, 80);
  }, []);

  /* Autoplay triggers on `current` change */
  useEffect(() => {
    startProgress();
    clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      goTo(current + 1);
    }, AUTOPLAY_DELAY);

    return () => {
      clearInterval(progressTimerRef.current);
      clearTimeout(autoplayRef.current);
    };
  }, [current, goTo, startProgress]);

  /* ─── Touch / drag support ─── */
  const handleDragStart = (clientX) => {
    setIsDragging(true);
    setDragStartX(clientX);
  };

  const handleDragEnd = (clientX) => {
    if (!isDragging || dragStartX === null) return;
    const dx = dragStartX - clientX;
    if (Math.abs(dx) > 40) dx > 0 ? next() : prev();
    setIsDragging(false);
    setDragStartX(null);
  };

  const distFromCenter = (i) => Math.abs(i - current);

  const cardStyle = (i) => {
    const dist = distFromCenter(i);
    return {
      transform: `scale(${dist === 0 ? 1 : dist === 1 ? 0.93 : 0.87})`,
      opacity: dist === 0 ? 1 : dist === 1 ? 0.55 : 0.3,
      transition: "transform 0.55s cubic-bezier(0.34,1.2,0.64,1), opacity 0.5s ease",
      pointerEvents: dist === 0 ? "auto" : "none",
    };
  };

  /* Compute translate so active card is centered */
  const trackTransform = () => {
    // Each card is ~320px + 20px gap on mobile, ~420px + 24px on md
    const cardW = typeof window !== "undefined" && window.innerWidth >= 768 ? 444 : 340;
    return `translateX(calc(50% - ${current * cardW + cardW / 2}px))`;
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-[#081219]">

      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -right-20 w-[400px] h-[400px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)" }}
      />

      {/* ── HEADER ── */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-400/20 rounded-full px-5 py-2 mb-7">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span className="text-[11px] tracking-[0.2em] uppercase text-sky-300 font-medium">
            Wastely Values
          </span>
        </div>

        <h2 className="font-black text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white">
          The Principles Behind
          <span className="block mt-1 bg-gradient-to-r from-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            Wastely Aqua
          </span>
        </h2>
        

        <p className="mt-6 text-base md:text-lg text-slate-400 leading-relaxed">
          Our values define how we engineer sustainable wastewater solutions,
          build lasting partnerships, and create measurable environmental impact.
        </p>
      </div>

      {/* ── CAROUSEL ── */}
      <div
        className="relative z-10 mt-16 md:mt-20 overflow-hidden"
        onMouseDown={(e) => handleDragStart(e.clientX)}
        onMouseUp={(e) => handleDragEnd(e.clientX)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
        onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientX)}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        <div
          ref={trackRef}
          className="flex gap-5 md:gap-6 will-change-transform"
          style={{
            transform: trackTransform(),
            transition: isDragging ? "none" : "transform 0.55s cubic-bezier(0.34,1.2,0.64,1)",
          }}
        >
          {values.map((item, i) => (
            <div
              key={item.letter}
              onClick={() => goTo(i)}
              style={cardStyle(i)}
              className="flex-none w-[320px] md:w-[420px] lg:w-[440px]"
            >
              <div
                className={`
                  relative overflow-hidden rounded-[28px] md:rounded-[32px]
                  border transition-colors duration-500
                  ${i === current
                    ? "border-sky-500/30 shadow-[0_0_60px_-12px_rgba(14,165,233,0.25)]"
                    : "border-white/[0.06]"}
                `}
              >
                {/* Image */}
                <div className="relative w-full aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`
                      w-full h-full object-cover select-none
                      transition-transform duration-700 ease-out
                      ${i === current ? "scale-[1.03]" : "scale-100"}
                    `}
                    draggable={false}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060d14] via-[#060d14]/50 to-transparent" />
                  {/* Accent glow at bottom */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-64 transition-opacity duration-500
                      ${i === current ? "opacity-100" : "opacity-0"}`}
                    style={{ background: "linear-gradient(to top, rgba(14,165,233,0.1), transparent)" }}
                  />
                </div>

                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  {/* Letter badge */}
                  <div className="w-11 h-11 rounded-xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mb-5 backdrop-blur-xl">
                    <span className="font-black text-xl text-cyan-300">{item.letter}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className={`
                    mt-3 text-sm md:text-base leading-relaxed text-slate-400
                    transition-all duration-500
                    ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                  `}>
                    {item.description}
                  </p>

                  <div className={`
                    mt-5 flex items-center gap-2 text-sky-400 text-sm font-medium
                    transition-all duration-500
                    ${i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
                  `}>
                    Learn more
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CONTROLS ── */}
      <div className="relative z-10 flex items-center justify-center gap-5 mt-10 px-6">

        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="
            w-11 h-11 rounded-full flex items-center justify-center
            border border-white/10 bg-white/[0.04] text-slate-400
            hover:bg-sky-500/10 hover:border-sky-400/30 hover:text-sky-300
            active:scale-90 transition-all duration-200 backdrop-blur-xl
          "
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {values.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`
                h-[6px] rounded-full transition-all duration-400
                ${i === current
                  ? "w-7 bg-sky-400"
                  : "w-[6px] bg-white/15 hover:bg-white/35"}
              `}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="w-32 h-[2px] bg-white/[0.08] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400"
            style={{ width: `${progress}%`, transition: "width 0.08s linear" }}
          />
        </div>

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next"
          className="
            w-11 h-11 rounded-full flex items-center justify-center
            border border-white/10 bg-white/[0.04] text-slate-400
            hover:bg-sky-500/10 hover:border-sky-400/30 hover:text-sky-300
            active:scale-90 transition-all duration-200 backdrop-blur-xl
          "
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide counter */}
      <div className="relative z-10 text-center mt-5">
        <span className="text-xs text-slate-600 tabular-nums tracking-widest">
          {String(current + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
};

export default CardContainer;