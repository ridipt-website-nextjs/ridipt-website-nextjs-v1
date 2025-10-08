"use client";

import React from "react";
import Img1 from "@/assests/portfolio/Room-1.png";
import Img2 from "@/assests/portfolio/Room-2.png";
import Img3 from "@/assests/portfolio/Room-3.png";
import Img4 from "@/assests/portfolio/Room-4.png";
import Img5 from "@/assests/portfolio/Room-5.png";
import Img6 from "@/assests/portfolio/Room-6.png";
import Img7 from "@/assests/portfolio/Room-7.png";
import Img8 from "@/assests/portfolio/Room-8.png";



import Link from "next/link";

const RoomBooking = () => {
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
                                Room Booking Platform
                            </h1>
                            <p className="text-gray-700 text-lg mb-8">
                                A full-stack room reservation platform for easy guest bookings and streamlined host management.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Project</h2>
                                    <p className="text-gray-700 text-lg">
                                        Room Booking Platform <br />(Multi-persona Web App)
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                                    <p className="text-gray-700 text-lg"> Web (Responsive)-React + Node.js + MongoDB + REST APIs
                                    </p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                            <p className="text-gray-700 text-lg">
                                React.js | Vite | Node.js | Express.js | MongoDB | REST APIs | JWT
                                Auth | Cloud Deployment | Manual & Automated Testing
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
                            A full-stack, end-to-end room reservation platform designed to
                            streamline the booking experience for guests and simplify property
                            management for hosts. Guests can browse live inventory, filter by
                            amenities, view pricing, and confirm bookings within a few clicks,
                            while hosts manage listings, availability, and approval workflows from
                            a centralized dashboard.
                            <br /><br />
                            The Room Booking Platform delivers a complete reservation journey
                            for modern hospitality businesses. Guests can explore real-time
                            listings, refine results by capacity or facilities, check live pricing, and
                            complete bookings through a frictionless checkout flow.
                            The Room Booking Platform delivers a complete reservation journey
                            for modern hospitality businesses. Guests can explore real-time
                            listings, refine results by capacity or facilities, check live pricing, and
                            complete bookings through a frictionless checkout flow.
                            <br /><br />
                            For hosts, the platform provides a centralized workspace to publish
                            rooms, sync calendars, and manage booking approvals, ensuring
                            every property stays updated and market-ready. The interface
                            supports dynamic pricing, instant confirmations, and role-based
                            access for administrators, hosts, and guests.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4"> Solution / Key Features</h2>

                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold mb-3">Guest-side Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li><span className="font-bold">Room Discovery:</span> Browse listings, filter by amenities, capacity, and price range.</li>
                                <li><span className="font-bold">Live Availability:</span> View dynamically updated slots synced from the backend.</li>
                                <li><span className="font-bold">Instant Booking:</span> Secure checkout flow with payment gateway integration.</li>
                                <li><span className="font-bold">Booking Management:</span> Track upcoming and past stays, download invoices.</li>
                                <li><span className="font-bold">Account Dashboard:</span> Manage profiles, preferences, and saved searches.</li>
                            </ul>
                        </div>

                        {/* Host-side Features */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold mb-3">Host-side Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li><span className="font-bold">Property Management:</span> Add or edit room listings with photos, amenities, and pricing.</li>
                                <li><span className="font-bold">Calendar Sync:</span> Real-time availability updates to prevent double bookings.</li>
                                <li><span className="font-bold">Approval Workflow:</span> Accept or reject booking requests instantly.</li>
                                <li><span className="font-bold">Reports & Insights:</span> Monitor occupancy, revenue trends, and performance metrics.</li>
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="mt-6">
                            <h3 className="text-2xl font-semibold mb-3">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>Streamlined booking and hosting experience across all devices.</li>
                                <li>Live synchronization ensures pricing and availability accuracy.</li>
                                <li>Secure user management with JWT and encrypted sessions.</li>
                                <li>Modular architecture supporting future scalability.</li>
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
                        The platform’s UI/UX emphasizes clarity, hospitality warmth, and operational efficiency.
                        The responsive layout adapts seamlessly across desktops, tablets, and mobiles.
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>
                            <span className="font-bold">Intuitive Search & Booking Flow:</span> Clear CTAs and minimal clicks to conversion.
                        </li>
                        <li>
                            <span className="font-bold">Hospitality-Grade Visuals:</span> High-quality imagery and clean typography.
                        </li>
                        <li>
                            <span className="font-bold">Consistent Component Library:</span> Unified design system for cohesive look and feel.
                        </li>
                        <li>
                            <span className="font-bold">Accessibility & Performance:</span> WCAG-compliant color contrast and optimized load times.
                        </li>
                    </ul>

                    <p className="text-gray-700 text-lg text-justify mt-6">
                        The design ensures a smooth and welcoming experience for guests and hosts,
                        making navigation, booking, and management effortless across all devices.
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
                       



                        {/* Frontend */}
                        <div>
                             {/* <h3 className="text-2xl font-bold mb-6 mt-12"> - Design Highlights</h3> */}
                            <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">React.js + Vite:</span> Component-driven architecture with lightning-fast build times.
                                </li>
                                <li>
                                    <span className="font-bold">UI/UX:</span> Responsive Chakra UI design with modular reusable components.
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Node.js + Express.js:</span> Handles business logic, authentication, and data flow.
                                </li>
                                <li>
                                    <span className="font-bold">REST APIs:</span> Real-time communication between frontend and backend.
                                </li>
                                <li>
                                    <span className="font-bold">JWT Authentication:</span> Secure user sessions with token-based access control.
                                </li>
                            </ul>
                        </div>

                        {/* Database */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Database</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">MongoDB:</span> Efficient schema for users, bookings, rooms, and transactions.
                                </li>
                            </ul>
                        </div>

                        {/* Hosting & Cloud */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Hosting & Cloud</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Cloud Deployment:</span> Scalable architecture for uptime and global access.
                                </li>
                            </ul>
                        </div>

                        {/* Testing */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Testing</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Manual & Automated Testing:</span> Ensures reliability, data consistency, and smooth user experience.
                                </li>
                            </ul>
                        </div>

                        <p>
                            This integrated ecosystem provides a <b>complete digital solution for room booking management </b>, combining engineering precision with hospitality-grade design - a true example of performance, scalability, and user-centered innovation.
                        </p>
                    </div>
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
                            src={Img8.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                    </div>
                </div>
            </div>


        </div>


    );
};

export default RoomBooking;
