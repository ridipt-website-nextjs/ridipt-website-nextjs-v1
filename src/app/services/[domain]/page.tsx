'use client'
import servicesData from '@/config/content/services';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import Structure from '@/components/common/page-structure';
import FAQ from '@/components/faq-section';
import Services from '@/components/portfolio-highlights-section';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import ServiceDetailSection from '@/components/industry-section';
import MessageSection from '@/components/message-section';
import {
    BusinessProcessSection,
    CallToActionContent,
    ProcessCardsSection,
    PromotionalSection,
    TechStackSection
} from '@/components/services/';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ServicePage = () => {
    const { domain: id } = useParams();
    const router = useRouter();
    const data = servicesData[id as keyof typeof servicesData];

    // Handle service not found
    if (!data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Service Not Found</h1>
                    <p className="text-muted-foreground mb-6">The service page you're looking for doesn't exist.</p>
                    <Button onClick={() => router.back()} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                </div>
            </Structure>
        );
    }

    return (
        <Structure className='!p-0 !-top-[var(--header-height)]'>
            {/* Hero Section */}
            <HeroSection
                heading={data.heroSection.heading}
                subheading={data.heroSection.subheading}
                description={data.heroSection.description}
                content={
                    <div className='relative overflow-hidden'>
                        <Image
                            src={data.heroSection.image}
                            alt={data.heroSection.imageAlt}
                            width={500}
                            height={500}
                            className='shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                        />
                    </div>
                }
                className='!mt-0 w-full !flex-wrap-reverse'
                subSection={false}
            />

            {/* Services Section */}
            <Services
                heading={data.servicesSection.heading}
                subheading={data.servicesSection.subheading}
                description={data.servicesSection.description}
                content={data.servicesSection.content}
                CustomCard={data.servicesSection.customCard}
                className={data.servicesSection.className}
            />

            {/* Service Detail Section */}
            <ServiceDetailSection
                heading={data.serviceDetailSection.heading}
                subheading={data.serviceDetailSection.subheading}
                description={data.serviceDetailSection.description}
                industry={data.serviceDetailSection.industry}
            />

            {/* Call to Action Section */}
            <MessageSection
                className={data.ctaSection.className}
                content={
                    <CallToActionContent
                        heading={data.ctaSection.heading}
                        subheading={data.ctaSection.subheading}
                        buttonText={data.ctaSection.buttonText}
                        onButtonClick={() => alert("CTA button clicked!")}
                    />
                }
            />

            {/* Tech Stack Section */}
            <TechStackSection
                heading={data.techStackSection.heading}
                subheading={data.techStackSection.subheading}
                description={data.techStackSection.description}
                techStackData={data.techStackSection.techStackData}
            />

            {/* Promotional Section */}
            <PromotionalSection
                title={data.promotionalSection.title}
                highlightText={data.promotionalSection.highlightText}
                subtitle={data.promotionalSection.subtitle}
                description={data.promotionalSection.description}
                buttonText={data.promotionalSection.buttonText}
                animationData={data.promotionalSection.animationData}
            />

            {/* Process Cards Section */}
            <ProcessCardsSection
                heading={data.processCardsSection.heading}
                subheading={data.processCardsSection.subheading}
                description={data.processCardsSection.description}
                processes={data.processCardsSection.processes}
            />

            {/* Business Process Section */}
            <BusinessProcessSection
                heading={data.businessProcessSection.heading}
                subheading={data.businessProcessSection.subheading}
                description={data.businessProcessSection.description}
                processes={data.businessProcessSection.processes}
            />

            {/* FAQ Section */}
            {data.faqSection.content && (
                <FAQ content={data.faqSection.content} />
            )}
        </Structure>
    );
};

export default ServicePage;
