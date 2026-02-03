"use client";

import Image from "next/image";

const clients = [
  "/assets/clients/Frame.svg",
  "/assets/clients/Frame (1).svg",
  "/assets/clients/Frame (2).svg",
  "/assets/clients/Frame (3).svg",
  "/assets/clients/Frame (4).svg",
  "/assets/clients/Frame (5).svg",
  "/assets/clients/Frame (6).svg",
];

// Duplicate to fill 2 rows as requested/shown in SS (6 per row = 12 items)
const displayClients = [...clients.slice(0, 6), ...clients.slice(0, 6)];

export default function Clients() {
  return (
    <section className="w-full flex flex-col items-center" style={{ marginTop: '200px', marginBottom: '200px' }}>
      <div className="w-full max-w-[1560px] mb-12">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Our client
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A]" />
      </div>

      <div className="flex flex-wrap items-center justify-center gap-[10px] w-full max-w-[1560px]">
        {displayClients.map((client, index) => (
          <div 
            key={index}
            className="bg-[#D9D9D9] flex items-center justify-center relative hover:opacity-90 transition-opacity" // Assuming light gray bg from typically client section practices if logos are dark. User said 'opacity: 1'.
            style={{
                width: '240px',
                height: '140px',
                padding: '10px',
            }}
          >
            <div className="relative w-full h-full">
                <Image
                    src={client}
                    alt={`Client logo ${index}`}
                    fill
                    className="object-contain"
                />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
