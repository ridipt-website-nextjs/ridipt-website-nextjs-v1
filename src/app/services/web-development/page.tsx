'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import Header from '@/components/section-heading';
import Section from '@/components/section-structure'
import FAQ from '@/components/faq-section';
import Services from '@/components/portfolio-highlights-section';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { business_process, services_tech_stack, streamlining_development, web_dev_services, web_dev_services_second_section } from '@/config/constant';
import ServiceDetailSection from '@/components/industry-section';
import MessageSection from '@/components/message-section';
import {
  ServiceCard,
  BusinessProcessSection,
  CallToActionContent,
  ProcessCardsSection,
  PromotionalSection,
  TechStackSection
} from '@/components/services/';

const page = () => {
  return (
    <Structure className='!p-0 !-top-[var(--header-height)]'>
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
        className=' !mt-0 w-full  !flex-wrap-reverse'
        subSection={false}
      />

      {/* section 2 */}
      <Services
        heading='Empowering Your Digital Presence'
        subheading='Our Website Development Services and Solutions'
        description='At Ridipt Technologies, we benefit our clients by delivering reliable and cost-effective solutions that utilize modern methodologies combined with the latest technologies. Our goal is to meet your development needs by thoroughly analyzing and understanding your essential requirements on a deeper level. Achieve exponential growth with our innovative development potential.'
        content={web_dev_services}
        CustomCard={ServiceCard}
        className='!container !max-w-auto !mb-0'
      />

      {/* section 4 */}
      <ServiceDetailSection
        heading='Building the Future of Web Experiences'
        subheading='Next-gen solutions that are scalable, elegant, and built to grow with you.'
        description='From SaaS platforms to e-commerce portals, our tailored solutions empower businesses with scalable, secure, and user-centric technologies designed for long-term growth.'
        industry={web_dev_services_second_section}
      />

      {/* section 5 */}
      <MessageSection
        className='!bg-blue-50 dark:!bg-card'
        content={<CallToActionContent
          heading="We Will Build the Best for You"
          subheading="Transforming Ideas into Powerful Digital Solutions Empowering Your Business with Cutting-Edge Web Development Innovative Solutions, Exceptional Results"
          buttonText="Contact us"
          onButtonClick={() => alert("Button clicked!")}
        />
        }
      />

      {/* section 6: Tech Stack */}
      <TechStackSection
        heading="Our Website Development Tech-Stack"
        subheading="Empowering Businesses with Next-Gen Technologies Scalable, Resilient, and Future-Ready Solutions"
        description="We empower enterprises and businesses by delivering next-generation solutions built on scalable and unshakable technologies. By staying at the forefront of innovation, our team leverages cutting-edge servers, databases, frontend frameworks, and UI components to craft dynamic and robust digital experiences. Our approach ensures that every website and application is designed for seamless functionality and exceptional user engagement, enabling your business to thrive in the digital age."
        techStackData={services_tech_stack['Web Development']}
      />

      {/* section 7 */}
      <PromotionalSection
        title="Looking for the Best"
        highlightText="Website Development Company?"
        subtitle="We Deliver Scalable Solutions with Cutting-Edge Technologies"
        description="With years of expertise, we specialize in crafting scalable and future-ready web solutions by seamlessly integrating the latest trends in technology. Partner with us to transform your ideas into impactful digital realities."
        buttonText="Get Free Estimation"
        animationData={require('@assets/animations/Developer.json')}
      />

      {/* section 8 */}
      <ProcessCardsSection
        heading="Streamlining the Development Journey"
        subheading="From Concept to Growth"
        description="We provide end-to-end solutions that simplify the entire product lifecycle. By combining research, innovation, design, and agile development, we ensure seamless progress from idea to launch — and continuous growth beyond."
        processes={streamlining_development}
      />

      {/* section 9 */}
      <BusinessProcessSection
        heading="Our Business Process"
        subheading="Streamlined & Efficient"
        description="We follow a structured approach to ensure quality, consistency, and success at every stage of our business process."
        processes={business_process}
      />

      {/* section 10: FAQ */}
      <FAQ />
    </Structure>
  )
}
export default page;
