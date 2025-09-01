import {
  ShieldCheck,
  Heart,
  Zap,
  Link,
  Video,
  Database,
  Smartphone,
  Users,
  BarChart3,
  ArrowRightLeft,
  FileText,
  Shield,
  Headphones,
  GraduationCap,
  Settings,
  Lightbulb,
  Palette,
  Award,
  Handshake,
  Calendar,
  TrendingUp,
  Stethoscope,
  Activity,
  ClipboardCheck,
  PillBottle,
  MonitorSpeaker,
  UserCheck,
  Clock,
  Building2,
  Wrench,
  Brain,
  Dumbbell,
  Pill,
  BarChart,
  CreditCard,
  Eye,
  Accessibility,
  Cpu,
} from 'lucide-react';

import { FeatureItem } from "@/config/interface";
import { ChallengeItem } from '@/components/services/process-card-section';
import { ContentItem } from '@/components/ui/sticky-scroll-reveal';

export const healthcare_challenges: ChallengeItem[] = [
  {
    "id": "data-management-and-security",
    "title": "Data Management and Security",
    "description": "Handling sensitive patient information securely while ensuring compliance with regulations such as HIPAA is a top priority. Healthcare organizations face the challenge of managing vast amounts of data, requiring robust security protocols to protect against breaches and unauthorized access.",
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
    "id": "patient-engagement",
    "title": "Patient Engagement",
    "description": "Improving patient communication and involvement in their healthcare journey is essential. Many patients desire more control over their health information and the ability to easily communicate with their providers. Our solutions enhance patient engagement through user-friendly portals and mobile applications.",
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
    "id": "operational-efficiency",
    "title": "Operational Efficiency",
    "description": "Streamlining workflows and reducing administrative burdens is critical for healthcare organizations. Inefficient processes can lead to increased costs and decreased patient satisfaction. Our solutions focus on automating routine tasks and optimizing resource allocation.",
    "icon": Zap,
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
    "id": "integration-of-technologies",
    "title": "Integration of Technologies",
    "description": "Ensuring seamless interoperability between different healthcare systems and technologies is essential for improved data sharing. Many organizations struggle with siloed data and lack of communication between systems. Our integration solutions facilitate smooth information exchange.",
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
    "id": "telehealth-adoption",
    "title": "Telehealth Adoption",
    "description": "Expanding access to care through virtual consultations and remote monitoring solutions has become increasingly important. Healthcare providers need reliable telehealth solutions to reach patients, particularly in rural or underserved areas.",
    "icon": Video,
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

export const healthcare_content: ContentItem[] = [
  {
    title: "Healthcare Management Systems",
    description:
      "We develop comprehensive management systems that facilitate patient record management, appointment scheduling, and billing processes. These systems enhance operational efficiency and provide healthcare providers with the tools they need to deliver quality care.",
    icon: Database,
  },
  {
    title: "Telemedicine Platforms",
    description:
      "Our telemedicine solutions enable healthcare professionals to conduct remote consultations, improving access to care while ensuring patient safety and convenience. We focus on creating secure and user-friendly platforms that enhance the patient experience.",
    icon: Video,
  },
  {
    title: "Patient Engagement Solutions",
    description:
      "We create user-friendly patient portals and mobile applications that enhance communication, appointment management, and access to health information. These solutions empower patients to take an active role in their healthcare.",
    icon: Users,
  },
  {
    title: "Data Analytics and Reporting",
    description:
      "Utilizing advanced analytics tools, we help healthcare organizations harness data to make informed decisions. Our data solutions provide valuable insights that can lead to improved patient outcomes and optimized resource allocation.",
    icon: BarChart3,
  },
  {
    title: "Interoperability Solutions",
    description:
      "We develop systems that enable seamless integration between various healthcare applications, allowing for efficient data exchange and collaboration among healthcare providers. Our solutions ensure that data flows smoothly across different platforms.",
    icon: ArrowRightLeft,
  },
  {
    title: "EHR/EMR Solutions",
    description:
      "Our Electronic Health Record (EHR) and Electronic Medical Record (EMR) systems improve patient data management and streamline workflows within healthcare facilities. We focus on creating systems that enhance accessibility and usability for healthcare professionals.",
    icon: FileText,
  },
  {
    title: "Mobile Health Applications",
    description:
      "We create mobile applications that promote wellness, disease management, and patient education. Our solutions empower individuals to take charge of their health and engage with their healthcare providers more effectively.",
    icon: Smartphone,
  },
  {
    title: "Compliance Management Systems",
    description:
      "We develop systems that help healthcare organizations maintain compliance with industry regulations and standards. These systems streamline the auditing process and ensure that organizations are prepared for regulatory changes.",
    icon: Shield,
  },
  {
    title: "Training and Support Solutions",
    description:
      "We offer training programs and support services to ensure that healthcare staff can effectively use the technology we provide. Our commitment to ongoing education helps organizations maximize the benefits of their investments.",
    icon: GraduationCap,
  },
];

export const healthcare_services: FeatureItem[] = [
  {
    title: "Industry Expertise",
    subtitle: "Healthcare Technology Specialists",
    description:
      "Our team comprises professionals with extensive experience in healthcare technology. We understand the complexities of the industry and ensure that our solutions meet industry standards and best practices.",
    icon: Stethoscope,
  },
  {
    title: "Tailored Solutions",
    subtitle: "Customized for Unique Needs",
    description:
      "We recognize that every healthcare organization has unique needs. Our solutions are customized to align with your specific requirements and objectives, ensuring that we deliver the best results for your organization.",
    icon: Settings,
  },
  {
    title: "Focus on Compliance",
    subtitle: "Ensuring Regulatory Adherence",
    description:
      "We prioritize regulatory compliance in all our solutions. Our team stays up-to-date with industry regulations to ensure that your organization meets legal requirements and protects patient data effectively.",
    icon: Shield,
  },
  {
    title: "User-Centric Design",
    subtitle: "Intuitive & Engaging Solutions",
    description:
      "Our healthcare solutions are designed with the end-user in mind. We prioritize ease of use, ensuring that both healthcare professionals and patients find our applications intuitive and engaging.",
    icon: Palette,
  },
  {
    title: "Ongoing Support and Maintenance",
    subtitle: "Reliable Continuous Assistance",
    description:
      "We provide continuous support and maintenance for our solutions, ensuring that they remain effective and up-to-date in a dynamic healthcare environment. Our team is always available to address any issues that may arise.",
    icon: Headphones,
  },
  {
    title: "Innovative Technologies",
    subtitle: "AI, IoT & Cloud-Powered Solutions",
    description:
      "We leverage the latest technologies, including AI, IoT, and cloud computing, to deliver cutting-edge healthcare solutions. Our commitment to innovation ensures that your organization stays ahead in a rapidly changing industry.",
    icon: Lightbulb,
  },
  {
    title: "Proven Track Record",
    subtitle: "Trusted Healthcare Solutions",
    description:
      "Our successful projects and satisfied clients demonstrate our ability to deliver high-quality healthcare solutions. We have a proven track record of enhancing operational efficiency and improving patient outcomes.",
    icon: Award,
  },
  {
    title: "Collaboration and Partnership",
    subtitle: "Working Together for Success",
    description:
      "We believe in building strong relationships with our clients. Our collaborative approach ensures that we work closely with your team to understand your needs and deliver solutions that exceed expectations.",
    icon: Handshake,
  },
];

export const healthcare_services_stack = {
  "Healthcare Organizations Solutions": [
    { name: "Electronic Database Software", icon: Database },
    { name: "Training Solutions", icon: GraduationCap },
    { name: "Appointment Scheduling Software", icon: Calendar },
    { name: "Predictive Healthcare Solutions", icon: TrendingUp },
    { name: "Medical Research & Development", icon: Brain },
    { name: "Staff Hiring Solutions", icon: UserCheck },
  ],
  "Healthcare Management Solutions": [
    { name: "Fitness & Wellness", icon: Dumbbell },
    { name: "E-Prescribing Software", icon: Pill },
    { name: "Dashboard Solutions", icon: BarChart },
    { name: "Billing Solutions", icon: CreditCard },
  ],
  "On-Demand Healthcare Solutions": [
    { name: "Monitoring Application", icon: Activity },
    { name: "Clinical", icon: ClipboardCheck },
    { name: "Assistive Technology", icon: Accessibility },
    { name: "Integrated Healthcare", icon: Cpu },
  ],
};
