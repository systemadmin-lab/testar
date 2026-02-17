"use client";


import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const milestones = [
  {
    year: "2018",
    title: "The Beginning",
    description: "Founded in a small coffee shop in Brooklyn with a vision to merge creative design with data-driven strategy. Just two laptops and a dream.",
    image: "/assets/milestone/Rectangle 126.png",
  },
  {
    year: "2019",
    title: "First Major Client",
    description: "Secured our first Fortune 500 partnership, proving our methodology works at enterprise scale. This pivotal moment defined our trajectory.",
    image: "/assets/milestone/Rectangle 126 (1).png",
    label: "MILESTONE 2",
  },
  {
    year: "2022",
    title: "International Expansion",
    description: "Opened our London office to better serve our growing European client base, bringing our unique blend of art and science across the pond.",
    image: "/assets/milestone/Rectangle 126 (2).png",
  },
  {
    year: "2024",
    title: "The Digital Pivot",
    description: "Rapidly adapted to a digital-first world, launching new service lines for remote collaboration and virtual events that set industry standards.",
    image: "/assets/milestone/Rectangle 126.png", // Reuse
  },
  {
    year: "2026",
    title: "100th Client",
    description: "Celebrated a major milestone of helping 100 brands transform their digital presence. We're just getting started on our mission.",
    image: "/assets/milestone/Rectangle 126 (1).png", // Reuse
  },
];

export default function Milestone() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Map progress (0 to 1) to height percentage (0% to 100%)
  // The circle will move from top (0%) to bottom (100%) of the timeline track
  const topPosition = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent relative overflow-hidden">
      <div className="w-full max-w-[1560px] relative">
        {/* Header */}
        <div className="w-full flex justify-center mb-24">
            <div className="text-center">
                <span className="text-sm font-bold tracking-[0.2em] text-[#B5B5B5] uppercase mb-4 block">Our Journey</span>
                <h2 
                    className="text-[40px] font-bold text-white"
                    style={{ fontFamily: 'Aileron, sans-serif' }}
                >
                A Decade of Evolution
                </h2>
                <p className="text-[#B5B5B5] mt-4 max-w-xl mx-auto text-sm">
                    From a small shared office to a global consultancy, every step of our journey has been defined by a commitment to excellence.
                </p>
            </div>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
             {/* Central Line - Static White */}
             <div 
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 bg-white"
                style={{ width: '1px' }} 
             />

             {/* Animated Red Scroll Follower Circle */}
             <motion.div 
                className="hidden lg:block absolute left-1/2 -translate-x-1/2 bg-[#DA1316] rounded-full z-20 shadow-[0_0_10px_rgba(218,19,22,0.8)]"
                style={{
                    width: '16px',
                    height: '16px',
                    top: topPosition,
                }}
             />

             {/* Items */}
             <div className="flex flex-col gap-[120px] py-12"> 
                {milestones.map((item, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={index} className={`flex items-center justify-between w-full flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-0`}>
                            {/* Image Side */}
                            <motion.div 
                                className="relative overflow-hidden rounded-lg shrink-0"
                                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true, margin: "-100px" }}
                                style={{
                                    width: '682px',
                                    height: '518px',
                                }}
                            >
                                <Image 
                                    src={item.image} 
                                    alt={item.title} 
                                    fill 
                                    className="object-cover"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                {isEven && index === 0 && (
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         <h3 className="text-6xl font-bold text-white/20 tracking-widest uppercase">Start Up</h3>
                                     </div>
                                )}
                                {!isEven && index === 4 && (
                                     <div className="absolute inset-0 flex items-center justify-center">
                                         <div className="border-4 border-white px-8 py-4">
                                            <h3 className="text-4xl font-bold text-white uppercase tracking-widest">Successful</h3>
                                         </div>
                                     </div>
                                )}
                            </motion.div>

                            {/* Center Marker Dot (Static on the line) */}
                            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                                <div 
                                    className="rounded-full bg-black border border-white z-10"
                                    style={{
                                        width: '12px',
                                        height: '12px',
                                    }}
                                />
                            </div>

                            {/* Text Side */}
                            <motion.div 
                                className={`flex flex-col justify-center w-full lg:w-[682px] ${isEven ? 'lg:pl-16 text-left' : 'lg:pr-16 lg:text-right text-left'}`}
                                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                <span className="text-[64px] font-light text-[#333333] leading-none mb-4 block" style={{ fontFamily: 'Aileron, sans-serif' }}>
                                    {item.year.slice(0, 2)}
                                    <span className="text-white relative inline-block">
                                        {item.year.slice(2)}
                                        {/* Optional Label Overlay */}
                                        {/* @ts-ignore */}
                                        {item.label && (
                                            <span 
                                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-[#DA1316] tracking-widest uppercase"
                                                style={{ whiteSpace: 'nowrap' }}
                                            >
                                                {item.label}
                                            </span>
                                        )}
                                    </span>
                                </span>
                                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                <p className={`text-[#B5B5B5] leading-relaxed max-w-md ${isEven ? 'self-start text-left' : 'self-end text-left'}`}>
                                    {item.description}
                                </p>
                            </motion.div>
                        </div>
                    );
                })}
             </div>
        </div>
      </div>
    </section>
  );
}
