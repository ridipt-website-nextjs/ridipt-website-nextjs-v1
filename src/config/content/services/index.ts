import { ServiceCard } from '@/components/services';
import { services_tech_stack } from '@/config/constant';

// Import all content files
import { 
  web_dev_services, 
  web_dev_services_second_section, 
  streamlining_development, 
  business_process 
} from '@/config/constant';

import { 
  mobile_app_services, 
  mobile_app_services_second_section, 
  mobile_business_process, 
  mobile_streamlining_development 
} from '@/config/content/mobile-development';

import {
  emerging_tech_services,
  emerging_tech_services_second_section,
  emerging_tech_business_process,
  emerging_tech_streamlining_development
} from '@/config/content/emerging-technology';

import { 
  ui_ux_business_process, 
  ui_ux_services, 
  ui_ux_services_second_section, 
  ui_ux_streamlining_development 
} from '@/config/content/ui-ux';

// Import FAQs
import { mobile_dev_faq, emerging_tech_faq, uiux_faq } from '@/config/FAQs';

const servicesData = {
  'web-development': {
    heroSection: {
      heading: 'Web Development',
      subheading: 'Your Premier Website Development Partner',
      description: 'At Ridipt Technologies, we are a leading website development company with a team of skilled web developers dedicated to delivering outstanding solutions. We specialize in creating e-commerce platforms, web applications, and social networks that provide a seamless user experience—all delivered on time. Our commitment to best-in-class functionality and our ability to provide tailored solutions make us the ideal partner for your web development needs.',
      image: require('@assets/service/wev-dev new.webp'),
      imageAlt: 'Web Development'
    },
    servicesSection: {
      heading: 'Empowering Your Digital Presence',
      subheading: 'Our Website Development Services and Solutions',
      description: 'At Ridipt Technologies, we benefit our clients by delivering reliable and cost-effective solutions that utilize modern methodologies combined with the latest technologies. Our goal is to meet your development needs by thoroughly analyzing and understanding your essential requirements on a deeper level. Achieve exponential growth with our innovative development potential.',
      content: web_dev_services,
      customCard: ServiceCard,
      className: '!container !max-w-auto !mb-0'
    },
    serviceDetailSection: {
      heading: 'Building the Future of Web Experiences',
      subheading: 'Next-gen solutions that are scalable, elegant, and built to grow with you.',
      description: 'From SaaS platforms to e-commerce portals, our tailored solutions empower businesses with scalable, secure, and user-centric technologies designed for long-term growth.',
      industry: web_dev_services_second_section
    },
    ctaSection: {
      heading: "We Will Build the Best for You",
      subheading: "Transforming Ideas into Powerful Digital Solutions Empowering Your Business with Cutting-Edge Web Development Innovative Solutions, Exceptional Results",
      buttonText: "Contact us",
      className: '!bg-blue-50 dark:!bg-card'
    },
    techStackSection: {
      heading: "Our Website Development Tech-Stack",
      subheading: "Empowering Businesses with Next-Gen Technologies Scalable, Resilient, and Future-Ready Solutions",
      description: "We empower enterprises and businesses by delivering next-generation solutions built on scalable and unshakable technologies. By staying at the forefront of innovation, our team leverages cutting-edge servers, databases, frontend frameworks, and UI components to craft dynamic and robust digital experiences. Our approach ensures that every website and application is designed for seamless functionality and exceptional user engagement, enabling your business to thrive in the digital age.",
      techStackData: services_tech_stack['Web Development']
    },
    promotionalSection: {
      title: "Looking for the Best",
      highlightText: "Website Development Company?",
      subtitle: "We Deliver Scalable Solutions with Cutting-Edge Technologies",
      description: "With years of expertise, we specialize in crafting scalable and future-ready web solutions by seamlessly integrating the latest trends in technology. Partner with us to transform your ideas into impactful digital realities.",
      buttonText: "Get Free Estimation",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Concept to Growth",
      description: "We provide end-to-end solutions that simplify the entire product lifecycle. By combining research, innovation, design, and agile development, we ensure seamless progress from idea to launch — and continuous growth beyond.",
      processes: streamlining_development
    },
    businessProcessSection: {
      heading: "Our Business Process",
      subheading: "Streamlined & Efficient",
      description: "We follow a structured approach to ensure quality, consistency, and success at every stage of our business process.",
      processes: business_process
    },
    faqSection: {
      content: null // No specific FAQ mentioned for web development
    }
  },

  'mobile-development': {
    heroSection: {
      heading: 'Mobile Application Development',
      subheading: 'Empowering Your Business with Cutting-Edge Mobile Apps',
      description: 'In today\'s digital-first world, a powerful mobile application isn\'t just a luxury—it\'s a necessity. At Ridipt Technologies, we specialize in building innovative, high-performance mobile apps that drive growth, boost engagement, and optimize efficiency. Whether you\'re a startup looking to make an impact or an enterprise aiming to scale, we are your trusted partner in mobile app development.',
      image: require('@assets/service/Mobile dev.jpg'),
      imageAlt: 'Mobile App Development'
    },
    servicesSection: {
      heading: 'Transform Your Ideas into Powerful Mobile Solutions',
      subheading: 'Our Mobile App Development Services',
      description: 'At Ridipt Technologies, we empower businesses by delivering cutting-edge mobile applications that combine innovation with functionality. From native iOS and Android apps to cross-platform solutions, we create mobile experiences that engage users and drive business growth. Our expert team leverages the latest technologies and frameworks to build scalable, secure, and user-friendly mobile applications.',
      content: mobile_app_services,
      customCard: ServiceCard,
      className: '!container !max-w-auto !mb-0'
    },
    serviceDetailSection: {
      heading: 'Crafting Next-Generation Mobile Experiences',
      subheading: 'Native, Cross-Platform, and Progressive Mobile Solutions',
      description: 'From native iOS and Android applications to cross-platform solutions using React Native and Flutter, we deliver mobile apps that perform flawlessly across all devices. Our solutions include e-commerce apps, social platforms, business applications, and enterprise mobility solutions designed for optimal performance and user engagement.',
      industry: mobile_app_services_second_section
    },
    ctaSection: {
      heading: "We Build Powerful Mobile Experiences",
      subheading: "From native iOS & Android apps to cross-platform solutions, we craft seamless mobile experiences that engage users and drive business growth.",
      buttonText: "Start Your Mobile Project",
      className: '!bg-blue-50 dark:!bg-card'
    },
    techStackSection: {
      heading: "Our Mobile Development Tech-Stack",
      subheading: "Cutting-Edge Technologies for Superior Mobile Apps",
      description: "We leverage the most advanced mobile development technologies to create exceptional user experiences. Our tech stack includes native development with Swift and Kotlin, cross-platform frameworks like React Native and Flutter, robust backend solutions, and modern deployment tools. Every mobile application is built with scalability, security, and performance in mind.",
      techStackData: services_tech_stack['Mobile Development']
    },
    promotionalSection: {
      title: "Looking for Expert",
      highlightText: "Mobile App Developers?",
      subtitle: "We Build Apps That Users Love and Businesses Thrive On",
      description: "With years of expertise in mobile app development, we transform your vision into powerful mobile solutions. From concept to App Store deployment, we handle every aspect of mobile app development with precision and innovation. Partner with us to create mobile experiences that set you apart from the competition.",
      buttonText: "Start Your Mobile Project",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Our Mobile App Development Journey",
      subheading: "From Ideation to App Store Success",
      description: "We follow a comprehensive mobile development process that ensures your app not only meets your business objectives but also delivers an exceptional user experience. Our agile approach combines strategic planning, cutting-edge design, robust development, and thorough testing to create mobile apps that succeed in the competitive app marketplace.",
      processes: mobile_streamlining_development
    },
    businessProcessSection: {
      heading: "Our Mobile Development Process",
      subheading: "Agile & Results-Driven Methodology",
      description: "We follow a proven methodology that ensures successful mobile app delivery. From initial consultation and market research to final deployment and post-launch support, every step is carefully planned and executed to maximize your app's potential for success.",
      processes: mobile_business_process
    },
    faqSection: {
      content: mobile_dev_faq
    }
  },

  'emerging-technology': {
    heroSection: {
      heading: 'Emerging Technologies Services & Solutions',
      subheading: 'Emerging Technologies Services & Solutions',
      description: 'At Ridipt, we harness cutting-edge technologies and exceptional resources to deliver transformative emerging technology services and solutions. Our comprehensive approach ensures that every client demand is meticulously addressed. We empower businesses to embrace sustained innovation, enabling them to stay ahead in a rapidly evolving technological landscape. With Ridipt, you can hire top-tier experts in Cloud, DevOps, Blockchain, and Data Science, who integrate futuristic, tech-enabled solutions designed to unlock your full potential and drive measurable growth.',
      image: require('@assets/service/Emerging Technologies Services -11.webp'),
      imageAlt: 'Emerging Technologies Services'
    },
    servicesSection: {
      heading: 'Our Emerging Technology Solutions',
      subheading: 'Harness Modern Technologies like DevOps, AI/ML, Data Science, Blockchain',
      description: 'At Ridipt, we revolutionize businesses by integrating advanced technologies like DevOps, AI/ML, Data Science, and Blockchain. Our solutions are tailored to enhance your output, reduce operational complexity, and deliver exceptional ROI. Empower your business with our disruptive innovations and enabling services, ensuring efficiency, scalability, and long-term success.',
      content: emerging_tech_services,
      customCard: ServiceCard,
      className: '!container !max-w-auto !mb-0'
    },
    serviceDetailSection: {
      heading: 'Key Emerging Technology Solutions',
      subheading: 'DevOps, AI/ML, Blockchain, Data Science',
      description: 'Our emerging technology services empower businesses to stay ahead in a rapidly evolving digital landscape. From AI-driven automation and blockchain-powered security to scalable DevOps and data science insights, we deliver innovative solutions that drive efficiency, innovation, and growth.',
      industry: emerging_tech_services_second_section
    },
    ctaSection: {
      heading: "Integrate Next-Gen Technologies into Your Business",
      subheading: "Achieve scalability, performance, and innovation with AI/ML, Blockchain, Data Science, and DevOps.",
      buttonText: "Contact Us",
      className: '!bg-blue-50 dark:!bg-card'
    },
    techStackSection: {
      heading: "Our Comprehensive Tech-Stack",
      subheading: "Empowering Businesses with Next-Gen Technologies",
      description: 'Ridipt leverages cutting-edge technologies to empower businesses with innovative solutions that are secure, scalable, and built for the future. By seamlessly integrating DevOps, AI/ML, Blockchain, and Data Science, we enable your business to thrive in an ever-evolving digital landscape.\n\nAt Ridipt, we synergize these next-gen technologies to build resilient, efficient, and transformative solutions that meet the unique demands of your business. Whether it\'s scaling operations, enhancing security, or unlocking data-driven opportunities, our tech stack ensures your business is equipped for sustained growth and success.',
      techStackData: services_tech_stack['Emerging Technologies']
    },
    promotionalSection: {
      title: "Hire The Best Tech Consultant at Ridipt?",
      highlightText: "Innovation-Driven, Agile, and Scalable Solutions",
      subtitle: "Achieve unparalleled business growth with our technology expertise",
      description: 'Transform your operations with agile processes, cutting-edge technologies, and strategic insights tailored to your needs. Leverage emerging technologies to unlock new opportunities, streamline processes, and drive sustainable growth.',
      buttonText: "Get Free Estimation",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "Research, Innovation, and Agile Execution",
      description: 'Our process includes Research and Idea Generation for innovative solutions, Innovation and Design to enhance market presence, Full-Cycle Product Development with agile execution, and Product Growth and Support for continuous optimization and success.',
      processes: emerging_tech_streamlining_development
    },
    businessProcessSection: {
      heading: "Our Business Process",
      subheading: "Structured, Streamlined, and Efficient",
      description: 'We follow a step-by-step approach: Research & Plan for deep insights and strategy, Code with scalable and maintainable practices, Build customized solutions, Monitor performance continuously, Test through rigorous QA, Release with seamless launches, Deploy with smooth installation and optimization, and Operate with ongoing support and maintenance.',
      processes: emerging_tech_business_process
    },
    faqSection: {
      content: emerging_tech_faq
    }
  },

  'ui-ux-design': {
    heroSection: {
      heading: 'User-Centric UI/UX Design Services',
      subheading: 'Intuitive Design, Exceptional Experience',
      description: 'Crafting seamless and intuitive designs tailored to meet your user expectations. At Ridipt, we focus on creating visually appealing and functional designs that amplify user engagement and ensure memorable interactions. Elevate your product\'s digital presence with our expert UI/UX design solutions that blend innovation with usability to deliver stunning designs.',
      image: require('@assets/service/technology/ui-ux-mobile.jpg'),
      imageAlt: 'UI/UX Design Services'
    },
    servicesSection: {
      heading: 'UI/UX Excellence for Accelerated Growth',
      subheading: 'Our UI UX Design Services & Solutions',
      description: 'Ridipt integrates design-first principles with a creative yet practical approach to elevate your brand\'s digital presence. Our seasoned experts transform user experiences into strategic assets, ensuring designs that accelerate your business growth. We craft user-centric designs that blend aesthetics and functionality seamlessly.',
      content: ui_ux_services,
      customCard: ServiceCard,
      className: '!container !max-w-auto !mb-0'
    },
    serviceDetailSection: {
      heading: 'Data-Driven and Innovatively Designed Solutions',
      subheading: 'Empowering Brands with Thoughtful Design',
      description: 'Our solutions are a result of meticulous research and collaborative innovation. Through extensive research and team collaboration, we craft UI/UX designs that amplify your brand\'s presence. Our services ensure unmatched accessibility and seamless navigation to create a global impact with accessible, responsive, and strategically crafted digital experiences.',
      industry: ui_ux_services_second_section
    },
    ctaSection: {
      heading: "Designing Intuitive & Impactful Experiences",
      subheading: "Through research-driven strategies and innovative design, we craft UI/UX solutions that enhance usability, elevate your brand, and deliver memorable digital experiences.",
      buttonText: "Explore UI/UX Services",
      className: '!bg-blue-50 dark:!bg-card'
    },
    techStackSection: {
      heading: "Our UI UX Design Tech-Stack",
      subheading: "Elevate Your Brand with Cutting-Edge Design Solutions",
      description: "At Ridipt, we harness top-tier technologies and a skilled team of designers to craft solutions that meet the challenges of today's digital landscape. We integrate a robust technological stack into our UI/UX design process, enabling our clients to effectively showcase their brand to a global audience with innovative, contemporary designs.",
      techStackData: services_tech_stack['UI/UX Design']
    },
    promotionalSection: {
      title: "Looking for the Best",
      highlightText: "UI UX Design Company?",
      subtitle: "We Deliver Scalable Solutions with Cutting-Edge Technologies",
      description: "We have extensive experience in delivering scalable solutions that leverage the latest technologies. Our expertise lies in providing scalable solutions that integrate cutting-edge technologies and harness current technological trends to drive success.",
      buttonText: "Get Free Estimation",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Our UI/UX Journey",
      subheading: "Transform Your Business with Expert UI/UX Design Services",
      description: "At Ridipt, we combine innovative design principles, user-centered strategies, and the latest technologies to create visually stunning and highly functional interfaces. Our skilled designers leverage contemporary design trends and research-driven methodologies to create intuitive interfaces that elevate your brand's presence.",
      processes: ui_ux_streamlining_development
    },
    businessProcessSection: {
      heading: "Our Business Process",
      subheading: "Streamlined & Efficient",
      description: "We follow a structured approach to ensure quality, consistency, and success at every stage of our business process.",
      processes: ui_ux_business_process
    },
    faqSection: {
      content: uiux_faq
    }
  }
};

export default servicesData;
