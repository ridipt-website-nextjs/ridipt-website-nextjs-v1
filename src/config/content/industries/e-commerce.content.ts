import {
  Package,
  Heart,
  Link,
  Truck,
  ShieldCheck,
  TrendingUp,
  ShoppingCart,
  CreditCard,
  Users,
  Layers,
  Brain,
  BarChart3,
  Shield,
  Megaphone,
  Eye,
  Gift,
  GraduationCap,
  Settings,
  Palette,
  Headphones,
  Lock,
  Store,
  Smartphone,
  Globe,
  Code,
  Calculator,
  Monitor,
  Boxes,
  Target,
  PieChart,
  Award,
  MessageSquare,
  ArrowRightLeft,
  ShoppingBag,
  MapPin,
  Warehouse,
  BarChart,
  Percent,
  Share2,
  Camera,
  Bot,
  Mic,
  Wifi,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Coins,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const retail_challenges: ChallengeItem[] = [
  {
    "id": "inventory-management",
    "title": "Inventory Management",
    "description": "Managing stock levels across multiple locations and channels can be overwhelming. Inefficient systems can lead to overstocking, stockouts, or lost sales, directly impacting profitability and customer satisfaction.",
    "icon": Package,
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
    "id": "customer-engagement",
    "title": "Customer Engagement",
    "description": "Providing personalized shopping experiences and retaining customer loyalty is critical in a highly competitive market. Businesses need tools to understand customer behavior and deliver tailored offers that drive conversions.",
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
    "id": "omnichannel-integration",
    "title": "Omnichannel Integration",
    "description": "Ensuring a seamless shopping experience across online and offline channels can be challenging. Disjointed systems hinder customer satisfaction and operational efficiency, leading to lost sales opportunities.",
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
    "id": "logistics-fulfillment",
    "title": "Logistics and Fulfillment",
    "description": "Efficient order fulfillment and last-mile delivery are crucial for e-commerce success. Delays, inaccuracies, and high costs can negatively impact customer satisfaction and brand reputation.",
    "icon": Truck,
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
    "id": "data-security-fraud-prevention",
    "title": "Data Security and Fraud Prevention",
    "description": "Handling sensitive customer data and transactions requires robust security systems to prevent fraud and protect privacy. Security breaches can result in significant financial losses and damage to brand trust.",
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
    "id": "dynamic-pricing-promotions",
    "title": "Dynamic Pricing and Promotions",
    "description": "Adapting pricing strategies to market trends, competition, and customer preferences is essential for staying competitive. Businesses need advanced analytics to make real-time pricing decisions and maximize revenue.",
    "icon": TrendingUp,
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

export const retail_content: ContentItem[] = [
  {
    title: "E-Commerce Platforms",
    description:
      "We develop scalable e-commerce websites and mobile apps that offer intuitive user experiences, seamless navigation, and secure payment gateways. Our platforms support multiple payment methods, currencies, and languages for global reach.",
    icon: ShoppingCart,
  },
  {
    title: "Point of Sale (POS) Systems",
    description:
      "Our POS solutions help streamline in-store operations, track sales, manage inventory, and provide real-time analytics for better decision-making. Cloud-based systems ensure data synchronization across all locations.",
    icon: CreditCard,
  },
  {
    title: "Inventory Management Systems",
    description:
      "Efficiently track, manage, and replenish inventory across multiple locations and channels with our advanced inventory solutions. Real-time stock monitoring prevents stockouts and reduces overstock situations.",
    icon: Package,
  },
  {
    title: "Customer Relationship Management (CRM)",
    description:
      "Leverage our CRM solutions to gain insights into customer behavior, personalize interactions, and foster long-term loyalty. Advanced segmentation and automation capabilities enhance customer lifetime value.",
    icon: Users,
  },
  {
    title: "Omnichannel Solutions",
    description:
      "Create a unified shopping experience with our omnichannel systems that integrate online, in-store, and mobile channels. Customers can browse online, buy in-store, or return items through any channel seamlessly.",
    icon: Layers,
  },
  {
    title: "Order and Delivery Management",
    description:
      "Streamline order processing, shipping, and delivery with our robust solutions that ensure timely fulfillment and real-time tracking. Integration with multiple logistics providers optimizes delivery costs and times.",
    icon: Truck,
  },
  {
    title: "AI-Powered Personalization",
    description:
      "Use AI to deliver personalized recommendations, offers, and shopping experiences, enhancing customer engagement and conversion rates. Machine learning algorithms adapt to customer preferences in real-time.",
    icon: Brain,
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Harness the power of data to make informed business decisions. Our analytics solutions provide insights into sales trends, customer preferences, and operational performance with intuitive dashboards and reports.",
    icon: BarChart3,
  },
  {
    title: "Fraud Detection and Security",
    description:
      "Protect your business and customers with advanced fraud detection systems, secure payment gateways, and compliance with data protection regulations. AI-powered monitoring detects suspicious activities in real-time.",
    icon: Shield,
  },
  {
    title: "Digital Marketing Solutions",
    description:
      "Boost your online presence with our digital marketing tools, including SEO, email marketing, and social media advertising, to drive traffic and sales. Automated campaigns and performance tracking maximize ROI.",
    icon: Megaphone,
  },
  {
    title: "Augmented Reality (AR) Solutions",
    description:
      "Enhance online and in-store shopping with AR solutions that allow customers to visualize products before purchasing. Virtual try-ons and product placement increase confidence and reduce returns.",
    icon: Eye,
  },
  {
    title: "Loyalty and Rewards Programs",
    description:
      "Retain customers with customizable loyalty programs that offer points, rewards, and exclusive deals. Gamification elements and personalized rewards increase engagement and repeat purchases.",
    icon: Gift,
  },
];

export const retail_services: FeatureItem[] = [
  {
    title: "Industry Expertise",
    subtitle: "Retail Technology Specialists",
    description:
      "Our team brings extensive experience in retail and e-commerce technology, ensuring solutions that meet industry standards and best practices. We understand the complexities of modern retail operations and customer expectations.",
    icon: GraduationCap,
  },
  {
    title: "Custom-Built Solutions",
    subtitle: "Tailored for Your Business Model",
    description:
      "We tailor our offerings to your business model, whether you operate a small retail store or a global e-commerce platform. Every solution is designed to align with your specific goals and operational requirements.",
    icon: Settings,
  },
  {
    title: "Seamless Integration",
    subtitle: "Unified Operations",
    description:
      "Our solutions integrate smoothly with your existing systems, ensuring a unified and efficient operation. API-first architecture enables easy connectivity with third-party platforms and legacy systems.",
    icon: Link,
  },
  {
    title: "Focus on Scalability",
    subtitle: "Grow Without Limits",
    description:
      "We design systems that grow with your business, accommodating increased traffic, transactions, and inventory as you expand. Cloud-native architecture ensures performance at any scale.",
    icon: TrendingUp,
  },
  {
    title: "Data-Driven Insights",
    subtitle: "Actionable Business Intelligence",
    description:
      "Gain actionable insights with our advanced analytics tools, helping you make strategic decisions to enhance profitability. Real-time dashboards and predictive analytics drive informed decision-making.",
    icon: BarChart3,
  },
  {
    title: "Enhanced Customer Experience",
    subtitle: "Journey Optimization",
    description:
      "From personalized recommendations to seamless checkouts, we prioritize improving the customer journey at every touchpoint. User-centric design ensures higher conversion rates and customer satisfaction.",
    icon: Palette,
  },
  {
    title: "End-to-End Support",
    subtitle: "Comprehensive Assistance",
    description:
      "From development to implementation and ongoing maintenance, we provide comprehensive support to ensure your solutions remain effective and up-to-date. 24/7 monitoring and support available.",
    icon: Headphones,
  },
  {
    title: "Commitment to Security",
    subtitle: "Robust Protection",
    description:
      "We prioritize security and compliance, safeguarding your business and customer data with robust measures against fraud and breaches. PCI DSS compliance and advanced encryption protocols included.",
    icon: Lock,
  },
];

export const retail_services_stack = {
  "E-Commerce Solutions": [
    { name: "Custom Online Store Development", icon: Store },
    { name: "Mobile Commerce Applications", icon: Smartphone },
    { name: "Marketplace Integration", icon: Globe },
    { name: "Progressive Web Apps (PWA)", icon: Code },
    { name: "Headless Commerce Solutions", icon: Layers },
    { name: "Multi-vendor Marketplaces", icon: Users },
  ],
  "Retail Store Solutions": [
    { name: "POS Systems", icon: CreditCard },
    { name: "Inventory Management Software", icon: Package },
    { name: "Store Analytics", icon: BarChart },
    { name: "Digital Signage Solutions", icon: Monitor },
  ],
  "Customer Engagement Tools": [
    { name: "CRM Systems", icon: Users },
    { name: "Loyalty Programs", icon: Gift },
    { name: "AI-Powered Personalization", icon: Brain },
    { name: "Customer Support Chatbots", icon: MessageSquare },
  ],
  "Omnichannel Solutions": [
    { name: "Integrated Online and Offline Systems", icon: Link },
    { name: "Unified Shopping Experiences", icon: ArrowRightLeft },
    { name: "Buy Online Pick Up In Store (BOPIS)", icon: ShoppingBag },
    { name: "Cross-channel Inventory Management", icon: Boxes },
  ],
  "Logistics and Fulfillment": [
    { name: "Order Management Systems", icon: Package },
    { name: "Delivery Tracking Solutions", icon: MapPin },
    { name: "Warehouse Management Systems", icon: Warehouse },
    { name: "Last-mile Delivery Optimization", icon: Truck },
  ],
  "Marketing and Sales Tools": [
    { name: "Digital Marketing Platforms", icon: Megaphone },
    { name: "Promotions and Discount Management", icon: Percent },
    { name: "Analytics for Conversion Optimization", icon: TrendingUp },
    { name: "Social Commerce Integration", icon: Share2 },
  ],
  "Innovative Technologies": [
    { name: "Augmented Reality for Retail", icon: Eye },
    { name: "AI-Based Chatbots", icon: Bot },
    { name: "Voice Commerce Solutions", icon: Mic },
    { name: "IoT for Smart Retail", icon: Wifi },
  ],
  "Payment and Security": [
    { name: "Secure Payment Gateways", icon: CreditCard },
    { name: "Fraud Detection Systems", icon: AlertTriangle },
    { name: "PCI DSS Compliance Solutions", icon: CheckCircle },
    { name: "Multi-currency Payment Processing", icon: Coins },
  ],
};
