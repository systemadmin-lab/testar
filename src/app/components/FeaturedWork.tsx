"use client";

import { useInView, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    subtitle: "Rebranding & Digital",
    title: "Lumina Architectural",
    quote: "“They didn't just redesign our website; they completely reimagined how we communicate our value to the world.”",
    stats: [
      { value: 150, prefix: "+ ", suffix: "%", label: "Increase in Leads" },
      { value: 2, suffix: "M+", label: "Global Reach" },
    ],
    image: "/assets/Featured Work/Rectangle 8.png",
  },
  {
    id: "02",
    subtitle: "Brand Strategy & Packaging",
    title: "Vesper & Vine",
    quote: "“The level of sophistication and attention to detail in the packaging design was simply ”",
    stats: [
      { value: 45, suffix: "+", label: "Retail Partners" },
      { value: 3, suffix: "x", label: "Sales Growth" },
    ],
    image: "/assets/Featured Work/Rectangle 8.svg",
    reverse: true,
  },
  {
    id: "03",
    subtitle: "Product Design",
    title: "Echo Tech",
    quote: "“A rare combination of aesthetic excellence and deep user experience understanding. ”",
    stats: [
      { value: 85, suffix: "%", label: "User Retention" },
      { value: 4.9, suffix: "", label: "App Store Rating" }, // Float? Math.round might need care.
    ],
    image: "/assets/Featured Work/Rectangle 8 (1).svg",
  },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  // Handle float for 4.9
  const isFloat = value % 1 !== 0;
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => 
     isFloat ? current.toFixed(1) : Math.round(current)
  );

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    return displayValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${prefix}${latest}${suffix}`;
      }
    });
  }, [displayValue, prefix, suffix]);

  return <div ref={ref} className="text-3xl font-bold text-white mb-1" />;
}

export default function FeaturedWork() {
  return (
    <section className="w-full py-24 flex flex-col items-center">
      <div className="w-full max-w-[1560px] mb-20">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Featured Work
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
        <p className="text-muted-foreground text-lg">
          Selected case studies from our portfolio of global partnerships.
        </p>
      </div>

      <div className="flex flex-col gap-24 w-full max-w-[1560px]">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center`}
            style={{
                width: '100%',
                maxWidth: '1560px',
                minHeight: '420px', 
            }}
          >
            {/* Image Section */}
            <div className="relative w-full lg:w-[768px] h-[420px] rounded-lg overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* Content Box */}
            <div 
                className="flex flex-col justify-center"
                style={{
                    width: '100%',
                    maxWidth: '768px',
                    paddingLeft: project.reverse ? '0' : '40px',
                    paddingRight: project.reverse ? '40px' : '0',
                }}
            >
              <span className="text-[#B59F7A] text-sm font-medium mb-2 block">
                {project.subtitle}
              </span>
              <h3 
                className="text-3xl font-bold mb-6 text-white"
                style={{ fontFamily: 'Aileron, sans-serif' }}
              >
                {project.title}
              </h3>
              
              <blockquote className="text-muted-foreground text-lg mb-12 border-l-2 border-white/10 pl-6 italic">
                {project.quote}
              </blockquote>

              <div className="border-t border-white/10 pt-8 flex gap-20">
                {project.stats.map((stat, i) => (
                    <div key={i}>
                        <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                        <div className="text-sm text-muted-foreground">
                            {stat.label}
                        </div>
                    </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <button 
            className="group relative overflow-hidden border-2 border-[#DA1316] text-[#DA1316] rounded-lg text-base font-medium transition-colors duration-300"
            style={{
                width: '216px',
                height: '54px',
            }}
        >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View All Projects
            </span>
            <span 
                className="absolute inset-0 bg-[#DA1316] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
            />
        </button>
      </div>
    </section>
  );
}
