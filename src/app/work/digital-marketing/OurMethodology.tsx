interface MethodologyStep {
  number: string;
  title: string;
  description: string;
  gradientColors: [string, string];
}

interface OurMethodologyProps {
  steps: MethodologyStep[];
}

function MethodologyCard({ number, title, description, gradientColors }: MethodologyStep) {
  return (
    <div 
      className="relative h-[280px] rounded-lg overflow-hidden shadow-xl 
                 hover:scale-105 transition-transform duration-500 group"
      style={{
        background: `linear-gradient(to bottom, ${gradientColors[0]}, ${gradientColors[1]})`
      }}
    >
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8">
        {/* Number badge */}
        <div className="absolute top-6 left-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm
                       flex items-center justify-center text-white font-bold text-lg">
          {number}
        </div>
        
        {/* Title and Description */}
        <div className="space-y-3">
          <h3 className="text-white text-2xl md:text-3xl font-bold">
            {title}
          </h3>
          <p className="text-white/90 text-base md:text-lg leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
    </div>
  );
}

export default function OurMethodology({ steps }: OurMethodologyProps) {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-[rgba(255,255,255,0.03)]">
      <div className="w-full max-w-[1560px] px-4">
        {/* Section Header */}
        <div className="mb-16 space-y-6">
          <div className="space-y-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold">
              Our Methodology
            </h2>
            <div className="bg-[#FFF1CB] h-[2px] w-[264px]" />
          </div>
          <p className="text-[#E8E8E8] text-xl md:text-2xl max-w-[800px] leading-relaxed">
            A proven framework that transforms strategy into measurable results.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <MethodologyCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
