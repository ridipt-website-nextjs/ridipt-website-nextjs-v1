"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/Delivery.png";
import SDPImg2 from "@/assests/portfolio/Distributor-2.png";
import SDPImg3 from "@/assests/portfolio/Distributor-1.png";
import SDPImg4 from "@/assests/portfolio/Distributor-4.png";
import SDPImg5 from "@/assests/portfolio/Distributor-5.png";
import SDPImg6 from "@/assests/portfolio/Distributor-3.png";
import SDPImg7 from "@/assests/portfolio/Distributor-6.png";
import SDPImg8 from "@/assests/portfolio/dist-new.png";
import Link from "next/link";

const SmartDeliveryPageDistributor = () => {
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
                                Grocery Delivery(Distributor)
                            </h1>
                            <p className="text-gray-700 text-lg mb-8">
                                A web-based platform that centralizes distributor operations, enabling efficient management of customers, agents, routes, orders, inventory, subscriptions, and payments
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Project</h2>
                                    <p className="text-gray-700 text-lg">
                                        Grocery Delivery - Distributor
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

            
            <div className="relative max-w-6xl mx-auto mt-6">
                <div className="absolute top-0 left-0 w-full h-2/3 bg-sky-100 z-0"></div>
                <div className="relative bg-white shadow-lg p-10 grid grid-cols-1 md:grid-cols-2 gap-12 z-10">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Brief</h2>
                        <p className="text-gray-700 text-lg text-justify">
                            The Distributor Web Platform is a complete and easy-to-use
                            solution designed to make grocery distribution simple and
                            efficient. It allows distributors to manage everything in one
                            place from customers and agents to delivery routes, products,
                            orders, inventory, subscriptions, and payments. The platform
                            provides real-time updates and clear, organized tools to help
                            distributors track their operations, manage finances, and ensure
                            smooth daily workflows. By centralizing all tasks, it reduces
                            confusion, saves time, and helps distributors focus on providing
                            better service and growing their business.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Solution / Key Features</h2>
                        <p className="text-gray-700 text-lg text-justify mb-6">
                            The Distributor Web Platform provides a comprehensive solution for managing grocery distribution efficiently.
                            It brings all critical operations together in one system, helping distributors save time, reduce errors, and stay organized.
                        </p>

                        <h3 className="text-2xl font-semibold mb-3">Distributor Key Features:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                            <li>
                                <span className="font-bold">Customer Management:</span> Create, edit, and track customers easily.
                            </li>
                            <li>
                                <span className="font-bold">Agent Management:</span> Add new agents and monitor their activities.
                            </li>
                            <li>
                                <span className="font-bold">Route Management:</span> Define and manage delivery routes for better logistics.
                            </li>
                            <li>
                                <span className="font-bold">Subscription Management:</span> Track customer subscriptions and renewals.
                            </li>
                            <li>
                                <span className="font-bold">Order & Inventory Management:</span> Issue orders, update stock, and monitor inventory levels.
                            </li>
                            <li>
                                <span className="font-bold">Product Management:</span> Access platform product catalog and assign products.
                            </li>
                            <li>
                                <span className="font-bold">Reconciliation:</span> View detailed reconciliation data and history for accurate accounting.
                            </li>
                            <li>
                                <span className="font-bold">Payments & Ledger:</span> Track payments, view ledger summaries, and generate financial reports.
                            </li>
                        </ul>

                        <h3 className="text-2xl font-semibold mb-3">Benefits:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                            <li>Centralized system for all distributor operations.</li>
                            <li>Real-time tracking of orders, inventory, and payments.</li>
                            <li>Streamlined workflows for agents, routes, and customers.</li>
                            <li>Transparent financial management through reconciliation and ledger summaries.</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* UI/UX */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-6">
                <div>
                    <h2 className="text-4xl font-bold mb-6">UI/UX (Design)</h2>
                    <p className="text-gray-700 text-lg text-justify mb-6">
                        The Distributor Web Platform is designed with a strong focus on simplicity,
                        clarity, and efficiency. The interface allows distributors to access all
                        features easily, manage operations seamlessly, and make quick, informed
                        decisions.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">Key Design Elements:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>
                            <span className="font-bold">Clean Interface:</span> A simple and organized layout ensures users can navigate quickly without confusion.
                        </li>
                        <li>
                            <span className="font-bold">Easy Navigation:</span> Clear menus and sections allow distributors to access customers, agents, routes, orders, inventory, subscriptions, products, and payments with minimal clicks.
                        </li>
                        <li>
                            <span className="font-bold">Responsive Design:</span> Fully optimized for desktops, tablets, and mobile devices, providing a consistent experience across all devices.
                        </li>
                        <li>
                            <span className="font-bold">Data Visualization:</span> Charts, tables, and graphs present key metrics like orders, inventory levels, and payments clearly.
                        </li>
                        <li>
                            <span className="font-bold">Consistency & Accessibility:</span> Uniform colors, fonts, and interactive elements ensure a smooth and professional user experience.
                        </li>
                        <li>
                            <span className="font-bold">Real-time Updates:</span> Live notifications and data refreshes keep distributors informed of all important changes instantly.
                        </li>
                    </ul>

                    <p className="text-gray-700 text-lg text-justify mt-6">
                        The UI/UX is crafted to reduce complexity, improve efficiency, and enhance
                        overall usability, making the platform easy and pleasant for distributors
                        to operate daily.
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
                            The Distributor Web Platform was developed using a modern and reliable tech stack to ensure performance, scalability, and ease of use.
                            The development focused on building a secure backend, a responsive frontend, and seamless data management for all distributor operations.
                        </p>

                     
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Frontend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">React.js:</span> For building a dynamic, responsive, and interactive interface.
                                </li>
                                <li>
                                    <span className="font-bold">Chakra UI:</span> Provides clean, consistent, and user-friendly design components.
                                </li>
                                <li>
                                    <span className="font-bold">Responsive Design:</span> Fully supports desktops, tablets, and mobile devices.
                                </li>
                            </ul>
                        </div>

                       
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Node.js & Express.js:</span> Builds fast, scalable, and secure REST APIs.
                                </li>
                                <li>
                                    <span className="font-bold">APIs:</span> Handle customers, agents, routes, orders, inventory, products, subscriptions, payments, and reconciliation.
                                </li>
                                <li>
                                    <span className="font-bold">JWT Authentication:</span> Ensures secure access for distributors and agents.
                                </li>
                            </ul>
                        </div>

                   
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Database</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">MongoDB:</span> Efficiently stores, retrieves, and manages all platform data.
                                </li>
                                <li>
                                    <span className="font-bold">Schema Design:</span> Maintains data consistency for operations, orders, and payments.
                                </li>
                            </ul>
                        </div>

                     
                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Additional Features</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Real-Time Updates & Notifications:</span> Keep distributors informed of orders, inventory, and subscriptions instantly.
                                </li>
                                <li>
                                    <span className="font-bold">Modular & Scalable Architecture:</span> Allows future growth and easy addition of new features.
                                </li>
                                <li>
                                    <span className="font-bold">Testing & Reliability:</span> Manual and automated testing ensures a reliable, bug-free platform.
                                </li>
                            </ul>
                        </div>

                        <p>
                            This tech stack enables the Distributor Web Platform to be fast, secure, and easy to use, providing distributors with complete control over their operations while maintaining transparency and efficiency.
                        </p>
                    </div>
                </div>
            </div>


            {/* Screenshots */}
            <div className="max-w-6xl mx-auto space-y-16 p-10 mt-12">
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
                        <img
                            src={SDPImg4.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={SDPImg5.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={SDPImg6.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={SDPImg7.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                        <img
                            src={SDPImg8.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md"
                        />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SmartDeliveryPageDistributor;
