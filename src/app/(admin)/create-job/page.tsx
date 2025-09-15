'use client';
import React, { useState, useMemo, useEffect } from 'react';
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
    Plus, X, Briefcase, MapPin, DollarSign, GraduationCap, Users, Award, Check, ChevronsUpDown, Edit, Save,
} from 'lucide-react';
import { adminApi } from '@/lib/admin-api-client';
import { AVAILABLE_ICONS } from '@/config/constant';
import { useSearchParams, useRouter } from 'next/navigation';

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
        type: "number",
        required: true,
        placeholder: "40000",
        gridCols: "lg:col-span-1"
    },
    {
        section: "salary",
        name: "salary.max",
        label: "Maximum Salary",
        type: "number",
        required: true,
        placeholder: "60000",
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
        min: number;
        max: number;
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
    name: '',
    icon: 'Briefcase',
    title: '',
    description: '',
    detailedDescription: '',
    type: '',
    location: '',
    department: '',
    salary: {
        min: 0,
        max: 0,
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
    const [originalJobData, setOriginalJobData] = useState<JobData | null>(null);
    const [changedFields, setChangedFields] = useState<Set<string>>(new Set());
    const [loading, setLoading] = useState(false);
    const [fetchingJob, setFetchingJob] = useState(false);
    const [iconOpen, setIconOpen] = useState(false);

    const searchParams = useSearchParams();
    const router = useRouter();
    const job_id = searchParams.get('job_id');
    const isEditMode = Boolean(job_id);

    // ✅ Fetch job data for editing
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

    // ✅ Initialize form with default values or fetch job data
    useEffect(() => {
        if (isEditMode) {
            fetchJobForEdit();
        } else {
            // Initialize with default values only for create mode
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
                setOriginalJobData(null);
                setChangedFields(new Set());
            };

            initializeFormWithDefaults();
        }
    }, [isEditMode, job_id]);

    // ✅ Auto-generate job_id only for create mode
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
    }, [isEditMode, jobData.title, jobData.name]);

    // ✅ Helper Functions
    const getNestedValue = (obj: any, path: string) => {
        return path.split('.').reduce((current, key) => current?.[key], obj);
    };

    // ✅ Track changes for edit mode
    const trackFieldChange = (fieldName: string, newValue: any) => {
        if (isEditMode && originalJobData) {
            const originalValue = getNestedValue(originalJobData, fieldName);

            // Deep comparison for arrays and objects
            if (JSON.stringify(originalValue) !== JSON.stringify(newValue)) {
                setChangedFields(prev => new Set(prev).add(fieldName));
            } else {
                setChangedFields(prev => {
                    const newSet = new Set(prev);
                    newSet.delete(fieldName);
                    return newSet;
                });
            }
        }
    };

    // ✅ Updated handleDynamicChange with proper nested object handling
    const handleDynamicChange = (fieldName: string, value: any) => {
        const fieldConfig = jobFormFields.find(field => field.name === fieldName);

        if (fieldConfig?.disabled) {
            return;
        }

        if (fieldName.includes('.')) {
            // ✅ Handle nested objects like salary.min, salary.max, etc.
            const keys = fieldName.split('.');
            setJobData(prev => {
                // ✅ Deep clone the entire state first
                const newData = JSON.parse(JSON.stringify(prev));

                // ✅ Navigate to nested object
                let current = newData;
                for (let i = 0; i < keys.length - 1; i++) {
                    if (!current[keys[i]]) {
                        current[keys[i]] = {};
                    }
                    current = current[keys[i]];
                }

                // ✅ Handle different data types properly
                let finalValue = value;

                if (fieldName.includes('salary') && (fieldName.includes('min') || fieldName.includes('max'))) {
                    // Convert salary min/max to numbers
                    finalValue = value === '' ? 0 : parseInt(value) || 0;
                } else if (fieldName.includes('salary') && (fieldName.includes('currency') || fieldName.includes('period'))) {
                    // Keep salary currency/period as strings
                    finalValue = value;
                } else {
                    // Default string handling
                    finalValue = value;
                }

                current[keys[keys.length - 1]] = finalValue;

                // ✅ Track the change
                trackFieldChange(fieldName, finalValue);

                console.log('Updated nested field:', fieldName, 'with value:', finalValue);
                console.log('Full jobData:', newData);

                return newData;
            });
        } else {
            // ✅ Handle direct properties
            setJobData(prev => {
                const newData = { ...prev, [fieldName]: value };
                trackFieldChange(fieldName, value);

                console.log('Updated direct field:', fieldName, 'with value:', value);

                return newData;
            });
        }
    };


    // ✅ Array Helper Functions with proper change tracking
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
            const newArrayValue = value.trim();

            if (field.includes('.')) {
                const [section, subField] = field.split('.');
                const currentArray = getArrayData(field);
                const newArray = [...currentArray, newArrayValue];

                setJobData(prev => {
                    const newData = {
                        ...prev,
                        [section]: {
                            ...((prev[section as keyof JobData] as object) || {}),
                            [subField]: newArray
                        }
                    };

                    // Track array change
                    trackFieldChange(field, newArray);

                    return newData;
                });
            } else {
                const currentArray = jobData[field as keyof JobData] as string[];
                const newArray = [...currentArray, newArrayValue];

                setJobData(prev => {
                    const newData = { ...prev, [field]: newArray };

                    // Track array change
                    trackFieldChange(field, newArray);

                    return newData;
                });
            }
        }
    };

    const removeNestedArrayItem = (field: string, index: number) => {
        if (field.includes('.')) {
            const [section, subField] = field.split('.');
            const currentArray = getArrayData(field);
            const newArray = currentArray.filter((_, i) => i !== index);

            setJobData(prev => {
                const newData = {
                    ...prev,
                    [section]: {
                        ...((prev[section as keyof JobData] as object) || {}),
                        [subField]: newArray
                    }
                };

                // Track array change
                trackFieldChange(field, newArray);

                return newData;
            });
        } else {
            const currentArray = jobData[field as keyof JobData] as string[];
            const newArray = currentArray.filter((_, i) => i !== index);

            setJobData(prev => {
                const newData = { ...prev, [field]: newArray };

                // Track array change
                trackFieldChange(field, newArray);

                return newData;
            });
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
                                                    className={`ml-auto h-4 w-4 ${jobData.icon === iconName ? "opacity-100" : "opacity-0"}`}
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
        const value = getNestedValue(jobData, field.name);

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

    // ✅ Prepare data for submission
    const getSubmissionData = () => {
        if (!isEditMode || !originalJobData) {
            // Create mode - return complete jobData
            console.log('Create mode - sending full data:', jobData);
            return jobData;
        }

        // Edit mode - return only changed fields
        const changedData: any = {};

        changedFields.forEach(fieldPath => {
            const value = getNestedValue(jobData, fieldPath);

            if (fieldPath.includes('.')) {
                const keys = fieldPath.split('.');
                let current = changedData;

                for (let i = 0; i < keys.length - 1; i++) {
                    if (!current[keys[i]]) current[keys[i]] = {};
                    current = current[keys[i]];
                }

                current[keys[keys.length - 1]] = value;
            } else {
                changedData[fieldPath] = value;
            }
        });

        console.log('Edit mode - sending changed data:', changedData);
        return changedData;
    };

    // ✅ Handle Form Submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            if (isEditMode) {
                // Update mode - send only changed fields
                if (changedFields.size === 0) {
                    alert('No changes to save!');
                    return;
                }

                const changedData = getSubmissionData();
                console.log('Updating job with changed data:', changedData);

                const response = await adminApi.patch(`/jobs/${job_id}`, changedData);

                if (response) {
                    alert('Job updated successfully!');
                    setChangedFields(new Set());
                    setOriginalJobData(jobData);
                    router.push('/jobs');
                }
            } else {
                // Create mode - send full data
                const fullData = getSubmissionData();
                console.log('Creating new job with full data:', fullData);

                const response = await adminApi.post('/jobs/', fullData);

                if (response) {
                    alert('Job created successfully!');
                    router.push('/jobs');
                }
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`Error ${isEditMode ? 'updating' : 'creating'} job`);
        } finally {
            setLoading(false);
        }
    };

    // ✅ Loading state for fetching job data
    if (fetchingJob) {
        return (
            <Structure>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 text-muted-foreground">Loading job details...</p>
                    </div>
                </div>
            </Structure>
        );
    }

    return (
        <Structure>
            <div className="mx-auto w-full max-w-6xl px-4 py-8 space-y-8">
                <Header
                    heading={isEditMode ? "Edit Job Posting" : "Create Job Posting"}
                    subheading={isEditMode
                        ? "Update job details and requirements"
                        : "Fill out the details to share your job with potential candidates"
                    }
                    description={isEditMode
                        ? `Editing: ${jobData.title || 'Job'}`
                        : "A well-written job post helps you reach and engage the right talent."
                    }
                    align="left"
                />

                {/* ✅ Show edit mode indicator */}
                {isEditMode && (
                    <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
                        <CardContent className="pt-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Edit className="w-4 h-4 text-blue-600" />
                                    <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                                        Edit Mode Active
                                    </span>
                                </div>
                                <Badge variant="secondary">
                                    {changedFields.size} field{changedFields.size !== 1 ? 's' : ''} changed
                                </Badge>
                            </div>
                            {changedFields.size > 0 && (
                                <p className="text-xs text-blue-700 dark:text-blue-300 mt-2">
                                    Only changed fields will be updated when you save.
                                </p>
                            )}
                        </CardContent>
                    </Card>
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

                    {/* ✅ Skills & Benefits */}
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
                                    {isEditMode ? (
                                        <>
                                            <Save className="w-5 h-5" />
                                            Update Job ({changedFields.size} changes)
                                        </>
                                    ) : (
                                        <>
                                            <Briefcase className="w-5 h-5" />
                                            Create Job
                                        </>
                                    )}
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
