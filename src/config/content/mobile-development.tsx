import { business_process, streamlining_development } from "../constant";
import { mergeProcessWithOverrides } from "./common-functions";

export const mobile_app_services_second_section = [
    {
        title: 'Delivering Premium iOS Experiences with Native Performance',
        subtitle: 'iOS App Development Services',
        description:
            'Create stunning iOS applications that leverage the full potential of Apple\'s ecosystem. Our native iOS development using Swift and SwiftUI ensures optimal performance, seamless user experience, and App Store compliance. We build iOS apps that not only meet Apple\'s stringent guidelines but also deliver exceptional user engagement and business growth.',
        image: require('@assets/our_services/web development/progressive.svg')
    },
    {
        title: 'Scalable Android Solutions for Global Market Reach',
        subtitle: 'Android App Development Services',
        description:
            'Harness the power of the world\'s most popular mobile platform with our expert Android development services. Using Kotlin and modern Android frameworks, we create robust, secure, and scalable applications that perform flawlessly across diverse Android devices. Our solutions help you tap into the vast Android user base and maximize your market reach.',
        image: require('@assets/our_services/web development/progressive.svg')
    },
    {
        title: 'Cost-Effective Multi-Platform Solutions with Single Codebase',
        subtitle: 'Cross-Platform Mobile App Development',
        description:
            'Maximize your investment with our cross-platform development expertise using React Native and Flutter. We deliver high-performance applications that work seamlessly on both iOS and Android platforms, reducing development time and costs while maintaining native-like performance. Perfect for startups and enterprises looking for efficient mobile solutions.',
        image: require('@assets/industry/ecommerce.svg')
    },
    {
        title: 'Intuitive Designs That Drive User Engagement and Retention',
        subtitle: 'Mobile UI/UX Design Services',
        description:
            'Create mobile experiences that users love with our expert UI/UX design services. We craft intuitive, visually appealing, and user-centric mobile interfaces that not only look great but also drive engagement, reduce bounce rates, and increase user retention. Our designs follow platform-specific guidelines while maintaining your brand identity.',
        image: require('@assets/our_services/web development/frontend.svg')
    },
    {
        title: 'Tailored Mobile Solutions for Your Unique Business Requirements',
        subtitle: 'Custom Mobile App Development Services',
        description:
            'Transform your unique business ideas into powerful mobile applications with our custom development services. We analyze your specific requirements, target audience, and business goals to create bespoke mobile solutions that give you a competitive edge. From concept to deployment, we ensure your app stands out in the crowded app marketplace.',
        image: require('@assets/our_services/web development/custom-developement.svg')
    },
    {
        title: 'Enterprise-Grade Mobile Solutions for Large-Scale Operations',
        subtitle: 'Enterprise Mobile App Development',
        description:
            'Empower your enterprise with robust, secure, and scalable mobile applications designed for large-scale operations. Our enterprise mobile solutions include advanced security features, seamless integration capabilities, and comprehensive management tools. We help organizations digitize their processes, improve productivity, and enhance employee engagement through powerful mobile platforms.',
        image: require('@assets/our_services/web development/backend.svg')
    }
];

export const mobile_app_services = [
    {
        title: "E-commerce Mobile Apps and Marketplace Development",
        description:
            "Our e-commerce mobile solutions help you build powerful shopping apps with seamless payment integration, inventory management, and user-friendly interfaces that drive sales and enhance customer loyalty across mobile platforms.",
        image: require('@assets/our_services/mobile development/uiux_files/flat-design-ui-ux-background_23-2149093995.jpg'),
        isAnimation: false,
        highlights: ["Mobile Commerce", "Payment Integration", "User-friendly Interface", "Customer Loyalty"]
    },
    {
        title: "Native Mobile App Development Services",
        description:
            "Leverage platform-specific capabilities with our native iOS and Android development expertise, delivering high-performance mobile applications with optimal user experience and seamless device integration.",
        image: require('@assets/our_services/mobile development/hybrid-apps.jpg'),
        isAnimation: false,
        highlights: ["Native iOS & Android", "High Performance", "Device Integration", "Optimal UX"]
    },
    {
        title: "Custom Mobile App Development Services",
        description:
            "Transform your unique business requirements into powerful mobile applications. We analyze your specific needs and create tailored mobile solutions that give you a competitive advantage in the app marketplace.",
        image: require('@assets/our_services/mobile development/native.jpg'),
        isAnimation: false,
        highlights: ["Custom Mobile Apps", "Business Requirements", "Tailored Solutions", "Competitive Advantage"]
    },
    {
        title: "Cross-Platform Mobile Development Services",
        description:
            "Maximize your reach with our React Native and Flutter development expertise. Build once, deploy everywhere - cost-effective mobile solutions that work seamlessly across iOS and Android platforms.",
        image: require('@assets/our_services/mobile development/testing_files/young-man-is-developing-mobile-application-data-collection-flat-2d-character-concept_130740-1744.jpg'),
        isAnimation: false,
        highlights: ["React Native & Flutter", "Cross-platform", "Cost-effective", "iOS & Android"]
    },
    {
        title: "Enterprise Mobile App Development Services",
        description:
            "Empower your workforce with robust enterprise mobile applications featuring advanced security, offline capabilities, and seamless integration with existing business systems for enhanced productivity.",
        image: require('@assets/our_services/mobile development/Enterprise.jpg'),
        isAnimation: false,
        highlights: ["Enterprise Apps", "Advanced Security", "Offline Capabilities", "Business Integration"]
    },
    {
        title: "Mobile App UI/UX Design Services",
        description:
            "Create engaging mobile experiences with our expert UI/UX design services. We craft intuitive, visually stunning interfaces that drive user engagement, retention, and positive app store ratings.",
        image: require('@assets/our_services/mobile development/testing_files/young-people-stand-near-mobile-phone-screen-testing-program-mobile-application-flat-character-concept-web-design_130740-689.jpg'),
        isAnimation: false,
        highlights: ["Mobile UI/UX", "Intuitive Design", "User Engagement", "App Store Ratings"]
    }
];

const mobile_overrides = [
    {
        "id": "research_plan",
        "title": "Research & Plan",
        "description": "We conduct comprehensive market research and user behavior analysis to inform our mobile strategy. By studying app store trends, competitor analysis, and platform-specific guidelines, we create a tailored development plan that ensures your mobile app's success in the competitive marketplace.",
        "image": require('@assets/menifesto/inovation.svg'),
        "colors": {
            "primary": "blue",
            "bg": "bg-blue-50",
            "border": "border-blue-500",
            "text": "text-blue-900",
            "subtitle": "text-blue-700",
            "accent": "bg-blue-100",
            "hover": "hover:bg-blue-100",
            "shadow": "hover:shadow-blue-200/50",
            "icon": "bg-blue-500"
        }
    },
    {
        "id": "code",
        "title": "Code",
        "description": "Our expert mobile developers utilize platform-specific languages like Swift for iOS and Kotlin for Android, or cross-platform frameworks like React Native and Flutter. We follow mobile-first coding practices to ensure optimal performance and native user experience.",
        "image": require('@assets/technology_icons/html5.svg'),
        "colors": {
            "primary": "yellow",
            "bg": "bg-yellow-50",
            "border": "border-yellow-500",
            "text": "text-yellow-900",
            "subtitle": "text-yellow-700",
            "accent": "bg-yellow-100",
            "hover": "hover:bg-yellow-100",
            "shadow": "hover:shadow-yellow-200/50",
            "icon": "bg-yellow-500"
        }
    }
]

// Mobile business process
export const mobile_business_process = mergeProcessWithOverrides(business_process, mobile_overrides);


const mobile_streamlining_overrides = [
  {
    "id": "research-and-idea-generation",
    "title": "Mobile Research and Idea Generation",
    "description": "Our mobile development process begins with thorough research on mobile user behavior, app store trends, platform guidelines, and competitor analysis. We generate innovative mobile app ideas tailored specifically for the mobile ecosystem, ensuring your app meets user expectations and stands out in crowded app stores."
  },
  {
    "id": "innovation-and-design", 
    "title": "Mobile Innovation and UI/UX Design",
    "description": "We focus on mobile-first design principles, creating innovative and intuitive user interfaces optimized for touch interactions. Our designs ensure seamless user experiences across different screen sizes, following platform-specific design guidelines while maintaining your brand identity."
  },
  {
    "id": "full-cycle-product-development",
    "title": "Full-Cycle Mobile App Development",
    "description": "From concept to app store deployment, we provide comprehensive mobile development services. Using agile methodologies, we build native iOS and Android apps or cross-platform solutions, ensuring optimal performance, security, and scalability throughout the development lifecycle."
  }
];

// Mobile streamlining development process
export const mobile_streamlining_development = mergeProcessWithOverrides<typeof streamlining_development[number]>(
  streamlining_development, 
  mobile_streamlining_overrides
);