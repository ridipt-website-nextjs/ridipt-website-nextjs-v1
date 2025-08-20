'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import FAQ from '@/components/faq-section';
import { emerging_tech_faq } from '@/config/FAQs';
import Services from '@/components/portfolio-highlights-section';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { services_tech_stack } from '@/config/constant';
import ServiceDetailSection from '@/components/industry-section';
import MessageSection from '@/components/message-section';
import {
    ServiceCard,
    BusinessProcessSection,
    CallToActionContent,
    ProcessCardsSection,
    PromotionalSection,
    TechStackSection
} from '@/components/services/';
import {
  emerging_tech_services,
  emerging_tech_services_second_section,
  emerging_tech_business_process,
  emerging_tech_streamlining_development
} from '@/config/content/emerging-technology';

const page = () => {
    return (
        <Structure className='!p-0 !-top-[var(--header-height)]'>

            {/* Hero Section */}
            <HeroSection
                heading='Emerging Technologies Services & Solutions'
                subheading='Emerging Technologies Services & Solutions'
                description={`At Ridipt, we harness cutting-edge technologies and exceptional resources to deliver transformative emerging technology services and solutions. Our comprehensive approach ensures that every client demand is meticulously addressed. We empower businesses to embrace sustained innovation, enabling them to stay ahead in a rapidly evolving technological landscape. With Ridipt, you can hire top-tier experts in Cloud, DevOps, Blockchain, and Data Science, who integrate futuristic, tech-enabled solutions designed to unlock your full potential and drive measurable growth.`}
                content={
                    <div className='relative overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/bg1.jpg')}
                            alt='Emerging Technologies Services'
                            width={500}
                            height={500}
                            className='shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className='!mt-0 w-full !flex-wrap-reverse'
                subSection={false}
            />

            {/* Our Emerging Technology Solutions */}
            <Services
                heading='Our Emerging Technology Solutions'
                subheading='Harness Modern Technologies like DevOps, AI/ML, Data Science, Blockchain'
                description={`At Ridipt, we revolutionize businesses by integrating advanced technologies like DevOps, AI/ML, Data Science, and Blockchain. Our solutions are tailored to enhance your output, reduce operational complexity, and deliver exceptional ROI. Empower your business with our disruptive innovations and enabling services, ensuring efficiency, scalability, and long-term success.`}
                content={emerging_tech_services}
                CustomCard={ServiceCard}
                className='!container !max-w-auto !mb-0'
            />

            {/* Section 3: DevOps, AI/ML, Blockchain, Data Science */}
            <ServiceDetailSection
                heading='Key Emerging Technology Solutions'
                subheading='DevOps, AI/ML, Blockchain, Data Science'
                description={`Our emerging technology services empower businesses to stay ahead in a rapidly evolving digital landscape. From AI-driven automation and blockchain-powered security to scalable DevOps and data science insights, we deliver innovative solutions that drive efficiency, innovation, and growth.`}
                industry={emerging_tech_services_second_section}
            />


            {/* Integrate Next-Gen Technologies into Your Business */}
            <MessageSection
                className='!bg-blue-50 dark:!bg-card'
                content={
                    <CallToActionContent
                        heading="Integrate Next-Gen Technologies into Your Business"
                        subheading="Achieve scalability, performance, and innovation with AI/ML, Blockchain, Data Science, and DevOps."
                        buttonText="Contact Us"
                        onButtonClick={() => alert("Contact Us clicked")}
                    />
                }
            />

            {/* Comprehensive Tech-Stack Section */}
            <TechStackSection
                heading="Our Comprehensive Tech-Stack"
                subheading="Empowering Businesses with Next-Gen Technologies"
                description={`Ridipt leverages cutting-edge technologies to empower businesses with innovative solutions that are secure, scalable, and built for the future. By seamlessly integrating DevOps, AI/ML, Blockchain, and Data Science, we enable your business to thrive in an ever-evolving digital landscape.\n\nAt Ridipt, we synergize these next-gen technologies to build resilient, efficient, and transformative solutions that meet the unique demands of your business. Whether it's scaling operations, enhancing security, or unlocking data-driven opportunities, our tech stack ensures your business is equipped for sustained growth and success.`}
                techStackData={services_tech_stack['Emerging Technologies']} // or whichever tech stack fits best
            />

            {/* Hire The Best Tech Consultant Section */}
            <PromotionalSection
                title="Hire The Best Tech Consultant at Ridipt?"
                highlightText="Innovation-Driven, Agile, and Scalable Solutions"
                subtitle="Achieve unparalleled business growth with our technology expertise"
                description={`Transform your operations with agile processes, cutting-edge technologies, and strategic insights tailored to your needs. Leverage emerging technologies to unlock new opportunities, streamline processes, and drive sustainable growth.`}
                buttonText="Get Free Estimation"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Streamlining the Development Journey */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="Research, Innovation, and Agile Execution"
                description={`Our process includes Research and Idea Generation for innovative solutions, Innovation and Design to enhance market presence, Full-Cycle Product Development with agile execution, and Product Growth and Support for continuous optimization and success.`}
                processes={emerging_tech_streamlining_development}
            />



            {/* Business Process Section */}
            <BusinessProcessSection
                heading="Our Business Process"
                subheading="Structured, Streamlined, and Efficient"
                description={`We follow a step-by-step approach: Research & Plan for deep insights and strategy, Code with scalable and maintainable practices, Build customized solutions, Monitor performance continuously, Test through rigorous QA, Release with seamless launches, Deploy with smooth installation and optimization, and Operate with ongoing support and maintenance.`}
                processes={emerging_tech_business_process}
            />


            {/* FAQ */}
            <FAQ content={emerging_tech_faq} />

        </Structure>
    )
}

export default page;
