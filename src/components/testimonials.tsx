'use client';
import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import Section from '@/components/section-structure';
import Link from "next/link";
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
    image: "https://img.icons8.com/3d-fluency/512/user-male-circle.png", // cartoon male avatar
    details: "We partnered with Ridipt to build our healthcare web application's front end, and the results were outstanding. Their team demonstrated deep technical expertise, delivering a sleek, user-friendly interface that enhanced our platform's usability. The intuitive design improved patient engagement, while seamless navigation empowered healthcare providers to manage data efficiently. Ridipt's dedication to quality, timely delivery, and clear communication made the entire process stress-free. Highly recommended for anyone seeking top-notch web development services not only in the healthcare sector but also in other sectors!",
    name: "Tarun Wanderer",
    position: "Founder & CEO, Carer.ai"
  },
  {
    image: "https://img.icons8.com/3d-fluency/512/user-male-circle.png", // cartoon male avatar
    details: "We used Ridipt as our off-shore Software Development team. Their work was professional and on time and within budget. Business team was a pleasure to deal with. Highly recommend!",
    name: "Bharat Anadure",
    position: "Founder & CEO, GreenVue"
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
          watchSlidesProgress={true}
          // autoHeight={false}
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
          className="testimonial-swiper !pb-4"
          style={{ minHeight: '400px', maxHeight: '500px' }}
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
    <Link href={'/testimonials'} className="relative flex flex-col justify-between bg-background rounded-2xl p-8 m-5 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-border max-h-[420px]">
      {/* Quote Icon */}
      <div className="absolute -top-4 left-8 bg-accent-foreground rounded-full p-3 shadow-lg">
        <svg
          className="w-6 h-6 text-secondary"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
        </svg>
      </div>

      {/* Testimonial Text with Clamp */}
      <div className="mt-8 mb-6 flex flex-1 relative">
        <div className="text-container relative w-full">
          <p
            className="text-muted-foreground self-center text-lg italic leading-relaxed text-center line-clamp-8 overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 8,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxHeight: '200px' // Roughly 8 lines max
            }}
          >
            "{details}"
          </p>

          {/* Fade effect for long text */}
          <div
            className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none opacity-75"
            style={{
              display: details.length > 300 ? 'block' : 'none'
            }}
          />
        </div>
      </div>

      {/* Author Section */}
      <div className="flex items-center gap-4 pt-6 border-t border-border mt-auto">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-border flex-shrink-0">
          <Image
            src={image}
            alt={name}
            width={56}
            height={56}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-lg text-accent-foreground truncate">{name}</h4>
          <p className="text-sm text-muted-foreground truncate">{position}</p>
        </div>
      </div>
    </Link>
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
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:!bg-none dark:!bg-background rounded-lg p-6 border-l-4 border-blue-500 relative">
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
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
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
