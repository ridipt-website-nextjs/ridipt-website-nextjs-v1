import React from 'react'
import Structure from '@/components/common/page-structure';
import Image from 'next/image';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';


const page = () => {
    return (
        <Structure>
            {/* Hero Section */}
            <HeroSection
                heading='User-Centric UI/UX Design Services'
                subheading='Intuitive Design, Exceptional Experience'
                description={`Crafting seamless and intuitive designs tailored to meet your user expectations. At Ridipt, we focus on creating visually appealing and functional designs that amplify user engagement and ensure memorable interactions. Elevate your product's digital presence with our expert UI/UX design solutions that blend innovation with usability to deliver stunning designs.`}
                content={
                    <div className='flex-2 h-auto w-auto overflow-hidden p-10 md:p-15 px-10 pt-10'>
                        <div
                            className='absolute left-6 shadow top-16 h-5 w-5 rotate-45 bg-blue-300'
                        >

                        </div>
                        <div
                            className='relative z-[2]'
                        >
                            <div
                                className='absolute inset-0 translate-8 translate-x-10 bg-blue-400 -z-[1]'
                            />
                            <div
                                className='absolute inset-0 -right-5.5 translate-15 -translate-x-10 bg-blue-100 -z-[2]'
                            />
                            <Image
                                src={require('@assets/backgrounds/bg1.jpg')}
                                alt='UI/UX Design Services'
                                width={500}
                                height={500}
                                className='shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
                            />
                        </div>
                    </div>
                }
                className='!mt-0 w-full relative !flex-wrap-reverse'
                subSection={false}
            />
        </Structure>
    )
}

export default page

const Hero = () => {
    return
}