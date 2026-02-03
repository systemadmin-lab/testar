
export default function Landing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-121px)] w-full py-20">
      <div className="max-w-[1000px] mx-auto text-center space-y-12">
        <h1 className="font-sans font-bold text-[80px] leading-[1.2] tracking-[0.04em] text-center">
          We Build<br /> 
          <span className="text-[#DA1316]">Digital </span> 
          Experiences
        </h1>
        
        <p className="font-sans font-normal text-[32px] leading-[1.3] text-center text-muted-foreground max-w-[900px] mx-auto">
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

      <div className="mt-24 animate-bounce">
        <svg 
          width="20" 
          height="123" 
          viewBox="0 0 20 123" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M10 0L10 121M10 121L1 111.5M10 121L19 111.5" 
            stroke="#171717" 
            className="stroke-foreground"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
