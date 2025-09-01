'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import { restaurant_challenges, restaurant_content, restaurant_services, restaurant_services_stack } from '@/config/content/industries/restaurant.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { restaurant_faq } from '@/config/content/industries/restaurant.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Restaurant & Food Industry'
                subheading='Revolutionizing Food & Delivery Services Through Technology'
                description={`At Ridipt, we empower restaurants, food delivery platforms, grocery services, and dairy businesses with cutting-edge technology to streamline operations and meet modern consumer demands. Whether you're a restaurant owner, an online grocery provider, or a milk delivery startup, our custom solutions enhance efficiency, boost customer satisfaction, and help you stay ahead in a competitive market.`}
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in the Food & Delivery Industry"
                subheading="Critical Issues Impacting Food Services"
                description="Explore the major challenges faced by restaurants, food delivery, and grocery businesses and their impact on operations, customer satisfaction, and profitability."
                processes={restaurant_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our Restaurant Solutions */}
            <SolutionsSection
                heading='Our Food & Delivery Industry Solutions'
                subheading='Innovative Technology for Modern Food Services'
                description='We provide comprehensive food industry solutions designed to streamline restaurant operations, optimize delivery logistics, and enhance customer experiences across the entire food ecosystem.'
                content={restaurant_content}
                CustomCard={(item, idx) => (
                    <Card2 variant="premium" item={item} key={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Food Industry Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Food Industry Solutions?'
                subheading='End-to-End Expertise and Proven Excellence'
                description='We combine deep understanding of the food and delivery industry with cutting-edge technology solutions. Our expertise spans across restaurant management, food delivery platforms like Zomato/Swiggy, grocery delivery solutions like Blinkit/Instamart, and subscription-based services tailored for food businesses.'
                industry={restaurant_services}
            />

            {/* Call to Action */}
            <PromotionalSection
                title="Looking for Food Tech Experts?"
                highlightText="Ready to Transform Your Food Business?"
                subtitle="We Build Food Industry Apps That Delight Customers and Boost Growth"
                description="Let Ridipt help you build the next big thing in the food industry. Contact us today to explore how we can deliver tailored solutions for your restaurant, grocery, or delivery service."
                buttonText="Contact Now"
                animationData={require('@assets/animations/Developer.json')}
            />


            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for Food Industry Solutions"
                subheading="Comprehensive Food & Delivery Technology Solutions"
                description="We leverage advanced food industry technologies to create exceptional dining and delivery experiences. Our tech stack includes restaurant management systems, food delivery platforms like Zomato/Swiggy, grocery delivery solutions like Blinkit/Instamart, subscription-based dairy delivery, POS systems, and real-time tracking solutions. Every food application is built with scalability, reliability, and customer satisfaction in mind."
                techStackData={{ items: restaurant_services_stack }}
            />

            {/* FAQs for Restaurant */}
            <FAQ
                content={restaurant_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Food Industry Queries",
                    description: "Find clear answers to the most common questions about our restaurant, food delivery, and grocery solutions. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
