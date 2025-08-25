'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { android_app_services, android_app_content, android_app_business_process, android_app_streamlining_development } from '@/config/content/app_development/android.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { android_app_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Android App Development'
                subheading='Your Premier Custom Android App Development Partner'
                description='At Ridipt, we are a leading custom Android app development company dedicated to creating high-quality, impactful native Android applications. Our cost-effective solutions not only enhance your brand value but also ensure a strong digital presence. We focus on client-oriented strategies that significantly boost consumer engagement and satisfaction.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Android App Development'
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
                heading='Our Android App Development Services'
                subheading={`Cutting-Edge Solutions for Today's Market`}
                description='We provide end-to-end Android app development solutions including expert consultation, UI/UX design, comprehensive testing, Firebase integration, and custom development services — designed to help your business create innovative mobile applications that drive growth and engagement.'
                content={android_app_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Lead with Innovation"
                        subheading="Choose our skilled Android developers to bring your ideas to life. With cutting-edge technology and a passion for creativity, we craft innovative solutions that keep you ahead of the competition."
                        buttonText="Hire our Android Developers"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Explore Our Modern Android App Development Services Features'
                subheading='Ignite Your Business with Innovative Solutions'
                description='Disrupt the lucrative market with your groundbreaking ideas while harnessing our Android app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.'
                industry={android_app_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="Android App Developers?"
                subtitle="Building High-Performance Native Android Applications"
                description="Hire our skilled Android app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies."
                buttonText="Hire Android App Developer"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our Android app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, secure, and high-performance mobile applications tailored to your business needs."
                processes={android_app_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Android App Development Lifecycle"
                subheading="Agile, Scalable & Future-Ready"
                description="Our Android app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build mobile applications that adapt and grow with your business."
                processes={android_app_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Android App Development FAQs",
                    subheading: "Your Complete Guide to Android Development",
                    description: "Get answers to common questions about Android app development, including technologies, costs, security, app store submission, and maintenance services."
                }}
                content={android_app_faq}
            />
        </Structure>
    )
}

export default Page
