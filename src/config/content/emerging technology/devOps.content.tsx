import { business_process, streamlining_development } from "@/config/constant";
import { FeatureItem } from "@/config/interface";
import { mergeProcessWithOverrides } from "../common-functions";

export const devops_content = [
  {
    title: "DevOps Consulting Service",
    description:
      "Transform Your Business with DevOps Expertise - Leverage our premier DevOps consulting services to redefine your enterprise. We craft tailored strategies and roadmaps that yield measurable outcomes, driving operational excellence and fostering sustainable growth.",
    // image: require('@assets/our_services/cloud_devops/devops-consulting.svg'),
  },
  {
    title: "Industry Leading DevOps Solutions",
    description:
      "Redefine Success with Cutting-Edge DevOps Solutions - Harness the power of advanced tools and tech stacks to elevate your application's functionality. Discover how these technologies can transform your business operations, ensuring efficiency and growth.",
    // image: require('@assets/our_services/cloud_devops/devops-solutions.svg'),
  },
  {
    title: "DevOps Autonomous Solution",
    description:
      "Seamless Automation for Your DevOps Architecture - From process automation and infrastructure management to deployment and security, our DevOps experts are dedicated to stabilizing your end-to-end architecture. Leverage top-tier tech stacks to ensure seamless operations and optimized efficiency.",
    // image: require('@assets/our_services/cloud_devops/autonomous-solution.svg'),
  },
  {
    title: "CI/CD DevOps Agile Services",
    description:
      "Empower Your Operations with CI/CD DevOps Agile Services - Achieve global-standard code quality with our continuous integration and continuous delivery services. We ensure transparent, resilient, and interaction-specific workflows to streamline your operations effectively.",
    // image: require('@assets/our_services/cloud_devops/cicd-services.svg'),
  },
  {
    title: "DevOps Mobile Apps Services",
    description:
      "Transform Mobile Applications with DevOps Expertise - Empower your mobile apps with our robust DevOps architecture, enabling your business to deliver unparalleled benefits to end users. Partner with Ridipt's skilled DevOps team to ensure seamless integration and exceptional performance.",
    // image: require('@assets/our_services/cloud_devops/mobile-devops.svg'),
  },
  {
    title: "Microservices, Kubernetes, and Containerization",
    description:
      "Master Microservices and Kubernetes with Expert DevOps - Leverage the power of Kubernetes for efficient management, scaling, and deployment of your microservices. Hire Ridipt's skilled DevOps professionals, experts in containerization and Docker, to seamlessly implement microservice architecture for your business.",
    // image: require('@assets/our_services/cloud_devops/kubernetes.svg'),
  },
  {
    title: "Infrastructure Automation and Modernization",
    description:
      "Modernize Your Infrastructure with DevOps-Driven Automation - From comprehensive logging and monitoring to deploying infrastructure-as-code, we offer a full spectrum of DevOps-powered infrastructure automation and modernization services, tailored to your business needs.",
    // image: require('@assets/our_services/cloud_devops/infrastructure-automation.svg'),
  },
  {
    title: "DevOps Cloud Security Implementation",
    description:
      "Secure and Scale with DevOps Cloud Security - Partner with a leading DevOps service provider to implement scalable cloud security solutions. Enhance your business output with a technically advanced culture designed to drive efficiency and resilience.",
    // image: require('@assets/our_services/cloud_devops/cloud-security.svg'),
  },
];

export const devops_services: FeatureItem[] = [
  {
    title: "Comprehensive DevOps Transformation",
    subtitle: "End-to-End Business Excellence",
    description:
      "From automating management processes to enhancing the end-user experience, our team of experts works collaboratively to ensure a complete transformation of your business. We focus on delivering sustainable solutions that drive growth and scalability.",
    // image: require('@assets/our_services/cloud_devops/transformation.svg'),
  },
  {
    title: "Advanced Automation Solutions",
    subtitle: "Streamlined Operations",
    description:
      "Our DevOps consulting services are designed to implement effective practices that cater to the unique needs of your business. We aim to deliver cutting-edge solutions that help you streamline operations, reduce downtime, and optimize overall performance.",
    // image: require('@assets/our_services/cloud_devops/automation.svg'),
  },
  {
    title: "Expert DevOps Professionals",
    subtitle: "Top-Tier Technical Expertise",
    description:
      "Our highly skilled DevOps consultants bring advanced technical expertise to address your business's fast-paced and evolving requirements. With their proficiency in modern technologies, we empower your enterprise to achieve efficiency and resilience.",
    // image: require('@assets/our_services/cloud_devops/expertise.svg'),
  },
  {
    title: "Scalable Cloud Infrastructure",
    subtitle: "Future-Ready Solutions",
    description:
      "We deliver robust, future-ready DevOps solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance across cloud platforms.",
    // image: require('@assets/our_services/cloud_devops/scalable-infrastructure.svg'),
  },
  {
    title: "Security-First Approach",
    subtitle: "Comprehensive Protection",
    description:
      "Security audits are a cornerstone of safeguarding DevOps infrastructure. We provide comprehensive security assessments, monitoring, and reporting to eliminate vulnerabilities and protect your operations from potential risks.",
    // image: require('@assets/our_services/cloud_devops/security-first.svg'),
  },
  {
    title: "Continuous Innovation",
    subtitle: "Cutting-Edge Practices",
    description:
      "Leverage our expertise in modern DevOps tools and methodologies to transform your IT infrastructure and achieve seamless automation and scalability with the latest industry practices.",
    // image: require('@assets/our_services/cloud_devops/innovation.svg'),
  },
];

// --- Streamlining Development Overrides ---
const devops_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your DevOps transformation needs. By understanding infrastructure trends and automation possibilities, we generate effective solutions tailored for operational excellence.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best DevOps architecture and automation possibilities, enhancing operational efficiency. Our approach creates scalable solutions that drive business growth through strategic infrastructure design and innovative automation.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Infrastructure Development",
    description:
      "Our comprehensive 360-degree DevOps service covers every phase from infrastructure planning to deployment automation. Using agile methodologies, we ensure seamless evolution and meticulous management of your DevOps transformation journey.",
  },
  {
    id: "product-growth-and-support",
    title: "Infrastructure Growth and Support",
    description:
      "We help identify strengths in your DevOps infrastructure while addressing improvements for greater efficiency. Our dedicated support ensures every aspect is optimized for long-term success and continuous operational improvement.",
  },
];

export const devops_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  devops_streamlining_overrides
);

// --- Business Process Overrides ---
const devops_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive DevOps assessment research to gather insights that inform our automation strategies. Our tailored plans ensure alignment with your unique infrastructure needs and operational objectives.",
  },
  {
    id: "code",
    title: "Infrastructure as Code",
    description:
      "Our expert DevOps engineers use modern IaC practices and follow DevOps standards to create clean, efficient, and maintainable infrastructure code that ensures robust and scalable automated deployments.",
  },
];

export const devops_business_process = mergeProcessWithOverrides(
  business_process,
  devops_business_overrides
);
