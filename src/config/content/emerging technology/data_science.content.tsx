import {
  Settings,
  Layers,
  TrendingUp,
  Brain,
  BarChart3,
  Zap,
  ShieldCheck,
  Database,
  Cpu,
  RefreshCw,
  UserCheck,
  Lightbulb,
  Server,
} from 'lucide-react';

import { business_process, streamlining_development } from "@/config/constant";
import { FeatureItem } from "@/config/interface";
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';
import { mergeProcessWithOverrides } from "../common-functions";

export const data_science_content: ContentItem[] = [
  {
    title: "Data Science Consulting Services",
    description:
      "Transform Your Business with Data Science Expertise - Leverage our premier data science consulting services to redefine your enterprise. We craft tailored strategies and roadmaps that yield measurable outcomes, driving operational excellence and fostering sustainable growth.",
    icon: Settings,
  },
  {
    title: "Industry-Leading Data Science Solutions",
    description:
      "Redefine Success with Cutting-Edge Data Solutions - Harness the power of advanced analytics and machine learning to elevate your data-driven decision-making. Discover how these technologies can transform your business operations, ensuring efficiency and growth.",
    icon: Layers,
  },
  {
    title: "Predictive Analytics Solutions",
    description:
      "Seamless Insights for Future Success - Utilize our predictive analytics services to harness historical data and forecast future trends. Our experts deliver insights that inform strategic decision-making and drive growth.",
    icon: TrendingUp,
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Empower Your Business with Machine Learning - Leverage our advanced machine learning solutions to automate processes and enhance decision-making. Our experts create models that drive innovation and operational efficiency.",
    icon: Brain,
  },
  {
    title: "Data Visualization and Reporting",
    description:
      "Transform Data into Insights with Visualization - Utilize our data visualization services to turn complex data sets into easy-to-understand visuals. We help you communicate insights effectively and drive better decision-making.",
    icon: BarChart3,
  },
  {
    title: "AI and Deep Learning Solutions",
    description:
      "Harness the Power of AI for Business Transformation - Leverage our AI and deep learning solutions to enhance your operations and drive innovation. Our team develops advanced algorithms that empower your business to thrive in a competitive landscape.",
    icon: Zap,
  },
  {
    title: "Data Strategy and Governance",
    description:
      "Establish a Robust Data Strategy for Success - Our data strategy and governance services help you create a framework for effective data management and utilization. Ensure compliance, security, and efficiency across your organization.",
    icon: ShieldCheck,
  },
  {
    title: "Big Data Solutions",
    description:
      "Harness Big Data for Competitive Advantage - Utilize our big data solutions to manage, analyze, and derive insights from large data sets. Our experts help you unlock the potential of big data to drive business innovation.",
    icon: Database,
  },
  {
    title: "Data Engineering Services",
    description:
      "Build a Strong Data Foundation for Your Business - Our data engineering services focus on designing and implementing robust data architectures that enable effective data management and utilization.",
    icon: Cpu,
  },
];

export const data_science_services: FeatureItem[] = [
  {
    title: "Advanced Data Analytics Practices",
    subtitle: "Driving Success with Intelligence",
    description:
      "Our data science consulting services are designed to implement effective practices that cater to the unique needs of your business. We aim to deliver cutting-edge solutions that help you harness data, optimize performance, and uncover new opportunities.",
    icon: BarChart3,
  },
  {
    title: "End-to-End Business Transformation",
    subtitle: "Complete Data-Driven Solutions",
    description:
      "From predictive analytics to advanced machine learning, our team of experts collaborates to ensure a complete transformation of your business. We focus on delivering sustainable solutions that drive growth and scalability.",
    icon: RefreshCw,
  },
  {
    title: "Expert Data Science Professionals",
    subtitle: "Top-Tier Technical Expertise",
    description:
      "Our highly skilled data scientists bring advanced technical expertise to address your business's fast-paced and evolving requirements. With their proficiency in data analytics, machine learning, and AI, we empower your enterprise to achieve efficiency and resilience.",
    icon: UserCheck,
  },
  {
    title: "Cutting-Edge Data Practices",
    subtitle: "Future-Ready Solutions",
    description:
      "We deliver robust, future-ready data science solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance across data platforms.",
    icon: Lightbulb,
  },
  {
    title: "Advanced Analytics Tools",
    subtitle: "State-of-the-Art Technologies",
    description:
      "Leverage our expertise in modern data science tools and methodologies to transform your analytics and achieve seamless insights and scalability with the latest industry practices.",
    icon: Layers,
  },
  {
    title: "Scalable Data Solutions",
    subtitle: "Enterprise-Grade Performance",
    description:
      "Stay ahead in the evolving data landscape with our advanced data science solutions, tailored to maximize efficiency, ensure reliability, and foster growth across your organization.",
    icon: Server,
  },
];

// --- Streamlining Development Overrides ---
const data_science_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your data science transformation needs. By understanding data trends and analytics possibilities, we generate effective solutions tailored for data-driven decision making and insights.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best data science architecture and analytics possibilities, enhancing operational intelligence. Our approach creates scalable data solutions that drive business growth through strategic analytics and innovative methodologies.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Data Science Development",
    description:
      "Our comprehensive 360-degree data science service covers every phase from data strategy to model deployment and insights generation. Using agile methodologies, we ensure seamless evolution and meticulous management of your data transformation journey.",
  },
  {
    id: "product-growth-and-support",
    title: "Data Insights Growth and Support",
    description:
      "We help identify strengths in your data science solutions while addressing improvements for greater accuracy and insights. Our dedicated support ensures every aspect is optimized for long-term success and continuous learning from data.",
  },
];

export const data_science_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  data_science_streamlining_overrides
);

// --- Business Process Overrides ---
const data_science_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive data science assessment research to gather insights that inform our analytics strategies. Our tailored plans ensure alignment with your unique data needs and business intelligence objectives.",
  },
  {
    id: "code",
    title: "Data Analysis & Modeling",
    description:
      "Our expert data scientists use modern analytical frameworks and follow data science best practices to create clean, efficient, and scalable data models that ensure robust and intelligent data-driven solutions.",
  },
];

export const data_science_business_process = mergeProcessWithOverrides(
  business_process,
  data_science_business_overrides
);
