import { 
    ShoppingCart, Building, Shield, Globe, Users, CheckCircle, 
    Zap, BarChart, Smartphone, ArrowRight, Cloud, Lock,
    TrendingUp, Settings, RefreshCw, Package
} from 'lucide-react';

export const retail_faq = [
    {
        title: "Can you help with creating a custom e-commerce website?",
        icon: <ShoppingCart className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in building custom e-commerce platforms that align with your business goals:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Responsive Design:</span>
                            <p className="text-blue-800 mt-1">Mobile-first approach ensuring optimal experience across all devices and screen sizes.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Secure Payment Processing:</span>
                            <p className="text-green-800 mt-1">Multiple payment gateways with PCI DSS compliance and fraud protection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <BarChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Advanced Analytics:</span>
                            <p className="text-purple-800 mt-1">Built-in analytics and reporting tools for tracking sales, customer behavior, and performance metrics.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Key Features Include:</h4>
                    {[
                        "SEO-optimized structure for better search visibility",
                        "Inventory management and automated stock tracking",
                        "Customer account management and order history",
                        "Multi-language and multi-currency support",
                        "Social media and marketplace integrations",
                        "Advanced search and filtering capabilities"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Our custom e-commerce solutions have helped clients achieve <span className="font-semibold">200-400% increase in online sales</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer solutions for small retail businesses?",
        icon: <Building className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> Our solutions are scalable and customizable to fit businesses of all sizes:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Package className="w-4 h-4 text-blue-500" />, text: "Affordable starter packages for small retail stores" },
                        { icon: <Cloud className="w-4 h-4 text-green-500" />, text: "Cloud-based solutions with flexible pricing models" },
                        { icon: <Zap className="w-4 h-4 text-purple-500" />, text: "Quick deployment and easy-to-use interfaces" },
                        { icon: <TrendingUp className="w-4 h-4 text-orange-500" />, text: "Scalable architecture that grows with your business" },
                        { icon: <Users className="w-4 h-4 text-indigo-500" />, text: "Training and support for non-technical users" },
                        { icon: <Settings className="w-4 h-4 text-pink-500" />, text: "Modular features you can add as you expand" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Small Business Solutions Include:</h4>
                    {[
                        "Simple POS systems with inventory tracking",
                        "Basic e-commerce websites with essential features",
                        "Customer management and loyalty programs",
                        "Social media integration and digital marketing tools",
                        "Mobile-friendly admin panels for on-the-go management",
                        "Affordable payment processing with competitive rates"
                    ].map((solution, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{solution}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        We've helped <span className="font-semibold">500+ small retailers</span> digitize their operations and increase revenue.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do your solutions ensure data security?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We implement robust security measures to safeguard your business and customer data:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">PCI DSS Compliance:</span>
                            <p className="text-red-800 mt-1">Full compliance with Payment Card Industry Data Security Standards for secure payment processing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Encryption:</span>
                            <p className="text-blue-800 mt-1">End-to-end encryption for all data transmission and storage, including customer information and transactions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Fraud Detection:</span>
                            <p className="text-green-800 mt-1">AI-powered fraud detection systems that monitor transactions in real-time for suspicious activities.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Features:</h4>
                    {[
                        "SSL certificates and HTTPS encryption for all communications",
                        "Regular security audits and vulnerability assessments",
                        "Multi-factor authentication for admin access",
                        "GDPR and CCPA compliance for data privacy",
                        "Secure API endpoints with rate limiting and monitoring",
                        "Regular security updates and patch management",
                        "Backup and disaster recovery protocols"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our security measures have maintained <span className="font-semibold">zero data breaches</span> across all retail clients.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you integrate my online store with marketplaces like Amazon and eBay?",
        icon: <Globe className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide comprehensive marketplace integration solutions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Globe className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Multi-Channel Selling:</span>
                            <p className="text-purple-700 text-sm mt-1">Amazon, eBay, Etsy, Walmart, Facebook Marketplace, and regional platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Package className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Centralized Inventory:</span>
                            <p className="text-blue-700 text-sm mt-1">Real-time inventory synchronization across all sales channels</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Order Management:</span>
                            <p className="text-green-700 text-sm mt-1">Unified order processing and fulfillment across all platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Analytics & Reporting:</span>
                            <p className="text-orange-700 text-sm mt-1">Performance tracking and insights across all marketplaces</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Integration Benefits:</h4>
                    {[
                        "Automated product listing and pricing updates",
                        "Bulk upload and management of product catalogs",
                        "Real-time order notifications and processing",
                        "Automated inventory updates to prevent overselling",
                        "Centralized customer service and support",
                        "Multi-marketplace promotional campaign management"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Marketplace integrations typically increase sales by <span className="font-semibold">150-300%</span> within 6 months.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer support after deployment?",
        icon: <Users className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide comprehensive end-to-end support for all retail and e-commerce solutions:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "24/7 system monitoring and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and vulnerability assessments" },
                        { icon: <Settings className="w-4 h-4 text-purple-500" />, text: "Regular maintenance and feature updates" },
                        { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Technical troubleshooting and issue resolution" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Performance analytics and optimization recommendations" },
                        { icon: <Users className="w-4 h-4 text-indigo-500" />, text: "Staff training and user documentation" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "Infrastructure scaling and capacity planning" },
                        { icon: <Package className="w-4 h-4 text-pink-500" />, text: "Inventory system updates and marketplace management" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Support Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Basic Support</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Business Care</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Enterprise SLA</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our support ensures <span className="font-semibold">99.9% uptime</span> and rapid response to keep your business running smoothly.
                    </p>
                </div>
            </>
        ),
    },
];
