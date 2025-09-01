import Header from '@/components/section-heading';
import Section from '@/components/section-structure';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = ({
    heading,
    subheading,
    description,
    className,
    imageBorderColor,
    imageURL
}: {
    heading: string;
    subheading: string;
    description: string;
    className?: string;
    imageBorderColor?: {
        first: string;
        second: string
    };
    imageURL?: string
}) => {
    return <Section
        className={`relative !pt-0 !mt-0 !py-5 !pb-10 max-w-none ${className}`}
    >
        <div className='flex flex-wrap-reverse !justify-start items-end !container px-3 !flex-row !gap-10 !md:gap-30'>
            <div className='flex-1 relative pt-10 pl-8 basis-[500px] min-w-0'>
                <Header
                    heading={heading}
                    subheading={subheading}
                    headingStyle='shadow'
                    descriptionComponent={
                        <div className="flex-1 ">
                            <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                {description}
                            </p>
                            <Button
                                className='items-start mt-6 py-2 px-5 h-auto text-center transition-all ease-in-out capitalize rounded-2xl duration-300 whitespace-nowrap shadow bg-primary text-primary-foreground hover:bg-primary-foreground hover:text-primary hover:border-border border border-primary '
                            >get quote</Button>
                            <div
                                className='absolute left-2 shadow top-22 !-bottom-2 w-2 dark:bg-secondary bg-accent-foreground/50'
                            />
                        </div>
                    }
                    className="items-start !max-w-none text-left "
                />
            </div>
            <div className='flex-2 basis-[500px] min-w-0 h-auto w-auto overflow-hidden p-10 md:p-15 px-10'>
                <div className='relative z-[2] mx-2 mt-4 md:mt-0 md:mx-10'>
                    <div
                        className={`absolute inset-0 dark:bg-card  translate-6 translate-x-6 md:translate-8 md:translate-x-10 ${imageBorderColor?.first || 'bg-accent-foreground/50'} -z-[1]`}
                    />
                    <div
                        className={`absolute inset-0 -right-5.5 dark:bg-popover/50 translate-15 -translate-x-8 md:translate-15 md:-translate-x-10 ${imageBorderColor?.second || 'bg-accent-foreground/20'} -z-[2]`}
                    />
                    <Image
                        src={imageURL || require('@assets/backgrounds/bg1.jpg')}
                        alt='Education Technology Solutions'
                        width={500}
                        height={500}
                        className='shadow-lg z-20 block aspect-square h-[200px] md:h-[400px] w-full object-cover'
                    />
                </div>
            </div>
        </div>
    </Section>
}

export default Hero