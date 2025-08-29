import { 
    GraduationCap, Users, Shield, Zap, Globe, Settings, 
    CheckCircle, BookOpen, Smartphone, Cloud, BarChart, 
    Lock, RefreshCw, ArrowRight 
} from 'lucide-react';

export const education_faq = [
    {
        title: "How can Ridipt help modernize my educational institution?",
        icon: <GraduationCap className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Ridipt offers comprehensive technology solutions designed to transform educational institutions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <BookOpen className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Learning Management Systems:</span>
                            <p className="text-blue-800 mt-1">Robust platforms for course management, student tracking, and content delivery.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Mobile Learning Apps:</span>
                            <p className="text-green-800 mt-1">Enable students to learn on-the-go with interactive mobile applications.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Administrative Systems:</span>
                            <p className="text-purple-800 mt-1">Streamline admissions, enrollment, and administrative processes.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Our solutions help institutions <span className="font-semibold">increase efficiency by 40-60%</span> and improve student engagement.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Are your solutions scalable for large universities?",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> Our education solutions are designed to scale seamlessly with your institution's growth:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Users className="w-4 h-4 text-blue-500" />, text: "Support for thousands of concurrent users and students" },
                        { icon: <Cloud className="w-4 h-4 text-green-500" />, text: "Cloud-native architecture for unlimited scalability" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Performance monitoring and auto-scaling capabilities" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Modular design allowing gradual feature expansion" },
                        { icon: <Globe className="w-4 h-4 text-indigo-500" />, text: "Multi-campus and multi-location support" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "High-performance infrastructure for peak usage periods" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            Successfully deployed for universities with <span className="font-semibold">100,000+ students</span>.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Can you integrate your solutions with our existing tools?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our systems are built for seamless integration with existing educational tools and platforms:
                </div>

                <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Integration Capabilities:</h4>
                    {[
                        "Student Information Systems (SIS) integration",
                        "Learning Management System (LMS) connectivity",
                        "Payment gateway and financial system integration",
                        "Google Workspace and Microsoft 365 compatibility",
                        "Library management system integration",
                        "Third-party assessment and proctoring tools",
                        "Video conferencing platforms (Zoom, Teams, etc.)",
                        "Custom API development for legacy systems"
                    ].map((capability, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{capability}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our integration approach ensures <span className="font-semibold">minimal disruption to existing workflows</span> during implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure data security and compliance?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    Data security and regulatory compliance are top priorities in our education solutions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">FERPA Compliance:</span>
                            <p className="text-red-800 mt-1">Full compliance with Family Educational Rights and Privacy Act for student data protection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">GDPR Compliance:</span>
                            <p className="text-blue-800 mt-1">European data protection standards implementation for international institutions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Advanced Security:</span>
                            <p className="text-green-800 mt-1">Multi-factor authentication, encryption, and regular security audits.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Measures:</h4>
                    {[
                        "End-to-end data encryption in transit and at rest",
                        "Role-based access control and permissions",
                        "Regular security audits and penetration testing",
                        "Secure backup and disaster recovery systems",
                        "SOC 2 Type II compliance certification",
                        "24/7 security monitoring and incident response"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        We maintain <span className="font-semibold">99.9% uptime</span> and zero data breach record across all educational clients.
                    </p>
                </div>
            </>
        ),
    },
];
