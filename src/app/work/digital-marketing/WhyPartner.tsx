import Image from "next/image";

interface WhyPartnerProps {
  tagline: string;
  title: string;
  description: string;
  features: string[];
  yearsOfExcellence: string;
  imageUrl: string;
}

export default function WhyPartner({
  tagline = "OVERVIEW",
  title = "Why partner with us for Digital Marketing?",
  description = "In a rapidly evolving digital landscape, digital marketing  requires more than just standard practices. It demands a strategic blend of creativity, data, and technology. We don't just execute tasks; we build comprehensive systems designed for scalable growth. Our approach is rooted in deep industry insights and a relentless pursuit of excellence.",
  features = [
    "Data-Driven Decision Making",
    "Agile Methodology & Execution",
    "Transparent Reporting & Insights",
    "Dedicated Industry Experts"
  ],
  yearsOfExcellence = "10+",
  imageUrl = "/servicehero.png"
}: WhyPartnerProps) {
  return (
    <section className="w-full py-24 flex justify-center">
      <div className="w-full max-w-[1560px] px-4">
        <div 
          className="bg-[rgba(255,255,255,0.1)] rounded-[16px] flex flex-col lg:flex-row items-center justify-between pl-8 lg:pl-8 overflow-hidden"
        >
          {/* Left Content */}
          <div className="flex flex-col gap-8 w-full lg:w-[832px] py-8 lg:py-12">
            {/* Header Section */}
            <div className="flex flex-col gap-4">
              {/* Tagline */}
              <p 
                className="text-[#D62828] uppercase tracking-[2.24px] text-sm font-normal"
                style={{ fontFamily: 'BioRhyme, serif' }}
              >
                {tagline}
              </p>

              {/* Title and Yellow Line */}
              <div className="flex flex-col gap-6">
                <h2 className="text-white text-3xl lg:text-[40px] font-semibold leading-[1.2]">
                  {title}
                </h2>
                <div className="bg-[#FFF1CB] h-[2px] w-[264px]" />
              </div>

              {/* Description */}
              <p className="text-white text-lg lg:text-xl leading-[1.3] max-w-[750px]">
                {description}
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-2 items-center">
                  {/* Check icon circle */}
                  <div className="bg-[rgba(255,255,255,0.1)] rounded-full p-2 flex items-center justify-center flex-shrink-0">
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 14 14" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
                    >
                      <path 
                        d="M4 7L6 9L10 5" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="text-white text-base lg:text-lg leading-[1.2]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full lg:w-[662px] h-[400px] lg:h-[715px] flex-shrink-0">
            {/* Background Image */}
            <Image
              src={imageUrl}
              alt="Why Partner With Us"
              fill
              className="object-cover rounded-br-[16px] rounded-tr-[16px] lg:rounded-tl-none rounded-bl-[16px] lg:rounded-bl-none"
              quality={100}
            />
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.4)] rounded-br-[16px] rounded-tr-[16px]" />
            
            {/* Years Badge */}
            <div className="absolute bottom-12 left-12 flex flex-col gap-2 text-white z-10">
              <p className="text-2xl font-bold leading-[1.2]">
                {yearsOfExcellence}
              </p>
              <p className="text-lg uppercase tracking-[0.72px] leading-[1.2]">
                Years of Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
