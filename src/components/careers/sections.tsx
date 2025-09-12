import React from 'react'
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Briefcase, Send } from 'lucide-react';
import { CareerCard } from './cards';
import { careerJobs } from '@/config/content/careers';
import { JobData } from '@/config/interface';

export const CareerSection = ({ items }: { items: JobData[] }) => {
    // ✅ Function to scroll to application form
    const scrollToApplicationForm = () => {
        const element = document.getElementById('application-form');
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <Section className='!p-0 !m-0 !pt-10 !pb-0'>
            <Header
                heading='Explore Exciting Career Opportunities'
                subheading='Join Our Team and Make an Impact'
                description='At Ridipt Technologies, we are always looking for talented individuals to join our dynamic team. Explore our current job openings and take the next step in your career with us.'
                className='!mt-0 !pt-0'
            />

            {/* ✅ Conditional rendering based on jobs availability */}
            {items.length === 0 ? (
                // ✅ Empty state when no jobs available
                <div className="text-center  px-4">
                    <div className="max-w-md mx-auto">
                        {/* Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                                <Briefcase className="w-8 h-8 text-muted-foreground" />
                            </div>
                        </div>

                        {/* Message */}
                        <h3 className="text-2xl font-semibold text-foreground mb-4">
                            No Open Positions Currently
                        </h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            We don't have any open positions at the moment, but we're always interested in connecting with talented professionals.
                            Feel free to submit your application and we'll keep you in mind for future opportunities.
                        </p>

                        {/* Action Button */}
                        <Button
                            onClick={scrollToApplicationForm}
                            size="lg"
                            className="group px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
                        >
                            <span className="flex items-center gap-2">
                                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                                Submit Your Application
                            </span>
                        </Button>

                        <p className="text-xs text-muted-foreground mt-4">
                            We'll reach out when suitable positions become available
                        </p>
                    </div>
                </div>
            ) : (
                // ✅ Normal state when jobs are available
                <div className="space-y-6">
                    <div className="grid gap-8 md:grid-cols-2">
                        {items.map((job, index) => (
                            <CareerCard key={index} job={job} />
                        ))}
                    </div>

                    {/* View All Positions / Apply Now Button */}
                    <div className="text-center pt-8">
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            {/* View All Positions Button */}
                            <Button
                                variant="outline"
                                className="group relative text-accent-foreground overflow-hidden border border-border hover:border-accent/30 rounded-full px-8 py-3 transition-all duration-300 hover:shadow-md"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    View All Positions
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </Button>

                            {/* Apply Now Button */}
                            <Button
                                onClick={scrollToApplicationForm}
                                variant="default"
                                className="group rounded-full px-8 py-3 transition-all duration-300 hover:shadow-md"
                            >
                                <span className="flex items-center gap-2">
                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                                    Apply Now
                                </span>
                            </Button>
                        </div>

                        <p className="text-sm text-muted-foreground mt-4">
                            Can't find the perfect role? Apply anyway and we'll consider you for future opportunities.
                        </p>
                    </div>
                </div>
            )}
        </Section>
    )
}
