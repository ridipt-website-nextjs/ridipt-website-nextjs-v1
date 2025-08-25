'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { react_native_app_services, react_native_app_content, react_native_app_business_process, react_native_app_streamlining_development } from '@/config/content/app_development/react-native.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { react_native_app_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='React Native App Development'
                subheading='Leading React Native App Development Company'
                description='As a prominent React Native app development company in India, we specialize in delivering tailored cross-platform app development services for a diverse range of clients, from innovative startups to large enterprises. Hire our experienced React Native developers, who possess extensive knowledge across various industry niches, to create high-quality apps that perfectly align with your development requirements.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='React Native App Development'
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
                heading='Our React Native App Development Services'
                subheading={`Cutting-Edge Solutions for Today's Market`}
                description='We provide end-to-end React Native app development solutions including expert consultation, multi-platform development, UI/UX design, app integration, comprehensive testing, and custom development services — designed to help your business create innovative cross-platform applications that reach broader audiences efficiently.'
                content={react_native_app_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Want Stellar Business Solutions?"
                        subheading="Transform your ideas into impactful solutions with our expert team, delivering innovation and excellence tailored to your business needs."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Explore Our Modern React Native App Development Services Features'
                subheading='Ignite Your Business with Innovative Solutions'
                description='Disrupt the lucrative market with your groundbreaking ideas while harnessing our React Native app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.'
                industry={react_native_app_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="React Native App Developers?"
                subtitle="Building High-Performance Cross-Platform Applications"
                description="Hire our skilled React Native app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies."
                buttonText="Hire React Native App Developer"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our React Native app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, scalable, and high-performance cross-platform applications tailored to your business needs."
                processes={react_native_app_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="React Native App Development Lifecycle"
                subheading="Agile, Scalable & Cross-Platform Ready"
                description="Our React Native app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build cross-platform applications that adapt and grow with your business."
                processes={react_native_app_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "React Native App Development FAQs",
                    subheading: "Your Complete Guide to React Native Development",
                    description: "Get answers to common questions about React Native app development, including cross-platform capabilities, JavaScript framework, performance, costs, and maintenance services."
                }}
                content={react_native_app_faq}
            />
        </Structure>
    )
}

export default Page
