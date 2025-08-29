import { 
    Heart, Shield, Users, Clock, DollarSign, Settings, Database,
    Building2, Smartphone, Monitor, Lock, CheckCircle, ArrowRight,
    TrendingUp, Eye, RefreshCw, Zap, MessageSquare, Cloud,
    Activity, FileText, Calendar, BarChart, Globe, Headphones
} from 'lucide-react';

export const healthcare_faq = [
    {
        title: "What healthcare solutions do you provide?",
        icon: <Heart className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    We provide comprehensive healthcare technology solutions designed to improve patient care and streamline operations:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Database className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Healthcare Management Systems:</span>
                            <p className="text-blue-800 mt-1">Patient records, appointment scheduling, billing, and workflow management.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Monitor className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Telemedicine Platforms:</span>
                            <p className="text-green-800 mt-1">Virtual consultations, remote monitoring, and telehealth solutions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Smartphone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Patient Engagement Apps:</span>
                            <p className="text-purple-800 mt-1">Mobile health apps, patient portals, and wellness management tools.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Data Analytics & Reporting:</span>
                            <p className="text-orange-800 mt-1">Healthcare insights, predictive analytics, and performance dashboards.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Additional Services:</h4>
                    {[
                        "EHR/EMR system development and integration",
                        "Healthcare compliance management systems",
                        "Medical device integration and IoT solutions",
                        "Clinical decision support systems",
                        "Healthcare staff training and support"
                    ].map((service, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{service}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                    <p className="text-red-800">
                        Our solutions help <span className="font-semibold">improve patient outcomes by 30-40% and reduce operational costs</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure HIPAA compliance and data security?",
        icon: <Shield className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We prioritize <span className="font-semibold">HIPAA compliance and robust data security</span> in all our healthcare solutions:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">HIPAA Compliance:</span>
                            <p className="text-green-800 mt-1">Complete adherence to HIPAA regulations for patient data protection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Encryption:</span>
                            <p className="text-blue-800 mt-1">End-to-end encryption for data in transit and at rest.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Eye className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Access Controls:</span>
                            <p className="text-purple-800 mt-1">Role-based access, multi-factor authentication, and audit trails.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Cloud className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Secure Infrastructure:</span>
                            <p className="text-orange-800 mt-1">HIPAA-compliant cloud hosting and secure data centers.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Measures:</h4>
                    {[
                        "Regular security audits and penetration testing",
                        "Business Associate Agreements (BAA) with all vendors",
                        "Data backup and disaster recovery protocols",
                        "Staff security training and awareness programs",
                        "Incident response and breach notification procedures",
                        "Continuous monitoring and threat detection"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        We maintain <span className="font-semibold">100% HIPAA compliance</span> with regular audits and security certifications.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is telemedicine and how can it benefit my healthcare practice?",
        icon: <Monitor className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Telemedicine enables healthcare providers to deliver care remotely through digital technologies:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Monitor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Virtual Consultations:</span>
                            <p className="text-blue-800 mt-1">Video calls, chat messaging, and remote patient assessments.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Remote Monitoring:</span>
                            <p className="text-green-800 mt-1">Real-time health data tracking and chronic disease management.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Smartphone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Mobile Health Apps:</span>
                            <p className="text-purple-800 mt-1">Patient engagement tools and health tracking applications.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Benefits for Healthcare Practices:</h4>
                    {[
                        "Increased patient access and convenience",
                        "Reduced overhead costs and office space requirements",
                        "Improved patient satisfaction and retention",
                        "Enhanced care coordination and follow-up",
                        "Better chronic disease management",
                        "Expanded geographic reach and market coverage"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Telemedicine can <span className="font-semibold">increase patient capacity by 50-70%</span> while reducing costs.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does it take to implement healthcare software solutions?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Implementation timelines vary based on <span className="font-semibold">solution complexity, integration requirements, and organizational readiness</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Patient Portal & Mobile Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">6–12 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic patient engagement and scheduling applications</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Telemedicine Platforms:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">3–6 months</span>
                            <p className="text-blue-700 text-sm mt-1">Virtual consultation systems with basic integrations</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">EHR/EMR Systems:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">6–18 months</span>
                            <p className="text-purple-700 text-sm mt-1">Comprehensive electronic health record systems</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Enterprise Healthcare Platforms:</span>
                            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">12–24+ months</span>
                            <p className="text-orange-700 text-sm mt-1">Hospital-wide systems with complex integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Implementation Phases:</h4>
                    {[
                        "Requirements analysis and system design (2-4 weeks)",
                        "Development and testing (4-16 weeks)",
                        "Integration with existing systems (2-8 weeks)",
                        "Staff training and change management (2-6 weeks)",
                        "Pilot testing and validation (2-4 weeks)",
                        "Full deployment and go-live support (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Proper planning and stakeholder engagement can <span className="font-semibold">reduce implementation time by 30-40%</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the costs of healthcare software development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Healthcare software costs vary based on complexity, compliance requirements, and integration needs:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Patient Apps & Portals:</span>
                            <p className="text-green-800 mt-1">$30,000 - $80,000 for mobile health apps and patient portals</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Monitor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Telemedicine Solutions:</span>
                            <p className="text-blue-800 mt-1">$80,000 - $200,000 for telehealth platforms and virtual care systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Database className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">EHR/EMR Systems:</span>
                            <p className="text-purple-800 mt-1">$200,000 - $500,000+ for comprehensive electronic health records</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Building2 className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Enterprise Healthcare Platforms:</span>
                            <p className="text-orange-800 mt-1">$500,000+ for hospital management and integrated care systems</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost Factors Include:</h4>
                    {[
                        "HIPAA compliance and security implementation",
                        "Integration with existing healthcare systems",
                        "Medical device connectivity and IoT features",
                        "Advanced analytics and reporting capabilities",
                        "Multi-platform development (web, mobile, desktop)",
                        "Ongoing maintenance and regulatory updates",
                        "Staff training and change management support"
                    ].map((factor, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{factor}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Healthcare software typically shows <span className="font-semibold">200-400% ROI through improved efficiency</span> and patient outcomes.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure interoperability between healthcare systems?",
        icon: <Globe className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We implement industry-standard protocols and frameworks to ensure seamless data exchange between healthcare systems:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">FHIR Standards:</span>
                            <p className="text-blue-800 mt-1">Fast Healthcare Interoperability Resources for modern data exchange.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <MessageSquare className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">HL7 Integration:</span>
                            <p className="text-green-800 mt-1">Health Level Seven protocols for clinical and administrative data.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Cloud className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">API Development:</span>
                            <p className="text-purple-800 mt-1">RESTful APIs and web services for system connectivity.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Database className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Data Mapping:</span>
                            <p className="text-orange-800 mt-1">Standardized data formats and terminology mapping (SNOMED CT, ICD-10).</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Interoperability Benefits:</h4>
                    {[
                        "Seamless patient data sharing across providers",
                        "Reduced data silos and improved care coordination",
                        "Enhanced clinical decision-making with complete patient history",
                        "Improved patient safety through better information access",
                        "Reduced administrative burden and data entry duplication",
                        "Better population health management and analytics"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Proper interoperability can <span className="font-semibold">reduce healthcare costs by 15-20%</span> through improved efficiency.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide training and ongoing support for healthcare staff?",
        icon: <Users className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide comprehensive <span className="font-semibold text-blue-700">training and ongoing support</span> for healthcare teams:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Users className="w-4 h-4 text-blue-500" />, text: "Customized training programs for different user roles" },
                        { icon: <Monitor className="w-4 h-4 text-green-500" />, text: "Interactive training sessions and hands-on workshops" },
                        { icon: <FileText className="w-4 h-4 text-purple-500" />, text: "Comprehensive user manuals and documentation" },
                        { icon: <Headphones className="w-4 h-4 text-orange-500" />, text: "24/7 technical support and help desk services" },
                        { icon: <RefreshCw className="w-4 h-4 text-indigo-500" />, text: "Regular system updates and feature training" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "HIPAA compliance and security training" },
                        { icon: <BarChart className="w-4 h-4 text-cyan-500" />, text: "Performance monitoring and optimization guidance" },
                        { icon: <MessageSquare className="w-4 h-4 text-pink-500" />, text: "Dedicated account management and consultation" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Training Delivery Methods:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">On-site Training</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Virtual Sessions</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Self-paced Learning</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our training programs ensure <span className="font-semibold">95%+ user adoption rates</span> and smooth system transitions.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you handle healthcare regulatory compliance and updates?",
        icon: <FileText className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We maintain strict compliance with healthcare regulations and ensure systems stay current with regulatory changes:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">HIPAA Compliance:</span>
                            <p className="text-green-800 mt-1">Continuous adherence to Health Insurance Portability and Accountability Act.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <FileText className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">FDA Regulations:</span>
                            <p className="text-blue-800 mt-1">Medical device software compliance and quality system regulations.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Globe className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">International Standards:</span>
                            <p className="text-purple-800 mt-1">ISO 27001, SOC 2, and other global healthcare IT standards.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Compliance Management:</h4>
                    {[
                        "Regular compliance audits and assessments",
                        "Automatic system updates for regulatory changes",
                        "Documentation and audit trail maintenance",
                        "Staff training on compliance requirements",
                        "Risk assessment and mitigation strategies",
                        "Incident reporting and breach management"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our compliance expertise helps healthcare organizations <span className="font-semibold">avoid costly violations and maintain accreditation</span>.
                    </p>
                </div>
            </>
        ),
    }
];
