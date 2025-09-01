import {
  Settings,
  TrendingUp,
  Link,
  Sliders,
  DollarSign,
  ShieldCheck,
  Palette,
  Globe,
  Building2,
  Smartphone,
  Database,
  Cloud,
  Brain,
  BarChart3,
  ShoppingCart,
  Code,
  RefreshCw,
  Users,
  Lightbulb,
  Zap,
  Shield,
  Award,
  Headphones,
  Monitor,
  Layers,
  Bot,
  Eye,
  Blocks,
  CreditCard,
  BarChart,
  Wrench,
  Stethoscope,
  PieChart,
  Factory,
  Cpu,
  ChartLine,
  Server,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const custom_software_challenges: ChallengeItem[] = [
  {
    "id": "unique-business-processes",
    "title": "Unique Business Processes",
    "description": "Off-the-shelf software often fails to address specialized workflows or niche business requirements. Every organization has unique processes that require tailored solutions to maximize efficiency and productivity.",
    "icon": Settings,
    "colors": {
      "primary": "blue",
      "bg": "bg-blue-50",
      "border": "border-blue-500",
      "text": "text-blue-900",
      "subtitle": "text-blue-700",
      "icon": "text-blue-600",
      "accent": "bg-blue-100",
      "hover": "hover:bg-blue-100",
      "gradient": "from-blue-500 to-blue-600"
    }
  },
  {
    "id": "scalability-issues",
    "title": "Scalability Issues",
    "description": "Pre-built solutions may not scale effectively as your business grows, leading to inefficiencies. Organizations need software that can adapt and expand with their changing requirements and increased workload.",
    "icon": TrendingUp,
    "colors": {
      "primary": "green",
      "bg": "bg-green-50",
      "border": "border-green-500",
      "text": "text-green-900",
      "subtitle": "text-green-700",
      "icon": "text-green-600",
      "accent": "bg-green-100",
      "hover": "hover:bg-green-100",
      "gradient": "from-green-500 to-green-600"
    }
  },
  {
    "id": "integration-limitations",
    "title": "Integration Limitations",
    "description": "Many generic solutions struggle to integrate seamlessly with existing systems, resulting in data silos and reduced productivity. Custom integration ensures smooth communication between all business tools and platforms.",
    "icon": Link,
    "colors": {
      "primary": "purple",
      "bg": "bg-purple-50",
      "border": "border-purple-500",
      "text": "text-purple-900",
      "subtitle": "text-purple-700",
      "icon": "text-purple-600",
      "accent": "bg-purple-100",
      "hover": "hover:bg-purple-100",
      "gradient": "from-purple-500 to-purple-600"
    }
  },
  {
    "id": "lack-customization",
    "title": "Lack of Customization",
    "description": "Standard software may lack the flexibility to adapt to changing business needs or customer expectations. Custom solutions provide the agility needed to respond quickly to market changes and user requirements.",
    "icon": Sliders,
    "colors": {
      "primary": "red",
      "bg": "bg-red-50",
      "border": "border-red-500",
      "text": "text-red-900",
      "subtitle": "text-red-700",
      "icon": "text-red-600",
      "accent": "bg-red-100",
      "hover": "hover:bg-red-100",
      "gradient": "from-red-500 to-red-600"
    }
  },
  {
    "id": "cost-inefficiencies",
    "title": "Cost Inefficiencies",
    "description": "Licensing and subscription costs of generic software can outweigh the benefits, especially when functionality is underutilized. Custom solutions eliminate unnecessary features and reduce long-term operational costs.",
    "icon": DollarSign,
    "colors": {
      "primary": "orange",
      "bg": "bg-orange-50",
      "border": "border-orange-500",
      "text": "text-orange-900",
      "subtitle": "text-orange-700",
      "icon": "text-orange-600",
      "accent": "bg-orange-100",
      "hover": "hover:bg-orange-100",
      "gradient": "from-orange-500 to-orange-600"
    }
  },
  {
    "id": "security-concerns",
    "title": "Security Concerns",
    "description": "Pre-packaged solutions may not provide the level of security needed for sensitive business operations. Custom software allows for implementation of industry-specific security measures and compliance requirements.",
    "icon": ShieldCheck,
    "colors": {
      "primary": "teal",
      "bg": "bg-teal-50",
      "border": "border-teal-500",
      "text": "text-teal-900",
      "subtitle": "text-teal-700",
      "icon": "text-teal-600",
      "accent": "bg-teal-100",
      "hover": "hover:bg-teal-100",
      "gradient": "from-teal-500 to-teal-600"
    }
  },
  {
    "id": "user-experience",
    "title": "User Experience",
    "description": "A one-size-fits-all approach often fails to provide the user-centric design required for specific industries or audiences. Custom interfaces enhance productivity and user satisfaction through tailored experiences.",
    "icon": Palette,
    "colors": {
      "primary": "indigo",
      "bg": "bg-indigo-50",
      "border": "border-indigo-500",
      "text": "text-indigo-900",
      "subtitle": "text-indigo-700",
      "icon": "text-indigo-600",
      "accent": "bg-indigo-100",
      "hover": "hover:bg-indigo-100",
      "gradient": "from-indigo-500 to-indigo-600"
    }
  }
];

export const custom_software_content: ContentItem[] = [
  {
    title: "Custom Web Applications",
    description:
      "Develop tailored web solutions for enhanced functionality, seamless user experience, and robust backend systems. Modern web technologies ensure scalability, security, and optimal performance across all devices and browsers.",
    icon: Globe,
  },
  {
    title: "Enterprise Software Development",
    description:
      "Build scalable enterprise solutions that streamline operations, improve collaboration, and enhance productivity. Comprehensive systems designed to handle complex business processes and large-scale data management.",
    icon: Building2,
  },
  {
    title: "Mobile Applications",
    description:
      "Create bespoke mobile applications designed for Android, iOS, or cross-platform environments, ensuring seamless user experiences. Native and hybrid development approaches for optimal performance and user engagement.",
    icon: Smartphone,
  },
  {
    title: "System Integration Solutions",
    description:
      "Develop custom integrations to connect existing tools, platforms, and databases, ensuring a unified workflow. API development and middleware solutions for seamless data exchange and process automation.",
    icon: Link,
  },
  {
    title: "Custom CRM/ERP Systems",
    description:
      "Design and implement customer relationship management (CRM) and enterprise resource planning (ERP) systems tailored to your organization's needs. Streamlined processes for sales, marketing, and operations management.",
    icon: Database,
  },
  {
    title: "SaaS Solutions Development",
    description:
      "Build scalable Software-as-a-Service platforms with a focus on functionality, performance, and user-friendly design. Multi-tenant architectures with subscription management and automated billing systems.",
    icon: Cloud,
  },
  {
    title: "AI-Powered Solutions",
    description:
      "Integrate artificial intelligence for predictive analytics, automation, and intelligent decision-making. Machine learning algorithms, natural language processing, and computer vision capabilities for smart business solutions.",
    icon: Brain,
  },
  {
    title: "Data-Driven Applications",
    description:
      "Create custom analytics dashboards, reporting tools, and data visualization solutions for actionable insights. Real-time data processing and business intelligence tools for informed decision-making.",
    icon: BarChart3,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Develop feature-rich e-commerce systems with customizable designs, secure payment gateways, and advanced inventory management. Complete online selling solutions with mobile optimization and marketing tools.",
    icon: ShoppingCart,
  },
  {
    title: "Cloud-Based Solutions",
    description:
      "Build cloud-native applications that provide flexibility, scalability, and high availability for businesses. Microservices architecture with auto-scaling capabilities and disaster recovery features.",
    icon: Cloud,
  },
  {
    title: "Custom API Development",
    description:
      "Design APIs for seamless communication between various applications, ensuring interoperability. RESTful and GraphQL APIs with comprehensive documentation and security implementations.",
    icon: Code,
  },
  {
    title: "Legacy System Modernization",
    description:
      "Upgrade outdated systems to modern, secure, and scalable platforms without disrupting business continuity. Migration strategies that preserve data integrity while improving performance and security.",
    icon: RefreshCw,
  },
];

export const custom_software_services: FeatureItem[] = [
  {
    title: "Client-Centric Approach",
    subtitle: "Your Vision at the Core",
    description:
      "We place your business needs at the heart of our development process, ensuring your vision drives every decision. Collaborative approach that involves stakeholders throughout the development lifecycle.",
    icon: Users,
  },
  {
    title: "Tailored Solutions",
    subtitle: "Customized for Unique Challenges",
    description:
      "Our team crafts bespoke software to address your unique challenges, ensuring a perfect fit for your business processes. Every feature is designed specifically for your operational requirements.",
    icon: Settings,
  },
  {
    title: "Technology Expertise",
    subtitle: "Cutting-Edge Innovation",
    description:
      "From AI and IoT to blockchain and cloud computing, we utilize cutting-edge technologies to deliver innovative solutions. Continuous learning and adaptation to emerging technologies and industry trends.",
    icon: Lightbulb,
  },
  {
    title: "Scalability and Flexibility",
    subtitle: "Built for Growth",
    description:
      "Our solutions are designed to grow with your business, adapting to changing needs and market dynamics. Modular architecture that allows for easy expansion and feature additions.",
    icon: TrendingUp,
  },
  {
    title: "Seamless Integration",
    subtitle: "Unified Operations",
    description:
      "We ensure smooth integration with your existing systems, eliminating data silos and improving operational efficiency. API-first approach for maximum compatibility and interoperability.",
    icon: Link,
  },
  {
    title: "Agile Development Process",
    subtitle: "Iterative Excellence",
    description:
      "Using agile methodologies, we deliver faster results with iterative development, keeping you informed and involved at every step. Continuous delivery and feedback integration for optimal outcomes.",
    icon: Zap,
  },
  {
    title: "Focus on Security",
    subtitle: "Enterprise-Grade Protection",
    description:
      "Our custom solutions prioritize data security, ensuring compliance with industry standards and safeguarding sensitive information. Multi-layered security architecture with continuous monitoring.",
    icon: Shield,
  },
  {
    title: "User-Centric Design",
    subtitle: "Exceptional User Experience",
    description:
      "We emphasize intuitive and engaging user experiences, improving adoption rates and customer satisfaction. Human-centered design principles for maximum usability and engagement.",
    icon: Palette,
  },
  {
    title: "Proven Track Record",
    subtitle: "Demonstrated Success",
    description:
      "Our successful projects and satisfied clients reflect our ability to deliver high-quality, reliable, and innovative solutions. Portfolio spanning multiple industries and complex technical challenges.",
    icon: Award,
  },
  {
    title: "Dedicated Support",
    subtitle: "Ongoing Partnership",
    description:
      "We provide ongoing maintenance, updates, and support to ensure your custom software remains effective and up-to-date. 24/7 technical support and proactive system monitoring.",
    icon: Headphones,
  },
];

export const custom_software_services_stack = {
  "Custom Development Services": [
    { name: "Web Applications", icon: Globe },
    { name: "Mobile Applications", icon: Smartphone },
    { name: "Enterprise Solutions", icon: Building2 },
    { name: "Desktop Applications", icon: Monitor },
    { name: "Progressive Web Apps (PWA)", icon: Layers },
    { name: "Cross-Platform Development", icon: Code },
  ],
  "Business Optimization Tools": [
    { name: "CRM/ERP Development", icon: Database },
    { name: "Data Analytics Platforms", icon: BarChart3 },
    { name: "Workflow Automation", icon: Bot },
    { name: "Business Intelligence Tools", icon: PieChart },
  ],
  "System Modernization": [
    { name: "Legacy System Upgrades", icon: RefreshCw },
    { name: "Cloud Migration Services", icon: Cloud },
    { name: "API Integration", icon: Link },
    { name: "Database Modernization", icon: Database },
  ],
  "Industry-Specific Solutions": [
    { name: "Healthcare Software", icon: Stethoscope },
    { name: "FinTech Platforms", icon: CreditCard },
    { name: "Retail & E-Commerce Solutions", icon: ShoppingCart },
    { name: "Manufacturing Systems", icon: Factory },
  ],
  "Emerging Technology Solutions": [
    { name: "AI/ML-Powered Applications", icon: Brain },
    { name: "Blockchain Integration", icon: Blocks },
    { name: "IoT Applications", icon: Cpu },
    { name: "AR/VR Solutions", icon: Eye },
  ],
  "Scalable SaaS Platforms": [
    { name: "Multi-Tenant Architectures", icon: Layers },
    { name: "Subscription-Based Systems", icon: CreditCard },
    { name: "High-Availability Solutions", icon: Server },
    { name: "Auto-Scaling Infrastructure", icon: TrendingUp },
  ],
};
