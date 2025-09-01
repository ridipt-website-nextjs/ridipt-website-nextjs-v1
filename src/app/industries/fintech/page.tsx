'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { fintech_challenges, fintech_content, fintech_services, fintech_services_stack } from '@/config/content/industries/fintech.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { fintech_faq } from '@/config/content/industries/fintech.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='FinTech'
                subheading='Revolutionizing Financial Services with Technology'
                description='At Ridipt, we understand the ever-changing landscape of the financial sector. Our innovative FinTech solutions empower businesses to modernize operations, improve customer experiences, and achieve regulatory compliance. From startups to established financial institutions, we provide cutting-edge tools to drive digital transformation and create smarter financial ecosystems.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in the FinTech Industry"
                subheading="Critical Issues Impacting Financial Services"
                description="Explore the major challenges faced by financial institutions and their impact on operations, customer experience, and regulatory compliance."
                processes={fintech_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our FinTech Solutions */}
            <SolutionsSection
                heading='Our FinTech Solutions'
                subheading='Innovative Technology for Modern Finance'
                description='We provide comprehensive FinTech solutions designed to modernize financial services, enhance customer experiences, and ensure regulatory compliance across the financial ecosystem.'
                content={fintech_content}
                CustomCard={(item, idx) => (
                    <Card2 item={item} key={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for FinTech Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for FinTech Solutions?'
                subheading='Domain Expertise and Proven Excellence'
                description='We combine deep understanding of the financial industry with cutting-edge technology solutions. Our expertise spans across digital banking, payment systems, blockchain applications, and compliance-ready systems tailored for financial organizations.'
                industry={fintech_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for FinTech Experts?"
                highlightText="Ready to Transform Your Financial Business?"
                subtitle="We Build FinTech Apps That Drive Growth and Enhance Customer Trust"
                description="Contact us today to discuss how our FinTech solutions can help you overcome challenges, enhance customer experiences, and drive growth in the competitive financial sector."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')} // aap chaho to FinTech related animation laga sakte ho
            />


            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for the FinTech Sector"
                subheading="Comprehensive Financial Technology Solutions"
                description="We leverage advanced financial technologies to create exceptional user experiences and robust financial services. Our tech stack includes secure payment gateways, blockchain platforms, AI-powered analytics, digital banking systems, and regulatory compliance frameworks. Every FinTech application is built with security, scalability, and compliance in mind."
                techStackData={{ items: fintech_services_stack }}
            />

            {/* FAQs for FinTech */}
            <FAQ
                content={fintech_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common FinTech Queries",
                    description: "Find clear answers to the most common questions about our FinTech solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
