'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { data_science_services, data_science_content, data_science_business_process, data_science_streamlining_development } from '@/config/content/emerging technology/data_science.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { data_science_faq } from '@/config/content/emerging technology/data-science.faq';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Data Science Solutions & Services'
                subheading='Empower Your Business with Data-Driven Insights'
                description='Harness the power of data with our advanced data science services. Leverage robust analytics and machine learning techniques to gain valuable insights that drive business growth and innovation. We deliver tailored data science solutions globally, enabling organizations to make informed decisions and enhance their operational efficiency through data-driven strategies.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Data Science Solutions & Services'
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
                heading='Our Data Science Solutions and Services'
                subheading='Proficient Practices for Driving Business Success'
                description='Our data science consulting services are designed to implement effective practices that cater to the unique needs of your business. From predictive analytics to advanced machine learning, we deliver cutting-edge solutions that help you harness data, optimize performance, and uncover new opportunities.'
                content={data_science_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Looking for Exceptional Data Science Solutions?"
                        subheading="Revolutionize your business operations with our expert data science team, delivering insightful analytics and innovation tailored to your goals."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Our Data Science Tech Stack'
                subheading='Innovating with Data to Build Scalable Solutions'
                description='We deliver robust, future-ready data science solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern data science tools and methodologies to transform your analytics and achieve seamless insights and scalability.'
                industry={data_science_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="Data Science Professionals?"
                subtitle="Building Intelligent Data-Driven Solutions"
                description="Hire our skilled data science specialists who excel in delivering exceptional solutions by utilizing advanced tools, empirical methodologies, and cutting-edge technologies to optimize your business processes."
                buttonText="Hire Data Science Professionals"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our data science development process covers the complete journey — from data strategy and analytics design to model deployment and continuous insights generation. With agile methodologies, we ensure intelligent, scalable, and high-performance data science solutions tailored to your business needs."
                processes={data_science_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Data Science Development Lifecycle"
                subheading="Agile, Intelligent & Future-Ready"
                description="Our data science development process ensures accuracy, scalability, and long-term success. From data planning and model development to deployment and ongoing optimization, we follow a streamlined approach to build data science solutions that adapt and evolve with your business."
                processes={data_science_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Data Science Solutions FAQs",
                    subheading: "Your Complete Guide to Data Science",
                    description: "Get answers to common questions about data science, including analytics methodologies, machine learning models, big data processing, predictive analytics, costs, and ongoing support services."
                }}
                content={data_science_faq}
            />
        </Structure>
    )
}

export default Page
