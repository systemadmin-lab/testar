"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "Working with this agency transformed our entire digital presence. The ROI exceeded our expectations by 300%.",
    name: "Sarah Chen",
    role: "CMO, TechFlow",
    image: "/assets/testimonial/Rectangle 111.png",
    rating: 5,
  },
  {
    id: 2,
    quote: "A game-changer for our brand. The strategy and execution were flawless, delivering results from day one.",
    name: "Michael Ross",
    role: "Director, InnovateX",
    image: "/assets/testimonial/Rectangle 111 (1).png",
    rating: 5,
  },
  {
    id: 3,
    quote: "Their creative approach is unmatched. They didn't just understand our vision; they elevated it to new heights.",
    name: "Emily Davis",
    role: "Founder, ArtLine",
    image: "/assets/testimonial/Rectangle 111.png", // Reuse
    rating: 5,
  },
  {
    id: 4,
    quote: "Exceptional service and data-driven insights. They helped us scale our user base significantly.",
    name: "David Kim",
    role: "VP Marketing, Sola",
    image: "/assets/testimonial/Rectangle 111 (1).png", // Reuse
    rating: 5,
  },
];

export default function ClientTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const cardWidth = 504;
  const gap = 24;

  return (
    <section className="w-full py-24 flex flex-col items-center bg-black overflow-hidden">
      <div className="w-full max-w-[1560px] mb-12">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6 text-white"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Client Testimonials
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
      </div>

      {/* Carousel Track Container */}
      <div className="w-full max-w-[1560px] overflow-hidden">
        <motion.div 
            className="flex gap-[24px]"
            animate={{ x: -(activeIndex * (cardWidth + gap)) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Duplicate list for continuous feel (though logic wraps index) */}
            {testimonials.concat(testimonials).map((item, index) => (
            <div 
                key={`${item.id}-${index}`}
                className="relative shrink-0 flex flex-col justify-between"
                style={{
                    width: '504px',
                    height: '264px',
                    borderRadius: '16px', // Tweaked to 16px to match video cards usually, requested user didn't specify radius but layout implies rounded
                    padding: '24px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    gap: '24px',
                }}
            >
                <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                        ))}
                    </div>

                    {/* Quote */}
                    <p className="text-white/80 text-lg leading-relaxed font-light">
                        “{item.quote}”
                    </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4 mt-auto">
                    <div className="relative w-[46px] h-[46px] rounded-full overflow-hidden bg-gray-700">
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-medium text-base">{item.name}</span>
                        <span className="text-white/50 text-sm">{item.role}</span>
                    </div>
                </div>
            </div>
            ))}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-12">
        {testimonials.map((_, i) => (
            <button 
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex % testimonials.length ? 'bg-[#DA1316] w-8' : 'bg-white/20'}`}
                onClick={() => setActiveIndex(i)}
            />
        ))}
      </div>
    </section>
  );
}
