import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { HeroCard } from './cards';
import { contactInfo, socialMediaCards } from '@/config/content/careers';
import Link from 'next/link';
export const CareerHero = ({ heading, subheading, description }: {
    heading: string,
    subheading: string,
    description: string
}) => {
    return <Section className={`relative !pt-0 !mt-0 !py-5 !pb-10 mb-0 max-w-none md:mt-5`}>
        <div className='container px-3 !flex flex-wrap !justify-start items-end !flex-row !gap-10 md:!gap-20'>
            <div className='flex-1 relative pt-10 pl-0  basis-[500px] min-w-0'>
                <Header
                    heading={heading}
                    subheading={subheading}
                    headingStyle='shadow'
                    descriptionComponent={
                        <div className="flex-1">
                            <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                {description}
                            </p>

                            {/* Contact Information Cards */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-6">
                                {contactInfo.map((contact, index) => (
                                    <Link href={`${contact.link}`} key={index} className="flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:border-accent/30">
                                        <div className="flex p-2 rounded-full bg-accent-foreground items-center justify-center w-8 h-8 ">
                                            <contact.icon className="w-4 h-4 text-accent" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">
                                            {contact.text}
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    }
                    className="items-start !max-w-none text-left"
                />
            </div>

            <div className="flex-1 basis-[400px] min-w-0">
                <HeroCard items={socialMediaCards} />
            </div>
        </div>
    </Section>
}