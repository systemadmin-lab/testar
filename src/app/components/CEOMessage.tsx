"use client";

import Image from "next/image";

export default function CEOMessage() {
  return (
    <section className="w-full flex justify-center" style={{ marginTop: '250px', marginBottom: '100px' }}>
      <div className="w-full max-w-[1560px] flex flex-col lg:flex-row gap-10 lg:justify-between items-center">
        
        {/* Left Side - Image with Overlay Card */}
        <div className="relative shrink-0">
          <div 
            className="relative rounded-lg overflow-hidden"
            style={{
                width: '625px',
                height: '735px', // Aspect ratio 0.85 approx of 625 is ~735
            }}
          >
            <Image
              src="/ceo.png"
              alt="Ovirudda Islam - CEO"
              fill
              className="object-cover"
            />
          </div>

          {/* Name Card Overlay */}
          <div 
             className="absolute bottom-10 right-[-40px] bg-[#E7E7E7] p-8 rounded-sm shadow-lg max-w-sm z-10"
             style={{borderBottom: '4px solid #DA1316'}}
          >
             <h3 className="text-2xl font-bold text-black mb-1">Ovirudda Islam</h3>
             <p className="text-gray-600 text-sm font-medium">CEO & Founder of Silicornya</p>
          </div>
        </div>

        {/* Right Side - Message Content Card */}
        <div 
            style={{
                display: 'flex',
                width: '832px',
                padding: '32px 40px',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                flexShrink: 0,
                borderRadius: '16px',
                background: 'rgba(255, 255, 255, 0.10)',
                boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.10)',
            }}
        >
            <h2 
                style={{
                    color: '#FFF',
                    fontFamily: 'Aileron, sans-serif',
                    fontSize: '32px',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    lineHeight: '120%', // 38.4px
                }}
            >
                Message from Our CEO
            </h2>

            <div 
                style={{
                    color: '#E8E8E8',
                    fontFamily: 'Aileron, sans-serif',
                    fontSize: '20px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '140%', // 28px
                }}
                className="space-y-6"
            >
                <p>
                    I am proud to be the Co-Founder & CEO of Silicornya Ltd. And sincerely look forward to your cooperation moving forward. The year 2020 to 2022 marked a turning point for our society. Along with the heightening uncertainties brought by COVID-19 people's lifestyles and workstyle have changed in the world.
                </p>
                <p>
                    Ukraine and Russia's war and the global recession made significant differences in our daily life. Through these changes, we have experienced the power and value of Digital Technologies. These digitally spurred social changes are most likely to continue from now on. I would like to see Silicornya Ltd. stand at the front of the line and be the driver of these dynamic changes. For more than 03 years, Silicornya Ltd.'s achievements have only been possible to the exemplary dedication, commitment, and competence because of our employees.
                </p>
                <p>
                    Our team has never shied away from hard work or difficult tasks. Instead, they have always accepted the challenge to deliver products that measure up to the expectations of our respected clients, and that reflect quality. We have a responsibility to transform these strengths into the concrete values of safety-security, efficiency.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
