"use client";

import React from "react";
import Img1 from "@/assests/portfolio/e1.png";
import Img2 from "@/assests/portfolio/e2.png";
import Img3 from "@/assests/portfolio/e3.png";
import Img4 from "@/assests/portfolio/img.1.1.jpeg";
import Img5 from "@/assests/portfolio/img1.2.jpeg";
import Img6 from "@/assests/portfolio/img1.3.jpeg";
import Img7 from "@/assests/portfolio/img1.4.jpeg";
import Link from "next/link";

const EventBooking = () => {
    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Hero Section */}
            <div className="relative p-10">
                <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 dark:bg-card z-0"></div>
                <div className="relative max-w-6xl mx-auto space-y-12 z-10">
                    <div className="bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-border rounded-lg">
                        <div>
                            <img
                                src={Img1.src}
                                alt="Event Booking System"
                                className="w-full h-auto shadow-md rounded-lg border border-border"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                                Event Booking System
                            </h1>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                The Event Management System is a MERN web app that streamlines event creation, booking, and tracking for Admins, Organizers, and Attendees.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Project</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Event Booking System
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Platform</h2>
                                    <p className="text-muted-foreground text-lg">MERN Stack</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Technologies</h2>
                            <p className="text-muted-foreground text-lg">
                                React.js | Chakra UI | Axios | Recharts | Node.js | Express.js | MongoDB Atlas | JWT | bcrypt | Razorpay API | Nodemailer | Socket.io | Render / Vercel
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Brief & Solution */}
            <div className="relative max-w-6xl mx-auto mt-6">
                <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 dark:bg-muted/30 z-0"></div>
                <div className="relative bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10 border border-border rounded-lg">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-card-foreground">Brief</h2>
                        <p className="text-muted-foreground text-lg text-justify leading-relaxed">
                            The Event Management System is a full-stack MERN application designed to streamline event creation, booking, and coordination between organizers and participants. The system supports different user roles Admin, Organizer, and Attendee enabling event scheduling, ticket booking, vendor management, and analytics tracking on a single unified platform.
                            <br /><br />
                            The project aimed to digitalize manual event processes (registration, venue booking, attendee tracking) into an efficient and automated workflow accessible from both desktop and mobile browsers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution</h2>
                        <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                            The project was developed with <span className="font-bold text-card-foreground">modular, scalable architecture</span> and <span className="font-bold text-card-foreground">user-centric workflows</span> to ensure flexibility for future upgrades.
                        </p>

                        <div className="space-y-6 text-muted-foreground text-lg">
                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">1. Architecture & Performance</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Built using the MERN stack (MongoDB, Express.js, React, Node.js), following MVC architecture for maintainability.</li>
                                    <li>Integrated RESTful APIs for seamless data communication between front-end and back-end.</li>
                                    <li>Implemented <span className="font-bold text-card-foreground">JWT-based authentication</span> with role-based access control (Admin, Organizer, Attendee).</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">2. Role-Based Modules</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Admin Panel: Manage users, event approvals, transactions, and analytics dashboard.</li>
                                    <li>Organizer Module: Create and manage events, upload event banners, view ticket sales, communicate with attendees.</li>
                                    <li>Attendee Module: Browse events, register/book tickets, make payments, and receive digital tickets via email.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">3. Data Management & Optimization</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Used MongoDB Atlas for scalable, cloud-based data storage.</li>
                                    <li>Optimized query performance with indexes for faster retrieval of event and booking data.</li>
                                    <li>Implemented <span className="font-bold text-card-foreground">server-side pagination and filtering</span> for large event datasets.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">4. Payment & Notification Integration</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    <li>Integrated Razorpay API for secure online ticket purchases.</li>
                                    <li>Implemented Nodemailer for booking confirmations and event reminders.</li>
                                    <li>Used Socket.io for real-time notifications and chat between organizer and participants.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">5. Client-Centric Features</h3>
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
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">UI & UX Design</h2>
                <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    The design followed a <span className="font-bold text-card-foreground">"minimal yet engaging"</span> aesthetic with focus on usability and clarity.
                </p>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Design System</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-lg">
                        <li>Primary Theme Color: #6C63FF (modern violet tone for professionalism and vibrance)</li>
                        <li>Secondary Accent: #F8F9FD background for soft contrast</li>
                        <li>Typography: "Poppins" & "Inter" for readability and elegance</li>
                        <li>Framework: Chakra UI for modular, responsive, and accessible components</li>
                    </ul>
                </div>

                <div className="mb-6">
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Key UX Highlights</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-lg">
                        <li>Dashboard-Centric Navigation: Role-based sidebar and top navigation bar with icons and badges.</li>
                        <li>Quick Actions: Floating action buttons for creating new events or generating reports.</li>
                        <li>Interactive Forms: Step-by-step wizards for event creation, including image upload and pricing setup.</li>
                        <li>Mobile Responsiveness: Adaptive grid and flex layouts optimized for tablet and mobile access.</li>
                        <li>Feedback Loops: Toast notifications, progress bars, and confirmation modals for every key action.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold mb-2 text-card-foreground">Example UI Screens</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground text-lg">
                        <li>Login & Registration Pages: OTP/email-based authentication.</li>
                        <li>Event Dashboard: List of upcoming, ongoing, and past events with filters.</li>
                        <li>Event Creation Page: Upload banners, set date/time, and manage ticket pricing dynamically.</li>
                        <li>Analytics Dashboard: Visual insights for total bookings, revenue trends, and active users.</li>
                    </ul>
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

            {/* Development Details */}
            <div className="max-w-6xl mx-auto space-y-12 p-10">
                <h2 className="text-4xl font-bold mb-6 text-card-foreground">Development & Tech Stack</h2>

                {/* Tech Stack Table */}
                <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="min-w-full text-left">
                        <thead className="bg-muted">
                            <tr>
                                <th className="border-b border-border px-4 py-3 font-semibold text-card-foreground">Category</th>
                                <th className="border-b border-border px-4 py-3 font-semibold text-card-foreground">Tools & Technologies</th>
                            </tr>
                        </thead>
                        <tbody className="bg-card">
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Frontend</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">React.js, Chakra UI, Axios, Recharts</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Backend</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Node.js, Express.js</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Database</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">MongoDB Atlas</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Authentication</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">JWT, bcrypt</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Payments</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Razorpay API</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Notifications</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Nodemailer, Socket.io</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-muted-foreground">Deployment</td>
                                <td className="px-4 py-3 text-muted-foreground">Render / Vercel (Frontend)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Development Process */}
            <div className="max-w-6xl mx-auto space-y-12 p-10">
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">Development Process</h2>

                <div className="text-muted-foreground text-lg space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">1. Planning & Requirement Analysis</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Identified user roles and access levels.</li>
                            <li>Mapped data flow between modules (Event → Organizer → Booking → Payment).</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">2. UI Wireframing</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Created Figma wireframes for dashboard, event detail, and booking screens.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">3. API Design</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Built REST APIs for event CRUD operations, ticket booking, and user authentication.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">4. Frontend Integration</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Used Axios for API calls and React Context API for state management.</li>
                            <li>Integrated Chakra UI components for consistency and speed.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">5. Testing</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Manual testing for form validations, API responses, and payment success flow.</li>
                            <li>Used Postman for endpoint testing.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2 text-card-foreground">6. Deployment</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>CI/CD pipeline configured via GitHub Actions.</li>
                            <li>Database hosted on MongoDB Atlas with daily backup.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Key Learnings */}
            <div className="max-w-6xl mx-auto p-10 space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">Key Learnings</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                    <li>Mastered end-to-end development using the MERN stack.</li>
                    <li>Improved API integration and state management with React Context.</li>
                    <li>Enhanced knowledge of real-time communication using Socket.io.</li>
                    <li>Gained hands-on experience in secure payment integration and role-based access control.</li>
                </ul>
            </div>

            {/* Outcome */}
            <div className="max-w-6xl mx-auto p-10 space-y-6">
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">Outcome</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                    <li>Reduced event registration and approval process by 60% through automation.</li>
                    <li>Improved data accessibility with centralized dashboards for 3 user roles.</li>
                    <li>Achieved smooth deployment and real-time updates, serving 500+ users monthly.</li>
                </ul>
            </div>

            {/* Functional Modules Table */}
            <div className="max-w-6xl mx-auto p-10">
                <h2 className="text-3xl font-bold mb-4 text-card-foreground">Functional Modules Overview</h2>
                <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="min-w-full text-left">
                        <thead className="bg-muted">
                            <tr>
                                <th className="border-b border-border px-4 py-3 font-semibold text-card-foreground">Module</th>
                                <th className="border-b border-border px-4 py-3 font-semibold text-card-foreground">Description</th>
                                <th className="border-b border-border px-4 py-3 font-semibold text-card-foreground">User Role</th>
                            </tr>
                        </thead>
                        <tbody className="bg-card">
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Event Management</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Create, update, and delete events with image upload, pricing, and category</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Organizer, Admin</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Booking Management</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Register or book event tickets; receive confirmation emails</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Attendee</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Payment Integration</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Secure payments using Razorpay with dynamic invoice generation</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Attendee, Organizer</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">User Management</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Role-based user registration, update, and access control</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Admin</td>
                            </tr>
                            <tr>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Analytics Dashboard</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Revenue, user activity, and ticket sales visualization</td>
                                <td className="border-b border-border px-4 py-3 text-muted-foreground">Admin, Organizer</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 text-muted-foreground">Chat & Notifications</td>
                                <td className="px-4 py-3 text-muted-foreground">Real-time updates between users via Socket.io</td>
                                <td className="px-4 py-3 text-muted-foreground">All Roles</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Screenshots */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6 text-card-foreground">WEBSITE SCREENS</h2>
                    <div className="grid grid-cols-2 gap-7 mt-12">
                        <img
                            src={Img2.src}
                            alt="Event Booking Screen 1"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={Img3.src}
                            alt="Event Booking Screen 2"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={Img4.src}
                            alt="Event Booking Screen 3"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={Img5.src}
                            alt="Event Booking Screen 4"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={Img7.src}
                            alt="Event Booking Screen 5"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={Img6.src}
                            alt="Event Booking Screen 6"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventBooking;
