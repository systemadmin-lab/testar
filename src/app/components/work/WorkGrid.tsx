import WorkCard from "./WorkCard";

interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

interface Project {
  id: string;
  subtitle: string;
  title: string;
  quote: string;
  stats: Stat[];
  gradientColors: [string, string];
}

interface WorkGridProps {
  projects: Project[];
}

export default function WorkGrid({ projects }: WorkGridProps) {
  return (
    <div className="flex flex-col gap-24 w-full max-w-[1560px]">
      {projects.map((project, index) => (
        <WorkCard
          key={project.id}
          id={project.id}
          subtitle={project.subtitle}
          title={project.title}
          quote={project.quote}
          stats={project.stats}
          gradientColors={project.gradientColors}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
