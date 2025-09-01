import {
  Monitor,
  User,
  ClipboardList,
  Heart,
  ShieldCheck,
  Globe,
  GraduationCap,
  Database,
  Laptop,
  FileText,
  Smartphone,
  Users,
  Trophy,
  Brain,
  Cloud,
  BarChart3,
  Settings,
  Lightbulb,
  Palette,
  Shield,
  Headphones,
  Award,
  TrendingUp,
  BookOpen,
  ClipboardCheck,
  MessageSquare,
  Bot,
  PieChart,
  Calendar,
  CreditCard,
  Building,
  Layers,
  Target,
  Gamepad2,
  Library,
  Video,
  MessageCircle,
  Share2,
  Sparkles,
  Badge,
  Briefcase,
  Clock,
  Lock,
  Key,
  UserCheck,
  Eye,
  Fingerprint,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const education_challenges: ChallengeItem[] = [
  {
    "id": "hybrid-learning-models",
    "title": "Hybrid Learning Models",
    "description": "Managing both in-person and online learning environments can be challenging for educational institutions. The need for robust platforms that support virtual classrooms, collaboration, and resource sharing is higher than ever.",
    "icon": Monitor,
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
    "id": "personalized-learning",
    "title": "Personalized Learning",
    "description": "Every student has unique learning needs. Delivering personalized content, tracking progress, and adapting to individual learning styles is essential to foster better outcomes.",
    "icon": User,
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
    "id": "administrative-overload",
    "title": "Administrative Overload",
    "description": "Inefficient administrative workflows in admissions, scheduling, and fee collection consume valuable time and resources. Institutions need tools to automate and simplify these processes.",
    "icon": ClipboardList,
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
    "id": "student-engagement",
    "title": "Student Engagement",
    "description": "Keeping students motivated and engaged in the learning process is critical. The lack of interactive tools and gamified content can hinder their overall performance and interest.",
    "icon": Heart,
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
    "id": "data-security-compliance",
    "title": "Data Security and Compliance",
    "description": "Educational institutions handle sensitive student and staff data. Ensuring data security while complying with regulatory standards like GDPR and FERPA is a major challenge.",
    "icon": ShieldCheck,
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
    "id": "accessibility-to-education",
    "title": "Accessibility to Education",
    "description": "Bridging the digital divide to make education accessible to remote and underprivileged students is essential for inclusivity. Reliable, scalable solutions are needed to extend the reach of education.",
    "icon": Globe,
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
  }
];

export const education_content: ContentItem[] = [
  {
    title: "Learning Management Systems (LMS)",
    description:
      "We create robust LMS platforms that allow educators to manage courses, track student performance, and deliver engaging content. These systems support virtual classrooms, quizzes, assignments, and grading.",
    icon: GraduationCap,
  },
  {
    title: "Student Information Systems (SIS)",
    description:
      "Our SIS solutions streamline admissions, enrollment, attendance tracking, and progress reporting, reducing administrative overhead for educational institutions.",
    icon: Database,
  },
  {
    title: "E-Learning Platforms",
    description:
      "We design custom e-learning platforms that facilitate self-paced learning, multimedia content delivery, and course management, making education more engaging and accessible.",
    icon: Laptop,
  },
  {
    title: "Online Examination Portals",
    description:
      "Conduct secure online assessments with our examination portals. We provide tools for test creation, proctoring, grading, and analytics to ensure a seamless assessment process.",
    icon: ClipboardCheck,
  },
  {
    title: "Mobile Learning Applications",
    description:
      "Develop mobile apps to enable students to learn on the go. Our apps offer features like course materials, videos, interactive quizzes, and real-time notifications.",
    icon: Smartphone,
  },
  {
    title: "Collaboration Tools",
    description:
      "Foster collaboration between students, teachers, and parents with tools that support messaging, group discussions, file sharing, and project management.",
    icon: Users,
  },
  {
    title: "Gamified Learning Solutions",
    description:
      "Make learning fun and interactive with gamified content, quizzes, and reward systems. These solutions keep students motivated and improve knowledge retention.",
    icon: Trophy,
  },
  {
    title: "AI-Powered Tutoring",
    description:
      "Implement AI-based systems that provide personalized tutoring and real-time feedback, adapting to each student's learning pace and style.",
    icon: Brain,
  },
  {
    title: "Cloud-Based Solutions",
    description:
      "Move your education systems to the cloud for improved scalability, reliability, and collaboration. Cloud platforms reduce infrastructure costs and ensure seamless access to learning resources.",
    icon: Cloud,
  },
  {
    title: "Data Analytics for Education",
    description:
      "Use analytics tools to track student performance, identify trends, and make data-driven decisions to improve learning outcomes.",
    icon: BarChart3,
  },
];

export const education_services: FeatureItem[] = [
  {
    title: "Domain Expertise",
    subtitle: "Education Technology Specialists",
    description:
      "Our team has in-depth knowledge of the education industry and understands the specific needs of institutions, educators, and students.",
    icon: GraduationCap,
  },
  {
    title: "Custom Solutions",
    subtitle: "Tailored for Educational Needs",
    description:
      "We tailor our services to meet the unique requirements of each educational institution, ensuring the best fit for your goals and challenges.",
    icon: Settings,
  },
  {
    title: "Innovative Technologies",
    subtitle: "AI, IoT & Cloud-Powered Learning",
    description:
      "We leverage the latest technologies, including AI, IoT, and cloud computing, to create transformative education solutions.",
    icon: Lightbulb,
  },
  {
    title: "Focus on User Experience",
    subtitle: "Intuitive & Engaging Platforms",
    description:
      "Our solutions are designed with both educators and students in mind, ensuring ease of use and maximum engagement.",
    icon: Palette,
  },
  {
    title: "Security and Compliance",
    subtitle: "GDPR & FERPA Compliant",
    description:
      "We prioritize data security and compliance with education standards like GDPR and FERPA to safeguard sensitive student and institutional information.",
    icon: Shield,
  },
  {
    title: "End-to-End Support",
    subtitle: "Comprehensive Assistance",
    description:
      "From implementation to training and maintenance, we provide comprehensive support to help you get the most out of our solutions.",
    icon: Headphones,
  },
  {
    title: "Proven Track Record",
    subtitle: "Trusted Education Solutions",
    description:
      "Our successful partnerships with educational institutions demonstrate our ability to deliver impactful and scalable solutions.",
    icon: Award,
  },
  {
    title: "Scalability and Flexibility",
    subtitle: "Adaptable to Growth",
    description:
      "Whether you're a small institution or a large university, our solutions are scalable and flexible to adapt to your growth and changing needs.",
    icon: TrendingUp,
  },
];

export const education_services_stack = {
  "Learning Platforms": [
    { name: "Online Course Management", icon: BookOpen },
    { name: "Mobile Learning Apps", icon: Smartphone },
    { name: "Virtual Classroom Solutions", icon: Video },
    { name: "Interactive Content Creation", icon: Sparkles },
    { name: "Learning Analytics", icon: BarChart3 },
    { name: "Assessment Tools", icon: ClipboardCheck },
  ],
  "Administration Tools": [
    { name: "Student Management Systems", icon: Users },
    { name: "Fee Collection and Payment Solutions", icon: CreditCard },
    { name: "Admission Portals", icon: Building },
    { name: "Scheduling and Timetable Management", icon: Calendar },
  ],
  "Advanced Learning Solutions": [
    { name: "AI-Powered Learning Platforms", icon: Brain },
    { name: "Gamification Tools", icon: Gamepad2 },
    { name: "Digital Libraries", icon: Library },
    { name: "Virtual Reality Learning", icon: Eye },
  ],
  "Collaboration and Engagement": [
    { name: "Teacher-Parent-Student Communication Portals", icon: MessageCircle },
    { name: "Group Learning Platforms", icon: Users },
    { name: "Social Learning Features", icon: Share2 },
    { name: "Discussion Forums", icon: MessageSquare },
  ],
  "On-Demand Education Solutions": [
    { name: "Skill-Based Training Platforms", icon: Target },
    { name: "Certification and Badge Systems", icon: Badge },
    { name: "Professional Development Tools", icon: Briefcase },
    { name: "Microlearning Modules", icon: Clock },
  ],
  "Security and Compliance": [
    { name: "GDPR and FERPA-Compliant Systems", icon: Shield },
    { name: "Data Security Solutions", icon: Lock },
    { name: "Identity Management", icon: UserCheck },
    { name: "Access Control Systems", icon: Key },
  ],
};
