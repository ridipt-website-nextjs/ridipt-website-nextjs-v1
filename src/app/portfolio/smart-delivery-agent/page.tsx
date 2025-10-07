"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/Agent-1.jpeg";
import SDPImg2 from "@/assests/portfolio/Agent-2.jpeg";
import SDPImg3 from "@/assests/portfolio/Agent-3.jpeg";

import Link from "next/link";

const SmartDeliveryPageAgent = () => {
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
                                className="w-full h-80 object-contain shadow-md"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-6">
                                Grocery Delivery(Agent)
                            </h1>
                            <p className="text-gray-700 text-lg mb-8">
                                The Agent App is a mobile-friendly platform that helps delivery
                                agents efficiently manage orders, deliveries, inventory, and
                                payments with a clear and organized interface.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Project</h2>
                                    <p className="text-gray-700 text-lg">
                                        Grocery Delivery - Agent
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                                    <p className="text-gray-700 text-lg">Android,iOs</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2">Technologies</h2>
                            <p className="text-gray-700 text-lg">
                                Flutter, Node.js/Express, MongoDB | REST APIs,
                                JWT Auth, OTP APIs | Manual & Automated Testing|cloud Azure
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
                            The Agent App is a mobile-friendly platform designed to simplify
                            and streamline the daily operations of grocery delivery agents. It
                            provides an organized interface to manage issued, delivered, and
                            undelivered items, track total orders, and monitor delivery
                            progress. Agents can view product SKUs, update delivery status in
                            real-time, and efficiently collect payments from customers. The
                            app also allows access to past payments, order history, and
                            account details, ensuring transparency and accountability. By
                            centralizing all essential tasks, the app helps agents stay
                            organized, save time, and deliver a smooth and efficient service.

                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4"> Solution / Key Features:</h2>
                        <p className="text-gray-700 text-lg text-justify mb-6">
                            The Agent App is designed to make daily grocery delivery
                            operations simple, organized, and efficient for agents. It
                            centralizes all essential tasks in one mobile-friendly platform,
                            helping agents track orders, manage inventory, and handle
                            payments with ease.
                        </p>



                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>
                                    <span className="font-bold">Home Screen:</span> View issued, delivered, undelivered, and total orders at a glance for quick performance tracking.
                                </li>
                                <li>
                                    <span className="font-bold">SKU Management:</span> Easily access product SKUs assigned for delivery and manage inventory during rounds.
                                </li>
                                <li>
                                    <span className="font-bold">Delivery Management:</span> Update order status in real-time and monitor completed and pending deliveries.
                                </li>
                                <li>
                                    <span className="font-bold">Account Management:</span> Collect payments, review past payments, check order history, and securely log out.
                                </li>
                                <li>
                                    <span className="font-bold">Efficiency & Transparency:</span> All tasks are centralized, reducing errors and improving workflow.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>Streamlined workflow for daily deliveries and order management.</li>
                                <li>Real-time tracking of deliveries, inventory, and payments.</li>
                                <li>Quick access to order history and customer details.</li>
                                <li>Improved productivity, accountability, and overall service efficiency.</li>
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
                        The Agent App is designed with a focus on simplicity, usability, and efficiency,
                        ensuring delivery agents can manage daily operations smoothly on mobile devices.
                        The interface is intuitive, clean, and organized, allowing agents to quickly access
                        their tasks, track orders, manage inventory, and handle payments without confusion.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">UI/UX Highlights:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>
                            <span className="font-bold">Clean & Intuitive Interface:</span> Easy navigation between issued items, deliveries, SKU management, and account sections.
                        </li>
                        <li>
                            <span className="font-bold">Real-Time Updates:</span> Agents receive instant notifications for deliveries, orders, and payment updates.
                        </li>
                        <li>
                            <span className="font-bold">Responsive Mobile Design:</span> Optimized for mobile screens to ensure smooth interaction and usability.
                        </li>
                        <li>
                            <span className="font-bold">Consistency & Accessibility:</span> Uniform fonts, colors, and interactive elements for better readability and ease of use.
                        </li>
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


            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-left">
                    <h2 className="text-4xl font-bold mb-6">Development & Tech Stack</h2>
                    <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                        <p>
                            The Agent App was developed using a modern, scalable, and secure tech stack
                            to ensure smooth mobile operations for delivery agents. The focus was on
                            creating a responsive interface, reliable backend, and secure data management.
                        </p>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Frontend (Mobile App)</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Flutter:</span> Cross-platform mobile development for Android and iOS.
                                </li>
                                <li>
                                    <span className="font-bold">UI/UX Design:</span> Clean, intuitive, and responsive interface for easy navigation and task management.
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Node.js & Express.js:</span> Robust server for handling APIs and business logic.
                                </li>
                                <li>
                                    <span className="font-bold">REST APIs:</span> For communication between the mobile app and backend.
                                </li>
                                <li>
                                    <span className="font-bold">Authentication & Security:</span> JWT-based authentication and OTP APIs for secure login and transactions.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Database</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">MongoDB:</span> Efficient storage and retrieval of user data, orders, inventory, and payments.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Cloud & Hosting</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Microsoft Azure:</span> Reliable cloud hosting for scalability, uptime, and secure data access.
                                </li>
                            </ul>
                        </div>


                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Testing</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Manual Testing:</span> Ensured all functionalities work as expected.
                                </li>
                                <li>
                                    <span className="font-bold">Automated Testing:</span> Scripts for critical flows to maintain reliability and prevent bugs.
                                </li>
                            </ul>
                        </div>

                        <p>
                            This tech stack and development approach enabled the creation of a fast,
                            secure, and user-friendly Agent App, allowing delivery agents to track
                            orders, manage inventory, and handle payments efficiently in real-time.
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


        </div>

    );
};

export default SmartDeliveryPageAgent;
