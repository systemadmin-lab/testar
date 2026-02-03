import { Clock } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full py-24 flex flex-col items-center">
      <div className="w-full max-w-[1560px] mb-16">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Ready to Elevate Your Brand?
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
        <p className="text-muted-foreground text-lg">
          Let's create something extraordinary together. Schedule a consultation to discuss your vision.
        </p>
      </div>

      <div className="w-full max-w-[1560px] bg-[#1A1A1A] p-12 md:p-20 rounded-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          
          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              First Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Jane"
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Doe"
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Email <span className="text-red-500">*</span>
            </label>
            <input 
              type="email" 
              placeholder="jane@example.com"
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input 
              type="tel" 
              placeholder="(555) 555-1234"
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Company Name <span className="text-red-500">*</span>
            </label>
            <input 
              type="text" 
              placeholder="Enter your company name"
              className="bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
            />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Preferred Contact Time <span className="text-red-500">*</span>
            </label>
            <div className="relative">
                <input 
                type="text" 
                placeholder="Select preferred time"
                className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20"
                />
                <Clock className="w-4 h-4 text-muted-foreground absolute right-0 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          <div className="flex flex-col gap-2 md:col-span-2 mt-8">
            <label className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
              Message
            </label>
            <textarea 
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border-b border-white/10 py-4 text-white focus:outline-none focus:border-[#DA1316] transition-colors placeholder:text-white/20 min-h-[100px] resize-none"
            />
          </div>

          <div className="md:col-span-2 flex justify-center mt-12">
            <button className="bg-[#DA1316] text-white font-medium px-12 py-4 rounded hover:bg-[#B90F12] transition-colors w-full md:w-auto">
                Send Inquiry
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}
