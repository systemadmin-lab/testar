import ClientTestimonials from "../components/ClientTestimonials";
import FeaturedVideos from "../components/FeaturedVideos";
import GrowthInsights from "../components/GrowthInsights";
import GrowthSolutions from "../components/GrowthSolutions";
import ReadyToElevate from "../components/ReadyToElevate";

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <GrowthSolutions />
      <ReadyToElevate />
      <GrowthInsights />
      <FeaturedVideos />
      <ClientTestimonials />
    </main>
  );
}
