import MethodologyTimeline from "./digital-marketing/MethodologyTimeline";
import OurExpertise from "./digital-marketing/OurExpertise";
import ServiceHero from "./digital-marketing/ServiceHero";
import WhyPartner from "./digital-marketing/WhyPartner";

// Methodology steps data (Timeline format)
const methodologySteps = [
  {
    number: "01",
    title: "Audit & Analysis",
    description: "We start by analyzing your current digital footprint and identifying opportunities.",
  },
  {
    number: "02",
    title: "Strategy Development",
    description: "Creating a tailored roadmap aligned with your business goals.",
  },
  {
    number: "03",
    title: "Execution",
    description: "Implementing campaigns across chosen channels with precision.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "Continuous monitoring and tweaking to maximize performance.",
  },
];

// Expertise services data
const expertiseServices = [
  {
    icon: "seo",
    title: "SEO (Increase your rank on Google)",
    description: "Comprehensive search engine optimization strategies to improve visibility and organic traffic.",
    benefits: ["Higher organic traffic", "Better keyword rankings", "Improved domain authority"],
    isWide: true
  },
  {
    icon: "ppc",
    title: "PPC / Paid Ads",
    description: "Targeted paid advertising campaigns across Google,",
    benefits: ["Immediate traffic", "Precise targeting", "Measurable ROI"]
  },
  {
    icon: "social",
    title: "Social Media Marketing",
    description: "Targeted paid advertising campaigns across Google,",
    benefits: ["Brand awareness", "Community building", "Direct customer engagement"]
  },
  {
    icon: "email",
    title: "Email Marketing",
    description: "Personalized email campaigns that nurture leads and drive retention.",
    benefits: ["High conversion rates", "Customer retention", "Automated workflows"],
    isWide: true
  },
  {
    icon: "cro",
    title: "CRO (Conversion Rate Optimization)",
    description: "Optimizing your website and landing pages to turn more",
    benefits: ["Lower acquisition costs", "Higher revenue", "Better user experience"],
    isWide: true
  },
  {
    icon: "content",
    title: "Content Marketing",
    description: "Creating valuable content that attracts, engages, and converts",
    benefits: ["Thought leadership", "Lead generation", "SEO support"]
  },
];

export default function WorkPage() {
  return (
    <main className="pb-20">
      <ServiceHero
        tagline="OUR SERVICES"
        title="Digital"
        highlightedWord="Marketing"
        description="Data-driven strategies to maximize your online presence and drive measurable ROI across all digital channels."
        ctaText="Start Project"
        backgroundImage="/servicehero.png"
      />
      
     
      
      <WhyPartner
        tagline="OVERVIEW"
        title="Why partner with us for Digital Marketing?"
        description="In a rapidly evolving digital landscape, digital marketing requires more than just standard practices. It demands a strategic blend of creativity, data, and technology. We don't just execute tasks; we build comprehensive systems designed for scalable growth. Our approach is rooted in deep industry insights and a relentless pursuit of excellence."
        features={[
          "Data-Driven Decision Making",
          "Agile Methodology & Execution",
          "Transparent Reporting & Insights",
          "Dedicated Industry Experts"
        ]}
        yearsOfExcellence="10+"
        imageUrl="/servicehero.png"
      />
      
      <OurExpertise services={expertiseServices} />

      <MethodologyTimeline steps={methodologySteps} />
    </main>
  );
}
