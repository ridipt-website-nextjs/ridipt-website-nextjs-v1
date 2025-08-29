import { 
    Users, Shield, Settings, Brain, CheckCircle, Globe, 
    Zap, BarChart, Smartphone, ArrowRight, Cloud, Lock,
    TrendingUp, RefreshCw, BookOpen, Award
} from 'lucide-react';

export const hr_faq = [
    {
        title: "Can your HR solutions handle compliance with local labor laws?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Our solutions are designed to ensure compliance with local and international labor laws:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Automated Compliance:</span>
                            <p className="text-red-800 mt-1">Real-time monitoring and automated alerts for compliance requirements across multiple jurisdictions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <BarChart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Regulatory Updates:</span>
                            <p className="text-blue-800 mt-1">Automatic system updates to reflect changes in labor laws and regulations.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Compliance Reporting:</span>
                            <p className="text-green-800 mt-1">Automated generation of compliance reports and audit trails for regulatory bodies.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Compliance Features Include:</h4>
                    {[
                        "GDPR and data protection compliance",
                        "Local labor law adherence (overtime, leave policies)",
                        "Tax compliance and statutory deductions",
                        "Equal employment opportunity tracking",
                        "Workplace safety regulation compliance",
                        "Multi-country compliance management"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        Our compliance solutions maintain <span className="font-semibold">100% regulatory adherence</span> across all client implementations.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide tools for remote workforce management?",
        icon: <Globe className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> Our solutions include comprehensive features for managing remote and hybrid teams:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Cloud className="w-4 h-4 text-blue-500" />, text: "Cloud-based HR systems accessible from anywhere" },
                        { icon: <Smartphone className="w-4 h-4 text-green-500" />, text: "Mobile apps for time tracking and task management" },
                        { icon: <Users className="w-4 h-4 text-purple-500" />, text: "Virtual onboarding and training platforms" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Remote performance monitoring and evaluation" },
                        { icon: <Settings className="w-4 h-4 text-indigo-500" />, text: "Digital collaboration and communication tools" },
                        { icon: <Lock className="w-4 h-4 text-red-500" />, text: "Secure access controls and VPN integration" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Remote Work Features:</h4>
                    {[
                        "GPS-enabled attendance tracking for field employees",
                        "Virtual meeting integration with performance reviews",
                        "Remote employee engagement and pulse surveys",
                        "Digital document signing and approvals",
                        "Remote training delivery and certification tracking",
                        "Virtual team building and recognition programs"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our remote work solutions support <span className="font-semibold">95% employee productivity</span> in distributed teams.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How customizable are your HR systems?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Our HR solutions are <span className="font-semibold">fully customizable</span> to align with your organization's specific requirements:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Workflow Customization:</span>
                            <p className="text-purple-700 text-sm mt-1">Configure approval workflows, process automation, and business rules</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Dashboard Customization:</span>
                            <p className="text-blue-700 text-sm mt-1">Personalized dashboards and reports for different user roles</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Role-Based Access:</span>
                            <p className="text-green-700 text-sm mt-1">Flexible permission systems based on organizational hierarchy</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Zap className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Integration Options:</span>
                            <p className="text-orange-700 text-sm mt-1">Custom API development for third-party system integration</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Customization Options:</h4>
                    {[
                        "Custom fields and forms for employee data",
                        "Configurable leave policies and approval chains",
                        "Branded interface with company themes and logos",
                        "Custom notification and alert systems",
                        "Flexible reporting with custom metrics",
                        "Industry-specific compliance modules"
                    ].map((option, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{option}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our systems offer <span className="font-semibold">90%+ configuration flexibility</span> without custom development.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer AI-based recruitment tools?",
        icon: <Brain className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide advanced AI-driven tools to revolutionize your recruitment process:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Brain className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">AI Resume Screening:</span>
                            <p className="text-green-800 mt-1">Intelligent parsing and ranking of resumes based on job requirements and company preferences.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Predictive Analytics:</span>
                            <p className="text-blue-800 mt-1">Predict candidate success and cultural fit using machine learning algorithms.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Candidate Matching:</span>
                            <p className="text-purple-800 mt-1">Automated matching of candidates to job openings based on skills, experience, and preferences.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">AI Recruitment Features:</h4>
                    {[
                        "Natural language processing for job description optimization",
                        "Chatbot-powered candidate engagement and screening",
                        "Bias detection and removal in hiring processes",
                        "Automated interview scheduling and coordination",
                        "Skill assessment through AI-powered tests",
                        "Talent pool analysis and market insights"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our AI tools reduce <span className="font-semibold">time-to-hire by 50% and improve quality-of-hire by 40%</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can your solutions integrate with existing HR systems?",
        icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer seamless integration with existing systems and third-party platforms:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Settings className="w-4 h-4 text-blue-500" />, text: "API-first architecture for easy system integration" },
                        { icon: <Cloud className="w-4 h-4 text-green-500" />, text: "Cloud-based integration with popular HR platforms" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Real-time data synchronization across systems" },
                        { icon: <Lock className="w-4 h-4 text-red-500" />, text: "Secure data transfer with encryption protocols" },
                        { icon: <Zap className="w-4 h-4 text-orange-500" />, text: "Automated data migration and system setup" },
                        { icon: <RefreshCw className="w-4 h-4 text-indigo-500" />, text: "Bi-directional sync for consistent data updates" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Compatible Systems:</h4>
                    {[
                        "Payroll systems (ADP, Paychex, QuickBooks)",
                        "ERP platforms (SAP, Oracle, Microsoft Dynamics)",
                        "Communication tools (Slack, Microsoft Teams, Zoom)",
                        "Accounting software (Sage, Xero, FreshBooks)",
                        "Time tracking systems (Toggl, Clockify, RescueTime)",
                        "Learning platforms (Coursera, LinkedIn Learning, Udemy)"
                    ].map((system, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{system}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our integration success rate is <span className="font-semibold">98% with minimal downtime</span> during implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you offer training for HR teams using your solutions?",
        icon: <BookOpen className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide comprehensive training and support to ensure successful adoption:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <BookOpen className="w-4 h-4 text-blue-500" />, text: "Interactive online training modules and certifications" },
                        { icon: <Users className="w-4 h-4 text-green-500" />, text: "On-site training sessions for HR teams and administrators" },
                        { icon: <Smartphone className="w-4 h-4 text-purple-500" />, text: "Video tutorials and step-by-step user guides" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Hands-on workshops for system configuration" },
                        { icon: <Award className="w-4 h-4 text-indigo-500" />, text: "Certification programs for advanced users" },
                        { icon: <RefreshCw className="w-4 h-4 text-pink-500" />, text: "Ongoing refresher training for new features" },
                        { icon: <Globe className="w-4 h-4 text-cyan-500" />, text: "24/7 support helpdesk and knowledge base" },
                        { icon: <BarChart className="w-4 h-4 text-yellow-500" />, text: "Change management consultation services" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">Training Options:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Basic User Training</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Admin Certification</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">Advanced Analytics</span>
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm">System Integration</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our training programs achieve <span className="font-semibold">95% user adoption rate within 30 days</span> of implementation.
                    </p>
                </div>
            </>
        ),
    },
];
