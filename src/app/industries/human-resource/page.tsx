'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { hr_challenges, hr_content, hr_services, hr_services_stack } from '@/config/content/industries/human-resource.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { hr_faq } from '@/config/content/industries/human-resource.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Human Resource Management'
                subheading='Revolutionizing Human Resource Management Through Technology'
                description='At Ridipt, we empower businesses with innovative human resource solutions that simplify workforce management, improve employee engagement, and streamline HR operations. With our expertise, we help organizations focus on building stronger teams and achieving their goals through advanced HR technology solutions.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in Human Resource Management"
                subheading="Critical Issues Impacting Modern HR Operations"
                description="Explore the major challenges faced by HR departments and their impact on workforce management, employee satisfaction, and organizational productivity."
                processes={hr_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our HR Solutions */}
            <SolutionsSection
                heading='Our Human Resource Solutions'
                subheading='Innovative Technology for Modern Workforce Management'
                description='We provide comprehensive HR solutions designed to streamline recruitment, enhance employee engagement, optimize performance management, and ensure regulatory compliance across the entire employee lifecycle.'
                content={hr_content}
                CustomCard={(item, idx) => (
                    <Card2 item={item} key={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for HR Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for HR Solutions?'
                subheading='Industry Expertise and Proven Excellence'
                description='We combine deep understanding of human resource management with cutting-edge technology solutions. Our expertise spans across HRMS systems, recruitment platforms, performance management, payroll automation, and compliance-ready systems tailored for modern organizations.'
                industry={hr_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for HR Tech Experts?"
                highlightText="Ready to Optimize Your HR Operations?"
                subtitle="We Build HR Solutions That Empower Businesses and Teams"
                description="Contact us today to discuss your HR challenges and discover how our tailored solutions can help you build a thriving workforce."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')}
            />


            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for HR Solutions"
                subheading="Comprehensive Human Resource Technology Solutions"
                description="We leverage advanced HR technologies to create exceptional employee experiences and streamlined operations. Our tech stack includes HRMS systems, AI-powered recruitment tools, performance management platforms, payroll automation, learning management systems, and compliance frameworks. Every HR application is built with scalability, security, and user experience in mind."
                techStackData={{ items: hr_services_stack }}
            />

            {/* FAQs for HR */}
            <FAQ
                content={hr_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common HR Technology Queries",
                    description: "Find clear answers to the most common questions about our HR solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
