import {
  MessageSquare,
  Bot,
  Users,
  Share2,
  Mic,
  UserCheck,
  Clock,
  Zap,
  DollarSign,
  Heart,
  Layers,
  RefreshCw,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const ai_chatbots_content: ContentItem[] = [
  {
    title: "Customer Support Chatbots",
    description:
      "Deploy AI-powered chatbots that handle common customer queries instantly, around the clock, freeing your team to focus on the conversations that truly need a human touch.",
    icon: MessageSquare,
  },
  {
    title: "Internal Knowledge Copilots",
    description:
      "Give your team an AI copilot that can answer questions from your internal documents, policies, and wikis in seconds, instead of digging through folders and chat threads.",
    icon: Bot,
  },
  {
    title: "Sales & Lead Qualification Bots",
    description:
      "Engage website visitors instantly, qualify leads with smart follow-up questions, and hand off warm prospects to your sales team automatically.",
    icon: Users,
  },
  {
    title: "Multi-Channel Deployment",
    description:
      "Launch the same AI assistant across your website, WhatsApp, Slack, or Microsoft Teams, so customers and employees can reach it wherever they already are.",
    icon: Share2,
  },
  {
    title: "Voice-Enabled Assistants",
    description:
      "Extend your chatbot with voice capabilities for IVR systems and voice assistants, enabling natural, hands-free interactions for your customers.",
    icon: Mic,
  },
  {
    title: "Human Handoff & Escalation",
    description:
      "Built-in escalation logic ensures complex or sensitive conversations are routed smoothly to a human agent, with full context carried over.",
    icon: UserCheck,
  },
];

export const ai_chatbots_services: FeatureItem[] = [
  {
    title: "Faster Response Times",
    subtitle: "Answers in Seconds, Not Hours",
    description:
      "Our AI chatbots respond instantly to common questions, dramatically reducing wait times and improving customer satisfaction from the first interaction.",
    icon: Clock,
  },
  {
    title: "24/7 Availability",
    subtitle: "Support That Never Sleeps",
    description:
      "Your customers and employees get help any time of day, without the cost of round-the-clock staffing, ensuring no query goes unanswered.",
    icon: Zap,
  },
  {
    title: "Reduced Support Costs",
    subtitle: "Scale Without Scaling Headcount",
    description:
      "By automating repetitive queries, your team can focus on high-value conversations while your support costs stay predictable as you grow.",
    icon: DollarSign,
  },
  {
    title: "Personalized Conversations",
    subtitle: "Context-Aware Interactions",
    description:
      "Our chatbots use conversation history and customer data to deliver relevant, personalized responses instead of generic scripted replies.",
    icon: Heart,
  },
  {
    title: "Seamless CRM & Helpdesk Integration",
    subtitle: "Fits Into Your Existing Stack",
    description:
      "We connect your chatbot to the tools you already use, including your CRM, helpdesk, and calendar, so conversations translate into action.",
    icon: Layers,
  },
  {
    title: "Continuous Learning",
    subtitle: "Gets Smarter Over Time",
    description:
      "We monitor real conversations and refine responses, intents, and knowledge sources so your assistant keeps improving after launch.",
    icon: RefreshCw,
  },
];

const ai_chatbots_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We start by mapping the conversations your customers and employees are already having, identifying the highest-impact use cases for an AI chatbot or copilot.",
  },
  {
    id: "innovation-and-design",
    title: "Conversation Design",
    description:
      "We design conversation flows, tone of voice, and escalation paths that reflect your brand and genuinely help users, not just deflect them.",
  },
  {
    id: "full-cycle-product-development",
    title: "Build & Integration",
    description:
      "We build the assistant on your chosen channels and connect it to your knowledge base, CRM, and helpdesk so it can act, not just answer.",
  },
  {
    id: "product-growth-and-support",
    title: "Monitoring & Improvement",
    description:
      "After launch, we track real conversations, resolution rates, and handoffs, continuously tuning the assistant to handle more on its own.",
  },
];

export const ai_chatbots_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  ai_chatbots_streamlining_overrides
);

const ai_chatbots_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We audit your existing support tickets, FAQs, and sales conversations to define the chatbot's scope, tone, and success metrics before writing a single flow.",
  },
  {
    id: "code",
    title: "Build the Assistant",
    description:
      "Our team configures the conversation flows, connects the underlying language model, and wires up integrations to your existing business systems.",
  },
];

export const ai_chatbots_business_process = mergeProcessWithOverrides(
  business_process,
  ai_chatbots_business_overrides
);
