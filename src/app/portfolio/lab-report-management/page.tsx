"use client";

import React from "react";
import LABImg from "@/assests/portfolio/library-1.jpeg";
import LABIMg2 from "@/assests/portfolio/Lab Report Management-2.png";
import LABIMg3 from "@/assests/portfolio/library-2.jpeg";
import LABIMg4 from "@/assests/portfolio/library-3.jpeg";
import Link from "next/link";



const LabManagementPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative p-10">
        <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 z-0"></div>
        <div className="relative max-w-6xl mx-auto space-y-12 z-10">
          <div className="bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={LABImg.src}
                alt="Lab Management System Screenshot"
                className="w-full h-auto shadow-md"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6">
                Lab Management System (CarerLab)
              </h1>
              <p className="text-gray-700 text-lg mb-8">
                CarerLab is a digital Lab Management System that automates
                diagnostic lab operations, reducing errors and speeding up test
                management and report generation.
              </p>

              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Project</h2>
                  <p className="text-gray-700 text-lg">Lab Management System</p>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                  <p className="text-gray-700 text-lg">Javascript</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
              <p className="text-gray-700 text-lg">
                React, Chakra UI, CSS, HTML | REST APIs | @react-pdf/renderer | WinSCP | Manual Testing
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
              The Lab Management System (CarerLab) was built for diagnostic
              laboratories to digitize and automate their operations. Labs
              traditionally relied on manual records and fragmented tools for
              managing patient tests, referring doctors, and report generation.
              This led to inefficiencies, human errors, and time-consuming
              report preparation.
              <br />
              <br />
              <span className="font-semibold">Business Need:</span>
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

          <div>
            <h2 className="text-3xl font-bold mb-4">Solution</h2>
            <p className="text-gray-700 text-lg text-justify">
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
          <h2 className="text-4xl font-bold mb-6">UI/UX (Design)</h2>
          <p className="text-gray-700 text-lg text-justify">
            Designing for labs meant balancing ease of use for non-technical
            staff with advanced functionality for admins.
          </p>
          <ul className="list-disc list-inside space-y-2 mt-4 text-gray-700 text-lg">
            <li>
              <span className="font-bold">Simplicity First:</span> Clear labels,
              structured forms, logical grouping.
            </li>
            <li>
              <span className="font-bold">Task-Oriented Layout:</span>{" "}
              Prioritized frequently used modules (tests, reports).
            </li>
            <li>
              <span className="font-bold">Responsive Design:</span> Chakra UI
              ensured consistent styling across devices.
            </li>
            <li>
              <span className="font-bold">Efficiency:</span> Minimized clicks
              for common actions like report generation.
            </li>
          </ul>

          {/* Key UI/UX Features */}
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-4">Key UI/UX Features:</h3>
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
              <li>
                <span className="font-bold">Login & Role-Based Access:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>Lab Owner: Full control.</li>
                  <li>Admin: Restricted but focused access.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Patient Test Management:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>Add or update patient details and test records.</li>
                  <li>Generate reports in one click.</li>
                  <li>Search & filter functionality for quick access.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Package Management:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Create/manage test bundles (e.g., health check-up packages).
                  </li>
                  <li>Pricing and discount flexibility.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Lab Management:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>
                    Maintain referral doctors’ and collection centers’ data.
                  </li>
                  <li>Improve tracking of referrals and commissions.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Report Generation:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>Export PDFs with branded background images.</li>
                  <li>
                    Dynamic data binding to ensure accurate and professional
                    reports.
                  </li>
                  <li>One-click download or print.</li>
                </ul>
              </li>
              <li>
                <span className="font-bold">Navigation Experience:</span>
                <ul className="list-disc list-inside ml-6">
                  <li>Sidebar: Quick access to modules.</li>
                  <li>
                    App Bar: Notifications, settings, and profile management.
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-gray-700 text-lg mt-6 text-justify">
              <span className="font-bold">Result:</span> The design enabled even{" "}
              <span className="font-bold">first-time users</span> to quickly
              learn and adopt the system, reducing onboarding time
              significantly.
            </p>
          </div>
        </div>

        {/* Illustrations */}
        {/* <div>
          <h2 className="text-4xl font-bold mb-6">Illustrations</h2>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={LABImg.src}
              alt="Lab Management Screenshot 1"
              className="w-full h-80 object-cover shadow-md"
            />
            <img
              src={LABImg.src}
              alt="Lab Management Screenshot 2"
              className="w-full h-80 object-cover shadow-md"
            />
          </div>
        </div> */}
      </div>

      {/* CTA */}
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
          <h2 className="text-4xl font-bold mb-6">Development</h2>
          <div className="text-gray-700 text-lg leading-relaxed space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">
                Frontend (React + Chakra UI)
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Built reusable components: <strong>Tables, Forms, Cards, Modals, Dropdowns</strong>.
                </li>
                <li>
                  Used Chakra UI for <strong>responsive layouts</strong> (desktop, tablet, mobile).
                </li>
                <li>
                  Implemented <strong>state management</strong> with React hooks for test/package data.
                </li>
                <li>
                  Sidebar with <strong>highlighted active links</strong> for intuitive navigation.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Backend Integration (RESTful APIs)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Integrated APIs for patient, test, and package data retrieval.</li>
                <li>Implemented <strong>server-side filtering</strong> to reduce client-side load.</li>
                <li>
                  Optimized API calls to improve speed by <strong>50%</strong>.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">PDF Report Generation</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Used @react-pdf/renderer for dynamic PDF creation.</li>
                <li>
                  Implemented branded <strong>background images</strong> using{" "}
                  <code>&lt;Page&gt;</code> and <code>&lt;View&gt;</code> components.
                </li>
                <li>
                  Tested across multiple cases (single test, multiple packages, custom reports).
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Deployment (WinSCP)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Faced challenges during the first-time deployment.</li>
                <li>
                  Learned to configure environment variables and transfer build files
                  using WinSCP.
                </li>
                <li>Standardized deployment for smoother future updates.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-2">Testing (Manual)</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cross-browser and cross-device testing for responsiveness.</li>
                <li>Validation for form fields (contact, email, patient IDs).</li>
                <li>Verified PDF accuracy against lab requirements.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>


     
      <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">WEBSITE SCREENS</h2>
          <div className="grid grid-cols-2 gap-7">
            <img
              src={LABImg.src}
              alt="Similar Project 1"
              className="w-full h-80 object-contain shadow-md"
            />
            <img
              src={LABIMg2.src}
              alt="Similar Project 2"
              className="w-full h-80 object-conatain shadow-md"
            />
          
            <img
              src={LABIMg3.src}
              alt="Similar Project 2"
              className="w-full h-80 object-conatain  shadow-md mt-6"
            />
            <img
              src={LABIMg4.src}
              alt="Similar Project 2"
              className="w-full h-80 object-conatain  shadow-md mt-6"
            />
          </div>
        </div>
      </div>

    
      {/* <div className="max-w-6xl mx-auto text-center space-y-6 px-6 mb-12">
        <button className="bg-white text-sky-900 border-2 border-sky-900 px-7 py-3 rounded-full font-semibold hover:bg-sky-500 hover:text-white transition-colors duration-300">
          All Projects
        </button>
      </div> */}
    </div>
  );
};

export default LabManagementPage;
