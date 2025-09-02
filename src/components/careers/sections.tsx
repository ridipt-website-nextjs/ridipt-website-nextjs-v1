import React from 'react'
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { Button } from '@/components/ui/button';
import {  ArrowRight, MapPin } from 'lucide-react';
import { CareerCard } from './cards';
import { careerJobs } from '@/config/content/careers';

export const CareerSection = ({ items }: { items: typeof careerJobs }) => {
    return (
        <Section className='!p-0 !m-0 !pt-10 !pb-10'>
            <Header
                heading='Explore Exciting Career Opportunities'
                subheading='Join Our Team and Make an Impact'
                description='At Ridipt Technologies, we are always looking for talented individuals to join our dynamic team. Explore our current job openings and take the next step in your career with us.'
                className='!mt-0 !pt-0'
            />

            <div className="space-y-6">

                <div className="grid gap-8 md:grid-cols-2">
                    {items.map((job, index) => (
                       <CareerCard key={index} job={job} />
                    ))}
                </div>

                {/* View All Positions Link */}
                <div className="text-center pt-8">
                    <Button
                        variant="outline"
                        className="group relative text-accent-foreground overflow-hidden border border-border hover:border-accent/30 rounded-full px-8 py-3 transition-all duration-300 hover:shadow-md"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            View All Positions
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </Button>
                </div>
            </div>
        </Section>

    )
}