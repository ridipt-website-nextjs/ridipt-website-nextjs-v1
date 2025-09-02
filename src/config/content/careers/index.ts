import { Instagram,  Mail, Phone, Users, Briefcase,  Code, PenTool,  Building2 } from 'lucide-react';


export const socialMediaCards = [
  {
    name: "glassdoor",
    platform: "Glassdoor",
    icon: Building2,
    bgColor: "bg-green-500",
    gradientFrom: "from-green-400",
    gradientTo: "to-green-600",
    textColor: "text-white",
    link: "https://glassdoor.com",
  },
  {
    name: "instagram",
    platform: "Instagram",
    icon: Instagram,
    bgColor: "bg-pink-500",
    gradientFrom: "from-pink-400",
    gradientTo: "to-purple-600",
    textColor: "text-white",
    link: "https://instagram.com",
  },
];

export const careerJobs = [
    {
        name: 'instagram',
        icon: Instagram,
        title: 'Social Media Manager',
        description:
            'Drive our brand’s presence across social media platforms by creating engaging campaigns, managing communities, and tracking performance metrics.',
        type: 'Full-time',
        location: 'Remote / Hybrid',
        department: 'Marketing',
        responsibilities: [
            'Plan, create, and publish engaging content for social channels',
            'Monitor social media trends and audience behavior',
            'Collaborate with designers and marketing team for campaigns',
            'Track KPIs and prepare monthly performance reports',
        ],
        qualifications: [
            'Bachelor’s degree in Marketing, Communications, or related field',
            '2+ years of experience in social media management',
            'Strong copywriting and content creation skills',
            'Familiarity with analytics tools (Meta Business Suite, Buffer, etc.)',
        ],
        perks: [
            'Flexible working hours',
            'Remote-friendly policy',
            'Opportunities for growth and training',
            'Team outings and creative workshops',
        ],
    },
    {
        name: 'linkedin',
        icon: Briefcase,
        title: 'Business Development Manager',
        description:
            'Identify and pursue growth opportunities by building client relationships, negotiating deals, and driving company revenue.',
        type: 'Full-time',
        location: 'On-site',
        department: 'Sales',
        responsibilities: [
            'Develop and implement growth strategies for the company',
            'Build and maintain long-term client relationships',
            'Negotiate business deals and close contracts',
            'Work closely with leadership to align with company goals',
        ],
        qualifications: [
            'Bachelor’s degree in Business, Sales, or related field',
            '3+ years of experience in business development or sales',
            'Excellent communication and negotiation skills',
            'Ability to analyze market trends and competition',
        ],
        perks: [
            'Performance-based bonuses',
            'Health insurance and benefits',
            'Professional development opportunities',
            'Dynamic and collaborative work environment',
        ],
    },
    {
        name: 'developer',
        icon: Code,
        title: 'Frontend Developer',
        description:
            'Build responsive, user-friendly web interfaces and collaborate with designers and backend engineers to deliver high-quality digital products.',
        type: 'Full-time',
        location: 'Hybrid',
        department: 'Engineering',
        responsibilities: [
            'Develop and maintain web applications using React',
            'Ensure cross-browser compatibility and performance',
            'Collaborate with UI/UX designers to implement features',
            'Write clean, scalable, and maintainable code',
        ],
        qualifications: [
            'Bachelor’s degree in Computer Science or related field',
            '2+ years of frontend development experience',
            'Proficiency in JavaScript, React, and CSS',
            'Familiarity with Git and modern development workflows',
        ],
        perks: [
            'Latest tech equipment',
            'Work with a passionate dev team',
            'Learning & certification budget',
            'Hybrid work culture',
        ],
    },
    {
        name: 'designer',
        icon: PenTool,
        title: 'UI/UX Designer',
        description:
            'Design intuitive and visually appealing digital experiences that meet user needs and align with brand guidelines.',
        type: 'Contract',
        location: 'Remote',
        department: 'Design',
        responsibilities: [
            'Create wireframes, prototypes, and design systems',
            'Conduct user research and usability testing',
            'Work with developers to implement design solutions',
            'Maintain brand consistency across digital platforms',
        ],
        qualifications: [
            'Proven experience in UI/UX design',
            'Proficiency with tools like Figma or Adobe XD',
            'Strong understanding of user-centered design principles',
            'Excellent visual design and communication skills',
        ],
        perks: [
            'Work-from-anywhere flexibility',
            'Creative freedom and ownership',
            'Collaborative design team',
            'Access to design conferences & workshops',
        ],
    },
    {
        name: 'hr',
        icon: Users,
        title: 'HR & Talent Acquisition Specialist',
        description:
            'Manage the recruitment process, employee engagement, and help build a strong company culture.',
        type: 'Full-time',
        location: 'On-site',
        department: 'Human Resources',
        responsibilities: [
            'Source and recruit top talent across departments',
            'Manage onboarding and training programs',
            'Support employee engagement initiatives',
            'Ensure compliance with HR policies and labor laws',
        ],
        qualifications: [
            'Bachelor’s degree in Human Resources or related field',
            '2+ years of HR or recruitment experience',
            'Strong interpersonal and organizational skills',
            'Knowledge of HR systems and databases',
        ],
        perks: [
            'Comprehensive health benefits',
            'Employee wellness programs',
            'Team-building events',
            'Career growth and learning opportunities',
        ],
    },
];


export const contactInfo = [
  {
    icon: Mail,
    text: "hello@ridipt.com",
    type: "email",
    link: `mailto:hello@ridipt.com`,
  },
  {
    icon: Phone,
    text: "+91 (234) 567-8900",
    type: "phone",
    // Clean number for tel link (remove spaces, brackets, and dashes)
    link: `tel:${"+91 (234) 567-8900".replace(/[\s()-]/g, "")}`,
  },
];
