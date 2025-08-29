import { ChevronRight } from "lucide-react";
import Image from "next/image"

export const Card1 = ({ index, item }: {
    item: any, index: number
}) => {
    return <article
        key={index}
        className={`group flex flex-1 border border-border transition-all duration-300 ease-in-out hover:shadow-lg p-6 rounded-lg flex-col gap-4 bg-white dark:bg-card hover:border-${item.colors.primary}-300 h-full min-h-[320px]`}
    >
        {/* Simple icon */}
        <div className={`w-12 h-12 ${item.colors.bg} rounded-lg flex items-center justify-center`}>
            <Image
                src={item.image}
                alt={item.title}
                height={20}
                width={20}
                className={`${item.colors.icon}`}
            />
        </div>

        {/* Content */}
        <div className='flex flex-col gap-3 flex-grow'>
            <h5 className={`text-lg font-semibold ${item.colors.text}`}>
                {item.title}
            </h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
            </p>
        </div>

        {/* Simple bottom accent */}
        <div className={`w-full h-1 ${item.colors.gradient}/30 bg-gradient-to-r rounded-full`}></div>
    </article>
}

import { useState } from 'react';

export const Card2 = ({item, idx, variant = 'default', showBadge = false, clickable = false}:{
    item: any;
    idx: number;
    variant?: 'default' | 'premium' | 'minimal' | 'colored';
    showBadge?: boolean;
    clickable?: boolean;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const variantStyles = {
        default: 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-lg',
        premium: 'border-gray-200 bg-gradient-to-br from-white to-gray-50 hover:border-blue-200 hover:shadow-xl hover:from-blue-50/30 hover:to-white',
        minimal: 'border-transparent bg-gray-50 hover:bg-white hover:border-gray-100 hover:shadow-md',
        colored: 'border-blue-100 bg-blue-50/30 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-lg'
    };

    const iconBgStyles = {
        default: 'bg-gray-50 group-hover:bg-blue-50',
        premium: 'bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200',
        minimal: 'bg-white group-hover:bg-blue-50 border border-gray-200',
        colored: 'bg-blue-100 group-hover:bg-blue-200'
    };

    return (
        <article
            key={idx}
            className={`
                group relative overflow-hidden cursor-pointer
                transition-all duration-300 ease-out
                w-[320px] shrink-0 flex flex-col gap-5 rounded-2xl p-6
                lg:w-full lg:flex-row lg:p-6
                hover:-translate-y-1
                ${variantStyles[variant]}
                ${clickable ? 'hover:scale-[1.01]' : ''}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background decoration for premium variant */}
            {variant === 'premium' && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-100/40 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            {/* Badge */}
            {showBadge && (
                <div className="absolute top-4 right-4 px-2 py-1 bg-blue-500 text-white text-xs font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    New
                </div>
            )}

            {/* Icon */}
            <figure className={`
                flex size-16 shrink-0 items-center justify-center rounded-2xl p-4
                transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                ${iconBgStyles[variant]}
            `}>
                <Image
                    alt={item.title}
                    className="transition-all duration-300 group-hover:scale-125"
                    height={24}
                    src={item.image}
                    width={24}
                />
            </figure>

            {/* Content */}
            <div className="flex flex-col items-start gap-3 flex-grow relative z-10">
                <h5 className="text-xl font-semibold text-primary group-hover:text-accent-foreground transition-colors duration-300 line-clamp-2 leading-tight">
                    {item.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                </p>
                
                {/* Progress indicator or additional info */}
                <div className="flex items-center gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-1 bg-accent-foreground/50 rounded-full overflow-hidden">
                        <div className="w-full h-full bg-accent-foreground rounded-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200" />
                    </div>
                    <span className="text-xs text-accent-foreground font-medium">Learn more</span>
                </div>
            </div>

            {/* Enhanced arrow indicator */}
            <div className="lg:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 hidden">
                <div className="w-10 h-10 rounded-full text-muted-foreground flex items-center justify-center   transition-colors duration-300">
                    <ChevronRight/>
                </div>
            </div>

            {/* Bottom accent line */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" /> */}
        </article>
    );

}