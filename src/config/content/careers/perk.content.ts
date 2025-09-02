import { FeatureItem } from "@/config/interface";
import {
  Briefcase,
  HeartPulse,
  Umbrella,
  Coins,
  MessageCircle,
  Users,
} from "lucide-react";

export const perks_benefits: FeatureItem[] = [
  {
    title: "Professional Development",
    subtitle: "Grow your career",
    description:
      "Professional growth is a must for an individual from any field. You will get dedicated time to invest in increasing your professional skills that add value to your profile and career opportunities, as well.",
    icon: Briefcase,
  },
  {
    title: "Healthcare Activities",
    subtitle: "Stay healthy & safe",
    description:
      "At Yudiz Solutions, we organize private healthcare activities to ensure you are in good health. We also finance the medical package for our employees from one of the finest health care groups.",
    icon: HeartPulse,
  },
  {
    title: "Relax Time",
    subtitle: "Work-life balance",
    description:
      "It’s imperative to switch off and relax sometime around the office. We emphasize creating a work and life balance to rejuvenate and boost productivity. We practice it by taking paid time off for a vacation or recharge through some fun activities.",
    icon: Umbrella,
  },
  {
    title: "Above Average Salaries",
    subtitle: "Industry-best pay",
    description:
      "We evaluate and recognize the skills within you to offer salaries or annual packages that match your position of work and are best in the industry. Employees that are part of our company perform the best out of themselves and make it count.",
    icon: Coins,
  },
  {
    title: "Soft Skill Development",
    subtitle: "Improve communication",
    description:
      "We conduct weekly English classes for our employees to ensure they are comfortable in communication with our international clients and inside the premises of our company.",
    icon: MessageCircle,
  },
  {
    title: "Co-Finance Conference",
    subtitle: "Learn & grow together",
    description:
      "Our vision is to learn and grow together. We will manage and partially fund the budget for your conference attendance so that you can learn from the best and acquire optimal skills.",
    icon: Users,
  },
];
