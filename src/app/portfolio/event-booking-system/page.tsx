"use client";

import React from "react";
import Img1 from "@/assests/portfolio/e1.png";
import Img2 from "@/assests/portfolio/e2.png";
import Img3 from "@/assests/portfolio/e3.png";
import Img4 from "@/assests/portfolio/img.1.1.jpeg";
import Img5 from "@/assests/portfolio/img1.2.jpeg";
import Img6 from "@/assests/portfolio/img1.3.jpeg";
import Img7 from "@/assests/portfolio/img1.4.jpeg";
// import Img8 from "@/assests/portfolio/Room-8.png";



import Link from "next/link";

const EventBooking = () => {
    return (
        <div>
            <div className="relative p-10">
                <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 z-0"></div>
                <div className="relative max-w-6xl mx-auto space-y-12 z-10">
                    <div className="bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={Img1.src}
                                alt="Smart Delivery Platform Screenshot"
                                className="w-full h-auto shadow-md"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-6">
                                Event Booking System
                            </h1>
                            <p className="text-gray-700 text-lg mb-8">
                                The Event Management System is a MERN web app that streamlines event creation, booking, and tracking for Admins, Organizers, and Attendees.                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Project</h2>
                                    <p className="text-gray-700 text-lg">
                                        Event Booking System
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                                    <p className="text-gray-700 text-lg"> Mern-stack
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                            <p className="text-gray-700 text-lg">
                                React.js | Chakra UI | Axios | Recharts | Node.js | Express.js | MongoDB Atlas | JWT | bcrypt | Razorpay API | Nodemailer | Socket.io | Render / Vercel (Frontend)
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
                            The Event Management System is a full-stack MERN application designed to streamline event creation, booking, and coordination between organizers and participants. The system supports different user roles Admin, Organizer, and Attendee enabling event scheduling, ticket booking, vendor management, and analytics tracking on a single unified platform.
                            <br /><br />

                            The project aimed to digitalize manual event processes (registration, venue booking, attendee tracking) into an efficient and automated workflow accessible from both desktop and mobile browsers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Solution</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            The project was developed with <span className="font-bold">modular, scalable architecture</span> and <span className="font-bold">user-centric workflows</span> to ensure flexibility for future upgrades.
                        </p>

                        <div className="space-y-6 text-gray-700 text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2">1. Architecture & Performance</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Built using the MERN stack (MongoDB, Express.js, React, Node.js), following MVC architecture for maintainability.</li>
                                    <li>Integrated RESTful APIs for seamless data communication between front-end and back-end.</li>
                                    <li>Implemented <span className="font-bold">JWT-based authentication</span> with role-based access control (Admin, Organizer, Attendee).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">2. Role-Based Modules</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Admin Panel: Manage users, event approvals, transactions, and analytics dashboard.</li>
                                    <li>Organizer Module: Create and manage events, upload event banners, view ticket sales, communicate with attendees.</li>
                                    <li>Attendee Module: Browse events, register/book tickets, make payments, and receive digital tickets via email.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">3. Data Management & Optimization</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Used MongoDB Atlas for scalable, cloud-based data storage.</li>
                                    <li>Optimized query performance with indexes for faster retrieval of event and booking data.</li>
                                    <li>Implemented <span className="font-bold">server-side pagination and filtering</span> for large event datasets.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">4. Payment & Notification Integration</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Integrated Razorpay API for secure online ticket purchases.</li>
                                    <li>Implemented Nodemailer for booking confirmations and event reminders.</li>
                                    <li>Used Socket.io for real-time notifications and chat between organizer and participants.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2">5. Client-Centric Features</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Developed a responsive React dashboard using Chakra UI for a modern, consistent design.</li>
                                    <li>Incorporated search, filters, and sorting for quick access to event data.</li>
                                    <li>Added analytics charts (via Recharts) showing ticket sales, user engagement, and revenue over time.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* UI/UX */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <h2 className="text-3xl font-bold mb-4">UI & UX Design</h2>
                <p className="text-lg text-gray-700 mb-4">
                    The design followed a <span className="font-bold">“minimal yet engaging”</span> aesthetic with focus on usability and clarity.
                </p>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Design System</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
                        <li>Primary Theme Color: #6C63FF (modern violet tone for professionalism and vibrance)</li>
                        <li>Secondary Accent: #F8F9FD background for soft contrast</li>
                        <li>Typography: “Poppins” & “Inter” for readability and elegance</li>
                        <li>Framework: Chakra UI for modular, responsive, and accessible components</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2">Key UX Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
                        <li>Dashboard-Centric Navigation: Role-based sidebar and top navigation bar with icons and badges.</li>
                        <li>Quick Actions: Floating action buttons for creating new events or generating reports.</li>
                        <li>Interactive Forms: Step-by-step wizards for event creation, including image upload and pricing setup.</li>
                        <li>Mobile Responsiveness: Adaptive grid and flex layouts optimized for tablet and mobile access.</li>
                        <li>Feedback Loops: Toast notifications, progress bars, and confirmation modals for every key action.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2">Example UI Screens</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-lg">
                        <li>Login & Registration Pages: OTP/email-based authentication.</li>
                        <li>Event Dashboard: List of upcoming, ongoing, and past events with filters.</li>
                        <li>Event Creation Page: Upload banners, set date/time, and manage ticket pricing dynamically.</li>
                        <li>Analytics Dashboard: Visual insights for total bookings, revenue trends, and active users.</li>
                    </ul>
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
            {/* Development Details */}
            <div className="max-w-6xl mx-auto space-y-12 p-10">
                <h2 className="text-4xl font-bold mb-6">Development & Tech Stack</h2>

                {/* Tech Stack */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-left text-gray-700">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2 font-semibold">Category</th>
                                <th className="border px-4 py-2 font-semibold">Tools & Technologies</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Frontend</td>
                                <td className="border px-4 py-2">React.js, Chakra UI, Axios, Recharts</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Backend</td>
                                <td className="border px-4 py-2">Node.js, Express.js</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Database</td>
                                <td className="border px-4 py-2">MongoDB Atlas</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Authentication</td>
                                <td className="border px-4 py-2">JWT, bcrypt</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Payments</td>
                                <td className="border px-4 py-2">Razorpay API</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Notifications</td>
                                <td className="border px-4 py-2">Nodemailer, Socket.io</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Deployment</td>
                                <td className="border px-4 py-2">Render / Vercel (Frontend)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Development Process */}
            <div className="max-w-6xl mx-auto space-y-12 p-10">
                <h2 className="text-3xl font-bold mb-4">Development Process</h2>

                <div className="text-gray-700 text-lg space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">1. Planning & Requirement Analysis</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Identified user roles and access levels.</li>
                            <li>Mapped data flow between modules (Event → Organizer → Booking → Payment).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">2. UI Wireframing</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Created Figma wireframes for dashboard, event detail, and booking screens.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">3. API Design</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Built REST APIs for event CRUD operations, ticket booking, and user authentication.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">4. Frontend Integration</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Used Axios for API calls and React Context API for state management.</li>
                            <li>Integrated Chakra UI components for consistency and speed.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">5. Testing</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Manual testing for form validations, API responses, and payment success flow.</li>
                            <li>Used Postman for endpoint testing.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">6. Deployment</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>CI/CD pipeline configured via GitHub Actions.</li>
                            <li>Database hosted on MongoDB Atlas with daily backup.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Key Learnings */}
            <div className="max-w-6xl mx-auto p-10 space-y-6">
                <h2 className="text-3xl font-bold mb-4">Key Learnings</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                    <li>Mastered end-to-end development using the MERN stack.</li>
                    <li>Improved API integration and state management with React Context.</li>
                    <li>Enhanced knowledge of real-time communication using Socket.io.</li>
                    <li>Gained hands-on experience in secure payment integration and role-based access control.</li>
                </ul>
            </div>

            {/* Outcome */}
            <div className="max-w-6xl mx-auto p-10 space-y-6">
                <h2 className="text-3xl font-bold mb-4">Outcome</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                    <li>Reduced event registration and approval process by 60% through automation.</li>
                    <li>Improved data accessibility with centralized dashboards for 3 user roles.</li>
                    <li>Achieved smooth deployment and real-time updates, serving 500+ users monthly.</li>
                </ul>
            </div>

            {/* Functional Modules Overview */}
            <div className="max-w-6xl mx-auto p-10">
                <h2 className="text-3xl font-bold mb-4">Functional Modules Overview</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-300 text-left text-gray-700">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="border px-4 py-2 font-semibold">Module</th>
                                <th className="border px-4 py-2 font-semibold">Description</th>
                                <th className="border px-4 py-2 font-semibold">User Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border px-4 py-2">Event Management</td>
                                <td className="border px-4 py-2">Create, update, and delete events with image upload, pricing, and category</td>
                                <td className="border px-4 py-2">Organizer, Admin</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Booking Management</td>
                                <td className="border px-4 py-2">Register or book event tickets; receive confirmation emails</td>
                                <td className="border px-4 py-2">Attendee</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Payment Integration</td>
                                <td className="border px-4 py-2">Secure payments using Razorpay with dynamic invoice generation</td>
                                <td className="border px-4 py-2">Attendee, Organizer</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">User Management</td>
                                <td className="border px-4 py-2">Role-based user registration, update, and access control</td>
                                <td className="border px-4 py-2">Admin</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Analytics Dashboard</td>
                                <td className="border px-4 py-2">Revenue, user activity, and ticket sales visualization</td>
                                <td className="border px-4 py-2">Admin, Organizer</td>
                            </tr>
                            <tr>
                                <td className="border px-4 py-2">Chat & Notifications</td>
                                <td className="border px-4 py-2">Real-time updates between users via Socket.io</td>
                                <td className="border px-4 py-2">All Roles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>



            {/* Screenshots */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6">WEBSITE SCREENS</h2>
                    <div className="grid grid-cols-2 gap-7 mt-12">
                        <img
                            src={Img2.src}
                            alt="Smart Delivery Platform Screen 1"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={Img3.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={Img4.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={Img5.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />

                        <img
                            src={Img7.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={Img6.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                    </div>
                </div>
            </div>


        </div>


    );
};

export default EventBooking;
