import { business_process, streamlining_development } from "@/config/constant";
import { FeatureItem } from "@/config/interface";
import { mergeProcessWithOverrides } from "../common-functions";

export const android_app_content = [
  {
    title: "Expert Consultation for Android App Development",
    description:
      "Our team conducts thorough assessments to align your specific needs with effective strategies, ensuring the creation of Android app solutions that enhance your customer engagement and drive growth.",
    image: require('@assets/our_services/mobile development/android.svg'),
  },
  {
    title: "User-Centric Android App UI/UX Design Services",
    description:
      "We create visually engaging and user-focused UI/UX designs that simplify navigation and enhance user satisfaction. Our designs prioritize user needs while aligning with your brand identity, ensuring a seamless experience that meets your customers' expectations.",
    image: require('@assets/our_services/web development/ui-ux.svg'),
  },
  {
    title: "Comprehensive Android Software Testing Services",
    description:
      "Our Android software testing services ensure your applications meet the highest standards of security and performance. We conduct thorough testing to guarantee that users can engage with your app seamlessly and efficiently, experiencing zero downtime and maximum reliability.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
  {
    title: "Comprehensive Android Firebase Integration Services",
    description:
      "We specialize in implementing robust Android Firebase integration, leveraging cloud functions, hosting, and databases powered by high-end Google infrastructure. Our solutions enhance your app's performance and scalability, ensuring a seamless user experience and efficient data management.",
    image: require('@assets/our_services/mobile development/firebase.svg'),
  },
  {
    title: "Tailored Android App Development Services",
    description:
      "Partner with our expert team of Android app developers dedicated to delivering customized applications that meet your specific needs. Equipped with extensive technical expertise, our developers ensure that your app is not only functional but also aligns perfectly with your vision.",
    image: require('@assets/our_services/web development/custom-developement.svg'),
  },
  {
    title: "Native Android App Development",
    description:
      "We specialize in creating high-performance native Android applications using Java and Kotlin. Our native development approach ensures optimal performance, better user experience, and full access to device features and capabilities.",
    image: require('@assets/our_services/mobile development/multi-platform.svg'),
  },
  {
    title: "Android App Maintenance & Support",
    description:
      "Our comprehensive maintenance and support services ensure your Android app remains secure, updated, and performs optimally. We provide regular updates, bug fixes, and feature enhancements to keep your app competitive in the market.",
    // image: require('@assets/our_services/mobile_development/maintenance-support.svg'),
  },
  {
    title: "App Store Optimization & Publishing",
    description:
      "We guide you through the entire Google Play Store submission process, including app store optimization (ASO) to improve visibility, increase downloads, and ensure your app meets all Google Play Store guidelines and requirements.",
    // image: require('@assets/our_services/mobile_development/app-store-optimization.svg'),
  },
];


export const android_app_services: FeatureItem[] = [
  {
    title: "Achieving High Sustainability",
    subtitle: "Research-Driven Development",
    description:
      "We implement thoroughly researched methodologies in our business and development processes, ensuring high sustainability for our clients. This enables them to grow efficiently and effectively in today's competitive landscape.",
    // image: require('@assets/our_services/mobile_development/sustainability.svg'),
  },
  {
    title: "Strong & Secure Solutions",
    subtitle: "Robust Security Features",
    description:
      "Our team of dedicated Android developers brings extensive experience in leveraging a variety of technologies to create apps with robust security features and high-performance capabilities.",
    // image: require('@assets/our_services/mobile_development/security.svg'),
  },
  {
    title: "High ROI Applications",
    subtitle: "Maximizing Business Value",
    description:
      "By merging state-of-the-art technologies with a collaborative approach, we empower our clients to achieve business success and deliver superior service quality that enables them to thrive in the competitive market.",
    // image: require('@assets/our_services/mobile_development/high-roi.svg'),
  },
  {
    title: "Commitment to Quality Solutions",
    subtitle: "Global Standards Excellence",
    description:
      "We prioritize delivering quality services that meet the highest global standards, essential for our clients' business success and growth in today's innovative markets.",
    // image: require('@assets/our_services/mobile_development/quality-solutions.svg'),
  },
  {
    title: "Engaging Interactive UI/UX Design",
    subtitle: "Exceptional User Experience",
    description:
      "We recognize that an interactive app interface with innovative design reflects your business offerings. Our talented designers create stunning UI to ensure an exceptional user experience.",
    // image: require('@assets/our_services/mobile_development/interactive-design.svg'),
  },
  {
    title: "Effective Collaboration for Superior Solutions",
    subtitle: "Team-Driven Excellence",
    description:
      "The solutions we create stem from our team's collaborative efforts. Our Android app development team blends fresh talent with seasoned leaders, ensuring the delivery of exceptional results.",
    // image: require('@assets/our_services/mobile_development/collaboration.svg'),
  },
];

// --- Streamlining Development Overrides ---
const android_app_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your Android app development needs. By understanding market trends and user behavior, we generate effective solutions tailored to your business goals.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best Android app design possibilities, enhancing market presence. Our user-centric approach creates captivating mobile applications that drive business growth through strategic design and innovation.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "Our comprehensive 360-degree Android app development service covers every phase from concept to launch. Using agile methodologies, we ensure seamless evolution and meticulous management of your mobile application project.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "We help identify strengths in your Android app solutions while addressing improvements for greater growth. Our dedicated support ensures every aspect is optimized for long-term success in the mobile market.",
  },
];

export const android_app_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  android_app_streamlining_overrides
);


// --- Business Process Overrides ---
const android_app_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive Android app development research to gather insights that inform our mobile strategies. Our tailored plans ensure alignment with your unique business needs and mobile market objectives.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Our expert Android developers use modern Java/Kotlin programming practices and follow Android development standards to create clean, efficient, and maintainable code that ensures robust and scalable mobile applications.",
  },
];

export const android_app_business_process = mergeProcessWithOverrides(
  business_process,
  android_app_business_overrides
);
