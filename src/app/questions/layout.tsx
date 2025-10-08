
import { Metadata } from 'next';
import { questionsData } from '@/config/content/security/question.content';
import { getOrigin } from '@/lib/helper-functions';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = params;
    const question = questionsData.find((q) => q.slug === slug);

    if (!question) {
        return {
            title: 'Question Not Found | Ridipt Technologies',
            description: 'The software development question you are looking for does not exist.',
        };
    }

    // Generate SEO-friendly keywords from category and title
    const keywords = [
        question.title,
        question.category,
        'Software Development',
        'Technology Guide',
        'Best Practices',
        'Ridipt Technologies',
        'Development Questions',
        'Tech Guidance'
    ];

    return {
        title: `${question.title} | Ridipt Technologies`,
        description: question.shortDescription,
        keywords,
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: `${question.title} | Ridipt Technologies`,
            description: question.shortDescription,
            type: 'article',
            url: `${await getOrigin()}/questions/${slug}`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: '/og-questions.jpg', // You can make this dynamic per question
                    width: 1200,
                    height: 630,
                    alt: question.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${question.title} | Ridipt Technologies`,
            description: question.shortDescription,
            images: ['/twitter-questions.jpg'],
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
            canonical: `https://your-domain.com/questions/${slug}`,
        },
        category: question.category,
    };
}

// Generate static params for all questions
export function generateStaticParams() {
    return questionsData.map((question) => ({
        slug: question.slug,
    }));
}

export default function QuestionLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
