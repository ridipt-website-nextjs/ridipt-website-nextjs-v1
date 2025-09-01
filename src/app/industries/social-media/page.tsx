'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import MessageSection from '@/components/message-section';
import { CallToActionContent, ProcessCardsSection, TechStackSection } from '@/components/services';
import { social_media_challenges, social_media_content, social_media_services, social_media_services_stack } from '@/config/content/industries/social-media.content';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import { social_media_faq } from '@/config/content/industries/social-media.faq';
import Hero from '@/components/industries/hero';
import { Card1, Card2 } from '@/components/industries/cards';

const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading='Social Media Solutions'
                subheading='Empowering Social Connections Through Technology'
                description='At Ridipt, we design and develop cutting-edge solutions for social media platforms that inspire meaningful interactions, boost engagement, and create unforgettable user experiences. Our expertise enables businesses and brands to connect with their audiences on a deeper level through innovative social technologies.'
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading="Key Challenges in Social Media"
                subheading="Critical Issues Impacting Social Platforms"
                description="Explore the major challenges faced by social media platforms and their impact on user engagement, platform security, and business sustainability."
                processes={social_media_challenges}
                customCard={(item, index) => (
                    <Card1 item={item} key={index} />
                )}
            />

            {/* Our Social Media Solutions */}
            <SolutionsSection
                heading='Our Social Media Solutions'
                subheading='Innovative Technology for Connected Communities'
                description='We provide comprehensive social media solutions designed to create engaging platforms, facilitate meaningful connections, and drive user growth across diverse communities and audiences.'
                content={social_media_content}
                CustomCard={(item, idx) => (
                    <Card2 item={item} key={idx} />
                )}
                subSection={false}
                className=''
            />

            {/* Why Choose Ridipt for Social Media Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Social Media Solutions?'
                subheading='Comprehensive Expertise and Proven Excellence'
                description='We combine deep understanding of social media dynamics with cutting-edge technology solutions. Our expertise spans across custom social networking platforms, content creation tools, AI-powered analytics, monetization solutions, and security frameworks tailored for social media environments.'
                industry={social_media_services}
            />

            {/* Call to Action */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card !mt-0'
                content={
                    <CallToActionContent
                        className=''
                        heading="Ready to Revolutionize Social Media?"
                        subheading="Contact us today to discuss your vision, and let us help you create a transformative social media platform tailored to your goals."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Tech Stack Section */}
            <TechStackSection
                heading="Key Offerings for Social Media Solutions"
                subheading="Comprehensive Social Media Technology Solutions"
                description="We leverage advanced social media technologies to create exceptional user experiences and engaging platforms. Our tech stack includes custom social networking development, AI-powered analytics, real-time communication, content moderation systems, monetization tools, and security frameworks. Every social media application is built with scalability, engagement, and user safety in mind."
                techStackData={{ items: social_media_services_stack }}
            />

            {/* FAQs for Social Media */}
            <FAQ
                content={social_media_faq}
                header={{
                    heading: "Frequently Asked Questions",
                    subheading: "Answers to Common Social Media Development Queries",
                    description: "Find clear answers to the most common questions about our social media solutions, technology implementation, and services. If you need more details, our team is here to help.",
                    className: ""
                }}
            />
        </Structure>
    )
}

export default page
