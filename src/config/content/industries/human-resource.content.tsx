import {
  Users,
  UserPlus,
  UserCheck,
  Target,
  DollarSign,
  GraduationCap,
  Heart,
  BarChart3,
  Shield,
  Home,
  User,
  Brain,
  Building2,
  Settings,
  Zap,
  Lock,
  Palette,
  TrendingUp,
  Link,
  Lightbulb,
  Headphones,
  Search,
  MessageCircle,
  Activity,
  FileText,
  Calculator,
  BookOpen,
  ShieldCheck,
  PieChart,
  MessageSquare,
  Award,
  BarChart,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Calendar,
  Scale,
  History,
  Gift,
  Receipt,
  Monitor,
  CheckSquare,
  Clock,
  Smartphone,
  Video,
  GitBranch,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const hr_content: ContentItem[] = [
  {
    title: "HR Management Systems (HRMS)",
    description:
      "Develop comprehensive systems to manage employee data, leave tracking, attendance, and more, ensuring efficient HR operations. Centralized platforms that integrate all HR functions for streamlined workforce management.",
    icon: Users,
  },
  {
    title: "Recruitment Solutions",
    description:
      "Create platforms for job postings, applicant tracking, and interview scheduling to streamline the hiring process. AI-powered tools for candidate sourcing, screening, and selection to improve hiring efficiency.",
    icon: UserPlus,
  },
  {
    title: "Employee Onboarding Systems",
    description:
      "Simplify onboarding with digital tools that automate document collection, training, and orientation processes. Interactive workflows that ensure new hires are productive from day one.",
    icon: UserCheck,
  },
  {
    title: "Performance Management Tools",
    description:
      "Build tools to set goals, track progress, and evaluate employee performance through 360-degree feedback mechanisms. Continuous performance monitoring with real-time feedback and development planning.",
    icon: Target,
  },
  {
    title: "Payroll Management Solutions",
    description:
      "Automate payroll processing, tax calculations, and benefits management to save time and reduce errors. Compliance-ready systems that handle complex payroll requirements across multiple locations.",
    icon: DollarSign,
  },
  {
    title: "Learning Management Systems (LMS)",
    description:
      "Provide employees with access to training modules, certifications, and skill-building courses to enhance professional growth. Personalized learning paths with progress tracking and certification management.",
    icon: GraduationCap,
  },
  {
    title: "Employee Engagement Platforms",
    description:
      "Develop mobile apps and portals for employee feedback, surveys, recognition programs, and team collaboration. Tools to measure engagement levels and implement improvement strategies.",
    icon: Heart,
  },
  {
    title: "Workforce Analytics Tools",
    description:
      "Use advanced analytics to gain insights into workforce trends, employee performance, and organizational productivity. Predictive analytics for workforce planning and decision-making support.",
    icon: BarChart3,
  },
  {
    title: "Compliance Management Systems",
    description:
      "Ensure adherence to labor laws and industry regulations through automated compliance checks and reporting. Real-time updates on regulatory changes with automated compliance workflows.",
    icon: Shield,
  },
  {
    title: "Remote Work Solutions",
    description:
      "Equip your HR team with tools to manage remote employees effectively, including virtual time tracking and collaboration platforms. Digital solutions for remote onboarding, performance tracking, and team coordination.",
    icon: Home,
  },
  {
    title: "Employee Self-Service Portals",
    description:
      "Enable employees to manage their profiles, access payslips, apply for leave, and update personal details independently. User-friendly interfaces that reduce HR workload and improve employee satisfaction.",
    icon: User,
  },
  {
    title: "AI-Driven Recruitment Tools",
    description:
      "Leverage AI to screen resumes, identify top candidates, and predict candidate-job fit for smarter hiring decisions. Machine learning algorithms that improve recruitment accuracy and reduce time-to-hire.",
    icon: Brain,
  },
];

export const hr_services: FeatureItem[] = [
  {
    title: "Industry Expertise",
    subtitle: "HR Technology Specialists",
    description:
      "Our team has extensive experience in designing HR solutions tailored to diverse industries and organizational structures. We understand the complexities of modern workforce management and regulatory requirements.",
    icon: Building2,
  },
  {
    title: "Customized Solutions",
    subtitle: "Tailored to Your Organization",
    description:
      "We understand that every organization is unique. Our solutions are tailored to your specific HR needs and challenges, ensuring maximum impact and ROI for your investment.",
    icon: Settings,
  },
  {
    title: "Focus on Efficiency",
    subtitle: "Streamlined Operations",
    description:
      "Our tools are designed to automate repetitive tasks, enabling your HR team to focus on strategic initiatives that drive business growth and employee satisfaction.",
    icon: Zap,
  },
  {
    title: "Data Security and Compliance",
    subtitle: "Enterprise-Grade Protection",
    description:
      "We prioritize data security and ensure compliance with relevant labor laws and data protection regulations including GDPR, CCPA, and local privacy requirements.",
    icon: Lock,
  },
  {
    title: "User-Friendly Design",
    subtitle: "Intuitive Interfaces",
    description:
      "Our HR solutions are intuitive and accessible, ensuring ease of use for HR teams and employees alike. Modern interfaces that require minimal training and adoption time.",
    icon: Palette,
  },
  {
    title: "Scalable and Flexible",
    subtitle: "Growth-Ready Architecture",
    description:
      "Whether you're a small business or a large enterprise, our solutions scale seamlessly to match your growth. Cloud-native architecture ensures performance at any scale.",
    icon: TrendingUp,
  },
  {
    title: "Integration Capabilities",
    subtitle: "Seamless Connectivity",
    description:
      "We integrate our solutions with existing systems like payroll software, ERP platforms, and communication tools for a unified experience across your organization.",
    icon: Link,
  },
  {
    title: "Innovative Technology",
    subtitle: "AI-Powered Solutions",
    description:
      "From AI-driven recruitment to advanced analytics, we incorporate the latest technologies to enhance HR management and provide competitive advantages.",
    icon: Lightbulb,
  },
  {
    title: "Continuous Support",
    subtitle: "Ongoing Partnership",
    description:
      "We provide ongoing support and updates to ensure your HR systems remain reliable and effective. 24/7 technical support and regular system enhancements included.",
    icon: Headphones,
  },
];

export const hr_challenges: ChallengeItem[] = [
  {
    "id": "talent-acquisition",
    "title": "Talent Acquisition",
    "description": "Finding and hiring the right talent can be time-consuming and resource-intensive, especially in competitive industries. The challenge extends beyond just sourcing candidates to ensuring quality hires that align with company culture and requirements.",
    "icon": Search,
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
    "id": "employee-engagement",
    "title": "Employee Engagement",
    "description": "Ensuring employee satisfaction and engagement requires continuous monitoring and innovative strategies. Low engagement leads to decreased productivity, higher turnover rates, and negative impact on company culture.",
    "icon": MessageCircle,
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
    "id": "performance-management",
    "title": "Performance Management",
    "description": "Tracking and evaluating employee performance accurately can be challenging without effective tools. Traditional annual reviews are being replaced by continuous feedback systems that require sophisticated technology platforms.",
    "icon": Activity,
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
    "id": "compliance-regulations",
    "title": "Compliance with Regulations",
    "description": "Adhering to labor laws and regulatory requirements is essential but often complex and time-consuming. Organizations must stay updated with changing regulations across multiple jurisdictions and ensure consistent compliance.",
    "icon": FileText,
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
    "id": "payroll-benefits",
    "title": "Payroll and Benefits Management",
    "description": "Managing payroll, taxes, and employee benefits efficiently requires robust and secure systems. Manual processes are prone to errors and can lead to compliance issues and employee dissatisfaction.",
    "icon": Calculator,
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
    "id": "training-development",
    "title": "Employee Training and Development",
    "description": "Providing ongoing learning opportunities and skill development is crucial for employee growth and retention. Organizations need scalable platforms to deliver personalized learning experiences that align with career goals.",
    "icon": BookOpen,
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
    "id": "data-security-privacy",
    "title": "Data Security and Privacy",
    "description": "Protecting sensitive employee data while ensuring compliance with data protection laws is a significant challenge. HR systems contain personal information that requires the highest levels of security and privacy protection.",
    "icon": ShieldCheck,
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
  },
  {
    "id": "workforce-analytics",
    "title": "Workforce Analytics",
    "description": "Gaining actionable insights from workforce data for better decision-making can be difficult without the right tools. Organizations need advanced analytics to understand trends, predict outcomes, and optimize HR strategies.",
    "icon": PieChart,
    "colors": {
      "primary": "pink",
      "bg": "bg-pink-50",
      "border": "border-pink-500",
      "text": "text-pink-900",
      "subtitle": "text-pink-700",
      "icon": "text-pink-600",
      "accent": "bg-pink-100",
      "hover": "hover:bg-pink-100",
      "gradient": "from-pink-500 to-pink-600"
    }
  }
];

export const hr_services_stack = {
  "Talent Management": [
    { name: "Recruitment Platforms", icon: Users },
    { name: "AI-Based Candidate Screening", icon: Brain },
    { name: "Applicant Tracking Systems", icon: UserCheck },
    { name: "Interview Management Tools", icon: Video },
    { name: "Onboarding Automation", icon: UserPlus },
    { name: "Talent Pipeline Management", icon: GitBranch },
  ],
  "Employee Engagement": [
    { name: "Feedback and Survey Tools", icon: MessageSquare },
    { name: "Recognition and Rewards Systems", icon: Award },
    { name: "Employee Pulse Surveys", icon: BarChart },
    { name: "Internal Communication Platforms", icon: MessageCircle },
  ],
  "Performance Management": [
    { name: "Goal Setting and Tracking", icon: Target },
    { name: "360-Degree Feedback Systems", icon: RotateCcw },
    { name: "Continuous Performance Monitoring", icon: Activity },
    { name: "Performance Review Automation", icon: CheckCircle },
  ],
  "Workforce Analytics": [
    { name: "Productivity Analysis", icon: TrendingUp },
    { name: "Attrition Prediction", icon: AlertTriangle },
    { name: "Workforce Planning Tools", icon: Calendar },
    { name: "HR Metrics Dashboard", icon: BarChart3 },
  ],
  "Compliance Management": [
    { name: "Automated Labor Law Adherence", icon: Scale },
    { name: "Compliance Reporting Tools", icon: FileText },
    { name: "Policy Management Systems", icon: BookOpen },
    { name: "Audit Trail Management", icon: History },
  ],
  "Payroll and Benefits": [
    { name: "Payroll Automation Systems", icon: DollarSign },
    { name: "Benefits Management Tools", icon: Gift },
    { name: "Tax Calculation and Filing", icon: Calculator },
    { name: "Expense Management", icon: Receipt },
  ],
  "Training and Development": [
    { name: "E-Learning Platforms", icon: Monitor },
    { name: "Employee Certification Systems", icon: Award },
    { name: "Skill Assessment Tools", icon: CheckSquare },
    { name: "Career Development Planning", icon: TrendingUp },
  ],
  "Remote Work Solutions": [
    { name: "Virtual Time Tracking", icon: Clock },
    { name: "Remote Collaboration Tools", icon: Users },
    { name: "Digital Onboarding Systems", icon: Smartphone },
    { name: "Remote Performance Management", icon: Monitor },
  ],
  "Employee Self-Service": [
    { name: "Personal Information Management", icon: User },
    { name: "Leave Management Systems", icon: Calendar },
    { name: "Payslip Access Portals", icon: FileText },
    { name: "Benefits Enrollment Tools", icon: Settings },
  ],
};
