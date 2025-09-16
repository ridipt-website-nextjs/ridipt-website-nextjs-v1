'use client';
import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Structure from '@/components/common/page-structure';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import Header from '@/components/section-heading';
import {
    Plus, X, Briefcase, MapPin, DollarSign, GraduationCap, Users, Award, Check, ChevronsUpDown,
} from 'lucide-react';
import { adminApi } from '@/lib/admin-api-client';
import { AVAILABLE_ICONS } from '@/config/constant';

// ✅ Form Fields Configuration
const jobFormFields = [
    // Basic Information Section
    {
        section: "basic",
        name: "name",
        label: "Department/Brand",
        type: "text",
        required: true,
        value: 'Ridipt Technology',
        disabled: true,
        placeholder: "e.g., Instagram",
        gridCols: "md:col-span-1"
    },
    {
        section: "basic",
        name: "icon",
        label: "Job Icon",
        type: "icon-select",
        required: true,
        gridCols: "md:col-span-1"
    },
    {
        section: "basic",
        name: "title",
        label: "Job Title",
        type: "text",
        required: true,
        placeholder: "e.g., Social Media Manager",
        gridCols: "md:col-span-2"
    },
    {
        section: "basic",
        name: "description",
        label: "Short Description",
        type: "textarea",
        required: true,
        placeholder: "Brief, engaging job summary...",
        rows: 3,
        gridCols: "md:col-span-2"
    },
    {
        section: "basic",
        name: "detailedDescription",
        label: "Detailed Description",
        type: "textarea",
        required: true,
        placeholder: "Comprehensive job overview with key responsibilities and what makes this role exciting...",
        rows: 6,
        gridCols: "md:col-span-2"
    },
    // Job Details Section
    {
        section: "details",
        name: "type",
        label: "Job Type",
        type: "select",
        required: true,
        options: ["Full-time", "Part-time", "Contract", "Internship"],
        gridCols: "md:col-span-1"
    },
    {
        section: "details",
        name: "location",
        label: "Location",
        type: "text",
        required: true,
        placeholder: "Remote / Hybrid / On-site",
        gridCols: "md:col-span-1"
    },
    {
        section: "details",
        name: "department",
        label: "Department",
        type: "text",
        required: true,
        placeholder: "e.g., Marketing",
        gridCols: "md:col-span-1"
    },
    // Salary Section
    {
        section: "salary",
        name: "salary.min",
        label: "Minimum Salary",
        type: "text",
        required: true,
        placeholder: "40,000 / 40k / Negotiable",
        gridCols: "lg:col-span-1"
    },
    {
        section: "salary",
        name: "salary.max",
        label: "Maximum Salary",
        type: "text",
        required: true,
        placeholder: "60,000 / 60k / Based on Experience",
        gridCols: "lg:col-span-1"
    },
    {
        section: "salary",
        name: "salary.currency",
        label: "Currency",
        type: "select",
        required: true,
        options: [
            { value: "USD", label: "USD ($)" },
            { value: "INR", label: "INR (₹)" },
            { value: "EUR", label: "EUR (€)" }
        ],
        gridCols: "lg:col-span-1"
    },
    {
        section: "salary",
        name: "salary.period",
        label: "Period",
        type: "select",
        required: true,
        options: ["annually", "monthly", "hourly"],
        gridCols: "lg:col-span-1"
    },
    // Experience Section
    {
        section: "experience",
        name: "experience.level",
        label: "Experience Level",
        type: "select",
        required: true,
        options: ["Entry-level", "Mid-level", "Senior-level"],
        gridCols: "md:col-span-1"
    },
    {
        section: "experience",
        name: "experience.yearsRequired",
        label: "Years Required",
        type: "select",
        required: true,
        options: [
            "Fresher",
            "0-1 years",
            "1-3 years",
            "3-5 years",
            "5-10 years",
            "10+ years",
        ],
        gridCols: "md:col-span-1"
    },
    // Education Section
    {
        section: "education",
        name: "education.degree",
        label: "Required Degree",
        type: "text",
        required: true,
        placeholder: "e.g., Bachelor's degree",
        gridCols: "md:col-span-1"
    },
    {
        section: "education",
        name: "education.alternatives",
        label: "Education Alternatives",
        type: "text",
        required: false,
        placeholder: "Equivalent experience or certifications",
        gridCols: "md:col-span-1"
    },
    // Work Environment Section
    {
        section: "workEnvironment",
        name: "workEnvironment.culture",
        label: "Company Culture",
        type: "text",
        required: false,
        placeholder: "e.g., Creative, collaborative, fast-paced",
        gridCols: "md:col-span-1"
    },
    {
        section: "workEnvironment",
        name: "workEnvironment.teamSize",
        label: "Team Size",
        type: "text",
        required: false,
        placeholder: "e.g., 5-8 members",
        gridCols: "md:col-span-1"
    },
    {
        section: "workEnvironment",
        name: "workEnvironment.reportingTo",
        label: "Reports To",
        type: "text",
        required: false,
        placeholder: "e.g., Marketing Director",
        gridCols: "md:col-span-1"
    },
    {
        section: "workEnvironment",
        name: "workEnvironment.workStyle",
        label: "Work Style",
        type: "text",
        required: false,
        placeholder: "e.g., Hybrid with flexible hours",
        gridCols: "md:col-span-1"
    }
];

// ✅ Array Fields Configuration
const jobArrayFields = [
    {
        section: "experience",
        name: "experience.specificExperience",
        label: "Specific Experience Requirements",
        placeholder: "Add specific experience requirement"
    },
    {
        section: "education",
        name: "education.fields",
        label: "Relevant Education Fields",
        placeholder: "Add relevant education field"
    },
    {
        section: "skills",
        name: "responsibilities",
        label: "Key Responsibilities",
        placeholder: "Add job responsibility"
    },
    {
        section: "skills",
        name: "requiredSkills",
        label: "Required Skills",
        placeholder: "Add required skill"
    },
    {
        section: "skills",
        name: "technicalSkills",
        label: "Technical Skills",
        placeholder: "Add technical skill"
    },
    {
        section: "skills",
        name: "qualifications",
        label: "Additional Qualifications",
        placeholder: "Add qualification"
    },
    {
        section: "benefits",
        name: "benefits",
        label: "Employee Benefits",
        placeholder: "Add benefit"
    },
    {
        section: "benefits",
        name: "perks",
        label: "Company Perks",
        placeholder: "Add perk"
    },
    {
        section: "benefits",
        name: "growthOpportunities",
        label: "Growth Opportunities",
        placeholder: "Add growth opportunity"
    },
    {
        section: "benefits",
        name: "challenges",
        label: "Key Challenges",
        placeholder: "Add challenge"
    },
    {
        section: "workEnvironment",
        name: "workEnvironment.collaboratesWith",
        label: "Collaborates With",
        placeholder: "Add team or department"
    }
];

// ✅ Job Data Interface
interface JobData {
    job_id: string;
    name: string;
    icon: string;
    title: string;
    description: string;
    detailedDescription: string;
    type: string;
    location: string;
    department: string;
    salary: {
        min: string;
        max: string;
        currency: string;
        period: string;
    };
    experience: {
        level: string;
        yearsRequired: string;
        specificExperience: string[];
    };
    education: {
        degree: string;
        fields: string[];
        alternatives: string;
    };
    responsibilities: string[];
    requiredSkills: string[];
    technicalSkills: string[];
    qualifications: string[];
    workEnvironment: {
        culture: string;
        teamSize: string;
        reportingTo: string;
        collaboratesWith: string[];
        workStyle: string;
    };
    growthOpportunities: string[];
    benefits: string[];
    perks: string[];
    challenges: string[];
}

const defaultValue: JobData = {
    job_id: '',
    name: 'Ridipt Technology',
    icon: 'Briefcase',
    title: '',
    description: '',
    detailedDescription: '',
    type: '',
    location: '',
    department: '',
    salary: {
        min: '',
        max: '',
        currency: 'USD',
        period: 'annually'
    },
    experience: {
        level: '',
        yearsRequired: '',
        specificExperience: []
    },
    education: {
        degree: '',
        fields: [],
        alternatives: ''
    },
    responsibilities: [],
    requiredSkills: [],
    technicalSkills: [],
    qualifications: [],
    workEnvironment: {
        culture: '',
        teamSize: '',
        reportingTo: '',
        collaboratesWith: [],
        workStyle: ''
    },
    growthOpportunities: [],
    benefits: [],
    perks: [],
    challenges: []
};

const CreateJobPage = () => {
    const [jobData, setJobData] = useState<JobData>(defaultValue);
    const [loading, setLoading] = useState(false);
    const [iconOpen, setIconOpen] = useState(false);

    // ✅ Edit Mode States
    const [fetchingJob, setFetchingJob] = useState(false);
    const [originalJobData, setOriginalJobData] = useState<JobData | null>(null);
    const [changedFields, setChangedFields] = useState(new Set<string>());
    const [isEditMode, setIsEditMode] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const job_id = searchParams.get('job_id');

    // ✅ Initialize Edit Mode
    useEffect(() => {
        setIsEditMode(!!job_id);
    }, [job_id]);

    // ✅ Fetch Job for Editing
    const fetchJobForEdit = async () => {
        if (!job_id) return;

        try {
            setFetchingJob(true);
            const data = await adminApi.get(`/jobs/${job_id}`) as JobData;

            setJobData(data);
            setOriginalJobData(data);
            setChangedFields(new Set());
        } catch (error) {
            console.error("Failed to fetch job:", error);
            alert("Failed to load job details. Please try again.");
        } finally {
            setFetchingJob(false);
        }
    };

    // ✅ Fetch Job Data on Component Mount
    useEffect(() => {
        if (job_id) {
            fetchJobForEdit();
        }
    }, [job_id]);

    // ✅ Auto-generate job_id from title - Only for new jobs
    useEffect(() => {
        if (!isEditMode && jobData.title && jobData.name) {
            const autoJobId = `${jobData.title
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, '')
                .replace(/\s+/g, '-')
                .trim()}-${jobData.name
                    .toLowerCase()
                    .replace(/[^a-z0-9\s]/g, '')
                    .replace(/\s+/g, '-')
                    .trim()}-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;
            setJobData(prev => ({
                ...prev,
                job_id: autoJobId
            }));
        }
    }, [jobData.title, jobData.name, isEditMode]);

    // ✅ Initialize Form with Default Values - Only for new jobs
    useEffect(() => {
        if (!isEditMode) {
            const initializeFormWithDefaults = () => {
                const initialData = { ...defaultValue };
                jobFormFields.forEach(field => {
                    if ('value' in field && field.value !== undefined) {
                        if (field.name.includes('.')) {
                            const keys = field.name.split('.');
                            let current = initialData as any;
                            for (let i = 0; i < keys.length - 1; i++) {
                                if (!current[keys[i]]) current[keys[i]] = {};
                                current = current[keys[i]];
                            }
                            current[keys[keys.length - 1]] = field.value;
                        } else {
                            (initialData as any)[field.name] = field.value;
                        }
                    }
                });
                setJobData(initialData);
            };
            initializeFormWithDefaults();
        }
    }, [isEditMode]);

    // ✅ Helper Functions
    const getNestedValue = (obj: any, path: string) => {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    };

    const handleDynamicChange = (fieldName: string, value: any) => {
        // Find field configuration to check if disabled
        const fieldConfig = jobFormFields.find(field => field.name === fieldName);

        // Skip update if field is disabled
        if (fieldConfig?.disabled) {
            return;
        }

        // Track changes for edit mode
        if (isEditMode && originalJobData) {
            const originalValue = getNestedValue(originalJobData, fieldName);
            if (originalValue !== value) {
                setChangedFields(prev => new Set(prev).add(fieldName));
            } else {
                setChangedFields(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(fieldName);
                    return newSet;
                });
            }
        }

        if (fieldName.includes('.')) {
            const keys = fieldName.split('.');
            setJobData(prev => {
                const newData = { ...prev };
                let current: any = newData;
                for (let i = 0; i < keys.length - 1; i++) {
                    if (!current[keys[i]]) current[keys[i]] = {};
                    current = current[keys[i]];
                }
                current[keys[keys.length - 1]] = value;
                return newData;
            });
        } else {
            setJobData(prev => ({
                ...prev,
                [fieldName]: value
            }));
        }
    };

    // ✅ Array Helper Functions
    const getArrayData = (field: string): string[] => {
        if (field.includes('.')) {
            const [section, subField] = field.split('.');
            const sectionData = jobData[section as keyof JobData] as any;
            return sectionData[subField] || [];
        }
        return jobData[field as keyof JobData] as string[] || [];
    };

    const addNestedArrayItem = (field: string, value: string) => {
        if (value.trim()) {
            if (field.includes('.')) {
                const [section, subField] = field.split('.');
                const currentArray = getArrayData(field);
                const newArray = [...currentArray, value.trim()];
                setJobData(prev => ({
                    ...prev,
                    [section]: {
                        ...((prev[section as keyof JobData] as object) || {}),
                        [subField]: newArray
                    }
                }));
            } else {
                const currentArray = jobData[field as keyof JobData] as string[];
                setJobData(prev => ({
                    ...prev,
                    [field]: [...currentArray, value.trim()]
                }));
            }

            // Track changes for edit mode
            if (isEditMode) {
                setChangedFields(prev => new Set(prev).add(field));
            }
        }
    };

    const removeNestedArrayItem = (field: string, index: number) => {
        if (field.includes('.')) {
            const [section, subField] = field.split('.');
            const currentArray = getArrayData(field);
            const newArray = currentArray.filter((_, i) => i !== index);
            setJobData(prev => ({
                ...prev,
                [section]: {
                    ...((prev[section as keyof JobData] as object) || {}),
                    [subField]: newArray
                }
            }));
        } else {
            const currentArray = jobData[field as keyof JobData] as string[];
            setJobData(prev => ({
                ...prev,
                [field]: currentArray.filter((_, i) => i !== index)
            }));
        }

        // Track changes for edit mode
        if (isEditMode) {
            setChangedFields(prev => new Set(prev).add(field));
        }
    };

    // ✅ Get current selected icon component
    const getCurrentIcon = () => {
        return AVAILABLE_ICONS[jobData.icon as keyof typeof AVAILABLE_ICONS] || Briefcase;
    };

    // ✅ Section title component
    const SectionTitle = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
        <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
            <Icon className="w-6 h-6" />
            {children}
        </CardTitle>
    );

    // ✅ Icon Selector Component
    const IconSelector = () => {
        const [searchTerm, setSearchTerm] = useState('');
        const filteredIcons = useMemo(() => {
            if (!searchTerm) return Object.keys(AVAILABLE_ICONS);
            return Object.keys(AVAILABLE_ICONS).filter(iconName =>
                iconName.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }, [searchTerm]);

        const SelectedIcon = getCurrentIcon();

        return (
            <div className="space-y-2">
                <Label className="text-sm font-medium">Job Icon *</Label>
                <Popover open={iconOpen} onOpenChange={setIconOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={iconOpen}
                            className="w-full justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <SelectedIcon className="w-4 h-4" />
                                <span>{jobData.icon}</span>
                            </div>
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0" align="start">
                        <Command>
                            <CommandInput
                                placeholder="Search icons..."
                                value={searchTerm}
                                onValueChange={setSearchTerm}
                            />
                            <CommandEmpty>No icon found.</CommandEmpty>
                            <CommandList className="max-h-[200px] overflow-y-auto">
                                <CommandGroup>
                                    {filteredIcons.map((iconName) => {
                                        const IconComponent = AVAILABLE_ICONS[iconName as keyof typeof AVAILABLE_ICONS];
                                        return (
                                            <CommandItem
                                                key={iconName}
                                                value={iconName}
                                                onSelect={() => {
                                                    handleDynamicChange('icon', iconName);
                                                    setIconOpen(false);
                                                    setSearchTerm('');
                                                }}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <IconComponent className="w-4 h-4" />
                                                <span>{iconName}</span>
                                                <Check
                                                    className={`ml-auto h-4 w-4 ${jobData.icon === iconName ? "opacity-100" : "opacity-0"
                                                        }`}
                                                />
                                            </CommandItem>
                                        );
                                    })}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
            </div>
        );
    };

    // ✅ Array Input Component
    const ArrayInput = ({
        field,
        label,
        placeholder
    }: {
        field: string;
        label: string;
        placeholder: string;
    }) => {
        const [inputValue, setInputValue] = useState('');
        const arrayData = getArrayData(field);

        return (
            <div className="space-y-3">
                <Label className="text-sm font-medium text-primary">{label}</Label>
                <div className="flex gap-2">
                    <Input
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={placeholder}
                        className="flex-1"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                e.preventDefault();
                                addNestedArrayItem(field, inputValue);
                                setInputValue('');
                            }
                        }}
                    />
                    <Button
                        type="button"
                        onClick={() => {
                            addNestedArrayItem(field, inputValue);
                            setInputValue('');
                        }}
                        size="sm"
                        className="px-3 shrink-0"
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
                {arrayData.length > 0 && (
                    <div className="min-h-[60px] p-3 border border-border rounded-lg bg-muted/30">
                        <div className="flex flex-wrap gap-2">
                            {arrayData.map((item, index) => (
                                <Badge key={index} variant="secondary" className="flex items-center gap-1.5 px-3 py-1">
                                    <span className="text-sm">{item}</span>
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="h-4 w-4 p-0 hover:bg-destructive hover:text-destructive-foreground rounded-full"
                                        onClick={() => removeNestedArrayItem(field, index)}
                                    >
                                        <X className="w-3 h-3" />
                                    </Button>
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // ✅ Dynamic Form Field Renderer
    const renderFormField = (field: any) => {
        const value = field.value || getNestedValue(jobData, field.name);

        switch (field.type) {
            case 'text':
            case 'number':
                return (
                    <div key={field.name} className={`space-y-2 ${field.gridCols || ''}`}>
                        <Label className="text-sm font-medium">
                            {field.label} {field.required && '*'}
                        </Label>
                        <Input
                            type={field.type}
                            disabled={!!field.disabled}
                            value={value || ''}
                            onChange={(e) => handleDynamicChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            className="w-full"
                            required={field.required}
                        />
                    </div>
                );

            case 'textarea':
                return (
                    <div key={field.name} className={`space-y-2 ${field.gridCols || ''}`}>
                        <Label className="text-sm font-medium">
                            {field.label} {field.required && '*'}
                        </Label>
                        <Textarea
                            value={value || ''}
                            onChange={(e) => handleDynamicChange(field.name, e.target.value)}
                            placeholder={field.placeholder}
                            rows={field.rows || 3}
                            className="w-full resize-y"
                            required={field.required}
                        />
                    </div>
                );

            case 'select':
                return (
                    <div key={field.name} className={`space-y-2 ${field.gridCols || ''}`}>
                        <Label className="text-sm font-medium">
                            {field.label} {field.required && '*'}
                        </Label>
                        <Select
                            value={value || ''}
                            onValueChange={(selectedValue) => handleDynamicChange(field.name, selectedValue)}
                        >
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder={`Select ${field.label.toLowerCase()}`} />
                            </SelectTrigger>
                            <SelectContent>
                                {field.options?.map((option: any) => (
                                    <SelectItem
                                        key={typeof option === 'string' ? option : option.value}
                                        value={typeof option === 'string' ? option : option.value}
                                    >
                                        {typeof option === 'string' ? option : option.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                );

            case 'icon-select':
                return (
                    <div key={field.name} className={`${field.gridCols || ''}`}>
                        <IconSelector />
                    </div>
                );

            default:
                return null;
        }
    };

    // ✅ Group Fields by Section
    const groupedFields = jobFormFields.reduce((acc, field) => {
        if (!acc[field.section]) acc[field.section] = [];
        acc[field.section].push(field);
        return acc;
    }, {} as Record<string, any[]>);

    const groupedArrayFields = jobArrayFields.reduce((acc, field) => {
        if (!acc[field.section]) acc[field.section] = [];
        acc[field.section].push(field);
        return acc;
    }, {} as Record<string, any[]>);

    // ✅ Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            let data;

            if (isEditMode && job_id) {
                const existingData = await adminApi.get(`/jobs/${job_id}`);

                // Safe comparison with proper null/undefined checks
                const changedFields = Object.fromEntries(
                    Object.entries(jobData)
                        .filter(([key, value]) => {
                            const existingValue = existingData?.data?.[key];

                            // Handle null/undefined cases
                            if (value === undefined || value === null) {
                                return false; // Skip undefined/null values
                            }

                            // Deep comparison for objects/arrays
                            if (typeof value === 'object' && value !== null) {
                                return JSON.stringify(existingValue) !== JSON.stringify(value);
                            }

                            // Simple comparison for primitive values
                            return existingValue !== value;
                        })
                        .filter(([key, value]) => value !== undefined && value !== null) // Extra safety
                );

                console.log('Changed fields:', changedFields);

                if (Object.keys(changedFields).length > 0) {
                    data = await adminApi.patch(`/jobs/${job_id}`, changedFields);
                    if (data) {
                        alert('Job updated successfully!');
                        router.push('/jobs');
                    }
                } else {
                    alert('No changes detected!');
                    router.push('/jobs');
                }
            } else {
                // Create New Job
                data = await adminApi.post('/jobs/', jobData);
                if (data) {
                    alert('Job created successfully!');
                    setJobData(defaultValue);
                    setChangedFields(new Set());
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Error ${isEditMode ? 'updating' : 'creating'} job`);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Loading State for Fetching Job
    if (fetchingJob) {
        return (
            <Structure>
                <div className="mx-auto w-full max-w-6xl px-4 py-8 flex items-center justify-center min-h-[400px]">
                    <div className="flex items-center gap-3 text-lg">
                        <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                        Loading job details...
                    </div>
                </div>
            </Structure>
        );
    }

    return (
        <Structure>
            <div className="mx-auto w-full max-w-6xl px-4 py-8 space-y-8">
                {/* ✅ Dynamic Header */}
                <Header
                    heading={isEditMode ? "Edit Job Posting" : "Create Job Posting"}
                    subheading={isEditMode
                        ? "Update the job details to keep your posting current"
                        : "Fill out the details to share your job with potential candidates"
                    }
                    description={isEditMode
                        ? "Make changes to improve your job post and attract the right candidates."
                        : "A well-written job post helps you reach and engage the right talent."
                    }
                    align="left"
                />

                {/* ✅ Changed Fields Indicator in Edit Mode */}
                {isEditMode && changedFields.size > 0 && (
                    <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-medium">
                                {changedFields.size} field{changedFields.size > 1 ? 's' : ''} modified
                            </span>
                        </div>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* ✅ Basic Information */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={Briefcase}>Basic Information</SectionTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedFields.basic?.map(field => renderFormField(field))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* ✅ Job Details */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={MapPin}>Job Details</SectionTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {groupedFields.details?.map(field => renderFormField(field))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* ✅ Salary Information */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={DollarSign}>Salary Information</SectionTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {groupedFields.salary?.map(field => renderFormField(field))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* ✅ Experience & Education */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={GraduationCap}>Experience & Education</SectionTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedFields.experience?.map(field => renderFormField(field))}
                            </div>
                            {/* Array fields for experience */}
                            {groupedArrayFields.experience?.map(field => (
                                <ArrayInput
                                    key={field.name}
                                    field={field.name}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                />
                            ))}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedFields.education?.map(field => renderFormField(field))}
                            </div>
                            {/* Array fields for education */}
                            {groupedArrayFields.education?.map(field => (
                                <ArrayInput
                                    key={field.name}
                                    field={field.name}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                />
                            ))}
                        </CardContent>
                    </Card>

                    {/* ✅ Skills & Benefits (Side by side) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
                                    <Award className="w-6 h-6" />
                                    Skills & Requirements
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {groupedArrayFields.skills?.map(field => (
                                    <ArrayInput
                                        key={field.name}
                                        field={field.name}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                    />
                                ))}
                            </CardContent>
                        </Card>

                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
                                    <Users className="w-6 h-6" />
                                    Benefits & Growth
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {groupedArrayFields.benefits?.map(field => (
                                    <ArrayInput
                                        key={field.name}
                                        field={field.name}
                                        label={field.label}
                                        placeholder={field.placeholder}
                                    />
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    {/* ✅ Work Environment */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={Users}>Work Environment</SectionTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {groupedFields.workEnvironment?.map(field => renderFormField(field))}
                            </div>
                            {/* Array fields for work environment */}
                            {groupedArrayFields.workEnvironment?.map(field => (
                                <ArrayInput
                                    key={field.name}
                                    field={field.name}
                                    label={field.label}
                                    placeholder={field.placeholder}
                                />
                            ))}
                        </CardContent>
                    </Card>

                    {/* ✅ Submit Button */}
                    <div className="flex justify-center pt-8 border-t border-border">
                        <Button
                            type="submit"
                            disabled={loading || (isEditMode && changedFields.size === 0)}
                            size="lg"
                            className="px-16 py-4 text-lg font-semibold"
                        >
                            {loading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    {isEditMode ? 'Updating Job...' : 'Creating Job...'}
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    {isEditMode ? 'Update Job' : 'Create Job'}
                                </div>
                            )}
                        </Button>
                    </div>
                </form>
            </div>
        </Structure>
    );
};

export default CreateJobPage;
