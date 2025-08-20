import Section from '@/components/section-structure';
import { NavbarButton } from '../ui/resizable-navbar';
import Lottie from 'lottie-react';

// Promotional Section Component
interface PromotionalSectionProps {
  title: string;
  highlightText: string;
  subtitle: string;
  description: string;
  buttonText: string;
  animationData: any;
  className?: string;
}

export const PromotionalSection: React.FC<PromotionalSectionProps> = ({
  title,
  highlightText,
  subtitle,
  description,
  buttonText,
  animationData,
  className = ''
}) => {
  return (
    <Section className={className}>
      <article className='flex flex-col justify-center gap-9 self-stretch rounded-xl bg-[rgba(var(--accent-500),0.1)] p-6 dark:bg-[rgba(var(--accent-600),0.1)] lg:flex-row lg:justify-between lg:p-1'>
        <div className='flex relative justify-between flex-row pb-10 group hover:shadow-lg transition-all duration-300 ease-in-out px-8 p-9 bg-blue-50 dark:bg-card border border-secondary rounded-2xl gap-3'>
          <div className='flex-col flex flex-2 justify-between items-stretch'>
            <div className='flex gap-2 flex-col'>
              <h4 className="text-3xl text-primary lg:text-4xl">
                {title}
                <br />
                <span className='py-5 md:text-6xl text-wrap text-secondary-foreground font-bold text-3xl'>
                  {highlightText}
                </span>
              </h4>
              <h5 className='absolute group-hover:shadow-lg transition-all bg-blue-50 dark:bg-card duration-300 border border-border top-full group-hover:bg-blue-50 group-hover:text-blue-900 -translate-y-1/2 font-medium ease-in-out p-3 px-4 right-[1rem] text-muted-foreground'>
                {subtitle}
              </h5>
              <p className="text-lg text-muted-foreground lg:text-xl">{description}</p>
            </div>
            <div className='mt-5 align-bottom'>
              <NavbarButton className="bg-primary text-secondary rounded-lg p-3 px-4 transition-all hover:text-primary hover:bg-secondary hover:border-primary border-2 border-[transparent] duration-300 ease-in-out" variant="primary">
                {buttonText}
              </NavbarButton>
            </div>
          </div>
          <div className='flex flex-1'>
            <Lottie
              animationData={animationData}
              loop={true}
              className="block aspect-video h-[300px] w-full rounded-lg object-cover md:h-full"
            />
          </div>
        </div>
      </article>
    </Section>
  )
}