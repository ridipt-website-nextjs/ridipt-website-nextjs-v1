import {
    Code,
    Clock,
    Settings,
    Smartphone,
    RefreshCw,
    Search,
    Shield,
    DollarSign,
    Plug,
    Server,
    Monitor,
    Palette,
    TrendingUp,
    CheckCircle,
    ArrowRight,
    Cloud,
    TestTube,
    Brain,
    Zap,
    Users,
    Target,
    Layers,
    Database,
    Lock,
    GitBranch,
    BarChart,
    Bot,
    Eye,
    Cpu,
    Globe,
    Activity,
    FileText,
    Camera,
    MessageSquare,
    Image,
    Link,
    Bug,
    AlertTriangle,
    Info,
    GitCompare,
    BookOpen,
    Briefcase,
    Building,
    Edit,
    Truck,
    CreditCard,
    Puzzle,
    GraduationCap,
    FileCheck,
    Wifi,
    Bell,
    Download,
    Wrench,
    Store,
    Crown,
    Fingerprint,
    MapPin,
    Apple,
    Package
} from 'lucide-react';

export const web_dev_faq = [
    {
        title: "What is web development?",
        icon: <Code className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Web development is the process of creating, designing, deploying, and maintaining websites and web applications.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Monitor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Front-End Development (Client-Side):</span>
                            <p className="text-blue-800 mt-1">Focuses on everything users see and interact with (UI/UX design, layout, colors, typography, responsive design, accessibility, animations, etc.).</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Server className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Back-End Development (Server-Side):</span>
                            <p className="text-green-800 mt-1">Involves business logic, database management, authentication, APIs, security, and server configurations that make the website function properly.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Full-Stack Development:</span>
                            <p className="text-purple-800 mt-1">A combination of both, where a developer handles the complete development cycle from front-end to back-end.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Web development ensures that a website is not just visually attractive but also <span className="font-semibold">fast, secure, scalable, SEO-friendly, and user-focused</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does it take to develop a website?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    The development time depends on <span className="font-semibold">complexity, number of features, content, design requirements, and revisions</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Basic Websites (Portfolios, Blogs, Landing Pages):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–4 weeks</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Business Websites / E-Commerce:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">1–3 months</span>
                            <p className="text-blue-700 text-sm mt-1">With custom design, payment systems, product management, etc.</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Applications (Dashboards, SaaS, Marketplaces):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">3–6+ months</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Factors like <span className="font-semibold">client feedback cycles, design revisions, third-party integrations, and testing</span> also affect delivery time.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What technologies do you use for web development?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We use a wide range of modern technologies to ensure performance, scalability, and maintainability:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Monitor className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">Front-End:</span>
                        </div>
                        <p className="text-blue-800 text-sm">HTML5, CSS3, JavaScript (ES6+), React, Angular, Vue, Next.js, Tailwind CSS, Bootstrap</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Server className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">Back-End:</span>
                        </div>
                        <p className="text-green-800 text-sm">Node.js (Express/NestJS), PHP (Laravel/CodeIgniter), Python (Django/Flask), Ruby on Rails</p>
                    </div>

                    <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-yellow-600" />
                            <span className="font-semibold text-yellow-900">Databases:</span>
                        </div>
                        <p className="text-yellow-800 text-sm">MySQL, PostgreSQL, MongoDB, Firebase, Redis</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Server className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">Hosting & Deployment:</span>
                        </div>
                        <p className="text-purple-800 text-sm">AWS, Google Cloud, Azure, Netlify, Vercel, DigitalOcean</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        The exact stack is chosen based on <span className="font-semibold">project requirements, budget, scalability needs, and performance goals</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide responsive and mobile-friendly websites?",
        icon: <Smartphone className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes ✅. Every website we develop is mobile-first and responsive.</span>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-green-800">Adapts perfectly to all screen sizes (desktop, laptop, tablet, mobile)</p>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <p className="text-blue-800">We use <span className="font-semibold">media queries, flexible layouts, fluid images, and modern frameworks</span> like Tailwind CSS or Bootstrap</p>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <p className="text-purple-800">Optimized touch interactions for mobile devices</p>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <p className="text-yellow-800">Cross-browser testing (Chrome, Safari, Edge, Firefox)</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800 font-medium">
                        Result: <span className="font-semibold">Better user experience, longer engagement, and improved SEO rankings</span>
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you redesign or improve my existing website?",
        icon: <RefreshCw className="w-5 h-5 text-indigo-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Absolutely ✅. We specialize in website revamps and upgrades:</span>
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                        <Palette className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-pink-900">UI/UX Redesign:</span>
                            <p className="text-pink-800 mt-1">Giving your site a fresh, modern, and engaging look</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Performance Optimization:</span>
                            <p className="text-blue-800 mt-1">Faster load times, image compression, caching, and code refactoring</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Feature Enhancements:</span>
                            <p className="text-green-800 mt-1">Adding e-commerce functionality, chatbots, dashboards, or booking systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Search className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">SEO & Responsiveness:</span>
                            <p className="text-purple-800 mt-1">Ensuring your website is mobile-friendly and search engine optimized</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                    <p className="text-indigo-800">
                        <span className="font-semibold">Goal:</span> To make your site <span className="font-semibold">more user-friendly, future-proof, and aligned with your business objectives</span>
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Will my website be SEO-friendly?",
        icon: <Search className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes 👍. We follow industry-standard SEO best practices during development:</span>
                </div>

                <div className="space-y-2">
                    {[
                        "Semantic HTML structure for better crawlability",
                        "Optimized loading speed (lazy loading, code splitting, image compression)",
                        "Mobile-first responsive design",
                        "Proper use of meta tags, schema markup, alt attributes, and headings",
                        "Integration with Google Analytics & Google Search Console"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            <ArrowRight className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            These ensure <span className="font-semibold">better rankings, higher organic traffic, and improved online visibility</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide website maintenance after launch?",
        icon: <Shield className="w-5 h-5 text-emerald-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes.</span> We offer <span className="font-semibold text-emerald-700">ongoing website maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Regular security patches and updates" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Bug fixes and error monitoring" },
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Content management and updates" },
                        { icon: <TrendingUp className="w-4 h-4 text-green-500" />, text: "Performance optimization and speed checks" },
                        { icon: <Server className="w-4 h-4 text-purple-500" />, text: "Backup and disaster recovery solutions" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <p className="text-emerald-800">
                        You can opt for <span className="font-semibold">monthly or yearly maintenance packages</span> depending on your needs.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How much does web development cost?",
        icon: <DollarSign className="w-5 h-5 text-green-600" />,
        description: (
            <>
                <div className="mb-4">
                    Website cost depends on <span className="font-semibold">scope, features, design complexity, and integrations</span>.
                </div>

                <div className="space-y-3">
                    <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            <span className="font-semibold text-green-900">Basic Websites:</span>
                        </div>
                        <p className="text-green-800">Simple portfolio or informational sites → <span className="font-medium">Low cost</span></p>
                    </div>

                    <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                            <span className="font-semibold text-blue-900">Business Websites / E-Commerce:</span>
                        </div>
                        <p className="text-blue-800">Medium investment depending on design and functionality</p>
                    </div>

                    <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                            <span className="font-semibold text-purple-900">Custom Platforms / Web Apps:</span>
                        </div>
                        <p className="text-purple-800">High investment due to complexity, scalability, and advanced integrations</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        After understanding your requirements, we provide a <span className="font-semibold">detailed custom quote</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you integrate third-party services into my website?",
        icon: <Plug className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes ✅. We can integrate various third-party services such as:</span>
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Payment Gateways:</span>
                            <p className="text-green-700 text-sm mt-1">Stripe, PayPal, Razorpay, etc.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Social Media APIs:</span>
                            <p className="text-blue-700 text-sm mt-1">Facebook, Twitter, Instagram, LinkedIn</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Business Systems:</span>
                            <p className="text-purple-700 text-sm mt-1">CRM & ERP systems for business automation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Plug className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Communication Tools:</span>
                            <p className="text-orange-700 text-sm mt-1">Chatbots, live chat systems, and email marketing tools</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Search className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Analytics & Auth:</span>
                            <p className="text-indigo-700 text-sm mt-1">Maps, analytics, and third-party authentication systems</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        These integrations enhance functionality and <span className="font-semibold">save development time & costs</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide hosting and domain services?",
        icon: <Server className="w-5 h-5 text-blue-600" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes.</span> We assist with the complete <span className="font-semibold text-blue-700">hosting and domain setup</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Domain Services:</span>
                            <p className="text-blue-700 text-sm mt-1">Domain name registration and DNS setup</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Server className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Hosting Options:</span>
                            <p className="text-green-700 text-sm mt-1">Shared, VPS, cloud hosting solutions</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Security & Config:</span>
                            <p className="text-purple-700 text-sm mt-1">Server configuration and SSL certificates for security</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Monitoring:</span>
                            <p className="text-orange-700 text-sm mt-1">Deployment & monitoring for uptime and performance</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg border-l-4 border-indigo-500">
                        <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Expert Guidance:</span>
                            <p className="text-indigo-700 text-sm mt-1">Selecting the <span className="font-semibold">best hosting providers</span> for budget and scalability needs</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2">
                        <Server className="w-5 h-5 text-blue-600" />
                        <p className="text-blue-800 font-medium">
                            This ensures your website is <span className="font-semibold">live, secure, and scalable</span>.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
];


// Mobile Development FAQs
export const mobile_dev_faq = [
    {
        title: "What is mobile app development?",
        icon: <Smartphone className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Mobile app development is the process of creating software applications that run on mobile devices like smartphones and tablets.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Smartphone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Native Development:</span>
                            <p className="text-blue-800 mt-1">Platform-specific apps (iOS/Swift, Android/Kotlin) for optimal performance and native features.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Code className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Cross-Platform Development:</span>
                            <p className="text-green-800 mt-1">Single codebase for multiple platforms using React Native, Flutter, or Xamarin.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Globe className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Progressive Web Apps (PWA):</span>
                            <p className="text-purple-800 mt-1">Web-based apps that work like native apps with offline capabilities and push notifications.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        We focus on creating <span className="font-semibold">user-friendly, performant, and scalable mobile applications</span> that deliver exceptional user experiences.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Which platforms do you develop apps for?",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We develop applications for all major mobile platforms and deployment methods:
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">iOS Development:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">Swift, SwiftUI, Objective-C</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Android Development:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">Kotlin, Java, Jetpack Compose</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Cross-Platform:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">React Native, Flutter, Expo</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Platform choice depends on <span className="font-semibold">target audience, budget, timeline, and specific feature requirements</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does mobile app development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline varies based on <span className="font-semibold">app complexity, features, platforms, and design requirements</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Apps (Basic functionality):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">2–3 months</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">4–6 months</span>
                            <p className="text-blue-700 text-sm mt-1">E-commerce, social features, API integrations</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Apps (Enterprise/SaaS):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">6+ months</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Additional time needed for <span className="font-semibold">app store approval, testing, and deployment across multiple platforms</span>.
                    </p>
                </div>
            </>
        ),
    }
];

// UI/UX Design FAQs
export const uiux_faq = [
    {
        title: "What is UI/UX Design?",
        icon: <Palette className="w-5 h-5 text-pink-500" />,
        description: (
            <>
                <div className="mb-4">
                    UI/UX Design focuses on creating intuitive, accessible, and visually appealing digital experiences.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                        <Eye className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-pink-900">UI Design (User Interface):</span>
                            <p className="text-pink-800 mt-1">Visual elements, layouts, typography, colors, buttons, and interactive components.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">UX Design (User Experience):</span>
                            <p className="text-blue-800 mt-1">User research, information architecture, wireframing, prototyping, and usability testing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Target className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Design Strategy:</span>
                            <p className="text-green-800 mt-1">User personas, journey mapping, competitive analysis, and design systems.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Our goal is to create designs that are <span className="font-semibold">beautiful, functional, and solve real user problems</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What tools do you use for UI/UX design?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We use industry-leading design tools and methodologies for creating exceptional user experiences:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Palette className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">Design Tools:</span>
                        </div>
                        <p className="text-blue-800 text-sm">Figma, Adobe XD, Sketch, Adobe Creative Suite, Framer</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">Research & Testing:</span>
                        </div>
                        <p className="text-green-800 text-sm">Hotjar, Google Analytics, UsabilityHub, Maze, UserTesting</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Layers className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">Prototyping:</span>
                        </div>
                        <p className="text-purple-800 text-sm">InVision, Principle, ProtoPie, Zeplin</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Tool selection depends on <span className="font-semibold">project requirements, team collaboration needs, and client preferences</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you conduct user research and testing?",
        icon: <Users className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes ✅. User research is fundamental to our design process:</span>
                </div>

                <div className="space-y-2">
                    {[
                        "User interviews and surveys to understand needs and pain points",
                        "Competitive analysis and market research",
                        "User persona development and journey mapping",
                        "Usability testing and A/B testing",
                        "Analytics review and heatmap analysis"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            This ensures designs are <span className="font-semibold">data-driven, user-centered, and effective</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    }
];

// Cloud & DevOps FAQs
export const cloud_devops_faq = [
    {
        title: "What are Cloud & DevOps services?",
        icon: <Cloud className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Cloud & DevOps services help organizations build, deploy, and manage applications efficiently and scalably.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Cloud Services:</span>
                            <p className="text-blue-800 mt-1">Infrastructure setup, migration, serverless computing, and cloud architecture design.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <GitBranch className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">DevOps Implementation:</span>
                            <p className="text-green-800 mt-1">CI/CD pipelines, containerization, infrastructure as code, and automated deployments.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Activity className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Monitoring & Security:</span>
                            <p className="text-purple-800 mt-1">Performance monitoring, logging, security compliance, and disaster recovery.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        We enable <span className="font-semibold">faster deployments, improved reliability, and cost-effective scalability</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Which cloud platforms do you work with?",
        icon: <Server className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We have expertise across all major cloud platforms and hybrid cloud solutions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Server className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Amazon Web Services (AWS):</span>
                            <p className="text-orange-700 text-sm mt-1">EC2, S3, Lambda, RDS, EKS, CloudFormation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Microsoft Azure:</span>
                            <p className="text-blue-700 text-sm mt-1">Azure VMs, App Services, Azure Functions, AKS</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Google Cloud Platform:</span>
                            <p className="text-green-700 text-sm mt-1">Compute Engine, Cloud Functions, GKE, Cloud Run</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Database className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Specialized Platforms:</span>
                            <p className="text-purple-700 text-sm mt-1">DigitalOcean, Linode, Vercel, Netlify, Heroku</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Platform choice depends on <span className="font-semibold">specific requirements, budget, and existing infrastructure</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What DevOps tools and practices do you implement?",
        icon: <GitBranch className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We implement modern DevOps practices and tools to streamline development and operations:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <GitBranch className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">CI/CD Pipelines:</span>
                            <p className="text-blue-700 text-sm mt-1">Jenkins, GitHub Actions, GitLab CI, Azure DevOps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Containerization:</span>
                            <p className="text-green-700 text-sm mt-1">Docker, Kubernetes, Docker Compose, Helm</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Server className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Infrastructure as Code:</span>
                            <p className="text-purple-700 text-sm mt-1">Terraform, CloudFormation, Ansible, Pulumi</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Activity className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Monitoring & Logging:</span>
                            <p className="text-orange-700 text-sm mt-1">Prometheus, Grafana, ELK Stack, DataDog</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        These practices enable <span className="font-semibold">faster releases, better quality, and improved collaboration</span>.
                    </p>
                </div>
            </>
        ),
    }
];

// Automation Testing FAQs
export const automation_testing_faq = [
    {
        title: "What is automation testing?",
        icon: <TestTube className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Automation testing uses specialized tools and scripts to execute tests automatically, ensuring software quality and reliability.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <TestTube className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Functional Testing:</span>
                            <p className="text-green-800 mt-1">UI testing, API testing, integration testing, and end-to-end testing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Activity className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Performance Testing:</span>
                            <p className="text-blue-800 mt-1">Load testing, stress testing, and scalability testing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Lock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Security Testing:</span>
                            <p className="text-purple-800 mt-1">Vulnerability scanning, penetration testing, and security compliance checks.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Automation testing provides <span className="font-semibold">faster feedback, consistent results, and reduced manual effort</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Which testing tools and frameworks do you use?",
        icon: <Settings className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We use industry-leading testing tools and frameworks for comprehensive test automation:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">Web Testing:</span>
                        </div>
                        <p className="text-blue-800 text-sm">Selenium, Cypress, Playwright, TestCafe, Puppeteer</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Smartphone className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">Mobile Testing:</span>
                        </div>
                        <p className="text-green-800 text-sm">Appium, Detox, XCUITest, Espresso</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Server className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">API Testing:</span>
                        </div>
                        <p className="text-purple-800 text-sm">Postman, Rest Assured, Newman, Insomnia</p>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Activity className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-orange-900">Performance Testing:</span>
                        </div>
                        <p className="text-orange-800 text-sm">JMeter, LoadRunner, Artillery, K6</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Tool selection is based on <span className="font-semibold">technology stack, testing requirements, and team expertise</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What types of testing do you automate?",
        icon: <Target className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We provide comprehensive test automation coverage across different testing levels and types:
                </div>

                <div className="space-y-2">
                    {[
                        "Unit testing and integration testing automation",
                        "UI/UX testing across browsers and devices",
                        "API and microservices testing",
                        "Database testing and data validation",
                        "Performance and load testing",
                        "Security and vulnerability testing",
                        "Regression testing and smoke testing",
                        "Cross-browser and cross-platform testing"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-purple-50 rounded-lg transition-colors">
                            <ArrowRight className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2">
                        <TestTube className="w-5 h-5 text-purple-600" />
                        <p className="text-purple-800 font-medium">
                            This ensures <span className="font-semibold">comprehensive quality coverage and faster release cycles</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    }
];

// AI & ML FAQs
export const ai_ml_faq = [
    {
        title: "What are AI & ML services?",
        icon: <Brain className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    AI & ML services help businesses leverage artificial intelligence and machine learning to solve complex problems and create intelligent applications.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Brain className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Machine Learning:</span>
                            <p className="text-purple-800 mt-1">Predictive analytics, recommendation systems, classification, and regression models.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Bot className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Artificial Intelligence:</span>
                            <p className="text-blue-800 mt-1">Natural Language Processing, Computer Vision, Chatbots, and intelligent automation.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <BarChart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Data Science:</span>
                            <p className="text-green-800 mt-1">Data analysis, statistical modeling, data visualization, and business intelligence.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        We help businesses <span className="font-semibold">automate processes, gain insights, and create intelligent user experiences</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What AI/ML technologies and frameworks do you use?",
        icon: <Cpu className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We work with cutting-edge AI/ML technologies and frameworks for building intelligent solutions:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Brain className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">ML Frameworks:</span>
                        </div>
                        <p className="text-blue-800 text-sm">TensorFlow, PyTorch, Scikit-learn, Keras, XGBoost</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <MessageSquare className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">NLP & Language:</span>
                        </div>
                        <p className="text-green-800 text-sm">OpenAI GPT, Hugging Face, spaCy, NLTK, Google Cloud AI</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Camera className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">Computer Vision:</span>
                        </div>
                        <p className="text-purple-800 text-sm">OpenCV, YOLO, MediaPipe, AWS Rekognition</p>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Cloud className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-orange-900">Cloud AI Services:</span>
                        </div>
                        <p className="text-orange-800 text-sm">AWS SageMaker, Google AI Platform, Azure ML, IBM Watson</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Technology choice depends on <span className="font-semibold">use case complexity, data requirements, and scalability needs</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What industries and use cases do you serve?",
        icon: <Target className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    We deliver AI/ML solutions across various industries and business functions:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">E-commerce & Retail:</span>
                            <p className="text-blue-700 text-sm mt-1">Recommendation engines, price optimization, inventory management</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Activity className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Healthcare & Finance:</span>
                            <p className="text-green-700 text-sm mt-1">Fraud detection, risk assessment, medical image analysis</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Bot className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Customer Service:</span>
                            <p className="text-purple-700 text-sm mt-1">Intelligent chatbots, sentiment analysis, automated support</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Marketing & Sales:</span>
                            <p className="text-orange-700 text-sm mt-1">Customer segmentation, lead scoring, predictive analytics</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2">
                        <Brain className="w-5 h-5 text-purple-600" />
                        <p className="text-purple-800 font-medium">
                            Our solutions drive <span className="font-semibold">business growth, operational efficiency, and competitive advantage</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    }
];
// Emerging Technology FAQs
export const emerging_tech_faq = [
    {
        title: "What are Emerging Technologies services?",
        icon: <Zap className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Emerging Technology services help businesses leverage cutting-edge technologies to stay competitive and drive innovation in rapidly evolving digital markets.
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Database className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Blockchain Development:</span>
                            <p className="text-purple-800 mt-1">Smart contracts, DeFi applications, NFT marketplaces, and cryptocurrency solutions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">IoT Solutions:</span>
                            <p className="text-blue-800 mt-1">Connected devices, sensor networks, smart home automation, and industrial IoT systems.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Eye className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">AR/VR Development:</span>
                            <p className="text-green-800 mt-1">Augmented reality apps, virtual reality experiences, and mixed reality solutions.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Bot className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Voice Technology:</span>
                            <p className="text-orange-800 mt-1">Voice assistants, speech recognition, conversational AI, and voice-enabled applications.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        We help businesses <span className="font-semibold">embrace innovation, future-proof their operations, and create competitive advantages</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What Blockchain technologies do you work with?",
        icon: <Database className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We develop blockchain solutions across multiple platforms and use cases:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Database className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">Blockchain Platforms:</span>
                        </div>
                        <p className="text-blue-800 text-sm">Ethereum, Binance Smart Chain, Polygon, Solana, Hyperledger</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">Smart Contracts:</span>
                        </div>
                        <p className="text-green-800 text-sm">Solidity, Vyper, Rust, Web3.js, Ethers.js</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">DApp Development:</span>
                        </div>
                        <p className="text-purple-800 text-sm">DeFi protocols, NFT marketplaces, DAOs, Token creation</p>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-orange-900">Wallet Integration:</span>
                        </div>
                        <p className="text-orange-800 text-sm">MetaMask, WalletConnect, Coinbase Wallet, Custom wallets</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        We build <span className="font-semibold">secure, scalable, and user-friendly blockchain applications</span> for various industries.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you develop IoT (Internet of Things) solutions?",
        icon: <Globe className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes ✅. We create comprehensive IoT ecosystems and connected solutions:</span>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Cpu className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Device Development:</span>
                            <p className="text-blue-700 text-sm mt-1">Sensor integration, microcontroller programming, edge computing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Cloud className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Cloud Connectivity:</span>
                            <p className="text-green-700 text-sm mt-1">AWS IoT, Google Cloud IoT, Azure IoT Hub, MQTT protocols</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <BarChart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Data Analytics:</span>
                            <p className="text-purple-700 text-sm mt-1">Real-time monitoring, predictive maintenance, data visualization</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Smartphone className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Mobile Integration:</span>
                            <p className="text-orange-700 text-sm mt-1">Smart home apps, industrial dashboards, remote control systems</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        From <span className="font-semibold">smart homes to industrial automation</span>, we build IoT solutions that improve efficiency and user experiences.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What AR/VR technologies and platforms do you use?",
        icon: <Eye className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We develop immersive AR/VR experiences using cutting-edge technologies and platforms:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Eye className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">AR Frameworks:</span>
                        </div>
                        <p className="text-blue-800 text-sm">ARKit (iOS), ARCore (Android), Vuforia, 8th Wall, Spark AR</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Settings className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">VR Platforms:</span>
                        </div>
                        <p className="text-green-800 text-sm">Unity 3D, Unreal Engine, WebXR, Oculus SDK, SteamVR</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Smartphone className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">Devices Support:</span>
                        </div>
                        <p className="text-purple-800 text-sm">Meta Quest, HoloLens, Magic Leap, iOS/Android AR apps</p>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-orange-900">Web-based AR/VR:</span>
                        </div>
                        <p className="text-orange-800 text-sm">WebXR, A-Frame, Three.js, Babylon.js</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-100 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2">
                        <Eye className="w-5 h-5 text-purple-600" />
                        <p className="text-purple-800 font-medium">
                            We create <span className="font-semibold">immersive experiences for education, training, marketing, and entertainment</span>.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Do you develop Voice Technology and Conversational AI?",
        icon: <MessageSquare className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Yes ✅. We build intelligent voice-enabled applications and conversational AI:</span>
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <MessageSquare className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Voice Assistants:</span>
                            <p className="text-orange-700 text-sm mt-1">Alexa Skills, Google Assistant Actions, custom voice apps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Bot className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Speech Recognition:</span>
                            <p className="text-blue-700 text-sm mt-1">Real-time transcription, voice commands, multi-language support</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Brain className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Natural Language Processing:</span>
                            <p className="text-green-700 text-sm mt-1">Intent recognition, sentiment analysis, language understanding</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Smartphone className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Voice Integration:</span>
                            <p className="text-purple-700 text-sm mt-1">Mobile apps, smart home devices, automotive systems</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-orange-100 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        We use <span className="font-semibold">OpenAI, Google Cloud Speech, Amazon Polly, and Azure Cognitive Services</span> for voice solutions.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What industries benefit from Emerging Technologies?",
        icon: <Target className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Emerging technologies transform operations across various industries and business sectors:
                </div>

                <div className="space-y-2">
                    {[
                        "Healthcare: Telemedicine, AR surgery training, IoT medical devices, blockchain health records",
                        "Retail & E-commerce: AR try-on experiences, voice shopping, IoT inventory management",
                        "Real Estate: Virtual property tours, AR visualization, smart building IoT systems",
                        "Education: VR learning environments, AR textbooks, voice-enabled learning assistants",
                        "Manufacturing: Industrial IoT, predictive maintenance, AR assembly guidance",
                        "Finance: Blockchain payments, DeFi solutions, voice banking, fraud detection AI",
                        "Entertainment: VR games, AR filters, blockchain gaming, voice-controlled content"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <Zap className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            These technologies enable <span className="font-semibold">digital transformation, improved customer experiences, and operational innovation</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure emerging technology solutions are scalable?",
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We design emerging technology solutions with scalability and future-readiness in mind:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Cloud className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Cloud-Native Architecture:</span>
                            <p className="text-blue-700 text-sm mt-1">Microservices, containerization, auto-scaling infrastructure</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Modular Design:</span>
                            <p className="text-green-700 text-sm mt-1">Component-based architecture, API-first approach, plugin systems</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Activity className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Performance Optimization:</span>
                            <p className="text-purple-700 text-sm mt-1">Load balancing, caching strategies, edge computing implementation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Security & Compliance:</span>
                            <p className="text-orange-700 text-sm mt-1">Enterprise security standards, data privacy, regulatory compliance</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our solutions grow with your business, ensuring <span className="font-semibold">long-term value and adaptability to changing requirements</span>.
                    </p>
                </div>
            </>
        ),
    }
];

// MERN/MEAN Stack FAQs
export const mern_mean_faq = [
    {
        title: "What is the MERN stack?",
        icon: <Code className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    The MERN stack is a JavaScript-based web development stack consisting of four key technologies:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">MongoDB:</span>
                            <p className="text-green-800 mt-1">NoSQL database for storing JSON-like documents with flexibility and scalability.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Server className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Express.js:</span>
                            <p className="text-blue-800 mt-1">Backend web application framework for Node.js, providing robust API development.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Monitor className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">React:</span>
                            <p className="text-purple-800 mt-1">Frontend library for building interactive user interfaces with component-based architecture.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Node.js:</span>
                            <p className="text-orange-800 mt-1">JavaScript runtime environment for server-side development and API creation.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        MERN enables <span className="font-semibold">full-stack JavaScript development</span> with high performance and modern development practices.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the MEAN stack?",
        icon: <Code className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    The MEAN stack is another popular JavaScript-based development stack consisting of:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">MongoDB:</span>
                            <p className="text-green-800 mt-1">Same NoSQL database as MERN for flexible data storage.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Server className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Express.js:</span>
                            <p className="text-blue-800 mt-1">Same backend framework for creating RESTful APIs and server logic.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Monitor className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Angular:</span>
                            <p className="text-red-800 mt-1">Full-featured frontend framework with TypeScript support and comprehensive tooling.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Settings className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Node.js:</span>
                            <p className="text-orange-800 mt-1">Same JavaScript runtime for server-side development.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        MEAN provides a <span className="font-semibold">complete enterprise-grade framework</span> with Angular's structured approach.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the key differences between MERN and MEAN?",
        icon: <GitBranch className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    The main difference lies in the frontend framework choice:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <ArrowRight className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">MERN (React):</span>
                            <p className="text-blue-800 mt-1">Library-based approach, more flexibility, larger ecosystem, easier learning curve.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <ArrowRight className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">MEAN (Angular):</span>
                            <p className="text-red-800 mt-1">Full framework with built-in features, TypeScript support, opinionated structure.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Common Ground:</span>
                            <p className="text-green-800 mt-1">Both use MongoDB, Express.js, and Node.js for backend development.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Choice depends on <span className="font-semibold">project requirements, team expertise, and development preferences</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the benefits of using MERN/MEAN stacks?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Both stacks offer numerous advantages for modern web development:
                </div>

                <div className="space-y-2">
                    {[
                        "Full-stack JavaScript development - single language across client and server",
                        "Large community support and extensive documentation",
                        "High performance with Node.js and optimized frontend rendering",
                        "Rapid development with reusable components and modules",
                        "Scalable architecture suitable for small to enterprise applications",
                        "Rich ecosystem of npm packages and third-party integrations",
                        "Real-time application support with WebSockets and Socket.io",
                        "Cost-effective development with shared JavaScript knowledge"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-green-50 rounded-lg transition-colors">
                            <ArrowRight className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <p className="text-gray-700">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            These stacks enable <span className="font-semibold">faster time-to-market and maintainable codebases</span>
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What types of applications can be built with MERN/MEAN?",
        icon: <Layers className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    MERN and MEAN stacks are versatile and can build various types of applications:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Web Applications:</span>
                            <p className="text-blue-700 text-sm mt-1">SPAs, Progressive Web Apps, dashboards, admin panels</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">E-commerce:</span>
                            <p className="text-green-700 text-sm mt-1">Online stores, marketplace platforms, payment integrations</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Social Platforms:</span>
                            <p className="text-purple-700 text-sm mt-1">Social networks, chat applications, community forums</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Activity className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Real-time Apps:</span>
                            <p className="text-orange-700 text-sm mt-1">Live collaboration tools, gaming platforms, streaming apps</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Enterprise Solutions:</span>
                            <p className="text-indigo-700 text-sm mt-1">CRM systems, project management tools, analytics platforms</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Both stacks are ideal for <span className="font-semibold">data-driven applications requiring real-time updates</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What development tools and practices do you use?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We follow modern development practices and use industry-standard tools:
                </div>

                <div className="grid gap-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Code className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-blue-900">Development Tools:</span>
                        </div>
                        <p className="text-blue-800 text-sm">VS Code, Git, npm/yarn, Webpack, Babel, ESLint, Prettier</p>
                    </div>

                    <div className="p-3 bg-green-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <TestTube className="w-4 h-4 text-green-600" />
                            <span className="font-semibold text-green-900">Testing:</span>
                        </div>
                        <p className="text-green-800 text-sm">Jest, Cypress, React Testing Library, Mocha, Chai, Supertest</p>
                    </div>

                    <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Cloud className="w-4 h-4 text-purple-600" />
                            <span className="font-semibold text-purple-900">Deployment:</span>
                        </div>
                        <p className="text-purple-800 text-sm">Docker, AWS, Heroku, Vercel, Netlify, CI/CD pipelines</p>
                    </div>

                    <div className="p-3 bg-orange-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-4 h-4 text-orange-600" />
                            <span className="font-semibold text-orange-900">Security:</span>
                        </div>
                        <p className="text-orange-800 text-sm">JWT authentication, bcrypt, helmet.js, CORS configuration</p>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We ensure <span className="font-semibold">code quality, security, and scalability</span> through best practices and modern tooling.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does MERN/MEAN development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline depends on <span className="font-semibold">complexity, features, design requirements, and integrations</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Apps (MVP/Basic Features):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">3–6 weeks</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity (E-commerce/Social):</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–4 months</span>
                            <p className="text-blue-700 text-sm mt-1">With authentication, payments, real-time features</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Applications (Enterprise/SaaS):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">4–8+ months</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Factors like <span className="font-semibold">API integrations, custom UI/UX, testing, and deployment setup</span> affect development time.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide MERN/MEAN stack maintenance and support?",
        icon: <Shield className="w-5 h-5 text-emerald-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes.</span> We offer comprehensive <span className="font-semibold text-emerald-700">maintenance and support services</span> for MERN/MEAN applications:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Regular security updates and dependency management" },
                        { icon: <Activity className="w-4 h-4 text-green-500" />, text: "Performance monitoring and optimization" },
                        { icon: <Settings className="w-4 h-4 text-purple-500" />, text: "Bug fixes and feature enhancements" },
                        { icon: <Database className="w-4 h-4 text-orange-500" />, text: "Database optimization and backup management" },
                        { icon: <Cloud className="w-4 h-4 text-indigo-500" />, text: "Server maintenance and scaling support" },
                        { icon: <TestTube className="w-4 h-4 text-pink-500" />, text: "Continuous testing and quality assurance" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <p className="text-emerald-800">
                        Available as <span className="font-semibold">monthly or yearly maintenance packages</span> with 24/7 support options.
                    </p>
                </div>
            </>
        ),
    }
];


export const nextjs_faq = [
    {
        title: "What is Next.js and why should I choose it?",
        icon: <Code className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Next.js is a production-ready React framework that provides powerful features for modern web development:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Server className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Server-Side Rendering (SSR):</span>
                            <p className="text-blue-800 mt-1">Renders pages on the server for better SEO and faster initial loads.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Static Site Generation (SSG):</span>
                            <p className="text-green-800 mt-1">Pre-builds pages at build time for lightning-fast performance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Globe className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">API Routes:</span>
                            <p className="text-purple-800 mt-1">Built-in API functionality without needing a separate backend server.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Image className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Built-in Optimization:</span>
                            <p className="text-orange-800 mt-1">Automatic image optimization, code splitting, and bundle optimization.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Next.js enables <span className="font-semibold">production-ready React applications</span> with zero configuration.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What's the difference between SSR, SSG, and CSR in Next.js?",
        icon: <GitBranch className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Next.js offers multiple rendering strategies to optimize performance and user experience:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Server className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Server-Side Rendering (SSR):</span>
                            <p className="text-blue-800 mt-1">Pages rendered on each request. Best for dynamic content and real-time data.</p>
                            <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded">getServerSideProps</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Static Site Generation (SSG):</span>
                            <p className="text-green-800 mt-1">Pages pre-built at build time. Ideal for content that doesn't change often.</p>
                            <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">getStaticProps</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Monitor className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Client-Side Rendering (CSR):</span>
                            <p className="text-orange-800 mt-1">Traditional React rendering in the browser. Good for dashboard-like apps.</p>
                            <span className="inline-block mt-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">useEffect</span>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <RefreshCw className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Incremental Static Regeneration (ISR):</span>
                            <p className="text-purple-800 mt-1">Updates static pages after deployment without full rebuilds.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Next.js allows <span className="font-semibold">mixing different rendering methods</span> on a per-page basis for optimal performance.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How does Next.js improve SEO compared to regular React?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Next.js provides significant SEO advantages over client-side rendered React applications:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Search className="w-4 h-4 text-blue-500" />, text: "Server-side rendering enables search engines to crawl fully rendered HTML" },
                        { icon: <Zap className="w-4 h-4 text-green-500" />, text: "Faster page load times improve search rankings and user experience" },
                        { icon: <FileText className="w-4 h-4 text-purple-500" />, text: "Built-in Head component for managing meta tags, titles, and descriptions" },
                        { icon: <Image className="w-4 h-4 text-orange-500" />, text: "Automatic image optimization with lazy loading and WebP conversion" },
                        { icon: <Link className="w-4 h-4 text-indigo-500" />, text: "Link prefetching for instant navigation between pages" },
                        { icon: <Code className="w-4 h-4 text-red-500" />, text: "Automatic code splitting reduces bundle sizes and improves Core Web Vitals" },
                        { icon: <Globe className="w-4 h-4 text-cyan-500" />, text: "Built-in sitemap generation and robots.txt support" },
                        { icon: <Shield className="w-4 h-4 text-green-600" />, text: "Structured data and JSON-LD support for rich snippets" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        <p className="text-green-800 font-medium">
                            Next.js apps typically see <span className="font-semibold">30-50% improvement in SEO metrics</span> compared to CSR React apps.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What are the performance benefits of Next.js?",
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        description: (
            <>
                <div className="mb-4">
                    Next.js includes numerous performance optimizations out of the box:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Activity className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Automatic Code Splitting:</span>
                            <p className="text-blue-700 text-sm mt-1">Only loads JavaScript needed for each page, reducing initial bundle size</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Image className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Image Optimization:</span>
                            <p className="text-green-700 text-sm mt-1">Automatic WebP conversion, lazy loading, and responsive images</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Link className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Smart Prefetching:</span>
                            <p className="text-purple-700 text-sm mt-1">Preloads linked pages when they enter the viewport for instant navigation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Database className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Built-in Caching:</span>
                            <p className="text-orange-700 text-sm mt-1">Intelligent caching strategies for static and dynamic content</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Zap className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Edge Runtime:</span>
                            <p className="text-indigo-700 text-sm mt-1">Deploy to edge locations worldwide for minimal latency</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        These optimizations result in <span className="font-semibold">faster load times and better Core Web Vitals scores</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you migrate my existing React app to Next.js?",
        icon: <RefreshCw className="w-5 h-5 text-indigo-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in <span className="font-semibold text-indigo-700">seamless React to Next.js migrations</span> with minimal disruption:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Assessment & Planning:</span>
                            <p className="text-blue-800 mt-1">Analyze your current app structure and create a migration roadmap</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Settings className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Gradual Migration:</span>
                            <p className="text-green-800 mt-1">Migrate page by page to ensure stability and functionality</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Zap className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Performance Optimization:</span>
                            <p className="text-purple-800 mt-1">Implement SSR/SSG, optimize images, and improve loading times</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Testing & Validation:</span>
                            <p className="text-orange-800 mt-1">Comprehensive testing to ensure feature parity and performance gains</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Migration typically takes <span className="font-semibold">2-6 weeks</span> depending on app complexity and custom requirements.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What types of applications are best suited for Next.js?",
        icon: <Layers className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Next.js is versatile and excellent for various application types:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Marketing & Corporate Websites:</span>
                            <p className="text-blue-700 text-sm mt-1">Landing pages, company sites, blogs with excellent SEO performance</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">E-commerce Platforms:</span>
                            <p className="text-green-700 text-sm mt-1">Online stores with fast loading, SEO optimization, and dynamic product pages</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Content Management Systems:</span>
                            <p className="text-purple-700 text-sm mt-1">Headless CMS frontends, blogs, news sites, and documentation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <BarChart className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">SaaS Applications:</span>
                            <p className="text-orange-700 text-sm mt-1">Dashboards, analytics platforms, and business tools</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Users className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Social Platforms:</span>
                            <p className="text-indigo-700 text-sm mt-1">Community sites, forums, and user-generated content platforms</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Progressive Web Apps (PWA):</span>
                            <p className="text-red-700 text-sm mt-1">App-like experiences with offline capabilities and push notifications</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Ideal for projects requiring <span className="font-semibold">excellent SEO, fast performance, and scalability</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does Next.js development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline varies based on <span className="font-semibold">complexity, features, integrations, and design requirements</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Websites (Landing Pages/Blogs):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">1–3 weeks</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity (E-commerce/CMS):</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">4–8 weeks</span>
                            <p className="text-blue-700 text-sm mt-1">With dynamic content, user authentication, payment integration</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Applications (SaaS/Enterprise):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">2–6+ months</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <RefreshCw className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Migration Projects:</span>
                            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">2–6 weeks</span>
                            <p className="text-orange-700 text-sm mt-1">Depending on existing codebase complexity</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Factors like <span className="font-semibold">custom UI/UX design, third-party integrations, and performance optimization</span> affect development time.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide Next.js maintenance and support?",
        icon: <Shield className="w-5 h-5 text-emerald-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely.</span> We offer comprehensive <span className="font-semibold text-emerald-700">maintenance and support services</span> for Next.js applications:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Next.js version updates and framework migration support" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security updates and dependency vulnerability patches" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Performance monitoring and Core Web Vitals optimization" },
                        { icon: <Search className="w-4 h-4 text-purple-500" />, text: "SEO monitoring and search ranking improvements" },
                        { icon: <Database className="w-4 h-4 text-orange-500" />, text: "CDN optimization and edge deployment management" },
                        { icon: <Monitor className="w-4 h-4 text-indigo-500" />, text: "Analytics setup and conversion tracking implementation" },
                        { icon: <Settings className="w-4 h-4 text-pink-500" />, text: "Feature enhancements and functionality updates" },
                        { icon: <TestTube className="w-4 h-4 text-cyan-500" />, text: "Automated testing and continuous integration setup" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                    <p className="text-emerald-800">
                        Available as <span className="font-semibold">flexible support packages</span> with priority response times and dedicated developer access.
                    </p>
                </div>
            </>
        ),
    }
];


export const static_website_faq = [
    {
        title: "What is a static website?",
        icon: <Code className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    A static website consists of fixed content pages built with HTML, CSS, and JavaScript that display the same information to every visitor:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Code className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">HTML5:</span>
                            <p className="text-orange-800 mt-1">Semantic markup for structured content and improved accessibility.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Palette className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">CSS3:</span>
                            <p className="text-blue-800 mt-1">Modern styling with animations, responsive design, and visual appeal.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-yellow-900">JavaScript:</span>
                            <p className="text-yellow-800 mt-1">Interactive elements and enhanced user experience functionality.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                    <p className="text-green-800">
                        Static websites are <span className="font-semibold">fast, secure, and cost-effective</span> for businesses with stable content.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the benefits of static websites?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Static websites offer numerous advantages for businesses:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Lightning-fast loading times with minimal server processing" },
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Cost-effective hosting with lower bandwidth and server requirements" },
                        { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Enhanced security with fewer attack vectors and vulnerabilities" },
                        { icon: <Search className="w-4 h-4 text-purple-500" />, text: "Better SEO performance with fast loading and clean HTML structure" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Easy maintenance and updates without complex backend systems" },
                        { icon: <Globe className="w-4 h-4 text-indigo-500" />, text: "Excellent reliability with minimal downtime and server issues" },
                        { icon: <Smartphone className="w-4 h-4 text-pink-500" />, text: "Perfect responsive design across all devices and browsers" },
                        { icon: <Database className="w-4 h-4 text-cyan-500" />, text: "No database requirements, reducing complexity and costs" }
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
                            Static websites are ideal for <span className="font-semibold">businesses prioritizing speed, security, and cost-efficiency</span>.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Who should choose static websites?",
        icon: <Users className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Static websites are perfect for various business types and use cases:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Building className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Small Businesses:</span>
                            <p className="text-blue-700 text-sm mt-1">Local services, restaurants, professional practices with stable content</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Portfolio Websites:</span>
                            <p className="text-green-700 text-sm mt-1">Artists, photographers, designers showcasing their work</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <FileText className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Landing Pages:</span>
                            <p className="text-purple-700 text-sm mt-1">Marketing campaigns, product launches, event promotions</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Globe className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Corporate Websites:</span>
                            <p className="text-orange-700 text-sm mt-1">Company information, services, contact details, and team pages</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Documentation Sites:</span>
                            <p className="text-indigo-700 text-sm mt-1">Product docs, user guides, API documentation</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Perfect for businesses that <span className="font-semibold">don't require frequent content updates or user interactions</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do static websites compare to dynamic websites?",
        icon: <GitCompare className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Understanding the key differences helps choose the right solution:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Static Website Advantages:</span>
                            <p className="text-green-800 mt-1">Faster loading, lower costs, better security, easier hosting, excellent SEO</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Dynamic Website Advantages:</span>
                            <p className="text-blue-800 mt-1">User accounts, real-time content updates, interactive features, databases</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-yellow-900">Consider Static When:</span>
                            <p className="text-yellow-800 mt-1">Content changes infrequently, budget is limited, speed is priority, simple functionality needed</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Consider Dynamic When:</span>
                            <p className="text-purple-800 mt-1">User logins needed, frequent updates, e-commerce, complex interactions required</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We help you choose the <span className="font-semibold">right solution based on your specific business needs and goals</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does static website development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline depends on <span className="font-semibold">complexity, design requirements, content volume, and functionality</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Websites (1-5 pages):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">3–7 days</span>
                            <p className="text-green-700 text-sm mt-1">Basic business cards, simple landing pages</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Standard Websites (5-15 pages):</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">1–3 weeks</span>
                            <p className="text-blue-700 text-sm mt-1">Corporate sites, portfolios, service-based businesses</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Websites (15+ pages):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">3–6 weeks</span>
                            <p className="text-purple-700 text-sm mt-1">Large corporate sites, detailed portfolios, extensive content</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Factors like <span className="font-semibold">custom design, content creation, integrations, and revisions</span> can affect timeline.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide hosting and domain assistance?",
        icon: <Server className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide complete <span className="font-semibold text-blue-700">hosting and domain assistance</span> for your static website:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Globe className="w-4 h-4 text-blue-500" />, text: "Domain name selection and registration guidance" },
                        { icon: <Server className="w-4 h-4 text-green-500" />, text: "Hosting provider recommendations based on your needs" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Fast CDN setup for global content delivery" },
                        { icon: <Shield className="w-4 h-4 text-purple-500" />, text: "SSL certificate installation for security" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "DNS configuration and email setup" },
                        { icon: <BarChart className="w-4 h-4 text-indigo-500" />, text: "Analytics and monitoring tool integration" },
                        { icon: <RefreshCw className="w-4 h-4 text-pink-500" />, text: "Automated backup and deployment setup" },
                        { icon: <Users className="w-4 h-4 text-cyan-500" />, text: "Training on content updates and maintenance" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        We ensure a <span className="font-semibold">seamless launch process</span> with optimal performance and reliability.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can static websites be mobile-friendly and responsive?",
        icon: <Smartphone className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> All our static websites are built with <span className="font-semibold text-green-700">mobile-first responsive design</span>:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Mobile Optimization:</span>
                            <p className="text-green-700 text-sm mt-1">Touch-friendly interfaces, optimized loading, thumb-friendly navigation</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Monitor className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Responsive Layout:</span>
                            <p className="text-blue-700 text-sm mt-1">Fluid grids that adapt seamlessly to any screen size or device</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Image className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Optimized Media:</span>
                            <p className="text-purple-700 text-sm mt-1">Responsive images and media that scale appropriately</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Cross-Device Testing:</span>
                            <p className="text-orange-700 text-sm mt-1">Thorough testing across multiple devices and browsers</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        Our responsive design ensures <span className="font-semibold">perfect user experience on mobile, tablet, and desktop</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide maintenance and support for static websites?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">maintenance and support services</span> for static websites:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Content updates and page modifications" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security monitoring and SSL certificate renewal" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Performance optimization and speed improvements" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and compatibility issue resolution" },
                        { icon: <Image className="w-4 h-4 text-purple-500" />, text: "Image optimization and new media integration" },
                        { icon: <BarChart className="w-4 h-4 text-indigo-500" />, text: "Analytics reporting and SEO improvements" },
                        { icon: <Database className="w-4 h-4 text-orange-500" />, text: "Backup management and disaster recovery" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "Training and documentation for content updates" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Available as <span className="font-semibold">flexible maintenance packages</span> with quick response times and affordable rates.
                    </p>
                </div>
            </>
        ),
    }
];


export const wordpress_faq = [
    {
        title: "What is WordPress and why should I choose it?",
        icon: <Code className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    WordPress is the world's most popular content management system (CMS), powering over 40% of all websites:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Edit className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">User-Friendly CMS:</span>
                            <p className="text-blue-800 mt-1">Easy content management without technical knowledge required.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Puzzle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Extensive Plugin Library:</span>
                            <p className="text-green-800 mt-1">Over 60,000 plugins to extend functionality for any business need.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Palette className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Customizable Themes:</span>
                            <p className="text-purple-800 mt-1">Thousands of themes and unlimited customization possibilities.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Search className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">SEO-Friendly:</span>
                            <p className="text-orange-800 mt-1">Built-in SEO features and compatibility with SEO plugins.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        WordPress powers <span className="font-semibold">businesses of all sizes</span> from blogs to enterprise websites.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What types of websites can be built with WordPress?",
        icon: <Layers className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    WordPress is incredibly versatile and can power virtually any type of website:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Building className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Business Websites:</span>
                            <p className="text-blue-700 text-sm mt-1">Corporate sites, service pages, company portfolios, team pages</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">E-commerce Stores:</span>
                            <p className="text-green-700 text-sm mt-1">WooCommerce integration for full online store functionality</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <BookOpen className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Blogs & News Sites:</span>
                            <p className="text-purple-700 text-sm mt-1">Content management, multi-author blogs, news publications</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Users className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Community & Membership Sites:</span>
                            <p className="text-orange-700 text-sm mt-1">User registration, forums, subscription-based content</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Portfolios & Creative Sites:</span>
                            <p className="text-indigo-700 text-sm mt-1">Artist portfolios, photography sites, creative agencies</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-red-900">Educational & Non-profit:</span>
                            <p className="text-red-700 text-sm mt-1">Learning management systems, charity sites, event management</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        WordPress can be <span className="font-semibold">customized for any industry or business model</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the benefits of using WordPress?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    WordPress offers numerous advantages for businesses and organizations:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Edit className="w-4 h-4 text-blue-500" />, text: "User-friendly interface - manage content without technical skills" },
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Cost-effective - open source with affordable hosting options" },
                        { icon: <Search className="w-4 h-4 text-purple-500" />, text: "SEO-friendly - built-in optimization features and plugin support" },
                        { icon: <Smartphone className="w-4 h-4 text-orange-500" />, text: "Mobile responsive - themes automatically adapt to all devices" },
                        { icon: <Puzzle className="w-4 h-4 text-indigo-500" />, text: "Extensive plugin library - add any functionality you need" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "Large community support - tutorials, forums, and documentation" },
                        { icon: <Globe className="w-4 h-4 text-cyan-500" />, text: "Multilingual support - reach global audiences easily" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Regular security updates - maintained by a dedicated team" },
                        { icon: <TrendingUp className="w-4 h-4 text-yellow-500" />, text: "Scalable - grows with your business from small to enterprise" },
                        { icon: <Settings className="w-4 h-4 text-gray-500" />, text: "Easy integrations - connect with third-party tools and services" }
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
                            WordPress combines <span className="font-semibold">ease of use with powerful functionality</span> for any business.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "How secure is WordPress?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    WordPress security depends on proper setup, maintenance, and best practices:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Core Security:</span>
                            <p className="text-green-800 mt-1">WordPress core is regularly updated with security patches and improvements.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Security Plugins:</span>
                            <p className="text-blue-800 mt-1">Robust security plugins like Wordfence, Sucuri, and iThemes Security provide additional protection.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Best Practices:</span>
                            <p className="text-orange-800 mt-1">Regular updates, strong passwords, secure hosting, and proper user permissions are essential.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our Security Measures Include:</h4>
                    {[
                        "Regular WordPress core and plugin updates",
                        "SSL certificate installation and configuration",
                        "Firewall setup and malware scanning",
                        "Strong password policies and two-factor authentication",
                        "Regular security audits and monitoring",
                        "Automated backups and disaster recovery plans"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        With proper security measures, WordPress is <span className="font-semibold">as secure as any other CMS platform</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can you migrate my existing website to WordPress?",
        icon: <RefreshCw className="w-5 h-5 text-indigo-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We specialize in <span className="font-semibold text-indigo-700">seamless website migrations to WordPress</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Search className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Pre-Migration Analysis:</span>
                            <p className="text-blue-800 mt-1">Comprehensive audit of your current site structure, content, and functionality</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Content Migration:</span>
                            <p className="text-green-800 mt-1">Safe transfer of all content, images, and media files with data integrity</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Link className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">URL Structure & SEO:</span>
                            <p className="text-purple-800 mt-1">Preserve SEO rankings with proper redirects and URL mapping</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Testing & Validation:</span>
                            <p className="text-orange-800 mt-1">Thorough testing to ensure all features work perfectly after migration</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">We Migrate From:</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {[
                            "Static HTML websites", "Joomla CMS", "Drupal CMS", "Shopify stores",
                            "Squarespace sites", "Wix websites", "Custom CMS platforms", "Other frameworks"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                                <ArrowRight className="w-3 h-3 text-gray-600" />
                                <span className="text-sm text-gray-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Migration typically takes <span className="font-semibold">1-4 weeks</span> depending on site complexity and content volume.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is WooCommerce and do you develop e-commerce sites?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">WooCommerce</span> is the most popular e-commerce plugin for WordPress, and <span className="font-semibold text-green-700">yes, we specialize in WooCommerce development</span>:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Complete E-commerce Solution:</span>
                            <p className="text-green-800 mt-1">Full online store functionality with product management, inventory, and order processing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <CreditCard className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Payment Integration:</span>
                            <p className="text-blue-800 mt-1">Support for all major payment gateways including PayPal, Stripe, and local payment methods.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Truck className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Shipping & Tax Management:</span>
                            <p className="text-purple-800 mt-1">Flexible shipping options, tax calculations, and multi-location inventory management.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Our WooCommerce Services:</h4>
                    {[
                        "Custom WooCommerce store development",
                        "Theme customization and responsive design",
                        "Payment gateway integration and setup",
                        "Inventory management and product import",
                        "Custom plugin development for specific needs",
                        "Performance optimization for large catalogs",
                        "Multi-vendor marketplace setup",
                        "Ongoing maintenance and security updates"
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-green-100 rounded-lg border border-green-200">
                    <p className="text-green-800">
                        WooCommerce powers <span className="font-semibold">over 5 million online stores</span> worldwide with flexible, scalable solutions.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does WordPress development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline varies based on <span className="font-semibold">complexity, customization requirements, content volume, and functionality</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple WordPress Sites (5-10 pages):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">1–2 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic business sites, blogs, portfolios</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Custom WordPress Sites (10-25 pages):</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">3–6 weeks</span>
                            <p className="text-blue-700 text-sm mt-1">Custom themes, advanced functionality, member areas</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">WooCommerce E-commerce Sites:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">4–8 weeks</span>
                            <p className="text-purple-700 text-sm mt-1">Online stores, payment integration, inventory setup</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Enterprise WordPress Solutions:</span>
                            <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">2–4+ months</span>
                            <p className="text-orange-700 text-sm mt-1">Multi-site, custom plugins, complex integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Factors like <span className="font-semibold">content creation, custom design, plugin development, and integrations</span> affect timeline.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide WordPress maintenance and support?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We offer comprehensive <span className="font-semibold text-purple-700">WordPress maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Regular WordPress core, theme, and plugin updates" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security monitoring, malware scanning, and firewall management" },
                        { icon: <Database className="w-4 h-4 text-purple-500" />, text: "Automated daily backups and disaster recovery" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Performance optimization and speed improvements" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and compatibility issue resolution" },
                        { icon: <Edit className="w-4 h-4 text-indigo-500" />, text: "Content updates and minor design changes" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "Analytics reporting and SEO monitoring" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 support and emergency response" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Maintenance Plans Available:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Basic Plan</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Professional Plan</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Enterprise Plan</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our maintenance keeps your WordPress site <span className="font-semibold">secure, fast, and always up-to-date</span> with minimal downtime.
                    </p>
                </div>
            </>
        ),
    }
];


export const android_app_faq = [
    {
        title: "What is Android app development?",
        icon: <Smartphone className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Android app development is the process of creating mobile applications for devices running the Android operating system:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Code className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Native Development:</span>
                            <p className="text-green-800 mt-1">Built using Java or Kotlin with Android SDK for optimal performance and device integration.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Globe className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Market Reach:</span>
                            <p className="text-blue-800 mt-1">Android powers over 70% of mobile devices worldwide, offering massive market potential.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Settings className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Rich Features:</span>
                            <p className="text-purple-800 mt-1">Access to device hardware, Google services, and extensive customization options.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Store className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Google Play Store:</span>
                            <p className="text-orange-800 mt-1">Distribution through the world's largest app marketplace with billions of users.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Android development offers <span className="font-semibold">flexibility, scalability, and vast market opportunities</span> for businesses.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the benefits of native Android app development?",
        icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Native Android app development offers numerous advantages over hybrid or web-based solutions:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Superior performance with direct access to device hardware and resources" },
                        { icon: <Smartphone className="w-4 h-4 text-green-500" />, text: "Full integration with Android features like camera, GPS, contacts, and sensors" },
                        { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Enhanced security with Android's built-in security model and encryption" },
                        { icon: <Palette className="w-4 h-4 text-purple-500" />, text: "Native UI/UX that follows Android design guidelines and user expectations" },
                        { icon: <Wifi className="w-4 h-4 text-indigo-500" />, text: "Offline functionality and better handling of network connectivity issues" },
                        { icon: <Bell className="w-4 h-4 text-orange-500" />, text: "Push notifications and background processing capabilities" },
                        { icon: <Download className="w-4 h-4 text-pink-500" />, text: "Easy distribution through Google Play Store with built-in monetization options" },
                        { icon: <Wrench className="w-4 h-4 text-cyan-500" />, text: "Access to latest Android features and APIs as soon as they're released" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        <p className="text-blue-800 font-medium">
                            Native Android apps provide <span className="font-semibold">optimal user experience and maximum platform capabilities</span>.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Which programming languages and technologies do you use?",
        icon: <Code className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    We use cutting-edge technologies and programming languages for Android app development:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Code className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Programming Languages:</span>
                            <p className="text-purple-700 text-sm mt-1">Kotlin (preferred), Java, with Kotlin being Google's recommended language</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Wrench className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Development Tools:</span>
                            <p className="text-blue-700 text-sm mt-1">Android Studio, Gradle, ADB, Android SDK, Firebase Console</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Backend & Database:</span>
                            <p className="text-green-700 text-sm mt-1">Firebase, Room Database, SQLite, RESTful APIs, GraphQL</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Palette className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">UI/UX Frameworks:</span>
                            <p className="text-orange-700 text-sm mt-1">Material Design, Jetpack Compose, XML layouts, ConstraintLayout</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Testing & Quality:</span>
                            <p className="text-indigo-700 text-sm mt-1">Espresso, JUnit, Mockito, Firebase Test Lab, Android Testing Framework</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We stay updated with <span className="font-semibold">latest Android technologies and best practices</span> to deliver modern, efficient apps.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does Android app development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Development timeline varies based on <span className="font-semibold">app complexity, features, design requirements, and integrations</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Apps (Basic Features):</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">6–12 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic UI, simple functionality, minimal integrations</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">3–6 months</span>
                            <p className="text-blue-700 text-sm mt-1">Custom UI, API integrations, user authentication, payment features</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Apps (Enterprise/Advanced):</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">6–12+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Advanced features, real-time functionality, complex backend</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Development Phases Include:</h4>
                    {[
                        "Requirements analysis and planning (1-2 weeks)",
                        "UI/UX design and prototyping (2-4 weeks)",
                        "Development and coding (4-20+ weeks)",
                        "Testing and quality assurance (2-4 weeks)",
                        "App store submission and approval (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Timeline depends on <span className="font-semibold">feature complexity, third-party integrations, and approval cycles</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of Android app development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Android app development cost varies significantly based on multiple factors:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Apps:</span>
                            <p className="text-green-800 mt-1">$10,000 - $25,000 for basic functionality and standard UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity:</span>
                            <p className="text-blue-800 mt-1">$25,000 - $75,000 for custom features, integrations, and advanced UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Crown className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Apps:</span>
                            <p className="text-purple-800 mt-1">$75,000+ for complex functionality, enterprise integrations, and scalability</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost Factors Include:</h4>
                    {[
                        "App complexity and number of features",
                        "Custom UI/UX design requirements",
                        "Third-party integrations and APIs",
                        "Backend development and database setup",
                        "Testing across multiple devices and OS versions",
                        "App store submission and optimization",
                        "Post-launch maintenance and updates"
                    ].map((factor, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{factor}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        We provide <span className="font-semibold">detailed cost estimates</span> after analyzing your specific requirements and project scope.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide app store submission and ASO services?",
        icon: <Store className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We provide complete <span className="font-semibold text-blue-700">Google Play Store submission and ASO services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <FileText className="w-4 h-4 text-blue-500" />, text: "Complete app store listing creation with compelling descriptions" },
                        { icon: <Image className="w-4 h-4 text-green-500" />, text: "Professional app icons, screenshots, and promotional graphics" },
                        { icon: <Search className="w-4 h-4 text-purple-500" />, text: "Keyword research and optimization for better discoverability" },
                        { icon: <CheckCircle className="w-4 h-4 text-orange-500" />, text: "Compliance with Google Play Store policies and guidelines" },
                        { icon: <TrendingUp className="w-4 h-4 text-indigo-500" />, text: "App Store Optimization (ASO) to improve rankings and downloads" },
                        { icon: <BarChart className="w-4 h-4 text-pink-500" />, text: "Performance monitoring and analytics setup" },
                        { icon: <RefreshCw className="w-4 h-4 text-cyan-500" />, text: "Regular updates and optimization based on user feedback" },
                        { icon: <Shield className="w-4 h-4 text-red-500" />, text: "Security review and privacy policy compliance" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">ASO Services Include:</h4>
                        <div className="grid grid-cols-2 gap-2">
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Keyword Optimization</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Competitor Analysis</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Review Management</span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">Conversion Optimization</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our ASO expertise helps <span className="font-semibold">increase app visibility by 3-5x and improve download rates significantly</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What about app security and data protection?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    Security is our top priority in Android app development. We implement comprehensive security measures:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">Data Encryption:</span>
                            <p className="text-red-800 mt-1">End-to-end encryption for data transmission and storage using industry standards.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Authentication & Authorization:</span>
                            <p className="text-blue-800 mt-1">Secure user authentication with biometrics, OAuth, and JWT tokens.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <FileCheck className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Compliance:</span>
                            <p className="text-green-800 mt-1">GDPR, CCPA, HIPAA compliance and privacy policy implementation.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Measures:</h4>
                    {[
                        "Secure API communication with HTTPS and certificate pinning",
                        "Local data encryption and secure key management",
                        "Code obfuscation and anti-reverse engineering protection",
                        "Regular security audits and penetration testing",
                        "Secure third-party library integration and updates",
                        "Runtime Application Self-Protection (RASP) implementation",
                        "Secure backend infrastructure and database protection"
                    ].map((measure, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{measure}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        We follow <span className="font-semibold">OWASP Mobile Security Guidelines</span> and implement security-by-design principles.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide maintenance and support after app launch?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We offer comprehensive <span className="font-semibold text-purple-700">post-launch maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Regular app updates for new Android versions and security patches" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and performance optimization based on user feedback" },
                        { icon: <TrendingUp className="w-4 h-4 text-green-500" />, text: "Feature enhancements and new functionality development" },
                        { icon: <BarChart className="w-4 h-4 text-purple-500" />, text: "Analytics monitoring and performance tracking" },
                        { icon: <Shield className="w-4 h-4 text-orange-500" />, text: "Security monitoring and vulnerability assessments" },
                        { icon: <Smartphone className="w-4 h-4 text-indigo-500" />, text: "Device compatibility updates for new Android devices" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and emergency response" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "Backend server maintenance and API updates" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Maintenance Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Support</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Standard Plan</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Support</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our maintenance ensures your app stays <span className="font-semibold">secure, up-to-date, and competitive</span> in the market.
                    </p>
                </div>
            </>
        ),
    }
];


export const flutter_app_faq = [
    {
        title: "What is Flutter and why should I choose it?",
        icon: <Smartphone className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter is Google's open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Single Codebase:</span>
                            <p className="text-blue-800 mt-1">Write once, run everywhere - iOS, Android, web, and desktop applications.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">High Performance:</span>
                            <p className="text-green-800 mt-1">Native-level performance with smooth 60fps animations and fast startup times.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Palette className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Rich UI Widgets:</span>
                            <p className="text-purple-800 mt-1">Extensive catalog of customizable widgets for beautiful, expressive UIs.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <DollarSign className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Cost-Effective:</span>
                            <p className="text-orange-800 mt-1">Reduce development time and costs with cross-platform code sharing.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        Flutter is trusted by <span className="font-semibold">Google, Alibaba, BMW, and thousands of developers</span> worldwide.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the advantages of Flutter over native development?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter offers significant advantages over traditional native development approaches:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Code className="w-4 h-4 text-blue-500" />, text: "Single codebase for multiple platforms reduces development time by 50-70%" },
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Cost-effective development with shared code and reduced maintenance overhead" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Hot reload feature enables instant code changes and faster iteration" },
                        { icon: <Users className="w-4 h-4 text-purple-500" />, text: "Smaller development team required compared to separate native teams" },
                        { icon: <Smartphone className="w-4 h-4 text-indigo-500" />, text: "Consistent UI/UX across all platforms with pixel-perfect designs" },
                        { icon: <RefreshCw className="w-4 h-4 text-orange-500" />, text: "Faster time-to-market with simultaneous multi-platform releases" },
                        { icon: <Settings className="w-4 h-4 text-pink-500" />, text: "Easy maintenance and updates across all platforms simultaneously" },
                        { icon: <TestTube className="w-4 h-4 text-cyan-500" />, text: "Comprehensive testing framework with widget and integration testing" }
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
                            Flutter provides <span className="font-semibold">90% code reusability</span> across platforms while maintaining native performance.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What programming language is used in Flutter?",
        icon: <Code className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter uses <span className="font-semibold text-purple-700">Dart programming language</span>, developed by Google specifically for modern app development:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Code className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Dart Language Features:</span>
                            <p className="text-purple-800 mt-1">Object-oriented, type-safe language with null safety and strong typing.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Zap className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">High Performance:</span>
                            <p className="text-blue-800 mt-1">Compiles to native ARM and x64 machine code for optimal performance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Easy to Learn:</span>
                            <p className="text-green-800 mt-1">Familiar syntax for developers coming from Java, C#, or JavaScript backgrounds.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Dart Advantages:</h4>
                    {[
                        "Fast development with hot reload capability",
                        "Strong typing system prevents common programming errors",
                        "Excellent tooling and IDE support (VS Code, IntelliJ)",
                        "Rich standard library and package ecosystem (pub.dev)",
                        "Ahead-of-time (AOT) compilation for production builds",
                        "Just-in-time (JIT) compilation for development"
                    ].map((advantage, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{advantage}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        Dart is <span className="font-semibold">easy to learn and optimized for Flutter development</span> with excellent performance characteristics.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does Flutter app development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter development timeline varies based on <span className="font-semibold">app complexity, features, design requirements, and platform targets</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Cross-Platform Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">4–8 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic UI, simple functionality, standard widgets</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–4 months</span>
                            <p className="text-blue-700 text-sm mt-1">Custom UI, API integrations, state management, animations</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Enterprise Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">4–8+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Advanced features, complex backend, real-time functionality</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Flutter Development Phases:</h4>
                    {[
                        "Requirements analysis and architecture planning (1-2 weeks)",
                        "UI/UX design and prototyping (1-3 weeks)",
                        "Cross-platform development and coding (3-16+ weeks)",
                        "Testing across multiple platforms (1-2 weeks)",
                        "App store submission for both iOS and Android (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Flutter's <span className="font-semibold">single codebase approach typically reduces development time by 40-60%</span> compared to native development.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of Flutter app development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter app development cost varies based on complexity, features, and platform requirements:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Cross-Platform Apps:</span>
                            <p className="text-green-800 mt-1">$15,000 - $35,000 for basic functionality across iOS and Android</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <p className="text-blue-800 mt-1">$35,000 - $80,000 for custom features, integrations, and advanced UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Crown className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise Flutter Apps:</span>
                            <p className="text-purple-800 mt-1">$80,000+ for complex functionality, enterprise integrations, and web/desktop support</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost-Saving Benefits:</h4>
                    {[
                        "50-70% cost reduction compared to separate native development",
                        "Single development team instead of separate iOS/Android teams",
                        "Shared codebase reduces maintenance and update costs",
                        "Faster time-to-market reduces overall project costs",
                        "Simultaneous platform releases eliminate staggered development",
                        "Lower testing costs with unified testing approach"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Flutter's <span className="font-semibold">cross-platform nature typically provides 40-60% cost savings</span> over native development.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can Flutter apps access native device features?",
        icon: <Smartphone className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> Flutter provides extensive access to <span className="font-semibold text-blue-700">native device features and APIs</span>:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Camera className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Camera & Media:</span>
                            <p className="text-blue-700 text-sm mt-1">Camera access, photo/video capture, image picking, and media processing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Location Services:</span>
                            <p className="text-green-700 text-sm mt-1">GPS location, geofencing, maps integration, and location tracking</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Bell className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Notifications:</span>
                            <p className="text-purple-700 text-sm mt-1">Push notifications, local notifications, and background processing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Fingerprint className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Biometric Authentication:</span>
                            <p className="text-orange-700 text-sm mt-1">Fingerprint, face recognition, and secure authentication methods</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Database className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Storage & Sensors:</span>
                            <p className="text-indigo-700 text-sm mt-1">File system access, accelerometer, gyroscope, and device sensors</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Platform Integration Methods:</h4>
                    {[
                        "Official Flutter plugins for common functionalities",
                        "Platform channels for custom native code integration",
                        "Method channels for calling native iOS/Android methods",
                        "Event channels for streaming data from native code",
                        "Plugin development for custom native feature access"
                    ].map((method, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{method}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Flutter provides <span className="font-semibold">95% native feature access</span> through plugins and platform channels.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How does Flutter handle app performance?",
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        description: (
            <>
                <div className="mb-4">
                    Flutter delivers exceptional performance through its unique architecture and optimization techniques:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-yellow-900">Skia Graphics Engine:</span>
                            <p className="text-yellow-800 mt-1">Hardware-accelerated 2D graphics engine ensures smooth 60fps animations.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Dart AOT Compilation:</span>
                            <p className="text-blue-800 mt-1">Ahead-of-time compilation to native machine code for optimal performance.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Layers className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Widget Tree Optimization:</span>
                            <p className="text-green-800 mt-1">Efficient widget rendering with minimal overhead and smart rebuilds.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Performance Features:</h4>
                    {[
                        "120fps support on capable devices",
                        "Minimal memory footprint and garbage collection",
                        "Tree shaking eliminates unused code from builds",
                        "Hot reload without losing app state during development",
                        "Isolates for multi-threaded processing",
                        "Efficient asset bundling and loading",
                        "Platform-specific performance optimizations"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{feature}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Flutter apps achieve <span className="font-semibold">near-native performance</span> with startup times comparable to native apps.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide Flutter app maintenance and support?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We offer comprehensive <span className="font-semibold text-purple-700">Flutter app maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "Flutter SDK updates and framework version upgrades" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and performance optimization across all platforms" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security updates and vulnerability patches" },
                        { icon: <Smartphone className="w-4 h-4 text-purple-500" />, text: "iOS and Android OS compatibility updates" },
                        { icon: <TrendingUp className="w-4 h-4 text-orange-500" />, text: "Feature enhancements and new functionality development" },
                        { icon: <BarChart className="w-4 h-4 text-indigo-500" />, text: "Performance monitoring and analytics integration" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and emergency response" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "Backend services maintenance and API updates" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Maintenance Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Support</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Standard Plan</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Support</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our maintenance ensures your Flutter app stays <span className="font-semibold">current, secure, and high-performing</span> across all platforms.
                    </p>
                </div>
            </>
        ),
    }
];


export const ios_app_faq = [
    {
        title: "What is iOS app development?",
        icon: <Apple className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS app development is the process of creating mobile applications specifically for Apple's iOS operating system:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Native Development:</span>
                            <p className="text-blue-800 mt-1">Built using Swift or Objective-C with iOS SDK for optimal performance and seamless integration.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Store className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Apple App Store:</span>
                            <p className="text-purple-800 mt-1">Exclusive distribution through Apple's curated app marketplace with premium user base.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Smartphone className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Device Compatibility:</span>
                            <p className="text-green-800 mt-1">Runs on iPhone, iPad, iPod Touch, Apple Watch, and Apple TV devices.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Shield className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Premium Quality:</span>
                            <p className="text-orange-800 mt-1">Apple's strict guidelines ensure high-quality apps with excellent user experience.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        iOS development targets <span className="font-semibold">premium users with higher spending power</span> and engagement rates.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the benefits of iOS app development?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS app development offers numerous advantages for businesses and developers:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Higher revenue potential with premium user base willing to pay for quality apps" },
                        { icon: <Shield className="w-4 h-4 text-blue-500" />, text: "Enhanced security with Apple's robust security model and encryption" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Superior performance with optimized hardware-software integration" },
                        { icon: <Users className="w-4 h-4 text-purple-500" />, text: "Loyal customer base with high engagement and retention rates" },
                        { icon: <Palette className="w-4 h-4 text-indigo-500" />, text: "Consistent UI/UX guidelines ensuring polished app experiences" },
                        { icon: <Globe className="w-4 h-4 text-cyan-500" />, text: "Global reach through Apple's international App Store presence" },
                        { icon: <Settings className="w-4 h-4 text-orange-500" />, text: "Advanced features and APIs available from Apple's ecosystem" },
                        { icon: <CheckCircle className="w-4 h-4 text-pink-500" />, text: "Quality assurance through Apple's strict app review process" }
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
                            iOS users generate <span className="font-semibold">70% more revenue</span> per user compared to other platforms.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "Which programming languages are used for iOS development?",
        icon: <Code className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS app development primarily uses Apple's modern programming languages and frameworks:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <Code className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Swift (Recommended):</span>
                            <p className="text-orange-800 mt-1">Apple's modern, safe, and fast programming language designed specifically for iOS development.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Objective-C (Legacy):</span>
                            <p className="text-blue-800 mt-1">Traditional iOS programming language, still used for maintaining existing apps and specific use cases.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Layers className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">SwiftUI:</span>
                            <p className="text-purple-800 mt-1">Apple's declarative UI framework for building modern, responsive user interfaces.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Development Tools & Frameworks:</h4>
                    {[
                        "Xcode - Apple's integrated development environment",
                        "UIKit - Traditional iOS UI framework",
                        "SwiftUI - Modern declarative UI framework",
                        "Core Data - Data persistence and management",
                        "CloudKit - Apple's cloud database service",
                        "Core Animation - Advanced animation capabilities",
                        "TestFlight - Beta testing and distribution platform"
                    ].map((tool, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{tool}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        <span className="font-semibold">Swift is now the preferred language</span> for iOS development, offering better performance and safety.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does iOS app development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS development timeline varies based on <span className="font-semibold">app complexity, features, design requirements, and Apple review process</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple iOS Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">6–12 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic UI, simple functionality, minimal integrations</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">3–6 months</span>
                            <p className="text-blue-700 text-sm mt-1">Custom UI, API integrations, user authentication, payment features</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Enterprise Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">6–12+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Advanced features, real-time functionality, complex backend integration</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">iOS Development Phases:</h4>
                    {[
                        "Requirements analysis and iOS-specific planning (1-2 weeks)",
                        "UI/UX design following Apple Human Interface Guidelines (2-4 weeks)",
                        "iOS development and coding with Swift/Objective-C (4-20+ weeks)",
                        "Testing on various iOS devices and versions (2-3 weeks)",
                        "Apple App Store submission and review process (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        Apple's review process typically takes <span className="font-semibold">24-48 hours</span> but can extend to 7 days for complex apps.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of iOS app development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS app development cost varies based on complexity, features, and quality requirements:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple iOS Apps:</span>
                            <p className="text-green-800 mt-1">$15,000 - $30,000 for basic functionality and standard UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <p className="text-blue-800 mt-1">$30,000 - $80,000 for custom features, integrations, and advanced UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Crown className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise iOS Apps:</span>
                            <p className="text-purple-800 mt-1">$80,000+ for complex functionality, enterprise integrations, and premium features</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Additional iOS Development Costs:</h4>
                    {[
                        "Apple Developer Program membership ($99/year)",
                        "Mac computer and Xcode for development",
                        "iOS device testing across multiple models",
                        "Apple App Store commission (30% for first year, 15% after)",
                        "Premium design and animation requirements",
                        "Integration with Apple services (iCloud, Apple Pay, etc.)",
                        "Ongoing maintenance and iOS version updates"
                    ].map((cost, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{cost}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        Higher development costs are often offset by <span className="font-semibold">premium user monetization and revenue potential</span>.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How do you ensure App Store approval?",
        icon: <Store className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    We follow Apple's strict guidelines and best practices to ensure smooth App Store approval:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <FileText className="w-4 h-4 text-blue-500" />, text: "Strict adherence to Apple's App Store Review Guidelines" },
                        { icon: <Palette className="w-4 h-4 text-green-500" />, text: "Following Apple Human Interface Guidelines for UI/UX design" },
                        { icon: <Shield className="w-4 h-4 text-purple-500" />, text: "Implementing proper privacy policies and data handling" },
                        { icon: <TestTube className="w-4 h-4 text-orange-500" />, text: "Thorough testing across multiple iOS devices and versions" },
                        { icon: <CheckCircle className="w-4 h-4 text-indigo-500" />, text: "Code quality assurance and performance optimization" },
                        { icon: <Settings className="w-4 h-4 text-pink-500" />, text: "Proper app metadata, descriptions, and keyword optimization" },
                        { icon: <Image className="w-4 h-4 text-cyan-500" />, text: "High-quality app icons, screenshots, and promotional materials" },
                        { icon: <Lock className="w-4 h-4 text-red-500" />, text: "Security compliance and encryption implementation" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-900 mb-2">Our Approval Success Rate:</h4>
                        <div className="flex items-center gap-2">
                            <div className="w-full bg-blue-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                            </div>
                            <span className="text-blue-800 font-semibold">98%</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        Our expertise ensures <span className="font-semibold">first-time approval in 98% of cases</span> with minimal revisions required.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What about iOS app security and data protection?",
        icon: <Shield className="w-5 h-5 text-red-500" />,
        description: (
            <>
                <div className="mb-4">
                    iOS app security is paramount. We implement Apple's security best practices and advanced protection measures:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg border-l-4 border-red-500">
                        <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-red-900">iOS Security Framework:</span>
                            <p className="text-red-800 mt-1">Leveraging Apple's built-in security architecture including Secure Enclave and hardware encryption.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Lock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Data Encryption:</span>
                            <p className="text-blue-800 mt-1">End-to-end encryption using Apple's CryptoKit and Keychain Services for secure data storage.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Fingerprint className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Biometric Authentication:</span>
                            <p className="text-green-800 mt-1">Face ID, Touch ID, and secure authentication methods integrated with Apple's APIs.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Security Implementations:</h4>
                    {[
                        "App Transport Security (ATS) for secure network communications",
                        "Code signing and app sandboxing for runtime protection",
                        "Keychain Services for secure credential storage",
                        "Certificate pinning and secure API communications",
                        "Regular security audits and vulnerability assessments",
                        "Compliance with GDPR, CCPA, and other privacy regulations",
                        "Secure payment processing with Apple Pay integration"
                    ].map((security, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{security}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                    <p className="text-red-800">
                        iOS provides <span className="font-semibold">industry-leading security</span> with hardware-level protection and regular security updates.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide iOS app maintenance and support?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> We offer comprehensive <span className="font-semibold text-purple-700">iOS app maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "iOS version updates and compatibility maintenance" },
                        { icon: <Apple className="w-4 h-4 text-gray-500" />, text: "Xcode and development tools updates" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and performance optimization" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security updates and vulnerability patches" },
                        { icon: <TrendingUp className="w-4 h-4 text-purple-500" />, text: "Feature enhancements and new functionality" },
                        { icon: <BarChart className="w-4 h-4 text-orange-500" />, text: "App Store optimization and analytics monitoring" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and emergency response" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "iCloud and backend services maintenance" }
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
                        Our maintenance ensures your iOS app stays <span className="font-semibold">compatible, secure, and competitive</span> in Apple's ecosystem.
                    </p>
                </div>
            </>
        ),
    }
];

export const react_native_app_faq = [
    {
        title: "What is React Native and why should I choose it?",
        icon: <Smartphone className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native is Facebook's open-source framework for building mobile applications using JavaScript and React:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Cross-Platform Development:</span>
                            <p className="text-blue-800 mt-1">Write once, run on both iOS and Android with shared codebase.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <Zap className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Near-Native Performance:</span>
                            <p className="text-green-800 mt-1">Direct rendering to native components for optimal performance and user experience.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Users className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Large Developer Community:</span>
                            <p className="text-purple-800 mt-1">Backed by Facebook with extensive community support and resources.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                        <DollarSign className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-orange-900">Cost-Effective:</span>
                            <p className="text-orange-800 mt-1">Reduce development time and costs with code reusability across platforms.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-800">
                        React Native powers <span className="font-semibold">Facebook, Instagram, Uber Eats, and Airbnb</span> mobile applications.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What are the advantages of React Native over other frameworks?",
        icon: <TrendingUp className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native offers significant advantages over other mobile development frameworks:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <Code className="w-4 h-4 text-blue-500" />, text: "80-90% code reusability between iOS and Android platforms" },
                        { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "Hot reloading enables instant code changes and faster development" },
                        { icon: <DollarSign className="w-4 h-4 text-green-500" />, text: "Cost-effective development with shared codebase and single team" },
                        { icon: <RefreshCw className="w-4 h-4 text-purple-500" />, text: "Fast refresh and live reloading for improved developer experience" },
                        { icon: <Settings className="w-4 h-4 text-indigo-500" />, text: "Native module integration for accessing platform-specific features" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "Large ecosystem and community support with extensive libraries" },
                        { icon: <Smartphone className="w-4 h-4 text-orange-500" />, text: "Native look and feel with platform-specific UI components" },
                        { icon: <Globe className="w-4 h-4 text-cyan-500" />, text: "Easy migration from existing React web applications" }
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
                            React Native reduces development time by <span className="font-semibold">30-50%</span> compared to native development.
                        </p>
                    </div>
                </div>
            </>
        ),
    },
    {
        title: "What technologies and tools are used in React Native development?",
        icon: <Code className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native development utilizes modern JavaScript technologies and development tools:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Code className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Programming Languages:</span>
                            <p className="text-purple-700 text-sm mt-1">JavaScript, TypeScript, JSX for component-based development</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Settings className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Development Tools:</span>
                            <p className="text-blue-700 text-sm mt-1">React Native CLI, Expo, Metro bundler, Flipper debugging</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <Database className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">State Management:</span>
                            <p className="text-green-700 text-sm mt-1">Redux, MobX, Context API, Zustand for application state</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Palette className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">UI Libraries:</span>
                            <p className="text-orange-700 text-sm mt-1">NativeBase, React Native Elements, UI Kitten, Shoutem UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <TestTube className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Testing Frameworks:</span>
                            <p className="text-indigo-700 text-sm mt-1">Jest, Detox, Enzyme, React Native Testing Library</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-700">
                        We use <span className="font-semibold">modern JavaScript ecosystem tools</span> for efficient React Native development.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How long does React Native app development take?",
        icon: <Clock className="w-5 h-5 text-orange-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native development timeline varies based on <span className="font-semibold">app complexity, features, design requirements, and platform-specific customizations</span>.
                </div>

                <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Cross-Platform Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">4–8 weeks</span>
                            <p className="text-green-700 text-sm mt-1">Basic UI, simple functionality, standard components</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">2–5 months</span>
                            <p className="text-blue-700 text-sm mt-1">Custom UI, API integrations, state management, navigation</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Complex Enterprise Apps:</span>
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">5–10+ months</span>
                            <p className="text-purple-700 text-sm mt-1">Advanced features, real-time functionality, complex integrations</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">React Native Development Phases:</h4>
                    {[
                        "Requirements analysis and cross-platform planning (1-2 weeks)",
                        "UI/UX design for both iOS and Android (2-4 weeks)",
                        "Cross-platform development and coding (3-20+ weeks)",
                        "Testing on both iOS and Android devices (2-3 weeks)",
                        "App store submission for both platforms (1-2 weeks)"
                    ].map((phase, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{phase}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-orange-800">
                        React Native's <span className="font-semibold">shared codebase reduces development time by 30-50%</span> compared to native development.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "What is the cost of React Native app development?",
        icon: <DollarSign className="w-5 h-5 text-green-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native app development cost varies based on complexity, features, and customization requirements:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Simple Cross-Platform Apps:</span>
                            <p className="text-green-800 mt-1">$12,000 - $30,000 for basic functionality across iOS and Android</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">Medium Complexity Apps:</span>
                            <p className="text-blue-800 mt-1">$30,000 - $75,000 for custom features, integrations, and advanced UI</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg border-l-4 border-purple-500">
                        <Crown className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-purple-900">Enterprise React Native Apps:</span>
                            <p className="text-purple-800 mt-1">$75,000+ for complex functionality, enterprise integrations, and scalability</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Cost-Saving Benefits:</h4>
                    {[
                        "40-60% cost reduction compared to separate native app development",
                        "Single development team instead of separate iOS/Android teams",
                        "Shared codebase reduces maintenance and update costs",
                        "Faster time-to-market reduces overall project expenses",
                        "Reusable components and libraries speed up development",
                        "Lower testing costs with unified testing approach"
                    ].map((benefit, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <ArrowRight className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{benefit}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        React Native typically provides <span className="font-semibold">30-50% cost savings</span> over native development approaches.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Can React Native apps access native device features?",
        icon: <Smartphone className="w-5 h-5 text-blue-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Yes!</span> React Native provides extensive access to <span className="font-semibold text-blue-700">native device features and APIs</span>:
                </div>

                <div className="grid gap-3">
                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                        <Camera className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-blue-900">Camera & Media:</span>
                            <p className="text-blue-700 text-sm mt-1">Camera access, photo/video capture, image picker, and media processing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-green-900">Location Services:</span>
                            <p className="text-green-700 text-sm mt-1">GPS location, geofencing, maps integration, and location tracking</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                        <Bell className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-purple-900">Push Notifications:</span>
                            <p className="text-purple-700 text-sm mt-1">Push notifications, local notifications, and background processing</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                        <Database className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-orange-900">Storage & Sensors:</span>
                            <p className="text-orange-700 text-sm mt-1">AsyncStorage, device sensors, accelerometer, and file system access</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
                        <Wifi className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-medium text-indigo-900">Network & Connectivity:</span>
                            <p className="text-indigo-700 text-sm mt-1">Network status, Bluetooth, WiFi, and connectivity management</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Native Integration Methods:</h4>
                    {[
                        "React Native community packages for common functionalities",
                        "Native modules for custom iOS/Android code integration",
                        "Bridge communication between JavaScript and native code",
                        "Third-party library integration and customization",
                        "Platform-specific implementations when needed"
                    ].map((method, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{method}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <p className="text-blue-800">
                        React Native provides <span className="font-semibold">90-95% native feature access</span> through community packages and native modules.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "How does React Native performance compare to native apps?",
        icon: <Zap className="w-5 h-5 text-yellow-500" />,
        description: (
            <>
                <div className="mb-4">
                    React Native delivers near-native performance through its unique architecture and optimization techniques:
                </div>

                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
                        <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-yellow-900">Native Component Rendering:</span>
                            <p className="text-yellow-800 mt-1">UI components render to native views for smooth performance and authentic look.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                        <Code className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-blue-900">JavaScript Engine Optimization:</span>
                            <p className="text-blue-800 mt-1">Hermes engine and JSI provide faster app startup and better memory usage.</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border-l-4 border-green-500">
                        <RefreshCw className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                            <span className="font-semibold text-green-900">Bridge Optimization:</span>
                            <p className="text-green-800 mt-1">Efficient communication between JavaScript and native threads for smooth animations.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 space-y-2">
                    <h4 className="font-semibold text-gray-900">Performance Comparison:</h4>
                    {[
                        "UI Performance: 95-98% of native app performance",
                        "CPU-intensive tasks: 85-90% of native performance", 
                        "Memory usage: Comparable to native apps with proper optimization",
                        "Animation performance: Near-native with proper implementation",
                        "Network operations: Equivalent to native app performance",
                        "Device feature access: Native-level performance through bridges"
                    ].map((comparison, index) => (
                        <div key={index} className="flex items-start gap-2 p-2">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-700 text-sm">{comparison}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-200">
                    <p className="text-yellow-800">
                        React Native achieves <span className="font-semibold">95%+ native performance</span> for most mobile app use cases.
                    </p>
                </div>
            </>
        ),
    },
    {
        title: "Do you provide React Native app maintenance and support?",
        icon: <Settings className="w-5 h-5 text-purple-500" />,
        description: (
            <>
                <div className="mb-4">
                    <span className="font-semibold">Absolutely!</span> We offer comprehensive <span className="font-semibold text-purple-700">React Native app maintenance and support services</span>:
                </div>

                <div className="space-y-2">
                    {[
                        { icon: <RefreshCw className="w-4 h-4 text-blue-500" />, text: "React Native framework updates and version upgrades" },
                        { icon: <Bug className="w-4 h-4 text-red-500" />, text: "Bug fixes and performance optimization for both platforms" },
                        { icon: <Shield className="w-4 h-4 text-green-500" />, text: "Security updates and vulnerability patches" },
                        { icon: <Smartphone className="w-4 h-4 text-purple-500" />, text: "iOS and Android OS compatibility updates" },
                        { icon: <TrendingUp className="w-4 h-4 text-orange-500" />, text: "Feature enhancements and new functionality development" },
                        { icon: <Package className="w-4 h-4 text-indigo-500" />, text: "Third-party library updates and dependency management" },
                        { icon: <Users className="w-4 h-4 text-pink-500" />, text: "24/7 technical support and emergency response" },
                        { icon: <Cloud className="w-4 h-4 text-cyan-500" />, text: "Backend services maintenance and API updates" }
                    ].map((item, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {item.icon}
                            <p className="text-gray-700">{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                        <h4 className="font-semibold text-purple-900 mb-2">Maintenance Plans:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Basic Support</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Standard Plan</span>
                            <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm">Enterprise Support</span>
                        </div>
                    </div>
                </div>

                <div className="mt-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <p className="text-purple-800">
                        Our maintenance ensures your React Native app stays <span className="font-semibold">current, secure, and high-performing</span> across both platforms.
                    </p>
                </div>
            </>
        ),
    }
];



// Combined export for all FAQ categories
export const all_service_faqs = {
    web_development: web_dev_faq,
    mobile_development: mobile_dev_faq,
    uiux_design: uiux_faq,
    mern_mean_stack: mern_mean_faq,
    android_app_development: android_app_faq,
    flutter_app_development: flutter_app_faq,
    ios_app_development: ios_app_faq,
    cloud_devops: cloud_devops_faq,
    automation_testing: automation_testing_faq,
    emerging_technology: emerging_tech_faq,
    wordpress_development: wordpress_faq,
    static_website: static_website_faq,
    ai_ml: ai_ml_faq,
    nextjs_development: nextjs_faq
};
