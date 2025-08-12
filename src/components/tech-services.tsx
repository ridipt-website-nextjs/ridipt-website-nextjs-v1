"use client";
import React from "react";
import { TechServices as StickyScroll } from "./ui/sticky-scroll-reveal";
import web from '@/assests/our_services/web.svg';
import android from "@/assests/our_services/android.svg";
import cloud from "@/assests/our_services/cloud.svg";
import ai from "@/assests/our_services/ai.svg";
import automation from '@/assests/our_services/automation.svg';

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

export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-4">
      <StickyScroll content={content} heading="Tech Services" />
    </div>
  );
}
