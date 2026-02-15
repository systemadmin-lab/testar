"use client";

import { BarChart3, Eye, Flame, Handshake } from "lucide-react";
import Link from "next/link";

const principles = [
  {
    icon: <Eye className="w-8 h-8 text-[#B59F7A]" />,
    title: "Radical Transparency",
    description: "We don't hide behind jargon or vanity metrics. You get the truth, always, even when it's uncomfortable.",
  },
  {
    icon: <Flame className="w-8 h-8 text-[#B59F7A]" />,
    title: "Creative Courage", // Changed from duplicate "Radical Transparency" in image
    description: "Safe work is invisible work. We push boundaries to make you stand out.",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-[#B59F7A]" />,
    title: "Data-Led Intuition",
    description: "We use data to guide us, but human insight to inspire us.",
  },
  {
    icon: <Handshake className="w-8 h-8 text-[#B59F7A]" />,
    title: "Client Partnership",
    description: "We're not a vendor; we're a partner. We treat your business with the same care as our own.",
  },
];

export default function OurPrinciples() {
  return (
    <section className="w-full flex justify-center py-24">
      <div className="w-full max-w-[1560px] flex flex-col lg:flex-row gap-20">
        
        {/* Left Side - Text Content */}
        <div className="flex-1 lg:max-w-[500px] flex flex-col justify-center">
            <h3 
                className="text-sm font-bold tracking-[0.2em] text-[#DA1316] uppercase mb-4"
                style={{ fontFamily: 'Aileron, sans-serif' }}
            >
                Our Principles
            </h3>
            <h2 
                className="text-[56px] font-semibold text-white mb-8 leading-[1.1]"
                style={{ fontFamily: 'Aileron, sans-serif' }}
            >
                What We Stand For
            </h2>
            <p className="text-[#B5B5B5] text-lg leading-relaxed mb-12">
                Our values aren't just words on a wall. They are the operating system for how we make decisions, hire talent, and serve our clients.
            </p>
            
            <Link href="/contact-us">
                <button 
                    className="group relative overflow-hidden border-2 border-[#DA1316] text-[#DA1316] rounded-lg text-base font-medium transition-colors duration-300"
                    style={{
                        width: '216px',
                        height: '54px',
                    }}
                >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                        View More Info
                    </span>
                    <div className="absolute inset-0 bg-[#DA1316] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0" />
                </button>
            </Link>
        </div>

        {/* Right Side - Cards Grid */}
        <div className="flex flex-col gap-6 flex-1 w-full">
            
            {/* Row 1: Big - Small */}
            <div className="flex gap-6 w-full">
                {/* Item 0: Big */}
                <BigCard item={principles[0]} />
                {/* Item 1: Small */}
                <SmallCard item={principles[1]} />
            </div>

            {/* Row 2: Small - Big */}
            <div className="flex gap-6 w-full">
                {/* Item 2: Small */}
                <SmallCard item={principles[2]} />
                {/* Item 3: Big */}
                <BigCard item={principles[3]} />
            </div>

        </div>

      </div>
    </section>
  );
}

function BigCard({ item }: { item: any }) {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '636px',
                padding: '16px',
                alignItems: 'flex-start',
                gap: '24px',
                background: 'rgba(255, 255, 255, 0.10)',
                borderRadius: '16px',
            }}
            className="hover:bg-white/15 transition-colors duration-300 shrink-0"
        >
            
            <div className="shrink-0 p-4 rounded-full bg-white/5 border border-white/10">
                {item.icon}
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-white text-left">{item.title}</h4>
                <p className="text-[#B5B5B5] leading-relaxed text-left text-sm">{item.description}</p>
            </div>
        </div>
    );
}

function SmallCard({ item }: { item: any }) {
    return (
        <div 
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '24px',
                width: '372px', // Fixed width per user request
                background: 'rgba(255, 255, 255, 0.10)',
                borderRadius: '16px',
                padding: '24px',
            }}
            className="hover:bg-white/15 transition-colors duration-300"
        >
            <div className="shrink-0 p-4 rounded-full bg-white/5 border border-white/10">
                {item.icon}
            </div>
            <div className="flex flex-col gap-2">
                <h4 className="text-xl font-bold text-white text-left">{item.title}</h4>
                <p className="text-[#B5B5B5] leading-relaxed text-left text-sm">{item.description}</p>
            </div>
        </div>
    );
}
