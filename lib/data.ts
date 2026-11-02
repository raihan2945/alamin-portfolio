// All site content lives here. Edit this file to update the portfolio.
// Values marked "placeholder" are samples — replace them with real details.

import type { StaticImageData } from "next/image";
import alaminPhoto from "@/app/asset/alamin.jpeg";
import babyshoppersShot from "@/app/asset/projects/babyshoppers.png";
import fashionVillaShot from "@/app/asset/projects/fashion-villa.png";
import incommerceShot from "@/app/asset/projects/incommerce.png";

export const profile = {
  name: "MD. Al Amin",
  firstName: "MD.",
  lastName: "Al Amin",
  initials: "MA",
  title: "Full-Stack & AI Developer",
  tagline:
    "I design and build fast, scalable web products and AI-powered experiences — from the database and the model all the way to the pixel.",
  // Static import from app/asset — set to null to show the initials placeholder.
  photo: alaminPhoto as StaticImageData | null,
  email: "alamin.wd.bd@gmail.com",
  phone: "+880 1311-932840",
  whatsapp: "8801311932840", // digits only, used for wa.me links
  location: "Remote · Open worldwide",
  available: true,
  resume: null as string | null, // e.g. "/resume.pdf"
};

export const socials = [
  { label: "GitHub", href: "https://github.com/", icon: "github" }, // placeholder
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" }, // placeholder
  { label: "X", href: "https://x.com/", icon: "x" }, // placeholder
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}`, icon: "whatsapp" },
] as const;

export const roles = [
  "scalable Node.js APIs",
  "fast React & Next.js apps",
  "Python automation",
  "AI-powered products",
  "LLM agents & RAG systems",
];

export const stack = [
  "Node.js",
  "TypeScript",
  "React",
  "Next.js",
  "Python",
  "FastAPI",
  "Django",
  "Express",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "OpenAI",
  "LangChain",
  "PyTorch",
  "Tailwind CSS",
  "Docker",
  "AWS",
];

// placeholder numbers
export const stats = [
  { value: "3+", label: "Years building for the web" },
  { value: "30+", label: "Projects shipped" },
  { value: "10+", label: "AI integrations delivered" },
];

export const services = [
  {
    icon: "server",
    title: "Backend & APIs",
    description:
      "Robust, well-tested services and REST/GraphQL APIs built with Node.js — designed to scale, easy to maintain.",
    tools: ["Node.js", "Express", "NestJS", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    icon: "layout",
    title: "Frontend Engineering",
    description:
      "Pixel-perfect, accessible interfaces with React and Next.js — server components, smooth motion and great Core Web Vitals.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    icon: "python",
    title: "Python & Automation",
    description:
      "Data pipelines, scrapers, scripts and high-performance APIs that take repetitive work off your team's plate.",
    tools: ["Python", "FastAPI", "Django", "Pandas", "Celery"],
  },
  {
    icon: "sparkles",
    title: "AI & LLM Apps",
    description:
      "Chatbots, RAG over your own documents, AI agents and model integrations that turn data into useful product features.",
    tools: ["OpenAI", "Claude", "LangChain", "Vector DBs", "PyTorch"],
  },
] as const;

// Live client sites — add a `repo` URL to also show a code button
export const projects: {
  title: string;
  kind: string;
  description: string;
  tags: string[];
  hue: number;
  featured?: boolean;
  image?: StaticImageData;
  live?: string;
  repo?: string;
}[] = [
  {
    title: "InCommerce",
    kind: "E-commerce · Electronics",
    description:
      "A full-featured electronics store for Bangladesh with spec-based filtering and side-by-side comparison, a compatibility-aware PC builder, pre-orders, trade-ins, warranty lookup and order tracking — in English and Bangla, with light and dark modes.",
    tags: ["Next.js", "REST API", "PC Builder", "Bilingual EN/BN"],
    hue: 210,
    featured: true,
    image: incommerceShot,
    live: "https://incommerce.online/",
  },
  {
    title: "Fashion Villa",
    kind: "E-commerce · Fashion",
    description:
      "A clothing store focused on baby and kids' wear, with category browsing, search filters, wishlist, order tracking and one-tap ordering over WhatsApp or Messenger.",
    tags: ["Next.js", "REST API", "Cloudflare"],
    hue: 330,
    image: fashionVillaShot,
    live: "https://fashionvillasbd.com",
  },
  {
    title: "BabyShoppers",
    kind: "E-commerce · Baby care",
    description:
      "An online baby and mom care shop with brand and category browsing, OTP login, wishlist, sale badges, cash on delivery and nationwide shipping.",
    tags: ["WordPress", "WooCommerce", "OTP Login"],
    hue: 160,
    image: babyshoppersShot,
    live: "https://www.babyshoppers.com.bd",
  },
];

// placeholder experience
export const experience = [
  {
    period: "2024 — Present",
    role: "Full-Stack & AI Developer",
    company: "Freelance",
    description:
      "Building AI-powered web apps, LLM integrations and full-stack products for startups and businesses worldwide.",
    tags: ["Next.js", "Python", "LLMs"],
  },
  {
    period: "2021 — 2022",
    role: "Junior Web Developer",
    company: "Digital Agency",
    description:
      "Built responsive websites and internal tools, and automated reporting workflows with Python.",
    tags: ["JavaScript", "Python", "MongoDB"],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
