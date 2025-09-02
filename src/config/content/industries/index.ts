import { Card1, Card2 } from "@/components/industries/cards";

// Import all content files
import { custom_software_challenges, custom_software_content, custom_software_services, custom_software_services_stack } from "./custom-solution.content";
import { custom_software_faq } from "./custom-solution.faq";

import { retail_challenges, retail_content, retail_services, retail_services_stack } from "./e-commerce.content";
import { retail_faq } from "./e-commerce.faq";

import { education_challenges, education_content, education_services, education_services_stack } from "./education.content";
import { education_faq } from "./education.faq";

import { fintech_challenges, fintech_content, fintech_services, fintech_services_stack } from "./fintech.content";
import { fintech_faq } from "./fintech.faq";

import { healthcare_challenges, healthcare_content, healthcare_services, healthcare_services_stack } from "./healthcare/healthcare";
import { healthcare_faq } from "./healthcare/health.faq";

import { hr_challenges, hr_content, hr_services, hr_services_stack } from "./human-resource.content";
import { hr_faq } from "./human-resource.faq";

import { logistics_challenges, logistics_content, logistics_services, logistics_services_stack } from "./logistics.content";
import { logistics_faq } from "./logistics.faq";

import { restaurant_challenges, restaurant_content, restaurant_services, restaurant_services_stack } from "./restaurant.content";
import { restaurant_faq } from "./restaurant.faq";

import { social_media_challenges, social_media_content, social_media_services, social_media_services_stack } from "./social-media.content";
import { social_media_faq } from "./social-media.faq";

const industriesData = {
    'healthcare': {
        heroSection: {
            heading: 'Healthcare',
            subheading: 'Transforming Healthcare Through Technology',
            description: 'At Ridipt, we understand the unique challenges faced by the healthcare industry. Our innovative solutions leverage the latest technologies to enhance patient care, streamline operations, and improve overall healthcare delivery. With our expertise, we empower healthcare providers to focus on what they do best: delivering exceptional patient care.',
        },
        processSection: {
            heading: 'Key Healthcare Challenges',
            subheading: 'Critical Issues Impacting the Industry',
            description: 'Explore the major challenges faced by the healthcare sector and their impact on patient care, operations, and overall efficiency.',
            processCards: healthcare_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Healthcare Solutions',
            subheading: 'Innovative Technology for Better Healthcare',
            description: 'We provide healthcare technology solutions designed to improve patient care, streamline operations, and enhance collaboration across the healthcare ecosystem.',
            content: healthcare_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Our Healthcare Tech Stack',
            subheading: 'Powering Healthcare with Cutting-Edge Technologies',
            description: 'We build scalable and secure healthcare solutions using modern technologies that ensure seamless integration, high performance, and compliance with industry standards. Our expertise spans across EHR/EMR platforms, interoperability frameworks, cloud infrastructure, mobile health applications, and compliance-ready systems tailored for healthcare organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: healthcare_services,
        },
        ctaSection: {
            title: "Looking for Healthcare Tech Experts?",
            highlightText: "Ready to Transform Your Healthcare Organization?",
            subtitle: "We Build Healthcare Apps That Empower Organizations and Improve Patient Care",
            description: "Contact us today to discuss how our tailored healthcare solutions can help you meet your goals and improve patient care. Our dedicated team is here to assist you on your journey to success.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Our Mobile Development Tech-Stack",
            subheading: "Cutting-Edge Technologies for Superior Mobile Apps",
            description: "We leverage the most advanced mobile development technologies to create exceptional user experiences. Our tech stack includes native development with Swift and Kotlin, cross-platform frameworks like React Native and Flutter, robust backend solutions, and modern deployment tools. Every mobile application is built with scalability, security, and performance in mind.",
            techStacks: healthcare_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Healthcare Queries",
            description: "Find clear answers to the most common questions about our healthcare solutions, technology stack, and services. If you need more details, our team is here to help.",
            faqs: healthcare_faq
        }
    },

    'fintech': {
        heroSection: {
            heading: 'FinTech',
            subheading: 'Revolutionizing Financial Services with Technology',
            description: 'At Ridipt, we understand the ever-changing landscape of the financial sector. Our innovative FinTech solutions empower businesses to modernize operations, improve customer experiences, and achieve regulatory compliance. From startups to established financial institutions, we provide cutting-edge tools to drive digital transformation and create smarter financial ecosystems.',
        },
        processSection: {
            heading: 'Key Challenges in the FinTech Industry',
            subheading: 'Critical Issues Impacting Financial Services',
            description: 'Explore the major challenges faced by financial institutions and their impact on operations, customer experience, and regulatory compliance.',
            processCards: fintech_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our FinTech Solutions',
            subheading: 'Innovative Technology for Modern Finance',
            description: 'We provide comprehensive FinTech solutions designed to modernize financial services, enhance customer experiences, and ensure regulatory compliance across the financial ecosystem.',
            content: fintech_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for FinTech Solutions?',
            subheading: 'Domain Expertise and Proven Excellence',
            description: 'We combine deep understanding of the financial industry with cutting-edge technology solutions. Our expertise spans across digital banking, payment systems, blockchain applications, and compliance-ready systems tailored for financial organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: fintech_services,
        },
        ctaSection: {
            title: "Looking for FinTech Experts?",
            highlightText: "Ready to Transform Your Financial Business?",
            subtitle: "We Build FinTech Apps That Drive Growth and Enhance Customer Trust",
            description: "Contact us today to discuss how our FinTech solutions can help you overcome challenges, enhance customer experiences, and drive growth in the competitive financial sector.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for the FinTech Sector",
            subheading: "Comprehensive Financial Technology Solutions",
            description: "We leverage advanced financial technologies to create exceptional user experiences and robust financial services. Our tech stack includes secure payment gateways, blockchain platforms, AI-powered analytics, digital banking systems, and regulatory compliance frameworks. Every FinTech application is built with security, scalability, and compliance in mind.",
            techStacks: fintech_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common FinTech Queries",
            description: "Find clear answers to the most common questions about our FinTech solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: fintech_faq
        }
    },

    'ecommerce': {
        heroSection: {
            heading: 'Retail and E-Commerce',
            subheading: 'Redefining Retail and E-Commerce with Technology',
            description: 'At Ridipt, we understand the rapidly evolving retail and e-commerce landscape. Our innovative solutions are designed to help businesses streamline operations, enhance customer experiences, and maximize revenue. Whether you operate a physical store, an online platform, or a hybrid model, we empower you with the tools to stay ahead in a competitive market.',
        },
        processSection: {
            heading: 'Key Challenges in Retail and E-Commerce',
            subheading: 'Critical Issues Impacting Modern Retail',
            description: 'Explore the major challenges faced by retail and e-commerce businesses and their impact on operations, customer satisfaction, and profitability.',
            processCards: retail_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Retail and E-Commerce Solutions',
            subheading: 'Innovative Technology for Modern Commerce',
            description: 'We provide comprehensive retail and e-commerce solutions designed to streamline operations, enhance customer experiences, and drive sales growth across all channels.',
            content: retail_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Retail and E-Commerce Solutions?',
            subheading: 'Industry Expertise and Proven Excellence',
            description: 'We combine deep understanding of the retail industry with cutting-edge technology solutions. Our expertise spans across e-commerce platforms, POS systems, inventory management, omnichannel integration, and customer engagement tools tailored for retail organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: retail_services,
        },
        ctaSection: {
            title: "Looking for Expert",
            highlightText: "Ready to Revolutionize Your Retail or E-Commerce Business?",
            subtitle: "We Build Apps That Users Love and Businesses Thrive On",
            description: "Contact us today to discuss how our tailored solutions can help you optimize your operations, enhance customer experiences, and achieve your business goals.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for the Retail and E-Commerce Sector",
            subheading: "Comprehensive Retail Technology Solutions",
            description: "We leverage advanced retail technologies to create exceptional shopping experiences and robust e-commerce platforms. Our tech stack includes custom e-commerce development, POS systems, inventory management, omnichannel solutions, AI-powered personalization, and secure payment processing. Every retail application is built with scalability, security, and customer experience in mind.",
            techStacks: retail_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Retail & E-Commerce Queries",
            description: "Find clear answers to the most common questions about our retail and e-commerce solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: retail_faq
        }
    },

    'education': {
        heroSection: {
            heading: 'Education',
            subheading: 'Transforming Education Through Innovation',
            description: 'At Ridipt, we recognize the evolving challenges in the education sector. From modernizing learning experiences to streamlining administrative processes, our technology-driven solutions empower educational institutions to deliver better learning outcomes. Our expertise ensures a seamless integration of technology with your education goals.',
        },
        processSection: {
            heading: 'Key Challenges in Education',
            subheading: 'Critical Issues Impacting the Education Sector',
            description: 'Explore the major challenges faced by educational institutions and their impact on learning outcomes, administration, and overall educational excellence.',
            processCards: education_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Education Solutions',
            subheading: 'Innovative Technology for Better Learning',
            description: 'We provide comprehensive education technology solutions designed to enhance learning experiences, streamline administrative processes, and foster collaboration across the educational ecosystem.',
            content: education_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Education Solutions?',
            subheading: 'Domain Expertise and Proven Excellence',
            description: 'We combine deep understanding of the education industry with cutting-edge technology solutions. Our expertise spans across learning management systems, student information systems, mobile learning applications, and compliance-ready systems tailored for educational organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: education_services,
        },
        ctaSection: {
            title: "Looking for Expert",
            highlightText: "Ready to Revolutionize Your Educational Institution?",
            subtitle: "We Build Apps That Users Love and Businesses Thrive On",
            description: "Contact us today to discuss how our tailored solutions can help you optimize your operations, enhance learning experiences, and achieve your educational goals.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for the Education Sector",
            subheading: "Comprehensive Educational Technology Solutions",
            description: "We leverage advanced educational technologies to create exceptional learning experiences. Our tech stack includes modern learning management systems, student information systems, mobile learning platforms, AI-powered tutoring solutions, and robust security frameworks. Every educational application is built with scalability, accessibility, and compliance in mind.",
            techStacks: education_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Education Technology Queries",
            description: "Find clear answers to the most common questions about our education solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: education_faq
        }
    },

    'restaurant-food': {
        heroSection: {
            heading: 'Restaurant & Food Industry',
            subheading: 'Revolutionizing Food & Delivery Services Through Technology',
            description: 'At Ridipt, we empower restaurants, food delivery platforms, grocery services, and dairy businesses with cutting-edge technology to streamline operations and meet modern consumer demands. Whether you\'re a restaurant owner, an online grocery provider, or a milk delivery startup, our custom solutions enhance efficiency, boost customer satisfaction, and help you stay ahead in a competitive market.',
        },
        processSection: {
            heading: 'Key Challenges in the Food & Delivery Industry',
            subheading: 'Critical Issues Impacting Food Services',
            description: 'Explore the major challenges faced by restaurants, food delivery, and grocery businesses and their impact on operations, customer satisfaction, and profitability.',
            processCards: restaurant_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Food & Delivery Industry Solutions',
            subheading: 'Innovative Technology for Modern Food Services',
            description: 'We provide comprehensive food industry solutions designed to streamline restaurant operations, optimize delivery logistics, and enhance customer experiences across the entire food ecosystem.',
            content: restaurant_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Food Industry Solutions?',
            subheading: 'End-to-End Expertise and Proven Excellence',
            description: 'We combine deep understanding of the food and delivery industry with cutting-edge technology solutions. Our expertise spans across restaurant management, food delivery platforms like Zomato/Swiggy, grocery delivery solutions like Blinkit/Instamart, and subscription-based services tailored for food businesses.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: restaurant_services,
        },
        ctaSection: {
            title: "Looking for Food Tech Experts?",
            highlightText: "Ready to Transform Your Food Business?",
            subtitle: "We Build Food Industry Apps That Delight Customers and Boost Growth",
            description: "Let Ridipt help you build the next big thing in the food industry. Contact us today to explore how we can deliver tailored solutions for your restaurant, grocery, or delivery service.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for Food Industry Solutions",
            subheading: "Comprehensive Food & Delivery Technology Solutions",
            description: "We leverage advanced food industry technologies to create exceptional dining and delivery experiences. Our tech stack includes restaurant management systems, food delivery platforms like Zomato/Swiggy, grocery delivery solutions like Blinkit/Instamart, subscription-based dairy delivery, POS systems, and real-time tracking solutions. Every food application is built with scalability, reliability, and customer satisfaction in mind.",
            techStacks: restaurant_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Food Industry Queries",
            description: "Find clear answers to the most common questions about our restaurant, food delivery, and grocery solutions. If you need more details, our team is here to help.",
            faqs: restaurant_faq
        }
    },

    'human-resource': {
        heroSection: {
            heading: 'Human Resource Management',
            subheading: 'Revolutionizing Human Resource Management Through Technology',
            description: 'At Ridipt, we empower businesses with innovative human resource solutions that simplify workforce management, improve employee engagement, and streamline HR operations. With our expertise, we help organizations focus on building stronger teams and achieving their goals through advanced HR technology solutions.',
        },
        processSection: {
            heading: 'Key Challenges in Human Resource Management',
            subheading: 'Critical Issues Impacting Modern HR Operations',
            description: 'Explore the major challenges faced by HR departments and their impact on workforce management, employee satisfaction, and organizational productivity.',
            processCards: hr_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Human Resource Solutions',
            subheading: 'Innovative Technology for Modern Workforce Management',
            description: 'We provide comprehensive HR solutions designed to streamline recruitment, enhance employee engagement, optimize performance management, and ensure regulatory compliance across the entire employee lifecycle.',
            content: hr_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for HR Solutions?',
            subheading: 'Industry Expertise and Proven Excellence',
            description: 'We combine deep understanding of human resource management with cutting-edge technology solutions. Our expertise spans across HRMS systems, recruitment platforms, performance management, payroll automation, and compliance-ready systems tailored for modern organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: hr_services,
        },
        ctaSection: {
            title: "Looking for HR Tech Experts?",
            highlightText: "Ready to Optimize Your HR Operations?",
            subtitle: "We Build HR Solutions That Empower Businesses and Teams",
            description: "Contact us today to discuss your HR challenges and discover how our tailored solutions can help you build a thriving workforce.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for HR Solutions",
            subheading: "Comprehensive Human Resource Technology Solutions",
            description: "We leverage advanced HR technologies to create exceptional employee experiences and streamlined operations. Our tech stack includes HRMS systems, AI-powered recruitment tools, performance management platforms, payroll automation, learning management systems, and compliance frameworks. Every HR application is built with scalability, security, and user experience in mind.",
            techStacks: hr_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common HR Technology Queries",
            description: "Find clear answers to the most common questions about our HR solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: hr_faq
        }
    },

    'social-media': {
        heroSection: {
            heading: 'Social Media Solutions',
            subheading: 'Empowering Social Connections Through Technology',
            description: 'At Ridipt, we design and develop cutting-edge solutions for social media platforms that inspire meaningful interactions, boost engagement, and create unforgettable user experiences. Our expertise enables businesses and brands to connect with their audiences on a deeper level through innovative social technologies.',
        },
        processSection: {
            heading: 'Key Challenges in Social Media',
            subheading: 'Critical Issues Impacting Social Platforms',
            description: 'Explore the major challenges faced by social media platforms and their impact on user engagement, platform security, and business sustainability.',
            processCards: social_media_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Social Media Solutions',
            subheading: 'Innovative Technology for Connected Communities',
            description: 'We provide comprehensive social media solutions designed to create engaging platforms, facilitate meaningful connections, and drive user growth across diverse communities and audiences.',
            content: social_media_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Social Media Solutions?',
            subheading: 'Comprehensive Expertise and Proven Excellence',
            description: 'We combine deep understanding of social media dynamics with cutting-edge technology solutions. Our expertise spans across custom social networking platforms, content creation tools, AI-powered analytics, monetization solutions, and security frameworks tailored for social media environments.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: social_media_services,
        },
        ctaSection: {
            title: "Ready to Revolutionize Social Media?",
            highlightText: "Ready to Revolutionize Social Media?",
            subtitle: "We Build Social Media Platforms That Connect and Engage",
            description: "Contact us today to discuss your vision, and let us help you create a transformative social media platform tailored to your goals.",
            buttonText: "Contact Now",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for Social Media Solutions",
            subheading: "Comprehensive Social Media Technology Solutions",
            description: "We leverage advanced social media technologies to create exceptional user experiences and engaging platforms. Our tech stack includes custom social networking development, AI-powered analytics, real-time communication, content moderation systems, monetization tools, and security frameworks. Every social media application is built with scalability, engagement, and user safety in mind.",
            techStacks: social_media_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Social Media Development Queries",
            description: "Find clear answers to the most common questions about our social media solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: social_media_faq
        }
    },

    'custom-solution': {
        heroSection: {
            heading: 'Custom Software Solutions',
            subheading: 'Transform Your Vision Into Reality with Custom Software Solutions',
            description: 'At Ridipt, we specialize in crafting tailored software solutions designed to meet the unique needs of your business. Our expertise lies in understanding your challenges, leveraging the latest technologies, and delivering solutions that drive efficiency, innovation, and growth.',
        },
        processSection: {
            heading: 'Key Challenges Addressed by Custom Software Solutions',
            subheading: 'Critical Business Issues Requiring Tailored Solutions',
            description: 'Explore the major challenges that off-the-shelf software cannot address and discover how our custom solutions overcome these business hurdles.',
            processCards: custom_software_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Custom Software Solutions',
            subheading: 'Innovative Technology for Unique Business Needs',
            description: 'We provide comprehensive custom software development services designed to address unique business challenges, streamline operations, and drive digital transformation across various industries.',
            content: custom_software_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Custom Software Development?',
            subheading: 'Client-Centric Approach and Proven Excellence',
            description: 'We combine deep understanding of business processes with cutting-edge technology expertise. Our approach spans across tailored solutions, agile development methodologies, seamless integration capabilities, and ongoing support tailored for modern organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: custom_software_services,
        },
        ctaSection: {
            title: "Looking for Expert",
            highlightText: "Ready to Build Your Custom Software Solution?",
            subtitle: "We Build Software That Drives Business Growth and Innovation",
            description: "Contact us today to discuss your unique requirements and let us help you bring your vision to life with innovative and scalable solutions.",
            buttonText: "Get a Quote",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for Custom Software Solutions",
            subheading: "Comprehensive Custom Development Technology Solutions",
            description: "We leverage advanced software development technologies to create exceptional custom applications and systems. Our tech stack includes modern web and mobile frameworks, enterprise solutions, AI/ML integration, cloud computing, and blockchain technologies. Every custom software solution is built with scalability, security, and performance in mind.",
            techStacks: custom_software_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Custom Software Development Queries",
            description: "Find clear answers to the most common questions about our custom software development process, technologies, and services. If you need more details, our team is here to help.",
            faqs: custom_software_faq
        }
    },

    'logistics-supply-chain': {
        heroSection: {
            heading: 'Logistics & Supply Chain',
            subheading: 'Driving Efficiency and Innovation in Logistics & Supply Chain',
            description: 'At Ridipt, we deliver transformative logistics and supply chain solutions to enhance operational efficiency, optimize resource utilization, and improve visibility. With advanced technologies, we enable businesses to streamline processes, reduce costs, and achieve seamless coordination across the supply chain.',
        },
        processSection: {
            heading: 'Key Challenges in Logistics & Supply Chain',
            subheading: 'Critical Issues Impacting Supply Chain Operations',
            description: 'Explore the major challenges faced by logistics and supply chain businesses and their impact on operational efficiency, cost optimization, and customer satisfaction.',
            processCards: logistics_challenges,
            customCard: Card1
        },
        solutionsSection: {
            heading: 'Our Logistics & Supply Chain Solutions',
            subheading: 'Innovative Technology for Optimized Operations',
            description: 'We provide comprehensive logistics and supply chain solutions designed to streamline operations, enhance visibility, and drive efficiency across the entire supply chain ecosystem.',
            content: logistics_content,
            subSection: false,
            className: '',
            customCard: Card2
        },
        serviceDetailSection: {
            heading: 'Why Choose Ridipt for Logistics & Supply Chain Solutions?',
            subheading: 'Domain Expertise and Proven Excellence',
            description: 'We combine deep understanding of logistics and supply chain operations with cutting-edge technology solutions. Our expertise spans across transportation management, warehouse optimization, supply chain visibility, and sustainability solutions tailored for modern supply chain organizations.',
            cardStyling: 'border-none text-justify',
            className: 'mt-0',
            industry: logistics_services,
        },
        ctaSection: {
            title: "Looking for Expert",
            highlightText: "Ready to Revolutionize Your Supply Chain?",
            subtitle: "We Build Logistics Solutions That Drive Efficiency and Innovation",
            description: "Contact us today to explore how our solutions can optimize your logistics and supply chain operations. Let Ridipt help you achieve new levels of efficiency and innovation.",
            buttonText: "Get a Quote",
            animationData: require('@assets/animations/Developer.json')
        },
        techStackSection: {
            heading: "Key Offerings for the Logistics & Supply Chain Sector",
            subheading: "Comprehensive Supply Chain Technology Solutions",
            description: "We leverage advanced logistics technologies to create exceptional operational efficiency and supply chain optimization. Our tech stack includes transportation management systems, warehouse management solutions, supply chain visibility platforms, IoT integration, and sustainability tools. Every logistics application is built with scalability, real-time tracking, and operational excellence in mind.",
            techStacks: logistics_services_stack
        },
        faqSection: {
            heading: "Frequently Asked Questions",
            subheading: "Answers to Common Logistics & Supply Chain Queries",
            description: "Find clear answers to the most common questions about our logistics and supply chain solutions, technology implementation, and services. If you need more details, our team is here to help.",
            faqs: logistics_faq
        }
    }
};

export default industriesData;
