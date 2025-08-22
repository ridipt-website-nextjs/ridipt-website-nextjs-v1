import { business_process, streamlining_development } from "../constant";
import { FeatureItem } from "../interface";
import { mergeProcessWithOverrides } from "./common-functions";

export const static_website_stack_content = [
  {
    title: "Custom Static Website Design",
    description:
      "We create visually striking static websites that represent your brand's identity. Our custom designs ensure your website stands out while maintaining a user-friendly interface that resonates with your audience.",
    image: require('@assets/our_services/web development/custom-design.svg'),
  },
  {
    title: "Responsive Web Development",
    description:
      "Our static websites are built to be fully responsive, ensuring a consistent experience across desktops, tablets, and smartphones. We focus on creating layouts that adapt seamlessly to different screen sizes for maximum accessibility.",
    image: require('@assets/our_services/web development/responsive-design.svg'),
  },
  {
    title: "SEO-Friendly Static Websites",
    description:
      "We implement best practices in HTML5 and CSS3 to develop SEO-friendly static websites. This helps improve your website's search engine rankings, driving more organic traffic and enhancing your online presence.",
    image: require('@assets/our_services/web development/seo-friendly.svg'),
  },
  {
    title: "Performance Optimization",
    description:
      "Static websites inherently offer faster loading times. We optimize images and code to ensure your website loads quickly, providing a smooth user experience that keeps visitors engaged.",
    image: require('@assets/our_services/web development/performance-optimization.svg'),
  },
  {
    title: "Easy Maintenance Solutions",
    description:
      "With static websites, making updates is straightforward. We ensure that your website is easy to maintain, allowing you to manage content efficiently without the complexity of dynamic systems.",
    image: require('@assets/our_services/web development/testing-maintenance.svg'),
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "We ensure that your static website performs consistently across all major browsers, providing users with a seamless experience regardless of their preferred platform.",
    image: require('@assets/our_services/web development/compatibility.svg'),
  },
  {
    title: "Hosting and Domain Assistance",
    description:
      "We offer guidance in selecting the right hosting provider and domain name for your static website, ensuring a smooth launch process and optimal performance.",
    image: require('@assets/our_services/web development/hosting.svg'),
  },
  {
    title: "Analytics and Tracking Setup",
    description:
      "We help set up analytics tools to track your website's performance, providing insights into user behavior and helping you make informed decisions for future improvements.",
    image: require('@assets/our_services/web development/analytics.svg'),
  },
];

export const static_website_services: FeatureItem[] = [
  {
    title: "Unmatched Expertise in Static Solutions",
    subtitle: "Partner with Experienced Professionals",
    description:
      "Our experienced team is dedicated to delivering high-quality, responsive websites tailored to your unique needs, ensuring a strong online presence that stands out in the market.",
    image: require('@assets/our_services/web development/skilled-team.svg'),
  },
  {
    title: "Cost-Effective Development",
    subtitle: "Excellent Value Without Compromise",
    description:
      "We understand the importance of budget-friendly solutions. Our static website development services provide excellent value without compromising on quality, helping you achieve your online goals effectively.",
    image: require('@assets/our_services/web development/Cost-Effective.svg'),
  },
  {
    title: "Streamlined Performance",
    subtitle: "Enhanced User Experience",
    description:
      "Static websites are known for their speed and efficiency, providing users with a seamless browsing experience that encourages longer visits and higher engagement rates.",
    image: require('@assets/our_services/web development/performance-optimization.svg'),
  },
  {
    title: "Reduced Server Load",
    subtitle: "Cost-Effective Hosting Solutions",
    description:
      "With fewer server resources required, static websites offer a cost-effective solution for hosting and maintenance, making them ideal for small to medium-sized businesses.",
    image: require('@assets/our_services/web development/saas.svg'),
  },
  {
    title: "Enhanced Security",
    subtitle: "Increased Stability & Protection",
    description:
      "Static websites have a lower risk of vulnerabilities compared to dynamic sites, offering a more secure online presence for your business with enhanced stability.",
    image: require('@assets/our_services/web development/security-flexibility.svg'),
  },
  {
    title: "Client-Centric Approach",
    subtitle: "Collaborative Development Process",
    description:
      "At Ridipt, we prioritize our clients' success. Our collaborative approach ensures that your input is valued throughout the development process, resulting in a website that aligns perfectly with your business objectives.",
    image: require('@assets/menifesto/collaboration.svg'),
  },
];

// --- Streamlining Development Overrides ---
const static_website_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "Achieving excellence involves a continuous process of research and innovation, enabling us to intelligently address our clients' demands. By staying ahead of industry trends and understanding market dynamics, we generate insightful ideas that drive effective static website solutions tailored to your unique needs.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower our clients to thoughtfully explore the best design and innovation possibilities, enhancing their market presence. Our approach focuses on creating user-centric static websites that not only captivate audiences but also drive business growth through strategic design and innovative thinking.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "We offer a comprehensive 360-degree service that encompasses every phase of static website development. By integrating agile methodologies, we enhance progress and adaptability, ensuring that your website evolves seamlessly from concept to launch with meticulous management at each stage.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "We assist our clients in identifying the strengths of their static websites while promptly addressing any inaccuracies to drive greater growth. Our dedicated support ensures that every aspect of your website is optimized for success, enabling you to capitalize on opportunities with confidence.",
  },
];

export const static_website_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  static_website_streamlining_overrides
);


// --- Business Process Overrides ---
const static_website_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct solution-specific research to gather insights that inform our static website strategies. By drafting a tailored plan based on thorough analysis, we ensure that our approach aligns with your unique needs and objectives, setting the foundation for effective implementation and successful outcomes.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Leverage modern and scalable coding practices with our in-house team of experts. We prioritize clean, efficient, and maintainable HTML5, CSS3, and JavaScript code to ensure your static website is robust and adaptable, meeting both current and future needs while adhering to industry standards.",
  },
  {
    id: "build",
    title: "Build",
    description:
      "We specialize in building static websites from the ground up, leveraging the expertise of our skilled resources. Our dedicated team collaborates closely with you to create tailored static solutions that meet your specific requirements, ensuring a solid foundation for your project's success.",
  },
  {
    id: "test",
    title: "Test",
    description:
      "We strive to deliver the best user experience through rigorous testing methods for static websites. By meticulously evaluating every component, we ensure your solution is robust, user-friendly, and free of errors, ready to perform seamlessly across all devices and browsers.",
  },
  {
    id: "deploy",
    title: "Deploy",
    description:
      "Seamlessly installing, configuring, and continuously optimizing your static website to adapt to modern web standards. Our deployment process ensures a smooth transition and readiness to tackle future updates effectively while maintaining optimal performance.",
  },
  {
    id: "operate",
    title: "Operate",
    description:
      "Providing comprehensive post-production support and maintenance for your static website to ensure optimal performance, stability, and long-term success. Our proactive approach keeps your website running smoothly and efficiently while adapting to evolving needs.",
  },
];

export const static_website_business_process = mergeProcessWithOverrides(
  business_process,
  static_website_business_overrides
);

