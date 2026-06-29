import type { LucideIcon } from "lucide-react";
import { Mail } from "lucide-react";
import type { IconType } from "react-icons";

import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const heroTechnologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
] as const;

export const heroStats = [
  "Frontend Engineer",
  "3+ Years Experience",
  "Production Applications",
] as const;

export const profileSkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "React Native",
  "Tailwind CSS",
] as const;

export type SocialLink = {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
};

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/ramanmalviya987",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raman-malviya-75b579211/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:raman.s.malviya@gmail.com",
    icon: Mail,
  },
];
