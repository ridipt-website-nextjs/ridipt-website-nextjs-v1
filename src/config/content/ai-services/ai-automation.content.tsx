import {
  FileText,
  Workflow,
  Route,
  GitBranch,
  Layers,
  ClipboardCheck,
  Clock,
  DollarSign,
  CheckCircle,
  Settings,
  TrendingUp,
  Zap,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const ai_automation_content: ContentItem[] = [
  {
    title: "Intelligent Document Processing",
    description:
      "Automatically read, classify, and extract data from invoices, forms, and contracts, turning piles of paperwork into structured, usable data.",
    icon: FileText,
  },
  {
    title: "Workflow Automation with AI Decisioning",
    description:
      "Combine automation with AI judgment calls, so routine business processes can make smart decisions, not just follow fixed rules.",
    icon: Workflow,
  },
  {
    title: "Support Ticket Triage & Routing",
    description:
      "Automatically categorize, prioritize, and route incoming support tickets to the right team, cutting response times before a human even looks at it.",
    icon: Route,
  },
  {
    title: "AI + RPA Integration",
    description:
      "Layer AI decision-making on top of your existing robotic process automation, so bots can handle exceptions instead of stopping and waiting for a human.",
    icon: GitBranch,
  },
  {
    title: "Automated Data Entry & Extraction",
    description:
      "Eliminate manual re-typing between systems by having AI extract and enter data directly from emails, PDFs, and scanned documents.",
    icon: Layers,
  },
  {
    title: "Approval & Exception Handling",
    description:
      "Set up smart approval flows where AI pre-screens routine cases and flags only genuine exceptions for human review.",
    icon: ClipboardCheck,
  },
];

export const ai_automation_services: FeatureItem[] = [
  {
    title: "Reduced Manual Effort",
    subtitle: "Free Your Team From Repetitive Work",
    description:
      "Automate the repetitive, time-consuming tasks that eat up your team's day, so they can focus on work that actually needs human judgment.",
    icon: Clock,
  },
  {
    title: "Fewer Errors",
    subtitle: "Consistent, Accurate Processing",
    description:
      "AI-driven automation applies the same rules and checks every time, reducing the costly mistakes that come with manual, repetitive data entry.",
    icon: CheckCircle,
  },
  {
    title: "Faster Turnaround Times",
    subtitle: "From Days to Minutes",
    description:
      "Processes that used to take days of manual handling can often be completed in minutes once automated end-to-end.",
    icon: Zap,
  },
  {
    title: "Lower Operational Costs",
    subtitle: "Do More With the Same Team",
    description:
      "By automating routine work, you can absorb business growth without proportionally growing headcount for back-office tasks.",
    icon: DollarSign,
  },
  {
    title: "Easy Integration with Existing Tools",
    subtitle: "No Rip-and-Replace Required",
    description:
      "We design automations to plug into the systems you already use, so you get the benefits without a disruptive platform migration.",
    icon: Settings,
  },
  {
    title: "Scalable Without Adding Headcount",
    subtitle: "Built to Handle More Volume",
    description:
      "Once automated, a process can typically handle a spike in volume without needing more people, keeping your operations resilient.",
    icon: TrendingUp,
  },
];

const ai_automation_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Process Discovery",
    description:
      "We map your current manual workflows to identify the highest-friction, most repetitive tasks that are the best candidates for AI automation.",
  },
  {
    id: "innovation-and-design",
    title: "Automation Design",
    description:
      "We design the automated workflow, including where AI should make decisions and where a human should stay in the loop for approval.",
  },
  {
    id: "full-cycle-product-development",
    title: "Build & Connect",
    description:
      "We build the automation and connect it to your existing systems, whether that's your ERP, helpdesk, email, or document storage.",
  },
  {
    id: "product-growth-and-support",
    title: "Refine & Expand",
    description:
      "We track exception rates and processing accuracy, then refine the automation and extend it to cover more of the process over time.",
  },
];

export const ai_automation_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  ai_automation_streamlining_overrides
);

const ai_automation_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We study your current process end-to-end, including its exceptions and edge cases, before designing an automation that actually holds up in production.",
  },
  {
    id: "code",
    title: "Automation Development",
    description:
      "Our team builds the automation logic, AI decisioning steps, and system integrations needed to run the process reliably with minimal manual input.",
  },
];

export const ai_automation_business_process = mergeProcessWithOverrides(
  business_process,
  ai_automation_business_overrides
);
