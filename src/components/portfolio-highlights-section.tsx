'use client'
import React from 'react'
import Header from './section-heading';
import Image from 'next/image';
import { Check, ExternalLink, ArrowRight } from 'lucide-react';
import Lottie from 'lottie-react';
import Link from 'next/link';

const portfolioData = [
    // {
    //     title: "E-Commerce Mobile App",
    //     description:
    //         "A seamless mobile shopping experience with secure payments and intuitive navigation.",
    //     image: require('@assets/home/ecommerce.jpg'),
    //     isAnimation: false,
    //     highlights: [
    //         "Cross-platform (iOS & Android) support",
    //         "Integrated secure payment gateway",
    //         "Real-time inventory updates",
    //     ],
    // },
    // {
    //     title: "Healthcare Appointment Platform",
    //     description:
    //         "A platform to book and manage doctor appointments with integrated telemedicine features.",
    //     image: require('@assets/home/healthcare.jpg'),
    //     isAnimation: false,
    //     highlights: [
    //         "Video consultation support",
    //         "Automated appointment reminders",
    //         "HIPAA-compliant data security",
    //     ],
    // },
    // {
    //     title: "Travel Booking Website",
    //     description:
    //         "User-friendly website for booking flights, hotels, and holiday packages.",
    //     image: require('@assets/home/travel.jpg'),
    //     isAnimation: false,
    //     highlights: [
    //         "Advanced search & filtering",
    //         "Dynamic pricing integration",
    //         "Multi-language support",
    //     ],
    // },
    {
        title: "Lab Management System (CarerLab)",
        description:
            "Comprehensive digital platform for diagnostic laboratories to automate operations, manage patient tests, and generate branded PDF reports efficiently.",
        image: require('@assets/portfolio/library-1.jpeg'),
        isAnimation: false,
        highlights: [
            "Automated report generation with @react-pdf/renderer",
            "Role-based dashboard for lab staff and admins",
            "Patient test & package management modules",
            // "Optimized performance for 100+ daily users",
            // "Dynamic PDF reports with custom branding",
        ],
        link: '/portfolio/lab-report-management'  
    },
    {
        title: "Grocery Delivery Admin Dashboard",
        description:
            "Comprehensive admin platform for grocery delivery businesses to manage users, products, distributors, and track payments with real-time insights and centralized control.",
        image: require('@assets/portfolio/Admin-1.png'),
        isAnimation: false,
        highlights: [
            "Multi-role user and distributor management",
            "Product catalog with brand categorization",
            "Real-time payment and commission tracking",
            // "Subscription and agent monitoring tools",
            // "Centralized analytics dashboard",
        ],
        link: '/portfolio/smart-delivery-admin'  
    },
];

interface ServiceItem {
    title: string;
    description: string;
    image: any;
    isAnimation: boolean;
    highlights: string[];
    link?: string;
}

interface ServicesProps {
    className?: string;
    content?: ServiceItem[];
    heading?: string;
    subheading?: string;
    description?: string;
    CustomCard?: React.ComponentType<{ item: ServiceItem; index: number }>;
}

const PortfolioHighlights = ({
    className = '',
    content = portfolioData,
    heading,
    subheading,
    description,
    CustomCard
}: ServicesProps) => {
    return (
        <div className="w-full overflow-hidden">
            <section className='flex flex-col items-center justify-center w-full container mx-auto my-10 gap-10 px-4'>
                <Header
                    heading={heading || 'Portfolio Highlights'}
                    subheading={subheading || 'Building Success Together'}
                    description={description || `We are committed to addressing our clients' evolving business requirements, helping them stand out on the App Store, Google Play, and their websites.`}
                />
                <div className='flex flex-col gap-8 md:gap-15 w-full max-w-7xl'>
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
        link?: string;
    },
    className?: string
}) => {
    // Shared card content component
    const CardContent = () => (
        <>
            {/* Image Container */}
            <figure className='
                relative w-full p-2 flex-shrink-0
                md:w-1/2 md:max-w-[50%] 
                lg:w-2/5 lg:max-w-[40%]
            '>
                <div className={`
                    w-full h-[200px] md:h-[300px] lg:h-[350px] 
                    overflow-hidden rounded-lg border border-inherit
                    transition-all duration-300
                    ${content.link ? 'group-hover:border-primary/10 group-hover:shadow-xl' : ''}
                `}>
                    {content.isAnimation ? (
                        <Lottie
                            animationData={content.image}
                            loop={true}
                            className={`
                                w-full h-full object-cover
                                transition-transform duration-500
                                ${content.link ? 'group-hover:scale-105' : ''}
                            `}
                        />
                    ) : (
                        <Image
                            alt={content.title}
                            className={`
                                w-full h-full object-cover
                                transition-transform duration-500
                                ${content.link ? 'group-hover:scale-105' : ''}
                            `}
                            height={360}
                            src={content.image}
                            width={480}
                        />
                    )}
                </div>

                {/* Link Indicator */}
                {content.link && (
                    <div className="
                        absolute top-4 right-4 
                        opacity-0 group-hover:opacity-100 
                        transition-all duration-300
                        bg-primary text-primary-foreground 
                        rounded-full p-2 shadow-lg
                        transform group-hover:scale-110
                    ">
                        <ExternalLink className="w-4 h-4" />
                    </div>
                )}
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
                    <h5 className={`
                        text-xl font-medium text-accent-foreground break-words
                        md:text-2xl 
                        lg:text-3xl
                        transition-colors duration-300
                        ${content.link ? 'group-hover:text-primary' : ''}
                    `}>
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
                            <span className={`
                                flex size-5 items-center justify-center rounded-full bg-secondary flex-shrink-0 mt-0.5
                                md:size-6 md:mt-0
                                transition-all duration-300
                                ${content.link ? 'group-hover:bg-primary/20 group-hover:scale-110' : ''}
                            `}>
                                <Check
                                    size={12}
                                    className={`
                                        text-muted-foreground md:w-4 md:h-4
                                        transition-colors duration-300
                                        ${content.link ? 'group-hover:text-primary' : ''}
                                    `}
                                />
                            </span>
                            <span className="break-words min-w-0 flex-1">
                                {highlight}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* View Details Link */}
                {/* {content.link && (
                    <div className="
                        flex items-center gap-2 text-sm font-medium text-primary
                        mt-auto
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300
                        group-hover:gap-3
                    ">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                )} */}
            </div>
        </>
    );

    const baseClassName = `
        group flex flex-col w-full min-h-96 
        rounded-lg border border-border bg-card p-px 
        overflow-hidden
        md:flex-row md:odd:flex-row-reverse 
        transition-all duration-300
        ${content.link ? 'cursor-pointer hover:shadow-xl hover:border-primary/10 hover:-translate-y-1' : ''}
        ${className}
    `;

    // Conditional rendering based on link
    if (content.link) {
        return (
            <Link href={content.link} className={baseClassName}>
                <CardContent />
            </Link>
        );
    }

    return (
        <article className={baseClassName}>
            <CardContent />
        </article>
    );
}

export default PortfolioHighlights;
