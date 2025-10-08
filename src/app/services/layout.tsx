
import { getOrigin } from '@/lib/helper-functions';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const origin = await getOrigin();
    
    return {
        title: 'Our Services | Ridipt Technologies - Complete Tech Solutions',
        description: 'Comprehensive technology services including Mobile App Development (iOS & Android), Web Application Development, AI & ML Solutions, Cloud Services & DevOps, and Automation Testing. Transform your business with our expert solutions.',
        keywords: [
            'Mobile App Development',
            'iOS App Development',
            'Android App Development',
            'Web Application Development',
            'Custom Software Development',
            'AI Solutions',
            'Machine Learning Services',
            'Cloud Services',
            'DevOps Solutions',
            'Automation Testing',
            'QA Services',
            'React Development',
            'Next.js Development',
            'Node.js Development',
            'Technology Services',
            'Ridipt Technologies Services'
        ],
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: 'Our Services | Ridipt Technologies - Complete Tech Solutions',
            description: 'Expert technology services: Mobile Apps, Web Development, AI/ML, Cloud & DevOps, Automation Testing. Scale your business with cutting-edge solutions.',
            type: 'website',
            url: `${origin}/services`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: `${origin}/og-services.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Ridipt Technologies Services - Mobile, Web, AI, Cloud Solutions',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Our Services | Ridipt Technologies',
            description: 'Complete tech solutions: Mobile Apps, Web Development, AI/ML, Cloud & DevOps, Automation Testing',
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
            canonical: `${origin}/services`,
        },
        metadataBase: new URL(origin),
        category: 'Technology Services',
    };
}

export default function ServicesLayout({
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
