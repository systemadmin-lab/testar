"use client";

export default function AboutLanding() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-121px)] w-full py-20 pb-0">
      <div className="max-w-[1240px] mx-auto text-center space-y-12">
        <h1 
            className="text-[80px] leading-[1.2] tracking-[0.04em] text-center mb-6"
            style={{ 
                fontFamily: 'Aileron, sans-serif',
                fontWeight: 700,
                color: '#B5B5B5'
            }}
        >
          We Build <span className="text-[#DA1316]">Brands</span><br /> 
          That Matter
        </h1>
        
        <p 
            className="text-[32px] leading-[1.3] text-center max-w-[1100px] mx-auto"
            style={{
                fontFamily: 'Anuphan, sans-serif',
                fontWeight: 400,
                color: '#B5B5B5'
            }}
        >
          Founded on the belief that great marketing is a blend of art and science, 
          we help ambitious companies scale with purpose.
        </p>
      </div>

      <div className="mt-36 animate-bounce">
        <svg 
          width="20" 
          height="123" 
          viewBox="0 0 20 123" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M10 0L10 121M10 121L1 111.5M10 121L19 111.5" 
            stroke="#B5B5B5" 
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}
