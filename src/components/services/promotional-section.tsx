import Section from '@/components/section-structure';
import { NavbarButton } from '../ui/resizable-navbar';
import Lottie from 'lottie-react';
import { Button } from '../ui/button';
import { MouseEventHandler, ReactNode } from 'react';

/**
 * Data interface for render prop pattern
 * Contains all props that can be accessed in custom render functions
 */
interface PromotionalSectionData {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  animationData?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

/**
 * Props interface for PromotionalSection component
 * Supports both traditional props usage and render prop pattern via children function
 */
interface PromotionalSectionProps {
  title?: string;
  highlightText?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  animationData?: any;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  
  /**
   * Render prop function that receives all component data
   * Allows complete customization of component content while maintaining access to props
   */
  children?: (data: PromotionalSectionData) => ReactNode;
}

/**
 * Promotional Section Component
 * 
 * A flexible promotional section that can render default content or custom content via render props.
 * When children function is provided, it receives all props as parameters for custom rendering.
 * Falls back to default layout when no children function is provided.
 */
export const PromotionalSection: React.FC<PromotionalSectionProps> = ({
  title,
  highlightText,
  subtitle,
  description,
  buttonText,
  animationData,
  className = '',
  onClick,
  children
}) => {
  
  // Prepare data object for render prop pattern
  const renderData: PromotionalSectionData = {
    title,
    highlightText,
    subtitle,
    description,
    buttonText,
    animationData,
    className,
    onClick
  };
  
  // Use render prop pattern if children function is provided
  if (children && typeof children === 'function') {
    return (
      <Section className={className}>
        <article className='flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[rgba(var(--accent-500),0.1)] p-6 dark:bg-[rgba(var(--accent-600),0.1)] lg:flex-row lg:justify-between lg:p-1'>
          {/* <div className='flex relative justify-between flex-col md:flex-row pb-10 group hover:shadow-lg transition-all duration-300 ease-in-out px-4 md:px-8 p-6 md:p-9 bg-blue-50 dark:bg-card border border-secondary rounded-2xl gap-3'> */}
            {children(renderData)}
          {/* </div> */}
        </article>
      </Section>
    );
  }
  
  // Default component structure for backward compatibility
  return (
    <Section className={className}>
      <article className='flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[rgba(var(--accent-500),0.1)] p-6 dark:bg-[rgba(var(--accent-600),0.1)] lg:flex-row lg:justify-between lg:p-1'>
        <div className='flex relative justify-between flex-col md:flex-row pb-10 group hover:shadow-lg transition-all duration-300 ease-in-out px-4 md:px-8 p-6 md:p-9 bg-blue-50 dark:bg-card border border-secondary rounded-2xl gap-3'>
          <div className='flex-col flex flex-2 justify-between items-stretch'>
            <div className='flex gap-2 flex-col'>
              <h4 className="text-3xl text-primary lg:text-4xl">
                {title}
                <br />
                <span className='py-5 text-3xl md:text-6xl text-wrap text-secondary-foreground font-bold'>
                  {highlightText}
                </span>
              </h4>
              <h5 className='absolute sm:right-[0rem] group-hover:shadow-lg transition-all bg-blue-50 dark:bg-card duration-300 border border-border top-full group-hover:bg-blue-50 group-hover:text-blue-900 -translate-y-1/2 font-medium ease-in-out p-3 px-4 right-[1rem] text-muted-foreground'>
                {subtitle}
              </h5>
              <p className="text-lg text-muted-foreground lg:text-xl">{description}</p>
            </div>
            <div className='mt-5 align-bottom'>
              <Button onClick={onClick} className="rounded-lg p-3 px-4 transition-all hover:border-accent-foreground border-2 border-[transparent] duration-300 ease-in-out" >
                {buttonText}
              </Button>
            </div>
          </div>
          <div className='flex flex-1 mt-4 md:mt-0'>
            <Lottie
              animationData={animationData}
              loop={true}
              className="block aspect-video h-[200px] md:h-[300px] w-full rounded-lg object-cover "
            />
          </div>
        </div>
      </article>
    </Section>
  );
};


/**
 * Modern glass-effect card with subtle blur and transparency
 * Perfect for hero sections and featured content
 */
export const PromotionCard2 = (data: PromotionalSectionData) => {
  const { title, highlightText, subtitle, description, buttonText, animationData, onClick } = data;
  
  return (
    <div className='flex flex-col md:flex-row gap-6 p-8 backdrop-blur-sm bg-white/70 dark:bg-card rounded-3xl border border-border dark:border-gray-700/30 group  hover:bg-white/80 dark:hover:bg-card transition-all duration-500'>
      
      <div className='flex-1 space-y-6'>
        <div className='space-y-4'>
          {subtitle && (
            <div className='inline-flex items-center gap-2 text-sm font-medium text-primary'>
              <div className='w-2 h-2 bg-primary rounded-full animate-pulse'></div>
              {subtitle}
            </div>
          )}
          
          <h4 className="text-3xl lg:text-4xl font-bold">
            <span className='text-foreground'>{title}</span>
            <br />
            <span className='bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent'>
              {highlightText}
            </span>
          </h4>
          
          <p className="text-lg text-muted-foreground/90 leading-relaxed">
            {description}
          </p>
        </div>
        
        <Button 
          onClick={onClick}
          className="rounded-xl px-6 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {buttonText}
        </Button>
      </div>
      
      {animationData && (
        <div className='flex-1 flex items-center justify-center'>
          <div className="relative">
            <Lottie
              animationData={animationData}
              loop={true}
              className="w-full max-w-sm h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};
