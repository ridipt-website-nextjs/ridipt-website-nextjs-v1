'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { custom_software_challenges, custom_software_content, custom_software_services, custom_software_services_stack } from '@/config/content/industries/custom-solution.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { custom_software_faq } from '@/config/content/industries/custom-solution.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Custom Software Solutions'
                subheading='Transform Your Vision Into Reality with Custom Software Solutions'
                description='At Ridipt, we specialize in crafting tailored software solutions designed to meet the unique needs of your business. Our expertise lies in understanding your challenges, leveraging the latest technologies, and delivering solutions that drive efficiency, innovation, and growth.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges Addressed by Custom Software Solutions"
                subheading="Critical Business Issues Requiring Tailored Solutions"
                description="Explore the major challenges that off-the-shelf software cannot address and discover how our custom solutions overcome these business hurdles."
                processes={custom_software_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} index={index} />
                )}
            />

            {/* Our Custom Software Solutions */}
            <SolutionsSection
                heading='Our Custom Software Solutions'
                subheading='Innovative Technology for Unique Business Needs'
                description='We provide comprehensive custom software development services designed to address unique business challenges, streamline operations, and drive digital transformation across various industries.'
                CustomCard={(item, idx) => (
                    <Card2 item={item} idx={idx} />
                )}
                content={custom_software_content}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Custom Software Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Custom Software Development?'
                subheading='Client-Centric Approach and Proven Excellence'
                description='We combine deep understanding of business processes with cutting-edge technology expertise. Our approach spans across tailored solutions, agile development methodologies, seamless integration capabilities, and ongoing support tailored for modern organizations.'
                industry={custom_software_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for Expert"
                highlightText="Ready to Build Your Custom Software Solution?"
                subtitle="We Build Software That Drives Business Growth and Innovation"
                description="Contact us today to discuss your unique requirements and let us help you bring your vision to life with innovative and scalable solutions."
                buttonText="Get a Quote"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for Custom Software Solutions"
                subheading="Comprehensive Custom Development Technology Solutions"
                description="We leverage advanced software development technologies to create exceptional custom applications and systems. Our tech stack includes modern web and mobile frameworks, enterprise solutions, AI/ML integration, cloud computing, and blockchain technologies. Every custom software solution is built with scalability, security, and performance in mind."
                techStackData={{ items: custom_software_services_stack }}
            />

            {/* FAQs for Custom Software */}
            <FAQ
                content={custom_software_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Custom Software Development Queries",
                    description: "Find clear answers to the most common questions about our custom software development process, technologies, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
