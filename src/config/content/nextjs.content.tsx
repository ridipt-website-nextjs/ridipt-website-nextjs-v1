import { business_process, streamlining_development } from "../constant";
import { FeatureItem } from "../interface";
import { mergeProcessWithOverrides } from "./common-functions";

export const nextjs_stack_content = [
  {
    title: "Next.js Development Services",
    description:
      "Leverage the powerful features of Next.js to build fast, scalable, and SEO-friendly web applications. Our team specializes in tailored solutions that deliver exceptional user experiences.",
    image: require('@assets/our_services/web development/stack-development.svg'),
  },
  {
    title: "Server-Side Rendering & Static Site Generation",
    description:
      "Harness the power of SSR and SSG in Next.js to optimize performance and SEO. We choose the right rendering strategy for your business to deliver lightning-fast, high-performing applications.",
    image: require('@assets/our_services/web development/integration.svg'),
  },
  {
    title: "API Development & Integration",
    description:
      "Seamlessly connect your Next.js apps with custom APIs. Our API development ensures smooth interaction, secure data flow, and enhanced business functionality.",
    image: require('@assets/our_services/web development/api-development.svg'),
  },
  {
    title: "Next.js E-commerce Solutions",
    description:
      "Transform your online store with dynamic, scalable, and secure Next.js-based e-commerce platforms. We focus on intuitive design and smooth checkout experiences.",
    image: require('@assets/industry/ecommerce.svg'),
  },
  {
    title: "CMS Development",
    description:
      "Empower your content strategy with custom Next.js CMS solutions. We build intuitive, feature-rich platforms that simplify content management while ensuring performance.",
    image: require('@assets/our_services/web development/cms-development.svg'),
  },
  {
    title: "Migration to Next.js",
    description:
      "Effortlessly upgrade your existing applications to Next.js. Our migration services minimize downtime, preserve data integrity, and enhance scalability.",
    image: require('@assets/our_services/web development/migration-services.svg'),
  },
  {
    title: "Testing & Quality Assurance",
    description:
      "Ensure your Next.js applications are secure, bug-free, and reliable. We conduct rigorous performance and usability testing to guarantee seamless user experiences.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
  {
    title: "Continuous Support & Maintenance",
    description:
      "Keep your applications secure, fast, and up-to-date with our dedicated support and maintenance services for Next.js.",
    image: require('@assets/our_services/web development/custom-design.svg'),
  },
];


export const nextjs_services: FeatureItem[] = [
  {
    title: "Expertise in Next.js Framework",
    subtitle: "Dynamic & SEO-Optimized Applications",
    description:
      "Our developers specialize in building dynamic, SEO-friendly, and high-performing Next.js applications tailored to your business goals.",
    image: require('@assets/technology_icons/next.svg'),
  },
  {
    title: "End-to-End Development",
    subtitle: "From Idea to Deployment",
    description:
      "We handle the entire lifecycle — from planning, design, and coding to deployment, testing, and long-term support — ensuring your success at every step.",
    image: require('@assets/our_services/web development/end-to-end.svg'),
  },
  {
    title: "Tailored Solutions",
    subtitle: "Custom Applications for Every Business",
    description:
      "We build bespoke Next.js applications that align with your specific business objectives, ensuring scalability, flexibility, and long-term value.",
    image: require('@assets/our_services/web development/scalability-reusability.svg'),
  },
  {
    title: "Optimized for Performance",
    subtitle: "Fast & Reliable Experiences",
    description:
      "Our Next.js applications leverage SSR and SSG to ensure superior speed, excellent SEO, and optimal user experiences.",
    image: require('@assets/our_services/web development/performance-optimization.svg'),
  },
  {
    title: "User-Centric Design",
    subtitle: "Intuitive & Engaging Interfaces",
    description:
      "We prioritize UI/UX design, combining aesthetics and functionality to deliver applications that delight users and drive conversions.",
    image: require('@assets/our_services/web development/ui-ux.svg'),
  },
  {
    title: "Dedicated Support",
    subtitle: "Secure & Future-Ready",
    description:
      "Our support and maintenance services keep your Next.js applications secure, scalable, and updated for future growth.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
];


// --- Streamlining Development Overrides ---
const nextjs_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We perform continuous research and analysis to align solutions with your business goals. Our innovative strategies ensure effective Next.js applications tailored to your needs.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "Our design-first approach creates engaging, user-centric Next.js applications that balance innovation with seamless functionality for superior experiences.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "From planning and architecture to deployment and scaling, we provide complete Next.js development services with agile, adaptive methodologies.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "Our ongoing support and optimization services help your Next.js applications evolve with your business, ensuring scalability and long-term success.",
  },
];

export const nextjs_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  nextjs_streamlining_overrides
);


// --- Business Process Overrides ---
const nextjs_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct in-depth research and create tailored strategies to ensure Next.js solutions align perfectly with your objectives.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Our expert developers write clean, efficient, and scalable Next.js code following best practices to ensure long-term maintainability.",
  },
];

export const nextjs_business_process = mergeProcessWithOverrides(
  business_process,
  nextjs_business_overrides
);
