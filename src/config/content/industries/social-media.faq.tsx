import { 
    Users, Globe, Shield, Zap, MessageCircle, Clock, 
    CheckCircle, ArrowRight, TrendingUp, Settings, Brain,
    ShoppingCart, Video, Camera, BarChart, Lock
} from 'lucide-react';

export const social_media_faq = [
    {
        title: "Can you create a platform for a specific niche?",
        icon: <Users className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in creating niche platforms tailored to specific industries or audiences:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Community-Focused Design:</span>
                            <p className="text-blue-800 mt-1">Custom features designed specifically for your target community's unique needs and behaviors.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Specialized Features:</span>
                            <p className="text-green-800 mt-1">Industry-specific tools, workflows, and content types tailored to your niche market.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <BarChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Targeted Analytics:</span>
                            <p className="text-purple-800 mt-1">Analytics and insights specific to your niche community's engagement patterns and preferences.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Niche Platform Examples:</h4>
                    {[
                        "Professional networks for specific industries",
                        "Hobby and interest-based communities",
                        "Local community and neighborhood platforms",
                        "Educational and learning-focused networks",
                        "Creative and artistic collaboration platforms",
                        "Health and wellness communities"
                    ].map((example, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{example}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Niche platforms typically achieve <span className="font-semibold">40-60% higher engagement rates</span> than general social networks.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What technologies do you use for social media solutions?",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We use a combination of modern technologies to build robust and scalable social media platforms:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Frontend Technologies:</span>
                            <p className="text-blue-700 text-sm mt-1">React.js, Next.js, Vue.js, Flutter for cross-platform mobile apps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Globe className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Backend Technologies:</span>
                            <p className="text-green-700 text-sm mt-1">Node.js, Python, Java, GraphQL APIs, microservices architecture</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Brain className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">AI/ML Technologies:</span>
                            <p className="text-purple-700 text-sm mt-1">TensorFlow, PyTorch, natural language processing, computer vision</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Cloud & Infrastructure:</span>
                            <p className="text-orange-700 text-sm mt-1">AWS, Google Cloud, Azure, CDN, auto-scaling, containerization</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Video className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Media & Communication:</span>
                            <p className="text-indigo-700 text-sm mt-1">WebRTC, streaming protocols, real-time messaging, media processing</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We select the optimal tech stack based on <span className="font-semibold">your platform requirements, scalability needs, and target audience</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure platform security?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We implement advanced security protocols to protect user data and ensure platform integrity:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Data Encryption:</span>
                            <p className="text-red-800 mt-1">End-to-end encryption for all communications and data storage with industry-standard protocols.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Authentication Security:</span>
                            <p className="text-blue-800 mt-1">Multi-factor authentication, OAuth integration, and secure session management.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Regular Security Audits:</span>
                            <p className="text-green-800 mt-1">Continuous vulnerability assessments and penetration testing to identify and fix security gaps.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Features Include:</h4>
                    {[
                        "GDPR and CCPA compliance implementation",
                        "Real-time fraud detection and prevention",
                        "Secure API endpoints with rate limiting",
                        "Content security policies and XSS protection",
                        "Regular security updates and patch management",
                        "Data backup and disaster recovery protocols"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our security measures maintain <span className="font-semibold">99.9% uptime with zero data breaches</span> across all platforms.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you integrate e-commerce features into a social platform?",
        icon: <ShoppingCart className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We excel at integrating social commerce features to create seamless shopping experiences:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <ShoppingCart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Native Shopping Experience:</span>
                            <p className="text-purple-700 text-sm mt-1">In-feed product displays, shoppable posts, and seamless checkout flows</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Camera className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Product Discovery:</span>
                            <p className="text-blue-700 text-sm mt-1">AI-powered product recommendations and visual search capabilities</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Payment Integration:</span>
                            <p className="text-green-700 text-sm mt-1">Multiple payment gateways, digital wallets, and secure transactions</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Seller Tools:</span>
                            <p className="text-orange-700 text-sm mt-1">Merchant dashboards, inventory management, and sales analytics</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">E-commerce Features:</h4>
                    {[
                        "Product tagging in posts and stories",
                        "Shopping carts and wish lists",
                        "Live shopping and product demonstrations",
                        "Influencer affiliate programs",
                        "Customer reviews and ratings",
                        "Order tracking and customer support"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Social commerce integration can increase <span className="font-semibold">conversion rates by 200-300%</span> compared to traditional e-commerce.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing support for social media platforms?",
        icon: <MessageCircle className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive maintenance and support services:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Settings className="w-4 h-4 text-blue-500" />, text: "24/7 platform monitoring and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and vulnerability patches" },
                        { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Feature updates and platform enhancements" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Analytics and performance reporting" },
                        { icon: <Users className="w-4 h-4 text-orange-500" />, text: "User support and community management" },
                        { icon: <Globe className="w-4 h-4 text-indigo-500" />, text: "Infrastructure scaling and capacity planning" },
                        { icon: <Brain className="w-4 h-4 text-pink-500" />, text: "AI model updates and algorithm improvements" },
                        { icon: <Lock className="w-4 h-4 text-cyan-500" />, text: "Content moderation and safety measures" }
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
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Premium Care</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Enterprise SLA</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our support ensures <span className="font-semibold">99.9% uptime</span> and keeps your platform evolving with user needs.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does it take to develop a social media platform?",
        icon: <Clock className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline depends on the complexity and features of the platform:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Basic Social Platform:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">3–6 months</span>
                            <p className="text-green-700 text-sm mt-1">User profiles, messaging, basic feeds, and mobile apps</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Advanced Features Platform:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">6–12 months</span>
                            <p className="text-blue-700 text-sm mt-1">AI features, live streaming, e-commerce, advanced analytics</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Social Platform:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">12+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Custom features, AR/VR, complex integrations, enterprise security</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Development Phases:</h4>
                    {[
                        "Platform strategy and feature planning (2-4 weeks)",
                        "UI/UX design and prototype development (4-8 weeks)",
                        "Core platform development and testing (8-20 weeks)",
                        "Advanced features and integrations (4-12 weeks)",
                        "Security audits and performance optimization (2-4 weeks)",
                        "User testing and platform launch (2-4 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        We provide <span className="font-semibold">detailed project timelines</span> after understanding your specific requirements and objectives.
                    </p>
                </div>
            </>
        ),
    },
];
