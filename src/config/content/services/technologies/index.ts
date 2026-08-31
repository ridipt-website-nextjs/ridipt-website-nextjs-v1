// Import all content files
import { ai_ml_services, ai_ml_content, ai_ml_business_process, ai_ml_streamlining_development } from '@/config/content/emerging technology/ai_ml.content';
import { ai_ml_faq } from '@/config/content/emerging technology/ai_ml.faq';

import { blockchain_services, blockchain_content, blockchain_business_process, blockchain_streamlining_development } from '@/config/content/emerging technology/blockchain.content';
import { blockchain_faq } from '@/config/content/emerging technology/blockchain.faq';

import { data_science_services, data_science_content, data_science_business_process, data_science_streamlining_development } from '@/config/content/emerging technology/data_science.content';
import { data_science_faq } from '@/config/content/emerging technology/data-science.faq';

import { devops_services, devops_content, devops_business_process, devops_streamlining_development } from '@/config/content/emerging technology/devOps.content';
import { devops_faq } from '@/config/content/emerging technology/devOps.faq';

import { android_app_services, android_app_content, android_app_business_process, android_app_streamlining_development } from '@/config/content/app_development/android.content';
import { android_app_faq } from '@/config/FAQs';

import { flutter_app_services, flutter_app_content, flutter_app_business_process, flutter_app_streamlining_development } from '@/config/content/app_development/flutter.content';
import { flutter_app_faq } from '@/config/FAQs';

import { ios_app_services, ios_app_content, ios_app_business_process, ios_app_streamlining_development } from '@/config/content/app_development/ios.content';
import { ios_app_faq } from '@/config/FAQs';

import { react_native_app_services, react_native_app_content, react_native_app_business_process, react_native_app_streamlining_development } from '@/config/content/app_development/react-native.content';
import { react_native_app_faq } from '@/config/FAQs';

import { static_website_services, static_website_stack_content, static_website_business_process, static_website_streamlining_development } from '@/config/content/html-css-js';
import { static_website_faq } from '@/config/FAQs';

import { mean_mern_services, mean_mern_stack_content, mern_business_process, mern_streamlining_development } from '@/config/content/mean-mern-stack';
import { mern_mean_faq } from '@/config/FAQs';

import { nextjs_services, nextjs_stack_content, nextjs_business_process, nextjs_streamlining_development } from '@/config/content/nextjs.content';
import { nextjs_faq } from '@/config/FAQs';

import { wordpress_services, wordpress_content, wordpress_business_process, wordpress_streamlining_development } from '@/config/content/wordpress.content';
import { wordpress_faq } from '@/config/FAQs';

import { ai_chatbots_content, ai_chatbots_services, ai_chatbots_business_process, ai_chatbots_streamlining_development } from '@/config/content/ai-services/ai-chatbots.content';
import { ai_chatbots_faq } from '@/config/content/ai-services/ai-chatbots.faq';

import { llm_rag_content, llm_rag_services, llm_rag_business_process, llm_rag_streamlining_development } from '@/config/content/ai-services/llm-rag.content';
import { llm_rag_faq } from '@/config/content/ai-services/llm-rag.faq';

import { ai_automation_content, ai_automation_services, ai_automation_business_process, ai_automation_streamlining_development } from '@/config/content/ai-services/ai-automation.content';
import { ai_automation_faq } from '@/config/content/ai-services/ai-automation.faq';

import { predictive_analytics_content, predictive_analytics_services, predictive_analytics_business_process, predictive_analytics_streamlining_development } from '@/config/content/ai-services/predictive-analytics.content';
import { predictive_analytics_faq } from '@/config/content/ai-services/predictive-analytics.faq';

import { ai_strategy_content, ai_strategy_services, ai_strategy_business_process, ai_strategy_streamlining_development } from '@/config/content/ai-services/ai-strategy.content';
import { ai_strategy_faq } from '@/config/content/ai-services/ai-strategy.faq';

const technologyData = {
  'ai-ml-genai': {
    heroSection: {
      heading: 'AI/ML Solutions & Generative AI Services',
      subheading: 'Empower Your Business with Intelligent Innovation',
      description: 'Revolutionize your operations with cutting-edge AI/ML and Generative AI services. Leverage our expertise to harness the power of data and automation, driving smarter decisions and sustainable growth. Our customized AI/ML solutions empower businesses across industries to optimize workflows, improve efficiency, and unlock new opportunities with innovative, data-driven strategies.',
      image: require('@assets/service/technology/AI-ml.png'),
      imageAlt: 'AI/ML Solutions & Generative AI Services',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our AI/ML & Generative AI Solutions',
      subheading: 'Driving Success with Advanced AI/ML Practices',
      description: 'Our AI/ML consulting services are crafted to align with your business goals. From data analysis to predictive modeling, we deliver intelligent solutions that streamline operations and enhance decision-making. Explore the potential of Generative AI to create unique, high-value outputs that empower your enterprise to stay competitive and relevant in the evolving tech landscape.',
      content: ai_ml_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Our AI/ML & Generative AI Tech Stack',
      subheading: 'Innovating with AI/ML to Build Scalable Solutions',
      description: 'We craft intelligent, future-ready AI/ML solutions that align with your enterprise needs, ensuring smooth integration and optimized performance. Leverage our expertise in AI/ML tools, including TensorFlow, PyTorch, and OpenAI APIs, to create solutions that transform your business operations.',
      cardStyling: '',
      industry: ai_ml_services
    },
    ctaSection: {
      heading: "Looking for Intelligent AI/ML Solutions?",
      subheading: "Transform your business processes with our data-driven AI/ML services. We design innovative solutions tailored to your specific needs.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "AI/ML Professionals?",
      subtitle: "Building Intelligent and Scalable AI Solutions",
      description: "Hire our skilled AI/ML professionals, equipped to deliver exceptional solutions using advanced tools and cutting-edge methodologies to drive your business forward.",
      buttonText: "Hire AI/ML Experts",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our AI/ML development process covers the complete journey — from data strategy and model design to deployment and continuous learning. With agile methodologies, we ensure intelligent, scalable, and high-performance AI/ML solutions tailored to your business needs.",
      processes: ai_ml_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "AI/ML Development Lifecycle",
      subheading: "Agile, Intelligent & Future-Ready",
      description: "Our AI/ML development process ensures accuracy, scalability, and long-term success. From data planning and model development to deployment and ongoing optimization, we follow a streamlined approach to build AI/ML solutions that adapt and evolve with your business.",
      processes: ai_ml_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "AI/ML & Generative AI FAQs",
        subheading: "Your Complete Guide to AI/ML Solutions",
        description: "Get answers to common questions about AI/ML development, including machine learning models, generative AI, computer vision, natural language processing, costs, and ongoing support services."
      },
      content: ai_ml_faq
    }
  },

  'blockchain': {
    heroSection: {
      heading: 'Blockchain Development Services',
      subheading: 'Empower Your Business with Blockchain Innovation',
      description: 'Transform your operations with state-of-the-art blockchain solutions. Leverage our expertise to unlock the potential of decentralization, enhancing security and transparency in your business processes. Our customized blockchain services empower businesses across industries to streamline operations, improve efficiency, and drive new opportunities through innovative, decentralized technologies.',
      image: require('@assets/service/technology/Blockchain.png'),
      imageAlt: 'Blockchain Development Services',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
      
    },
    servicesSection: {
      heading: 'Our Blockchain Solutions',
      subheading: 'Driving Success with Advanced Blockchain Practices',
      description: 'Our blockchain consulting services are tailored to align with your business goals. From smart contracts to decentralized applications, we deliver intelligent solutions that enhance operations and secure transactions. Explore the potential of blockchain to create secure, transparent systems that empower your enterprise to stay competitive and relevant in the evolving tech landscape.',
      content: blockchain_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Our Blockchain Tech Stack',
      subheading: 'Innovating with Blockchain to Build Scalable Solutions',
      description: 'We deliver robust, future-ready blockchain solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern blockchain technologies, including Ethereum, Hyperledger, and smart contracts, to transform your IT infrastructure.',
      cardStyling: '',
      industry: blockchain_services
    },
    ctaSection: {
      heading: "Looking for Exceptional Blockchain Solutions?",
      subheading: "Transform your business operations with our expert blockchain team, delivering streamlined workflows and innovative technologies tailored to your goals.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "Blockchain Professionals?",
      subtitle: "Building Secure and Decentralized Solutions",
      description: "Hire our skilled blockchain developers, equipped to deliver exceptional solutions using advanced tools and cutting-edge methodologies to drive your business forward.",
      buttonText: "Hire Blockchain Experts",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our blockchain development process covers the complete journey — from architecture design and smart contract development to deployment and continuous support. With agile methodologies, we ensure secure, scalable, and high-performance blockchain solutions tailored to your business needs.",
      processes: blockchain_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Blockchain Development Lifecycle",
      subheading: "Agile, Secure & Future-Ready",
      description: "Our blockchain development process ensures security, scalability, and long-term success. From planning and smart contract development to deployment and ongoing support, we follow a streamlined approach to build blockchain solutions that adapt and evolve with your business.",
      processes: blockchain_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Blockchain Development FAQs",
        subheading: "Your Complete Guide to Blockchain Solutions",
        description: "Get answers to common questions about blockchain development, including smart contracts, dApp development, security auditing, cryptocurrency solutions, costs, and ongoing support services."
      },
      content: blockchain_faq
    }
  },

  'data-science': {
    heroSection: {
      heading: 'Data Science Solutions & Services',
      subheading: 'Empower Your Business with Data-Driven Insights',
      description: 'Harness the power of data with our advanced data science services. Leverage robust analytics and machine learning techniques to gain valuable insights that drive business growth and innovation. We deliver tailored data science solutions globally, enabling organizations to make informed decisions and enhance their operational efficiency through data-driven strategies.',
      image: require('@assets/service/technology/Data-sci 1.png'),
      imageAlt: 'Data Science Solutions & Services',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our Data Science Solutions and Services',
      subheading: 'Proficient Practices for Driving Business Success',
      description: 'Our data science consulting services are designed to implement effective practices that cater to the unique needs of your business. From predictive analytics to advanced machine learning, we deliver cutting-edge solutions that help you harness data, optimize performance, and uncover new opportunities.',
      content: data_science_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Our Data Science Tech Stack',
      subheading: 'Innovating with Data to Build Scalable Solutions',
      description: 'We deliver robust, future-ready data science solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern data science tools and methodologies to transform your analytics and achieve seamless insights and scalability.',
      cardStyling: '',
      industry: data_science_services
    },
    ctaSection: {
      heading: "Looking for Exceptional Data Science Solutions?",
      subheading: "Revolutionize your business operations with our expert data science team, delivering insightful analytics and innovation tailored to your goals.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "Data Science Professionals?",
      subtitle: "Building Intelligent Data-Driven Solutions",
      description: "Hire our skilled data science specialists who excel in delivering exceptional solutions by utilizing advanced tools, empirical methodologies, and cutting-edge technologies to optimize your business processes.",
      buttonText: "Hire Data Science Professionals",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our data science development process covers the complete journey — from data strategy and analytics design to model deployment and continuous insights generation. With agile methodologies, we ensure intelligent, scalable, and high-performance data science solutions tailored to your business needs.",
      processes: data_science_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Data Science Development Lifecycle",
      subheading: "Agile, Intelligent & Future-Ready",
      description: "Our data science development process ensures accuracy, scalability, and long-term success. From data planning and model development to deployment and ongoing optimization, we follow a streamlined approach to build data science solutions that adapt and evolve with your business.",
      processes: data_science_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Data Science Solutions FAQs",
        subheading: "Your Complete Guide to Data Science",
        description: "Get answers to common questions about data science, including analytics methodologies, machine learning models, big data processing, predictive analytics, costs, and ongoing support services."
      },
      content: data_science_faq
    }
  },

  'devops': {
    heroSection: {
      heading: 'DevOps Consulting Services',
      subheading: 'Empower Your Business with DevOps Excellence',
      description: 'Leverage state-of-the-art technology and robust DevOps services to help your scaling organization integrate security-rich, high-performing, and resilient functions. We deliver tailored DevOps solutions globally, enabling enterprises to achieve the business agility and mobility they\'ve always envisioned.',
      image: require('@assets/service/technology/Devops.png'),
      imageAlt: 'DevOps Consulting Services',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
            className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our DevOps Solutions and Services',
      subheading: 'Proficient Practices for Driving Business Success',
      description: 'Our DevOps consulting services are designed to implement effective practices that cater to the unique needs of your business. From automating management processes to enhancing the end-user experience, we deliver cutting-edge solutions that help you streamline operations, reduce downtime, and optimize overall performance.',
      content: devops_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Our DevOps Tech-Stack',
      subheading: 'Innovating with Agility to Build Scalable Solutions',
      description: 'We deliver robust, future-ready DevOps solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern DevOps tools and methodologies to transform your IT infrastructure and achieve seamless automation and scalability.',
      cardStyling: '',
      industry: devops_services
    },
    ctaSection: {
      heading: "Looking for Exceptional DevOps Solutions?",
      subheading: "Revolutionize your business operations with our expert DevOps team, delivering streamlined workflows and innovation tailored to your goals.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "DevOps Professionals?",
      subtitle: "Building Scalable and Resilient Infrastructure",
      description: "Hire our skilled DevOps specialists who excel in delivering exceptional solutions by utilizing advanced tools, empirical methodologies, and cutting-edge technologies to optimize your business processes.",
      buttonText: "Hire DevOps Professional",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our DevOps transformation process covers the complete journey — from infrastructure assessment and automation design to full-scale implementation and continuous support. With agile methodologies, we ensure efficient, secure, and scalable DevOps solutions tailored to your business needs.",
      processes: devops_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "DevOps Implementation Lifecycle",
      subheading: "Agile, Scalable & Future-Ready",
      description: "Our DevOps implementation process ensures efficiency, security, and long-term success. From planning and infrastructure-as-code to deployment automation and ongoing support, we follow a streamlined approach to build DevOps practices that adapt and grow with your business.",
      processes: devops_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "DevOps Consulting FAQs",
        subheading: "Your Complete Guide to DevOps Transformation",
        description: "Get answers to common questions about DevOps consulting, including CI/CD implementation, infrastructure automation, security practices, costs, and ongoing support services."
      },
      content: devops_faq
    }
  },

  'android': {
    heroSection: {
      heading: 'Android App Development',
      subheading: 'Your Premier Custom Android App Development Partner',
      description: 'At Ridipt, we are a leading custom Android app development company dedicated to creating high-quality, impactful native Android applications. Our cost-effective solutions not only enhance your brand value but also ensure a strong digital presence. We focus on client-oriented strategies that significantly boost consumer engagement and satisfaction.',
      image: require('@assets/service/Android App Developers-1.png'),
      imageAlt: 'Android App Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our Android App Development Services',
      subheading: 'Cutting-Edge Solutions for Today\'s Market',
      description: 'We provide end-to-end Android app development solutions including expert consultation, UI/UX design, comprehensive testing, Firebase integration, and custom development services — designed to help your business create innovative mobile applications that drive growth and engagement.',
      content: android_app_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Explore Our Modern Android App Development Services Features',
      subheading: 'Ignite Your Business with Innovative Solutions',
      description: 'Disrupt the lucrative market with your groundbreaking ideas while harnessing our Android app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.',
      cardStyling: '',
      industry: android_app_services
    },
    ctaSection: {
      heading: "Lead with Innovation",
      subheading: "Choose our skilled Android developers to bring your ideas to life. With cutting-edge technology and a passion for creativity, we craft innovative solutions that keep you ahead of the competition.",
      buttonText: "Hire our Android Developers",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "Android App Developers?",
      subtitle: "Building High-Performance Native Android Applications",
      description: "Hire our skilled Android app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies.",
      buttonText: "Hire Android App Developer",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our Android app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, secure, and high-performance mobile applications tailored to your business needs.",
      processes: android_app_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Android App Development Lifecycle",
      subheading: "Agile, Scalable & Future-Ready",
      description: "Our Android app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build mobile applications that adapt and grow with your business.",
      processes: android_app_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Android App Development FAQs",
        subheading: "Your Complete Guide to Android Development",
        description: "Get answers to common questions about Android app development, including technologies, costs, security, app store submission, and maintenance services."
      },
      content: android_app_faq
    }
  },

  'flutter': {
    heroSection: {
      heading: 'Flutter App Development',
      subheading: 'Leading Flutter App Development Company',
      description: 'Ridipt specializes in building robust and scalable Flutter applications tailored to your business needs. Whether enhancing operational efficiency or improving digital mobility, our expert developers ensure cost-effective, high-performance solutions. Create fast, native-like Android and iOS apps that redefine your position in the mobile app market.',
      image: require('@assets/service/technology/Flutter-1.png'),
      imageAlt: 'Flutter App Development',
      // className: '!mt-0 relative !w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our Flutter App Development Services',
      subheading: 'Cutting-Edge Solutions for Today\'s Market',
      description: 'We provide end-to-end Flutter app development solutions including expert consulting, cross-platform development, app migration, API integration, native-level performance, and custom design services — designed to help your business create innovative cross-platform applications that reach broader audiences.',
      content: flutter_app_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Explore Our Modern Flutter App Development Services Features',
      subheading: 'Ignite Your Business with Scalable Solutions',
      description: 'Revolutionize the mobile app market with your visionary ideas, powered by our Flutter app development expertise. Our skilled developers craft dynamic and scalable applications tailored to propel your business to new heights.',
      cardStyling: '',
      industry: flutter_app_services
    },
    ctaSection: {
      heading: "Scalable Apps with Flutter Expertise",
      subheading: "Our top Flutter experts are ready to deliver scalable, robust, and high-performing apps tailored to your business needs.",
      buttonText: "Hire our Proficient Flutter Developers",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking for Expert",
      highlightText: "Flutter App Developers?",
      subtitle: "Building High-Performance Cross-Platform Applications",
      description: "Engage with our skilled Flutter app developers who are committed to delivering top-tier solutions through innovative methodologies and advanced technologies.",
      buttonText: "Hire Flutter App Developer",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our Flutter app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, scalable, and high-performance cross-platform applications tailored to your business needs.",
      processes: flutter_app_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Flutter App Development Lifecycle",
      subheading: "Agile, Scalable & Cross-Platform Ready",
      description: "Our Flutter app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build cross-platform applications that adapt and grow with your business.",
      processes: flutter_app_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Flutter App Development FAQs",
        subheading: "Your Complete Guide to Flutter Development",
        description: "Get answers to common questions about Flutter app development, including cross-platform capabilities, Dart language, performance, costs, and maintenance services."
      },
      content: flutter_app_faq
    }
  },

  'ios': {
    heroSection: {
      heading: 'iOS App Development',
      subheading: 'Leading iOS App Development Company',
      description: 'As a prominent iOS app development company in India, we specialize in delivering tailored native iOS app development services for a diverse range of clients, from innovative startups to large enterprises. Hire our experienced iOS developers, who possess extensive knowledge across various industry niches, to create high-quality iOS apps for iPhone and iPod that perfectly align with your development requirements.',
      image: require('@assets/service/technology/Ios.png'),
      imageAlt: 'iOS App Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our iOS App Development Services',
      subheading: 'Cutting-Edge Solutions for Today\'s Market',
      description: 'We provide end-to-end iOS app development solutions including expert consultation, multi-platform development, UI/UX design, app integration, comprehensive testing, and custom development services — designed to help your business create premium iOS applications that excel in Apple\'s ecosystem.',
      content: ios_app_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Explore Our Modern iOS App Development Services Features',
      subheading: 'Ignite Your Business with Innovative Solutions',
      description: 'Disrupt the lucrative market with your groundbreaking ideas while harnessing our iOS app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.',
      cardStyling: '',
      industry: ios_app_services
    },
    ctaSection: {
      heading: "Want Stellar Business Solutions?",
      subheading: "Transform your ideas into impactful solutions with our expert team, delivering innovation and excellence tailored to your business needs.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "iOS App Developers?",
      subtitle: "Building Premium Native iOS Applications",
      description: "Hire our skilled iOS app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies.",
      buttonText: "Hire iOS App Developer",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our iOS app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, secure, and high-performance iOS applications tailored to your business needs.",
      processes: ios_app_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "iOS App Development Lifecycle",
      subheading: "Premium, Secure & Apple-Compliant",
      description: "Our iOS app development process ensures efficiency, security, and long-term success in Apple's ecosystem. From planning and coding to App Store deployment and ongoing support, we follow a streamlined approach to build iOS applications that adapt and grow with your business.",
      processes: ios_app_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "iOS App Development FAQs",
        subheading: "Your Complete Guide to iOS Development",
        description: "Get answers to common questions about iOS app development, including Swift programming, App Store approval, security, costs, and maintenance services."
      },
      content: ios_app_faq
    }
  },

  'react-native': {
    heroSection: {
      heading: 'React Native App Development',
      subheading: 'Leading React Native App Development Company',
      description: 'As a prominent React Native app development company in India, we specialize in delivering tailored cross-platform app development services for a diverse range of clients, from innovative startups to large enterprises. Hire our experienced React Native developers, who possess extensive knowledge across various industry niches, to create high-quality apps that perfectly align with your development requirements.',
      image: require('@assets/service/technology/React-Neww.png'),
      imageAlt: 'React Native App Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our React Native App Development Services',
      subheading: 'Cutting-Edge Solutions for Today\'s Market',
      description: 'We provide end-to-end React Native app development solutions including expert consultation, multi-platform development, UI/UX design, app integration, comprehensive testing, and custom development services — designed to help your business create innovative cross-platform applications that reach broader audiences efficiently.',
      content: react_native_app_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Explore Our Modern React Native App Development Services Features',
      subheading: 'Ignite Your Business with Innovative Solutions',
      description: 'Disrupt the lucrative market with your groundbreaking ideas while harnessing our React Native app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.',
      cardStyling: '',
      industry: react_native_app_services
    },
    ctaSection: {
      heading: "Want Stellar Business Solutions?",
      subheading: "Transform your ideas into impactful solutions with our expert team, delivering innovation and excellence tailored to your business needs.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "React Native App Developers?",
      subtitle: "Building High-Performance Cross-Platform Applications",
      description: "Hire our skilled React Native app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies.",
      buttonText: "Hire React Native App Developer",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our React Native app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, scalable, and high-performance cross-platform applications tailored to your business needs.",
      processes: react_native_app_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "React Native App Development Lifecycle",
      subheading: "Agile, Scalable & Cross-Platform Ready",
      description: "Our React Native app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build cross-platform applications that adapt and grow with your business.",
      processes: react_native_app_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "React Native App Development FAQs",
        subheading: "Your Complete Guide to React Native Development",
        description: "Get answers to common questions about React Native app development, including cross-platform capabilities, JavaScript framework, performance, costs, and maintenance services."
      },
      content: react_native_app_faq
    }
  },

  'html-css-js': {
    heroSection: {
      heading: 'Static Website Development',
      subheading: 'Your Trusted Partner for Static Website Development',
      description: 'At Ridipt, we specialize in crafting elegant and high-performing static websites using HTML5, CSS3, and JavaScript. Our solutions are designed to provide a seamless user experience, ensuring that your online presence is not only visually appealing but also functionally robust. With a focus on responsiveness and speed, we empower businesses to effectively communicate their message to the world.',
      image: require('@assets/service/Htmlcssjs.png'),
      imageAlt: 'Static Website Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our Static Website Development Services',
      subheading: 'Transform Your Vision into Reality',
      description: 'We provide comprehensive static website solutions including custom design, responsive development, SEO optimization, performance enhancement, and ongoing support — designed to help your business establish a strong and effective online presence.',
      content: static_website_stack_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Benefits of Static Websites',
      subheading: 'Streamlined Performance for Enhanced User Experience',
      description: 'Static websites offer superior speed, security, and cost-effectiveness. From reduced server load to enhanced stability, our static website solutions provide the perfect foundation for your business success.',
      cardStyling: '',
      industry: static_website_services
    },
    ctaSection: {
      heading: "Unmatched Expertise in Static Website Solutions",
      subheading: "Partner with Ridipt to bring your static website vision to life. Our experienced team is dedicated to delivering high-quality, responsive websites tailored to your unique needs, ensuring a strong online presence.",
      buttonText: "Get Started Today",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Ready to Get Started?",
      highlightText: "Launch Your Static Website Today!",
      subtitle: "Get Your Static Website Built by Experts",
      description: "Our team is ready to assist you in creating a stunning static website tailored to your business needs. Let's work together to make your vision a reality!",
      buttonText: "Contact Us Now",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our static website development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure fast, secure, and user-friendly websites tailored to your business needs.",
      processes: static_website_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Static Website Development Lifecycle",
      subheading: "Efficient, Secure & Cost-Effective",
      description: "Our static website development process ensures efficiency, security, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build websites that deliver exceptional performance.",
      processes: static_website_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Static Website Development FAQs",
        subheading: "Your Complete Guide to Static Websites",
        description: "Get answers to common questions about static website development, including benefits, timelines, hosting, and maintenance."
      },
      content: static_website_faq
    }
  },

  'mean-mern-stack': {
    heroSection: {
      heading: 'MEAN/MERN Stack',
      subheading: 'Your Reliable MEAN/MERN Stack Development Partner',
      description: 'At Ridipt, we specialize in delivering powerful web applications built using the MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks. With expertise in crafting scalable, secure, and high-performance solutions, we help businesses achieve their digital transformation goals. Our development process focuses on innovation, user-centric designs, and seamless functionality to ensure applications that exceed expectations.',
      image: require('@assets/service/mean-mern.png'),
      imageAlt: 'Web Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our Services',
      subheading: 'Innovative MEAN & MERN Stack Solutions for Modern Businesses',
      description: 'We provide end-to-end MEAN & MERN stack solutions including development, integration, consulting, CMS, migration, testing, API, and porting services — designed to help your business grow with scalable and future-ready applications.',
      content: mean_mern_stack_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Powering Innovation with MEAN & MERN',
      subheading: 'Scalable, secure, and modern solutions built with the latest web technologies.',
      description: 'From dynamic web apps to enterprise-grade platforms, our MEAN and MERN services deliver robust, high-performing, and future-ready solutions tailored to your business needs.',
      cardStyling: '',
      industry: mean_mern_services
    },
    ctaSection: {
      heading: "Lead with Excellence",
      subheading: "Choose our skilled MEAN and MERN developers to turn your vision into reality. Leveraging the latest technologies and best practices, we deliver innovative solutions that keep your business at the forefront of the industry.",
      buttonText: "Hire our MEAN/MERN Developers Button",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "MEAN/MERN Developers?",
      subtitle: "Building Robust Applications with MEAN & MERN Expertise",
      description: "Hire our skilled MEAN/MERN developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies.",
      buttonText: "Hire MEAN/MERN Developers",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining MEAN/MERN Development",
      subheading: "From Research to Scalable Growth",
      description: "Our MEAN/MERN process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure scalable, secure, and future-ready applications tailored to your business needs.",
      processes: mern_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "MERN Development Lifecycle",
      subheading: "Agile, Scalable & Future-Ready",
      description: "Our MERN development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build applications that adapt and grow with your business.",
      processes: mern_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "MERN Stack FAQs",
        subheading: "Your Complete Guide to MERN Development",
        description: "Get answers to common questions about MERN stack development, including MongoDB, Express.js, React, and Node.js technologies."
      },
      content: mern_mean_faq
    }
  },

  'nextjs': {
    heroSection: {
      heading: 'Next.js Development',
      subheading: 'Your Trusted Next.js Development Partner',
      description: 'At Ridipt, we specialize in delivering cutting-edge web applications powered by Next.js. With expertise in building high-performance, SEO-optimized, and scalable solutions, we empower businesses to stand out in the competitive digital landscape. Our development process is rooted in innovation, seamless user experiences, and robust functionality, ensuring we exceed your expectations.',
      image: require('@assets/service/NextJs.png'),
      imageAlt: 'Next.js Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Innovative Next.js Solutions for Modern Businesses',
      subheading: 'Streamlined Development for a Competitive Edge',
      description: 'We provide end-to-end Next.js solutions including development, integration, consulting, CMS, migration, testing, API, and e-commerce services — designed to help your business grow with scalable and future-ready applications.',
      content: nextjs_stack_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why Choose Ridipt for Next.js Development?',
      subheading: 'Ignite Your Business with Robust Next.js Solutions',
      description: 'Our skilled developers leverage the full potential of Next.js to deliver scalable, efficient, and future-ready applications that drive success. From tailored solutions to SEO optimization and end-to-end services, we ensure your business achieves long-term growth.',
      cardStyling: '',
      industry: nextjs_services
    },
    ctaSection: {
      heading: "Lead with Confidence",
      subheading: "Choose our skilled Next.js developers to bring your vision to life. We deliver innovative, high-performance web applications designed to give your business a competitive edge.",
      buttonText: "Hire Next.js Developers",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Seeking Expert",
      highlightText: "Next.js Developers?",
      subtitle: "Building Scalable, High-Performance Applications",
      description: "Hire our skilled Next.js developers who excel in delivering innovative solutions by leveraging empirical methodologies and cutting-edge technologies.",
      buttonText: "Hire Next.js Developers",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our Next.js process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure scalable, secure, and future-ready applications tailored to your business needs.",
      processes: nextjs_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Next.js Development Lifecycle",
      subheading: "Agile, Scalable & Future-Ready",
      description: "Our Next.js development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build applications that adapt and grow with your business.",
      processes: nextjs_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Next.js Development FAQs",
        subheading: "Your Complete Guide to Next.js Development",
        description: "Get answers to common questions about Next.js development, including SSR, SSG, API integrations, and performance optimization."
      },
      content: nextjs_faq
    }
  },

  'wordpress': {
    heroSection: {
      heading: 'WordPress Development',
      subheading: 'Your Trusted Partner for WordPress Development',
      description: 'At Ridipt, we specialize in creating dynamic and visually appealing websites using WordPress. With a robust content management system (CMS) at its core, our WordPress solutions empower businesses to manage their online presence effortlessly. We focus on user-friendly designs and seamless functionality, ensuring your website effectively communicates your brand\'s message and engages your audience.',
      image: require('@assets/service/wordpress-new.png'),
      imageAlt: 'WordPress Development',
      // className: '!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 to-sky-200 pb-20 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'

    },
    servicesSection: {
      heading: 'Our WordPress Development Services',
      subheading: 'Comprehensive Solutions for Effective WordPress Websites',
      description: 'We provide end-to-end WordPress solutions including custom theme development, plugin customization, WooCommerce integration, SEO optimization, migration services, and ongoing maintenance — designed to help your business harness the full potential of WordPress.',
      content: wordpress_content,
      subSection: false,
      className: '!mt-0'
    },
    serviceDetailSection: {
      heading: 'Benefits of WordPress Websites',
      subheading: 'User-Friendly Content Management',
      description: 'WordPress offers unmatched flexibility with user-friendly content management, extensive plugin ecosystem, SEO-friendly framework, and scalable solutions that grow with your business. From custom designs to robust security features, WordPress provides everything you need for online success.',
      cardStyling: '',
      industry: wordpress_services
    },
    ctaSection: {
      heading: "Expertise in WordPress Solutions",
      subheading: "Partner with Ridipt to create powerful WordPress websites tailored to your unique needs. Our experienced team delivers high-quality results that drive engagement and conversion.",
      buttonText: "Get Started Today",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Ready to Get Started?",
      highlightText: "Launch Your WordPress Website Today!",
      subtitle: "Get Your WordPress Site Built by Experts",
      description: "Our team is ready to assist you in creating a stunning WordPress website tailored to your business needs. Let's work together to make your vision a reality!",
      buttonText: "Contact Us Now",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Scalable Growth",
      description: "Our WordPress development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure user-friendly, scalable, and secure WordPress websites tailored to your business needs.",
      processes: wordpress_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "WordPress Development Lifecycle",
      subheading: "Efficient, Scalable & User-Friendly",
      description: "Our WordPress development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build WordPress websites that adapt and grow with your business.",
      processes: wordpress_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "WordPress Development FAQs",
        subheading: "Your Complete Guide to WordPress",
        description: "Get answers to common questions about WordPress development, including security, customization, e-commerce, migration, and maintenance services."
      },
      content: wordpress_faq
    }
  },

  'ai-chatbots-copilots': {
    heroSection: {
      heading: 'AI Chatbots & Copilots',
      subheading: '24/7 Conversational AI for Support, Sales & Your Team',
      description: 'Give your customers instant answers and your team a smart copilot. We design and build AI chatbots and internal copilots that understand natural language, connect to your real data, and hand off to a human exactly when needed.',
      image: require('@assets/service/geneative ai.webp'),
      imageAlt: 'AI Chatbots and Copilots Services',
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our AI Chatbot & Copilot Solutions',
      subheading: 'Conversational AI Built Around Your Business',
      description: 'From customer-facing support bots to internal knowledge copilots, we design conversational AI that actually understands your business, connects to your existing tools, and knows when to bring in a human.',
      content: ai_chatbots_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why Businesses Choose Our AI Chatbots',
      subheading: 'Faster, Smarter, Always-On Conversations',
      description: 'Our AI chatbots and copilots combine natural language understanding with your real business data, delivering fast, accurate, and on-brand conversations across every channel your customers and employees use.',
      cardStyling: '',
      industry: ai_chatbots_services
    },
    ctaSection: {
      heading: "Ready to Launch Your AI Chatbot?",
      subheading: "Let's design a conversational AI assistant tailored to your customers, your team, and your existing tools.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking to Build an",
      highlightText: "AI Chatbot or Copilot?",
      subtitle: "Conversational AI That Understands Your Business",
      description: "We design and build chatbots and copilots that connect to your real data and existing tools, so every conversation actually gets things done.",
      buttonText: "Start Your AI Chatbot Project",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Research to Launch",
      description: "Our chatbot development process covers everything from mapping your key conversations to designing flows, building integrations, and continuously improving the assistant after launch.",
      processes: ai_chatbots_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "AI Chatbot Development Lifecycle",
      subheading: "Agile, Conversational & Continuously Improving",
      description: "We follow a structured approach from research and conversation design through build, integration, and ongoing refinement, ensuring your chatbot keeps getting better after it goes live.",
      processes: ai_chatbots_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "AI Chatbots & Copilots FAQs",
        subheading: "Your Complete Guide to Conversational AI",
        description: "Get answers to common questions about AI chatbots and copilots, including platforms, timelines, cost, and data privacy."
      },
      content: ai_chatbots_faq
    }
  },

  'llm-rag-integration': {
    heroSection: {
      heading: 'LLM & RAG Integration',
      subheading: 'Ground AI Answers in Your Own Business Data',
      description: 'Connect large language models to your documents, databases, and internal knowledge with Retrieval-Augmented Generation. We build AI systems that give accurate, sourced answers based on your business, not generic guesses.',
      image: require('@assets/service/technology/AI-ml.png'),
      imageAlt: 'LLM and RAG Integration Services',
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our LLM & RAG Solutions',
      subheading: 'Turning Your Data Into Instant, Trustworthy Answers',
      description: 'We design retrieval pipelines and integrate large language models so your team and customers get accurate answers grounded in your actual documents, data, and systems.',
      content: llm_rag_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why RAG Beats a Plain Chatbot',
      subheading: 'Accuracy You Can Trace Back to the Source',
      description: 'By retrieving from your real data before generating a response, our RAG systems reduce hallucinations and give your team confidence in every answer.',
      cardStyling: '',
      industry: llm_rag_services
    },
    ctaSection: {
      heading: "Ready to Ground AI in Your Own Data?",
      subheading: "Let's connect a language model to your documents and systems, so answers are accurate, sourced, and specific to your business.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking to Build",
      highlightText: "LLM & RAG Solutions?",
      subtitle: "Accurate AI Answers, Grounded in Your Data",
      description: "We design retrieval-augmented AI systems that connect language models to your real business data, delivering answers you can trust and trace.",
      buttonText: "Start Your RAG Project",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Data Discovery to Production",
      description: "Our RAG development process covers data discovery, architecture design, pipeline development, and ongoing tuning to keep answers accurate as your data changes.",
      processes: llm_rag_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "LLM & RAG Development Lifecycle",
      subheading: "Secure, Accurate & Continuously Synced",
      description: "We follow a structured approach from data and use case discovery through architecture, build, and ongoing maintenance, keeping your AI answers accurate and current.",
      processes: llm_rag_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "LLM & RAG Integration FAQs",
        subheading: "Your Complete Guide to Grounded AI",
        description: "Get answers to common questions about RAG, supported language models, data privacy, cost, and timelines."
      },
      content: llm_rag_faq
    }
  },

  'ai-powered-automation': {
    heroSection: {
      heading: 'AI-Powered Automation',
      subheading: 'Automate Repetitive Work with Intelligent Decisioning',
      description: 'Go beyond basic rule-based automation. We combine AI decisioning with your workflows to process documents, route tickets, and handle exceptions, freeing your team from repetitive manual work.',
      image: require('@assets/service/geneative ai.webp'),
      imageAlt: 'AI-Powered Automation Services',
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our AI Automation Solutions',
      subheading: 'Smarter Workflows, Fewer Manual Tasks',
      description: 'We design automations that combine AI judgment with your existing workflows, handling documents, tickets, and data entry so your team can focus on higher-value work.',
      content: ai_automation_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why AI-Powered Automation Pays Off',
      subheading: 'Faster, More Accurate, More Scalable Operations',
      description: 'By adding AI decisioning to automation, routine processes handle more variation on their own, cutting manual effort, reducing errors, and freeing your team for higher-value work.',
      cardStyling: '',
      industry: ai_automation_services
    },
    ctaSection: {
      heading: "Ready to Automate the Repetitive Work?",
      subheading: "Let's identify the manual processes costing your team the most time and design an AI-powered automation to handle them.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking to Automate With",
      highlightText: "Intelligent AI Decisioning?",
      subtitle: "Automation That Handles Real-World Variation",
      description: "We build automations that combine AI judgment with your existing workflows, so routine processes run themselves and only genuine exceptions reach your team.",
      buttonText: "Start Your Automation Project",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Process Discovery to Ongoing Optimization",
      description: "Our automation development process covers process discovery, workflow design, build and integration, and ongoing refinement as your processes evolve.",
      processes: ai_automation_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "AI Automation Development Lifecycle",
      subheading: "Efficient, Reliable & Built to Scale",
      description: "We follow a structured approach from process research through automation build, integration, and continuous refinement, ensuring your workflows stay reliable as volume grows.",
      processes: ai_automation_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "AI-Powered Automation FAQs",
        subheading: "Your Complete Guide to Intelligent Automation",
        description: "Get answers to common questions about AI automation, integrations, ROI, and how exceptions are handled."
      },
      content: ai_automation_faq
    }
  },

  'predictive-analytics': {
    heroSection: {
      heading: 'Predictive Analytics & AI Insights',
      subheading: 'Turn Your Data Into Forward-Looking Decisions',
      description: 'Move from backward-looking reports to forward-looking predictions. We build forecasting, churn prediction, and recommendation models that help your team act before problems and opportunities pass by.',
      image: require('@assets/service/technology/AI-ml.png'),
      imageAlt: 'Predictive Analytics and AI Insights Services',
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our Predictive Analytics Solutions',
      subheading: 'From Historical Data to Future-Ready Decisions',
      description: 'We build predictive models and dashboards that turn your historical data into forecasts, risk alerts, and recommendations your team can act on immediately.',
      content: predictive_analytics_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why Predictive Analytics Matters',
      subheading: 'Decisions Backed by Data, Not Guesswork',
      description: 'Our predictive models help you spot risk and opportunity early, personalize customer experiences, and keep leadership informed with real-time, trustworthy insights.',
      cardStyling: '',
      industry: predictive_analytics_services
    },
    ctaSection: {
      heading: "Ready to Predict What's Next?",
      subheading: "Let's turn your existing data into forecasts, alerts, and recommendations your team can act on.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking for",
      highlightText: "Predictive Analytics Experts?",
      subtitle: "Turn Your Data Into a Competitive Advantage",
      description: "We build forecasting, churn prediction, and recommendation models that help you make confident, forward-looking business decisions.",
      buttonText: "Start Your Analytics Project",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Development Journey",
      subheading: "From Data Discovery to Deployed Predictions",
      description: "Our predictive analytics process covers data and opportunity discovery, model design, build and deployment, and ongoing retraining to keep predictions accurate.",
      processes: predictive_analytics_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "Predictive Analytics Development Lifecycle",
      subheading: "Accurate, Scalable & Continuously Improving",
      description: "We follow a structured approach from data research through model development, deployment, and ongoing retraining, ensuring predictions stay accurate as your business evolves.",
      processes: predictive_analytics_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "Predictive Analytics FAQs",
        subheading: "Your Complete Guide to AI-Driven Insights",
        description: "Get answers to common questions about data requirements, model accuracy, BI integration, and cost."
      },
      content: predictive_analytics_faq
    }
  },

  'ai-strategy-consulting': {
    heroSection: {
      heading: 'AI Strategy & Readiness Consulting',
      subheading: 'A Clear, Practical Roadmap for AI Adoption',
      description: 'Not sure where to start with AI? We assess your data, operations, and goals, then deliver a prioritized, vendor-neutral roadmap so your first AI investment is the right one.',
      image: require('@assets/service/geneative ai.webp'),
      imageAlt: 'AI Strategy and Readiness Consulting Services',
      className: '!mt-0 !p-5 md:pt-0 !pb-0 md:mt-0 relative w-full dark:!bg-none bg-accent-foreground/10 dark:bg-gradient-to-b dark:from-sky-800 dark:via-sky-700 dark:to-sky-600 !flex-wrap-reverse'
    },
    servicesSection: {
      heading: 'Our AI Strategy & Consulting Solutions',
      subheading: 'From Uncertainty to a Prioritized AI Roadmap',
      description: 'We assess your data readiness and business goals, identify the AI opportunities most worth pursuing, and deliver a practical, vendor-neutral roadmap your team can act on.',
      content: ai_strategy_content,
      subSection: false,
      className: ''
    },
    serviceDetailSection: {
      heading: 'Why Start With AI Strategy',
      subheading: 'Avoid Costly False Starts',
      description: 'A short strategy engagement upfront helps you avoid investing in AI projects that were never going to work, and points you toward the opportunities that will.',
      cardStyling: '',
      industry: ai_strategy_services
    },
    ctaSection: {
      heading: "Ready to Build Your AI Roadmap?",
      subheading: "Let's assess your data and operations, and map out a practical, prioritized path to AI adoption.",
      buttonText: "Contact Now",
      className: '!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
    },
    promotionalSection: {
      title: "Looking for",
      highlightText: "Vendor-Neutral AI Advice?",
      subtitle: "A Roadmap Built Around Your Business, Not a Sales Pitch",
      description: "We assess your data and goals, then deliver a clear, prioritized AI roadmap with objective recommendations on tools and next steps.",
      buttonText: "Book an AI Readiness Assessment",
      animationData: require('@assets/animations/Developer.json')
    },
    processCardsSection: {
      heading: "Streamlining the Advisory Journey",
      subheading: "From Discovery to a Delivered Roadmap",
      description: "Our AI strategy process covers stakeholder discovery, opportunity mapping, roadmap delivery, and ongoing advisory support as you begin implementation.",
      processes: ai_strategy_streamlining_development,
      className: 'p-4 bg-bg-background dark:!bg-none dark:!bg-background'
    },
    businessProcessSection: {
      heading: "AI Strategy Consulting Lifecycle",
      subheading: "Structured, Objective & Action-Oriented",
      description: "We follow a structured approach from research and stakeholder interviews through roadmap development and ongoing advisory support, keeping recommendations grounded in your business reality.",
      processes: ai_strategy_business_process,
      className: 'p-4 bg-background dark:!bg-none dark:!bg-background'
    },
    faqSection: {
      header: {
        heading: "AI Strategy & Readiness FAQs",
        subheading: "Your Complete Guide to Getting Started with AI",
        description: "Get answers to common questions about the assessment process, data requirements, timelines, and cost."
      },
      content: ai_strategy_faq
    }
  }
};

export default technologyData;
