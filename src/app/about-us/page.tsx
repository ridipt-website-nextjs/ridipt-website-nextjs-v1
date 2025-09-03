'use client';
import React from 'react'
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { LinkPreview } from '@/components/ui/link-preview';
import Structure from '@/components/common/page-structure';
import { StickyScrollRevealDemo as TechService } from "@/components/tech-services";
import IndusterySection from '@/components/industry-section';
import PortofolioHighlight from '@/components/portfolio-highlights-section';
import { menifesto, vision } from '@/config/constant';
import { FeatureItem } from '@/config/interface';

const page = () => {
    return (
        <Structure>

            {/* About section */}
            <div className='w-full   mx-auto mb-12'>
                <Section>
                    <Header
                        heading="About Us"
                        subheading="Who We Are"
                        descriptionComponent={
                            <div className="w-full">
                                <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                    <span>
                                        Ridipt Technologies is a trusted technology partner, specializing in delivering
                                        custom web portals, mobile app solutions, AI-driven applications, and scalable
                                        cloud architectures.
                                    </span>{" "}
                                    <span>
                                        With innovation at our core, we empower businesses to achieve their goals.
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        Ridipt Technologies is the offshore arm of Progneur Technologies.&nbsp;
                                        <LinkPreview
                                            url="https://www.progneur.com/"
                                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                                        >
                                            Learn more.
                                        </LinkPreview>
                                    </span>
                                    <br />
                                    <br />
                                    <span>
                                        Ridipt Technologies was founded by the same visionaries behind Progneur Technologies —
                                        a global IT services company.
                                    </span>{" "}
                                    <span>
                                        The Indian entity of Progneur was later acquired by Akkodis.&nbsp;
                                        <LinkPreview
                                            url="https://www.akkodis.com/en/newsroom/press-releases/akkodis-acquires-progneur-technologies"
                                            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                                        >
                                            Read more.
                                        </LinkPreview>
                                    </span>
                                </p>
                            </div>
                        }
                        className="items-start text-left "
                    />
                </Section>
            </div>

            {/* Services section */}
            <div className="relative  w-full ">
                <TechService />
            </div>

            {/* vision and mission */}
            <div
                className="relative bg-accent  w-full "
            >

                <PortofolioHighlight
                    className='!border-transparent'
                    content={vision}
                    heading='Our Culture'
                    subheading='vision and mission'

                />
            </div>

            {/* Industry section */}
            <IndusterySection
                industry={menifesto as FeatureItem[]}
                heading='Our Manifesto'
            />


        </Structure>
    )
}

export default page
