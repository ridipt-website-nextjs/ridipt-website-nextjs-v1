"use client";

import React from "react";
import SDPImg1 from "@/assests/portfolio/Client-1.jpeg";
import SDPImg2 from "@/assests/portfolio/Clent-2.jpeg";
import SDPImg3 from "@/assests/portfolio/Clent-3.jpeg";
import SDPImg4 from "@/assests/portfolio/Clent-4.jpeg";
import SDPImg5 from "@/assests/portfolio/Clent-5.jpeg";
import SDPImg6 from "@/assests/portfolio/Clent-6.jpeg";
import Link from "next/link";

const SmartDeliveryPageClient = () => {
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
                                alt="Grocery Delivery Client App"
                                className="w-full h-80 object-contain shadow-md rounded-lg border border-border"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-6 text-card-foreground">
                                Grocery Delivery (Client)
                            </h1>
                            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                A mobile-friendly app that allows customers to browse products, manage
                                subscriptions, track orders, and handle account details seamlessly.
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-8">
                                <div>
                                    <h2 className="text-2xl font-semibold mb-2 text-card-foreground">Project</h2>
                                    <p className="text-muted-foreground text-lg">
                                        Grocery Delivery - Client
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
                            The Client App is a comprehensive mobile platform designed to
                            provide customers with a seamless and enjoyable grocery
                            shopping experience. It allows users to browse a wide range of
                            products, discover popular brands, and shop easily by category, all
                            from a single intuitive interface. Customers can manage their
                            subscriptions, track both current and past orders, and securely
                            handle payments, ensuring complete transparency and control
                            over their purchases.
                            <br /><br />
                            In addition to shopping, the app offers quick access to help and
                            support, allowing users to resolve queries or issues efficiently.
                            Customers can also connect directly with delivery agents for real
                            time updates, ensuring smooth communication and timely
                            deliveries. The platform centralizes all essential shopping tasks,
                            making the process organized, efficient, and stress-free. By
                            combining convenience, clarity, and real-time functionality, the
                            Client App delivers a fully integrated and user-friendly experience,
                            helping customers manage their grocery needs effortlessly from
                            browsing to delivery.
                        </p>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-card-foreground">Solution / Key Features:</h2>
                        <p className="text-muted-foreground text-lg text-justify mb-6 leading-relaxed">
                            The Client App is a comprehensive mobile platform designed to make
                            grocery shopping easy, organized, and enjoyable for customers. By
                            centralizing all essential shopping tasks, the app allows users to browse
                            through a wide range of products, explore popular brands, and shop
                            efficiently by category. Customers can manage their subscriptions, track
                            both current and past orders, and securely handle payments, ensuring
                            complete transparency and control over their purchases.
                        </p>

                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Key Features</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                                <li>
                                    <span className="font-bold text-card-foreground">Home Screen:</span> Browse all products, explore popular brands, and
                                    access featured items easily.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Subscription Management:</span> Subscribe to favorite products or plans,
                                    manage renewals, and stay updated.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">My Orders:</span> Track current and past orders, view delivery status, and
                                    order details.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Shop by Category:</span> Quickly find products by categories for faster
                                    shopping.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Account Management:</span> View past subscriptions, payments, and
                                    order history.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Delivery Agent Connection:</span> Contact or get updates from delivery
                                    agents directly.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Secure Logout:</span> Ensure account safety with proper logout
                                    functionality.
                                </li>
                            </ul>

                            <h3 className="text-2xl font-semibold mt-6 mb-3 text-card-foreground">Benefits</h3>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground text-lg">
                                <li>Streamlined and organized shopping experience.</li>
                                <li>Easy management of subscriptions and orders.</li>
                                <li>Transparent payments and delivery tracking.</li>
                                <li>Efficient access to help and real-time support.</li>
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
                        The Client App is designed with a focus on simplicity, usability, and
                        visual clarity, ensuring customers can shop efficiently and enjoyably on
                        mobile devices. The interface is intuitive and organized, allowing users to
                        browse products, manage subscriptions, track orders, and handle
                        payments without confusion.
                    </p>

                    <h3 className="text-2xl font-semibold mb-3 text-card-foreground">UI/UX Highlights:</h3>
                    <ul className="list-disc list-inside space-y-3 text-muted-foreground text-lg">
                        <li>
                            <span className="font-bold text-card-foreground">Clean & Intuitive Interface:</span> Easy navigation between Home,
                            Subscriptions, Orders, and Account sections.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Visual Product Display:</span> High-quality images and clear
                            categorization of products and popular brands.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Responsive Mobile Design:</span> Optimized for different screen sizes to
                            provide a seamless experience.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Consistency & Accessibility:</span> Uniform fonts, colors, and interactive
                            elements for a smooth user experience.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Real-Time Updates:</span> Instant notifications for order status,
                            subscription renewals, and payment confirmations.
                        </li>
                        <li>
                            <span className="font-bold text-card-foreground">Customer-Friendly Navigation:</span> Quick access to help & support,
                            delivery agents, and account details.
                        </li>
                    </ul>
                    
                    <p className="text-muted-foreground text-lg text-justify mt-6 leading-relaxed">
                        The UI/UX design ensures that the shopping experience is clear,
                        organized, and enjoyable, making it easy for customers to explore
                        products, manage their orders, and complete transactions efficiently.
                    </p>
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
                            The Client App was developed using a modern and scalable tech stack
                            to ensure smooth performance, security, and a user-friendly
                            experience for customers.
                        </p>

                        {/* Frontend */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Frontend (Mobile App)</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Flutter:</span> Cross-platform mobile development for Android and iOS.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">UI/UX Design:</span> Clean, intuitive, and responsive interface for easy
                                    navigation and shopping.
                                </li>
                            </ul>
                        </div>

                        {/* Backend */}
                        <div>
                            <h3 className="text-2xl font-semibold mb-3 text-card-foreground">Backend</h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>
                                    <span className="font-bold text-card-foreground">Node.js & Express.js:</span> Robust server for handling business logic
                                    and API requests.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">REST APIs:</span> Efficient communication between the app and backend.
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
                                    <span className="font-bold text-card-foreground">MongoDB:</span> Efficient storage and management of products, orders,
                                    subscriptions, and user data.
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
                                    <span className="font-bold text-card-foreground">Manual Testing:</span> Ensured all functionalities worked as expected.
                                </li>
                                <li>
                                    <span className="font-bold text-card-foreground">Automated Testing:</span> Critical flows automated to maintain reliability
                                    and prevent bugs.
                                </li>
                            </ul>
                        </div>

                        <p>
                            This development approach and tech stack ensured that the Client
                            App is fast, secure, and capable of providing a seamless grocery
                            shopping experience for customers across mobile devices.
                        </p>
                    </div>
                </div>
            </div>

            {/* Screenshots */}
            <div className="max-w-6xl mx-auto space-y-12 p-10 mt-12">
                <div className="text-center">
                    <h2 className="text-4xl font-bold mb-6 text-card-foreground">APP SCREENS</h2>
                    <div className="grid grid-cols-2 gap-7">
                        <img
                            src={SDPImg2.src}
                            alt="Client App Screen 1"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-8"
                        />
                        <img
                            src={SDPImg3.src}
                            alt="Client App Screen 2"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-8"
                        />
                        <img
                            src={SDPImg4.src}
                            alt="Client App Screen 3"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-8"
                        />
                        <img
                            src={SDPImg5.src}
                            alt="Client App Screen 4"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-8"
                        />
                        <img
                            src={SDPImg6.src}
                            alt="Client App Screen 5"
                            className="w-full h-80 object-contain shadow-md rounded-lg border border-border hover:scale-[1.02] transition-transform duration-300 mt-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmartDeliveryPageClient;
