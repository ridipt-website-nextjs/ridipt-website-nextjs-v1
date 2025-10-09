'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Section from '@/components/section-structure';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import Header from '@/components/section-heading';
import { questionsData } from '@/config/content/security/question.content';
import Image from 'next/image';

interface QuestionsSectionProps {
  heading?: string;
  subheading?: string;
  description?: string;
  className?: string;
  initialShowCount?: number;
}

export default function QuestionsSection({
  heading,
  subheading,
  description,
  className = '',
  initialShowCount = 4
}: QuestionsSectionProps) {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);
  
  const displayedQuestions = showAll 
    ? questionsData 
    : questionsData.slice(0, initialShowCount);
  
  const hasMore = questionsData.length > initialShowCount;
  const remainingCount = questionsData.length - initialShowCount;

  return (
    <Section className={`mt-8 sm:mt-16 pb-16 ${className}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <Header
          heading={heading || 'Software Development Guidance'}
          subheading={subheading || 'Expert Answers to Critical Questions'}
          className='max-w-none'
          description={
            description ||
            `Comprehensive guidance on technology selection, architecture, security, scalability, and best practices. Navigate complex technical decisions with confidence and build applications that stand the test of time.`
          }
        />

        <div className="w-full max-w-7xl mx-auto mt-12 sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {displayedQuestions.map((question, index) => {
              const IconComponent = question.icon;
              const hasImage = !!question.image;
              
              return (
                <Card
                  key={question.id}
                  className={`group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 relative overflow-hidden bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border-border/50 ${
                    hasImage 
                      ? 'flex flex-col sm:flex-row p-0 min-h-[200px] sm:min-h-[180px]' 
                      : 'p-6'
                  }`}
                  onClick={() => router.push(`/questions/${question.slug}`)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0
                  }}
                >
                  {/* Enhanced gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br transition-all duration-700 ${
                    hasImage 
                      ? 'from-primary/8 via-primary/3 to-transparent opacity-0 group-hover:opacity-100' 
                      : 'from-primary/5 via-transparent to-primary/3 opacity-0 group-hover:opacity-100'
                  }`} />
                  
                  {/* Animated border glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20 blur-2xl" />
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none overflow-hidden">
                    <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                  </div>

                  {/* Image Panel - Responsive */}
                  {hasImage && (
                    <div className="relative w-full sm:w-36 md:w-44 lg:w-48 h-32 sm:h-auto flex-shrink-0 bg-gradient-to-br from-primary/[0.08] via-primary/[0.05] to-primary/[0.02] overflow-hidden">
                      {/* Subtle pattern overlay */}
                      <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern" />
                      
                      {/* Border effect - horizontal on mobile, vertical on desktop */}
                      <div className="absolute bottom-0 left-0 right-0 sm:bottom-auto sm:right-0 sm:top-0 sm:left-auto h-px sm:h-auto w-full sm:w-px bg-gradient-to-r sm:bg-gradient-to-b from-transparent via-border to-transparent group-hover:via-primary/30 transition-colors duration-500" />
                      
                      {/* Image container */}
                      <div className="relative w-full h-full flex items-center justify-center p-4 sm:p-6">
                        <div className="relative w-full h-full max-w-[80px] max-h-[80px] sm:max-w-[100px] sm:max-h-[100px] lg:max-w-[120px] lg:max-h-[120px]">
                          <Image
                            src={question.image}
                            alt={question.title}
                            fill
                            className="object-contain transition-all duration-700 group-hover:scale-110 group-hover:rotate-2 drop-shadow-xl"
                          />
                        </div>
                      </div>

                      {/* Decorative corner accents - hide on mobile */}
                      <div className="hidden sm:block absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                      <div className="hidden sm:block absolute bottom-0 right-0 w-12 h-12 bg-gradient-to-tl from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>
                  )}
                  
                  {/* Content Section - Responsive padding */}
                  <CardHeader className={`relative z-10 ${hasImage ? 'flex-1 p-4 sm:p-6' : 'p-0'} space-y-3 sm:space-y-4 flex flex-col justify-between`}>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-start justify-between gap-3 sm:gap-4">
                        {/* Icon (only for non-image cards) */}
                        {!hasImage && (
                          <div className="relative p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 via-primary/15 to-primary/10 group-hover:from-primary/30 group-hover:via-primary/25 group-hover:to-primary/20 transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-primary/25 ring-1 ring-primary/10 group-hover:ring-primary/20">
                            <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                          </div>
                        )}
                        
                        <Badge 
                          variant="secondary" 
                          className={`text-xs font-semibold px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-primary/[0.08] text-primary border border-primary/20 group-hover:border-primary/40 whitespace-nowrap backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/[0.12] ${!hasImage ? '' : 'ml-auto'}`}
                        >
                          {question.category}
                        </Badge>
                      </div>
                      
                      <div className="space-y-2 sm:space-y-3">
                        <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-500 leading-tight tracking-tight">
                          {question.title}
                        </CardTitle>
                        
                        <CardDescription className="text-sm sm:text-[15px] leading-relaxed line-clamp-2 text-muted-foreground/80 group-hover:text-muted-foreground transition-colors duration-300">
                          {question.shortDescription}
                        </CardDescription>
                      </div>
                    </div>

                    {/* Learn more button */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-primary pt-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:gap-3 group-hover:translate-x-1">
                      <span className="relative">
                        Learn more
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-500" />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-500 group-hover:translate-x-1" />
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>

          {/* View All Button - Responsive */}
          {hasMore && !showAll && (
            <div className="flex justify-center mt-12 sm:mt-16">
              <Button
                onClick={() => setShowAll(true)}
                size="lg"
                className="group relative rounded-full overflow-hidden px-6 sm:px-8 py-4 sm:py-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2 sm:gap-3 font-semibold">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:rotate-12" />
                  <span className="hidden sm:inline">View All Questions</span>
                  <span className="sm:hidden">View All</span>
                  <Badge variant="secondary" className="ml-0.5 sm:ml-1 bg-primary-foreground/20 text-primary-foreground border-0 text-xs">
                    +{remainingCount}
                  </Badge>
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-500 group-hover:translate-y-1" />
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </Button>
            </div>
          )}

          {/* Show Less Button - Responsive */}
          {showAll && (
            <div className="flex justify-center mt-12 sm:mt-16">
              <Button
                onClick={() => {
                  setShowAll(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                variant="outline"
                size="lg"
                className="group rounded-full px-6 sm:px-8 py-4 sm:py-6 border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                <span className="flex items-center gap-2 sm:gap-3 font-semibold">
                  Show Less
                  <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 rotate-180 group-hover:-translate-y-1" />
                </span>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Section>
  );
}
