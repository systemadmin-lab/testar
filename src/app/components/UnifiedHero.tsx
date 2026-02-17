import Image from "next/image";
import { ReactNode } from "react";

interface UnifiedHeroProps {
  title: ReactNode;
  description: string;
  backgroundImage: string;
}

export default function UnifiedHero({ title, description, backgroundImage }: UnifiedHeroProps) {
  return (
    <div 
      className="relative flex flex-col items-center justify-center h-[580px] md:h-[820px] lg:h-[1061px] -mt-[80px] lg:-mt-[121px] pt-[80px] lg:pt-[151px] overflow-hidden"
      style={{
        width: 'calc(100% + 360px)', // 100% + left padding + right padding
        marginLeft: '-180px',
        marginRight: '-180px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <Image
          src={backgroundImage}
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      <div className="relative z-10 w-full max-w-[1560px] mx-auto text-center space-y-12">
        <h1 className="font-sans font-bold text-[32px] md:text-[56px] lg:text-[80px] leading-[1.2] tracking-[0.04em] text-center text-[#B5B5B5]">
          {title}
        </h1>
        
        <p className="font-sans font-normal text-[18px] md:text-[24px] lg:text-[32px] leading-[1.3] text-center text-[#B5B5B5]/90 max-w-[900px] mx-auto px-4 lg:px-0">
          {description}
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10">
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
