import {
  Globe,
  ShoppingCart,
  Building2,
  Cloud,
  Palette,
  Plug,
  Database,
  Server,
  Zap,
  Shield,
  Code,
  Sparkles,
  LifeBuoy,
  Award,
  type LucideIcon,
} from "lucide-react";

import projectErp from "@/assets/project-erp.jpg";
import projectHotel from "@/assets/project-hotel.jpg";
import projectRental from "@/assets/project-rental.jpg";
import projectTourism from "@/assets/project-tourism.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSaas from "@/assets/project-saas.jpg";

export interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const services: Service[] = [
  { icon: Globe, title: "Web Development", desc: "Custom websites optimized for performance, accessibility, and scalability." },
  { icon: ShoppingCart, title: "E-Commerce Development", desc: "Secure online stores with payment integration and conversion-focused UX." },
  { icon: Building2, title: "Enterprise Systems", desc: "Business management systems and workflow automation tailored to your ops." },
  { icon: Cloud, title: "SaaS Development", desc: "Cloud-based software platforms built for multi-tenant scale from day one." },
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces and experiences validated through research." },
  { icon: Plug, title: "API Integration", desc: "Third-party and custom API development with rock-solid contracts." },
  { icon: Database, title: "Database Architecture", desc: "Scalable database systems engineered for performance and reliability." },
  { icon: Server, title: "Cloud Deployment", desc: "AWS, Vercel, and Docker deployments with CI/CD and observability." },
];

export interface Project {
  title: string;
  desc: string;
  image: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Enterprise ERP Platform",
    desc: "End-to-end resource planning for a regional manufacturer—HR, inventory, finance, and analytics in one suite.",
    image: projectErp,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
  {
    title: "Hotel Management System",
    desc: "Reservations, housekeeping, billing, and channel sync for a 200-room property group.",
    image: projectHotel,
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Rental Management Suite",
    desc: "Property listings, contracts, and tenant portals with automated payment workflows.",
    image: projectRental,
    tech: ["TypeScript", "Express", "PostgreSQL"],
  },
  {
    title: "Tourism Booking Platform",
    desc: "Multi-vendor marketplace for tours and stays, integrated with Stripe and global payments.",
    image: projectTourism,
    tech: ["Next.js", "Stripe", "Tailwind", "Vercel"],
  },
  {
    title: "E-Commerce Marketplace",
    desc: "Headless commerce platform with custom checkout, inventory, and merchant dashboard.",
    image: projectEcommerce,
    tech: ["React", "GraphQL", "MySQL", "AWS"],
  },
  {
    title: "SaaS Analytics Application",
    desc: "Real-time business intelligence dashboard with role-based access and white-label theming.",
    image: projectSaas,
    tech: ["Next.js", "NestJS", "PostgreSQL", "Docker"],
  },
];

export const whyUs = [
  { icon: Zap, title: "Fast Delivery", desc: "Tight cycles, weekly demos, and shipped value—no quarter-long surprises." },
  { icon: Server, title: "Scalable Architecture", desc: "Systems engineered for growth from your first 10 to your millionth user." },
  { icon: Shield, title: "Secure Development", desc: "Security-by-default with code reviews, SAST, and best-in-class auth flows." },
  { icon: Code, title: "Modern Technologies", desc: "Battle-tested modern stacks chosen for the job—not because they're trendy." },
  { icon: LifeBuoy, title: "Long-Term Support", desc: "Maintenance, observability, and on-call coverage long after launch." },
  { icon: Award, title: "Global Standards", desc: "Engineering practices benchmarked against the best teams in the world." },
];

export const values = [
  { title: "Innovation", desc: "We treat every product as an opportunity to push what's possible." },
  { title: "Excellence", desc: "Craft is non-negotiable. Quality compounds." },
  { title: "Reliability", desc: "We say what we'll do, then we do it—on time, on spec." },
  { title: "Transparency", desc: "Open communication, honest tradeoffs, no surprises." },
  { title: "Client Success", desc: "Your business outcomes are the only metric that matters." },
];

export const testimonials = [
  {
    quote:
      "Zylos Tech delivered our ERP rollout three weeks ahead of schedule and the system has been rock solid. The team is exceptional.",
    author: "Sara Mekonnen",
    role: "CTO, NorthBridge Holdings",
  },
  {
    quote:
      "They rebuilt our SaaS platform from the ground up. Page loads dropped from 4s to under 800ms and conversions are up 38%.",
    author: "Daniel Hartmann",
    role: "VP Engineering, Aerialink",
  },
  {
    quote:
      "Working with Zylos felt like adding a senior engineering team in a week. The communication and quality bar are world-class.",
    author: "Liya Tesfaye",
    role: "Founder, Mela Studios",
  },
  {
    quote:
      "Our booking platform handles 4x the traffic on the same infrastructure thanks to their architecture work. Outstanding partner.",
    author: "Marcus O'Brien",
    role: "Product Director, RoamCo",
  },
  {
    quote:
      "From discovery to deployment, every milestone hit. Zylos is the kind of partner you wish you'd hired three years earlier.",
    author: "Hanna Yusuf",
    role: "COO, Selam Logistics",
  },
];

export const stats = [
  { value: "120+", label: "Projects Delivered" },
  { value: "40+", label: "Clients Worldwide" },
  { value: "8+", label: "Years of Experience" },
  { value: "99.9%", label: "Uptime Delivered" },
];

export const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "NestJS"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  Cloud: ["AWS", "Vercel", "Docker"],
} as const;
