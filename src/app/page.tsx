'use client';
import { linePoint, technologyIcons } from "@/assests/technology_icons";
import { CardStack } from "@/components/card-stack";
import { HeroParallaxDemo } from "@/components/hero-parallax";
import { SubHeading } from "@/components/sub-heading";
import { TabStack } from "@/components/tabs-stack";
import { StickyScrollRevealDemo as TechService } from "@/components/tech-services";
import { AnimatedTestimonialsDemo } from "@/components/testemonials";
import { FlipWords } from "@/components/ui/flip-words";
import { GridPattern } from "@/components/ui/grid-pattern";
import { HoverBorderGradient } from "@/components/ui/hover-border-beam";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import IndusterySection from '@/components/industry-section';
import PartnerSection from '@/components/partner-section';
import PortofolioHighlight from '@/components/portfolio-highlights-section';
import Header from '@/components/section-heading';
import Footer from '@/components/footer';
import ContactSession from '@/components/contact-sestion';
import { shuffleArray } from "@/config/utils";
import Image from "next/image";
import { industries, partners } from "@/config/constant";
import { FeatureItem } from "@/config/interface";


export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <div className="relative">
        {/* tech service we provided */}
        <TechService />

        {/* <CardStack /> */}
      </div>

      {/* <TabStack /> */}


      <PortofolioHighlight />
      <TechnologyContainer />

      <IndusterySection industry={industries as FeatureItem[]} />

      <PartnerSection companies={partners} />
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex relative items-center my-8 flex-col gap-0 justify-start w-full max-w-7xl mx-auto mb-[1rem]"
        >
          {/* <div className="absolute inset-0 -z-1  [mask-image:radial-gradient(ellipse_at_center,white,transparent)]">
            <GridPattern />
          </div> */}

          <Header
            heading="Client Testimonials"
            subheading="What Our Clients Say"
            description="We take pride in delivering exceptional service and results. Here's what our clients have to say about their experience with us."
          />
        </div>

        <AnimatedTestimonialsDemo />
        <ContactSession />

      </div>
    </>
  );
}


const TechnologyContainer = () => {
  return <>
    <div className="flex flex-col  my-6 items-center justify-center ">
      <div
        className="flex relative   items-start flex-col gap-0 justify-start w-full max-w-7xl mx-auto mb-[2rem]"
      >

        <SubHeading
          className="!text-primary"
          customHieghtlightedComponent={<>
            <FlipWords
              words={["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS"]}
              className=" ml-0 pl-0 font-bold !text-accent-foreground"

            />
          </>}
          text="Technologies we are work with"
        />
        <p className="max-w-2xl relative text-base md:text-xl  text-muted-foreground ">
          Revolutionize your applications with Ridipt Technologies. Build, deploy, and innovate without worrying about infrastructure.

        </p>
      </div>
      <div className=" max-w-[100%] relative ">

        {
          ["left", "right"].map((direction, index) => (
            <TechnologyIcons key={index} direction={direction as any} speed="slow" />
          ))
        }
      </div>
    </div>
  </>
}

const TechnologyIcons = ({ direction, speed }: { direction?: "left" | "right" | undefined, speed?: "fast" | "normal" | "slow" | undefined }) => {
  return (

    <InfiniteMovingCards
      items={shuffleArray(technologyIcons)}
      component={(item, idx) => <>
        <HoverBorderGradient
          key={idx}
          containerClassName="rounded-2xl p-0 group" // group class add karo
          className="p-0"
        >
          <li
            className="relative flex justify-center p-0 items-center max-w-full shrink-0 rounded-2xl border border-b-0  bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-6 py-4 dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]
    transition-all duration-300 ease-in-out group-hover:shadow-lg 
    group-hover:border-accent 
    group-hover:ring-2 group-hover:ring-ring
    cursor-pointer"
            key={idx}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={60}
              height={60}
              className="h-14 w-14 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300 ease-in-out"
            />
          </li>
        </HoverBorderGradient>
      </>}
      direction={direction}
      speed={speed}
      className=""
      pauseOnHover={false}
    />
  );
}