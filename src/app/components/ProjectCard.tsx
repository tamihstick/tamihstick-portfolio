import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  position?: "left" | "right";
}

export default function ProjectCard({
  title,
  description,
  link,
  position = "left",
}: ProjectCardProps) {
  return (
    <div
      className={`flex flex-col gap-6 py-12 md:py-20 ${
        position === "right" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
          {description}
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="text-2xl font-bold tracking-tight transition-colors hover:text-gray-600 md:text-4xl">
            {title}
          </h2>
        </a>
      </div>

      <div className="flex flex-1 items-end justify-start md:justify-center">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border-b-2 border-gray-900 pb-2 text-sm font-medium transition-colors hover:text-gray-600"
        >
          Visit Site
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}
