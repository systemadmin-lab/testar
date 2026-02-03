import { ArrowRight } from "lucide-react";
import Image from "next/image";

const services = [
  {
    id: "01",
    title: "Digital Marketing",
    description: "Data-driven strategies to maximize your online presence and drive measurable ROI across all digital...",
    image: "/assets/growth Sllution/Digital Marketing.svg"
  },
  {
    id: "02",
    title: "Creative & Design",
    description: "Visual storytelling that captures attention and defines your unique brand identity in a crowded marketplace.",
    image: "/assets/growth Sllution/Creative & Design.svg"
  },
  {
    id: "03",
    title: "Strategy & Planning",
    description: "Comprehensive roadmaps to guide your business from potential to performance with deep market insights.",
    image: "/assets/growth Sllution/Strategy & Planning.svg"
  },
  {
    id: "04",
    title: "Traditional Marketing",
    description: "Classic marketing channels optimized for modern audience engagement and broad brand awareness.",
    image: "/assets/growth Sllution/Traditional Marketing.svg"
  },
  {
    id: "05",
    title: "Customer Experience",
    description: "Building lasting loyalty by optimizing every touchpoint In the customer journey from discovery to advocacy.",
    image: "/assets/growth Sllution/Customer Experience.png"
  },
  {
    id: "06",
    title: "MarTech Solutions",
    description: "Implementing the right technology stack to automate, track, and scale your growth operations efficiently.",
    image: "/assets/growth Sllution/MarTech Solutions.svg"
  },
];

export default function GrowthSolutions() {
  return (
    <section className="w-full py-24">
      <div className="flex flex-col items-start gap-16 mb-[72px]">
        <div>
          <h2 
              className="text-[40px] font-semibold leading-[1.2] mb-6"
              style={{ fontFamily: 'Aileron, sans-serif' }}
          >
            360° Growth Solutions
          </h2>
          <div className="w-[264px] h-1 bg-[#B59F7A] mb-8" />
          <p 
              className="text-[24px] font-normal leading-[1.3] tracking-[0.02em] max-w-4xl text-muted-foreground"
              style={{ fontFamily: 'Aileron, sans-serif' }}
          >
            A comprehensive ecosystem of services designed to scale your 
            business from every angle.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full max-w-[1560px]">
        {services.map((service) => (
          <div 
            key={service.id}
            className="relative group flex flex-col justify-end bg-[#111111] overflow-hidden border border-white/5 transition-all duration-300"
            style={{
                width: '100%', // Flexible width to fit grid column
                maxWidth: '504px', // Max requested width
                height: '620px',
                borderRadius: '8px',
            }}
          >
            {/* Background Image - Visible but darkened by default */}
            <div className="absolute inset-0 z-0">
               <Image
                 src={service.image}
                 alt={service.title}
                 fill
                 className="object-cover opacity-40 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
               />
            </div>

            {/* Hover Background Gradient Overlay - Always present but transitions styles if needed, or we just rely on image opacity change + base bg color */}
            <div 
              className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"
              style={{
                background: 'linear-gradient(360deg, rgba(28, 28, 28, 0.8) 0%, rgba(28, 28, 28, 0.8) 50%, rgba(0, 0, 0, 0.8) 100%)'
              }}
            />

            <div className="relative z-10 px-8 pt-8 pb-5 group-hover:pb-[56px] h-full flex flex-col justify-end transition-all duration-500 ease-in-out">
              <div className="mb-auto">
                <span className="text-xs text-muted-foreground/60 group-hover:text-white/80 transition-colors mb-4 block font-mono">
                  {service.id}
                </span>
              </div>
              
              <div>
                <h3 className="text-[28px] font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-base text-muted-foreground group-hover:text-gray-300 transition-colors leading-relaxed mb-0 line-clamp-3">
                  {service.description}
                </p>

                {/* Absolutely positioned View Services button */}
                <div className="absolute bottom-8 left-8 flex items-center gap-2 text-[#DA1316] text-sm font-medium cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span>View Services</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
