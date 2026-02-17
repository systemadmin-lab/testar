interface ExpertiseCard {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  isWide?: boolean;
}

interface OurExpertiseProps {
  tagline?: string;
  title?: string;
  subtitle?: string;
  services: ExpertiseCard[];
}

function ExpertiseCard({ icon, title, description, benefits, isWide = false }: ExpertiseCard) {
  return (
    <div className={`relative h-[408px] ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'} rounded-[16px] overflow-hidden group bg-[#2A2A2A]`}>
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 flex flex-col gap-2 z-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            {/* Icon */}
            <div className="bg-[rgba(255,255,255,0.2)] rounded-full p-3 w-12 h-12 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" fill="white"/>
              </svg>
            </div>
            
            {/* Title and Description */}
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold leading-[1.2]">
                {title}
              </h3>
              <p className="text-white text-base font-semibold leading-[1.2] max-w-[700px]">
                {description}
              </p>
            </div>
          </div>
          
          {/* Benefits Tags */}
          <div className="flex flex-wrap gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="backdrop-blur-[17.5px] bg-[rgba(0,0,0,0.1)] px-4 py-2 rounded-full"
              >
                <p className="text-[rgba(255,255,255,0.9)] text-sm font-semibold leading-[1.2] whitespace-nowrap">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurExpertise({ 
  tagline = "CAPABILITIES",
  title = "Our Expertise",
  subtitle = "A comprehensive suite of digital marketing services tailored to your needs.",
  services 
}: OurExpertiseProps) {
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="w-full max-w-[1560px] px-4">
        <div className="flex flex-col gap-[72px]">
          {/* Header */}
          <div className="flex flex-col gap-6 max-w-[1032px]">
            {/* Tagline */}
            <p 
              className="text-[#D62828] uppercase tracking-[2.24px] text-sm font-normal"
              style={{ fontFamily: 'BioRhyme, serif' }}
            >
              {tagline}
            </p>
            
            {/* Title */}
            <h2 className="text-white text-[40px] font-semibold leading-[1.2]">
              {title}
            </h2>
            
            {/* Yellow Line */}
            <div className="bg-[#FFF1CB] h-[2px] w-[264px]" />
            
            {/* Subtitle */}
            <p className="text-white text-2xl leading-[1.3] tracking-[0.48px]">
              {subtitle}
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="flex flex-col gap-10">
            {/* Row 1: Wide + Regular */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.slice(0, 2).map((service, index) => (
                <ExpertiseCard key={index} {...service} />
              ))}
            </div>
            
            {/* Row 2: Regular + Wide */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.slice(2, 4).map((service, index) => (
                <ExpertiseCard key={index + 2} {...service} />
              ))}
            </div>
            
            {/* Row 3: Wide + Regular */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {services.slice(4, 6).map((service, index) => (
                <ExpertiseCard key={index + 4} {...service} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
