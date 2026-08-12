import type { SkillGroup } from "@/types/portfolio";

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    summary: "Interfaces built for clarity, responsiveness, and maintainability.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Responsive UI", "Component Architecture"],
  },
  {
    label: "Data + Integration",
    summary: "Frontend systems connected cleanly to application logic and services.",
    skills: ["Supabase", "PostgreSQL", "REST APIs", "Authentication", "Server Actions", "Webhooks"],
  },
  {
    label: "Tooling",
    summary: "Workflows focused on consistency, version control, and fast iteration.",
    skills: ["Git", "GitHub", "Docker", "Vite", "npm", "pnpm", "Design Handoff"],
  },
  {
    label: "UI Workflow",
    summary: "Attention to structure, accessibility, and implementation detail.",
    skills: ["Figma Implementation", "Design Systems", "Accessibility", "Debugging", "Interaction States", "Cross-device QA"],
  },
];
