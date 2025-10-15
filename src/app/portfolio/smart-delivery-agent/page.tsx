"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/Agent-1.jpeg";
import SDPImg2 from "@/assests/portfolio/Agent-2.jpeg";
import SDPImg3 from "@/assests/portfolio/Agent-3.jpeg";
import Link from "next/link";

const SmartDeliveryPageAgent = () => {
    return (
        <div className="bg-background text-foreground min-h-screen">
            {/* Hero Section */}
            <div className="relative p-10">
                <div className="absolute top-0 left-0 w-full h-[680px] bg-sky-900 dark:bg-card z-0"></div>
                <div className="relative max-w-6xl mx-auto space-y-12 z-10">
                    <div className="bg-card shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border border-border rounded-lg">
                        <div>
                            <img
                                src={SDPImg1.src}
                                alt="Grocery Delivery Agent App"
                                className="w-full h-80 object-contain shadow-md rounded-lg border border-border"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                                Grocery Delivery (Agent)
                            </h1>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                The Agent App is a mobile-friendly platform that helps delivery
                                agents efficiently manage orders, deliveries, inventory, and
                                payments with a clear and organized interface.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Project</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Grocery Delivery - Agent
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Platform</h2>
                                    <p className="text-muted-foreground text-lg">Android, iOS</p>
                                </div>
                            </div>

                            <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Technologies</h2>
                            <p className="text-muted-foreground text-lg">
                                Flutter, Node.js/Express, MongoDB | REST APIs,
                                JWT Auth, OTP APIs | Manual & Automated Testing | Cloud Azure
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

                    {/* Solution */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution / Key Features:</h2>
                        <p className="text-muted-foreground text-lg text-justify mb-6 leading-relaxed">
                            The Agent App is designed to make daily grocery delivery
                            operations simple, organized, and efficient for agents. It
                            centralizes all essential tasks in one mobile-friendly platform,
                            helping agents track orders, manage inventory, and handle
                            payments with ease.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                                <li>
                                    <span className="font-bold text-card-foreground">Home Screen:</span> View issued, delivered, undelivered, and total orders at a glance for quick performance tracking.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">SKU Management:</span> Easily access product SKUs assigned for delivery and manage inventory during rounds.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Delivery Management:</span> Update order status in real-time and monitor completed and pending deliveries.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Account Management:</span> Collect payments, review past payments, check order history, and securely log out.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Efficiency & Transparency:</span> All tasks are centralized, reducing errors and improving workflow.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3 text-card-foreground">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
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
                    <h2 className="text-4xl font-bold mb-6 text-card-foreground">UI/UX (Design)</h2>
                    <p className="text-muted-foreground text-lg text-justify mb-6 leading-relaxed">
                        The Agent App is designed with a focus on simplicity, usability, and efficiency,
                        ensuring delivery agents can manage daily operations smoothly on mobile devices.
                        The interface is intuitive, clean, and organized, allowing agents to quickly access
                        their tasks, track orders, manage inventory, and handle payments without confusion.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">UI/UX Highlights:</h3>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg">
                        <li>
                            <span className="font-bold text-card-foreground">Clean & Intuitive Interface:</span> Easy navigation between issued items, deliveries, SKU management, and account sections.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Real-Time Updates:</span> Agents receive instant notifications for deliveries, orders, and payment updates.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Responsive Mobile Design:</span> Optimized for mobile screens to ensure smooth interaction and usability.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Consistency & Accessibility:</span> Uniform fonts, colors, and interactive elements for better readability and ease of use.
                        </li>
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

            {/* Development */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-left">
                    <h2 className="text-4xl font-bold mb-6 text-card-foreground">Development & Tech Stack</h2>
                    <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
                        <p>
                            The Agent App was developed using a modern, scalable, and secure tech stack
                            to ensure smooth mobile operations for delivery agents. The focus was on
                            creating a responsive interface, reliable backend, and secure data management.
                        </p>

                        {/* Frontend */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Frontend (Mobile App)</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Flutter:</span> Cross-platform mobile development for Android and iOS.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">UI/UX Design:</span> Clean, intuitive, and responsive interface for easy navigation and task management.
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Node.js & Express.js:</span> Robust server for handling APIs and business logic.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">REST APIs:</span> For communication between the mobile app and backend.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Authentication & Security:</span> JWT-based authentication and OTP APIs for secure login and transactions.
                                </li>
                            </ul>
                        </div>

                        {/* Database */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Database</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">MongoDB:</span> Efficient storage and retrieval of user data, orders, inventory, and payments.
                                </li>
                            </ul>
                        </div>

                        {/* Cloud & Hosting */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Cloud & Hosting</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Microsoft Azure:</span> Reliable cloud hosting for scalability, uptime, and secure data access.
                                </li>
                            </ul>
                        </div>

                        {/* Testing */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Testing</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Manual Testing:</span> Ensured all functionalities work as expected.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Automated Testing:</span> Scripts for critical flows to maintain reliability and prevent bugs.
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
                    <h2 className="text-4xl font-bold mb-6 text-card-foreground">APP SCREENS</h2>
                    <div className="grid grid-cols-2 gap-7 mt-20">
                        <img
                            src={SDPImg2.src}
                            alt="Agent App Screen 1"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                        <img
                            src={SDPImg3.src}
                            alt="Agent App Screen 2"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartDeliveryPageAgent;
