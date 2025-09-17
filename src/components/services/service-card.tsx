
import Lottie from 'lottie-react';
import { Check } from 'lucide-react';
import Image from 'next/image';
export const ServiceCard = ({ item, index: idx }: {
  item: {
    title: string;
    description: string;
    image: any;
    isAnimation?: boolean;
    highlights?: string[];
  },
  index: number
}) => {
  return (
    <article
      key={idx}
      className='flex items-center gap-8 md:odd:flex-row-reverse '
    >
      <div className='relative hidden lg:flex z-10  h-16 w-16 shrink-0 items-center justify-center border border-border/50 bg-card'>
        <span className='text-xl font-serif text-accent-foreground'>{idx + 1}</span>
      </div>
      <div className='grid md:grid-cols-2 gap-8 md:odd:flex-row-reverse border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 ease-in-out bg-card p-6'>
        <div className='space-y-4'>
          <h3 className='text-2xl text-accent-foreground'>{item.title}</h3>
          <p className='text-muted-foreground'>{item.description}</p>
          <ul className='flex flex-col items-start gap-3 pl-2 md:text-lg'>
            {item?.highlights?.map((highlight, idx) => (
              <li
                key={idx}
                className='flex items-center gap-4 font-normal text-muted-foreground'
              >
                <span className='flex size-6 items-center justify-center rounded-full bg-secondary'>
                  <Check size={16} className="text-muted-foreground" />
                </span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
        <div className='relative aspect-video overflow-hidden'>
          {item.isAnimation ? (
            <Lottie
              animationData={item.image}
              loop={true}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={item.image}
              alt={item.title}
              className='object-cover w-full h-full'
              height={500}
              width={500}
            />
          )}
        </div>
      </div>
    </article>
  )
}
