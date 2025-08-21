'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { mean_mern_services, mean_mern_stack_content, mern_business_process, mern_streamlining_development } from '@/config/content/mean-mern-stack';
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { mern_mean_faq } from '@/config/FAQs';






const page = () => {
    return (
        <Structure className='!p-0 !-top-[var(--header-height)]'>
            <div
                className='relative w-full'
            >

                <HeroSection
                    heading='MEAN/MERN Stack'
                    subheading='Your Reliable MEAN/MERN Stack Development Partner'
                    description='At Ridipt, we specialize in delivering powerful web applications built using the MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks. With expertise in crafting scalable, secure, and high-performance solutions, we help businesses achieve their digital transformation goals. Our development process focuses on innovation, user-centric designs, and seamless functionality to ensure applications that exceed expectations.'
                    content={
                        <div className='relative flex-1 overflow-hidden'>
                            <Image
                                src={require('@assets/backgrounds/we-development.jpg')}
                                alt='Web Development'
                                width={500}
                                height={500}
                                className='flex-1 shadow-lg z-20 block aspect-square h-[500px]  w-full object-cover'
                            />
                        </div>
                    }
                    className=' !mt-0 relative w-full dark:!bg-none  bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background  !flex-wrap-reverse'
                    subSection={false}
                />
            </div>

            {/* section 2 */}
            <HeroSection
                heading='Our Services'
                subheading='Innovative MEAN & MERN Stack Solutions for Modern Businesses'
                description='We provide end-to-end MEAN & MERN stack solutions including development, integration, consulting, CMS, migration, testing, API, and porting services — designed to help your business grow with scalable and future-ready applications.'
                content={mean_mern_stack_content}
                subSection={false}
            />


            {/* section 3 */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={<CallToActionContent
                    className=''
                    heading="Lead with Excellence"
                    subheading="Choose our skilled MEAN and MERN developers to turn your vision into reality. Leveraging the latest technologies and best practices, we deliver innovative solutions that keep your business at the forefront of the industry."
                    buttonText="Hire our MEAN/MERN Developers Button"
                    onButtonClick={() => alert("Button clicked!")}
                />
                }
            />

            {/* section 4 */}
            <ServiceDetailSection
                cardStyling=' '
                heading='Powering Innovation with MEAN & MERN'
                subheading='Scalable, secure, and modern solutions built with the latest web technologies.'
                description='From dynamic web apps to enterprise-grade platforms, our MEAN and MERN services deliver robust, high-performing, and future-ready solutions tailored to your business needs.'
                industry={mean_mern_services}
            />

            {/* section 5 */}
            <div
                className='bg-[linear-gradient(to_bottom,white,theme(colors.blue.50),theme(colors.violet.100),white)] dark:!bg-none dark:!bg-background w-full px-5'
            >

                <PromotionalSection
                    title="Seeking Expert"
                    highlightText="MEAN/MERN Developers?"
                    subtitle="Building Robust Applications with MEAN & MERN Expertise"
                    description="Hire our skilled MEAN/MERN developers who excel in delivering exceptional solutions by leveraging empirical methodologies and cutting-edge technologies."
                    buttonText="Hire MEAN/MERN Developers"
                    animationData={require('@assets/animations/Developer.json')}

                />
            </div>

            {/* section 6 */}
            <ProcessCardsSection
                heading="Streamlining MEAN/MERN Development"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our MEAN/MERN process covers the complete journey — from research and design to full-cycle development and continuous support. With agile methodologies, we ensure scalable, secure, and future-ready applications tailored to your business needs."
                processes={mern_streamlining_development}
                />

            {/* section 7 */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="MERN Development Lifecycle"
                subheading="Agile, Scalable & Future-Ready"
                description="Our MERN development process ensures efficiency, scalability, and long-term success. From planning and coding to deployment and ongoing support, we follow a streamlined approach to build applications that adapt and grow with your business."
                processes={mern_business_process}
            />

            <FAQ
                header={{
                    heading: "MERN Stack FAQs",
                    subheading: "Your Complete Guide to MERN Development",
                    description: "Get answers to common questions about MERN stack development, including MongoDB, Express.js, React, and Node.js technologies."
                }}
                content={mern_mean_faq}
            />
        </Structure>
    )
}

export default page