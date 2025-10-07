"use client";

import React, { useState } from "react";
import Link from "next/link";
import Structure from "@/components/common/page-structure";
import Header from "@/components/section-heading";
import Section from "@/components/section-structure";
import { Button } from "@/components/ui/button";

// Images
import IOTImg from "@/assests/portfolio/IOT EV Charging Platform.jpeg";
import Foodcourt_Admin from "@/assests/portfolio/foodcpourt admn.jpg";
import Foodcourt_App from "@/assests/portfolio/Foodcourt App.webp";
import Cab_Advertisement_App from "@/assests/portfolio/Cab Advertisement App.jpeg";
import Lab_Report from "@/assests/portfolio/Lab Report Management-1.png";
import Droshipping_portal from "@/assests/portfolio/Dropshipping Portal.webp";
import Droshipping_platform from "@/assests/portfolio/Dropshipping Platform.jpeg";
import smart_Delivery from "@/assests/portfolio/Smart Delivery Admin System.png";
import smart_Delivery_admin from "@/assests/portfolio/Delivery.png";
import smart_Delivery_Distributor from "@/assests/portfolio/Delivery.png";


const projects = [
  { id: "iot-ev-charging", title: "IOT EV Charging Platform", category: "Mobile", image: IOTImg },
  { id: "foodcourt-admin", title: "Foodcourt Admin", category: "Web", image: Foodcourt_Admin },
  { id: "food-court-app", title: "Food Court App", category: "Mobile", image: Foodcourt_App },
  { id: "cab-advertisement-app", title: "Cab Advertisement App", category: "Mobile", image: Cab_Advertisement_App },
  { id: "lab-report-management", title: "Lab Report Management", category: "Web", image: Lab_Report },
  { id: "dropshipping-portal", title: "Dropshipping Portal", category: "Web", image: Droshipping_portal },
  { id: "dropshipping-platform", title: "Dropshipping Platform", category: "Web", image: Droshipping_platform },
  { id: "smart-delivery-admin", title: "Grocery Delivery", category: "Web", image: smart_Delivery_admin },
  //{ id: "smart-delivery-admin", title: "Smart Delivery Admin System", category: "Web", image: smart_Delivery },
  // { id: "smart-delivery-distributor", title: "Grocery Delivery Distributor", category: "Mobile", image: smart_Delivery_Distributor },
];

const categories = ["All", "Mobile", "Web", "Game", "AR/VR", "Blockchain", "UI/UX Design", ".NET"];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Structure>
      <Section>
        <Header
          heading="Innovating the Digital World"
          subheading="Discover our cutting-edge projects and how we are transforming the digital landscape with creativity and technology."
          className="bg-gradient-to-r from-sky-400 to-sky-600 text-white p-6 rounded-2xl shadow-lg"
          description=""
        />

        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 transition-transform transform hover:scale-110 ${
                activeCategory === cat
                  ? "bg-sky-500 text-white shadow-lg"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {filteredProjects.map((project) => (
            <Link key={project.id} href={`/portfolio/${project.id}`}>
              <div className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
                <div className="overflow-hidden">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{project.category}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Structure>
  );
};

export default Page;
