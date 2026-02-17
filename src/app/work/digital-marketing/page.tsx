import OurMethodology from "./OurMethodology";
import ServiceHero from "./ServiceHero";

// Methodology steps data
const methodologySteps = [
  {
    number: "01",
    title: "Research",
    description: "Deep dive into your market, audience, and competitive landscape to uncover opportunities.",
    gradientColors: ['#667eea', '#764ba2'] as [string, string], // Purple-blue
  },
  {
    number: "02",
    title: "Strategy",
    description: "Develop data-driven roadmaps aligned with your business goals and growth objectives.",
    gradientColors: ['#f093fb', '#f5576c'] as [string, string], // Pink-red
  },
  {
    number: "03",
    title: "Execution",
    description: "Launch campaigns with precision timing, creative excellence, and technical expertise.",
    gradientColors: ['#4facfe', '#00f2fe'] as [string, string], // Blue-cyan
  },
  {
    number: "04",
    title: "Analysis",
    description: "Continuous monitoring and optimization to maximize ROI and scale what works.",
    gradientColors: ['#43e97b', '#38f9d7'] as [string, string], // Green-teal
  },
];

export default function DigitalMarketingPage() {
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
      
      <OurMethodology steps={methodologySteps} />
      
      {/* Future sections can be added here */}
    </main>
  );
}
