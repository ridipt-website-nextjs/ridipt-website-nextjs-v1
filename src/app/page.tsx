'use client';
import { linePoint, technologyIcons } from "@/assests/technology_icons";
import { HeroParallaxDemo } from "@/components/hero-parallax";
import { SubHeading } from "@/components/sub-heading";
import { TechServices } from "@/components/ui/sticky-scroll-reveal";
import { FlipWords } from "@/components/ui/flip-words";
import { HoverBorderGradient } from "@/components/ui/hover-border-beam";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import IndusterySection from '@/components/industry-section';
import PartnerSection from '@/components/partner-section';
import PortofolioHighlight from '@/components/portfolio-highlights-section';
import Header from '@/components/section-heading';
import MessageSection from '@/components/message-section';
import ContactSession from '@/components/contact-sestion';
import { shuffleArray } from "@/config/utils";
import Image from "next/image";
import { industries, partners } from "@/config/constant";
import { FeatureItem } from "@/config/interface";
import Testimonial from "@/components/testimonials";

import web from '@/assests/our_services/web.svg';
import android from "@/assests/our_services/android.svg";
import cloud from "@/assests/our_services/cloud.svg";
import ai from "@/assests/our_services/ai.svg";
import automation from '@/assests/our_services/automation.svg';
import { CallToActionContent, PromotionalSection } from "@/components/services";
import { useRouter } from "next/navigation";

const content = [
  {
    title: "Mobile App Development",
    description:
      "Build performant, scalable, and secure mobile applications for iOS and Android that meet your unique business needs.",
    image: android,
  },
  {
    title: "Web Application Development",
    description:
      "Create custom software tailored for your unique needs, including front-end and back-end solutions that drive results.",
    image: web,
  },
  {
    title: "Automation Testing",
    description:
      "Automate test case execution, compare actual and expected results, and ensure high-quality software releases.",
    image: automation,
  },
  {
    title: "AI and ML",
    description:
      "Use leading AI, machine learning, and data engineering technologies to unlock insights and drive innovation.",
    image: ai,
  },
  {
    title: "Cloud Services & DevOps",
    description:
      "Optimize your software development and deployment with our proficient cloud and DevOps services.",
    image: cloud,
  },
];


export default function Home() {
  const router = useRouter()
  return (
    <>
      <HeroParallaxDemo />
      <div className="relative">
        {/* tech service we provided */}
        <TechServices
          content={content}
          heading="Tech Services"
          subSection={false}
        />

        <MessageSection
          className={`!bg-gradient-to-br from-blue-50 via-rose-50 to-orange-50 dark:!bg-none dark:!bg-card`}
          content={
            <CallToActionContent
              className=''
              heading={`Transforming Ideas into Success Stories`}
              subheading={`We take pride in empowering businesses to thrive and distinguish themselves on the App Store, Google Play, and across their online presence.`}
              buttonText={`Contact us`}
              onButtonClick={() => alert("Button clicked!")}
            />
          }
        />
      </div>

      {/* <TabStack /> */}


      <div className="w-full ">
        <PortofolioHighlight />
      </div>
      <TechnologyContainer />
      <PromotionalSection
        title="Building Solutions, Delivering Excellence!"
        highlightText="Your Vision, Our Innovation"
        subtitle="Ridipt Technologies"
        description="At Ridipt Technologies, we don’t just build software — we craft digital experiences that empower your business to grow, scale, and stand out. From cutting-edge game development to enterprise-grade applications, our award-winning team blends creativity with technology to deliver solutions that are secure, scalable, and future-ready. Driven by innovation and guided by our core values, we ensure every product we deliver creates lasting impact and measurable value."
        buttonText="Let’s Work Together"
        className="!my-10 !mt-20"
        onClick={() => router.push('/get-in-touch')}
        animationData={require('@assets/animations/bg-animation1.json')} // Static VR image path
      />



      <IndusterySection industry={industries as FeatureItem[]} />

      <PartnerSection companies={partners} />
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className="flex  relative items-center my-8 flex-col gap-0 justify-start w-full max-w-7xl mx-auto mb-[1rem]"
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

        {/* <AnimatedTestimonialsDemo /> */}

      </div>
      <Testimonial />
      <ContactSession />
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
      component={(item, idx) =>
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
      }
      direction={direction}
      speed={speed}
      className=""
      pauseOnHover={false}
    />
  );
}