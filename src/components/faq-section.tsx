'use client'

import React, { JSX, useState } from 'react'
import Header from '@/components/section-heading';
import Section from '@/components/section-structure'
import { web_dev_faq } from '@/config/FAQs';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ item, index, isOpen, onToggle }: {
    item: {
        title: string;
        description: JSX.Element;
    }
    index: number;
    isOpen: boolean;
    onToggle: (index: number) => void;
}) => {
    return (
        <div className='w-full border-b border-b-secondary flex flex-col gap-2 overflow-hidden'>
            <button
                onClick={() => onToggle(index)}
                className='w-full text-lg flex cursor-pointer text-secondary-foreground items-center justify-between p-4 font-medium text-left hover:bg-muted/50 transition-colors'
            >
                <span
                    className={`${isOpen ? 'text-accent-foreground' : 'text-secondary-foreground/70'}`}
                >{item.title}</span>
                <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <div
                className={`w-full border-t border-primary/50 text-muted-foreground transition-all duration-300 ease-out ${isOpen ? 'h-auto p-4' : 'h-0 overflow-hidden'}`}
            >
                <div className="w-full">{item.description}</div>
            </div>
        </div>
    );
};

const page = ({ content = web_dev_faq }: {
    content?: {
        title: string;
        icon: JSX.Element;
        description: JSX.Element;
    }[]
}) => {
    // State to track which FAQ is open (0 = first item open by default)
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        // If clicking on already open item, close it, otherwise open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section>
            <Header
                heading="Frequently Asked Questions"
                subheading="Everything You Need to Know About Web Development"
                description="Find answers to the most common questions about our web development services, including process, technologies, costs, timelines, and post-launch support. These FAQs will help you better understand how we work and how we can bring your ideas to life."
                className='items-start !container !max-w-[auto]'
            />

            <div className='w-full'>
                <div className='w-full space-y-0'>
                    {content.map((item, idx) => (
                        <FAQItem
                            key={idx}
                            item={item}
                            index={idx}
                            isOpen={openIndex === idx}
                            onToggle={handleToggle}
                        />
                    ))}
                </div>
            </div>
        </Section>
    )
}

export default page
