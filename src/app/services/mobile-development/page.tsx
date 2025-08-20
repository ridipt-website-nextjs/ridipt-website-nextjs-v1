'use client'
import React from 'react'
import Structure from '@/components/common/page-structure';
import FAQ from '@/components/faq-section';
import { mobile_dev_faq } from '@/config/FAQs';
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
import { 
  mobile_app_services, 
  mobile_app_services_second_section, 
  mobile_business_process, 
  mobile_streamlining_development 
} from '@/config/content/mobile-development';

const page = () => {
  return (
    <Structure className='!p-0 !-top-[var(--header-height)]'>

      {/* hero section */}
      <HeroSection
        heading='Mobile Application Development'
        subheading='Empowering Your Business with Cutting-Edge Mobile Apps'
        description={`In today's digital-first world, a powerful mobile application isn’t just a luxury—it’s a necessity. At Ridipt Technologies, we specialize in building innovative, high-performance mobile apps that drive growth, boost engagement, and optimize efficiency. Whether you're a startup looking to make an impact or an enterprise aiming to scale, we are your trusted partner in mobile app development.`}
        content={
          <div className='relative overflow-hidden'>
            <Image
              src={require('@assets/backgrounds/we-development.jpg')} // Replace with mobile-relevant image if possible
              alt='Mobile App Development'
              width={500}
              height={500}
              className='shadow-lg z-20 block aspect-square h-[500px] w-full object-cover'
            />
          </div>
        }
        className='!mt-0 w-full !flex-wrap-reverse'
        subSection={false}
      />

      {/* Mobile services section */}
      <Services
        heading='Transform Your Ideas into Powerful Mobile Solutions'
        subheading='Our Mobile App Development Services'
        description='At Ridipt Technologies, we empower businesses by delivering cutting-edge mobile applications that combine innovation with functionality. From native iOS and Android apps to cross-platform solutions, we create mobile experiences that engage users and drive business growth. Our expert team leverages the latest technologies and frameworks to build scalable, secure, and user-friendly mobile applications.'
        content={mobile_app_services}
        CustomCard={ServiceCard}
        className='!container !max-w-auto !mb-0'
      />

      {/* Detailed mobile solutions description */}
      <ServiceDetailSection
        heading='Crafting Next-Generation Mobile Experiences'
        subheading='Native, Cross-Platform, and Progressive Mobile Solutions'
        description={`From native iOS and Android applications to cross-platform solutions using React Native and Flutter, we deliver mobile apps that perform flawlessly across all devices. Our solutions include e-commerce apps, social platforms, business applications, and enterprise mobility solutions designed for optimal performance and user engagement.`}
        industry={mobile_app_services_second_section}
      />

      {/* Call to Action with mobile-focused messaging */}
      <MessageSection
        className='!bg-blue-50 dark:!bg-card'
        content={
          <CallToActionContent
            heading="We Build Powerful Mobile Experiences"
            subheading="From native iOS & Android apps to cross-platform solutions, we craft seamless mobile experiences that engage users and drive business growth."
            buttonText="Start Your Mobile Project"
            onButtonClick={() => alert("Mobile CTA button clicked!")}
          />
        }
      />

      {/* Tech Stack for Mobile Development */}
      <TechStackSection
        heading="Our Mobile Development Tech-Stack"
        subheading="Cutting-Edge Technologies for Superior Mobile Apps"
        description="We leverage the most advanced mobile development technologies to create exceptional user experiences. Our tech stack includes native development with Swift and Kotlin, cross-platform frameworks like React Native and Flutter, robust backend solutions, and modern deployment tools. Every mobile application is built with scalability, security, and performance in mind."
        techStackData={services_tech_stack['Mobile Development']}
      />

      {/* Promotional Section highlighting mobile expertise */}
      <PromotionalSection
        title="Looking for Expert"
        highlightText="Mobile App Developers?"
        subtitle="We Build Apps That Users Love and Businesses Thrive On"
        description="With years of expertise in mobile app development, we transform your vision into powerful mobile solutions. From concept to App Store deployment, we handle every aspect of mobile app development with precision and innovation. Partner with us to create mobile experiences that set you apart from the competition."
        buttonText="Start Your Mobile Project"
        animationData={require('@assets/animations/Developer.json')} // Mobile related animation
      />

      {/* Mobile app dev journey/process section */}
      <ProcessCardsSection
        heading="Our Mobile App Development Journey"
        subheading="From Ideation to App Store Success"
        description="We follow a comprehensive mobile development process that ensures your app not only meets your business objectives but also delivers an exceptional user experience. Our agile approach combines strategic planning, cutting-edge design, robust development, and thorough testing to create mobile apps that succeed in the competitive app marketplace."
        processes={mobile_streamlining_development}
      />

      {/* Agile Mobile Business Process */}
      <BusinessProcessSection
        heading="Our Mobile Development Process"
        subheading="Agile & Results-Driven Methodology"
        description="We follow a proven methodology that ensures successful mobile app delivery. From initial consultation and market research to final deployment and post-launch support, every step is carefully planned and executed to maximize your app's potential for success."
        processes={mobile_business_process}
      />

      {/* Mobile focused FAQ */}
      <FAQ content={mobile_dev_faq} />

    </Structure>
  )
}

export default page;
