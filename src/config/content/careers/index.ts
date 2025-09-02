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
    id: "social-media-manager",
    name: "instagram",
    icon: Instagram,
    title: "Social Media Manager",
    description: "Drive our brand's presence across social media platforms by creating engaging campaigns, managing communities, and tracking performance metrics.",
    
    // Detailed Attributes
    detailedDescription: "Join our dynamic marketing team as a Social Media Manager and become the voice of our brand across digital platforms. You'll spearhead our social media strategy, creating compelling content that resonates with our diverse audience and drives meaningful engagement.",
    
    type: "Full-time",
    location: "Remote / Hybrid",
    department: "Marketing",
    salary: {
      min: 40000,
      max: 60000,
      currency: "USD",
      period: "annually"
    },
    
    experience: {
      level: "Mid-level",
      yearsRequired: "2-4 years",
      specificExperience: [
        "Social media management",
        "Content creation",
        "Community management",
        "Digital marketing campaigns"
      ]
    },
    
    education: {
      degree: "Bachelor's degree",
      fields: ["Marketing", "Communications", "Digital Media", "Journalism"],
      alternatives: "Equivalent experience with proven social media success"
    },
    
    responsibilities: [
      "Plan, create, and publish engaging content for social channels",
      "Monitor social media trends and audience behavior",
      "Collaborate with designers and marketing team for campaigns",
      "Track KPIs and prepare monthly performance reports",
      "Manage social media advertising budgets and campaigns",
      "Respond to customer inquiries and manage community engagement",
      "Develop social media style guides and content calendars",
      "Coordinate with influencers and brand partnerships"
    ],
    
    requiredSkills: [
      "Strong copywriting and content creation",
      "Social media strategy development",
      "Analytics and data interpretation",
      "Community management",
      "Brand voice consistency",
      "Crisis management",
      "Trend identification and adaptation"
    ],
    
    technicalSkills: [
      "Meta Business Suite",
      "Buffer or Hootsuite",
      "Google Analytics",
      "Canva or Adobe Creative Suite",
      "Social media advertising platforms",
      "Content management systems",
      "Basic graphic design",
      "Video editing tools"
    ],
    
    qualifications: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "2+ years of experience in social media management",
      "Strong copywriting and content creation skills",
      "Familiarity with analytics tools (Meta Business Suite, Buffer, etc.)",
      "Experience with paid social advertising platforms",
      "Knowledge of graphic design tools (Canva, Adobe Creative Suite)",
      "Understanding of SEO and content marketing principles",
      "Excellent time management and project coordination skills"
    ],
    
    workEnvironment: {
      culture: "Creative, collaborative, fast-paced",
      teamSize: "5-8 marketing team members",
      reportingTo: "Marketing Director",
      collaboratesWith: ["Design Team", "Content Writers", "Product Team", "Customer Service"],
      workStyle: "Hybrid with flexible hours"
    },
    
    growthOpportunities: [
      "Lead social media team expansion",
      "Advance to Digital Marketing Manager",
      "Specialize in influencer marketing",
      "Move into brand management roles",
      "Opportunity to shape company's digital strategy"
    ],
    
    benefits: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "401(k) with company match",
      "Paid time off and sick leave",
      "Professional development budget",
      "Home office setup allowance"
    ],
    
    perks: [
      "Flexible working hours",
      "Remote-friendly policy",
      "Opportunities for growth and training",
      "Team outings and creative workshops",
      "Social media tools and software subscriptions covered",
      "Conference and workshop attendance budget",
      "Creative project bonuses",
      "Wellness and mental health support"
    ],
    
    challenges: [
      "Managing multiple social platforms simultaneously",
      "Staying ahead of rapidly changing social media trends",
      "Balancing creative content with performance metrics",
      "Crisis management and reputation protection"
    ]
  },
  
  {
    id: "business-development-manager",
    name: "linkedin",
    icon: Briefcase,
    title: "Business Development Manager",
    description: "Identify and pursue growth opportunities by building client relationships, negotiating deals, and driving company revenue.",
    
    detailedDescription: "Drive our company's expansion as a Business Development Manager, where you'll be at the forefront of identifying and capturing new market opportunities. This strategic role combines relationship building, market analysis, and deal negotiation to fuel our growth trajectory.",
    
    type: "Full-time",
    location: "On-site",
    department: "Sales",
    salary: {
      min: 65000,
      max: 90000,
      currency: "USD",
      period: "annually",
      commission: "Uncapped commission potential up to 40% additional"
    },
    
    experience: {
      level: "Senior-level",
      yearsRequired: "3-5 years",
      specificExperience: [
        "B2B sales",
        "Business development",
        "Client relationship management",
        "Deal negotiation",
        "Market expansion"
      ]
    },
    
    education: {
      degree: "Bachelor's degree",
      fields: ["Business", "Sales", "Marketing", "Economics"],
      preferred: "MBA or advanced business degree"
    },
    
    responsibilities: [
      "Develop and implement growth strategies for the company",
      "Build and maintain long-term client relationships",
      "Negotiate business deals and close contracts",
      "Work closely with leadership to align with company goals",
      "Conduct market research and competitive analysis",
      "Create and deliver compelling sales presentations",
      "Manage the entire sales pipeline from lead to close",
      "Collaborate with product and marketing teams on go-to-market strategies"
    ],
    
    requiredSkills: [
      "Excellent communication and negotiation skills",
      "Strategic thinking and planning",
      "Relationship building and networking",
      "Market analysis and research",
      "Sales forecasting and pipeline management",
      "Presentation and public speaking",
      "Problem-solving and consultative selling"
    ],
    
    technicalSkills: [
      "CRM systems (Salesforce, HubSpot)",
      "Sales analytics tools",
      "Microsoft Office Suite",
      "LinkedIn Sales Navigator",
      "Market research platforms",
      "Proposal and presentation software",
      "Video conferencing tools"
    ],
    
    qualifications: [
      "Bachelor's degree in Business, Sales, or related field",
      "3+ years of experience in business development or sales",
      "Excellent communication and negotiation skills",
      "Ability to analyze market trends and competition",
      "Proven track record of meeting or exceeding sales targets",
      "Experience with CRM systems and sales analytics tools",
      "Strong network within the industry",
      "MBA or advanced business degree preferred"
    ],
    
    workEnvironment: {
      culture: "Results-driven, competitive, collaborative",
      teamSize: "3-5 sales team members",
      reportingTo: "VP of Sales",
      collaboratesWith: ["Marketing Team", "Product Team", "Customer Success", "Leadership"],
      workStyle: "On-site with client travel requirements"
    },
    
    growthOpportunities: [
      "Advance to VP of Sales or Business Development",
      "Lead regional or vertical sales teams",
      "Move into general management roles",
      "Opportunity to open new markets or territories",
      "Potential for equity and leadership positions"
    ],
    
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with generous company match",
      "Life and disability insurance",
      "Paid time off and holidays",
      "Professional development and training",
      "Company car or travel allowance"
    ],
    
    perks: [
      "Performance-based bonuses",
      "Health insurance and benefits",
      "Professional development opportunities",
      "Dynamic and collaborative work environment",
      "Uncapped commission potential",
      "Company car or travel allowance",
      "Access to industry events and networking opportunities",
      "Stock options and equity participation"
    ],
    
    challenges: [
      "Meeting aggressive revenue targets",
      "Building relationships in competitive markets",
      "Managing long sales cycles",
      "Adapting to changing market conditions"
    ]
  },
  
  {
    id: "frontend-developer",
    name: "developer",
    icon: Code,
    title: "Frontend Developer",
    description: "Build responsive, user-friendly web interfaces and collaborate with designers and backend engineers to deliver high-quality digital products.",
    
    detailedDescription: "Join our innovative engineering team as a Frontend Developer and help create the next generation of web applications that millions of users will interact with daily. You'll work with cutting-edge technologies and frameworks to build responsive, accessible, and performant user interfaces.",
    
    type: "Full-time",
    location: "Hybrid",
    department: "Engineering",
    salary: {
      min: 70000,
      max: 95000,
      currency: "USD",
      period: "annually"
    },
    
    experience: {
      level: "Mid-level",
      yearsRequired: "2-4 years",
      specificExperience: [
        "Frontend development",
        "React.js development",
        "JavaScript programming",
        "Responsive web design",
        "Cross-browser compatibility"
      ]
    },
    
    education: {
      degree: "Bachelor's degree",
      fields: ["Computer Science", "Software Engineering", "Web Development", "Information Technology"],
      alternatives: "Equivalent experience with strong portfolio"
    },
    
    responsibilities: [
      "Develop and maintain web applications using React",
      "Ensure cross-browser compatibility and performance",
      "Collaborate with UI/UX designers to implement features",
      "Write clean, scalable, and maintainable code",
      "Participate in code reviews and technical discussions",
      "Optimize applications for maximum speed and scalability",
      "Implement responsive design principles and accessibility standards",
      "Contribute to technical documentation and knowledge sharing"
    ],
    
    requiredSkills: [
      "Proficient in JavaScript, HTML5, and CSS3",
      "Strong React.js and modern JavaScript frameworks",
      "Responsive design and mobile-first development",
      "Version control with Git",
      "Problem-solving and debugging",
      "Attention to detail and code quality",
      "Collaborative development practices"
    ],
    
    technicalSkills: [
      "React.js and React ecosystem",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5, CSS3, SASS/SCSS",
      "State management (Redux, Context API)",
      "Testing frameworks (Jest, React Testing Library)",
      "Build tools (Webpack, Vite)",
      "Git and version control",
      "RESTful APIs and GraphQL"
    ],
    
    qualifications: [
      "Bachelor's degree in Computer Science or related field",
      "2+ years of frontend development experience",
      "Proficiency in JavaScript, React, and CSS",
      "Familiarity with Git and modern development workflows",
      "Experience with state management libraries (Redux, Context API)",
      "Knowledge of testing frameworks (Jest, React Testing Library)",
      "Understanding of web performance optimization techniques",
      "Experience with TypeScript and modern build tools preferred"
    ],
    
    workEnvironment: {
      culture: "Innovative, collaborative, learning-focused",
      teamSize: "6-10 engineering team members",
      reportingTo: "Senior Frontend Developer or Engineering Manager",
      collaboratesWith: ["Backend Developers", "UI/UX Designers", "Product Managers", "QA Engineers"],
      workStyle: "Hybrid with flexible core hours"
    },
    
    growthOpportunities: [
      "Advance to Senior Frontend Developer",
      "Move into full-stack development",
      "Technical lead or team lead roles",
      "Specialize in frontend architecture",
      "Opportunity to mentor junior developers"
    ],
    
    benefits: [
      "Comprehensive health insurance",
      "Dental and vision coverage",
      "401(k) with company match",
      "Paid time off and sick leave",
      "Professional development budget",
      "Latest tech equipment provided"
    ],
    
    perks: [
      "Latest tech equipment",
      "Work with a passionate dev team",
      "Learning & certification budget",
      "Hybrid work culture",
      "Flexible development environment setup",
      "Access to premium development tools and services",
      "Internal tech talks and knowledge sharing sessions",
      "Opportunity to work on open-source projects"
    ],
    
    challenges: [
      "Keeping up with rapidly evolving frontend technologies",
      "Balancing performance with feature requirements",
      "Ensuring cross-browser and device compatibility",
      "Managing complex state in large applications"
    ]
  },
  
  {
    id: "ui-ux-designer",
    name: "designer",
    icon: PenTool,
    title: "UI/UX Designer",
    description: "Design intuitive and visually appealing digital experiences that meet user needs and align with brand guidelines.",
    
    detailedDescription: "Shape the future of digital experiences as a UI/UX Designer in our creative and user-focused design team. You'll be responsible for crafting intuitive, beautiful, and functional interfaces that solve real user problems and drive business objectives.",
    
    type: "Contract",
    location: "Remote",
    department: "Design",
    salary: {
      min: 45,
      max: 75,
      currency: "USD",
      period: "hourly"
    },
    
    experience: {
      level: "Mid-level",
      yearsRequired: "2-5 years",
      specificExperience: [
        "UI/UX design",
        "User research",
        "Prototyping",
        "Design systems",
        "User testing"
      ]
    },
    
    education: {
      degree: "Bachelor's degree preferred",
      fields: ["Design", "Human-Computer Interaction", "Psychology", "Fine Arts"],
      alternatives: "Strong portfolio demonstrating design skills and process"
    },
    
    responsibilities: [
      "Create wireframes, prototypes, and design systems",
      "Conduct user research and usability testing",
      "Work with developers to implement design solutions",
      "Maintain brand consistency across digital platforms",
      "Collaborate with product managers on feature specifications",
      "Design responsive interfaces for web and mobile platforms",
      "Create and maintain comprehensive design documentation",
      "Present design concepts and rationale to stakeholders"
    ],
    
    requiredSkills: [
      "User-centered design principles",
      "Visual design and typography",
      "Interaction design",
      "Information architecture",
      "User research methodologies",
      "Prototyping and wireframing",
      "Design thinking and problem-solving"
    ],
    
    technicalSkills: [
      "Figma or Adobe XD",
      "Adobe Creative Suite",
      "Sketch",
      "InVision or Marvel",
      "Principle or Framer for animations",
      "User research tools",
      "Accessibility testing tools",
      "Basic HTML/CSS understanding"
    ],
    
    qualifications: [
      "Proven experience in UI/UX design",
      "Proficiency with tools like Figma or Adobe XD",
      "Strong understanding of user-centered design principles",
      "Excellent visual design and communication skills",
      "Experience with user research methodologies",
      "Knowledge of accessibility standards and inclusive design",
      "Portfolio demonstrating end-to-end design process",
      "Experience with design systems and component libraries"
    ],
    
    workEnvironment: {
      culture: "Creative, user-focused, collaborative",
      teamSize: "3-4 design team members",
      reportingTo: "Design Director or Product Manager",
      collaboratesWith: ["Product Managers", "Frontend Developers", "Marketing Team", "Stakeholders"],
      workStyle: "Fully remote with flexible schedule"
    },
    
    growthOpportunities: [
      "Advance to Senior UI/UX Designer",
      "Move into UX Research specialist role",
      "Product design leadership positions",
      "Freelance and consultancy opportunities",
      "Potential for full-time conversion"
    ],
    
    benefits: [
      "Flexible contract terms",
      "Competitive hourly rates",
      "Professional development support",
      "Access to premium design tools",
      "Health stipend (for long-term contracts)"
    ],
    
    perks: [
      "Work-from-anywhere flexibility",
      "Creative freedom and ownership",
      "Collaborative design team",
      "Access to design conferences & workshops",
      "Premium design software and tool subscriptions",
      "Flexible contract terms and competitive hourly rates",
      "Opportunity to work with cutting-edge design technologies",
      "Mentorship and career development support"
    ],
    
    challenges: [
      "Balancing user needs with business objectives",
      "Designing for multiple platforms and devices",
      "Managing stakeholder feedback and expectations",
      "Staying current with design trends and best practices"
    ]
  },
  
  {
    id: "hr-talent-acquisition-specialist",
    name: "hr",
    icon: Users,
    title: "HR & Talent Acquisition Specialist",
    description: "Manage the recruitment process, employee engagement, and help build a strong company culture.",
    
    detailedDescription: "Play a pivotal role in building our company's most valuable asset - our people - as an HR & Talent Acquisition Specialist. You'll be instrumental in attracting, hiring, and retaining top talent while fostering a positive and inclusive workplace culture.",
    
    type: "Full-time",
    location: "On-site",
    department: "Human Resources",
    salary: {
      min: 50000,
      max: 68000,
      currency: "USD",
      period: "annually"
    },
    
    experience: {
      level: "Mid-level",
      yearsRequired: "2-4 years",
      specificExperience: [
        "Talent acquisition",
        "HR operations",
        "Employee onboarding",
        "Recruitment strategy",
        "HR compliance"
      ]
    },
    
    education: {
      degree: "Bachelor's degree",
      fields: ["Human Resources", "Psychology", "Business Administration", "Organizational Behavior"],
      certifications: "PHR, SHRM, or other HR certifications preferred"
    },
    
    responsibilities: [
      "Source and recruit top talent across departments",
      "Manage onboarding and training programs",
      "Support employee engagement initiatives",
      "Ensure compliance with HR policies and labor laws",
      "Conduct interviews and coordinate hiring processes",
      "Develop and maintain relationships with recruitment agencies",
      "Manage employee records and HR information systems",
      "Support performance management and employee development programs"
    ],
    
    requiredSkills: [
      "Strong interpersonal and communication skills",
      "Recruiting and talent acquisition",
      "HR policy knowledge",
      "Interviewing and assessment techniques",
      "Employee relations",
      "Data analysis and reporting",
      "Conflict resolution and mediation"
    ],
    
    technicalSkills: [
      "Applicant Tracking Systems (ATS)",
      "HRIS systems",
      "LinkedIn Recruiter",
      "Microsoft Office Suite",
      "HR analytics tools",
      "Background check platforms",
      "Video interviewing platforms",
      "Employee engagement survey tools"
    ],
    
    qualifications: [
      "Bachelor's degree in Human Resources or related field",
      "2+ years of HR or recruitment experience",
      "Strong interpersonal and organizational skills",
      "Knowledge of HR systems and databases",
      "Understanding of employment laws and regulations",
      "Experience with applicant tracking systems",
      "Excellent written and verbal communication skills",
      "HR certification (PHR, SHRM) preferred"
    ],
    
    workEnvironment: {
      culture: "People-focused, supportive, professional",
      teamSize: "2-3 HR team members",
      reportingTo: "HR Director or VP of People",
      collaboratesWith: ["All Departments", "Leadership Team", "External Vendors", "Legal Team"],
      workStyle: "On-site with occasional remote work flexibility"
    },
    
    growthOpportunities: [
      "Advance to Senior HR Specialist",
      "Move into HR Manager or Director roles",
      "Specialize in talent acquisition or employee relations",
      "HR Business Partner opportunities",
      "Leadership development programs"
    ],
    
    benefits: [
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company match",
      "Life and disability insurance",
      "Paid time off and holidays",
      "Professional development and certification support",
      "Tuition reimbursement programs"
    ],
    
    perks: [
      "Comprehensive health benefits",
      "Employee wellness programs",
      "Team-building events",
      "Career growth and learning opportunities",
      "Professional development and certification support",
      "Flexible PTO and work-life balance initiatives",
      "Access to HR conferences and networking events",
      "Employee referral bonus programs"
    ],
    
    challenges: [
      "Managing competing priorities and deadlines",
      "Ensuring compliance with changing employment laws",
      "Balancing candidate and hiring manager expectations",
      "Building strong company culture during rapid growth"
    ]
  }
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
