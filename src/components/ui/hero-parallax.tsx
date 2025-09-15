"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { FlipWords } from "./flip-words";
import { Button } from "./button";
import bgImage from '@assets/backgrounds/bg7.jpg'
import Link from "next/link";



export const HeroParallax = ({
  products,
}: {
  products?: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products?.slice(0, 5);
  const secondRow = products?.slice(5, 10);
  const thirdRow = products?.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    // pt-[calc(var(--header-height)+120px)] !-top-[calc(var(--header-height)+16px)] 
    <div
      ref={ref}
      className="h-auto md:h-[100vh]  py-40  pb-30 overflow-hidden antialiased relative flex flex-col self-auto  [transform-style:preserve-3d]"
    >
      {/* image container */}
      <div
        style={{
          '--bg-image': `url(${bgImage.src || bgImage})`
        } as React.CSSProperties}
        className="bg-[image:var(--bg-image)] bg-cover mix-blend-color-burn bg-center absolute -inset-3"
      />
      {/* <div className="absolute left-0 top-0 z-10 h-full w-full blur-3xl filter " /> */}

      <Header />
      {/* <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div> */}
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 items-start justify-center flex flex-col  px-4 w-full  left-0 top-0 ">
      <h1 className="text-2xl md:text-7xl font-bold text-secondary dark:text-primary text-start ">
        Welcome to the Future of Application Development: <br />  <FlipWords
          words={[
            "Serverless Architecture",
            "Cloud-Native Solutions",
            "Scalable Applications",
            "Next-Gen Development"
          ]}
          className="!text-accent-foreground mt-3 !ml-0 !pl-0"
        />
      </h1>
      <p className="max-w-2xl text-start text-base md:text-xl mt-8 text-secondary/70 dark:text-primary/70">
        Revolutionize your applications with Ridipt Technologies. Build, deploy, and innovate without worrying about infrastructure.
      </p>
      <Link
        href="/get-in-touch"
        className="
    mt-10 p-4 px-10 rounded-full 
    text-secondary bg-accent-foreground 
    transition-all duration-300  border-2  hover:border-accent-foreground border-transparent
    hover:bg-accent hover:text-accent-foreground 
    hover:scale-105 hover:shadow-lg
  "
      >
        Share Your Idea
      </Link>

    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <img
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
