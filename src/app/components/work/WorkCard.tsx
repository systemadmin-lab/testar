"use client";

import { useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

interface WorkCardProps {
  id: string;
  subtitle: string;
  title: string;
  quote: string;
  stats: Stat[];
  gradientColors: [string, string];
  reverse?: boolean;
}

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
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

export default function WorkCard({ 
  id, 
  subtitle, 
  title, 
  quote, 
  stats, 
  gradientColors,
  reverse = false 
}: WorkCardProps) {
  return (
    <div 
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 items-center w-full max-w-[1560px] min-h-[420px]`}
    >
      {/* Gradient Section - replaces image */}
      <div 
        className="relative w-full lg:w-[768px] h-[420px] rounded-lg overflow-hidden 
                   hover:scale-105 transition-transform duration-700 shadow-2xl"
        style={{
          background: `linear-gradient(to bottom right, ${gradientColors[0]}, ${gradientColors[1]})`
        }}
      >
        {/* Optional: Add subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
               backgroundSize: '20px 20px'
             }}
        />
        
        {/* Project ID badge */}
        <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-sm 
                       px-4 py-2 rounded-full text-white font-bold text-sm">
          {id}
        </div>
      </div>

      {/* Content Box */}
      <div 
        className={`flex flex-col justify-center w-full lg:w-[768px] ${
          reverse ? 'lg:pr-10' : 'lg:pl-10'
        } px-4 lg:px-0`}
      >
        <span className="text-[#B59F7A] text-sm font-medium mb-2 block uppercase tracking-wider">
          {subtitle}
        </span>
        
        <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          {title}
        </h3>
        
        <blockquote className="text-gray-400 text-lg mb-12 border-l-2 border-white/10 pl-6 italic leading-relaxed">
          {quote}
        </blockquote>

        <div className="border-t border-white/10 pt-8 flex gap-12 md:gap-20">
          {stats.map((stat, i) => (
            <div key={i}>
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <div className="text-sm text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
