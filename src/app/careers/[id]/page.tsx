'use client'
import React, { useEffect, useState } from 'react'
import Structure from '@/components/common/page-structure';
import { useParams, useRouter } from 'next/navigation';
import { careerJobs } from '@/config/content/careers';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { JobData } from '@/config/interface';
import HeaderSection from '@/components/job-detail/header-section';
import ExperienceEducationSection from '@/components/job-detail/experience-section';
import SkillsSection from '@/components/job-detail/skills-section';
import ResponsibilitiesSection from '@/components/job-detail/responsibility-section';
import QualificationsSection from '@/components/job-detail/qualification-section';
import WorkEnvironmentSection from '@/components/job-detail/workenviroment-section';
import GrowthOpportunitiesSection from '@/components/job-detail/growth-section';
import BenefitsSection from '@/components/job-detail/benefits-section';
import PerksSection from '@/components/job-detail/perks-section';
import Section from '@/components/section-structure';
import ChallengesSection from '@/components/job-detail/challenges-section';
import JobSidebar from '@/components/job-detail/job-sidebar-section';
import ApplicationForm from '@/components/careers/form';
import { TechServices as ApplicationFormSection } from '@/components/ui/sticky-scroll-reveal';
import { applicationFormFields } from '@/components/careers/content/form';
import { adminApi } from '@/lib/admin-api-client';

interface JobDetailsPageParams {
    id: string;
}

const JobDetailsPage: React.FC = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false)
    const [job, setJob] = useState<JobData>()

    const router = useRouter();

    const handleApplyNow = (): void => {
        setIsOpen(true);
        router.push('#application-form');
    };


    const deleteJob = async () => {
        try {
            await adminApi.delete(`/jobs/${id}`);
            router.back();
        } catch (error) {
            console.error("Failed to delete job:", error);
        }
    };



    const fetchJobs = async () => {
        const data = await adminApi.get(`/jobs/${id}`) as JobData
        setJob(data)
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    const data: JobData | undefined = job || careerJobs.find((job: JobData) => job.job_id === id);



    const handleFormSubmit = async (formData: FormData): Promise<void> => {
        try {
            console.log('Form data:', typeof formData);
            // const plainFormData = Object.fromEntries(formData.entries());

            // Submit to your API
            const response = await fetch('/api/applications', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Application submitted successfully!');
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            alert('Error submitting application. Please try again.');
        }
    };

    const handleGoBack = (): void => {
        router.back();
    };

    if (!data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <h1 className="text-2xl font-bold text-foreground mb-4">Job Not Found</h1>
                    <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist.</p>
                    <Button onClick={handleGoBack} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Go Back
                    </Button>
                </div>
            </Structure>
        );
    }

    return (
        <Structure className='container'>
            <div className="w-full mx-auto px-4 py-8">
                {/* Back Button */}
                <Button
                    variant="ghost"
                    onClick={handleGoBack}
                    className="mb-6 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Careers
                </Button>

                {/* Header Section */}
                <HeaderSection data={data} deleteJob={deleteJob} onApplyNow={handleApplyNow} />

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Experience & Education */}
                        <ExperienceEducationSection data={data} />

                        {/* Skills Section */}
                        <SkillsSection data={data} />

                        {/* Responsibilities */}
                        <ResponsibilitiesSection responsibilities={data.responsibilities} />

                        {/* Qualifications */}
                        <QualificationsSection qualifications={data.qualifications} />

                        {/* Work Environment */}
                        {data.workEnvironment && (
                            <WorkEnvironmentSection workEnvironment={data.workEnvironment} />
                        )}

                        {/* Growth Opportunities */}
                        {data.growthOpportunities && (
                            <GrowthOpportunitiesSection growthOpportunities={data.growthOpportunities} />
                        )}

                        {/* Benefits */}
                        {data.benefits && (
                            <BenefitsSection benefits={data.benefits} />
                        )}

                        {/* Perks */}
                        <PerksSection perks={data.perks} />

                        {/* Challenges */}
                        {data.challenges && (
                            <ChallengesSection challenges={data.challenges} />
                        )}
                    </div>

                    {/* Sidebar */}
                    <JobSidebar data={data} onApplyNow={handleApplyNow} />
                </div>
            </div>
            {isOpen &&
                <Section id='application-form' >
                    <ApplicationFormSection
                        heading={data.title}
                        subheading="We’d still love to hear from you!"
                        description={data.description}
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
            }
        </Structure>
    );
};

export default JobDetailsPage;
