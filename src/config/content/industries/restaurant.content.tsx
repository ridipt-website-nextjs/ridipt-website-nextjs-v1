
import {
  Scale,
  Smartphone,
  Package,
  Truck,
  MapPin,
  CreditCard,
  BarChart3,
  Heart,
  CalendarDays,
  Receipt,
  ShoppingCart,
  Monitor,
  BookOpen,
  Users,
  ShoppingBasket,
  Milk,
  Store,
  Gift,
  Sparkles,
  Bell,
  Route,
  Car,
  Navigation,
  Boxes,
  TruckIcon,
  Clock,
  Wallet,
  DollarSign,
  FileText,
  Shield,
  HeartPulse,
  BadgeCheck,
  PieChart,
  UserRoundSearch,
  Activity,
  LineChart,
  Box,
  Settings,
  Layers,
  Link,
  LifeBuoy,
  UtensilsCrossed,
  Brain,
  Warehouse,
} from 'lucide-react';


export const restaurant_challenges: ChallengeItem[] = [
  {
    "id": "order-accuracy-scalability",
    "title": "Order Accuracy & Scalability",
    "description": "Managing high volumes of orders across multiple locations and ensuring accurate deliveries require robust technology infrastructure. Peak hours and sudden demand spikes can overwhelm traditional systems.",
    "icon": Scale,
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
    "id": "customer-convenience",
    "title": "Customer Convenience",
    "description": "Consumers expect fast and easy-to-use apps for placing orders, scheduling deliveries, and tracking them in real-time. Modern customers demand seamless experiences across all touchpoints.",
    "icon": Smartphone,
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
    "id": "inventory-stock-management",
    "title": "Inventory & Stock Management",
    "description": "Grocery and milk delivery services face the challenge of maintaining freshness, avoiding wastage, and ensuring inventory availability. Managing perishable items requires sophisticated tracking systems.",
    "icon": Package,
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
    "id": "delivery-logistics",
    "title": "Delivery Logistics",
    "description": "Efficiently planning routes, assigning delivery personnel, and reducing delays is critical for customer satisfaction. Last-mile delivery optimization directly impacts operational costs and customer experience.",
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
    "id": "real-time-tracking",
    "title": "Real-Time Tracking",
    "description": "Both customers and admins demand live tracking of orders and deliveries for transparency and accountability. Real-time visibility reduces customer service inquiries and builds trust.",
    "icon": MapPin,
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
    "id": "diverse-payment-methods",
    "title": "Diverse Payment Methods",
    "description": "Supporting various payment gateways, digital wallets, and cash-on-delivery options is essential to cater to a wide audience. Payment flexibility directly impacts conversion rates and customer satisfaction.",
    "icon": CreditCard,
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
    "id": "data-driven-decisions",
    "title": "Data-Driven Decision Making",
    "description": "Gaining insights into customer behavior, sales trends, and delivery patterns is crucial for optimizing business performance. Analytics help identify opportunities for growth and operational improvements.",
    "icon": BarChart3,
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
    "id": "customer-retention",
    "title": "Customer Retention",
    "description": "Loyalty programs, personalized offers, and seamless app experiences play a vital role in retaining customers in a competitive market. Building lasting relationships requires sophisticated engagement strategies.",
    "icon": Heart,
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


export const restaurant_content: ContentItem[] = [
  {
    title: "Restaurant & Café Management Systems",
    description:
      "Comprehensive tools for reservations, table management, billing, and menu updates. Seamless integration with online ordering and delivery platforms to streamline operations and enhance customer service.",
    icon: UtensilsCrossed,
  },
  {
    title: "Online Food Delivery Platforms",
    description:
      "Build custom apps like Zomato or Swiggy with features such as real-time tracking, user-friendly interfaces, and secure payment systems. Complete ecosystem for food delivery businesses with admin panels and delivery partner management.",
    icon: Smartphone,
  },
  {
    title: "Grocery Delivery Solutions",
    description:
      "End-to-end platforms for grocery businesses like Blinkit or Instamart. Features include inventory management, delivery scheduling, order tracking, and integration with multiple vendors and suppliers.",
    icon: ShoppingBasket,
  },
  {
    title: "Milk & Dairy Delivery Solutions",
    description:
      "Subscription-based platforms for regular milk and dairy delivery. Include features like recurring orders, flexible scheduling, notifications, and customer preference management for daily essentials.",
    icon: Milk,
  },
  {
    title: "Point-of-Sale (POS) Systems",
    description:
      "Smart POS systems for restaurants and delivery hubs to manage orders, inventory, and billing seamlessly. Cloud-based solutions with real-time synchronization across all locations and channels.",
    icon: CreditCard,
  },
  {
    title: "Delivery Partner Management",
    description:
      "Tools to onboard, manage, and optimize delivery personnel. Features include delivery tracking, route optimization, performance analysis, and automated assignment algorithms for efficient operations.",
    icon: Truck,
  },
  {
    title: "AI-Powered Customer Insights",
    description:
      "Leverage AI to analyze customer preferences, recommend products, and predict demand. Machine learning algorithms provide personalized experiences and optimize inventory planning.",
    icon: Brain,
  },
  {
    title: "Inventory & Warehouse Management",
    description:
      "Track perishable goods, monitor stock levels, and manage suppliers efficiently. Automated alerts for low stock, expiry management, and integration with procurement systems.",
    icon: Warehouse,
  },
  {
    title: "Real-Time Tracking Solutions",
    description:
      "GPS-enabled tracking systems for live updates on delivery statuses for customers and admins. Push notifications, estimated delivery times, and route optimization for enhanced transparency.",
    icon: MapPin,
  },
  {
    title: "Loyalty & Rewards Programs",
    description:
      "Integrated programs to retain customers with personalized offers, discounts, and referral rewards. Gamification elements and tiered loyalty systems to increase customer engagement.",
    icon: Gift,
  },
  {
    title: "Payment Gateway Integration",
    description:
      "Secure, multi-channel payment options, including wallets, UPI, cards, and cash-on-delivery. PCI DSS compliant systems with fraud detection and seamless checkout experiences.",
    icon: Wallet,
  },
  {
    title: "Analytics & Reporting Tools",
    description:
      "Comprehensive dashboards to monitor sales, delivery performance, and customer engagement. Business intelligence tools for data-driven decision making and performance optimization.",
    icon: BarChart3,
  },
];



import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const restaurant_services: FeatureItem[] = [
  {
    title: "End-to-End Solutions",
    subtitle: "Complete Business Coverage",
    description:
      "Whether you're a restaurant owner or a delivery startup, we offer solutions that address every aspect of your business operations, from ordering to delivery and customer management.",
    icon: Box,
  },
  {
    title: "Expertise in Delivery Platforms",
    subtitle: "Industry-Standard Solutions",
    description:
      "With experience in building systems similar to Zomato, Blinkit, and Swiggy Instamart, we deliver platforms that match and exceed industry standards with innovative features.",
    icon: Truck,
  },
  {
    title: "Tailored to Your Needs",
    subtitle: "Customized Solutions",
    description:
      "We customize our solutions to align with your specific business requirements, ensuring maximum impact whether you're a single restaurant or multi-location food chain.",
    icon: Settings,
  },
  {
    title: "Scalable & Robust Platforms",
    subtitle: "Growth-Ready Architecture",
    description:
      "Our systems are built to handle high order volumes and scale with your business growth. Cloud-native architecture ensures performance during peak hours and seasonal demands.",
    icon: Layers,
  },
  {
    title: "Focus on Customer Experience",
    subtitle: "User-Centric Design",
    description:
      "From intuitive app designs to real-time tracking, we prioritize features that enhance user satisfaction and drive customer retention in competitive food markets.",
    icon: Users,
  },
  {
    title: "Integration-Ready Systems",
    subtitle: "Seamless Connectivity",
    description:
      "Our solutions seamlessly integrate with existing POS systems, delivery apps, payment gateways, and third-party services for unified operations.",
    icon: Link,
  },
  {
    title: "Advanced Analytics",
    subtitle: "Data-Driven Insights",
    description:
      "Get actionable insights into sales, inventory, customer preferences, and delivery performance to drive smarter business decisions and operational efficiency.",
    icon: BarChart3,
  },
  {
    title: "Ongoing Support & Maintenance",
    subtitle: "Continuous Partnership",
    description:
      "We provide continuous support to ensure your systems remain updated and effective. 24/7 monitoring, regular updates, and technical assistance included.",
    icon: LifeBuoy,
  },
];


export const restaurant_services_stack = {
  "Restaurant Solutions": [
    { name: "Reservation & Table Management", icon: CalendarDays },
    { name: "Integrated Billing Systems", icon: Receipt },
    { name: "Online Ordering Portals", icon: ShoppingCart },
    { name: "Kitchen Display Systems", icon: Monitor },
    { name: "Menu Management Tools", icon: BookOpen },
    { name: "Staff Management Systems", icon: Users },
  ],
  "Online Delivery Solutions": [
    { name: "Food Delivery Apps (Zomato/Swiggy-like)", icon: Smartphone },
    { name: "Grocery Delivery Platforms (Blinkit/Instamart-like)", icon: ShoppingBasket },
    { name: "Milk Subscription Platforms", icon: Milk },
    { name: "Multi-vendor Marketplace Solutions", icon: Store },
  ],
  "Customer-Centric Features": [
    { name: "Real-Time Order Tracking", icon: MapPin },
    { name: "Loyalty & Rewards Programs", icon: Gift },
    { name: "Personalized Product Recommendations", icon: Sparkles },
    { name: "Push Notifications & Alerts", icon: Bell },
  ],
  "Delivery Logistics": [
    { name: "Route Optimization Tools", icon: Route },
    { name: "Delivery Partner Management Apps", icon: Truck },
    { name: "Fleet Management Systems", icon: Car },
    { name: "Last-Mile Delivery Solutions", icon: Navigation },
  ],
  "Inventory Management": [
    { name: "Stock Monitoring for Restaurants, Groceries, & Milk Products", icon: Boxes },
    { name: "Analytics for Waste Reduction", icon: BarChart3 },
    { name: "Supplier Management Systems", icon: TruckIcon },
    { name: "Expiry Date Tracking", icon: Clock },
  ],
  "Payment & Financial Tools": [
    { name: "Multi-Gateway Payment Integration", icon: CreditCard },
    { name: "Digital Wallet Support", icon: Wallet },
    { name: "Cash on Delivery Management", icon: DollarSign },
    { name: "Financial Reporting & Analytics", icon: FileText },
  ],
  "Compliance & Safety": [
    { name: "Food Safety Monitoring Tools", icon: Shield },
    { name: "Regulatory Compliance Systems", icon: Scale },
    { name: "Health & Safety Protocols", icon: HeartPulse },
    { name: "Quality Assurance Management", icon: BadgeCheck },
  ],
  "Analytics & Business Intelligence": [
    { name: "Sales Analytics Dashboard", icon: PieChart },
    { name: "Customer Behavior Analysis", icon: UserRoundSearch },
    { name: "Delivery Performance Metrics", icon: Activity },
    { name: "Predictive Analytics Tools", icon: LineChart },
  ],
};


