import ClientTestimonials from "../components/ClientTestimonials";
import ContactMap from "../components/ContactMap";
import FAQ from "../components/FAQ";
import GrowthInsights from "../components/GrowthInsights";
import ServiceContact from "../components/ServiceContact";
import UnifiedHero from "../components/UnifiedHero";

export default function ContactUsPage() {
  return (
    <main className="pb-20">
      <UnifiedHero 
        title="Get in Touch" 
        description="Ready to start your growth journey? We'd love to hear from you." 
        backgroundImage="/home1.png"
      />
      <ServiceContact />
      <FAQ />
      <ContactMap />
      <GrowthInsights />
      {/* <FeaturedVideos /> */}
      <ClientTestimonials />
    </main>
  );
}
