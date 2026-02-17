import ClientTestimonials from "../components/ClientTestimonials";
import FeaturedVideos from "../components/FeaturedVideos";
import GrowthInsights from "../components/GrowthInsights";
import GrowthSolutions from "../components/GrowthSolutions";
import ReadyToElevate from "../components/ReadyToElevate";
import ServicesLanding from "../components/ServicesLanding";
import Stats from "../components/Stats";

export default function ServicesPage() {
  return (
    <main className="pb-20">
      <ServicesLanding />
      <Stats />
      <GrowthSolutions />
      <ReadyToElevate />
      <GrowthInsights />
      {/* <FeaturedVideos /> */}
      <ClientTestimonials />
    </main>
  );
}
