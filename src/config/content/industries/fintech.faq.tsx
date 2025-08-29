import { 
    Building, Shield, Coins, Users, TrendingUp, CheckCircle, 
    Zap, Lock, BarChart, Smartphone, ArrowRight, Globe,
    Brain, RefreshCw, Settings, Cloud, Database
} from 'lucide-react';

export const fintech_faq = [
    {
        title: "Do you provide solutions for startups in the FinTech industry?",
        icon: <Building className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We specialize in supporting FinTech startups with scalable and innovative solutions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">MVP Development:</span>
                            <p className="text-blue-800 mt-1">Rapid prototyping and minimum viable product development for quick market entry.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Scalable Architecture:</span>
                            <p className="text-green-800 mt-1">Cloud-native solutions that grow with your business from startup to enterprise.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Coins className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Cost-Effective Solutions:</span>
                            <p className="text-purple-800 mt-1">Flexible pricing models and phased development approach to manage costs.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        We've helped <span className="font-semibold">50+ FinTech startups</span> successfully launch and scale their products.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure compliance with financial regulations?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    Our team stays up-to-date with regulatory requirements and designs solutions that comply with industry standards:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Regulatory Frameworks:</span>
                            <p className="text-red-800 mt-1">GDPR, PCI DSS, SOX, Basel III, MiFID II, and regional banking regulations compliance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Protection:</span>
                            <p className="text-blue-800 mt-1">End-to-end encryption, secure data handling, and privacy-by-design principles.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Automated Reporting:</span>
                            <p className="text-green-800 mt-1">RegTech solutions for automated compliance reporting and audit trails.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Compliance Features:</h4>
                    {[
                        "KYC/AML automated verification and screening",
                        "Transaction monitoring and suspicious activity reporting",
                        "Data residency and cross-border transfer compliance",
                        "Regular security audits and penetration testing",
                        "Regulatory change management and updates",
                        "Multi-jurisdictional compliance frameworks"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our solutions maintain <span className="font-semibold">100% compliance record</span> across all deployed financial applications.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you help us build a blockchain-based application?",
        icon: <Coins className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We have extensive expertise in blockchain development across various use cases:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Coins className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Cryptocurrency Solutions:</span>
                            <p className="text-purple-700 text-sm mt-1">Exchange development, wallet solutions, and payment processing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Smart Contracts:</span>
                            <p className="text-blue-700 text-sm mt-1">Automated agreements, DeFi protocols, and tokenization platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Globe className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">DeFi Applications:</span>
                            <p className="text-green-700 text-sm mt-1">Decentralized exchanges, lending protocols, and yield farming</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Database className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Enterprise Blockchain:</span>
                            <p className="text-orange-700 text-sm mt-1">Supply chain finance, trade finance, and digital identity solutions</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Blockchain Platforms We Support:</h4>
                    {[
                        "Ethereum and EVM-compatible networks",
                        "Hyperledger Fabric for enterprise solutions",
                        "Binance Smart Chain and Polygon",
                        "Solana for high-performance applications",
                        "Private blockchain networks",
                        "Cross-chain integration and bridges"
                    ].map((platform, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{platform}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        We've developed <span className="font-semibold">30+ blockchain applications</span> including DeFi protocols and cryptocurrency exchanges.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer post-deployment support?",
        icon: <Users className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide comprehensive end-to-end support for all our FinTech solutions:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "24/7 system monitoring and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and vulnerability assessments" },
                        { icon: <Settings className="w-4 h-4 text-purple-500" />, text: "Regular maintenance and system updates" },
                        { icon: <Brain className="w-4 h-4 text-green-500" />, text: "Technical troubleshooting and issue resolution" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Performance analytics and reporting" },
                        { icon: <Users className="w-4 h-4 text-indigo-500" />, text: "User training and documentation" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "Infrastructure scaling and optimization" },
                        { icon: <CheckCircle className="w-4 h-4 text-pink-500" />, text: "Compliance monitoring and regulatory updates" }
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
                        Our support ensures <span className="font-semibold">99.9% uptime</span> and rapid response to critical issues.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can your solutions scale as our business grows?",
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> Our FinTech solutions are designed to scale seamlessly with your business growth:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: "Cloud-native architecture for unlimited horizontal scaling" },
                        { icon: <Smartphone className="w-4 h-4 text-green-500" />, text: "Microservices architecture for independent component scaling" },
                        { icon: <Database className="w-4 h-4 text-purple-500" />, text: "Auto-scaling databases and caching systems" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Load balancing for high-traffic transaction processing" },
                        { icon: <Globe className="w-4 h-4 text-indigo-500" />, text: "Multi-region deployment for global reach" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Real-time performance monitoring and auto-scaling triggers" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Scaling Capabilities:</h4>
                    {[
                        "Handle millions of transactions per second",
                        "Support concurrent users from thousands to millions",
                        "Automatic resource allocation based on demand",
                        "Zero-downtime deployment and updates",
                        "Geographic load distribution and edge computing",
                        "Elastic infrastructure with cost optimization"
                    ].map((capability, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{capability}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our solutions have successfully scaled from <span className="font-semibold">startup to processing $1B+ in transactions</span>.
                    </p>
                </div>
            </>
        ),
    },
];
