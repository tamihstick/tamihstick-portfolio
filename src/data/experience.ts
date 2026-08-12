import type { Experience } from "@/types/portfolio";

export const experience: Experience[] = [
  {
    company: "Freelance / Client Work",
    role: "Front-End Developer",
    employmentType: "Contract",
    startDate: "2024",
    current: true,
    description:
      "Designing and building responsive product interfaces for client portals, dashboards, and business tools.",
    achievements: [
      "Delivered production-ready UI systems for dashboard and account-management products.",
      "Worked closely with stakeholders to turn flows and wireframes into maintainable frontend implementations.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
  },
  {
    company: "Product Collaboration Projects",
    role: "UI Engineer",
    employmentType: "Project-based",
    startDate: "2023",
    endDate: "2024",
    description:
      "Focused on component architecture, responsive page systems, and API-connected product experiences.",
    achievements: [
      "Built reusable interface modules that reduced duplication across project screens.",
      "Improved mobile usability for feature-rich admin and data-heavy layouts.",
    ],
    technologies: ["React", "JavaScript", "REST APIs", "Figma", "GitHub"],
  },
  {
    company: "Independent Learning and Builds",
    role: "Frontend Developer",
    employmentType: "Self-directed",
    startDate: "2022",
    endDate: "2023",
    description:
      "Developed practical experience through personal builds, frontend experiments, and shipping portfolio-oriented web products.",
    achievements: [
      "Strengthened knowledge of component systems, accessibility, and modern React workflows.",
      "Created small apps and UI studies to sharpen implementation quality and design sensitivity.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"],
  },
];
