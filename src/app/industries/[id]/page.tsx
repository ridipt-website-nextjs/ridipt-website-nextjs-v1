'use client'
import industriesData from '@/config/content/industries';
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import Structure from '@/components/common/page-structure';
import { ProcessCardsSection, PromotionalSection, TechStackSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import { TechServices as SolutionsSection } from '@/components/ui/sticky-scroll-reveal';
import FAQ from '@/components/faq-section';
import Hero from '@/components/industries/hero';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const IndustryPage = () => {
    const { id } = useParams();
    const router = useRouter();
    const data = industriesData[id as keyof typeof industriesData];

    // Handle industry not found
    if (!data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Industry Not Found</h1>
                    <p className="text-muted-foreground mb-6">The industry page you're looking for doesn't exist.</p>
                    <Button onClick={() => router.back()} className='text-accent-foreground' variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                </div>
            </Structure>
        );
    }

    return (
        <Structure>
            {/* Hero Section */}
            <Hero
                heading={data.heroSection.heading}
                subheading={data.heroSection.subheading}
                description={data.heroSection.description}
            />

            {/* Key Challenges Section */}
            <ProcessCardsSection
                heading={data.processSection.heading}
                subheading={data.processSection.subheading}
                description={data.processSection.description}
                processes={data.processSection.processCards}
                customCard={(item, index) => <data.processSection.customCard item={item} key={index} />}
            />

            {/* Our Solutions Section */}
            <SolutionsSection
                heading={data.solutionsSection.heading}
                subheading={data.solutionsSection.subheading}
                description={data.solutionsSection.description}
                content={data.solutionsSection.content}
                CustomCard={(item, idx) => <data.solutionsSection.customCard item={item} key={idx} />}
                subSection={data.solutionsSection.subSection}
                className={data.solutionsSection.className}
            />

            {/* Why Choose Ridipt Section */}
            <ServiceDetailSection
                cardStyling={data.serviceDetailSection.cardStyling}
                className={data.serviceDetailSection.className}
                heading={data.serviceDetailSection.heading}
                subheading={data.serviceDetailSection.subheading}
                description={data.serviceDetailSection.description}
                industry={data.serviceDetailSection.industry}
            />

            {/* Call to Action Section */}
            <PromotionalSection
                title={data.ctaSection.title}
                highlightText={data.ctaSection.highlightText}
                subtitle={data.ctaSection.subtitle}
                description={data.ctaSection.description}
                buttonText={data.ctaSection.buttonText}
                animationData={data.ctaSection.animationData}
            />

            {/* Tech Stack Section */}
            <TechStackSection
                heading={data.techStackSection.heading}
                subheading={data.techStackSection.subheading}
                description={data.techStackSection.description}
                techStackData={{ items: data.techStackSection.techStacks }}
            />

            {/* FAQ Section */}
            <FAQ
                content={data.faqSection.faqs}
                header={{
                    heading: data.faqSection.heading,
                    subheading: data.faqSection.subheading,
                    description: data.faqSection.description,
                    className: ""
                }}
            />
        </Structure>
    );
};

export default IndustryPage;
