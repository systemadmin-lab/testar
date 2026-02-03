import Clients from "../components/Clients";
import ClientTestimonials from "../components/ClientTestimonials";
import FeaturedVideos from "../components/FeaturedVideos";
import FeaturedWork from "../components/FeaturedWork";
import GrowthEngine from "../components/GrowthEngine";
import GrowthInsights from "../components/GrowthInsights";
import GrowthSolutions from "../components/GrowthSolutions";
import Landing from "../components/Landing";
import OurProcess from "../components/OurProcess";
import ReadyToElevate from "../components/ReadyToElevate";
import Stats from "../components/Stats";

export default function HomePage() {
  return (
    <main className="flex flex-col pb-20">
      <Landing />
      <Stats />
      <GrowthSolutions />
      <GrowthEngine />
      <FeaturedWork />
      <Clients />
      <OurProcess />
      <GrowthInsights />
      <FeaturedVideos /> 
      <ReadyToElevate />
    
      <ClientTestimonials />
    </main>
  );
}
