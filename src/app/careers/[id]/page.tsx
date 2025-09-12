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
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import BenefitsSection from '@/components/job-detail/benefits-section';
import PerksSection from '@/components/job-detail/perks-section';
import Section from '@/components/section-structure';
import ChallengesSection from '@/components/job-detail/challenges-section';
import JobSidebar from '@/components/job-detail/job-sidebar-section';
import ApplicationForm from '@/components/careers/form';
import { TechServices as ApplicationFormSection } from '@/components/ui/sticky-scroll-reveal';
import { applicationFormFields } from '@/components/careers/content/form';
import { adminApi } from '@/lib/admin-api-client';
// import JobDetailsSkeleton from '@/components/ui/job-skeleton'; // Alternative skeleton option

interface JobDetailsPageParams {
    id: string;
}

const JobDetailsPage: React.FC = () => {
    const { id } = useParams();
    const [isOpen, setIsOpen] = useState(false)
    const [job, setJob] = useState<JobData>()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null);

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
        try {
            setIsLoading(true);
            setError(null);
            const data = await adminApi.get(`/jobs/${id}`) as JobData;
            setJob(data);
        } catch (error) {
            console.error("Failed to fetch job:", error);
            setError("Failed to load job details. Please try again.");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchJobs();
    }, [id]);

    const data: JobData | undefined = job || careerJobs.find((job: JobData) => job.job_id === id);

    const handleFormSubmit = async (formData: FormData): Promise<void> => {
        try {
            console.log('Form data:', typeof formData);
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

    // Loading State - Choose one of these options
    if (isLoading) {
        return <JobDetailsSkeleton />
    }

    // Error State
    // for testing i add the !data condition if this is complete i will remove if not removed there is no issue or problem
    if (error && !data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h1 className="text-2xl font-bold text-foreground">Something went wrong</h1>
                    <p className="text-muted-foreground max-w-md">{error}</p>
                    <div className="flex gap-4">
                        <Button onClick={fetchJobs} variant="default">
                            Try Again
                        </Button>
                        <Button onClick={handleGoBack} variant="outline">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Go Back
                        </Button>
                    </div>
                </div>
            </Structure>
        );
    }

    // Job Not Found
    if (!data) {
        return (
            <Structure>
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h1 className="text-2xl font-bold text-foreground">Job Not Found</h1>
                    <p className="text-muted-foreground max-w-md">
                        The job you're looking for doesn't exist or may have been removed.
                    </p>
                    <Button onClick={handleGoBack} variant="outline">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Careers
                    </Button>
                </div>
            </Structure>
        );
    }

    // Rest of your existing component code...
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
                        subheading="We'd still love to hear from you!"
                        description={data.description}
                        content={<>
                            <ApplicationForm
                                applicationFormFields={applicationFormFields as any[]}
                                onSubmit={handleFormSubmit}
                                autoFilledData={{
                                    position: data.title,
                                    // experience: data?.experience?.yearsRequired!
                                }}
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

const JobDetailsSkeleton = () => {
    return (
        <Structure className='container'>
            <div className="w-full mx-auto px-4 py-8 animate-pulse">
                {/* Back Button Skeleton */}
                <div className="h-10 w-32 bg-gray-200 rounded mb-6"></div>

                {/* Header Skeleton */}
                <div className="bg-white rounded-lg border p-6 mb-8">
                    <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                            <div className="space-y-2">
                                <div className="h-6 w-64 bg-gray-200 rounded"></div>
                                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                            </div>
                        </div>
                        <div className="h-10 w-24 bg-gray-200 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded"></div>
                        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
                    </div>
                </div>

                {/* Content Grid Skeleton */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content Skeleton */}
                    <div className="lg:col-span-2 space-y-8">
                        {[1, 2, 3, 4].map((item) => (
                            <Card key={item} className="shadow-sm">
                                <CardHeader>
                                    <div className="h-6 w-48 bg-gray-200 rounded"></div>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <div className="h-4 w-full bg-gray-200 rounded"></div>
                                    <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
                                    <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar Skeleton */}
                    <div className="space-y-6">
                        <Card className="shadow-sm">
                            <CardHeader>
                                <div className="h-6 w-32 bg-gray-200 rounded"></div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {[1, 2, 3].map((item) => (
                                    <div key={item} className="flex justify-between">
                                        <div className="h-4 w-20 bg-gray-200 rounded"></div>
                                        <div className="h-4 w-24 bg-gray-200 rounded"></div>
                                    </div>
                                ))}
                                <div className="h-10 w-full bg-gray-200 rounded mt-6"></div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Structure>
    );
};