'use client';
import React, { useState, useMemo } from 'react';
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



// Job data interface with icon field
interface JobData {
    job_id: string;
    name: string;
    icon: string; // Icon name as string
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

const CreateJobPage = () => {
    const [jobData, setJobData] = useState<JobData>({
        job_id: '',
        name: '',
        icon: 'Briefcase', // Default icon
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
    });

    const [loading, setLoading] = useState(false);
    const [iconOpen, setIconOpen] = useState(false);

    // Handle input changes
    const handleInputChange = (field: string, value: string | number) => {
        setJobData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    // Handle nested object changes
    const handleNestedChange = (section: string, field: string, value: string | number) => {
        setJobData(prev => ({
            ...prev,
            [section]: {
                ...((prev[section as keyof JobData] as object) || {}),
                [field]: value
            }
        }));
    };

    // Handle array changes
    const handleArrayChange = (field: string, values: string[]) => {
        setJobData(prev => ({
            ...prev,
            [field]: values
        }));
    };

    // Add item to array
    const addArrayItem = (field: string, value: string) => {
        if (value.trim()) {
            const currentArray = jobData[field as keyof JobData] as string[];
            handleArrayChange(field, [...currentArray, value.trim()]);
        }
    };

    // Remove item from array
    const removeArrayItem = (field: string, index: number) => {
        const currentArray = jobData[field as keyof JobData] as string[];
        handleArrayChange(field, currentArray.filter((_, i) => i !== index));
    };

    // Helper function to get nested array data
    const getArrayData = (field: string): string[] => {
        if (field.includes('.')) {
            const [section, subField] = field.split('.');
            const sectionData = jobData[section as keyof JobData] as any;
            return sectionData[subField] || [];
        }
        return jobData[field as keyof JobData] as string[] || [];
    };

    // Helper function to add nested array item
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
                addArrayItem(field, value);
            }
        }
    };

    // Helper function to remove nested array item
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
            removeArrayItem(field, index);
        }
    };

    // Get current selected icon component
    const getCurrentIcon = () => {
        return AVAILABLE_ICONS[jobData.icon as keyof typeof AVAILABLE_ICONS] || Briefcase;
    };

    // Section title component
    const SectionTitle = ({ icon: Icon, children }: { icon: any; children: React.ReactNode }) => (
        <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
            <Icon className="w-6 h-6" />
            {children}
        </CardTitle>
    );

    // Icon selector component
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
                <Label className="text-sm font-medium">Job Icon</Label>
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
                                                    handleInputChange('icon', iconName);
                                                    setIconOpen(false);
                                                    setSearchTerm('');
                                                }}
                                                className="flex items-center gap-2 cursor-pointer"
                                            >
                                                <IconComponent className="w-4 h-4" />
                                                <span>{iconName}</span>
                                                <Check
                                                    className={`ml-auto h-4 w-4 ${
                                                        jobData.icon === iconName ? "opacity-100" : "opacity-0"
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

    // Array input component
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

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const data = await adminApi.post('/jobs/', jobData);
            if (data) {
                alert('Job created successfully!');
                // Reset form or redirect
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating job');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Structure>
            <div className="mx-auto w-full max-w-6xl px-4 py-8 space-y-8">
                <Header
                    heading="Create New Job"
                    subheading="Fill in the details below to create a comprehensive job posting"
                    description="Make sure to provide clear job requirements, responsibilities, and qualifications so applicants understand the role fully."
                    align="left"
                />

                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Basic Information */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={Briefcase}>Basic Information</SectionTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="job_id" className="text-sm font-medium">Job ID *</Label>
                                    <Input
                                        id="job_id"
                                        value={jobData.job_id}
                                        onChange={(e) => handleInputChange('job_id', e.target.value)}
                                        placeholder="e.g., social-media-manager"
                                        className="w-full"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium">Department/Brand *</Label>
                                    <Input
                                        id="name"
                                        value={jobData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                        placeholder="e.g., Instagram"
                                        className="w-full"
                                        required
                                    />
                                </div>
                                
                                {/* Icon Selector */}
                                <IconSelector />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="title" className="text-sm font-medium">Job Title *</Label>
                                <Input
                                    id="title"
                                    value={jobData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    placeholder="e.g., Social Media Manager"
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="description" className="text-sm font-medium">Short Description *</Label>
                                <Textarea
                                    id="description"
                                    value={jobData.description}
                                    onChange={(e) => handleInputChange('description', e.target.value)}
                                    placeholder="Brief, engaging job summary..."
                                    rows={3}
                                    className="w-full resize-y"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="detailedDescription" className="text-sm font-medium">Detailed Description *</Label>
                                <Textarea
                                    id="detailedDescription"
                                    value={jobData.detailedDescription}
                                    onChange={(e) => handleInputChange('detailedDescription', e.target.value)}
                                    placeholder="Comprehensive job overview with key responsibilities and what makes this role exciting..."
                                    rows={6}
                                    className="w-full resize-y"
                                    required
                                />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Job Details */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={MapPin}>Job Details</SectionTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Job Type *</Label>
                                    <Select
                                        value={jobData.type}
                                        onValueChange={(value) => handleInputChange('type', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Full-time">Full-time</SelectItem>
                                            <SelectItem value="Part-time">Part-time</SelectItem>
                                            <SelectItem value="Contract">Contract</SelectItem>
                                            <SelectItem value="Internship">Internship</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="location" className="text-sm font-medium">Location *</Label>
                                    <Input
                                        id="location"
                                        value={jobData.location}
                                        onChange={(e) => handleInputChange('location', e.target.value)}
                                        placeholder="Remote / Hybrid / On-site"
                                        className="w-full"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="department" className="text-sm font-medium">Department *</Label>
                                    <Input
                                        id="department"
                                        value={jobData.department}
                                        onChange={(e) => handleInputChange('department', e.target.value)}
                                        placeholder="e.g., Marketing"
                                        className="w-full"
                                        required
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Salary Information */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={DollarSign}>Salary Information</SectionTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="salaryMin" className="text-sm font-medium">Minimum Salary *</Label>
                                    <Input
                                        id="salaryMin"
                                        type="number"
                                        value={jobData.salary.min || ''}
                                        onChange={(e) => handleNestedChange('salary', 'min', parseInt(e.target.value) || 0)}
                                        placeholder="40000"
                                        className="w-full"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="salaryMax" className="text-sm font-medium">Maximum Salary *</Label>
                                    <Input
                                        id="salaryMax"
                                        type="number"
                                        value={jobData.salary.max || ''}
                                        onChange={(e) => handleNestedChange('salary', 'max', parseInt(e.target.value) || 0)}
                                        placeholder="60000"
                                        className="w-full"
                                        required
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Currency</Label>
                                    <Select
                                        value={jobData.salary.currency}
                                        onValueChange={(value) => handleNestedChange('salary', 'currency', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USD">USD ($)</SelectItem>
                                            <SelectItem value="INR">INR (₹)</SelectItem>
                                            <SelectItem value="EUR">EUR (€)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Period</Label>
                                    <Select
                                        value={jobData.salary.period}
                                        onValueChange={(value) => handleNestedChange('salary', 'period', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="annually">Annually</SelectItem>
                                            <SelectItem value="monthly">Monthly</SelectItem>
                                            <SelectItem value="hourly">Hourly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Experience & Education */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={GraduationCap}>Experience & Education</SectionTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-medium">Experience Level</Label>
                                    <Select
                                        value={jobData.experience.level}
                                        onValueChange={(value) => handleNestedChange('experience', 'level', value)}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select level" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="Entry-level">Entry-level</SelectItem>
                                            <SelectItem value="Mid-level">Mid-level</SelectItem>
                                            <SelectItem value="Senior-level">Senior-level</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="yearsRequired" className="text-sm font-medium">Years Required</Label>
                                    <Input
                                        id="yearsRequired"
                                        value={jobData.experience.yearsRequired}
                                        onChange={(e) => handleNestedChange('experience', 'yearsRequired', e.target.value)}
                                        placeholder="e.g., 2-4 years"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <ArrayInput
                                field="experience.specificExperience"
                                label="Specific Experience Requirements"
                                placeholder="Add specific experience requirement"
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="degree" className="text-sm font-medium">Required Degree</Label>
                                    <Input
                                        id="degree"
                                        value={jobData.education.degree}
                                        onChange={(e) => handleNestedChange('education', 'degree', e.target.value)}
                                        placeholder="e.g., Bachelor's degree"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="alternatives" className="text-sm font-medium">Education Alternatives</Label>
                                    <Input
                                        id="alternatives"
                                        value={jobData.education.alternatives}
                                        onChange={(e) => handleNestedChange('education', 'alternatives', e.target.value)}
                                        placeholder="Equivalent experience or certifications"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <ArrayInput
                                field="education.fields"
                                label="Relevant Education Fields"
                                placeholder="Add relevant education field"
                            />
                        </CardContent>
                    </Card>

                    {/* Skills & Requirements + Benefits & Growth */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="shadow-sm">
                            <CardHeader className="pb-4">
                                <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
                                    <Award className="w-6 h-6" />
                                    Skills & Requirements
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <ArrayInput
                                    field="responsibilities"
                                    label="Key Responsibilities"
                                    placeholder="Add job responsibility"
                                />
                                <ArrayInput
                                    field="requiredSkills"
                                    label="Required Skills"
                                    placeholder="Add required skill"
                                />
                                <ArrayInput
                                    field="technicalSkills"
                                    label="Technical Skills"
                                    placeholder="Add technical skill"
                                />
                                <ArrayInput
                                    field="qualifications"
                                    label="Additional Qualifications"
                                    placeholder="Add qualification"
                                />
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
                                <ArrayInput
                                    field="benefits"
                                    label="Employee Benefits"
                                    placeholder="Add benefit"
                                />
                                <ArrayInput
                                    field="perks"
                                    label="Company Perks"
                                    placeholder="Add perk"
                                />
                                <ArrayInput
                                    field="growthOpportunities"
                                    label="Growth Opportunities"
                                    placeholder="Add growth opportunity"
                                />
                                <ArrayInput
                                    field="challenges"
                                    label="Key Challenges"
                                    placeholder="Add challenge"
                                />
                            </CardContent>
                        </Card>
                    </div>

                    {/* Work Environment */}
                    <Card className="shadow-sm">
                        <CardHeader className="pb-4">
                            <SectionTitle icon={Users}>Work Environment</SectionTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="culture" className="text-sm font-medium">Company Culture</Label>
                                    <Input
                                        id="culture"
                                        value={jobData.workEnvironment.culture}
                                        onChange={(e) => handleNestedChange('workEnvironment', 'culture', e.target.value)}
                                        placeholder="e.g., Creative, collaborative, fast-paced"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="teamSize" className="text-sm font-medium">Team Size</Label>
                                    <Input
                                        id="teamSize"
                                        value={jobData.workEnvironment.teamSize}
                                        onChange={(e) => handleNestedChange('workEnvironment', 'teamSize', e.target.value)}
                                        placeholder="e.g., 5-8 members"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reportingTo" className="text-sm font-medium">Reports To</Label>
                                    <Input
                                        id="reportingTo"
                                        value={jobData.workEnvironment.reportingTo}
                                        onChange={(e) => handleNestedChange('workEnvironment', 'reportingTo', e.target.value)}
                                        placeholder="e.g., Marketing Director"
                                        className="w-full"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="workStyle" className="text-sm font-medium">Work Style</Label>
                                    <Input
                                        id="workStyle"
                                        value={jobData.workEnvironment.workStyle}
                                        onChange={(e) => handleNestedChange('workEnvironment', 'workStyle', e.target.value)}
                                        placeholder="e.g., Hybrid with flexible hours"
                                        className="w-full"
                                    />
                                </div>
                            </div>

                            <ArrayInput
                                field="workEnvironment.collaboratesWith"
                                label="Collaborates With"
                                placeholder="Add team or department"
                            />
                        </CardContent>
                    </Card>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8 border-t border-border">
                        <Button
                            type="submit"
                            disabled={loading}
                            size="lg"
                            className="px-16 py-4 text-lg font-semibold"
                        >
                            {loading ? (
                                <div className="flex items-center gap-3">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    Creating Job...
                                </div>
                            ) : (
                                <div className="flex items-center gap-2">
                                    <Briefcase className="w-5 h-5" />
                                    Create Job
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
