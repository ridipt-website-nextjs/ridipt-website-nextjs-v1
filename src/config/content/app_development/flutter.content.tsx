import { business_process, streamlining_development } from "@/config/constant";
import { mergeProcessWithOverrides } from "../common-functions";
import { FeatureItem } from "@/config/interface";

export const flutter_app_content = [
    {
        title: "Expert Flutter App Consulting",
        description:
            "Harness the potential of Flutter with our seasoned developers, delivering tailored technical solutions to enhance your business strategies and drive impactful results.",
        image: require('@assets/technology_icons/flutter.svg'),
    },
    {
        title: "Cross-Platform Excellence with Flutter Development",
        description:
            "Ridipt's Flutter app development ensures efficient deployment across platforms, helping you create powerful applications with exceptional performance.",
        image: require('@assets/our_services/mobile development/multi-platform.svg'),
    },
    {
        title: "Effortless Flutter App Migration",
        description:
            "Let our experts assist you in migrating your existing application to Flutter. Achieve performance-centric, multi-platform compatibility to enhance your digital presence effectively.",
        image: require('@assets/our_services/web development/migration-services.svg'),
    },
    {
        title: "API Development & Integration Services",
        description:
            "Crafting REST APIs tailored to your unique development demands. Our skilled Flutter developers excel in seamless API integration and deployment, ensuring smooth and efficient operations.",
        image: require('@assets/our_services/web development/integration.svg'),
    },
    {
        title: "Advanced & Native App Development",
        description:
            "Achieve the unparalleled performance and flexibility of native apps with our Flutter expertise. Our developers craft high-performing applications that combine advanced functionality and a seamless user experience.",
        image: require('@assets/our_services/mobile development/performance.svg'),
    },
    {
        title: "Custom Flutter App Development",
        description:
            "Ridipt, a premier Flutter app development company, transforms your ideas into world-class solutions using cutting-edge technologies and expert resources tailored to your unique demands.",
        image: require('@assets/our_services/web development/custom-developement.svg'),
    },
    {
        title: "Cross-Platform Flutter Development",
        description:
            "Our Flutter app developers excel in creating applications that seamlessly integrate across multiple platforms, ensuring your app reaches a broader audience and remains accessible to all.",
        image: require('@assets/our_services/mobile development/multi-platform.svg'),
    },
    {
        title: "Flutter App Design Services",
        description:
            "Delivering ultra-responsive UI/UX designs with a rapid development and deployment process, ensuring users enjoy seamless and intuitive navigation throughout the entire application.",
        image: require('@assets/our_services/web development/custom-design.svg'),
    },
];


export const flutter_app_services: FeatureItem[] = [
    {
        title: "Support & Maintenance",
        subtitle: "Sustainable & Secure Solutions",
        description:
            "We understand the importance of sustainability in the modern world. Our dedicated support and maintenance services ensure your solutions stay efficient, secure, and up-to-date.",
        image: require('@assets/our_services/web development/testing-maintenance.svg'),
    },
    {
        title: "High Scalability",
        subtitle: "Growing with Your Business",
        description:
            "Every step we take is aimed at achieving scalability, ensuring your solutions grow seamlessly with your user base while sustaining their demands.",
        image: require('@assets/our_services/web development/scalability-reusability.svg'),
    },
    {
        title: "Cost-Effective",
        subtitle: "Value-Driven Development",
        description:
            "We prioritize cost-effectiveness in our development processes, utilizing technologies that focus on creating significant value for your business.",
        image: require('@assets/our_services/web development/Cost-Effective.svg'),
    },
    {
        title: "Easy Integration",
        subtitle: "Seamless Connectivity",
        description:
            "Our framework ensures smooth integration with other services, significantly enhancing the functionality of your solutions.",
        image: require('@assets/our_services/web development/integration.svg'),
    },
    {
        title: "Expressive UI",
        subtitle: "Captivating User Experience",
        description:
            "Our Flutter UI designs are crafted to communicate effectively with your users and target audience, ensuring a captivating experience.",
        image: require('@assets/our_services/web development/ui-ux.svg'),
    },
    {
        title: "Agile Development",
        subtitle: "Efficient Sprint Methodology",
        description:
            "Our Agile development process employs a closed-loop methodology, utilizing sprints to enhance efficiency at every stage of the project.",
        image: require('@assets/menifesto/agile.svg'),
    },
];


// --- Streamlining Development Overrides ---
const flutter_app_streamlining_overrides = [
    {
        id: "research-and-idea-generation",
        title: "Research and Idea Generation",
        description:
            "We engage in continuous research and innovation to intelligently address your Flutter app development needs. By understanding cross-platform trends and user behavior, we generate effective solutions tailored for multi-platform success.",
    },
    {
        id: "innovation-and-design",
        title: "Innovation and Design",
        description:
            "We empower clients to explore the best Flutter app design possibilities, enhancing market presence across platforms. Our user-centric approach creates captivating cross-platform applications that drive business growth through strategic design.",
    },
    {
        id: "full-cycle-product-development",
        title: "Full-Cycle Product Development",
        description:
            "Our comprehensive 360-degree Flutter app development service covers every phase from concept to multi-platform launch. Using agile methodologies, we ensure seamless evolution and meticulous management of your cross-platform project.",
    },
    {
        id: "product-growth-and-support",
        title: "Product Growth and Support",
        description:
            "We help identify strengths in your Flutter app solutions while addressing improvements for greater growth. Our dedicated support ensures every aspect is optimized for long-term success across all platforms.",
    },
];

export const flutter_app_streamlining_development = mergeProcessWithOverrides<
    typeof streamlining_development[number]
>(
    streamlining_development,
    flutter_app_streamlining_overrides
);


// --- Business Process Overrides ---
const flutter_app_business_overrides = [
    {
        id: "research_plan",
        title: "Research & Plan",
        description:
            "We conduct comprehensive Flutter app development research to gather insights that inform our cross-platform strategies. Our tailored plans ensure alignment with your unique business needs and multi-platform objectives.",
    },
    {
        id: "code",
        title: "Code",
        description:
            "Our expert Flutter developers use modern Dart programming practices and follow Flutter development standards to create clean, efficient, and maintainable code that ensures robust cross-platform applications.",
    },
];

export const flutter_app_business_process = mergeProcessWithOverrides(
    business_process,
    flutter_app_business_overrides
);
