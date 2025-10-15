"use client";

import React, { useState } from "react";
import Link from "next/link";
import Structure from "@/components/common/page-structure";
import Header from "@/components/section-heading";
import Section from "@/components/section-structure";
import { Button } from "@/components/ui/button";

// Images
// import IOTImg from "@/assests/portfolio/IOT EV Charging Platform.jpeg";
// import Foodcourt_Admin from "@/assests/portfolio/foodcpourt admn.jpg";
// import Foodcourt_App from "@/assests/portfolio/Foodcourt App.webp";
// import Cab_Advertisement_App from "@/assests/portfolio/Cab Advertisement App.jpeg";
import Lab_Report from "@/assests/portfolio/Lab Report Management-1.png";
// import Droshipping_portal from "@/assests/portfolio/Dropshipping Portal.webp";
// import Droshipping_platform from "@/assests/portfolio/Dropshipping Platform.jpeg";
import smart_Delivery_admin from "@/assests/portfolio/Delivery.png";
import Hotel_Room_Booking from "@/assests/portfolio/Room-1.png";
import Event_Booking from "@/assests/portfolio/e1.png";


const projects = [
  { id: "smart-delivery-admin", title: "Grocery Delivery", category: "Web", image: smart_Delivery_admin },
  { id: "hotel-room-booking", title: "Hotel Room Booking", category: "Web", image: Hotel_Room_Booking },
  {id: "event-booking-system", title: "Event Booking System", category: "Web", image: Event_Booking},
  { id: "lab-report-management", title: "Lab Report Management", category: "Web", image: Lab_Report },
  // { id: "iot-ev-charging", title: "IOT EV Charging Platform", category: "Mobile", image: IOTImg },
  // { id: "foodcourt-admin", title: "Foodcourt Admin", category: "Web", image: Foodcourt_Admin },
  // { id: "food-court-app", title: "Food Court App", category: "Mobile", image: Foodcourt_App },
  // { id: "cab-advertisement-app", title: "Cab Advertisement App", category: "Mobile", image: Cab_Advertisement_App },
  // { id: "dropshipping-portal", title: "Dropshipping Portal", category: "Web", image: Droshipping_portal },
  // { id: "dropshipping-platform", title: "Dropshipping Platform", category: "Web", image: Droshipping_platform },
];

const categories = ["All", "Mobile", "Web", "UI/UX Design"];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Structure>
      <Section>
        {/* Header with Dark Mode Support */}
        <Header
          heading="Innovating the Digital World"
          subheading="Discover our cutting-edge projects and how we are transforming the digital landscape with creativity and technology."
          className="bg-gradient-to-r from-sky-400 to-sky-600 dark:!bg-none dark:bg-card text-white dark:text-card-foreground p-6 rounded-2xl shadow-lg border dark:border-border"
          description=""
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={(activeCategory === cat)?'default':'outline'}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-6 py-2 transition-transform transform hover:scale-110 ${
                activeCategory === cat
                  ? " shadow-lg"
                  : ""
              }`}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Projects Grid or No Projects Message */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="cursor-pointer bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-border">
                  <div className="overflow-hidden">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-card-foreground">{project.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{project.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 mt-8">
            <div className="text-center max-w-md">
              <div className="mb-4">
                <svg
                  className="w-24 h-24 mx-auto text-muted-foreground/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                No Projects Available
              </h3>
              <p className="text-muted-foreground mb-6">
                There are currently no projects in the <span className="font-semibold text-card-foreground">{activeCategory}</span> category. Please check back later or try a different category.
              </p>
              <Button
                onClick={() => setActiveCategory("All")}
                className=" transition-all duration-300 rounded-full px-6 py-2"
              >
                View All Projects
              </Button>
            </div>
          </div>
        )}
      </Section>
    </Structure>
  );
};

export default Page;
