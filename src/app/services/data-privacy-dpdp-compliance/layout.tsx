import { getOrigin } from '@/lib/helper-functions';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const origin = await getOrigin();

    return {
        title: 'Data Privacy & DPDP Compliance Solutions | Ridipt Technologies',
        description: 'DPDP Readiness Assessment, Personal Data Discovery & Mapping, Access Governance, Production Data Security Assessment and more. Build a practical roadmap for Digital Personal Data Protection (DPDP) Act compliance with Ridipt Technologies.',
        keywords: [
            'DPDP Act Compliance',
            'DPDP Readiness Assessment',
            'Data Privacy Compliance India',
            'Personal Data Discovery and Mapping',
            'Access Governance Assessment',
            'Production Data Security Assessment',
            'Data Retention and Secure Deletion',
            'Data Breach Readiness Assessment',
            'Vendor Privacy Assessment',
            'Digital Personal Data Protection Act',
            'Data Privacy Consulting',
            'Ridipt Technologies DPDP',
        ],
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: 'Data Privacy & DPDP Compliance Solutions | Ridipt Technologies',
            description: 'Evaluate your organization’s privacy posture and build a practical roadmap towards DPDP compliance with Ridipt Technologies.',
            type: 'website',
            url: `${origin}/services/data-privacy-dpdp-compliance`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: `${origin}/og-services.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Data Privacy & DPDP Compliance Solutions - Ridipt Technologies',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Data Privacy & DPDP Compliance Solutions | Ridipt Technologies',
            description: 'DPDP Readiness Assessment and practical, technology-driven privacy & compliance solutions.',
            images: [`${origin}/twitter-services.jpg`],
            creator: '@RidiptTech',
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
        alternates: {
            canonical: `${origin}/services/data-privacy-dpdp-compliance`,
        },
        metadataBase: new URL(origin),
        category: 'Data Privacy & Compliance',
    };
}

export default function DataPrivacyDpdpLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}
