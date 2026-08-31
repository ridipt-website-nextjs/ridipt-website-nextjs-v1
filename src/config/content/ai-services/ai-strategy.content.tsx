import {
  Search,
  Database,
  Target,
  BarChart3,
  Scale,
  Settings,
  Compass,
  Shield,
  Zap,
  Building,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const ai_strategy_content: ContentItem[] = [
  {
    title: "AI Opportunity Assessment",
    description:
      "We review your operations, data, and goals to identify the specific places where AI can save time, cut costs, or create new value for your business.",
    icon: Search,
  },
  {
    title: "Data Readiness Audit",
    description:
      "We assess the quality, structure, and accessibility of your existing data, so you know exactly what's ready to use and what needs work before any AI project starts.",
    icon: Database,
  },
  {
    title: "Use Case Prioritization & Roadmap",
    description:
      "We help you rank potential AI initiatives by effort and impact, and build a practical, phased roadmap so you know what to tackle first.",
    icon: Target,
  },
  {
    title: "ROI & Feasibility Analysis",
    description:
      "Before you commit budget, we estimate the likely cost, timeline, and return of each AI opportunity so decisions are grounded in numbers, not hype.",
    icon: BarChart3,
  },
  {
    title: "Responsible AI & Governance Guidance",
    description:
      "We help you set sensible policies around data use, model oversight, and AI accountability, so your AI adoption stays trustworthy as it scales.",
    icon: Scale,
  },
  {
    title: "Vendor & Tool Selection",
    description:
      "We provide objective, vendor-neutral guidance on which AI platforms, models, and tools genuinely fit your needs and budget.",
    icon: Settings,
  },
];

export const ai_strategy_services: FeatureItem[] = [
  {
    title: "Clear, Prioritized AI Roadmap",
    subtitle: "Know Exactly What to Do Next",
    description:
      "Walk away with a concrete, sequenced plan for AI adoption instead of a vague sense that you should 'do something with AI'.",
    icon: Compass,
  },
  {
    title: "Reduced Risk of Failed AI Projects",
    subtitle: "Avoid Costly False Starts",
    description:
      "By validating feasibility and data readiness upfront, we help you avoid investing in AI projects that were never going to work.",
    icon: Shield,
  },
  {
    title: "Faster Time to First AI Win",
    subtitle: "Momentum That Builds Buy-In",
    description:
      "We help you pick a well-scoped first project that can show real results quickly, building internal confidence for bigger initiatives.",
    icon: Zap,
  },
  {
    title: "Objective, Vendor-Neutral Advice",
    subtitle: "Recommendations in Your Interest",
    description:
      "Our recommendations are based on what fits your business, not on which platform we're incentivized to sell you.",
    icon: CheckCircle,
  },
  {
    title: "Alignment with Business Goals",
    subtitle: "AI That Serves Strategy, Not Trends",
    description:
      "Every recommendation is tied back to a measurable business outcome, so AI investment supports what your company is actually trying to achieve.",
    icon: Building,
  },
  {
    title: "Built-In Governance & Compliance",
    subtitle: "Responsible From Day One",
    description:
      "We bake data privacy and responsible AI practices into the roadmap from the start, rather than bolting them on after something goes wrong.",
    icon: Lightbulb,
  },
];

const ai_strategy_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Discovery & Stakeholder Interviews",
    description:
      "We meet with your team to understand current operations, pain points, and goals, and review the data and systems you already have in place.",
  },
  {
    id: "innovation-and-design",
    title: "Opportunity Mapping",
    description:
      "We map out where AI could realistically help, weighing potential impact against effort, data readiness, and organizational appetite for change.",
  },
  {
    id: "full-cycle-product-development",
    title: "Roadmap Delivery",
    description:
      "We deliver a clear, prioritized roadmap with recommended tools, estimated costs, and a suggested first project to build momentum.",
  },
  {
    id: "product-growth-and-support",
    title: "Ongoing Advisory",
    description:
      "We stay available as an advisory partner as you begin implementation, helping you course-correct and plan the next phase of adoption.",
  },
];

export const ai_strategy_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  ai_strategy_streamlining_overrides
);

const ai_strategy_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct structured interviews and a data audit to understand your business context before recommending a single AI use case.",
  },
  {
    id: "code",
    title: "Roadmap Development",
    description:
      "We translate research findings into a concrete, prioritized roadmap with clear next steps, estimated costs, and recommended tools.",
  },
];

export const ai_strategy_business_process = mergeProcessWithOverrides(
  business_process,
  ai_strategy_business_overrides
);
