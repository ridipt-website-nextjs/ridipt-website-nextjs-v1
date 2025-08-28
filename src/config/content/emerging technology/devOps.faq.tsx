import {
    GitBranch, TrendingUp, Settings, RefreshCw, Shield, Clock, DollarSign,
    Users, Zap, BarChart, CheckCircle, Package, Cloud, Code, Truck,
    TestTube, Scan, Eye, ArrowRight, Building, Bug
} from 'lucide-react';

export const devops_faq = [
    {
        title: "What is DevOps and why is it important?",
        icon: <GitBranch className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten development lifecycles:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <RefreshCw className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Continuous Integration/Deployment:</span>
                            <p className="text-blue-800 mt-1">Automated testing and deployment processes for faster, reliable releases.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Collaboration Culture:</span>
                            <p className="text-green-800 mt-1">Breaking down silos between development and operations teams.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Automation Focus:</span>
                            <p className="text-purple-800 mt-1">Automating repetitive tasks to reduce errors and increase efficiency.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Monitoring & Feedback:</span>
                            <p className="text-orange-800 mt-1">Continuous monitoring and feedback loops for rapid improvement.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        DevOps enables <span className="font-semibold">faster time-to-market and improved reliability</span> for software delivery.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the key benefits of implementing DevOps?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    DevOps implementation provides numerous advantages for organizations:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Faster deployment cycles with reduced time-to-market by 50-90%" },
                        { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Improved system reliability and reduced downtime incidents" },
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Lower operational costs through automation and efficiency gains" },
                        { icon: <Users className="w-4 h-4 text-purple-500" />, text: "Enhanced collaboration between development and operations teams" },
                        { icon: <RefreshCw className="w-4 h-4 text-indigo-500" />, text: "Faster recovery from failures with automated rollback capabilities" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Improved code quality through automated testing and reviews" },
                        { icon: <BarChart className="w-4 h-4 text-pink-500" />, text: "Better visibility and monitoring across the entire pipeline" },
                        { icon: <CheckCircle className="w-4 h-4 text-cyan-500" />, text: "Increased customer satisfaction through reliable service delivery" }
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
                            Organizations see <span className="font-semibold">200-300% improvement in deployment frequency</span> with DevOps adoption.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What tools and technologies do you use for DevOps?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We utilize industry-leading DevOps tools and technologies across the entire development and operations lifecycle:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Version Control & Collaboration:</span>
                            <p className="text-blue-700 text-sm mt-1">Git, GitHub, GitLab, Bitbucket, Azure DevOps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <RefreshCw className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">CI/CD Pipelines:</span>
                            <p className="text-green-700 text-sm mt-1">Jenkins, GitLab CI, GitHub Actions, Azure Pipelines, CircleCI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Package className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Containerization & Orchestration:</span>
                            <p className="text-purple-700 text-sm mt-1">Docker, Kubernetes, OpenShift, Docker Swarm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Cloud className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Cloud Platforms:</span>
                            <p className="text-orange-700 text-sm mt-1">AWS, Azure, Google Cloud Platform, DigitalOcean</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Code className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Infrastructure as Code:</span>
                            <p className="text-indigo-700 text-sm mt-1">Terraform, Ansible, CloudFormation, Pulumi</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Monitoring & Logging:</span>
                            <p className="text-red-700 text-sm mt-1">Prometheus, Grafana, ELK Stack, Datadog, New Relic</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We select tools based on <span className="font-semibold">your specific needs, existing infrastructure, and scalability requirements</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is CI/CD and how does it benefit my organization?",
        icon: <RefreshCw className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    CI/CD (Continuous Integration/Continuous Deployment) is a core DevOps practice that automates software delivery:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Continuous Integration (CI):</span>
                            <p className="text-blue-800 mt-1">Automatically builds, tests, and validates code changes as they're committed.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Truck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Continuous Deployment (CD):</span>
                            <p className="text-green-800 mt-1">Automatically deploys validated changes to production environments.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <TestTube className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Automated Testing:</span>
                            <p className="text-purple-800 mt-1">Comprehensive test suites run automatically to ensure code quality.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">CI/CD Benefits:</h4>
                    {[
                        "Faster feature delivery with automated deployment pipelines",
                        "Reduced manual errors through automation",
                        "Early bug detection with continuous testing",
                        "Consistent deployments across all environments",
                        "Rollback capabilities for quick issue resolution",
                        "Better code quality through automated reviews and testing"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        CI/CD reduces deployment time from <span className="font-semibold">hours/days to minutes</span> while improving reliability.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How does DevOps improve security (DevSecOps)?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    DevSecOps integrates security practices throughout the DevOps pipeline, making security everyone's responsibility:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Security by Design:</span>
                            <p className="text-red-800 mt-1">Security considerations integrated from the earliest stages of development.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Scan className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Automated Security Testing:</span>
                            <p className="text-blue-800 mt-1">Continuous security scanning and vulnerability assessments in CI/CD pipelines.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Continuous Monitoring:</span>
                            <p className="text-green-800 mt-1">Real-time security monitoring and threat detection across infrastructure.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">DevSecOps Practices:</h4>
                    {[
                        "Static Application Security Testing (SAST) in development",
                        "Dynamic Application Security Testing (DAST) in staging",
                        "Container and infrastructure security scanning",
                        "Compliance automation and policy enforcement",
                        "Security incident response automation",
                        "Identity and access management integration",
                        "Secrets management and encryption at rest/transit"
                    ].map((practice, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{practice}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        DevSecOps reduces security vulnerabilities by <span className="font-semibold">60-80%</span> through early detection and prevention.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the typical timeline for DevOps implementation?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    DevOps implementation timeline varies based on <span className="font-semibold">organization size, current infrastructure, and transformation scope</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Initial Assessment & Planning:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Infrastructure audit, tool selection, strategy development</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Pilot Implementation:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">4–8 weeks</span>
                            <p className="text-blue-700 text-sm mt-1">Setting up CI/CD for one application, basic automation</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Full-Scale Rollout:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">3–6 months</span>
                            <p className="text-purple-700 text-sm mt-1">Enterprise-wide implementation, culture transformation</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <RefreshCw className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Optimization & Maturity:</span>
                            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">6–12 months</span>
                            <p className="text-orange-700 text-sm mt-1">Advanced automation, monitoring, continuous improvement</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Implementation Phases:</h4>
                    {[
                        "Current state assessment and gap analysis",
                        "DevOps strategy and roadmap development",
                        "Tool selection and infrastructure setup",
                        "CI/CD pipeline implementation",
                        "Team training and culture transformation",
                        "Monitoring and security integration",
                        "Continuous optimization and scaling"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Most organizations see <span className="font-semibold">measurable improvements within 2-3 months</span> of implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of DevOps consulting and implementation?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    DevOps implementation costs vary based on organization size, complexity, and scope of transformation:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Small Organizations (1-10 developers):</span>
                            <p className="text-green-800 mt-1">$20,000 - $50,000 for basic CI/CD and automation setup</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Organizations (10-100 developers):</span>
                            <p className="text-blue-800 mt-1">$50,000 - $200,000 for comprehensive DevOps transformation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Building className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Organizations (100+ developers):</span>
                            <p className="text-purple-800 mt-1">$200,000+ for enterprise-scale DevOps implementation</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">ROI and Cost Savings:</h4>
                    {[
                        "40-60% reduction in deployment time and effort",
                        "50-80% decrease in production incidents and downtime",
                        "30-50% improvement in development productivity",
                        "Reduced infrastructure costs through automation",
                        "Lower maintenance costs with improved monitoring",
                        "Faster time-to-market leading to increased revenue"
                    ].map((saving, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <TrendingUp className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{saving}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Most organizations achieve <span className="font-semibold">200-300% ROI within 12-18 months</span> of DevOps implementation.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide ongoing DevOps support and maintenance?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">DevOps support and maintenance services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Continuous integration and deployment pipeline maintenance" },
                        { icon: <BarChart className="w-4 h-4 text-green-500" />, text: "24/7 monitoring and alerting system management" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security updates and vulnerability assessments" },
                        { icon: <Cloud className="w-4 h-4 text-purple-500" />, text: "Infrastructure scaling and capacity planning" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Tool updates and technology stack modernization" },
                        { icon: <TestTube className="w-4 h-4 text-indigo-500" />, text: "Performance optimization and bottleneck resolution" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "Team training and best practices coaching" },
                        { icon: <Bug className="w-4 h-4 text-cyan-500" />, text: "Incident response and troubleshooting support" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Support Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Support</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Premium Care</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Support</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our support ensures your DevOps infrastructure stays <span className="font-semibold">optimized, secure, and continuously improving</span>.
                    </p>
                </div>
            </>
        ),
    }
];

export const all_service_faqs = {
    devops_consulting: devops_faq,
};