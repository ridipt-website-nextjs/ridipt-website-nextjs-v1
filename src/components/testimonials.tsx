'use client';
import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Section from '@/components/section-structure';
// Types
interface TestimonialData {
  image: string;
  details: string;
  name: string;
  position: string;
}

interface SingleTestimonialProps {
  image: string;
  details: string;
  name: string;
  position: string;
  className?: string;
}

// Testimonials data array
export const testimonialsData: TestimonialData[] = [
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e", // business professional
    details: "Working with this team has been absolutely incredible. Their attention to detail and commitment to excellence is unmatched. They delivered beyond our expectations!",
    name: "Larry Diamond",
    position: "Chief Executive Officer"
  },
  {
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39", // woman portrait
    details: "The professionalism and expertise shown throughout our project was remarkable. They transformed our vision into reality with precision and creativity.",
    name: "Sarah Johnson",
    position: "Product Manager"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d", // man portrait
    details: "Outstanding service from start to finish. The team's dedication and innovative approach helped us achieve results we never thought possible.",
    name: "Michael Chen",
    position: "Founder & CTO"
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e", // woman smiling
    details: "Exceptional quality and timely delivery. Their technical expertise combined with excellent communication made our collaboration seamless and productive.",
    name: "Emily Rodriguez",
    position: "Marketing Director"
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e", // man smiling
    details: "The level of innovation and problem-solving capabilities demonstrated by this team is truly impressive. They exceeded every milestone we set.",
    name: "David Thompson",
    position: "Operations Manager"
  }
];


const Testimonial: React.FC = () => {
  const sliderRef = useRef<{ swiper: SwiperType } | null>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <Section className="!mt-0 !mb-0">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <Swiper
          ref={sliderRef}
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          loopAdditionalSlides={2}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          breakpoints={{
            640: {
              spaceBetween: 30,
            },
            768: {
              spaceBetween: 40,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonialsData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <SingleTestimonial
                image={testimonial.image}
                details={testimonial.details}
                name={testimonial.name}
                position={testimonial.position}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-3 md:mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border bg-card hover:bg-muted transition-colors duration-200 flex items-center justify-center"
          >
            <svg className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default Testimonial;

export const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
  image,
  details,
  name,
  position,
}) => {
  return (
    <div className="relative bg-white rounded-2xl p-8 m-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8 bg-blue-500 rounded-full p-3 shadow-lg">
        <svg 
          className="w-6 h-6 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
        </svg>
      </div>

      {/* Testimonial Text */}
      <div className="mt-8 mb-6">
        <p className="text-gray-700 text-lg italic leading-relaxed text-center">
          "{details}"
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 flex-shrink-0">
          <Image 
            src={image} 
            alt={name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-lg text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </div>
    </div>
  );
};


export const TestimonialsCard2: React.FC<SingleTestimonialProps> = ({ 
  image, 
  details, 
  name, 
  position,
  className
}) => {
  return (
    <div className={`"${className} bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-8 max-w-5xl mx-auto border border-primary/10`}>
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Section - Company Card */}
        <div className="flex-shrink-0 lg:w-80">
          <div className="bg-gradient-to-br dark:bg-none dark:bg-secondary from-gray-50 to-gray-100 rounded-lg p-6 border-l-4 border-blue-500 relative">
            {/* Logo Container */}
            <div className="w-20 h-20 bg-card rounded-lg shadow-sm flex items-center justify-center mb-4 border">
              <img 
                src={image} 
                alt={name}
                className="w-16 h-16 object-contain"
              />
            </div>
            
            {/* Company Info */}
            <h3 className="text-2xl font-bold text-accent-foreground uppercase tracking-wider mb-2">
              {name}
            </h3>
            <p className="text-muted-foreground text-sm font-medium">
              {position}
            </p>
            
            {/* Decorative Pattern */}
            <div className="absolute top-4 right-4 opacity-10">
              <div className="grid grid-cols-6 gap-1">
                {[...Array(24)].map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Quote */}
        <div className="flex-1 relative py-4">
          {/* Opening Quote */}
          <svg 
            className="absolute -top-2 -left-2 w-12 h-12 text-teal-400 opacity-50"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
          
          <div className="pl-8 pr-4">
            <p className="text-muted-foreground text-xl leading-relaxed font-light">
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
