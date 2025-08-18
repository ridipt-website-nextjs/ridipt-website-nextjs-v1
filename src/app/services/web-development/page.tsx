'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import Header from '@/components/section-heading';
import Section from '@/components/section-structure'
import Services from '@/components/portfolio-highlights-section';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { services_tech_stack, web_dev_services, web_dev_services_second_section } from '@/config/constant';
import Lottie from 'lottie-react';
import { AppWindowIcon, Check, CodeIcon } from 'lucide-react';
import ServiceDetailSection from '@/components/industry-section';
import MessageSection from '@/components/message-section';
import { NavbarButton } from '@/components/ui/resizable-navbar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';

// Remove this import since we'll use it differently
// import Shape from '@assets/backgrounds/bg-shape.svg'

const content = [
  {
    title: "Custom Web Development Solutions",
    description:
      "Complete website development with integrated analytics, security features, and responsive design. Built for scalability and performance with modern web technologies.",
    image: require('@assets/animations/animation1.json'),
    isAnimation: true,
    highlights: [
      "Real-time analytics dashboard",
      "Advanced security protocols",
      "Mobile-responsive design",
      "Custom CMS integration"
    ],
  }
];

const page = () => {
  return (
    <Structure
      className='!p-0 !-top-[var(--header-height)]'
    >
      {/* hero section */}
      <HeroSection
        heading='Web Development'
        subheading='Your Premier Website Development Partner'
        description='At Ridipt Technologies, we are a leading website development company with a team of skilled web developers dedicated to delivering outstanding solutions. We specialize in creating e-commerce platforms, web applications, and social networks that provide a seamless user experience—all delivered on time. Our commitment to best-in-class functionality and our ability to provide tailored solutions make us the ideal partner for your web development needs.'
        content={
          <div className='relative overflow-hidden'>

            <Image
              src={require('@assets/backgrounds/we-development.jpg')}
              alt='Web Development'
              width={500}
              height={500}
              className=' shadow-lg z-20 block aspect-square h-[500px]  w-full object-cover'
            />
          </div>
        }
        className=' !mt-0 w-full'
        subSection={false}
      />


      {/* section 2: Our Website Development Services and Solutions */}

      <Services
        heading='Empowering Your Digital Presence'
        subheading='Our Website Development ServiEces and Solutions'
        description='At Ridipt Technologies, we benefit our clients by delivering reliable and cost-effective solutions that utilize modern methodologies combined with the latest technologies. Our goal is to meet your development needs by thoroughly analyzing and understanding your essential requirements on a deeper level. Achieve exponential growth with our innovative development potential.'
        content={web_dev_services}
        CustomCard={Card}

      />

      {/* section 3 */}
      <Section
        className='!mt-0 !mb-0'
      >

        <Header
          headingStyle='absolute -top-[10px] scale-0 group-hover:scale-100 group-hover:shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out '
          heading='Innovative Digital Solutions for Your Growth'
          subheading='Our meticulously crafted solutions are guaranteed to be scalable, user-friendly, and technically elegant in every fundamental aspect.'
          description='The solutions we carefully craft are guaranteed to be scalable, user-friendly, and technically elegant in every fundamental aspect. We achieve strong retention among a diverse clientele by promising progressive business growth. By embracing flexibility across various industries worldwide, we adapt to client demands through extensive research. Our mission is to deliver secure and scalable solutions utilizing state-of-the-art technologies.'
          className='items-start group relative container rounded-lg bg-border/30 p-6 px-8 hover:shadow-lg transition-all ease-in-out duration-300 '
        />
      </Section>

      {/* section 4 */}
      <ServiceDetailSection
        heading='Building the Future of Web Experiences'
        subheading='Next-gen solutions that are scalable, elegant, and built to grow with you.'
        description='From SaaS platforms to e-commerce portals, our tailored solutions empower businesses with scalable, secure, and user-centric technologies designed for long-term growth.'
        industry={web_dev_services_second_section}
      />

      {/* section 5 */}
      <MessageSection
        heading='We Will Build the Best for You'
        subheading='Transforming Ideas into Powerful Digital Solutions
Empowering Your Business with Cutting-Edge Web Development
Innovative Solutions, Exceptional Results'
        AddOnComponent={<>
          <div
            className='flex flex-1 justify-center items-center z-[20] w-full'
          >
            <NavbarButton className="bg-secondary text-secondary-foreground hover:text-secondary hover:bg-secondary-foreground transition-all duration-300 ease-in-out" variant="primary">Contact us</NavbarButton>
          </div>
        </>}
      />


      {/* section 6: Tech Stacks */}
      <Section>
        <Header
          heading='Our Website Development Tech-Stack'
          subheading='Empowering Businesses with Next-Gen Technologies
            Scalable, Resilient, and Future-Ready Solutions'
          description='We empower enterprises and businesses by delivering next-generation solutions built on scalable and unshakable technologies. By staying at the forefront of innovation, our team leverages cutting-edge servers, databases, frontend frameworks, and UI components to craft dynamic and robust digital experiences.
            Our approach ensures that every website and application is designed for seamless functionality and exceptional user engagement, enabling your business to thrive in the digital age.'
        />

        <TechStack />
      </Section>
    </Structure >
  )
}


const Card = ({ item, index: idx }: {
  item: {
    title: string;
    description: string;
    image: any;
    isAnimation?: boolean;
    highlights?: string[];
  },
  index: number
}) => {
  return <>
    <article
      key={idx}
      className='flex items-center gap-8 md:odd:flex-row-reverse  my-10'
    >
      <div
        className='relative z-10 flex h-16 w-16 shrink-0 items-center justify-center  border border-border/50 bg-card'
      >
        <span
          className='text-xl font-serif text-accent-foreground'
        >{idx + 1}</span>
      </div>
      <div
        className='grid md:grid-cols-2 gap-8 md:odd:flex-row-reverse border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 ease-in-out bg-card p-6'
      >
        <div
          className='space-y-4'
        >
          <h3
            className='text-2xl text-accent-foreground '
          >{item.title}</h3>
          <p
            className='text-muted-foreground'
          >
            {item.description}
          </p>
          <ul
            className='flex flex-col items-start gap-3 pl-2 md:text-lg'
          >
            {item?.highlights?.map((highlight, idx) => (
              <li
                key={idx}
                className='flex items-center gap-4 font-normal text-muted-foreground'
              >
                <span
                  className='flex size-6 items-center justify-center rounded-full bg-secondary'
                >
                  <Check
                    size={16}
                    className="text-muted-foreground"
                  />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div
          className='relative aspect-video overflow-hidden'
        >
          {item.isAnimation ? (
            <Lottie
              animationData={item.image}
              loop={true}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              className='object-cover w-full h-full'
              height={500}
              width={500}
            />
          )}

        </div>
      </div>
    </article>
  </>
}


const TechStack = () => {
  return (
    <>
      <div className="w-full max-w-6xl mx-auto">
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="flex flex-row gap-3 w-full mb-8">
            <TabsTrigger
              value="frontend"
              className="flex flex-1 text-muted-foreground bg-secondary rounded-full p-2 px-3.5 justify-center items-center gap-2 data-[state=active]:bg-card data-[state=active]:border-secondary data-[state=active]:border-2 data-[state=active]:text-primary"
            >
              <CodeIcon className="w-4 h-4" />
              Frontend
            </TabsTrigger>
            <TabsTrigger
              value="backend"
              className="flex flex-1 text-muted-foreground bg-secondary rounded-full p-2 px-3.5 justify-center items-center gap-2 data-[state=active]:bg-card data-[state=active]:border-secondary data-[state=active]:border-2 data-[state=active]:text-primary"
            >
              <AppWindowIcon className="w-4 h-4" />
              Backend
            </TabsTrigger>
            <TabsTrigger
              value="cms"
              className="flex flex-1 text-muted-foreground bg-secondary rounded-full p-2 px-3.5 justify-center items-center gap-2 data-[state=active]:bg-card data-[state=active]:border-secondary data-[state=active]:border-2 data-[state=active]:text-primary"
            >
              CMS
            </TabsTrigger>
            <TabsTrigger
              value="databases"
              className="flex flex-1 text-muted-foreground bg-secondary rounded-full p-2 px-3.5 justify-center items-center gap-2 data-[state=active]:bg-card data-[state=active]:border-secondary data-[state=active]:border-2 data-[state=active]:text-primary"
            >
              Databases
            </TabsTrigger>
          </TabsList>

          {Object.entries(services_tech_stack[0].items).map(([category, technologies]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {technologies.map((tech, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center gap-3 p-5 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 hover:scale-105"
                  >
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/50 p-2 group-hover:bg-secondary transition-colors">
                      <Image
                        src={tech.image}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="dark:invert"
                      />
                    </div>
                    <span className="text-sm top-full -translate-y-1/2 p-1 rounded-lg border border-border px-2 bg-card scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 opacity-0 group-hover:opacity-100 absolute font-medium text-center text-muted-foreground group-hover:shadow-lg">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

    </>
  )
}
export default page
