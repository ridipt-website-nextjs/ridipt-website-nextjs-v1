'use client'
import React from 'react'
import Header from './section-heading';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Lottie from 'lottie-react';

const portfolioData = [
    {
        title: "E-Commerce Mobile App",
        description:
            "A seamless mobile shopping experience with secure payments and intuitive navigation.",
        image: require('@assets/animations/animation1.json'),
        isAnimation: true, // Add this flag
        highlights: [
            "Cross-platform (iOS & Android) support",
            "Integrated secure payment gateway",
            "Real-time inventory updates",
        ],
    },
    {
        title: "Healthcare Appointment Platform",
        description:
            "A platform to book and manage doctor appointments with integrated telemedicine features.",
        image: require('@assets/animations/animation1.json'),
        isAnimation: true, // Add this flag
        highlights: [
            "Video consultation support",
            "Automated appointment reminders",
            "HIPAA-compliant data security",
        ],
    },
    {
        title: "Travel Booking Website",
        description:
            "User-friendly website for booking flights, hotels, and holiday packages.",
        image: require('@assets/backgrounds/bg1.jpg'), // Regular image path
        isAnimation: false, // Add this flag
        highlights: [
            "Advanced search & filtering",
            "Dynamic pricing integration",
            "Multi-language support",
        ],
    },
];

interface ServiceItem {
    title: string;
    description: string;
    image: any;
    isAnimation: boolean;
    highlights: string[];
}

interface ServicesProps {
    className?: string;
    content?: ServiceItem[];
    heading?: string;
    subheading?: string;
    description?: string;
    CustomCard?: React.ComponentType<{ item: ServiceItem; index: number }>;
}


const page = ({
    className = '',
    content = portfolioData
    , heading,
    subheading,
    description,
    CustomCard

}: ServicesProps) => {
    return (
        <section
            className='flex flex-col  items-center justify-center w-full max-w-7xl mx-auto my-20 gap-10'
        >
            <Header
                heading={heading || 'Portfolio Highlights'}
                subheading={subheading || 'Building Success Together'}
                description={description || `We are committed to addressing our clients' evolving business requirements, helping them stand out on the App Store, Google Play, and their websites.`}
            />
            <div
                className='flex flex-col gap-6'
            >
                {content.map((item, idx) => (
                    CustomCard ? (
                        <CustomCard key={idx} item={item} index={idx} />
                    ) : (
                        <Card
                            content={item}
                            className={className}
                            key={idx}
                        />
                    )
                ))}
            </div>
        </section>
    )
}

const Card = ({ content, className }: {
    content: {
        title: string;
        description: string;
        image: any; // Changed from string to any to accommodate both strings and objects
        isAnimation: boolean;
        highlights: string[];
    },
    className?: string
}) => {
    return <article
        className={`flex min-h-96 w-full max-w-[380px] flex-col rounded-lg border border-border bg-card p-px  sm:max-w-full md:w-full md:flex-row md:odd:flex-row-reverse xl:gap-16 ${className}`}
    >
        <figure
            className='p-2 md:h-auto md:w-[360px] lg:w-[480px] xl:w-[560px]'
        >
            {content.isAnimation ? (
                <Lottie
                    animationData={content.image}
                    loop={true}
                    className="block aspect-video h-[200px] w-full rounded-lg border border-inherit object-cover  md:h-full "
                />
            ) : (
                <Image
                    alt={content.title}
                    className=" block aspect-video h-[200px] w-full rounded-lg border border-inherit object-cover  md:h-full"
                    height={360}
                    src={content.image}
                    width={480}
                />
            )}
        </figure>
        <div
            className='flex flex-col gap-8 p-5 pt-6 md:flex-1 md:p-10'
        >
            <div
                className='flex flex-col items-start gap-2'
            >
                <h5
                    className='text-2xl font-medium text-accent-foreground  md:text-3xl'
                >{content.title}</h5>
                <p
                    className='font-normal text-muted-foreground md:text-lg'
                >{content.description}</p>
            </div>

            <ul
                className='flex flex-col items-start gap-3 pl-2 md:text-lg'
            >
                {content.highlights.map((highlight, idx) => (
                    <li
                        key={idx}
                        className='flex items-center gap-4 font-normal text-muted-foreground'
                    >
                        <span
                            className='flex size-6 items-center justify-center rounded-full bg-secondary'
                        >
                            <Check
                                size={16}
                                className="text-muted-foreground"
                            />
                        </span>
                        {highlight}
                    </li>
                ))}
            </ul>
        </div>
    </article>
}

export default page