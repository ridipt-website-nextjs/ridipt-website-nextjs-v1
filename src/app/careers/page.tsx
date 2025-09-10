'use client';
import React, { useEffect, useState } from 'react'
import Structure from '@/components/common/page-structure';
import Section from '@/components/section-structure';
import { CareerSection } from '@/components/careers/sections';
import { CareerCard1, IndustrySectionCard2 } from '@/components/careers/cards';
import { TechServices as ApplicationFormSection } from '@/components/ui/sticky-scroll-reveal';
import ApplicationForm from '@/components/careers/form';
import { applicationFormFields } from '@/components/careers/content/form';
import { ProcessCardsSection } from '@/components/services';
import ServiceDetailSection from '@/components/industry-section';
import { howWeWork } from '@/config/content/careers/how-we-work.content';
import { perks_benefits } from '@/config/content/careers/perk.content';
import { careerJobs, } from '@/config/content/careers';
import { CareerHero } from '@/components/careers/hero-section';
import { adminApi } from '@/lib/admin-api-client';
import { JobData } from '@/config/interface';





const page = () => {
    const [jobs, setJobs] = useState<JobData[]>([])
    const handleFormSubmit = async (formData: FormData): Promise<void> => {
        try {
            console.log('Form data:', formData);

            // Submit to your API
            // const response = await fetch('/api/applications', {
            //     method: 'POST',
            //     body: formData,
            // });

            // if (response.ok) {
            //     alert('Application submitted successfully!');
            // } else {
            //     throw new Error('Submission failed');
            // }
        } catch (error) {
            alert('Error submitting application. Please try again.');
        }
    };


    const fetchJobs = async () => {
        const data = await adminApi.get('/jobs/') as typeof careerJobs
        setJobs([...data,...careerJobs])
    }
    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <Structure>
            {/* hero section */}
            <CareerHero
                heading='Careers at Ridipt'
                subheading='Join Our Team and Shape the Future of Technology'
                description='At Ridipt Technologies, we are always on the lookout for talented and passionate individuals to join our dynamic team. We believe in fostering a collaborative and inclusive work environment where innovation thrives. If you are driven by technology and eager to make a difference, explore our current job openings and take the next step in your career with us.'
            />

            {/* Career Jobs Section */}
            <Section className="py-16">
                <div className="container">
                    <CareerSection items={[...jobs]} />
                </div>
            </Section>


            {/* Application Form Section */}
            <Section id='application-form' >
                <ApplicationFormSection
                    heading="Didn’t find a role that fits you?"
                    subheading="We’d still love to hear from you!"
                    description="Share your details and upload your CV. Even if the current openings don’t match your profile, we’ll keep your application on file and reach out when a suitable opportunity becomes available."
                    content={<>
                        <ApplicationForm
                            applicationFormFields={applicationFormFields as any[]}
                            onSubmit={handleFormSubmit}
                        />
                    </>}
                    subSection={false}
                    className="!mt-0 mb-10"
                />
            </Section>

            {/* This is how we work */}
            <ProcessCardsSection
                heading="This is how we work"
                subheading="Our Culture and Work Philosophy"
                description="Discover the values and practices that define our workplace. From a friendly environment and continuous learning to team support, flexible timing, yearly appraisals, and diversified resources — we ensure a culture where every individual can thrive and grow."
                processes={howWeWork}
                customCard={(item, index) => (
                    <CareerCard1 item={item} key={index} />
                )}
            />

            {/* Why Choose Ridipt for Social Media Solutions */}
            <ServiceDetailSection
                cardStyling='border-none text-justify'
                className='mt-0'
                heading='Why Choose Ridipt for Social Media Solutions?'
                subheading='Comprehensive Expertise and Proven Excellence'
                description='We combine deep understanding of social media dynamics with cutting-edge technology solutions. Our expertise spans across custom social networking platforms, content creation tools, AI-powered analytics, monetization solutions, and security frameworks tailored for social media environments.'
                industry={perks_benefits}
                CustomCard={(item, idx) => (
                    <IndustrySectionCard2 item={item} key={idx} />
                )}
            />


        </Structure>
    )
}

export default page


