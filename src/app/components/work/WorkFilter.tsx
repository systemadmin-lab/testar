"use client";

interface WorkFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function WorkFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange 
}: WorkFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-16">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300
            ${activeCategory === category
              ? 'bg-[#D62828] text-white shadow-lg shadow-[#D62828]/30'
              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
