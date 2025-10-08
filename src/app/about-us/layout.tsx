
import { Metadata } from 'next';
import { getOrigin } from '@/lib/helper-functions';

export async function generateMetadata(): Promise<Metadata> {
    const origin = await getOrigin();
    
    return {
        title: 'About Us | Ridipt Technologies - Innovation & Excellence',
        description: 'Learn about Ridipt Technologies - a trusted technology partner specializing in custom web portals, mobile apps, AI solutions, and cloud architectures. Offshore arm of Progneur Technologies.',
        keywords: ['Ridipt Technologies', 'About Us', 'Technology Partner', 'Web Development', 'Mobile Apps', 'AI Solutions', 'Cloud Services', 'Progneur Technologies'],
        openGraph: {
            title: 'About Us | Ridipt Technologies',
            description: 'Trusted technology partner delivering innovative solutions',
            type: 'website',
            url: `${origin}/about-us`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: '/og-image.jpg',
                    width: 1200,
                    height: 630,
                    alt: 'Ridipt Technologies',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: 'About Us | Ridipt Technologies',
            description: 'Trusted technology partner delivering innovative solutions',
            images: ['/twitter-image.jpg'],
        },
    };
}

export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
