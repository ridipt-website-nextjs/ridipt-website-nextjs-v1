'use client'
import React, { JSX } from 'react'
import { cn } from '@/lib/utils' // If you have cn utility

import { Lato, Merriweather, Montserrat, Open_Sans, Poppins, Raleway, Roboto, Zen_Dots } from "next/font/google";

// Fonts with proper configuration
// For heading
const zenDot = Zen_Dots({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
})

const poppins = Poppins({
  weight: '500',
  subsets: ['latin'],
  display: 'swap',
})

const montserrat = Montserrat({
  weight: '700',
  subsets: ['latin'], 
  display: 'swap',
}) 

// For description and text 
const roboto = Roboto({
  weight: ['300', '400', '500', '700'], // Multiple weights
  subsets: ['latin'],
  display: 'swap',
})


const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

// For sub heading 
const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

const lato = Lato({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

type HeaderProps =
  | {
    heading: string;
    subheading: string;
    description: string; // required in this case
    headingStyle?: string
    className?: string;
    descriptionComponent?: undefined;
    align?: 'left' | 'center' | 'right';
  }
  | {
    heading: string;
    subheading: string;
    headingStyle?: string
    description?: string; // optional in this case
    className?: string;
    descriptionComponent: JSX.Element; // required here
    align?: 'left' | 'center' | 'right';
  };


const Header: React.FC<HeaderProps> = ({
  heading,
  subheading,
  description,
  descriptionComponent,
  headingStyle,
  className = '',
  align = 'center'
}) => {
  // Alignment configurations
  const alignmentConfig = {
    left: {
      container: 'items-start',
      text: 'text-left',
      badge: 'self-start'
    },
    center: {
      container: 'items-center',
      text: 'text-center',
      badge: 'self-center'
    },
    right: {
      container: 'items-end',
      text: 'text-right',
      badge: 'self-end'
    }
  }

  // Detect alignment from className if align prop not provided
  const detectedAlign = className.includes('items-start') ? 'left'
    : className.includes('items-end') ? 'right'
      : align

  const config = alignmentConfig[detectedAlign]

  return (
    <div className={cn(
      'flex flex-col gap-3 max-w-6xl self-center',
      config.container,
      className
    )}>
      {/* Heading Badge */}
      <h3 className={cn(
        'flex min-h-7 items-inherit justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium bg-secondary text-muted-foreground md:text-base',
        config.badge, headingStyle,
        lato.className
      )}>
        {heading}
      </h3>

      {/* Subheading */}
      <div className={cn(
        'flex  flex-col justify-center gap-1 ',
        config.container
      )}>
        <h4 className={cn(
          'text-pretty text-3xl  text-secondary-foreground font-medium md:text-4xl',
          config.text,
          montserrat.className

        )}>
          {subheading}
        </h4>
      </div>

      {/* Description */}
      {
        descriptionComponent ? descriptionComponent :
          <p className={cn(
            'max-w-screen-md text-pretty text-lg font-light text-muted-foreground md:text-xl',
            config.text,
            openSans.className
          )}>
            {description}
          </p>}
    </div>
  )
}

export default Header
