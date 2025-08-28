import { FeatureItem } from "@/config/interface";
import { mergeProcessWithOverrides } from "../common-functions";
import { business_process, streamlining_development } from "@/config/constant";

export const blockchain_content = [
  {
    title: "Blockchain Consulting Services",
    description:
      "Transform Your Business with Blockchain Expertise - Leverage our premier blockchain consulting services to redefine your enterprise. We craft tailored strategies and roadmaps that yield measurable outcomes, driving operational excellence and fostering sustainable growth.",
    // image: require('@assets/our_services/blockchain/consulting.svg'),
  },
  {
    title: "dApp Development Services",
    description:
      "Unlock the Future with Decentralized Applications - Our dApp development services empower you to create resilient, secure, and scalable applications that enhance user engagement and operational efficiency.",
    // image: require('@assets/our_services/blockchain/dapp-development.svg'),
  },
  {
    title: "Crypto Wallet Development Services",
    description:
      "Secure Your Digital Assets with Custom Wallet Solutions - We specialize in developing robust crypto wallets, ensuring top-notch security and user-friendly interfaces to manage your digital currencies effortlessly.",
    // image: require('@assets/our_services/blockchain/crypto-wallet.svg'),
  },
  {
    title: "Layer2 Blockchain Development Services",
    description:
      "Enhance Scalability with Layer2 Solutions - Leverage our expertise in Layer2 blockchain solutions to boost transaction speeds and reduce costs while maintaining security and decentralization.",
    // image: require('@assets/our_services/blockchain/layer2.svg'),
  },
  {
    title: "Smart Contracts Development",
    description:
      "Automate Processes with Secure Smart Contracts - Our smart contract development services ensure transparent, self-executing agreements that enhance trust and efficiency in your operations.",
    // image: require('@assets/our_services/blockchain/smart-contracts.svg'),
  },
  {
    title: "Asset Tokenization Platform Development",
    description:
      "Revolutionize Asset Management with Tokenization - We provide comprehensive solutions for asset tokenization, enabling businesses to digitize and trade assets seamlessly on blockchain networks.",
    // image: require('@assets/our_services/blockchain/tokenization.svg'),
  },
  {
    title: "NFT Marketplace Development",
    description:
      "Create Unique Marketplaces for Digital Assets - Our NFT marketplace development services empower you to build vibrant platforms for trading and showcasing digital assets securely and efficiently.",
    // image: require('@assets/our_services/blockchain/nft-marketplace.svg'),
  },
  {
    title: "Enterprise Blockchain Development",
    description:
      "Empower Your Business with Custom Blockchain Solutions - Transform your enterprise with tailored blockchain applications that enhance transparency, security, and operational efficiency.",
    // image: require('@assets/our_services/blockchain/enterprise.svg'),
  },
  {
    title: "Blockchain Integration Services",
    description:
      "Seamlessly Integrate Blockchain with Your Existing Systems - We offer expert integration services that enable smooth blockchain adoption, ensuring compatibility with your current infrastructure.",
    // image: require('@assets/our_services/blockchain/integration.svg'),
  },
  {
    title: "Blockchain App Development Services",
    description:
      "Innovate with Custom Blockchain Applications - Our blockchain app development services deliver secure, scalable, and efficient applications tailored to meet your specific business needs.",
    // image: require('@assets/our_services/blockchain/app-development.svg'),
  },
];


export const blockchain_services: FeatureItem[] = [
  {
    title: "Advanced Blockchain Practices",
    subtitle: "Driving Success with Decentralization",
    description:
      "Our blockchain consulting services are tailored to align with your business goals. From smart contracts to decentralized applications, we deliver intelligent solutions that enhance operations and secure transactions.",
    // image: require('@assets/our_services/blockchain/advanced-practices.svg'),
  },
  {
    title: "Revolutionary Blockchain Innovation",
    subtitle: "Transforming Business Operations",
    description:
      "Explore the potential of blockchain to create secure, transparent systems. Our team delivers tailored solutions that empower your enterprise to stay competitive and relevant in the evolving tech landscape.",
    // image: require('@assets/our_services/blockchain/innovation.svg'),
  },
  {
    title: "Expert Blockchain Professionals",
    subtitle: "Deep Technical Knowledge",
    description:
      "Our skilled team of blockchain consultants brings deep technical knowledge to address your enterprise's complex challenges. With expertise in blockchain development and deployment, we ensure transformative results.",
    // image: require('@assets/our_services/blockchain/professionals.svg'),
  },
  {
    title: "Precision-Based Security",
    subtitle: "Engineered for Excellence",
    description:
      "Our blockchain solutions are crafted using top-tier features and state-of-the-art technologies to ensure unmatched quality, security, and performance.",
    // image: require('@assets/our_services/blockchain/security.svg'),
  },
  {
    title: "Custom Blockchain Solutions",
    subtitle: "Tailored for Your Unique Needs",
    description:
      "We specialize in end-to-end integration, precision-based execution, and custom-built solutions designed to meet client-centric development demands with exceptional diligence.",
    // image: require('@assets/our_services/blockchain/custom-solutions.svg'),
  },
  {
    title: "Scalable Blockchain Infrastructure",
    subtitle: "Future-Ready Technology",
    description:
      "We deliver robust, future-ready blockchain solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance across distributed networks.",
    // image: require('@assets/our_services/blockchain/scalable-infrastructure.svg'),
  },
];

// --- Streamlining Development Overrides ---
const blockchain_streamlining_overrides = [
  {
    id: "research-and-idea-generation",
    title: "Research and Idea Generation",
    description:
      "We engage in continuous research and innovation to intelligently address your blockchain transformation needs. By understanding decentralization trends and distributed ledger possibilities, we generate effective solutions tailored for secure and transparent operations.",
  },
  {
    id: "innovation-and-design",
    title: "Innovation and Design",
    description:
      "We empower clients to explore the best blockchain architecture and decentralization possibilities, enhancing operational security and transparency. Our approach creates scalable blockchain solutions that drive business growth through strategic design and innovative cryptographic implementations.",
  },
  {
    id: "full-cycle-product-development",
    title: "Full-Cycle Blockchain Development",
    description:
      "Our comprehensive 360-degree blockchain service covers every phase from architecture design to smart contract deployment. Using agile methodologies, we ensure seamless evolution and meticulous management of your blockchain transformation journey.",
  },
  {
    id: "product-growth-and-support",
    title: "Blockchain Network Growth and Support",
    description:
      "We help identify strengths in your blockchain solutions while addressing improvements for greater security and efficiency. Our dedicated support ensures every aspect is optimized for long-term success and continuous network reliability.",
  },
];

export const blockchain_streamlining_development = mergeProcessWithOverrides<
  typeof streamlining_development[number]
>(
  streamlining_development,
  blockchain_streamlining_overrides
);

// --- Business Process Overrides ---
const blockchain_business_overrides = [
  {
    id: "research_plan",
    title: "Research & Plan",
    description:
      "We conduct comprehensive blockchain assessment research to gather insights that inform our decentralization strategies. Our tailored plans ensure alignment with your unique security needs and distributed ledger objectives.",
  },
  {
    id: "code",
    title: "Smart Contract Development",
    description:
      "Our expert blockchain developers use modern cryptographic practices and follow blockchain development standards to create clean, efficient, and secure smart contracts that ensure robust and tamper-proof decentralized solutions.",
  },
];

export const blockchain_business_process = mergeProcessWithOverrides(
  business_process,
  blockchain_business_overrides
);
