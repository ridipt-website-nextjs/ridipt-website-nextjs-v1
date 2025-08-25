import { business_process, streamlining_development } from "@/config/constant";
import { FeatureItem } from "@/config/interface";
import { mergeProcessWithOverrides } from "../common-functions";

export const ios_app_content = [
  {
    title: "iOS App Development Consultation Services",
    description:
      "Our team of consultants and experts is prepared to provide you with comprehensive guidance and support for delivering premium iOS app development services to your users. We focus on understanding your specific needs and requirements, ensuring that we craft solutions that align perfectly with your business goals.",
    image: require('@assets/technology_icons/react.svg'),
  },
  {
    title: "Multi-Platform iOS App Development Services",
    description:
      "As a leading iOS app development company, we utilize the finest tools and technologies to create iOS applications tailored for multiple platforms. Our approach ensures that your apps deliver a seamless experience across various devices while meeting the unique requirements of each platform.",
    image: require('@assets/our_services/mobile development/multi-platform.svg'),
  },
  {
    title: "iOS UI/UX Design Services",
    description:
      "Our expert UI/UX designers craft iOS apps that strike the perfect balance between creativity and technical precision. We ensure better scalability and innovative designs tailored to meet the demands of a competitive market.",
    image: require('@assets/our_services/web development/custom-design.svg'),
  },
  {
    title: "iOS App Integration",
    description:
      "Experience seamless functionality with iOS apps designed for high compatibility and easy integration. Our solutions ensure scalability and adaptability with various advanced technologies.",
    image: require('@assets/our_services/web development/integration.svg'),
  },
  {
    title: "iOS Software Testing & Maintenance",
    description:
      "Our experts prioritize the security and performance of your iOS apps by delivering top-notch software testing services to ensure flawless functionality.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
  {
    title: "Custom iOS App Development Service",
    description:
      "Our skilled iOS app developers excel in overcoming challenges, delivering tailored solutions by leveraging state-of-the-art technology and a collaborative approach.",
    image: require('@assets/our_services/mobile development/custom.svg'),
  },
  {
    title: "Native iOS App Development",
    description:
      "We specialize in creating high-performance native iOS applications using Swift and Objective-C. Our native development approach ensures optimal performance, better user experience, and full access to iOS device features.",
    image: require('@assets/our_services/web development/performance-optimization.svg'),
  },
  {
    title: "App Store Optimization & Publishing",
    description:
      "We guide you through the entire Apple App Store submission process, including app store optimization (ASO) to improve visibility, increase downloads, and ensure your app meets all Apple App Store guidelines and requirements.",
    image: require('@assets/our_services/web development/migration-services.svg'),
  },
];

export const ios_app_services: FeatureItem[] = [
  {
    title: "Achieving High Sustainability",
    subtitle: "Research-Driven iOS Development",
    description:
      "We implement thoroughly researched methodologies in our business and development processes, ensuring high sustainability for our clients. This enables them to grow efficiently and effectively in today's competitive landscape.",
    image: require('@assets/our_services/mobile development/sustainability.svg'),
  },
  {
    title: "Strong & Secure Solutions",
    subtitle: "Robust iOS Security Features",
    description:
      "Our team of dedicated iOS developers brings extensive experience in leveraging a variety of technologies to create apps with robust security features and high-performance capabilities.",
    image: require('@assets/our_services/web development/security-flexibility.svg'),
  },
  {
    title: "High ROI Applications",
    subtitle: "Maximizing Business Value",
    description:
      "By merging state-of-the-art technologies with a collaborative approach, we empower our clients to achieve business success and deliver superior service quality that enables them to thrive in the competitive market.",
    image: require('@assets/our_services/mobile development/high-roi.svg'),
  },
  {
    title: "Commitment to Quality Solutions",
    subtitle: "Global Standards Excellence",
    description:
      "We prioritize delivering quality services that meet the highest global standards, essential for our clients' business success and growth in today's innovative markets.",
    image: require('@assets/our_services/mobile development/quality.svg'),
  },
  {
    title: "Engaging Interactive UI/UX Design",
    subtitle: "Exceptional iOS User Experience",
    description:
      "We recognize that an interactive app interface with innovative design reflects your business offerings. Our talented designers create stunning UI to ensure an exceptional user experience.",
    image: require('@assets/our_services/mobile development/interactive-design.svg'),
  },
  {
    title: "Effective Collaboration for Superior Solutions",
    subtitle: "Team-Driven Excellence",
    description:
      "The solutions we create stem from our team's collaborative efforts. Our iOS app development team blends fresh talent with seasoned leaders, ensuring the delivery of exceptional results.",
    image: require('@assets/menifesto/collaboration.svg'),
  },
];


// --- Streamlining Development Overrides ---
const ios_app_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your iOS app development needs. By understanding Apple ecosystem trends and user behavior, we generate effective solutions tailored for iOS success.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best iOS app design possibilities, enhancing market presence on Apple platforms. Our user-centric approach creates captivating iOS applications that drive business growth through strategic design and innovation.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "Our comprehensive 360-degree iOS app development service covers every phase from concept to App Store launch. Using agile methodologies, we ensure seamless evolution and meticulous management of your iOS application project.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "We help identify strengths in your iOS app solutions while addressing improvements for greater growth. Our dedicated support ensures every aspect is optimized for long-term success in the Apple ecosystem.",
  },
];

export const ios_app_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  ios_app_streamlining_overrides
);


// --- Business Process Overrides ---
const ios_app_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive iOS app development research to gather insights that inform our Apple platform strategies. Our tailored plans ensure alignment with your unique business needs and iOS market objectives.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Our expert iOS developers use modern Swift and Objective-C programming practices and follow Apple development standards to create clean, efficient, and maintainable code that ensures robust and scalable iOS applications.",
  },
];

export const ios_app_business_process = mergeProcessWithOverrides(
  business_process,
  ios_app_business_overrides
);
