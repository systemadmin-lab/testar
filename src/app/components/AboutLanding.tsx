import Image from "next/image";

export default function AboutLanding() {
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
          src="/about-us.png"
          alt="About Us Hero Background"
          fill
          priority
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[rgba(4,4,4,0.5)] z-[-1]" />

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
          ABOUT ARCEDION
        </p>

        {/* Main heading and description container */}
        <div className="flex flex-col gap-[64px] items-center w-full">
          {/* Heading and subheading */}
          <div className="flex flex-col gap-[48px] items-center text-center text-[#B5B5B5] w-full">
            {/* Main Heading */}
            <div className="font-bold text-[32px] md:text-[56px] lg:text-[80px] leading-[1.2] tracking-[3.2px]">
              <p className="mb-0">We Build</p>
              <p className="mb-0">
                <span className="text-[#D62828]">Brands</span>
                {' That Matter'}
              </p>
            </div>

            {/* Subheading */}
            <div className="font-normal text-[18px] md:text-[24px] lg:text-[32px] leading-[1.3]" style={{ fontFamily: 'Anuphan, sans-serif' }}>
              <p className="mb-0">Founded on the belief that great marketing is a blend of art and science,</p>
              <p className="mb-0">we help ambitious companies scale with purpose.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-10" style={{ top: '744px' }}>
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
