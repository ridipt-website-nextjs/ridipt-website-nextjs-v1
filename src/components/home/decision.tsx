'use client';
import React from 'react';
import Image from 'next/image';
import Header from '@/components/section-heading';
import Section from '@/components/section-structure';
import PortofolioHighlight from '@/components/portfolio-highlights-section';
import { ServiceItem } from '@/config/interface';
import { CheckCircle } from 'lucide-react';


const decisionGuideData = [
  {
    title: "How do I choose the right Technology?",
    description: "Match your stack to skills, time, and growth.",
    image: require("@assets/home/illustrations/img1.png"),
    isAnimation: false,
    highlights: [
      "Evaluate team’s existing skill set",
      "Choose frameworks with strong community support",
      "Plan for scalability and maintainability",
    ],
  },
  {
    title: "Which cloud should I go to?",
    description: "Choose based on price, scale, ecosystem.",
    image: require("@assets/home/illustrations/img2.png"),
    isAnimation: false,
    highlights: [
      "Compare AWS, Azure, and GCP pricing models",
      "Check available managed services and integrations",
      "Consider compliance and data residency requirements",
    ],
  },
  {
    title: "What should my app's architecture be?",
    description: "Design for now, ready for later.",
    image: require("@assets/home/illustrations/img3.png"),
    isAnimation: false,
    highlights: [
      "Start with modular, layered architecture",
      "Use microservices for scalability",
      "Implement CI/CD for faster iterations",
    ],
  },
  {
    title: "How do I secure my application?",
    description: "Auth, encryption, compliance built-in.",
    image: require("@assets/home/illustrations/img4.png"),
    isAnimation: false,
    highlights: [
      "Use OAuth2 / JWT for authentication",
      "Encrypt sensitive data in transit and at rest",
      "Adhere to GDPR and industry security standards",
    ],
  },
  {
    title: "How will the performance of my application be?",
    description: "Fast, efficient, optimized for load.",
    image: require("@assets/home/illustrations/img5.png"),
    isAnimation: false,
    highlights: [
      "Implement caching and CDN strategies",
      "Optimize database queries",
      "Run performance and load tests regularly",
    ],
  },
  {
    title: "How will my application be scalable?",
    description: "Scale seamlessly with users.",
    image: require("@assets/home/illustrations/img6.png"),
    isAnimation: false,
    highlights: [
      "Use containerization (Docker, Kubernetes)",
      "Implement load balancing",
      "Adopt auto-scaling infrastructure",
    ],
  },
  {
    title: "How will my application be maintained?",
    description: "Smooth upgrades, monitoring, clear ownership.",
    image: require("@assets/home/illustrations/img7.png"),
    isAnimation: false,
    highlights: [
      "Use proper documentation and version control",
      "Monitor logs and system health metrics",
      "Define clear ownership and support procedures",
    ],
  },
  {
    title: "Which third-party tools should I use?",
    description: "APIs, analytics, payments to speed delivery.",
    image: require("@assets/home/illustrations/img8.png"),
    isAnimation: false,
    highlights: [
      "Integrate trusted API providers",
      "Use analytics tools for user behavior insights",
      "Select secure and scalable payment gateways",
    ],
  },
  {
    title: "Do they understand my business?",
    description: "We align tech to your workflows.",
    image: require("@assets/home/illustrations/img9.png"),
    isAnimation: false,
    highlights: [
      "Understand business goals before development",
      "Tailor tech decisions to business processes",
      "Ensure long-term alignment and flexibility",
    ],
  },
  {
    title: "What are my needs from the software?",
    description: "Define must-haves vs nice-to-haves.",
    image: require("@assets/home/illustrations/img10.png"),
    isAnimation: false,
    highlights: [
      "Identify core features first",
      "Separate essential vs optional functionality",
      "Document use cases clearly for developers",
    ],
  },
];


interface DecisionGuideProps {
  items?: ServiceItem[];
  heading?: string;
  subheading?: string;
  description?: string;
  className?: string;
  cardStyling?: string;
  CustomCard?: (item: typeof decisionGuideData, idx: number) => React.JSX.Element;
}

const DecisionGuideSection = ({
  items = decisionGuideData,
  heading = "Decision Making Guide",
  subheading = "Navigate Your Development Journey",
  description = "Get answers to the most critical questions that shape your development decisions. Our expertise guides you through every choice.",
  className,
  cardStyling,
  CustomCard
}: DecisionGuideProps) => {
  return <>
    <PortofolioHighlight 
        CustomCard={DecisionCard}
        content={items as ServiceItem[]}
        heading={heading}
        subheading={subheading}
        description={description}
        className={className}
    />
  </>
};

export default DecisionGuideSection;

interface DecisionCardProps {
  item: ServiceItem;
  index: number;
  className?: string;
}

const DecisionCard = ({ item, index, className }: DecisionCardProps) => {
  return (
    <article
      className={`${className} border-none md:flex-row md:odd:flex-row-reverse group relative overflow-hidden rounded-3xl md:border md:border-border bg-card transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/20 flex flex-col md:items-center md:gap-8`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Image Section - Balanced Size */}
      <div className="relative flex-shrink-0 flex justify-center items-center p-6 md:p-8 lg:p-10 md:w-1/3">
        {item.image && (
          <div className="relative w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl blur-lg scale-110 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            
            {/* Image with Perfect Balance */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 208px, (max-width: 1024px) 256px, 288px"
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
            />
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="relative flex-1 p-6 md:p-8 lg:p-10 space-y-6 md:w-2/3">
        {/* Title & Description */}
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
            {item.title}
          </h3>
          <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed font-medium">
            {item.description}
          </p>
        </div>

        {/* Highlights Section */}
        {item.highlights && item.highlights.length > 0 && (
          <div className="space-y-4 text-center md:text-left">
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto md:mx-0 transition-all duration-300 group-hover:w-16" />
            
            <ul className="space-y-3">
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-base lg:text-lg text-foreground/80 text-left">
                  <CheckCircle className="w-5 h-5 lg:w-6 lg:h-6 text-primary/70 group-hover:text-primary flex-shrink-0 mt-0.5 transition-colors duration-300" />
                  <span className="leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Floating Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-gradient-to-br group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-500" />
      
      {/* Subtle Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
    </article>
  );
};


export { DecisionCard };
