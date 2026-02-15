import Image from "next/image";

export default function ServicesLanding() {
  return (
    <div 
      className="relative flex flex-col items-center justify-center h-[940px] overflow-hidden"
      style={{
        width: 'calc(100% + 360px)', // 100% + left padding + right padding
        marginLeft: '-180px',
        marginRight: '-180px',
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <Image
          src="/servicehero.png"
          alt="Services Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20" /> 
      </div>

      <div className="relative z-10 w-full max-w-[1560px] mx-auto text-center space-y-12">
        <h1 className="font-sans font-bold text-[80px] leading-[1.2] tracking-[0.04em] text-center text-white">
          Our <span className="text-[#DA1316]">Services</span>
        </h1>
        
        <p className="font-sans font-normal text-[32px] leading-[1.3] text-center text-white/90 max-w-[900px] mx-auto">
          Comprehensive digital solutions tailored to elevate your brand and drive sustainable growth.
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
