import {
  Scale,
  ShieldCheck,
  Users,
  RefreshCw,
  TrendingUp,
  BarChart3,
  Lightbulb,
  Building2,
  CreditCard,
  Wallet,
  Link,
  DollarSign,
  Bot,
  Shield,
  FileText,
  PieChart,
  Umbrella,
  MessageSquare,
  Globe,
  Handshake,
  GraduationCap,
  Lock,
  Settings,
  Zap,
  Layers,
  Palette,
  Headphones,
  Award,
  CheckCircle,
  Smartphone,
  Wrench,
  Database,
  ArrowRightLeft,
  Code,
  Blocks,
  Calculator,
  Brain,
  Activity,
  LineChart,
  Search,
  UserCheck,
  Eye,
  Target,
  Briefcase,
  Heart,
  ClipboardCheck,
  TrendingDown,
  BarChart,
  KeyRound,
  AlertTriangle,
  Monitor,
  Banknote,
  ChartLine,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const fintech_challenges: ChallengeItem[] = [
  {
    "id": "regulatory-compliance",
    "title": "Regulatory Compliance",
    "description": "Navigating strict and evolving financial regulations requires robust systems to ensure compliance while maintaining efficiency. Financial institutions must adhere to multiple regulatory frameworks across different jurisdictions.",
    "icon": Scale,
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
    "id": "data-security-fraud-prevention",
    "title": "Data Security and Fraud Prevention",
    "description": "The financial sector handles sensitive customer data, making security paramount. Businesses must protect against fraud, breaches, and cyberattacks while maintaining seamless user experiences.",
    "icon": ShieldCheck,
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
    "id": "customer-experience",
    "title": "Customer Experience",
    "description": "Delivering a seamless, intuitive, and personalized customer experience is essential to building trust and retaining users. Modern customers expect instant, secure, and convenient financial services.",
    "icon": Heart,
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
    "id": "legacy-system-modernization",
    "title": "Legacy System Modernization",
    "description": "Many financial institutions struggle with outdated infrastructure that limits scalability and innovation. Modernizing these systems while maintaining operations is a critical challenge.",
    "icon": RefreshCw,
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
    "id": "scalability-performance",
    "title": "Scalability and Performance",
    "description": "With a growing number of users and transactions, FinTech platforms must scale efficiently while maintaining performance. High availability and low latency are crucial for financial applications.",
    "icon": TrendingUp,
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
    "id": "real-time-analytics",
    "title": "Real-Time Analytics",
    "description": "Access to real-time insights is crucial for informed decision-making and providing customers with accurate financial updates. Financial institutions need instant data processing and reporting capabilities.",
    "icon": BarChart3,
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
    "id": "fintech-innovation",
    "title": "FinTech Innovation",
    "description": "Staying competitive requires constant innovation, such as incorporating AI, blockchain, or digital wallets to offer new services. Financial institutions must adapt to emerging technologies rapidly.",
    "icon": Lightbulb,
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

export const fintech_content: ContentItem[] = [
  {
    title: "Digital Banking Platforms",
    description:
      "Develop robust digital banking solutions that include account management, payments, transfers, and comprehensive financial services. Our platforms provide secure, scalable, and user-friendly banking experiences.",
    icon: Building2,
  },
  {
    title: "Payment Gateway Solutions",
    description:
      "Build secure, scalable, and seamless payment gateways for e-commerce, subscription services, and mobile applications. Support multiple payment methods and currencies with advanced fraud protection.",
    icon: CreditCard,
  },
  {
    title: "Mobile Wallet Applications",
    description:
      "Create feature-rich mobile wallet solutions for peer-to-peer transfers, bill payments, and contactless transactions. Enable secure digital payments with biometric authentication and tokenization.",
    icon: Wallet,
  },
  {
    title: "Blockchain-Based Solutions",
    description:
      "Leverage blockchain for secure, transparent, and efficient transactions, including cryptocurrency platforms, smart contracts, and decentralized finance (DeFi) applications.",
    icon: Blocks,
  },
  {
    title: "Lending and Loan Management Systems",
    description:
      "Automate the loan application, approval, and management process with advanced lending platforms. Streamline credit scoring, risk assessment, and loan servicing operations.",
    icon: DollarSign,
  },
  {
    title: "Robo-Advisory Platforms",
    description:
      "Build AI-powered advisory tools that provide personalized investment recommendations and portfolio management for users. Automate investment strategies with sophisticated algorithms.",
    icon: Bot,
  },
  {
    title: "Fraud Detection Systems",
    description:
      "Implement AI-driven systems to detect and prevent fraudulent activities, ensuring customer safety and trust. Real-time monitoring and machine learning algorithms protect against emerging threats.",
    icon: Shield,
  },
  {
    title: "RegTech Solutions",
    description:
      "Develop tools for regulatory compliance, including automated reporting, monitoring, and auditing solutions. Ensure adherence to financial regulations with intelligent compliance management.",
    icon: FileText,
  },
  {
    title: "Investment and Trading Platforms",
    description:
      "Create feature-rich trading platforms for stocks, commodities, and cryptocurrencies with real-time analytics and secure transaction capabilities. Advanced charting and portfolio management tools included.",
    icon: LineChart,
  },
  {
    title: "InsurTech Solutions",
    description:
      "Transform insurance operations with digital platforms for claims management, policy underwriting, and customer engagement. Modernize insurance processes with AI and automation.",
    icon: Umbrella,
  },
  {
    title: "AI-Powered Chatbots",
    description:
      "Enhance customer support with chatbots capable of resolving inquiries, providing financial advice, and streamlining onboarding processes. Natural language processing for human-like interactions.",
    icon: MessageSquare,
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Empower businesses with actionable insights using advanced analytics tools for risk assessment, customer profiling, and market trends. Real-time dashboards and predictive analytics.",
    icon: PieChart,
  },
  {
    title: "Cross-Border Payment Solutions",
    description:
      "Facilitate global transactions with secure, real-time, and cost-effective cross-border payment systems. Multi-currency support with competitive exchange rates and regulatory compliance.",
    icon: Globe,
  },
  {
    title: "Peer-to-Peer Lending Platforms",
    description:
      "Build platforms that connect borrowers with lenders directly, eliminating intermediaries and reducing costs. Automated matching, risk assessment, and transparent lending processes.",
    icon: Handshake,
  },
];

export const fintech_services: FeatureItem[] = [
  {
    title: "Domain Expertise",
    subtitle: "FinTech Industry Specialists",
    description:
      "Our team has extensive experience in financial technologies, ensuring that our solutions meet industry standards and best practices. We understand the complexities of financial regulations and market requirements.",
    icon: GraduationCap,
  },
  {
    title: "Security First Approach",
    subtitle: "Advanced Financial Security",
    description:
      "We prioritize security in every solution, implementing encryption, fraud detection, and compliance to safeguard sensitive financial data. Multi-layered security protocols protect against emerging threats.",
    icon: Lock,
  },
  {
    title: "Regulatory Compliance",
    subtitle: "Global Standards Adherence",
    description:
      "Stay ahead of regulations with our solutions designed to meet local and global compliance requirements including GDPR, PCI DSS, SOX, and regional banking regulations.",
    icon: Scale,
  },
  {
    title: "Tailored Solutions",
    subtitle: "Customized for Unique Needs",
    description:
      "Every business is unique, and so are our solutions. We customize our offerings to align with your specific needs and objectives, ensuring optimal performance and user experience.",
    icon: Settings,
  },
  {
    title: "Innovative Technologies",
    subtitle: "AI, Blockchain & ML Integration",
    description:
      "We integrate advanced technologies like AI, blockchain, and machine learning to help businesses stay ahead in a competitive market. Cutting-edge solutions for modern financial challenges.",
    icon: Zap,
  },
  {
    title: "Scalable Systems",
    subtitle: "Enterprise-Grade Performance",
    description:
      "Our solutions are designed to handle growth, ensuring seamless performance even as user bases and transaction volumes expand. Cloud-native architecture for unlimited scalability.",
    icon: Layers,
  },
  {
    title: "User-Centric Design",
    subtitle: "Exceptional User Experience",
    description:
      "Enhance customer satisfaction with intuitive, user-friendly platforms that prioritize simplicity and engagement. Modern interfaces designed for financial service excellence.",
    icon: Palette,
  },
  {
    title: "End-to-End Support",
    subtitle: "Comprehensive Assistance",
    description:
      "From initial consultation to post-launch support, our team ensures your FinTech solutions operate smoothly and effectively. 24/7 monitoring and maintenance services available.",
    icon: Headphones,
  },
  {
    title: "Proven Track Record",
    subtitle: "Trusted FinTech Solutions",
    description:
      "With successful projects and satisfied clients, we have a demonstrated ability to deliver high-quality FinTech solutions. Portfolio includes startups to enterprise financial institutions.",
    icon: Award,
  },
];

export const fintech_services_stack = {
  "Banking Solutions": [
    { name: "Digital Banking Platforms", icon: Building2 },
    { name: "Mobile Banking Apps", icon: Smartphone },
    { name: "Core Banking System Modernization", icon: Database },
    { name: "Account Management Systems", icon: Users },
    { name: "Open Banking APIs", icon: Code },
    { name: "Neo Banking Solutions", icon: Banknote },
  ],
  "Payment Solutions": [
    { name: "Secure Payment Gateways", icon: CreditCard },
    { name: "Digital Wallet Development", icon: Wallet },
    { name: "Cross-Border Payment Solutions", icon: Globe },
    { name: "Cryptocurrency Payment Processing", icon: Blocks },
  ],
  "Investment Solutions": [
    { name: "Robo-Advisory Platforms", icon: Bot },
    { name: "Trading Platforms", icon: LineChart },
    { name: "Portfolio Management Tools", icon: Briefcase },
    { name: "Algorithmic Trading Systems", icon: Activity },
  ],
  "Blockchain Solutions": [
    { name: "Cryptocurrency Exchange Development", icon: ArrowRightLeft },
    { name: "Smart Contracts Development", icon: FileText },
    { name: "Decentralized Finance (DeFi) Applications", icon: Link },
    { name: "NFT Marketplace Development", icon: PieChart },
  ],
  "Lending and Insurance Solutions": [
    { name: "Loan Origination Systems", icon: DollarSign },
    { name: "Peer-to-Peer Lending Platforms", icon: Handshake },
    { name: "InsurTech Platforms", icon: Umbrella },
    { name: "Credit Scoring Systems", icon: Calculator },
  ],
  "Compliance and Security Solutions": [
    { name: "RegTech Applications", icon: Scale },
    { name: "AI-Powered Fraud Detection", icon: Shield },
    { name: "Secure Authentication Systems", icon: KeyRound },
    { name: "KYC/AML Solutions", icon: UserCheck },
  ],
  "Analytics and Reporting": [
    { name: "Risk Assessment Tools", icon: AlertTriangle },
    { name: "Real-Time Financial Analytics", icon: BarChart3 },
    { name: "Predictive Modeling Solutions", icon: TrendingUp },
    { name: "Regulatory Reporting Systems", icon: ClipboardCheck },
  ],
  "Customer Engagement Tools": [
    { name: "AI-Powered Chatbots", icon: MessageSquare },
    { name: "Loyalty and Rewards Programs", icon: Award },
    { name: "Personalized Financial Recommendations", icon: Target },
    { name: "Customer Onboarding Solutions", icon: Users },
  ],
};
