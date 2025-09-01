import {
  Eye,
  Package,
  TrendingDown,
  TrendingUp,
  Globe,
  Zap,
  Leaf,
  Truck,
  Warehouse,
  MapPin,
  Bot,
  Car,
  BarChart3,
  Blocks,
  ShoppingCart,
  Thermometer,
  GraduationCap,
  ArrowRightLeft,
  Settings,
  Server,
  Activity,
  Award,
  Headphones,
  Route,
  Box,
  FileText,
  Monitor,
  Shield,
  BarChart,
  Wrench,
  Cpu,
  RefreshCw,
  Cloud,
  Database,
  PieChart,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const logistics_challenges: ChallengeItem[] = [
  {
    "id": "lack-visibility",
    "title": "Lack of Visibility",
    "description": "Supply chains often struggle with fragmented systems and limited visibility, making it difficult to track shipments, monitor inventory, and predict disruptions. Real-time transparency across the entire supply chain is crucial for operational success.",
    "icon": Eye,
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
    "id": "inventory-management",
    "title": "Inventory Management",
    "description": "Maintaining optimal inventory levels while reducing carrying costs is a major challenge for many businesses. Balancing stock availability with cost efficiency requires sophisticated planning and forecasting capabilities.",
    "icon": Package,
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
    "id": "cost-optimization",
    "title": "Cost Optimization",
    "description": "Rising operational costs, transportation expenses, and inefficient resource utilization can eat into profit margins. Organizations need intelligent solutions to optimize costs without compromising service quality.",
    "icon": TrendingDown,
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
    "id": "demand-forecasting",
    "title": "Demand Forecasting",
    "description": "Accurate demand prediction is crucial to prevent overstocking or stockouts, which can impact customer satisfaction and revenue. Advanced analytics and AI-driven forecasting are essential for precise planning.",
    "icon": TrendingUp,
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
    "id": "global-complexity",
    "title": "Global Supply Chain Complexity",
    "description": "Managing global supply chains involves navigating complexities like customs regulations, diverse geographies, and multi-modal transportation. Coordination across different time zones and regulatory environments poses significant challenges.",
    "icon": Globe,
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
    "id": "technology-integration",
    "title": "Technology Integration",
    "description": "Many businesses face difficulties in integrating new technologies with existing legacy systems. Seamless technology adoption is crucial for digital transformation and operational efficiency in modern supply chains.",
    "icon": Zap,
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
    "id": "sustainability-goals",
    "title": "Sustainability Goals",
    "description": "There is increasing pressure to adopt eco-friendly practices and reduce the carbon footprint of supply chain operations. Organizations must balance environmental responsibility with operational efficiency and cost considerations.",
    "icon": Leaf,
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

export const logistics_content: ContentItem[] = [
  {
    title: "Transportation Management Systems (TMS)",
    description:
      "Build advanced TMS solutions to optimize route planning, manage freight, and ensure timely deliveries. Comprehensive systems that integrate carrier management, load optimization, and real-time tracking capabilities.",
    icon: Truck,
  },
  {
    title: "Warehouse Management Systems (WMS)",
    description:
      "Develop WMS solutions to streamline warehouse operations, including inventory tracking, picking, packing, and shipping. Advanced automation and optimization features for maximum operational efficiency.",
    icon: Warehouse,
  },
  {
    title: "Supply Chain Visibility Platforms",
    description:
      "Create platforms that provide end-to-end visibility into the supply chain, enabling real-time tracking and better decision-making. Complete transparency from supplier to customer delivery.",
    icon: Eye,
  },
  {
    title: "Inventory Management Solutions",
    description:
      "Automate inventory tracking, replenishment, and forecasting to reduce stockouts and overstocking. AI-powered demand planning and intelligent inventory optimization algorithms.",
    icon: Package,
  },
  {
    title: "Logistics Automation",
    description:
      "Implement robotic process automation (RPA) and IoT-powered systems to enhance efficiency and reduce manual intervention in logistics processes. Smart automation for streamlined operations.",
    icon: Bot,
  },
  {
    title: "Last-Mile Delivery Solutions",
    description:
      "Develop solutions to optimize last-mile delivery, ensuring timely and cost-effective deliveries to end customers. Route optimization, driver management, and customer communication tools.",
    icon: MapPin,
  },
  {
    title: "Fleet Management Systems",
    description:
      "Build systems to monitor and manage vehicle fleets, track fuel consumption, and optimize driver performance. Comprehensive fleet tracking, maintenance scheduling, and performance analytics.",
    icon: Car,
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Use advanced analytics and AI to predict demand, analyze trends, and optimize resource allocation across the supply chain. Machine learning algorithms for accurate forecasting and planning.",
    icon: BarChart3,
  },
  {
    title: "Blockchain for Supply Chain",
    description:
      "Leverage blockchain to ensure transparency, enhance trust, and improve traceability in supply chain operations. Immutable records and smart contracts for secure transactions.",
    icon: Blocks,
  },
  {
    title: "Sustainability Solutions",
    description:
      "Develop tools to monitor and reduce carbon emissions, optimize energy use, and achieve sustainability goals. Environmental tracking and green logistics optimization platforms.",
    icon: Leaf,
  },
  {
    title: "eCommerce Logistics Platforms",
    description:
      "Create solutions to integrate logistics operations with eCommerce platforms, including automated order management and shipment tracking. Seamless integration for online retail fulfillment.",
    icon: ShoppingCart,
  },
  {
    title: "Cold Chain Management",
    description:
      "Build specialized solutions to monitor and manage temperature-sensitive goods across the supply chain. Advanced monitoring systems for pharmaceutical, food, and chemical logistics.",
    icon: Thermometer,
  },
];

export const logistics_services: FeatureItem[] = [
  {
    title: "Domain Expertise",
    subtitle: "In-Depth Industry Knowledge",
    description:
      "With in-depth knowledge of the logistics and supply chain sector, we design solutions that address specific industry pain points and operational challenges with precision.",
    icon: GraduationCap,
  },
  {
    title: "End-to-End Solutions",
    subtitle: "Comprehensive Coverage",
    description:
      "From inventory management to last-mile delivery, we provide comprehensive solutions to manage every stage of the supply chain with integrated platforms and seamless workflows.",
    icon: ArrowRightLeft,
  },
  {
    title: "Advanced Technology Integration",
    subtitle: "Cutting-Edge Innovation",
    description:
      "We leverage IoT, AI, blockchain, and RPA to deliver cutting-edge solutions that drive efficiency and innovation across supply chain operations and logistics management.",
    icon: Zap,
  },
  {
    title: "Scalable Systems",
    subtitle: "Growth-Ready Architecture",
    description:
      "Our solutions are designed to scale as your business grows, ensuring seamless performance across diverse operations and adapting to increasing transaction volumes.",
    icon: Server,
  },
  {
    title: "Real-Time Insights",
    subtitle: "Data-Driven Decisions",
    description:
      "Enable data-driven decisions with platforms that offer real-time visibility and analytics. Advanced dashboards and reporting for proactive supply chain management.",
    icon: Activity,
  },
  {
    title: "Sustainability Focus",
    subtitle: "Eco-Friendly Operations",
    description:
      "Our solutions are designed to help businesses reduce their environmental impact and meet sustainability goals through optimized routes and resource utilization.",
    icon: Leaf,
  },
  {
    title: "Customization",
    subtitle: "Tailored Solutions",
    description:
      "We tailor our solutions to your unique business needs, ensuring optimal performance and ROI while addressing specific operational requirements and challenges.",
    icon: Settings,
  },
  {
    title: "Proven Track Record",
    subtitle: "Demonstrated Success",
    description:
      "With a history of successful implementations, we have earned the trust of clients in logistics and supply chain management across various industries globally.",
    icon: Award,
  },
  {
    title: "Ongoing Support",
    subtitle: "Continuous Partnership",
    description:
      "We provide continuous maintenance and support to ensure smooth operations and adapt to evolving business requirements with 24/7 technical assistance.",
    icon: Headphones,
  },
];

export const logistics_services_stack = {
  "Logistics Solutions": [
    { name: "Transportation Management Systems (TMS)", icon: Truck },
    { name: "Last-Mile Delivery Optimization", icon: MapPin },
    { name: "Fleet Management Systems", icon: Car },
    { name: "Route Planning & Optimization", icon: Route },
    { name: "Freight Management", icon: Box },
    { name: "Carrier Management", icon: Truck },
  ],
  "Warehouse Solutions": [
    { name: "Warehouse Management Systems (WMS)", icon: Warehouse },
    { name: "Inventory Optimization Tools", icon: Package },
    { name: "Smart Storage Solutions", icon: Box },
    { name: "Pick & Pack Automation", icon: Bot },
  ],
  "Supply Chain Solutions": [
    { name: "End-to-End Supply Chain Visibility", icon: Eye },
    { name: "Blockchain for Traceability", icon: Blocks },
    { name: "Predictive Analytics & Demand Forecasting", icon: BarChart3 },
    { name: "Supply Chain Risk Management", icon: Shield },
  ],
  "eCommerce Logistics": [
    { name: "Automated Order Management", icon: FileText },
    { name: "Shipment Tracking Solutions", icon: MapPin },
    { name: "Reverse Logistics Platforms", icon: RefreshCw },
    { name: "Multi-Channel Fulfillment", icon: ArrowRightLeft },
  ],
  "Cold Chain Solutions": [
    { name: "Temperature Monitoring Systems", icon: Thermometer },
    { name: "Cold Chain Logistics Management", icon: Warehouse },
    { name: "Pharmaceutical Logistics", icon: Shield },
    { name: "Food Safety Compliance", icon: FileText },
  ],
  "Sustainability Solutions": [
    { name: "Carbon Emission Tracking", icon: Leaf },
    { name: "Energy Optimization Tools", icon: Zap },
    { name: "Eco-Friendly Route Planning", icon: Route },
    { name: "Green Supply Chain Analytics", icon: BarChart3 },
  ],
  "Analytics & Intelligence": [
    { name: "Real-Time Dashboard Solutions", icon: Monitor },
    { name: "Supply Chain Analytics", icon: BarChart },
    { name: "Performance Optimization", icon: TrendingUp },
    { name: "Predictive Maintenance", icon: Wrench },
  ],
  "Automation & IoT": [
    { name: "Robotic Process Automation (RPA)", icon: Bot },
    { name: "IoT Sensor Networks", icon: Cpu },
    { name: "Smart Warehouse Automation", icon: Warehouse },
    { name: "AI-Powered Decision Making", icon: Activity },
  ],
};
