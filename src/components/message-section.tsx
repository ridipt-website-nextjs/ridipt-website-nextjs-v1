import clsx from 'clsx'
import React, { JSX } from 'react'
import s from './ui/styles/sticky-scroll-reveal.module.css';
import Section from '@/components/section-structure'

// Define conditional prop types
type ConditionalProps = 
  | {
      content: JSX.Element;
      heading?: never;
      subheading?: never;
    }
  | {
      content?: never;
      heading?: string;
      subheading?: string;
    };

type PageProps = ConditionalProps & {
  AddOnComponent?: React.ReactNode;
  className?: string;
};

const page = ({
  heading,
  subheading,
  className,
  AddOnComponent,
  content
}: PageProps) => {
  return (
    <Section
      className="py-10 flex flex-col items-center gap-10 relative container mx-auto px-6"
    >
      <article
        className={`relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border bg-card p-6 ${className}`}
      >
        {/* Lines and bg */}
        <div
          className={clsx(
            "bg-linear-to-l absolute left-0 top-10 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent",
            s.line,
          )}
        />
        <div
          className={clsx(
            "bg-linear-to-l absolute bottom-[72px] left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent",
            s.line,
          )}
        />
        <div
          className={clsx(
            "bg-linear-to-l absolute bottom-7 left-0 h-px w-full from-black/40 to-transparent dark:from-white/40 dark:to-transparent",
            s.line,
          )}
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-card blur-3xl filter " />
        {/* -------- */}

        {/* Conditional Content Rendering */}
        {content ? (
          /* If content is provided, render it */
          <div className="relative z-20 w-full">
            {content}
          </div>
        ) : (
          /* If no content, render heading/subheading with defaults */
          <div className="relative z-20 flex flex-col items-center gap-2 text-center">
            <h4 className="text-center text-3xl font-medium tracking-tighter text-primary sm:max-w-full sm:px-0 md:text-4xl">
              {heading || `Transforming Ideas into Success Stories`}
            </h4>
            <p className="text-lg text-muted-foreground md:text-xl">
              {subheading || `We take pride in empowering businesses to thrive and distinguish themselves on the App Store, Google Play, and across their online presence.`}
            </p>
          </div>
        )}

        {/* add on jsx */}
        {AddOnComponent && AddOnComponent}
      </article>
    </Section>
  )
}

export default page
