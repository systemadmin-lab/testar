"use client";

import { useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { prefix: "$", value: 2, suffix: "B+", label: "Revenue Generated" },
  { value: 98, suffix: "%", label: "Client Retention" },
];

function Counter({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const displayValue = useTransform(spring, (current) => Math.round(current));

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

  return <span ref={ref} className="text-5xl font-medium tracking-tight text-white mb-2" />;
}

export default function Stats() {
  return (
    <section className="w-full flex justify-center bg-black py-2">
       <div className="flex flex-wrap justify-between w-full max-w-[1440px]">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center border-r border-white/10 last:border-r-0"
            style={{ 
              width: "353.25px", 
              height: "130px" 
            }}
          >
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
            <p className="text-white/60 text-lg font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
