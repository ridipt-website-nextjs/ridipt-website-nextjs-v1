'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import Image from 'next/image';

import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { education_challenges, education_content, education_services, education_services_stack } from '@/config/content/industries/education.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { education_faq } from '@/config/content/industries/education.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Education'
                subheading='Transforming Education Through Innovation'
                description='At Ridipt, we recognize the evolving challenges in the education sector. From modernizing learning experiences to streamlining administrative processes, our technology-driven solutions empower educational institutions to deliver better learning outcomes. Our expertise ensures a seamless integration of technology with your education goals.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in Education"
                subheading="Critical Issues Impacting the Education Sector"
                description="Explore the major challenges faced by educational institutions and their impact on learning outcomes, administration, and overall educational excellence."
                processes={education_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} index={index} />
                )}
            />

            {/* Our Education Solutions */}
            <SolutionsSection
                heading='Our Education Solutions'
                subheading='Innovative Technology for Better Learning'
                description='We provide comprehensive education technology solutions designed to enhance learning experiences, streamline administrative processes, and foster collaboration across the educational ecosystem.'
                CustomCard={(item, idx) => (
                    <Card2 item={item} idx={idx} />
                )}
                content={education_content}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Education Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Education Solutions?'
                subheading='Domain Expertise and Proven Excellence'
                description='We combine deep understanding of the education industry with cutting-edge technology solutions. Our expertise spans across learning management systems, student information systems, mobile learning applications, and compliance-ready systems tailored for educational organizations.'
                industry={education_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for Expert"
                highlightText="Ready to Revolutionize Your Retail or E-Commerce Business?"
                subtitle="We Build Apps That Users Love and Businesses Thrive On"
                description="Contact us today to discuss how our tailored solutions can help you optimize your operations, enhance customer experiences, and achieve your business goals."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')}
            />


            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for the Education Sector"
                subheading="Comprehensive Educational Technology Solutions"
                description="We leverage advanced educational technologies to create exceptional learning experiences. Our tech stack includes modern learning management systems, student information systems, mobile learning platforms, AI-powered tutoring solutions, and robust security frameworks. Every educational application is built with scalability, accessibility, and compliance in mind."
                techStackData={{ items: education_services_stack }}
            />

            {/* FAQs for Education */}
            <FAQ
                content={education_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Education Technology Queries",
                    description: "Find clear answers to the most common questions about our education solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page



