import { 
    Clock, Code, Settings, Building, Shield, Users, 
    CheckCircle, ArrowRight, TrendingUp, Zap, Globe, Lock
} from 'lucide-react';

export const custom_software_faq = [
    {
        title: "How long does it take to develop custom software?",
        icon: <Clock className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    The timeline depends on the complexity and scope of the project:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Applications:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 months</span>
                            <p className="text-green-700 text-sm mt-1">Basic web apps, simple mobile apps, small business tools</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">4–8 months</span>
                            <p className="text-blue-700 text-sm mt-1">CRM/ERP systems, e-commerce platforms, data analytics tools</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Solutions:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">8–18+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Large-scale enterprise software, AI/ML solutions, complex integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        We provide <span className="font-semibold">detailed project timelines</span> after discussing your specific requirements.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What technologies do you use for custom development?",
        icon: <Code className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We work with a wide range of modern technologies to deliver robust solutions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Frontend Technologies:</span>
                            <p className="text-blue-700 text-sm mt-1">React.js, Vue.js, Angular, Next.js, TypeScript</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Globe className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Backend Technologies:</span>
                            <p className="text-green-700 text-sm mt-1">Node.js, Python, Java, .NET, PHP, Ruby on Rails</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Mobile Development:</span>
                            <p className="text-purple-700 text-sm mt-1">React Native, Flutter, Swift (iOS), Kotlin (Android)</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Cloud & DevOps:</span>
                            <p className="text-orange-700 text-sm mt-1">AWS, Azure, Google Cloud, Docker, Kubernetes</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Technology selection is based on <span className="font-semibold">your specific requirements and scalability needs</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you integrate new software with my existing systems?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in seamless integration with existing tools and systems:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Settings className="w-4 h-4 text-blue-500" />, text: "API development for connecting disparate systems" },
                        { icon: <Globe className="w-4 h-4 text-green-500" />, text: "Database integration and data migration services" },
                        { icon: <Zap className="w-4 h-4 text-purple-500" />, text: "Real-time data synchronization and workflow automation" },
                        { icon: <Lock className="w-4 h-4 text-red-500" />, text: "Secure data transfer with encryption protocols" },
                        { icon: <CheckCircle className="w-4 h-4 text-orange-500" />, text: "Legacy system modernization and integration" },
                        { icon: <TrendingUp className="w-4 h-4 text-indigo-500" />, text: "Cloud-based integration solutions" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-purple-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Integration Capabilities:</h4>
                    {[
                        "ERP systems (SAP, Oracle, Microsoft Dynamics)",
                        "CRM platforms (Salesforce, HubSpot, Pipedrive)",
                        "Payment gateways and financial systems",
                        "Communication tools (Slack, Teams, Zoom)",
                        "Analytics platforms (Google Analytics, Tableau)",
                        "Third-party APIs and web services"
                    ].map((capability, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{capability}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our integration success rate is <span className="font-semibold">98% with minimal downtime</span> during implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What industries do you serve with your custom solutions?",
        icon: <Building className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    We serve a wide range of industries with specialized custom software solutions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Building className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Healthcare & Life Sciences:</span>
                            <p className="text-blue-700 text-sm mt-1">EMR/EHR systems, patient management, telemedicine platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Financial Services:</span>
                            <p className="text-green-700 text-sm mt-1">Banking platforms, FinTech solutions, trading systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Globe className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Retail & E-Commerce:</span>
                            <p className="text-purple-700 text-sm mt-1">Online marketplaces, inventory management, POS systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Manufacturing & Logistics:</span>
                            <p className="text-orange-700 text-sm mt-1">Supply chain management, IoT solutions, automation systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Users className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Education & Training:</span>
                            <p className="text-indigo-700 text-sm mt-1">LMS platforms, student management, online learning tools</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Additional Industries:</h4>
                    {[
                        "Real Estate and Property Management",
                        "Transportation and Automotive",
                        "Media and Entertainment",
                        "Government and Public Sector",
                        "Non-profit Organizations",
                        "Professional Services"
                    ].map((industry, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{industry}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        We adapt our expertise to <span className="font-semibold">any industry's unique requirements</span> and challenges.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure the security of custom software?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We follow industry best practices for data security and implement comprehensive protection measures:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Security-First Development:</span>
                            <p className="text-red-800 mt-1">Secure coding practices embedded throughout the development lifecycle.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Encryption:</span>
                            <p className="text-blue-800 mt-1">End-to-end encryption for data in transit and at rest using industry standards.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Compliance Standards:</span>
                            <p className="text-green-800 mt-1">GDPR, HIPAA, SOC 2, PCI DSS compliance based on industry requirements.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Measures Include:</h4>
                    {[
                        "Regular security audits and vulnerability assessments",
                        "Multi-factor authentication and access controls",
                        "Secure API design and implementation",
                        "Regular security updates and patch management",
                        "Data backup and disaster recovery protocols",
                        "Penetration testing and security monitoring"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our security framework maintains <span className="font-semibold">100% compliance</span> across all industry standards.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing support and maintenance?",
        icon: <Users className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer dedicated support and maintenance services:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Settings className="w-4 h-4 text-blue-500" />, text: "24/7 system monitoring and performance optimization" },
                        { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Regular updates and feature enhancements" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security patches and vulnerability fixes" },
                        { icon: <TrendingUp className="w-4 h-4 text-purple-500" />, text: "Performance analytics and optimization" },
                        { icon: <Users className="w-4 h-4 text-orange-500" />, text: "User training and documentation" },
                        { icon: <Globe className="w-4 h-4 text-indigo-500" />, text: "Infrastructure scaling and capacity planning" },
                        { icon: <CheckCircle className="w-4 h-4 text-pink-500" />, text: "Bug fixes and technical troubleshooting" },
                        { icon: <Lock className="w-4 h-4 text-cyan-500" />, text: "Backup management and disaster recovery" }
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
                        Our support ensures <span className="font-semibold">99.9% uptime</span> and keeps your software updated and optimized.
                    </p>
                </div>
            </>
        ),
    },
];
