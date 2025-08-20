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
    MessageSquare
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

// Combined export for all FAQ categories
export const all_service_faqs = {
    web_development: web_dev_faq,
    mobile_development: mobile_dev_faq,
    uiux_design: uiux_faq,
    cloud_devops: cloud_devops_faq,
    automation_testing: automation_testing_faq,
    emerging_technology: emerging_tech_faq,
    ai_ml: ai_ml_faq
};
