import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "RHUMS",
    description: "Project Head / Lead Programmer",
    link: "rhums.com",
    position: "right" as const,
  },
];

export default function PortfolioProjects() {
  return (
    <section id="projects-section" className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-12 border-b border-gray-200 pb-12">
          <h2 className="text-sm font-bold uppercase tracking-widest">
            Featured Projects (1)
          </h2>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 last:border-b-0">
            <ProjectCard
              title={project.title}
              description={project.description}
              link={project.link}
              position={project.position}
            />
          </div>
        ))}

        <div className="border-t border-gray-200 py-12">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-widest">
            Community Contributions
          </h2>
          <p className="text-base text-gray-700">
            I have worked on some resources and tools; mostly for designers and
            developers like myself, you should check out{" "}
            <a
              href="https://www.figma.com/community/plugin/943569346291474506/Tints-and-Shades"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              SAMpleS. --- IGNORE ---
            </a>{" "}
            and{" "}
            <a
              href="https://www.figma.com/community/plugin/949697027067571105/Nigerian-Logos"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              Samples            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
