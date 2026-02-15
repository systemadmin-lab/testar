import Image from "next/image";

export default function Landing() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[940px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <Image
          src="/home1.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
        {/* Overlay for better text readability if needed, currently transparent */}
        <div className="absolute inset-0 bg-black/10" /> 
      </div>

      <div className="relative z-10 max-w-[1000px] mx-auto text-center space-y-12">
        <h1 className="font-sans font-bold text-[80px] leading-[1.2] tracking-[0.04em] text-center text-white">
          We Build<br /> 
          <span className="text-[#DA1316]">Digital </span> 
          Experiences
        </h1>
        
        <p className="font-sans font-normal text-[32px] leading-[1.3] text-center text-white/90 max-w-[900px] mx-auto">
          Transform your brand with cutting-edge technology, stunning motion design,
          and data-driven strategies that scale.
        </p>
        
        <div className="flex justify-center pt-8">
          <button 
            className="group relative overflow-hidden w-[216px] h-[54px] rounded-[8px] border-2 border-[#DA1316] font-medium text-[#DA1316] text-lg transition-colors duration-300"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Explore Our work
            </span>
            <span 
                className="absolute inset-0 bg-[#DA1316] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
            />
          </button>
        </div>
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
