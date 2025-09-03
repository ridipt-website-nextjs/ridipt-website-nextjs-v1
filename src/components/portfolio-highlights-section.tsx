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
        isAnimation: true,
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
        isAnimation: true,
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
        image: require('@assets/backgrounds/bg1.jpg'),
        isAnimation: false,
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
    content = portfolioData,
    heading,
    subheading,
    description,
    CustomCard
}: ServicesProps) => {
    return (
        <div className="w-full overflow-hidden">
            <section className='flex flex-col items-center justify-center w-full container mx-auto my-20 gap-10 px-4'>
                <Header
                    heading={heading || 'Portfolio Highlights'}
                    subheading={subheading || 'Building Success Together'}
                    description={description || `We are committed to addressing our clients' evolving business requirements, helping them stand out on the App Store, Google Play, and their websites.`}
                />
                <div className='flex flex-col gap-6 w-full max-w-7xl'>
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
        </div>
    )
}

const Card = ({ content, className }: {
    content: {
        title: string;
        description: string;
        image: any;
        isAnimation: boolean;
        highlights: string[];
    },
    className?: string
}) => {
    return (
        <article className={`
            flex flex-col w-full min-h-96 
            rounded-lg border border-border bg-card p-px 
            overflow-hidden
            md:flex-row md:odd:flex-row-reverse 
            ${className}
        `}>
            {/* Image Container */}
            <figure className='
                w-full p-2 flex-shrink-0
                md:w-1/2 md:max-w-[50%] 
                lg:w-2/5 lg:max-w-[40%]
            '>
                <div className="w-full h-[200px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg border border-inherit">
                    {content.isAnimation ? (
                        <Lottie
                            animationData={content.image}
                            loop={true}
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <Image
                            alt={content.title}
                            className="w-full h-full object-cover"
                            height={360}
                            src={content.image}
                            width={480}
                        />
                    )}
                </div>
            </figure>

            {/* Content Container */}
            <div className='
                flex flex-col gap-6 p-4 pt-6 
                w-full flex-1 min-w-0
                md:p-6 md:gap-8
                lg:p-8 lg:gap-10
            '>
                {/* Title and Description */}
                <div className='flex flex-col items-start gap-2'>
                    <h5 className='
                        text-xl font-medium text-accent-foreground break-words
                        md:text-2xl 
                        lg:text-3xl
                    '>
                        {content.title}
                    </h5>
                    <p className='
                        font-normal text-muted-foreground text-sm break-words
                        md:text-base 
                        lg:text-lg
                    '>
                        {content.description}
                    </p>
                </div>

                {/* Highlights List */}
                <ul className='
                    flex flex-col items-start gap-3 pl-2
                    md:gap-4
                '>
                    {content.highlights.map((highlight, idx) => (
                        <li
                            key={idx}
                            className='
                                flex items-start gap-3 font-normal text-muted-foreground text-sm
                                md:text-base 
                                lg:text-lg
                            '
                        >
                            <span className='
                                flex size-5 items-center justify-center rounded-full bg-secondary flex-shrink-0 mt-0.5
                                md:size-6 md:mt-0
                            '>
                                <Check
                                    size={12}
                                    className="text-muted-foreground md:w-4 md:h-4"
                                />
                            </span>
                            <span className="break-words min-w-0 flex-1">
                                {highlight}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default page
