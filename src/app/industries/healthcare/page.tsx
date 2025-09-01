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
import { Card1, Card2 } from '@/components/industries/cards';
import Hero from '@/components/industries/hero';


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
