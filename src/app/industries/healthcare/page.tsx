'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import Image from 'next/image';
import Header from '@/components/section-heading';
import Section from '@/components/section-structure';
import { Button } from '@/components/ui/button';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { healthcare_challenges, healthcare_content, healthcare_services, healthcare_services_stack } from '@/config/content/industries/healthcare/healthcare';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { healthcare_faq } from '@/config/content/industries/healthcare/health.faq';
import { Card2 } from '@/components/industries/cards';


const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Healthcare'
                subheading='Transforming Healthcare Through Technology'
                description=' At Ridipt, we understand the unique challenges faced by the healthcare industry. Our innovative solutions leverage the latest technologies to enhance patient care, streamline operations, and improve overall healthcare delivery. With our expertise, we empower healthcare providers to focus on what they do best: delivering exceptional patient care.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Healthcare Challenges"
                subheading="Critical Issues Impacting the Industry"
                description="Explore the major challenges faced by the healthcare sector and their impact on patient care, operations, and overall efficiency."
                processes={healthcare_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} index={index} />
                )}
            />

            {/* Our Healthcare Solutions */}
            <SolutionsSection
                heading='Our Healthcare Solutions'
                subheading='Innovative Technology for Better Healthcare'
                description='We provide healthcare technology solutions designed to improve patient care, streamline operations, and enhance collaboration across the healthcare ecosystem.'
                content={healthcare_content}
                CustomCard={(item, idx) => (
                    <Card2 item={item} idx={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Healthcare Solutions */}
            {/* Our Healthcare Tech Stack */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Our Healthcare Tech Stack'
                subheading='Powering Healthcare with Cutting-Edge Technologies'
                description='We build scalable and secure healthcare solutions using modern technologies that ensure seamless integration, high performance, and compliance with industry standards. Our expertise spans across EHR/EMR platforms, interoperability frameworks, cloud infrastructure, mobile health applications, and compliance-ready systems tailored for healthcare organizations.'
                industry={healthcare_services}
            />


            <PromotionalSection
                title="Looking for Healthcare Tech Experts?"
                highlightText="Ready to Transform Your Healthcare Organization?"
                subtitle="We Build Healthcare Apps That Empower Organizations and Improve Patient Care"
                description="Contact us today to discuss how our tailored healthcare solutions can help you meet your goals and improve patient care. Our dedicated team is here to assist you on your journey to success."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')}
            />



            {/* Section 6th*/}
            <TechStackSection
                heading="Our Mobile Development Tech-Stack"
                subheading="Cutting-Edge Technologies for Superior Mobile Apps"
                description="We leverage the most advanced mobile development technologies to create exceptional user experiences. Our tech stack includes native development with Swift and Kotlin, cross-platform frameworks like React Native and Flutter, robust backend solutions, and modern deployment tools. Every mobile application is built with scalability, security, and performance in mind."
                techStackData={{ items: healthcare_services_stack }}
            />

            {/* FAQs for healthcare */}
            <FAQ
                content={healthcare_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Healthcare Queries",
                    description: "Find clear answers to the most common questions about our healthcare solutions, technology stack, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />


        </Structure>
    )
}

export default page

const Hero = ({
    heading,
    subheading,
    description,
    className,
    imageBorderColor,
    imageURL
}: {
    heading: string;
    subheading: string;
    description: string;
    className?: string;
    imageBorderColor?: {
        first: string;
        second: string
    };
    imageURL?: string
}) => {
    return <Section
        className={`relative  !pt-0 !mt-0 !py-5 !pb-10  max-w-none ${className}`}
    >
        <div className='flex flex-wrap-reverse !justify-start items-end !container px-3 !flex-row !gap-30'>

            <div className='flex-1 relative pt-10 pl-8 basis-[500px] min-w-0'>

                <Header
                    heading={heading}
                    subheading={subheading}
                    headingStyle='shadow'
                    descriptionComponent={
                        <div className="flex-1 ">
                            <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                {description}
                            </p>
                            <Button
                                className='items-start mt-6 py-2 px-5 h-auto text-center  transition-all ease-in-out capitalize rounded-2xl duration-300 whitespace-nowrap shadow  bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-border border border-primary '
                            >get quote</Button>
                            <div
                                className='absolute left-2 shadow top-22 !-bottom-2 w-2 dark:bg-secondary bg-accent-foreground/50'
                            />
                        </div>
                    }
                    className="items-start !max-w-none text-left "
                />
            </div>
            <div className='flex-2 basis-[500px] min-w-0 h-auto w-auto overflow-hidden p-10 md:p-15 px-10'>
                <div
                    className='relative z-[2] mx-10'
                >
                    <div
                        className={`absolute inset-0 dark:bg-card translate-8 translate-x-10 ${imageBorderColor?.first || 'bg-accent-foreground/50'} -z-[1]`}
                    />
                    <div
                        className={`absolute inset-0 -right-5.5 dark:bg-popover/50 translate-15 -translate-x-10 ${imageBorderColor?.second || 'bg-accent-foreground/20'} -z-[2]`}
                    />
                    <Image
                        src={imageURL || require('@assets/backgrounds/bg1.jpg')}
                        alt='UI/UX Design Services'
                        width={500}
                        height={500}
                        className='shadow-lg z-20 block aspect-square h-[500px] md:h-[400px] w-full object-cover'
                    />
                </div>
            </div>
        </div>

    </Section>
}

const Card1 = ({ index, item }: {
    item: any, index: number
}) => {
    return <article
        key={index}
        className={`group flex flex-1 border border-border transition-all duration-300 ease-in-out hover:shadow-lg p-6 rounded-lg flex-col gap-4 bg-white dark:bg-card hover:border-${item.colors.primary}-300 h-full min-h-[320px]`}
    >
        {/* Simple icon */}
        <div className={`w-12 h-12 ${item.colors.bg} rounded-lg flex items-center justify-center`}>
            <Image
                src={item.image}
                alt={item.title}
                height={20}
                width={20}
                className={`${item.colors.icon}`}
            />
        </div>

        {/* Content */}
        <div className='flex flex-col gap-3 flex-grow'>
            <h5 className={`text-lg font-semibold ${item.colors.text}`}>
                {item.title}
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
            </p>
        </div>

        {/* Simple bottom accent */}
        <div className={`w-full h-1 ${item.colors.gradient} bg-gradient-to-r rounded-full`}></div>
    </article>
}