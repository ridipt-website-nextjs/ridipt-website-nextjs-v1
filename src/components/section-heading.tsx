import React from 'react'
import { cn } from '@/lib/utils' // If you have cn utility

interface HeaderProps {
  heading: string;
  subheading: string;
  description: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

const Header: React.FC<HeaderProps> = ({
  heading,
  subheading,
  description,
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
      'flex flex-col gap-3 self-center',
      config.container,
      className
    )}>
      {/* Heading Badge */}
      <h3 className={cn(
        'flex min-h-7 items-center justify-center gap-2 rounded-full px-3.5 pb-px text-sm font-medium bg-secondary text-muted-foreground md:text-base',
        config.badge
      )}>
        {heading}
      </h3>
      
      {/* Subheading */}
      <div className={cn(
        'flex max-w-[800px] flex-col justify-center gap-1 self-center',
        config.container
      )}>
        <h4 className={cn(
          'text-pretty text-3xl font-medium md:text-4xl',
          config.text
        )}>
          {subheading}
        </h4>
      </div>
      
      {/* Description */}
      <p className={cn(
        'max-w-screen-md text-pretty text-lg font-light text-muted-foreground md:text-xl',
        config.text
      )}>
        {description}
      </p>
    </div>
  )
}

export default Header
