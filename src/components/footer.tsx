'use client'
import React, { useState, useEffect } from 'react'
import { Moon, Sun, Monitor, Globe } from "lucide-react"
import { useTheme } from "next-themes"
import Link from 'next/link';
import { Button } from './ui/button';

export const industries: { name: string; link: string }[] = [
  { name: "Healthcare", link: "/industries/healthcare" },
  { name: "Fintech", link: "/industries/fintech" },
  { name: "E-commerce", link: "/industries/ecommerce" },
  { name: "Education", link: "/industries/education" },
  { name: "Restaurant / Food", link: "/industries/restaurant-food" },
  { name: "Human Resource", link: "/industries/human-resource" },
  { name: "Social Media", link: "/industries/social-media" },
  { name: "Custom Solution", link: "/industries/custom-solution" },
  { name: "Logistics & Supply Chain", link: "/industries/logistics-supply-chain" },
].map(item => ({
  ...item,
  id: item.link.split("/").pop() || ""
}));

const Footer = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter submission
  }

  if (!mounted) {
    return null // or a loading skeleton
  }

  return (
    <footer className='w-full border-t bg-footer border-muted text-primary'>
      {/* DPDP Readiness CTA Banner */}
      <div className='border-b border-muted bg-accent-foreground/10'>
        <div className='container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-3 text-center sm:text-left'>
          <p className='text-sm font-medium dark:text-primary text-secondary'>
            Start your DPDP journey with a practical readiness assessment tailored to your organization.
          </p>
          <Link
            href='/services/data-privacy-dpdp-compliance#request-assessment'
            className='shrink-0 text-sm font-semibold text-accent-foreground hover:underline'
          >
            Schedule a DPDP Readiness Assessment →
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className='container mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>

          {/* Company Info */}
          <div className='lg:col-span-1'>
            <div className='mb-6'>
              <h2 className='text-2xl font-bold dark:text-primary text-secondary mb-4'>
                Ridipt Technologies
              </h2>
              <p className='text-sm font-light text-secondary dark:text-primary'>
                Crafting Futuristic Solutions with State-of-the-Art Technology.
                As a global leader, we deliver stellar and cost-effective solutions
                that pave the way for innovation.
              </p>
              <p className='text-accent-foreground font-medium text-sm'>
                "Innovating the Future with Cutting-Edge Technology"
              </p>
            </div>

            {/* Simple Global Presence */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium dark:text-primary text-secondary mb-3 flex items-center gap-2'>
                <Globe className='w-4 h-4' />
                Global Presence
              </h4>
              <div className='space-y-2'>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-secondary dark:text-primary'>🇮🇳</span>
                  <span className='text-sm font-light text-secondary dark:text-primary'>India</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-secondary dark:text-primary'>🇺🇸</span>
                  <span className='text-sm font-light text-secondary dark:text-primary'>USA</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <span className='text-secondary dark:text-primary'>uk</span>
                  <span className='text-sm font-light text-secondary dark:text-primary'>UK</span>
                </div>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className='flex space-x-4'>
              <Link href='https://www.linkedin.com/company/ridipt/' className='text-sm font-bold text-secondary dark:text-primary'>
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                </svg>
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-lg font-semibold dark:text-primary text-secondary mb-6'>Services</h3>
            <ul className='space-y-3'>
              <li><Link href='/services/mobile-development' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Mobile App Development</Link></li>
              <li><Link href='/services/web-development' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Web App Development</Link></li>
              <li><Link href='/services/emerging-technology/devops' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Cloud Solutions</Link></li>
              <li><Link href='/services/emerging-technology/ai-ml-genai' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>AI & Machine Learning</Link></li>
              <li><Link href='/services/data-privacy-dpdp-compliance' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Data Privacy & DPDP Compliance</Link></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className='text-lg font-semibold dark:text-primary text-secondary mb-6'>Industries</h3>
            <ul className='space-y-3'>
              {industries.map((industry) => (
                <li key={industry.link}>
                  <Link
                    href={industry.link}
                    className="text-sm font-light text-secondary dark:text-primary  hover:underline"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Appearance */}
          <div>
            <h3 className='text-lg font-semibold dark:text-primary text-secondary mb-6'>Get in Touch</h3>
            <div className='space-y-4 mb-6'>
              <div className='flex items-start space-x-3'>
                <svg className='w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
                <p className='text-sm font-light text-secondary dark:text-primary'>123 Tech Street, Innovation Hub, City 12345</p>
              </div>
              <div className='flex items-center space-x-3'>
                <svg className='w-5 h-5 text-blue-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
                <Link href='mailto:hr@progneur.com' className='text-sm font-light text-secondary dark:text-primary'>hr@progneur.com</Link>
              </div>
              <div className='flex items-center space-x-3'>
                <svg className='w-5 h-5 text-blue-400 flex-shrink-0' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' />
                </svg>
                <Link href='tel:+1234567890' className='text-sm font-light text-secondary dark:text-primary'>+91 (234) 567-8900</Link>
              </div>
            </div>

            {/* Appearance Section */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium dark:text-primary text-secondary mb-3'>Appearance</h4>
              <div className='flex items-center space-x-2'>
                <button
                  onClick={() => setTheme('light')}
                  className={`p-2 rounded-lg transition-all duration-200 ${theme === 'light'
                    ? 'dark:bg-primary bg-accent-foreground text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:dark:text-primary hover:text-secondary hover:bg-muted/50'
                    }`}
                  title="Light mode"
                >
                  <Sun className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setTheme('dark')}
                  className={`p-2 rounded-lg transition-all duration-200 ${theme === 'dark'
                    ? 'dark:bg-primary bg-accent-foreground text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:dark:text-primary hover:text-secondary hover:bg-muted/50'
                    }`}
                  title="Dark mode"
                >
                  <Moon className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setTheme('system')}
                  className={`p-2 rounded-lg transition-all duration-200 ${theme === 'system'
                    ? 'dark:bg-primary bg-accent-foreground text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:dark:text-primary hover:text-secondary hover:bg-muted/50'
                    }`}
                  title="System mode"
                >
                  <Monitor className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* About Links */}
            <div>
              <h4 className='text-sm font-medium dark:text-primary text-secondary mb-3'>Company</h4>
              <ul className='space-y-2'>
                <li><Link href='/about-us' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>About Us</Link></li>
                <li><Link href='/careers' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Careers</Link></li>
                <li><Link href='/blogs' className='text-sm font-light text-secondary dark:text-primary  hover:underline'>Blog</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className='border-t border-muted pt-8 mb-8'>
          <div className='max-w-md mx-auto text-center'>
            <h3 className='text-lg font-semibold dark:text-primary text-secondary  mb-3'>Stay Updated</h3>
            <p className='text-muted-foreground text-sm mb-4'>
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='flex gap-2'>
              <input
                type='email'
                placeholder='Enter your email'
                className='flex-1 px-4 focus:border py-2 bg-card border border-border rounded-lg text-primary text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
                required
              />
              <Button
                type='submit'
                className='px-6 py-2 transition-all ease-in-out  text-sm font-medium rounded-lg duration-300 whitespace-nowrap'
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='border-t border-muted bg-inherit'>
        <div className='container mx-auto px-6 py-4'>
          <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4'>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm'>
              <span className='text-muted-foreground'>© 2025 Ridipt Technologies. All rights reserved.</span>
              <span className='text-muted-foreground'>🇮🇳 🇺🇸 🇬🇧 Global Presence</span>
            </div>
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2'>
              <Link href='#' className='text-muted-foreground hover:dark:text-primary hover:text-secondary transition-colors duration-300 text-sm'>Privacy Policy</Link>
              <Link href='#' className='text-muted-foreground hover:dark:text-primary hover:text-secondary transition-colors duration-300 text-sm'>Terms of Service</Link>
              <Link href='#' className='text-muted-foreground hover:dark:text-primary hover:text-secondary transition-colors duration-300 text-sm'>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
