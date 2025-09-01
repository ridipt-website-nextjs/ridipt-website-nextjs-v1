import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import Image from 'next/image';
import { JSX } from 'react';

// Process Cards Section Component
// Base interface for common properties
interface BaseChallengeItem {
  id: string;
  title: string;
  description: string;
  colors: {
    primary: string;
    bg: string;
    border: string;
    text: string;
    subtitle: string;
    icon: string;
    accent: string;
    hover: string;
    gradient: string;
  };
}

// Interface for items with icon (image should be optional/undefined)
interface ChallengeItemWithIcon extends BaseChallengeItem {
  icon: React.ComponentType<any>;
  image?: never; // This ensures image cannot be provided when icon is present
}

// Interface for items with image (icon should be optional/undefined)
interface ChallengeItemWithImage extends BaseChallengeItem {
  image: string;
  icon?: never; // This ensures icon cannot be provided when image is present
}

// Union type that ensures either icon OR image is provided, but not both or neither
export type ChallengeItem = ChallengeItemWithIcon | ChallengeItemWithImage;
interface ProcessCardsSectionProps {
  heading: string;
  subheading: string;
  description: string;
  processes: ChallengeItem[];
  className?: string;
  customCard?: (item: any, index: number) => JSX.Element
}

export const ProcessCardsSection: React.FC<ProcessCardsSectionProps> = ({
  heading,
  subheading,
  description,
  processes,
  className = '',
  customCard
}) => {
  return (
    <Section className={className}>
      <div className='flex w-full flex-col items-start gap-4 md:order-2 md:grid md:grid-cols-3 md:gap-16'>
        <Header
          heading={heading}
          subheading={subheading}
          description={description}
          className='items-start flex-2'
        />

        {processes.map((item, idx) => {
          if (customCard) {
            return customCard(item, idx)
          }
          return (
            <article
              key={idx}
              className={`group flex flex-1 border border-transparent transition-all duration-300 ease-in-out hover:shadow-xl p-6 rounded-xl flex-col gap-4 ${item.colors.bg} dark:bg-card ${item.colors.hover} hover:border-${item.colors.primary}-200 hover:shadow-${item.colors.primary}-100/50 hover:-translate-y-1 h-full min-h-[320px]`}
            >
              <figure
                className={`flex size-12 items-center justify-center rounded-full border-2 ${item.colors.border} ${item.colors.accent} p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
              >
                {item.icon ? <item.icon className={`h-6 w-6 ${item.colors.icon}`} /> : null}
                {item.image &&
                  <Image
                    src={item.image!}
                    alt={item.title}
                    height={20}
                    width={20}
                    className={`${item.colors.icon}`}
                  />
                }
              </figure>

              <div className='flex flex-col items-start gap-2 flex-grow'>
                <h5 className={`text-xl font-semibold ${item.colors.text} group-hover:${item.colors.icon} transition-colors duration-300 line-clamp-2`}>
                  {item.title}
                </h5>
                <p className={`text-justify leading-relaxed text-muted-foreground flex-grow line-clamp-4 text-sm`}>
                  {item.description}
                </p>
              </div>

              <div className={`w-full h-0.5 ${item.colors.border} opacity-20 group-hover:opacity-40 transition-opacity duration-300 flex-shrink-0`}></div>
            </article>
          )
        })}
      </div>
    </Section>
  )
}