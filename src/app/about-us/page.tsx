import AboutLanding from "../components/AboutLanding";
import CEOMessage from "../components/CEOMessage";
import ClientTestimonials from "../components/ClientTestimonials";
import FeaturedVideos from "../components/FeaturedVideos";
import GrowthInsights from "../components/GrowthInsights";
import Milestone from "../components/Milestone";
import OurPrinciples from "../components/OurPrinciples";
import ReadyToElevate from "../components/ReadyToElevate";
import Stats from "../components/Stats";

export default function AboutUsPage() {
  return (
    <main className="pb-20">
      <AboutLanding />
      <CEOMessage />
      <Stats />
      <Milestone />
      <OurPrinciples />
      <ReadyToElevate />
      <FeaturedVideos />
      <ClientTestimonials />
      <GrowthInsights />
      
    </main>
  );
}
