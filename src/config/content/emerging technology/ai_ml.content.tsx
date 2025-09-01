import {
  Brain,
  Camera,
  Zap,
  MessageSquare,
  Cpu,
  Cloud,
  Sparkles,
  FileText,
  BarChart3,
  Shield,
  Settings,
  UserCheck,
  Layers,
  RefreshCw,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const ai_ml_content: ContentItem[] = [
  {
    title: "AI Development Services",
    description:
      "Revolutionize Your Business with AI Development Services - Leverage cutting-edge AI technologies to design and implement innovative solutions tailored to your business needs. Unlock operational efficiency and data-driven decision-making with our custom AI development services.",
    icon: Brain,
  },
  {
    title: "Computer Vision",
    description:
      "Transform Insights with Computer Vision Solutions - Unleash the power of computer vision to analyze, process, and understand visual data. From facial recognition to image classification, our solutions redefine how businesses interact with data.",
    icon: Camera,
  },
  {
    title: "Intelligent Automation",
    description:
      "Streamline Operations with Intelligent Automation - Transform your workflows with AI-driven automation solutions designed to increase efficiency, reduce costs, and enhance decision-making across your organization.",
    icon: Zap,
  },
  {
    title: "AI Chatbot Development",
    description:
      "Enhance Customer Experience with AI Chatbots - Design intelligent conversational AI solutions that engage users, resolve queries, and deliver personalized experiences around the clock.",
    icon: MessageSquare,
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Harness the Power of Machine Learning for Business Success - Unlock insights, automate tasks, and create predictive models with our custom machine learning solutions designed to drive innovation and growth.",
    icon: Cpu,
  },
  {
    title: "AIaaS (AI as a Service)",
    description:
      "AI as a Service for Scalable, On-Demand Solutions - Transform your business with AIaaS solutions designed for flexibility and scalability. Access AI-powered tools and models to drive innovation without heavy infrastructure costs.",
    icon: Cloud,
  },
  {
    title: "Generative AI Solutions",
    description:
      "Unlock Creative Potential with Generative AI - Leverage advanced generative AI models to create unique content, automate creative processes, and drive innovation across your business operations.",
    icon: Sparkles,
  },
  {
    title: "Natural Language Processing",
    description:
      "Transform Text Data with NLP Solutions - Harness the power of natural language processing to analyze, understand, and generate human language, enabling intelligent text processing and communication.",
    icon: FileText,
  },
];

export const ai_ml_services: FeatureItem[] = [
  {
    title: "Advanced AI/ML Practices",
    subtitle: "Driving Success with Intelligence",
    description:
      "Our AI/ML consulting services are crafted to align with your business goals. From data analysis to predictive modeling, we deliver intelligent solutions that streamline operations and enhance decision-making.",
    icon: BarChart3,
  },
  {
    title: "Generative AI Innovation",
    subtitle: "Revolutionizing Business Operations",
    description:
      "Explore the potential of Generative AI to create unique, high-value outputs. Our team delivers tailored solutions that empower your enterprise to stay competitive and relevant in the evolving tech landscape.",
    icon: Sparkles,
  },
  {
    title: "Expert AI/ML Professionals",
    subtitle: "Deep Technical Knowledge",
    description:
      "Our skilled team of AI/ML consultants brings in-depth technical knowledge to address your enterprise's complex challenges. With expertise in machine learning, deep learning, and natural language processing, we ensure transformative results.",
    icon: UserCheck,
  },
  {
    title: "Precision-Based Execution",
    subtitle: "Tailored for Your Unique Needs",
    description:
      "We specialize in end-to-end integration, precision-based execution, and custom-built solutions designed to meet client-centric development demands with exceptional diligence.",
    icon: Settings,
  },
  {
    title: "State-of-the-Art Technologies",
    subtitle: "Cutting-Edge Performance",
    description:
      "Our AI/ML solutions are crafted using top-tier features and state-of-the-art technologies to ensure unmatched quality and performance for transformative growth and efficiency.",
    icon: Zap,
  },
  {
    title: "Scalable AI Solutions",
    subtitle: "Future-Ready Intelligence",
    description:
      "We craft intelligent, future-ready AI/ML solutions that align with your enterprise's needs, ensuring smooth integration and optimized performance for sustainable growth.",
    icon: Layers,
  },
];

// --- Streamlining Development Overrides ---
const ai_ml_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your AI/ML transformation needs. By understanding data science trends and AI possibilities, we generate effective solutions tailored for intelligent automation and decision-making.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best AI/ML architecture and automation possibilities, enhancing operational intelligence. Our approach creates scalable AI solutions that drive business growth through strategic data science and innovative machine learning.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle AI/ML Development",
    description:
      "Our comprehensive 360-degree AI/ML service covers every phase from data strategy to model deployment. Using agile methodologies, we ensure seamless evolution and meticulous management of your AI/ML transformation journey.",
  },
  {
    id: "product-growth-and-support",
    title: "AI Model Growth and Support",
    description:
      "We help identify strengths in your AI/ML models while addressing improvements for greater accuracy and efficiency. Our dedicated support ensures every aspect is optimized for long-term success and continuous learning.",
  },
];

export const ai_ml_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  ai_ml_streamlining_overrides
);

// --- Business Process Overrides ---
const ai_ml_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive AI/ML assessment research to gather insights that inform our data science strategies. Our tailored plans ensure alignment with your unique data needs and intelligent automation objectives.",
  },
  {
    id: "code",
    title: "Model Development",
    description:
      "Our expert AI/ML engineers use modern machine learning frameworks and follow data science best practices to create clean, efficient, and scalable AI models that ensure robust and intelligent automated solutions.",
  },
];

export const ai_ml_business_process = mergeProcessWithOverrides(
  business_process,
  ai_ml_business_overrides
);
