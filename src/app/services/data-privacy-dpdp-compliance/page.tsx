'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import Structure from '@/components/common/page-structure';
import Section from '@/components/section-structure';
import Header from '@/components/section-heading';
import InquiryForm, { FormField } from '@/components/careers/form';
import { Button } from '@/components/ui/button';
import heroBg from '@assets/backgrounds/bg7.jpg';
import {
    AlertCircle,
    AlertTriangle,
    Building2,
    Check,
    FolderSearch,
    Handshake,
    IndianRupee,
    Lock,
    Scale,
    ShieldCheck,
    Trash2,
    Users,
} from 'lucide-react';

// ---------------------------------------------------------------------------
// Motion helpers — kept local to this page
// ---------------------------------------------------------------------------

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const Reveal = ({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
        {children}
    </motion.div>
);

// ---------------------------------------------------------------------------
// Static content for the page
// ---------------------------------------------------------------------------

const challenges: string[] = [
    "Do you know where your organisation's personal data is stored?",
    'Who has access to your sensitive employee and customer information?',
    'Is production data being exposed through development or testing environments?',
    'Would your organisation be ready to demonstrate DPDP compliance during a customer review, audit or regulatory inquiry?',
];

interface HelpCard {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const helpCards: HelpCard[] = [
    {
        icon: ShieldCheck,
        title: 'DPDP Readiness Assessment',
        description:
            "Evaluate your organization's current privacy posture and receive a practical roadmap towards DPDP compliance.",
    },
    {
        icon: FolderSearch,
        title: 'Personal Data Discovery & Mapping',
        description:
            'Identify where employee, customer and vendor data resides across applications, databases, cloud platforms and business processes.',
    },
    {
        icon: Users,
        title: 'Access Governance Assessment',
        description:
            'Review user access, administrator privileges and identify unnecessary or excessive access to sensitive personal information.',
    },
    {
        icon: Trash2,
        title: 'Data Retention & Secure Deletion',
        description:
            'Review data retention practices and establish practical controls for secure archival and deletion.',
    },
    {
        icon: AlertTriangle,
        title: 'Data Breach Readiness Assessment',
        description:
            "Evaluate your organization's ability to detect, respond to and recover from personal data breaches.",
    },
    {
        icon: Handshake,
        title: 'Vendor & Third-Party Privacy Assessment',
        description:
            'Review how vendors and service providers collect, process and protect personal information.',
    },
];

const productionDataSecurity = {
    title: 'Production Data Security Assessment',
    description:
        'Many organizations unknowingly expose sensitive employee and customer information by using production data within Development, UAT and testing environments.',
    highlights: [
        'Production, UAT and Development environment segregation',
        'Developer access review',
        'Test data masking practices',
        'Production database permission review',
        'Backup security assessment',
        'Secure software development practices',
    ],
};

const gains: string[] = [
    'Assessment of your current privacy posture',
    'Personal Data Discovery & Mapping',
    'Privacy & Technology Risk Assessment',
    'Prioritized Recommendations',
    'Practical Implementation Roadmap',
];

const dpdpFormFields: FormField[] = [
    {
        name: 'name',
        label: 'Name',
        required: true,
        type: 'text',
    },
    {
        name: 'company',
        label: 'Company',
        required: true,
        type: 'text',
    },
    {
        name: 'designation',
        label: 'Designation',
        required: true,
        type: 'text',
    },
    {
        name: 'email',
        label: 'Email',
        required: true,
        type: 'email',
    },
    {
        name: 'mobile',
        label: 'Mobile Number',
        required: true,
        type: 'phone',
    },
    {
        name: 'companySize',
        label: 'Company Size',
        required: true,
        type: 'select',
        options: [
            '1–50 Employees',
            '51–200 Employees',
            '201–500 Employees',
            '501–1000 Employees',
            '1000+ Employees',
        ],
    },
    {
        name: 'erpHrms',
        label: 'Current ERP / HRMS (Optional)',
        required: false,
        type: 'text',
    },
    {
        name: 'message',
        label: 'Message',
        required: false,
        type: 'textarea',
    },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const REQUEST_ASSESSMENT_ANCHOR = 'request-assessment';

function DataPrivacyDpdpPage() {
    const scrollToAssessment = (e: React.MouseEvent) => {
        e.preventDefault();
        document
            .getElementById(REQUEST_ASSESSMENT_ANCHOR)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const handleSubmit = async (data: any) => {
        try {
            const res = await fetch('/api/dpdp-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json();
                alert(`Error: ${errorData.message || 'Failed to submit form'}`);
                return;
            }

            await res.json();
            alert(
                'Thank you! Your DPDP Readiness Assessment request has been submitted. Our team will reach out shortly.'
            );
        } catch (error: any) {
            console.error('Error submitting DPDP assessment request:', error);
            alert('Something went wrong. Please try again.');
        }
    };

    return (
        <Structure className="!p-0">
            {/* ---------------------------------------------------------------- */}
            {/* Hero Banner — styled like the homepage hero (full-bleed image, */}
            {/* color-burn blend, large left-aligned heading, pill CTA)         */}
            {/* ---------------------------------------------------------------- */}
            <div className="relative h-auto w-full overflow-hidden py-24 md:py-36 [transform-style:preserve-3d]">
                <Image
                    src={heroBg}
                    alt="Background"
                    fill
                    className="object-cover object-center"
                    style={{ mixBlendMode: 'color-burn' }}
                    placeholder="blur"
                    sizes="100vw"
                />
                {/* Contrast overlay so the copy stays legible over the image in any theme */}
                <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/40 to-black/10" />

                <motion.div
                    className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 md:px-8"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    <motion.span
                        variants={fadeUp}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                    >
                        <ShieldCheck className="h-4 w-4 text-accent-foreground" />
                        Data Privacy & DPDP Compliance Solutions
                    </motion.span>

                    <motion.h1
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="max-w-4xl text-start text-3xl font-bold leading-tight text-secondary dark:text-primary md:text-6xl"
                    >
                        Is Your Organization Ready for DPDP Compliance?
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="max-w-2xl text-start text-base text-secondary/70 dark:text-primary/70 md:text-xl"
                    >
                        Can you confidently answer these questions? Are you facing these challenges?
                    </motion.p>

                    <motion.div
                        className="mt-2 grid w-full max-w-4xl gap-3 text-left sm:grid-cols-2"
                        variants={staggerContainer}
                    >
                        {challenges.map((challenge, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeUp}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                whileHover={{ y: -3 }}
                                className="flex items-start gap-3 rounded-lg border border-white/15 bg-white/10 p-4 backdrop-blur-sm transition-colors duration-300 hover:border-accent-foreground/50 hover:bg-white/15"
                            >
                                <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent-foreground" />
                                <p className="text-sm text-secondary/80 dark:text-primary/80">{challenge}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: 'easeOut' }}>
                        <Link
                            href={`#${REQUEST_ASSESSMENT_ANCHOR}`}
                            onClick={scrollToAssessment}
                            className="mt-2 inline-block rounded-full border-2 border-transparent bg-accent-foreground px-8 py-3 text-secondary shadow-lg shadow-accent-foreground/20 transition-all duration-300 hover:scale-105 hover:border-accent-foreground hover:bg-accent hover:text-accent-foreground hover:shadow-xl hover:shadow-accent-foreground/30 dark:text-primary"
                        >
                            Schedule a DPDP Readiness Assessment
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* ---------------------------------------------------------------- */}
            {/* Why It Matters to Your Organization */}
            {/* ---------------------------------------------------------------- */}
            <Section className="relative overflow-hidden">
                <Reveal className="w-full">
                    <div className="mx-auto flex w-full max-w-6xl flex-col gap-10">
                        <h2 className="mx-auto max-w-3xl text-pretty text-center text-3xl font-medium text-secondary-foreground md:text-4xl">
                            Why It Matters to Your Organization
                        </h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.25 }}
                            variants={staggerContainer}
                            className="grid gap-6 md:grid-cols-5"
                        >
                            <motion.div
                                variants={fadeUp}
                                whileHover={{ y: -4, scale: 1.01 }}
                                className="group relative flex flex-col justify-between gap-5 overflow-hidden rounded-2xl border border-destructive/30 bg-destructive/5 p-6 transition-shadow duration-300 hover:shadow-[0_20px_45px_-20px_rgba(220,38,38,0.45)] md:col-span-2 md:p-8"
                            >
                                <span className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-destructive transition-transform duration-500 group-hover:scale-x-100" />
                                <div className="flex items-center gap-3">
                                    <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                                        <span className="absolute inset-0 animate-ping rounded-full bg-destructive/20" />
                                        <IndianRupee className="relative h-5 w-5" />
                                    </span>
                                    <span className="text-sm font-medium uppercase tracking-wide text-destructive/80">
                                        Maximum Penalty Exposure
                                    </span>
                                </div>
                                <p className="text-4xl font-semibold text-destructive md:text-5xl">
                                    ₹250 Crore
                                </p>
                                <p className="text-sm leading-relaxed text-foreground/80 md:text-base">
                                    Failure to comply with certain provisions of the DPDP framework may
                                    attract financial penalties up to this amount, depending on the
                                    applicable legal provisions.
                                </p>
                            </motion.div>

                            <div className="flex flex-col gap-6 md:col-span-3">
                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -3 }}
                                    className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:border-accent-foreground/40 hover:bg-card/60 md:p-6"
                                >
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <Scale className="h-5 w-5" />
                                    </span>
                                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                        The Digital Personal Data Protection (DPDP) Act requires
                                        organizations that process digital personal data to implement
                                        appropriate technical and organizational safeguards.
                                    </p>
                                </motion.div>

                                <motion.div
                                    variants={fadeUp}
                                    whileHover={{ y: -3 }}
                                    className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/40 p-5 transition-all duration-300 hover:border-accent-foreground/40 hover:bg-card/60 md:p-6"
                                >
                                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-accent-foreground/10 text-accent-foreground transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                                        <Building2 className="h-5 w-5" />
                                    </span>
                                    <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                                        Organizations today manage personal data across HRMS, ERP, CRM,
                                        payroll systems, websites, cloud platforms and business
                                        applications. Regularly reviewing privacy practices, strengthening
                                        security controls and improving governance helps reduce business
                                        risk and supports compliance with the DPDP framework.
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </Reveal>
            </Section>

            {/* ---------------------------------------------------------------- */}
            {/* How We Can Help */}
            {/* ---------------------------------------------------------------- */}
            <Section id="how-we-can-help" className="relative overflow-hidden">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.4] dark:opacity-[0.15]"
                    style={{
                        backgroundImage:
                            'radial-gradient(var(--border) 1px, transparent 1px)',
                        backgroundSize: '28px 28px',
                        maskImage:
                            'radial-gradient(ellipse 60% 60% at 50% 30%, black 40%, transparent 80%)',
                    }}
                />

                <Reveal className="w-full">
                    <Header
                        heading="How We Can Help"
                        subheading="Practical, Technology-Driven Privacy Solutions"
                        description="A focused set of assessments to help you understand, prioritize and close your organization's DPDP compliance gaps."
                    />
                </Reveal>

                <motion.div
                    className="relative grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={staggerContainer}
                >
                    {helpCards.map((card, idx) => {
                        const Icon = card.icon;
                        return (
                            <motion.article
                                key={idx}
                                variants={fadeUp}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className="group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-accent-foreground/40 hover:shadow-[0_20px_45px_-20px_rgba(33,142,195,0.45)]"
                            >
                                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-accent-foreground to-accent-foreground/30 transition-transform duration-300 ease-out group-hover:scale-x-100" />

                                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary text-accent-foreground transition-transform duration-300 group-hover:scale-110">
                                    <Icon className="h-6 w-6" />
                                </div>

                                <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>

                                <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                                    {card.description}
                                </p>
                            </motion.article>
                        );
                    })}
                </motion.div>
            </Section>

            {/* ---------------------------------------------------------------- */}
            {/* Production Data Security Assessment — dedicated featured section */}
            {/* ---------------------------------------------------------------- */}
            <Section>
                <Reveal className="w-full">
                    <div className="relative w-full overflow-hidden rounded-2xl border border-accent-foreground/40 bg-gradient-to-br from-accent-foreground/10 via-card to-card p-6 shadow-lg md:p-10">
                        <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-foreground/20 blur-3xl" />

                        <span className="absolute right-6 top-6 rounded-full bg-accent-foreground px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
                            Featured Service
                        </span>

                        <div className="relative flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
                            <div className="relative flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-accent-foreground text-primary-foreground">
                                <span className="absolute inset-0 rounded-full bg-accent-foreground/60 animate-ping" />
                                <Lock className="relative h-8 w-8" />
                            </div>

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <h3 className="max-w-2xl text-2xl font-semibold text-foreground md:text-3xl">
                                        {productionDataSecurity.title}
                                    </h3>
                                    <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                                        {productionDataSecurity.description}
                                    </p>
                                </div>

                                <motion.ul
                                    className="grid grid-cols-1 gap-3 sm:grid-cols-2"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.3 }}
                                    variants={staggerContainer}
                                >
                                    {productionDataSecurity.highlights.map((highlight, idx) => (
                                        <motion.li
                                            key={idx}
                                            variants={fadeUp}
                                            transition={{ duration: 0.4, ease: 'easeOut' }}
                                            className="flex items-start gap-2 rounded-lg border border-border/50 bg-card/60 p-3 text-sm text-foreground transition-colors duration-300 hover:border-accent-foreground/40 hover:bg-card"
                                        >
                                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-foreground" />
                                            {highlight}
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                <Button size="lg" className="mt-1 w-fit px-8" onClick={scrollToAssessment}>
                                    Schedule This Assessment
                                </Button>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </Section>

            {/* ---------------------------------------------------------------- */}
            {/* Start with a DPDP Readiness Assessment */}
            {/* ---------------------------------------------------------------- */}
            <Section>
                <Reveal className="w-full">
                    <Header
                        heading="Get Started"
                        subheading="Start with a DPDP Readiness Assessment"
                        description="A DPDP Readiness Assessment helps your organization understand its current privacy posture, identify privacy and security risks, and build a practical roadmap for strengthening governance and supporting DPDP compliance."
                    />
                </Reveal>

                <motion.div
                    className="grid w-full max-w-3xl gap-3 sm:grid-cols-2"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={staggerContainer}
                >
                    {gains.map((gain, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeUp}
                            transition={{ duration: 0.45, ease: 'easeOut' }}
                            whileHover={{ y: -2 }}
                            className="flex items-center gap-3 rounded-lg border border-border/50 bg-card p-4 transition-colors duration-300 hover:border-accent-foreground/40"
                        >
                            <span className="flex size-6 flex-shrink-0 items-center justify-center rounded-full bg-secondary">
                                <Check size={14} className="text-accent-foreground" />
                            </span>
                            <span className="text-sm text-foreground">{gain}</span>
                        </motion.div>
                    ))}
                </motion.div>

                <Reveal delay={0.15}>
                    <Button size="lg" className="mt-2 px-8" onClick={scrollToAssessment}>
                        Request a DPDP Readiness Assessment
                    </Button>
                </Reveal>
            </Section>

            {/* ---------------------------------------------------------------- */}
            {/* Contact Us / Request a DPDP Readiness Assessment (dedicated section) */}
            {/* ---------------------------------------------------------------- */}
            <Section id={REQUEST_ASSESSMENT_ANCHOR} className="scroll-mt-24 !mb-20">
                <Reveal className="w-full">
                    <Header
                        heading="Contact Us"
                        subheading="Request a DPDP Readiness Assessment"
                        description="Whether your organization is beginning its DPDP journey or strengthening existing privacy controls, our team can help you identify risks, improve governance and implement practical, technology-driven solutions."
                    />
                </Reveal>

                <Reveal delay={0.1} className="w-full max-w-4xl">
                    <InquiryForm
                        applicationFormFields={dpdpFormFields}
                        onSubmit={handleSubmit}
                        submitButtonText="Schedule a DPDP Readiness Assessment"
                        className="w-full"
                    />
                </Reveal>
            </Section>
        </Structure>
    );
}

export default DataPrivacyDpdpPage;
