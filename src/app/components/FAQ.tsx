"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer: "Our typical project timeline varies depending on the scope but generally ranges from 4 to 12 weeks. We start with a discovery phase, followed by design, development, and testing before launch."
  },
  {
    question: "How do you price your services?",
    answer: "We offer project-based pricing tailored to your specific needs and goals. After our initial consultation, we provide a detailed proposal outlining the scope and investment refuired."
  },
  {
    question: "Do you work with startups or only established businesses?",
    answer: "We work with specialized brands of all sizes, from ambitious startups to established enterprises. Our focus is on partnering with clients who are ready to invest in growth and digital transformation."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in technology, finance, healthcare, and e-commerce, but our strategic approach allows us to deliver results across various industries by understanding your unique market position."
  },
  {
    question: "How do we get started working together?",
    answer: "It starts with a simple conversation. You can fill out our contact form or book a call. We'll discuss your goals, assess if we're a good fit, and outline the next steps."
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer: "Yes, we offer ongoing support and maintenance packages to ensure your digital products remain secure, up-to-date, and optimized for performance as your business grows."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-[1560px]">
        {/* Header */}
        <div className="mb-12">
            <h2 
                className="text-[40px] font-semibold leading-[1.2] mb-6 text-white"
                style={{ fontFamily: 'Aileron, sans-serif' }}
            >
            Our most frequently asked questions
            </h2>
            <div className="w-[100px] h-1 bg-[#B59F7A]" />
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-[24px]">
            {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                    <div 
                        key={index}
                        className="w-full rounded-lg overflow-hidden transition-colors duration-300"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)', // "drop down width width... opacity: 1" implying container bg
                        }}
                    >
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex items-center justify-between p-8 text-left group"
                        >
                            <span 
                                className={`text-xl font-medium transition-colors duration-300 ${isOpen ? 'text-[#DA1316]' : 'text-white'}`}
                            >
                                {faq.question}
                            </span>
                            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                                <Plus className={`w-6 h-6 ${isOpen ? 'text-[#DA1316]' : 'text-white'}`} />
                            </div>
                        </button>

                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-8 pb-8 text-white/80 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
