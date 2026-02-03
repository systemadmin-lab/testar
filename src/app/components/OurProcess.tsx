"use client";

import Image from "next/image";

const steps = [
  {
    id: "Step 01",
    title: "Discovery & Immersion",
    description: "We begin by listening. We dive deep into your business, market, and audience to uncover the insights that will drive our strategy.",
    image: "/assets/our process/Frame.png",
  },
  {
    id: "Step 02",
    title: "Strategic Foundation",
    description: "Before a single pixel is placed, we define the roadmap. We establish the positioning, voice, and visual direction.",
    image: "/assets/our process/Frame.svg",
  },
  {
    id: "Step 03",
    title: "Craft & Creation",
    description: "This is where magic happens. Our designers and writers work in concert to bring the strategy to life through refined execution.",
    image: "/assets/our process/Frame (1).svg",
  },
  {
    id: "Step 04",
    title: "Launch & Evolve",
    description: "We ensure a flawless rollout and continue to partner with you to refine and expand your brand as it grows.",
    image: "/assets/our process/Frame.png", // Reusing image as only 3 were found
  },
];

export default function OurProcess() {
  return (
    <section className="w-full py-24 flex flex-col items-center">
      <div className="w-full max-w-[1560px] mb-20">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Our Process
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
        <p className="text-muted-foreground text-lg">
          A refined methodology developed over a decade of digital craftsmanship.
        </p>
      </div>

      <div className="w-full max-w-[1560px] flex flex-col gap-24">
        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
          >
            {/* Image Section */}
            <div className="relative shrink-0">
                <div 
                    style={{
                        width: '720px',
                        height: '400px',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover"
                    />
                    
                    {/* Floating Icon/Badge (Optional, based on design having small circular icons) */}
                    <div className="absolute bottom-4 right-4 w-10 h-10 bg-[#FAE4C0] rounded-full flex items-center justify-center">
                        {/* Placeholder icon */}
                        <div className="w-4 h-4 bg-[#DA1316] rounded-full opacity-50" />
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'items-end text-right' : 'items-start text-left'} w-full`}>
                <span className="inline-block px-3 py-1 bg-[#3A1D1D] text-[#DA1316] text-xs font-semibold rounded-full mb-6">
                    {step.id}
                </span>
                
                <h3 
                    className="text-3xl font-bold mb-4 text-white"
                    style={{ fontFamily: 'Aileron, sans-serif' }}
                >
                    {step.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
                    {step.description}
                </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
