import AboutLanding from "../components/AboutLanding";
import CEOMessage from "../components/CEOMessage";
import Milestone from "../components/Milestone";
import Stats from "../components/Stats";

export default function AboutUsPage() {
  return (
    <main className="pb-20">
      <AboutLanding />
      <CEOMessage />
      <Stats />
      <Milestone />
      
    </main>
  );
}
