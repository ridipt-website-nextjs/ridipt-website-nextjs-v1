import { ChallengeItem } from "@/components/services/process-card-section";
import { Handshake, BookOpen, Users, Clock, Star, Layers } from "lucide-react";


export const howWeWork: ChallengeItem[] = [
  {
    id: "friendly-environment",
    title: "Friendly Environment",
    description:
      "We believe in maintaining an environment that is filled with integrity and joy to manifest a better workplace. This results in the company towards the growth and betterment of an individual.",
    icon: Handshake,
    colors: {
      primary: "blue",
      bg: "bg-blue-50",
      border: "border-blue-500",
      text: "text-blue-900",
      subtitle: "text-blue-700",
      icon: "text-blue-600",
      accent: "bg-blue-100",
      hover: "hover:bg-blue-100",
      gradient: "from-blue-500 to-blue-600",
    },
  },
  {
    id: "continuous-learning",
    title: "Continuous Learning",
    description:
      "Learning is a timeless process, and we make sure that the individual who is part of our journey will get the opportunity to learn every day to add to their present knowledge and experience.",
    icon: BookOpen,
    colors: {
      primary: "green",
      bg: "bg-green-50",
      border: "border-green-500",
      text: "text-green-900",
      subtitle: "text-green-700",
      icon: "text-green-600",
      accent: "bg-green-100",
      hover: "hover:bg-green-100",
      gradient: "from-green-500 to-green-600",
    },
  },
  {
    id: "team-support",
    title: "Team Support",
    description:
      "Our employees always believe in a collaborative approach to achieve desired results. We have tremendous team support for fielding your queries and solving problems that come your way.",
    icon: Users,
    colors: {
      primary: "purple",
      bg: "bg-purple-50",
      border: "border-purple-500",
      text: "text-purple-900",
      subtitle: "text-purple-700",
      icon: "text-purple-600",
      accent: "bg-purple-100",
      hover: "hover:bg-purple-100",
      gradient: "from-purple-500 to-purple-600",
    },
  },
  {
    id: "flexible-timing",
    title: "Flexible Timing",
    description:
      "We strive to find the potent of each talent we work with and offer flexible timings for our employees. It provides performance liberty as well as become authorized to achieve the target by pre-scheduling the task.",
    icon: Clock,
    colors: {
      primary: "orange",
      bg: "bg-orange-50",
      border: "border-orange-500",
      text: "text-orange-900",
      subtitle: "text-orange-700",
      icon: "text-orange-600",
      accent: "bg-orange-100",
      hover: "hover:bg-orange-100",
      gradient: "from-orange-500 to-orange-600",
    },
  },
  {
    id: "yearly-appraisals",
    title: "Yearly Appraisals",
    description:
      "We realize the consistent work and efforts of our team members. So, we appreciate each of them with yearly appraisals, promotions, and awards to encourage their power and potential.",
    icon: Star,
    colors: {
      primary: "yellow",
      bg: "bg-yellow-50",
      border: "border-yellow-500",
      text: "text-yellow-900",
      subtitle: "text-yellow-700",
      icon: "text-yellow-600",
      accent: "bg-yellow-100",
      hover: "hover:bg-yellow-100",
      gradient: "from-yellow-500 to-yellow-600",
    },
  },
  {
    id: "diversified-sources",
    title: "Diversified Sources",
    description:
      "We, as a company, empower the employees with a heap of resources to accomplish goals. We owe a pool of diverse resources as an asset that impacts the profitability and growth of the company.",
    icon: Layers,
    colors: {
      primary: "indigo",
      bg: "bg-indigo-50",
      border: "border-indigo-500",
      text: "text-indigo-900",
      subtitle: "text-indigo-700",
      icon: "text-indigo-600",
      accent: "bg-indigo-100",
      hover: "hover:bg-indigo-100",
      gradient: "from-indigo-500 to-indigo-600",
    },
  },
];
