"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function ServiceContact() {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent">
      {/* Header Section */}
      <div className="text-center mb-[381px]">
        <h2 
            className="text-[36px] md:text-[56px] lg:text-[80px] font-bold leading-[120%] tracking-[0.04em] text-[#B5B5B5] mb-4"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Get in Touch
        </h2>
        <p 
            className="text-[18px] md:text-[24px] lg:text-[32px] font-normal leading-[130%] text-[#B5B5B5] px-4 lg:px-0"
            style={{ fontFamily: 'Anuphan, sans-serif' }}
        >
          Ready to start your growth journey? We'd love to hear from you.
        </p>
      </div>

      <div className="w-full max-w-[1560px] flex flex-col lg:flex-row gap-[24px]">
        {/* Left Card: Contact Info */}
        <div 
            className="relative overflow-hidden flex flex-col justify-between"
            style={{
                width: '504px',
                height: '830px',
                paddingTop: '32px',
                paddingRight: '24px',
                paddingBottom: '32px',
                paddingLeft: '24px',
                // gap: '120px', // Flex gap handles spacing, but content distribution needs to match visual
                borderRadius: '8px',
            }}
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                 <Image 
                     src="/assets/card/contact.svg" 
                     alt="Contact Background" 
                     fill 
                     className="object-cover"
                 />
                 {/* Optional overlay if needed to match design, but user provided specific bg asset */}
            </div>

            <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="space-y-6">
                    <h3 className="text-3xl font-bold text-white mb-4">Contact Information</h3>
                    <p className="text-white/80 leading-relaxed">
                        Find all the ways to reach us, including email, phone, and our office address, so you can get the support and answers you need quickly and easily.
                    </p>
                </div>

                <div className="space-y-8 mb-12">
                    <div className="flex items-center gap-4">
                        <Phone className="w-6 h-6 text-white" />
                        <span className="text-white text-lg">+880 0000 000000</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="w-6 h-6 text-white" />
                        <span className="text-white text-lg">contact@siliconrya.com</span>
                    </div>
                    <div className="flex items-start gap-4">
                        <MapPin className="w-6 h-6 text-white mt-1" />
                        <span className="text-white text-lg">
                            House #06, Floor #3rd (301)<br/>
                            Road #104, Gulshan-2, Lakeside<br/>
                            Dhaka 1212, Bangladesh.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        {/* Right Card: Form */}
        <div 
            className="flex flex-col"
            style={{
                width: '1032px',
                height: '830px',
                padding: '32px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                gap: '56px',
            }}
        >
            <form className="flex flex-col h-full justify-between">
                <div className="grid grid-cols-2 gap-x-8 gap-y-12">
                    {/* First Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">First Name *</label>
                        <input 
                            type="text" 
                            placeholder="Jane"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>
                    {/* Last Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Last Name *</label>
                        <input 
                            type="text" 
                            placeholder="Doe"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Email *</label>
                        <input 
                            type="email" 
                            placeholder="jane@example.com"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>
                    {/* Phone Number */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Phone Number *</label>
                        <input 
                            type="tel" 
                            placeholder="(555) 555-1234"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>

                    {/* Company Name */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Company Name *</label>
                        <input 
                            type="text" 
                            placeholder="enter your company name"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>
                    {/* Time */}
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Preferred Contact Time *</label>
                        <input 
                            type="text" 
                            placeholder="Select preferred time"
                            className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors"
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 flex-grow mt-12">
                    <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">Message</label>
                    <textarea 
                        placeholder="Tell us about your project..."
                        className="bg-transparent border border-white/10 rounded-lg p-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#DA1316] transition-colors flex-grow resize-none"
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                     <button className="w-full bg-[#DA1316] text-white font-bold py-4 rounded-lg hover:bg-[#b00f12] transition-colors">
                        Send Inquiry
                     </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
}
