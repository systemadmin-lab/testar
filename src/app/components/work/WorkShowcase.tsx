"use client";

import { useState } from "react";
import WorkFilter from "./WorkFilter";
import WorkGrid from "./WorkGrid";

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

interface Project {
  id: string;
  category: string;
  subtitle: string;
  title: string;
  quote: string;
  stats: Stat[];
  gradientColors: [string, string];
}

// Vibrant gradient presets
const projects: Project[] = [
  {
    id: "01",
    category: "Branding",
    subtitle: "Rebranding & Digital",
    title: "Lumina Architectural",
    quote: "They didn't just redesign our website; they completely reimagined how we communicate our value to the world.",
    stats: [
      { value: 150, prefix: "+ ", suffix: "%", label: "Increase in Leads" },
      { value: 2, suffix: "M+", label: "Global Reach" },
    ],
    gradientColors: ['#667eea', '#764ba2'], // Purple-blue
  },
  {
    id: "02",
    category: "Packaging",
    subtitle: "Brand Strategy & Packaging",
    title: "Vesper & Vine",
    quote: "The level of sophistication and attention to detail in the packaging design was simply outstanding.",
    stats: [
      { value: 45, suffix: "+", label: "Retail Partners" },
      { value: 3, suffix: "x", label: "Sales Growth" },
    ],
    gradientColors: ['#f093fb', '#f5576c'], // Pink-red
  },
  {
    id: "03",
    category: "Product Design",
    subtitle: "Product Design",
    title: "Echo Tech",
    quote: "A rare combination of aesthetic excellence and deep user experience understanding.",
    stats: [
      { value: 85, suffix: "%", label: "User Retention" },
      { value: 4.9, suffix: "", label: "App Store Rating" },
    ],
    gradientColors: ['#4facfe', '#00f2fe'], // Blue-cyan
  },
  {
    id: "04",
    category: "Marketing",
    subtitle: "Digital Marketing",
    title: "GrowthLab Solutions",
    quote: "Their data-driven approach transformed our entire marketing strategy and delivered incredible ROI.",
    stats: [
      { value: 250, suffix: "%", label: "Traffic Increase" },
      { value: 5, suffix: "x", label: "Conversion Rate" },
    ],
    gradientColors: ['#43e97b', '#38f9d7'], // Green-teal
  },
  {
    id: "05",
    category: "E-commerce",
    subtitle: "E-commerce Platform",
    title: "StyleHub Fashion",
    quote: "From concept to launch, they exceeded every expectation. Our online sales have never been better.",
    stats: [
      { value: 180, suffix: "%", label: "Revenue Growth" },
      { value: 50, suffix: "K+", label: "Active Users" },
    ],
    gradientColors: ['#fa709a', '#fee140'], // Pink-yellow
  },
  {
    id: "06",
    category: "Mobile App",
    subtitle: "Mobile Application",
    title: "FitTrack Wellness",
    quote: "The app they built is not just functional—it's beautiful, intuitive, and our users absolutely love it.",
    stats: [
      { value: 100, suffix: "K+", label: "Downloads" },
      { value: 4.8, suffix: "", label: "User Rating" },
    ],
    gradientColors: ['#30cfd0', '#330867'], // Teal-purple
  },
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Extract unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  // Filter projects based on active category
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="w-full py-24 flex flex-col items-center">
      <WorkFilter 
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      
      <WorkGrid projects={filteredProjects} />

      <div className="mt-24">
        <button 
          className="group relative overflow-hidden border-2 border-[#DA1316] text-[#DA1316] 
                     rounded-lg text-base font-medium transition-colors duration-300 
                     w-[216px] h-[54px]"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            View All Projects
          </span>
          <span 
            className="absolute inset-0 bg-[#DA1316] translate-x-[-100%] 
                       group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
          />
        </button>
      </div>
    </section>
  );
}
