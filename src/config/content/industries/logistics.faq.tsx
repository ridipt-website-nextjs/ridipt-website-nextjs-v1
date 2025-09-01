import { 
    Settings, Eye, Building, TrendingUp, Zap, Globe, 
    CheckCircle, ArrowRight, Truck, BarChart, Shield, Layers
} from 'lucide-react';

export const logistics_faq = [
    {
        title: "Can your solutions integrate with existing ERP systems?",
        icon: <Settings className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our solutions are designed to integrate seamlessly with ERP and other legacy systems:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">API Integration:</span>
                            <p className="text-blue-800 mt-1">RESTful APIs and web services for seamless data exchange between systems.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Layers className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">ERP Compatibility:</span>
                            <p className="text-green-800 mt-1">Support for SAP, Oracle, Microsoft Dynamics, and other enterprise systems.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <BarChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Real-Time Sync:</span>
                            <p className="text-purple-800 mt-1">Bi-directional data synchronization ensuring consistent information across platforms.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Integration Features:</h4>
                    {[
                        "Custom connector development for legacy systems",
                        "Real-time data mapping and transformation",
                        "Automated workflow synchronization",
                        "Master data management across systems",
                        "Single sign-on (SSO) integration",
                        "Comprehensive audit trails and logging"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our integration success rate is <span className="font-semibold">99% with minimal operational downtime</span> during implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure real-time supply chain visibility?",
        icon: <Eye className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We leverage advanced technologies to provide comprehensive real-time supply chain visibility:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">IoT Integration:</span>
                            <p className="text-blue-700 text-sm mt-1">Smart sensors for real-time monitoring of shipments, inventory, and assets</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Truck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">GPS Tracking:</span>
                            <p className="text-green-700 text-sm mt-1">Live location tracking for vehicles, containers, and shipments worldwide</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">AI-Powered Analytics:</span>
                            <p className="text-purple-700 text-sm mt-1">Predictive insights and anomaly detection for proactive decision-making</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Eye className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Unified Dashboard:</span>
                            <p className="text-orange-700 text-sm mt-1">Single pane of glass for monitoring entire supply chain operations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Visibility Features:</h4>
                    {[
                        "Real-time shipment tracking and ETA updates",
                        "Inventory levels across all locations",
                        "Temperature and condition monitoring",
                        "Automated alerts for exceptions and delays",
                        "Supplier performance and compliance monitoring",
                        "Customer delivery confirmation and proof of delivery"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our visibility solutions provide <span className="font-semibold">99.8% tracking accuracy</span> with sub-second data updates.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer solutions for small and medium-sized logistics companies?",
        icon: <Building className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> Our solutions are customizable and scalable to suit businesses of all sizes:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Building className="w-4 h-4 text-blue-500" />, text: "Affordable starter packages with essential logistics features" },
                        { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Modular solutions allowing gradual feature expansion" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Cloud-based deployment for lower infrastructure costs" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "User-friendly interfaces requiring minimal training" },
                        { icon: <TrendingUp className="w-4 h-4 text-indigo-500" />, text: "Flexible pricing models based on usage and features" },
                        { icon: <Shield className="w-4 h-4 text-pink-500" />, text: "Quick implementation with minimal business disruption" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-purple-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">SME-Focused Solutions:</h4>
                    {[
                        "Basic transportation management systems",
                        "Simple warehouse management tools",
                        "Order tracking and customer notifications",
                        "Route optimization for small fleets",
                        "Inventory management for growing businesses",
                        "Integration with popular accounting software"
                    ].map((solution, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{solution}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        We've helped <span className="font-semibold">200+ SME logistics companies</span> digitize their operations successfully.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How can your solutions improve last-mile delivery?",
        icon: <Truck className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Our tools optimize route planning, track deliveries in real-time, and enhance customer communication:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Route Optimization:</span>
                            <p className="text-orange-800 mt-1">AI-powered algorithms to find the most efficient delivery routes considering traffic and constraints.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Real-Time Tracking:</span>
                            <p className="text-blue-800 mt-1">Live GPS tracking with accurate ETAs and delivery confirmations for customers and dispatchers.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Smart Dispatch:</span>
                            <p className="text-green-800 mt-1">Automated driver assignment based on location, capacity, and delivery priorities.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Last-Mile Features:</h4>
                    {[
                        "Dynamic route re-optimization based on real-time conditions",
                        "Customer communication with SMS and email notifications",
                        "Proof of delivery with digital signatures and photos",
                        "Failed delivery management and re-scheduling",
                        "Driver performance monitoring and analytics",
                        "Integration with customer service and support systems"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Our last-mile solutions reduce <span className="font-semibold">delivery costs by 25% and improve on-time delivery by 40%</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What technologies do you use in your supply chain solutions?",
        icon: <Zap className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We utilize advanced technologies to build innovative and efficient supply chain solutions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">IoT & Sensors:</span>
                            <p className="text-blue-700 text-sm mt-1">Smart sensors for temperature, humidity, location, and condition monitoring</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">AI & Machine Learning:</span>
                            <p className="text-green-700 text-sm mt-1">Predictive analytics, demand forecasting, and optimization algorithms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Blockchain:</span>
                            <p className="text-purple-700 text-sm mt-1">Immutable records, smart contracts, and supply chain transparency</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Robotic Process Automation:</span>
                            <p className="text-orange-700 text-sm mt-1">Automated workflows, data processing, and repetitive task elimination</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Technology Stack:</h4>
                    {[
                        "Cloud platforms (AWS, Azure, Google Cloud)",
                        "Real-time data processing and analytics",
                        "Mobile applications for field operations",
                        "API-first architecture for seamless integrations",
                        "Advanced visualization and dashboard tools",
                        "Edge computing for real-time decision making"
                    ].map((tech, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{tech}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our technology solutions deliver <span className="font-semibold">30-50% operational efficiency gains</span> across supply chain operations.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer support for global supply chains?",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our solutions are designed to handle the complexities of global supply chains:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Globe className="w-4 h-4 text-blue-500" />, text: "Multi-country operations with local compliance support" },
                        { icon: <Truck className="w-4 h-4 text-green-500" />, text: "Multi-modal transportation management (air, sea, rail, road)" },
                        { icon: <Settings className="w-4 h-4 text-purple-500" />, text: "Customs and trade compliance automation" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Currency conversion and international billing" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Cross-border documentation and regulatory compliance" },
                        { icon: <Eye className="w-4 h-4 text-indigo-500" />, text: "Multi-language and multi-timezone support" },
                        { icon: <TrendingUp className="w-4 h-4 text-pink-500" />, text: "Global partner and supplier network management" },
                        { icon: <Zap className="w-4 h-4 text-cyan-500" />, text: "International shipping and freight forwarding" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Global Capabilities:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Multi-Country Support</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Trade Compliance</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Cross-Border Logistics</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Global Tracking</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        We support supply chains across <span className="font-semibold">50+ countries</span> with local expertise and compliance.
                    </p>
                </div>
            </>
        ),
    },
];
