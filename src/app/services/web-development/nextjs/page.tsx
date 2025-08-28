'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { nextjs_services, nextjs_stack_content, nextjs_business_process, nextjs_streamlining_development } from '@/config/content/nextjs.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { nextjs_faq } from '@/config/FAQs';
// import { nextjs_faq } from '@/config/FAQs';


const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Next.js Development'
                subheading='Your Trusted Next.js Development Partner'
                description='At Ridipt, we specialize in delivering cutting-edge web applications powered by Next.js. With expertise in building high-performance, SEO-optimized, and scalable solutions, we empower businesses to stand out in the competitive digital landscape. Our development process is rooted in innovation, seamless user experiences, and robust functionality, ensuring we exceed your expectations.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Next.js Development'
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
                heading='Innovative Next.js Solutions for Modern Businesses'
                subheading='Streamlined Development for a Competitive Edge'
                description='We provide end-to-end Next.js solutions including development, integration, consulting, CMS, migration, testing, API, and e-commerce services — designed to help your business grow with scalable and future-ready applications.'
                content={nextjs_stack_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Lead with Confidence"
                        subheading="Choose our skilled Next.js developers to bring your vision to life. We deliver innovative, high-performance web applications designed to give your business a competitive edge."
                        buttonText="Hire Next.js Developers"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Why Choose Ridipt for Next.js Development?'
                subheading='Ignite Your Business with Robust Next.js Solutions'
                description='Our skilled developers leverage the full potential of Next.js to deliver scalable, efficient, and future-ready applications that drive success. From tailored solutions to SEO optimization and end-to-end services, we ensure your business achieves long-term growth.'
                industry={nextjs_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="Next.js Developers?"
                subtitle="Building Scalable, High-Performance Applications"
                description="Hire our skilled Next.js developers who excel in delivering innovative solutions by leveraging empirical methodologies and cutting-edge technologies."
                buttonText="Hire Next.js Developers"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our Next.js process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure scalable, secure, and future-ready applications tailored to your business needs."
                processes={nextjs_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Next.js Development Lifecycle"
                subheading="Agile, Scalable & Future-Ready"
                description="Our Next.js development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build applications that adapt and grow with your business."
                processes={nextjs_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Next.js Development FAQs",
                    subheading: "Your Complete Guide to Next.js Development",
                    description: "Get answers to common questions about Next.js development, including SSR, SSG, API integrations, and performance optimization."
                }}
                content={nextjs_faq}
            />
        </Structure>
    )
}

export default Page