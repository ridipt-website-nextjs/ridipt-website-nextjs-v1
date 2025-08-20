import { business_process, streamlining_development } from "../constant";
import { mergeProcessWithOverrides } from "./common-functions";

// UI/UX Services Data
export const ui_ux_services = [
    {
        title: "UX Design & Development",
        description: "Our UX Design & Development focuses on delivering fast-loading interfaces, seamless navigation, intuitive calls-to-action, and visually appealing designs to elevate user satisfaction.",
        image: require('@assets/our_services/web development/e-commerce.jpg'),
        isAnimation: false,
        highlights: ["Fast-loading Interfaces", "Seamless Navigation", "Intuitive CTAs", "Visual Appeal"]
    },
    {
        title: "Wireframe Designing",
        description: "We deeply understand our clients' prerequisites to craft efficient and informative structures powered by cutting-edge web architecture practices.",
        image: require('@assets/our_services/web development/frontend.jpg'),
        isAnimation: false,
        highlights: ["Client Requirements", "Efficient Structures", "Modern Architecture", "Informative Design"]
    },
    {
        title: "UI Design & Development",
        description: "We empower our clients' digital presence through tailored UI design services, featuring brand-specific elements, stunning visuals, smart layouts, and more.",
        image: require('@assets/our_services/web development/custom-development.jpg'),
        isAnimation: false,
        highlights: ["Brand-specific Elements", "Stunning Visuals", "Smart Layouts", "Digital Presence"]
    },
    {
        title: "Graphic Designing",
        description: "Our graphic design services enhance your app and website's engagement by focusing on your specific needs and delivering visually captivating solutions.",
        image: require('@assets/our_services/web development/backend.jpg'),
        isAnimation: false,
        highlights: ["App Enhancement", "Website Engagement", "Specific Needs", "Visual Solutions"]
    },
    {
        title: "Responsive Design Language",
        description: "At Ridipt, our UI design team creates functional and responsive designs that ensure a consistent, screen-optimized experience across various devices, enhancing user satisfaction.",
        image: require('@assets/our_services/web development/Progressive.jpg'),
        isAnimation: false,
        highlights: ["Functional Design", "Cross-device", "Screen Optimization", "User Satisfaction"]
    },
    {
        title: "Product Design & Branding",
        description: "Our UI/UX design services focus on highlighting your brand's message through a compelling visual language, ensuring your business stands out from the competition with unique design attributes.",
        image: require('@assets/our_services/web development/SaaS.jpeg'),
        isAnimation: false,
        highlights: ["Brand Message", "Visual Language", "Competitive Edge", "Unique Attributes"]
    }
];

// UI/UX Streamlining Development Overrides
const ui_ux_streamlining_overrides = [
    {
        "id": "research-and-idea-generation",
        "title": "Research and Idea Generation",
        "description": "Achieving excellence involves a continuous process of research and innovation, enabling us to intelligently address our clients' demands. By staying ahead of industry trends and understanding market dynamics, we generate insightful ideas that drive effective solutions tailored to your unique needs."
    },
    {
        "id": "innovation-and-design",
        "title": "Innovation and Design",
        "description": "We help our clients uncover the most effective design and innovation strategies, enhancing their market presence. By focusing on user experience and aesthetic appeal, we create solutions that resonate with audiences and strengthen our clients' competitive edge."
    },
    {
        "id": "full-cycle-product-development",
        "title": "Full-Cycle Product Development",
        "description": "We deliver a holistic 360-degree suite of services that encompasses all phases of product development. With a focus on agile methodologies, we ensure enhanced progress and continuous improvement, leading to the successful creation of products that fulfill your vision and meet market demands."
    }
];


// UI/UX Business Process Overrides
const ui_ux_business_overrides = [
    {
        "id": "research_plan",
        "title": "Research & Plan",
        "description": "We conduct solution-specific research to gather insights that inform our strategies. By drafting a tailored plan based on thorough analysis, we ensure that our approach aligns with your unique needs and objectives, setting the foundation for effective implementation and successful outcomes."
    },
    {
        "id": "code",
        "title": "Code",
        "description": "Our in-house team of experts leverages modern, scalable, and maintainable coding practices to build robust and adaptable solutions. By adhering to best practices, we ensure clean, efficient, and high-quality code that meets current needs and remains future-ready."
    }
];
export const ui_ux_business_process = mergeProcessWithOverrides(business_process, ui_ux_business_overrides);
export const ui_ux_streamlining_development = mergeProcessWithOverrides<typeof streamlining_development[number]>(
    streamlining_development,
    ui_ux_streamlining_overrides
);

export const ui_ux_services_second_section = [
    {
        title: 'Data-Driven and Innovatively Designed Solutions',
        subtitle: 'Research-Backed UI/UX Design Services',
        description:
            'Our solutions are a result of meticulous research and collaborative innovation. Ridipt’s UI/UX design services empower brands to convey their core message and excel in today’s competitive digital landscape.',
        image: require('@assets/our_services/web development/frontend.svg')
    },
    {
        title: 'Empowering Brands with Thoughtful Design',
        subtitle: 'Brand-Focused UI/UX Design',
        description:
            'Through extensive research and team collaboration, we craft UI/UX designs that amplify your brand\'s presence. Our services ensure unmatched accessibility and seamless navigation to create a global impact.',
        image: require('@assets/our_services/web development/custom-developement.svg')
    },
    {
        title: 'Crafting Accessible and Responsive User Experiences',
        subtitle: 'Accessible and Responsive UI/UX Solutions',
        description:
            'Ridipt’s UI/UX designs stand out by combining innovative creativity with deep insights. We help brands build strong perceptions worldwide with accessible, responsive, and strategically crafted digital experiences.',
        image: require('@assets/our_services/web development/backend.svg')
    }
];
