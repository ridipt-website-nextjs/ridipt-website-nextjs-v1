import clsx from "clsx";
import Image from "next/image";
import s from './styles/sticky-scroll-reveal.module.css';
import Header from '../section-heading';
import Section from '@/components/section-structure';
import { JSX } from "react";


// Base interface for common properties
// Base type (shared between both variants)
interface BaseContentItem {
  title: string;
  description: string;
}

// Variant when using Lucide (or any React) icon
interface ContentItemWithIcon extends BaseContentItem {
  icon: React.ComponentType<any>;
  image?: never; // ❌ explicitly disallow image
}

// Variant when using imported/static image
interface ContentItemWithImage extends BaseContentItem {
  image: any; // or StaticImageData if Next.js
  icon?: never; // ❌ explicitly disallow icon
}

// Final union type (either icon OR image)
export type ContentItem = ContentItemWithIcon | ContentItemWithImage;


export const TechServices = ({
  content,
  heading,
  className,
  subheading,
  description,
  subSection = true,
  CustomCard,
  isAnimationShow = false

}: {
  content: ContentItem[] | React.ReactNode;
  heading?: string;
  className?: string;
  subheading?: string;
  CustomCard?: (item: any, idx: any) => JSX.Element
  description?: string;
  subSection?: boolean;
  isAnimationShow?: boolean;
}) => {
  // Check if content is JSX or array
  const isArrayContent = Array.isArray(content);
  const isJSXContent = !isArrayContent;

  return (
    <Section className={`mt-8 sm:mt-8 !w-full !relative  ${className}`}>
      <div className="!w-full !relative">

        <div
          className="relative lg:container lg:mx-auto lg:!flex-row bg-[] flex flex-col lg:gap-1 lg:p-15"
        >
          <div className="container mb-10 relative top-0 mx-auto shrink self-stretch px-6 lg:w-1/2 lg:pl-0 lg:pr-12 xl:pr-20">
            <div
              className={clsx(
                "flex flex-col gap-10",
                // Apply sticky only for array content, not JSX content
                "sticky bottom-0 top-[calc(var(--header-height)+40px)]"
                // isArrayContent && "sticky bottom-0 top-[calc(var(--header-height)+40px)]"
              )}
            >
              <Header
                heading={heading || "Our Services"}
                className="items-start"
                subheading={subheading || "Customized Solutions with Transparency"}
                description={description || "Are you ready to elevate your business with cutting-edge technology? Partner with us! We empower you to reach your objectives with our bespoke mobile app and web app development services."}
              />

              {/* this is the same thing as header if header is not working properly then this will be used */}
              {/* <div
              className="flex flex-col gap-3 items-start self-start "
            >
              <h3
                className="flex min-h-7 items-center justify-center gap-2 rounded-full bg-secondary  text-muted-foreground px-3.5 pb-px text-sm font-medium  md:text-base"
              // className,
              // }
              >Our Services</h3>
              <div
                className="flex max-w-[800px] flex-col justify-center gap-1 items-start self-start [&>*]:text-pretty [&>*]:text-3xl [&>*]:font-medium md:[&>*]:text-4xl [&>*]:text-left">
                <h4 title="Customized Solutions with Transparency">Customized Solutions with Transparency</h4></div>
              <p className="max-w-screen-md text-pretty text-lg font-light text-muted-foreground  md:text-xl text-left">Are you ready to elevate your business with cutting-edge technology? Partner with us! We empower you to reach your objectives with our bespoke mobile app and web app development services.</p>
            </div> */}

            </div>
          </div>

          <div className="w-full flex-1 shrink-0 lg:w-1/2 lg:flex-1">
            <div
              className="no-scrollbar flex gap-10 overflow-auto w-auto px-7 lg:flex-col lg:px-2 lg:pb-7"
            >
              {/* Render JSX content if provided */}
              {isJSXContent ? (
                content as React.ReactNode
              ) : (
                /* Render array content */
                (content as ContentItem[]).map((item, idx) => {
                  if (CustomCard) {
                    return CustomCard(item, idx)
                  }
                  return (
                    <article
                      key={idx}
                      className="flex hover:shadow-md group transition-all ease-in-out w-[280px] shrink-0 flex-col gap-4 rounded-lg border border-[var(--border)] bg-card shadow-sm  p-4 lg:w-full lg:flex-row lg:p-5"
                    >
                      <figure className="flex size-12 shrink-0 items-center justify-center rounded-full bg-input p-3 ">
                        {item.icon ? <item.icon className={`h-6 w-6 transition-all text-muted-foreground group-hover:shadow group-hover:text-accent-foreground duration-300 group-hover:scale-125`} /> : null}
                        {item.image &&
                          <Image
                            alt={item.title}
                            className="dark:invert"
                            height={24}
                            src={item.image}
                            width={24}
                          />}
                      </figure>
                      <div className="flex flex-col items-start gap-1">
                        <h5 className="text-lg text-accent-foreground font-medium">{item.title}</h5>
                        <p className="text-pretty truncate text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </article>
                  )
                })
              )}
            </div>
          </div>
        </div>

        {subSection && <section
          className="py-8  md:py-[50px] flex flex-col items-center gap-10 relative container mx-auto px-6"
        >
          <article
            className="relative flex flex-col items-center justify-center gap-9 self-stretch overflow-hidden rounded-xl border border-border bg-card p-6 "
          >
            {/* Lines and bg  */}
            {isAnimationShow && <>
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
            </>
            }
            <div className="absolute left-0 top-0 z-10 h-full w-full bg-card blur-3xl filter " />
            {/* -------- */}
            <div className="relative z-20 flex flex-col items-center gap-2 text-center">
              <h4 className="text-center text-3xl font-medium tracking-tighter text-primary sm:max-w-full sm:px-0 md:text-4xl">
                Transforming Ideas into Success Stories
              </h4>
              <p className="text-lg text-muted-foreground md:text-xl">
                We take pride in empowering businesses to thrive and distinguish themselves on the App Store, Google Play, and across their online presence.
              </p>
            </div>
          </article>
        </section>}
      </div>
    </Section>
  )
}
