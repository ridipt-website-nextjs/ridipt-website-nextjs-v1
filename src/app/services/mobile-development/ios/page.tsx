'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { ios_app_services, ios_app_content, ios_app_business_process, ios_app_streamlining_development } from '@/config/content/app_development/ios.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { ios_app_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='iOS App Development'
                subheading='Leading iOS App Development Company'
                description='As a prominent iOS app development company in India, we specialize in delivering tailored native iOS app development services for a diverse range of clients, from innovative startups to large enterprises. Hire our experienced iOS developers, who possess extensive knowledge across various industry niches, to create high-quality iOS apps for iPhone and iPod that perfectly align with your development requirements.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='iOS App Development'
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
                heading='Our iOS App Development Services'
                subheading={`Cutting-Edge Solutions for Today's Market`}
                description={`We provide end-to-end iOS app development solutions including expert consultation, multi-platform development, UI/UX design, app integration, comprehensive testing, and custom development services — designed to help your business create premium iOS applications that excel in Apple's ecosystem.`}
                content={ios_app_content}
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
                heading='Explore Our Modern iOS App Development Services Features'
                subheading='Ignite Your Business with Innovative Solutions'
                description='Disrupt the lucrative market with your groundbreaking ideas while harnessing our iOS app development expertise. Our skilled developers are committed to delivering top-notch technological solutions and services, driving your business toward optimal growth.'
                industry={ios_app_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="iOS App Developers?"
                subtitle="Building Premium Native iOS Applications"
                description="Hire our skilled iOS app developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies."
                buttonText="Hire iOS App Developer"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our iOS app development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure innovative, secure, and high-performance iOS applications tailored to your business needs."
                processes={ios_app_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="iOS App Development Lifecycle"
                subheading="Premium, Secure & Apple-Compliant"
                description="Our iOS app development process ensures efficiency, security, and long-term success in Apple's ecosystem. From planning and coding to App Store deployment and ongoing support, we follow a streamlined approach to build iOS applications that adapt and grow with your business."
                processes={ios_app_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "iOS App Development FAQs",
                    subheading: "Your Complete Guide to iOS Development",
                    description: "Get answers to common questions about iOS app development, including Swift programming, App Store approval, security, costs, and maintenance services."
                }}
                content={ios_app_faq}
            />
        </Structure>
    )
}

export default Page
