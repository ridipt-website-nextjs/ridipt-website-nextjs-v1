import { business_process, streamlining_development } from "../constant";
import { mergeProcessWithOverrides } from "./common-functions";

export const mean_mern_stack_content = [
  {
    title: "MEAN & MERN Stack Development",
    description:
      "Leverage the combined power of MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React.js, Node.js) stacks to build robust, scalable, and high-performing web applications. Our expertise ensures tailored solutions, optimized performance, and future-proof applications.",
    image: require('@assets/our_services/web development/stack-development.svg'),
  },
  {
    title: "MEAN & MERN Stack Integration",
    description:
      "Seamlessly integrate MEAN and MERN stacks into your business processes. Our solutions ensure smooth operations, efficient workflows, and enhanced business scalability with robust integration strategies.",
    image: require('@assets/our_services/web development/integration.svg'),
  },
  {
    title: "MEAN & MERN Stack Consulting",
    description:
      "Get expert consulting to align MEAN & MERN stack adoption with your business goals. We design tailored strategies that maximize ROI and ensure successful implementation of modern technologies.",
    image: require('@assets/our_services/web development/stack-consulting.svg'),
  },
  {
    title: "MEAN & MERN Stack CMS Development",
    description:
      "Build custom CMS solutions with MEAN and MERN stacks for better content management, seamless performance, and intuitive user experiences tailored to your operational needs.",
    image: require('@assets/our_services/web development/cms-development.svg'),
  },
  {
    title: "Migration Services",
    description:
      "Effortlessly migrate your existing systems to MEAN or MERN stacks with minimal disruption. Our migration services preserve data integrity, optimize performance, and unlock scalability.",
    image: require('@assets/our_services/web development/migration-services.svg'),
  },
  {
    title: "Testing & Maintenance",
    description:
      "Ensure the reliability of your MEAN and MERN applications with rigorous testing and continuous maintenance. We provide expert support to keep your systems secure and high-performing.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
  {
    title: "API Development & Integration",
    description:
      "Enhance your applications with custom API development and seamless integration. Our scalable, secure, and high-performing APIs boost connectivity and overall business efficiency.",
    image: require('@assets/our_services/web development/api-development.svg'),
  },
  {
    title: "Porting to MEAN/MERN Services",
    description:
      "Future-proof your legacy applications by porting them to MEAN or MERN stacks. Our porting services improve performance, scalability, and flexibility for long-term business success.",
    image: require('@assets/our_services/web development/porting-services.svg'),
  },
];


type FeatureItem = {
  title: string;
  subtitle: string;
  description: string;
  image: any;
};

export const mean_mern_services: FeatureItem[] = [
  {
    title: "Cost-Effective Development Solutions",
    subtitle: "Delivering Value Through Efficiency",
    description:
      "At Ridipt, we focus on creating cost-effective MEAN/MERN applications by leveraging efficient methodologies and resource optimization. Our solutions offer maximum value while aligning with your budget.",
    image: require('@assets/our_services/web development/Cost-Effective.svg'),
  },
  {
    title: "Security & Flexibility",
    subtitle: "Robust Applications for Secure Operations",
    description:
      "Our MEAN/MERN solutions are designed with advanced security protocols and flexible architectures, ensuring your applications remain resilient and adaptable to evolving business needs.",
    image: require('@assets/our_services/web development/security-flexibility.svg'),
  },
  {
    title: "Scalability & Reusability",
    subtitle: "Build Applications That Grow with You",
    description:
      "Ridipt focuses on crafting scalable and reusable MEAN/MERN applications designed to adapt to your business's growing needs, ensuring sustainability and long-term efficiency.",
    image: require('@assets/our_services/web development/scalability-reusability.svg'),
  },
  {
    title: "Skilled Development Team",
    subtitle: "Expertise That Delivers Excellence",
    description:
      "Collaborate with our team of seasoned MEAN/MERN developers who bring a wealth of experience and innovation to every project, ensuring high-quality results.",
    image: require('@assets/our_services/web development/skilled-team.svg'),
  },
  {
    title: "Convenient UI/UX",
    subtitle: "Interactive & User-Centric Designs",
    description:
      "We create visually engaging and intuitive interfaces for MEAN/MERN applications, ensuring a seamless and delightful experience for your end users.",
    image: require('@assets/our_services/web development/ui-ux.svg'),
  },
  {
    title: "Support & Maintenance",
    subtitle: "Ongoing Support for Optimal Performance",
    description:
      "We offer comprehensive support and maintenance services to ensure your MEAN/MERN applications remain up-to-date and fully optimized for the best performance.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
];


const mern_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We perform in-depth research and analysis to understand your business challenges and opportunities. By leveraging insights from industry trends, we generate innovative MEAN/MERN-driven ideas that align with your goals and deliver effective solutions.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "Our design-first approach ensures MEAN/MERN applications that are user-centric, engaging, and strategically built to strengthen your digital presence. We blend innovation and aesthetics to create solutions that resonate with your audience.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "We provide end-to-end MEAN/MERN product development services, covering every stage from planning and architecture to deployment and scaling. With agile methodologies, we ensure rapid iterations, adaptability, and successful product launches.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "Our dedicated MEAN/MERN support and maintenance services optimize performance, enhance scalability, and address issues proactively. We help you continuously improve your applications to meet evolving business demands.",
  },
];

export const mern_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  mern_streamlining_overrides
);


const mern_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct detailed research on MEAN/MERN technologies to craft strategies tailored to your business. Our plans align with your objectives and set the stage for efficient, scalable solutions.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Our expert developers write clean, efficient, and maintainable code using MEAN and MERN stacks. By following best practices, we ensure applications that are robust today and adaptable for tomorrow.",
  },
];

export const mern_business_process = mergeProcessWithOverrides(
  business_process,
  mern_business_overrides
);
