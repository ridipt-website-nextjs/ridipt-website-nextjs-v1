import { Metadata } from 'next';
import industriesData from '@/config/content/industries';
import { getOrigin } from '@/lib/helper-functions';

// Industry metadata mapping
const industryMetadata = {
    healthcare: {
        title: 'Healthcare Technology Solutions | Medical Software Development',
        description: 'Transform healthcare with HIPAA-compliant platforms, telemedicine apps, patient portals, lab management systems, and healthcare analytics.',
        keywords: 'Healthcare Software, Medical App Development, Telemedicine, HIPAA Compliant, Patient Portal, Lab Management',
        image: '/og-healthcare.jpg',
    },
    fintech: {
        title: 'Fintech Software Development | Banking & Financial Solutions',
        description: 'Secure fintech solutions including digital banking, payment gateways, cryptocurrency wallets, and investment platforms. PCI-DSS compliant.',
        keywords: 'Fintech Development, Digital Banking, Payment Gateway, Crypto Wallet, Investment Platform',
        image: '/og-fintech.jpg',
    },
    ecommerce: {
        title: 'E-commerce Development | Online Store Solutions',
        description: 'Build powerful e-commerce platforms with secure payments, inventory management, multi-vendor marketplaces, and omnichannel solutions.',
        keywords: 'E-commerce Development, Online Store, Shopify, Multi-vendor Marketplace, Payment Integration',
        image: '/og-ecommerce.jpg',
    },
    education: {
        title: 'Education Technology Solutions | EdTech Development',
        description: 'Transform education with LMS platforms, online learning apps, student management systems, and virtual classrooms.',
        keywords: 'EdTech Development, LMS, Online Learning, Student Management, Virtual Classroom',
        image: '/og-education.jpg',
    },
    'restaurant-food': {
        title: 'Restaurant & Food Delivery Solutions | Food Tech',
        description: 'Restaurant management systems, food delivery apps, online ordering platforms, and kitchen management solutions.',
        keywords: 'Restaurant Software, Food Delivery App, Online Ordering, POS System, Kitchen Management',
        image: '/og-restaurant.jpg',
    },
    'human-resource': {
        title: 'HR Management Software | HRMS Development',
        description: 'Comprehensive HRMS solutions including payroll, recruitment, performance tracking, and employee management.',
        keywords: 'HRMS Development, HR Software, Payroll System, Recruitment Platform, Employee Management',
        image: '/og-hr.jpg',
    },
    'social-media': {
        title: 'Social Media Platform Development | Community Apps',
        description: 'Build engaging social platforms, community apps, content sharing networks, and messaging platforms with real-time features.',
        keywords: 'Social Media Development, Community App, Content Sharing, Messaging Platform, Social Networking',
        image: '/og-social-media.jpg',
    },
    'custom-solution': {
        title: 'Custom Software Development | Tailored Solutions',
        description: 'Bespoke software solutions designed for your unique business needs. Custom web, mobile, and enterprise applications.',
        keywords: 'Custom Software, Bespoke Solutions, Tailored Development, Business Software, Enterprise Apps',
        image: '/og-custom.jpg',
    },
    'logistics-supply-chain': {
        title: 'Logistics & Supply Chain Software | Fleet Management',
        description: 'Optimize logistics with warehouse management, fleet tracking, inventory management, and supply chain analytics.',
        keywords: 'Logistics Software, Supply Chain Management, Warehouse Management, Fleet Tracking, Inventory System',
        image: '/og-logistics.jpg',
    },
};

type Props = {
    params: { id: string };
};

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { id } = await params;
    const data = industriesData[id as keyof typeof industriesData];
    const metaInfo = industryMetadata[id as keyof typeof industryMetadata];
    const origin = await getOrigin();

    // Default metadata if industry not found
    if (!data || !metaInfo) {
        return {
            title: 'Industry Not Found | Ridipt Technologies',
            description: 'The industry page you are looking for does not exist.',
        };
    }

    return {
        title: `${metaInfo.title} | Ridipt Technologies`,
        description: metaInfo.description,
        keywords: metaInfo.keywords.split(', '),
        authors: [{ name: 'Ridipt Technologies' }],
        openGraph: {
            title: `${metaInfo.title} | Ridipt Technologies`,
            description: metaInfo.description,
            type: 'website',
            url: `${origin}/industries/${id}`,
            siteName: 'Ridipt Technologies',
            images: [
                {
                    url: metaInfo.image,
                    width: 1200,
                    height: 630,
                    alt: metaInfo.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${metaInfo.title} | Ridipt Technologies`,
            description: metaInfo.description,
            images: [metaInfo.image],
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
            canonical: `https://your-domain.com/industries/${id}`,
        },
    };
}

export default function IndustryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
