"use client";

export default function ContactMap() {
  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-[1560px] flex flex-col gap-[56px]">
        {/* Header */}
        <div className="w-full flex justify-center">
            <h2 
                className="text-[24px] font-bold tracking-[0.1em] text-white uppercase"
                style={{ fontFamily: 'Aileron, sans-serif' }}
            >
            View on Google Maps
            </h2>
        </div>

        {/* Map Container */}
        <div 
            className="w-full rounded-lg overflow-hidden grayscale invert"
            style={{
                width: '1560px',
                height: '834px',
                background: '#242424', // Fallback
            }}
        >
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.056086895393!2d90.41300947605963!3d23.781615878644365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f9c2t4!2sGulshan%202%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1706935200000!5m2!1sen!2sbd" 
                width="100%" 
                height="100%" 
                style={{ border: 0, opacity: 0.8 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
    </section>
  );
}
