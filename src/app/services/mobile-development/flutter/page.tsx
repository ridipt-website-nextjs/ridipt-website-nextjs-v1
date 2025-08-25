'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { flutter_app_services, flutter_app_content, flutter_app_business_process, flutter_app_streamlining_development } from '@/config/content/app_development/flutter.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { flutter_app_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Flutter App Development'
                subheading='Leading Flutter App Development Company'
                description='Ridipt specializes in building robust and scalable Flutter applications tailored to your business needs. Whether enhancing operational efficiency or improving digital mobility, our expert developers ensure cost-effective, high-performance solutions. Create fast, native-like Android and iOS apps that redefine your position in the mobile app market.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Flutter App Development'
                            width={500}
                            height={500}
                            className='flex-1 shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className='!mt-0 relative !w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
                subSection={false}
            />

            {/* Services Section */}
            <ServiceSection
                heading='Our Flutter App Development Services'
                subheading={`Cutting-Edge Solutions for Today's Market`}
                description='We provide end-to-end Flutter app development solutions including expert consulting, cross-platform development, app migration, API integration, native-level performance, and custom design services — designed to help your business create innovative cross-platform applications that reach broader audiences.'
                content={flutter_app_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Scalable Apps with Flutter Expertise"
                        subheading="Our top Flutter experts are ready to deliver scalable, robust, and high-performing apps tailored to your business needs."
                        buttonText="Hire our Proficient Flutter Developers"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Explore Our Modern Flutter App Development Services Features'
                subheading='Ignite Your Business with Scalable Solutions'
                description='Revolutionize the mobile app market with your visionary ideas, powered by our Flutter app development expertise. Our skilled developers craft dynamic and scalable applications tailored to propel your business to new heights.'
                industry={flutter_app_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Looking for Expert"
                highlightText="Flutter App Developers?"
                subtitle="Building High-Performance Cross-Platform Applications"
                description="Engage with our skilled Flutter app developers who are committed to delivering top-tier solutions through innovative methodologies and advanced technologies."
                buttonText="Hire Flutter App Developer"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our Flutter app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, scalable, and high-performance cross-platform applications tailored to your business needs."
                processes={flutter_app_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Flutter App Development Lifecycle"
                subheading="Agile, Scalable & Cross-Platform Ready"
                description="Our Flutter app development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build cross-platform applications that adapt and grow with your business."
                processes={flutter_app_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Flutter App Development FAQs",
                    subheading: "Your Complete Guide to Flutter Development",
                    description: "Get answers to common questions about Flutter app development, including cross-platform capabilities, Dart language, performance, costs, and maintenance services."
                }}
                content={flutter_app_faq}
            />
        </Structure>
    )
}

export default Page
