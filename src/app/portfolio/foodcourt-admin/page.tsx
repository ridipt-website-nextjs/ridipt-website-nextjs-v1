"use client";

import React from "react";
import Foodcourt_Admin from "@/assests/portfolio/foodcpourt admn.jpg";
import Link from "next/link";

const FoodcourtAdminPage = () => {
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
                src={Foodcourt_Admin.src}
                alt="Foodcourt Admin Dashboard Screenshot"
                className="w-full h-auto shadow-md rounded-lg border border-border"
              />
            </div>
            
            {/* Project Details */}
            <div>
              <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                Foodcourt Admin
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                The FoodCourt Admin web app, built with React, streamlines management tasks by providing admins with an efficient platform to track and manage operations, improving overall efficiency and customer experience.
              </p>

              {/* Project and Platform Info Grid */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Project</h2>
                  <p className="text-muted-foreground text-lg">
                    - Foodcourt Admin
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Platform</h2>
                  <p className="text-muted-foreground text-lg">- Web</p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-semibold mb-2 text-card-foreground">Technologies</h2>
                <p className="text-muted-foreground text-lg">- React, Node.js, MySQL</p>
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
              The FoodCourt Admin dashboard is a comprehensive web-based management system designed to provide food court operators and administrators with complete control over their operations. Built with React for optimal performance and user experience.
              <br /><br />
              The platform addresses the complex challenges of managing multiple vendors, tracking orders in real-time, monitoring inventory levels, processing payments, and analyzing business performance metrics all from a single, unified interface.
              <br /><br />
              With real-time data synchronization and intuitive visualizations, administrators can make informed decisions quickly, respond to operational issues proactively, and optimize resource allocation for maximum efficiency.
              <br /><br />
              The system provides role-based access control, ensuring that different stakeholders - from super admins to individual vendor managers - have appropriate access to relevant features and data while maintaining security and data integrity.
              <br /><br />
              By centralizing all management functions in one powerful dashboard, the FoodCourt Admin solution eliminates the need for multiple disparate systems, reduces operational overhead, and enables scalable growth for food court businesses.
              <br /><br />
              The responsive design ensures administrators can monitor and manage operations from any device, whether in the office or on the food court floor, providing flexibility and mobility for modern business management.
            </p>
          </div>

          {/* Solution Section */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution</h2>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              The FoodCourt Admin solution is architected as a modern single-page application using React for the frontend, providing a responsive and fluid user experience with instant updates and smooth navigation between different management modules.
              <br /><br />
              The dashboard features a comprehensive vendor management system where administrators can onboard new vendors, manage menu items, set pricing rules, track vendor performance metrics, and handle vendor payments and settlements through an integrated financial module.
              <br /><br />
              Real-time order management capabilities include live order tracking, order status updates, kitchen display system integration, and automated notification workflows that keep all stakeholders informed throughout the order lifecycle from placement to completion.
              <br /><br />
              The analytics and reporting module leverages MySQL database for robust data storage and complex query capabilities, providing detailed insights into sales trends, popular items, peak hours, customer behavior patterns, and revenue forecasts through interactive charts and exportable reports.
              <br /><br />
              The Node.js backend provides RESTful APIs for all administrative functions, handles authentication and authorization, manages database operations, and integrates with third-party services for payment processing, SMS notifications, and email communications.
              <br /><br />
              Advanced features include inventory management with low-stock alerts, promotional campaign management, customer relationship management tools, staff scheduling, and multi-location support for food court chains, all designed to provide a complete end-to-end management solution that scales with business growth.
            </p>
          </div>
        </div>
      </div>

      {/* UI/UX Design Section */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-1">
        <div className="text-left mt-7">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">UI/UX (Design)</h2>
          <p className="text-muted-foreground text-lg text-justify leading-relaxed">
            The UI/UX design of the FoodCourt Admin dashboard prioritizes efficiency, clarity, and ease of use for administrators managing complex food court operations. The interface is designed to present large amounts of data in digestible, actionable formats.
          </p>
          
          {/* Design Features List */}
          <ul className="list-disc list-inside space-y-3 mt-6 text-muted-foreground text-lg">
            <li>
              <span className="font-bold text-card-foreground">Dashboard Overview:</span> A comprehensive at-a-glance view with key performance indicators, real-time order status, revenue metrics, and system alerts presented through clear data visualizations and interactive widgets that administrators can customize based on their priorities.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Intuitive Navigation:</span> A well-organized sidebar menu with logical grouping of features, breadcrumb navigation for context awareness, and quick-access shortcuts to frequently used functions, minimizing clicks and reducing time spent navigating between different sections.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Data Visualization:</span> Advanced charts and graphs using libraries like Chart.js or Recharts to display sales trends, order volumes, vendor performance, and customer analytics in visually appealing and easily interpretable formats with drill-down capabilities for detailed analysis.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Responsive Tables:</span> Feature-rich data tables with sorting, filtering, pagination, and bulk actions for managing large datasets efficiently. Export functionality for reports and seamless integration with common file formats like CSV and PDF.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Real-time Updates:</span> Live notifications and status updates using WebSocket connections ensure administrators are immediately informed of new orders, system alerts, vendor updates, and critical events without requiring manual page refreshes, enabling rapid response to operational needs.
            </li>
          </ul>
        </div>

        {/* Illustration Section */}
        <div className="text-left mt-12">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">Illustration</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={Foodcourt_Admin.src}
              alt="Foodcourt Admin Dashboard View 1"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={Foodcourt_Admin.src}
              alt="Foodcourt Admin Dashboard View 2"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-sky-900 dark:bg-card py-10 mt-10 border-y border-border">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-card-foreground">
            Need an admin dashboard solution like FoodCourt?
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
              Developing the FoodCourt Admin dashboard involved creating a robust, scalable web application using React as the core frontend framework, leveraging its component-based architecture to build reusable UI elements and ensure maintainable, testable code across the entire application.
              <br /><br />
              State management is handled using Redux Toolkit for complex application state, Context API for simpler shared state, and React Query for efficient server state management with automatic caching, background updates, and optimistic UI updates that enhance perceived performance.
              <br /><br />
              The backend is built on Node.js with Express framework, providing RESTful API endpoints for all administrative operations. MySQL database ensures reliable data storage with complex relational queries, transactions for data integrity, and optimized indexing for fast query performance even with large datasets.
              <br /><br />
              Security implementations include JWT-based authentication, role-based access control (RBAC), SQL injection prevention through parameterized queries, XSS protection, CSRF tokens, rate limiting, and comprehensive audit logging to track all administrative actions for compliance and security monitoring.
            </div>

            {/* Development Image */}
            <img
              src={Foodcourt_Admin.src}
              alt="Foodcourt Admin Development Screenshot"
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
              src={Foodcourt_Admin.src}
              alt="Admin Dashboard Screen 1"
              className="w-full h-80 object-cover shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={Foodcourt_Admin.src}
              alt="Admin Dashboard Screen 2"
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
                src={Foodcourt_Admin.src}
                alt="Related Project 1"
                className="w-full h-80 object-cover shadow-md group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-semibold text-lg">View Project</span>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg border border-border cursor-pointer">
              <img
                src={Foodcourt_Admin.src}
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

export default FoodcourtAdminPage;
