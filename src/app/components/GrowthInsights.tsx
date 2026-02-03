"use client";

import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "How Amazon Virtual Bundles Help.",
    date: "May 27, 2025",
    tags: ["Design", "Marketing"], // Guessed from UI
    image: "/assets/Featured Work/Rectangle 8.png", // Placeholder
  },
  {
    id: 2,
    title: "The Power of Brand Strategy.",
    date: "May 27, 2025",
    tags: ["Strategy", "Branding"],
    image: "/assets/Featured Work/Rectangle 8.svg", // Placeholder
  },
  {
    id: 3,
    title: "Building Customer Trust.",
    date: "May 27, 2025",
    tags: ["Brand", "Growth"],
    image: "/assets/Featured Work/Rectangle 8 (1).svg", // Placeholder
  },
];

export default function GrowthInsights() {
  return (
    <section className="w-full py-24 flex flex-col items-center">
      <div className="w-full max-w-[1560px] mb-12">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Growth Insights
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
        <p className="text-muted-foreground text-lg">
           Expert perspectives on marketing, design, and business strategy.
        </p>
      </div>

      <div className="flex flex-nowrap justify-between gap-[24px] w-full max-w-[1560px] overflow-x-auto lg:overflow-visible">
        {articles.map((article, index) => (
          <div 
            key={index}
            className="relative overflow-hidden group border border-white/5"
            style={{
                width: '504px',
                height: '350px',
                borderRadius: '24px',
                padding: '24px',
                background: 'rgba(0, 0, 0, 0.4)',
                boxShadow: '0px 2px 6px 0px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay for text readability */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end">
                {/* Tags */}
                <div className="absolute top-0 left-0 flex gap-2">
                    {article.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full border border-white/20 text-xs font-medium text-white/80 bg-black/20 backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {article.title}
                </h3>
                <p className="text-sm text-white/60">
                    {article.date}
                </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <button 
            className="group relative overflow-hidden border-2 border-[#DA1316] text-[#DA1316] rounded-lg text-base font-medium transition-colors duration-300"
            style={{
                width: '216px',
                height: '54px',
            }}
        >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                View All Articles
            </span>
            <span 
                className="absolute inset-0 bg-[#DA1316] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
            />
        </button>
      </div>
    </section>
  );
}
