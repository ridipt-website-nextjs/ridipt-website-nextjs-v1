import Image from 'next/image';
import React from 'react'
import Header from './section-heading';

const page = ({ industry, heading, subheading, description }: {
    industry: {
        title: string;
        description: string;
        subtitle?: string;
        image: string;
    }[],
    heading?: string;
    subheading?: string;
    description?: string;
}) => {
    return (
        <section className='my-20  '>
            <section
                className='flex flex-col  items-center justify-center w-full container mx-auto my-10 gap-10'
            >

                {/* heading section */}
                <Header
                    heading={heading || 'Quick Connect'}
                    subheading={subheading || 'Discover Digital Innovations'}
                    description={description || `We provide comprehensive product strategies, insightful market research, intuitive UX design, and an expedited path to market launch.`}
                    className='text-center'
                />

                {/* we are use dynamic header thats why this is commented if there is problem in header component then uncomment this */}
                {/* <div
                    className='flex flex-col gap-3 items-center self-center'
                >
                    <h3
                        className='flex min-h-7 items-center justify-center gap-2 rounded-full  px-3.5 pb-px text-sm font-medium bg-secondary  text-muted-foreground md:text-base'
                    >
                        Quick Connect
                    </h3>
                    <div
                        className='flex max-w-[800px] flex-col justify-center gap-1 items-center self-center [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-center'
                    >
                        <h4 title="Discover Digital Innovations">Discover Digital Innovations</h4>
                    </div>
                    <p className="max-w-screen-md text-pretty text-lg font-light text-muted-foreground md:text-xl text-center">We provide comprehensive product strategies, insightful market research, intuitive UX design, and an expedited path to market launch.</p>
                </div> */}


                {/* content  */}
                <div
                    className={`grid w-full grid-cols-1 ${industry[0].subtitle ? 'gap-6' : 'gap-4'} lg:grid-cols-3 lg:gap-5`}
                >
                    {industry.map((item, idx) => (

                        <article
                            key={idx}
                            className={`group flex duration-300 hover:shadow-md transition-all ease-in-out flex-col gap-4 rounded-lg border border-[--border] p-4 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:border-[--dark-border] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] ${item.subtitle && '!pb-10 relative'}`}
                        >
                            <figure
                                className='flex size-9 items-center justify-center rounded-full border border-[--border] p-2 dark:border-[--dark-border] bg-card'
                            >
                                <Image
                                    alt={item.title}
                                    className="dark:invert"
                                    height={24}
                                    src={item.image}
                                    width={24}
                                />
                            </figure>
                            <div
                                className='flex flex-col items-start gap-1'
                            >
                                <h5 className="text-lg font-medium text-accent-foreground">{item.title}</h5>
                                <p className="text-pretty text-muted-foreground">{item.description}</p>
                            </div>

                            {item.subtitle && (
                                <div
                                    className='absolute group-hover:shadow-lg opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-300 flex transition-all ease-in-out flex-col gap-4 rounded-lg border border-[--border] p-2 [box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] dark:border-[--dark-border] dark:[box-shadow:_70px_-20px_130px_0px_rgba(255,255,255,0.05)_inset] right-[.7rem] bg-card truncate -bottom-[1rem] max-w-[300px]'
                                >
                                    <h3 className='truncate font-medium text-muted-foreground'>{item.subtitle}</h3>
                                </div>
                            )}
                        </article>

                    ))}
                </div>
            </section>
            <section
                className='flex flex-col items-center justify-center my-3 mb-5  w-full container mx-auto  gap-10'
            >
                <article
                    className='flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[rgba(var(--accent-500),0.1)] p-6 dark:bg-[rgba(var(--accent-600),0.1)] lg:flex-row lg:justify-between lg:p-1'
                >
                    <div
                        className='flex flex-col gap-2'
                    >
                        <h4 className="text-3xl font-medium text-primary lg:text-4xl">Ignite Your Digital Journey</h4>
                        <p className="text-lg text-muted-foreground lg:text-xl">We specialize in delivering strong product strategies, thorough market research, seamless UX design, and a swift route to market launch.</p>


                    </div>
                </article>
            </section>
        </section>

    )
}

export default page