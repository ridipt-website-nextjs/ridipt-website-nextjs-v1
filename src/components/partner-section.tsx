import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'
import Headers from './section-heading'

interface Company {
  name: string
  image: string
}

interface PartnersProps {
  companies: Company[]
}

const PartnersSection: React.FC<PartnersProps> = ({ companies }) => {
  return (
    <section className='py-20 relative overflow-hidden'>
      {/* Background Elements */}

      {/* <div className="absolute inset-0">
        <div className="absolute top-10 left-20 w-24 h-24 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl animate-pulse delay-700"></div>
        </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <Headers
          heading='Trusted Partners'
          subheading='Technology Partners'
          description='We collaborate with industry leaders to deliver cutting-edge solutions and ensure the highest quality standards.'
        />

        {/* Alternate header */}
        {/* <div className="text-center mb-12">
          <p className="text-sm font-medium text-muted-foreground/60 uppercase tracking-wider mb-2">
            Trusted Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
            Technology Partners
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We collaborate with industry leaders to deliver cutting-edge solutions and ensure the highest quality standards.
          </p>
        </div> */}


        {/* Partners Grid - Better Layout */}
        <div className="relative">
          {/* Gradient Overlays for Mobile */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent xl:hidden" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent xl:hidden" />

          {/* Partners Container */}
          <div className="overflow my-1">
            <div className={clsx(
              "flex items-center my- justify-center gap-8 md:gap-12 lg:gap-16",
              "animate-scroll xl:animate-none" // Add auto-scroll animation
            )}>
              {companies?.map((company, idx) => (
                <div
                  key={idx}
                  className={clsx(
                    "flex-shrink-0 group  relative",
                    "p-6 rounded-2xl transition-all duration-300",
                    "hover:bg-card hover:shadow-lg hover:shadow-primary/5",
                    "border border-transparent hover:border-border"
                  )}
                >
                  {/* Logo Container */}
                  <div className="relative flex items-center justify-center h-16 w-24 md:h-20 md:w-32">
                    <Image
                      alt={`${company.name} logo`}
                      src={company.image}
                      width={128}
                      height={80}
                      className={clsx(
                        "object-contain transition-all duration-300",
                        "opacity-70 group-hover:opacity-100",
                        "grayscale group-hover:grayscale-0",
                        "transform group-hover:scale-110"
                      )}
                    />
                  </div>

                  {/* Company Name (Optional - shows on hover) */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs capitalize font-medium text-muted-foreground bg-card px-3 py-1 rounded-full shadow-sm border border-border whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}

              {/* Duplicate for infinite scroll effect */}
              {companies?.map((company, idx) => (
                <div
                  key={`duplicate-${idx}`}
                  className={clsx(
                    "flex-shrink-0 group relative xl:hidden",
                    "p-6 rounded-2xl transition-all duration-300",
                    "hover:bg-card hover:shadow-lg hover:shadow-primary/5",
                    "border border-transparent hover:border-border"
                  )}
                >
                  <div className="relative flex items-center justify-center h-16 w-24 md:h-20 md:w-32">
                    <Image
                      alt={`${company.name} logo`}
                      src={company.image}
                      width={128}
                      height={80}
                      className={clsx(
                        "object-contain transition-all duration-300",
                        "opacity-70 group-hover:opacity-100",
                        "grayscale group-hover:grayscale-0",
                        "transform group-hover:scale-110"
                      )}
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs font-medium text-muted-foreground bg-card px-3 py-1 rounded-full shadow-sm border border-border whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Technology Partners</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="text-2xl md:text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Technical Support</div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default PartnersSection
