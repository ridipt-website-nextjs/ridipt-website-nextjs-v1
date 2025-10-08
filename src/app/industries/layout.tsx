
import { getOrigin } from '@/lib/helper-functions';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const origin = await getOrigin();
    
    return {
        title: 'Industries We Serve | Ridipt Technologies - Domain Expertise',
        description: 'Ridipt Technologies serves diverse industries including Healthcare, Fintech, E-commerce, Education, Restaurant/Food, Human Resource, Social Media, Custom Solutions, and Logistics & Supply Chain. Expert technology solutions tailored for your industry.',
        keywords: [
            'Healthcare Technology Solutions',
            'Fintech Software Development',
            'E-commerce Platform Development',
            'Education Technology',
            'EdTech Solutions',
            'Restaurant Management Software',
            'Food Delivery Solutions',
            'HR Management Systems',
            'HRMS Development',
            'Social Media Platform Development',
            'Custom Software Solutions',
            'Logistics Software',
            'Supply Chain Management',
            'Industry-Specific Solutions',
            'Ridipt Technologies Industries'
        ],
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: 'Industries We Serve | Ridipt Technologies',
            description: 'Expert technology solutions for Healthcare, Fintech, E-commerce, Education, Food, HR, Social Media, Logistics, and more',
            type: 'website',
            url: `${origin}/industries`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: `${origin}/og-industries.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Ridipt Technologies - Industries We Serve',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Industries We Serve | Ridipt Technologies',
            description: 'Technology solutions for Healthcare, Fintech, E-commerce, Education, and more',
            images: [`${origin}/twitter-industries.jpg`],
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
            canonical: `${origin}/industries`,
        },
        metadataBase: new URL(origin),
    };
}

export default function IndustriesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
