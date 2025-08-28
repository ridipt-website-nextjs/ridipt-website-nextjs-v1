'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { ai_ml_services, ai_ml_content, ai_ml_business_process, ai_ml_streamlining_development } from '@/config/content/emerging technology/ai_ml.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { ai_ml_faq } from '@/config/content/emerging technology/ai_ml.faq';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='AI/ML Solutions & Generative AI Services'
                subheading='Empower Your Business with Intelligent Innovation'
                description='Revolutionize your operations with cutting-edge AI/ML and Generative AI services. Leverage our expertise to harness the power of data and automation, driving smarter decisions and sustainable growth. Our customized AI/ML solutions empower businesses across industries to optimize workflows, improve efficiency, and unlock new opportunities with innovative, data-driven strategies.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='AI/ML Solutions & Generative AI Services'
                            width={500}
                            height={500}
                            className='flex-1 shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className='!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
                subSection={false}
            />

            {/* Services Section */}
            <ServiceSection
                heading='Our AI/ML & Generative AI Solutions'
                subheading='Driving Success with Advanced AI/ML Practices'
                description='Our AI/ML consulting services are crafted to align with your business goals. From data analysis to predictive modeling, we deliver intelligent solutions that streamline operations and enhance decision-making. Explore the potential of Generative AI to create unique, high-value outputs that empower your enterprise to stay competitive and relevant in the evolving tech landscape.'
                content={ai_ml_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Looking for Intelligent AI/ML Solutions?"
                        subheading="Transform your business processes with our data-driven AI/ML services. We design innovative solutions tailored to your specific needs."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Our AI/ML & Generative AI Tech Stack'
                subheading='Innovating with AI/ML to Build Scalable Solutions'
                description='We craft intelligent, future-ready AI/ML solutions that align with your enterprise needs, ensuring smooth integration and optimized performance. Leverage our expertise in AI/ML tools, including TensorFlow, PyTorch, and OpenAI APIs, to create solutions that transform your business operations.'
                industry={ai_ml_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="AI/ML Professionals?"
                subtitle="Building Intelligent and Scalable AI Solutions"
                description="Hire our skilled AI/ML professionals, equipped to deliver exceptional solutions using advanced tools and cutting-edge methodologies to drive your business forward."
                buttonText="Hire AI/ML Experts"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our AI/ML development process covers the complete journey — from data strategy and model design to deployment and continuous learning. With agile methodologies, we ensure intelligent, scalable, and high-performance AI/ML solutions tailored to your business needs."
                processes={ai_ml_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="AI/ML Development Lifecycle"
                subheading="Agile, Intelligent & Future-Ready"
                description="Our AI/ML development process ensures accuracy, scalability, and long-term success. From data planning and model development to deployment and ongoing optimization, we follow a streamlined approach to build AI/ML solutions that adapt and evolve with your business."
                processes={ai_ml_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "AI/ML & Generative AI FAQs",
                    subheading: "Your Complete Guide to AI/ML Solutions",
                    description: "Get answers to common questions about AI/ML development, including machine learning models, generative AI, computer vision, natural language processing, costs, and ongoing support services."
                }}
                content={ai_ml_faq}
            />
        </Structure>
    )
}

export default Page
