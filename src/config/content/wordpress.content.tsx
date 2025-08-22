import { business_process, streamlining_development } from "../constant";
import { FeatureItem } from "../interface";
import { mergeProcessWithOverrides } from "./common-functions";

export const wordpress_content = [
  {
    title: "Custom WordPress Theme Development",
    description:
      "We create bespoke WordPress themes that reflect your brand's identity and vision. Our designs are visually appealing and fully responsive, ensuring a consistent experience across all devices.",
    image: require('@assets/our_services/web development/custom-theme.svg'),
  },
  {
    title: "Plugin Development & Customization",
    description:
      "Our team develops and customizes WordPress plugins to extend your website's capabilities, ensuring it meets your specific requirements and enhances user experience.",
    image: require('@assets/our_services/web development/plugin-ecosystem.svg'),
  },
  {
    title: "E-commerce Solutions with WooCommerce",
    description:
      "We integrate WooCommerce into your WordPress website, enabling you to create a powerful online store with user-friendly shopping experiences and secure payment processing.",
    image: require('@assets/technology_icons/woocommerce.svg'),
  },
  {
    title: "WordPress SEO Optimization",
    description:
      "Our SEO experts implement best practices in your WordPress site, optimizing content and structure to improve search engine rankings and drive organic traffic.",
    image: require('@assets/our_services/web development/seo-friendly.svg'),
  },
  {
    title: "Responsive Web Design",
    description:
      "We focus on developing responsive WordPress websites that provide a seamless user experience, adapting perfectly to desktops, tablets, and smartphones.",
    image: require('@assets/our_services/web development/responsive-design.svg'),
  },
  {
    title: "Website Migration to WordPress",
    description:
      "Our migration services ensure a hassle-free transition to WordPress from your existing platform, preserving your content and maintaining data integrity throughout the process.",
    image: require('@assets/our_services/web development/migration-services.svg'),
  },
  {
    title: "WordPress Security and Maintenance",
    description:
      "We offer ongoing security and maintenance services for your WordPress site, protecting it from vulnerabilities and ensuring optimal performance with regular updates.",
    image: require('@assets/our_services/web development/security-flexibility.svg'),
  },
  {
    title: "Performance Optimization",
    description:
      "Our team optimizes your WordPress website for speed, improving load times and overall performance to provide users with a satisfying browsing experience.",
    image: require('@assets/our_services/web development/performance-optimization.svg'),
  },
];


export const wordpress_services: FeatureItem[] = [
  {
    title: "Expertise in WordPress Solutions",
    subtitle: "Powerful & Tailored Websites",
    description:
      "Our experienced team delivers high-quality WordPress websites tailored to your unique needs, driving engagement and conversion with powerful functionality.",
    image: require('@assets/our_services/web development/skilled-team.svg'),
  },
  {
    title: "Cost-Effective and Scalable Solutions",
    subtitle: "Affordable & Growth-Ready",
    description:
      "We provide scalable WordPress solutions that grow with your business, ensuring you get the best value for your investment with affordable development costs.",
    image: require('@assets/our_services/web development/scalability-reusability.svg'),
  },
  {
    title: "User-Friendly Content Management",
    subtitle: "Easy Website Management",
    description:
      "WordPress makes it effortless to manage your website content without technical expertise. Update, add, or remove content easily, keeping your site current and relevant.",
    image: require('@assets/our_services/web development/content-management.svg'),
  },
  {
    title: "Extensive Plugin Ecosystem",
    subtitle: "Enhanced Functionality",
    description:
      "With thousands of plugins available, we can enhance your website's functionality easily. From SEO tools to e-commerce solutions, there's a plugin for every need.",
    image: require('@assets/our_services/web development/plugin-ecosystem.svg'),
  },
  {
    title: "SEO-Friendly Framework",
    subtitle: "Built for Search Engines",
    description:
      "WordPress is built with search engines in mind, providing features and tools that help improve your website's visibility and rankings on search engines.",
    image: require('@assets/our_services/web development/seo-friendly.svg'),
  },
  {
    title: "Client-Centric Approach",
    subtitle: "Collaborative Development",
    description:
      "We prioritize your satisfaction with a collaborative approach that ensures your vision and feedback are integral to the development process, meeting your expectations.",
    image: require('@assets/our_services/web development/client-centric.svg'),
  },
];


// --- Streamlining Development Overrides ---
const wordpress_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your WordPress needs. By understanding market trends and client requirements, we generate effective solutions tailored to your business goals.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best WordPress design possibilities, enhancing market presence. Our user-centric approach creates captivating websites that drive business growth through strategic design and innovation.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Product Development",
    description:
      "Our comprehensive 360-degree WordPress development service covers every phase from concept to launch. Using agile methodologies, we ensure seamless evolution and meticulous management of your project.",
  },
  {
    id: "product-growth-and-support",
    title: "Product Growth and Support",
    description:
      "We help identify strengths in your WordPress solutions while addressing improvements for greater growth. Our dedicated support ensures every aspect is optimized for long-term success.",
  },
];

export const wordpress_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  wordpress_streamlining_overrides
);

// --- Business Process Overrides ---
const wordpress_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive WordPress-specific research to gather insights that inform our strategies. Our tailored plans ensure alignment with your unique business needs and objectives.",
  },
  {
    id: "code",
    title: "Code",
    description:
      "Our expert WordPress developers use modern coding practices and follow WordPress standards to create clean, efficient, and maintainable code that ensures robust and adaptable websites.",
  },
];

export const wordpress_business_process = mergeProcessWithOverrides(
  business_process,
  wordpress_business_overrides
);
