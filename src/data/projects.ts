import type { Project } from "@/types/portfolio";
import { Diplomata_SC } from "next/font/google";

export const projects: Project[] = [
  {
    slug: "foe-ph-portal",
    name: "FOE PH Portal",
    summary:
      "Member-facing portal for organizing account, payment, and service workflows in one responsive interface.",
    description:
      "FOE PH Portal consolidates member account data, service requests, and billing visibility into a single dashboard experience designed for everyday use on desktop and mobile.",
    role: "Full Stack Developer",
    year: "2026",
    status: "active",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Supabase",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dashboard interface with charts, cards, and account details.",
    category: "Portal / Dashboard",
    teamSize: "3",
    liveUrl: "https://foe-ph-portal.vercel.app/",
    responsibilities: [
      "Built responsive dashboard layouts for account and service flows.",
      "Connected frontend modules to API-driven data and authenticated routes.",
      "Refined UI states for loading, empty, and error scenarios across key screens.",
    ],
    challenges: [
      "Balancing dense account information with mobile readability required compressing navigation and metadata without hiding critical actions.",
    ],
    outcomes: [
      "Delivered a structured portal experience that centralizes recurring member tasks in a single interface.",
    ],
  },
  {
    slug: "wisekita",
    name: "WiseKita",
    summary:
      "Compensation planning experience focused on transparent salary insights, comparisons, and decision support.",
    description:
      "WiseKita presents salary reference information in a way that is easier to browse, compare, and understand for job seekers and professionals evaluating compensation.",
    role: "Full Stack Developer",
    year: "2026",
    status: "pending",
    featured: true,
    technologies: [
      "React",
      "TypeScript",
      "Chart UI",
      "Supabase",
      "Responsive UI",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Analytics and comparison UI shown on a laptop screen.",
    category: "Data Product",
    teamSize: "2",
    repositoryUrl: "https://github.com/tamihstick",
    responsibilities: [
      "Implemented comparison views and structured salary information cards.",
      "Created reusable UI primitives for filters, tables, and breakdown panels.",
      "Improved layout consistency across desktop and mobile reporting screens.",
    ],
    challenges: [
      "Presenting dense compensation data clearly required careful hierarchy, progressive disclosure, and responsive table alternatives.",
    ],
    outcomes: [
      "Shipped a cleaner workflow for exploring salary information without overwhelming first-time visitors.",
    ],
  },
  {
    slug: "payedly",
    name: "Payedly",
    summary:
      "Product interface for payments-related flows with clear transactional states and operational feedback.",
    description:
      "Payedly focuses on making payment and account actions easier to understand through structured UI states, concise feedback, and consistent interaction patterns.",
    role: "Full Stack Developer",
    year: "2026",
    status: "ongoing",
    featured: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Authentication",
      "API Integration",
      "Design Systems",
    ],
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Payment-oriented product interface with transaction details.",
    category: "Fintech Interface",
    teamSize: "3",
    responsibilities: [
      "Built transactional screens with clear state handling for payment workflows.",
      "Collaborated with design on repeatable patterns for forms, summaries, and confirmation states.",
      "Integrated authenticated frontend flows with backend services.",
    ],
    challenges: [
      "The main UX challenge was reducing ambiguity in payment status messaging while keeping flows fast and low-friction.",
    ],
    outcomes: [
      "Established a consistent frontend pattern library for core payment journeys.",
    ],
  },
  {
    slug: "archive-01-portfolio",
    name: "ARCHIVE_01 Portfolio",
    summary:
      "An archival-inspired personal portfolio system designed to present frontend work with precision and restraint.",
    description:
      "This portfolio treats personal work as an indexed technical record, combining editorial structure, project documentation, and responsive interface details.",
    role: "Designer / Developer",
    year: "2026",
    status: "active",
    featured: false,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Metadata",
      "Accessibility",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer workspace with keyboard, monitor, and notebook.",
    category: "Portfolio",
    teamSize: "1",
    repositoryUrl: "https://github.com/tamihstick",
    responsibilities: [
      "Designed the system language and content architecture.",
      "Built reusable editorial layout components and themed navigation.",
      "Structured project data for future case-study expansion.",
    ],
  },
  {
    slug: "dilgms",
    name: "DILGMS",
    summary: "DILG manage system for managing and tracking dilg projects.",
    description:
      "This project management system is designed for managing dilg projects and tracking project progress and as a ojt project.",
    role: "Full Stack Developer",
    year: "2022",
    status: "archived",
    featured: false,
    technologies: ["PHP", "CodeIgniter 4", "CSS", "HTML", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Developer workspace with keyboard, monitor, and notebook.",
    category: "Management System",
    teamSize: "4",
    repositoryUrl: "https://github.com/tamihstick",
    responsibilities: [
      "Designed the system language and content architecture.",
      "Built reusable editorial layout components and themed navigation.",
      "Structured project data for future case-study expansion.",
    ],
  },
  {
    slug: "rhu2stodomingomanagementsystem",
    name: "Rhu2stodomingomanagement",
    summary:
      "Medical appointment and record management system for Nabua rural health unit II.",
    description:
      "This system is designed for managing medical appointments and record and serve as a capstone project.",
    role: "Full Stack Developer",
    year: "2026",
    status: "archived",
    featured: false,
    technologies: [
      "Native PHP",
      "CodeIgniter 4",
      "CSS",
      "HTML",
      "JavaScript",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rhu2stodomingomanagement system interface.",
    category: "Management System",
    teamSize: "4",
    repositoryUrl: "https://github.com/tamihstick",
    responsibilities: [
      "Designed the system language and content architecture.",
      "Built reusable UI components.",
      "Structured medical appointment and record data for future case-study expansion.",
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
