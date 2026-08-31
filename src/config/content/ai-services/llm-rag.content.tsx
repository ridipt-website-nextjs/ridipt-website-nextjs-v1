import {
  Database,
  Search,
  FileText,
  Cpu,
  Lock,
  RefreshCw,
  Layers,
  Target,
  Zap,
  Shield,
  Settings,
  TrendingUp,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const llm_rag_content: ContentItem[] = [
  {
    title: "Retrieval-Augmented Generation (RAG) Pipelines",
    description:
      "We build RAG pipelines that ground large language model answers in your own documents and data, so responses are accurate and specific to your business, not generic.",
    icon: Search,
  },
  {
    title: "Custom Knowledge Base Integration",
    description:
      "Connect your existing documents, wikis, CRM records, and databases to an AI layer, turning scattered internal knowledge into instant, searchable answers.",
    icon: Database,
  },
  {
    title: "Enterprise Search & Q&A",
    description:
      "Replace slow keyword search with natural-language Q&A across your company's content, so anyone can ask a question and get a direct, sourced answer.",
    icon: FileText,
  },
  {
    title: "Document Intelligence & Summarization",
    description:
      "Automatically summarize contracts, reports, and long documents, and extract the specific fields or clauses your team needs without manual reading.",
    icon: Layers,
  },
  {
    title: "Model Selection & Orchestration",
    description:
      "We help you choose and combine the right models, from OpenAI and Anthropic to open-source options, based on cost, accuracy, and data sensitivity.",
    icon: Cpu,
  },
  {
    title: "Secure, Private Data Handling",
    description:
      "Your data stays within controlled boundaries. We design integrations so sensitive information is never used to train third-party models without consent.",
    icon: Lock,
  },
];

export const llm_rag_services: FeatureItem[] = [
  {
    title: "Grounded, Accurate Answers",
    subtitle: "Less Guessing, More Facts",
    description:
      "By retrieving from your real data before generating a response, RAG dramatically reduces made-up or outdated answers compared to a plain chatbot.",
    icon: Target,
  },
  {
    title: "Reduced Hallucination Risk",
    subtitle: "Answers Backed by Sources",
    description:
      "Every response can be traced back to the document or record it came from, giving your team confidence in what the AI tells them.",
    icon: Shield,
  },
  {
    title: "Faster Access to Institutional Knowledge",
    subtitle: "No More Digging Through Folders",
    description:
      "Employees and customers get instant answers pulled from your existing knowledge base instead of searching through files and past conversations.",
    icon: Zap,
  },
  {
    title: "Vendor-Agnostic Model Strategy",
    subtitle: "Not Locked to One Provider",
    description:
      "We architect your AI layer so you can switch or combine language model providers as pricing and capabilities evolve, protecting your investment.",
    icon: Settings,
  },
  {
    title: "Scalable Vector Search",
    subtitle: "Built to Grow With Your Data",
    description:
      "Our retrieval infrastructure is designed to scale from a handful of documents to millions of records without a redesign.",
    icon: TrendingUp,
  },
  {
    title: "Continuous Data Freshness",
    subtitle: "Always Up to Date",
    description:
      "We set up pipelines that keep your knowledge base in sync with source systems, so answers reflect your latest documents and data.",
    icon: RefreshCw,
  },
];

const llm_rag_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Data & Use Case Discovery",
    description:
      "We identify which of your documents, systems, and data sources should power the AI, and define the questions it needs to answer well.",
  },
  {
    id: "innovation-and-design",
    title: "Architecture & Model Design",
    description:
      "We design the retrieval pipeline, choose the right embedding and language models, and plan how data flows securely from source to answer.",
  },
  {
    id: "full-cycle-product-development",
    title: "Build & Integrate",
    description:
      "We build the ingestion pipeline, vector search, and generation layer, then integrate it into your app, internal tool, or chatbot.",
  },
  {
    id: "product-growth-and-support",
    title: "Tune & Maintain",
    description:
      "We monitor answer quality, refine retrieval accuracy, and keep the knowledge base synced as your documents and data change.",
  },
];

export const llm_rag_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  llm_rag_streamlining_overrides
);

const llm_rag_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We assess your data sources, sensitivity requirements, and target use cases to design a RAG architecture that fits your business, not a generic template.",
  },
  {
    id: "code",
    title: "Pipeline Development",
    description:
      "Our engineers build the ingestion, embedding, and retrieval pipeline, then connect it to your chosen language model with careful prompt and context design.",
  },
];

export const llm_rag_business_process = mergeProcessWithOverrides(
  business_process,
  llm_rag_business_overrides
);
