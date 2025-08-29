import { 
    UtensilsCrossed, Building, Shield, Globe, Users, CheckCircle, 
    Zap, BarChart, Smartphone, ArrowRight, Clock, Package,
    TrendingUp, Settings, RefreshCw, MapPin
} from 'lucide-react';

export const restaurant_faq = [
    {
        title: "Can you build an app like Zomato or Swiggy for us?",
        icon: <UtensilsCrossed className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in creating customized food delivery platforms with all essential features:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Multi-Platform Apps:</span>
                            <p className="text-blue-800 mt-1">Customer apps, restaurant partner apps, and delivery partner apps with admin dashboard.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Real-Time Tracking:</span>
                            <p className="text-green-800 mt-1">GPS-enabled live tracking for orders with ETA and route optimization.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Package className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Advanced Features:</span>
                            <p className="text-purple-800 mt-1">AI recommendations, loyalty programs, multi-payment options, and rating systems.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Core Features Include:</h4>
                    {[
                        "Restaurant discovery with filters and search",
                        "Menu management with images and descriptions",
                        "Order management and kitchen display systems",
                        "Delivery partner onboarding and management",
                        "Commission management and payment processing",
                        "Analytics dashboard for business insights"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Our food delivery platforms handle <span className="font-semibold">10,000+ orders per hour</span> with 99.9% uptime.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide grocery delivery solutions similar to Blinkit or Instamart?",
        icon: <Package className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We design end-to-end grocery delivery platforms with comprehensive features:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Clock className="w-4 h-4 text-blue-500" />, text: "Quick commerce solutions with 10-30 minute delivery windows" },
                        { icon: <Package className="w-4 h-4 text-green-500" />, text: "Inventory management for perishable and non-perishable items" },
                        { icon: <MapPin className="w-4 h-4 text-purple-500" />, text: "Hyperlocal delivery with dark store management" },
                        { icon: <Zap className="w-4 h-4 text-orange-500" />, text: "Real-time stock updates and automatic reordering" },
                        { icon: <Users className="w-4 h-4 text-indigo-500" />, text: "Multi-vendor support with supplier management" },
                        { icon: <BarChart className="w-4 h-4 text-pink-500" />, text: "Demand forecasting and inventory optimization" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Specialized Features:</h4>
                    {[
                        "Category-wise browsing with smart filters",
                        "Bulk ordering and subscription services",
                        "Temperature-controlled delivery tracking",
                        "Quality assurance and freshness guarantee",
                        "Multi-location warehouse management",
                        "Customer preference learning algorithms"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our grocery platforms support <span className="font-semibold">100,000+ SKUs</span> with real-time inventory synchronization.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can your systems handle recurring subscriptions for milk delivery?",
        icon: <RefreshCw className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our milk and dairy delivery solutions are built specifically for subscription-based models:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <RefreshCw className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Flexible Subscriptions:</span>
                            <p className="text-purple-700 text-sm mt-1">Daily, weekly, monthly plans with pause/resume options</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Smart Scheduling:</span>
                            <p className="text-blue-700 text-sm mt-1">Automated delivery scheduling with customer preferences</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Customer Control:</span>
                            <p className="text-green-700 text-sm mt-1">Easy modification of quantity, frequency, and delivery times</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Business Analytics:</span>
                            <p className="text-orange-700 text-sm mt-1">Subscription analytics, churn prediction, and retention insights</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Subscription Features:</h4>
                    {[
                        "Automated recurring billing and payment processing",
                        "Holiday and vacation pause functionality",
                        "Quantity adjustment with advance notice",
                        "Product variety within subscription plans",
                        "Delivery window preferences and modifications",
                        "Customer notification system for deliveries"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our subscription systems manage <span className="font-semibold">50,000+ active subscriptions</span> with 95% customer retention.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure the security of payment gateways?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We integrate secure, PCI-compliant payment gateways with enterprise-grade encryption:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">PCI DSS Compliance:</span>
                            <p className="text-red-800 mt-1">Full compliance with Payment Card Industry Data Security Standards.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Multiple Payment Options:</span>
                            <p className="text-blue-800 mt-1">UPI, credit/debit cards, digital wallets, net banking, and COD support.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Fraud Prevention:</span>
                            <p className="text-green-800 mt-1">AI-powered fraud detection with real-time transaction monitoring.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Measures:</h4>
                    {[
                        "End-to-end SSL encryption for all transactions",
                        "Tokenization of sensitive payment data",
                        "Two-factor authentication for admin access",
                        "Regular security audits and penetration testing",
                        "Secure API endpoints with rate limiting",
                        "PCI compliant hosting infrastructure",
                        "Real-time fraud scoring and blocking"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our payment systems maintain <span className="font-semibold">99.95% uptime</span> with zero security breaches.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can your solutions handle high-order volumes?",
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our platforms are designed to scale and perform efficiently even during peak order periods:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Zap className="w-4 h-4 text-blue-500" />, text: "Auto-scaling cloud infrastructure for peak demand handling" },
                        { icon: <Settings className="w-4 h-4 text-green-500" />, text: "Load balancing across multiple servers for optimal performance" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Real-time monitoring with automated scaling triggers" },
                        { icon: <Globe className="w-4 h-4 text-orange-500" />, text: "CDN integration for fast global content delivery" },
                        { icon: <Package className="w-4 h-4 text-indigo-500" />, text: "Optimized database queries for high-throughput operations" },
                        { icon: <RefreshCw className="w-4 h-4 text-pink-500" />, text: "Intelligent caching mechanisms for faster response times" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Performance Capabilities:</h4>
                    {[
                        "Handle 100,000+ concurrent users simultaneously",
                        "Process 10,000+ orders per hour during peak times",
                        "Sub-second response times for critical operations",
                        "99.9% uptime with automatic failover systems",
                        "Horizontal scaling based on real-time demand",
                        "Distributed architecture across multiple regions"
                    ].map((capability, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{capability}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our systems have successfully handled <span className="font-semibold">1M+ orders during festival seasons</span> without downtime.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide analytics for customer behavior and sales trends?",
        icon: <BarChart className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive analytics and reporting tools for data-driven decision making:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <BarChart className="w-4 h-4 text-blue-500" />, text: "Real-time sales dashboard with key performance indicators" },
                        { icon: <Users className="w-4 h-4 text-green-500" />, text: "Customer behavior analysis and segmentation tools" },
                        { icon: <TrendingUp className="w-4 h-4 text-purple-500" />, text: "Sales forecasting and demand prediction models" },
                        { icon: <MapPin className="w-4 h-4 text-orange-500" />, text: "Delivery performance and route optimization analytics" },
                        { icon: <Package className="w-4 h-4 text-indigo-500" />, text: "Inventory turnover and waste reduction insights" },
                        { icon: <Clock className="w-4 h-4 text-pink-500" />, text: "Peak hours analysis and resource planning tools" },
                        { icon: <Smartphone className="w-4 h-4 text-cyan-500" />, text: "Mobile app usage and conversion funnel analysis" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Marketing campaign performance and ROI tracking" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Analytics Categories:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Customer Analytics</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Sales Performance</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Delivery Metrics</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Inventory Insights</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our analytics help businesses increase <span className="font-semibold">revenue by 25-40%</span> through data-driven optimizations.
                    </p>
                </div>
            </>
        ),
    },
];
