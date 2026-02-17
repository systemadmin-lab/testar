import ClientTestimonials from "../components/ClientTestimonials";
import ContactMap from "../components/ContactMap";
import FAQ from "../components/FAQ";
import FeaturedVideos from "../components/FeaturedVideos";
import GrowthInsights from "../components/GrowthInsights";
import ServiceContact from "../components/ServiceContact";

export default function ContactUsPage() {
  return (
    <main className="pb-20">
      <ServiceContact />
      <FAQ />
      <ContactMap />
      <GrowthInsights />
      {/* <FeaturedVideos /> */}
      <ClientTestimonials />
    </main>
  );
}
