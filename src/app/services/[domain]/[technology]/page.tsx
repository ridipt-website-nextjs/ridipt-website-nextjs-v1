'use client'

import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import { TechServices as ServiceSection } from '@/components/ui/sticky-scroll-reveal';
import MessageSection from '@/components/message-section';
import Image from 'next/image';
import { BusinessProcessSection, CallToActionContent, ProcessCardsSection, PromotionalSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import FAQ from '@/components/faq-section';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import technologyData from '@/config/content/services/technologies';

const TechnologyPage = () => {
    const { technology: id } = useParams();
    const router = useRouter();
    const data = technologyData[id as keyof typeof technologyData];

    // Handle technology not found
    if (!data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Technology Not Found</h1>
                    <p className="text-muted-foreground mb-6">The technology page you're looking for doesn't exist.</p>
                    <Button onClick={() => router.back()} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                </div>
            </Structure>
        );
    }

    return (
        <Structure className='!p-0'>
            {/* Hero Section */}
            <HeroSection
                heading={data.heroSection.heading}
                subheading={data.heroSection.subheading}
                description={data.heroSection.description}
                content={
                    <div className='relative flex-1 hidden md:flex overflow-hidden'>
                        <Image
                            src={data.heroSection.image}
                            alt={data.heroSection.imageAlt}
                            width={500}
                            height={500}
                            className='flex-1 shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className={`!max-w-none w-full ${data.heroSection.className}`}
                subSection={false}
            />

            {/* Services Section */}
            <ServiceSection
                heading={data.servicesSection.heading}
                subheading={data.servicesSection.subheading}
                description={data.servicesSection.description}
                content={data.servicesSection.content}
                subSection={data.servicesSection.subSection}
                className={data.servicesSection.className}
            />

            {/* Call to Action Section */}
            <MessageSection
                className={` !my-0 ${data.ctaSection.className}`}
                content={
                    <CallToActionContent
                        className='!my-0'
                        heading={data.ctaSection.heading}
                        subheading={data.ctaSection.subheading}
                        buttonText={data.ctaSection.buttonText}
                        onButtonClick={() => router.push('/get-in-touch')}
                    />
                }
            />

            {/* Service Detail Section */}
            <ServiceDetailSection
                cardStyling={`hover:bg-accent-foreground/5 ${data.serviceDetailSection.cardStyling}`}
                heading={data.serviceDetailSection.heading}
                subheading={data.serviceDetailSection.subheading}
                description={data.serviceDetailSection.description}
                industry={data.serviceDetailSection.industry}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title={data.promotionalSection.title}
                highlightText={data.promotionalSection.highlightText}
                subtitle={data.promotionalSection.subtitle}
                description={data.promotionalSection.description}
                buttonText={data.promotionalSection.buttonText}
                onClick={() => router.push('/get-in-touch')}
                animationData={data.promotionalSection.animationData}
            />

            {/* Process Cards Section */}
            <ProcessCardsSection
                heading={data.processCardsSection.heading}
                subheading={data.processCardsSection.subheading}
                description={data.processCardsSection.description}
                processes={data.processCardsSection.processes}
                className={data.processCardsSection.className}
            />

            {/* Business Process Section */}
            <BusinessProcessSection
                heading={data.businessProcessSection.heading}
                subheading={data.businessProcessSection.subheading}
                description={data.businessProcessSection.description}
                processes={data.businessProcessSection.processes}
                className={data.businessProcessSection.className}
            />

            {/* FAQ Section */}
            <FAQ
                header={data.faqSection.header}
                content={data.faqSection.content}
            />
        </Structure>
    );
};

export default TechnologyPage;
