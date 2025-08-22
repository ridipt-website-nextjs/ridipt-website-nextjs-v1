'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { wordpress_services, wordpress_content, wordpress_business_process, wordpress_streamlining_development } from '@/config/content/wordpress.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { wordpress_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='WordPress Development'
                subheading='Your Trusted Partner for WordPress Development'
                description={`At Ridipt, we specialize in creating dynamic and visually appealing websites using WordPress. With a robust content management system (CMS) at its core, our WordPress solutions empower businesses to manage their online presence effortlessly. We focus on user-friendly designs and seamless functionality, ensuring your website effectively communicates your brand's message and engages your audience.`}
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='WordPress Development'
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
                heading='Our WordPress Development Services'
                subheading='Comprehensive Solutions for Effective WordPress Websites'
                description='We provide end-to-end WordPress solutions including custom theme development, plugin customization, WooCommerce integration, SEO optimization, migration services, and ongoing maintenance — designed to help your business harness the full potential of WordPress.'
                content={wordpress_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Expertise in WordPress Solutions"
                        subheading="Partner with Ridipt to create powerful WordPress websites tailored to your unique needs. Our experienced team delivers high-quality results that drive engagement and conversion."
                        buttonText="Get Started Today"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Benefits of WordPress Websites'
                subheading='User-Friendly Content Management'
                description='WordPress offers unmatched flexibility with user-friendly content management, extensive plugin ecosystem, SEO-friendly framework, and scalable solutions that grow with your business. From custom designs to robust security features, WordPress provides everything you need for online success.'
                industry={wordpress_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Ready to Get Started?"
                highlightText="Launch Your WordPress Website Today!"
                subtitle="Get Your WordPress Site Built by Experts"
                description="Our team is ready to assist you in creating a stunning WordPress website tailored to your business needs. Let's work together to make your vision a reality!"
                buttonText="Contact Us Now"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our WordPress development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure user-friendly, scalable, and secure WordPress websites tailored to your business needs."
                processes={wordpress_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="WordPress Development Lifecycle"
                subheading="Efficient, Scalable & User-Friendly"
                description="Our WordPress development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build WordPress websites that adapt and grow with your business."
                processes={wordpress_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "WordPress Development FAQs",
                    subheading: "Your Complete Guide to WordPress",
                    description: "Get answers to common questions about WordPress development, including security, customization, e-commerce, migration, and maintenance services."
                }}
                content={wordpress_faq}
            />
        </Structure>
    )
}

export default Page
