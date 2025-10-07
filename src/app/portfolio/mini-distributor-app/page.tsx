"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/md-1.jpeg";
import SDPImg2 from "@/assests/portfolio/md-2.jpeg";
import SDPImg3 from "@/assests/portfolio/md-3.jpeg";
import SDPImg4 from "@/assests/portfolio/md-4.jpeg";
import SDPImg5 from "@/assests/portfolio/md-5.jpeg";
import SDPImg6 from "@/assests/portfolio/md-6.jpeg";
import Link from "next/link";


const SmartDeliveryPageMiniDistributor = () => {
    return (
        <div>
            {/* Hero Section */}
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
                                Grocery Delivery(Mini-Distributor-App)
                            </h1>
                            <p className="text-gray-700 text-lg mb-8">
                                A mobile app that enables distributors to manage orders,
                                subscriptions, products, and inventory efficiently with a simple and
                                centralized dashboard.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Project</h2>
                                    <p className="text-gray-700 text-lg">
                                        Grocery Delivery - Mini Distributor App
                                    </p>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2">Platform</h2>
                                    <p className="text-gray-700 text-lg">Android,iOS</p>
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
                            The Mini Distributor App is a simplified mobile platform designed to help
                            distributors manage their day-to-day operations quickly and efficiently.
                            With an easy-to-use dashboard, distributors can track and manage all
                            orders—whether pending, accepted, delivered, rejected, or undelivered—
                            in real time. The app also enables seamless management of customer
                            subscriptions, access to product catalogs, and monitoring of inventory,
                            including issuing orders directly from the app. By centralizing these key
                            functions, the Mini Distributor App empowers distributors with better
                            control, improved efficiency, and the flexibility to manage their business
                            anytime, anywhere.


                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4"> Solution / Key Features:</h2>
                        <p className="text-gray-700 text-lg text-justify mb-6">
                            The Mini Distributor App provides a mobile-first solution that simplifies
                            distributor operations and brings all essential tools into one platform. It
                            ensures that distributors can stay connected, manage tasks on the go, and
                            maintain smooth business operations.
                        </p>



                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>
                                    <span className="font-bold">Dashboard:</span> A quick snapshot of business activities and performance.
                                </li>
                                <li>
                                    <span className="font-bold">Order Management:</span> Handle all orders in one place – pending, accepted, delivered, rejected, and undelivered.
                                </li>
                                <li>
                                    <span className="font-bold">Subscriptions:</span> Track and manage customer subscriptions efficiently.
                                </li>
                                <li>
                                    <span className="font-bold">Product Catalog:</span> Access and update product listings for smooth availability.
                                </li>
                                <li>
                                    <span className="font-bold">Inventory Control:</span> Issue orders and monitor stock in real-time.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                                <li>Streamlines distributor workflows with a simplified mobile interface.</li>
                                <li>Improves visibility and control over daily operations.</li>
                                <li>Enhances flexibility by enabling distributors to manage business anytime, anywhere.</li>
                                <li>Provides transparency and efficiency for better decision-making.</li>
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
                        The Distributor Mobile Platform is designed with a strong focus on simplicity,
                        clarity, and efficiency. The interface allows distributors to manage orders,
                        products, subscriptions, and inventory effortlessly while maintaining visibility
                        over key business operations.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3">UI/UX Highlights:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
                        <li>
                            <span className="font-bold">Simple Dashboard:</span> At-a-glance view of orders, subscriptions, and inventory.
                        </li>
                        <li>
                            <span className="font-bold">Clear Navigation:</span> Organized menus for orders, products, subscriptions, and stock management.
                        </li>
                        <li>
                            <span className="font-bold">Mobile-Optimized Design:</span> Seamless experience across smartphones and tablets.
                        </li>
                        <li>
                            <span className="font-bold">Real-Time Updates:</span> Notifications for order status changes and inventory actions.
                        </li>
                        <li>
                            <span className="font-bold">Consistency & Accessibility:</span> Uniform design patterns with readable fonts, consistent colors, and user-friendly interactions.
                        </li>
                        <li>
                            <span className="font-bold">Minimalistic Layout:</span> Focus on essential actions with less clutter for faster decision-making.
                        </li>
                    </ul>

                    <p className="text-gray-700 text-lg text-justify mt-6">
                        The UI/UX ensures distributors can easily track, manage, and act on their
                        business activities without confusion, providing a smooth and efficient
                        mobile experience.
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


            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-left">
                    <h2 className="text-4xl font-bold mb-6">Development & Tech Stack</h2>
                    <div className="text-gray-700 text-lg leading-relaxed space-y-6">
                        <p>
                            The Mini Distributor App was built using a modern, scalable, and secure
                            technology stack to ensure smooth mobile operations, reliable performance,
                            and real-time updates for distributors.
                        </p>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Mobile App (Frontend)</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Flutter:</span> Cross-platform development for Android and iOS with a responsive and clean UI.
                                </li>
                                <li>
                                    <span className="font-bold">UI/UX Design:</span> Optimized for mobile screens with simple navigation and minimalistic layouts.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Node.js & Express.js:</span> Handles business logic and API services efficiently.
                                </li>
                                <li>
                                    <span className="font-bold">REST APIs:</span> Enables seamless communication between the app and server.
                                </li>
                                <li>
                                    <span className="font-bold">Authentication & Security:</span> JWT-based authentication and OTP APIs for secure logins and transactions.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Database</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">MongoDB:</span> Fast and flexible storage of orders, subscriptions, products, and inventory data.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Cloud & Hosting</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Microsoft Azure:</span> Reliable cloud hosting ensuring scalability, uptime, and data security.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">Testing</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold">Manual Testing:</span> Verified all workflows, including orders, subscriptions, and inventory management.
                                </li>
                                <li>
                                    <span className="font-bold">Automated Testing:</span> Implemented for critical processes to maintain stability and prevent bugs.
                                </li>
                            </ul>
                        </div>

                        <p>
                            This tech stack ensures the Mini Distributor App is fast, secure, and capable
                            of handling distributor operations anytime, anywhere with complete reliability
                            and efficiency.
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
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                        <img
                            src={SDPImg3.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                        <img
                            src={SDPImg4.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                        <img
                            src={SDPImg5.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                        <img
                            src={SDPImg6.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                        <img
                            src={SDPImg1.src}
                            alt="Smart Delivery Platform Screen 2"
                            className="w-full h-80 object-contain shadow-md mt-8"
                        />
                    </div>
                </div>
            </div>


        </div>

    );
};

export default SmartDeliveryPageMiniDistributor;
