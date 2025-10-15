"use client";

import React from "react";
import Foodcourt_App from "@/assests/portfolio/Foodcourt App.webp";
import Link from "next/link";

const FoodcourtAppPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section with Image and Project Info */}
      <div className="relative p-10">
        {/* Dark mode supported background */}
        <div className="absolute top-0 left-0 w-full h-[590px] bg-sky-900 dark:bg-card z-0"></div>
        
        <div className="relative max-w-6xl mx-auto space-y-12 z-10">
          {/* Main Hero Card */}
          <div className="bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-border rounded-lg">
            {/* Project Image */}
            <div>
              <img
                src={Foodcourt_App.src}
                alt="Foodcourt App Screenshot"
                className="w-full h-auto shadow-md rounded-lg border border-border"
              />
            </div>
            
            {/* Project Details */}
            <div>
              <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                Foodcourt App
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                The FoodCourt mobile app, built with Flutter for both Android and iOS, revolutionizes the dining experience by eliminating long queues.
              </p>

              {/* Project and Platform Info Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Project</h2>
                  <p className="text-muted-foreground text-lg">
                    - Foodcourt App
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Platform</h2>
                  <p className="text-muted-foreground text-lg">- Mobile (iOS & Android)</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Technologies</h2>
                <p className="text-muted-foreground text-lg">- Flutter, Firebase, REST APIs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brief and Solution Section */}
      <div className="relative max-w-6xl mx-auto mt-6">
        {/* Background with dark mode support */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 dark:bg-muted/30 z-0"></div>

        {/* Card content */}
        <div className="relative bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10 border border-border rounded-lg">
          {/* Brief Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Brief</h2>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              The FoodCourt mobile application transforms the traditional food court experience by providing a seamless digital ordering platform. Built with Flutter, it offers a unified solution for both Android and iOS users.
              <br /><br />
              The app addresses the common pain points of long queues, order confusion, and payment delays by digitizing the entire ordering process. Users can browse menus from multiple vendors, customize their orders, and make secure payments all from their smartphones.
              <br /><br />
              With real-time order tracking, push notifications, and integrated payment systems, the FoodCourt app enhances customer satisfaction while helping food court operators manage orders more efficiently.
              <br /><br />
              The platform features a modern, intuitive interface designed to accommodate users of all technical skill levels. Its robust backend ensures reliable performance even during peak hours.
              <br /><br />
              By eliminating physical queues and streamlining operations, the FoodCourt app creates a win-win situation for both customers seeking convenience and vendors looking to optimize their service delivery.
              <br /><br />
              The solution scales easily to accommodate food courts of any size, from small standalone locations to large multi-vendor marketplaces.
            </p>
          </div>

          {/* Solution Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution</h2>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              The FoodCourt app solution is built on a modern mobile-first architecture using Flutter for cross-platform development, ensuring consistent user experience across iOS and Android devices.
              <br /><br />
              The application features a comprehensive vendor management system where food court operators can easily onboard new vendors, manage menus, track inventory, and monitor sales in real-time through an admin dashboard.
              <br /><br />
              For customers, the app provides an intuitive browsing experience with high-quality food images, detailed descriptions, allergen information, and customer reviews. The smart search and filter functionality helps users quickly find their preferred dishes.
              <br /><br />
              The integrated payment gateway supports multiple payment methods including credit cards, digital wallets, and UPI, with secure PCI-compliant transaction processing. Order management includes real-time status updates, estimated preparation times, and pickup notifications.
              <br /><br />
              The backend infrastructure leverages Firebase for authentication, real-time database synchronization, and push notifications, while RESTful APIs handle complex business logic, reporting, and third-party integrations.
              <br /><br />
              Advanced features include loyalty programs, promotional campaigns, order history, favorite items, and social sharing capabilities. The analytics dashboard provides valuable insights into customer behavior, popular items, peak hours, and revenue trends, enabling data-driven decision-making for food court management.
            </p>
          </div>
        </div>
      </div>

      {/* UI/UX Design Section */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-1">
        <div className="text-left mt-7">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">UI/UX (Design)</h2>
          <p className="text-muted-foreground text-lg text-justify leading-relaxed">
            The UI/UX design of the FoodCourt app focuses on creating an intuitive, visually appealing, and efficient mobile ordering experience. The design prioritizes ease of navigation, quick order placement, and seamless payment processing.
          </p>
          
          {/* Design Features List */}
          <ul className="list-disc list-inside space-y-3 mt-6 text-muted-foreground text-lg">
            <li>
              <span className="font-bold text-card-foreground">Onboarding:</span> The onboarding process is streamlined with a simple registration flow using email, phone number, or social login. Users are guided through app features with interactive tutorials and can skip to start browsing immediately.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Visual Menu Design:</span> High-quality food photography with appetizing presentation, clear pricing, and detailed descriptions. Smart categorization and search filters help users discover dishes quickly based on cuisine type, dietary preferences, and price range.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Order Customization:</span> Intuitive interface for customizing orders with add-ons, size options, and special instructions. Visual indicators show popular choices and recommended combinations to enhance the ordering experience.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Real-time Tracking:</span> Live order status updates with progress indicators from order placement through preparation to ready-for-pickup. Push notifications keep users informed without requiring constant app checking.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Payment Experience:</span> Secure, fast checkout with saved payment methods, digital wallet integration, and instant payment confirmation. Multiple payment options accommodate diverse user preferences while maintaining security standards.
            </li>
          </ul>
        </div>

        {/* Illustration Section */}
        <div className="text-left mt-12">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">Illustration</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={Foodcourt_App.src}
              alt="Foodcourt App Screenshot 1"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={Foodcourt_App.src}
              alt="Foodcourt App Screenshot 2"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-sky-900 dark:bg-card py-10 mt-10 border-y border-border">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-card-foreground">
            Need a mobile app solution like FoodCourt?
          </h1>
          <button className="bg-white dark:bg-primary text-blue-500 dark:text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book a strategy call
          </button>
        </div>
      </div>

      {/* Development Section */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Development Text */}
            <div className="text-muted-foreground text-lg leading-relaxed">
              Developing the FoodCourt mobile application involved creating a robust cross-platform solution using Flutter framework, ensuring native-like performance on both iOS and Android devices with a single codebase, significantly reducing development time and maintenance overhead.
              <br /><br />
              The architecture follows clean architecture principles with clear separation of concerns - presentation layer built with Flutter widgets, business logic layer handling app state management using Provider/Bloc patterns, and data layer managing API communications and local caching with SQLite.
              <br /><br />
              The backend infrastructure leverages Firebase services for authentication, real-time database synchronization, cloud storage for images, and Firebase Cloud Messaging for push notifications. Custom RESTful APIs built with Node.js handle complex business operations, payment processing integrations, and vendor management functionalities.
              <br /><br />
              Security measures include encrypted data transmission, secure token-based authentication, PCI-compliant payment processing, and regular security audits. The app implements offline-first functionality, allowing users to browse menus even without internet connectivity, with automatic synchronization when connection is restored.
            </div>

            {/* Development Image */}
            <img
              src={Foodcourt_App.src}
              alt="Foodcourt App Development Screenshot"
              className="w-full h-96 object-cover shadow-lg rounded-lg mt-10 border border-border"
            />
          </div>
        </div>
      </div>

      {/* Platform Screens Section */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 -mt-11">
        <div className="text-center mt-12">
          <h4 className="text-2xl font-bold mb-5 text-card-foreground">PLATFORM SCREENS</h4>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={Foodcourt_App.src}
              alt="Foodcourt App Screen 1"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={Foodcourt_App.src}
              alt="Foodcourt App Screen 2"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 -mt-11">
        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">You may also like</h2>
          <div className="grid grid-cols-2 gap-7">
            <div className="relative group overflow-hidden rounded-lg border border-border cursor-pointer">
              <img
                src={Foodcourt_App.src}
                alt="Related Project 1"
                className="w-full h-80 object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">View Project</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg border border-border cursor-pointer">
              <img
                src={Foodcourt_App.src}
                alt="Related Project 2"
                className="w-full h-80 object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">View Project</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* All Projects Button */}
      <div className="max-w-6xl mx-auto text-center space-y-6 px-6 mb-20">
        <Link href="/portfolio">
          <button className="bg-background dark:bg-card text-sky-900 dark:text-primary border-2 border-sky-900 dark:border-primary px-7 py-3 rounded-full font-semibold hover:bg-sky-500 hover:text-white dark:hover:bg-primary dark:hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-xl">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodcourtAppPage;
