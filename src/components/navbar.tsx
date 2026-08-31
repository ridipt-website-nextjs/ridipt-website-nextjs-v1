"use client";
import {
    Navbar as NavbarComponent,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    MobileNavItems,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

const services = [
    {
        name: 'AI Services',
        link: "/services/ai-services",
        items: [
            {
                name: 'AI Chatbots & Copilots',
                link: '/services/ai-services/ai-chatbots-copilots'
            }, {
                name: 'LLM & RAG Integration',
                link: '/services/ai-services/llm-rag-integration'
            }, {
                name: 'AI-Powered Automation',
                link: '/services/ai-services/ai-powered-automation'
            }, {
                name: 'Predictive Analytics & AI Insights',
                link: '/services/ai-services/predictive-analytics'
            }, {
                name: 'AI Strategy & Readiness Consulting',
                link: '/services/ai-services/ai-strategy-consulting'
            }
        ]
    }, {
        name: 'Web Development',
        link: "/services/web-development",
        items: [
            {
                name: 'MEAN/MERN Stack',
                link: '/services/web-development/mean-mern-stack'
            }, {
                name: 'Next.js',
                link: '/services/web-development/nextjs'
            }, {
                name: 'HTML/CSS/JS',
                link: '/services/web-development/html-css-js'
            }, {
                name: 'WordPress',
                link: '/services/web-development/wordpress'
            }
        ]
    }, {
        name: 'Mobile Development',
        link: "/services/mobile-development",
        items: [
            {
                name: 'Android',
                link: '/services/mobile-development/android'
            }, {
                name: 'Flutter',
                link: '/services/mobile-development/flutter'
            }, {
                name: 'iOS',
                link: '/services/mobile-development/ios'
            }, {
                name: 'React Native',
                link: '/services/mobile-development/react-native'
            }
        ]
    }, {
        name: 'Emerging Technology',
        link: '/services/emerging-technology',
        items: [
            {
                name: 'AI/ML/GenAI',
                link: '/services/emerging-technology/ai-ml-genai'
            }, {
                name: 'DevOps',
                link: '/services/emerging-technology/devops'
            }, {
                name: 'Data Science',
                link: '/services/emerging-technology/data-science'
            }, {
                name: 'Blockchain',
                link: '/services/emerging-technology/blockchain'
            }
        ]
    }, {
        name: 'Data Privacy & DPDP',
        link: '/services/data-privacy-dpdp-compliance',
        items: [
            {
                name: 'DPDP Readiness Assessment',
                link: '/services/data-privacy-dpdp-compliance#how-we-can-help'
            }, {
                name: 'Personal Data Discovery & Mapping',
                link: '/services/data-privacy-dpdp-compliance#how-we-can-help'
            }, {
                name: 'Production Data Security Assessment',
                link: '/services/data-privacy-dpdp-compliance#how-we-can-help'
            }, {
                name: 'Request an Assessment',
                link: '/services/data-privacy-dpdp-compliance#request-assessment'
            }
        ]
    }
];

const ServicesGrid = () => {
    return (
        <div className="w-full mx-auto bg-transparent p-2">
            {/* Header Section */}
            <div className="mb-5 text-center">
                <h2 className="text-xl font-bold text-foreground mb-1">Our Services</h2>
                <p className="text-muted-foreground text-sm">Comprehensive solutions for your business needs</p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="group justify-between flex flex-col bg-card/50 border border-border/50 rounded-xl p-4 hover:shadow-lg hover:shadow-primary/5 hover:border-accent-foreground transition-all duration-300 hover:-translate-y-1"
                            >
                                <div>
                                    <div className="mb-3">
                                        <Link
                                            href={service.link}
                                            className="inline-flex items-center gap-2 text-base font-semibold text-accent-foreground group-hover:text-accent-foreground transition-colors duration-200"
                                        >
                                            {service.name}
                                            <svg
                                                className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        {service.items.map((item, itemIndex) => (
                                            <Link
                                                key={itemIndex}
                                                href={item.link}
                                                className="group/item flex items-center gap-2 p-1.5 -m-1.5 rounded-lg hover:bg-primary/5 transition-all duration-200"
                                            >
                                                <span className="text-muted-foreground group-hover/item:text-accent-foreground/70 transition-colors duration-200 text-xs font-medium flex-1 leading-snug">
                                                    {item.name}
                                                </span>
                                                <svg
                                                    className="w-3 h-3 flex-shrink-0 text-muted-foreground/40 group-hover/item:text-accent-foreground/70 group-hover/item:translate-x-0.5 transition-all duration-200"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-3 pt-3 border-t border-border/30">
                                    <Link
                                        href={service.link}
                                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                                    >
                                        View all services
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};




export const navItems = [
    {
        name: "Home",
        link: "/",
    },
    {
        name: "Company",
        items: [{
            name: "About Us",
            link: "/about-us"
        }, {
            name: 'Portfolio',
            link: "/portfolio"
        },{
            name: 'Blogs',
            link: "/blogs"

        }]
    },
    {
        name: "Services",
        content: <ServicesGrid />
    },
    {
        name: "Technologies",
        link: "/technologies",
    },
];

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const router = useRouter();

    return (
        <div className="sticky top-0 z-50 w-full">
            <NavbarComponent>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* Theme toggle component */}
                        <div onClick={(e) => e.stopPropagation()}>
                            <ModeToggle />
                        </div>

                        <NavbarButton
                            className="dark:bg-secondary bg-accent-foreground capitalize text-secondary dark:text-secondary-foreground hover:dark:text-secondary hover:text-accent-foreground  hover:bg-secondary transition-all duration-300 ease-in-out"
                            variant="primary"
                            onClick={() => router.push('/get-in-touch')}
                        >
                            get a quote
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav
                    className="!sticky top-0 !w-full"
                >
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        <MobileNavItems items={navItems} onItemClick={() => setIsMobileMenuOpen(false)} />

                        <div className="flex w-full flex-col gap-4">
                            <Button
                                onClick={() => router.push('/get-in-touch')}
                                variant="secondary"
                                className="w-full capitalize"
                            >
                                get a quote
                            </Button>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </NavbarComponent>
        </div>
    );
}
