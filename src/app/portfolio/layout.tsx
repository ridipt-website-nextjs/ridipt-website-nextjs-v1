// app/portfolio/layout.tsx
import { getOrigin } from '@/lib/helper-functions';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const origin = await getOrigin();
    
    return {
        title: 'Portfolio | Ridipt Technologies - Our Success Stories',
        description: 'Explore our portfolio of successful projects including e-commerce apps, healthcare platforms, travel booking websites, lab management systems, and grocery delivery solutions. See how we transform businesses through technology.',
        keywords: [
            'Ridipt Portfolio',
            'Mobile App Development Projects',
            'Web Development Portfolio',
            'E-commerce App Development',
            'Healthcare Platform Development',
            'Travel Booking System',
            'Lab Report Management',
            'Grocery Delivery App',
            'Case Studies',
            'Project Showcase',
            'Client Success Stories',
            'Ridipt Technologies Projects'
        ],
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: 'Portfolio | Ridipt Technologies - Our Success Stories',
            description: 'Discover our portfolio of innovative mobile apps, web platforms, and enterprise solutions. From e-commerce to healthcare, see how we deliver excellence.',
            type: 'website',
            url: `${origin}/portfolio`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: `${origin}/og-portfolio.jpg`,
                    width: 1200,
                    height: 630,
                    alt: 'Ridipt Technologies Portfolio - Success Stories',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'Portfolio | Ridipt Technologies',
            description: 'Explore our portfolio of successful projects across e-commerce, healthcare, travel, and more',
            images: [`${origin}/twitter-portfolio.jpg`],
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
            canonical: `${origin}/portfolio`,
        },
        metadataBase: new URL(origin),
    };
}

export default function PortfolioLayout({
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
