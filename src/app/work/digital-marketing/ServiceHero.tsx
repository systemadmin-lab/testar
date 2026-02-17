import Image from "next/image";

interface ServiceHeroProps {
  tagline: string;
  title: string;
  highlightedWord: string;
  description: string;
  ctaText?: string;
  backgroundImage?: string;
}

export default function ServiceHero({
  tagline,
  title,
  highlightedWord,
  description,
  ctaText = "Start Project",
  backgroundImage = "/servicehero.png"
}: ServiceHeroProps) {
  return (
    <div 
      className="relative flex flex-col items-center justify-start h-[580px] md:h-[820px] lg:h-[940px] -mt-[80px] lg:-mt-[80px] pt-[80px] overflow-hidden"
      style={{
        width: 'calc(100% + 360px)',
        marginLeft: '-180px',
        marginRight: '-180px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-2]">
        <Image
          src={backgroundImage}
          alt="Service Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(4,4,4,0.6)] z-[-1]" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col gap-[40px] items-center w-full max-w-[1100px] mx-auto" style={{ paddingTop: '128px' }}>
        {/* Tagline */}
        <p 
          className="text-[#FFF1CB] text-center uppercase font-normal leading-[1.2] tracking-[2.56px]"
          style={{
            fontFamily: 'BioRhyme, serif',
            fontSize: '16px',
            fontWeight: 400,
          }}
        >
          {tagline}
        </p>

        {/* Main heading and CTA container */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          {/* Heading and subheading */}
          <div className="flex flex-col gap-[48px] items-center text-center text-[#B5B5B5] w-full">
            {/* Main Heading */}
            <p className="font-bold text-[32px] md:text-[56px] lg:text-[80px] leading-[1.2] tracking-[3.2px] mb-0">
              {title} <span className="text-[#D62828]">{highlightedWord}</span>
            </p>

            {/* Subheading */}
            <p className="font-normal text-[18px] md:text-[24px] lg:text-[32px] leading-[1.3] max-w-[900px] mx-auto" 
               style={{ fontFamily: 'Anuphan, sans-serif' }}>
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <button 
            className="group relative overflow-hidden w-[216px] h-[54px] rounded-[8px] border-2 border-[#D62828] transition-colors duration-300"
          >
            <span 
              className="absolute inset-0 bg-[#D62828] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
            />
            <span 
              className="relative z-10 text-[#DA1316] group-hover:text-white transition-colors duration-300 font-normal text-[18px] leading-[1.2]"
              style={{ fontFamily: 'Anuphan, sans-serif' }}
            >
              {ctaText}
            </span>
          </button>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10" style={{ top: '654px' }}>
        <svg 
          width="20" 
          height="123" 
          viewBox="0 0 20 123" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M10 0L10 121M10 121L1 111.5M10 121L19 111.5" 
            stroke="white" 
            className="stroke-white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
