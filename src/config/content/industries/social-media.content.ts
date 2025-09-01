import {
  Heart,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  Eye,
  BarChart3,
  Lightbulb,
  Users,
  Camera,
  Brain,
  MessageCircle,
  Shield,
  Settings,
  ShoppingCart,
  Trophy,
  Video,
  Code,
  GraduationCap,
  Zap,
  Lock,
  Layers,
  Palette,
  Award,
  Headphones,
  Globe,
  Target,
  Briefcase,
  MapPin,
  Calendar,
  Bot,
  BarChart,
  Share2,
  Edit,
  Monitor,
  Mic,
  Bell,
  CreditCard,
  MessageSquare,
  Gamepad2,
  User,
  Activity,
  Headset,
  Blocks,
  Fingerprint,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const social_media_challenges: ChallengeItem[] = [
  {
    "id": "user-engagement",
    "title": "User Engagement",
    "description": "Social platforms face the challenge of retaining user attention in a competitive digital space. Consistently delivering engaging and relevant content is essential for maintaining active user bases and preventing churn.",
    "icon": Heart,
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
    "id": "monetization-strategies",
    "title": "Monetization Strategies",
    "description": "Generating revenue while maintaining user experience can be a delicate balance. Identifying the right monetization model that doesn't compromise user satisfaction is critical for sustainable growth.",
    "icon": DollarSign,
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
    "id": "scalability",
    "title": "Scalability",
    "description": "As platforms grow, managing increased user activity, data, and interactions without compromising performance is a major challenge. Scaling infrastructure while maintaining speed and reliability requires careful planning.",
    "icon": TrendingUp,
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
    "id": "data-privacy-security",
    "title": "Data Privacy and Security",
    "description": "Protecting user data and ensuring compliance with global privacy regulations (e.g., GDPR, CCPA) is a top priority. Security breaches can severely damage user trust and result in significant legal consequences.",
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
    "id": "content-moderation",
    "title": "Content Moderation",
    "description": "Managing inappropriate or harmful content while maintaining freedom of expression is complex and requires robust tools. Automated systems must balance safety with user rights and cultural sensitivities.",
    "icon": Shield,
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
    "description": "Providing instant insights into user behavior, content performance, and engagement metrics can be demanding without the right tools. Real-time data processing is essential for competitive social platforms.",
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
    "id": "emerging-tech-integration",
    "title": "Integration with Emerging Technologies",
    "description": "Incorporating features like AI, augmented reality (AR), and virtual reality (VR) is increasingly vital to remain competitive. Staying ahead requires continuous innovation and technological adaptation.",
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

export const social_media_content: ContentItem[] = [
  {
    title: "Custom Social Networking Platforms",
    description:
      "Build tailored platforms for specific user communities or niche markets, with features like user profiles, messaging, groups, and activity feeds. Advanced customization options for unique community needs and branding.",
    icon: Users,
  },
  {
    title: "Content Creation and Sharing Tools",
    description:
      "Develop advanced tools for creating, editing, and sharing multimedia content, including photos, videos, and live streams. Integration with professional editing features and collaborative creation capabilities.",
    icon: Camera,
  },
  {
    title: "Monetization Solutions",
    description:
      "Implement subscription models, advertising platforms, in-app purchases, or influencer marketplace solutions for revenue generation. Multiple revenue streams with detailed analytics and optimization tools.",
    icon: DollarSign,
  },
  {
    title: "AI-Powered Analytics",
    description:
      "Leverage AI to provide actionable insights into user behavior, engagement trends, and content performance through real-time dashboards. Predictive analytics for content optimization and audience growth.",
    icon: Brain,
  },
  {
    title: "Chat and Messaging Features",
    description:
      "Develop real-time messaging solutions with features like media sharing, read receipts, encryption, and chatbots for enhanced communication. Support for group chats, voice messages, and video calls.",
    icon: MessageCircle,
  },
  {
    title: "Content Moderation Systems",
    description:
      "Utilize AI-driven tools to automatically detect and moderate harmful or inappropriate content, ensuring platform safety. Advanced filtering with human oversight and appeal processes.",
    icon: Shield,
  },
  {
    title: "Community Management Tools",
    description:
      "Create admin dashboards for managing users, moderating discussions, and analyzing community engagement. Tools for community guidelines enforcement and user behavior analytics.",
    icon: Settings,
  },
  {
    title: "Social Commerce Solutions",
    description:
      "Integrate e-commerce features like product tagging, shopping carts, and payment gateways to enable seamless social selling. Native shopping experiences within social feeds and stories.",
    icon: ShoppingCart,
  },
  {
    title: "Gamification Features",
    description:
      "Boost user engagement with gamified elements like badges, leaderboards, challenges, and rewards systems. Interactive features that encourage participation and build community loyalty.",
    icon: Trophy,
  },
  {
    title: "Live Streaming Platforms",
    description:
      "Build scalable live streaming solutions with interactive features like live chats, polls, and donation options. High-quality video streaming with multi-platform broadcasting capabilities.",
    icon: Video,
  },
  {
    title: "AR/VR Integration",
    description:
      "Incorporate immersive experiences through AR/VR, enabling virtual events, try-on features, and enhanced user interactions. Cutting-edge technology for next-generation social experiences.",
    icon: Eye,
  },
  {
    title: "Third-Party Integration",
    description:
      "Enable integration with popular tools like Google Analytics, social share widgets, and payment systems to enhance platform functionality. API-first approach for seamless connectivity.",
    icon: Code,
  },
];

export const social_media_services: FeatureItem[] = [
  {
    title: "Comprehensive Expertise",
    subtitle: "Deep Industry Knowledge",
    description:
      "Our team combines deep industry knowledge with technical expertise to deliver impactful social media solutions. We understand user behavior, engagement patterns, and platform dynamics.",
    icon: GraduationCap,
  },
  {
    title: "Custom-Built Platforms",
    subtitle: "Tailored to Your Vision",
    description:
      "We design and develop social platforms tailored to your vision, audience, and objectives. Every feature is crafted to serve your specific community and business goals.",
    icon: Settings,
  },
  {
    title: "Focus on Engagement",
    subtitle: "User-Centric Design",
    description:
      "Our solutions prioritize user engagement through intuitive interfaces, interactive features, and seamless performance. We create addictive experiences that keep users coming back.",
    icon: Heart,
  },
  {
    title: "Advanced Technologies",
    subtitle: "Future-Ready Solutions",
    description:
      "We integrate cutting-edge technologies, including AI, machine learning, and blockchain, to future-proof your platform and provide competitive advantages.",
    icon: Zap,
  },
  {
    title: "Data Security and Compliance",
    subtitle: "Privacy-First Approach",
    description:
      "We ensure robust security measures and adherence to global privacy standards to safeguard user data. GDPR, CCPA, and other regulatory compliance built-in.",
    icon: Lock,
  },
  {
    title: "Scalable Solutions",
    subtitle: "Built for Growth",
    description:
      "Our platforms are designed to handle growing user bases and evolving needs without compromising performance. Cloud-native architecture ensures unlimited scalability.",
    icon: Layers,
  },
  {
    title: "User-Centric Design",
    subtitle: "Intuitive Experiences",
    description:
      "We create intuitive and accessible platforms that deliver a seamless user experience across all devices. Mobile-first design with responsive interfaces.",
    icon: Palette,
  },
  {
    title: "Proven Success",
    subtitle: "Track Record of Excellence",
    description:
      "Our portfolio of successful projects demonstrates our ability to deliver high-quality and reliable social media solutions that achieve business objectives.",
    icon: Award,
  },
  {
    title: "End-to-End Support",
    subtitle: "Complete Partnership",
    description:
      "From development to deployment and beyond, we provide continuous support and maintenance to keep your platform running smoothly and evolving with user needs.",
    icon: Headphones,
  },
];

export const social_media_services_stack = {
  "Custom Social Platforms": [
    { name: "Niche Networking Platforms", icon: Target },
    { name: "Community-Centric Applications", icon: Users },
    { name: "Professional Networking Solutions", icon: Briefcase },
    { name: "Interest-Based Social Networks", icon: Heart },
    { name: "Location-Based Social Platforms", icon: MapPin },
    { name: "Event-Driven Social Communities", icon: Calendar },
  ],
  "Engagement Tools": [
    { name: "Gamification Features", icon: Trophy },
    { name: "AI-Powered Content Recommendations", icon: Brain },
    { name: "Interactive Polls and Surveys", icon: BarChart },
    { name: "Social Challenges and Contests", icon: Target },
  ],
  "Content Creation Tools": [
    { name: "Multimedia Editing Tools", icon: Edit },
    { name: "Live Streaming Solutions", icon: Video },
    { name: "Story Creation Features", icon: Camera },
    { name: "Collaborative Content Tools", icon: Users },
  ],
  "Analytics and Insights": [
    { name: "Real-Time Dashboards", icon: Monitor },
    { name: "User Behavior Analysis", icon: Activity },
    { name: "Content Performance Metrics", icon: BarChart3 },
    { name: "Engagement Analytics", icon: Heart },
  ],
  "Security and Moderation": [
    { name: "AI-Powered Content Moderation", icon: Bot },
    { name: "Data Encryption and Compliance", icon: Lock },
    { name: "User Reporting Systems", icon: Shield },
    { name: "Privacy Control Features", icon: Eye },
  ],
  "Commerce and Revenue": [
    { name: "Social Commerce Features", icon: ShoppingCart },
    { name: "Advertising Platforms", icon: DollarSign },
    { name: "Subscription Management", icon: CreditCard },
    { name: "Creator Monetization Tools", icon: Trophy },
  ],
  "Communication Features": [
    { name: "Real-Time Messaging", icon: MessageCircle },
    { name: "Video and Voice Calls", icon: Video },
    { name: "Group Communication Tools", icon: Users },
    { name: "Notification Systems", icon: Bell },
  ],
  "Advanced Technologies": [
    { name: "AR/VR Integration", icon: Eye },
    { name: "AI-Powered Features", icon: Brain },
    { name: "Blockchain Implementation", icon: Blocks },
    { name: "Voice Recognition Technology", icon: Mic },
  ],
};
