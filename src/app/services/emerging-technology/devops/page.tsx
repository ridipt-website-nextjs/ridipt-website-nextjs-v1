'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { devops_services, devops_content, devops_business_process, devops_streamlining_development } from '@/config/content/emerging technology/devOps.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { devops_faq } from '@/config/content/emerging technology/devOps.faq';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='DevOps Consulting Services'
                subheading='Empower Your Business with DevOps Excellence'
                description={`Leverage state-of-the-art technology and robust DevOps services to help your scaling organization integrate security-rich, high-performing, and resilient functions. We deliver tailored DevOps solutions globally, enabling enterprises to achieve the business agility and mobility they've always envisioned.`}
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='DevOps Consulting Services'
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
                heading='Our DevOps Solutions and Services'
                subheading='Proficient Practices for Driving Business Success'
                description='Our DevOps consulting services are designed to implement effective practices that cater to the unique needs of your business. From automating management processes to enhancing the end-user experience, we deliver cutting-edge solutions that help you streamline operations, reduce downtime, and optimize overall performance.'
                content={devops_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Looking for Exceptional DevOps Solutions?"
                        subheading="Revolutionize your business operations with our expert DevOps team, delivering streamlined workflows and innovation tailored to your goals."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Our DevOps Tech-Stack'
                subheading='Innovating with Agility to Build Scalable Solutions'
                description='We deliver robust, future-ready DevOps solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern DevOps tools and methodologies to transform your IT infrastructure and achieve seamless automation and scalability.'
                industry={devops_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="DevOps Professionals?"
                subtitle="Building Scalable and Resilient Infrastructure"
                description="Hire our skilled DevOps specialists who excel in delivering exceptional solutions by utilizing advanced tools, empirical methodologies, and cutting-edge technologies to optimize your business processes."
                buttonText="Hire DevOps Professional"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our DevOps transformation process covers the complete journey — from infrastructure assessment and automation design to full-scale implementation and continuous support. With agile methodologies, we ensure efficient, secure, and scalable DevOps solutions tailored to your business needs."
                processes={devops_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="DevOps Implementation Lifecycle"
                subheading="Agile, Scalable & Future-Ready"
                description="Our DevOps implementation process ensures efficiency, security, and long-term success. From planning and infrastructure-as-code to deployment automation and ongoing support, we follow a streamlined approach to build DevOps practices that adapt and grow with your business."
                processes={devops_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "DevOps Consulting FAQs",
                    subheading: "Your Complete Guide to DevOps Transformation",
                    description: "Get answers to common questions about DevOps consulting, including CI/CD implementation, infrastructure automation, security practices, costs, and ongoing support services."
                }}
                content={devops_faq}
            />
        </Structure>
    )
}

export default Page
