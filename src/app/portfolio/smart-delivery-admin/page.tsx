"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/Admin-1.png";
import SDPImg2 from "@/assests/portfolio/Admin-2.png";
import SDPImg3 from "@/assests/portfolio/Admin-3.png";
import GroceryDeliveryDistributor from "@/assests/portfolio/Delivery.png";
import Agent from "@/assests/portfolio/Agent-1.jpeg";
import Client from "@/assests/portfolio/Client-1.jpeg";
import md from "@/assests/portfolio/md-1.jpeg";
import Link from "next/link";

const SmartDeliveryPageAdmin = () => {
  return (
    <div>
      <div className="relative p-10">
        <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 z-0"></div>
        <div className="relative max-w-6xl mx-auto space-y-12 z-10">
          <div className="bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={SDPImg1.src}
                alt="Smart Delivery Platform Screenshot"
                className="w-full h-auto shadow-md"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Grocery Delivery(Admin)
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                A web-based platform for managing grocery delivery operations,
                enabling admin control over users, distributors, products,
                payments, and subscriptions.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Project</h2>
                  <p className="text-gray-700 text-lg">
                    Grocery Delivery - Admin
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                  <p className="text-gray-700 text-lg">Javascript</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
              <p className="text-gray-700 text-lg">
                React, Chakra UI, Node.js/Express, MongoDB | REST APIs, JWT Auth,
                OTP APIs | Manual & Automated Testing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief & Solution */}
      <div className="relative max-w-6xl mx-auto mt-6">
        <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 z-0"></div>
        <div className="relative bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">Brief</h2>
            <p className="text-gray-700 text-lg text-justify">
              The Grocery Delivery Admin Dashboard is a powerful web-based
              platform that streamlines and centralizes the management of a
              grocery delivery business. It gives admins full control over
              platform users, distributors, agents, and customers while
              efficiently managing products, brands, and categories. The system
              also provides detailed insights into payments, commissions, and
              subscriptions, helping admins make informed decisions. Designed
              for efficiency and clarity, this dashboard ensures smooth
              operations, better oversight, and an organized workflow across
              the entire platform.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4"> Solution / Key Features:</h2>
            <p className="text-gray-700 text-lg text-justify mb-6">
              The Grocery Delivery
              Admin Dashboard offers a
              comprehensive solution to efficiently manage all aspects of a
              grocery delivery platform. It enables admins to seamlessly
              handle platform users, distributors, agents, and customers
              while maintaining a well-structured product catalog, including
              brands and categories. The system also provides tools to
              monitor payments, platform commissions, and subscriptions,
              ensuring smooth financial tracking. By centralizing all
              operations in one intuitive dashboard, admins can streamline
              workflows, gain real-time insights, and make informed
              decisions to enhance overall platform efficiency.
            </p>
            {/* Key Solution*/}
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-3">Key Features: </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                <li>
                  <span className="font-bold">User Management:</span> Add, edit, and manage platform users with defined roles.
                </li>
                <li>
                  <span className="font-bold">Distributor Management:</span> Track and manage distributors, their subscriptions, and payments.
                </li>
                <li>
                  <span className="font-bold">Agent & Customer Management:</span> Efficiently monitor agents and customers, with easy profile management.
                </li>
                <li>
                  <span className="font-bold">Brand & Category Management:</span> Organize brands and categories, and assign products accordingly.
                </li>
                <li>
                  <span className="font-bold">Product Management:</span> Add, edit, and maintain product details, pricing, and inventory.
                </li>
                <li>
                  <span className="font-bold">Payment & Subscription Tracking:</span> Monitor payments, commissions, and subscription plans in real-time.
                </li>
                <li>
                  <span className="font-bold">Centralized Dashboard:</span> Access all management tools from a single, intuitive interface for streamlined operations.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>

      {/* UI/UX */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-6">
        <div>
          <h2 className="text-4xl font-bold mb-6">UI/UX (Design)</h2>
          <p className="text-gray-700 text-lg text-justify mb-6">
            The Grocery Delivery Admin Dashboard has been designed with a focus on
            simplicity, usability, and efficiency. The interface is clean and intuitive,
            allowing admins to navigate effortlessly between different modules such as
            users, distributors, products, and payments.
          </p>

          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>
              <span className="font-bold">Dashboard Overview:</span> A concise, real-time
              snapshot of platform activity, revenue, and subscription status.
            </li>
            <li>
              <span className="font-bold">Navigation & Layout:</span> Easy-to-use sidebar
              and top navigation for quick access to all sections.
            </li>
            <li>
              <span className="font-bold">Responsive Design:</span> Fully responsive
              layout for optimal performance on desktops, tablets, and mobile devices.
            </li>
            <li>
              <span className="font-bold">Data Visualization:</span> Charts, graphs, and
              tables to display payments, commissions, and subscription data clearly.
            </li>
            <li>
              <span className="font-bold">Consistency & Accessibility:</span> Uniform
              color schemes, fonts, and interactive elements ensure a smooth user
              experience.
            </li>
          </ul>

          <p className="text-gray-700 text-lg text-justify mt-6">
            The design emphasizes efficiency and clarity, helping admins make informed
            decisions quickly while managing all aspects of the grocery delivery
            platform.
          </p>
        </div>

      </div>



      <div className="w-full bg-sky-900 py-10 mt-10">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Explore More of Our Work
          </h1>
          <Link href="/portfolio">
            <button className="bg-white text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Development */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6">Development & Tech Stack</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <p>
              The Grocery Delivery Admin Dashboard was built with a modern, full-stack
              approach to ensure a robust, scalable, and secure platform. The
              development focused on creating a responsive frontend, a reliable
              backend, and seamless data management for all users, distributors,
              products, and payments.
            </p>


            <div>
              <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">React.js:</span> Used for building a
                  dynamic and interactive interface with reusable components.
                </li>
                <li>
                  <span className="font-bold">Chakra UI:</span> Provided a clean,
                  responsive, and modern design system, ensuring consistent styling
                  and quick development.
                </li>
                <li>
                  <span className="font-bold">Responsive Layout:</span> Optimized for
                  desktops, tablets, and mobile devices.
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-2xl font-semibold mb-3">Backend</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Node.js & Express.js:</span> Used to
                  create a fast and scalable server.
                </li>
                <li>
                  <span className="font-bold">RESTful APIs:</span> Handle operations
                  such as user management, distributor tracking, product management,
                  and payments.
                </li>
                <li>
                  <span className="font-bold">JWT Authentication:</span> Ensures
                  secure access for different roles (admin, agent, customer).
                </li>
                <li>
                  <span className="font-bold">OTP APIs:</span> Implemented for secure
                  and verified user logins.
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-2xl font-semibold mb-3">Database</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">MongoDB:</span> Stores and manages all
                  platform data, including users, distributors, products,
                  subscriptions, and payments.
                </li>
                <li>
                  <span className="font-bold">Schema Design:</span> Ensures data
                  consistency and easy retrieval for analytics and reporting.
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-2xl font-semibold mb-3">Testing & Reliability</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Manual Testing:</span> Conducted
                  comprehensively to ensure all functionalities work as expected.
                </li>
                <li>
                  <span className="font-bold">Automated Testing:</span> Scripts
                  implemented for critical features to ensure reliability and prevent
                  future bugs.
                </li>
              </ul>
            </div>


            <div>
              <h3 className="text-2xl font-semibold mb-3">Additional Features</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Real-Time Data Visualization:</span> Charts
                  and tools for payments, subscriptions, and platform insights.
                </li>
                <li>
                  <span className="font-bold">Modular & Scalable Architecture:</span>{" "}
                  Allows easy addition of new features in the future.
                </li>
              </ul>
            </div>

            <p>
              This tech stack and development approach resulted in a high-performance,
              secure, and user-friendly admin dashboard, capable of managing all
              aspects of the grocery delivery platform efficiently.
            </p>
          </div>
        </div>
      </div>



      {/* Screenshots */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">WEBSITE SCREENS</h2>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={SDPImg2.src}
              alt="Smart Delivery Platform Screen 1"
              className="w-full h-80 object-contain shadow-md"
            />
            <img
              src={SDPImg3.src}
              alt="Smart Delivery Platform Screen 2"
              className="w-full h-80 object-contain shadow-md"
            />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto space-y-12 p-10 -mt-11">
        <div className="text-center mt-12">
          <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 to-sky-300 bg-clip-text text-transparent relative inline-block
               drop-shadow-lg transition-all duration-500 hover:from-sky-300 hover:to-sky-200">
            Other Grocery Delivery Apps
            <span className="absolute left-0 -bottom-2 w-24 h-1 bg-sky-300 rounded-full animate-pulse"></span>
          </h2>



          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
            {/* Grocery Delivery Distributor */}
            <Link href="/portfolio/smart-delivery-distributor" className="group block">
              <div className="shadow-md hover:shadow-2xl transition-all rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={GroceryDeliveryDistributor.src}
                    alt="Grocery Delivery Distributor App Screenshot"
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-800 py-4 group-hover:text-green-600 transition-colors duration-300">
                  Grocery Delivery (Distributor)
                </h3>
              </div>
            </Link>

            {/* Grocery Delivery Agent App */}
            <Link href="/portfolio/smart-delivery-agent" className="group block">
              <div className="shadow-md hover:shadow-2xl transition-all rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={Agent.src}
                    alt="Grocery Delivery Agent App Screenshot"
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-800 py-4 group-hover:text-green-600 transition-colors duration-300">
                  Grocery Delivery (Agent App)
                </h3>
              </div>
            </Link>

            {/* Grocery Delivery Client App  */}
            <Link href="/portfolio/smart-delivery-client" className="group block">
              <div className="shadow-md hover:shadow-2xl transition-all rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={Client.src}
                    alt="Grocery Delivery Client App Screenshot"
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-800 py-4 group-hover:text-green-600 transition-colors duration-300">
                  Grocery Delivery (Client App)
                </h3>
              </div>
            </Link>

            {/* Grocery Delivery Mini Distributor App  */}
            <Link href="/portfolio/mini-distributor-app" className="group block">
              <div className="shadow-md hover:shadow-2xl transition-all rounded-2xl overflow-hidden cursor-pointer transform hover:-translate-y-2 bg-white">
                <div className="relative overflow-hidden">
                  <img
                    src={md.src}
                    alt="Mini Distributor App Screenshot"
                    className="w-full h-80 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-center text-lg font-semibold text-gray-800 py-4 group-hover:text-green-600 transition-colors duration-300">
                  Grocery Delivery (Mini Distributor App)
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

    </div>


  );
};

export default SmartDeliveryPageAdmin;
