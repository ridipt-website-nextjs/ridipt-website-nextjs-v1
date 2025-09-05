import { business_process, streamlining_development } from "../constant";
import { mergeProcessWithOverrides } from "./common-functions";

// Emerging Technology Services Data
export const emerging_tech_services = [
    {
        title: "DevOps Solutions",
        description: "Hiring our DevOps experts ensures a seamless and flexible process tailored to your needs. We embrace an agile approach to craft high-quality solutions that proficiently integrate software development and IT operations, enabling faster delivery cycles and enhanced collaboration.",
        image: require('@assets/our_services/emerging technology/Devops-1.webp'),
        isAnimation: false,
        highlights: ["Software Development Integration", "IT Operations", "Faster Delivery Cycles", "Enhanced Collaboration"]
    },
    {
        title: "AI/ML Solutions",
        description: "Leverage the power of Artificial Intelligence and Machine Learning to transform your business into a faster, smarter, and more efficient enterprise. We utilize these revolutionary technologies to deliver data-driven insights and automate processes.",
        image: require('@assets/our_services/emerging technology/Ai-Ml.png'),
        isAnimation: false,
        highlights: ["Data-driven Insights", "Process Automation", "Predictive Analytics", "Smart Decision Making"]
    },
    {
        title: "Blockchain Solutions", 
        description: "Security, scalability, and transparency are the cornerstones of modern organizational success. We specialize in delivering cutting-edge blockchain solutions including smart contracts, decentralized systems, and secure transaction platforms.",
        image: require('@assets/our_services/emerging technology/Blockchaing solution.png'),
        isAnimation: false,
        highlights: ["Smart Contracts", "Decentralized Systems", "Security & Transparency", "Transaction Platforms"]
    },
    {
        title: "Data Science Solutions",
        description: "Turn data into actionable insights with advanced data science solutions. Our expertise lies in leveraging big data, predictive analytics, and machine learning to drive smarter decision-making and fuel business growth.",
        image: require('@assets/our_services/emerging technology/data-science.jpg'),
        isAnimation: false,
        highlights: ["Big Data Analytics", "Predictive Analytics", "Business Intelligence", "Data-driven Decisions"]
    },
    {
        title: "Cloud Computing Solutions",
        description: "Transform your infrastructure with scalable cloud computing solutions. We provide comprehensive cloud migration, architecture design, and optimization services to ensure your business operates efficiently in the digital age.",
        image: require('@assets/our_services/emerging technology/cloud-computing.jpg'),
        isAnimation: false,
        highlights: ["Cloud Migration", "Scalable Infrastructure", "Architecture Design", "Performance Optimization"]
    },
    {
        title: "IoT Development Services",
        description: "Connect your devices and systems with our comprehensive IoT development services. We create intelligent ecosystems that enable real-time monitoring, automation, and data collection for enhanced operational efficiency.",
        image: require('@assets/our_services/emerging technology/iot.jpg'),
        isAnimation: false,
        highlights: ["Device Connectivity", "Real-time Monitoring", "Smart Automation", "Data Collection"]
    }
];

// Emerging Technology Second Section Data
export const emerging_tech_services_second_section = [
    {
        title: 'DevOps Excellence for Seamless Operations',
        subtitle: 'Agile DevOps Solutions',
        description:
            'Streamline your processes with our dedicated DevOps experts who bridge the gap between software development and IT operations. We adopt an agile methodology to create tailored solutions that enhance efficiency, speed, and quality throughout the development lifecycle.',
        image: require('@assets/our_services/emerging technology/devOps.svg')
    },
    {
        title: 'AI/ML: Transforming Business Intelligence',
        subtitle: 'Intelligent Automation & Analytics',
        description:
            'Embrace the future with our cutting-edge AI/ML services designed to revolutionize the way you operate. From predictive analytics to intelligent automation, we provide tailored solutions that make your business faster, smarter, and more scalable.',
        image: require('@assets/our_services/ai.svg')
    },
    {
        title: 'Blockchain: Security & Transparency Redefined',
        subtitle: 'Decentralized Solutions',
        description:
            'As your trusted partner in blockchain technology, we offer innovative solutions like decentralized platforms, smart contracts, and secure transaction systems. We cater to organizations seeking to redefine their operations with greater trust and efficiency.',
        image: require('@assets/our_services/emerging technology/blockchain.svg')
    },
    {
        title: 'Data Science: Insights that Drive Growth',
        subtitle: 'Advanced Analytics Solutions',
        description:
            'At Ridipt, we harness the potential of data science to help businesses gain a competitive edge. Using state-of-the-art tools and techniques, we transform raw data into meaningful insights that drive strategic decisions and unlock unprecedented growth opportunities.',
        image: require('@assets/our_services/emerging technology/data-science.svg')
    },
    {
        title: 'Cloud Computing: Scalable & Future-Ready',
        subtitle: 'Next-Gen Cloud Solutions',
        description:
            'Achieve seamless scalability and consistent performance by integrating cutting-edge cloud technologies. Our expertise ensures your business stays ahead of the curve with innovative, secure, and future-ready cloud solutions tailored to meet your unique needs.',
        image: require('@assets/our_services/emerging technology/cloud-computing.svg')
    },
    {
        title: 'IoT: Connected Ecosystems for Smart Operations',
        subtitle: 'Internet of Things Solutions',
        description:
            'Transform your operations with our comprehensive IoT solutions that connect devices, systems, and processes. We enable businesses to achieve real-time monitoring, predictive maintenance, and intelligent automation for enhanced operational efficiency.',
        image: require('@assets/our_services/emerging technology/iot.svg')
    }
];

// Emerging Technology Streamlining Development Overrides
const emerging_tech_streamlining_overrides = [
    {
        "id": "research-and-idea-generation",
        "title": "Research and Idea Generation",
        "description": "Achieving excellence involves a continuous process of research and innovation, enabling us to intelligently address our clients' demands. By staying ahead of industry trends and understanding market dynamics in emerging technologies, we generate insightful ideas that drive effective solutions tailored to your unique technological needs."
    },
    {
        "id": "innovation-and-design",
        "title": "Innovation and Design",
        "description": "We help our clients uncover the most effective design and innovation strategies in emerging technologies, enhancing their market presence. By focusing on cutting-edge solutions and strategic implementation, we create technology-driven solutions that resonate with audiences and strengthen our clients' competitive edge."
    },
    {
        "id": "full-cycle-product-development",
        "title": "Full-Cycle Technology Development",
        "description": "We offer a comprehensive 360-degree service that encompasses every phase of emerging technology development. By integrating agile methodologies with advanced technologies like AI/ML, Blockchain, and DevOps, we ensure enhanced progress and adaptability from concept to deployment."
    }
];

// Emerging Technology Business Process Overrides
const emerging_tech_business_overrides = [
    {
        "id": "research_plan",
        "title": "Research & Plan",
        "description": "We conduct solution-specific research in emerging technologies to gather insights that inform our strategies. By analyzing technological trends and market demands, we ensure that our approach aligns with your unique needs and objectives in the rapidly evolving tech landscape."
    },
    {
        "id": "code",
        "title": "Code",
        "description": "Our in-house team of experts leverages modern and scalable coding practices across emerging technologies. We utilize cutting-edge frameworks, cloud-native architectures, and advanced development tools to build robust and adaptable solutions that meet both current and future technological needs."
    },
    {
        "id": "build",
        "title": "Build",
        "description": "We specialize in building next-generation solutions from the ground up, leveraging expertise in DevOps, AI/ML, Blockchain, and Data Science. Our dedicated team collaborates closely with you to create tailored emerging technology solutions that provide a solid foundation for digital transformation."
    },
    {
        "id": "deploy",
        "title": "Deploy",
        "description": "Seamlessly deploying, configuring, and continuously optimizing your emerging technology solutions to adapt to modern advancements. Our deployment process ensures smooth transition with cloud-native infrastructure, containerization, and automated deployment pipelines for scalability and reliability."
    }
];

// Export merged processes
export const emerging_tech_business_process = mergeProcessWithOverrides(business_process, emerging_tech_business_overrides);
export const emerging_tech_streamlining_development = mergeProcessWithOverrides<typeof streamlining_development[number]>(
    streamlining_development,
    emerging_tech_streamlining_overrides
);
