'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import Header from '@/components/section-heading';
import Section from '@/components/section-structure';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TestimonialsCard2, testimonialsData } from '@/components/testimonials';

const page = () => {
    return (
        <Structure className=''>
            <div className='flex flex-wrap-reverse !justify-start items-end pt-10 !container px-3 !flex-row !gap-1 !md:gap-60'>
                <div className='flex-10 relative justify-baseline'>
                    <Header
                        heading='testimonials'
                        subheading="What Our Clients Say"
                        description="We take pride in delivering exceptional service and results. Here's what our clients have to say about their experience with us."
                        descriptionComponent={<>
                            <p className="text-pretty text-justify text-sm sm:text-base md:text-lg lg:text-xl font-light text-muted-foreground leading-relaxed space-y-4">
                                Our clients' success stories speak volumes about our commitment to excellence. We are dedicated to providing top-notch services that drive real results. Here's what some of our valued clients have to say about their experience working with us.
                            </p>
                            <Button 
                                // variant={'ghost'}
                                className='items-start mt-3 py-2 px-5 h-auto text-center transition-all ease-in-out capitalize rounded-2xl duration-300 whitespace-nowrap shadow  '

                            >Read more</Button>
                        </>}
                        className='items-start text-left !mt-6 '
                    />
                </div>
                <div
                    className='flex-2 basis-[500px] min-w-0 h-auto w-auto overflow-hidden p-10 md:p-15 px-10'
                >
                    <Image
                        src={require('@assets/backgrounds/testimonials.jpg')}
                        alt='Education Technology Solutions'
                        width={500}
                        height={500}
                        className='shadow-lg z-20 block aspect-square h-[200px] md:h-[400px] w-full object-cover'
                    />
                </div>
            </div>


            {/* Section */}
            <Section
                id='testimonials'
                className='!mt-10 !mb-0 !py-5 !pb-10 max-w-none '
            >
                <div className='container flex flex-col gap-10 justify-center items-center'>
                    {/* card */}
                    {testimonialsData.map((testimonial, index) => (
                        <TestimonialsCard2
                            key={index}
                            image={testimonial.image}
                            details={testimonial.details}
                            name={testimonial.name}
                            position={testimonial.position}
                        />
                    ))}
                </div>
            </Section>
        </Structure>
    )
}

export default page