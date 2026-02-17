interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

interface MethodologyTimelineProps {
  title?: string;
  subtitle?: string;
  steps: MethodologyStep[];
}

export default function MethodologyTimeline({
  title = "Our Methodology",
  subtitle = "A proven framework designed to deliver consistent, high-quality results.",
  steps
}: MethodologyTimelineProps) {
  return (
    <section className="w-full bg-[rgba(255,255,255,0.1)] py-16 lg:py-20 px-4 lg:px-[180px]">
      <div className="flex flex-col gap-20 items-center">
        {/* Header */}
        <div className="flex flex-col gap-4 items-center max-w-[1032px] text-center">
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

        {/* Timeline */}
        <div className="relative w-full max-w-[1560px]">
          {/* Connecting Line */}
          <div className="absolute top-[31px] left-0 right-0 h-px bg-[rgba(255,241,203,0.4)] hidden lg:block" 
               style={{ marginLeft: '194px', marginRight: '169px' }} 
          />
          
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col gap-8 items-center">
                {/* Number Circle */}
                <div className="bg-[#1D1C18] border-[1.5px] border-[rgba(255,241,203,0.4)] rounded-full w-[62px] h-[62px] flex items-center justify-center">
                  <p className="text-[#FFF1CB] text-2xl font-bold leading-[1.2]">
                    {step.number}
                  </p>
                </div>
                
                {/* Text Content */}
                <div className="flex flex-col gap-3 items-center text-center">
                  <h3 className="text-white text-xl font-bold leading-[1.2]">
                    {step.title}
                  </h3>
                  <p className="text-white text-lg leading-[1.4]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
