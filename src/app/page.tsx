import { CardStack } from "@/components/card-stack";
import { HeroParallaxDemo } from "@/components/hero-parallax";
import { SubHeading } from "@/components/sub-heading";
import { TabStack } from "@/components/tabs-stack";
import { AnimatedTestimonialsDemo } from "@/components/testemonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroParallaxDemo />
      <div>
        <SubHeading
          text="Empowering Your Digital Vision:"
          highlightedText="Innovative Solutions for Tomorrow"
        />
        <CardStack />
      </div>

      <TabStack />
      <AnimatedTestimonialsDemo />
    </>
  );
}
