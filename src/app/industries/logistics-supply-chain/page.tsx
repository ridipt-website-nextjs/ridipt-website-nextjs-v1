'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { logistics_challenges, logistics_content, logistics_services, logistics_services_stack } from '@/config/content/industries/logistics.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { logistics_faq } from '@/config/content/industries/logistics.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Logistics & Supply Chain'
                subheading='Driving Efficiency and Innovation in Logistics & Supply Chain'
                description='At Ridipt, we deliver transformative logistics and supply chain solutions to enhance operational efficiency, optimize resource utilization, and improve visibility. With advanced technologies, we enable businesses to streamline processes, reduce costs, and achieve seamless coordination across the supply chain.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in Logistics & Supply Chain"
                subheading="Critical Issues Impacting Supply Chain Operations"
                description="Explore the major challenges faced by logistics and supply chain businesses and their impact on operational efficiency, cost optimization, and customer satisfaction."
                processes={logistics_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our Logistics Solutions */}
            <SolutionsSection
                heading='Our Logistics & Supply Chain Solutions'
                subheading='Innovative Technology for Optimized Operations'
                description='We provide comprehensive logistics and supply chain solutions designed to streamline operations, enhance visibility, and drive efficiency across the entire supply chain ecosystem.'
                CustomCard={(item, idx) => (
                    <Card2 item={item} key={idx} />
                )}
                content={logistics_content}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Logistics Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Logistics & Supply Chain Solutions?'
                subheading='Domain Expertise and Proven Excellence'
                description='We combine deep understanding of logistics and supply chain operations with cutting-edge technology solutions. Our expertise spans across transportation management, warehouse optimization, supply chain visibility, and sustainability solutions tailored for modern supply chain organizations.'
                industry={logistics_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for Expert"
                highlightText="Ready to Revolutionize Your Supply Chain?"
                subtitle="We Build Logistics Solutions That Drive Efficiency and Innovation"
                description="Contact us today to explore how our solutions can optimize your logistics and supply chain operations. Let Ridipt help you achieve new levels of efficiency and innovation."
                buttonText="Get a Quote"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for the Logistics & Supply Chain Sector"
                subheading="Comprehensive Supply Chain Technology Solutions"
                description="We leverage advanced logistics technologies to create exceptional operational efficiency and supply chain optimization. Our tech stack includes transportation management systems, warehouse management solutions, supply chain visibility platforms, IoT integration, and sustainability tools. Every logistics application is built with scalability, real-time tracking, and operational excellence in mind."
                techStackData={{ items: logistics_services_stack }}
            />

            {/* FAQs for Logistics */}
            <FAQ
                content={logistics_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Logistics & Supply Chain Queries",
                    description: "Find clear answers to the most common questions about our logistics and supply chain solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
