"use client";

import React from "react";
import LABImg from "@/assests/portfolio/library-1.jpeg";
import LABIMg2 from "@/assests/portfolio/Lab Report Management-2.png";
import LABIMg3 from "@/assests/portfolio/library-2.jpeg";
import LABIMg4 from "@/assests/portfolio/library-3.jpeg";
import Link from "next/link";

const LabManagementPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <div className="relative p-10">
        <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 dark:bg-card z-0"></div>
        <div className="relative max-w-6xl mx-auto space-y-12 z-10">
          <div className="bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-border rounded-lg">
            <div>
              <img
                src={LABImg.src}
                alt="Lab Management System Screenshot"
                className="w-full h-auto shadow-md rounded-lg border border-border"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                Lab Management System (CarerLab)
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                CarerLab is a digital Lab Management System that automates
                diagnostic lab operations, reducing errors and speeding up test
                management and report generation.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Project</h2>
                  <p className="text-muted-foreground text-lg">Lab Management System</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Platform</h2>
                  <p className="text-muted-foreground text-lg">Javascript</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Technologies</h2>
              <p className="text-muted-foreground text-lg">
                React, Chakra UI, CSS, HTML | REST APIs | @react-pdf/renderer | WinSCP | Manual Testing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brief & Solution */}
      <div className="relative max-w-6xl mx-auto mt-6">
        <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 dark:bg-muted/30 z-0"></div>
        <div className="relative bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10 border border-border rounded-lg">
          {/* Brief */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Brief</h2>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              The Lab Management System (CarerLab) was built for diagnostic
              laboratories to digitize and automate their operations. Labs
              traditionally relied on manual records and fragmented tools for
              managing patient tests, referring doctors, and report generation.
              This led to inefficiencies, human errors, and time-consuming
              report preparation.
              <br />
              <br />
              <span className="font-semibold text-card-foreground">Business Need:</span>
              <br />- Provide a centralized dashboard for lab owners and admins.
              <br />- Reduce dependency on manual processes and ensure faster,
              more reliable reporting.
              <br />- Improve navigation and workflow efficiency for staff
              handling large volumes of patients and test data daily.
              <br />
              <br />
              The goal was to create a scalable, user-friendly, and reliable
              solution that boosted efficiency, reduced turnaround time, and
              generated branded PDF reports for patients.
            </p>
          </div>

          {/* Solution */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution</h2>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              The project was designed with modularity and performance in mind:
              <br />- React-based dashboard with Chakra UI for a clean,
              responsive, role-based interface.
              <br />- Separated modules (Patient Test Management, Package
              Management, Report Generation, Lab Management) for easy scaling.
              <br />- Optimized API integration with filtering and improved
              performance for 100+ daily users.
              <br />- Dynamic PDF reports with branded backgrounds using
              @react-pdf/renderer.
              <br />- Stable deployment pipeline using WinSCP.
              <br />- Iterative improvements based on client feedback (e.g.,
              sidebar navigation, report formatting).
            </p>
          </div>
        </div>
      </div>

      {/* UI/UX */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-6">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">UI/UX (Design)</h2>
          <p className="text-muted-foreground text-lg text-justify leading-relaxed">
            Designing for labs meant balancing ease of use for non-technical
            staff with advanced functionality for admins.
          </p>
          <ul className="list-disc list-inside space-y-3 mt-4 text-muted-foreground text-lg">
            <li>
              <span className="font-bold text-card-foreground">Simplicity First:</span> Clear labels,
              structured forms, logical grouping.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Task-Oriented Layout:</span>{" "}
              Prioritized frequently used modules (tests, reports).
            </li>
            <li>
              <span className="font-bold text-card-foreground">Responsive Design:</span> Chakra UI
              ensured consistent styling across devices.
            </li>
            <li>
              <span className="font-bold text-card-foreground">Efficiency:</span> Minimized clicks
              for common actions like report generation.
            </li>
          </ul>

          {/* Key UI/UX Features */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4 text-card-foreground">Key UI/UX Features:</h3>
            <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg">
              <li>
                <span className="font-bold text-card-foreground">Login & Role-Based Access:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Lab Owner: Full control.</li>
                  <li>Admin: Restricted but focused access.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-card-foreground">Patient Test Management:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Add or update patient details and test records.</li>
                  <li>Generate reports in one click.</li>
                  <li>Search & filter functionality for quick access.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-card-foreground">Package Management:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    Create/manage test bundles (e.g., health check-up packages).
                  </li>
                  <li>Pricing and discount flexibility.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-card-foreground">Lab Management:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>
                    Maintain referral doctors' and collection centers' data.
                  </li>
                  <li>Improve tracking of referrals and commissions.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-card-foreground">Report Generation:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Export PDFs with branded background images.</li>
                  <li>
                    Dynamic data binding to ensure accurate and professional
                    reports.
                  </li>
                  <li>One-click download or print.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold text-card-foreground">Navigation Experience:</span>
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Sidebar: Quick access to modules.</li>
                  <li>
                    App Bar: Notifications, settings, and profile management.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-muted-foreground text-lg mt-6 text-justify leading-relaxed">
              <span className="font-bold text-card-foreground">Result:</span> The design enabled even{" "}
              <span className="font-bold text-card-foreground">first-time users</span> to quickly
              learn and adopt the system, reducing onboarding time
              significantly.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="w-full bg-sky-900 dark:bg-card py-10 mt-10 border-y border-border">
        <div className="max-w-6xl mx-auto text-center space-y-6 px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-card-foreground">
            Explore More of Our Work
          </h1>
          <Link href="/portfolio">
            <button className="bg-white dark:bg-primary text-blue-500 dark:text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
              View All Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Development */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-left">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">Development</h2>
          <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
            {/* Frontend */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                Frontend (React + Chakra UI)
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Built reusable components: <strong className="text-card-foreground">Tables, Forms, Cards, Modals, Dropdowns</strong>.
                </li>
                <li>
                  Used Chakra UI for <strong className="text-card-foreground">responsive layouts</strong> (desktop, tablet, mobile).
                </li>
                <li>
                  Implemented <strong className="text-card-foreground">state management</strong> with React hooks for test/package data.
                </li>
                <li>
                  Sidebar with <strong className="text-card-foreground">highlighted active links</strong> for intuitive navigation.
                </li>
              </ul>
            </div>

            {/* Backend Integration */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Backend Integration (RESTful APIs)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Integrated APIs for patient, test, and package data retrieval.</li>
                <li>Implemented <strong className="text-card-foreground">server-side filtering</strong> to reduce client-side load.</li>
                <li>
                  Optimized API calls to improve speed by <strong className="text-card-foreground">50%</strong>.
                </li>
              </ul>
            </div>

            {/* PDF Report Generation */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">PDF Report Generation</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Used @react-pdf/renderer for dynamic PDF creation.</li>
                <li>
                  Implemented branded <strong className="text-card-foreground">background images</strong> using{" "}
                  <code className="bg-muted px-2 py-1 rounded text-card-foreground">&lt;Page&gt;</code> and <code className="bg-muted px-2 py-1 rounded text-card-foreground">&lt;View&gt;</code> components.
                </li>
                <li>
                  Tested across multiple cases (single test, multiple packages, custom reports).
                </li>
              </ul>
            </div>

            {/* Deployment */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Deployment (WinSCP)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Faced challenges during the first-time deployment.</li>
                <li>
                  Learned to configure environment variables and transfer build files
                  using WinSCP.
                </li>
                <li>Standardized deployment for smoother future updates.</li>
              </ul>
            </div>

            {/* Testing */}
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Testing (Manual)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cross-browser and cross-device testing for responsiveness.</li>
                <li>Validation for form fields (contact, email, patient IDs).</li>
                <li>Verified PDF accuracy against lab requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Website Screens */}
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 text-card-foreground">WEBSITE SCREENS</h2>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={LABImg.src}
              alt="Lab Management Screen 1"
              className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={LABIMg2.src}
              alt="Lab Management Screen 2"
              className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
            />
            <img
              src={LABIMg3.src}
              alt="Lab Management Screen 3"
              className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-6"
            />
            <img
              src={LABIMg4.src}
              alt="Lab Management Screen 4"
              className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabManagementPage;
