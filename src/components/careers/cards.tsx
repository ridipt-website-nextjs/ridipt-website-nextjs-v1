
import { Button } from '@/components/ui/button';
import { socialMediaCards } from '@/config/content/careers';
import { ArrowRight, Briefcase, LucideProps, MapPin } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
import { AVAILABLE_ICONS as ICON_COMPONENTS } from '@/config/constant';



export const CareerCard = ({ job }: {
    job: {
        job_id: string;
        name: string;
        icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>> | string;
        title: string;
        description: string;
        type: string;
        location: string;
        department: string;
        responsibilities: string[];
        qualifications: string[];
        perks: string[];
    }
}) => {
    let IconComponent;
    if (typeof job.icon === 'string') {
        IconComponent = ICON_COMPONENTS[job.icon as keyof typeof ICON_COMPONENTS] || ICON_COMPONENTS.Briefcase;
    }
    return <div
        className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:border-accent/50 hover:-translate-y-2"
    >
        {/* Header with Icon and Title */}
        <div className="flex items-start gap-4 mb-4">
            <div className="flex items-center justify-center w-14 h-14 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                {job.icon ?
                    (typeof job.icon === 'string' && IconComponent) ?
                        <IconComponent className="w-7 h-7 text-accent-foreground" />
                        : <job.icon className="w-7 h-7 text-accent-foreground" /> :
                    <Briefcase className="w-7 h-7 text-accent-foreground" />}
            </div>
            <div className="flex-1">
                <h4 className="text-xl font-bold text-foreground group-hover:text-accent-foreground transition-colors duration-300 mb-2">
                    {job.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                    <span className="text-xs px-3 py-1 bg-accent/15 text-accent-foreground rounded-full font-medium">
                        {job.department}
                    </span>
                    <span className="text-xs px-3 py-1 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-full font-medium">
                        {job.type}
                    </span>
                </div>
            </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
            {job.description}
        </p>

        {/* Key Responsibilities Preview */}
        <div className="mb-4">
            <h5 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h5>
            <ul className="text-xs text-muted-foreground space-y-1">
                {job.responsibilities.slice(0, 2).map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></span>
                        <span className="line-clamp-1">{resp}</span>
                    </li>
                ))}
                {job.responsibilities.length > 2 && (
                    <li className="text-accent-foreground font-medium">
                        +{job.responsibilities.length - 2} more...
                    </li>
                )}
            </ul>
        </div>

        {/* Perks Preview */}
        <div className="mb-6">
            <h5 className="text-sm font-semibold text-foreground mb-2">Perks & Benefits:</h5>
            <div className="flex flex-wrap gap-1">
                {job.perks.slice(0, 2).map((perk, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-md">
                        {perk}
                    </span>
                ))}
                {job.perks.length > 2 && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md">
                        +{job.perks.length - 2} more
                    </span>
                )}
            </div>
        </div>

        {/* Location and Apply Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">{job.location}</span>
            </div>

            <Link href={`/careers/${job.job_id}`} passHref
                // size="sm"
                className="group/btn relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent-foreground hover:text-accent border border-accent/20 hover:border-accent-foreground rounded-full px-6 py-2 font-semibold transition-all duration-300 hover:scale-105"
            >
                <span className="relative z-10 flex items-center gap-2">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </span>
            </Link>
        </div>

        {/* Hover Effect Gradient Border */}
        {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" /> */}

        {/* Top right job type indicator */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>
    </div>
}

export const HeroCard = ({ items }: { items: typeof socialMediaCards }) => {
    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Header */}
            {/* <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                    Connect With Us
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                    Follow our journey across platforms
                </p>
            </div> */}

            {/* Cards */}
            <div className="space-y-4">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className={`
                            relative p-6 rounded-2xl border border-gray-200 dark:border-gray-700
                            bg-white dark:bg-gray-800
                            hover:border-gray-300 dark:hover:border-gray-600
                            hover:shadow-lg hover:-translate-y-1
                            transition-all duration-300 ease-out
                        `}>
                            {/* Gradient overlay on hover */}
                            <div className={`
                                absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                                bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}
                                transition-opacity duration-300
                            `} style={{ opacity: '0.05' }}></div>

                            <div className="relative flex items-center justify-between">
                                {/* Left Content */}
                                <div className="flex items-center gap-4">
                                    {/* Icon */}
                                    <div className={`
                                        w-14 h-14 rounded-xl flex items-center justify-center
                                        bg-gray-100 dark:bg-gray-700
                                        group-hover:bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo}
                                        transition-all duration-300
                                    `}>
                                        <span className="text-2xl group-hover:text-white transition-colors duration-300">
                                            <item.icon className='text-muted-foreground group-hover:text-foreground' />
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                                            Follow us on
                                        </p>
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                                            {item.platform}
                                        </h4>
                                    </div>
                                </div>

                                {/* Arrow */}
                                <div className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-white transition-colors duration-300">
                                    <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:text-gray-900 group-hover:translate-x-0.5 transition-all duration-300" />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Bottom text */}
            <div className="text-center mt-8">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join thousands of followers across our social platforms
                </p>
            </div>
        </div>
    )
}

export const CareerCard1 = ({ item }: { item: any }) => {
    return (
        <article className={`group relative flex flex-1 border border-border/50 backdrop-blur-sm bg-white/80 dark:bg-background/80 transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-${item.colors.primary}-500/10 p-6 rounded-2xl flex-col gap-5 h-full min-h-[340px] hover:scale-[1.02] hover:-translate-y-1 overflow-hidden`}>
            {/* Background Pattern */}
            <div className={`absolute top-0 right-0 w-32 h-32 ${item.colors.gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity duration-500`}></div>

            {/* Icon Container */}
            <div className={`relative w-14 h-14 ${item.colors.bg} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-${item.colors.primary}-200 transition-all duration-300 group-hover:rotate-3`}>
                {item.icon ? <item.icon className={`h-7 w-7 ${item.colors.icon}`} /> : null}
                {item.image && (
                    <Image
                        src={item.image!}
                        alt={item.title}
                        height={24}
                        width={24}
                        className={`${item.colors.icon}`}
                    />
                )}
                {/* Floating dot indicator */}
                <div className={`absolute -top-1 -right-1 w-4 h-4 ${item.colors.primary} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-4 flex-grow relative z-10'>
                <h5 className={`text-xl font-bold ${item.colors.text} group-hover:${item.colors.primary} transition-colors duration-300`}>
                    {item.title}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {item.description}
                </p>
            </div>

            {/* Action Indicator */}
            <div className="flex items-center justify-between">
                <div className={`w-8 h-1 ${item.colors.gradient} rounded-full transition-all duration-300 group-hover:w-16`}></div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <svg className={`w-5 h-5 ${item.colors.primary}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </div>
            </div>
        </article>
    );
};

export const CareerCard3 = ({ item }: { item: any }) => {
    return (
        <article className="group relative flex flex-1 bg-white dark:bg-card border border-border/30 shadow-md hover:shadow-2xl transition-all duration-600 ease-out p-7 rounded-2xl flex-col gap-5 h-full min-h-[360px] hover:-translate-y-2 overflow-hidden">
            {/* Floating Background Elements */}
            <div className={`absolute -top-4 -right-4 w-24 h-24 ${item.colors.bg} rounded-full opacity-10 group-hover:opacity-20 transition-all duration-700 group-hover:scale-110`}></div>
            <div className={`absolute -bottom-6 -left-6 w-16 h-16 ${item.colors.gradient} rounded-full opacity-5 group-hover:opacity-15 transition-all duration-700 group-hover:scale-125`}></div>

            {/* Header */}
            <div className="flex items-center gap-4 relative z-10">
                <div className={`w-12 h-12 ${item.colors.bg} rounded-xl flex items-center justify-center transition-all duration-400 group-hover:shadow-lg group-hover:shadow-${item.colors.primary}/20`}>
                    {item.icon ? <item.icon className={`h-6 w-6 ${item.colors.icon}`} /> : null}
                    {item.image && (
                        <Image
                            src={item.image!}
                            alt={item.title}
                            height={22}
                            width={22}
                            className={`${item.colors.icon}`}
                        />
                    )}
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg font-bold text-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.title}
                    </h5>
                    <div className={`w-0 h-0.5 ${item.colors.gradient} rounded-full group-hover:w-12 transition-all duration-500 delay-100`}></div>
                </div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-3 flex-grow relative z-10'>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {item.description}
                </p>
            </div>

            {/* Interactive Bottom */}
            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div className="flex gap-1">
                        <div className={`w-2 h-2 ${item.colors.primary} rounded-full transition-all duration-300 group-hover:scale-125`}></div>
                        <div className={`w-2 h-2 ${item.colors.primary}/60 rounded-full transition-all duration-300 delay-75 group-hover:scale-125 group-hover:${item.colors.primary}`}></div>
                        <div className={`w-2 h-2 ${item.colors.primary}/30 rounded-full transition-all duration-300 delay-150 group-hover:scale-125 group-hover:${item.colors.primary}`}></div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-x-4 group-hover:translate-x-0">
                        <div className={`w-8 h-8 ${item.colors.bg} rounded-lg flex items-center justify-center shadow-sm`}>
                            <svg className={`w-4 h-4 ${item.colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};
export const CareerCard2 = ({ item }: { item: any }) => {
    return (
        <article className="group relative flex flex-1 bg-card border-0 shadow-sm hover:shadow-xl transition-all duration-700 ease-out p-8 rounded-3xl flex-col gap-6 h-full min-h-[350px] hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 dark:hover:from-background dark:hover:to-card overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50/30 dark:to-card/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            {/* Top Section */}
            <div className="flex items-start justify-between relative z-10">
                <div className={`w-16 h-16 ${item.colors.bg} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rounded-xl shadow-sm group-hover:shadow-lg`}>
                    {item.icon ? <item.icon className={`h-8 w-8 ${item.colors.icon} transition-transform duration-300 group-hover:scale-110`} /> : null}
                    {item.image && (
                        <Image
                            src={item.image!}
                            alt={item.title}
                            height={28}
                            width={28}
                            className={`${item.colors.icon} transition-transform duration-300 group-hover:scale-110`}
                        />
                    )}
                </div>
                <div className={`w-3 h-3 ${item.colors.primary} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125`}></div>
            </div>

            {/* Content */}
            <div className='flex flex-col gap-4 flex-grow relative z-10'>
                <h5 className="text-2xl font-bold text-foreground group-hover:text-foreground transition-colors duration-300 leading-tight">
                    {item.title}
                </h5>
                <p className="text-base text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors duration-300">
                    {item.description}
                </p>
            </div>

            {/* Bottom Action */}
            <div className="relative z-10 pt-2">
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span className={`text-sm font-medium ${item.colors.primary}`}>Learn more</span>
                    <div className={`w-6 h-6 ${item.colors.bg} rounded-full flex items-center justify-center`}>
                        <svg className={`w-3 h-3 ${item.colors.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Subtle Border Effect */}
            <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-${item.colors.primary}/20 transition-all duration-500`}></div>
        </article>
    );
};


export const IndustrySectionCard = ({ item, cardStyling }: { item: any, cardStyling?: string }) => {
    return (
        <article
            className={`${cardStyling} group flex duration-500 hover:shadow-xl hover:shadow-primary/5 transition-all ease-out flex-col gap-5 rounded-2xl border border-border/50 p-6 bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/20 hover:-translate-y-1 hover:scale-[1.02] ${item.subtitle && '!pb-12 relative'}`}
        >
            {/* Enhanced Icon Container */}
            <figure className='flex size-14 items-center justify-center rounded-2xl border border-border/30 p-3 bg-gradient-to-br from-background to-muted/20 group-hover:from-primary/5 group-hover:to-primary/10 group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:rotate-2'>
                {item.icon ? (
                    <item.icon className={`h-7 w-7 text-primary transition-all duration-500 group-hover:scale-110 group-hover:text-primary/90`} />
                ) : null}
                {item.image && (
                    <Image
                        alt={item.title}
                        className="dark:invert transition-all duration-500 group-hover:scale-110"
                        height={28}
                        src={item.image}
                        width={28}
                    />
                )}
                {/* Floating indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
            </figure>

            {/* Enhanced Content */}
            <div className='flex flex-col items-start gap-3'>
                <h5 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {item.title}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-300">
                    {item.description}
                </p>
            </div>

            {/* Animated bottom accent */}
            <div className="flex items-center justify-between mt-auto">
                <div className="w-8 h-1 bg-gradient-to-r from-primary/30 to-primary/60 rounded-full group-hover:w-16 transition-all duration-500"></div>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Enhanced Subtitle Tooltip */}
            {item.subtitle && (
                <div className='absolute group-hover:shadow-2xl group-hover:shadow-primary/10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 duration-500 flex transition-all ease-out flex-col gap-3 rounded-xl border border-border/30 p-4 bg-card/95 backdrop-blur-md right-3 -bottom-4 max-w-[320px] z-10'>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                        <h3 className='font-medium text-foreground text-sm'>
                            {item.subtitle}
                        </h3>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute -top-2 right-4 w-4 h-4 bg-card rotate-45 border-l border-t border-border/30"></div>
                </div>
            )}
        </article>

    )
}
export const IndustrySectionCard2 = ({ item, cardStyling }: { item: any, cardStyling?: string }) => {
    return (
        <article
            className={`${cardStyling} group m-2 relative flex duration-600 transition-all ease-out flex-col gap-6 rounded-[2rem] border-0 bg-gradient-to-br from-background to-muted/30 p-6 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0f172a,-8px_-8px_16px_#1e293b] hover:shadow-[12px_12px_24px_#d1d5db,-12px_-12px_24px_#ffffff] dark:hover:shadow-[12px_12px_24px_#0f172a,-12px_-12px_24px_#1e293b] hover:scale-102 ${item.subtitle && '!pb-14 relative'}`}
        >
            {/* Neumorphic Icon Container */}
            <figure className='relative flex size-16 items-center justify-center rounded-2xl bg-gradient-to-br from-background to-muted/40 shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff] dark:shadow-[inset_4px_4px_8px_#0f172a,inset_-4px_-4px_8px_#1e293b] group-hover:shadow-[inset_6px_6px_12px_#d1d5db,inset_-6px_-6px_12px_#ffffff] dark:group-hover:shadow-[inset_6px_6px_12px_#0f172a,inset_-6px_-6px_12px_#1e293b] transition-all duration-600 z-10'>
                {item.icon ? (
                    <item.icon className={`h-8 w-8 text-primary transition-all duration-600 group-hover:scale-110 group-hover:text-primary/90`} />
                ) : null}
                {item.image && (
                    <Image
                        alt={item.title}
                        className="dark:invert transition-all duration-600 group-hover:scale-110"
                        height={32}
                        src={item.image}
                        width={32}
                    />
                )}
            </figure>

            {/* Content with Theme-appropriate sizes */}
            <div className='flex flex-col items-start gap-3 relative z-10'>
                <h5 className="text-lg font-semibold text-accent-foreground group-hover:text-primary transition-all duration-400 leading-tight">
                    {item.title}
                </h5>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-400">
                    {item.description}
                </p>
            </div>

            {/* Neumorphic Button */}
            <div className="relative z-10 mt-auto">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-background to-muted/30 shadow-[4px_4px_8px_#d1d5db,-4px_-4px_8px_#ffffff] dark:shadow-[4px_4px_8px_#0f172a,-4px_-4px_8px_#1e293b] hover:shadow-[2px_2px_4px_#d1d5db,-2px_-2px_4px_#ffffff] dark:hover:shadow-[2px_2px_4px_#0f172a,-2px_-2px_4px_#1e293b] cursor-pointer">
                        <span className="text-xs font-medium text-primary">Explore</span>
                        <div className="w-5 h-5 rounded-lg bg-primary/10 flex items-center justify-center">
                            <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l8 8-8 8M4 12h16" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* Neumorphic Subtitle */}
            {item.subtitle && (
                <div className='absolute opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 duration-600 transition-all ease-out rounded-xl bg-gradient-to-br from-background to-muted/40 shadow-[8px_8px_16px_#d1d5db,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0f172a,-8px_-8px_16px_#1e293b] p-4 right-6 py-2 -bottom-4 max-w-[320px] z-20'>
                    <h3 className='font-medium text-foreground text-sm mb-1'>{item.subtitle}</h3>
                </div>
            )}
        </article>



    )
}

