"use client";

import Link from "next/link";

export default function ReadyToElevate() {
  return (
    <section className="w-full flex justify-center py-24">
      <div 
        className="flex flex-col items-center justify-center text-center bg-white/10 rounded-none relative overflow-hidden"
        style={{
            width: '1560px',
            height: '404px',
            paddingTop: '88px',
            paddingBottom: '88px',
            gap: '32px',
        }}
      >
        <div className="max-w-2xl">
            <h2 
                className="text-[40px] font-semibold text-white mb-4"
                style={{ fontFamily: 'Aileron, sans-serif' }}
            >
                Ready to Elevate <span className="text-[#DA1316]">Your Brand?</span>
            </h2>
            <p className="text-white/80 text-lg">
                Let's create something extraordinary together. Schedule a consultation to discuss your vision.
            </p>
        </div>

        <Link href="/contact-us">
            <button 
                className="group relative overflow-hidden border-2 border-[#DA1316] text-[#DA1316] px-8 py-3 rounded-lg text-base font-medium transition-colors duration-300"
                style={{
                    width: '216px',
                    height: '54px',
                }}
            >
                {/* Text Content */}
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Let's talk!
                </span>

                {/* Hover Background Fill - slide from left */}
                <span 
                    className="absolute inset-0 bg-[#DA1316] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                />
            </button>
        </Link>
      </div>
    </section>
  );
}
