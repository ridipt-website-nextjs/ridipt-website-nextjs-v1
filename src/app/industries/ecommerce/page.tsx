'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { retail_challenges, retail_content, retail_services, retail_services_stack } from '@/config/content/industries/e-commerce.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';
import { retail_faq } from '@/config/content/industries/e-commerce.faq';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Retail and E-Commerce'
                subheading='Redefining Retail and E-Commerce with Technology'
                description='At Ridipt, we understand the rapidly evolving retail and e-commerce landscape. Our innovative solutions are designed to help businesses streamline operations, enhance customer experiences, and maximize revenue. Whether you operate a physical store, an online platform, or a hybrid model, we empower you with the tools to stay ahead in a competitive market.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in Retail and E-Commerce"
                subheading="Critical Issues Impacting Modern Retail"
                description="Explore the major challenges faced by retail and e-commerce businesses and their impact on operations, customer satisfaction, and profitability."
                processes={retail_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our Retail Solutions */}
            <SolutionsSection
                heading='Our Retail and E-Commerce Solutions'
                subheading='Innovative Technology for Modern Commerce'
                description='We provide comprehensive retail and e-commerce solutions designed to streamline operations, enhance customer experiences, and drive sales growth across all channels.'
                content={retail_content}
                CustomCard={(item, idx) => (
                    <Card2 item={item} key={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Retail Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Retail and E-Commerce Solutions?'
                subheading='Industry Expertise and Proven Excellence'
                description='We combine deep understanding of the retail industry with cutting-edge technology solutions. Our expertise spans across e-commerce platforms, POS systems, inventory management, omnichannel integration, and customer engagement tools tailored for retail organizations.'
                industry={retail_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for Expert"
                highlightText="Ready to Revolutionize Your Retail or E-Commerce Business?"
                subtitle="We Build Apps That Users Love and Businesses Thrive On"
                description="Contact us today to discuss how our tailored solutions can help you optimize your operations, enhance customer experiences, and achieve your business goals."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')} // Mobile related animation
            />
            {/* <MessageSection
                className='!bg-gradient-to-br !border-none hover:shadow-lg transition-all duration-300  ease-in-out from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card !mt-0'
                content={
                    <CallToActionContent
                        className=''
                        heading="Ready to Revolutionize Your Retail or E-Commerce Business?"
                        subheading="Contact us today to discuss how our tailored solutions can help you optimize your operations, enhance customer experiences, and achieve your business goals."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            /> */}

            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for the Retail and E-Commerce Sector"
                subheading="Comprehensive Retail Technology Solutions"
                description="We leverage advanced retail technologies to create exceptional shopping experiences and robust e-commerce platforms. Our tech stack includes custom e-commerce development, POS systems, inventory management, omnichannel solutions, AI-powered personalization, and secure payment processing. Every retail application is built with scalability, security, and customer experience in mind."
                techStackData={{ items: retail_services_stack }}
            />

            {/* FAQs for Retail */}
            <FAQ
                content={retail_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Retail & E-Commerce Queries",
                    description: "Find clear answers to the most common questions about our retail and e-commerce solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
