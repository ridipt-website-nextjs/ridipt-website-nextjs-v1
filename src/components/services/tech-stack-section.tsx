import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { AppWindowIcon, CodeIcon } from 'lucide-react';
import Image from 'next/image';

interface TechStackSectionProps {
  heading: string;
  subheading: string;
  description: string;
  techStackData: {
    items: Record<string, { name: string; image: any }[]>
  };
  className?: string;
}

export const TechStackSection: React.FC<TechStackSectionProps> = ({
  heading,
  subheading,
  description,
  techStackData,
  className = ''
}) => {
  return (
    <Section className={`!max-w-none ${className}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center">
          <Header
            heading={heading}
            className="lg:w-1/2 w-full items-start"
            subheading={subheading}
            description={description}
          />
          <div className="flex-1 w-full">
            <TechStackTabs techStackData={techStackData} />
          </div>
        </div>
      </div>
    </Section>
  )
}

// Tech Stack Tabs Component
const TechStackTabs = (
  { techStackData, className = '' }: { techStackData: { items: Record<string, { name: string; image: any }[]> }; className?: string }
) => {
  // Determine tab keys dynamically from the items keys
  const categories = Object.keys(techStackData.items);
  
  // Icons mapping for tabs by category - extend as needed
  const iconsMap: Record<string, React.ReactNode> = {
    frontend: <CodeIcon className="w-4 h-4" />,
    backend: <AppWindowIcon className="w-4 h-4" />,
    cms: null,
    databases: null,
    crossPlatform: null,
    native: null
  };

  return (
    <div className={`${className} w-full container mx-auto`}>
      <Tabs defaultValue={categories[0]} className="w-full">
        <TabsList className="flex flex-row gap-3 w-full mb-8">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              className="flex flex-1 text-muted-foreground bg-secondary rounded-full p-2 px-3.5 justify-center items-center gap-2 data-[state=active]:bg-card data-[state=active]:border-secondary data-[state=active]:border-2 data-[state=active]:text-primary"
            >
              {iconsMap[category] && iconsMap[category]}
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {(techStackData.items[category] || []).map((tech, idx) => (
                <div
                  key={idx}
                  className="group relative flex flex-col items-center gap-3 p-5 rounded-lg border border-border bg-card hover:shadow-md transition-all duration-200 hover:scale-105"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary/50 p-2 group-hover:bg-secondary transition-colors">
                    <Image
                      src={tech.image}
                      alt={tech.name}
                      width={40}
                      height={40}
                      className="dark:invert"
                    />
                  </div>
                  <span className="text-sm top-full -translate-y-1/2 p-1 rounded-lg border border-border px-2 bg-card scale-0 transition-all duration-300 ease-in-out group-hover:scale-100 opacity-0 group-hover:opacity-100 absolute font-medium text-center text-muted-foreground group-hover:shadow-lg">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
