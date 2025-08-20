import Image from "next/image";
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';

// Business Process Section Component
interface BusinessProcessSectionProps {
  heading: string;
  subheading: string;
  description: string;
  processes: any[];
  className?: string;
}

export const BusinessProcessSection: React.FC<BusinessProcessSectionProps> = ({
  heading,
  subheading,
  description,
  processes,
  className = ''
}) => {
  return (
    <Section className={className}>
      <Header
        heading={heading}
        subheading={subheading}
        description={description}
      />

      <div className='flex flex-1 justify-center gap-5 items-center flex-wrap'>
        {processes.map((item, idx) => (
          <article
            className={`group flex flex-1 border my-6 relative basis-[300px] rounded-none transition-all duration-300 ease-in-out hover:shadow-xl p-6 flex-col gap-5 hover:border-${item.colors.primary}-200 border-muted border hover:-translate-y-1 h-full min-h-[320px]`}
            key={idx}
          >
            <figure
              className={`flex size-16 border-2 absolute -translate-y-1/2 top-0 right-6 items-center justify-center ${item.colors.icon} ${item.colors.border} rounded-full p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}
            >
              <Image
                src={item.image}
                alt={item.title}
                height={40}
                width={40}
                className="filter brightness-0 invert"
              />
            </figure>

            <div className='flex flex-col pt-8 pb-4 items-start gap-2 flex-grow'>
              <h5 className={`text-2xl font-semibold ${item.colors.text} group-hover:${item.colors.text} transition-colors duration-300 line-clamp-2`}>
                {item.title}
              </h5>
              <p className={`text-justify leading-relaxed text-muted-foreground flex-grow line-clamp-4 text-sm`}>
                {item.description}
              </p>
            </div>

            <div className={`absolute top-4 left-4 w-8 h-8 ${item.colors.accent} ${item.colors.border} border-2 rounded-full flex items-center justify-center`}>
              <span className={`text-sm font-bold ${item.colors.text}`}>
                {idx + 1}
              </span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}