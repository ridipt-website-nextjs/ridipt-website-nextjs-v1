'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import FAQ from '@/components/faq-section';
import { uiux_faq } from '@/config/FAQs';
import Services from '@/components/portfolio-highlights-section';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { services_tech_stack } from '@/config/constant';
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
import { ui_ux_business_process, ui_ux_services, ui_ux_services_second_section, ui_ux_streamlining_development } from '@/config/content/ui-ux';

const page = () => {
  return (
    <Structure className='!p-0 !-top-[var(--header-height)]'>

      {/* Hero Section */}
      <HeroSection
        heading='User-Centric UI/UX Design Services'
        subheading='Intuitive Design, Exceptional Experience'
        description={`Crafting seamless and intuitive designs tailored to meet your user expectations. At Ridipt, we focus on creating visually appealing and functional designs that amplify user engagement and ensure memorable interactions. Elevate your product's digital presence with our expert UI/UX design solutions that blend innovation with usability to deliver stunning designs.`}
        content={
          <div className='relative overflow-hidden'>
            <Image
              src={require('@assets/backgrounds/bg1.jpg')}
              alt='UI/UX Design Services'
              width={500}
              height={500}
              className='shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
            />
          </div>
        }
        className='!mt-0 w-full !flex-wrap-reverse'
        subSection={false}
      />

      {/* UI/UX Services Section */}
      <Services
        heading='UI/UX Excellence for Accelerated Growth'
        subheading='Our UI UX Design Services & Solutions'
        description={`Ridipt integrates design-first principles with a creative yet practical approach to elevate your brand's digital presence. Our seasoned experts transform user experiences into strategic assets, ensuring designs that accelerate your business growth. We craft user-centric designs that blend aesthetics and functionality seamlessly.`}
        content={ui_ux_services}
        CustomCard={ServiceCard}
        className='!container !max-w-auto !mb-0'
      />

      {/* Detailed UI/UX Solutions */}
      <ServiceDetailSection
        heading='Data-Driven and Innovatively Designed Solutions'
        subheading='Empowering Brands with Thoughtful Design'
        description={`Our solutions are a result of meticulous research and collaborative innovation. Through extensive research and team collaboration, we craft UI/UX designs that amplify your brand's presence. Our services ensure unmatched accessibility and seamless navigation to create a global impact with accessible, responsive, and strategically crafted digital experiences.`}
        industry={ui_ux_services_second_section}
      />

      {/* Call to Action */}
      <MessageSection
        className='!bg-blue-50 dark:!bg-card'
        content={
          <CallToActionContent
            heading="Designing Intuitive & Impactful Experiences"
            subheading="Through research-driven strategies and innovative design, we craft UI/UX solutions that enhance usability, elevate your brand, and deliver memorable digital experiences."
            buttonText="Explore UI/UX Services"
            onButtonClick={() => alert("UI/UX CTA button clicked!")}
          />

        }
      />

      {/* Tech Stack for UI/UX Design */}
      <TechStackSection
        heading="Our UI UX Design Tech-Stack"
        subheading="Elevate Your Brand with Cutting-Edge Design Solutions"
        description="At Ridipt, we harness top-tier technologies and a skilled team of designers to craft solutions that meet the challenges of today's digital landscape. We integrate a robust technological stack into our UI/UX design process, enabling our clients to effectively showcase their brand to a global audience with innovative, contemporary designs."
        techStackData={services_tech_stack['Mobile Development']}
      />

      {/* Promotional Section */}
      <PromotionalSection
        title="Looking for the Best"
        highlightText="UI UX Design Company?"
        subtitle="We Deliver Scalable Solutions with Cutting-Edge Technologies"
        description="We have extensive experience in delivering scalable solutions that leverage the latest technologies. Our expertise lies in providing scalable solutions that integrate cutting-edge technologies and harness current technological trends to drive success."
        buttonText="Get Free Estimation"
        animationData={require('@assets/animations/Developer.json')}
      />

      {/* UI/UX Design Journey */}
      <ProcessCardsSection
        heading="Our UI/UX Journey"
        subheading="Transform Your Business with Expert UI/UX Design Services"
        description="At Ridipt, we combine innovative design principles, user-centered strategies, and the latest technologies to create visually stunning and highly functional interfaces. Our skilled designers leverage contemporary design trends and research-driven methodologies to create intuitive interfaces that elevate your brand's presence."
        processes={ui_ux_streamlining_development}
      />

      {/* Business Process */}
      <BusinessProcessSection
        heading="Our Business Process"
        subheading="Streamlined & Efficient"
        description="We follow a structured approach to ensure quality, consistency, and success at every stage of our business process."
        processes={ui_ux_business_process}
      />

      {/* FAQ */}
      <FAQ content={uiux_faq} />

    </Structure>
  )
}


export default page;
