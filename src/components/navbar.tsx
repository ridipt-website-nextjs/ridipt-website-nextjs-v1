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
} from "@/components/ui/resizable-navbar";
import { Sun } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Company",
            items: [{
                name: "About Us",
                link: "/about"
            }, {
                name: 'Portfolio',
                link: "/portfolio"
            }]
        },
        {
            name: "Services",
            items: [{
                name: "Web Development",
                link: "/services/web-development"
            }, {
                name: "Mobile Development",
                link: "/services/mobile-development"
            }, {
                name: "UI/UX Design",
                link: "/services/ui-ux-design"
            }, {
                name: 'Cloud & DevOps',
                link: "/services/cloud-devops"
            }, {
                name: 'Automation testing',
                link: "/services/automation-testing"
            }, {
                name: 'Ai & ML',
                link: "/services/ai-ml"
            }]
        },
        {
            name: "Technologies",
            link: "/",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className="sticky  top-1 z-50 w-full ">
            <NavbarComponent>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">
                        {/* in future will uncomment this btn when use of login functionality */}
                        {/* <NavbarButton variant="secondary">Login</NavbarButton> */}

                        {/* Theme toggle component */}
                        <div
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ModeToggle />

                        </div>


                        <NavbarButton variant="primary">Contact us</NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
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
                        {navItems.map((item, idx) => (
                            <Link
                                key={`mobile-link-${idx}`}
                                href={item.link!}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300"
                            >
                                <span className="block">{item.name}</span>
                            </Link>
                        ))}
                        <div className="flex w-full flex-col gap-4">

                            {/* when login functionality is implemented uncomment this btn */}
                            {/* <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Login
                            </NavbarButton> */}
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full"
                            >
                                Contact us
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </NavbarComponent>

            {/* Navbar */}
        </div>
    );
}
