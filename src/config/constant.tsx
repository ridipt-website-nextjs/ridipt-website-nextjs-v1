
import { reactIcon } from "@/assests/technology_icons"
const tech_stack = {
    'frotend': [
        {
            name: "React",
            icon: reactIcon,
        }, {
            name: "Next.js",
            icon: '',
        }, {
            name: "Angular",
            icon: "angular",
        }, {
            name: "Vue.js",
            icon: "vuejs",
        }, {
            name: 'chakra-ui',
            icon: "chakra-ui",
        }, {
            name: "Tailwind CSS",
            icon: "tailwindcss",
        }, {
            name: "Material UI",
            icon: "material-ui",
        }, {
            name: "Sass",
            icon: "sass",
        }, {
            name: "CSS3",
            icon: "css3",
        }, {
            name: "HTML5",
            icon: "html5",
        }
    ],
    'backend': [
        {
            name: "Node.js",
            icon: "nodejs",
        }, {
            name: "Express.js",
            icon: "expressjs",
        }, {
            name: "Firebase",
            icon: "firebase",
        },
    ],
    fullstack: [
        {

        }
    ],
    frameworks: [
        {
            name: "React",
            icon: "react",
        }, {
            name: "Angular",
            icon: "angular",
        }, {
            name: "Vue.js",
            icon: "vuejs",
        }, {
            name: "Next.js",
            icon: "nextjs",
        }, {
            name: "Nuxt.js",
            icon: "nuxtjs",
        }, {
            name: "Express.js",
            icon: "expressjs",
        }, {
            name: "Django",
            icon: "django",
        }, {
            name: "Flask",
            icon: "flask",
        }, {
            name: "Ruby on Rails",
            icon: "ruby-on-rails",
        }, {
            name: "Spring Boot",
            icon: "spring-boot",
        }, {
            name: "Laravel",
            icon: "laravel",
        }
    ],
    databases: [
        {
            name: "MongoDB",
            icon: "mongodb",
        }, {
            name: "MySQL",
            icon: "mysql",
        }, {
            name: "PostgreSQL",
            icon: "postgresql",
        }, {
            name: "SQLite",
            icon: "sqlite",
        }, {
            name: "Firebase Realtime Database",
            icon: "firebase-realtime-database",
        }, {
            name: "Redis",
            icon: "redis",
        }
    ],
    devOps: [
        {
            name: "Docker",
            icon: "docker",
        }, {
            name: "Kubernetes",
            icon: "kubernetes",
        }, {
            name: "AWS",
            icon: "aws",
        }, {
            name: "Azure",
            icon: "azure",
        }, {
            name: "Google Cloud Platform",
            icon: "google-cloud-platform",
        }, {
            name: "CI/CD",
            icon: "ci-cd",
        }
    ],
    cloud: [
        {
            name: "AWS",
            icon: "aws",
        }, {
            name: "Azure",
            icon: "azure",
        }, {
            name: "Google Cloud Platform",
            icon: "google-cloud-platform",
        }, {
            name: "IBM Cloud",
            icon: "ibm-cloud",
        }, {
            name: "Oracle Cloud",
            icon: "oracle-cloud",
        }, {
            name: "DigitalOcean",
            icon: "digitalocean",
        }],
    testing: [
        {
            name: "Jest",
            icon: "jest",
        }, {
            name: "Mocha",
            icon: "mocha",
        }, {
            name: "Cypress",
            icon: "cypress",
        }, {
            name: "Pytest",
            icon: "pytest",
        }, {
            name: "Unittest",
            icon: "unittest",
        }, {
            name: "TestNG",
            icon: "testng",
        }]
}


export const industries = [
    {
        title: "Retail & E-commerce",
        description: "Omnichannel Solutions, Inventory Management, Customer Analytics",
        image: require('@/assests/industry/ecommerce.svg')
    },
    {
        title: "Healthcare & Wellness",
        description: "Telehealth, Medical Records, Wellness Apps",
        image: require('@/assests/industry/healthcare.svg')
    },
    {
        title: "EdTech & E-Learning",
        description: "Virtual Classrooms, Student Analytics, Learning Management Systems",
        image: require('@/assests/industry/elearning.svg')
    },
    {
        title: "Fintech",
        description: "Digital Banking, Investment Platforms, Fraud Detection",
        image: require('@/assests/industry/banking.svg')
    },
    {
        title: "Logistics & Transportation",
        description: "Fleet Management, Route Optimization, Supply Chain Analytics",
        image: require('@/assests/industry/logistics.svg')
    }
];


export const partners = [
    {
        name: 'aws',
        image: require('@/assests/partners/aws.svg')
    }, {
        name: 'azure',
        image: require('@/assests/partners/azure.svg')
    }
]


export const menifesto = [
    {
        title: "Purpose-Driven",
        description:
            "Every project we undertake is designed to solve real challenges, create lasting value, and help businesses thrive.",
        image: require("@/assests/menifesto/target.svg"),
    },
    {
        title: "Innovation at Heart",
        description:
            "We embrace the latest technologies and creative approaches to craft solutions that are as unique as your vision.",
        image: require("@/assests/menifesto/inovation.svg"),
    },
    {
        title: "Excellence in Every Detail",
        description:
            "We focus on the finer details because they drive the big-picture success of every project.",
        image:require("@/assests/menifesto/trophy.svg"),
    },
    {
        title: "Collaboration Over Competition",
        description:
            "Your success is our success. We work side-by-side with our clients to achieve extraordinary results.",
        image: require("@/assests/menifesto/collaboration.svg"),
    },
    {
        title: "Agility and Adaptability",
        description:
            "In a world of constant change, we evolve and innovate with speed and precision to meet your needs.",
        image: require("@/assests/menifesto/agile.svg"),
    },
    {
        title: "Human-Centric Approach",
        description:
            "Technology serves people. Every solution we create is built with the end user’s experience in mind.",
        image: require("@/assests/menifesto/person.svg"),
    },
];


export const vision = [
  {
    title: "Consistent Growth",
    description: "We have built a company that facilitates consistent growth for each employee, client, and the overall company in terms of monetary gains, knowledge, and solutions.",
    image: require('@assets/vision/growth.jpg'),
    isAnimation: false,
    highlights: [
      "Employee Growth & Development",
      "Client Success & Retention", 
      "Revenue Growth",
      "Knowledge Expansion"
    ]
  },
  {
    title: "Work Culture",
    description: "We aspire to provide a conducive work environment for our employees to encourage innovation and creativity in their ideas and execution. We believe in providing a holistic approach for the team so that they can refresh their energies and reinvigorate their creativity from time to time.",
    image: require('@assets/animations/vision/work-culture.json'), 
    isAnimation: true,
    highlights: [
      "Innovation & Creativity",
      "Collaborative Environment",
      "Work-Life Balance",
      "Team Building Activities"
    ]
  },
  {
    title: "Customer Satisfaction",
    description: "We aspire to create and retain customers for the foreseeable future with effective communication and proper resolution of their issues. We extend reliable and flexible services to ensure utmost satisfaction for our end clients.",
    image: require('@assets/vision/feedback.jpg'),
    isAnimation: false, 
    highlights: [
      "Effective Communication",
      "Quick Issue Resolution",
      "Reliable Services",
      "Long-term Relationships"
    ]
  },
  {
    title: "Societal Contribution",
    description: "We continue to contribute to the society through several means as an expression of gratitude. We offer Industrial Training to college students while offering them exposure to various industry niches, along with blood donation camps on a periodic basis.",
    image: require("@/assests/vision/Societal Contribution.jpg"),
    isAnimation: false,
    highlights: [
      "Industrial Training Programs",
      "College Student Mentorship", 
      "Blood Donation Drives",
      "Community Engagement"
    ]
  }
];
