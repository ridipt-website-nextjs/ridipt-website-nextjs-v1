'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { blockchain_services, blockchain_content, blockchain_business_process, blockchain_streamlining_development } from '@/config/content/emerging technology/blockchain.content'
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { blockchain_faq } from '@/config/content/emerging technology/blockchain.faq';

const Page = () => {
    return (
        <Structure className=''>
            {/* Hero Section */}
            <HeroSection
                heading='Blockchain Development Services'
                subheading='Empower Your Business with Blockchain Innovation'
                description='Transform your operations with state-of-the-art blockchain solutions. Leverage our expertise to unlock the potential of decentralization, enhancing security and transparency in your business processes. Our customized blockchain services empower businesses across industries to streamline operations, improve efficiency, and drive new opportunities through innovative, decentralized technologies.'
                content={
                    <div className='relative flex-1 overflow-hidden'>
                        <Image
                            src={require('@assets/backgrounds/we-development.jpg')}
                            alt='Blockchain Development Services'
                            width={500}
                            height={500}
                            className='flex-1 shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className='!mt-0 relative w-full dark:!bg-none bg-gradient-to-b from-amber-50 via-green-50 to-white-50 pb-20 dark:bg-background !flex-wrap-reverse'
                subSection={false}
            />

            {/* Services Section */}
            <ServiceSection
                heading='Our Blockchain Solutions'
                subheading='Driving Success with Advanced Blockchain Practices'
                description='Our blockchain consulting services are tailored to align with your business goals. From smart contracts to decentralized applications, we deliver intelligent solutions that enhance operations and secure transactions. Explore the potential of blockchain to create secure, transparent systems that empower your enterprise to stay competitive and relevant in the evolving tech landscape.'
                content={blockchain_content}
                subSection={false}
                className=''
            />

            {/* Call to Action Section */}
            <MessageSection
                className='!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card'
                content={
                    <CallToActionContent
                        className=''
                        heading="Looking for Exceptional Blockchain Solutions?"
                        subheading="Transform your business operations with our expert blockchain team, delivering streamlined workflows and innovative technologies tailored to your goals."
                        buttonText="Contact Now"
                        onButtonClick={() => alert("Button clicked!")}
                    />
                }
            />

            {/* Why Choose Ridipt */}
            <ServiceDetailSection
                cardStyling=''
                heading='Our Blockchain Tech Stack'
                subheading='Innovating with Blockchain to Build Scalable Solutions'
                description='We deliver robust, future-ready blockchain solutions designed to align with your enterprise needs, enabling smooth integration and optimized performance. Leverage our expertise in modern blockchain technologies, including Ethereum, Hyperledger, and smart contracts, to transform your IT infrastructure.'
                industry={blockchain_services}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title="Seeking Expert"
                highlightText="Blockchain Professionals?"
                subtitle="Building Secure and Decentralized Solutions"
                description="Hire our skilled blockchain developers, equipped to deliver exceptional solutions using advanced tools and cutting-edge methodologies to drive your business forward."
                buttonText="Hire Blockchain Experts"
                animationData={require('@assets/animations/Developer.json')}
            />

            {/* Development Process Section */}
            <ProcessCardsSection
                heading="Streamlining the Development Journey"
                subheading="From Research to Scalable Growth"
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.red.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                description="Our blockchain development process covers the complete journey — from architecture design and smart contract development to deployment and continuous support. With agile methodologies, we ensure secure, scalable, and high-performance blockchain solutions tailored to your business needs."
                processes={blockchain_streamlining_development}
            />

            {/* Business Lifecycle Section */}
            <BusinessProcessSection
                className='p-4 bg-[radial-gradient(circle,white,theme(colors.cyan.50),theme(colors.white),white)] dark:!bg-none dark:!bg-background'
                heading="Blockchain Development Lifecycle"
                subheading="Agile, Secure & Future-Ready"
                description="Our blockchain development process ensures security, scalability, and long-term success. From planning and smart contract development to deployment and ongoing support, we follow a streamlined approach to build blockchain solutions that adapt and evolve with your business."
                processes={blockchain_business_process}
            />

            {/* FAQ Section */}
            <FAQ
                header={{
                    heading: "Blockchain Development FAQs",
                    subheading: "Your Complete Guide to Blockchain Solutions",
                    description: "Get answers to common questions about blockchain development, including smart contracts, dApp development, security auditing, cryptocurrency solutions, costs, and ongoing support services."
                }}
                content={blockchain_faq}
            />
        </Structure>
    )
}

export default Page
