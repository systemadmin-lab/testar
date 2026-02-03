import Clients from "../components/Clients";
import FeaturedWork from "../components/FeaturedWork";
import GrowthEngine from "../components/GrowthEngine";
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
      <ReadyToElevate />
    </main>
  );
}
