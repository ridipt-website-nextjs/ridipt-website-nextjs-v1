'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { static_website_services, static_website_stack_content, static_website_business_process, static_website_streamlining_development } from '@/config/content/html-css-js'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { static_website_faq } from '@/config/FAQs';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Static Website Development'
                subheading='Your Trusted Partner for Static Website Development'
                description='At Ridipt, we specialize in crafting elegant and high-performing static websites using HTML5, CSS3, and JavaScript. Our solutions are designed to provide a seamless user experience, ensuring that your online presence is not only visually appealing but also functionally robust. With a focus on responsiveness and speed, we empower businesses to effectively communicate their message to the world.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Static Website Development'
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
                heading='Our Static Website Development Services'
                subheading='Transform Your Vision into Reality'
                description='We provide comprehensive static website solutions including custom design, responsive development, SEO optimization, performance enhancement, and ongoing support — designed to help your business establish a strong and effective online presence.'
                content={static_website_stack_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Unmatched Expertise in Static Website Solutions"
                        subheading="Partner with Ridipt to bring your static website vision to life. Our experienced team is dedicated to delivering high-quality, responsive websites tailored to your unique needs, ensuring a strong online presence."
                        buttonText="Get Started Today"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Benefits of Static Websites'
                subheading='Streamlined Performance for Enhanced User Experience'
                description='Static websites offer superior speed, security, and cost-effectiveness. From reduced server load to enhanced stability, our static website solutions provide the perfect foundation for your business success.'
                industry={static_website_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Ready to Get Started?"
                highlightText="Launch Your Static Website Today!"
                subtitle="Get Your Static Website Built by Experts"
                description="Our team is ready to assist you in creating a stunning static website tailored to your business needs. Let's work together to make your vision a reality!"
                buttonText="Contact Us Now"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our static website development process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure fast, secure, and user-friendly websites tailored to your business needs."
                processes={static_website_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Static Website Development Lifecycle"
                subheading="Efficient, Secure & Cost-Effective"
                description="Our static website development process ensures efficiency, security, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build websites that deliver exceptional performance."
                processes={static_website_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Static Website Development FAQs",
                    subheading: "Your Complete Guide to Static Websites",
                    description: "Get answers to common questions about static website development, including benefits, timelines, hosting, and maintenance."
                }}
                content={static_website_faq}
            />
        </Structure>
    )
}

export default Page
