'use client'
import React, { useState, useEffect } from 'react';
import Structure from '@/components/common/page-structure';
import { TechServices as HeroSection } from '@/components/ui/sticky-scroll-reveal';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { 
  CodeIcon, 
  SmartphoneIcon, 
  RocketIcon, 
  PaletteIcon,
  ChevronRightIcon,
  LayersIcon,
  DatabaseIcon,
  SettingsIcon,
  BrainIcon,
  BlocksIcon,
  BarChartIcon,
  PenToolIcon,
  LampDeskIcon,
  ToolCase,
} from 'lucide-react';
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import { services_tech_stack } from '@/config/constant';
import { useRouter } from 'next/navigation';

// TypeScript interfaces
interface TechItem {
  name: string;
  image?: any;
  icon?: React.ComponentType<any>;
}

interface CategoryItems {
  [key: string]: TechItem[];
}

interface CategoryData {
  items: CategoryItems;
}

interface TechStackData {
  [key: string]: CategoryData;
}

// Icons mapping for main categories
const categoryIcons: Record<string, React.ReactNode> = {
  "Web Development": <CodeIcon className="w-6 h-6" />,
  "Mobile Development": <SmartphoneIcon className="w-6 h-6" />,
  "Emerging Technologies": <RocketIcon className="w-6 h-6" />,
  "UI/UX Design": <PaletteIcon className="w-6 h-6" />
};

// Icons mapping for subcategories
const subcategoryIcons: Record<string, React.ReactNode> = {
  frontend: <LayersIcon className="w-5 h-5" />,
  backend: <DatabaseIcon className="w-5 h-5" />,
  cms: <SettingsIcon className="w-5 h-5" />,
  databases: <DatabaseIcon className="w-5 h-5" />,
  crossPlatform: <SmartphoneIcon className="w-5 h-5" />,
  native: <LampDeskIcon className="w-5 h-5" />,
  ai_ml: <BrainIcon className="w-5 h-5" />,
  blockchain: <BlocksIcon className="w-5 h-5" />,
  data_science: <BarChartIcon className="w-5 h-5" />,
  devops: <ToolCase className="w-5 h-5" />,
  designTools: <PenToolIcon className="w-5 h-5" />,
  prototyping: <LayersIcon className="w-5 h-5" />
};

// Category descriptions
const categoryDescriptions: Record<string, string> = {
  "Web Development": "Building modern, scalable web applications with cutting-edge technologies",
  "Mobile Development": "Creating powerful mobile experiences across all platforms",
  "Emerging Technologies": "Leveraging AI, blockchain, and data science for innovative solutions",
  "UI/UX Design": "Crafting beautiful and intuitive user experiences"
};

const TechnologyPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Web Development");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>("");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
//   const router = useRouter();

  const techStack = services_tech_stack as TechStackData;
  const categories = Object.keys(techStack);

  // Auto-select first subcategory when category changes
  useEffect(() => {
    if (techStack[selectedCategory] && techStack[selectedCategory].items) {
      const firstSubcategory = Object.keys(techStack[selectedCategory].items)[0];
      setSelectedSubcategory(firstSubcategory || "");
    }
  }, [selectedCategory, techStack]);

  const handleCategoryChange = (category: string): void => {
    setSelectedCategory(category);
    // router.push('#selected-category')
  };

  return (
    <Structure>
      {/* Hero Section */}
      <HeroSection
        btnData={false}
        heading="Our Technology Stack"
        subheading="Innovations that drive the future"
        description="Discover how our cutting-edge technologies power solutions that shape industries, improve lives, and create smarter experiences. From AI and automation to cloud and data-driven systems, explore the innovations that keep us ahead in the digital era."
        content={
          <div className='relative flex-1 hidden md:flex overflow-hidden'>
            <Image
              src={require('@assets/technology/hero-section.png')}
              alt="Technology Hero Image"
              width={400}
              height={400}
              className='flex-1 shadow-xl z-20 block aspect-square h-[420px] w-full object-contain rounded-lg'
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-200/40 via-cyan-100/30 to-indigo-100/20 dark:from-blue-900/30 dark:via-cyan-900/20 dark:to-indigo-900/10 blur-2xl"></div> */}
          </div>
        }
        className={`!max-w-none w-full bg-gray-50 dark:bg-background`}
        subSection={false}
      />

      {/* Technology Stack Section */}
      <Section className="!max-w-none py-16">
        <div className="container mx-auto px-4">
          <Header
            heading="Technology Expertise"
            subheading="Our Core Technologies"
            description="Explore our comprehensive technology stack across different domains"
            className="text-center mb-12 !w-auto !mx-auto"
          />

          {/* Category Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`group relative overflow-hidden rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? 'border-primary shadow-lg shadow-primary/20 scale-105'
                    : 'border-border hover:border-primary/50 hover:shadow-md'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-lg mb-4 transition-colors duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary'
                  }`}>
                    {categoryIcons[category]}
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {category}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4">
                    {categoryDescriptions[category]}
                  </p>
                  
                  <div className="flex items-center justify-center text-sm text-primary group-hover:translate-x-1 transition-transform">
                    Explore <ChevronRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>

                {/* Technology Count Badge */}
                <div className="absolute top-3 right-3">
                  <div className="bg-background/90 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-muted-foreground">
                    {Object.values(techStack[category]?.items || {}).reduce((acc: number, curr: TechItem[]) => acc + curr.length, 0)}+
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Category Details */}
          <Section id='selected-category' className="!bg-card !border !border-border !rounded-2xl !p-8 !px-8">
            <div className="flex items-center self-start justify-start gap-3 mb-8">
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary text-primary-foreground">
                {categoryIcons[selectedCategory]}
              </div>
              <div className=''>
                <h2 className="text-2xl font-bold text-foreground">{selectedCategory}</h2>
                <p className="text-muted-foreground">{categoryDescriptions[selectedCategory]}</p>
              </div>
            </div>

            {/* Subcategory Tabs */}
            {techStack[selectedCategory] && (
              <Tabs 
                value={selectedSubcategory} 
                onValueChange={(value) => setSelectedSubcategory(value)} 
                className="w-full"
              >
                <TabsList className="flex flex-wrap gap-2 mb-8 bg-transparent">
                  {Object.keys(techStack[selectedCategory].items).map((subcategory) => (
                    <TabsTrigger
                      key={subcategory}
                      value={subcategory}
                      className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-200"
                    >
                      {subcategoryIcons[subcategory]}
                      <span className="capitalize font-medium">
                        {subcategory.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.keys(techStack[selectedCategory].items).map((subcategory) => (
                  <TabsContent key={subcategory} value={subcategory} className="mt-0">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                      {techStack[selectedCategory].items[subcategory]?.map((tech: TechItem, idx: number) => (
                        <div
                          key={idx}
                          className="group relative flex flex-col items-center gap-3 p-4 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                          onMouseEnter={() => setHoveredTech(tech.name)}
                          onMouseLeave={() => setHoveredTech(null)}
                        >
                          {/* Technology Icon/Image */}
                          <div className="relative flex items-center justify-center w-14 h-14 rounded-lg bg-secondary/50 group-hover:bg-secondary transition-colors duration-200">
                            {tech.icon && React.createElement(tech.icon, {
                              className: "w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors"
                            })}
                            {tech.image && (
                              <Image
                                src={tech.image}
                                alt={tech.name}
                                width={32}
                                height={32}
                                className="dark:invert transition-transform duration-200 group-hover:scale-110"
                              />
                            )}
                          </div>

                          {/* Technology Name - Show on hover */}
                          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-lg shadow-lg transition-all duration-300 whitespace-nowrap z-20 ${
                            hoveredTech === tech.name ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                          }`}>
                            {tech.name}
                            <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rotate-45"></div>
                          </div>

                          {/* Hover Effect */}
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      )) || []}
                    </div>

                    {/* Technology Count */}
                    <div className="mt-6 text-center">
                      <span className="text-sm text-muted-foreground">
                        {techStack[selectedCategory].items[subcategory]?.length || 0} technologies in{' '}
                        <span className="capitalize font-medium">
                          {subcategory.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                      </span>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            )}
          </Section>

          {/* Technology Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {categories.map((category) => {
              const totalTechs = Object.values(techStack[category]?.items || {}).reduce(
                (acc: number, curr: TechItem[]) => acc + curr.length,
                0
              );
              return (
                <div key={category} className="text-center p-4 rounded-lg bg-secondary/50">
                  <div className="text-2xl font-bold text-primary">{totalTechs}+</div>
                  <div className="text-sm text-muted-foreground">{category.split(' ')[0]} Tools</div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </Structure>
  );
};

export default TechnologyPage;
